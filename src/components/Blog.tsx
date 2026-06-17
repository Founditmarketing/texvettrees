import { motion } from 'motion/react';
import { SectionWatermark } from './SectionWatermark';

const POSTS = [
  {
    title: 'Seasonal Tree Care Guide for Texas Heat',
    date: 'June 12, 2026',
    category: 'Tree Care',
    image: '/images/treeservice.jpg'
  },
  {
    title: 'Recent Hardscaping Project in North Texas',
    date: 'May 28, 2026',
    category: 'Project Spotlight',
    image: '/images/backyard-transformation.jpg'
  },
  {
    title: 'Why Turf is the Smart Choice for Drought Season',
    date: 'April 15, 2026',
    category: 'Landscaping',
    image: '/images/IMG_9016.jpg'
  }
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 bg-[#0a0a0a] border-t border-white/5">
      <SectionWatermark text="Dispatches" align="top" />
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-4 mb-4"
            >
              <div className="w-8 h-[1px] bg-[#4c5230]" />
              <span className="text-[#4c5230] tracking-[0.2em] font-bold text-xs uppercase">
                Stay Up-To-Date
              </span>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 h-64 bg-[#111] border border-white/5">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                />
                
                {/* floating category tag */}
                <div className="absolute top-4 left-4 bg-[#4c5230] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 border border-white/10">
                   {post.category}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white uppercase tracking-wide leading-tight mb-3 group-hover:text-[#4c5230] transition-colors">
                {post.title}
              </h3>
              <p className="text-white/60 font-medium text-sm">
                {post.date}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
