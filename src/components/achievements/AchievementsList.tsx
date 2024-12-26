import { Award, Calendar, Check } from "lucide-react";
import { format } from "date-fns";
import { useAchievements } from "@/hooks/useAchievements";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  id: string;
  title: string;
  description: string | null;
  target_date: string | null;
  completed: boolean;
}

interface AchievementsListProps {
  achievements: Achievement[];
}

export const AchievementsList = ({ achievements }: AchievementsListProps) => {
  const { updateAchievement } = useAchievements();

  const toggleComplete = (achievement: Achievement) => {
    updateAchievement.mutate({
      id: achievement.id,
      completed: !achievement.completed,
    });
  };

  if (achievements.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No achievements yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement) => (
        <Card key={achievement.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-full">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl font-semibold">
                {achievement.title}
              </CardTitle>
              {achievement.description && (
                <CardDescription>{achievement.description}</CardDescription>
              )}
            </div>
            <button
              onClick={() => toggleComplete(achievement)}
              className={`p-2 rounded-full transition-colors ${
                achievement.completed
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200"
              }`}
            >
              <Check className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent>
            {achievement.target_date && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>
                  Target: {format(new Date(achievement.target_date), "PPP")}
                </span>
              </div>
            )}
            <div className="mt-4">
              <Badge
                variant={achievement.completed ? "default" : "secondary"}
                className="text-xs"
              >
                {achievement.completed ? "Completed" : "In Progress"}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};