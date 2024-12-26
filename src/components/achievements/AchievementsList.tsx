import { Award, Calendar, Check, Star, Gift } from "lucide-react";
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
      <div className="text-center py-12">
        <Gift className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 text-lg">No achievements yet. Add one to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {achievements.map((achievement) => (
        <Card 
          key={achievement.id} 
          className={`group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
            achievement.completed ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-white'
          }`}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className={`p-3 rounded-full transition-colors ${
              achievement.completed 
                ? 'bg-green-100 text-green-600' 
                : 'bg-indigo-100 text-indigo-600'
            }`}>
              {achievement.completed ? (
                <Star className="h-6 w-6 animate-pulse" />
              ) : (
                <Award className="h-6 w-6" />
              )}
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl font-semibold group-hover:text-indigo-600 transition-colors">
                {achievement.title}
              </CardTitle>
              {achievement.description && (
                <CardDescription className="mt-1">
                  {achievement.description}
                </CardDescription>
              )}
            </div>
            <button
              onClick={() => toggleComplete(achievement)}
              className={`p-2 rounded-full transition-all duration-200 ${
                achievement.completed
                  ? 'bg-green-100 text-green-600 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              <Check className="h-5 w-5" />
            </button>
          </CardHeader>
          <CardContent>
            {achievement.target_date && (
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4" />
                <span>
                  Target: {format(new Date(achievement.target_date), "PPP")}
                </span>
              </div>
            )}
            <Badge
              variant={achievement.completed ? "default" : "secondary"}
              className={`text-xs transition-all duration-300 ${
                achievement.completed 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
              }`}
            >
              {achievement.completed ? "Completed! 🎉" : "In Progress"}
            </Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};