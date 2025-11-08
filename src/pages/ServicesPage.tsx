import { useState } from 'react';
import { Building2, Scale, FileText, Award, Briefcase, ArrowLeft, CheckCircle, Gavel, Home, Users, ShieldCheck } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  price_info: string;
  display_order: number;
  created_at: string;
}

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [services] = useState<Service[]>([
    {
      id: '1',
      title: 'وکالت در دعاوی حقوقی و کیفری',
      description: 'پذیرش و پیگیری کلیه دعاوی حقوقی و کیفری با تجربه و تخصص بالا تا رسیدن به نتیجه مطلوب در محاکم',
      icon: 'Scale',
      category: 'دعاوی',
      price_info: 'توافقی',
      display_order: 1,
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'دعاوی خانواده',
      description: 'وکالت در دعاوی طلاق، حضانت، مهریه، نفقه، اجرت المثل و تمامی امور مربوط به دعاوی خانواده',
      icon: 'Home',
      category: 'دعاوی',
      price_info: 'توافقی',
      display_order: 2,
      created_at: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'دعاوی مالی و مطالبات',
      description: 'پیگیری دعاوی مالی مانند دعاوی سفته و چک، مطالبات شرکت‌ها و اشخاص حقوقی در محاکم',
      icon: 'FileText',
      category: 'دعاوی',
      price_info: 'توافقی',
      display_order: 3,
      created_at: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'امور ثبتی و ملکی',
      description: 'تخصص در دعاوی ملکی، مالیاتی، بیمه، دیوان عدالت اداری و تنظیم قراردادهای داخلی و بین‌المللی',
      icon: 'Building2',
      category: 'ثبتی',
      price_info: 'توافقی',
      display_order: 4,
      created_at: new Date().toISOString(),
    },
    {
      id: '5',
      title: 'قراردادهای تجاری',
      description: 'تنظیم و بررسی قراردادهای تجاری، نفت و گاز، تعهدات، دعاوی اربی و ریالی و تجارت بین‌الملل',
      icon: 'Briefcase',
      category: 'قراردادها',
      price_info: 'توافقی',
      display_order: 5,
      created_at: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'مشاوره حقوقی تخصصی',
      description: 'ارائه مشاوره حقوقی تخصصی در کلیه زمینه‌ها، تجارت بین‌الملل و امور گمرکی با رویکرد عملی',
      icon: 'Users',
      category: 'مشاوره',
      price_info: 'از 2 میلیون تومان',
      display_order: 6,
      created_at: new Date().toISOString(),
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('همه');

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Building2,
      Scale,
      FileText,
      Award,
      Briefcase,
      Gavel,
      Home,
      Users,
      ShieldCheck,
    };
    return icons[iconName] || Scale;
  };

  const categories = ['همه', 'دعاوی', 'ثبتی', 'قراردادها', 'مشاوره'];

  const filteredServices =
    selectedCategory === 'همه'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const processSteps = [
    {
      step: '1',
      title: 'تماس اولیه',
      description: 'تماس با دفتر و توضیح مختصر موضوع',
    },
    {
      step: '2',
      title: 'بررسی اولیه',
      description: 'بررسی رایگان و تعیین راهکار',
    },
    {
      step: '3',
      title: 'قرارداد',
      description: 'امضای قرارداد و شروع همکاری',
    },
    {
      step: '4',
      title: 'پیگیری',
      description: 'انجام کار و گزارش‌دهی مستمر',
    },
  ];

  const features = [
    'مشاوره تخصصی رایگان',
    'قیمت‌گذاری شفاف و منصفانه',
    'پیگیری دقیق و منظم',
    'گزارش‌دهی مرحله به مرحله',
    'پشتیبانی در ساعات کاری',
    'تضمین کیفیت خدمات',
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#c9a961] mb-6">
            خدمات حقوقی
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ارائه خدمات جامع حقوقی در زمینه‌های دعاوی حقوقی، کیفری، خانوادگی و مشاوره تخصصی
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-300 overflow-hidden border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <IconComponent className="text-white transform group-hover:scale-110 transition-transform duration-300" size={80} />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                      <span className="text-xs bg-[#c9a961] text-white px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => onNavigate('booking')}
                        className="w-full bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white py-3 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        درخواست مشاوره
                        <ArrowLeft className="group-hover/btn:translate-x-[-4px] transition-transform" size={18} />
                      </button>
                      <button
                        onClick={() => onNavigate(`service/${service.id}`)}
                        className="w-full border-2 border-[#c9a961] text-[#c9a961] py-3 rounded-lg font-bold hover:bg-[#c9a961] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        اطلاعات بیشتر
                        <ArrowLeft className="group-hover/btn:translate-x-[-4px] transition-transform" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              روند <span className="text-[#c9a961]">همکاری</span>
            </h2>
            <p className="text-gray-600 text-lg">
              مراحل دریافت خدمات به صورت ساده و شفاف
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="absolute -top-6 right-8 w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[-2rem] w-8 h-1 bg-gradient-to-l from-[#c9a961] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                مزایای <span className="text-[#c9a961]">همکاری</span> با ما
              </h2>
              <p className="text-gray-600 text-lg">
                چرا خدمات ما را انتخاب کنید؟
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transform hover:translate-x-[-4px] transition-all duration-300"
                >
                  <CheckCircle className="text-[#c9a961] flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            نیاز به مشاوره حقوقی دارید؟
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            همین الان با ما تماس بگیرید و از مشاوره تخصصی بهره‌مند شوید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('booking')}
              className="bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              رزرو مشاوره
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border-2 border-[#c9a961] text-[#c9a961] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#c9a961] hover:text-white transition-all duration-300"
            >
              تماس با ما
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}