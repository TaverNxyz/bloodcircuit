import { Shield, Gauge, Zap, Lock, LineChart, Trophy } from 'lucide-react';
import ProductFeatureCard from './ProductFeatureCard';

const ProductFeatures = () => {
  return (
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
  );
};

export default ProductFeatures;