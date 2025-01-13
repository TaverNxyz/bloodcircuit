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
        data-sellix-group="677bbf0e86253"
        className="sellix-buy-button bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-200 ease-in-out"
        style={{
          border: '2px solid rgba(255, 0, 0, 0.5)',
          boxShadow: '0 0 15px rgba(255, 0, 0, 0.3)'
        }}
      >
        EFT UDP
      </div>
    </div>
  );
};

export default SellixEmbed;