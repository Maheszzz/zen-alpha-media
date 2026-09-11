import { Search, Bot, FileText, Target, Laptop, Share2, Mail, MousePointerClick, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'seo',
    icon: Search,
    title: 'SEO',
    desc: 'Technical SEO, local SEO, content planning and authority building that compound over time.',
    bullets: ['Technical audits', 'Local SEO', 'Content clusters'],
  },
  {
    id: 'aeo-geo',
    icon: Bot,
    title: 'AEO & GEO',
    desc: 'Structure your brand so AI answer engines can understand, cite and recommend your business.',
    bullets: ['Schema strategy', 'Entity clarity', 'Answer-led content'],
  },
  {
    id: 'content-marketing',
    icon: FileText,
    title: 'Content Marketing',
    desc: 'Commercial blogs, landing pages, service pages and copy systems written to convert.',
    bullets: ['SEO briefs', 'Sales copy', 'Editorial calendars'],
  },
  {
    id: 'paid-ads',
    icon: Target,
    title: 'Google & Meta Ads',
    desc: 'Full-funnel acquisition across Google, YouTube, Facebook and Instagram with clean tracking.',
    bullets: ['Campaign setup', 'Creative testing', 'CRO feedback'],
  },
  {
    id: 'web-development',
    icon: Laptop,
    title: 'Web Development',
    desc: 'Fast, modern, SEO-friendly websites and landing pages built around conversion goals.',
    bullets: ['Responsive design', 'Core Web Vitals', 'Lead capture'],
  },
  {
    id: 'social-media',
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Platform-specific content calendars, creative direction and consistent brand communication.',
    bullets: ['Content calendars', 'Reels direction', 'Community prompts'],
  },
  {
    id: 'email-automation',
    icon: Mail,
    title: 'Email Automation',
    desc: 'Lead nurture flows, abandoned enquiry follow-ups and retention campaigns that keep selling.',
    bullets: ['Welcome flows', 'Lead nurturing', 'Retention emails'],
  },
  {
    id: 'cro',
    icon: MousePointerClick,
    title: 'Conversion Optimization',
    desc: 'Audit, test and improve the pages, forms and offers that decide whether traffic becomes revenue.',
    bullets: ['Landing audits', 'Form improvements', 'A/B test ideas'],
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
              Our Digital Growth Services
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

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['Audit first', 'Launch fast', 'Optimize weekly'].map((item) => (
              <div key={item} className="rounded-2xl bg-white border border-neutral-100 p-5 shadow-sm">
                <div className="text-primary-500 font-display font-black text-2xl mb-1">✓</div>
                <div className="text-sm font-extrabold text-neutral-900">{item}</div>
                <div className="text-xs text-neutral-500 mt-1">Clear ownership, timelines and reporting from day one.</div>
              </div>
            ))}
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
                  <ul className="space-y-2 mb-6">
                    {svc.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Left Red Arrow */}
                <div className="mt-auto pt-4">
                  <Link to={`/services/${svc.id === 'paid-ads' ? 'google-ads' : svc.id}`} className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-primary-500">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
