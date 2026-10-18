import React, { useState } from 'react';
import { Menu, X, Tv, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, CurrencyCode, CURRENCIES } from '../data/pricing';

export type NavView = 'home' | 'pricing' | 'channels' | 'devices' | 'guide' | 'faq' | 'contact';

interface NavbarProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenTrialModal: () => void;
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenTrialModal,
  currency,
  onCurrencyChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: NavView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-900/60 via-indigo-950/80 to-blue-900/60 text-xs py-1.5 px-4 text-center border-b border-blue-500/20 text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300 font-medium">UK Sports Servers: <strong className="text-emerald-400">Online 100%</strong></span>
            <span className="text-slate-500">·</span>
            <span>Premier League, Champions League & F1 in 4K 60fps</span>
          </div>
          <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-3">
            <span className="text-slate-400">Currency:</span>
            <div className="inline-flex rounded-md bg-slate-900/80 p-0.5 border border-slate-700">
              {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
                <button
                  key={c}
                  onClick={() => onCurrencyChange(c)}
                  className={`px-2 py-0.5 text-xs font-semibold rounded transition-colors ${
                    currency === c
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {CURRENCIES[c].symbol} {c}
                </button>
              ))}
            </div>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +44 7418 378240</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar (3-Zone Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 shrink-0 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-red-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Tv className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white font-sans">
                BritishSports<span className="text-red-500">IPTV</span>
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-blue-400 uppercase">
              Premium • 4K Sports UK
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (single-line, whitespace-nowrap) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              currentView === 'home' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              currentView === 'pricing' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            Pricing Plans
          </button>
          <button
            onClick={() => handleNavClick('channels')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              currentView === 'channels' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            Channel List
          </button>
          <button
            onClick={() => handleNavClick('devices')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              currentView === 'devices' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            Devices & Apps
          </button>
          <button
            onClick={() => handleNavClick('guide')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              currentView === 'guide' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            Setup Guide
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              currentView === 'faq' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-white ${
              currentView === 'contact' ? 'text-blue-400 font-semibold' : ''
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={CONTACT_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5 text-blue-400" />
            <span>Join Telegram</span>
          </a>
          <button
            onClick={onOpenTrialModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 rounded-lg shadow-md shadow-emerald-900/30 transition-all hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Free 24h Trial</span>
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenTrialModal}
            className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg"
          >
            Trial
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentView === 'home' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentView === 'pricing' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Subscription Plans
            </button>
            <button
              onClick={() => handleNavClick('channels')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentView === 'channels' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              20,000+ Channel Directory
            </button>
            <button
              onClick={() => handleNavClick('devices')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentView === 'devices' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Firestick & Smart TV Setup
            </button>
            <button
              onClick={() => handleNavClick('guide')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentView === 'guide' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              IPTV Beginner Guide
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentView === 'faq' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                currentView === 'contact' ? 'bg-blue-600/20 text-blue-400 font-semibold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Contact Support
            </button>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Free 24h Trial (No Card)</span>
            </button>
            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5 text-blue-400" />
              <span>Join Telegram Updates</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
