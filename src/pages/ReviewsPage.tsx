import { motion } from 'motion/react';
import { Star, ArrowUpRight } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';

type PlatformKey = 'google' | 'facebook' | 'angi' | 'thumbtack' | 'yelp';

type Review = {
  name: string;
  platform: PlatformKey;
  quote: string;
  url: string;
};

// Pulled verbatim from texvettrees.com/reviews/
const REVIEWS: Review[] = [
  {
    name: 'James R.',
    platform: 'google',
    quote:
      'Incredible experience with Tex Vet Trees. They arrived exactly when they said they would and worked with military-like precision. They handled a massive limb overhanging my roof with absolute care. The property was cleaner when they left than before they started. Best tree service in Central Texas, period.',
    url: 'https://www.google.com/maps/place/Tex+Vet+Trees+%26+Landscaping/@31.704561,-97.263625,17z/data=!3m1!4b1!4m6!3m5!1s0x864f993980090279:0x9f1d11a2ae38e6bb!8m2!3d31.704561!4d-97.263625!16s%2Fg%2F11yz9xr1qb?entry=ttu',
  },
  {
    name: 'Eligio Solis',
    platform: 'facebook',
    quote:
      "Tex Vet Trees & Milling is one of the most reliable and professional tree service companies I've ever worked with. They showed up on time, communicated clearly, and handled everything safely and efficiently. You can tell they take pride in their work — from trimming and milling to cleanup, everything was done perfectly. I highly recommend them for anyone needing honest, skilled, and dependable tree service.",
    url: 'https://www.facebook.com/TexVetTrees/reviews/?id=61558534992589&sk=reviews',
  },
  {
    name: 'Rachel D.',
    platform: 'angi',
    quote:
      'This company did an amazing job, very professional and friendly. Richard communicated very well explaining the exact process and when to expect them to arrive and job to be completed. Our neighbors were so impressed they have already had them do work for them too. Richard is amazing to work with and I would highly recommend him and his company to anyone. We plan to use his services in the future to treat our existing trees and keep them healthy.',
    url: 'https://www.angi.com/companylist/us/tx/waco/tex-vet-trees-landscaping-reviews-1.htm#reviews',
  },
  {
    name: 'Simone K.',
    platform: 'thumbtack',
    quote:
      "I recently hired Tex Vet Trees for a tree removal and pruning job in my backyard, and I couldn't be more impressed with their professionalism and quality of service. From the initial consultation to the completion of the job, Richard and his team were courteous, knowledgeable, and efficient. They took the time to assess the health of our trees and provided expert recommendations... I truly appreciated the care and attention they put into the job. I would highly recommend Tex Vet Trees to anyone in need of reliable, professional tree services! Plus you're supporting a veteran owned business.",
    url: 'https://www.thumbtack.com/tx/waco/tree-trimming/tex-vet-trees-landscaping/service/566111823036858381',
  },
  {
    name: 'Brian Y.',
    platform: 'yelp',
    quote:
      'I had Richard and his team at Tex Vet Trees and Milling trim and shape the mature trees at my home in Waco. Service was prompt and professional. They did a great job raising the canopies and exceptional follow through cleaning up the yard and sidewalks after the trimming and cutting was done. I found the price was reasonable for good work. I will use them again and would recommend them to friends.',
    url: 'https://www.yelp.com/biz/tex-vet-trees-and-landscaping-waco',
  },
];

// Brand glyphs (simple-icons, single path) for platforms without a supplied logo file.
const BRAND_PATHS: Record<'google' | 'facebook', string> = {
  google:
    'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
  facebook:
    'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
};

// reviewLabel = how the card credits the source; url = the platform's "all reviews" page;
// iconSrc = the supplied logo (Angi/Thumbtack/Yelp); color = glyph tint (Google/Facebook).
const PLATFORMS: Record<
  PlatformKey,
  { label: string; reviewLabel: string; url: string; iconSrc?: string; color?: string }
