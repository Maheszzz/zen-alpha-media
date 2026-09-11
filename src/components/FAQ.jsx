import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How quickly will I see results from your campaigns?',
    a: 'For paid ads (Google & Meta), most clients see measurable improvements within the first 30–45 days as we gather data and optimise. SEO typically shows significant organic traffic growth within 3–6 months. We set realistic expectations from day one.',
  },
  {
    q: 'What is your minimum monthly budget for ad management?',
    a: 'We work with brands spending a minimum of ₹1,50,000/month on ad spend. Our management fee is separate and depends on the scope. This threshold ensures we have enough data and budget to drive meaningful results.',
  },
  {
    q: 'Do you work with businesses outside of Chennai?',
    a: 'Absolutely. While we\'re based in Chennai, we partner with brands across India and internationally. Communication, reporting, and strategy sessions can happen remotely through video calls and live dashboards.',
  },
  {
    q: 'What makes ZenAlpha different from other agencies?',
    a: 'Three things: (1) You work directly with senior strategists, not junior account managers. (2) Full transparency — real-time dashboards with all your data. (3) We tie our success to your revenue, not vanity metrics like impressions.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'Our standard engagement is a 3-month pilot followed by monthly rolling contracts. We do not believe in locking clients in. We earn your business every month through clear work, reporting and results.',
  },
  {
    q: 'Can you handle both our Google Ads and Meta Ads?',
    a: 'Yes, and this is where we shine. Managing both channels lets us create coordinated cross-platform funnels — top-of-funnel awareness on Meta, bottom-of-funnel capture on Google — dramatically improving overall efficiency.',
  },
  {
    q: 'Will you build us a website as well?',
    a: 'Yes. Our web development team specialises in high-converting React/Next.js sites and landing pages. We often bundle web development with paid ads because a great campaign deserves a great destination.',
  },
  {
    q: 'How do you report results and how often?',
    a: 'You get a live Looker Studio dashboard with all key metrics updated daily. We send a weekly snapshot email and schedule a monthly strategy call to review performance, discuss wins, and plan the next month.',
  },
  {
    q: 'Can you improve an existing website instead of rebuilding it?',
    a: 'Yes. We first audit speed, mobile UX, tracking, SEO structure, calls to action and page copy. If the foundation is strong, we improve what exists. If a rebuild will be faster and cleaner, we explain why before any work starts.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'We usually need website access, analytics access, ad account access if relevant, your current offer details, target locations, ideal customer profile and business goals. If something is missing, we help you set it up.',
  },
]

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div
      className={`border-b border-neutral-100 last:border-0 transition-colors ${isOpen ? 'bg-white' : ''}`}
    >
      <button
        onClick={onToggle}
        id={`faq-btn-${index}`}
        className="w-full flex items-center justify-between gap-4 py-6 px-0 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-primary-500' : 'text-neutral-900 group-hover:text-primary-500'}`}>
          {faq.q}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-500 text-white' : 'bg-neutral-100 text-neutral-500 group-hover:bg-primary-50 group-hover:text-primary-500'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-neutral-600 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const half = Math.ceil(faqs.length / 2)
  const col1 = faqs.slice(0, half)
  const col2 = faqs.slice(half)

  // Inject FAQ structured data (JSON-LD) for Google rich snippets
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.textContent = JSON.stringify(faqSchema)
    // Remove previous if exists
    const existing = document.getElementById('faq-schema')
    if (existing) existing.remove()
    document.head.appendChild(script)
    return () => {
      const el = document.getElementById('faq-schema')
      if (el) el.remove()
    }
  }, [])

  return (
    <section className="section-padding bg-neutral-50" id="faq">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="tag-red mb-4 mx-auto">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-4">
            Questions we hear every day.
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto">
            Honest answers — no sales pitch. If you don't find what you're looking for,{' '}
            <a href="/contact" className="text-primary-500 font-semibold hover:underline">just ask us directly.</a>
          </p>
        </div>

        {/* Two-column accordion */}
        <div className="grid md:grid-cols-2 gap-0 md:gap-12">
          <div className="card-white rounded-2xl px-8 py-2">
            {col1.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
          <div className="card-white rounded-2xl px-8 py-2 mt-6 md:mt-0">
            {col2.map((faq, i) => (
              <FAQItem
                key={i + half}
                index={i + half}
                faq={faq}
                isOpen={openIndex === i + half}
                onToggle={() => setOpenIndex(openIndex === i + half ? -1 : i + half)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
