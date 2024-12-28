import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import VideoPlayer from './product/VideoPlayer';
import ProductImage from './product/ProductImage';
import ProductContent from './product/ProductContent';
import StatusCard from './product/StatusCard';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    prices: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    description: string;
    features: string[];
    imageUrl?: string;
    videoUrl?: string;
  }
}

const ProductCard = memo(({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  if (product.id === "rust") {
    return (
      <Card className="relative overflow-hidden group bg-[#0A0A0A]/80 border-[#222] hover:border-[#1EAEDB] transition-all duration-300">
        <StatusCard 
          name={product.name}
          description={product.description}
        />
      </Card>
    );
  }

  const handlePurchase = (plan: 'daily' | 'weekly' | 'monthly') => {
    navigate(`/checkout/${product.id}?plan=${plan}`);
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card className="relative overflow-hidden group bg-[#0A0A0A]/80 border-[#222] hover:border-[#1EAEDB] transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        {product.videoUrl ? (
          <iframe 
            src={product.videoUrl}
            className="w-full h-full object-cover"
            allow="autoplay; fullscreen"
            frameBorder="0"
          />
        ) : (
          <ProductImage
            imageUrl={product.imageUrl}
            productName={product.name}
            videoUrl={product.videoUrl}
            onPlayClick={() => {}}
          />
        )}
      </div>
      
      <ProductContent
        name={product.name}
        description={product.description}
        prices={product.prices}
        onPurchase={handlePurchase}
        onViewDetails={handleViewDetails}
      />
    </Card>
  );
});

export default ProductCard;