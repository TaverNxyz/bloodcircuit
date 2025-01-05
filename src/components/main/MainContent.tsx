import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/layout/Header";
import AffiliationBanner from "@/components/layout/AffiliationBanner";
import DiscordWidget from "@/components/widgets/DiscordWidget";
import ProductGrid from "@/components/products/ProductGrid";
import DualVideoCarousel from "@/components/carousel/DualVideoCarousel";
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
  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="animated-bg">
        <ParticlesBackground />
      </div>

      <div className="relative pt-20">
        <Header />
        <AffiliationBanner />
        
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <ProductGrid products={products} />
              <div className="mt-6">
                <DualVideoCarousel />
              </div>
            </div>
            <div className="md:w-[300px] mt-6 md:mt-0">
              <DiscordWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;