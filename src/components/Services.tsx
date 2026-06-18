import { useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Leaf, Check, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { SectionWatermark } from './SectionWatermark';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { SERVICES, type Service } from '../data/services';

function ServiceCard({ service }: { service: Service }) {
  const reduce = useReducedMotion();
  const BulletIcon = service.bulletIcon === 'leaf' ? Leaf : Check;
  const { Icon } = service;

  return (
    <div
      className={`group h-full overflow-hidden rounded-md border border-white/5 bg-[#111] transition duration-300 ${
        reduce
          ? 'hover:border-[#4c5230]'
          : 'hover:-translate-y-1 hover:border-[#4c5230] hover:shadow-[0_0_0_1px_#4c5230,0_18px_40px_-12px_rgba(76,82,48,0.45)]'
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <BeforeAfterSlider before={service.before} after={service.after} title={service.title} reduce={reduce} />
      </div>

      <div className="p-5 sm:p-8">
        <div className="mb-3 sm:mb-4 inline-block text-[#4c5230] transition-all duration-300 group-hover:scale-110 group-hover:text-white">
          <Icon className="w-9 h-9 sm:w-10 sm:h-10" />
        </div>
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-2xl font-bold uppercase tracking-wide text-white">{service.title}</h3>
        <p className="text-sm leading-relaxed text-white/60 line-clamp-2 sm:line-clamp-none">{service.description}</p>
        <ul className="mt-4 sm:mt-5 space-y-2 opacity-90 transition-opacity duration-300 group-hover:opacity-100 hidden sm:block">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <BulletIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#4c5230]" aria-hidden="true" />
              <span className="text-[13px] leading-snug text-white/70">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 bg-[#0a0a0a] border-t border-white/5">
      <SectionWatermark text="Services" align="top" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-[#4c5230]" />
            <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">What We Do</span>
            <div className="w-8 h-[1px] bg-[#4c5230]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/50 text-sm max-w-md mx-auto mt-4"
          >
            Drag any photo to see the transformation — before and after, on real Texas job sites.
          </motion.p>
        </div>
      </div>

      {/* Mobile swipe hint */}
      <div className="sm:hidden relative z-10 flex items-center justify-center gap-2 mb-3 text-white/50 text-[11px] font-bold uppercase tracking-widest">
        Swipe to Explore
        <motion.span
          animate={reduce ? undefined : { x: [0, 6, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex text-[#a9bd84]"
        >
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </motion.span>
      </div>

      {/* Carousel — full width, bleeds to the right edge */}
      <div className="relative z-10">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous services"
          className="hidden sm:grid absolute left-2 top-1/2 -translate-y-1/2 z-20 h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#111] text-white shadow-lg transition-colors hover:bg-[#4c5230] hover:border-[#4c5230]"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next services"
          className="hidden sm:grid absolute right-3 top-1/2 -translate-y-1/2 z-20 h-11 w-11 place-items-center rounded-full border border-white/15 bg-[#111] text-white shadow-lg transition-colors hover:bg-[#4c5230] hover:border-[#4c5230]"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain snap-x snap-proximity scrollbar-hide py-6 pl-6 sm:pl-8 lg:pl-12 pr-0 scroll-pl-6 sm:scroll-pl-8 lg:scroll-pl-12"
        >
          {SERVICES.map((service) => (
            <div key={service.slug} className="snap-start shrink-0 w-[68%] sm:w-[55%] md:w-[44%] lg:w-[31.5%]">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
