import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useIntro } from './Intro';
import { TRUST_BADGES } from '../data/badges';

// Same badge set as the footer, on white cards so every logo reads over the photo.
function HeroBadges({ className = '', size = 'sm' }: { className?: string; size?: 'sm' | 'lg' }) {
  const card = size === 'lg' ? 'h-12 px-3 py-1.5' : 'h-9 px-2.5 py-1';
  return (
    <div className={`flex flex-wrap items-center gap-2.5 sm:gap-3 ${className}`}>
      {TRUST_BADGES.map((b) => (
        <div key={b.alt} className={`bg-white rounded-md flex items-center justify-center ${card}`}>
          <img src={b.src} alt={b.alt} className="h-full w-auto object-contain" />
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const stage = useIntro();
  const show = stage === 'content';
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Image — continuous slow Ken Burns zoom (disabled for reduced-motion via MotionConfig) */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/Texas-Vet-Trees-Milling-1024x683-1.jpg"
          alt="Scenic Texas oak at golden hour"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#4c5230]" />
            <span className="text-[#4c5230] tracking-[0.3em] font-bold text-xs uppercase">
              Central to North Texas
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl sm:text-7xl lg:text-[4.75rem] xl:text-[5.75rem] 2xl:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase lg:whitespace-nowrap"
          >
            Tree Care Built On <br />
            <span className="text-[#4c5230]">Honor & Integrity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg opacity-80 max-w-md mb-12"
          >
            We don't just cut trees; we serve our community. Precision tree care and landscaping rooted in military discipline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#services"
              className="inline-flex items-center bg-[#4c5230] text-white px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all hover:bg-white hover:text-black group"
            >
              Explore Our Services
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Mobile/tablet: trust badges under the body text, left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <HeroBadges size="sm" className="lg:hidden mt-10" />
          </motion.div>
        </div>
      </div>

      {/* Desktop: trust badges in the bottom-right corner (larger) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="hidden lg:block absolute z-20 right-10 bottom-24"
      >
        <HeroBadges size="lg" />
      </motion.div>
    </section>
  );
}
