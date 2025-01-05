import { Button } from '../ui/button';

interface PricingButtonsProps {
  prices: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  onSelect: (plan: 'daily' | 'weekly' | 'monthly') => void;
}

const PricingButtons = ({ prices, onSelect }: PricingButtonsProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      <Button
        variant="outline"
        onClick={() => onSelect('daily')}
        className="w-full"
      >
        ${prices.daily}/day
      </Button>
      <Button
        variant="outline"
        onClick={() => onSelect('weekly')}
        className="w-full"
      >
        ${prices.weekly}/week
      </Button>
      <Button
        variant="outline"
        onClick={() => onSelect('monthly')}
        className="w-full"
      >
        ${prices.monthly}/month
      </Button>
    </div>
  );
};

export default PricingButtons;