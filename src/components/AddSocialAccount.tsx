import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface SocialAccount {
  platform: "instagram" | "tiktok";
  username: string;
}

interface AddSocialAccountProps {
  onAddSocial: (social: SocialAccount) => void;
}

export const AddSocialAccount = ({ onAddSocial }: AddSocialAccountProps) => {
  const [platform, setPlatform] = useState<"instagram" | "tiktok">("instagram");
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error("Please enter a username");
      return;
    }
    onAddSocial({ platform, username });
    setUsername("");
    toast.success("Social account added");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Select value={platform} onValueChange={(value: "instagram" | "tiktok") => setPlatform(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="instagram">Instagram</SelectItem>
          <SelectItem value="tiktok">TikTok</SelectItem>
        </SelectContent>
      </Select>
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="max-w-xs"
      />
      <Button type="submit">Add Account</Button>
    </form>
  );
};