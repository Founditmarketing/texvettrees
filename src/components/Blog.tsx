import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SectionWatermark } from './SectionWatermark';

const POST = {
  category: 'Community Spotlight',
  date: 'February 2026',
  title: 'Hiring Our Veterans: A Story From The Trees',
  image: '/blogpost.jpg',
  url: 'https://www.fox44news.com/news/local-news/mclennan-county/hiring-our-veterans-a-story-from-the-trees/',
};

const PARAGRAPHS = [
  "Transitioning from military service to civilian life isn't just about finding a job; it's about finding a new mission. At Tex Vet Trees, we believe the discipline, resilience, and teamwork forged in the armed forces are the exact qualities needed to master the heights of arboriculture.",
  'Recently featured on Fox44 News, our team shared how we are bridging the gap for McLennan County veterans. By providing hands-on training and a supportive, brotherhood-style environment, we help former service members trade their combat gear for climbing harnesses.',
];

const QUOTE =
  "It's about more than just trimming trees. It's about providing a sense of purpose and a career path that respects where these men and women have come from while looking toward their future.";

function Fox44Button({ className = '' }: { className?: string }) {
  return (
    <a
      href={POST.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#4c5230] text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:bg-white hover:text-[#4c5230] group ${className}`}
    >
      Read the Full Story on Fox44
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export function Blog({
  showHeader = true,
  variant = 'card',
}: {
  showHeader?: boolean;
  variant?: 'card' | 'article';
}) {
  return (
    <section
      id="blog"
      className={`relative bg-[#0a0a0a] border-t border-white/5 ${showHeader ? 'py-24' : 'pt-12 pb-24'}`}
    >
      {showHeader && <SectionWatermark text="Dispatches" align="top" />}
      <div className="container mx-auto px-6 relative z-10">
        {showHeader && (
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#4c5230]" />
              <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">Stay Up-To-Date</span>
              <div className="w-8 h-[1px] bg-[#4c5230]" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight"
            >
              Dispatches
            </motion.h2>
          </div>
        )}

        {variant === 'article' ? (
          /* ===== Editorial article (Blog page) ===== */
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-5 text-[11px] font-bold uppercase tracking-widest">
              <span className="bg-[#4c5230] text-white px-3 py-1.5">{POST.category}</span>
              <span className="text-white/40">{POST.date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight mb-8">
              {POST.title}
            </h2>

            <figure className="mb-10">
              <div className="relative mx-auto max-w-lg aspect-[3/2] overflow-hidden rounded-lg border border-white/10 bg-[#111]">
                <img src={POST.image} alt="Richard Maddox of Tex Vet Trees featured on Fox44 News" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <figcaption className="text-center text-white/40 text-xs uppercase tracking-widest mt-3">
                Featured on Fox 44 News
              </figcaption>
            </figure>

            <div className="space-y-6 text-white/70 leading-relaxed">
              {PARAGRAPHS.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <blockquote className="my-10 border-l-2 border-[#4c5230] pl-6 text-xl md:text-2xl font-medium italic leading-snug text-white/90">
              &ldquo;{QUOTE}&rdquo;
            </blockquote>

            <Fox44Button />
          </motion.article>
        ) : (
          /* ===== Compact two-column card (home) ===== */
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-[#111]">
              <img
                src={POST.image}
                alt="Richard Maddox of Tex Vet Trees featured on Fox44 News"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 bg-[#4c5230] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-white/10">
                {POST.category}
              </span>
            </div>

            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">{POST.date}</p>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-5">
                {POST.title}
              </h3>
              <div className="space-y-4 text-white/60 text-sm leading-relaxed">
                {PARAGRAPHS.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                <blockquote className="border-l-2 border-[#4c5230] pl-4 text-white/80 italic">&ldquo;{QUOTE}&rdquo;</blockquote>
              </div>
              <Fox44Button className="mt-7" />
            </div>
          </motion.article>
        )}
      </div>
    </section>
  );
}
