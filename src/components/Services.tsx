import {
  useState,
  useRef,
  type ReactNode,
  type PointerEvent as RPointerEvent,
  type KeyboardEvent as RKeyboardEvent,
} from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Trees, Flower2, Leaf, Hammer, Fence, TentTree, Check, ChevronsLeftRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionWatermark } from './SectionWatermark';

const SAGE = '#a9bd84'; // legible label color over bright photos

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  bulletIcon: 'leaf' | 'check';
  features: string[];
  before: string;
  after: string;
};

const SERVICES: Service[] = [
  {
    title: 'Tree Service',
    description:
      'Certified trimming, hazardous removals, and tree-health care that protect your home and keep your canopy thriving. From routine pruning to full storm cleanup, we handle the whole job.',
    icon: <Trees className="w-10 h-10" />,
    bulletIcon: 'leaf',
    features: ['Crown thinning & deadwood removal', 'Hazardous & storm-damage takedowns', 'Stump grinding & full haul-off', 'Pest & disease inspections'],
    before: '/images/14.jpg',
    after: '/images/treeservice.jpg',
  },
  {
    title: 'Landscaping',
    description:
      'Custom design, planting, and maintenance built for the Texas climate. Beds, borders, and color that actually survive the summer — and stay sharp year-round.',
    icon: <Flower2 className="w-10 h-10" />,
    bulletIcon: 'leaf',
    features: ['Native & drought-tolerant plantings', 'Mulch, stone & clean bed borders', 'Seasonal cleanups & refreshes', 'Irrigation-friendly layouts'],
    before: '/images/IMG_9100.jpg',
    after: '/images/IMG_9109.jpeg',
  },
  {
    title: 'Turf',
    description:
      'Premium synthetic turf that stays green all year with near-zero upkeep — no mowing, no mud, no brown patches. Engineered to drain fast and hold up to heavy use.',
    icon: <Leaf className="w-10 h-10" />,
    bulletIcon: 'leaf',
    features: ['Pet- & kid-safe surfaces', 'Proper drainage base prep', 'UV-stable evergreen blades', 'Putting greens & play areas'],
    before: '/images/IMG_9462.jpg',
    after: '/images/IMG_9480.jpg',
  },
  {
    title: 'Hardscaping',
    description:
      'Retaining walls, stone pathways, and paver patios engineered to add lasting structure, drainage, and value to your property. Built to hold its line for decades.',
    icon: <Hammer className="w-10 h-10" />,
    bulletIcon: 'check',
    features: ['Paver patios & walkways', 'Engineered retaining walls', 'Fire pits & seating walls', 'Proper grading & drainage'],
    before: '/images/backyard-before.jpg',
    after: '/images/backyard-transformation.jpg',
  },
  {
    title: 'Fencing',
    description:
      'Durable, good-looking fence lines that lock in privacy and lift curb appeal — built to stand up to Texas weather. Wood, metal, and composite, done right.',
    icon: <Fence className="w-10 h-10" />,
    bulletIcon: 'check',
    features: ['Cedar privacy fencing', 'Steel & pipe ranch fencing', 'Custom gates & access hardware', 'Repairs, restaining & replacement'],
    before: '/images/IMG_9122.jpg',
    after: '/images/IMG_9123.jpeg',
  },
  {
    title: 'Decking & Patios',
    description:
      'Custom decks, pergolas, and covered patios that turn your backyard into the room you actually want to live in. Designed for shade, gatherings, and Texas evenings.',
    icon: <TentTree className="w-10 h-10" />,
    bulletIcon: 'check',
    features: ['Cedar & composite decking', 'Pergolas & shade structures', 'Covered patios', 'Built-in lighting & seating'],
    before: '/images/IMG_8971.jpeg',
    after: '/images/decking.jpg',
  },
];

