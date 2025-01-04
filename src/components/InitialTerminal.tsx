import { useCallback, useEffect, useState } from 'react';
import TerminalWindow from './terminal/TerminalWindow';
import TerminalLine from './terminal/TerminalLine';
import EvolveButton from './terminal/EvolveButton';
import ParticlesBackground from './ParticlesBackground';

const LINES = [
  'INITIALIZING SYSTEM...',
  'INITIALIZING KERNEL...',
  'LOADING COMPLETE'
] as const;

const InitialTerminal = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleEvolve = useCallback(() => {
    sessionStorage.setItem('visited', 'true');
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentLine(1), 1000),
      setTimeout(() => setCurrentLine(2), 4000),
      setTimeout(() => setShowButton(true), 7000)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>
      <div className="w-full max-w-3xl p-8 font-mono relative z-10">
        <TerminalWindow>
          {LINES.slice(0, currentLine + 1).map((line, index) => (
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