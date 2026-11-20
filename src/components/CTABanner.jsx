import { Phone, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { waUrl, phoneUrl } from '../data';

export default function CTABanner({ onOpenModal }) {
  const [ref, inView] = useInView();

  return (
    <section className="px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div ref={ref} className={`max-w-[1440px] mx-auto bg-[#0EA5E9] rounded-[24px] py-14 md:py-20 px-8 md:px-16 text-center relative overflow-hidden transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-white leading-[1.2] max-w-[600px] mx-auto">
          Siap Mengatasi Masalah Pompa Air Anda?
        </h2>
        <p className="mt-5 text-white/80 text-base max-w-[550px] mx-auto leading-relaxed">
          Dari perbaikan darurat hingga instalasi baru, tim berpengalaman kami siap menghadirkan solusi pompa air yang cepat, andal, dan terpercaya. Hubungi kami hari ini untuk estimasi gratis.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button
            onClick={onOpenModal}
            className="px-8 py-4 bg-white hover:bg-gray-100 text-[#0EA5E9] font-semibold rounded-full transition-colors duration-300"
          >
            Konsultasi Gratis
          </button>
          <a
            href={phoneUrl()}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#0EA5E9] font-semibold rounded-full transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            Telepon Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
