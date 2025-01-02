import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/auth/AuthProvider";
import { VouchHeader } from "@/components/vouch/VouchHeader";
import { VouchList } from "@/components/vouch/VouchList";
import { VouchSkeleton } from "@/components/vouch/VouchSkeleton";

interface Vouch {
  id: string;
  content: string;
  rating: number;
  created_at: string;
  profiles: {
    username: string;
    avatar_url: string;
  };
}

const Vouches = () => {
  const { toast } = useToast();
  const { user } = useAuth();

  const { data: vouches, isLoading } = useQuery({
    queryKey: ["vouches"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("vouches")
        .select(`
          *,
          profiles:profiles(username, avatar_url)
        `)
        .order("created_at", { ascending: false });

      if (error) {
        toast({
          title: "Error loading vouches",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      return data as Vouch[];
    },
  });

  if (isLoading) {
    return <VouchSkeleton />;
  }

  return (
    <div className="container mx-auto p-6">
      <VouchHeader isAuthenticated={!!user} />
      <VouchList vouches={vouches} />
    </div>
  );
};

export default Vouches;