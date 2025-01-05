import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProductHeroProps {
  title: string;
  description: string;
}

const ProductHero = ({ title, description }: ProductHeroProps) => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold text-[#1EAEDB]">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex justify-center gap-4">
        <Button 
          className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
          onClick={() => navigate('/checkout')}
        >
          Purchase Now
        </Button>
        <Button 
          variant="outline" 
          className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/10"
        >
          Watch Demo
        </Button>
      </div>
    </div>
  );
};

export default ProductHero;