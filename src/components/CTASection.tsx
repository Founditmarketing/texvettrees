import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export function CTASection({
  eyebrow = 'Ready When You Are',
  heading = 'Ready to Transform Your Property?',
  text = 'Get a free, no-obligation estimate from our veteran-led team — military precision on every job, large or small.',
  actions,
}: {
  eyebrow?: string;
  heading?: string;
  text?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#4c5230] py-20 md:py-24">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-white/70 tracking-[0.25em] font-bold text-xs uppercase mb-4"
        >
          {eyebrow}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6 max-w-3xl mx-auto"
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-white/80 max-w-xl mx-auto mb-10"
        >
          {text}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {actions ?? (
            <>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#4c5230] px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:bg-[#0a0a0a] hover:text-white group"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+12544475090"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-white/10"
              >
                <Phone className="w-4 h-4" />
                (254) 447-5090
              </a>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
