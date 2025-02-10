
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
          onClick={() => window.open('https://escoesco.gumroad.com/?_gl=1*6gbr0i*_ga*ODEyMDgxMTM3LjE3Mzg5NzI4NTg.*_ga_6LJN6D94N6*MTczOTE4OTk2Ni4zLjEuMTczOTE5MjUyMy4wLjAuMA..&section=ZG3ymjQGG_rk9iv7_kDNvw%3D%3D', '_blank')}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors duration-200"
        >
          Store
        </Button>
      </div>
    </header>
  );
};

export default Header;
