import { motion } from 'framer-motion';
import { ShieldCheck, FileText, FileCheck, Handshake } from 'lucide-react';
import { property } from '../property';

const items = [
  { icon: ShieldCheck, title: 'Sertifikat Hak Milik (SHM)', description: 'Sertifikat tanah paling kuat di Indonesia, menjamin hak kepemilikan penuh dan abadi atas properti.' },
  { icon: FileText, title: 'PBB Aktif', description: 'Pajak Bumi dan Bangunan selalu dibayar tepat waktu, tidak ada tunggakan atau kewajiban tertunggak.' },
  { icon: FileCheck, title: 'Dokumen Lengkap', description: 'Seluruh dokumen legalitas telah disusun dan diverifikasi, siap untuk proses transaksi yang aman.' },
  { icon: Handshake, title: 'Siap Transaksi', description: 'Kepemilikan jelas dan bersih, memungkinkan proses balik nama dan pengalihan hak yang cepat dan transparan.' },
];

export function Legality() {
  return (
    <section id="legality" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Legalitas</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold gold-text">Aman &amp; Terjamin</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-8 hover:border-gold/50 transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 group-hover:scale-110 transition-all">
              <item.icon className="text-gold" size={26} />
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
