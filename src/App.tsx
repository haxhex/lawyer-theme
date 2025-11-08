import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocial from './components/FloatingSocial';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ArticlesPage from './pages/ArticlesPage';
import BlogPage from './pages/BlogPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

// Define meta information for each page
const pageMetaInfo: { [key: string]: { title: string; description: string } } = {
  home: {
    title: 'لیلا نوروزی - وکیل پایه یک دادگستری',
    description: 'مشاوره حقوقی تخصصی در زمینه ثبت شرکت، دعاوی تجاری، مالکیت معنوی و خدمات حقوقی جامع'
  },
  about: {
    title: 'درباره من - لیلا نوروزی وکیل',
    description: 'معرفی وکیل پایه یک دادگستری لیلا نوروزی با بیش از 20 سال تجربه در زمینه حقوق تجارت و خانواده'
  },
  services: {
    title: 'خدمات حقوقی - لیلا نوروزی وکیل',
    description: 'ارائه خدمات حقوقی تخصصی شامل ثبت شرکت، دعاوی تجاری، مالکیت معنوی، قراردادها و مشاوره حقوقی'
  },
  articles: {
    title: 'مقالات حقوقی - لیلا نوروزی وکیل',
    description: 'مجموعه مقالات تخصصی در زمینه حقوق تجارت، ثبت شرکت، مالکیت معنوی و مسائل حقوقی روز'
  },
  blog: {
    title: 'پادکست حقوقی - لیلا نوروزی وکیل',
    description: 'پادکست های آموزشی در زمینه حقوق تجارت، ثبت شرکت و مسائل حقوقی کاربردی'
  },
  booking: {
    title: 'رزرو مشاوره - لیلا نوروزی وکیل',
    description: 'دریافت مشاوره حقوقی تخصصی با وکیل پایه یک دادگستری لیلا نوروزی - رزرو آنلاین وقت مشاوره'
  },
  contact: {
    title: 'تماس با من - لیلا نوروزی وکیل',
    description: 'اطلاعات تماس و آدرس دفتر وکالت لیلا نوروزی - ارسال پیام آنلاین برای مشاوره حقوقی'
  }
};

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top whenever location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Map URL paths to page names
  useEffect(() => {
    const pathToPageMap: { [key: string]: string } = {
      '/': 'home',
      '/about': 'about',
      '/services': 'services',
      '/articles': 'articles',
      '/blog': 'blog',
      '/booking': 'booking',
      '/contact': 'contact'
    };
    
    // Check if it's a service detail page
    if (location.pathname.startsWith('/service/')) {
      setCurrentPage('services');
      return;
    }
    
    // Check if it's an article detail page
    if (location.pathname.startsWith('/article/')) {
      setCurrentPage('articles');
      return;
    }
    
    const page = pathToPageMap[location.pathname] || 'home';
    setCurrentPage(page);
  }, [location.pathname]);

  // Handle navigation from components
  const handleNavigate = (page: string) => {
    const pageToPathMap: { [key: string]: string } = {
      'home': '/',
      'about': '/about',
      'services': '/services',
      'articles': '/articles',
      'blog': '/blog',
      'booking': '/booking',
      'contact': '/contact'
    };
    
    // Handle service detail navigation
    if (page.startsWith('service/')) {
      navigate(`/${page}`);
      return;
    }
    
    // Handle article detail navigation
    if (page.startsWith('article/')) {
      navigate(`/${page}`);
      return;
    }
    
    const path = pageToPathMap[page] || '/';
    navigate(path);
  };

  // Get meta info for current page
  const metaInfo = pageMetaInfo[currentPage] || pageMetaInfo.home;

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Helmet>
        <title>{metaInfo.title}</title>
        <meta name="description" content={metaInfo.description} />
      </Helmet>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage onNavigate={handleNavigate} />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/article/:id" element={<ArticleDetailPage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingSocial />
    </div>
  );
}

export default App;