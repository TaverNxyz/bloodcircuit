import { useToast } from "@/components/ui/use-toast";
import PaymentRibbon from "@/components/PaymentRibbon";
import MediaCarousel from "@/components/MediaCarousel";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Header } from "./Header";
import { ProductGrid } from "./ProductGrid";
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
  const { toast } = useToast();

  return (
    <div className="relative min-h-screen bg-transparent">
      <div className="animated-bg">
        <ParticlesBackground />
      </div>

      <div className="relative pt-20">
        <Header />

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
        <ProductGrid products={products} />
      </div>

      <div className="fixed bottom-0 left-0 right-0">
        <PaymentRibbon />
      </div>
    </div>
  );
};

export default MainContent;