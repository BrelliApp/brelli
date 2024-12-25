import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon, MessageSquare, AlertTriangle, Users } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
}

const MetricCard = ({ title, value, icon, description }: MetricCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export const FlaggedContent = () => {
  const metrics = [
    {
      title: "Flagged Images",
      value: 24,
      icon: <ImageIcon className="h-4 w-4 text-warning" />,
      description: "Potentially inappropriate images detected this week"
    },
    {
      title: "Inappropriate Language",
      value: 156,
      icon: <MessageSquare className="h-4 w-4 text-destructive" />,
      description: "Instances of concerning language detected"
    },
    {
      title: "Meeting Requests",
      value: 3,
      icon: <Users className="h-4 w-4 text-orange-500" />,
      description: "Suspicious meeting requests flagged"
    },
    {
      title: "Risk Alerts",
      value: 12,
      icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
      description: "High-priority safety concerns identified"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
};