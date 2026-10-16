import { Search, SlidersHorizontal } from "lucide-react";


function SearchBar() {
  return <>
   <div className="mx-5 mt-6 flex h-14 items-center gap-3 rounded-2xl bg-white px-4 shadow-sm">
      <Search
        size={22}
        strokeWidth={1.8}
        className="text-[#6F4E37]"
      />

      <input
        type="text"
        placeholder="Search coffee, drinks, bakery..."
        className="flex-1 bg-transparent text-sm text-[#3E2723] outline-none placeholder:text-[#A69A8C]"
      />

      <button type="button" aria-label="Filters">
        <SlidersHorizontal
          size={20}
          strokeWidth={1.8}
          className="text-[#6F4E37]"
        />
      </button>
    </div>
  </>
   
  
}



export default SearchBar;