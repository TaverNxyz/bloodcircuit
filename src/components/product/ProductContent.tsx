import { useState } from 'react';
import PricingButtons from './PricingButtons';
import ProductActions from './ProductActions';

interface ProductContentProps {
  name: string;
  description: string;
  prices: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  onPurchase: (plan: 'daily' | 'weekly' | 'monthly') => void;
  onViewDetails: () => void;
}

const ProductContent = ({ 
  name, 
  description, 
  prices, 
  onPurchase, 
  onViewDetails 
}: ProductContentProps) => {
  const [selectedPlan, setSelectedPlan] = useState<'daily' | 'weekly' | 'monthly'>('monthly');

  const handlePurchase = () => {
    onPurchase(selectedPlan);
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#1EAEDB] mb-2">{name}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
      
      <PricingButtons
        prices={prices}
        selectedPlan={selectedPlan}
        onPlanSelect={setSelectedPlan}
      />

      <ProductActions
        onPurchase={handlePurchase}
        onViewDetails={onViewDetails}
      />
    </div>
  );
};

export default ProductContent;