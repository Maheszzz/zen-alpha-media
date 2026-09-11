import { motion } from 'framer-motion'
import { BarChart, Filter, Bot, LineChart } from 'lucide-react'

const reasons = [
  {
    num: '01',
    icon: BarChart,
    title: 'Data-Driven Strategy',
    desc: 'Every engagement starts with market research, tracking cleanup, competitor analysis and measurable growth targets.',
  },
  {
    num: '02',
    icon: Filter,
    title: 'Full-Funnel Marketing',
    desc: 'We connect awareness, lead capture, nurture and conversion so channels support each other instead of operating in silos.',
  },
  {
    num: '03',
    icon: Bot,
    title: 'SEO + AI Search Ready',
    desc: 'Your website is structured for Google, local search, featured snippets and emerging answer engines.',
  },
  {
    num: '04',
    icon: LineChart,
    title: 'Transparent Reporting',
    desc: 'You see what changed, why it changed and what we are doing next through simple dashboards and monthly strategy calls.',
  },
]

export default function WhyZenAlpha() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why-us">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[12px] font-extrabold tracking-widest text-primary-500 uppercase">
              THE ZENALPHA ADVANTAGE
            </span>
            <span className="w-6 h-[2px] bg-primary-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-neutral-900 tracking-tight leading-tight">
            Why Businesses Choose ZenAlpha
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 hover:border-primary-100 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                {/* Big Number Background */}
                <span className="absolute -bottom-4 -right-4 text-9xl font-display font-black text-neutral-100 group-hover:text-red-50 transition-colors pointer-events-none select-none z-0">
                  {item.num}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary-500 font-bold font-display text-lg">{item.num} —</span>
                    <h3 className="text-xl font-display font-bold text-neutral-900">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
