import { Scale, Phone, Mail, MapPin, Instagram, Send, Linkedin, Clock, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    'خانه',
    'درباره من',
    'خدمات',
    'مقالات',
    'تماس با من',
  ];

  const services = [
    'ثبت شرکت',
    'مشاوره حقوقی',
    'قراردادهای تجاری',
    'دعاوی تجاری',
    'مالکیت معنوی',
    'ادغام و تملک',
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-16 h-14 rounded-full shadow-xl transform hover:scale-110 transition-transform duration-300" />
              <div>
                <h3 className="text-xl font-bold text-[#c9a961]">لیلا نوروزی</h3>
                <p className="text-sm text-gray-400">وکیل پایه یک دادگستری</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-7">
              ارائه خدمات حقوقی تخصصی در زمینه حقوق تجارت، ثبت شرکت، قراردادهای بازرگانی و دعاوی تجاری با بیش از 10 سال تجربه حرفه‌ای
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#c9a961] rounded-full flex items-center justify-center hover:bg-[#d4b56e] transform hover:scale-110 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#c9a961] rounded-full flex items-center justify-center hover:bg-[#d4b56e] transform hover:scale-110 transition-all duration-300"
              >
                <Send size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#c9a961] rounded-full flex items-center justify-center hover:bg-[#d4b56e] transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#c9a961] border-r-4 border-[#c9a961] pr-3">
              دسترسی سریع
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#c9a961] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#c9a961] rounded-full group-hover:w-3 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#c9a961] border-r-4 border-[#c9a961] pr-3">
              خدمات ما
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#c9a961] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#c9a961] rounded-full group-hover:w-3 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#c9a961] border-r-4 border-[#c9a961] pr-3">
              اطلاعات تماس
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300 group">
                <div className="w-10 h-10 bg-[#2d2d2d] border border-[#c9a961] rounded-lg flex items-center justify-center group-hover:bg-[#c9a961] transition-all duration-300">
                  <Phone size={18} className="text-[#c9a961] group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-1">تلفن تماس</div>
                  <a href="tel:+989366423879" className="hover:text-[#c9a961] transition-colors">
                    09366423879
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300 group">
                <div className="w-10 h-10 bg-[#2d2d2d] border border-[#c9a961] rounded-lg flex items-center justify-center group-hover:bg-[#c9a961] transition-all duration-300">
                  <Mail size={18} className="text-[#c9a961] group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-1">ایمیل</div>
                  <a href="mailto:leilanowrozilawyer@gmail.com" className="hover:text-[#c9a961] transition-colors">
                    leilanowrozilawyer@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300 group">
                <div className="w-10 h-10 bg-[#2d2d2d] border border-[#c9a961] rounded-lg flex items-center justify-center group-hover:bg-[#c9a961] transition-all duration-300">
                  <Clock size={18} className="text-[#c9a961] group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-1">ساعات کاری</div>
                  <div>شنبه تا چهارشنبه: 9-18</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300 group">
                <div className="w-10 h-10 bg-[#2d2d2d] border border-[#c9a961] rounded-lg flex items-center justify-center group-hover:bg-[#c9a961] transition-all duration-300">
                  <MapPin size={18} className="text-[#c9a961] group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-1">آدرس دفتر</div>
                  <div>تهران، اقدسیه، جنب مترو اقدسیه، نبش لنگری، ساختمان بانک ملی ، مجتمع اقدسیه، طبقه 6، واحد 4</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} تمامی حقوق این وب‌سایت متعلق به لیلا نوروزی می‌باشد.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#c9a961] transition-colors">
              قوانین و مقررات
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#c9a961] transition-colors">
              حریم خصوصی
            </a>
          </div>
        </div>
      </div>

      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-40"
        aria-label="بازگشت به بالا"
      >
        <ChevronUp className="text-white" size={24} />
      </button> */}
    </footer>
  );
}
