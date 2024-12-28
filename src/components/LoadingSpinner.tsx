import { useEffect, useState } from 'react';
import TerminalWindow from './terminal/TerminalWindow';
import TerminalLine from './terminal/TerminalLine';
import EvolveButton from './terminal/EvolveButton';

const LoadingSpinner = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (visited) {
      setShowTerminal(false);
      return;
    }

    // First line with 3 second display
    setTimeout(() => {
      setCurrentLine(1);
      
      // Second line after 3 seconds
      setTimeout(() => {
        setCurrentLine(2);
        
        // Show button after another 3 seconds
        setTimeout(() => {
          setShowButton(true);
        }, 3000);
      }, 3000);
    }, 3000);
  }, []);

  const handleEvolve = () => {
    sessionStorage.setItem('visited', 'true');
    setShowTerminal(false);
  };

  if (!showTerminal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-[#FF6B00]"></div>
      </div>
    );
  }

  const lines = [
    '',
    'INITIALIZING KERNEL...',
    'LOADING COMPLETE'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-3xl p-8 font-mono">
        <TerminalWindow>
          {lines.slice(0, currentLine + 1).map((line, index) => (
            line && (
              <div key={index} className="mb-2">
                <TerminalLine text={line} />
              </div>
            )
          ))}
        </TerminalWindow>

        {showButton && <EvolveButton onClick={handleEvolve} />}
      </div>
    </div>
  );
};

export default LoadingSpinner;