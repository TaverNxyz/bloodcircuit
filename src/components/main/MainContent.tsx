
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/layout/Header";
import AffiliationBanner from "@/components/layout/AffiliationBanner";
import DiscordWidget from "@/components/widgets/DiscordWidget";
import DualVideoCarousel from "@/components/carousel/DualVideoCarousel";
import { Product } from "@/types/product";

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
            <div className="w-full">
              <DualVideoCarousel />
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/3a833e2c-65fc-4554-a8e8-93a8caf24820.png"
                    alt="Blood Circuit"
                    className="w-full h-full object-cover rounded-lg shadow-xl border border-red-600/30"
                  />
                  <img 
                    src="/lovable-uploads/51ab9cf1-0a87-4789-a2f7-2d87492183db.png"
                    alt="Tech Abstract 1"
                    className="w-full h-full object-cover rounded-lg shadow-xl border border-red-600/30"
                  />
                  <img 
                    src="/lovable-uploads/e6c750b2-9557-4caf-8b4f-bf0a31c9591b.png"
                    alt="Tech Abstract 2"
                    className="w-full h-full object-cover rounded-lg shadow-xl border border-red-600/30"
                  />
                  <img 
                    src="/lovable-uploads/9b8ea255-6bc4-4d24-a781-999f5ecd1497.png"
                    alt="Tech Abstract 3"
                    className="w-full h-full object-cover rounded-lg shadow-xl border border-red-600/30"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-[300px] mx-auto">
              <DiscordWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
