import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, Megaphone, Laptop, LineChart, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const allServices = [
  {
    id: 'google-ads',
    Icon: Search,
    title: 'Google Ads Management',
    desc: 'Capture high-intent traffic with precision-targeted Search, Display, and Performance Max campaigns.',
    features: ['Search & Shopping', 'Performance Max', 'YouTube Ads', 'Remarketing'],
  },
  {
    id: 'meta-ads',
    Icon: Megaphone,
    title: 'Meta Advertising',
    desc: 'Scroll-stopping creatives and advanced audience targeting across Facebook and Instagram.',
    features: ['Facebook & Instagram', 'Advantage+ Campaigns', 'Creative Testing', 'Retargeting'],
  },
  {
    id: 'web-development',
    Icon: Laptop,
    title: 'Web Development',
    desc: 'Lightning-fast, conversion-optimised landing pages and full-scale websites.',
    features: ['React & Next.js', 'E-commerce Solutions', 'Landing Page Optimisation', 'Headless CMS'],
  },
  {
    id: 'seo',
    Icon: LineChart,
    title: 'SEO & Content Strategy',
    desc: 'Dominate organic search rankings with data-driven content and technical SEO mastery.',
    features: ['Technical Audits', 'Keyword Strategy', 'Content Creation', 'Link Building'],
  },
]

export default function Services() {
  useSEO({
    title: 'Digital Marketing Services | Google Ads, Meta Ads, SEO & Web Development — ZenAlpha Media',
    description: 'Explore ZenAlpha Media\'s comprehensive digital marketing services: Google Ads management, Meta Advertising (Facebook & Instagram), SEO & content strategy, and high-converting web development — all designed for explosive, measurable business growth.',
    keywords: 'digital marketing services India, Google Ads management service, Meta Ads service, Facebook Ads management, SEO services, web development services, performance marketing services, PPC agency services, e-commerce marketing, lead generation services',
    ogImage: 'https://zenalphamedia.com/logo.png'
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <section className="pt-32 pb-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="tag-red mb-5">
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl md:text-7xl font-display font-black text-neutral-900 tracking-tight leading-tight mb-5"
          >
            Digital capabilities designed{' '}
            <span className="text-primary-500">for scale.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-600 leading-relaxed max-w-xl"
          >
            Everything you need to grow your business online — under one roof.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {allServices.map((svc, i) => {
              const { Icon } = svc
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-white rounded-2xl p-10 flex flex-col group hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-7 group-hover:bg-primary-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h2 className="text-2xl font-display font-bold text-neutral-900 mb-3">{svc.title}</h2>
                  <p className="text-neutral-600 text-base mb-7 leading-relaxed">{svc.desc}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-8 flex-grow">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/services/${svc.id}`}
                    className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:bg-primary-500 hover:border-primary-500 hover:text-white text-neutral-700 transition-all duration-300 font-semibold text-sm group/btn"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
