import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { DINAMO_DATA, waUrl } from '../data';

const TABS = Object.keys(DINAMO_DATA);

export default function DinamoTable() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
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

        {/* Table */}
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
