import { useInView, useCountUp } from '../hooks/useInView';

const STATS = [
  { end: 10, suffix: '+', label: 'Tahun Pengalaman', decimal: false },
  { end: 2.5, suffix: 'rb+', label: 'Proyek Selesai', decimal: true },
  { end: 98, suffix: '%', label: 'Kepuasan Pelanggan', decimal: false },
  { end: 10, suffix: '/7', label: 'Layanan Darurat', decimal: false },
];

function StatItem({ end, suffix, label, decimal, inView }) {
  const value = useCountUp(end, 1000, 0, inView);
  const display = decimal ? value.toFixed(1) : Math.round(value);
  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-[44px] md:text-[50px] lg:text-[64px] font-medium leading-[1.1] tracking-tight text-white tabular-nums">
        {display}{suffix}
      </span>
      <span className="text-[13px] md:text-[15px] lg:text-lg font-medium text-white mt-2">{label}</span>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section className="bg-white px-6 md:px-20 pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-[1440px] mx-auto">
        <div ref={ref} className="bg-[#0EA5E9] rounded-[18px] py-8 md:py-10 lg:py-11 px-4 md:px-8">
          {/* Desktop & Tablet: 4 cols */}
          <div className="hidden md:grid grid-cols-4">
            {STATS.map((s, i) => (
              <div key={i} className={`px-4 ${i > 0 ? 'border-l border-white/30' : ''}`}>
                <StatItem {...s} inView={inView} />
              </div>
            ))}
          </div>
          {/* Mobile: 2x2 */}
          <div className="grid grid-cols-2 gap-y-6 md:hidden">
            {STATS.map((s, i) => (
              <div key={i} className={`px-2 ${i % 2 === 1 ? 'border-l border-white/30' : ''}`}>
                <StatItem {...s} inView={inView} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
