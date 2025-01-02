import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface VouchHeaderProps {
  isAuthenticated: boolean;
}

export const VouchHeader = ({ isAuthenticated }: VouchHeaderProps) => {
  const { toast } = useToast();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          + or - Rep
        </h1>
        <p className="text-gray-400 mt-2">
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
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          Add Vouch
        </Button>
      )}
    </div>
  );
};