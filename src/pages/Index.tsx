import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ChildProfile } from "@/components/ChildProfile";
import { ActivityLog } from "@/components/ActivityLog";
import { AlertsOverview } from "@/components/AlertsOverview";
import { AddChildForm } from "@/components/AddChildForm";
import { AddSocialAccount } from "@/components/AddSocialAccount";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, ChevronUp, LogOut, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface Child {
  id: string;
  name: string;
  age: number;
  socialAccounts: {
    instagram?: string;
    tiktok?: string;
    snapchat?: string;
  };
}

const Index = () => {
  const navigate = useNavigate();
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

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  const handleAddChild = async (name: string, age: number) => {
    try {
      const { data, error } = await supabase
        .from('children')
        .insert([{ name, age }])
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
          <div className="flex items-center gap-4">
            <Dialog open={isAddChildOpen} onOpenChange={setIsAddChildOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Child
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add a New Child</DialogTitle>
                </DialogHeader>
                <AddChildForm 
                  onAddChild={handleAddChild} 
                  onCancel={() => setIsAddChildOpen(false)} 
                />
              </DialogContent>
            </Dialog>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {children.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Children</h2>
                <div className="space-y-6">
                  {children.map((child) => (
                    <div key={child.id} className="space-y-4">
                      <ChildProfile {...child} />
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button
                            variant={selectedChild === child.id ? "default" : "outline"}
                            onClick={() => setSelectedChild(child.id)}
                            className="w-full flex items-center justify-center gap-2"
                          >
                            Manage Social Accounts
                            {selectedChild === child.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="bg-gray-50 rounded-lg p-6 mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add Social Account</h3>
                            <AddSocialAccount onAddSocial={handleAddSocial} />
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
                <p className="text-gray-500">No children added yet. Click the "Add Child" button to get started.</p>
              </div>
            )}

            <ActivityLog
              activities={[]} // We'll implement this later
            />
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