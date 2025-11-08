import { useState } from 'react';
import { Podcast, Play, Clock } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('همه موضوعات');
  
  const podcasts = [
    {
      id: 1,
      title: 'راهنمای کامل ثبت شرکت در ایران',
      description: 'در این پادکست به تمام مراحل ثبت شرکت، مدارک مورد نیاز و نکات مهم می‌پردازیم',
      duration: '45:30',
      category: 'ثبت شرکت',
      image: '/images/podcasts/podcast1.jpeg',
    },
    {
      id: 2,
      title: 'حقوق تجارت الکترونیک',
      description: 'بررسی قوانین و مقررات مربوط به کسب‌وکارهای آنلاین و تجارت الکترونیک',
      duration: '38:20',
      category: 'حقوق تجارت',
      image: '/images/podcasts/podcast2.jpeg',
    },
    {
      id: 3,
      title: 'مالکیت معنوی و ثبت علامت تجاری',
      description: 'آشنایی با مفاهیم مالکیت معنوی و چگونگی ثبت و حفاظت از علامت تجاری',
      duration: '52:15',
      category: 'مالکیت معنوی',
      image: '/images/podcasts/podcast3.jpeg',
    },
    {
      id: 4,
      title: 'قراردادهای تجاری و نکات مهم',
      description: 'نکات حقوقی مهم در تنظیم و امضای قراردادهای تجاری',
      duration: '41:45',
      category: 'قراردادها',
      image: '/images/podcasts/podcast4.jpeg',
    },
    {
      id: 5,
      title: 'حل اختلافات تجاری',
      description: 'روش‌های مختلف حل اختلاف در دعاوی تجاری و انتخاب بهترین راهکار',
      duration: '47:30',
      category: 'دعاوی',
      image: '/images/podcasts/podcast5.jpeg',
    },
    {
      id: 6,
      title: 'ادغام و تملک شرکت‌ها',
      description: 'فرآیند ادغام و تملک شرکت‌ها و نکات حقوقی آن',
      duration: '55:20',
      category: 'ثبت شرکت',
      image: '/images/podcasts/podcast6.jpeg',
    },
  ];

  const categories = [
    'همه موضوعات',
    'ثبت شرکت',
    'حقوق تجارت',
    'مالکیت معنوی',
    'قراردادها',
    'دعاوی',
  ];

  // Filter podcasts based on selected category
  const filteredPodcasts = selectedCategory === 'همه موضوعات' 
    ? podcasts 
    : podcasts.filter(podcast => podcast.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Podcast className="mx-auto mb-6 text-[#c9a961]" size={64} />
          <h1 className="text-5xl md:text-6xl font-bold text-[#c9a961] mb-6">
            پادکست حقوقی
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            گوش دادن به پادکست‌های حقوقی و آشنایی با موضوعات مختلف حقوق تجارت
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${
                  selectedCategory === category
                    ? 'bg-[#c9a961] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#c9a961] hover:text-white'
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
          <div className="bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-3xl p-8 md:p-12 mb-16 text-white relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {filteredPodcasts[0]?.category || podcasts[0].category}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {filteredPodcasts[0]?.title || podcasts[0].title}
                </h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {filteredPodcasts[0]?.description || podcasts[0].description}
                </p>
                <div className="flex items-center gap-6 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{filteredPodcasts[0]?.duration || podcasts[0].duration}</span>
                  </div>
                </div>
                <button className="group bg-white text-[#c9a961] px-8 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 relative">
                  <div className="absolute inset-0 bg-[#c9a961] flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold">به زودی</span>
                  </div>
                  <Play size={20} className="group-hover:opacity-0 transition-opacity duration-300" />
                  <span className="group-hover:opacity-0 transition-opacity duration-300">پخش پادکست</span>
                </button>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={filteredPodcasts[0]?.image || podcasts[0].image}
                    alt={filteredPodcasts[0]?.title || podcasts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute top-4 left-4 bg-white text-[#c9a961] px-3 py-1 rounded-full text-xs font-semibold">
                  به زودی
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              آرشیو <span className="text-[#c9a961]">پادکست‌ها</span>
            </h2>
          </div>

          {filteredPodcasts.slice(1).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPodcasts.slice(1).map((podcast, index) => (
                <div
                  key={podcast.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-8px] transition-all duration-300 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={podcast.image}
                      alt={podcast.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[#c9a961] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {podcast.category}
                    </div>
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-[#c9a961] flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-bold text-sm">به زودی</span>
                      </div>
                      <Play className="text-[#c9a961] hover:opacity-0 transition-opacity duration-300" size={24} />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#c9a961] transition-colors">
                      {podcast.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {podcast.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{podcast.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-block bg-[#c9a961] text-white px-6 py-3 rounded-full text-lg font-bold mb-4">
                به زودی
              </div>
              <p className="text-gray-600 text-lg">
                پادکستی در این دسته بندی موجود نیست
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Podcast className="mx-auto mb-6 text-[#c9a961]" size={64} />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            عضویت در کانال پادکست
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            برای دریافت اطلاع‌رسانی درباره جدیدترین پادکست‌ها، در کانال‌های ما عضو شوید
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="group bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[#c9a961] flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">به زودی</span>
              </div>
              <span className="group-hover:opacity-0 transition-opacity duration-300">اسپاتیفای</span>
            </div>
            <div className="group bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[#c9a961] flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">به زودی</span>
              </div>
              <span className="group-hover:opacity-0 transition-opacity duration-300">اپل پادکست</span>
            </div>
            <div className="group bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[#c9a961] flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold">به زودی</span>
              </div>
              <span className="group-hover:opacity-0 transition-opacity duration-300">گوگل پادکست</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}