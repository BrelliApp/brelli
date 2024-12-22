import { useState } from "react";
import { SocialAuthButton } from "./SocialAuthButton";
import { toast } from "sonner";

interface SocialAccount {
  platform: "instagram" | "tiktok" | "snapchat";
  username: string;
}

interface AddSocialAccountProps {
  onAddSocial: (social: SocialAccount) => void;
}

export const AddSocialAccount = ({ onAddSocial }: AddSocialAccountProps) => {
  const handleSocialAuth = (platform: string, authData: any) => {
    // Here we would normally validate the authData and get the username
    // For now, we'll simulate it
    const username = `user_${Math.random().toString(36).substr(2, 9)}`;
    onAddSocial({ 
      platform: platform as "instagram" | "tiktok" | "snapchat", 
      username 
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Connect Social Media Accounts</h3>
      <div className="flex flex-wrap gap-2">
        <SocialAuthButton platform="instagram" onAuth={handleSocialAuth} />
        <SocialAuthButton platform="tiktok" onAuth={handleSocialAuth} />
        <SocialAuthButton platform="snapchat" onAuth={handleSocialAuth} />
      </div>
    </div>
  );
};