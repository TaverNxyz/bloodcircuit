import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    features: string[];
  }
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="bg-[#0A0A0A] border-[#222] text-white hover:border-[#333] transition-colors">
      <CardHeader>
        <CardTitle className="text-[#33C3F0]">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4">{product.description}</p>
        <ul className="space-y-2 mb-4">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-300">• {feature}</li>
          ))}
        </ul>
        <p className="text-2xl font-bold mb-4">${product.price}</p>
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-[#1EAEDB] hover:bg-[#0FA0CE]"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            Details
          </Button>
          <Button 
            variant="outline" 
            className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#1EAEDB] hover:text-white"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;