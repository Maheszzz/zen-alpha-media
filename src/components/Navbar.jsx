import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X, MessageCircle } from 'lucide-react'


const navLinks = [
  { name: 'Services',     path: '/services' },
  { name: 'About Us',     path: '/about' },
  { name: 'Case Studies', path: '/#case-studies' },
  { name: 'Contact',      path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location])

  const isActive = (path) => {
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.slice(1)
    return location.pathname === path
  }

  return (
    <>
      <nav aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.08)] py-3' : 'bg-white py-4'
      }`}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <img src="/logo.png" alt="ZenAlpha Media" className="h-20 md:h-24 w-auto object-contain mix-blend-multiply -my-4 md:-my-6" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 flex-1 justify-center">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative group flex items-center gap-1 text-[13.5px] font-semibold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-primary-500'
                    : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13.5px] font-semibold text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-green-600" />
              Chat With Our Marketing Team
            </a>
            <Link
              to="/contact"
              id="nav-cta-btn"
              className="btn-red min-h-[42px] rounded-full px-6 py-2 text-[13.5px] font-bold shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 whitespace-nowrap"
            >
              Get a Free Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-neutral-800 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6 lg:hidden pt-20"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-1.5 text-2xl font-display font-bold transition-colors ${
                  isActive(item.path) ? 'text-primary-500' : 'text-neutral-800 hover:text-primary-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-red mt-4 rounded-full px-10 py-4 text-base min-h-[52px] shadow-lg shadow-red-500/30"
            >
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
