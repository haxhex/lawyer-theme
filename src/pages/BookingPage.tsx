import { useState } from 'react';
import { Phone, Video, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, Booking } from '../lib/supabase';

export default function BookingPage() {
  const [formData, setFormData] = useState<Omit<Booking, 'booking_date' | 'booking_time'>>({
    full_name: '',
    email: '',
    phone: '',
    consultation_type: 'phone',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create a booking object with empty date/time fields for the database
    const bookingData: Booking = {
      ...formData,
      booking_date: '',
      booking_time: '',
    } as Booking;

    const { error } = await supabase.from('bookings').insert([bookingData]);

    setIsSubmitting(false);
    if (error) {
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        consultation_type: 'phone',
        message: '',
      });
    }

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const consultationTypes = [
    {
      id: 'phone',
      icon: Phone,
      title: 'تماس تلفنی',
      description: 'مشاوره از طریق تماس تلفنی',
      duration: '30 دقیقه',
    },
    {
      id: 'video',
      icon: Video,
      title: 'ویدیو کال',
      description: 'جلسه آنلاین ویدیویی',
      duration: '45 دقیقه',
    },
    {
      id: 'in-person',
      icon: MapPin,
      title: 'حضوری',
      description: 'جلسه در دفتر وکالت',
      duration: '60 دقیقه',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#c9a961] mb-6">
            رزرو مشاوره
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            مشاوره رایگان اولیه - انتخاب زمان مناسب و نوع جلسه
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  اطلاعات <span className="text-[#c9a961]">مشاوره</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-right">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c9a961] focus:outline-none transition-colors text-right"
                      placeholder="نام کامل خود را وارد کنید"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-right">
                        ایمیل *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c9a961] focus:outline-none transition-colors text-right"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-right">
                        شماره تماس *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c9a961] focus:outline-none transition-colors text-right"
                        placeholder="09123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-right">
                      نوع مشاوره *
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {consultationTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              consultation_type: type.id as 'phone' | 'video' | 'in-person',
                            })
                          }
                          className={`p-4 rounded-lg border-2 transition-all duration-300 text-center ${
                            formData.consultation_type === type.id
                              ? 'border-[#c9a961] bg-[#c9a961]/10'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <type.icon
                            className={`mx-auto mb-2 ${
                              formData.consultation_type === type.id
                                ? 'text-[#c9a961]'
                                : 'text-gray-400'
                            }`}
                            size={28}
                          />
                          <div className="font-semibold text-gray-800 text-sm">{type.title}</div>
                          <div className="text-xs text-gray-500 mt-1">{type.duration}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700 text-right">
                    <p className="font-semibold">تاریخ و زمان مشاوره:</p>
                    <p>تاریخ و زمان مشاوره با شما هماهنگ خواهد شد.</p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-right">
                      توضیحات (اختیاری)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c9a961] focus:outline-none transition-colors resize-none text-right"
                      placeholder="توضیحات مختصری درباره موضوع مشاوره بنویسید..."
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 text-green-700">
                      <CheckCircle size={24} />
                      <span>درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700">
                      <AlertCircle size={24} />
                      <span>خطا در ثبت درخواست. لطفاً دوباره تلاش کنید.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'در حال ارسال...' : 'ثبت درخواست مشاوره'}
                  </button>
                </form>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6">مزایای مشاوره با ما</h3>
                <ul className="space-y-4">
                  {[
                    'مشاوره اولیه رایگان',
                    'پاسخگویی سریع و دقیق',
                    'تجربه بیش از 15 سال',
                    'رازداری کامل',
                    'قیمت‌گذاری شفاف',
                    'پیگیری تا رسیدن به نتیجه',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ساعات کاری</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-semibold">شنبه تا چهارشنبه</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="font-semibold">پنج‌شنبه</span>
                    <span>9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">جمعه</span>
                    <span className="text-red-600">تعطیل</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">تماس فوری</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+982112345678"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#c9a961] transition-colors"
                  >
                    <Phone size={20} />
                    <span>09366423879</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
