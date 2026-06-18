import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { MessageSquare, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { HUBSPOT_FORM_URL } from './ContactForm';

// The HubSpot quote form renders ~900px tall. We give the iframe this as a min-height and let a
// same-origin wrapper own the scroll, so it scrolls reliably on desktop (wheel) and iOS (touch) —
// a cross-origin iframe cannot be relied on to self-scroll (iOS Safari expands it to content height).
const FORM_MIN_HEIGHT = 900;

export function FloatingQuoteButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [needsScroll, setNeedsScroll] = useState(false);
  const [nearContact, setNearContact] = useState(false);
  const reduceMotion = useReducedMotion();
  const { pathname } = useLocation();

  const fabRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Show the scroll hint only while there is more of the form below the current scroll position.
  const updateNeedsScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const remaining = el.scrollHeight - el.scrollTop - el.clientHeight;
    setNeedsScroll(remaining > 24);
  }, []);

  // Hide the floating button while the inline contact form is on screen (avoids redundancy/overlap).
  // Re-runs on route change so it re-finds the #contact section (which only exists on some pages).
  useEffect(() => {
    setNearContact(false);
    const el = document.getElementById('contact');
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => setNearContact(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  // While open: lock page scroll, make the background inert, close on Escape, manage focus + hint.
  useEffect(() => {
    if (!isOpen) return;

    const root = document.getElementById('root');
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    root?.setAttribute('inert', '');

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', updateNeedsScroll);

    const raf = requestAnimationFrame(updateNeedsScroll);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      root?.removeAttribute('inert');
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', updateNeedsScroll);
      cancelAnimationFrame(raf);
      fabRef.current?.focus();
    };
  }, [isOpen, updateNeedsScroll]);

  // The /contact and /work-with-us pages are each built around their own form — a floating
  // quote button is redundant there (and would push the wrong form on the careers page).
  if (pathname === '/contact' || pathname === '/work-with-us') return null;

  return (
    <>
      {/* Floating action button */}
      <motion.button
        ref={fabRef}
        type="button"
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: nearContact ? 0 : 1, scale: nearContact ? 0.8 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-haspopup="dialog"
        aria-label="Open the free estimate form"
        aria-hidden={nearContact}
        tabIndex={nearContact ? -1 : 0}
        className={`fixed bottom-6 right-6 z-30 hidden sm:flex items-center justify-center gap-2 sm:w-auto sm:h-auto sm:pl-5 sm:pr-6 sm:py-4 bg-[#4c5230] hover:bg-[#3a3f25] text-white rounded-full shadow-2xl shadow-black/50 border border-white/10 font-bold text-xs tracking-widest uppercase ${
          nearContact ? 'pointer-events-none' : ''
        }`}
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">Get a Quote</span>
      </motion.button>

      {/* Mobile sticky action bar — Call Now + Message (Message opens the same quote modal) */}
      <div
        className={`sm:hidden fixed inset-x-0 bottom-0 z-30 flex border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur transition-transform duration-300 ${
          nearContact ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <a
          href="tel:+12544475090"
          className="flex flex-1 items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest text-white border-r border-white/10 active:bg-white/5"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex flex-1 items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest text-white bg-[#4c5230] active:bg-[#3a3f25]"
        >
          <MessageSquare className="w-4 h-4" />
          Message
        </button>
      </div>

      {/* Modal — portaled to <body> so the rest of the app can be made inert while it is open */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center sm:p-6 overscroll-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-dialog-title"
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm touch-none overscroll-contain"
                onClick={() => setIsOpen(false)}
              />

              {/* Window */}
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 40, opacity: 0, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                className="relative w-full sm:max-w-lg h-[90vh] sm:h-[86vh] bg-[#0a0a0a] rounded-t-2xl sm:rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-[#4c5230] shrink-0">
                  <div>
                    <h2
                      id="quote-dialog-title"
                      className="text-white font-black uppercase tracking-wide text-lg leading-none"
                    >
                      Request a Free Estimate
                    </h2>
                    <p className="text-white/70 text-[11px] tracking-wide mt-1.5">
                      Veteran-owned &middot; Central &amp; North Texas
                    </p>
                  </div>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close"
                    className="text-white/80 hover:text-white hover:bg-black/20 rounded-full p-1.5 transition-colors shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Same-origin scroll container owns the scroll (reliable on desktop wheel + iOS touch) */}
                <div
                  ref={scrollRef}
                  onScroll={updateNeedsScroll}
                  className="flex-1 min-h-0 overflow-y-auto bg-[#f4f8fa]"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  <iframe
                    title="Tex Vet Trees — Request a Quote"
                    src={HUBSPOT_FORM_URL}
                    className="w-full block"
                    style={{ border: 'none', width: '100%', minHeight: `${FORM_MIN_HEIGHT}px`, background: '#f4f8fa' }}
                    allowTransparency={true}
                  />
                </div>

                {/* Scroll hint — only while more of the form remains below */}
                {needsScroll && (
                  <div className="shrink-0 flex items-center justify-center gap-2 bg-[#3a3f25] text-white/90 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest py-2.5 border-t border-white/10">
                    <ChevronDown className={`w-4 h-4 ${reduceMotion ? '' : 'animate-bounce'}`} />
                    Scroll inside the form to see all fields &amp; submit
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
