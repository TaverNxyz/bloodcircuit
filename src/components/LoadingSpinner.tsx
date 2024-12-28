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
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  
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

    // Don't start typing if we're already typing
    if (isTyping) return;

    // If we've completed all lines
    if (currentLine >= terminalLines.length) {
      if (!isComplete) {
        setIsComplete(true);
        const timer = setTimeout(() => {
          setShowButton(true);
        }, 3000); // Wait 3 seconds before showing button
        return () => clearTimeout(timer);
      }
      return;
    }

    const currentText = terminalLines[currentLine];
    
    // If current line is complete
    if (text === currentText) {
      setCompletedLines(prev => [...prev, currentText]);
      setIsTyping(false);
      
      // Wait 3 seconds before starting next line
      const lineTimer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setText('');
      }, 3000);
      
      return () => clearTimeout(lineTimer);
    }

    // Start typing the next character
    setIsTyping(true);
    const charTimer = setTimeout(() => {
      setText(prev => prev + currentText[prev.length]);
    }, 300); // Type each character with a 300ms delay

    return () => clearTimeout(charTimer);
  }, [text, currentLine, isFirstVisit, terminalLines, isComplete, isTyping]);

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
          {completedLines.map((line, index) => (
            <div key={index} className="mb-2">
              <TerminalLine text={line} />
            </div>
          ))}
          {currentLine < terminalLines.length && (
            <TerminalLine 
              text={text} 
              isTyping={isTyping}
            />
          )}
        </TerminalWindow>

        {showButton && <EvolveButton onClick={handleEvolve} />}
      </div>
    </div>
  );
};

export default LoadingSpinner;