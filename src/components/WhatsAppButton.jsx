import { MessageCircle } from 'lucide-react';
import { waUrl } from '../data';

export default function WhatsAppButton() {
  return (
    <a
      href={waUrl('Halo MT. Mulia Tehnik, saya ingin bertanya tentang layanan Anda.')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:scale-110 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
