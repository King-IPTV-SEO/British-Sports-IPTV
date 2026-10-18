import React, { useState } from 'react';
import { Navbar, NavView } from './components/Navbar';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { CheckoutModal } from './components/CheckoutModal';
import { HomeView } from './views/HomeView';
import { ChannelListView } from './views/ChannelListView';
import { DevicesView } from './views/DevicesView';
import { GuideView } from './views/GuideView';
import { ContactView } from './views/ContactView';
import { CurrencyCode, Plan, CONTACT_INFO } from './data/pricing';
import { MessageCircle, Send } from 'lucide-react';
import { usePageSeo } from './hooks/usePageSeo';

export default function App() {
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [currency, setCurrency] = useState<CurrencyCode>('GBP');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<Plan | null>(null);

  // Dynamically manage SEO, OpenGraph tags, and Schema.org JSON-LD for each page view
  usePageSeo(currentView);

  const handleNavigate = (view: NavView) => {
    if (view === 'pricing') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('pricing-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    if (view === 'faq') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById('faq-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlanForCheckout(plan);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
            onSelectPlan={handleSelectPlan}
            currency={currency}
          />
        )}

        {currentView === 'channels' && (
          <ChannelListView onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        )}

        {currentView === 'devices' && (
          <DevicesView onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        )}

        {currentView === 'guide' && (
          <GuideView onOpenTrialModal={() => setIsTrialModalOpen(true)} />
        )}

        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
      />

      {/* Interactive Overlays / Modals */}
      <FreeTrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />

      <CheckoutModal
        plan={selectedPlanForCheckout}
        isOpen={selectedPlanForCheckout !== null}
        onClose={() => setSelectedPlanForCheckout(null)}
        currency={currency}
      />

      {/* Floating Quick Action Widget (WhatsApp & Telegram) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={CONTACT_INFO.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
          aria-label="Join Telegram"
        >
          <Send className="w-5 h-5 text-white" />
          <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 text-slate-200 text-xs px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Telegram (@{CONTACT_INFO.telegramUsername})
          </span>
        </a>

        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-900/40 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 border border-slate-700 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            WhatsApp ({CONTACT_INFO.whatsappNumber})
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-slate-900 rounded-full" />
        </a>
      </div>
    </div>
  );
}
