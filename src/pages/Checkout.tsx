import { useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import PaymentMethodDialog from "@/components/PaymentMethodDialog";
import PaymentTerminal from "@/components/PaymentTerminal";
import ReturnHomeButton from "@/components/ReturnHomeButton";
import { toast } from "@/components/ui/use-toast";

const Checkout = () => {
  const { id: productId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan');

  useEffect(() => {
    if (!productId || !plan) {
      toast({
        title: "Error",
        description: "Missing required checkout parameters",
        variant: "destructive"
      });
      navigate('/');
      return;
    }
  }, [productId, plan, navigate]);

  if (!productId || !plan) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <ReturnHomeButton />
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-[#0A0A0A] p-8 rounded-lg border border-[#222]">
            <h1 className="text-3xl font-bold mb-8">Order Summary</h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-[#111] rounded-lg">
                <span>Product:</span>
                <span className="font-mono">{productId}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-[#111] rounded-lg">
                <span>Plan:</span>
                <span className="uppercase">{plan}</span>
              </div>
            </div>

            <PaymentMethodDialog
              productId={productId}
              plan={plan}
              open={true}
              onOpenChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;