import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

/**
 * A huge, faint section title sitting behind the content that drifts horizontally as the section
 * scrolls through the viewport. Self-clips (own overflow-hidden) so the host section does NOT need
 * `overflow-hidden` — which would otherwise break `position: sticky` descendants.
 */
export function SectionWatermark({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden ${className}`}
    >
      <motion.span
        style={reduce ? undefined : { x }}
        className="block w-full text-center whitespace-nowrap font-black uppercase leading-none tracking-tighter text-white/[0.05] text-[20vw]"
      >
        {text}
      </motion.span>
    </div>
  );
}
