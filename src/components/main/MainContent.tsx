import { Button } from "@/components/ui/button";
import { MessageCircle, LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';
import PaymentRibbon from "@/components/PaymentRibbon";
import ProductCard from "@/components/ProductCard";
import MediaCarousel from "@/components/MediaCarousel";
import ParticlesBackground from "@/components/ParticlesBackground";
import Logo from "@/components/Logo";
import { useAuth } from "@/components/auth/AuthProvider";

const products = [
  {
    id: "rust",
    name: "Application Status",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Advanced external cheat for Rust",
    features: ["Aimbot", "ESP", "Item ESP"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "apex",
    name: "Apex External",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Advanced external toolkit for enhanced gameplay",
    features: ["Aimbot", "ESP", "Radar Hack"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "hwid",
    name: "HWID Serializer",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 35
    },
    description: "Advanced HWID spoofer and serializer",
    features: ["HWID Spoofing", "Serial Management", "Anti-Detection"],
    videoUrl: "https://www.youtube.com/embed/pBkpHgDdcps"
  },
  {
    id: "fortnite",
    name: "UDP EFT External",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Premium external cheat for Fortnite",
    features: ["Aimbot", "ESP", "Radar"],
    videoUrl: "https://streamable.com/e/lwokde"
  }
];

const MainContent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, signOut, signInWithDiscord } = useAuth();

  const handleDiscordClick = () => {
    toast({
      title: "Opening Discord",
      description: "Redirecting you to our community..."
    });
  };

  const handleAuthClick = async () => {
    if (user) {
      await signOut();
    } else {
      await signInWithDiscord();
    }
  };

  const { statusProduct, otherProducts } = {
    statusProduct: products.find(p => p.id === "rust"),
    otherProducts: products.filter(p => p.id !== "rust")
  };

  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="animated-bg">
        <ParticlesBackground />
      </div>

      <div className="relative pt-20">
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
              className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
            >
              {user ? (
                <>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </>
              ) : (
                'Sign In with Discord'
              )}
            </Button>
          </div>
        </header>

        <div className="absolute inset-x-0 top-24 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center p-8">
            <p className="text-xl text-[#9b87f5] font-['JetBrains_Mono']">
              Exclusive Affiliation with Exodus and Undetect.net Projects
            </p>
          </div>
        </div>
        
        <div className="relative w-full h-screen">
          <MediaCarousel />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {statusProduct && (
          <div className="max-w-md mx-auto mb-12">
            <ProductCard product={statusProduct} />
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <PaymentRibbon />
      </div>
    </div>
  );
};

export default MainContent;