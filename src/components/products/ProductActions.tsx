
import { Button } from '../ui/button';

interface ProductActionsProps {
  onPurchase: () => void;
}

const ProductActions = ({ onPurchase }: ProductActionsProps) => {
  return (
    <div className="space-y-2">
      <Button 
        onClick={() => window.open('https://escoesco.gumroad.com/?_gl=1*6gbr0i*_ga*ODEyMDgxMTM3LjE3Mzg5NzI4NTg.*_ga_6LJN6D94N6*MTczOTE4OTk2Ni4zLjEuMTczOTE5MjUyMy4wLjAuMA..&section=ZG3ymjQGG_rk9iv7_kDNvw%3D%3D', '_blank')}
        className="w-full bg-red-600 hover:bg-red-700 text-white"
      >
        Purchase
      </Button>
    </div>
  );
};

export default ProductActions;
