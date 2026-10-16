import ProductCard from "../ProductCard/ProductCard";
import { products } from "../../data/products";
import type { Product } from "../../types/product";

interface ProductListProps {
  onProductClick: (product: Product) => void;
}

const ProductList = ({
  onProductClick,
}: ProductListProps) => {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between px-5">
        <h2 className="text-2xl font-bold text-[#2C2C2C]">
          Popular
        </h2>

        <button
          type="button"
          className="text-sm font-medium text-[#6F4E37]"
        >
          See All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto px-5 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onProductClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;