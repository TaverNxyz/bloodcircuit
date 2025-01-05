import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';
import ProductCard from "@/components/ProductCard";
import ParticlesBackground from "@/components/ParticlesBackground";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

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

        <div className="absolute inset-x-0 top-32 z-10 flex items-center justify-center pointer-events-none mb-12">
          <div className="text-center p-8">
            <p className="text-xl text-red-600 font-['ROG_Fonts'] animate-shimmer">
              Exclusive Affiliation with Exodus and Undetect.net Projects
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24">
          <div className="relative">
            {statusProduct && (
              <div className="max-w-md">
                <ProductCard product={statusProduct} />
              </div>
            )}
            
            <div 
              className="absolute" 
              style={{ 
                top: '206px', 
                left: '1109px', 
                transform: 'translate(-50%, 0)', 
                zIndex: 20,
                width: '300px',
                height: '200px'
              }}
            >
              <iframe 
                src="https://discord.com/widget?id=1325470956658888774&theme=dark" 
                width="300" 
                height="200"
                allowTransparency={true} 
                frameBorder="0" 
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                className="rounded-lg shadow-lg border border-red-600/30"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {otherProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;