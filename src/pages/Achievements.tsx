import { useState } from "react";
import { Trophy } from "lucide-react";
import { useChildren } from "@/hooks/useChildren";
import { useAchievements } from "@/hooks/useAchievements";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Logo } from "@/components/shared/Logo";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AchievementsList } from "@/components/achievements/AchievementsList";
import { AddAchievementForm } from "@/components/achievements/AddAchievementForm";
import { Button } from "@/components/ui/button";

const Achievements = () => {
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [isAddAchievementOpen, setIsAddAchievementOpen] = useState(false);
  const { data: children = [], isLoading: isLoadingChildren } = useChildren();
  const { achievements, isLoading: isLoadingAchievements } = useAchievements(selectedChild || undefined);

  if (isLoadingChildren) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-blue-50 to-indigo-50">
        <DashboardSidebar />
        
        <div className="flex-1 p-8">
          <div className="mb-8">
            <Logo className="h-12" linkClassName="-my-2" />
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3">
                <Trophy className="h-8 w-8 text-yellow-500" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Achievements & Goals
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <select
                  className="px-4 py-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all"
                  value={selectedChild || ""}
                  onChange={(e) => setSelectedChild(e.target.value || null)}
                >
                  <option value="">Select a child</option>
                  {children.map((child) => (
                    <option key={child.id} value={child.id}>
                      {child.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedChild ? (
              <div className="space-y-6">
                <div className="flex justify-end">
                  <Button
                    onClick={() => setIsAddAchievementOpen(true)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Add New Achievement
                  </Button>
                </div>

                {isLoadingAchievements ? (
                  <div className="flex items-center justify-center p-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
                  </div>
                ) : (
                  <AchievementsList achievements={achievements} />
                )}

                <AddAchievementForm
                  childId={selectedChild}
                  open={isAddAchievementOpen}
                  onOpenChange={setIsAddAchievementOpen}
                />
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  Please select a child to view and manage their achievements
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Achievements;