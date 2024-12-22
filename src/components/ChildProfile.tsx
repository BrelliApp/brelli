import { User, Instagram, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ChildProfileProps {
  name: string;
  age: number;
  socialAccounts: {
    instagram?: string;
    tiktok?: string;
  };
}

export const ChildProfile = ({ name, age, socialAccounts }: ChildProfileProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 bg-primary rounded-full">
          <User className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          <p className="text-sm text-gray-500">{age} years old</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mt-4">
          {socialAccounts.instagram && (
            <div className="flex items-center gap-2">
              <Instagram className="h-5 w-5" />
              <span className="text-sm">{socialAccounts.instagram}</span>
            </div>
          )}
          {socialAccounts.tiktok && (
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <span className="text-sm">{socialAccounts.tiktok}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};