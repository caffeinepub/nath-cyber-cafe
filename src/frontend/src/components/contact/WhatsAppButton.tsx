import { MessageCircle } from 'lucide-react';
import { cafeInfo } from '../../config/cafeInfo';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/91${cafeInfo.whatsapp}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-6 py-3 text-base font-medium text-white hover:bg-[#20BA5A] transition-all shadow-lg hover:shadow-xl"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Chat on WhatsApp
    </a>
  );
}
