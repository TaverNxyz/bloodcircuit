import PaymentRibbon from "@/components/PaymentRibbon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MediaCarousel from "@/components/MediaCarousel";

const products = [
  { name: "Security Suite", price: 299.99 },
  { name: "Cloud Platform", price: 199.99 },
  { name: "Database Manager", price: 149.99 },
  { name: "Developer Tools", price: 99.99 },
  { name: "System Optimizer", price: 79.99 },
  { name: "Encryption Pack", price: 129.99 },
  { name: "Performance Suite", price: 169.99 },
  { name: "Analytics Platform", price: 249.99 },
  { name: "Team Collaboration", price: 189.99 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Video Background with Overlay */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black/50" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://streamable.com/yd3tbf" type="video/mp4" />
        </video>
      </div>

      {/* Hero Section */}
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white">
          Secure & Reliable
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-300">
          Professional-grade software solutions for modern security challenges
        </p>
      </div>

      {/* Media Carousel Section */}
      <MediaCarousel />

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.name} className="bg-[#221F26] border-[#403E43] text-white">
              <CardHeader>
                <CardTitle className="text-[#33C3F0]">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">${product.price}</p>
                <button className="mt-4 w-full rounded bg-[#1EAEDB] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#0FA0CE]">
                  Purchase
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment Ribbon at bottom */}
      <div className="fixed bottom-0 left-0 right-0">
        <PaymentRibbon />
      </div>
    </div>
  );
};

export default Index;