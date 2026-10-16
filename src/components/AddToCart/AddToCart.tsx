import { ShoppingBag } from "lucide-react";

interface AddToCartProps {
  totalPrice: number;
  handleAddToCart: () => void;
}

function AddToCart({
  totalPrice,
  handleAddToCart,
}: AddToCartProps) {
  return (
    <div className="flex flex-1">
      <button
        type="button"
        onClick={handleAddToCart}
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#6F4E37] py-4 font-semibold text-white transition hover:bg-[#5C4033]"
      >
        <ShoppingBag size={19} />

        Add to Cart · {totalPrice} SAR
      </button>
    </div>
  );
}

export default AddToCart;