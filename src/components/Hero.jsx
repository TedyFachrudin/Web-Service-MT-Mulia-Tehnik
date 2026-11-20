import { useState, useEffect } from 'react';
import { Phone, Star, User } from 'lucide-react';
import { BUSINESS, TESTIMONIALS, waUrl, phoneUrl } from '../data';

const WORDS = 'Solusi Pompa Air & Sumur Bor Terpercaya di Bekasi'.split(' ');

export default function Hero({ onOpenModal }) {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll); };
  }, []);

  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const show = loaded || reduced;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')", transform: `translateY(${scrollY * 0.25}px)`, willChange: 'transform' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-20 pt-32 md:pt-40 pb-16 md:pb-20">
        {/* Badge */}
        <div
          className="inline-flex items-center px-4 py-2 rounded-full border border-white/30 mb-5"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          <span className="text-white text-sm font-medium">Tersedia 24/7 Setiap Hari</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-[786px] mb-7">
          {WORDS.map((word, i) => (
            <span
              key={i}
              className="inline-block text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-semibold leading-[1.1] tracking-tight mr-[0.3em]"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? 'translateY(0)' : 'translateY(40px)',
                filter: show ? 'blur(0)' : 'blur(2px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out',
                transitionDelay: reduced ? '0ms' : `${200 + i * 50}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Description */}
        <p
          className="max-w-[590px] text-white/80 text-base md:text-lg leading-relaxed mb-10"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(30px)',
            filter: show ? 'blur(0)' : 'blur(2px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out',
            transitionDelay: reduced ? '0ms' : '600ms',
          }}
        >
          Dari perbaikan darurat hingga instalasi lengkap, teknisi berpengalaman kami menghadirkan pengerjaan berkualitas dengan harga transparan dan layanan cepat tanggap.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-4 mb-16 md:mb-[132px]"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: reduced ? '0ms' : '800ms',
          }}
        >
          <button
            onClick={onOpenModal}
            className="px-8 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-semibold rounded-full transition-colors duration-300 text-base"
          >
            Konsultasi Gratis
          </button>
          <a
            href={phoneUrl()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#1a1a1a] font-semibold rounded-full transition-colors duration-300 text-base"
          >
            <Phone className="w-5 h-5" />
            Telepon Sekarang
          </a>
        </div>

        {/* Reviews */}
        <div
          className="flex items-center gap-4"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            transitionDelay: reduced ? '0ms' : '1100ms',
          }}
        >
          <div className="flex -space-x-3">
            {TESTIMONIALS.slice(0, 4).map((t, i) => (
              t.avatar
                ? <img key={i} src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                : <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#0EA5E9] text-[#0EA5E9]" />
              ))}
            </div>
            <span className="text-white text-sm font-medium">4.9+ Ulasan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
