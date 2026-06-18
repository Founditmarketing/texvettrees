import { motion } from 'motion/react';
import { ShieldCheck, Wrench, TrendingUp, Users, Phone, Mail } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { WorkWithUsForm } from '../components/WorkWithUsForm';

const PERKS = [
  {
    Icon: ShieldCheck,
    title: 'Veteran-Friendly',
    desc: 'We hire and support veterans, reservists, and anyone ready to work with honor and integrity.',
  },
  {
    Icon: Wrench,
    title: 'Real Craftsmanship',
    desc: 'Meaningful, hands-on work alongside an experienced crew across Central & North Texas.',
  },
  {
    Icon: TrendingUp,
    title: 'Room to Grow',
    desc: 'We invest in our people with training and a clear path to take on more responsibility.',
  },
  {
    Icon: Users,
    title: 'Respect & Discipline',
    desc: 'A culture built on military values — show up, work hard, and look out for the team.',
  },
];

export function WorkWithUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Join The Team"
        title="Work With Us"
        subtitle="We're always looking for hard-working, dependable people who take pride in their craft. If you've got the discipline and drive to do the job right, we want to hear from you."
        watermark="Careers"
        image="/images/IMG_9016.jpg"
      />

      {/* Why work here + application form */}
      <section className="relative py-24 bg-[#111] border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: copy + perks */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-[1px] bg-[#4c5230]" />
                <span className="text-[#4c5230] font-bold tracking-[0.2em] uppercase text-[10px]">Why Tex Vet Trees</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-[1.05] mb-6">
                Build a Career With a Veteran-Led Crew
              </h2>
              <p className="text-white/60 leading-relaxed max-w-lg mb-10">
                Tex Vet Trees was founded on military values — discipline, respect, and doing the job right the first
                time. We bring that same standard to how we treat our team. If that sounds like you, apply today.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {PERKS.map(({ Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#4c5230]/40 bg-[#4c5230]/15 text-[#a9bd84]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-1.5">{title}</h3>
                      <p className="text-[13px] leading-relaxed text-white/55">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: real HubSpot recruitment form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <WorkWithUsForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <CTASection
        eyebrow="Got Questions?"
        heading="Talk to Us Before You Apply"
        text="Want to know what it's like to work at Tex Vet Trees? Give us a call or send an email — we're happy to talk."
        actions={
          <>
            <a
              href="tel:+12544475090"
              className="inline-flex items-center gap-2 bg-white text-[#4c5230] px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:bg-[#0a0a0a] hover:text-white"
            >
              <Phone className="w-4 h-4" />
              (254) 447-5090
            </a>
            <a
              href="mailto:texvettrees@gmail.com"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors hover:bg-white/10"
            >
              <Mail className="w-4 h-4" />
              texvettrees@gmail.com
            </a>
          </>
        }
      />
    </>
  );
}
