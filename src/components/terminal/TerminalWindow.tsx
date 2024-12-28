import React from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
}

const TerminalWindow = ({ children }: TerminalWindowProps) => {
  return (
    <div className="w-full bg-black rounded-lg shadow-xl overflow-hidden border border-[#FF6B00]">
      <div className="bg-[#1A1A1A] px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-sm text-[#FF6B00]">Terminal</span>
      </div>
      <div className="p-6 bg-black text-[#FF6B00] font-mono">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;