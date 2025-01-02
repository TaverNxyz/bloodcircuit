import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface VouchHeaderProps {
  isAuthenticated: boolean;
}

export const VouchHeader = ({ isAuthenticated }: VouchHeaderProps) => {
  const { toast } = useToast();

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">+ or - Rep</h1>
        <p className="text-muted-foreground">
          See what our community has to say about us
        </p>
      </div>
      {isAuthenticated && (
        <Button
          onClick={() => {
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
  );
};