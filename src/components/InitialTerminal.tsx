import { useEffect, useState } from 'react';
import TerminalWindow from './terminal/TerminalWindow';
import TerminalLine from './terminal/TerminalLine';
import EvolveButton from './terminal/EvolveButton';

const InitialTerminal = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentLine(1);
    }, 1000);

    const timer2 = setTimeout(() => {
      setCurrentLine(2);
    }, 4000);

    const timer3 = setTimeout(() => {
      setShowButton(true);
    }, 7000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleEvolve = () => {
    sessionStorage.setItem('visited', 'true');
    onComplete();
  };

  const lines = [
    'INITIALIZING SYSTEM...',
    'INITIALIZING KERNEL...',
    'LOADING COMPLETE'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-3xl p-8 font-mono">
        <TerminalWindow>
          {lines.slice(0, currentLine + 1).map((line, index) => (
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

export default InitialTerminal;