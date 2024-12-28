export const PAYMENT_METHODS = [
  { text: "BTC: bc1qe7zzyk3264fwya3y0wj4x4wy6tvd86cf46e39u" },
  { text: "LTC: ltc1quu6df4vvum7640sfywjsxvvcsh5ax9pwq4dsu9" },
  { text: "XMR: 48tjPFQaKqSA7WaZGMsXK11nZ8qPwT8J4QU8Gkc5Y5h9TtKQhHhxYAF1bWHNTXPXH1HNQdyeCJiKhDFHJiGwQCrVGkHHm7q" },
  { text: "SOL: DxKc73eJX5J1kY5ND69hnLs7ox64Q2exN9dMJGaHwjJY" },
] as const;

export type CryptoType = "BTC" | "LTC" | "XMR" | "SOL";

export const CRYPTO_DETAILS = {
  BTC: {
    name: "Bitcoin",
    confirmations: 3,
    explorer: "https://blockchair.com/bitcoin",
    icon: "₿"
  },
  LTC: {
    name: "Litecoin",
    confirmations: 6,
    explorer: "https://blockchair.com/litecoin",
    icon: "Ł"
  },
  XMR: {
    name: "Monero",
    confirmations: 10,
    explorer: "https://localmonero.co/blocks",
    icon: "ɱ"
  },
  SOL: {
    name: "Solana",
    confirmations: 1,
    explorer: "https://solscan.io",
    icon: "◎"
  }
} as const;