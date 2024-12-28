import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/card';
import VideoPlayer from './product/VideoPlayer';
import ProductImage from './product/ProductImage';
import PricingButtons from './product/PricingButtons';

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

const ProductCard = ({ product }: ProductCardProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'daily' | 'weekly' | 'monthly'>('monthly');
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate(`/checkout/${product.id}?plan=${selectedPlan}`);
  };

  return (
    <Card className="relative overflow-hidden group bg-[#0A0A0A]/80 border-[#222] hover:border-[#1EAEDB] transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        {showVideo ? (
          <VideoPlayer 
            videoUrl={product.videoUrl!} 
            onClose={() => setShowVideo(false)} 
          />
        ) : (
          <ProductImage
            imageUrl={product.imageUrl}
            productName={product.name}
            videoUrl={product.videoUrl}
            onPlayClick={() => setShowVideo(true)}
          />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#1EAEDB] mb-2">{product.name}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{product.description}</p>
        
        <PricingButtons
          prices={product.prices}
          selectedPlan={selectedPlan}
          onPlanSelect={setSelectedPlan}
        />

        <Button 
          className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
          onClick={handlePurchase}
        >
          Purchase
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;