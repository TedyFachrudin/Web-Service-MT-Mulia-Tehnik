import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { BUSINESS, waUrl } from '../data';

const NAV_LINKS = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Area Layanan', href: '#area-layanan' },
];

function RollingText({ text }) {
  const [hovering, setHovering] = useState(false);
  return (
    <span
      className="inline-flex"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {text.split('').map((char, i) => (
        <span key={i} className="inline-block overflow-hidden relative" style={{ height: '1.3em' }}>
          <span
            className="block transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              transform: hovering ? 'translateY(-100%)' : 'translateY(0)',
              transitionDelay: `${i * 40}ms`,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span
            className="block absolute top-full left-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
            style={{
              transform: hovering ? 'translateY(-100%)' : 'translateY(0)',
              transitionDelay: `${i * 40}ms`,
            }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > window.innerHeight * 0.6);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (href) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={
          scrolled
            ? {
                top: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'min(1000px, calc(100% - 40px))',
                background: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(8px)',
                borderRadius: 30,
                border: '3px solid #0254faff',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              }
            : {
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                background: 'transparent',
                borderRadius: 0,
                border: 'none',
                boxShadow: 'none',
              }
        }
      >
        <div
          className="flex items-center justify-between transition-all duration-500 mx-auto"
          style={{ padding: scrolled ? '0 32px' : undefined, height: scrolled ? 72 : undefined }}
        >
          <div className={`flex items-center justify-between w-full ${scrolled ? '' : 'px-6 md:px-20 h-[80px] md:h-[104px]'}`}>
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 shrink-0"
            >
              <Droplets className={`w-7 h-7 transition-colors duration-500 ${scrolled ? 'text-[#0EA5E9]' : 'text-white'}`} />
              <span className={`text-lg font-bold tracking-tight transition-colors duration-500 ${scrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>
                {BUSINESS.name}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-[50px]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-[18px] font-medium leading-[1.3] tracking-[-0.01em] transition-colors duration-500 hover:opacity-80 ${
                    scrolled ? 'text-[#1a1a1a]' : 'text-white'
                  }`}
                >
                  <span className="hidden motion-safe:inline"><RollingText text={link.label} /></span>
                  <span className="inline motion-safe:hidden">{link.label}</span>
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <a
              href={waUrl('Halo MT. Mulia Tehnik, saya ingin konsultasi.')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-6 py-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-[16px] font-semibold rounded-full transition-colors duration-[400ms]"
            >
              <span className="hidden motion-safe:inline"><RollingText text="Hubungi Kami" /></span>
              <span className="inline motion-safe:hidden">Hubungi Kami</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-[#1a1a1a]' : 'text-white'}`}
              aria-label="Buka menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col animate-in fade-in duration-200">
          <div className="flex items-center justify-between px-6 h-[80px] border-b border-gray-100">
            <a href="#hero" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>
              <Droplets className="w-7 h-7 text-[#0EA5E9]" />
              <span className="text-lg font-bold tracking-tight text-[#1a1a1a]">{BUSINESS.name}</span>
            </a>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-[#1a1a1a] hover:bg-gray-100 rounded-lg transition-colors" aria-label="Tutup menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-2xl font-semibold text-[#1a1a1a] hover:text-[#0EA5E9] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waUrl('Halo MT. Mulia Tehnik, saya ingin konsultasi.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-lg font-semibold rounded-full transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </>
  );
}
