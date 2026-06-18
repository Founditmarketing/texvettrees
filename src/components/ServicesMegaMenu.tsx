import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';

export function ServicesMegaMenu({ onNavigate }: { onNavigate?: () => void }) {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0].slug);
  const active = SERVICES.find((s) => s.slug === activeSlug) ?? SERVICES[0];

  return (
    <div className="w-full border-t border-white/10 bg-[#0a0a0a]/98 backdrop-blur-md shadow-2xl shadow-black/60">
      <div className="w-full px-6 lg:px-12 py-7 max-h-[calc(100vh-7rem)] overflow-y-auto">
        <div className="grid lg:grid-cols-[minmax(0,400px)_1fr] gap-8 xl:gap-12 items-center">
          {/* Left: live preview image — swaps as you hover a service */}
          <Link
            to={`/services/${active.slug}`}
            onClick={onNavigate}
            className="group/preview relative block overflow-hidden rounded-lg border border-white/10"
          >
            <div className="relative aspect-[4/3]">
              <AnimatePresence>
                <motion.img
                  key={active.slug}
                  src={active.after}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="mb-2 flex items-center gap-2 text-[#a9bd84]">
                  <active.Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Tex Vet Trees</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight leading-none text-white">{active.title}</h3>
                <p className="mt-2 text-sm leading-snug text-white/70">{active.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-white transition-colors group-hover/preview:text-[#a9bd84]">
                  View Service
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/preview:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>

          {/* Right: service list */}
          <div>
            <div className="mb-4 flex items-center gap-3 px-4">
              <div className="h-[1px] w-6 bg-[#4c5230]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a9bd84]">Our Services</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              {SERVICES.map((s) => {
                const isActive = s.slug === active.slug;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    onClick={onNavigate}
                    onMouseEnter={() => setActiveSlug(s.slug)}
                    onFocus={() => setActiveSlug(s.slug)}
                    className={`flex items-center gap-3.5 rounded-md px-4 py-3 transition-colors ${
                      isActive ? 'bg-white/[0.06]' : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isActive ? 'border-[#4c5230] bg-[#4c5230] text-white' : 'border-white/10 bg-white/5 text-[#a9bd84]'
                      }`}
                    >
                      <s.Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold uppercase tracking-wide text-white">{s.title}</span>
                      <span className="block truncate text-[11px] text-white/45">{s.tagline}</span>
                    </span>
                    <ArrowRight
                      className={`ml-auto h-4 w-4 shrink-0 transition-all ${
                        isActive ? 'translate-x-0 text-[#a9bd84] opacity-100' : '-translate-x-1 text-white/30 opacity-0'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
