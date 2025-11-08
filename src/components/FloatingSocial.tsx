import { Phone, Instagram, Send } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function FloatingSocial() {
  return (
    <div className="fixed left-6 bottom-32 z-40 flex flex-col gap-3">
      <a
        href="tel:+989366423879"
        className="group relative w-14 h-14 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        aria-label="تماس تلفنی"
      >
        <Phone className="text-white" size={24} />
        <span className="absolute left-full mr-3 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          تماس با ما
        </span>
      </a>

      <a
        href="https://wa.me/989366423879"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        aria-label="واتساپ"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white" size="xl" />
        <span className="absolute left-full mr-3 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          واتساپ
        </span>
      </a>

      <a
        href="https://t.me/LAWYERx2025"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        aria-label="تلگرام"
      >
        <Send className="text-white" size={24} />
        <span className="absolute left-full mr-3 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          تلگرام
        </span>
      </a>

      <a
        href="https://www.instagram.com/vakil_nowruzi?igsh=MXExMGU5Z3FvMzhlcg=="
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        aria-label="اینستاگرام"
      >
        <Instagram className="text-white" size={24} />
        <span className="absolute left-full mr-3 bg-white text-gray-800 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          اینستاگرام
        </span>
      </a>
    </div>
  );
}
