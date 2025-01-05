import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

interface ProductHeroProps {
  title: string;
  description: string;
}

const ProductHero = ({ title, description }: ProductHeroProps) => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const handlePurchase = () => {
    if (productId === "rust") {
      // Status check product - open external links
      window.open('https://exodus.fun/status', '_blank');
    } else {
      // Regular products - go to checkout
      navigate(`/checkout/${productId}`);
    }
  };

  const handleDemo = () => {
    if (productId === "apex") {
      window.open('https://www.youtube.com/embed/YUvGjdWVCrw', '_blank');
    } else if (productId === "hwid") {
      window.open('https://www.youtube.com/embed/pBkpHgDdcps', '_blank');
    } else if (productId === "fortnite") {
      window.open('https://streamable.com/e/lwokde', '_blank');
    }
  };

  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-bold text-[#1EAEDB]">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex justify-center gap-4">
        <Button 
          className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
          onClick={handlePurchase}
        >
          {productId === "rust" ? "Check Status" : "Purchase Now"}
        </Button>
        {productId !== "rust" && (
          <Button 
            variant="outline" 
            className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/10"
            onClick={handleDemo}
          >
            Watch Demo
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductHero;