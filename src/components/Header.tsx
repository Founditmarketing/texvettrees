import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SocialLinks } from './SocialLinks';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { useIntro } from './Intro';
import { SERVICES } from '../data/services';

type NavItem = { name: string; to?: string; href?: string; external?: boolean; button?: boolean; dropdown?: boolean };

const NAV: NavItem[] = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/#services', dropdown: true },
  { name: 'Blog', to: '/blog' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Reviews', to: '/reviews' },
  { name: 'Work With Us', to: '/work-with-us' },
  { name: 'Financing', href: 'https://app.gethearth.com/financing/57979/102456?utm_campaign=57979&utm_content=general&utm_medium=custom-lp&utm_source=contractor&utm_term=10245', external: true },
  { name: 'Get A Quote', to: '/contact', button: true },
  { name: 'Community', to: '/community' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navItemRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const stage = useIntro();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close any open menus whenever the route changes.
  useEffect(() => {
    setServicesOpen(false);
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  // Close the desktop mega menu on Escape and return focus to the trigger.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setServicesOpen((open) => {
        if (open) triggerRef.current?.focus();
        return false;
      });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Dismiss the mega menu on outside click (covers click/touch on large screens).
  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (navItemRef.current && !navItemRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [servicesOpen]);

  // Clear any pending hover-close timer on unmount.
  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140);
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const linkCls =
    'text-white/80 hover:text-white text-xs tracking-widest uppercase font-bold whitespace-nowrap transition-colors';
  const btnCls =
    'border-2 border-white px-5 py-2 font-bold text-xs tracking-widest uppercase whitespace-nowrap text-white transition-all duration-300 hover:bg-white hover:text-[#4c5230]';

  const renderItem = (item: NavItem, className: string, btnClassName: string, onClick?: () => void) => {
    if (item.external) {
      return (
        <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={className}>
          {item.name}
        </a>
      );
    }
    return (
      <Link key={item.name} to={item.to ?? '/'} onClick={onClick} className={item.button ? btnClassName : className}>
        {item.name}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar + main nav slide/fade in after the intro reveal. Kept on an inner wrapper (not the
          <header>) so its transform never becomes the containing block for the fixed mobile menu below. */}
      <motion.div
        initial={{ y: -28, opacity: 0 }}
        animate={stage === 'content' ? { y: 0, opacity: 1 } : { y: -28, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top utility bar — has its own background and scrolls away (does not stick) */}
      <div
        className={`w-full bg-[#3a3f25] overflow-hidden transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 border-b border-white/10'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between h-10 text-[11px]">
          <div className="flex items-center gap-5 text-white/85">
            <a href="tel:+12544475090" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-white/60" />
              <span className="font-semibold tracking-wide">(254) 447-5090</span>
            </a>
            <a
              href="mailto:texvettrees@gmail.com"
              className="hidden sm:flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-white/60" />
              <span className="font-semibold tracking-wide">texvettrees@gmail.com</span>
            </a>
          </div>
          <div className="text-white/70 font-bold uppercase tracking-[0.2em] text-[10px]">
            <span className="md:hidden">Veteran Owned</span>
            <span className="hidden md:inline">Veteran Owned &amp; Operated &middot; Central to North Texas</span>
          </div>
        </div>
      </div>

      {/* Main nav — transparent over the hero; sticks to top with a background and a smaller logo on scroll */}
      <div
        className={`relative w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#4c5230] py-2 shadow-lg shadow-black/30'
            : 'bg-gradient-to-b from-black/50 to-transparent py-5'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center z-50 shrink-0">
            <img
              src="/images/Tex-Vet-Trees-Logo-Transparent-BG-200x120-1.png"
              alt="Tex Vet Trees & Landscaping"
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16 lg:h-20'}`}
            />
          </Link>

          {/* Right cluster: nav (xl) + social (always) + hamburger (below xl) */}
          <div className="flex items-center gap-3 sm:gap-5 xl:gap-6">
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
              {NAV.map((item) => {
                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      ref={navItemRef}
                      onMouseEnter={openMenu}
                      onMouseLeave={scheduleClose}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setServicesOpen(false);
                      }}
                    >
                      <button
                        ref={triggerRef}
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((v) => !v)}
                        onFocus={openMenu}
                        className={`${linkCls} inline-flex items-center gap-1`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        />
                      </button>

                      {/* Full-width Services mega menu (desktop) — nested here so focus flows in */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="absolute left-0 right-0 top-full hidden xl:block"
                          >
                            <ServicesMegaMenu onNavigate={() => setServicesOpen(false)} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return renderItem(item, linkCls, btnCls);
              })}
            </nav>

            <SocialLinks
              className="gap-0.5 sm:gap-1"
              linkClassName="text-white/70 hover:text-white p-1.5"
              iconClassName="w-[18px] h-[18px]"
            />

            <button
              className="xl:hidden text-white z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      </motion.div>

      {/* Mobile / tablet Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 w-full h-screen bg-[#4c5230] flex flex-col items-center justify-center gap-5 z-40 xl:hidden overflow-y-auto py-24"
          >
            {NAV.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="flex flex-col items-center gap-4">
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="inline-flex items-center gap-2 text-white text-2xl tracking-widest uppercase font-bold"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col items-center gap-3 overflow-hidden"
                        >
                          {SERVICES.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              onClick={closeMobile}
                              className="text-white/75 hover:text-white text-base tracking-widest uppercase font-semibold transition-colors"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return renderItem(
                item,
                'text-white text-2xl tracking-widest uppercase font-bold',
                'border-2 border-white text-white hover:bg-white hover:text-[#4c5230] px-8 py-4 font-bold text-xs tracking-widest uppercase transition-colors',
                closeMobile,
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
