import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Bitcoin, CreditCard, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "./ui/use-toast";

interface PaymentMethodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productId: string;
  plan: string;
}

const PaymentMethodDialog = ({ open, onOpenChange, productId, plan }: PaymentMethodDialogProps) => {
  const navigate = useNavigate();

  const handleBillgangPayment = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to make a purchase",
          variant: "destructive"
        });
        navigate('/auth');
        return;
      }

      const { data, error } = await supabase.functions.invoke('billgang-payment', {
        body: { productId, plan }
      });

      if (error) throw error;

      // Redirect to Billgang checkout
      window.location.href = data.url;
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Failed to initialize payment. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleCryptoPayment = (type: "BTC" | "LTC") => {
    navigate(`/payment/${productId}?plan=${plan}&method=${type}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0A0A0A] text-white border-[#222] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Payment Method</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 h-16"
            onClick={() => handleCryptoPayment("BTC")}
          >
            <Bitcoin className="h-5 w-5" />
            <span>Pay with Bitcoin</span>
          </Button>
          
          <Button
            variant="outline"
            className="flex items-center gap-2 h-16"
            onClick={() => handleCryptoPayment("LTC")}
          >
            <Wallet className="h-5 w-5" />
            <span>Pay with Litecoin</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 h-16"
            onClick={handleBillgangPayment}
          >
            <CreditCard className="h-5 w-5" />
            <span>Pay with Card</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentMethodDialog;