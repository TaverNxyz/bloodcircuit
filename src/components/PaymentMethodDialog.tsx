import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { Bitcoin, CreditCard, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "./ui/use-toast";
import { PAYMENT_METHODS } from "@/lib/constants";

interface PaymentMethodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productId: string;
  plan: string;
}

const PaymentMethodDialog = ({ open, onOpenChange, productId, plan }: PaymentMethodDialogProps) => {
  const navigate = useNavigate();

  const handlePayPalPayment = () => {
    const paypalLink = PAYMENT_METHODS.find(m => m.text.startsWith("PayPal"))?.text.split(": ")[1];
    if (paypalLink) {
      window.open(`https://${paypalLink}`, '_blank');
      toast({
        title: "PayPal Payment",
        description: "Please complete your payment through PayPal and contact support with your transaction ID."
      });
      onOpenChange(false);
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
            className="flex items-center gap-2 h-16 hover:bg-white/10"
            onClick={() => handleCryptoPayment("BTC")}
          >
            <Bitcoin className="h-5 w-5" />
            <span>Pay with Bitcoin</span>
          </Button>
          
          <Button
            variant="outline"
            className="flex items-center gap-2 h-16 hover:bg-white/10"
            onClick={() => handleCryptoPayment("LTC")}
          >
            <Wallet className="h-5 w-5" />
            <span>Pay with Litecoin</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 h-16 hover:bg-white/10"
            onClick={handlePayPalPayment}
          >
            <CreditCard className="h-5 w-5" />
            <span>Pay with PayPal</span>
          </Button>
        </div>

        <DialogClose className="sr-only" />
      </DialogContent>
    </Dialog>
  );
};

export default PaymentMethodDialog;