import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { FlaggedContent } from "./FlaggedContent";
import { ChildrenList } from "./ChildrenList";
import { ActivityLog } from "../ActivityLog";
import { AlertsOverview } from "../AlertsOverview";
import { WordCloud } from "./WordCloud";
import { useChildren } from "@/hooks/useChildren";
import { useActivities } from "@/hooks/useActivities";

const mockAlerts = [
  {
    id: 1,
    severity: "high" as const,
    message: "Detected attempt to share personal address in TikTok DM",
    timestamp: "2 minutes ago"
  },
  {
    id: 2,
    severity: "high" as const,
    message: "Multiple friend requests from adult accounts on Instagram",
    timestamp: "15 minutes ago"
  },
  {
    id: 3,
    severity: "medium" as const,
    message: "Unusual pattern of late-night messaging detected",
    timestamp: "1 hour ago"
  },
  {
    id: 4,
    severity: "medium" as const,
    message: "Potentially inappropriate image shared in group chat",
    timestamp: "2 hours ago"
  },
  {
    id: 5,
    severity: "low" as const,
    message: "Increased usage of flagged keywords in conversations",
    timestamp: "3 hours ago"
  }
];

export const DashboardContent = () => {
  const queryClient = useQueryClient();
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const { data: children = [], isLoading: isLoadingChildren } = useChildren();
  const { data: activities = [] } = useActivities(selectedChild);

  const handleAddSocial = async (social: { platform: "instagram" | "tiktok" | "snapchat"; username: string }) => {
    if (!selectedChild) {
      toast.error("Please select a child first");
      return;
    }

    try {
      const { error: accountError } = await supabase
        .from('social_accounts')
        .insert([{
          child_id: selectedChild,
          platform: social.platform,
          username: social.username
        }]);

      if (accountError) throw accountError;

      if (social.platform === 'instagram') {
        const { error: fetchError } = await supabase.functions.invoke('fetch-instagram-activity', {
          body: { socialAccountId: selectedChild }
        });

        if (fetchError) {
          console.error('Error fetching Instagram activity:', fetchError);
          toast.error('Connected account but failed to fetch initial activities');
          return;
        }
      }

      queryClient.invalidateQueries({ queryKey: ['children'] });
      queryClient.invalidateQueries({ queryKey: ['activities'] });
      toast.success(`${social.platform} account connected successfully`);
    } catch (error: any) {
      toast.error(error.message || "Failed to add social account");
    }
  };

  if (isLoadingChildren) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <FlaggedContent />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ChildrenList 
            children={children}
            selectedChild={selectedChild}
            setSelectedChild={setSelectedChild}
            onAddSocial={handleAddSocial}
          />
          <ActivityLog activities={activities} />
        </div>
        
        <div className="space-y-6">
          <AlertsOverview alerts={mockAlerts} />
          <WordCloud />
        </div>
      </div>
    </div>
  );
};