import { Button } from "@/components/ui/button";
import { MessageCircle, LogOut, UserRound, LogIn } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Logo from "@/components/Logo";
import { useAuth } from "@/components/auth/AuthProvider";

export const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleDiscordClick = () => {
    console.log('Discord link clicked');
  };

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 backdrop-blur-sm bg-background/80">
      <div className="flex items-center">
        <Logo />
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <span className="text-3xl font-bold font-['Exo_2'] bg-gradient-to-r from-[#F97316] via-[#9b87f5] to-[#F97316] text-transparent bg-clip-text animate-pulse">
          Uneven The Odds
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/vouches')}
          className="text-white hover:bg-white/10"
        >
          Vouches
        </Button>
        {user && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/account')}
            className="text-white hover:bg-white/10"
          >
            <UserRound className="h-5 w-5" />
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="text-white hover:bg-white/10"
          onClick={handleDiscordClick}
        >
          <a 
            href="https://discord.gg/xNxWc96GMr" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
        <Button 
          onClick={() => navigate('/cart')}
          className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
        >
          Cart
        </Button>
        <Button
          onClick={handleAuthClick}
          className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white flex items-center gap-2"
        >
          {user ? (
            <>
              <LogOut className="h-4 w-4" />
              Sign Out
            </>
          ) : (
            <>
              <LogIn className="h-4 w-4" />
              Sign In
            </>
          )}
        </Button>
      </div>
    </header>
  );
};