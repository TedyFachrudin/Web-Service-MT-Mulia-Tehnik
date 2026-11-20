import { MapPin, ArrowRight, Droplets } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICE_AREAS } from '../data';

const MAP_PINS = [
  { label: 'Karang Satria', top: '55%', left: '30%' },
  { label: 'Bekasi Utara', top: '30%', left: '55%' },
  { label: 'Tambun Utara', top: '20%', left: '30%' },
  { label: 'Summarecon Bekasi', top: '25%', left: '75%' },
  { label: 'Wisma Asri', top: '65%', left: '70%' },
  { label: 'Teluk Pucung', top: '75%', left: '45%' },
  { label: 'Babelan', top: '45%', left: '80%' },
  { label: 'Bekasi Timur', top: '80%', left: '75%' },
];

export default function ServiceAreas() {
  const [ref, inView] = useInView();

  return (
    <section id="area-layanan" className="bg-white px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div ref={ref} className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left */}
        <div className={`flex-1 transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          <span className="text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase block">AREA LAYANAN</span>
          <h2 className="mt-5 max-w-[500px]">
            <span className="block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a]">Melayani Dengan Bangga</span>
            <span className="block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9]">Komunitas Anda</span>
          </h2>
          <p className="mt-7 text-base text-gray-500 max-w-[460px] leading-relaxed">
            Tim berpengalaman kami siap memberikan layanan pompa air yang andal di berbagai wilayah dan kota sekitar Bekasi.
          </p>

          {/* Area grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-10">
            {SERVICE_AREAS.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0EA5E9]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                </div>
                <span className="text-[#1a1a1a] font-medium text-base">{area}</span>
              </div>
            ))}
          </div>

          {/* CTA card */}
          <a
            href="#kontak"
            onClick={(e) => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="mt-10 flex items-center justify-between p-5 rounded-[18px] border border-gray-100 bg-[#f9fafb] hover:border-[#0EA5E9] transition-colors group max-w-[460px]"
          >
            <div>
              <p className="text-[#1a1a1a] font-semibold text-sm">Tidak yakin area Anda terjangkau?</p>
              <p className="text-gray-500 text-sm">Hubungi kami, kami siap membantu!</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>

        {/* Right — Map */}
        <div className={`flex-1 transition-all duration-[800ms] delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          <div className="relative w-full aspect-square max-w-[560px] mx-auto rounded-xl bg-gray-100 overflow-hidden">
            {/* Road lines */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300" />
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-300" />
              <div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-gray-200" />
              <div className="absolute top-0 bottom-0 left-[75%] w-[1px] bg-gray-200" />
              <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gray-200" />
              <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-gray-200" />
            </div>

            {/* Center logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#0EA5E9] flex items-center justify-center shadow-lg z-10">
              <Droplets className="w-8 h-8 text-white" />
            </div>

            {/* Pins */}
            {MAP_PINS.map((pin) => (
              <div key={pin.label} className="absolute flex flex-col items-center z-10" style={{ top: pin.top, left: pin.left, transform: 'translate(-50%, -100%)' }}>
                <MapPin className="w-6 h-6 text-[#0EA5E9] fill-[#0EA5E9]" />
                <span className="text-[10px] md:text-xs font-medium text-[#1a1a1a] mt-0.5 whitespace-nowrap bg-white/80 px-1 rounded">{pin.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
