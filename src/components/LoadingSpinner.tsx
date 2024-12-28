import { useEffect, useState } from 'react';
import TerminalWindow from './terminal/TerminalWindow';
import TerminalLine from './terminal/TerminalLine';
import EvolveButton from './terminal/EvolveButton';

const LoadingSpinner = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [lines, setLines] = useState<string[]>([]);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (visited) {
      setShowTerminal(false);
      return;
    }

    // Simple sequential timing for lines
    setTimeout(() => {
      setLines(['INITIALIZING KERNEL...']);
      
      setTimeout(() => {
        setLines(['INITIALIZING KERNEL...', 'LOADING COMPLETE']);
        
        setTimeout(() => {
          setShowButton(true);
        }, 2000);
      }, 2000);
    }, 1000);
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-3xl p-8 font-mono">
        <TerminalWindow>
          {lines.map((line, index) => (
            <div key={index} className="mb-2">
              <TerminalLine text={line} />
            </div>
          ))}
        </TerminalWindow>

        {showButton && <EvolveButton onClick={handleEvolve} />}
      </div>
    </div>
  );
};

export default LoadingSpinner;