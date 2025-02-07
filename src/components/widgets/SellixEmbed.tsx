import React, { useEffect } from 'react';

const SellixEmbed = () => {
  useEffect(() => {
    // Ensure the Sellix embed is initialized
    if ((window as any).Sellix) {
      (window as any).Sellix.init();
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto mt-4 space-y-4">
      {/* Sellix buttons can be added here */}
    </div>
  );
};

export default SellixEmbed;
