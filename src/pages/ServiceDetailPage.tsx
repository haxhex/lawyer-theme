import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Scale, Home, FileText, Building2, Briefcase, Users } from 'lucide-react';

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

const servicesData: Service[] = [
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
];

const getServiceIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    Scale,
    Home,
    FileText,
    Building2,
    Briefcase,
    Users,
  };
  
  const IconComponent = icons[iconName] || Scale;
  return IconComponent;
};

const getServiceFeatures = (serviceId: string) => {
  const featuresMap: { [key: string]: string[] } = {
    '1': [
      'وکالت در دعاوی حقوقی',
      'وکالت در دعاوی کیفری',
      'پیگیری پرونده در محاکم',
      'مشاوره در مراحل مختلف پرونده',
      'تهیه اسناد و مدارک',
      'حضور در جلسات دادگاه'
    ],
    '2': [
      'وکالت در دعاوی طلاق',
      'وکالت در دعاوی حضانت',
      'وکالت در دعاوی مهریه',
      'وکالت در دعاوی نفقه',
      'وکالت در دعاوی اجرت المثل',
      'مشاوره در امور خاناندگی'
    ],
    '3': [
      'پیگیری دعاوی سفته',
      'پیگیری دعاوی چک',
      'پیگیری مطالبات شرکت‌ها',
      'پیگیری مطالبات اشخاص حقوقی',
      'مشاوره در مسائل مالی',
      'حضور در محاکم مالی'
    ],
    '4': [
      'ثبت شرکت‌ها و موسسات',
      'ثبت املاک و مستغلات',
      'مشاوره در امور مالیاتی',
      'مشاوره در امور بیمه',
      'وکالت در دیوان عدالت اداری',
      'تنظیم قراردادهای داخلی و بین‌المللی'
    ],
    '5': [
      'تنظیم قراردادهای تجاری',
      'تنظیم قراردادهای نفت و گاز',
      'تنظیم قراردادهای تعهدات',
      'تنظیم قراردادهای اربی و ریالی',
      'مشاوره در تجارت بین‌الملل',
      'بررسی قراردادهای آماده'
    ],
    '6': [
      'مشاوره حقوقی در کلیه زمینه‌ها',
      'مشاوره در تجارت بین‌الملل',
      'مشاوره در امور گمرکی',
      'مشاوره در مسائل مالیاتی',
      'مشاوره در مسائل بیمه',
      'مشاوره در مسائل مالکیت معنوی'
    ]
  };
  
  return featuresMap[serviceId] || [
    'خدمات تخصصی و حرفه‌ای',
    'پیگیری دقیق و منظم',
    'گزارش‌دهی مرحله به مرحله',
    'مشاوره رایگان اولیه',
    'قیمت‌گذاری شفاف',
    'پشتیبانی در ساعات کاری'
  ];
};

const getServiceProcess = () => [
  {
    step: '1',
    title: 'تماس اولیه',
    description: 'تماس با دفتر و توضیح مختصر موضوع'
  },
  {
    step: '2',
    title: 'بررسی اولیه',
    description: 'بررسی رایگان و تعیین راهکار'
  },
  {
    step: '3',
    title: 'قرارداد',
    description: 'امضای قرارداد و شروع همکاری'
  },
  {
    step: '4',
    title: 'پیگیری',
    description: 'انجام کار و گزارش‌دهی مستمر'
  }
];

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const foundService = servicesData.find(s => s.id === id);
    setService(foundService || null);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen bg-white pt-32">
        <Helmet>
          <title>خدمت یافت نشد - لیلا نوروزی وکیل</title>
          <meta name="description" content="خدمت مورد نظر یافت نشد. بازگشت به صفحه خدمات اصلی." />
        </Helmet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">خدمت مورد نظر یافت نشد</h1>
          <p className="text-gray-600 mb-8">متاسفانه خدمات با شناسه مورد نظر پیدا نشد.</p>
          <button
            onClick={() => navigate('/services')}
            className="bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} />
            بازگشت به خدمات
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = getServiceIcon(service.icon);
  const features = getServiceFeatures(service.id);
  const processSteps = getServiceProcess();

  return (
    <div className="min-h-screen bg-white pt-16">
      <Helmet>
        <title>{service.title} - لیلا نوروزی وکیل</title>
        <meta name="description" content={service.description} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-[#c9a961] hover:text-[#d4b56e] mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            بازگشت به خدمات
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-[#c9a961] text-gray-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {service.category}
              </span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/booking')}
                  className="bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  درخواست مشاوره
                </button>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center">
                <IconComponent className="text-white" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ویژگی‌های <span className="text-[#c9a961]">خدمات ما</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              ما با بهره‌گیری از تجربه و تخصص خود، بهترین خدمات را در زمینه {service.title} ارائه می‌دهیم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              مراحل <span className="text-[#c9a961]">ارائه خدمات</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              فرآیند کار ما برای ارائه بهترین خدمات در زمینه {service.title}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            آماده دریافت خدمات {service.title} هستید؟
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            همین امروز با ما تماس بگیرید و از مشاوره تخصصی بهره‌مند شوید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/booking')}
              className="bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              رزرو مشاوره رایگان
            </button>
            <button
              onClick={() => navigate('/contact')}
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