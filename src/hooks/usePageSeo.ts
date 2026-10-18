import { useEffect } from 'react';
import { NavView } from '../components/Navbar';
import { CONTACT_INFO } from '../data/pricing';

export const usePageSeo = (view: NavView) => {
  useEffect(() => {
    let title = 'British Sports IPTV | 4K Live Sports & UK TV Streaming | Free 24h Trial';
    let description =
      'Watch 20,000+ UK & international live sports channels, Premier League, movies, and TV in 4K Ultra HD with instant activation and zero buffering on Firestick, Smart TV, and mobile.';
    let path = '/';
    let pageSchema: Record<string, any> | null = null;

    switch (view) {
      case 'home':
        title = 'British Sports IPTV | 4K Live Sports & UK TV Streaming | Free 24h Trial';
        description =
          'Watch 20,000+ UK & international live sports channels, Premier League, movies, and TV in 4K Ultra HD with instant activation and zero buffering on Firestick, Smart TV, and mobile.';
        path = '/';
        pageSchema = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'British Sports IPTV',
          url: 'https://britishsportsiptv.com/',
          description: description,
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://britishsportsiptv.com/channel-list?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        };
        break;

      case 'pricing':
        title = 'Subscription Pricing Plans | British Sports IPTV UK 2026';
        description =
          'Compare British Sports IPTV subscription plans: 3 Month (£19.99), 6 Month (£29.99), 12 Month (£45), and Lifetime Deal (£350). Fast UK sports servers with 4K streams.';
        path = '/pricing';
        pageSchema = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'British Sports IPTV 4K Subscription',
          description: description,
          brand: {
            '@type': 'Brand',
            name: 'British Sports IPTV',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '1420',
          },
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '19.99',
            highPrice: '350.00',
            priceCurrency: 'GBP',
            offerCount: '4',
          },
        };
        break;

      case 'channels':
        title = '20,000+ UK & Global Channel List | British Sports IPTV';
        description =
          'Browse the complete 20,000+ live TV channel directory. Sky Sports, TNT Sports, Premier League 4K, UK Entertainment, Sky Cinema, and international networks.';
        path = '/channel-list';
        pageSchema = {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'British Sports IPTV Channel Directory',
          description: description,
          numberOfItems: 20000,
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
        };
        break;

      case 'devices':
        title = 'IPTV Device Setup Guides | Firestick, Smart TV, Android & Apple TV';
        description =
          'Learn how to install British Sports IPTV on Amazon Fire TV Stick, Samsung/LG Smart TVs, Android Box, Apple TV, PC, and MAG in under 3 minutes.';
        path = '/devices';
        pageSchema = {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Install British Sports IPTV on Firestick and Smart TV',
          description: description,
          totalTime: 'PT3M',
          step: [
            {
              '@type': 'HowToStep',
              name: 'Install Downloader App',
              text: 'Search and install the Downloader application from your device app store.',
            },
            {
              '@type': 'HowToStep',
              name: 'Download IPTV Smarters Pro or TiviMate',
              text: 'Open Downloader, enter quick code 790143 or the direct download URL.',
            },
            {
              '@type': 'HowToStep',
              name: 'Login with Xtream Codes',
              text: 'Enter the server URL, username, and password received from British Sports IPTV.',
            },
          ],
        };
        break;

      case 'guide':
        title = 'IPTV Beginner & Optimization Guide | British Sports IPTV UK';
        description =
          'Master your IPTV streaming: Xtream Codes vs M3U playlists, EPG TV guide setup, buffer-free WiFi optimization, and UK ISP throttling solutions.';
        path = '/iptv-guide';
        pageSchema = {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Complete Guide to British IPTV Streaming and Buffer-Free Playback',
          description: description,
          author: {
            '@type': 'Organization',
            name: 'British Sports IPTV',
          },
        };
        break;

      case 'faq':
        title = 'Frequently Asked Questions (FAQ) | British Sports IPTV';
        description =
          'Got questions about British Sports IPTV? Read answers about device compatibility, Premier League live blackout games, VPNs, payments, and 24h trials.';
        path = '/faq';
        pageSchema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          name: 'British Sports IPTV FAQ',
          description: description,
        };
        break;

      case 'contact':
        title = '24/7 UK Support & WhatsApp Contact | British Sports IPTV';
        description = `Contact British Sports IPTV support 24/7 via WhatsApp (${CONTACT_INFO.whatsappNumber}), Telegram (@${CONTACT_INFO.telegramUsername}), or email for instant activation and technical assistance.`;
        path = '/contact';
        pageSchema = {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact British Sports IPTV Support',
          description: description,
          mainEntity: {
            '@type': 'Organization',
            name: 'British Sports IPTV',
            telephone: CONTACT_INFO.whatsappNumber,
            url: 'https://britishsportsiptv.com/',
            sameAs: [CONTACT_INFO.telegramUrl],
          },
        };
        break;
    }

    // Update Document Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://britishsportsiptv.com${path}`);

    // Update Twitter Cards
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://britishsportsiptv.com${path}`);
    }

    // Inject Dynamic Page-specific Schema.org JSON-LD
    let scriptEl = document.getElementById('dynamic-page-schema');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'dynamic-page-schema';
      scriptEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptEl);
    }
    if (pageSchema) {
      scriptEl.textContent = JSON.stringify(pageSchema);
    }
  }, [view]);
};
