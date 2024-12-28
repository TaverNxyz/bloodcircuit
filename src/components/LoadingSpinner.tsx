import { useEffect, useState } from 'react';

const LoadingSpinner = () => {
  const [text, setText] = useState('');
  const loadingText = 'INITIALIZING SYSTEM...';
  const dots = '...';
  
  useEffect(() => {
    let currentIndex = 0;
    let dotIndex = 0;
    
    const textInterval = setInterval(() => {
      if (currentIndex <= loadingText.length) {
        setText(loadingText.slice(0, currentIndex) + dots.slice(0, dotIndex + 1));
        currentIndex++;
      }
      dotIndex = (dotIndex + 1) % 3;
    }, 100);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="min-h-[200px] flex flex-col items-center justify-center bg-[#000000] p-8 font-mono">
      {/* Terminal window frame */}
      <div className="w-full max-w-md bg-[#1A1F2C] rounded-lg shadow-xl overflow-hidden border border-[#403E43]">
        {/* Terminal header */}
        <div className="bg-[#222222] px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        {/* Terminal content */}
        <div className="p-6 space-y-4">
          {/* Blinking cursor effect */}
          <div className="flex items-center gap-2">
            <span className="text-[#1EAEDB] animate-pulse">{'>'}</span>
            <span className="text-[#F2FCE2]">{text}</span>
            <span className="w-2 h-5 bg-[#1EAEDB] animate-pulse"></span>
          </div>
          
          {/* Loading bar */}
          <div className="w-full bg-[#222222] rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-[#1EAEDB] rounded-full animate-[loading_2s_ease-in-out_infinite]"
              style={{
                width: '100%',
                animation: 'loading 2s ease-in-out infinite'
              }}
            ></div>
          </div>
          
          {/* Status messages */}
          <div className="text-xs text-[#C8C8C9] space-y-1">
            <p className="animate-pulse">Establishing secure connection...</p>
            <p className="animate-pulse delay-100">Verifying credentials...</p>
            <p className="animate-pulse delay-200">Loading resources...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;