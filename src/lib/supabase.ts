import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Article {
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

export interface Testimonial {
  id: string;
  client_name: string;
  client_role: string;
  content: string;
  rating: number;
  is_featured: boolean;
  created_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  price_info: string;
  display_order: number;
  created_at: string;
}

export interface Booking {
  full_name: string;
  email: string;
  phone: string;
  booking_date: string;
  booking_time: string;
  consultation_type: 'phone' | 'video' | 'in-person';
  message: string;
}

export interface ContactMessage {
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
