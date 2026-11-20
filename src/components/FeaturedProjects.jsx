import { useState, useRef, useEffect, useCallback } from 'react';
import { useInView } from '../hooks/useInView';

const PROJECTS = [
  { img: '/images/project-jetpump.jpg', label: 'Pemasangan Jetpump' },
  { img: '/images/project-filter-frp.jpg', label: 'Filter Air Tabung FRP' },
  { img: '/images/project-pengeboran.jpg', label: 'Pengeboran Sumur' },
  { img: '/images/project-service-pompa.jpg', label: 'Service Pompa Air' },
  { img: '/images/project-booster.jpg', label: 'Instalasi Booster' },
  { img: '/images/project-gulung-dinamo.jpg', label: 'Gulung Dinamo' },
  { img: '/images/project-refill-filter.jpg', label: 'Refill Media Filter' },
  { img: '/images/project-submersible.jpg', label: 'Submersible Pump' },
];

const DOUBLE = [...PROJECTS, ...PROJECTS];

export default function FeaturedProjects() {
  const [hRef, hInView] = useInView();
  const [gRef, gInView] = useInView();
  const trackRef = useRef(null);
  const drag = useRef({ on: false, x: 0, sl: 0 });
  const [paused, setPaused] = useState(false);

  // Auto-scroll
  useEffect(() => {
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el || paused) return;
      el.scrollLeft += 1;
      // Loop: when scrolled past the first set, jump back
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    }, 20);
    return () => clearInterval(id);
  }, [paused]);

  const onDown = useCallback((x) => {
    const el = trackRef.current;
    drag.current = { on: true, x, sl: el.scrollLeft };
    setPaused(true);
  }, []);

  const onMove = useCallback((x) => {
    if (!drag.current.on) return;
    const el = trackRef.current;
    el.scrollLeft = drag.current.sl - (x - drag.current.x);
  }, []);

  const onUp = useCallback(() => {
    drag.current.on = false;
    setPaused(false);
  }, []);

  return (
    <section id="proyek" className="bg-white py-12 md:py-16 lg:py-20">
      <div className="px-5 md:px-12 lg:px-20 max-w-[1440px] mx-auto" ref={hRef}>
        <span className={`text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase block transition-all duration-[800ms] ${hInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          PROYEK UNGGULAN
        </span>
        <h2 className="mt-5 max-w-[600px]">
          {['Lihat', 'Proyek'].map((w, i) => (
            <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mr-[0.3em] transition-all duration-[800ms] ${hInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${i * 50}ms` }}>{w}</span>
          ))}
          <span className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9] mr-[0.3em] transition-all duration-[800ms] ${hInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: '100ms' }}>Terbaru Kami</span>
        </h2>
        <p className={`mt-7 text-base text-gray-500 max-w-[500px] transition-all duration-[800ms] delay-300 ${hInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          Lihat hasil pemasangan dan perbaikan yang telah kami selesaikan — dari perbaikan harian hingga instalasi lengkap.
        </p>
      </div>

      {/* Marquee with drag */}
      <div
        ref={gRef}
        className={`mt-12 md:mt-16 transition-all duration-[800ms] ${gInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
        style={{ transitionDelay: '300ms' }}
      >
        <div
          ref={trackRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { drag.current.on = false; setPaused(false); }}
          onMouseDown={(e) => { e.preventDefault(); onDown(e.clientX); }}
          onMouseMove={(e) => onMove(e.clientX)}
          onMouseUp={onUp}
          onTouchStart={(e) => onDown(e.touches[0].clientX)}
          onTouchMove={(e) => onMove(e.touches[0].clientX)}
          onTouchEnd={onUp}
        >
          <div className="flex gap-5 w-max px-5">
            {DOUBLE.map((p, i) => (
              <div
                key={i}
                className="shrink-0 w-[280px] md:w-[380px] aspect-[4/3] rounded-xl overflow-hidden relative"
              >
                <img src={p.img} alt={p.label} className="w-full h-full object-cover pointer-events-none" loading="lazy" />
                <span className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-black/30 px-3 py-1.5 rounded-lg">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
