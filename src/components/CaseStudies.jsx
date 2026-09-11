import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Target, Search, Laptop } from 'lucide-react'
 
const clientNames = [
  'Education', 'SaaS', 'Fashion', 'Healthcare', 'Real Estate', 'E-commerce', 'Professional Services', 'Local Brands'
]

const caseStudies = [
  {
    client: 'B2B SaaS Pipeline Growth',
    industry: 'SEO Growth',
    badgeMetric: '+143%',
    badgeLabel: 'Organic Traffic',
    description: 'Technical SEO cleanup, buying-intent content and conversion-focused service pages helped the brand turn organic search into qualified demo requests.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    icon: Search,
    stats: [
      { label: 'ORGANIC TRAFFIC', value: '+143%' },
      { label: 'PAGE 1 KEYWORDS', value: '27 → 81' },
      { label: 'LEADS', value: '+62%' },
    ],
  },
  {
    client: 'Real Estate Lead Generation',
    industry: 'Google Ads',
    badgeMetric: '-45%',
    badgeLabel: 'Cost Per Lead',
    description: 'Campaign restructuring, location-level keyword control and sharper landing page messaging reduced enquiry costs while improving lead quality.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    icon: Target,
    stats: [
      { label: 'AD SPEND', value: '-15%' },
      { label: 'LEADS', value: '+110%' },
      { label: 'CPL', value: '⬇ 45%' },
    ],
  },
  {
    client: 'E-Commerce Website Growth',
    industry: 'Website Transformation',
    badgeMetric: '3.2x',
    badgeLabel: 'Conversion Rate',
    description: 'A faster mobile-first buying experience, better product storytelling and improved offer placement helped turn paid traffic into revenue.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop',
    icon: Laptop,
    stats: [
      { label: 'LOAD SPEED', value: '4s → 1.2s' },
      { label: 'CONVERSION', value: '1.2% → 3.8%' },
      { label: 'REVENUE', value: '+215%' },
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
            <Link to="/contact" className="relative z-10 inline-flex items-center gap-2.5 bg-white text-primary-500 border border-primary-500/50 font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-200 shadow-sm group">
              Request Similar Results <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
        
        {/* ── 3 PRO CASE STUDY CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, i) => {
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
                  <div className="pt-6 border-t border-neutral-100 flex flex-col gap-3">
                    {study.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="text-[10px] font-extrabold text-primary-500 uppercase tracking-wider">
                          {stat.label}
                        </div>
                        <div className="text-lg font-display font-black text-neutral-900">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                 
              </div>
            )
          })}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
          <p className="text-sm font-semibold text-neutral-700 text-center">
            Want numbers like these for your business? Start with a free growth audit.
          </p>
          <Link to="/contact" className="btn-red rounded-full px-6 py-3 text-sm">
            Get Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
      </div>
    </section>
  )
}
