import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

const posts = [
  {
    title: 'The Future of Performance Max: 2026 Edition',
    excerpt: "Google's algorithm is changing faster than ever. Here's how we're structuring our campaigns to stay ahead.",
    date: 'Aug 10, 2026',
    category: 'Google Ads',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
  },
  {
    title: 'Why Your Meta Ads Are Failing (And How to Fix Them)',
    excerpt: "Stop blaming the iOS update. The real reason your Facebook ads aren't converting is your creative strategy.",
    date: 'Aug 02, 2026',
    category: 'Meta Ads',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop',
  },
  {
    title: 'Next.js vs. WordPress for SEO in 2026',
    excerpt: 'The ultimate showdown for organic search dominance. We break down performance impacts with real data.',
    date: 'Jul 28, 2026',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop',
  },
]

export default function BlogPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="tag-red mb-4">Industry Insights</p>
            <h2 className="text-4xl md:text-5xl font-display font-black text-neutral-900">
              Insights that drive growth.
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-sm font-bold text-neutral-700 hover:text-primary-500 transition-colors group border-b-2 border-neutral-200 hover:border-primary-500 pb-1"
          >
            Read All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group card-white rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-neutral-400 text-xs font-semibold uppercase tracking-wide mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
                </div>
                <h3 className="text-lg font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed flex-grow mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-primary-500 text-sm font-bold mt-auto group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
