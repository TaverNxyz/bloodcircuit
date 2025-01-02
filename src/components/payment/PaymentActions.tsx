import { Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface PaymentActionsProps {
  address: string;
  cryptoDetails: {
    name: string;
    explorer: string;
  };
}

const PaymentActions = ({ address, cryptoDetails }: PaymentActionsProps) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address copied",
      description: "The payment address has been copied to your clipboard"
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <Button 
        variant="outline" 
        onClick={handleCopy}
        className="w-full"
      >
        <Copy className="h-4 w-4 mr-2" />
        Copy Address
      </Button>
      
      <Button 
        variant="outline"
        asChild
        className="w-full"
      >
        <a 
          href={cryptoDetails.explorer}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          View on {cryptoDetails.name} Explorer
        </a>
      </Button>
    </div>
  );
};

export default PaymentActions;