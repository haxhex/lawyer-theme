import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // به‌روز کردن وضعیت اسکرول هنگام تعویض صفحه و اسکرول
    const update = () => setIsScrolled(window.scrollY > 5);
    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, [currentPage]);

  // فقط بوکینگ در ابتدای صفحه پس‌زمینهٔ تیره می‌گیرد
  const darkAtTopPages = ['booking'];

  // پس‌زمینهٔ نوبار
  const navbarBg =
    isScrolled
      ? 'bg-white shadow-lg'
      : darkAtTopPages.includes(currentPage)
        ? 'bg-[#2d2d2d]'
        : 'bg-transparent';

  // رنگ متن منو
  const textColor =
    isScrolled
      ? 'text-gray-700'
      : 'text-white';

  const menuItems = [
    { id: 'home', label: 'خانه' },
    { id: 'about', label: 'درباره من' },
    { id: 'services', label: 'خدمات' },
    { id: 'articles', label: 'مقالات' },
    { id: 'blog', label: 'پادکست' },
    { id: 'contact', label: 'تماس با من' },
  ];

  const isHomeTransparent = currentPage === 'home' && !isScrolled;

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${navbarBg}`}>
      {/* اُورلی گرادیانی فقط برای Home وقتی اسکرول نشده */}
      {isHomeTransparent && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 to-transparent" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => onNavigate('booking')}
            className="inline-flex items-center whitespace-nowrap leading-none bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-6 py-2.5 rounded-md font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            رزرو مشاوره
          </button>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#c9a961] ${
                  currentPage === item.id
                    ? 'text-[#c9a961] border-b-2 border-[#c9a961]'
                    : textColor
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 focus:outline-none"
            >
              <div className="text-right">
                <div className="text-sm font-bold text-[#c9a961]">لیلا نوروزی</div>
                <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>
                  وکیل پایه یک دادگستری
                </div>
              </div>
              <img src="/logo.png" alt="Logo" className="w-16 h-14 rounded-full shadow-lg" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${textColor}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-right px-4 py-2 rounded-md transition-all ${
                  currentPage === item.id
                    ? 'bg-[#c9a961] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
