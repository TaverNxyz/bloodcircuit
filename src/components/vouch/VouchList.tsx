import { Card, CardContent } from "@/components/ui/card";
import { VouchCard } from "./VouchCard";
import type { VouchWithProfile } from "@/integrations/supabase/types";

interface VouchListProps {
  vouches: VouchWithProfile[] | undefined;
}

export const VouchList = ({ vouches }: VouchListProps) => {
  if (!vouches?.length) {
    return (
      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6 text-center text-gray-400">
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