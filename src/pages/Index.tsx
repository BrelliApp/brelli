import { useState } from "react";
import { toast } from "sonner";
import { ActivityLog } from "@/components/ActivityLog";
import { AlertsOverview } from "@/components/AlertsOverview";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Logo } from "@/components/shared/Logo";
import { ChildrenList } from "@/components/dashboard/ChildrenList";
import { FlaggedContent } from "@/components/dashboard/FlaggedContent";
import { WordCloud } from "@/components/dashboard/WordCloud";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

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

const Index = () => {
  const queryClient = useQueryClient();
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [isAddChildOpen, setIsAddChildOpen] = useState(false);

  const { data: children = [], isLoading: isLoadingChildren } = useQuery({
    queryKey: ['children'],
    queryFn: async () => {
      const { data: childrenData, error } = await supabase
        .from('children')
        .select(`
          id,
          name,
          age,
          social_accounts (
            id,
            platform,
            username
          )
        `);

      if (error) {
        toast.error("Failed to fetch children");
        throw error;
      }

      return childrenData.map(child => ({
        id: child.id,
        name: child.name,
        age: child.age,
        socialAccounts: child.social_accounts?.reduce((acc: any, account: any) => ({
          ...acc,
          [account.platform]: account.username
        }), {})
      }));
    }
  });

  const { data: activities = [], isLoading: isLoadingActivities } = useQuery({
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

  const handleAddChild = async (name: string, age: number) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("No authenticated user found");
      }

      const { data, error } = await supabase
        .from('children')
        .insert([{ 
          name, 
          age,
          parent_id: user.id 
        }])
        .select()
        .single();

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['children'] });
      setIsAddChildOpen(false);
      toast.success("Child added successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to add child");
    }
  };

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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar 
          onAddChild={handleAddChild}
          isAddChildOpen={isAddChildOpen}
          setIsAddChildOpen={setIsAddChildOpen}
        />
        
        <div className="flex-1 p-8">
          <div className="mb-8">
            <Logo className="h-12" linkClassName="-my-2" />
          </div>
          
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
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
