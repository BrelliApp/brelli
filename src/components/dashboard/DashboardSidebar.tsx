import { useNavigate } from "react-router-dom";
import { LogOut, Plus, Settings, LayoutDashboard, Award } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AddChildForm } from "../AddChildForm";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  onAddChild?: (name: string, age: number) => Promise<void>;
  isAddChildOpen?: boolean;
  setIsAddChildOpen?: (open: boolean) => void;
}

export function DashboardSidebar({ 
  onAddChild, 
  isAddChildOpen, 
  setIsAddChildOpen 
}: DashboardSidebarProps) {
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
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/dashboard")}
                  tooltip="Dashboard"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/achievements")}
                  tooltip="Achievements"
                >
                  <Award className="h-4 w-4" />
                  <span>Achievements</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={() => navigate("/settings")}
                  tooltip="Settings"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {onAddChild && setIsAddChildOpen && (
                <SidebarMenuItem>
                  <Dialog open={isAddChildOpen} onOpenChange={setIsAddChildOpen}>
                    <SidebarMenuButton 
                      onClick={() => setIsAddChildOpen(true)}
                      tooltip="Add Child"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Child</span>
                    </SidebarMenuButton>
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
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  onClick={handleSignOut}
                  tooltip="Sign Out"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}