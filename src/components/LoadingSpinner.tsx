import { useEffect, useState } from 'react';
import TerminalWindow from './terminal/TerminalWindow';
import TerminalLine from './terminal/TerminalLine';
import EvolveButton from './terminal/EvolveButton';

const LoadingSpinner = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showTerminal, setShowTerminal] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (visited) {
      setIsFirstVisit(false);
    }
  }, []);

  const terminalLines = [
    'INITIALIZING KERNEL...',
    'LOADING COMPLETE'
  ];

  const handleEvolve = () => {
    sessionStorage.setItem('visited', 'true');
    setShowTerminal(false);
  };
  
  useEffect(() => {
    if (!isFirstVisit) {
      const timer = setTimeout(() => {
        setShowTerminal(false);
      }, 800);
      return () => clearTimeout(timer);
    }

    if (isComplete) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 500);
      return () => clearTimeout(timer);
    }

    if (currentLine >= terminalLines.length) {
      setIsComplete(true);
      return;
    }

    const currentText = terminalLines[currentLine];
    if (text === currentText) {
      const lineTimer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setText('');
      }, 1000);
      return () => clearTimeout(lineTimer);
    }

    const charTimer = setTimeout(() => {
      setText(text + currentText[text.length]);
    }, 100);

    return () => clearTimeout(charTimer);
  }, [text, currentLine, isFirstVisit, terminalLines, isComplete]);

  if (!showTerminal) return null;

  if (!isFirstVisit) {
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
          {terminalLines.slice(0, currentLine).map((line, index) => (
            <div key={index} className="mb-2">
              <TerminalLine text={line} />
            </div>
          ))}
          {currentLine < terminalLines.length && (
            <TerminalLine 
              text={text} 
              isTyping={true}
            />
          )}
        </TerminalWindow>

        {showButton && <EvolveButton onClick={handleEvolve} />}
      </div>
    </div>
  );
};

export default LoadingSpinner;