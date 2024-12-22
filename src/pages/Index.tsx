import { ChildProfile } from "@/components/ChildProfile";
import { ActivityLog } from "@/components/ActivityLog";
import { AlertsOverview } from "@/components/AlertsOverview";
import { Shield, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
              
              {/* AI Protection Information */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Brain className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle>AI-Powered Protection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Predator Detection</h3>
                        <p className="text-sm text-muted-foreground">
                          Our AI constantly analyzes conversations to identify potential predatory behavior, suspicious patterns, and grooming attempts.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Anti-Bullying System</h3>
                        <p className="text-sm text-muted-foreground">
                          Advanced language processing detects signs of cyberbullying, hate speech, and harmful content in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-center text-muted-foreground">
                      Our AI system processes over 1 million messages daily with 99.9% accuracy in threat detection
                    </p>
                  </div>
                </CardContent>
              </Card>
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