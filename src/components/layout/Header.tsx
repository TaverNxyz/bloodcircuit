import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 backdrop-blur-sm bg-black/80 border-b border-red-600/30">
      <div className="flex items-center">
        <Logo />
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <span className="text-3xl font-bold font-['ROG_Fonts'] bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-transparent bg-clip-text animate-pulse glow-effect">
          Uneven The Odds
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={() => window.open('https://plentipowered.mysellix.io/', '_blank')}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
        >
          Store
        </Button>
      </div>
    </header>
  );
};

export default Header;