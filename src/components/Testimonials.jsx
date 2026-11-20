import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));
  const t = TESTIMONIALS[active];

  return (
    <section id="testimoni" className="bg-[#f9fafb] px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div ref={ref} className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className={`text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase block transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            TESTIMONI
          </span>
          <h2 className="mt-5">
            {['Dengarkan', 'Kata'].map((w, i) => (
              <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${i * 50}ms` }}>{w}</span>
            ))}
            {['Pelanggan', 'Kami'].map((w, i) => (
              <span key={i} className={`inline-block text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9] mr-[0.3em] transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[40px]'}`} style={{ transitionDelay: `${(i + 2) * 50}ms` }}>{w}</span>
            ))}
          </h2>
          <p className={`mt-6 text-base text-gray-500 max-w-[600px] mx-auto transition-all duration-[800ms] delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            Lihat apa kata pelanggan kami tentang layanan yang andal, pengerjaan berkualitas, dan komitmen kami untuk menyelesaikan setiap pekerjaan dengan baik.
          </p>
        </div>

        {/* Slider */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row gap-8 items-center rounded-[24px] border border-gray-100 bg-white p-6 md:p-10 shadow-sm">
          {/* Photo */}
          <div className="w-full md:w-[320px] lg:w-[380px] shrink-0 aspect-[3/4] rounded-xl bg-gradient-to-br from-gray-200 to-gray-300" />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#0EA5E9] text-[#0EA5E9]" />
              ))}
              <span className="text-[#1a1a1a] font-semibold ml-2">4.9/5</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Dipercaya 2.500+ Pelanggan</p>

            <blockquote className="mt-6 text-lg md:text-xl font-medium text-[#1a1a1a] leading-relaxed transition-opacity duration-300">
              {t.text}
            </blockquote>

            <p className="mt-6 text-base font-semibold text-[#1a1a1a]">{t.name}</p>
            <p className="text-sm text-gray-500">{t.location}</p>

            {/* Avatar selectors */}
            <div className="flex gap-3 mt-6">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-12 h-12 rounded-full transition-all duration-300 overflow-hidden ${
                    active === i ? 'ring-2 ring-[#0EA5E9] ring-offset-2' : 'opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Lihat testimoni ${t.name}`}
                >
                  {t.avatar
                    ? <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    : <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                  }
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors" aria-label="Sebelumnya">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors" aria-label="Berikutnya">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
