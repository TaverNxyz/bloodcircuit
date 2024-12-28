import { useEffect, useState } from 'react';
import TerminalWindow from './terminal/TerminalWindow';
import TerminalLine from './terminal/TerminalLine';

const PaymentTerminal = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const initLines = [
      'INITIALIZING PAYMENT SYSTEM...',
      'CONNECTING TO SECURE SERVER...',
      'ESTABLISHING ENCRYPTED CONNECTION...',
      'VALIDATING PAYMENT GATEWAY...',
      'READY TO PROCESS TRANSACTION'
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < initLines.length) {
        setLines(prev => [...prev, initLines[currentIndex]]);
        setCurrentLine(currentIndex);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-3xl p-8 font-mono">
        <TerminalWindow>
          {lines.map((line, index) => (
            <div key={index} className="mb-2">
              <TerminalLine 
                text={line} 
                isTyping={index === currentLine}
                cursorVisible={index === currentLine}
              />
            </div>
          ))}
        </TerminalWindow>
      </div>
    </div>
  );
};

export default PaymentTerminal;