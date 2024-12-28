export const PAYMENT_METHODS = [
  { text: "BTC: bc1qe7zzyk3264fwya3y0wj4x4wy6tvd86cf46e39u" },
  { text: "LTC: ltc1quu6df4vvum7640sfywjsxvvcsh5ax9pwq4dsu9" },
  { text: "PayPal: paypal.me/YourPayPalUsername" }
] as const;

export type CryptoType = "BTC" | "LTC";

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
  }
} as const;