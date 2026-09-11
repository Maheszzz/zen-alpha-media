import Hero from '../components/Hero'
import PartnerBadges from '../components/PartnerBadges'
import Metrics from '../components/Metrics'
import Services from '../components/Services'
import WhyZenAlpha from '../components/WhyZenAlpha'
import Process from '../components/Process'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import BlogPreview from '../components/BlogPreview'
import LeadMagnet from '../components/LeadMagnet'
import { useSEO } from '../hooks/useSEO'

export default function Home() {
  useSEO({
    title: 'ZenAlpha Media | #1 Performance Marketing Agency in Chennai, India — Google Ads, Meta Ads, SEO & Web Development',
    description: 'ZenAlpha Media is a results-driven digital marketing agency in Chennai. We specialise in Google Ads management, Meta Advertising (Facebook & Instagram), SEO, and high-converting web development. Trusted by 200+ brands with ₹2.45 Cr+ revenue generated. Get your free growth audit today.',
    keywords: 'digital marketing agency Chennai, performance marketing India, Google Ads management, Meta Ads agency, Facebook advertising Chennai, Instagram Ads, SEO services India, web development agency, PPC management, lead generation agency, growth marketing, online advertising India, ROAS optimisation, conversion rate optimisation',
    ogImage: 'https://zenalphamedia.com/logo.png'
  })

  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Logos Strip ("TRUSTED BY 200+ BRANDS") */}
      <PartnerBadges />

      {/* 3. Real Numbers Strip (₹2.45 Cr+, 147%, 200+, 500+) */}
      <Metrics />

      {/* 4. Services Grid ("WHAT WE DO") */}
      <Services />

      {/* 4.5 Why ZenAlpha Section */}
      <WhyZenAlpha />

      {/* 5. Process Steps ("OUR APPROACH") */}
      <Process />

      {/* 6. Case Studies */}
      <CaseStudies />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. FAQ Accordion */}
      <FAQ />

      {/* 9. Conversion CTA */}
      <LeadMagnet />

      {/* 10. Blog Preview */}
      <BlogPreview />
    </>
  )
}
