import { Minus, Plus, X } from "lucide-react";
import type { Product } from "../../types/product";
import { useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
//Props الخاصة بـ ProductDetails
//create interface of ProductDetailsProps
interface ProductDetailsProps {
  product: Product | null; // product show
  onClose: () => void; //onClose عبارة عن function لا تستقبل أي parameters ولا ترجع قيمة
    onAddToCart: (
    product: Product,
    size: string,
    extras: string[],
    quantity: number
  ) => void;
}
const sizes = ["Small", "Medium", "Large"];

const extras = [
  { name: "Extra Cheese", price: 3 },
  { name: "Caramel", price: 2 },
  { name: "Whipped Cream", price: 2 },
];
//Component declaration
const ProductDetails = ({//هنا نستقبل الـ Props. and use destructuring
  product,
  onClose,
  onAddToCart,
}: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]) //String Array and be empty first
  const [quantity, setQuantity] = useState(1)
  if (!product) return null;
    const toggleExtra = (extraName: string) => {
    setSelectedExtras((currentExtras) => {
      if (currentExtras.includes(extraName)) {
        return currentExtras.filter((extra) => extra !== extraName);
      }
      return [...currentExtras, extraName];
    });
  };
  // +
  const handleIncrease=()=>{
    setQuantity((currentQuantity)=>currentQuantity + 1)
  }
  //-
   const handleDecrease = () => {
    setQuantity((currentQuantity) =>
      currentQuantity > 1 ? currentQuantity - 1 : 1
    );
  };

  // Total of extra
 const extrasTotal = extras
    .filter((extra) => selectedExtras.includes(extra.name))
    .reduce((total, extra) => total + extra.price, 0);

  // Account the price
const totalPrice =( product.price+extrasTotal) * quantity;

const handleAddToCart = ()=>{
  onAddToCart(product, selectedSize, selectedExtras,quantity); //props to Home
   onClose();
};




  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-md overflow-hidden rounded-t-[32px] bg-[#F8F5F2] shadow-2xl">
        {/* Image */}
        <div className="relative h-64">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#3E2723] shadow-sm"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 pb-7 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#2C2C2C]">
                {product.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#8B8177]">
                {product.description}
              </p>
            </div>

            <span className="whitespace-nowrap text-xl font-bold text-[#6F4E37]">
              {product.price} SAR
            </span>
          </div>

          {/* Size */}
           <div className="mt-6">
            <h3 className="mb-3 font-semibold text-[#3E2723]">
              Choose Size
            </h3>

            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)} //تنفيذ الدالة عند الضغط وليس أثناء رسم الصفحة.
                  className={`flex-1 rounded-2xl border px-3 py-3 text-sm font-medium ${
                    selectedSize === size
                      ? "border-[#6F4E37] bg-[#F1E7D8] text-[#6F4E37]"
                      : "border-[#E5DED5] bg-white text-[#8B8177]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Extras */}
           <div className="mt-6">
            <h3 className="mb-3 font-semibold text-[#3E2723]">
              Extras
            </h3>

            <div className="space-y-3">
              {extras.map((extra) => {
                const isSelected =
                  selectedExtras.includes(extra.name);

                return (
                  <button
                    key={extra.name}
                    type="button"
                    onClick={() => toggleExtra(extra.name)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 ${
                      isSelected
                        ? "border-[#6F4E37] bg-[#F1E7D8]"
                        : "border-transparent bg-white"
                    }`}
                  >
                    <span className="text-sm text-[#5C5148]">
                      {extra.name}
                    </span>

                    <span className="text-sm font-medium text-[#6F4E37]">
                      +{extra.price} SAR
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

      <div className="mt-6 flex gap-3">
            
            {/* Quantity */}
            <div className="flex items-center rounded-2xl bg-white px-3">
              <button
                type="button"
                onClick={handleDecrease}
                className="flex h-11 w-8 items-center justify-center text-[#6F4E37]"
              >
                <Minus size={18} />
              </button>

              <span className="w-7 text-center font-semibold text-[#3E2723]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={handleIncrease}
                className="flex h-11 w-8 items-center justify-center text-[#6F4E37]"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Add To Cart */}
            <AddToCart
  totalPrice={totalPrice}
  handleAddToCart={handleAddToCart}
/>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;