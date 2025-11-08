import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Tag, MessageCircle, User, Mail, Share2, Clock, Play, Link } from 'lucide-react';

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

interface Comment {
  id: string;
  articleId: string;
  name: string;
  email: string;
  comment: string;
  date: string;
}

// Hardcoded article data (in a real app, this would come from an API)
const articleData: Article[] = [
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
    content: `اشخاص خارجی می‌توانند شعبه یا نمایندگی ثبت کرده یا شرکت جدید با مالکیت کامل تأسیس کنند، مشروط به رعایت قوانین مرتبط و ارائه مدارک هویتی معتبر و مجوزهای لازم. روند عملی مشابه ثبت داخلی است اما احراز هویت اشخاص خارجی و ترجمه رسمی اسناد شرکت مادر یا پاسپورت نیازمند تاییدات مترجمر رسمی و وزارت امور خارجه خواهد بود. پس از ثبت، اخذ کد اقتصادی، ثبت‌نام مالیاتی، بیمه کارکنان و رعایت مقررات ارزی و گمرکی برای فعالیت عملیاتی ضروری است.`,
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
    content: `ثبت اختراع در سامانه مالکیت معنوی با ارائه اظهارنامه، توصیف، نقشه‌ها، ادعاها و خلاصه انجام می‌شود و معیارهای نوآوری، گام ابتکاری و کاربرد صنعتی باید اثبات شود. ارزیابی شکلی و ماهوی ممکن است منجر به صدور اخطار رفع نقص شود و پاسخ دقیق به استنادات پیشینه برای پذیرش ادعاها اهمیت دارد. پس از ثبت، امکان انتقال حق، اعطای مجوز بهره‌برداری، و طرح دعوی علیه ناقضان وجود دارد و پیشنهاد می‌شود راهبرد انتشار/عدوم انتشار و ثبت بین‌المللی بر اساس بازار هدف طراحی شود.`,
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
];

