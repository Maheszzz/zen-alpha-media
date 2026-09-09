import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function LeadMagnet() {
  return (
    <section className="relative overflow-hidden" id="get-started">
      <div className="bg-primary-500 py-20 md:py-24">
        {/* Decorative shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-white/[0.03]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left – Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-4">
                Get Your Free Digital Growth Audit
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-4">
                Ready to outperform your competition?
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Get a free, no-obligation audit of your current ads, website, and SEO — delivered by a senior strategist, not an automated tool.
              </p>
              <p className="text-white/90 text-md font-medium leading-relaxed">
                We'll review your SEO, website performance, search visibility and conversion opportunities.
              </p>
            </motion.div>

            {/* Right – Email capture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <form
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20"
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6">
                  Claim Your Free Audit
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="lm-name" className="sr-only">Full Name</label>
                    <input
                      id="lm-name"
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lm-company" className="sr-only">Company</label>
                      <input
                        id="lm-company"
                        type="text"
                        placeholder="Company"
                        className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="lm-website" className="sr-only">Website URL</label>
                      <input
                        id="lm-website"
                        type="url"
                        placeholder="Website URL"
                        className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lm-phone" className="sr-only">Phone Number</label>
                      <input
                        id="lm-phone"
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="lm-email" className="sr-only">Work Email</label>
                      <input
                        id="lm-email"
                        type="email"
                        placeholder="Work Email"
                        className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lm-service" className="sr-only">Service Interest</label>
                    <select
                      id="lm-service"
                      defaultValue=""
                      className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all appearance-none text-sm"
                    >
                      <option value="" disabled className="text-neutral-500">What service are you interested in?</option>
                      <option value="SEO" className="text-neutral-900">SEO & AEO</option>
                      <option value="Google Ads" className="text-neutral-900">Google Ads</option>
                      <option value="Meta Ads" className="text-neutral-900">Meta Ads</option>
                      <option value="Web Development" className="text-neutral-900">Web Development</option>
                      <option value="Full Service" className="text-neutral-900">Full Service / General Audit</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    id="lm-submit-btn"
                    className="w-full py-4 bg-white text-primary-500 font-bold rounded-xl text-[15px] hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 group shadow-[0_4px_24px_rgba(0,0,0,0.15)] min-h-[52px]"
                  >
                    Get My Free Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-white/50 text-xs">
                    No spam. We respond within 24 hours.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
