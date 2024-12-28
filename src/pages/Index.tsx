import { useEffect } from 'react';
import PaymentRibbon from "@/components/PaymentRibbon";
import ProductCard from "@/components/ProductCard";
import MediaCarousel from "@/components/MediaCarousel";
import AnimatedBackground from "@/components/AnimatedBackground";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { initScrollOpacity } from "@/utils/scrollOpacity";

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
    imageUrl: "/lovable-uploads/cf921485-2679-4705-8c58-08fce6ebce08.png",
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
    name: "Fortnite External",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Premium external cheat for Fortnite",
    features: ["Aimbot", "ESP", "Radar"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
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
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  }
];

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = initScrollOpacity();
    return cleanup;
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="animated-bg">
        <AnimatedBackground />
      </div>

      {/* Hero Section with Text Above Video */}
      <div className="relative pt-20">
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="text-center bg-black/50 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-6xl font-bold text-white mb-4 font-[Orbitron]">
              Provide Yourself The Power
            </h1>
            <p className="text-xl text-gray-300">
              Exclusive Affiliation with Exodus and Undetect.net Projects
            </p>
          </div>
        </div>
        
        <div className="relative w-full h-screen">
          <MediaCarousel />
        </div>
      </div>

      {/* Products Grid */}
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
  );
};

export default Index;