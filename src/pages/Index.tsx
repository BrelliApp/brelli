import { ChildProfile } from "@/components/ChildProfile";
import { ActivityLog } from "@/components/ActivityLog";
import { AlertsOverview } from "@/components/AlertsOverview";

// Mock data - in a real app this would come from an API
const mockChild = {
  name: "Sarah Johnson",
  age: 14,
  socialAccounts: {
    instagram: "@sarah.j",
    tiktok: "@sarahj_2024",
  },
};

const mockActivities = [
  {
    id: 1,
    type: "friend_request" as const,
    content: "New friend request from @unknown_user",
    timestamp: "2 minutes ago",
    platform: "Instagram",
  },
  {
    id: 2,
    type: "message" as const,
    content: "New message in group chat 'School Friends'",
    timestamp: "15 minutes ago",
    platform: "Snapchat",
  },
  {
    id: 3,
    type: "alert" as const,
    content: "Unusual activity detected - Multiple messages from unknown account",
    timestamp: "1 hour ago",
    platform: "TikTok",
  },
];

const mockAlerts = [
  {
    id: 1,
    severity: "medium" as const,
    message: "Multiple friend requests from unknown accounts",
    timestamp: "2h ago",
  },
  {
    id: 2,
    severity: "low" as const,
    message: "Extended screen time detected",
    timestamp: "4h ago",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Parent Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="space-y-6">
              <ChildProfile {...mockChild} />
              <ActivityLog activities={mockActivities} />
            </div>
          </div>
          
          <div className="space-y-6">
            <AlertsOverview alerts={mockAlerts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;