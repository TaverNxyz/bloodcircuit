import { LucideIcon } from 'lucide-react';

interface ProductFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ProductFeatureCard = ({ icon: Icon, title, description, features }: ProductFeatureCardProps) => {
  return (
    <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-[#1EAEDB]/20 hover:border-[#1EAEDB]/40 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-[#1EAEDB]/10">
          <Icon className="w-6 h-6 text-[#1EAEDB]" />
        </div>
        <h3 className="text-xl font-bold text-[#1EAEDB]">{title}</h3>
      </div>
      
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="grid grid-cols-2 gap-2">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="text-xs px-2 py-1 rounded bg-background/50 text-foreground/80"
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatureCard;