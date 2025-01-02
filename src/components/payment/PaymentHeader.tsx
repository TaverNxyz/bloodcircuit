import { getCryptoIcon } from '@/utils/crypto';

interface PaymentHeaderProps {
  cryptoDetails: {
    name: string;
    icon: React.ReactNode;
  };
  address: string;
  amount: number;
}

const PaymentHeader = ({ cryptoDetails, address, amount }: PaymentHeaderProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {getCryptoIcon(cryptoDetails)}
        <h3 className="text-lg font-semibold text-white">
          {cryptoDetails.name} Payment
        </h3>
      </div>
      <p className="text-sm text-gray-400">
        Please send {amount} {cryptoDetails.name} to the following address
      </p>
    </div>
  );
};

export default PaymentHeader;