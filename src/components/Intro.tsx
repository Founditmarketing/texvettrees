import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

/**
 * Site intro sequence. Three stages drive the first-load choreography:
 *   loading  → the full-screen preloader (business name) covers everything
 *   revealed → the preloader curtain lifts, showing ONLY the hero background
 *   content  → the header + hero content fade/slide in
 * Components read the stage via useIntro(). Plays once on initial load (the provider
 * persists across client-side route changes). Respects prefers-reduced-motion.
 */
type Stage = 'loading' | 'revealed' | 'content';

const IntroContext = createContext<Stage>('content');
export const useIntro = () => useContext(IntroContext);

const NAME_MS = 1800; // how long the name + progress line shows
const EXIT_S = 0.7; // curtain slide-up duration (seconds)
const MOMENT_MS = 550; // pause after the reveal before content comes in

function Preloader() {
  return (
    <motion.div
      key="intro"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] px-6"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: EXIT_S, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] text-[#a9bd84]"
        >
          Veteran Owned &amp; Operated
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="text-4xl sm:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white"
        >
          Tex Vet Trees
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36 }}
          className="mt-3 text-sm sm:text-base font-medium uppercase tracking-[0.4em] text-white/55"
        >
          &amp; Landscaping
        </motion.p>

        {/* Minimal progress line */}
        <div className="mx-auto mt-8 h-[2px] w-44 sm:w-56 overflow-hidden bg-white/10">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: NAME_MS / 1000 - 0.4, delay: 0.3, ease: 'easeInOut' }}
            style={{ transformOrigin: 'left' }}
            className="h-full w-full bg-[#4c5230]"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>(reduce ? 'content' : 'loading');

  // Skip the whole sequence for reduced-motion users.
  useEffect(() => {
    if (reduce) setStage('content');
  }, [reduce]);

  // loading → revealed (this removal triggers the curtain's exit animation).
  useEffect(() => {
    if (reduce || stage !== 'loading') return;
    const t = setTimeout(() => setStage('revealed'), NAME_MS);
    return () => clearTimeout(t);
  }, [reduce, stage]);

  // revealed → content (after the curtain is fully up + a beat).
  useEffect(() => {
    if (stage !== 'revealed') return;
    const t = setTimeout(() => setStage('content'), EXIT_S * 1000 + MOMENT_MS);
    return () => clearTimeout(t);
  }, [stage]);

  // Lock scrolling while the preloader is covering the page.
  useEffect(() => {
    if (stage !== 'loading') return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [stage]);

  return (
    <IntroContext.Provider value={stage}>
      {children}
      <AnimatePresence>{stage === 'loading' && <Preloader />}</AnimatePresence>
    </IntroContext.Provider>
  );
}
