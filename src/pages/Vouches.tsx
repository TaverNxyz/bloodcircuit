import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { Star, MessageSquare, User, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6 space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/3" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-20 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">+ or - Rep</h1>
          <p className="text-muted-foreground">
            See what our community has to say about us
          </p>
        </div>
        {user && (
          <Button
            onClick={() => {
              // TODO: Implement add vouch dialog in the next iteration
              toast({
                title: "Coming Soon",
                description: "The ability to add vouches will be available soon!",
              });
            }}
          >
            Add Vouch
          </Button>
        )}
      </div>

      <div className="grid gap-6">
        {vouches?.map((vouch) => (
          <Card key={vouch.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {vouch.profiles.avatar_url ? (
                      <img
                        src={vouch.profiles.avatar_url}
                        alt={vouch.profiles.username}
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <User className="h-6 w-6" />
                    )}
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {vouch.profiles.username}
                    </CardTitle>
                    <CardDescription>
                      {new Date(vouch.created_at).toLocaleDateString()}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(vouch.rating)}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-2">
                <MessageSquare className="h-5 w-5 mt-1 text-muted-foreground" />
                <p className="text-lg">{vouch.content}</p>
              </div>
              <div className="mt-4 flex items-center text-sm text-muted-foreground">
                <Check className="h-4 w-4 mr-1" />
                Verified Purchase
              </div>
            </CardContent>
          </Card>
        ))}

        {vouches?.length === 0 && (
          <Card>
            <CardContent className="p-6 text-center text-muted-foreground">
              No vouches yet. Be the first to share your experience!
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Vouches;