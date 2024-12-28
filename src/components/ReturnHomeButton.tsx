import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ReturnHomeButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed top-4 left-4 z-50 text-white hover:bg-white/10"
      onClick={() => navigate("/")}
    >
      <Home className="h-5 w-5" />
    </Button>
  );
};

export default ReturnHomeButton;