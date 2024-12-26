import { useState } from "react";
import { useChildren } from "@/hooks/useChildren";
import { useAchievements } from "@/hooks/useAchievements";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Logo } from "@/components/shared/Logo";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AchievementsList } from "@/components/achievements/AchievementsList";
import { AddAchievementForm } from "@/components/achievements/AddAchievementForm";

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
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar />
        
        <div className="flex-1 p-8">
          <div className="mb-8">
            <Logo className="h-12" linkClassName="-my-2" />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Achievements</h1>
              <select
                className="px-4 py-2 border rounded-md"
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

            {selectedChild ? (
              <div className="space-y-6">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsAddAchievementOpen(true)}
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Add Achievement
                  </button>
                </div>

                {isLoadingAchievements ? (
                  <div>Loading achievements...</div>
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
              <div className="text-center py-12 text-gray-500">
                Please select a child to view and manage their achievements
              </div>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Achievements;