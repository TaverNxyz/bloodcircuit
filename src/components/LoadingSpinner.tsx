import { useEffect, useState } from 'react';

const LoadingSpinner = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showTerminal, setShowTerminal] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  
  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (visited) {
      setIsFirstVisit(false);
    }
  }, []);

  const terminalLines = [
    'INITIALIZING KERNEL...',
    '[SUCCESS] YOU ARE NOW UNRIVALED',
    'LOADING COMPLETE'
  ];
  
  useEffect(() => {
    if (!isFirstVisit) {
      const timer = setTimeout(() => {
        setShowTerminal(false);
      }, 800);
      return () => clearTimeout(timer);
    }

    if (currentLine >= terminalLines.length) {
      sessionStorage.setItem('visited', 'true');
      const timer = setTimeout(() => {
        setShowTerminal(false);
      }, 800);
      return () => clearTimeout(timer);
    }

    const textInterval = setInterval(() => {
      const currentText = terminalLines[currentLine];
      if (text.length < currentText.length) {
        setText(currentText.slice(0, text.length + 1));
      } else {
        clearInterval(textInterval);
        setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setText('');
        }, 500);
      }
    }, 50);

    return () => clearInterval(textInterval);
  }, [text, currentLine, isFirstVisit, terminalLines]);

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
        <div className="w-full bg-black rounded-lg shadow-xl overflow-hidden border border-[#FF6B00]">
          <div className="bg-[#1A1A1A] px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-sm text-[#FF6B00]">Terminal</span>
          </div>
          
          <div className="p-6 bg-black text-[#FF6B00] font-mono">
            {terminalLines.slice(0, currentLine).map((line, index) => (
              <div key={index} className="mb-2">
                <span className="mr-2">$</span>
                <span>{line}</span>
              </div>
            ))}
            {currentLine < terminalLines.length && (
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <span>{text}</span>
                <span className="w-2 h-5 bg-[#FF6B00] ml-1 animate-pulse"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;