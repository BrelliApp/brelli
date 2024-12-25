import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LogOut, Plus, Settings } from "lucide-react";
import { AddChildForm } from "../AddChildForm";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Logo } from "../shared/Logo";

interface DashboardHeaderProps {
  onAddChild?: (name: string, age: number) => Promise<void>;
  isAddChildOpen?: boolean;
  setIsAddChildOpen?: (open: boolean) => void;
  title?: string;
  showAddChild?: boolean;
}

export const DashboardHeader = ({ 
  onAddChild, 
  isAddChildOpen, 
  setIsAddChildOpen,
  title = "Parent Dashboard",
  showAddChild = true
}: DashboardHeaderProps) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <Logo className="h-12" linkClassName="-my-2" />
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        {showAddChild && onAddChild && setIsAddChildOpen && (
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
                onAddChild={onAddChild} 
                onCancel={() => setIsAddChildOpen(false)} 
              />
            </DialogContent>
          </Dialog>
        )}
        
        {title !== "Settings" && (
          <Button 
            variant="outline"
            onClick={() => navigate("/settings")}
            className="flex items-center gap-2"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        )}

        {title === "Settings" && (
          <Button 
            variant="outline"
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2"
          >
            Back to Dashboard
          </Button>
        )}

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
  );
};