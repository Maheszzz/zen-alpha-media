export default function PartnerBadges() {
  return (
    <section className="py-10 bg-white border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Centered Heading with Side Lines & Dots */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-red-200 max-w-[200px] sm:max-w-[320px] relative flex items-center justify-end">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 -mr-0.5" />
          </div>
          <span className="text-[11px] font-extrabold tracking-[0.18em] text-primary-500 uppercase whitespace-nowrap">
            TRUSTED BY 200+ BRANDS
          </span>
          <div className="flex-1 h-[1px] bg-red-200 max-w-[200px] sm:max-w-[320px] relative flex items-center justify-start">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 -ml-0.5" />
          </div>
        </div>

        {/* Brand Logos Row */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-10 md:gap-12 opacity-90 px-4">
          {/* Lenskart */}
          <div className="flex items-center gap-1.5 font-sans font-extrabold text-neutral-800 text-xl tracking-tight hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 100 40" className="w-10 h-6 fill-current text-neutral-800">
              <path d="M20 20 C20 12, 35 12, 45 20 C35 28, 20 28, 20 20 Z M55 20 C55 12, 70 12, 80 20 C70 28, 55 28, 55 20 Z" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
            <span>lenskart</span>
          </div>

          {/* boAt */}
          <div className="font-sans font-black italic text-2xl text-neutral-800 tracking-tighter hover:opacity-100 transition-opacity">
            bo<span className="text-neutral-900 font-extrabold">A</span>t
          </div>

          {/* zepto */}
          <div className="font-sans font-bold text-2xl text-neutral-800 tracking-tight lowercase hover:opacity-100 transition-opacity">
            zepto
          </div>

          {/* CARS 24 */}
          <div className="border-2 border-neutral-800 px-3 py-1 font-sans font-black text-sm tracking-wider text-neutral-900 rounded-sm hover:opacity-100 transition-opacity">
            CARS <span className="text-primary-500 font-black">24</span>
          </div>

          {/* Myntra */}
          <div className="flex items-center gap-1.5 font-sans font-bold text-lg text-neutral-800 tracking-tight hover:opacity-100 transition-opacity">
            <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-[11px] font-black flex items-center justify-center">M</span>
            Myntra
          </div>

          {/* TATA PLAY */}
          <div className="font-sans font-black text-base tracking-widest text-neutral-900 uppercase hover:opacity-100 transition-opacity">
            TATA <span className="text-neutral-900">PLAY</span>
          </div>
        </div>
      </div>
    </section>
  )
}
