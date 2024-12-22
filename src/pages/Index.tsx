import { useState } from "react";
import { toast } from "sonner";  // Import toast from sonner
import { Button } from "@/components/ui/button";  // Import Button from shadcn/ui
import { ChildProfile } from "@/components/ChildProfile";
import { ActivityLog } from "@/components/ActivityLog";
import { AlertsOverview } from "@/components/AlertsOverview";
import { AddChildForm } from "@/components/AddChildForm";
import { AddSocialAccount } from "@/components/AddSocialAccount";

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

  const handleAddChild = (name: string) => {
    setChildren([...children, { name, age: 0, socialAccounts: {} }]);
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
        <h1 className="text-3xl font-bold mb-8">Parent Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Add New Child</h2>
                <AddChildForm onAddChild={handleAddChild} />
              </div>

              {children.map((child, index) => (
                <div key={index} className="space-y-4">
                  <ChildProfile {...child} />
                  <Button
                    variant="outline"
                    onClick={() => setSelectedChild(index)}
                    className={selectedChild === index ? "ring-2 ring-primary" : ""}
                  >
                    Manage Social Accounts
                  </Button>
                  {selectedChild === index && (
                    <div className="bg-white p-6 rounded-lg shadow">
                      <h3 className="text-lg font-semibold mb-4">Add Social Account</h3>
                      <AddSocialAccount onAddSocial={handleAddSocial} />
                    </div>
                  )}
                </div>
              ))}

              <ActivityLog activities={[]} />
            </div>
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