function BeforeAfterSlider({
  before,
  after,
  title,
  reduce,
}: {
  before: string;
  after: string;
  title: string;
  reduce: boolean | null;
}) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const setFromX = (x: number) => {
    const el = trackRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };

  const onPointerDown = (e: RPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    setTouched(true);
    setFromX(e.clientX);
  };
  const onPointerMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    e.preventDefault();
    setFromX(e.clientX);
  };
  const endDrag = (e: RPointerEvent<HTMLDivElement>) => {
    setDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* pointer already released */
    }
  };

  const onKeyDown = (e: RKeyboardEvent<HTMLButtonElement>) => {
    const big = e.shiftKey ? 10 : 2;
    let next: number | null = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = pos - big;
    else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = pos + big;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = 100;
    else if (e.key === 'PageDown') next = pos - 10;
    else if (e.key === 'PageUp') next = pos + 10;
    if (next !== null) {
      e.preventDefault();
      setTouched(true);
      setPos(Math.min(100, Math.max(0, next)));
    }
  };

  const imgClass = `absolute inset-0 w-full h-full object-cover ${
    reduce ? '' : 'transition-transform duration-700 group-hover:scale-[1.03]'
  }`;

  return (
    <div
      ref={trackRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="absolute inset-0 select-none cursor-ew-resize"
      style={{ touchAction: 'none' }}
    >
      {/* AFTER (base) */}
      <img src={after} alt={`${title} — after, completed by Tex Vet Trees`} loading="lazy" decoding="async" className={imgClass} />
      {/* BEFORE (clipped overlay) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, transition: dragging || reduce ? 'none' : 'clip-path 150ms ease' }}
      >
        <img src={before} alt={`${title} — before`} loading="lazy" decoding="async" className={imgClass} />
      </div>

      {/* corner labels */}
      <span
        className="absolute top-3 left-3 bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
        style={{ color: SAGE, opacity: 0.35 + (pos / 100) * 0.65 }}
      >
        Before
      </span>
      <span
        className="absolute top-3 right-3 bg-black/50 px-2 py-1 text-[10px] font-bold uppercase tracking-widest"
        style={{ color: SAGE, opacity: 0.35 + ((100 - pos) / 100) * 0.65 }}
      >
        After
      </span>

      {/* seam */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-[#4c5230] pointer-events-none" style={{ left: `${pos}%`, transform: 'translateX(-1px)' }} />

      {/* knob (the focusable slider control) */}
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          tabIndex={0}
          aria-label={`Drag to compare before and after — ${title}`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% revealing the after photo`}
          onKeyDown={onKeyDown}
          className="grid h-11 w-11 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4c5230] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        >
          <span className={`grid h-9 w-9 place-items-center rounded-full bg-[#4c5230] border border-white/30 shadow-lg ${!touched && !reduce ? 'animate-pulse' : ''}`}>
            <ChevronsLeftRight className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reduce = useReducedMotion();
  const BulletIcon = service.bulletIcon === 'leaf' ? Leaf : Check;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={reduce ? { duration: 0.2 } : { duration: 0.5, delay: index * 0.1 }}
      className={`group h-full overflow-hidden rounded-md border border-white/5 bg-[#111] transition duration-300 ${
        reduce
          ? 'hover:border-[#4c5230]'
          : 'hover:-translate-y-1 hover:border-[#4c5230] hover:shadow-[0_0_0_1px_#4c5230,0_18px_40px_-12px_rgba(76,82,48,0.45)]'
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <BeforeAfterSlider before={service.before} after={service.after} title={service.title} reduce={reduce} />
      </div>

      <div className="p-6 sm:p-8">
        <div className="mb-4 inline-block text-[#4c5230] transition-all duration-300 group-hover:scale-110 group-hover:text-white">
          {service.icon}
        </div>
        <h3 className="mb-3 text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">{service.title}</h3>
        <p className="text-sm leading-relaxed text-white/60">{service.description}</p>
        <ul className="mt-5 space-y-2 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <BulletIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#4c5230]" aria-hidden="true" />
              <span className="text-[13px] leading-snug text-white/70">{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
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
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6 pl-6 sm:pl-8 lg:pl-12 pr-0 scroll-pl-6 sm:scroll-pl-8 lg:scroll-pl-12"
        >
          {SERVICES.map((service, index) => (
            <div key={service.title} className="snap-start shrink-0 w-[85%] sm:w-[55%] md:w-[44%] lg:w-[31.5%]">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
