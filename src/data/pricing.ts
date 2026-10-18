export type CurrencyCode = 'GBP' | 'USD' | 'EUR';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rate: number; // multiplier against GBP
}

export const CURRENCIES: Record<CurrencyCode, Currency> = {
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', rate: 1 },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.28 },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', rate: 1.17 },
};

export interface Plan {
  id: string;
  duration: string;
  name: string;
  badge?: string;
  priceGBP: number;
  periodLabel: string;
  monthlyEquivalentGBP: number;
  connections: number;
  isPopular?: boolean;
  isLifetime?: boolean;
  features: {
    text: string;
    included: boolean;
    isHighlighted?: boolean;
  }[];
}

export const PLANS: Plan[] = [
  {
    id: 'starter-3m',
    duration: '3 Months',
    name: 'Starter',
    priceGBP: 19.99,
    periodLabel: '/ 3 months',
    monthlyEquivalentGBP: 6.66,
    connections: 2,
    features: [
      { text: '2 Simultaneous Connections', included: true },
      { text: '20,000+ UK & Global Live Channels', included: true },
      { text: 'Full HD & 4K Ultra HD Quality', included: true },
      { text: '100,000+ Movies & TV Series VOD', included: true },
      { text: 'EPG Electronic Program Guide & Catch-Up', included: true },
      { text: 'Fast UK & European Streaming Servers', included: true },
      { text: 'Email & WhatsApp Customer Support', included: true },
      { text: 'Anti-Freeze Server Technology', included: false },
      { text: 'VIP Priority Sports Server Access', included: false },
    ],
  },
  {
    id: 'premium-6m',
    duration: '6 Months',
    name: 'Premium',
    badge: '⭐ Most Popular',
    priceGBP: 29.99,
    periodLabel: '/ 6 months',
    monthlyEquivalentGBP: 4.99,
    connections: 3,
    isPopular: true,
    features: [
      { text: '3 Simultaneous Connections', included: true, isHighlighted: true },
      { text: '20,000+ UK & Global Live Channels', included: true },
      { text: 'Crystal-Clear 4K Ultra HD & 60fps Sports', included: true, isHighlighted: true },
      { text: 'Full VOD Library + Weekly Cinema Releases', included: true },
      { text: 'EPG TV Guide & 7-Day Catch-Up TV', included: true },
      { text: 'Anti-Freeze 99.9% Uptime Technology', included: true, isHighlighted: true },
      { text: '24/7 Dedicated WhatsApp Support', included: true },
      { text: 'Compatible with Firestick, Smart TV, Mobile', included: true },
      { text: 'Lifetime Permanent Access', included: false },
    ],
  },
  {
    id: 'pro-12m',
    duration: '12 Months',
    name: 'Pro',
    badge: 'Best Value',
    priceGBP: 45.0,
    periodLabel: '/ year',
    monthlyEquivalentGBP: 3.75,
    connections: 4,
    features: [
      { text: '4 Simultaneous Connections', included: true, isHighlighted: true },
      { text: '20,000+ UK & Global Live Channels', included: true },
      { text: '4K Ultra HD + All Premium Sports & PPV', included: true, isHighlighted: true },
      { text: '100,000+ Movies, Series & Netflix/Disney Originals', included: true },
      { text: 'EPG TV Guide & 7-Day Catch-Up TV', included: true },
      { text: 'VIP High-Bitrate Dedicated Sports Servers', included: true, isHighlighted: true },
      { text: 'Anti-Freeze Buffer-Free Technology', included: true },
      { text: 'Priority 24/7 VIP Support', included: true },
      { text: 'Instant Setup Guide for All Devices', included: true },
    ],
  },
  {
    id: 'lifetime-deal',
    duration: 'Lifetime',
    name: 'Ultimate',
    badge: '👑 Best Deal — Pay Once, Stream Forever',
    priceGBP: 350.0,
    periodLabel: 'one-time',
    monthlyEquivalentGBP: 0,
    connections: 5,
    isLifetime: true,
    features: [
      { text: '5 Simultaneous Family Connections', included: true, isHighlighted: true },
      { text: 'Permanent Lifetime Access (No Renewals Ever)', included: true, isHighlighted: true },
      { text: 'All 20,000+ Channels & VOD Forever', included: true },
      { text: 'Free Upgrades to Future 4K & 8K Feeds', included: true, isHighlighted: true },
      { text: 'All PPV Combat, Boxing & Racing Included', included: true },
      { text: 'Dedicated Account Manager on WhatsApp', included: true },
      { text: 'Anti-Freeze High-Capacity UK Backbone', included: true },
      { text: 'Multi-Device License Transfer Option', included: true },
    ],
  },
];

export const CONTACT_INFO = {
  brandName: 'British Sports IPTV',
  website: 'https://britishsportsiptv.com/',
  whatsappNumber: '+447418378240',
  whatsappUrl: 'https://wa.me/447418378240',
  telegramUsername: 'RanafaisalSKP',
  telegramUrl: 'https://t.me/RanafaisalSKP',
  email: 'contact@britishsportsiptv.com',
};
