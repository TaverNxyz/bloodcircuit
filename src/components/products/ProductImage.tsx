import { Play } from 'lucide-react';
import { Button } from '../ui/button';

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  'https://images.unsplash.com/photo-1518770660439-4636190af475',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
];

interface ProductImageProps {
  imageUrl?: string;
  productName: string;
  videoUrl?: string;
  onPlayClick: () => void;
}

const ProductImage = ({ imageUrl, productName, videoUrl, onPlayClick }: ProductImageProps) => {
  const getFallbackImage = () => {
    const index = Math.floor(Math.random() * FALLBACK_IMAGES.length);
    return `${FALLBACK_IMAGES[index]}?auto=format&fit=crop&w=800&q=80`;
  };

  return (
    <>
      <div className="w-full h-full bg-card">
        <img 
          src={imageUrl || getFallbackImage()}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getFallbackImage();
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      {videoUrl && (
        <Button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75"
          size="icon"
          variant="ghost"
          onClick={onPlayClick}
        >
          <Play className="h-6 w-6" />
        </Button>
      )}
    </>
  );
};

export default ProductImage;