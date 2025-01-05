import { Button } from '../ui/button';

interface StatusCardProps {
  name: string;
  description: string;
}

const StatusCard = ({ name, description }: StatusCardProps) => {
  return (
    <div className="p-6 space-y-4">
      <h3 className="text-2xl font-bold text-[#1EAEDB] mb-2">{name}</h3>
      <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
      
      <div className="flex flex-col gap-4">
        <Button 
          className="w-full bg-[#F97316] hover:bg-[#F97316]/80 text-white"
          onClick={() => window.open('https://exodus.fun/status', '_blank')}
        >
          Check Exo Status
        </Button>
        <Button 
          className="w-full bg-[#9b87f5] hover:bg-[#9b87f5]/80 text-white"
          onClick={() => window.open('https://undetect.net/status', '_blank')}
        >
          Check UDP Status
        </Button>
      </div>
    </div>
  );
};

export default StatusCard;