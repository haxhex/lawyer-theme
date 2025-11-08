import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Tag, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  image_url: string;
  published_at: string;
  created_at: string;
}

export default function ArticlesPage() {
  const navigate = useNavigate();
  const [articles] = useState<Article[]>([
    {
      id: '1',
      title: 'راهنمای کامل ثبت شرکت در ایران',
      slug: 'complete-guide-company-registration',
      content: `ثبت شرکت در ایران عمدتاً به‌صورت الکترونیکی از طریق سامانه اداره ثبت شرکت‌ها انجام می‌شود و شامل انتخاب نوع شخصیت حقوقی، نام‌گذاری سه‌سیلابی، تعیین موضوع فعالیت، تکمیل فرم‌های تاسیس، بارگذاری مدارک، بررسی کارشناسی و انتشار آگهی تأسیس در روزنامه رسمی است. مدارک کلیدی شامل اساسنامه، شرکتنامه یا اظهارنامه، صورتجلسات مؤسسین و هیئت‌مدیره، مدارک هویتی شرکا و آدرس قانونی با کدپستی معتبر است و پس از ثبت باید کد اقتصادی، دفاتر پلمب و پرونده مالیاتی اخذ شود. زمان معمول انجام کار برای پرونده‌های کامل ۷ تا ۱۰ روز کاری است اما با توجه به حجم پرونده در استان‌ها ممکن است طولانی‌تر شود و هزینه‌ها تابع نوع شرکت، سرمایه ثبتی و هزینه‌های آگهی رسمی هستند.`,
      excerpt: 'راهنمای جامع برای ثبت شرکت و کسب و کار در ایران',
      category: 'ثبت شرکت',
      image_url: '/images/podcasts/article1.jpeg',
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'حقوق تجارت و قراردادهای بازرگانی',
      slug: 'business-law-commercial-contracts',
      content: `قانون تجارت ایران چارچوب فعالیت‌های تجاری، اسناد تجاری، شرکت‌ها و ورشکستگی را تعیین می‌کند و در قراردادهای بازرگانی، شفافیت تعهدات، شرایط فسخ، ضمانت اجرا، شرط داوری و نحوه حل اختلاف اهمیت حیاتی دارد. اسناد تجاری مانند چک و سفته تابع مقررات شکلی و ماهوی‌اند و برای وصول یا اعتراض باید تشریفات قانونی رعایت شود تا امکان مطالبه سریع فراهم شود. کسب‌وکارها برای صادرات و واردات نیازمند رعایت مقررات اختصاصی، کارت بازرگانی و ثبت سفارش هستند و درج دقیق بندهای ریسک، فورس ماژور، Incoterms و صلاحیت مرجع حل اختلاف در قراردادهای بین‌المللی توصیه می‌شود.`,
      excerpt: 'آشنایی با مفاهیم اساسی حقوق تجارت و قراردادهای تجاری',
      category: 'حقوق تجارت',
      image_url: '/images/podcasts/article2.jpeg',
      published_at: new Date(Date.now() - 86400000).toISOString(), // Yesterday
      created_at: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: '3',
      title: 'مالکیت معنوی و ثبت علائم تجاری',
      slug: 'intellectual-property-trademark',
      content: `ثبت علامت تجاری، اختراع و طرح صنعتی در مرکز مالکیت معنوی انجام می‌شود؛ مسیر عملی شامل ایجاد حساب در سامانه، تکمیل اظهارنامه، انتخاب طبقات نیس، بارگذاری مدارک، بررسی کارشناسی، آگهی نوبت اول، مهلت اعتراض ۳۰ روزه و سپس آگهی نوبت دوم و صدور گواهی است. اعتبار علامت ۱۰ سال است و تمدید آن ممکن است؛ برای علائم غیرفارسی یا لاتین داشتن کارت بازرگانی لازم است و انتقال مالکیت علامت باید در مرجع ثبت قید شود تا در برابر ثالث قابل استناد باشد. در صورت نقض حقوق، امکان طرح دعوی حقوقی، دستور موقت، توقیف کالا و مطالبه خسارت در شعب تخصصی فراهم است و گردآوری مستندات استفاده عرفی و شباهت گمراه‌کننده اهمیت دارد.`,
      excerpt: 'چگونه از علامت تجاری و مالکیت معنوی خود محافظت کنید',
      category: 'مالکیت معنوی',
      image_url: '/images/podcasts/podcast4.jpeg',
      published_at: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      created_at: new Date(Date.now() - 172800000).toISOString(),
    },
    {
      id: '4',
      title: 'دعاوی تجاری و حل اختلاف',
      slug: 'commercial-disputes-resolution',
      content: `اختلافات رایج شامل نقض قرارداد، تاخیر در پرداخت، اختلاف شرکا، رقابت نامشروع، نقض علائم و دعاوی ناشی از اسناد تجاری است و مسیرهای حل اختلاف شامل مذاکره، میانجی‌گری، داوری و دادگاه می‌باشد. درج شرط داوری در قراردادهای بازرگانی موجب رسیدگی سریع‌تر و محرمانه‌تر می‌شود و رأی داوری قابل اجراست مگر در موارد استثنایی مانند مخالفت با نظم عمومی. در مسیر قضایی، تقدیم دادخواست، ادله، جلب نظر کارشناس، تأمین دلیل و دستور موقت ابزارهای کلیدی‌اند و رعایت تشریفات شکلی مانند ابلاغ و مواعد در سرنوشت دعوی اثر مستقیم دارد.`,
      excerpt: 'راهکارهای حقوقی برای حل اختلافات تجاری',
      category: 'دعاوی تجاری',
      image_url: '/images/podcasts/podcast1.jpeg',
      published_at: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
      created_at: new Date(Date.now() - 259200000).toISOString(),
    },
    {
      id: '5',
      title: 'ثبت شرکت با مسئولیت محدود',
      slug: 'limited-liability-company-registration-2023',
      content: `برای ثبت شرکت با مسئولیت محدود حداقل دو شریک لازم است، سرمایه به سهام تقسیم نمی‌شود و مسئولیت شرکا تا میزان آورده آنان است؛ مدارک شامل شرکتنامه، اساسنامه، تقاضانامه و صورتجلسه مجمع مؤسس است. نام شرکت نباید متضمن «سهامی» باشد و قید «با مسئولیت محدود» در انتهای نام اجباری است؛ آوردۀ غیرنقدی باید تقویم و تسلیم شود و انتقال سهم‌الشرکه معمولاً با رضایت اکثریت شرکا در دفترخانه انجام می‌شود. اداره توسط یک یا چند مدیر منتخب شرکا انجام می‌شود و تصمیمات در مجامع با نصاب مقرر در اساسنامه یا قانون اتخاذ می‌گردد و ثبت تغییرات در اداره ثبت الزامی است.`,
      excerpt: 'نحوه ثبت شرکت با مسئولیت محدود و مراحل لازم برای آن',
      category: 'ثبت شرکت',
      image_url: '/images/podcasts/article5.jpeg',
      published_at: new Date(Date.now() - 345600000).toISOString(), // 4 days ago
      created_at: new Date(Date.now() - 345600000).toISOString(),
    },
    {
      id: '6',
      title: 'حقوق کارکنان و قوانین کار',
      slug: 'employee-rights-labor-laws',
      content: `حداقل حقوق کارگران در سال ۱۴۰۴ حدود ۴۵ درصد افزایش یافته و پایه حقوق ماهانه مصوب ۱۰۳,۹۰۹,۶۸۰ ریال اعلام شده است که به‌همراه اقلام مزدی مانند بن، مسکن، حق اولاد و پایه سنوات قابل پرداخت است. حداقل دستمزد ساعتی و نرخ‌های اضافه‌کاری، شب‌کاری و جمعه‌کاری نیز به‌صورت رسمی اعلام شده و کارفرمایان مکلف به رعایت آن‌ها، پرداخت بیمه و ثبت در لیست‌های ماهانه هستند. برنامه‌ریزی مزدی کسب‌وکار باید با این جداول هم‌راستا باشد و عدم رعایت مقررات منجر به جرایم و تعهدات معوق بیمه‌ای و مالیاتی خواهد شد.`,
      excerpt: 'آشنایی با حقوق کارکنان و قوانین کار در قانون کار ایران',
      category: 'حقوق تجارت',
      image_url: '/images/podcasts/article6.jpeg',
      published_at: new Date(Date.now() - 432000000).toISOString(), // 5 days ago
      created_at: new Date(Date.now() - 432000000).toISOString(),
    },
    {
      id: '7',
      title: 'حقوق مالکیت فکری در ایران',
      slug: 'intellectual-property-rights-iran',
      content: `نظام حقوقی مالکیت فکری ایران از علائم، اختراعات، طرح‌های صنعتی و آثار ادبی‌هنری حمایت می‌کند و برای برخورداری از حمایت قوی‌تر، ثبت رسمی توصیه می‌شود. در اختراعات، شرط نوآوری، گام ابتکاری و کاربرد صنعتی ضروری است و نقشه‌ها، توصیف و خلاصۀ اختراع باید به‌نحوی تنظیم شود که برای متخصص قابل اجرا باشد. در طرح‌های صنعتی، جدید بودن ظاهر و تمایز بصری اهمیت دارد و دامنه حمایت شامل منع تولید و عرضه طرح‌های مشابه گمراه‌کننده است و ضمانت اجراهای مدنی و کیفری قابل اعمال است.`,
      excerpt: 'آشنایی با حقوق مالکیت فکری و ثبت اختراعات و علائم تجاری',
      category: 'مالکیت معنوی',
      image_url: '/images/podcasts/article3.jpeg',
      published_at: new Date(Date.now() - 518400000).toISOString(), // 6 days ago
      created_at: new Date(Date.now() - 518400000).toISOString(),
    },
    {
      id: '8',
      title: 'روش های حل اختلافات تجاری',
      slug: 'methods-commercial-dispute-resolution',
      content: `- روش‌های جایگزین شامل مذاکره ساختاریافته، میانجی‌گری با حضور میانجی بی‌طرف و داوری سازمانی یا موردی است که سرعت، محرمانگی و امکان انتخاب متخصصان فنی را فراهم می‌کند.

- در قراردادهای بین‌المللی، درج قواعد داوری مؤسسات معتبر و تعیین قانون حاکم و زبان رسیدگی توصیه می‌شود و اجرای آرای داوری با سازوکارهای داخلی تسهیل می‌گردد.

- در دعاوی پیچیده زنجیره تأمین، استفاده از کارشناسان رسمی و حسابرسی قضایی جهت محاسبه خسارت‌های مستقیم، تبعی و عدم‌النفع اهمیت دارد و می‌تواند نتیجه دعوی را تغییر دهد.`,
      excerpt: 'آشنایی با روش های حل اختلافات تجاری از طریق داوری و میانجیگری',
      category: 'دعاوی تجاری',
      image_url: '/images/podcasts/article4.jpeg',
      published_at: new Date(Date.now() - 604800000).toISOString(), // 7 days ago
      created_at: new Date(Date.now() - 604800000).toISOString(),
    },
    {
      id: '9',
      title: 'ثبت شرکت های خارجی در ایران',
      slug: 'foreign-company-registration-iran',
      content: `اشخاص خارجی می‌توانند شعبه یا نمایندگی ثبت کرده یا شرکت جدید با مالکیت کامل تأسیس کنند، مشروط به رعایت قوانین مرتبط و ارائه مدارک هویتی معتبر و مجوزهای لازم. روند عملی مشابه ثبت داخلی است اما احراز هویت اشخاص خارجی و ترجمه رسمی اسناد شرکت مادر یا پاسپورت نیازمند تاییدات مترجم رسمی و وزارت امور خارجه خواهد بود. پس از ثبت، اخذ کد اقتصادی، ثبت‌نام مالیاتی، بیمه کارکنان و رعایت مقررات ارزی و گمرکی برای فعالیت عملیاتی ضروری است.`,
      excerpt: 'آشنایی با قوانین و مراحل ثبت شرکت های خارجی در ایران',
      category: 'ثبت شرکت',
      image_url: '/images/podcasts/article7.jpeg',
      published_at: new Date(Date.now() - 691200000).toISOString(), // 8 days ago
      created_at: new Date(Date.now() - 691200000).toISOString(),
    },
    {
      id: '10',
      title: 'حقوق مالیاتی شرکت ها',
      slug: 'corporate-taxation-rights',
      content: `قوانین مالیاتی ۱۴۰۴ شامل تغییراتی در نرخ‌ها، معافیت‌ها، ارزش افزوده و برخی مشوق‌ها است و شرکت‌ها باید اظهارنامه عملکرد، ارزش افزوده و صورت‌های فصلی را به‌موقع ارسال کنند. سیاست‌های تشویقی برای افزایش درآمد ابرازی نسبت به سال قبل می‌تواند کاهش‌هایی در نرخ مؤثر مالیات عملکرد ایجاد کند و رعایت شفافیت دفاتر و اسناد هزینه‌ها از جرایم جلوگیری می‌کند. برنامه‌ریزی مالیاتی با بهره‌گیری از نرخ صفر برای بعضی فعالیت‌ها، استهلاکات و اعتبار مالیاتی ارزش افزوده می‌تواند بهینه‌سازی جریان نقد را برای کسب‌وکار فراهم کند.`,
      excerpt: 'آشنایی با قوانین مالیاتی مربوط به شرکت ها و اشخاص حقوقی',
      category: 'حقوق تجارت',
      image_url: '/images/podcasts/article8.jpeg',
      published_at: new Date(Date.now() - 777600000).toISOString(), // 9 days ago
      created_at: new Date(Date.now() - 777600000).toISOString(),
    },
    {
      id: '11',
      title: 'ثبت اختراعات و حق اختراع',
      slug: 'patent-registration-invention-rights',
      content: `ثبت اختراع در سامانه مالکیت معنوی با ارائه اظهارنامه، توصیف، نقشه‌ها، ادعاها و خلاصه انجام می‌شود و معیارهای نوآوری، گام ابتکاری و کاربرد صنعتی باید اثبات شود. ارزیابی شکلی و ماهوی ممکن است منجر به صدور اخطار رفع نقص شود و پاسخ دقیق به استنادات پیشینه برای پذیرش ادعاها اهمیت دارد. پس از ثبت، امکان انتقال حق، اعطای مجوز بهره‌برداری، و طرح دعوی علیه ناقضان وجود دارد و پیشنهاد می‌شود راهبرد انتشار/عدم انتشار و ثبت بین‌المللی بر اساس بازار هدف طراحی شود.`,
      excerpt: 'آشنایی با مراحل ثبت اختراع و حقوق مربوط به آن',
      category: 'مالکیت معنوی',
      image_url: '/images/podcasts/article9.jpeg',
      published_at: new Date(Date.now() - 864000000).toISOString(), // 10 days ago
      created_at: new Date(Date.now() - 864000000).toISOString(),
    },
    {
      id: '12',
      title: 'حقوق بیمه و انواع آن',
      slug: 'insurance-rights-types',
      content: `کسب‌وکارها موظف به بیمه کارکنان نزد سازمان تأمین اجتماعی هستند و نرخ حق‌بیمه سهم کارگر و کارفرما باید در لیست‌های ماهانه لحاظ شود که این اقلام با جداول مزدی ۱۴۰۴ مرتبط است. علاوه بر بیمه‌های اجباری، بیمه‌های بازرگانی مانند مسئولیت مدنی، آتش‌سوزی، حمل‌ونقل، مهندسی و سایبری برای مدیریت ریسک توصیه می‌شوند و در قراردادها باید شروط بیمه‌ای و حد مسئولیت درج شود. رعایت پیوست‌های بیمه‌ای در پیمانکاری‌ها و کنترل گواهی‌های بیمه تأمین اجتماعی از صدور مفاصاحساب و تحویل موقت/قطعی پروژه‌ها حمایت می‌کند.`,
      excerpt: 'آشنایی با حقوق بیمه و انواع آن در قانون ایران',
      category: 'دعاوی تجاری',
      image_url: '/images/podcasts/article10.jpeg',
      published_at: new Date(Date.now() - 950400000).toISOString(), // 11 days ago
      created_at: new Date(Date.now() - 950400000).toISOString(),
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const categories = [
    'همه',
    'ثبت شرکت',
    'حقوق تجارت',
    'مالکیت معنوی',
    'دعاوی تجاری',
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'همه' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of articles section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#c9a961] mb-6">
            مقالات حقوقی
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            آخرین مقالات، راهنماها و اخبار حقوقی در حوزه حقوق تجارت و شرکت‌ها
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="جستجو در مقالات..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
                className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c9a961] focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1); // Reset to first page when changing category
                  }}
                  className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
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
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-gray-400 text-xl mb-4">مقاله‌ای یافت نشد</div>
              <p className="text-gray-500">لطفاً جستجوی دیگری امتحان کنید</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-300 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={article.image_url || 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800'}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 right-4 bg-[#c9a961] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{formatDate(article.published_at)}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#c9a961] transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 text-sm">
                        {article.excerpt}
                      </p>

                      <button 
                        onClick={() => navigate(`/article/${article.id}`)}
                        className="group/btn flex items-center gap-2 text-[#c9a961] hover:text-[#d4b56e] font-semibold transition-colors text-sm"
                      >
                        ادامه مطلب
                        <ArrowLeft className="group-hover/btn:translate-x-[-4px] transition-transform" size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#c9a961] hover:text-white transition-colors'
                    }`}
                  >
                    <ChevronRight size={20} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        currentPage === page
                          ? 'bg-[#c9a961] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-[#c9a961] hover:text-white transition-colors'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-[#c9a961] hover:text-white transition-colors'
                    }`}
                  >
                    <ChevronLeft size={20} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-3xl p-12 text-center text-white shadow-2xl">
            <Tag className="mx-auto mb-6 text-[#c9a961]" size={48} />
            <h2 className="text-3xl font-bold mb-4">
              خبرنامه حقوقی
            </h2>
            <p className="text-gray-300 mb-8">
              برای دریافت آخرین مقالات و اخبار حقوقی، ایمیل خود را وارد کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="flex-1 px-6 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a961]"
              />
              <button className="bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                عضویت
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
