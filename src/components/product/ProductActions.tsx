import { Button } from '../ui/button';

interface ProductActionsProps {
  onPurchase: () => void;
  onViewDetails: () => void;
}

const ProductActions = ({ onPurchase, onViewDetails }: ProductActionsProps) => {
  return (
    <div className="space-y-2">
      <Button 
        className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
        onClick={onPurchase}
      >
        Purchase
      </Button>
      <Button 
        variant="outline"
        className="w-full border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB]/10"
        onClick={onViewDetails}
      >
        View Details
      </Button>
    </div>
  );
};

export default ProductActions;