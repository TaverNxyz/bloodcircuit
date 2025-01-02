import { Bitcoin, Coins } from 'lucide-react';

export const getCryptoIcon = (cryptoDetails: any) => {
  if (typeof cryptoDetails.icon === 'string') {
    return <span className="text-2xl">{cryptoDetails.icon}</span>;
  }
  return <Coins className="h-6 w-6" />;
};

export const getCryptoDetails = (cryptoType: string) => {
  const defaultDetails = {
    name: cryptoType,
    confirmations: 3,
    explorer: 'https://blockchair.com',
    icon: <Bitcoin className="h-6 w-6" />
  };

  return CRYPTO_DETAILS[cryptoType] || defaultDetails;
};