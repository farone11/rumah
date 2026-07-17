import { motion } from 'framer-motion';
import { Maximize, Building, MapPin, BedDouble, ShieldCheck, FileCheck } from 'lucide-react';
import { property } from '../property';

const cards = [
  { icon: Maximize, label: 'Luas Tanah', value: property.landArea },
  { icon: Building, label: 'Luas Bangunan', value: property.buildingArea },
  { icon: BedDouble, label: 'Kamar Tidur', value: 'Banyak Kamar' },
  { icon: MapPin, label: 'Lokasi Strategis', value: 'Medan Barat' },
  { icon: ShieldCheck, label: 'Sertifikat', value: 'SHM' },
  { icon: FileCheck, label: 'PBB', value: 'Aktif' },
];

export function Highlights() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Spesifikasi Properti</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold gold-text">Hunian Berkelas, Data Faktual</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-8 hover:border-gold/50 transition-all duration-500 group hover:scale-[1.02]"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <card.icon className="text-gold" size={26} />
            </div>
            <p className="text-white/50 text-sm uppercase tracking-widest mb-2">{card.label}</p>
            <p className="font-display text-2xl font-semibold text-white">{card.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Hero image detail card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 glass-card rounded-3xl overflow-hidden luxury-shadow"
      >
        <img
          src="/images/RumahDijual001.webp"
          alt="Denah Lokasi Tampak Atas — Setia Residence"
          loading="lazy"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
