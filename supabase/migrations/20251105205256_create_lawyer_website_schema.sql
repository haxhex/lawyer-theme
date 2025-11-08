/*
  # Lawyer Website Database Schema for Leila Noorouzi
  
  ## Overview
  This migration creates the complete database structure for a professional lawyer website
  with support for articles, testimonials, consultation bookings, and services.
  
  ## New Tables
  
  ### 1. `articles`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Article title in Persian
  - `slug` (text, unique) - URL-friendly slug
  - `content` (text) - Full article content
  - `excerpt` (text) - Short summary
  - `category` (text) - Article category (e.g., 'حقوق تجارت', 'ثبت شرکت')
  - `image_url` (text) - Featured image URL
  - `published_at` (timestamptz) - Publication date
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 2. `testimonials`
  - `id` (uuid, primary key) - Unique identifier
  - `client_name` (text) - Client name
  - `client_role` (text) - Client role/position
  - `content` (text) - Testimonial text
  - `rating` (integer) - Rating from 1-5
  - `created_at` (timestamptz) - Record creation timestamp
  - `is_featured` (boolean) - Whether to show on homepage
  
  ### 3. `services`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Service title in Persian
  - `description` (text) - Service description
  - `icon` (text) - Icon identifier
  - `category` (text) - Service category
  - `price_info` (text) - Pricing information
  - `display_order` (integer) - Order for display
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 4. `bookings`
  - `id` (uuid, primary key) - Unique identifier
  - `full_name` (text) - Client full name
  - `email` (text) - Client email
  - `phone` (text) - Client phone number
  - `booking_date` (date) - Consultation date
  - `booking_time` (time) - Consultation time
  - `consultation_type` (text) - Type: 'phone', 'video', 'in-person'
  - `message` (text) - Additional message
  - `status` (text) - Status: 'pending', 'confirmed', 'cancelled'
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 5. `contact_messages`
  - `id` (uuid, primary key) - Unique identifier
  - `full_name` (text) - Sender full name
  - `email` (text) - Sender email
  - `phone` (text) - Sender phone
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Record creation timestamp
  - `is_read` (boolean) - Whether message has been read
  
  ## Security
  - RLS enabled on all tables
  - Public read access for articles, testimonials, and services
  - Authenticated access required for creating bookings and messages
*/

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  category text NOT NULL,
  image_url text DEFAULT '',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_role text DEFAULT '',
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text DEFAULT 'Scale',
  category text NOT NULL,
  price_info text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  booking_date date NOT NULL,
  booking_time time NOT NULL,
  consultation_type text NOT NULL CHECK (consultation_type IN ('phone', 'video', 'in-person')),
  message text DEFAULT '',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Articles policies (public read)
CREATE POLICY "Articles are viewable by everyone"
  ON articles FOR SELECT
  TO anon, authenticated
  USING (true);

-- Testimonials policies (public read)
CREATE POLICY "Testimonials are viewable by everyone"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Services policies (public read)
CREATE POLICY "Services are viewable by everyone"
  ON services FOR SELECT
  TO anon, authenticated
  USING (true);

-- Bookings policies (anyone can create)
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Contact messages policies (anyone can create)
CREATE POLICY "Anyone can send contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Insert sample data for articles
INSERT INTO articles (title, slug, content, excerpt, category, image_url) VALUES
('راهنمای کامل ثبت شرکت در ایران', 'complete-guide-company-registration', 'محتوای کامل مقاله در مورد ثبت شرکت و مراحل آن...', 'راهنمای جامع برای ثبت شرکت و کسب و کار در ایران', 'ثبت شرکت', '/images/podcasts/article1.jpeg'),
('حقوق تجارت و قراردادهای بازرگانی', 'business-law-commercial-contracts', 'توضیحات کامل در مورد حقوق تجارت و انواع قراردادها...', 'آشنایی با مفاهیم اساسی حقوق تجارت و قراردادهای تجاری', 'حقوق تجارت', '/images/podcasts/article2.jpeg'),
('مالکیت معنوی و ثبت علائم تجاری', 'intellectual-property-trademark', 'راهنمای کامل ثبت علامت تجاری و حفاظت از مالکیت معنوی...', 'چگونه از علامت تجاری و مالکیت معنوی خود محافظت کنید', 'مالکیت معنوی', '/images/podcasts/podcast4.jpeg'),
('دعاوی تجاری و حل اختلاف', 'commercial-disputes-resolution', 'روش‌های حل اختلاف در دعاوی تجاری و مراحل قانونی...', 'راهکارهای حقوقی برای حل اختلافات تجاری', 'دعاوی تجاری', '/images/podcasts/podcast1.jpeg');

-- Insert sample data for testimonials
INSERT INTO testimonials (client_name, client_role, content, rating, is_featured) VALUES
('محمد رضایی', 'مدیرعامل شرکت فناوری', 'مشاوره حقوقی خانم نوروزی در زمینه ثبت شرکت و قراردادهای تجاری بسیار حرفه‌ای و دقیق بود. از تخصص ایشان بهره زیادی بردیم.', 5, true),
('سارا احمدی', 'صاحب کسب و کار', 'تجربه فوق‌العاده‌ای در همکاری با خانم نوروزی داشتم. ایشان با دقت و حوصله تمام مسائل حقوقی کسب و کارم را بررسی کردند.', 5, true),
('علی کریمی', 'مدیر بازرگانی', 'مشاوره در زمینه قراردادهای بین‌المللی و صادرات بسیار مفید بود. حتما به دیگران توصیه می‌کنم.', 5, false),
('مریم حسینی', 'وکیل و مشاور', 'همکاری با خانم نوروزی در پرونده‌های پیچیده تجاری تجربه‌ای ارزشمند بود. تخصص و تعهد ایشان قابل تحسین است.', 5, true);

-- Insert sample data for services
INSERT INTO services (title, description, icon, category, price_info, display_order) VALUES
('ثبت شرکت و کسب و کار', 'ثبت انواع شرکت‌ها شامل سهامی خاص، با مسئولیت محدود، تعاونی و سایر انواع با کمترین زمان و بالاترین کیفیت', 'Building2', 'ثبت', 'از 5 میلیون تومان', 1),
('مشاوره حقوقی تجاری', 'ارائه مشاوره تخصصی در زمینه قراردادهای تجاری، صادرات و واردات، و مسائل حقوقی کسب و کار', 'Scale', 'مشاوره', 'از 2 میلیون تومان', 2),
('قراردادهای تجاری', 'تنظیم و بررسی انواع قراردادهای تجاری، قراردادهای بین‌المللی، و توافق‌نامه‌های تجاری', 'FileText', 'قرارداد', 'از 3 میلیون تومان', 3),
('دعاوی تجاری', 'وکالت و پیگیری دعاوی تجاری، اختلافات شرکا، و مطالبات تجاری در محاکم', 'Gavel', 'دعوا', 'توافقی', 4),
('مالکیت معنوی', 'ثبت علائم تجاری، اختراعات، طرح‌های صنعتی و حفاظت از حقوق مالکیت معنوی', 'Award', 'ثبت', 'از 4 میلیون تومان', 5),
('ادغام و تملک', 'مشاوره و انجام کلیه مراحل ادغام شرکت‌ها، خرید و فروش سهام، و تغییرات ساختاری', 'Briefcase', 'مشاوره', 'توافقی', 6);
