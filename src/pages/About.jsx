import { motion } from 'framer-motion'
import { Target, Trophy, Users, Zap } from 'lucide-react'
import Team from '../components/Team'
import { useSEO } from '../hooks/useSEO'

const values = [
  {
    icon: Target,
    title: 'Data Over Opinion',
    desc: "Every decision we make is backed by hard numbers. If it doesn't drive ROI, we don't do it."
  },
  {
    icon: Zap,
    title: 'Relentless Execution',
    desc: 'We move fast. Campaigns are launched quickly and optimised daily to outpace the competition.'
  },
  {
    icon: Trophy,
    title: 'Excellence as Standard',
    desc: 'From ad copy to landing page architecture, we accept nothing less than world-class quality.'
  },
  {
    icon: Users,
    title: 'True Partnership',
    desc: "We treat your ad spend like it's our own. Total transparency, zero vanity metrics."
  }
]

export default function About() {
  useSEO({
    title: 'About ZenAlpha Media | Expert Digital Marketing Team in Chennai, India',
    description: 'Meet the senior growth marketers and developers behind ZenAlpha Media. Our Chennai-based team of ex-platform insiders has managed over ₹20 Cr in ad spend across Google and Meta — delivering measurable, scalable revenue without vanity metrics.',
    keywords: 'about ZenAlpha Media, digital marketing team Chennai, growth marketing experts India, performance marketing agency team, senior media buyers, Google Ads specialists, Meta Ads experts',
    ogImage: 'https://zenalphamedia.com/logo.png'
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Hero block */}
      <section className="pt-32 pb-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="tag-red mb-6">About Us</p>
              <h1 className="text-5xl md:text-7xl font-display font-black text-neutral-900 tracking-tight leading-tight mb-7">
                We are{' '}
                <span className="text-primary-500 relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-1.5 after:bg-primary-500/25 after:rounded-full">
                  ZenAlpha.
                </span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-5">
                Founded on the belief that most agencies hide behind vanity metrics, we built ZenAlpha Media to do one thing:{' '}
                <strong className="text-neutral-900 font-bold">drive measurable, scalable revenue for our partners.</strong>
              </p>
              <p className="text-base text-neutral-500 leading-relaxed">
                Based in India, our team consists of ex-platform insiders and senior growth marketers who have managed over ₹20Cr in ad spend across Google and Meta. We don't employ junior account managers — when you work with us, you work directly with the experts.
              </p>
            </motion.div>

            {/* Mission quote card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="card-white rounded-3xl p-10 md:p-14 border-l-4 border-primary-500">
                <div className="text-5xl text-primary-500/20 font-display font-black leading-none mb-4">"</div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 leading-snug mb-8">
                  Our mission is to out-perform your in-house team at a fraction of the cost.
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">ZA</div>
                  <div>
                    <div className="font-bold text-neutral-900">ZenAlpha Leadership</div>
                    <div className="text-sm text-neutral-500">Chennai, India</div>
                  </div>
                </div>
              </div>
              {/* Experience stat */}
              <div className="absolute -bottom-5 -right-5 bg-primary-500 text-white rounded-2xl p-5 shadow-[0_8px_24px_rgba(227,6,19,0.3)] hidden md:block">
                <div className="text-3xl font-display font-black">5+</div>
                <div className="text-xs font-bold opacity-80 uppercase tracking-wider">Years</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="tag-red mb-4 mx-auto">Our Core Values</p>
            <h2 className="text-4xl md:text-5xl font-display font-black text-neutral-900">
              What drives us forward.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-white rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-neutral-900 mb-3">{value.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team section */}
      <Team />
    </div>
  )
}
