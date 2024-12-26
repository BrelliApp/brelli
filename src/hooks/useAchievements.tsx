import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Achievement {
  id: string;
  child_id: string;
  title: string;
  description: string | null;
  target_date: string | null;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

interface CreateAchievementData {
  child_id: string;
  title: string;
  description?: string;
  target_date?: string;
}

export const useAchievements = (childId?: string) => {
  const queryClient = useQueryClient();

  const { data: achievements = [], isLoading } = useQuery({
    queryKey: ['achievements', childId],
    queryFn: async () => {
      const query = supabase
        .from('achievements')
        .select('*')
        .order('created_at', { ascending: false });

      if (childId) {
        query.eq('child_id', childId);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Achievement[];
    },
    enabled: !!childId,
  });

  const createAchievement = useMutation({
    mutationFn: async (data: CreateAchievementData) => {
      const { error } = await supabase
        .from('achievements')
        .insert([data]);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['achievements'] });
      toast.success('Achievement created successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const updateAchievement = useMutation({
    mutationFn: async ({ id, ...data }: Partial<Achievement> & { id: string }) => {
      const { error } = await supabase
        .from('achievements')
        .update(data)
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['achievements'] });
      toast.success('Achievement updated successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const deleteAchievement = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('achievements')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['achievements'] });
      toast.success('Achievement deleted successfully');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return {
    achievements,
    isLoading,
    createAchievement,
    updateAchievement,
    deleteAchievement,
  };
};