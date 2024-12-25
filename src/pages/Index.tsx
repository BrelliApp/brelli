import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { Logo } from "@/components/shared/Logo";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  const queryClient = useQueryClient();
  const [isAddChildOpen, setIsAddChildOpen] = useState(false);

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
          
          <DashboardContent />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;