import React, { useEffect } from 'react';

const SellixEmbed = () => {
  useEffect(() => {
    // Ensure the Sellix embed is initialized
    if ((window as any).Sellix) {
      (window as any).Sellix.init();
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <div 
        data-sellix-product="YOUR_PRODUCT_ID" // Replace with your actual Sellix product ID
        className="sellix-buy-button"
      >
        Buy Now with Sellix
      </div>
    </div>
  );
};

export default SellixEmbed;