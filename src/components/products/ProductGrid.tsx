import ProductCard from "@/components/ProductCard";

interface Product {
  id: string;
  name: string;
  prices: {
    daily: number;
    weekly: number;
    monthly: number;
  };
  description: string;
  features: string[];
  videoUrl?: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const { statusProduct, otherProducts } = {
    statusProduct: products.find(p => p.id === "rust"),
    otherProducts: products.filter(p => p.id !== "rust")
  };

  return (
    <div className="relative">
      {statusProduct && (
        <div className="max-w-md">
          <ProductCard product={statusProduct} />
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {otherProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;