import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductMediaProps {
  media: string[];
  videoUrl?: string;
  showVideo?: boolean;
  onShowVideo?: (show: boolean) => void;
}

const ProductMedia = ({ media, videoUrl, showVideo = false, onShowVideo }: ProductMediaProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Product Media</h2>
      
      {/* Images Carousel */}
      <div className="w-full max-w-4xl mx-auto">
        <AspectRatio ratio={16 / 9} className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden">
          {media.length > 0 ? (
            <img
              src={media[0]}
              alt="Product media"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-card">
              <p className="text-muted-foreground">No media available</p>
            </div>
          )}
        </AspectRatio>
      </div>

      {/* Video Section */}
      {videoUrl && (
        <div className="w-full max-w-4xl mx-auto">
          <AspectRatio ratio={16 / 9} className="bg-card/50 backdrop-blur-sm rounded-lg overflow-hidden">
            <iframe 
              src={videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              frameBorder="0"
            />
          </AspectRatio>
        </div>
      )}
    </div>
  );
};

export default ProductMedia;