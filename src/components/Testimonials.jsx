import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "ZenAlpha completely transformed our Google Ads strategy. Within 60 days our ROAS went from 2.1× to over 7×. They don't just manage campaigns — they think like business partners.",
    name: 'Rohan Kapoor',
    title: 'Founder',
    company: 'TechFin App',
    service: 'Google Ads Management',
    initials: 'RK',
    color: 'bg-blue-500',
  },
  {
    quote: "Our Meta campaigns were burning money. ZenAlpha restructured everything in 3 weeks — new creative angles, audience segmentation, the works. Black Friday was our biggest revenue day ever.",
    name: 'Priya Sharma',
    title: 'Head of Marketing',
    company: 'Luxe Wear',
    service: 'Meta Advertising',
    initials: 'PS',
    color: 'bg-purple-500',
  },
  {
    quote: "The website they built us loads in under 1.5 seconds and converts at 4.8%. Our previous agency took 6 months and delivered a slow WordPress site. ZenAlpha shipped in 6 weeks.",
    name: 'Aditya Menon',
    title: 'CEO',
    company: 'BuildCo India',
    service: 'Web Development',
    initials: 'AM',
    color: 'bg-green-500',
  },
  {
    quote: "Organic traffic grew 120% year-over-year after 6 months of working with their SEO team. We now rank #1 for 8 of our 10 target keywords in Bangalore.",
    name: 'Sneha Reddy',
    title: 'Marketing Manager',
    company: 'HealthPlus Clinics',
    service: 'SEO & Content Strategy',
    initials: 'SR',
    color: 'bg-orange-500',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef(null)

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % testimonials.length)
    }, 5000)
  }

  const stopAuto = () => clearInterval(intervalRef.current)

  useEffect(() => {
    startAuto()
    return stopAuto
  }, [])

  const go = (dir) => {
    stopAuto()
    setDirection(dir)
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length)
    startAuto()
  }

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  }

  const t = testimonials[current]

  return (
    <section className="section-padding bg-neutral-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="tag-red mb-4 mx-auto">Client Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-neutral-900">
            Trusted by ambitious brands.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Carousel */}
          <div
            className="relative card-white rounded-3xl p-10 md:p-14 overflow-hidden"
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
          >
            {/* Background quote mark */}
            <Quote className="absolute top-8 right-8 w-20 h-20 text-primary-500/6 fill-primary-500/6" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote cite={`https://zenalphamedia.com/#testimonial-${t.company.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed mb-8 italic">
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">{t.name}</div>
                    <div className="text-sm text-neutral-500">
                      {t.title}, {t.company}
                    </div>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <span className="tag-red text-[10px]">{t.service}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { stopAuto(); setDirection(i > current ? 1 : -1); setCurrent(i); startAuto() }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary-500 w-6' : 'bg-neutral-200 w-2 hover:bg-neutral-300'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(-1)}
                  className="w-10 h-10 rounded-full border-2 border-neutral-200 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors shadow-[0_4px_12px_rgba(227,6,19,0.3)]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
