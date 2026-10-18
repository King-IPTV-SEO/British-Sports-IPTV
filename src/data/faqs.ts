export interface FAQItem {
  id: string;
  category: 'General' | 'Pricing & Trial' | 'Channels & Sports' | 'Setup & Technical';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'who-are-best',
    category: 'General',
    question: 'Who are the best IPTV providers UK in 2026?',
    answer: 'British Sports IPTV is widely recognized as one of the best IPTV providers in the UK for 2026. We deliver 20,000+ live UK and international channels alongside 100,000+ VOD movies in 4K Ultra HD. With anti-freeze technology, high-bitrate UK servers, and 99.9% uptime, it delivers a premium UK sports and television experience starting from just £19.99.',
  },
  {
    id: 'how-much-cost',
    category: 'Pricing & Trial',
    question: 'How much does a British Sports IPTV subscription cost?',
    answer: 'Our UK IPTV subscription plans start at £19.99 for 3 Months, £29.99 for 6 Months (our most popular package), £45.00 for a full 12 Months (best value at under £4/month), and £350.00 one-time for a Lifetime Access plan. Every package includes full 4K UHD sports, complete VOD library, EPG guide, and instant activation.',
  },
  {
    id: 'free-trial',
    category: 'Pricing & Trial',
    question: 'Can I test the service with a free trial before buying?',
    answer: 'Yes! We offer a completely free 24-hour trial with 100% full access to all 20,000+ channels, 4K sports streams, and VOD library. No credit card is required. Simply click the "Free Trial" button or contact us on WhatsApp to receive your credentials within 2-3 minutes.',
  },
  {
    id: 'legal-uk',
    category: 'General',
    question: 'Is British IPTV legal in the UK?',
    answer: 'Yes, IPTV (Internet Protocol Television) technology itself is 100% legal in the United Kingdom and is simply a transmission protocol used by broadcasters globally. As with any streaming service, we recommend users verify the licensing of the content they access in their specific jurisdiction.',
  },
  {
    id: 'compatible-devices',
    category: 'Setup & Technical',
    question: 'Which devices work with British Sports IPTV?',
    answer: 'Our service is universally compatible with Amazon Fire TV Stick / Cube, Samsung Smart TV (Tizen), LG Smart TV (webOS), Android TV Box (Nvidia Shield, Xiaomi), Apple TV 4K, iPhone, iPad, Android smartphones & tablets, Windows PC, Mac, and MAG/Formuler set-top boxes. It supports IPTV Smarters Pro, TiviMate, IBO Player, XCIPTV, and VLC.',
  },
  {
    id: 'how-to-start',
    category: 'Setup & Technical',
    question: 'How do I start and activate my subscription?',
    answer: 'Immediately upon completing your order or requesting a trial, our automated dispatch system sends your M3U playlist link, EPG URL, and Xtream Codes API credentials (Server URL, Username, and Password) directly to your WhatsApp and Email. Setup takes under 3 minutes following our step-by-step device guides.',
  },
  {
    id: 'premier-league',
    category: 'Channels & Sports',
    question: 'Can I watch all Premier League matches including 3:00 PM Saturday games?',
    answer: 'Yes! You get uninterrupted access to every single Premier League match, Champions League fixture, Europa League, FA Cup, and Carabao Cup. This includes the UK 3:00 PM Saturday blackout fixtures through our international English-commentary feeds (such as SuperSport Premier League, beIN Sports, and Optus Sport in 4K 60fps).',
  },
  {
    id: 'anti-freeze',
    category: 'Setup & Technical',
    question: 'What is Anti-Freeze server technology and how does it prevent buffering?',
    answer: 'Anti-Freeze technology is our proprietary server balancing mechanism that dynamically routes your video stream across redundant high-capacity UK and European CDN nodes. Even during massive traffic spikes (like Manchester Derby or Champions League Final), your stream remains smooth, crystal-clear, and buffer-free.',
  },
  {
    id: 'need-vpn',
    category: 'Setup & Technical',
    question: 'Do I need a VPN to use British Sports IPTV?',
    answer: 'A VPN is not strictly required because our servers use encrypted streaming protocols that work seamlessly on standard UK ISPs (BT, Virgin Media, Sky, TalkTalk, Vodafone). However, during peak football weekends, some UK ISPs attempt to throttle streaming ports; using an optional VPN (such as ExpressVPN, NordVPN, or Surfshark) can bypass ISP throttling easily.',
  },
  {
    id: 'payment-methods',
    category: 'Pricing & Trial',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major Visa, Mastercard, and American Express credit/debit cards, PayPal, direct UK bank transfers, and Cryptocurrency (Bitcoin, USDT). Prices can be paid in GBP (£), USD ($), or EUR (€) without extra conversion fees.',
  },
  {
    id: 'money-back',
    category: 'Pricing & Trial',
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes! If you experience persistent technical difficulties that our 24/7 technical team cannot resolve within 48 hours of your report, we provide a 100% full refund—no questions asked. Customer satisfaction is our top priority.',
  },
  {
    id: 'multi-device',
    category: 'General',
    question: 'Can I use my subscription on multiple devices at the same time?',
    answer: 'Yes, depending on your plan! The 3-Month plan includes 2 simultaneous connections, the 6-Month plan includes 3 connections, the 12-Month Pro includes 4 connections, and the Lifetime deal includes 5 simultaneous connections for the whole family.',
  },
];
