import { useEffect, useState } from 'react';
import { Scale, Award, Users, Star, ArrowLeft, CheckCircle, FileSearch, PenTool, Building2, Home, FileText, UserCheck, Gavel, Briefcase } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  id: number;
  client_name: string;
  client_role: string;
  content: string;
  rating: number;
  is_featured: boolean;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      client_name: 'محمد رضایی',
      client_role: 'مدیرعامل شرکت فناوری',
      content: 'مشاوره حقوقی خانم نوروزی در زمینه ثبت شرکت و قراردادهای تجاری بسیار حرفه‌ای و دقیق بود. از تخصص ایشان بهره زیادی بردیم.',
      rating: 5,
      is_featured: true
    },
    {
      id: 2,
      client_name: 'سارا احمدی',
      client_role: 'صاحب کسب و کار',
      content: 'تجربه فوق‌العاده‌ای در همکاری با خانم نوروزی داشتم. ایشان با دقت و حوصله تمام مسائل حقوقی کسب و کارم را بررسی کردند.',
      rating: 5,
      is_featured: true
    },
    {
      id: 3,
      client_name: 'علی کریمی',
      client_role: 'مدیر بازرگانی',
      content: 'مشاوره در زمینه قراردادهای بین‌المللی و صادرات بسیار مفید بود. حتما به دیگران توصیه می‌کنم.',
      rating: 5,
      is_featured: false
    },
    {
      id: 4,
      client_name: 'مریم حسینی',
      client_role: 'وکیل و مشاور',
      content: 'همکاری با خانم نوروزی در پرونده‌های پیچیده تجاری تجربه‌ای ارزشمند بود. تخصص و تعهد ایشان قابل تحسین است.',
      rating: 5,
      is_featured: true
    }
  ]);

  const [services] = useState<Service[]>([
    {
      id: '1',
      title: 'ثبت شرکت و کسب و کار',
      description: 'ثبت انواع شرکت‌ها شامل سهامی خاص، با مسئولیت محدود، تعاونی و سایر انواع با کمترین زمان و بالاترین کیفیت',
      icon: 'Building2'
    },
    {
      id: '2',
      title: 'مشاوره حقوقی تجاری',
      description: 'ارائه مشاوره تخصصی در زمینه قراردادهای تجاری، صادرات و واردات، و مسائل حقوقی کسب و کار',
      icon: 'Scale'
    },
    {
      id: '3',
      title: 'قراردادهای تجاری',
      description: 'تنظیم و بررسی انواع قراردادهای تجاری، قراردادهای بین‌المللی، و توافق‌نامه‌های تجاری',
      icon: 'FileText'
    },
    {
      id: '4',
      title: 'دعاوی تجاری',
      description: 'وکالت و پیگیری دعاوی تجاری، اختلافات شرکا، و مطالبات تجاری در محاکم',
      icon: 'Gavel'
    },
    {
      id: '5',
      title: 'مالکیت معنوی',
      description: 'ثبت علائم تجاری، اختراعات، طرح‌های صنعتی و حفاظت از حقوق مالکیت معنوی',
      icon: 'Award'
    },
    {
      id: '6',
      title: 'ادغام و تملک',
      description: 'مشاوره و انجام کلیه مراحل ادغام شرکت‌ها، خرید و فروش سهام، و تغییرات ساختاری',
      icon: 'Briefcase'
    }
  ]);

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Scale,
      Building2,
      FileText,
      Award,
      Briefcase,
      Gavel,
      Home,
      PenTool,
      UserCheck,
      FileSearch,
    };
    return icons[iconName] || Scale;
  };

  const stats = [
    { icon: Users, value: '500+', label: 'موکلین راضی' },
    { icon: Scale, value: '1000+', label: 'پرونده موفق' },
    { icon: Award, value: '20+', label: 'سال تجربه' },
    { icon: Star, value: '100%', label: 'رضایت مشتریان' },
  ];

  const features = [
    'وکالت در دعاوی حقوقی و کیفری',
    'تخصص در دعاوی خانواده',
    'پیگیری دعاوی مالی',
    'مشاوره تخصصی در امور ثبتی',
    'تنظیم قراردادها و اسناد',
    'رازداری کامل',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 border-4 border-[#c9a961] rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-[#c9a961] rounded-full animate-pulse delay-75"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-1 bg-[#c9a961] mb-2"></div>
            <div className="w-32 h-1 bg-[#c9a961] mb-2"></div>
            <div className="w-32 h-1 bg-[#c9a961]"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    <div className="order-2 lg:order-1 space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-[#c9a961] leading-tight">
          لیلا نوروزی
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-300">
          وکیل پایه یک دادگستری
        </h2>
      </div>
      
      <div className="space-y-3">
        <p className="text-lg text-gray-300 leading-relaxed">
          ✓ وکالت در دعاوی حقوقی، کیفری و ثبتی
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          ✓ دعاوی خانواده: طلاق، حضانت، مهریه، نفقه
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          ✓ دعاوی مالی: سفته، چک و مطالبات
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          ✓ تخصص در امور ملکی، مالیاتی، بیمه و دیوان عدالت
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          ✓ تنظیم قراردادهای تجاری و بین‌المللی
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => onNavigate('booking')}
          className="group bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          رزرو مشاوره
          <ArrowLeft className="group-hover:translate-x-[-4px] transition-transform" size={20} />
        </button>
        <button
          onClick={() => onNavigate('about')}
          className="border-2 border-[#c9a961] text-[#c9a961] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#c9a961] hover:text-white transition-all duration-300"
        >
          بیشتر بدانید
        </button>
      </div>
    </div>
    
    <div className="order-1 lg:order-2 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-[#c9a961] blur-3xl opacity-20 animate-pulse"></div>
        <div className="relative w-[380px] h-[500px] bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-[200px_200px_40px_40px] p-3 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 shadow-2xl">
          <img
            src="/images/podcasts/about1.jpeg"
            alt="لیلا نوروزی - وکیل"
            className="w-full h-full object-cover rounded-[190px_190px_30px_30px]"
          />
        </div>
      </div>
    </div>
  </div>
</div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-3xl font-bold text-[#c9a961] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              چرا <span className="text-[#c9a961]">لیلا نوروزی</span>؟
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              تجربه، تخصص و تعهد در ارائه بهترین خدمات حقوقی
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <CheckCircle className="text-[#c9a961] flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              <span className="text-[#c9a961]">خدمات حقوقی</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              ارائه خدمات جامع حقوقی در تمامی زمینه‌های دعاوی و مشاوره
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:translate-y-[-8px] border border-gray-100"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c9a961]/10 to-transparent rounded-bl-full"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#c9a961]/5 rounded-tr-full"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              مشاهده جزئیات خدمات
              <ArrowLeft className="group-hover:translate-x-[-4px] transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                بیشتر با من <span className="text-[#c9a961]">آشنا شوید</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                من لیلا نوروزی، وکیل پایه یک دادگستری با نزدیک به 20 سال سابقه کار در حوزه وکالت و مشاوره حقوقی هستم. تخصص اصلی من در زمینه دعاوی حقوقی، کیفری و به ویژه دعاوی خانواده است.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                باور من این است که هر موکل نیازمند یک همراه حقوقی متعهد و با تجربه است که بتواند با درک کامل از وضعیت او، بهترین راهکار حقوقی را ارائه دهد. من تلاش می‌کنم تا با ارائه مشاوره دقیق و پیگیری مستمر، شما را در مسیر رسیدن به حقتان همراهی کنم.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  'بیش از 20 سال تجربه وکلت',
                  'تخصص در دعاوی خانوادگی',
                  'پیگیری دعاوی مالی و تجاری',
                  'مشاوره در امور ثبتی و ملکی'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-[#c9a961] flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20"></div>
              <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent z-10"></div>
                <img
                  src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="لیلا نوروزی - وکیل"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 border-4 border-white rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-black space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                مشاوره حقوقی تخصصی
              </h2>
              <p className="text-lg leading-relaxed text-black/90">
                دریافت مشاوره حقوقی از یک وکیل با تجربه می‌تواند تفاوت بزرگی در نتیجه پرونده شما ایجاد کند. من با بررسی دقیق وضعیت شما، بهترین راهکار حقوقی را ارائه می‌دهم.
              </p>
              <p className="text-lg leading-relaxed text-black/90">
                چه در زمینه دعاوی خانوادگی، چه مسائل مالی و تجاری یا هر موضوع حقوقی دیگری، می‌توانید روی تجربه و تخصص من حساب کنید.
              </p>
              <button
                onClick={() => onNavigate('booking')}
                className="bg-white text-[#c9a961] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 group"
              >
                رزرو وقت مشاوره
                <ArrowLeft className="group-hover:translate-x-[-4px] transition-transform" size={20} />
              </button>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-2xl transform rotate-12"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/20 rounded-2xl transform -rotate-12"></div>
                
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="لیلا نوروزی"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">لیلا نوروزی</h3>
                    <p className="text-white/80">وکیل پایه یک دادگستری</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 text-black text-center">
                  {services.slice(0, 3).map((service, index) => {
                    const IconComponent = getIcon(service.icon);
                    return (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                        <IconComponent className="mx-auto mb-2" size={24} />
                        <p className="text-sm font-medium">{service.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              نظرات <span className="text-[#c9a961]">موکلین</span>
            </h2>
            <p className="text-gray-600 text-lg">
              رضایت موکلین، افتخار ماست
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials
              .filter(t => t.is_featured)
              .map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[#c9a961] fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 text-right">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3 border-t pt-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.client_name.charAt(0)}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-800">{testimonial.client_name}</div>
                      <div className="text-sm text-gray-600">{testimonial.client_role}</div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 border-4 border-[#c9a961] rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 border-4 border-[#c9a961] rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            آماده پاسخگویی به سوالات شما هستیم
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            برای دریافت مشاوره حقوقی و بررسی وضعیت پرونده خود، همین امروز با ما تماس بگیرید
          </p>
          <button
            onClick={() => onNavigate('booking')}
            className="bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            رزرو مشاوره
          </button>
        </div>
      </section>
    </div>
  );
}