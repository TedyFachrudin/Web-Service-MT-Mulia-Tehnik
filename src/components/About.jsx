import { CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const CHECKS = [
  'Layanan Darurat Pompa Air Tersedia Setiap Hari Pukul 08:00 - 18:00',
  'Harga Terjangkau untuk Semua Layanan',
  'Tim Berlisensi & Berpengalaman',
  '2.500+ Pelanggan Puas',
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="tentang" className="bg-white px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div ref={ref} className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left — Image */}
        <div className={`flex-1 relative transition-all duration-[800ms] delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative">
            <img src="/images/about.jpg" alt="Teknisi Toko Mulia Tehnik" className="w-full h-full object-cover" loading="lazy" />
            {/* Badge: 10+ */}
            <div className="absolute -top-4 -right-4 md:top-4 md:right-4 w-24 h-24 rounded-full bg-[#0EA5E9] flex flex-col items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">10+</span>
              <span className="text-white/80 text-[10px] font-medium text-center leading-tight">Tahun<br/>Pengalaman</span>
            </div>
            {/* Badge: Licensed */}
            <div className="absolute -bottom-4 -left-4 md:bottom-4 md:left-4 flex items-center gap-2 px-4 py-3 bg-[#0EA5E9] rounded-xl shadow-lg">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white text-sm font-semibold">Berlisensi & Terpercaya</span>
            </div>
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1">
          <span className={`text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase block transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            TENTANG PERUSAHAAN
          </span>
          <h2 className="mt-5">
            {['Dibangun', 'Atas'].map((w, i) => (
              <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${i * 50}ms` }}>{w}</span>
            ))}
            <span className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: '100ms' }}>Kepercayaan.</span>
            <br />
            {['Didorong', 'oleh'].map((w, i) => (
              <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${(i + 3) * 50}ms` }}>{w}</span>
            ))}
            <span className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: '250ms' }}>Kualitas.</span>
          </h2>
          <p className={`mt-7 text-base text-gray-500 max-w-[500px] leading-relaxed transition-all duration-[800ms] delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            Selama lebih dari satu dekade, kami telah membantu rumah tangga dan usaha dengan layanan pompa air yang bisa diandalkan. Tim kami memadukan keahlian teknisi, harga transparan, dan respons cepat untuk menghadirkan solusi tahan lama di setiap pekerjaan.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {CHECKS.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                <span className="text-base font-medium text-[#1a1a1a]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
