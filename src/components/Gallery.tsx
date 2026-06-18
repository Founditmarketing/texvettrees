import { useCallback, useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SectionWatermark } from './SectionWatermark';

type Category = 'Tree Service' | 'Landscaping' | 'Turf' | 'Hardscaping' | 'Fencing' | 'Decking & Patios';

type Photo = { src: string; alt: string; category: Category; w: number; h: number };

// Curated finished-result shots only — no "before" photos.
const PHOTOS: Photo[] = [
  { src: '/images/treeservice.jpg', category: 'Tree Service', alt: 'Two mature, healthy trees in a maintained front yard', w: 1000, h: 789 },
  { src: '/images/IMG_9109.jpeg', category: 'Landscaping', alt: 'Home with fresh gravel landscaping beds and clean borders', w: 1200, h: 1600 },
  { src: '/images/IMG_9462.jpg', category: 'Landscaping', alt: 'Backyard rock-bordered landscaping with a built-in bench', w: 1600, h: 1200 },
  { src: '/images/IMG_9016.jpg', category: 'Turf', alt: 'Backyard with synthetic turf, a paver fire pit and Adirondack chairs', w: 1024, h: 1024 },
  { src: '/images/IMG_9480.jpg', category: 'Turf', alt: 'Pergola-shaded patio over green synthetic turf', w: 1264, h: 848 },
  { src: '/images/backyard-transformation.jpg', category: 'Hardscaping', alt: 'Luxury paver patio with a fire pit and pergola at dusk', w: 1435, h: 1600 },
  { src: '/images/decking.jpg', category: 'Decking & Patios', alt: 'Custom cedar pergola over a full brick patio', w: 1024, h: 1024 },
  { src: '/images/IMG_9123.jpeg', category: 'Fencing', alt: 'Newly built cedar privacy fence', w: 1024, h: 1024 },
];

const SLIDE_SPRING = { type: 'spring', stiffness: 260, damping: 30 } as const;

export function Gallery({ showHeader = true }: { showHeader?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const reduce = useReducedMotion();

  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openedFrom = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback((d: number) => {
    setDirection(d);
    setOpenIndex((i) => (i === null ? i : (i + d + PHOTOS.length) % PHOTOS.length));
  }, []);

  const openAt = (i: number) => {
    openedFrom.current = i;
    setDirection(0);
    setOpenIndex(i);
  };

  useEffect(() => {
    if (openIndex === null) return;
    const root = document.getElementById('root');
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    root?.setAttribute('inert', '');

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Home') { setDirection(-1); setOpenIndex(0); }
      else if (e.key === 'End') { setDirection(1); setOpenIndex(PHOTOS.length - 1); }
    };
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      root?.removeAttribute('inert');
      window.removeEventListener('keydown', onKey);
      const restore = openedFrom.current;
      if (restore !== null) triggerRefs.current[restore]?.focus();
    };
  }, [openIndex, step, close]);

  const current = openIndex !== null ? PHOTOS[openIndex] : null;

  // On the dedicated gallery page (showHeader=false) the body runs nearly edge-to-edge, minimal padding.
  const tight = !showHeader;
  const gridWrapClass = `relative z-10 ${tight ? 'px-1' : 'px-2 sm:px-3'}`;
  const gridClass = `grid grid-cols-2 md:grid-cols-4 ${tight ? 'gap-1.5' : 'gap-2 sm:gap-3'}`;
  const tileAspect = 'aspect-[4/3]';

  return (
    <section
      id="gallery"
      className={`relative bg-[#0a0a0a] border-t border-white/5 ${showHeader ? 'pt-24 pb-0' : 'pt-4 pb-16'}`}
    >
      {showHeader && <SectionWatermark text="Portfolio" align="top" />}

      {/* Header */}
      {showHeader && (
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-[#4c5230]" />
            <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">Our Work</span>
            <div className="w-8 h-[1px] bg-[#4c5230]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            The Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/50 text-sm max-w-md mx-auto mt-4"
          >
            Real, finished job sites across Central &amp; North Texas.
          </motion.p>
        </div>
      </div>
      )}

      {/* Full-width uniform grid (even rows / even bottom) */}
      <div className={gridWrapClass}>
        <div className={gridClass}>
          {PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.src}
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={reduce ? { duration: 0.2 } : { duration: 0.4, delay: (i % 4) * 0.06 }}
              onClick={() => openAt(i)}
              aria-label={`Open larger view (${photo.category})`}
              className={`group relative ${tileAspect} overflow-hidden bg-[#111] cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4c5230] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                decoding="async"
                className="block w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100 group-focus-visible:bg-black/25 group-focus-visible:opacity-100">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#4c5230]/90 text-white">
                  <Maximize2 className="h-5 w-5" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {createPortal(
        <AnimatePresence>
          {current && openIndex !== null && (
            <motion.div
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 overscroll-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-label={`Image ${openIndex + 1} of ${PHOTOS.length}`}
            >
              <div className="absolute inset-0 bg-black/92 backdrop-blur-sm" onClick={close} />

              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                <motion.img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ x: reduce ? 0 : d > 0 ? 60 : d < 0 ? -60 : 0, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: reduce ? 0 : d > 0 ? -60 : d < 0 ? 60 : 0, opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={reduce ? { duration: 0.15 } : SLIDE_SPRING}
                  drag={reduce ? false : 'x'}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60 || info.velocity.x < -500) step(1);
                    else if (info.offset.x > 60 || info.velocity.x > 500) step(-1);
                  }}
                  style={{ touchAction: 'pan-y' }}
                  className="relative z-10 max-h-[86vh] max-w-[94vw] w-auto h-auto object-contain select-none"
                />
              </AnimatePresence>

              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 z-20 rounded-full p-2 text-white/80 transition-colors hover:bg-black/20 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="absolute top-1/2 left-2 sm:left-4 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/40 text-white transition-colors hover:bg-[#4c5230]"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="absolute top-1/2 right-2 sm:right-4 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/40 text-white transition-colors hover:bg-[#4c5230]"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 text-center text-xs tabular-nums text-white/50">
                {String(openIndex + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
