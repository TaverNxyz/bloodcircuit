import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useToast } from "@/hooks/use-toast";
import ReturnHomeButton from "@/components/ReturnHomeButton";
import PaymentMethodDialog from "@/components/PaymentMethodDialog";

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orderNumber] = useState(() => Math.floor(Math.random() * 1000000));
  const [receiptNumber] = useState(() => Math.floor(Math.random() * 1000000));
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <ReturnHomeButton />
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-[#0A0A0A] p-8 rounded-lg border border-[#222]">
          <h1 className="text-3xl font-bold mb-8">Order Summary</h1>
          
          <div className="space-y-4 mb-8">
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
              Continue Shopping
            </Button>
            <Button
              className="w-full bg-[#1EAEDB] hover:bg-[#0FA0CE]"
              onClick={() => setShowPaymentDialog(true)}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>

      <PaymentMethodDialog
        open={showPaymentDialog}
        onOpenChange={setShowPaymentDialog}
        productId="cart"
        plan="one-time"
      />
    </div>
  );
};

export default Cart;