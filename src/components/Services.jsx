import { Wrench, Settings, Droplets, Filter, RefreshCw, ShoppingBag, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICES } from '../data';

const ICONS = { Wrench, Settings, Droplets, Filter, RefreshCw, ShoppingBag };
const IMAGES = [
  '/images/service-gulung-dinamo.jpg',
  '/images/service-pasang-pompa.jpg',
  '/images/service-pengeboran.jpg',
  '/images/service-filter.jpg',
  '/images/service-refill-filter.jpg',
  '/images/service-penjualan.jpg',
];

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView();
  const Icon = ICONS[service.icon];
  const colDelay = (index % 3) * 200;

  return (
    <a
      ref={ref}
      href="#kontak"
      onClick={(e) => { e.preventDefault(); document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' }); }}
      className={`group flex flex-col bg-white rounded-[16px] md:rounded-[18px] border border-gray-100 shadow-sm p-4 cursor-pointer transition-all duration-[800ms] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      style={{ transitionDelay: `${colDelay}ms` }}
    >
      {/* Image */}
      <div className="relative">
        <div className="h-[200px] rounded-[10px] md:rounded-xl overflow-hidden bg-gray-100">
          <img src={IMAGES[index]} alt={service.title} className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]" loading="lazy" />
        </div>
        {/* Icon box */}
        <div className="absolute -bottom-4 left-3 w-[64px] h-[64px] md:w-[70px] md:h-[70px] bg-white rounded-[14px] md:rounded-[18px] border border-gray-100 shadow-sm flex items-center justify-center">
          <Icon className="w-7 h-7 text-[#0EA5E9]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 mt-11">
        <h3 className="text-xl font-semibold text-[#1a1a1a]">{service.title}</h3>
        <p className="text-sm text-gray-500 mt-2.5 leading-relaxed">{service.desc}</p>
        <div className="flex items-center justify-between mt-auto pt-6">
          <span className="text-[#0EA5E9] font-medium text-sm">Minta Penawaran</span>
          <span className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-white" />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section id="layanan" className="bg-white px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div ref={ref}>
          <span className={`text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase block transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            LAYANAN KAMI
          </span>
          <h2 className="mt-5 max-w-[592px]">
            {['Solusi', 'Pompa', 'Air'].map((w, i) => (
              <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-[40px] blur-[2px]'}`} style={{ transitionDelay: `${i * 50}ms` }}>{w}</span>
            ))}
            <br />
            {['Spesialis', 'untuk', 'Anda'].map((w, i) => (
              <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-[40px] blur-[2px]'}`} style={{ transitionDelay: `${(i + 3) * 50}ms` }}>{w}</span>
            ))}
          </h2>
          <p className={`mt-7 text-base text-gray-500 max-w-[528px] leading-relaxed transition-all duration-[800ms] delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            Dari perbaikan cepat hingga instalasi lengkap, teknisi ahli kami menghadirkan solusi pompa air berkualitas tinggi dan andal untuk rumah maupun tempat usaha Anda.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18px] lg:gap-5 mt-12 md:mt-16 lg:mt-20">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
