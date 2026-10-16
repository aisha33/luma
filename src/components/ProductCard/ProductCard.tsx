import { Heart, Plus, Star, Clock3 } from "lucide-react";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
  onAdd?: (product: Product) => void;
}

const ProductCard = ({ product, onAdd }: ProductCardProps) => {
  return <>
    <article className="min-w-[230px] overflow-hidden rounded-3xl bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 md:min-w-0">
      <div className="relative h-52">
       <img
  src={product.image}
  alt={product.name}
  loading="lazy"
  className="h-full w-full object-cover  scrollbar-hide transition-transform duration-500 hover:scale-105"
/>

        <button
          type="button"
          aria-label={`Add ${product.name} to favorites`}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm"
        >
          <Heart size={19} />
        </button>

        <button
          type="button"
          onClick={() => onAdd?.(product)}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#6F4E37] text-white shadow-lg"
        >
          <Plus size={23} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-[#2C2C2C]">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#8B8177]">
          {product.description}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-[#8B8177]">
          <span className="flex items-center gap-1">
            <Star size={14} className="fill-[#C69C5D] text-[#C69C5D]" />
            {product.rating}
          </span>

          <span className="flex items-center gap-1">
            <Clock3 size={14} />
            {product.preparationTime} min
          </span>
        </div>

        <p className="mt-3 text-lg font-bold text-[#3E2723]">
          {product.price} SAR
        </p>
      </div>
    </article>
  </>
};

export default ProductCard;