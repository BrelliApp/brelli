import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ChildSettings } from "@/components/settings/ChildSettings";
import { toast } from "sonner";

const Settings = () => {
  const queryClient = useQueryClient();
  const [selectedChild, setSelectedChild] = useState<string | null>(null);

  const { data: children = [], isLoading: isLoadingChildren } = useQuery({
    queryKey: ['children-with-settings'],
    queryFn: async () => {
      const { data: childrenData, error } = await supabase
        .from('children')
        .select(`
          id,
          name,
          age,
          child_settings (
            screen_time_limit_minutes,
            content_sensitivity,
            flag_inappropriate_language,
            flag_meeting_requests,
            flag_images,
            flag_links
          )
        `);

      if (error) {
        toast.error("Failed to fetch children settings");
        throw error;
      }

      return childrenData.map(child => ({
        id: child.id,
        name: child.name,
        age: child.age,
        settings: child.child_settings?.[0] || null
      }));
    }
  });

  if (isLoadingChildren) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <DashboardHeader 
          title="Settings"
          showAddChild={false}
        />
        
        <div className="space-y-8">
          {children.map(child => (
            <ChildSettings 
              key={child.id}
              child={child}
              isExpanded={selectedChild === child.id}
              onToggle={() => setSelectedChild(selectedChild === child.id ? null : child.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;