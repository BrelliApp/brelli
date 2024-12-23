import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LogOut, Plus } from "lucide-react";
import { AddChildForm } from "../AddChildForm";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface DashboardHeaderProps {
  onAddChild: (name: string, age: number) => Promise<void>;
  isAddChildOpen: boolean;
  setIsAddChildOpen: (open: boolean) => void;
}

export const DashboardHeader = ({ onAddChild, isAddChildOpen, setIsAddChildOpen }: DashboardHeaderProps) => {
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
              onAddChild={onAddChild} 
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
  );
};