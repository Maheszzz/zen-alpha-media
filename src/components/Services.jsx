import { motion } from 'framer-motion'
import { Target, Search, Edit3, BarChart2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'performance-marketing',
    icon: Target,
    title: 'Performance Marketing',
    desc: 'ROI-focused ad campaigns across Google, Meta, YouTube & more.',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'Search Engine Optimization',
    desc: 'Rank higher, get discovered, and drive organic growth that lasts.',
  },
  {
    id: 'creative-branding',
    icon: Edit3,
    title: 'Creative & Branding',
    desc: 'Crafting powerful brands and creatives that connect and convert.',
  },
  {
    id: 'analytics',
    icon: BarChart2,
    title: 'Analytics & Reporting',
    desc: 'Real-time insights and clear reporting to track what truly matters.',
  },
]

export default function Services() {
  return (
    <section className="pt-20 pb-32 bg-[#FAF9F9] relative overflow-hidden" id="services">
      
      {/* Bottom Left Subtle Dot Matrix Accent */}
      <div className="absolute left-0 bottom-16 w-48 h-32 opacity-30 pointer-events-none hidden lg:block">
        <div className="w-full h-full bg-[radial-gradient(#E30613_1.5px,transparent_1.5px)] [bg-size:12px_12px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Header Row: Left Sidebar Copy & Right Carousel Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[12px] font-extrabold tracking-widest text-primary-500 uppercase">
                WHAT WE DO
              </span>
              <span className="w-6 h-[2px] bg-primary-500 rounded-full" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-extrabold text-neutral-900 tracking-tight leading-[1.12] mb-4">
              Performance Solutions <br />
              That Deliver
            </h2>
            
            <div className="w-12 h-[2px] bg-red-200 mb-6" />
            
            <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed mb-6 max-w-[420px]">
              End-to-end digital marketing services built to attract, engage, and convert your ideal audience.
            </p>
            
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors group"
            >
              Explore All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column Pagination Controls */}
          <div className="lg:col-span-7 flex justify-end gap-3 hidden sm:flex">
            <button
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-md shadow-red-500/25 hover:bg-primary-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const IconComponent = svc.icon
            return (
              <div
                key={svc.id}
                className="bg-white rounded-2xl border border-neutral-100 p-8 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group min-h-[300px] shadow-sm relative"
              >
                <div>
                  {/* Circular Icon in Soft Red Container */}
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300 stroke-[2]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-display font-extrabold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom Left Red Arrow */}
                <div className="mt-auto pt-4">
                  <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Bottom Sleek Red Angled Wave Transition Banner */}
      <div className="absolute bottom-0 left-0 right-0 h-12 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <path d="M0 48 L1440 24 L1440 48 Z" fill="#E30613" />
          <path d="M0 48 L1440 36 L1440 48 Z" fill="#C0000F" opacity="0.6" />
        </svg>
      </div>

    </section>
  )
}
