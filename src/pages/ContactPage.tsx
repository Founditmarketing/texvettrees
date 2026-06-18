import { motion } from 'motion/react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { HUBSPOT_FORM_URL } from '../components/ContactForm';
import { SocialLinks } from '../components/SocialLinks';
import { SectionWatermark } from '../components/SectionWatermark';

const CONTACTS = [
  { Icon: Phone, label: '(254) 447-5090', sub: 'Call or text', href: 'tel:+12544475090' },
  { Icon: Mail, label: 'texvettrees@gmail.com', sub: 'Email us anytime', href: 'mailto:texvettrees@gmail.com' },
  { Icon: MapPin, label: 'Central & North Texas', sub: 'Service area', href: null },
  { Icon: ShieldCheck, label: 'Veteran-Owned & Fully Insured', sub: 'Free estimates', href: null },
];

const BADGES = [
  { src: '/images/Veteran-Business-400x118-1.png', alt: 'Veteran Owned & Operated' },
  { src: '/images/Waco-Camber-of-Commerce-PNG-200x74-1.png', alt: 'Greater Waco Chamber of Commerce' },
  { src: '/images/bbb-trust-logo-3-400x162-1.webp', alt: 'BBB Accredited Business' },
];

export function ContactPage() {
  return (
    <section className="relative bg-[#0a0a0a] pt-40 md:pt-48 pb-24 border-b border-white/5">
      <SectionWatermark text="Contact" align="top" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-4 mb-5"
          >
            <div className="w-8 h-[1px] bg-[#4c5230]" />
            <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">Get In Touch</span>
            <div className="w-8 h-[1px] bg-[#4c5230]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            Get A Quote
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-xl mx-auto mt-6 leading-relaxed"
          >
            Tell us about your project and our veteran-led team will get back to you fast with a free, no-obligation
            estimate.
          </motion.p>
        </div>

        {/* Info + form */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="space-y-5">
              {CONTACTS.map(({ Icon, label, sub, href }) => {
                const inner = (
                  <>
                    <span className="w-11 h-11 rounded-full bg-[#4c5230] flex items-center justify-center shrink-0 group-hover:bg-[#3a3f25] transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                    <span>
                      <span className="block text-white font-bold leading-tight">{label}</span>
                      <span className="block text-white/40 text-xs uppercase tracking-widest mt-0.5">{sub}</span>
                    </span>
                  </>
                );
                return href ? (
                  <a key={label} href={href} className="flex items-center gap-4 group w-fit">
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4">
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Accreditations */}
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Accredited &amp; Recognized</p>
              <div className="flex flex-wrap items-center gap-3">
                {BADGES.map((b) => (
                  <div key={b.alt} className="bg-white rounded-md h-12 px-3 flex items-center">
                    <img src={b.src} alt={b.alt} className="max-h-7 w-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Follow Along</p>
              <SocialLinks
                className="gap-4"
                linkClassName="w-10 h-10 bg-[#111] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30"
                iconClassName="w-5 h-5"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-[#f4f8fa] rounded-lg overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
          >
            <iframe
              title="Tex Vet Trees — Request a Quote"
              src={HUBSPOT_FORM_URL}
              className="w-full block"
              style={{ border: 'none', width: '100%', minHeight: '900px', background: '#f4f8fa' }}
              allowTransparency={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
