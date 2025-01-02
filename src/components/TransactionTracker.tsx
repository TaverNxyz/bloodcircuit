import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { getCryptoDetails } from '@/utils/crypto';
import PaymentHeader from './payment/PaymentHeader';
import PaymentStatus from './payment/PaymentStatus';
import PaymentActions from './payment/PaymentActions';

interface TransactionTrackerProps {
  address: string;
  cryptoType: string;
}

const TransactionTracker = ({ address, cryptoType }: TransactionTrackerProps) => {
  const [status, setStatus] = useState<'pending' | 'confirming' | 'completed'>('pending');
  const [confirmations, setConfirmations] = useState(0);
  const cryptoDetails = getCryptoDetails(cryptoType);

  useEffect(() => {
    console.log('Setting up payment channel for address:', address);
    
    const channel = supabase
      .channel('payment-updates')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'transactions',
          filter: `address=eq.${address}`
        },
        (payload: any) => {
          console.log('Received payment update:', payload);
          if (payload.new.status === 'confirming') {
            setStatus('confirming');
            setConfirmations(payload.new.confirmations);
          } else if (payload.new.status === 'completed') {
            setStatus('completed');
            setConfirmations(cryptoDetails.confirmations);
          }
        }
      )
      .subscribe();

    return () => {
      console.log('Cleaning up payment channel');
      supabase.removeChannel(channel);
    };
  }, [address, cryptoDetails.confirmations]);

  return (
    <div className="space-y-6 p-6 bg-[#0A0A0A] rounded-lg border border-[#222] animate-fade-in">
      <PaymentHeader 
        cryptoDetails={cryptoDetails}
        address={address}
      />
      
      <PaymentStatus 
        status={status}
        confirmations={confirmations}
        totalConfirmations={cryptoDetails.confirmations}
      />
      
      <PaymentActions 
        address={address}
        cryptoDetails={cryptoDetails}
      />
    </div>
  );
};

export default TransactionTracker;