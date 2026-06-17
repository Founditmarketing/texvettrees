import { MapPin, Phone, Mail } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 text-white pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1 */}
          <div>
             <img
              src="/images/Tex-Vet-Trees-Logo-Transparent-BG-200x120-1.png"
              alt="Tex Vet Trees & Landscaping"
              className="h-14 w-auto mb-6"
             />
             <p className="text-white/60 leading-relaxed mb-6 font-medium text-sm">
               Veteran owned and operated. Bringing military discipline, honor, and precision to tree care and landscaping across Central and North Texas.
             </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold tracking-widest uppercase mb-6 flex items-center">
              <div className="w-4 h-[2px] bg-primary mr-3" />
              Services
            </h4>
            <ul className="space-y-3">
              {['Tree Service', 'Landscaping', 'Turf Installation', 'Hardscaping', 'Fencing', 'Decking & Patios'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-white/60 text-sm hover:text-white transition-colors hover:pl-2 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
             <h4 className="text-lg font-bold tracking-widest uppercase mb-6 flex items-center">
              <div className="w-4 h-[2px] bg-primary mr-3" />
              Contact
            </h4>
            <ul className="space-y-4">
               <li className="flex items-start">
                  <Phone className="w-5 h-5 text-[#4c5230] mr-3 mt-1 shrink-0" />
                  <span className="text-white/60 text-sm">(254) 447-5090</span>
               </li>
               <li className="flex items-start">
                  <Mail className="w-5 h-5 text-[#4c5230] mr-3 mt-1 shrink-0" />
                  <span className="text-white/60 text-sm">texvettrees@gmail.com</span>
               </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#4c5230] mr-3 mt-1 shrink-0" />
                  <span className="text-white/60 text-sm">Central & North Texas</span>
               </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold tracking-widest uppercase mb-6 flex items-center">
              <div className="w-4 h-[2px] bg-primary mr-3" />
              Social Media
            </h4>
            <SocialLinks
              className="gap-4"
              linkClassName="w-10 h-10 bg-[#111] border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20"
              iconClassName="w-5 h-5"
            />
          </div>

        </div>

        {/* Accreditations & trust badges */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase mr-2">
            Accredited &amp; Recognized
          </span>
          {[
            { src: '/images/Veteran-Business-400x118-1.png', alt: 'Veteran Owned & Operated' },
            { src: '/images/Waco-Camber-of-Commerce-PNG-200x74-1.png', alt: 'Greater Waco Chamber of Commerce' },
            { src: '/images/bbb-trust-logo-3-400x162-1.webp', alt: 'BBB Accredited Business' },
          ].map((badge) => (
            <div
              key={badge.alt}
              className="bg-white rounded-md px-4 py-2 flex items-center justify-center h-14"
            >
              <img src={badge.src} alt={badge.alt} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between">
           <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-4 md:mb-0">
             &copy; 2026 Tex Vet Trees. All Rights Reserved.
           </p>
           <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase">
             Military Discipline. Professional Results.
           </p>
        </div>
      </div>
    </footer>
  );
}
