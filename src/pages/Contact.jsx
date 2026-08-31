import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const serviceOptions  = ['Google Ads Management', 'Meta Advertising', 'Web Development', 'SEO & Content Strategy', 'Full-Service Package']
const budgetOptions   = ['Less than ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000 – ₹10,00,000', '₹10,00,000+']

export default function Contact() {
  useSEO({
    title: 'Contact Us | Request Your Free Digital Marketing Audit — ZenAlpha Media, Chennai',
    description: 'Get in touch with ZenAlpha Media in Chennai to claim your free digital growth audit. Our senior strategists will review your Google Ads, Meta Ads, SEO, and website — and reach out within 24 hours with a custom growth plan.',
    keywords: 'contact ZenAlpha Media, free digital marketing audit, free Google Ads audit India, free SEO audit Chennai, digital marketing consultation, performance marketing quote, contact digital agency Chennai',
    ogImage: 'https://zenalphamedia.com/logo.png'
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <section className="pt-32 pb-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="tag-red mb-5"
          >
            Free Audit
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-5xl md:text-7xl font-display font-black text-neutral-900 tracking-tight leading-tight mb-5"
          >
            Let's build your{' '}
            <span className="text-primary-500">growth engine.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-600 leading-relaxed max-w-xl"
          >
            Fill out the form below to request your free digital audit. Our senior strategists will review your setup and reach out within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 card-white rounded-3xl p-8 md:p-12"
            >
              <form className="space-y-7" id="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-neutral-800 mb-2">First Name</label>
                    <input type="text" id="c-firstname" placeholder="John" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-800 mb-2">Last Name</label>
                    <input type="text" id="c-lastname" placeholder="Doe" className="input-field" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-neutral-800 mb-2">Work Email</label>
                    <input type="email" id="c-email" placeholder="john@company.com" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-800 mb-2">Phone Number</label>
                    <input type="tel" id="c-phone" placeholder="+91 98765 43210" className="input-field" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">Company Name</label>
                  <input type="text" id="c-company" placeholder="Your company" className="input-field" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">Service Interest</label>
                  <select id="c-service" defaultValue="" className="input-field appearance-none">
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">Monthly Ad Budget</label>
                  <select id="c-budget" defaultValue="" className="input-field appearance-none">
                    <option value="" disabled>Select budget range</option>
                    {budgetOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">Tell us about your current challenges</label>
                  <textarea
                    id="c-message"
                    rows={4}
                    placeholder="Describe your goals, current challenges, and what you've tried so far..."
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full btn-red min-h-[56px] rounded-xl text-base shadow-[0_6px_24px_rgba(227,6,19,0.3)]"
                >
                  Submit Request — It's Free
                </button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              {/* Contact info */}
              <div className="card-white rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold text-neutral-900 mb-6">Contact Info</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 text-sm mb-0.5">Email Us</div>
                      <a href="mailto:hello@zenalphamedia.com" className="text-neutral-500 text-sm hover:text-primary-500 transition-colors">
                        hello@zenalphamedia.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 text-sm mb-0.5">Call Us</div>
                      <a href="tel:+919999999999" className="text-neutral-500 text-sm hover:text-primary-500 transition-colors">
                        +91 99999 99999
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900 text-sm mb-0.5">Visit Us</div>
                      <p className="text-neutral-500 text-sm">Chennai, Tamil Nadu<br />India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="card-white rounded-2xl p-8 border-l-4 border-primary-500">
                <h4 className="font-bold text-neutral-900 mb-4 text-base">What happens next?</h4>
                <ol className="space-y-3">
                  {[
                    'We review your current digital setup.',
                    'We prepare a custom growth strategy.',
                    'We schedule a 30-min discovery call.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-neutral-600">
                      <span className="w-5 h-5 rounded-full bg-primary-500 text-white text-[10px] font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-xs text-primary-500 font-bold">100% Free. No pushy sales.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
