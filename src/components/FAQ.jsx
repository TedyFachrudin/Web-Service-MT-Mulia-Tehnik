import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { FAQS } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView();
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-white px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
      <div ref={ref} className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left — Images (desktop only) */}
        <div
          className={`hidden lg:flex flex-col gap-5 w-[360px] shrink-0 transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
        >
          <div className={`rounded-xl overflow-hidden aspect-[4/3] ${inView ? 'animate-float' : ''}`}>
            <img src="/images/faq-1.jpg" alt="Peralatan pompa air" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className={`rounded-xl overflow-hidden aspect-[4/3] ${inView ? 'animate-float-delayed' : ''}`}>
            <img src="/images/faq-2.jpg" alt="Filter air bersih" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        {/* Right — FAQ */}
        <div className="flex-1">
          <h2 className={`transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <span className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a]">Pertanyaan yang </span>
            <span className="text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.1] tracking-tight text-[#0EA5E9]">Sering Ditanyakan</span>
          </h2>

          <div className="mt-8 flex flex-col">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] rounded"
                  aria-expanded={openIndex === i}
                >
                  <span className="text-lg font-medium text-[#1a1a1a] pr-4">{faq.q}</span>
                  {openIndex === i
                    ? <Minus className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                    : <Plus className="w-5 h-5 text-[#0EA5E9] shrink-0" />
                  }
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? 'max-h-[300px] opacity-100 pb-5' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-base text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatUpDelayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: floatUp 5s ease-in-out infinite; }
        .animate-float-delayed { animation: floatUpDelayed 5s ease-in-out infinite 1.5s; }
      `}</style>
    </section>
  );
}
