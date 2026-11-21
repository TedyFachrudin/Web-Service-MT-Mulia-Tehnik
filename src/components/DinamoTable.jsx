import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { DINAMO_DATA, waUrl } from '../data';

const TABS = ['Semua', ...Object.keys(DINAMO_DATA)];

// Flatten all dinamo items with their category
// ponytail: placeholder images — replace img with real photo URLs later
const ALL_ITEMS = Object.entries(DINAMO_DATA).flatMap(([cat, items]) =>
  items.map((name) => ({ name, cat, img: null }))
);

export default function DinamoTable() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  const scrollRef = useRef(null);
  const drag = useRef({ on: false, x: 0, sl: 0 });
  const [paused, setPaused] = useState(false);

  const filtered = active === 0 ? ALL_ITEMS : ALL_ITEMS.filter((d) => d.cat === TABS[active]);

  // Auto-scroll
  useEffect(() => {
    const id = setInterval(() => {
      const el = scrollRef.current;
      if (!el || paused) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0;
    }, 20);
    return () => clearInterval(id);
  }, [paused]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.querySelector('[data-slide]')?.offsetWidth || 300;
    el.scrollBy({ left: dir * (w + 20), behavior: 'smooth' });
  };

  const onDown = useCallback((x) => {
    const el = scrollRef.current;
    drag.current = { on: true, x, sl: el.scrollLeft };
    setPaused(true);
  }, []);
  const onMove = useCallback((x) => {
    if (!drag.current.on) return;
    scrollRef.current.scrollLeft = drag.current.sl - (x - drag.current.x);
  }, []);
  const onUp = useCallback(() => { drag.current.on = false; setPaused(false); }, []);

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

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => { setActive(i); if (scrollRef.current) scrollRef.current.scrollLeft = 0; }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? 'bg-[#0EA5E9] text-white'
                  : 'border border-gray-200 text-gray-600 hover:border-[#0EA5E9] hover:text-[#0EA5E9]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative mt-8">
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
            className="flex gap-5 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => { drag.current.on = false; setPaused(false); }}
            onMouseDown={(e) => { e.preventDefault(); onDown(e.clientX); }}
            onMouseMove={(e) => onMove(e.clientX)}
            onMouseUp={onUp}
            onTouchStart={(e) => onDown(e.touches[0].clientX)}
            onTouchMove={(e) => onMove(e.touches[0].clientX)}
            onTouchEnd={onUp}
          >
            {filtered.map((item, i) => (
              <div
                key={`${item.cat}-${item.name}`}
                data-slide
                className="shrink-0 w-[260px] md:w-[300px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                  {item.img
                    ? <img src={item.img} alt={item.name} className="w-full h-full object-cover pointer-events-none" />
                    : <span className="text-gray-300 text-sm select-none">Foto {item.name}</span>
                  }
                </div>
                <div className="p-4 flex flex-col items-center gap-3">
                  <span className="text-sm font-semibold text-[#1a1a1a]">{item.name}</span>
                  <span className="text-xs text-gray-400">{item.cat}</span>
                  <a
                    href={waUrl(`Halo MT. Mulia Tehnik, saya ingin tanya biaya service/gulung ${item.name}. Terima kasih.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0EA5E9] text-[#0EA5E9] text-sm font-medium hover:bg-[#0EA5E9] hover:text-white transition-colors duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Tanya Biaya
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
