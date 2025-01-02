import { Card, CardContent } from "@/components/ui/card";
import { VouchCard } from "./VouchCard";

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

interface VouchListProps {
  vouches: Vouch[] | undefined;
}

export const VouchList = ({ vouches }: VouchListProps) => {
  if (!vouches?.length) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          No vouches yet. Be the first to share your experience!
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6">
      {vouches.map((vouch) => (
        <VouchCard key={vouch.id} vouch={vouch} />
      ))}
    </div>
  );
};