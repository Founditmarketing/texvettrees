import { motion } from 'motion/react';
import { Medal } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';

const VALUES = [
  {
    title: 'Military Discipline',
    desc: 'Every job is planned and executed like a mission brief — on time, communicated clearly, and done right the first time.',
  },
  {
    title: 'Precision Workmanship',
    desc: "From technical tree removals to exact hardscape lines, accuracy isn't a goal — it's the baseline.",
  },
  {
    title: 'Community First',
    desc: "We're your neighbors. Protecting and beautifying properties across Central & North Texas is how we keep serving.",
  },
  {
    title: 'Safety & Insurance',
    desc: 'Fully insured crews and strict safety protocols protect your family, your property, and our team on every job.',
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Us"
        subtitle="Veteran owned and operated — bringing military discipline, honor, and precision to tree care and landscaping across Central & North Texas."
        watermark="About"
        image="/images/469235845_122156927018284499_8107515471517870465_n.jpg"
      />

      {/* Our Story — layered founder photos + narrative */}
      <section className="relative py-24 bg-[#111] border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[380px_minmax(0,1fr)] gap-8 lg:gap-10 items-center max-w-5xl mx-auto">
            {/* Layered photos */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md mx-auto lg:mx-0 order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10">
                <img src="/owner/owner-now.jpg" alt="Richard Maddox, founder of Tex Vet Trees" className="w-full h-full object-cover object-[center_30%]" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#0a0a0a]/60 border border-[#ccaa5a]/50 text-[#d8b86a] text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                  <Medal className="w-3.5 h-3.5" aria-hidden="true" />
                  U.S. Army Veteran
                </span>
              </div>
              {/* veteran photo inset */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-28 sm:w-40 aspect-[4/5] overflow-hidden rounded-lg border-4 border-[#111] shadow-2xl shadow-black/50">
                <img src="/owner/owner-veteran.jpg" alt="Richard Maddox during his U.S. Army service" className="w-full h-full object-cover grayscale-[.3]" />
              </div>
            </motion.div>

            {/* Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-[1px] bg-[#4c5230]" />
                <span className="text-[#4c5230] font-bold tracking-[0.2em] uppercase text-[10px]">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-8">
                Built on a Veteran's Standard
              </h2>
              <div className="space-y-5 text-white/60 leading-relaxed max-w-xl">
                <p>
                  Tex Vet Trees &amp; Landscaping was founded on a simple belief: the discipline, resilience, and teamwork
                  forged in military service translate directly into exceptional work on the ground. After serving in the
                  U.S. Army, founder Richard Maddox brought that same standard home to Central &amp; North Texas.
                </p>
                <p>
                  Every project — from a single hazardous removal to a full backyard transformation — is approached like a
                  mission: planned carefully, executed with precision, and finished to a standard we're proud to stand
                  behind. No shortcuts, no surprises.
                </p>
                <p>
                  We don't just cut trees; we serve our community — protecting and beautifying the properties of the
                  neighbors we're proud to call ours.
                </p>
              </div>
              <p className="mt-8 text-white font-bold uppercase tracking-widest text-sm">
                — Richard Maddox
                <span className="block text-white/40 text-[11px] tracking-[0.2em] mt-1">Founder &amp; U.S. Army Veteran</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Tex Vet Standard — numbered values */}
      <section className="relative py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#4c5230]" />
              <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">What Sets Us Apart</span>
              <div className="w-8 h-[1px] bg-[#4c5230]" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
            >
              The Tex Vet Standard
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="flex gap-5 border-t border-white/10 pt-6"
              >
                <span className="text-5xl font-black leading-none text-[#4c5230]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
