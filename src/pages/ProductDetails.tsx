import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParticlesBackground from '@/components/ParticlesBackground';
import ProductHero from '@/components/product/ProductHero';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductMedia from '@/components/product/ProductMedia';
import ReturnHomeButton from "@/components/ReturnHomeButton";
import { useState } from 'react';

const products = [
  {
    id: "apex",
    name: "Apex External",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Advanced external toolkit for enhanced gameplay with real-time ESP and aim assistance",
    features: ["Aimbot", "ESP", "Radar Hack"],
    imageUrl: "/lovable-uploads/cf921485-2679-4705-8c58-08fce6ebce08.png",
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw",
    category: "game"
  },
  {
    id: "hwid",
    name: "HWID Serializer",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 35
    },
    description: "Professional HWID spoofer with advanced serial management and anti-detection features",
    features: ["HWID Spoofing", "Serial Management", "Anti-Detection"],
    videoUrl: "https://www.youtube.com/embed/pBkpHgDdcps",
    category: "tool"
  },
  {
    id: "fortnite",
    name: "UDP EFT External",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Premium external cheat for Escape from Tarkov with advanced ESP and radar features",
    features: ["Aimbot", "ESP", "Radar"],
    videoUrl: "https://streamable.com/e/lwokde",
    category: "game"
  },
  {
    id: "rust",
    name: "Application Status",
    prices: {
      daily: 7,
      weekly: 25,
      monthly: 65
    },
    description: "Real-time status checker for Exodus and UDP applications",
    features: ["Status Check", "Real-time Updates"],
    category: "status"
  }
];

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(true);
  
  const product = products.find(p => p.id === productId);
  
  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ReturnHomeButton />
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 py-16 space-y-16 relative z-10">
        <ProductHero 
          title={product.name}
          description={product.description}
        />

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-8">
            <ProductFeatures />
          </TabsContent>

          <TabsContent value="documentation">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Documentation</h3>
              <p className="text-muted-foreground">
                Comprehensive documentation coming soon...
              </p>
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
              <p className="text-muted-foreground">
                FAQ section coming soon...
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {product.category !== 'status' && product.videoUrl && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Product Demo</h3>
            <div className="aspect-video w-full max-w-4xl mx-auto">
              <iframe 
                src={product.videoUrl}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen"
                frameBorder="0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;