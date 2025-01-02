import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/auth/AuthProvider";
import { VouchHeader } from "@/components/vouch/VouchHeader";
import { VouchList } from "@/components/vouch/VouchList";
import { VouchSkeleton } from "@/components/vouch/VouchSkeleton";
import ReturnHomeButton from "@/components/ReturnHomeButton";

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
    return (
      <div className="min-h-screen bg-black">
        <ReturnHomeButton />
        <VouchSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <ReturnHomeButton />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <VouchHeader isAuthenticated={!!user} />
        <VouchList vouches={vouches} />
      </div>
    </div>
  );
};

export default Vouches;