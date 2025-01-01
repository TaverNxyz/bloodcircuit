import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { CreditCard, DollarSign } from "lucide-react";

interface PaymentMethodDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productId: string;
  plan?: string;
}

const PaymentMethodDialog = ({ open, onOpenChange, productId, plan }: PaymentMethodDialogProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentMethod = async (method: 'card' | 'paypal') => {
    try {
      setIsProcessing(true);
      
      // Close the dialog first
      onOpenChange(false);
      
      // Navigate to payment page with method
      navigate(`/payment/${productId}?method=${method}${plan ? `&plan=${plan}` : ''}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process payment method selection",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Payment Method</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-4 mt-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => handlePaymentMethod('card')}
            disabled={isProcessing}
          >
            <CreditCard className="h-4 w-4" />
            <span>Pay with Card</span>
          </Button>
          
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => handlePaymentMethod('paypal')}
            disabled={isProcessing}
          >
            <DollarSign className="h-4 w-4" />
            <span>Pay with PayPal</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentMethodDialog;