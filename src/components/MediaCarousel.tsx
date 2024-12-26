import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const banners = [
  { id: 1, title: 'Banner 1', videoUrl: 'https://streamable.com/lwokde' },
  
  { id: 2, title: 'Banner 2', videoUrl: 'https://streamable.com/yd3tbf' },
];

const MediaCarousel = () => {


  return (
      <div className="embla__container">
        {banners.map((banner) => (
          <div className="embla__slide" key={banner.id}>
            <iframe
              src={`${banner.videoUrl}?autoplay=1&muted=1`}
              allow="autoplay; fullscreen"
              frameBorder="1"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
  );
};

export default MediaCarousel;
