import { Button } from '../ui/button';

interface ProductActionsProps {
  onPurchase: () => void;
}

const ProductActions = ({ onPurchase }: ProductActionsProps) => {
  return (
    <div className="space-y-2">
      <Button 
        onClick={() => window.open('https://plentipowered.mysellix.io/', '_blank')}
        className="w-full bg-red-600 hover:bg-red-700 text-white"
      >
        Purchase
      </Button>
    </div>
  );
};

export default ProductActions;