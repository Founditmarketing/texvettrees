import { Star, ShieldCheck, Medal, CheckCircle, Home } from 'lucide-react';

const TRUST_ITEMS = [
  { text: 'Veteran Owned & Operated', icon: <Medal className="w-5 h-5 text-[#4c5230]" /> },
  { text: 'Fully Insured', icon: <ShieldCheck className="w-5 h-5 text-[#4c5230]" /> },
  { text: 'Military Discipline', icon: <Star className="w-5 h-5 text-[#4c5230]" /> },
  { text: '5-Star Rated', icon: <CheckCircle className="w-5 h-5 text-[#4c5230]" /> },
  { text: 'Commercial & Residential', icon: <Home className="w-5 h-5 text-[#4c5230]" /> },
];

export function TrustBanner() {
  return (
    <div className="bg-black h-12 flex items-center overflow-hidden relative border-y border-white/5">
      <div className="flex w-[200%] sm:w-auto animate-marquee">
        {/* Double the list for infinite scroll effect */}
        {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 px-8 py-4 justify-center whitespace-nowrap min-w-max"
          >
            <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-12">
              {item.text}
              <span className="text-white/40 hidden sm:block">•</span>
            </span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee {
             animation: marquee 15s linear infinite;
          }
        }
      `}} />
    </div>
  );
}
