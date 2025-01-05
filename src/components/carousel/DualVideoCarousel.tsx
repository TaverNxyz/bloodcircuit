import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const defaultVideos = [
  { id: 1, url: 'https://streamable.com/e/yd3tbf' },
  { id: 2, url: 'about:blank' }
];

const DualVideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = defaultVideos;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <Card className="relative w-full bg-[#0A0A0A]/80 border-[#222] hover:border-[#1EAEDB] transition-all duration-300">
      <div className="relative aspect-video">
        <iframe
          src={videos[currentIndex].url}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          frameBorder="0"
          title={`Video ${currentIndex + 1}`}
        />
        
        <Button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75"
          size="icon"
          variant="ghost"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75"
          size="icon"
          variant="ghost"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </Card>
  );
};

export default DualVideoCarousel;