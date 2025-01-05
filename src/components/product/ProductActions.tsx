import { Button } from '../ui/button';

interface ProductActionsProps {
  onPurchase: () => void;
}

const ProductActions = ({ onPurchase }: ProductActionsProps) => {
  return (
    <div className="space-y-2">
      <Button 
        className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
        onClick={onPurchase}
      >
        Purchase
      </Button>
    </div>
  );
};

export default ProductActions;