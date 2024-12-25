import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface Child {
  id: string;
  name: string;
  age: number;
  socialAccounts: {
    instagram?: string;
    tiktok?: string;
    snapchat?: string;
  };
}

export const useChildren = () => {
  return useQuery({
    queryKey: ['children'],
    queryFn: async () => {
      const { data: childrenData, error } = await supabase
        .from('children')
        .select(`
          id,
          name,
          age,
          social_accounts (
            id,
            platform,
            username
          )
        `);

      if (error) {
        toast.error("Failed to fetch children");
        throw error;
      }

      if (!childrenData || childrenData.length === 0) {
        return [
          {
            id: "1",
            name: "Emma",
            age: 14,
            socialAccounts: {
              instagram: "emma.social",
              tiktok: "emma_dances",
              snapchat: "emma.snaps"
            }
          },
          {
            id: "2",
            name: "Lucas",
            age: 16,
            socialAccounts: {
              instagram: "lucas.gram",
              tiktok: "lucas_gaming"
            }
          }
        ];
      }

      return childrenData.map(child => ({
        id: child.id,
        name: child.name,
        age: child.age,
        socialAccounts: child.social_accounts?.reduce((acc, account) => {
          if (account.platform && account.username) {
            acc[account.platform] = account.username;
          }
          return acc;
        }, {} as Record<string, string>)
      }));
    }
  });
};