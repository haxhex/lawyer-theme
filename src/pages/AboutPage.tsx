import { Award, GraduationCap, Briefcase, Target, Heart, Shield } from 'lucide-react';

export default function AboutPage() {
  const timeline = [
    { year: '1390', title: 'اخذ مدرک وکالت', description: 'دریافت پروانه وکالت پایه یک از کانون وکلای دادگستری' },
    { year: '1392', title: 'تاسیس دفتر', description: 'افتتاح دفتر وکالت تخصصی در زمینه حقوق تجارت' },
    { year: '1395', title: 'توسعه خدمات', description: 'گسترش خدمات به حوزه مالکیت معنوی و قراردادهای بین‌المللی' },
    { year: '1398', title: 'جوایز ملی', description: 'دریافت جایزه بهترین وکیل حقوق تجارت از کانون وکلا' },
    { year: '1400', title: 'تیم حرفه‌ای', description: 'تشکیل تیم 10 نفره متخصصان حقوقی' },
    { year: '1402', title: 'توسعه دیجیتال', description: 'راه‌اندازی پلتفرم آنلاین مشاوره حقوقی' },
  ];

  const education = [
    {
      degree: 'دکترای حقوق خصوصی',
      university: 'دانشگاه تهران',
      year: '1389',
      description: 'تخصص در حقوق تجارت و شرکت‌ها',
    },
    {
      degree: 'کارشناسی ارشد حقوق بین‌الملل',
      university: 'دانشگاه شهید بهشتی',
      year: '1385',
      description: 'تمرکز بر قراردادهای بین‌المللی',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'صداقت و شفافیت',
      description: 'ارائه اطلاعات دقیق و شفاف به موکلین در تمام مراحل',
    },
    {
      icon: Heart,
      title: 'تعهد و مسئولیت',
      description: 'پیگیری دقیق و مسئولانه پرونده‌ها تا رسیدن به نتیجه',
    },
    {
      icon: Target,
      title: 'تخصص و دقت',
      description: 'بهره‌گیری از دانش تخصصی و تجربه گسترده',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-[#c9a961]">
                درباره من
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                من لیلا نوروزی، وکیل پایه یک دادگستری با بیش از 15 سال تجربه در زمینه حقوق تجارت و شرکت‌ها هستم.
                هدف من ارائه خدمات حقوقی با کیفیت و حمایت از حقوق موکلین است.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                در طول این سال‌ها، موفق به پیگیری و حل بیش از 1000 پرونده در حوزه‌های مختلف حقوق تجارت، ثبت شرکت،
                قراردادهای بازرگانی، دعاوی تجاری و مالکیت معنوی شده‌ام. تخصص و تجربه‌ام در کنار تعهد به موکلین，
                رمز موفقیت من در این حرفه است.
              </p>
            </div>

            <div className="relative animate-fade-in-down">
              <div className="absolute inset-0 bg-[#c9a961] blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#c9a961] to-[#d4b56e] p-6 rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="لیلا نوروزی"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              تحصیلات و <span className="text-[#c9a961]">مدارک</span>
            </h2>
            <p className="text-gray-600 text-lg">پشتوانه علمی و تخصصی</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-sm text-[#c9a961] font-semibold mb-1">{edu.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <div className="text-gray-600 mb-2">{edu.university}</div>
                    <p className="text-gray-500 text-sm">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <Award className="text-[#c9a961]" size={32} />
              <h3 className="text-2xl font-bold text-gray-800">مدارک و گواهینامه‌ها</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#c9a961] rounded-full"></div>
                پروانه وکالت پایه یک از کانون وکلای دادگستری تهران
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#c9a961] rounded-full"></div>
                عضویت در کانون وکلای بین‌المللی (IBA)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#c9a961] rounded-full"></div>
                گواهینامه تخصصی داوری تجاری بین‌المللی
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#c9a961] rounded-full"></div>
                گواهینامه مدیریت پروژه حقوقی (PMP Legal)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              مسیر <span className="text-[#c9a961]">حرفه‌ای</span>
            </h2>
            <p className="text-gray-600 text-lg">سابقه و دستاوردها</p>
          </div>

          <div className="relative">
            <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c9a961] to-[#d4b56e]"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div
                      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                        index % 2 === 0 ? 'mr-8' : 'ml-8'
                      }`}
                    >
                      <div className="text-2xl font-bold text-[#c9a961] mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute right-1/2 transform translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <Briefcase className="text-white" size={16} />
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ارزش‌ها و <span className="text-[#c9a961]">اصول</span>
            </h2>
            <p className="text-gray-600 text-lg">اصول اخلاقی و حرفه‌ای ما</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center mx-auto mb-6 transform hover:rotate-12 transition-transform duration-300">
                  <value.icon className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            آماده همکاری با شما هستم
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            اگر به دنبال یک وکیل متخصص و با تجربه در حقوق تجارت هستید، از همکاری با شما خوشحال خواهم شد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+982112345678"
              className="bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-8 py-4 rounded-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              تماس فوری: 09366423879
            </a>
            <a
              href="mailto:leilanowrozilawyer@gmail.com"
              className="border-2 border-[#c9a961] text-[#c9a961] px-8 py-4 rounded-lg font-bold hover:bg-[#c9a961] hover:text-white transition-all duration-300"
            >
              ارسال ایمیل
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
