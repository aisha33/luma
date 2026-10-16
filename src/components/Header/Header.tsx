import { Menu, ShoppingCart } from "lucide-react"


function Header() {
  return (
        <header className="px-5 pt-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Open menu"
          className="text-[#6F4E37]"
        >
          <Menu size={28} strokeWidth={1.8} />
        </button>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#3E2723]">
            Luma Cafe
          </h1>

          <p className="text-xs tracking-wide text-[#8B7355]">
            Brewed with Passion
          </p>
        </div>

        <button
          type="button"
          aria-label="Shopping cart"
          className="relative text-[#6F4E37]"
        >
          <ShoppingCart size={27} strokeWidth={1.8} />

          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#6F4E37] text-[10px] text-white">
            2
          </span>
        </button>
      </div>

      <div className="mx-auto mt-5 w-fit rounded-full bg-[#F1E7D8] px-5 py-2">
        <span className="text-sm font-medium text-[#5C4033]">
          Table 12
        </span>
      </div>
    </header>
  )
}

export default Header