import { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import PaymentMethodDialog from "@/components/PaymentMethodDialog";
import PaymentTerminal from "@/components/PaymentTerminal";

const Checkout = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan');
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);

  if (!productId || !plan) {
    return <div>Invalid checkout parameters</div>;
  }

  if (showTerminal) {
    return <PaymentTerminal onComplete={() => setShowTerminal(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-[#0A0A0A] p-8 rounded-lg border border-[#222]">
            <h1 className="text-3xl font-bold mb-8">Order Summary</h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-[#111] rounded-lg">
                <span>Product ID:</span>
                <span className="font-mono">{productId}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#111] rounded-lg">
                <span>Plan:</span>
                <span className="uppercase">{plan}</span>
              </div>
            </div>

            <Button 
              className="w-full"
              onClick={() => setShowPaymentMethods(true)}
            >
              Proceed to Payment
            </Button>
          </div>

          <PaymentMethodDialog
            open={showPaymentMethods}
            onOpenChange={setShowPaymentMethods}
            productId={productId}
            plan={plan}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;