import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const avatarUrls = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-16">
      {/* Subtle background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-500/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-500/[0.02] blur-[80px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ── LEFT COLUMN: COPY & CTAs (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-4 z-20">
            {/* Top Pill Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 w-max mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-[11px] font-extrabold tracking-widest text-primary-600 uppercase">
                India's Premier Performance Agency
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display font-black tracking-tight text-neutral-900 leading-[1.05] mb-6 text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px]"
            >
              <span className="relative inline-block pb-1">
                Grow Your Business With
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '4rem' }}
                  transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 h-1 bg-primary-500 rounded-full"
                />
              </span>
              <br />
              <span className="text-primary-500">Smarter Digital Marketing.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 max-w-[480px] font-normal"
            >
              We help ambitious Indian businesses turn search, social, content and websites into a predictable pipeline of qualified leads, booked calls and revenue.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-[560px]"
            >
              {[
                { icon: TrendingUp, label: 'Performance-first strategy' },
                { icon: ShieldCheck, label: 'Transparent reporting' },
                { icon: CheckCircle2, label: 'Senior-led execution' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2.5 shadow-sm">
                  <Icon className="h-4 w-4 shrink-0 text-primary-500" />
                  <span className="text-[12px] font-bold leading-snug text-neutral-700">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                to="/contact"
                id="hero-primary-cta"
                className="inline-flex items-center gap-2.5 bg-primary-500 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-primary-600 shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/35 animate-glow"
              >
                Get a Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                id="hero-secondary-cta"
                className="inline-flex items-center gap-2.5 bg-white text-neutral-800 border border-neutral-300 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:border-neutral-800 hover:bg-neutral-50"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Mini Service Bar */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-[13px] font-semibold text-neutral-500 mb-8"
            >
              <span>SEO</span>
              <span className="text-neutral-300">|</span>
              <span>AI Search</span>
              <span className="text-neutral-300">|</span>
              <span>Google Ads</span>
              <span className="text-neutral-300">|</span>
              <span>Meta Ads</span>
              <span className="text-neutral-300">|</span>
              <span>Web Development</span>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2.5 flex-shrink-0">
                {avatarUrls.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`ZenAlpha Media client ${i + 1} — trusted digital marketing partner`}
                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                ))}
                <div className="w-9 h-9 rounded-full bg-primary-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  200+
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium text-neutral-600">
                <strong className="font-bold text-neutral-900">200+ brands</strong> scaled with us across India
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: HERO ARTWORK IMAGE (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[760px] flex items-center justify-center animate-float-slow">
              <img
                src="/exact-hero-artwork.jpg"
                alt="ZenAlpha Media — data-driven performance marketing and digital growth strategy illustration"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
