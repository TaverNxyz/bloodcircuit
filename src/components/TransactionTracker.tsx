import { useState, useEffect } from 'react';
import { Check, Clock, Copy, ExternalLink, Bitcoin, Coins } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { useToast } from '@/hooks/use-toast';
import { CRYPTO_DETAILS, CryptoType } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';

interface TransactionTrackerProps {
  address: string;
  amount: number;
  cryptoType: CryptoType;
}

const TransactionTracker = ({ address, amount, cryptoType }: TransactionTrackerProps) => {
  const [progress, setProgress] = useState(0);
  const [confirmations, setConfirmations] = useState(0);
  const [status, setStatus] = useState<'pending' | 'confirming' | 'completed'>('pending');
  const { toast } = useToast();

  // Get crypto details with fallback values
  const cryptoDetails = CRYPTO_DETAILS[cryptoType] || {
    name: cryptoType,
    confirmations: 3,
    explorer: 'https://blockchair.com',
    icon: <Bitcoin className="h-6 w-6" />
  };

  useEffect(() => {
    console.log('Setting up payment channel for address:', address);
    // Subscribe to payment status updates from Supabase
    const channel = supabase
      .channel('payment-updates')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'orders',
          filter: `address=eq.${address}`
        },
        (payload: any) => {
          console.log('Received payment update:', payload);
          if (payload.new.status === 'confirming') {
            setStatus('confirming');
            setConfirmations(payload.new.confirmations);
            setProgress(60);
          } else if (payload.new.status === 'completed') {
            setStatus('completed');
            setProgress(100);
          }
        }
      )
      .subscribe();

    return () => {
      console.log('Cleaning up payment channel');
      supabase.removeChannel(channel);
    };
  }, [address]);

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast({
      title: "Address copied",
      description: "The payment address has been copied to your clipboard"
    });
  };

  const getCryptoIcon = () => {
    if (typeof cryptoDetails.icon === 'string') {
      return <span className="text-2xl">{cryptoDetails.icon}</span>;
    }
    return <Coins className="h-6 w-6" />;
  };

  return (
    <div className="space-y-6 p-6 bg-[#0A0A0A] rounded-lg border border-[#222] animate-fade-in">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {getCryptoIcon()}
          <h3 className="text-lg font-semibold text-white">
            {cryptoDetails.name} Payment
          </h3>
        </div>
        <p className="text-sm text-gray-400">
          Send exactly {amount} {cryptoType} to the address below
        </p>
      </div>

      <div className="flex items-center justify-between p-3 bg-[#111] rounded-lg group hover:bg-[#151515] transition-colors">
        <code className="text-sm text-[#1EAEDB] break-all">{address}</code>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyAddress}
          className="text-white hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Transaction Status</span>
          <span className="text-white">
            {status === 'pending' && 'Waiting for payment'}
            {status === 'confirming' && `${confirmations}/${cryptoDetails.confirmations} confirmations`}
            {status === 'completed' && 'Payment completed'}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="flex items-center gap-2 text-sm">
        {status === 'pending' && <Clock className="h-4 w-4 text-yellow-500" />}
        {status === 'confirming' && <Clock className="h-4 w-4 text-blue-500 animate-spin" />}
        {status === 'completed' && <Check className="h-4 w-4 text-green-500" />}
        <span className={cn(
          "text-gray-400",
          status === 'confirming' && "animate-pulse"
        )}>
          {status === 'pending' && 'Awaiting payment...'}
          {status === 'confirming' && 'Confirming on blockchain...'}
          {status === 'completed' && 'Transaction confirmed!'}
        </span>
      </div>

      <Button
        variant="outline"
        className="w-full"
        asChild
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

export default TransactionTracker;