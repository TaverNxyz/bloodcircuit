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
        asChild
      >
        <a 
          href="https://checkout.plentifulpower.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Purchase
        </a>
      </Button>
    </div>
  );
};

export default ProductActions;