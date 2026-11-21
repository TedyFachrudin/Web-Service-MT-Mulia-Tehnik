import { Phone, ArrowRight, Bell, Clock } from 'lucide-react';
import { BUSINESS, phoneUrl } from '../data';
import { useInView } from '../hooks/useInView';

export default function EmergencyBanner() {
  const [ref, inView] = useInView();

  return (
    <section className="px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div ref={ref} className={`max-w-[1440px] mx-auto bg-[#0EA5E9] rounded-[24px] overflow-hidden transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
        <div className="flex flex-col md:flex-row items-center px-8 md:px-14 py-12 md:py-14 gap-8">
          {/* Text */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-full mb-5">
              <Bell className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">DARURAT</span>
            </div>
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-white leading-[1.1]">
              Butuh Bantuan Darurat<br />Pompa Air?
            </h2>
            <div className="flex items-center gap-2 mt-4 text-white/90">
              <Clock className="w-5 h-5" />
              <span className="text-base font-medium">Tersedia Setiap Hari Pukul 08:00 - 18:00</span>
            </div>
            <a
              href={phoneUrl()}
              className="inline-flex items-center gap-3 mt-8 px-7 py-3.5 bg-[#1a1a1a] hover:bg-black text-white font-semibold rounded-full transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              TELEPON SEKARANG
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          {/* Image placeholder */}
          <div className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full border-4 border-white/20 shrink-0 hidden md:block overflow-hidden">
            <img src="/images/emergency-banner.jpg" alt="Layanan darurat pompa air" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
