import { useEffect, useState } from 'react';
import TerminalWindow from './terminal/TerminalWindow';
import TerminalLine from './terminal/TerminalLine';
import EvolveButton from './terminal/EvolveButton';

const InitialTerminal = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
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
    onComplete();
  };

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

export default InitialTerminal;