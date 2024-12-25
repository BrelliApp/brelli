import { User, Instagram, MessageSquare, Ghost, Youtube, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ChildProfileProps {
  name: string;
  age: number;
  socialAccounts: {
    instagram?: string;
    tiktok?: string;
    snapchat?: string;
    youtube?: string;
    twitter?: string;
  };
}

export const ChildProfile = ({ name, age, socialAccounts }: ChildProfileProps) => {
  const connectedAccounts = Object.keys(socialAccounts).filter(
    (platform) => socialAccounts[platform as keyof typeof socialAccounts]
  );

  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 bg-primary rounded-full">
          <User className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          <p className="text-sm text-gray-500">{age} years old</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            {connectedAccounts.length} connected {connectedAccounts.length === 1 ? 'account' : 'accounts'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mt-4">
          {socialAccounts.instagram && (
            <div className="flex items-center gap-2 bg-pink-50 px-3 py-2 rounded-full">
              <Instagram className="h-5 w-5 text-pink-600" />
              <span className="text-sm font-medium text-pink-700">{socialAccounts.instagram}</span>
            </div>
          )}
          {socialAccounts.tiktok && (
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
              <MessageSquare className="h-5 w-5 text-black" />
              <span className="text-sm font-medium text-gray-700">{socialAccounts.tiktok}</span>
            </div>
          )}
          {socialAccounts.snapchat && (
            <div className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-full">
              <Ghost className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-700">{socialAccounts.snapchat}</span>
            </div>
          )}
          {socialAccounts.youtube && (
            <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-full">
              <Youtube className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-red-700">{socialAccounts.youtube}</span>
            </div>
          )}
          {socialAccounts.twitter && (
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full">
              <Twitter className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-700">{socialAccounts.twitter}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};