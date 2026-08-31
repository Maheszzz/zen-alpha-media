import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const serviceDetails = {
  'google-ads': {
    title: 'Google Ads Management',
    subtitle: 'Capture high-intent traffic at the exact moment they search.',
    description: "Our Google Ads strategies are engineered for ROI. We don't just bid on keywords; we build comprehensive funnels that capture users across Search, Display, YouTube, and Shopping.",
    keywords: 'Google Ads management India, PPC management agency, Google Ads agency Chennai, Search Ads, Performance Max campaigns, Google Shopping Ads, YouTube Ads management, remarketing agency, pay per click management, Google Ads optimisation',
    features: [
      'Comprehensive Keyword Research & Intent Mapping',
      'High-Converting Ad Copy & Creative Design',
      'Performance Max & Smart Bidding Optimisation',
      'Advanced Conversion Tracking (Server-Side)',
      'Negative Keyword Management to reduce wasted spend',
      'A/B Testing of Landing Pages',
    ],
    results: [
      { metric: '+340%', label: 'Avg. ROAS Increase' },
      { metric: '-45%',  label: 'Cost Per Acquisition' },
    ],
  },
  'meta-ads': {
    title: 'Meta Advertising',
    subtitle: 'Scroll-stopping campaigns that build brands and drive sales.',
    description: 'Leverage the power of Facebook and Instagram with our advanced audience targeting and creative strategies. We build campaigns that scale profitably.',
    keywords: 'Meta Ads agency India, Facebook Ads management, Instagram advertising agency, Facebook marketing Chennai, social media advertising, Advantage+ campaigns, retargeting agency, Meta Business Partner, Facebook Ads optimisation, social media marketing agency',
    features: [
      'Advantage+ Shopping Campaigns (ASC)',
      'Custom & Lookalike Audience Generation',
      'Dynamic Creative Optimisation (DCO)',
      'Retargeting Funnel Architecture',
      'UGC & High-Production Video Ads',
      'Pixel & Conversions API Setup',
    ],
    results: [
      { metric: '5.2×', label: 'Average ROAS' },
      { metric: '2M+',  label: 'Monthly Impressions' },
    ],
  },
  'web-development': {
    title: 'Web Development',
    subtitle: 'Digital storefronts engineered for speed and conversion.',
    description: 'A great ad campaign needs a great destination. We build lightning-fast, visually stunning websites using modern frameworks like React and Next.js.',
    keywords: 'web development agency India, React web development, Next.js development Chennai, e-commerce website development, landing page development, CRO optimisation, Core Web Vitals, headless CMS development, responsive web design, website redesign agency',
    features: [
      'Custom React/Next.js Architecture',
      'Headless E-commerce Integrations',
      'Conversion Rate Optimisation (CRO)',
      'Core Web Vitals Optimisation',
      'Responsive & Mobile-First Design',
      'CMS Integration (Sanity, Strapi)',
    ],
    results: [
      { metric: '99/100', label: 'Performance Score' },
      { metric: '+60%',   label: 'Conversion Rate' },
    ],
  },
  seo: {
    title: 'SEO & Content Strategy',
    subtitle: 'Dominate organic search and build long-term authority.',
    description: "We don't just chase algorithms; we build comprehensive content strategies that answer your customers' questions and establish your brand as an industry leader.",
    keywords: 'SEO services India, SEO agency Chennai, content marketing strategy, technical SEO audit, keyword research agency, link building services, local SEO India, Google Business Profile optimisation, schema markup, organic traffic growth, content creation agency',
    features: [
      'Deep Technical SEO Audits',
      'Content Gap Analysis',
      'High-Authority Link Building',
      'Local SEO & Google Business Profile',
      'Schema Markup Implementation',
      'Programmatic SEO Strategies',
    ],
    results: [
      { metric: 'Top 3',  label: 'Ranking for Core Terms' },
      { metric: '+120%', label: 'Organic Traffic YOY' },
    ],
  },
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = serviceDetails[id]

  useSEO({
    title: service ? `${service.title} Services | ZenAlpha Media — Chennai, India` : 'Service Not Found | ZenAlpha Media',
    description: service ? `${service.description} Get expert ${service.title.toLowerCase()} services from ZenAlpha Media in Chennai, India.` : 'Service details at ZenAlpha Media.',
    keywords: service ? service.keywords : '',
    ogImage: 'https://zenalphamedia.com/logo.png'
  })

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center bg-white">
        <h1 className="text-4xl font-display font-bold text-neutral-900 mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary-500 font-semibold hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <section className="pt-32 pb-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-primary-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-black text-neutral-900 tracking-tight leading-tight mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-xl text-primary-500 font-semibold"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left – Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-lg text-neutral-600 leading-relaxed mb-10">{service.description}</p>

              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">What's Included</h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right – Results card + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="sticky top-32"
            >
              <div className="card-white rounded-3xl p-10 md:p-12">
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-7">Typical Results</h3>

                {/* Result metrics */}
                <div className="grid grid-cols-2 gap-6 border-b border-neutral-100 pb-8 mb-8">
                  {service.results.map((r, i) => (
                    <div key={i}>
                      <div className="w-8 h-0.5 bg-primary-500 rounded-full mb-2" />
                      <div className="text-4xl font-display font-black text-primary-500 mb-1">{r.metric}</div>
                      <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide">{r.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-7">
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    Ready to transform your {service.title.split(' ')[0]} strategy?
                  </h4>
                  <p className="text-neutral-500 text-sm">Get a free audit from our senior strategists.</p>
                </div>

                <Link
                  to="/contact"
                  id={`service-cta-${id}`}
                  className="btn-red w-full justify-center rounded-xl min-h-[52px] text-base shadow-[0_6px_24px_rgba(227,6,19,0.3)] group"
                >
                  Request Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
