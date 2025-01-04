import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "./ui/use-toast";
import { PAYMENT_METHODS } from "@/lib/constants";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PaymentDialog = ({ open, onOpenChange }: PaymentDialogProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Payment information has been copied"
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0A0A0A] text-white border-[#222]">
        <DialogHeader>
          <DialogTitle>Payment Methods</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {PAYMENT_METHODS.map((method, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#111] group hover:bg-[#151515]">
              <span className="text-sm">{method.text}</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(method.text)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;