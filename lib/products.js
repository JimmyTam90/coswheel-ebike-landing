// Central product manifest. Facts come from coswheelebike.com product pages (checked Oct 20, 2026).
// Owner confirmed GT20 + GT20 PRO in stock on Oct 20, 2026 (set to UNAVAILABLE_OBSERVED to show 'Check Restock').
// availability: AVAILABLE_OBSERVED | MADE_TO_ORDER | UNAVAILABLE_VERIFIED | UNAVAILABLE_OBSERVED
const CDN = 'https://www.coswheelebike.com/cdn/shop/files/';

export const PRODUCTS = [
  {
    id: 'coswheel-r19',
    name: 'Coswheel R19 Electric Dirt Bike',
    short: 'R19',
    category: 'Retro / Dirt Electric Bikes',
    image: `${CDN}R19-NEW-01.jpg?v=1778169060&width=900`,
    imageAlt: 'Coswheel R19 electric dirt bike',
    price: 2499,
    regularPrice: 2899,
    rating: 4.4,
    reviewCount: 72,
    availability: 'AVAILABLE_OBSERVED',
    specs: { motor: '72V, 9000W peak', battery: '72V 40Ah', topSpeed: '60 mph', range: 'Up to 124 mi' },
    pain: 'You want real dirt-bike thrills without a gas engine, a trailer or a license plate hassle.',
    solution:
      'A 9000W-peak 72V system gives the punch to attack steep trails, and a 40Ah pack means a full afternoon of riding.',
    sourceUrl: 'https://www.coswheelebike.com/products/r19-electric-dirt-bike',
  },
  {
    id: 'coswheel-gt20',
    name: 'Coswheel GT20 Fat Tire Commuter Ebike',
    short: 'GT20',
    category: 'Fat Tire E-Bikes',
    image: `${CDN}GT20main-01_d2cbbc37-f0bb-4fda-a173-257158a7ac07.jpg?v=1766664865&width=900`,
    imageAlt: 'Coswheel GT20 fat tire ebike',
    price: 1649,
    regularPrice: 1799,
    rating: 4.8,
    reviewCount: 33,
    availability: 'AVAILABLE_OBSERVED',
    specs: { motor: '48V, 1500W peak (1000W rated)', battery: '48V 25Ah (1,200Wh)', topSpeed: '28 mph', range: 'Up to 87 mi (pedal assist)' },
    pain: 'Your daily route has hills, potholes and bags to carry, and you refuse to arrive tired or sweaty.',
    solution: 'Full suspension, 4-inch fat tires, a cargo basket and 80 N·m of torque (merchant spec) smooth out a rough commute.',
    sourceUrl: 'https://www.coswheelebike.com/products/gt20-ebike',
  },
  {
    id: 'coswheel-gt20-pro',
    name: 'Coswheel GT20 PRO Dual Motor Ebike',
    short: 'GT20 PRO',
    category: 'Fat Tire E-Bikes',
    image: `${CDN}GT20_PRO-01_34b48828-b726-4b68-bf51-6697c6368901.jpg?v=1766664952&width=900`,
    imageAlt: 'Coswheel GT20 PRO dual motor ebike',
    price: 2099,
    regularPrice: 2199,
    rating: 4.8,
    reviewCount: 16,
    availability: 'AVAILABLE_OBSERVED',
    specs: { motor: '48V, 4000W peak (dual motor)', battery: 'See merchant page', topSpeed: '35 mph', range: 'Up to 145 mi' },
    pain: 'Steep climbs, sand and loose gravel make single-motor bikes feel like they are begging for mercy.',
    solution: 'Dual motors share the load for strong hill-climbing, 35 mph top speed and up to 145 miles of range for big days out.',
    sourceUrl: 'https://www.coswheelebike.com/products/gt20-pro-ebike',
  },
  {
    id: 'coswheel-gt100',
    name: 'Coswheel GT100 High-Performance Electric Motorcycle',
    short: 'GT100',
    category: 'Electric Motorcycles',
    image: `${CDN}GT100-Alignment.jpg?v=1759110106&width=900`,
    imageAlt: 'Coswheel GT100 electric motorcycle',
    price: 5999,
    regularPrice: 8199,
    rating: 5.0,
    reviewCount: 1,
    availability: 'MADE_TO_ORDER',
    specs: { motor: '8600W peak (4000W rated)', battery: '72V 50Ah', topSpeed: '75 mph', range: 'See merchant page' },
    pain: 'You have outgrown ebike speeds and want a bike that feels like a real motorcycle.',
    solution: 'Up to 75 mph and 450 N·m of wheel-end torque (merchant spec) put it in a league of its own. Built to order, about 30 days.',
    sourceUrl: 'https://www.coswheelebike.com/products/gt100-electric-motorcycle',
  },
];

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id);
export const money = (n) => `$${n.toLocaleString('en-US')}`;
export const saving = (p) => p.regularPrice - p.price;

export const AVAILABILITY_LABEL = {
  AVAILABLE_OBSERVED: 'Listed as available',
  MADE_TO_ORDER: 'Built to order (~30 days)',
  UNAVAILABLE_VERIFIED: 'Sold out at merchant',
  UNAVAILABLE_OBSERVED: 'Sold out at merchant',
};
export const isSoldOut = (p) => p.availability.startsWith('UNAVAILABLE');

// Weighted average of the merchant-site ratings listed above (no invented numbers).
export const REVIEW_SUMMARY = (() => {
  const count = PRODUCTS.reduce((n, p) => n + p.reviewCount, 0);
  const avg = PRODUCTS.reduce((n, p) => n + p.rating * p.reviewCount, 0) / count;
  return { count, avg: Math.round(avg * 10) / 10 };
})();
