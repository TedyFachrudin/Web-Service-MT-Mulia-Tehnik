// Business data - MT. Mulia Tehnik
export const BUSINESS = {
  name: 'Toko Mulia Tehnik',
  phone: '082121539121',
  whatsapp: '6282121539121',
  waLink: 'https://wa.me/6282121539121',
  email: 'muliatehnik@email.com',
  address: 'Jl. Karang Satria No. 5, Bekasi Utara',
};

export const SERVICES = [
  {
    id: 'service-gulung',
    title: 'Service & Gulung Dinamo Pompa Air',
    desc: 'Kami menangani perbaikan dan gulung ulang dinamo pompa air segala merek dengan cepat, presisi, dan bergaransi untuk hasil terbaik.',
    icon: 'Wrench',
  },
  {
    id: 'pasang-pompa',
    title: 'Pasang Pompa Air Baru',
    desc: 'Pemasangan pompa air baru untuk sumur dangkal, semi jet, jetpump, submersible, dan booster oleh teknisi berpengalaman.',
    icon: 'Settings',
  },
  {
    id: 'pengeboran',
    title: 'Pengeboran Sumur Jetpump',
    desc: 'Layanan pengeboran sumur jetpump dan perdalam sumur dengan peralatan modern untuk suplai air bersih yang optimal.',
    icon: 'Droplets',
  },
  {
    id: 'filter',
    title: 'Pemasangan Filter Penjernih Air',
    desc: 'Instalasi filter air tabung FRP/PVC untuk air bersih, jernih, dan bebas bau di rumah maupun tempat usaha Anda.',
    icon: 'Filter',
  },
  {
    id: 'refill-filter',
    title: 'Ganti Isi / Refill Media Filter Air',
    desc: 'Penggantian media filter pasir silika, karbon aktif, dan mangan untuk menjaga kualitas air tetap prima sepanjang waktu.',
    icon: 'RefreshCw',
  },
  {
    id: 'penjualan',
    title: 'Penjualan Unit Pompa & Spare Part',
    desc: 'Tersedia unit pompa air segala merek, spare part asli, dan aksesoris lengkap dengan harga kompetitif dan garansi resmi.',
    icon: 'ShoppingBag',
  },
];

export const DINAMO_DATA = {
  'Sumur Dangkal': [
    'Dinamo National 125',
    'Dinamo National 200',
    'Shimizu PS 226',
  ],
  'Semi Jetpump': [
    'Dinamo Semi 100',
    'Dinamo Semi (6 cm)',
    'Dinamo Semi (7 cm)',
    'Dinamo Semi (8 cm)',
  ],
  'Jetpump & Daya Besar': [
    'Dinamo Jet Pump 255',
    'Dinamo Jet Pump 370',
    'Dinamo Jet Pump 500',
    'Golstar 250 / Shimizu 268 / Sanyo 250 / Wasser 250',
  ],
  'Multistage / Khusus': ['Grunfos 10 cm'],
};

export const SERVICE_AREAS = [
  'Karang Satria',
  'Bekasi Utara',
  'Tambun Utara',
  'Summarecon Bekasi',
  'Wisma Asri',
  'Teluk Pucung',
  'Babelan',
  'Bekasi Timur',
];

export const TESTIMONIALS = [
  {
    name: 'Budi Santoso',
    location: 'Karang Satria, Bekasi',
    text: '"Pompa air di rumah mati mendadak tengah malam, langsung hubungi Toko Mulia Tehnik. Teknisinya datang pagi-pagi, cepat tanggap dan langsung beres. Harga juga transparan, tidak ada biaya tambahan. Sangat recommended!"',
    rating: 5,
  },
  {
    name: 'Siti Nurhaliza',
    location: 'Summarecon Bekasi',
    text: '"Pasang filter air di rumah kami hasilnya luar biasa. Air yang tadinya keruh dan berbau sekarang jernih sempurna. Teknisinya ramah dan menjelaskan cara perawatan. Terima kasih Toko Mulia Tehnik!"',
    rating: 5,
  },
  {
    name: 'Hendra Wijaya',
    location: 'Tambun Utara',
    text: '"Sudah 2 kali pakai jasa Toko Mulia Tehnik untuk service pompa dan pasang jetpump baru. Pekerjaannya rapi, bergaransi, dan harganya masuk akal. Teknisinya juga sopan dan profesional."',
    rating: 5,
  },
  {
    name: 'Ratna Dewi',
    location: 'Wisma Asri, Bekasi',
    text: '"Proses pengeboran sumur jetpump di rumah kami berjalan lancar dan cepat. Airnya langsung keluar deras dan bersih. Toko Mulia Tehnik memang ahlinya! Pelayanan memuaskan dari awal sampai akhir."',
    rating: 5,
  },
  {
    name: 'Ahmad Fauzi',
    location: 'Teluk Pucung, Bekasi',
    text: '"Ganti isi filter air karbon aktif dan pasir silika, hasilnya langsung terasa. Air jadi lebih bersih dan tidak ada lagi endapan. Harga terjangkau dengan kualitas kerja yang sangat bagus."',
    rating: 5,
  },
];

export const FAQS = [
  {
    q: 'Berapa biaya pengecekan atau survei awal?',
    a: 'Untuk pengecekan dan survei awal di area Bekasi dan sekitarnya, kami tidak mengenakan biaya alias GRATIS. Teknisi kami akan datang, mengecek kondisi, dan memberikan estimasi biaya secara transparan sebelum pengerjaan dimulai.',
  },
  {
    q: 'Berapa lama proses pengeboran sumur jetpump?',
    a: 'Proses pengeboran sumur jetpump biasanya memakan waktu 1-3 hari kerja, tergantung kondisi tanah dan kedalaman yang dibutuhkan. Kami menggunakan peralatan modern untuk hasil yang optimal dan efisien.',
  },
  {
    q: 'Kapan sebaiknya mengganti media filter air?',
    a: 'Kami merekomendasikan penggantian media filter (pasir silika, karbon aktif, mangan) setiap 10-12 bulan untuk menjaga kualitas air tetap prima. Namun, jika air mulai keruh atau berbau, sebaiknya segera diganti.',
  },
  {
    q: 'Apakah ada garansi untuk setiap pekerjaan?',
    a: 'Ya, setiap pekerjaan kami bergaransi. Garansi mencakup hasil pengerjaan dan spare part yang digunakan. Durasi garansi bervariasi tergantung jenis layanan, dan akan kami informasikan secara detail sebelum pengerjaan.',
  },
  {
    q: 'Merek pompa air apa saja yang ditangani?',
    a: 'Kami menangani semua merek populer seperti Shimizu, Sanyo, Wasser, Grundfos, Panasonic, DAB, National, Golstar, dan merek lainnya. Spare part yang kami gunakan original dan bergaransi.',
  },
  {
    q: 'Apakah melayani area di luar Bekasi?',
    a: 'Area layanan utama kami mencakup Bekasi Utara, Bekasi Timur, Tambun Utara, Summarecon Bekasi, Karang Satria, dan sekitarnya. Untuk area di luar jangkauan, silakan hubungi kami untuk konfirmasi ketersediaan.',
  },
];

export function waUrl(message = '') {
  return `${BUSINESS.waLink}?text=${encodeURIComponent(message)}`;
}

export function phoneUrl() {
  return `tel:+${BUSINESS.whatsapp}`;
}
