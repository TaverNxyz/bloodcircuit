import { useEffect, useRef } from "react";

const PaymentRibbon = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scrollWidth = scrollElement.scrollWidth;
    const animationDuration = 15; // 15 seconds per cycle

    scrollElement.style.setProperty('--scroll-width', `${scrollWidth}px`);
    scrollElement.style.setProperty('--animation-duration', `${animationDuration}s`);
  }, []);

  const paymentMethods = [
    { text: "PayPal: undetect.pay@gmail.com" },
    { text: "BTC: bc1qe7zzyk3264fwya3y0wj4x4wy6tvd86cf46e39u" },
    { text: "LTC: ltc1quu6df4vvum7640sfywjsxvvcsh5ax9pwq4dsu9" },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 py-3">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-900 to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-900 to-transparent" />
      
      {/* Scrolling content */}
      <div
        ref={scrollRef}
        className="flex animate-scroll gap-8 text-white"
        style={{
          animation: 'scroll var(--animation-duration) linear infinite',
        }}
      >
        {/* Duplicate content for seamless loop */}
        {[...Array(2)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex gap-8 whitespace-nowrap">
            {paymentMethods.map((method, index) => (
              <div
                key={`${groupIndex}-${index}`}
                className="flex items-center gap-3 transition-all duration-200 hover:scale-105 hover:opacity-80"
              >
                <span className="text-sm font-medium">{method.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentRibbon;