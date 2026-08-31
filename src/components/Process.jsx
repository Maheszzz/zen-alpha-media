import { Compass, GitBranch, Rocket, BarChart3, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    number: '01',
    icon: Compass,
    title: 'Discover',
    desc: 'We understand your business, audience, and growth goals.',
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'Strategize',
    desc: 'We craft a data-driven strategy tailored to your business.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execute',
    desc: 'We launch high-performing campaigns that deliver ROI.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Optimize',
    desc: 'We analyze, optimize, and scale for maximum revenue.',
  },
]

export default function Process() {
  return (
    <section className="py-28 lg:py-32 bg-[#FAF9F9] relative overflow-hidden border-t border-b border-neutral-100" id="process">

      {/* Background Dot Accent (Top Right) */}
      <div className="absolute right-0 top-12 w-48 h-32 opacity-25 pointer-events-none hidden lg:block">
        <div className="w-full h-full bg-[radial-gradient(#E30613_1.5px,transparent_1.5px)] [bg-size:12px_12px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* ── LEFT SIDEBAR: COPY & LINK (4 cols) ── */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 w-max mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[11px] font-extrabold tracking-widest text-primary-600 uppercase">
                OUR APPROACH
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black tracking-tight text-neutral-900 leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[44px]">
              A Proven Process <br />
              <span className="text-primary-500">That Drives Growth</span>
            </h2>

            {/* Accent Line */}
            <div className="w-12 h-[2.5px] bg-primary-500 rounded-full mb-6" />

            {/* Paragraph */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 max-w-[380px]">
              We follow a strategic, data-backed process to ensure every campaign delivers maximum impact.
            </p>

            {/* Link Button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors group w-max"
            >
              Know Our Process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── RIGHT STEPS GRID: 4 STEP CIRCLES (8 cols) ── */}
          <div className="lg:col-span-8 relative pt-4">

            {/* Horizontal Red Dotted Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-red-200 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step) => {
                const IconComponent = step.icon
                return (
                  <div key={step.number} className="flex flex-col items-center text-center group">

                    {/* Circle Icon Container */}
                    <div className="w-20 h-20 rounded-full bg-white border border-neutral-200/90 flex items-center justify-center mb-5 relative shadow-sm group-hover:border-primary-500 group-hover:shadow-md transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-neutral-800 group-hover:text-primary-500 transition-colors duration-300 stroke-[1.8]" />
                    </div>

                    {/* Step Number Badge Pill */}
                    <div className="px-3.5 py-0.5 rounded-full bg-red-50 border border-red-100 text-primary-600 font-extrabold text-xs mb-3 shadow-2xs">
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-display font-extrabold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed max-w-[190px]">
                      {step.desc}
                    </p>

                  </div>
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
