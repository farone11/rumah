import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { property } from '../property';

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);
  const next = () => setLightbox((p) => (p === null ? 0 : (p + 1) % property.gallery.length));
  const prev = () => setLightbox((p) => (p === null ? 0 : (p - 1 + property.gallery.length) % property.gallery.length));

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Luxury Gallery</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold gold-text">A Vision of Refined Living</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[300px]">
        {property.gallery.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-2xl glass-card cursor-pointer group ${
              img.span ? 'md:row-span-2' : ''
            }`}
            onClick={() => setLightbox(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <p className="text-white/90 text-sm font-medium">{img.alt}</p>
              <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-gold" size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={close}
          >
            <button className="absolute top-6 right-6 text-gold hover:scale-110 transition-transform" onClick={close}>
              <X size={32} />
            </button>
            <button
              className="absolute left-6 text-gold hover:scale-110 transition-transform"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={40} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={property.gallery[lightbox].src}
              alt={property.gallery[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-6 text-gold hover:scale-110 transition-transform"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={40} />
            </button>
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {property.gallery[lightbox].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
