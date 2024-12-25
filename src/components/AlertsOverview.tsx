import { Bell, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Alert {
  id: number;
  severity: "high" | "medium" | "low";
  message: string;
  timestamp: string;
}

interface AlertsOverviewProps {
  alerts: Alert[];
}

export const AlertsOverview = ({ alerts = mockAlerts }: AlertsOverviewProps) => {
  const getSeverityColor = (severity: Alert["severity"]) => {
    switch (severity) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "low":
        return "bg-success text-success-foreground";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Safety Alerts</CardTitle>
        {alerts.length === 0 ? (
          <div className="flex items-center gap-2 text-success-foreground">
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm">All Clear</span>
          </div>
        ) : (
          <Bell className="h-5 w-5 text-warning-foreground" />
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-3 rounded-lg ${getSeverityColor(alert.severity)}`}
            >
              <div className="flex justify-between items-start">
                <p className="text-sm">{alert.message}</p>
                <span className="text-xs opacity-70">{alert.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const mockAlerts: Alert[] = [
  {
    id: 1,
    severity: "high",
    message: "Detected attempt to share personal address in TikTok DM",
    timestamp: "2 minutes ago"
  },
  {
    id: 2,
    severity: "high",
    message: "Multiple friend requests from adult accounts on Instagram",
    timestamp: "15 minutes ago"
  },
  {
    id: 3,
    severity: "medium",
    message: "Unusual pattern of late-night messaging detected",
    timestamp: "1 hour ago"
  },
  {
    id: 4,
    severity: "medium",
    message: "Potentially inappropriate image shared in group chat",
    timestamp: "2 hours ago"
  },
  {
    id: 5,
    severity: "low",
    message: "Increased usage of flagged keywords in conversations",
    timestamp: "3 hours ago"
  }
];