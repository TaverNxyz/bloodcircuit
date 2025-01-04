import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import ParticlesBackground from "@/components/ParticlesBackground";
import TransactionTracker from "@/components/TransactionTracker";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PAYMENT_METHODS, CryptoType } from "@/lib/constants";
import ReturnHomeButton from "@/components/ReturnHomeButton";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/components/auth/AuthProvider';

const Payment = () => {
  const { id: productId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth(); // Get the authenticated user
  const [paymentAddress, setPaymentAddress] = useState<string>('');
  const plan = searchParams.get('plan');
  const method = searchParams.get('method') as CryptoType;

  useEffect(() => {
    // Redirect if not authenticated
    if (!user) {
      navigate('/auth');
      return;
    }

    if (!productId || !plan || !method || !['BTC', 'LTC'].includes(method)) {
      navigate('/');
      return;
    }

    const initializePayment = async () => {
      try {
        const address = getAddress(method);
        const { error } = await supabase
          .from('payments')
          .insert({
            product_id: productId,
            amount: 0.5, // This should come from your product pricing
            crypto_type: method,
            address,
            user_id: user.id // Explicitly set the user_id
          });

        if (error) {
          console.error('Error creating payment:', error);
          throw error;
        }
        setPaymentAddress(address);
      } catch (error) {
        console.error('Error creating payment:', error);
        toast({
          title: "Error",
          description: "Failed to initialize payment. Please try again.",
          variant: "destructive"
        });
        navigate('/');
      }
    };

    initializePayment();
  }, [productId, plan, method, navigate, toast, user]);

  const getAddress = (crypto: CryptoType) => {
    const methodText = PAYMENT_METHODS.find(m => m.text.startsWith(crypto))?.text;
    return methodText ? methodText.split(': ')[1] : '';
  };

  if (!productId || !plan || !method || !paymentAddress || !user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <ReturnHomeButton />
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-16 animate-fade-in relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Order Summary
          </Button>

          <TransactionTracker 
            address={paymentAddress}
            amount={0.5}
            cryptoType={method}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;