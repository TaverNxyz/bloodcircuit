import React from 'react';
import { Bitcoin, Coins } from 'lucide-react';
import { CRYPTO_DETAILS, type CryptoType } from '@/lib/constants';

interface CryptoDetails {
  name: string;
  confirmations: number;
  explorer: string;
  icon: string | React.ReactNode;
}

export const getCryptoIcon = (cryptoDetails: CryptoDetails): React.ReactNode => {
  if (typeof cryptoDetails.icon === 'string') {
    return <span className="text-2xl">{cryptoDetails.icon}</span>;
  }
  return <Coins className="h-6 w-6" />;
};

export const getCryptoDetails = (cryptoType: string): CryptoDetails => {
  const defaultDetails = {
    name: cryptoType,
    confirmations: 3,
    explorer: 'https://blockchair.com',
    icon: <Bitcoin className="h-6 w-6" />
  };

  return CRYPTO_DETAILS[cryptoType as CryptoType] || defaultDetails;
};