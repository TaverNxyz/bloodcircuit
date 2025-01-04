import { Card, CardContent } from "@/components/ui/card";
import ProductActions from "@/components/product/ProductActions";
import PricingButtons from "@/components/product/PricingButtons";

interface ProductContentProps {
  name: string;
  description: string;
  prices: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  onPurchase: (plan: 'daily' | 'weekly' | 'monthly') => void;
}

const ProductContent = ({ 
  name, 
  description, 
  prices
}: ProductContentProps) => {
  const handlePurchase = () => {
    window.open('https://checkout.plentifulpower.xyz/', '_blank');
  };

  return (
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      
      <div className="space-y-4">
        <PricingButtons 
          prices={prices}
          onSelect={() => handlePurchase()}
        />
        <ProductActions 
          onPurchase={handlePurchase}
        />
      </div>
    </CardContent>
  );
};

export default ProductContent;