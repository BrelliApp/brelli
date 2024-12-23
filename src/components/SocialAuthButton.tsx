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

  const storeSocialToken = async (socialAccountId: string, tokenData: any) => {
    try {
      const { error } = await supabase
        .from('social_tokens')
        .insert([{
          social_account_id: socialAccountId,
          access_token: tokenData.accessToken,
          refresh_token: tokenData.refreshToken,
          expires_at: tokenData.expiresAt ? new Date(tokenData.expiresAt).toISOString() : null
        }]);

      if (error) throw error;
    } catch (error: any) {
      console.error('Error storing social token:', error);
      throw new Error('Failed to store social media tokens');
    }
  };

  const handleAuth = async () => {
    setIsAuthenticating(true);
    try {
      // This is where we would integrate with the actual social media APIs
      toast.info(`Initiating ${platform} authentication...`);
      
      // Simulating auth for now with mock data
      const mockAuthData = {
        userId: "mock-id",
        accessToken: "mock-access-token-" + Date.now(),
        refreshToken: "mock-refresh-token-" + Date.now(),
        expiresAt: new Date(Date.now() + 3600000).toISOString() // 1 hour from now
      };

      // First call onAuth to create the social account
      await onAuth(platform, mockAuthData);
      
      // Get the latest social account to store the token
      const { data: socialAccounts, error: fetchError } = await supabase
        .from('social_accounts')
        .select('id')
        .order('created_at', { ascending: false })
        .limit(1);

      if (fetchError) throw fetchError;
      if (!socialAccounts || socialAccounts.length === 0) {
        throw new Error('Failed to retrieve social account');
      }

      // Store the tokens
      await storeSocialToken(socialAccounts[0].id, mockAuthData);

      setIsConsentOpen(false);
      toast.success(`Successfully connected to ${platform}`);
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