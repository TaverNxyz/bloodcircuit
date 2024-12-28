import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Gauge, Zap, Lock, LineChart, Trophy } from 'lucide-react';
import ProductFeatureCard from '@/components/product/ProductFeatureCard';
import ProductHero from '@/components/product/ProductHero';
import ProductMediaCarousel from '@/components/product/ProductMediaCarousel';
import AnimatedBackground from '@/components/AnimatedBackground';

const ProductDetails = () => {
  const { productId } = useParams();
  
  // Find the product based on the ID
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductFeatureCard
                icon={Shield}
                title="Enhanced Security"
                description="Advanced protection system for secure gameplay"
                features={[
                  "HWID Protection",
                  "Anti-Detection",
                  "Memory Encryption",
                  "Secure Updates"
                ]}
              />
              <ProductFeatureCard
                icon={Gauge}
                title="Optimized Engine"
                description="High performance with minimal system impact"
                features={[
                  "Low Latency",
                  "Smooth Operation",
                  "Resource Efficient",
                  "Background Processing"
                ]}
              />
              <ProductFeatureCard
                icon={Zap}
                title="Fast Updates"
                description="Quick updates and automatic feature adjustments"
                features={[
                  "Auto-Updates",
                  "Feature Sync",
                  "Quick Patches",
                  "Version Control"
                ]}
              />
              <ProductFeatureCard
                icon={Lock}
                title="Secure Access"
                description="Multi-layer security and encrypted connections"
                features={[
                  "Encrypted Data",
                  "Protected Sessions",
                  "Secure Login",
                  "Safe Connections"
                ]}
              />
              <ProductFeatureCard
                icon={LineChart}
                title="Live Analytics"
                description="Real-time performance tracking and analysis"
                features={[
                  "Performance Stats",
                  "System Monitor",
                  "Usage Metrics",
                  "Resource Tracking"
                ]}
              />
              <ProductFeatureCard
                icon={Trophy}
                title="Premium Support"
                description="24/7 dedicated support and maintenance"
                features={[
                  "24/7 Support",
                  "Expert Help",
                  "Priority Service",
                  "Quick Response"
                ]}
              />
            </div>
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

        <ProductMediaCarousel images={product.images || []} />
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
