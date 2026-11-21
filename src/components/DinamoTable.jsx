import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { DINAMO_DATA, waUrl } from '../data';

const TABS = Object.keys(DINAMO_DATA);

// ponytail: placeholder images — replace with real photos later
const CAROUSEL_ITEMS = TABS.map((tab) => ({
  label: tab,
  img: null, // akan diisi URL gambar nanti
}));

export default function DinamoTable() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.querySelector('[data-slide]')?.offsetWidth || 300;
    el.scrollBy({ left: dir * (w + 20), behavior: 'smooth' });
  };

  return (
    <section id="dinamo" className="bg-white px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div ref={ref} className={`max-w-[1000px] mx-auto transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
        <span className="text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase block text-center">SPESIALIS GULUNG DINAMO</span>
        <h2 className="mt-5 text-center text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a]">
          Jenis Dinamo yang Kami Tangani
        </h2>
        <p className="mt-5 text-center text-base text-gray-500 max-w-[560px] mx-auto">
          Kami menangani berbagai tipe dinamo pompa air dengan keahlian khusus dan spare part lengkap untuk setiap kategori.
        </p>

        {/* Carousel */}
        <div className="relative mt-10">
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {CAROUSEL_ITEMS.map((item, i) => (
              <div
                key={i}
                data-slide
                className="snap-center shrink-0 w-[260px] md:w-[300px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
                onClick={() => setActive(i)}
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  {item.img
                    ? <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                    : <span className="text-gray-300 text-sm">Foto {item.label}</span>
                  }
                </div>
                <div className="p-4 text-center">
                  <span className={`text-sm font-semibold ${active === i ? 'text-[#0EA5E9]' : 'text-[#1a1a1a]'}`}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail list for active tab */}
        <div className="mt-8 border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {DINAMO_DATA[TABS[active]].map((item, i) => (
            <div key={item} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 ${i > 0 ? 'border-t border-gray-200' : ''}`}>
              <span className="text-[#1a1a1a] font-medium text-base">{item}</span>
              <a
                href={waUrl(`Halo MT. Mulia Tehnik, saya ingin tanya biaya service/gulung ${item}. Terima kasih.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0EA5E9] text-[#0EA5E9] text-sm font-medium hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Tanya Biaya
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
