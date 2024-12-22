import { MessageSquare, UserPlus, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  id: number;
  type: "message" | "friend_request" | "alert";
  content: string;
  timestamp: string;
  platform: string;
}

interface ActivityLogProps {
  activities: Activity[];
}

export const ActivityLog = ({ activities }: ActivityLogProps) => {
  const getIcon = (type: Activity["type"]) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-4 w-4" />;
      case "friend_request":
        return <UserPlus className="h-4 w-4" />;
      case "alert":
        return <ShieldAlert className="h-4 w-4 text-warning-foreground" />;
    }
  };

  const getActivityClass = (type: Activity["type"]) => {
    switch (type) {
      case "alert":
        return "bg-warning";
      case "message":
        return "bg-primary";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`p-4 rounded-lg flex items-start gap-3 ${getActivityClass(
                activity.type
              )}`}
            >
              {getIcon(activity.type)}
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.content}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">{activity.platform}</span>
                  <span className="text-xs text-gray-500">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};