export default function ArticleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Find the article by ID
    const foundArticle = articleData.find((art: Article) => art.id === id);
    setArticle(foundArticle || null);
    
    // Load comments for this article (in a real app, this would come from a database)
    const storedComments = localStorage.getItem(`comments_${id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [id]);

  // Get related articles (same category, excluding current article)
  const getRelatedArticles = (): Article[] => {
    if (!article) return [];
    return articleData
      .filter((art: Article) => art.category === article.category && art.id !== article.id)
      .slice(0, 6); // Limit to 6 related articles
  };

  const relatedArticles = getRelatedArticles();

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newComment.name && newComment.email && newComment.comment) {
      const comment: Comment = {
        id: Date.now().toString(),
        articleId: id || '',
        name: newComment.name,
        email: newComment.email,
        comment: newComment.comment,
        date: new Date().toISOString()
      };
      
      const updatedComments = [comment, ...comments];
      setComments(updatedComments);
      localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
      
      // Reset form
      setNewComment({
        name: '',
        email: '',
        comment: ''
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fa-IR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Helmet>
          <title>مقاله یافت نشد - لیلا نوروزی وکیل</title>
          <meta name="description" content="مقاله مورد نظر یافت نشد. بازگشت به صفحه مقالات اصلی." />
        </Helmet>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">مقاله یافت نشد</h1>
          <button
            onClick={() => navigate('/articles')}
            className="bg-[#c9a961] text-white px-6 py-3 rounded-lg hover:bg-[#d4b56e] transition-colors"
          >
            بازگشت به مقالات
          </button>
        </div>
      </div>
    );
  }

  const handleRelatedArticleClick = (relatedArticleId: string) => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Update the URL
    navigate(`/article/${relatedArticleId}`, { replace: true });
    // Find and set the new article
    const newArticle = articleData.find((art: Article) => art.id === relatedArticleId);
    if (newArticle) {
      setArticle(newArticle);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{article.title} - لیلا نوروزی وکیل</title>
        <meta name="description" content={article.excerpt} />
      </Helmet>
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/articles')}
            className="flex items-center gap-2 text-[#c9a961] hover:text-[#d4b56e] mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            بازگشت به مقالات
          </button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-6">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{formatDate(article.published_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={16} />
                <span>{article.category}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#c9a961] mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          <div className="prose prose-lg max-w-none prose-headings:text-[#2d2d2d] prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6">
            <div className="whitespace-pre-line text-gray-800 leading-relaxed text-lg">
              {article.content}
            </div>
          </div>

          {/* Frequently Asked Questions Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              پرسش های متداول
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "چگونه می توانم یک شرکت ثبت کنم؟",
                  answer: "ثبت شرکت در ایران عمدتاً به‌صورت الکترونیکی از طریق سامانه اداره ثبت شرکت‌ها انجام می‌شود و شامل انتخاب نوع شخصیت حقوقی، نام‌گذاری سه‌سیلابی، تعیین موضوع فعالیت، تکمیل فرم‌های تاسیس، بارگذاری مدارک، بررسی کارشناسی و انتشار آگهی تأسیس در روزنامه رسمی است."
                },
                {
                  question: "ثبت علامت تجاری چه مزایایی دارد؟",
                  answer: "ثبت علامت تجاری از حقوق مالکیت معنوی شما حمایت می‌کند و مانع از استفاده غیرمجاز دیگران از علامت شما می‌شود. همچنین این امر به ایجاد اعتبار برای کسب و کار شما کمک کرده و می‌تواند ارزش افزوده‌ای برای شرکت ایجاد کند."
                },
                {
                  question: "در صورت تخلف از قرارداد چه اقداماتی باید انجام داد؟",
                  answer: "در صورت تخلف از قرارداد، ابتدا باید مدارک و مستندات مربوطه را جمع‌آوری کنید. سپس می‌توانید از طریق مذاکره، میانجی‌گری یا داوری سعی در حل اختلاف کنید. در صورت لزوم می‌توانید از خدمات وکیل برای پیگیری قضایی استفاده کنید."
                },
                {
                  question: "چه زمانی نیاز به مشاوره حقوقی دارم؟",
                  answer: "شما در هر زمانی که با مسائل حقوقی مواجه می‌شوید نیاز به مشاوره حقوقی دارید. به‌ویژه در زمینه‌هایی مانه ثبت شرکت، تنظیم قراردادها، دعاوی خانواده، مالکیت معنوی و مسائل مالی و تجاری."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <button 
                    className="w-full p-6 text-right focus:outline-none flex justify-between items-center"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <svg 
                      className={`w-5 h-5 text-[#c9a961] transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div className={`px-6 pb-6 text-gray-600 ${openFaqIndex === index ? 'block' : 'hidden'}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-3">
              <span className="text-gray-600 font-medium">برچسب‌ها:</span>
              <span className="bg-[#c9a961]/10 text-[#c9a961] px-3 py-1 rounded-full text-sm">
                {article.category}
              </span>
            </div>
          </div>

          {/* Sharing Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Share2 className="text-[#c9a961]" size={24} />
              <h3 className="text-xl font-bold text-gray-800">این مقاله را برای دیگران ارسال کنید</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article!.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                تلگرام
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(article!.title + ' ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.480-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.961c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                واتساپ
              </a>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">سایر مقالات</h3>
              <div className="hide-scrollbar flex overflow-x-auto gap-6 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {relatedArticles.map((relatedArticle: Article) => (
                  <div
                    key={relatedArticle.id}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => handleRelatedArticleClick(relatedArticle.id)}
                  >
                    <div className="relative h-48">
                      <img
                        src={relatedArticle.image_url}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 right-4 bg-[#c9a961] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {relatedArticle.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="text-[#c9a961]" size={24} />
              <h3 className="text-2xl font-bold text-gray-800">دیدگاه‌ خود را بنویسید</h3>
            </div>
            
            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="bg-gray-50 rounded-2xl p-6 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">نام</label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="name"
                      value={newComment.name}
                      onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
                      placeholder="نام شما"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ایمیل</label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      value={newComment.email}
                      onChange={(e) => setNewComment({...newComment, email: e.target.value})}
                      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparentparent"
                      placeholder="ایمیل شما"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">دیدگاه شما</label>
                <textarea
                  id="comment"
                  value={newComment.comment}
                  onChange={(e) => setNewComment({...newComment, comment: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c9a961] focus:border-transparent"
                  placeholder="دیدگاه خود را بنویسید..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                ارسال دیدگاه
              </button>
            </form>

            {/* Comments List */}
            {comments.length > 0 && (
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-6">{comments.length} دیدگاه</h4>
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <div key={comment.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-[#c9a961] text-white w-10 h-10 rounded-full flex items-center justify-center">
                          <User size={20} />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800">{comment.name}</h5>
                          <p className="text-gray-500 text-sm">{formatDate(comment.date)}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}