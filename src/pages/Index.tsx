import { useState } from "react";
import { toast } from "sonner";
import { ActivityLog } from "@/components/ActivityLog";
import { AlertsOverview } from "@/components/AlertsOverview";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ChildrenList } from "@/components/dashboard/ChildrenList";

const Index = () => {
  const queryClient = useQueryClient();
  const [selectedChild, setSelectedChild] = useState<string | null>(null);
  const [isAddChildOpen, setIsAddChildOpen] = useState(false);

  const { data: children = [], isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: async () => {
      const { data: childrenData, error } = await supabase
        .from('children')
        .select(`
          id,
          name,
          age,
          social_accounts (
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
      const { error } = await supabase
        .from('social_accounts')
        .insert([{
          child_id: selectedChild,
          platform: social.platform,
          username: social.username
        }]);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['children'] });
      toast.success(`${social.platform} account connected successfully`);
    } catch (error: any) {
      toast.error(error.message || "Failed to add social account");
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <DashboardHeader 
          onAddChild={handleAddChild}
          isAddChildOpen={isAddChildOpen}
          setIsAddChildOpen={setIsAddChildOpen}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ChildrenList 
              children={children}
              selectedChild={selectedChild}
              setSelectedChild={setSelectedChild}
              onAddSocial={handleAddSocial}
            />
            <ActivityLog activities={[]} />
          </div>
          
          <div className="space-y-6">
            <AlertsOverview alerts={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;