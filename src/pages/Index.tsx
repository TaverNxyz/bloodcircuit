import PaymentRibbon from "@/components/PaymentRibbon";
import ProductCard from "@/components/ProductCard";
import MediaCarousel from "@/components/MediaCarousel";
import AnimatedBackground from "@/components/AnimatedBackground";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "apex",
    name: "Apex External",
    price: 299.99,
    description: "Advanced external toolkit for enhanced gameplay",
    features: ["Aimbot", "ESP", "Radar Hack"],
    imageUrl: "/lovable-uploads/cf921485-2679-4705-8c58-08fce6ebce08.png",
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "security-suite",
    name: "Security Suite",
    price: 299.99,
    description: "Enterprise-grade security solution",
    features: ["Firewall Protection", "Malware Detection", "Real-time Monitoring"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "cloud-platform",
    name: "Cloud Platform",
    price: 199.99,
    description: "Scalable cloud computing solution",
    features: ["Auto-scaling", "Load Balancing", "24/7 Support"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "database-manager",
    name: "Database Manager",
    price: 149.99,
    description: "Advanced database management system",
    features: ["Data Encryption", "Backup Solutions", "Performance Optimization"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    price: 99.99,
    description: "Essential development toolkit",
    features: ["Code Analysis", "Debug Tools", "Version Control"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "system-optimizer",
    name: "System Optimizer",
    price: 79.99,
    description: "System performance enhancement",
    features: ["Memory Management", "Process Optimization", "Disk Cleanup"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "encryption-pack",
    name: "Encryption Pack",
    price: 129.99,
    description: "Advanced data encryption tools",
    features: ["AES Encryption", "Key Management", "Secure File Transfer"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "performance-suite",
    name: "Performance Suite",
    price: 169.99,
    description: "Complete performance optimization",
    features: ["System Analysis", "Resource Management", "Performance Monitoring"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "analytics-platform",
    name: "Analytics Platform",
    price: 249.99,
    description: "Comprehensive data analytics",
    features: ["Data Visualization", "Predictive Analytics", "Custom Reports"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  },
  {
    id: "team-collaboration",
    name: "Team Collaboration",
    price: 189.99,
    description: "Team productivity tools",
    features: ["Project Management", "Real-time Communication", "File Sharing"],
    videoUrl: "https://www.youtube.com/embed/YUvGjdWVCrw"
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050505]">
      <AnimatedBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4">
        <Logo />
        <Button 
          onClick={() => navigate('/products')}
          className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white"
        >
          Products
        </Button>
      </header>

      {/* Hero Video Section */}
      <div className="relative w-full h-screen">
        <MediaCarousel />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Secure & Reliable</h1>
            <p className="text-xl text-gray-300">Experience seamless integration and superior performance</p>
          </div>
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
    </div>
  );
};

export default Index;
