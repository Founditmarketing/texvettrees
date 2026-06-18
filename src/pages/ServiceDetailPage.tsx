import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Leaf, Check } from 'lucide-react';
import { getService, SERVICES } from '../data/services';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const reduce = useReducedMotion();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/" replace />;

  const { title, tagline, intro, features, bulletIcon, before, after, watermark, Icon } = service;
  const Bullet = bulletIcon === 'leaf' ? Leaf : Check;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero eyebrow="Our Services" title={title} subtitle={tagline} watermark={watermark} image={after} />

      {/* Overview — copy + interactive before/after */}
      <section className="relative py-24 bg-[#111] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-[1px] bg-[#4c5230]" />
                <span className="text-[#4c5230] font-bold tracking-[0.2em] uppercase text-[10px]">What We Do</span>
              </div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#4c5230]/40 bg-[#4c5230]/15 text-[#a9bd84]">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                {title}
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-xl">{intro}</p>

              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-4">What's Included</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Bullet className="mt-0.5 h-4 w-4 shrink-0 text-[#4c5230]" aria-hidden="true" />
                    <span className="text-sm leading-snug text-white/70">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                <BeforeAfterSlider before={before} after={after} title={title} reduce={reduce} />
              </div>
              <p className="mt-3 text-center text-[11px] font-bold uppercase tracking-widest text-white/35">
                Drag to compare before &amp; after
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore more services */}
      <section className="relative py-24 bg-[#0a0a0a] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#4c5230]" />
              <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">Full Service</span>
              <div className="w-8 h-[1px] bg-[#4c5230]" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight"
            >
              Explore More Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group overflow-hidden rounded-md border border-white/5 bg-[#111] transition-all duration-300 hover:-translate-y-1 hover:border-[#4c5230]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.after}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                  <s.Icon className="absolute bottom-2.5 left-3 h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div className="p-3">
                  <h4 className="text-[12px] font-bold uppercase tracking-wide leading-tight text-white transition-colors group-hover:text-[#a9bd84]">
                    {s.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready for ${title}?`}
        text={`Get a free, no-obligation estimate for your ${title.toLowerCase()} project — military precision from our veteran-led team.`}
      />
    </>
  );
}
