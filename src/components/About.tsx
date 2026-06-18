import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Medal, ShieldCheck, MapPin, BadgeCheck } from 'lucide-react';
import { SectionWatermark } from './SectionWatermark';

const TRUST_CHIPS = [
  { Icon: ShieldCheck, label: 'Veteran-Owned' },
  { Icon: MapPin, label: 'Central & North TX' },
  { Icon: BadgeCheck, label: 'Fully Insured' },
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative py-24 bg-[#111] border-b border-white/5">
      <SectionWatermark text="Veteran" align="top-mobile" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10 max-w-5xl mx-auto">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#4c5230]" />
              <span className="text-[#4c5230] font-bold tracking-[0.2em] uppercase text-[10px]">Who We Are</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
            >
              Richard Maddox, <br />
              <span className="text-white/60 text-3xl">U.S. Army Veteran</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm text-white/60 mb-8 max-w-xl leading-relaxed"
            >
              Tex Vet Trees and landscaping is founded on military discipline and service, covering Central to North
              Texas. We bring the same dedication, precision, and honor from our military service directly to your
              property.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {TRUST_CHIPS.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1.5 text-[10px] uppercase tracking-widest text-white/70"
                >
                  <Icon className="w-3.5 h-3.5 text-[#4c5230]" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase border-b border-[#4c5230] pb-1 text-white hover:text-white/80 transition-colors group"
              >
                Work With Us
                <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right: layered founder photos (matches the About page image layout) */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md mx-auto lg:ml-0"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
                <img
                  src="/owner/owner-now.jpg"
                  alt="Richard Maddox today, founder of Tex Vet Trees"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_30%]"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#0a0a0a]/60 border border-[#ccaa5a]/50 text-[#d8b86a] text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  <Medal className="w-3.5 h-3.5" aria-hidden="true" />
                  U.S. Army Veteran
                </span>
              </div>
              {/* veteran photo inset */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-28 sm:w-40 aspect-[4/5] overflow-hidden rounded-lg border-4 border-[#111] shadow-2xl shadow-black/50">
                <img
                  src="/owner/owner-veteran.jpg"
                  alt="Richard Maddox during his U.S. Army service"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale-[.3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
