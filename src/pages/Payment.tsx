import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import ParticlesBackground from "@/components/ParticlesBackground";
import TransactionTracker from "@/components/TransactionTracker";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PAYMENT_METHODS, CryptoType } from "@/lib/constants";
import ReturnHomeButton from "@/components/ReturnHomeButton";

const PRODUCT_PRICES = {
  apex: {
    daily: 7,
    weekly: 25,
    monthly: 65
  },
  rust: {
    daily: 7,
    weekly: 25,
    monthly: 65
  },
  hwid: {
    daily: 7,
    weekly: 25,
    monthly: 35
  },
  fortnite: {
    daily: 7,
    weekly: 25,
    monthly: 65
  }
};

const Payment = () => {
  const { id: productId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan') as 'daily' | 'weekly' | 'monthly';
  const method = searchParams.get('method') as CryptoType;
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (!productId || !plan || !method || !['BTC', 'LTC'].includes(method)) {
      navigate('/');
      return;
    }

    // Set the correct amount based on product and plan
    if (productId && plan && PRODUCT_PRICES[productId as keyof typeof PRODUCT_PRICES]) {
      setAmount(PRODUCT_PRICES[productId as keyof typeof PRODUCT_PRICES][plan]);
    }
  }, [productId, plan, method, navigate]);

  const getAddress = (crypto: CryptoType) => {
    const methodText = PAYMENT_METHODS.find(m => m.text.startsWith(crypto))?.text;
    return methodText ? methodText.split(': ')[1] : '';
  };

  if (!productId || !plan || !method) {
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
            address={getAddress(method)}
            amount={amount}
            cryptoType={method}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;