import { motion } from 'framer-motion'
import { ExternalLink, Mail } from 'lucide-react'

const team = [
  {
    name: 'Sarah Chen',
    role: 'Head of Growth',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop',
    bio: 'Ex-Google strategist. Specialises in scaling B2B SaaS companies to $10M ARR.',
    initials: 'SC',
  },
  {
    name: 'Arjun Mehta',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop',
    bio: 'Full-stack architect with a passion for web performance and headless commerce.',
    initials: 'AM',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop',
    bio: 'Award-winning designer focusing on conversion-driven UI and brand identity.',
    initials: 'ER',
  },
  {
    name: 'David Kim',
    role: 'Lead Media Buyer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop',
    bio: 'Manages $2M/mo in ad spend across Meta and TikTok. D2C scale expert.',
    initials: 'DK',
  },
]

export default function Team() {
  return (
    <section className="section-padding bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <p className="tag-red mb-4 mx-auto">Our Experts</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-neutral-900 mb-4">
            Meet the minds behind the growth.
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto">
            We don't hire junior account managers. You work directly with the senior strategists executing your campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-white rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Hover overlay with actions */}
                <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-neutral-900 hover:text-white" />
                  </a>
                  <a
                    href="#"
                    aria-label={`Email ${member.name}`}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primary-500 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-neutral-900 hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-display font-bold text-neutral-900 mb-1">{member.name}</h3>
                <div className="text-xs font-bold text-primary-500 uppercase tracking-widest mb-3">{member.role}</div>
                <p className="text-neutral-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
