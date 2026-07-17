import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { property } from '../property';

export function Location() {
  return (
    <section id="location" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Location</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold gold-text">At the Heart of Medan</h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 glass-card rounded-3xl overflow-hidden luxury-shadow"
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src={property.mapEmbed}
              className="w-full h-full"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(0.9)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Setia Residence Location"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-gold" size={20} />
              <h3 className="font-display text-lg font-semibold text-white">Address</h3>
            </div>
            {property.addressLines.map((line) => (
              <p key={line} className="text-white/60 text-sm leading-relaxed">{line}</p>
            ))}
          </div>

          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Compass className="text-gold" size={20} />
              <h3 className="font-display text-lg font-semibold text-white">Coordinates</h3>
            </div>
            <p className="text-white/60 text-sm font-mono">{property.coordinates}</p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold text-white mb-4">Nearby Places</h3>
            <ul className="space-y-2">
              {property.nearbyPlaces.map((place) => (
                <li key={place} className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {place}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={property.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-gold to-gold-dark text-background font-semibold uppercase tracking-widest text-sm rounded-full hover:scale-[1.02] transition-transform luxury-shadow"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  );
}
