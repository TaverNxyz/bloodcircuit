import PaymentRibbon from "@/components/PaymentRibbon";
import ProductCard from "@/components/ProductCard";
import MediaCarousel from "@/components/MediaCarousel";
import AnimatedBackground from "@/components/AnimatedBackground";
import Logo from "@/components/Logo";
import { PRODUCTS } from "@/lib/constants";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <AnimatedBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <Logo />
      </header>

      {/* Hero Section */}
      <div className="relative flex min-h-[40vh] flex-col items-center justify-center px-4 text-center pt-20">
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-white">
          Become Unrivaled
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-400">
          Exclusively affiliated with Undetect and Exodus Projects
        </p>
      </div>

      {/* Media Carousel */}
      <div className="mb-16">
        <MediaCarousel />
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
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