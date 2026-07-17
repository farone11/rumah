import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { property } from '../property';

const waLink = `https://wa.me/${property.whatsappDefault}?text=${encodeURIComponent(property.whatsappMessage)}`;

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Contact</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold gold-text">Arrange a Private Viewing</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-8 md:p-12 luxury-shadow"
      >
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: WhatsApp */}
          <div className="flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gold/20 pb-10 md:pb-0">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mb-6 luxury-shadow"
            >
              <MessageCircle className="text-white" size={44} />
            </motion.div>
            <h3 className="font-display text-2xl font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-white/60 text-sm mb-6">Connect instantly with our team</p>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-background font-semibold uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-transform luxury-shadow"
            >
              Book Now
            </a>
          </div>

          {/* Right: Contact details */}
          <div className="space-y-6">
            <div>
              <p className="text-gold text-xs uppercase tracking-widest mb-4">Phone Numbers</p>
              <div className="space-y-3">
                <a
                  href={`tel:${property.phone1}`}
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors group"
                >
                  <Phone className="text-gold" size={18} />
                  <span className="text-lg">{property.phone1}</span>
                  <span className="text-xs text-gold/60 ml-auto">Primary</span>
                </a>
                <a
                  href={`tel:${property.phone2}`}
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <Phone className="text-gold" size={18} />
                  <span className="text-lg">{property.phone2}</span>
                </a>
              </div>
            </div>

            <div className="h-px bg-gold/20" />

            <div>
              <p className="text-gold text-xs uppercase tracking-widest mb-3">Email</p>
              <a href={`mailto:${property.email}`} className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors">
                <Mail className="text-gold" size={18} />
                <span>{property.email}</span>
              </a>
            </div>

            <div className="h-px bg-gold/20" />

            <div>
              <p className="text-gold text-xs uppercase tracking-widest mb-3">Address</p>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="text-gold mt-1 shrink-0" size={18} />
                <div>
                  {property.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
