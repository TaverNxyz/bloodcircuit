export interface Product {
  id: string;
  name: string;
  prices: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  description: string;
  features: string[];
  imageUrl?: string;
  videoUrl?: string;
}