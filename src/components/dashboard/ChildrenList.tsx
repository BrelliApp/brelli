import { ChildProfile } from "../ChildProfile";
import { AddSocialAccount } from "../AddSocialAccount";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

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

interface ChildrenListProps {
  children: Child[];
  selectedChild: string | null;
  setSelectedChild: (id: string) => void;
  onAddSocial: (social: { platform: "instagram" | "tiktok" | "snapchat"; username: string }) => Promise<void>;
}

export const ChildrenList = ({ children, selectedChild, setSelectedChild, onAddSocial }: ChildrenListProps) => {
  if (children.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
        <p className="text-gray-500">No children added yet. Click the "Add Child" button to get started.</p>
      </div>
    );
  }

  return (
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
                  <AddSocialAccount onAddSocial={onAddSocial} />
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
};