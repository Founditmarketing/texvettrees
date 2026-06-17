import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

/** Single source of truth for the embedded HubSpot CRM form (also used by the floating button). */
export const HUBSPOT_FORM_URL = 'https://share-na2.hsforms.com/1KRGM0q_oRFqbBENVRwzGMg41nkuy';

const CONTACTS = [
  { Icon: Phone, label: '(254) 447-5090', href: 'tel:+12544475090' },
  { Icon: Mail, label: 'texvettrees@gmail.com', href: 'mailto:texvettrees@gmail.com' },
  { Icon: MapPin, label: 'Central & North Texas', href: null },
];

export function ContactForm() {
  return (
    <section id="contact" className="relative py-24 bg-[#111] border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: copy + contact details (consolidated from the old "Take Action" block) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-center space-x-4 mb-5">
              <div className="w-10 h-[1px] bg-[#4c5230]" />
              <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
              Ready to Transform <br className="hidden sm:block" /> Your Property?
            </h2>

            <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-10">
              Contact us today for a free estimate. We bring military precision to every job, large or
              small — tell us about your project and our veteran-led team will get back to you fast.
            </p>

            <div className="space-y-4">
              {CONTACTS.map(({ Icon, label, href }) => {
                const inner = (
                  <>
                    <span className="w-10 h-10 rounded-full bg-[#4c5230] flex items-center justify-center shrink-0 group-hover:bg-[#3a3f25] transition-colors">
                      <Icon className="w-4 h-4 text-white" />
                    </span>
                    <span className="text-white/80 font-medium group-hover:text-white transition-colors">{label}</span>
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
          </motion.div>

          {/* Right: HubSpot CRM contact form (embedded from texvettrees.com) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#f4f8fa] rounded-lg overflow-hidden shadow-2xl shadow-black/40 border border-white/10"
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
