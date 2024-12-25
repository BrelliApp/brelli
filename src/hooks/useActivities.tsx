import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Activity {
  id: string;
  type: "message" | "friend_request" | "alert";
  content: string;
  timestamp: string;
  platform: string;
}

export const useActivities = (selectedChild: string | null) => {
  return useQuery({
    queryKey: ['activities', selectedChild],
    queryFn: async () => {
      if (!selectedChild) return [];

      const { data: socialAccounts } = await supabase
        .from('social_accounts')
        .select('id, platform')
        .eq('child_id', selectedChild);

      if (!socialAccounts?.length) return [];

      const { data: activities } = await supabase
        .from('activity_logs')
        .select('*')
        .in('social_account_id', socialAccounts.map(acc => acc.id))
        .order('created_at', { ascending: false });

      return activities?.map(activity => ({
        id: activity.id,
        type: activity.type as "message" | "friend_request" | "alert",
        content: activity.content,
        timestamp: new Date(activity.created_at).toLocaleString(),
        platform: activity.platform
      })) || [];
    },
    enabled: !!selectedChild
  });
};