import { ArrowRight } from "lucide-react";

const SpecialOffer = () => {
  return <>
    <section className="mx-5 mt-7 overflow-hidden rounded-[28px] bg-[#6F4E37]">
      <div className="relative flex min-h-[180px] items-center justify-between px-6 py-6">
        <div className="relative z-10 max-w-[58%] text-white">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#E8D9C5]">
            Today's Special
          </span>

          <h2 className="mt-2 text-3xl font-bold leading-tight">
            20% OFF
          </h2>

          <p className="mt-2 text-xs leading-5 text-[#F5EDE5]">
            Enjoy your favorite coffee with our special offer.
          </p>

          <button
            type="button"
            className="mt-4 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#6F4E37] transition-transform duration-200 hover:scale-105"
          >
            Order Now
            <ArrowRight size={15} />
          </button>
        </div>

        <img
          src="/images/special-offer.jpg"
          alt="Special coffee offer"
          className="absolute -right-8 h-44 w-44 rounded-full object-cover shadow-xl"
        />
      </div>
    </section>
 </>
};

export default SpecialOffer;