> = {
  google: {
    label: 'Google',
    reviewLabel: 'Google Review',
    color: '#ffffff',
    url: 'https://www.google.com/maps/place/Tex+Vet+Trees+%26+Landscaping/@31.0893505,-97.2826766,9z/data=!4m8!3m7!1s0x864f993980090279:0x9f1d11a2ae38e6bb!8m2!3d31.0893506!4d-97.2826766!9m1!1b1!16s%2Fg%2F11yz9xr1qb?entry=ttu',
  },
  facebook: {
    label: 'Facebook',
    reviewLabel: 'Facebook Review',
    color: '#1877f2',
    url: 'https://www.facebook.com/TexVetTrees/reviews/?id=61558534992589&sk=reviews',
  },
  angi: {
    label: 'Angi',
    reviewLabel: "Angie's List Review",
    iconSrc: '/angi.png',
    url: 'https://www.angi.com/companylist/us/tx/waco/tex-vet-trees-landscaping-reviews-1.htm#reviews',
  },
  thumbtack: {
    label: 'Thumbtack',
    reviewLabel: 'Thumbtack Review',
    iconSrc: '/thumbtack.png',
    url: 'https://www.thumbtack.com/tx/waco/tree-trimming/tex-vet-trees-landscaping/service/566111823036858381?category_pk=240142059022278971&ir_referrer=FRONT_DOOR_SEARCH&keyword_pk=102906936637049702&lp_request_pk=570488216946262030&project_pk=570488216950464526&service_pk=566111823036858381&zipCode=76501&zip_code=76501&click_origin=pro%20list%2Fclick%20pro%20name&is_sponsored=false',
  },
  yelp: {
    label: 'Yelp',
    reviewLabel: 'Yelp Review',
    iconSrc: '/yelp.png',
    url: 'https://www.yelp.com/biz/tex-vet-trees-and-landscaping-waco?osq=Tex+Vet+Trees+And+Landscaping',
  },
};

const PLATFORM_ORDER = Object.keys(PLATFORMS) as PlatformKey[];

function PlatformIcon({ platform, className = 'h-5 w-5' }: { platform: PlatformKey; className?: string }) {
  const p = PLATFORMS[platform];
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
      {p.iconSrc ? (
        <img src={p.iconSrc} alt="" aria-hidden="true" className="max-h-full max-w-full object-contain" />
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ color: p.color }} className="h-full w-full" aria-hidden="true">
          <path d={BRAND_PATHS[platform as 'google' | 'facebook']} />
        </svg>
      )}
    </span>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#d8b86a] text-[#d8b86a]" aria-hidden="true" />
      ))}
    </div>
  );
}

export function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Trusted by Central Texas"
        title="Reviews"
        subtitle="Don't just take our word for it. See what your neighbors are saying about our veteran-led team across Google, Facebook, Yelp & more."
        watermark="Reviews"
        image="/images/treeservice.jpg"
      />

      {/* What Our Customers Say */}
      <section className="relative bg-[#0a0a0a] py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center justify-center space-x-4"
            >
              <div className="h-[1px] w-8 bg-[#4c5230]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4c5230]">Client Reviews</span>
              <div className="h-[1px] w-8 bg-[#4c5230]" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-5 leading-relaxed text-white/60"
            >
              We take pride in our military work ethic and commitment to customer satisfaction. Read what your neighbors
              are saying about Tex Vet Trees.
            </motion.p>
          </div>

          {/* Platform links — go straight to each review platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              See All Our Reviews On
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {PLATFORM_ORDER.map((key) => {
                const p = PLATFORMS[key];
                return (
                  <a
                    key={key}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read our reviews on ${p.label} (opens in a new tab)`}
                    className="group inline-flex items-center gap-2.5 rounded-md border border-white/10 bg-[#111] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white/70 transition-all hover:-translate-y-0.5 hover:border-[#4c5230] hover:text-white"
                  >
                    <PlatformIcon platform={key} className="h-5 w-5" />
                    {p.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-white/30 transition-colors group-hover:text-white"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Review grid — 3 columns */}
          <div className="mx-auto grid max-w-6xl items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {REVIEWS.map((review, i) => {
              const meta = PLATFORMS[review.platform];
              return (
                <motion.article
                  key={review.url}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className="group flex flex-col rounded-md border border-white/5 bg-[#111] p-7 transition-colors duration-300 hover:border-[#4c5230] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Stars />
                    <PlatformIcon platform={review.platform} className="h-5 w-5" />
                  </div>

                  <blockquote className="mt-6 flex-1 text-[15px] italic leading-relaxed text-white/75">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-white">{review.name}</p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-[#d8b86a]">
                        {meta.reviewLabel}
                      </p>
                    </div>
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read ${review.name}'s ${meta.label} review (opens in a new tab)`}
                      className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-white/55 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                    >
                      View Review
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Join Our Happy Customers?"
        text="Experience the military precision and care our reviewers rave about. Get a free, no-obligation estimate from our veteran-led team today."
      />
    </>
  );
}
