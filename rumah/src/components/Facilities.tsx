import { motion } from 'framer-motion';
import {
  Sofa, PanelsTopLeft, Car, BedDouble, ChefHat, Bath, Trees, Building2,
  type LucideIcon,
} from 'lucide-react';
import { property } from '../property';

const iconMap: Record<string, LucideIcon> = {
  Sofa, PanelsTopLeft, Car, BedDouble, ChefHat, Bath, Trees, Building2,
};

export function Facilities() {
  return (
    <section id="facilities" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Facilities</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold gold-text">Crafted for Comfort</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {property.facilities.map((f, i) => {
          const Icon = iconMap[f.icon] ?? Sofa;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-8 hover:border-gold/50 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                <Icon className="text-gold" size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
