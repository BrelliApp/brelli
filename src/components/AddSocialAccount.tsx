import { useState } from "react";
import { SocialAuthButton } from "./SocialAuthButton";
import { toast } from "sonner";

interface SocialAccount {
  platform: "instagram" | "snapchat" | "tiktok" | "youtube" | "twitter";
  username: string;
}

interface AddSocialAccountProps {
  onAddSocial: (social: SocialAccount) => Promise<void>;
}

export const AddSocialAccount = ({ onAddSocial }: AddSocialAccountProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSocialAuth = async (platform: string, authData: any) => {
    setIsSubmitting(true);
    try {
      await onAddSocial({ 
        platform: platform as "instagram" | "snapchat" | "tiktok" | "youtube" | "twitter", 
        username: authData.username
      });
    } catch (error) {
      // Error is handled in the parent component
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Connect Social Media Accounts</h3>
      <div className="flex flex-wrap gap-2">
        <SocialAuthButton platform="instagram" onAuth={handleSocialAuth} disabled={isSubmitting} />
        <SocialAuthButton platform="snapchat" onAuth={handleSocialAuth} disabled={isSubmitting} />
        <SocialAuthButton platform="tiktok" onAuth={handleSocialAuth} disabled={isSubmitting} />
        <SocialAuthButton platform="youtube" onAuth={handleSocialAuth} disabled={isSubmitting} />
        <SocialAuthButton platform="twitter" onAuth={handleSocialAuth} disabled={isSubmitting} />
      </div>
    </div>
  );
};