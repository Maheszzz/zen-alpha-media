import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, ArrowRight, ClipboardCheck, LineChart, Users } from 'lucide-react'
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
    deliverables: ['Account restructure roadmap', 'Weekly search term cleanup', 'Landing page recommendations', 'Monthly ROI reporting'],
    timeline: 'Most accounts see clearer signal within 14 days and meaningful optimisation gains in 30–45 days.',
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
    deliverables: ['Creative testing matrix', 'Audience and offer mapping', 'Retargeting architecture', 'Meta Pixel and CAPI review'],
    timeline: 'We use the first 2–3 weeks to validate creative angles, then scale the winning combinations.',
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
    deliverables: ['Conversion-focused UX', 'Mobile-first implementation', 'Analytics and lead tracking', 'Launch checklist and handover'],
    timeline: 'Landing pages are typically ready in 2–4 weeks; full websites usually take 4–8 weeks depending on scope.',
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
    deliverables: ['Technical audit', 'Keyword and topic map', 'Content calendar', 'Ranking and traffic dashboard'],
    timeline: 'SEO gains build over 3–6 months, with technical fixes and content improvements starting immediately.',
    results: [
      { metric: 'Top 3',  label: 'Ranking for Core Terms' },
      { metric: '+120%', label: 'Organic Traffic YOY' },
    ],
  },
  'aeo-geo': {
    title: 'AEO & GEO Strategy',
    subtitle: 'Prepare your brand for AI-powered search and answer engines.',
    description: 'We help your website become easier for search engines, answer engines and AI assistants to understand by improving entity clarity, schema, content structure, FAQs and topical authority.',
    keywords: 'AEO services India, GEO marketing, generative engine optimisation, AI search optimisation, answer engine optimisation, schema markup agency, SEO for AI search',
    features: [
      'Entity and topical authority mapping',
      'Schema markup and structured data planning',
      'Question-led content briefs and FAQ expansion',
      'Brand mention and citation opportunity research',
      'Snippet-ready page structure',
      'Search plus AI visibility reporting',
    ],
    deliverables: ['AI search readiness audit', 'Schema recommendations', 'Answer-focused content plan', 'Monthly visibility improvements'],
    timeline: 'Foundational fixes can be launched in the first month; authority gains compound alongside SEO over 3–6 months.',
    results: [
      { metric: '+88%', label: 'Answer Visibility' },
      { metric: '+41%', label: 'Qualified Organic Leads' },
    ],
  },
  'content-marketing': {
    title: 'Content Marketing',
    subtitle: 'Turn expertise into search visibility, trust and qualified enquiries.',
    description: 'We plan, write and optimise content that supports sales: service pages, blogs, landing pages, comparison pages, case studies and lead magnets.',
    keywords: 'content marketing agency India, SEO content writing Chennai, landing page copywriting, blog writing agency, website content strategy',
    features: [
      'Audience and search intent research',
      'SEO blog and service page planning',
      'Conversion-focused website copy',
      'Editorial calendar and publishing workflow',
      'Content refreshes for existing pages',
      'Lead magnet and email nurture copy',
    ],
    deliverables: ['Monthly content calendar', 'SEO briefs', 'Optimised copy drafts', 'Performance tracking'],
    timeline: 'Content production starts within the first sprint, with traffic and lead impact measured monthly.',
    results: [
      { metric: '3.4×', label: 'Content Output' },
      { metric: '+96%', label: 'Organic Sessions' },
    ],
  },
  'social-media': {
    title: 'Social Media Management',
    subtitle: 'Build a consistent brand presence that supports demand generation.',
    description: 'We create platform-specific content calendars, campaign ideas and creative direction for brands that need consistent social communication without random posting.',
    keywords: 'social media management Chennai, Instagram management agency, Facebook content agency India, social media strategy',
    features: [
      'Monthly content calendar',
      'Creative direction for static posts and reels',
      'Caption and hook writing',
      'Campaign theme planning',
      'Community response prompts',
      'Monthly social performance review',
    ],
    deliverables: ['Content pillars', 'Publishing calendar', 'Creative briefs', 'Monthly insights report'],
    timeline: 'A refreshed calendar can go live within 2 weeks after onboarding and brand alignment.',
    results: [
      { metric: '+64%', label: 'Engagement Rate' },
      { metric: '+3.1×', label: 'Profile Visits' },
    ],
  },
  'email-automation': {
    title: 'Email Automation',
    subtitle: 'Convert more leads and customers with timely follow-up flows.',
    description: 'We build automated email sequences for lead nurturing, abandoned enquiries, onboarding, repeat purchases and reactivation so opportunities do not go cold.',
    keywords: 'email automation agency India, lead nurture email flows, ecommerce email marketing, CRM email automation',
    features: [
      'Welcome and enquiry follow-up flows',
      'Lead nurture sequences',
      'Offer and launch campaigns',
      'CRM segmentation strategy',
      'Performance tracking and optimisation',
      'Copywriting for retention campaigns',
    ],
    deliverables: ['Automation map', 'Email copy', 'Segmentation plan', 'Monthly optimisation notes'],
    timeline: 'Core nurture flows are usually ready in 2–3 weeks after CRM and offer review.',
    results: [
      { metric: '+38%', label: 'Lead Response' },
      { metric: '+22%', label: 'Repeat Revenue' },
    ],
  },
  cro: {
    title: 'Conversion Optimization',
    subtitle: 'Turn more existing traffic into enquiries, booked calls and sales.',
    description: 'We identify friction across your pages, forms, offers and analytics so your website converts better before you increase ad spend.',
    keywords: 'conversion rate optimisation India, landing page optimisation, CRO agency Chennai, website audit for leads',
    features: [
      'Landing page and funnel audits',
      'Heatmap and analytics review',
      'Offer and CTA improvement',
      'Form friction reduction',
      'A/B testing roadmap',
      'Conversion tracking validation',
    ],
    deliverables: ['CRO audit', 'Priority fix list', 'A/B test roadmap', 'Before and after reporting'],
    timeline: 'Quick wins can often ship in the first 10–14 days; deeper testing cycles run monthly.',
    results: [
      { metric: '+57%', label: 'Form Starts' },
      { metric: '+29%', label: 'Lead Quality' },
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

              <div className="mt-12 grid sm:grid-cols-3 gap-5">
                {[
                  { Icon: ClipboardCheck, title: 'Deliverables', text: service.deliverables.join(', ') },
                  { Icon: LineChart, title: 'Timeline', text: service.timeline },
                  { Icon: Users, title: 'Best Fit', text: 'Founder-led teams, local businesses, SaaS, real estate, education, healthcare and e-commerce brands.' },
                ].map(({ Icon, title, text }) => (
                  <div key={title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                    <Icon className="h-5 w-5 text-primary-500 mb-3" />
                    <h3 className="font-display font-bold text-neutral-900 mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{text}</p>
                  </div>
                ))}
              </div>
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
