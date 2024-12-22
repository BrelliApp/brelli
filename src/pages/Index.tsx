import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ChildProfile } from "@/components/ChildProfile";
import { ActivityLog } from "@/components/ActivityLog";
import { AlertsOverview } from "@/components/AlertsOverview";
import { AddChildForm } from "@/components/AddChildForm";
import { AddSocialAccount } from "@/components/AddSocialAccount";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";

interface Child {
  name: string;
  age: number;
  socialAccounts: {
    instagram?: string;
    tiktok?: string;
  };
}

const Index = () => {
  const [children, setChildren] = useState<Child[]>([]);
  const [selectedChild, setSelectedChild] = useState<number | null>(null);
  const [isAddChildOpen, setIsAddChildOpen] = useState(false);

  const handleAddChild = (name: string, age: number) => {
    setChildren([...children, { name, age, socialAccounts: {} }]);
    setIsAddChildOpen(false);
  };

  const handleAddSocial = (social: { platform: "instagram" | "tiktok"; username: string }) => {
    if (selectedChild === null) {
      toast.error("Please select a child first");
      return;
    }

    setChildren(children.map((child, index) => {
      if (index === selectedChild) {
        return {
          ...child,
          socialAccounts: {
            ...child.socialAccounts,
            [social.platform]: social.username
          }
        };
      }
      return child;
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
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
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {children.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Children</h2>
                <div className="space-y-6">
                  {children.map((child, index) => (
                    <div key={index} className="space-y-4">
                      <ChildProfile {...child} />
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button
                            variant={selectedChild === index ? "default" : "outline"}
                            onClick={() => setSelectedChild(index)}
                            className="w-full flex items-center justify-center gap-2"
                          >
                            Manage Social Accounts
                            {selectedChild === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
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
              activities={[
                {
                  id: 1,
                  type: "alert",
                  content: "Suspicious activity detected on Instagram",
                  timestamp: "2 minutes ago",
                  platform: "Instagram"
                },
                {
                  id: 2,
                  type: "message",
                  content: "New direct message received",
                  timestamp: "5 minutes ago",
                  platform: "TikTok"
                }
              ]}
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