// Single source of truth for site-level settings (Section 1 of the master prompt).
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '/coswheel-ebike';
export const withBase = (p = '') => `${BASE_PATH}${p}`;

export const SITE = {
  name: 'PrimeGearLab',
  origin: 'https://www.primegearlab.com',
  canonical: 'https://www.primegearlab.com/coswheel-ebike',
  email: 'contact@primegearlab.com',
  merchantName: 'COSWHEEL',
  merchantSite: 'https://www.coswheelebike.com',
  checkedOn: 'October 20, 2026',
  title: 'Best Coswheel Electric Bikes 2026: R19, GT20, GT20 PRO & GT100 Compared',
  description:
    'Independent guide to COSWHEEL electric bikes: R19 dirt ebike, GT20 and GT20 PRO fat tire ebikes, and the GT100 electric motorcycle. Compare power, range and price, then find your fit.',
};

// Social preview image: primary featured product (R19, first product in the catalog), never the logo.
export const OG_IMAGE =
  'https://www.coswheelebike.com/cdn/shop/files/R19-NEW-01.jpg?v=1778169060&width=1200&height=630&crop=center';

export const SOCIAL = {
  facebook: 'https://www.facebook.com/primegearlab/',
  x: 'https://x.com/primegearlab',
  instagram: 'https://www.instagram.com/primegearlab/',
  pinterest: 'https://www.pinterest.com/primegearlab/',
};

// Set NEXT_PUBLIC_GA4_ID in .env.local (local) or Vercel Environment Variables. Empty = GA not loaded.
export const GA4_ID = (process.env.NEXT_PUBLIC_GA4_ID || '').trim();

export const NEWSLETTER = {
  badge: '🎁 VIP Exclusive Deals & Coupons',
  heading: 'Get Exclusive COSWHEEL Deals & VIP Updates',
  subheading:
    'Subscribe to receive seasonal price drop alerts, free accessory giveaways & speed-tuning guides sent directly to your inbox.',
  placeholder: 'Enter your email address...',
  button: 'Get VIP Access',
  privacy: '🔒 100% Free. No Spam. Unsubscribe at any time.',
  // Brevo form endpoint (same URL the hosted form posts to).
  formUrl:
    'https://f5f5fd24.sibforms.com/serve/MUIFAF9KGXOJdnmW-8VL6AiAgsEZMR-rNJu6tAWnDmi9Wt_-QAd5vwVf9Ppr7omuBezUzwBL23kTYsK1F7ls3mkjqLqcuOWDsomymJJa0MbJ0uxbF4_dVayKyZDMuVAW2HeWjoXRUuFn1WddH6-gHg3M2jKgShUEnUZtKZfXnNqsInGiQg9nhbs_odzegRGxkwPLv4tB100uEI9Oxg==',
};

export const FEATURED_VIDEO_ID = 'hyuNHUmcx8A';

// COUPON_CODE is empty in Section 1 => no announcement bar, no coupon badges, no exit popup.
export const COUPON_CODE = '';

// Smart Finder options (Section 1.2). productIds reference the manifest; names are derived from it.
export const FITMENT_OPTIONS = [
  { id: 'commuting', label: 'Urban Daily Commute & Long Range', productIds: ['coswheel-gt20'] },
  { id: 'offroad', label: 'All-Terrain & Mountain Adventure', productIds: ['coswheel-gt20-pro', 'coswheel-r19'] },
  { id: 'motorcycle', label: 'High-Speed Electric Motorcycle', productIds: ['coswheel-gt100'] },
];
