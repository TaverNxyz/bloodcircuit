import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const { statusProduct, otherProducts } = {
    statusProduct: products.find(p => p.id === "rust"),
    otherProducts: products.filter(p => p.id !== "rust")
  };

  return (
    <>
      {statusProduct && (
        <div className="max-w-md mx-auto mb-12">
          <ProductCard product={statusProduct} />
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {otherProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};