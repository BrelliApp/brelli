import { Button } from "@/components/ui/button";
import { Instagram, MessageSquare, Ghost } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface SocialAuthButtonProps {
  platform: "instagram" | "tiktok" | "snapchat";
  onAuth: (platform: string, authData: any) => void;
  disabled?: boolean;
}

export const SocialAuthButton = ({ platform, onAuth, disabled }: SocialAuthButtonProps) => {
  const [isConsentOpen, setIsConsentOpen] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const getPlatformIcon = () => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4 mr-2" />;
      case "tiktok":
        return <MessageSquare className="h-4 w-4 mr-2" />;
      case "snapchat":
        return <Ghost className="h-4 w-4 mr-2" />;
    }
  };

  const getPlatformColor = () => {
    switch (platform) {
      case "instagram":
        return "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600";
      case "tiktok":
        return "bg-black hover:bg-gray-800";
      case "snapchat":
        return "bg-yellow-400 hover:bg-yellow-500 text-black";
    }
  };

  const getOAuthUrl = async (platform: string) => {
    const { data: { url }, error } = await supabase.functions.invoke('get-oauth-url', {
      body: { platform }
    });

    if (error) throw error;
    return url;
  };

  const handleAuth = async () => {
    setIsAuthenticating(true);
    try {
      const oauthUrl = await getOAuthUrl(platform);
      
      // Open OAuth popup
      const popup = window.open(oauthUrl, 'OAuth', 'width=600,height=800');
      
      // Listen for the OAuth callback
      window.addEventListener('message', async (event) => {
        if (event.data?.type === 'oauth_callback') {
          const { code } = event.data;
          
          // Exchange code for tokens
          const { data: tokens, error } = await supabase.functions.invoke('exchange-oauth-code', {
            body: { platform, code }
          });

          if (error) throw error;

          // Call onAuth with the token data
          await onAuth(platform, tokens);
          setIsConsentOpen(false);
          toast.success(`Successfully connected to ${platform}`);
          
          // Close the popup
          popup?.close();
        }
      }, { once: true });

    } catch (error: any) {
      console.error('Authentication error:', error);
      toast.error(`Failed to connect to ${platform}: ${error.message}`);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <Dialog open={isConsentOpen} onOpenChange={setIsConsentOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`${getPlatformColor()} text-white border-none`}
          disabled={disabled || isAuthenticating}
        >
          {getPlatformIcon()}
          Connect {platform.charAt(0).toUpperCase() + platform.slice(1)}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect {platform.charAt(0).toUpperCase() + platform.slice(1)} Account</DialogTitle>
          <DialogDescription>
            By connecting this account, you agree to allow monitoring of your child's social media activity.
            This includes access to:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Posts and comments</li>
              <li>Direct messages</li>
              <li>Following/follower lists</li>
              <li>Account activity</li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end space-x-2 mt-4">
          <Button 
            variant="outline" 
            onClick={() => setIsConsentOpen(false)}
            disabled={isAuthenticating}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleAuth}
            disabled={isAuthenticating}
          >
            {isAuthenticating ? 'Authorizing...' : 'Authorize Access'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};