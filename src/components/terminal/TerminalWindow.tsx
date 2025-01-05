import React from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
}

const TerminalWindow = ({ children }: TerminalWindowProps) => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="w-3 h-3 rounded-full bg-red-500 opacity-75"></div>
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
        <span className="ml-2 text-sm text-red-500 font-['ROG_Fonts']">Terminal</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;