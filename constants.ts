import { TravelPackage, RouteInfo } from './types';

// High-quality images from Unsplash
export const IMAGES = {
  MECCA: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop',
  KAABA_PREMIUM: 'https://images.unsplash.com/photo-1580418823088-75e114132009?q=80&w=1600&auto=format&fit=crop',
  MEDINA: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=1600&auto=format&fit=crop',
  HAJJ_CROWD: 'https://images.unsplash.com/photo-1565552684305-7e8dabc01661?q=80&w=1600',
  PAKISTAN_NORTH: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=1600',
  LAHORE: 'https://images.unsplash.com/photo-1622546686358-1c42289c0963?q=80&w=1600',
  ISLAMABAD: 'https://images.unsplash.com/photo-1610996886290-7c64a5c9f130?q=80&w=1600',
  KARACHI: 'https://images.unsplash.com/photo-1579503463376-793574b6f695?q=80&w=1600',
  TURKEY: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1600',
  DUBAI: 'https://images.unsplash.com/photo-1512453979798-5ea936a79405?q=80&w=1600',
};

// High-quality videos (Pixabay/Pexels)
export const VIDEOS = {
  HERO_MAIN: 'https://cdn.pixabay.com/video/2020/05/25/40149-425178351_large.mp4', // Grand Mosque vibe
  KAABA_CINEMATIC: 'https://cdn.pixabay.com/video/2019/05/29/24036-339240455_large.mp4', // Spiritual/Light
  MEDINA_PEACE: 'https://cdn.pixabay.com/video/2020/04/23/36829-417161685_large.mp4', // Mosque Architecture
  NATURE_PAKISTAN: 'https://cdn.pixabay.com/video/2020/08/09/46744-449836173_large.mp4', // Mountains
  ISTANBUL_CITY: 'https://cdn.pixabay.com/video/2020/01/22/31495-386807217_large.mp4', // City/Sea
};

export const PACKAGES: TravelPackage[] = [
  {
    id: 'hajj-premium',
    title: 'Premium Hajj Package 2026',
    type: 'Hajj',
    price: '$8,500',
    duration: '21 Days',
    image: IMAGES.KAABA_PREMIUM,
    video: VIDEOS.KAABA_CINEMATIC,
    description: 'A spiritual journey of a lifetime with 5-star accommodations near Haram. Now booking for 2026.',
    rating: 5.0,
    features: ['5-Star Hotel', 'VIP Transport', 'Full Board Meals', 'Guided Ziyarat'],
  },
  {
    id: 'umrah-deluxe',
    title: 'Deluxe Umrah Package',
    type: 'Umrah',
    price: '$1,200',
    duration: '10 Days',
    image: IMAGES.MECCA,
    video: VIDEOS.MEDINA_PEACE,
    description: 'Experience serenity in Medina and Mecca with our comprehensive Umrah group.',
    rating: 4.8,
    features: ['4-Star Hotel', 'Visa Processing', 'Breakfast', 'Transport Included'],
  },
  {
    id: 'northern-pakistan',
    title: 'Hunza & Skardu Expedition',
    type: 'Domestic',
    price: 'PKR 150,000',
    duration: '7 Days',
    image: IMAGES.PAKISTAN_NORTH,
    video: VIDEOS.NATURE_PAKISTAN,
    description: 'Explore the majestic mountains of Northern Pakistan.',
    rating: 4.9,
    features: ['Jeep Safari', 'Camping', 'Bonfire Nights', 'Local Guide'],
  },
  {
    id: 'istanbul-getaway',
    title: 'Magical Istanbul',
    type: 'International',
    price: '$1,800',
    duration: '5 Days',
    image: IMAGES.TURKEY,
    video: VIDEOS.ISTANBUL_CITY,
    description: 'Discover the history and culture of Turkey.',
    rating: 4.7,
    features: ['City Tour', 'Bosphorus Cruise', 'Hotel Stay', 'Flight Included'],
  },
];

export const POPULAR_ROUTES: RouteInfo[] = [
  {
    id: 'khi-isb',
    from: 'Karachi',
    to: 'Islamabad',
    duration: '2h 00m',
    airline: 'AirBlue / PIA',
    price: 'PKR 25,000',
    image: IMAGES.ISLAMABAD,
  },
  {
    id: 'khi-lhe',
    from: 'Karachi',
    to: 'Lahore',
    duration: '1h 45m',
    airline: 'Serene Air',
    price: 'PKR 22,000',
    image: IMAGES.LAHORE,
  },
  {
    id: 'lhe-khi',
    from: 'Lahore',
    to: 'Karachi',
    duration: '1h 45m',
    airline: 'AirSial',
    price: 'PKR 22,500',
    image: IMAGES.KARACHI,
  },
  {
    id: 'lhe-isb',
    from: 'Lahore',
    to: 'Islamabad',
    duration: '4h (Bus) / 50m (Flight)',
    airline: 'PIA / Luxury Bus',
    price: 'PKR 5,000',
    image: IMAGES.PAKISTAN_NORTH,
  },
];
