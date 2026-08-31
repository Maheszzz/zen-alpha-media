import { LineChart, TrendingUp, User, Megaphone } from 'lucide-react'

const metrics = [
  {
    icon: LineChart,
    value: '₹2.45 Cr+',
    label: 'Revenue Generated',
    sublabel: 'for Our Clients',
  },
  {
    icon: TrendingUp,
    value: '147%',
    label: 'Average Increase in',
    sublabel: 'Conversions',
  },
  {
    icon: User,
    value: '200+',
    label: 'Brands Scaled',
    sublabel: 'Across India',
  },
  {
    icon: Megaphone,
    value: '500+',
    label: 'Campaigns Launched',
    sublabel: 'Successfully',
  },
]

export default function Metrics() {
  return (
    <section className="py-14 bg-white border-t border-neutral-100 relative overflow-hidden" id="results">
      
      {/* Background Dot Matrix Accent (Far Right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-32 opacity-25 pointer-events-none hidden lg:block">
        <div className="w-full h-full bg-[radial-gradient(#E30613_1.5px,transparent_1.5px)] [bg-size:12px_12px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-neutral-200">
          {metrics.map((metric, i) => {
            const IconComponent = metric.icon
            return (
              <div
                key={i}
                className="flex items-center gap-4 lg:px-8 first:pl-0 last:pr-0"
              >
                {/* Soft Red Rounded Square Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-red-50/80 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-primary-500 stroke-[2.2]" />
                </div>

                {/* Stat Number & Description */}
                <div>
                  <div className="text-3xl sm:text-[34px] font-display font-black tracking-tight leading-none mb-1.5 text-neutral-900">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-neutral-800 leading-snug">
                    {metric.label} <br />
                    <span className="text-neutral-500 font-normal">{metric.sublabel}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
