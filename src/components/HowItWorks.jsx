import { CalendarCheck, ClipboardCheck, Wrench, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const STEPS = [
  { Icon: CalendarCheck, title: 'Hubungi Kami', desc: 'Hubungi kami via WhatsApp atau telepon untuk konsultasi dan jadwalkan kunjungan.' },
  { Icon: ClipboardCheck, title: 'Survei & Cek Lokasi', desc: 'Teknisi kami datang untuk mengecek kondisi dan memberikan estimasi biaya.' },
  { Icon: Wrench, title: 'Pengerjaan & Instalasi', desc: 'Kami selesaikan pekerjaan dengan material berkualitas dan teknik yang terbukti.' },
  { Icon: CheckCircle, title: 'Uji Coba & Garansi', desc: 'Sistem Anda berjalan sempurna, didukung garansi dari kami.' },
];

export default function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section id="cara-kerja" className="bg-[#f9fafb] px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div ref={ref} className="max-w-[1440px] mx-auto text-center">
        <span className={`text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase block transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          CARA KERJA
        </span>
        <h2 className="mt-5 mx-auto max-w-[700px]">
          {['Dari', 'Telepon', 'Anda', 'hingga'].map((w, i) => (
            <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${i * 50}ms` }}>{w}</span>
          ))}
          {['Masalah', 'Teratasi'].map((w, i) => (
            <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${(i + 4) * 50}ms` }}>{w}</span>
          ))}
        </h2>
        <p className={`mt-6 text-base text-gray-500 max-w-[600px] mx-auto transition-all duration-[800ms] delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          Dari panggilan pertama hingga penyelesaian akhir — proses kami dirancang mudah, transparan, dan tanpa ribet.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14 md:mt-16 lg:mt-20 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-[#0EA5E9]/30" />

          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
              style={{ transitionDelay: `${500 + i * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full border-2 border-[#0EA5E9] bg-white flex items-center justify-center relative z-10">
                <step.Icon className="w-7 h-7 text-[#0EA5E9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mt-5">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2 max-w-[220px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
