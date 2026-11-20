import { ShieldCheck, Clock, Star, Headphones, User } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { TESTIMONIALS } from '../data';

const CARDS = [
  { title: 'Teknisi Berlisensi & Berpengalaman', desc: 'Teknisi terlatih dan berpengalaman yang menghadirkan pengerjaan aman, andal, dan memuaskan di setiap kunjungan layanan.', Icon: ShieldCheck, orange: true },
  { title: 'Layanan Cepat & Andal', desc: 'Kami datang tepat waktu, menyelesaikan setiap pekerjaan secara efisien, dan memberikan solusi pompa air yang tahan lama.', Icon: Clock, orange: false },
  { title: 'Pengerjaan Berkualitas', desc: 'Kami menggunakan material premium dan teknik terbukti untuk menghadirkan solusi pompa air yang awet dan andal untuk tahun-tahun mendatang.', Icon: Star, orange: false },
  { title: 'Dukungan 24/7', desc: 'Tim kami siap siang dan malam untuk menangani masalah pompa air mendesak dengan respons cepat dan layanan darurat yang bisa diandalkan.', Icon: Headphones, orange: false },
];

function TrustBadge() {
  return (
    <div className="rounded-[18px] border border-gray-100 bg-[#f9fafb] py-[22px] px-5 flex items-center gap-4">
      <div className="flex -space-x-3">
        {TESTIMONIALS.slice(0, 3).map((t, i) => (
          t.avatar
            ? <img key={i} src={t.avatar} alt={t.name} className="w-[46px] h-[46px] rounded-full border-2 border-white object-cover" />
            : <div key={i} className="w-[46px] h-[46px] rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-400" />
              </div>
        ))}
      </div>
      <div>
        <p className="text-[#1a1a1a] font-semibold text-base">Dipercaya 2500+</p>
        <p className="text-gray-500 text-sm">Rumah Tangga & Usaha</p>
      </div>
    </div>
  );
}

function Card({ card, className = '' }) {
  const { title, desc, Icon, orange } = card;
  return (
    <div className={`rounded-[18px] border ${orange ? 'bg-[#0EA5E9] border-transparent' : 'bg-[#f9fafb] border-gray-100'} py-8 px-7 flex flex-col ${className}`}>
      <div className={`w-14 h-14 rounded-[18px] flex items-center justify-center ${orange ? 'bg-white' : 'bg-[#0EA5E9]'}`}>
        <Icon className={`w-6 h-6 ${orange ? 'text-[#0EA5E9]' : 'text-white'}`} />
      </div>
      <h3 className={`text-2xl font-semibold leading-[1.1] mt-6 ${orange ? 'text-white' : 'text-[#1a1a1a]'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed mt-4 ${orange ? 'text-white/80' : 'text-gray-500'}`}>{desc}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const [hRef, hInView] = useInView();
  const [cRef, cInView] = useInView();

  return (
    <section id="mengapa" className="bg-white px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div ref={hRef}>
          <span className={`text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase block transition-all duration-[800ms] ${hInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            MENGAPA MEMILIH KAMI
          </span>
          <h2 className="mt-5 max-w-[658px]">
            {['Mengapa', 'Pelanggan', 'Mempercayai'].map((w, i) => (
              <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mr-[0.3em] transition-all duration-[800ms] ${hInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${i * 50}ms` }}>{w}</span>
            ))}
            <br />
            {['Tim', 'Ahli', 'Kami'].map((w, i) => (
              <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9] mr-[0.3em] transition-all duration-[800ms] ${hInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${(i + 3) * 50}ms` }}>{w}</span>
            ))}
          </h2>
          <p className={`mt-7 text-base text-gray-500 max-w-[569px] leading-relaxed transition-all duration-[800ms] delay-300 ${hInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            Kami memadukan keahlian teknisi, material berkualitas, dan pelayanan pelanggan yang luar biasa untuk menghadirkan layanan pompa air yang bisa Anda percaya.
          </p>
        </div>

        {/* 3-Column Layout (desktop) */}
        <div ref={cRef} className="mt-12 md:mt-16 lg:mt-20">
          {/* Desktop: 3 columns */}
          <div className="hidden lg:grid grid-cols-[1fr_1.2fr_1fr] gap-5">
            {/* Left */}
            <div className={`flex flex-col gap-5 transition-all duration-[800ms] ${cInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`} style={{ transitionDelay: '300ms' }}>
              <Card card={CARDS[0]} className="flex-1" />
              <Card card={CARDS[1]} className="flex-1" />
            </div>
            {/* Center */}
            <div className={`flex flex-col gap-3.5 transition-all duration-[800ms] ${cInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex-1 rounded-[18px] border border-gray-100 overflow-hidden min-h-[400px]">
                <img src="/images/why-choose-us.jpg" alt="Teknisi MT. Mulia Tehnik" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <TrustBadge />
            </div>
            {/* Right */}
            <div className={`flex flex-col gap-5 transition-all duration-[800ms] ${cInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`} style={{ transitionDelay: '700ms' }}>
              <Card card={CARDS[2]} className="flex-1" />
              <Card card={CARDS[3]} className="flex-1" />
            </div>
          </div>

          {/* Tablet / Mobile */}
          <div className="lg:hidden flex flex-col gap-[18px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
              {CARDS.map((c, i) => <Card key={i} card={c} />)}
            </div>
            <div className="rounded-[18px] border border-gray-100 overflow-hidden aspect-[4/3]">
              <img src="/images/why-choose-us.jpg" alt="Teknisi MT. Mulia Tehnik" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <TrustBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
