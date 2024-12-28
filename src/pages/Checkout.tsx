import { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import PaymentMethodDialog from "@/components/PaymentMethodDialog";

const Checkout = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan');
  const [orderNumber] = useState(() => Math.floor(Math.random() * 1000000));
  const [receiptNumber] = useState(() => Math.floor(Math.random() * 1000000));
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);

  if (!productId || !plan) {
    return <div>Invalid checkout parameters</div>;
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
                <span className="font-mono">{plan}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#111] rounded-lg">
                <span>Order Number:</span>
                <span className="font-mono">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#111] rounded-lg">
                <span>Receipt Number:</span>
                <span className="font-mono">{receiptNumber}</span>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="w-full"
              >
                Cancel
              </Button>
              <Button
                className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE]"
                onClick={() => setShowPaymentMethods(true)}
              >
                Select Payment Method
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PaymentMethodDialog 
        open={showPaymentMethods} 
        onOpenChange={setShowPaymentMethods}
        productId={productId}
        plan={plan}
      />
    </div>
  );
};

export default Checkout;