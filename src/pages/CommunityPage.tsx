import { Fragment } from 'react';
import { motion } from 'motion/react';
import { PawPrint, Calendar, Medal, Handshake, TrendingUp, Leaf } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';

const SUPPORT = [
  { Icon: PawPrint, title: 'Cameron Park Zoo Sponsorship', desc: 'Proud supporters of conservation and education in our community.' },
  { Icon: Calendar, title: 'Local Event Support', desc: 'Showing up for the events that bring our neighbors together.' },
  { Icon: Medal, title: 'Veteran Outreach Programs', desc: 'Helping fellow veterans find purpose, training, and a path forward.' },
];

const VALUES = [
  { Icon: Handshake, title: 'Integrity in Service', desc: 'Doing right by our neighbors — on every job and beyond it.' },
  { Icon: TrendingUp, title: 'Local Economic Growth', desc: 'Investing in the people and businesses of our region.' },
  { Icon: Leaf, title: 'Environmental Stewardship', desc: 'Caring for the land and trees that make Texas home.' },
];

type Item = { Icon: typeof PawPrint; title: string; desc: string };

function Card({ Icon, title, desc, surface }: Item & { surface: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={`group rounded-md border border-white/5 ${surface} p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#4c5230]`}
    >
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#4c5230]/40 bg-[#4c5230]/15 transition-colors group-hover:bg-[#4c5230]">
        <Icon className="h-6 w-6 text-[#4c5230] transition-colors group-hover:text-white" aria-hidden="true" />
      </span>
      <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/60">{desc}</p>
    </motion.div>
  );
}

export function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Involvement"
        title="Community"
        subtitle="Service doesn't stop at the property line. As a veteran-owned business, giving back to Central & North Texas is part of who we are."
        watermark="Community"
        image="/images/Texas-Vet-Trees-Milling-1024x683-1.jpg"
      />

      {/* Our Commitment to Home */}
      <section className="relative py-24 bg-[#111] border-b border-white/5">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4 mb-4"
          >
            <div className="w-8 h-[1px] bg-[#4c5230]" />
            <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">Why It Matters</span>
            <div className="w-8 h-[1px] bg-[#4c5230]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Our Commitment to Home
          </motion.h2>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-2xl md:text-3xl font-medium italic leading-snug text-white/90"
          >
            &ldquo;We feel a deep responsibility to be involved in our local community.&rdquo;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-white/60 leading-relaxed"
          >
            At Tex Vet Trees and Landscaping, our work doesn't stop at the property line. As a Veteran-owned business,
            service is in our DNA. We believe that a strong community is built through action, and we are dedicated to
            supporting the organizations that make our region a better place to live and grow.
          </motion.p>
        </div>
      </section>

      {/* Local Support */}
      <section className="relative py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-5"
            >
              Local Support
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 leading-relaxed"
            >
              We are proud to share that <strong className="text-white font-semibold">we support the Cameron Park Zoo</strong>{' '}
              and its mission of conservation and education.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SUPPORT.map((s) => (
              <Fragment key={s.title}>
                <Card {...s} surface="bg-[#111]" />
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-24 bg-[#111] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-5"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 leading-relaxed"
            >
              Community involvement is more than just a donation — it's about being a neighbor you can count on.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {VALUES.map((v) => (
              <Fragment key={v.title}>
                <Card {...v} surface="bg-[#0a0a0a]" />
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Proud to Serve Our Community"
        text="From your backyard to our backyard — let's build something great together. Get a free estimate from our veteran-led team."
      />
    </>
  );
}
