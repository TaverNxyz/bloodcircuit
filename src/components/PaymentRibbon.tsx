import { useEffect, useRef, useState } from "react";
import { Copy, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import PaymentDialog from "./PaymentDialog";

const PaymentRibbon = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const paymentMethods = [
    { text: "PayPal: undetect.pay@gmail.com" },
    { text: "BTC: bc1qe7zzyk3264fwya3y0wj4x4wy6tvd86cf46e39u" },
    { text: "LTC: ltc1quu6df4vvum7640sfywjsxvvcsh5ax9pwq4dsu9" },
  ];

  const copyPaymentInfo = () => {
    const info = paymentMethods.map(m => m.text).join('\n');
    navigator.clipboard.writeText(info);
    toast({
      title: "Copied payment information",
      description: "All payment details have been copied to your clipboard"
    });
  };

  return (
    <>
      <div className="relative w-full bg-[#0A0A0A] py-3 flex justify-between items-center px-4">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => setDialogOpen(true)}
          className="text-white hover:bg-white/10"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Payment Info
        </Button>

        <div className="flex-1 overflow-hidden mx-4">
          <div ref={scrollRef} className="flex animate-scroll gap-8 text-white">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-8 whitespace-nowrap">
                {paymentMethods.map((method, index) => (
                  <div key={`${groupIndex}-${index}`} className="flex items-center gap-3">
                    <span className="text-sm font-medium">{method.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-white hover:bg-white/10"
        >
          <a 
            href="https://discord.gg/xNxWc96GMr" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
      </div>
      <PaymentDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default PaymentRibbon;