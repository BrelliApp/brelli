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

interface SocialAuthButtonProps {
  platform: "instagram" | "tiktok" | "snapchat";
  onAuth: (platform: string, authData: any) => void;
}

export const SocialAuthButton = ({ platform, onAuth }: SocialAuthButtonProps) => {
  const [isConsentOpen, setIsConsentOpen] = useState(false);

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

  const handleAuth = async () => {
    // This is where we would integrate with the actual social media APIs
    toast.info(`Initiating ${platform} authentication...`);
    // Simulating auth for now
    setTimeout(() => {
      onAuth(platform, { userId: "mock-id", accessToken: "mock-token" });
      setIsConsentOpen(false);
      toast.success(`Successfully connected to ${platform}`);
    }, 1000);
  };

  return (
    <Dialog open={isConsentOpen} onOpenChange={setIsConsentOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`${getPlatformColor()} text-white border-none`}
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
          <Button variant="outline" onClick={() => setIsConsentOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleAuth}>
            Authorize Access
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};