import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, ChevronLeft, ChevronRight, BarChart2, ShoppingBag } from 'lucide-react'
 
const clientNames = [
  'iuLearn', 'TechFin', 'Luxe Wear', 'GrowthBox', 'ShopNow', 'HealthPlus', 'BuildCo', 'EduLearn'
]

const caseStudies = [
  {
    client: 'TechFin App',
    industry: 'FinTech',
    badgeMetric: '250%',
    badgeLabel: 'Increase in ROAS',
    description: 'Scaled user acquisition across Meta and Google, reducing CPA by 40% in just 3 months while tripling qualified leads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    icon: BarChart2,
    stats: [
      { label: 'INCREASE IN ROAS', value: '250%' },
      { label: 'CPA REDUCED BY',   value: '40%' },
      { label: 'QUALIFIED LEADS',  value: '3X' },
    ],
  },
  {
    client: 'Luxe Wear',
    industry: 'E-Commerce',
    badgeMetric: '3.2x',
    badgeLabel: 'Revenue Growth',
    description: 'Overhauled Google Shopping & Performance Max architecture, resulting in record-breaking Diwali sales.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    icon: ShoppingBag,
    stats: [
      { label: 'REVENUE GROWTH', value: '3.2x' },
      { label: 'ROAS ACHIEVED',  value: '620%' },
      { label: 'SALES INCREASE', value: '178%' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="case-studies">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ── HEADER ROW WITH RISING RED ARROW GRAPHIC ── */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 w-max mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[11px] font-extrabold tracking-widest text-primary-600 uppercase">
                PROVEN RESULTS
              </span>
            </div>
            
            {/* Headline */}
            <h2 className="font-display font-black tracking-tight text-neutral-900 leading-[1.06] mb-6 text-4xl sm:text-5xl lg:text-[56px]">
              Results that <br />
              <span className="text-primary-500">speak for themselves.</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-[480px]">
              From ambitious startups to established enterprises, we deliver measurable growth that drives real business impact.
            </p>
          </div>
          
          {/* Right Column: Sleek Pro Red Growth Arrow & View All Button */}
          <div className="lg:col-span-5 relative flex items-center justify-end h-[160px] lg:h-[200px]">
            {/* Pro Level Rising Red Arrow SVG */}
            <svg
              viewBox="0 0 500 200"
              className="absolute right-0 top-0 w-full h-full pointer-events-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Soft red swoosh background shadow */}
              <path
                d="M 40 180 C 180 175 300 130 450 30"
                stroke="url(#red-swoosh-grad)"
                strokeWidth="48"
                strokeLinecap="round"
                opacity="0.18"
              />
              {/* Solid red sharp arrow head */}
              <path
                d="M 420 15 L 465 25 L 445 65 Z"
                fill="#E30613"
                opacity="0.9"
              />
              {/* Dashed red trajectory line */}
              <path
                d="M 50 175 C 180 170 300 120 450 30"
                stroke="#E30613"
                strokeWidth="3.5"
                strokeDasharray="7 7"
              />
              {/* End red dot */}
              <circle cx="452" cy="28" r="6" fill="#E30613" />
              
              <defs>
                <linearGradient id="red-swoosh-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E30613" stopOpacity="0" />
                  <stop offset="60%" stopColor="#E30613" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#E30613" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* View All Case Studies Pill Button */}
            <button className="relative z-10 inline-flex items-center gap-2.5 bg-white text-primary-500 border border-primary-500/50 font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-200 shadow-sm group">
              View All Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
        </div>
        
        {/* ── CLIENT NAMES MARQUEE STRIP ── */}
        <div className="py-6 border-t border-b border-neutral-100 mb-14 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-[840px] px-4 text-neutral-800 font-bold text-base sm:text-lg">
            {clientNames.map((name, i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="hover:text-primary-500 transition-colors cursor-default whitespace-nowrap">
                  {name}
                </span>
                <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
        
        {/* ── 2 PRO CASE STUDY CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, i) => {
            const IconComponent = study.icon
            return (
              <div
                key={i}
                className="bg-white rounded-3xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Top Image Container */}
                <div className="relative h-[280px] sm:h-[320px] overflow-hidden bg-neutral-900">
                  <img
                    src={study.image}
                    alt={`${study.client} — ${study.industry} digital marketing case study by ZenAlpha Media`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />

                  {/* Top Left Industry Tag */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-neutral-900 shadow-sm">
                    {study.industry}
                  </div>

                  {/* Bottom Right Red Floating Pill Badge */}
                  <div className="absolute bottom-5 right-5 bg-primary-500 text-white rounded-2xl px-5 py-3 shadow-lg shadow-red-500/30 flex items-center gap-2.5">
                    <TrendingUp className="w-5 h-5 text-white" />
                    <div>
                      <div className="font-display font-black text-xl leading-none">{study.badgeMetric}</div>
                      <div className="text-[10px] font-bold text-white/90 uppercase tracking-wide mt-0.5">{study.badgeLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 sm:p-9 flex flex-col flex-grow">
                  <h3 className="text-2xl font-display font-extrabold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {study.client}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                    {study.description}
                  </p>

                  {/* Bottom Micro-Metrics Bar (3 columns inside card) */}
                  <div className="pt-6 border-t border-neutral-100 grid grid-cols-3 gap-3 items-center">
                    {study.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${idx > 0 ? 'border-l border-neutral-200 pl-4' : ''}`}
                      >
                        <div className="flex items-center gap-2.5">
                          {idx === 0 && (
                            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-4 h-4 text-primary-500" />
                            </div>
                          )}
                          <div>
                            <div className="text-[10px] font-extrabold text-primary-500 uppercase tracking-wider leading-tight">
                              {stat.label}
                            </div>
                            <div className="text-xl sm:text-2xl font-display font-black text-neutral-900 leading-none mt-1">
                              {stat.value}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )
          })}
        </div>
        
        {/* ── BOTTOM CAROUSEL CONTROLS ── */}
        <div className="flex justify-center items-center gap-3">
          <button
            aria-label="Previous Case Study"
            className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 hover:text-primary-500 hover:border-red-200 transition-colors shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next Case Study"
            className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-md shadow-red-500/25 hover:bg-primary-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  )
}
