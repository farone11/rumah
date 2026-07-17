export interface GalleryImage {
  src: string;
  alt: string;
  span?: boolean;
}

export interface Facility {
  icon: string;
  title: string;
  description: string;
}

export interface InvestmentStage {
  step: string;
  title: string;
  description: string;
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface Property {
  title: string;
  subtitle: string;
  description: string;
  location: string;
  addressLines: string[];
  landArea: string;
  buildingArea: string;
  certificate: string;
  phone1: string;
  phone2: string;
  whatsappDefault: string;
  email: string;
  features: string[];
  gallery: GalleryImage[];
  facilities: Facility[];
  advantages: Advantage[];
  investment: InvestmentStage[];
  nearbyPlaces: string[];
  coordinates: string;
  mapEmbed: string;
  mapLink: string;
  whatsappMessage: string;
}

export const property: Property = {
  title: 'SETIA RESIDENCE',
  subtitle: 'Exclusive Family Residence & Premium Boarding House',
  description:
    'Hunian luas, nyaman, dan strategis yang cocok untuk tempat tinggal keluarga maupun dikembangkan menjadi bisnis kos eksklusif dengan potensi keuntungan tinggi. Rumah idaman & peluang investasi terbaik di Medan Barat.',
  location: 'Jalan Setiabaru No. 8/33, Sei Agul, Medan Barat, Medan',
  addressLines: [
    'Jalan Setiabaru No. 8/33',
    'Sei Agul, Medan Barat',
    'Medan, Indonesia',
  ],
  landArea: '668 m²',
  buildingArea: '±500 m²',
  certificate: 'SHM (Sertifikat Hak Milik)',
  phone1: '+6281317443992',
  phone2: '+6281297958098',
  whatsappDefault: '6281317443992',
  email: 'contact@setiaresidence.id',
  features: [
    'Strategic Location',
    'Premium Residence',
    'Investment Opportunity',
    'Certificate SHM',
  ],
  gallery: [
    { src: '/images/RumahDijual002.png', alt: 'Tampak Depan — Setia Residence', span: true },
    { src: '/images/RumahDijual001.png', alt: 'Denah Lokasi Tampak Atas' },
    { src: '/images/Rumah_Dijual.png', alt: 'Eksterior Setia Residence' },
    { src: '/images/Rumah_Dijual_02.png', alt: 'Area Depan & Teras', span: false },
  ],
  facilities: [
    { icon: 'Sofa', title: 'Ruang Tamu Sangat Luas', description: 'Ruang tamu lega dan nyaman, dirancang untuk kebersamaan keluarga yang hangat.' },
    { icon: 'PanelsTopLeft', title: 'Teras Depan Lebar', description: 'Teras depan yang luas memberi nuansa elegan dan sirkulasi udara yang segar.' },
    { icon: 'Car', title: 'Carport Luas', description: 'Area carport yang memadai untuk menampung beberapa kendaraan dengan aman.' },
    { icon: 'BedDouble', title: 'Banyak Kamar Tidur', description: 'Tersedia banyak kamar tidur dengan ventilasi alami dan cahaya yang optimal.' },
    { icon: 'ChefHat', title: 'Dapur', description: 'Dapur fungsional dan nyaman untuk kebutuhan memasak sehari-hari.' },
    { icon: 'Bath', title: 'Banyak Kamar Mandi', description: 'Kamar mandi yang terawat dengan instalasi yang baik di setiap ruang.' },
    { icon: 'Trees', title: 'Halaman & Taman', description: 'Halaman hijau yang asri memberikan ketenangan di tengah kota.' },
    { icon: 'Building2', title: 'Potensi Bisnis Kos', description: 'Konfigurasi ideal untuk dikembangkan menjadi bisnis kos premium eksklusif.' },
  ],
  advantages: [
    { icon: 'MapPin', title: 'Lokasi Premium & Strategis', description: 'Akses jalan lebar, dekat pusat kota Medan, ring road, rumah sakit, universitas, dan mall.' },
    { icon: 'Gem', title: 'Rumah Luas & Nyaman', description: 'Bangunan ±500 m² di atas lahan 668 m² dalam kondisi baik dan terawat.' },
    { icon: 'TrendingUp', title: 'Potensi Kos Eksklusif', description: 'Permintaan sewa tinggi dari eksekutif, mahasiswa, dan tenaga medis di kawasan ini.' },
    { icon: 'ShieldCheck', title: 'Legalitas Lengkap & Aman', description: 'Sertifikat Hak Milik (SHM), PBB aktif, dokumen lengkap, siap proses transaksi.' },
  ],
  investment: [
    { step: '01', title: 'Executive Boarding House', description: 'Dikembangkan sebagai kos eksekutif premium untuk profesional dan eksekutif bisnis di Medan.' },
    { step: '02', title: 'Premium Kost', description: 'Kos premium dengan fasilitas lengkap menargetkan mahasiswa dan tenaga kesehatan.' },
    { step: '03', title: 'Guest House', description: 'Dioperasikan sebagai guest house eksklusif untuk keluarga dan tamu bisnis.' },
    { step: '04', title: 'Homestay', description: 'Manfaatkan pertumbuhan wisata Medan dengan konsep homestay yang autentik.' },
    { step: '05', title: 'Co-Living Space', description: 'Konsep co-living modern yang menarik bagi profesional muda dan digital nomad.' },
    { step: '06', title: 'Investasi Jangka Panjang', description: 'Nilai properti di kawasan Medan Barat terus naik — aset aman untuk masa depan.' },
  ],
  nearbyPlaces: ['Pusat Kota Medan', 'Jalan Gatot Subroto', 'Ring Road', 'Rumah Sakit', 'Mall', 'Perkantoran', 'Universitas', 'Kawasan Kuliner'],
  coordinates: '3.570052, 98.676872',
  mapEmbed:
    'https://www.google.com/maps?q=3.570052,98.676872&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=3.570052,98.676872',
  whatsappMessage:
    'Hello, I would like to schedule a property viewing for Setia Residence.',
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Investment', href: '#investment' },
  { label: 'Location', href: '#location' },
  { label: 'Legality', href: '#legality' },
  { label: 'Contact', href: '#contact' },
];
