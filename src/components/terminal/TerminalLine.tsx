import React from 'react';

interface TerminalLineProps {
  text: string;
  isTyping?: boolean;
  cursorVisible?: boolean;
}

const TerminalLine = ({ text, isTyping, cursorVisible }: TerminalLineProps) => {
  return (
    <div className="flex items-center text-[#FF6B00]">
      <span className="mr-2">$</span>
      <span>{text}</span>
      {(isTyping || cursorVisible) && (
        <span className="w-2 h-5 bg-[#FF6B00] ml-1 animate-pulse"></span>
      )}
    </div>
  );
};

export default TerminalLine;