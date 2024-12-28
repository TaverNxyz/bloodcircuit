import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductMediaCarouselProps {
  images: string[];
}

const ProductMediaCarousel = ({ images }: ProductMediaCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AspectRatio ratio={16 / 9} className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="relative w-full h-full">
          {images.length > 0 ? (
            <img
              src={images[currentIndex]}
              alt={`Product slide ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-card">
              <p className="text-muted-foreground">No media available</p>
            </div>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/75"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/75"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </AspectRatio>
    </div>
  );
};

export default ProductMediaCarousel;