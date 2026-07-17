import { motion } from 'framer-motion';
import { property } from '../property';

export function Investment() {
  return (
    <section id="investment" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Investment Opportunity</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold gold-text">A Future of Value</h2>
        <p className="text-white/60 max-w-2xl mx-auto mt-6 text-balance">
          Setia Residence presents a rare convergence of lifestyle and yield — a property engineered to appreciate and to perform.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 md:-translate-x-1/2" />

        <div className="space-y-12">
          {property.investment.map((stage, i) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-center gap-8 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold -translate-x-1/2 ring-4 ring-background z-10 animate-glow-pulse" />

              {/* Spacer for md */}
              <div className="hidden md:block flex-1" />

              <div className="flex-1 ml-12 md:ml-0 md:px-12">
                <div className="glass-card rounded-2xl p-8 hover:border-gold/50 transition-all duration-500">
                  <span className="font-display text-5xl font-bold gold-text/30 block mb-2">{stage.step}</span>
                  <h3 className="font-display text-2xl font-semibold text-white mb-3">{stage.title}</h3>
                  <p className="text-white/60 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
