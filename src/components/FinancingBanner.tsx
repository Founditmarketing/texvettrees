import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

// The real Hearth assets supplied for Tex Vet Trees: the official banner graphic
// (with the "Get My Rates" button baked in) linking to our Hearth partner page.
const HEARTH_PARTNER_URL = 'https://app.gethearth.com/partners/tex-vet-trees-landscaping';
const HEARTH_BANNER_IMG =
  'https://app.gethearth.com/contractor_images/tex-vet-trees-landscaping/banner.jpg?color=darkblue&size_id=310x120';

export function FinancingBanner() {
  return (
    <section className="relative overflow-hidden bg-[#4c5230]">
      <div className="flex flex-col md:flex-row md:items-stretch md:min-h-[190px]">
        {/* Left: message (padded, on our theme) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-8 md:px-10 lg:px-14 md:py-10"
        >
          <div className="mb-2 flex items-center gap-3 sm:gap-4">
            <Handshake className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 text-white/80" aria-hidden="true" />
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase leading-none text-white">
              Financing Available
            </h2>
          </div>
          <p className="max-w-xl text-sm md:text-base leading-relaxed text-white/85">
            Don't let budget hold back your project. We've partnered with Hearth to offer predictable (low-cost)
            monthly payments. Get pre-qualified in minutes.
          </p>
        </motion.div>

        {/* Right: the actual Hearth banner graphic — full-bleed to the section edges
            (top/bottom/right on desktop, left/right/bottom on mobile) */}
        <motion.a
          href={HEARTH_PARTNER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get pre-qualified for financing with Hearth (opens in a new tab)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="block w-full md:w-1/2 lg:w-[40%] md:shrink-0 transition-opacity hover:opacity-90"
        >
          <img
            src={HEARTH_BANNER_IMG}
            alt="Hearth Financing — monthly payment options, get my rates"
            loading="lazy"
            className="block h-auto w-full md:h-full md:object-cover"
          />
        </motion.a>
      </div>
    </section>
  );
}
