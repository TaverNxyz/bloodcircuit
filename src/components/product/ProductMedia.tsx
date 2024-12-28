import { Button } from "@/components/ui/button";
import VideoPlayer from './VideoPlayer';
import ProductMediaCarousel from './ProductMediaCarousel';

interface ProductMediaProps {
  media: string[];
  videoUrl?: string;
  showVideo: boolean;
  onShowVideo: (show: boolean) => void;
}

const ProductMedia = ({ media, videoUrl, showVideo, onShowVideo }: ProductMediaProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Product Media</h2>
      <ProductMediaCarousel images={media} />
      {videoUrl && (
        <>
          <Button 
            onClick={() => onShowVideo(true)}
            className="mx-auto block"
          >
            Watch Demo Video
          </Button>
          {showVideo && (
            <VideoPlayer
              videoUrl={videoUrl}
              onClose={() => onShowVideo(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductMedia;