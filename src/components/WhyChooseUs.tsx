import { motion } from 'motion/react';
import { Target, Users, ShieldAlert, Crosshair } from 'lucide-react';
import { SectionWatermark } from './SectionWatermark';

const FEATURES = [
  {
    title: 'Military Discipline',
    description: 'We approach every job with rigorous planning, execution, and attention to detail. No corners cut.',
    icon: <Target className="w-8 h-8 text-white" />
  },
  {
    title: 'Precision',
    description: 'From technical tree removal to exact hardscape measurements, accuracy is our standard.',
    icon: <Crosshair className="w-8 h-8 text-white" />
  },
  {
    title: 'Community Focus',
    description: 'We exist to serve. Protecting and beautifying properties in Central and North Texas.',
    icon: <Users className="w-8 h-8 text-white" />
  },
  {
    title: 'Safety First',
    description: 'Fully insured operations prioritizing the safety of your family, property, and our crew.',
    icon: <ShieldAlert className="w-8 h-8 text-white" />
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 bg-[#111] border-y border-white/5 text-white">
      <SectionWatermark text="Discipline" />
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-3xl mb-16">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-4"
            >
              <div className="w-12 h-[1px] bg-[#4c5230]" />
              <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">
                The Tex Vet Difference
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80"
            >
              We operate differently than standard contractors. Driven by values forged in the U.S. Army.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {FEATURES.map((feature, index) => (
            <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.15 }}
               className="group"
            >
              <div className="mb-6 w-16 h-16 rounded-full bg-black/50 border border-white/5 flex items-center justify-center p-4 group-hover:scale-110 group-hover:bg-[#4c5230] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
