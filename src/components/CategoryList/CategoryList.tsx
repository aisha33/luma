
import {
  Coffee,
  Croissant,
  CakeSlice,
  CupSoda,
  LayoutGrid,
} from "lucide-react";

const categories = [
  { name: "Coffee", icon: Coffee },
  { name: "Bakery", icon: Croissant },
  { name: "Dessert", icon: CakeSlice },
  { name: "Cold Drinks", icon: CupSoda },
  { name: "All Menu", icon: LayoutGrid },
];

function CategoryList() {
  return <>
    <section className="mt-6">
      <div className="flex gap-4 overflow-x-auto px-5 pb-2 scrollbar-hide">
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              type="button"
              className={`flex min-w-[88px] flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4 ${
                index === 0
                  ? "bg-[#F1E7D8] text-[#6F4E37] shadow-sm"
                  : "bg-white text-[#6F6257]"
              }`}
            >
              <Icon size={25} strokeWidth={1.6} />

              <span className="whitespace-nowrap text-xs font-medium">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  </>
}

export default CategoryList




