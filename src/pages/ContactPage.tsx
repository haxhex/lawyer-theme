import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Instagram, Linkedin } from 'lucide-react';
import { supabase, ContactMessage } from '../lib/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactMessage>({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const { error } = await supabase.from('contact_messages').insert([formData]);

    setIsSubmitting(false);
    if (error) {
      setSubmitStatus('error');
    } else {
      setSubmitStatus('success');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }

    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'آدرس دفتر',
      content: 'تهران، اقدسیه، جنب مترو اقدسیه، نبش لنگری، ساختمان بانک ملی ، مجتمع اقدسیه، طبقه 6، واحد 4',
      link: 'https://maps.app.goo.gl/zF6tVSj2nardeFCX7',
    },
    {
      icon: Phone,
      title: 'تلفن تماس',
      content: '09366423879',
      link: 'tel:+982112345678',
    },
    {
      icon: Mail,
      title: 'ایمیل',
      content: 'leilanowrozilawyer@gmail.com',
      link: 'mailto:leilanowrozilawyer@gmail.com',
    },
    {
      icon: Clock,
      title: 'ساعات کاری',
      content: 'شنبه تا چهارشنبه: 9-18 | پنج‌شنبه: 9-13',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-[#2d2d2d] to-[#1a1a1a] text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#c9a961] mb-6">
            تماس با ما
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            برای دریافت مشاوره حقوقی یا پرسش سوالات خود، با ما در ارتباط باشید
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  ارسال <span className="text-[#c9a961]">پیام</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  لطفاً فرم زیر را تکمیل کنید تا در اسرع وقت با شما تماس بگیریم
                </p>
              </div>

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
                  <label className="block text-gray-700 font-semibold mb-2 text-right">
                    موضوع *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c9a961] focus:outline-none transition-colors text-right"
                    placeholder="موضوع پیام خود را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-right">
                    پیام *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#c9a961] focus:outline-none transition-colors resize-none text-right"
                    placeholder="پیام خود را بنویسید..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-lg p-4 text-green-700">
                    <CheckCircle size={24} />
                    <span>پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700">
                    <AlertCircle size={24} />
                    <span>خطا در ارسال پیام. لطفاً دوباره تلاش کنید.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-l from-[#c9a961] to-[#d4b56e] text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'در حال ارسال...' : (
                    <>
                      <Send size={20} />
                      ارسال پیام
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  اطلاعات <span className="text-[#c9a961]">تماس</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  می‌توانید از طریق راه‌های زیر با ما در ارتباط باشید
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                      <div className="text-gray-800 font-semibold">{info.content}</div>
                    </div>
                  </a>
                ))}
                {/* Office Location Map - placed exactly under the address */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:translate-y-[-4px] transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">موقعیت دفتر</h3>
                  <div className="aspect-[16/9] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1617.989831136551!2d51.4837481631038!3d35.80043260401847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ4JzAxLjQiTiA1McKwMjknMDYuNCJF!5e0!3m2!1sen!2snl!4v1762551656538!5m2!1sen!2snl"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#c9a961] to-[#d4b56e] rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">شبکه‌های اجتماعی</h3>
                <p className="mb-6 text-white/90">
                  ما را در شبکه‌های اجتماعی دنبال کنید
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/vakil_nowruzi?igsh=MXExMGU5Z3FvMzhlcg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-[#c9a961] transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://wa.me/989366423879"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-[#c9a961] transition-all duration-300 transform hover:scale-110"
                  >
                    <Send size={24} />
                  </a>
                  <a
                    href="tel:+989366423879"
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-[#c9a961] transition-all duration-300 transform hover:scale-110"
                  >
                    <Phone size={24} />
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
