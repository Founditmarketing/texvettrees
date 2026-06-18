import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SectionWatermark } from './SectionWatermark';

export function PageHero({
  eyebrow = 'Tex Vet Trees',
  title,
  subtitle,
  watermark,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  watermark?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0a0a] pt-44 pb-20 md:pt-52 md:pb-28">
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-[#0a0a0a]/40" />
        </div>
      )}
      {watermark && <SectionWatermark text={watermark} align="center" />}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-4 mb-5"
        >
          <div className="w-8 h-[1px] bg-[#4c5230]" />
          <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">{eyebrow}</span>
          <div className="w-8 h-[1px] bg-[#4c5230]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto mt-6 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          aria-label="Breadcrumb"
          className="mt-8 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40"
        >
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/70">{title}</span>
        </motion.nav>
      </div>
    </section>
  );
}
