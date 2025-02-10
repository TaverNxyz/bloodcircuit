
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/layout/Header";
import AffiliationBanner from "@/components/layout/AffiliationBanner";
import DiscordWidget from "@/components/widgets/DiscordWidget";
import DualVideoCarousel from "@/components/carousel/DualVideoCarousel";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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
                    className="w-full h-[300px] object-cover rounded-lg shadow-xl border border-red-600/30"
                  />
                  <div className="w-full h-[300px] rounded-lg shadow-xl border border-red-600/30 flex items-center justify-center bg-black/50">
                    <Button
                      onClick={() => window.open('https://ragelive.netlify.app/', '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                    >
                      Visit Rage Live <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <div 
                    className="w-full h-[300px] rounded-lg shadow-xl border border-red-600/30 flex items-center justify-center relative"
                    style={{
                      backgroundImage: 'url(/lovable-uploads/51ab9cf1-0a87-4789-a2f7-2d87492183db.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <Button
                      onClick={() => window.open('https://kappa.plentifulpower.xyz', '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                    >
                      Visit Kappa <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  <img 
                    src="/lovable-uploads/9b8ea255-6bc4-4d24-a781-999f5ecd1497.png"
                    alt="Tech Abstract 3"
                    className="w-full h-[300px] object-cover rounded-lg shadow-xl border border-red-600/30"
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
