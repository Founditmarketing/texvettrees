import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SocialLinks } from './SocialLinks';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Blog', href: '#blog' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar — has its own background and scrolls away (does not stick) */}
      <div
        className={`w-full bg-[#3a3f25] overflow-hidden transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 border-b border-white/10'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between h-10 text-[11px]">
          <div className="flex items-center gap-5 text-white/85">
            <a
              href="tel:+12544475090"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
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
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#4c5230] py-2 shadow-lg shadow-black/30'
            : 'bg-gradient-to-b from-black/50 to-transparent py-5'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center z-50">
            <img
              src="/images/Tex-Vet-Trees-Logo-Transparent-BG-200x120-1.png"
              alt="Tex Vet Trees & Landscaping"
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-20'}`}
            />
          </a>

          {/* Right cluster: nav (desktop) + social (always) + hamburger (mobile) */}
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-8">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white text-xs tracking-widest uppercase font-bold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="border-2 px-6 py-2 rounded-none font-bold text-xs tracking-widest uppercase transition-all duration-300 border-white text-white hover:bg-white hover:text-[#4c5230]"
              >
                Get a Quote
              </a>
            </nav>

            {/* Social icons — sit to the left of the hamburger on mobile, far right on desktop */}
            <SocialLinks
              className="gap-0.5 sm:gap-1"
              linkClassName="text-white/70 hover:text-white p-1.5"
              iconClassName="w-[18px] h-[18px]"
            />

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 w-full h-screen bg-[#4c5230] flex flex-col items-center justify-center space-y-8 z-40 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-2xl tracking-widest uppercase font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#4c5230] px-8 py-4 font-bold text-xs tracking-widest uppercase mt-4 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
