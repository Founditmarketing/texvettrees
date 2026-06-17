import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowDown, Medal, Trees, ShieldCheck, MapPin, BadgeCheck } from 'lucide-react';
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
      <SectionWatermark text="Veteran" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
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

          {/* Right: Then & Now diptych */}
          <div className="w-full lg:w-1/2">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-white/10">
              {/* THEN — military */}
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="group/then relative overflow-hidden min-h-[300px] lg:min-h-[520px]"
              >
                <img
                  src="/owner/owner-veteran.jpg"
                  alt="Richard Maddox in U.S. Army combat gear on a field radio during deployment"
                  width={1195}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover object-[center_22%] grayscale-[.55] contrast-[1.05] ${
                    reduce ? '' : 'transition-all duration-700 group-hover/then:grayscale-0 group-hover/then:scale-105'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#0a0a0a]/55 border border-[#ccaa5a]/50 text-[#d8b86a] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                  <Medal className="w-3.5 h-3.5" aria-hidden="true" />
                  Then
                </span>
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">U.S. Army · Deployed</p>
                  <p className="text-white/60 text-[11px]">Discipline. Precision. Service.</p>
                </div>
              </motion.div>

              {/* NOW — founder */}
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="group/now relative overflow-hidden min-h-[300px] lg:min-h-[520px]"
              >
                <img
                  src="/owner/owner-now.jpg"
                  alt="Richard Maddox today, founder of Tex Vet Trees, beside his Vermeer chipper truck in a Central Texas neighborhood"
                  width={1600}
                  height={1250}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover object-[center_30%] ${
                    reduce ? '' : 'transition-transform duration-700 group-hover/now:scale-105'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent pointer-events-none" />
                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#4c5230] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1">
                  <Trees className="w-3.5 h-3.5" aria-hidden="true" />
                  Now
                </span>
                <div className="absolute bottom-3 right-3 text-right">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">Founder · Tex Vet Trees</p>
                  <p className="text-white/60 text-[11px]">Central &amp; North Texas</p>
                </div>
              </motion.div>

              {/* Seam + bridge node (desktop: vertical, mobile: horizontal) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#4c5230] to-transparent z-10 hidden lg:block pointer-events-none" />
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#4c5230] to-transparent z-10 lg:hidden pointer-events-none" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0a0a0a] border border-[#4c5230] flex items-center justify-center z-10 pointer-events-none">
                <ArrowRight className="w-4 h-4 text-[#4c5230] hidden lg:block" aria-hidden="true" />
                <ArrowDown className="w-4 h-4 text-[#4c5230] lg:hidden" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
