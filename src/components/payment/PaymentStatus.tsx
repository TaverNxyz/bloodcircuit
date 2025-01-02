import { Progress } from '@/components/ui/progress';

interface PaymentStatusProps {
  status: 'pending' | 'confirming' | 'completed';
  confirmations: number;
  totalConfirmations: number;
}

const PaymentStatus = ({ status, confirmations, totalConfirmations }: PaymentStatusProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Transaction Status</span>
        <span className="text-white">
          {status === 'pending' && 'Waiting for payment'}
          {status === 'confirming' && `${confirmations}/${totalConfirmations} confirmations`}
          {status === 'completed' && 'Payment completed'}
        </span>
      </div>
      <Progress 
        value={status === 'completed' ? 100 : (status === 'confirming' ? (confirmations / totalConfirmations) * 100 : 0)} 
      />
    </div>
  );
};

export default PaymentStatus;