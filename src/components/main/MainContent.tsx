import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/layout/Header";
import AffiliationBanner from "@/components/layout/AffiliationBanner";
import DiscordWidget from "@/components/widgets/DiscordWidget";
import ProductGrid from "@/components/products/ProductGrid";
import DualVideoCarousel from "@/components/carousel/DualVideoCarousel";
import SellixEmbed from "@/components/widgets/SellixEmbed";
import { Product } from "@/types/product";

const products: Product[] = [
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
    id: "tarkov",
    name: "UDP EFT External",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Premium external cheat for Tarkov",
    features: ["Aimbot", "ESP", "Radar"],
    videoUrl: "https://streamable.com/e/lwokde"
  }
];

const MainContent = () => {
  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="animated-bg">
        <ParticlesBackground />
      </div>

      <div className="relative pt-20">
        <Header />
        <AffiliationBanner />
        
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <div className="max-w-md">
                <ProductGrid products={[products[0]]} />
                <SellixEmbed />
              </div>
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/3a833e2c-65fc-4554-a8e8-93a8caf24820.png"
                  alt="Blood Circuit"
                  className="w-full h-auto rounded-lg shadow-xl border border-red-600/30"
                />
              </div>
            </div>
            
            <div className="w-full">
              <DualVideoCarousel />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <ProductGrid products={products.slice(1)} />
              </div>
              <div className="md:w-[300px]">
                <DiscordWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;