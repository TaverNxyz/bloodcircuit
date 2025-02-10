
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
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Left - Keep existing blood circuit image */}
                  <img 
                    src="/lovable-uploads/3a833e2c-65fc-4554-a8e8-93a8caf24820.png"
                    alt="Blood Circuit"
                    className="w-full h-full object-cover rounded-lg shadow-xl border border-red-600/30"
                  />
                  {/* Top Right */}
                  <img 
                    src="/lovable-uploads/51ab9cf1-0a87-4789-a2f7-2d87492183db.png"
                    alt="Tech Abstract 1"
                    className="w-full h-full object-cover rounded-lg shadow-xl border border-red-600/30"
                  />
                  {/* Bottom Left - Radar image with text overlay */}
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/e6c750b2-9557-4caf-8b4f-bf0a31c9591b.png"
                      alt="Tech Abstract 2"
                      className="w-full h-full object-cover rounded-lg shadow-xl border border-red-600/30"
                    />
                    <div className="absolute inset-0 bg-black/70 rounded-lg p-4">
                      <h3 className="text-xl font-bold text-white mb-4">Radar Carries</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Unassisted</h4>
                          <div className="space-y-1">
                            <a href="https://voee.gumroad.com/l/noassist3hr?" className="text-blue-400 hover:text-blue-300 block text-sm" target="_blank" rel="noopener noreferrer">3 Hour</a>
                            <a href="https://voee.gumroad.com/l/noassist8hr?" className="text-blue-400 hover:text-blue-300 block text-sm" target="_blank" rel="noopener noreferrer">8 Hour</a>
                            <a href="https://voee.gumroad.com/l/noassistweek?" className="text-blue-400 hover:text-blue-300 block text-sm" target="_blank" rel="noopener noreferrer">Weekly</a>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Assisted</h4>
                          <div className="space-y-1">
                            <a href="https://voee.gumroad.com/l/assisted3hr?" className="text-blue-400 hover:text-blue-300 block text-sm" target="_blank" rel="noopener noreferrer">3 Hour</a>
                            <a href="https://voee.gumroad.com/l/assistedday?" className="text-blue-400 hover:text-blue-300 block text-sm" target="_blank" rel="noopener noreferrer">Daily</a>
                            <a href="https://voee.gumroad.com/l/assistedweekly?" className="text-blue-400 hover:text-blue-300 block text-sm" target="_blank" rel="noopener noreferrer">Weekly</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Right */}
                  <img 
                    src="/lovable-uploads/9b8ea255-6bc4-4d24-a781-999f5ecd1497.png"
                    alt="Tech Abstract 3"
                    className="w-full h-full object-cover rounded-lg shadow-xl border border-red-600/30"
                  />
                </div>
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
