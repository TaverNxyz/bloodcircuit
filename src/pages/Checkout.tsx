import { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";
import PaymentMethodDialog from "@/components/PaymentMethodDialog";
import PaymentTerminal from "@/components/PaymentTerminal";

const Checkout = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const plan = searchParams.get('plan');

  if (!productId || !plan) {
    return null;
  }

  const handlePaymentMethodSelect = (method: string) => {
    navigate(`/payment/${productId}?plan=${plan}&method=${method}`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-16 animate-fade-in relative z-10">
        <div className="max-w-2xl mx-auto space-y-8">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            Back to Products
          </Button>

          <PaymentTerminal
            productId={productId}
            plan={plan}
            onProceed={() => setShowPaymentDialog(true)}
          />

          <PaymentMethodDialog
            open={showPaymentDialog}
            onOpenChange={setShowPaymentDialog}
            onSelect={handlePaymentMethodSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;