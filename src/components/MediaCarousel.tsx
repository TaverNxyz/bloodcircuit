import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from './ui/button';

const videos = [
  { id: 1, url: 'https://streamable.com/lwokde' },
  { id: 2, url: 'https://streamable.com/yd3tbf' }
];

const MediaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative max-w-[1200px] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {videos.map((video) => (
            <div className="flex-[0_0_100%] min-w-0" key={video.id}>
              <div className="aspect-video">
                <iframe
                  src={`${video.url}?autoplay=0&muted=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        onClick={scrollPrev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75"
        size="icon"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75"
        size="icon"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default MediaCarousel;