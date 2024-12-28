import { X } from 'lucide-react';
import { Button } from '../ui/button';

interface VideoPlayerProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoPlayer = ({ videoUrl, onClose }: VideoPlayerProps) => {
  return (
    <div className="relative w-full h-full">
      <Button 
        className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/75"
        size="icon"
        variant="ghost"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>
      <iframe 
        src={`${videoUrl}?autoplay=1`}
        className="w-full h-full"
        allow="autoplay; fullscreen"
        frameBorder="0"
      />
    </div>
  );
};

export default VideoPlayer;