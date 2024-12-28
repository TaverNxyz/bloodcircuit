import { useEffect, useRef, useState } from "react";
import { Copy, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import PaymentDialog from "./PaymentDialog";
import { PAYMENT_METHODS } from "@/lib/constants";

const PaymentRibbon = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.scrollWidth;
      scrollRef.current.style.setProperty('--scroll-width', `${width}px`);
    }
  }, []);

  const copyPaymentInfo = () => {
    const info = PAYMENT_METHODS.map(m => m.text).join('\n');
    navigator.clipboard.writeText(info);
    toast({
      title: "Copied payment information",
      description: "All payment details have been copied to your clipboard"
    });
  };

  return (
    <>
      <div className="relative w-full bg-[#0A0A0A] py-3 flex justify-between items-center px-4 overflow-hidden border-t border-[#222]">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={copyPaymentInfo}
          className="text-white hover:bg-[#9b87f5]/20 bg-[#9b87f5]/10 z-10"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Payment Info
        </Button>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div 
            ref={scrollRef} 
            className="flex whitespace-nowrap opacity-80 animate-[scroll_20s_linear_infinite] hover:pause"
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-12 mx-8">
                {PAYMENT_METHODS.map((method, index) => (
                  <span 
                    key={`${groupIndex}-${index}`} 
                    className="text-sm font-medium text-white/90 tracking-wide"
                  >
                    {method.text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-white hover:bg-white/10 z-10"
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