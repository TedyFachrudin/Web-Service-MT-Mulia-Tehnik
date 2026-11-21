import { useState } from 'react';
import { Phone, Mail, MapPin, X, ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { BUSINESS, SERVICES, waUrl } from '../data';

const INITIAL = { firstName: '', lastName: '', phone: '', email: '', service: '', message: '' };

function ContactForm({ onClose }) {
  const [form, setForm] = useState(INITIAL);
  const [sending, setSending] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.phone) return;
    setSending(true);
    const msg = [
      `Halo Toko Mulia Tehnik,`,
      `Nama: ${form.firstName} ${form.lastName}`.trim(),
      `Telepon: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.service && `Layanan: ${form.service}`,
      form.message && `Pesan: ${form.message}`,
    ].filter(Boolean).join('\n');
    setTimeout(() => {
      window.open(waUrl(msg), '_blank');
      setSending(false);
      setForm(INITIAL);
      onClose?.();
    }, 500);
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a]">
          Minta Estimasi <span className="text-[#0EA5E9]">Gratis</span>
        </h3>
        <p className="text-sm text-gray-500 mt-2">Kami biasanya merespons dalam 30 menit pada jam kerja</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input placeholder="Nama Depan *" value={form.firstName} onChange={set('firstName')} required className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9] outline-none transition text-base" />
        <input placeholder="Nama Belakang" value={form.lastName} onChange={set('lastName')} className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9] outline-none transition text-base" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex">
          <span className="px-3 py-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500 flex items-center">+62</span>
          <input type="tel" placeholder="Nomor Telepon *" value={form.phone} onChange={set('phone')} required className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9] outline-none transition text-base" />
        </div>
        <input type="email" placeholder="Alamat Email" value={form.email} onChange={set('email')} className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9] outline-none transition text-base" />
      </div>
      <div className="relative">
        <select value={form.service} onChange={set('service')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9] outline-none transition text-base appearance-none bg-white">
          <option value="">Pilih Layanan...</option>
          {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
      <textarea placeholder="Tulis pesan Anda di sini" value={form.message} onChange={set('message')} rows={4} className="px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0EA5E9] focus:border-[#0EA5E9] outline-none transition text-base resize-none" />
      <button type="submit" disabled={sending} className="w-full py-4 bg-[#0EA5E9] hover:bg-[#0284C7] disabled:opacity-60 text-white font-semibold rounded-xl transition-colors duration-300 text-base">
        {sending ? 'Mengirim...' : 'Konsultasi Gratis'}
      </button>
    </form>
  );
}

export default function Contact({ isModal, onClose }) {
  const [ref, inView] = useInView();

  return (
    <>
      {/* Page Section */}
      <section id="kontak" className="bg-white px-5 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20">
        <div ref={ref} className="max-w-[1440px] mx-auto">
          <div className={`text-center mb-12 md:mb-16 transition-all duration-[800ms] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <span className="text-[#0EA5E9] text-sm font-semibold tracking-wider uppercase">HUBUNGI KAMI</span>
            <h2 className="mt-5 text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a]">Hubungi Kami Hari Ini</h2>
            <p className="mt-5 text-base text-gray-500 max-w-[600px] mx-auto">
              Butuh perbaikan atau punya pertanyaan seputar pompa air? Hubungi tim kami untuk layanan cepat, andal, dan estimasi gratis tanpa kewajiban.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row rounded-[24px] border border-gray-100 shadow-sm overflow-hidden">
            {/* Left — Info */}
            <div className="lg:w-[400px] bg-gray-800 text-white p-8 flex flex-col">
              <div className="w-full h-[200px] rounded-xl overflow-hidden mb-8">
                <img src="/images/contact-panel.jpg" alt="Toko Mulia Tehnik" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>
              <div className="flex flex-col gap-5">
                <a href={`tel:+${BUSINESS.whatsapp}`} className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-white" /></div>
                  <div><p className="text-sm text-gray-400">Nomor Telepon</p><p className="font-medium">{BUSINESS.phone}</p></div>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-white" /></div>
                  <div><p className="text-sm text-gray-400">Email</p><p className="font-medium">{BUSINESS.email}</p></div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-white" /></div>
                  <div><p className="text-sm text-gray-400">Alamat</p><p className="font-medium">{BUSINESS.address}</p></div>
                </div>
              </div>
            </div>
            {/* Right — Form */}
            <div className="flex-1 p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" onClick={onClose}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white rounded-[24px] p-8 md:p-10 max-w-[600px] w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Tutup">
              <X className="w-6 h-6 text-gray-500" />
            </button>
            <ContactForm onClose={onClose} />
          </div>
        </div>
      )}
    </>
  );
}
