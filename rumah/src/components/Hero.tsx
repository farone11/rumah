import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Star } from 'lucide-react';
import { property } from '../property';

const waLink = `https://wa.me/${property.whatsappDefault}?text=${encodeURIComponent(property.whatsappMessage)}`;

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/RumahDijual002.webp"
          alt="Setia Residence"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
      </div>

      {/* Gold particle glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.35, 0.15, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gold-soft/10 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-1 mb-6"
        >
          {[...Array(5)].map((_, k) => (
            <Star key={k} className="text-gold fill-gold" size={14} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gold text-sm md:text-base uppercase tracking-[0.3em] mb-6"
        >
          {property.subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 gold-text"
        >
          {property.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6"
        >
          <MapPin className="text-gold" size={16} />
          <span>{property.location}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
        >
          {property.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-background font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-transform hover:scale-105 luxury-shadow"
          >
            <span className="relative z-10">Book Now</span>
            <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
          </a>
          <a
            href="#gallery"
            className="px-10 py-4 border border-gold/40 text-gold font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-gold/10 transition-all duration-300"
          >
            Lihat Galeri
          </a>
        </motion.div>

        {/* Quick stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-14 inline-flex flex-wrap items-center justify-center gap-6 glass-card rounded-2xl px-8 py-4 text-sm"
        >
          <div className="text-center">
            <p className="gold-text font-bold text-lg">668 m²</p>
            <p className="text-white/50 text-xs uppercase tracking-wider">Luas Tanah</p>
          </div>
          <div className="w-px h-8 bg-gold/20" />
          <div className="text-center">
            <p className="gold-text font-bold text-lg">±500 m²</p>
            <p className="text-white/50 text-xs uppercase tracking-wider">Luas Bangunan</p>
          </div>
          <div className="w-px h-8 bg-gold/20" />
          <div className="text-center">
            <p className="gold-text font-bold text-lg">SHM</p>
            <p className="text-white/50 text-xs uppercase tracking-wider">Sertifikat</p>
          </div>
          <div className="w-px h-8 bg-gold/20" />
          <div className="text-center">
            <p className="gold-text font-bold text-lg">Aktif</p>
            <p className="text-white/50 text-xs uppercase tracking-wider">PBB</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gold/60 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="text-gold/60" size={20} />
      </motion.div>
    </section>
  );
}
