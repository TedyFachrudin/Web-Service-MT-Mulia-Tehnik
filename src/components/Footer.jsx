import { Droplets, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS, SERVICES } from '../data';

const QUICK_LINKS = [
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Area Layanan', href: '#area-layanan' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Hubungi Kami', href: '#kontak' },
  { label: 'FAQ', href: '#faq' },
];

const LEGAL = ['Kebijakan Privasi', 'Syarat Layanan', 'Kebijakan Garansi'];

const scrollTo = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-[#0EA5E9] text-white">
      {/* Top ornament */}
      <div className="h-2 bg-[#0284C7]" />

      <div className="px-5 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <Droplets className="w-8 h-8 text-white" />
            <span className="text-xl font-bold">{BUSINESS.name}</span>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Quick Links */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-white/80">Quick Links</h4>
              <ul className="flex flex-col gap-2.5">
                {QUICK_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={scrollTo(l.href)} className="text-white/90 hover:text-white transition-colors text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-white/80">Layanan</h4>
              <ul className="flex flex-col gap-2.5">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <a href="#layanan" onClick={scrollTo('#layanan')} className="text-white/90 hover:text-white transition-colors text-sm">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-white/80">Legal</h4>
              <ul className="flex flex-col gap-2.5">
                {LEGAL.map((l) => (
                  <li key={l}><span className="text-white/90 text-sm cursor-pointer hover:text-white transition-colors">{l}</span></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm uppercase tracking-wider font-semibold mb-4 text-white/80">Kontak</h4>
              <div className="flex flex-col gap-4">
                <a href={`tel:+${BUSINESS.whatsapp}`} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                  <div><p className="text-xs text-white/70">Nomor Telepon</p><p className="text-sm font-medium">{BUSINESS.phone}</p></div>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <div><p className="text-xs text-white/70">Alamat</p><p className="text-sm font-medium">{BUSINESS.address}</p></div>
                </div>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                  <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                  <div><p className="text-xs text-white/70">Email</p><p className="text-sm font-medium">{BUSINESS.email}</p></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/80">© 2026 {BUSINESS.name}. Hak cipta dilindungi.</p>
        </div>
      </div>

      {/* Big brand text */}
      <div className="w-full overflow-hidden">
        <p
          className="font-semibold tracking-tight whitespace-nowrap select-none text-center w-full"
          style={{
            fontSize: 'clamp(48px, 11vw, 220px)',
            lineHeight: 1,
            backgroundImage: 'linear-gradient(to bottom, white 0%, white 33%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.05) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
        >
          {BUSINESS.name.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
