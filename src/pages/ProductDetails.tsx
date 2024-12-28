import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ParticlesBackground from '@/components/ParticlesBackground';
import ProductHero from '@/components/product/ProductHero';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductMedia from '@/components/product/ProductMedia';
import ReturnHomeButton from "@/components/ReturnHomeButton";
import { useState } from 'react';

const ProductDetails = () => {
  const { productId } = useParams();
  const [showVideo, setShowVideo] = useState(false);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const productMedia = [
    ...(product.imageUrl ? [product.imageUrl] : []),
    '/lovable-uploads/46a28158-90ea-447e-a139-3e0903d35c88.png'
  ];

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

        <ProductMedia 
          media={productMedia}
          videoUrl={product.videoUrl}
          showVideo={showVideo}
          onShowVideo={setShowVideo}
        />
      </div>
    </div>
  );
};

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

export default ProductDetails;
