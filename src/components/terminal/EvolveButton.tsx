import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface EvolveButtonProps {
  onClick: () => void;
}

const EvolveButton = ({ onClick }: EvolveButtonProps) => {
  return (
    <div className="flex justify-center mt-8 animate-fade-in">
      <Button
        onClick={onClick}
        className="bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white px-8 py-6 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105"
      >
        Evolve <ChevronRight className="ml-2 h-6 w-6" />
      </Button>
    </div>
  );
};

export default EvolveButton;