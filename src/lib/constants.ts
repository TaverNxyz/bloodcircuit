export const CRYPTO_DETAILS = {
  BTC: {
    name: 'Bitcoin',
    icon: '₿',
    confirmations: 3,
    explorer: 'https://blockchair.com/bitcoin/address/',
  },
  LTC: {
    name: 'Litecoin',
    icon: 'Ł',
    confirmations: 6,
    explorer: 'https://blockchair.com/litecoin/address/',
  },
} as const;

export type CryptoType = keyof typeof CRYPTO_DETAILS;

export const PAYMENT_METHODS = [
  { text: 'BTC: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' },
  { text: 'LTC: ltc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' },
];