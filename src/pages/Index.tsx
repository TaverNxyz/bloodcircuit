import { useEffect, useState, Suspense } from 'react';
import PaymentRibbon from "@/components/PaymentRibbon";
import ProductCard from "@/components/ProductCard";
import MediaCarousel from "@/components/MediaCarousel";
import ParticlesBackground from "@/components/ParticlesBackground";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { initScrollOpacity } from "@/utils/scrollOpacity";
import LoadingSpinner from "@/components/LoadingSpinner";
import InitialTerminal from "@/components/InitialTerminal";

const products = [
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
    videoUrl: "https://streamable.com/e/lwokde?autoplay=0"
  },
  {
    id: "fortnite",
    name: "Fortnite External",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Premium external cheat for Fortnite",
    features: ["Aimbot", "ESP", "Radar"],
    videoUrl: "https://streamable.com/e/apex"
  },
  {
    id: "rust",
    name: "Rust External",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Advanced external cheat for Rust",
    features: ["Aimbot", "ESP", "Item ESP"],
    videoUrl: "https://streamable.com/e/apex"
  }
];

const MainContent = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [showInitialTerminal, setShowInitialTerminal] = useState(false);

  useEffect(() => {
    // Only show terminal if this is the first visit from browser (no history)
    const isFirstVisit = !localStorage.getItem('visited') && window.history.length <= 2;
    
    if (isFirstVisit) {
      setShowInitialTerminal(true);
      return;
    }

    // Show loading spinner briefly for subsequent navigation
    const loadingTime = 800;
    setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);
  }, []);

  if (showInitialTerminal) {
    return <InitialTerminal onComplete={() => {
      localStorage.setItem('visited', 'true');
      setShowInitialTerminal(false);
      setIsLoading(false);
    }} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="relative min-h-screen bg-transparent">
        <div className="animated-bg">
          <ParticlesBackground />
        </div>

        {/* Hero Section with Text Above Video */}
        <div className="relative pt-20">
          <div className="absolute inset-x-0 top-24 z-10 flex items-center justify-center pointer-events-none">
            <div className="text-center p-8">
              <h1 className="text-6xl font-bold mb-4 font-['Metal_Mania'] bg-gradient-to-r from-[#F97316] via-[#FEC6A1] to-[#F97316] text-transparent bg-clip-text animate-pulse">
                Provide Yourself The Power
              </h1>
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Payment Ribbon */}
        <div className="fixed bottom-0 left-0 right-0">
          <PaymentRibbon />
        </div>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4">
          <Logo />
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white hover:bg-white/10"
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
          </div>
        </header>
      </div>
    </>
  );
};

// Main Index component
const Index = () => {
  useEffect(() => {
    const cleanup = initScrollOpacity();
    return cleanup;
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <MainContent />
    </Suspense>
  );
};

export default Index;
