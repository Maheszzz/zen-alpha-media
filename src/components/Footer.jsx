import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, X, Globe, Share2, Rss, ArrowRight } from 'lucide-react'

const serviceLinks = [
  { name: 'Google Ads Management', href: '/services/google-ads' },
  { name: 'Meta Advertising',      href: '/services/meta-ads' },
  { name: 'Web Development',       href: '/services/web-development' },
  { name: 'SEO & Content Strategy', href: '/services/seo' },
]

const companyLinks = [
  { name: 'About Us',    href: '/about' },
  { name: 'All Services', href: '/services' },
  { name: 'Case Studies', href: '/#case-studies' },
  { name: 'Contact',     href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy',   href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy',    href: '#' },
]

const socialLinks = [
  { Icon: X,      href: '#', label: 'X (Twitter)' },
  { Icon: Globe,  href: '#', label: 'LinkedIn' },
  { Icon: Share2, href: '#', label: 'Instagram' },
  { Icon: Rss,    href: '#', label: 'Facebook' },
]

const budgetOptions   = ['Less than ₹50,000', '₹50,000 – ₹2,00,000', '₹2,00,000 – ₹10,00,000', '₹10,00,000+']
const timelineOptions = ['ASAP', 'Within 1 month', '1–3 months', 'Just exploring']
const serviceOptions  = ['Google Ads Management', 'Meta Advertising', 'Web Development', 'SEO & Content Strategy', 'Full-Service Package']

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10 relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      {/* Top red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary-500" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-64 bg-primary-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-5 group">
              <img src="/logo.png" alt="ZenAlpha Media Logo" className="h-20 w-auto object-contain bg-white p-2 rounded-xl" />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              India's performance marketing agency for ambitious brands.
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-500 hover:border-primary-500 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-neutral-300" />
                </a>
              ))}
            </div>
            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <a href="mailto:hello@zenalphamedia.com" className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                hello@zenalphamedia.com
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                +91 99999 99999
              </a>
              <div className="flex items-start gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>

          {/* Services column */}
          <nav aria-label="Services navigation">
            <h4 className="font-display font-bold text-base mb-5 text-white">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link to={href} className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company column */}
          <nav aria-label="Company navigation">
            <h4 className="font-display font-bold text-base mb-5 text-white">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link to={href} className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal column */}
          <nav aria-label="Legal navigation">
            <h4 className="font-display font-bold text-base mb-5 text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link to={href} className="text-neutral-400 text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Lead-gen form column */}
          <div className="lg:col-span-1">
            <h4 className="font-display font-bold text-base mb-5 text-white">Get a Free Quote</h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()} id="footer-lead-form">
              <div>
                <label htmlFor="f-name" className="sr-only">Full Name</label>
                <input id="f-name" type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-white/10 transition-all" />
              </div>
              <div>
                <label htmlFor="f-phone" className="sr-only">Phone</label>
                <input id="f-phone" type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-white/10 transition-all" />
              </div>
              <div>
                <label htmlFor="f-email" className="sr-only">Email</label>
                <input id="f-email" type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-white/10 transition-all" />
              </div>
              <div>
                <label htmlFor="f-company" className="sr-only">Company</label>
                <input id="f-company" type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-white/10 transition-all" />
              </div>
              <div>
                <label htmlFor="f-service" className="sr-only">Service Interest</label>
                <select id="f-service" defaultValue="" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-500 text-sm focus:outline-none focus:border-primary-500/60 appearance-none transition-all">
                  <option value="" disabled>Service Interest</option>
                  {serviceOptions.map(o => <option key={o} value={o} className="bg-neutral-900 text-white">{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="f-budget" className="sr-only">Budget Range</label>
                <select id="f-budget" defaultValue="" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-500 text-sm focus:outline-none focus:border-primary-500/60 appearance-none transition-all">
                  <option value="" disabled>Monthly Budget Range</option>
                  {budgetOptions.map(o => <option key={o} value={o} className="bg-neutral-900 text-white">{o}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="f-timeline" className="sr-only">Timeline</label>
                <select id="f-timeline" defaultValue="" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-neutral-500 text-sm focus:outline-none focus:border-primary-500/60 appearance-none transition-all">
                  <option value="" disabled>When do you want to start?</option>
                  {timelineOptions.map(o => <option key={o} value={o} className="bg-neutral-900 text-white">{o}</option>)}
                </select>
              </div>
              <button
                type="submit"
                id="footer-form-submit"
                className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl text-sm transition-colors shadow-[0_4px_16px_rgba(227,6,19,0.3)] flex items-center justify-center gap-2 group min-h-[44px]"
              >
                Send Request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} ZenAlpha Media. All rights reserved.</p>
          <p className="text-center">Built with ❤️ in Chennai, India</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
