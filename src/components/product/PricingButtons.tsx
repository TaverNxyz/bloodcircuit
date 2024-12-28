import { Button } from '../ui/button';

interface PricingButtonsProps {
  prices: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  selectedPlan: 'daily' | 'weekly' | 'monthly';
  onPlanSelect: (plan: 'daily' | 'weekly' | 'monthly') => void;
}

const PricingButtons = ({ prices, selectedPlan, onPlanSelect }: PricingButtonsProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4">
      <Button
        variant={selectedPlan === 'daily' ? 'default' : 'outline'}
        onClick={() => onPlanSelect('daily')}
        className="w-full"
      >
        ${prices.daily}/day
      </Button>
      <Button
        variant={selectedPlan === 'weekly' ? 'default' : 'outline'}
        onClick={() => onPlanSelect('weekly')}
        className="w-full"
      >
        ${prices.weekly}/week
      </Button>
      <Button
        variant={selectedPlan === 'monthly' ? 'default' : 'outline'}
        onClick={() => onPlanSelect('monthly')}
        className="w-full"
      >
        ${prices.monthly}/month
      </Button>
    </div>
  );
};

export default PricingButtons;