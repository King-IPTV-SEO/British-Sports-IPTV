import React, { useState } from 'react';
import {
  Tv,
  CheckCircle,
  XCircle,
  Zap,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Monitor,
  Cpu,
  Smartphone,
  Laptop,
  Flame,
  Award,
  Layers,
  Film,
  Users,
} from 'lucide-react';
import { LiveTvSimulator } from '../components/LiveTvSimulator';
import { PLANS, Plan, CurrencyCode, CURRENCIES, CONTACT_INFO } from '../data/pricing';
import { FAQS } from '../data/faqs';
import { NavView } from '../components/Navbar';

interface HomeViewProps {
  onNavigate: (view: NavView) => void;
  onOpenTrialModal: () => void;
  onSelectPlan: (plan: Plan) => void;
  currency: CurrencyCode;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenTrialModal,
  onSelectPlan,
  currency,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const currentCurrency = CURRENCIES[currency];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-600/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-300 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>British Sports IPTV 2026</span>
                <span className="text-slate-500">·</span>
                <span className="text-blue-400">Fast 4K UK Streaming</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-sans">
                British Sports IPTV <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-red-400">
                  Fast 4K Streaming UK
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover the UK's leading sports streaming service in 2026. Watch <strong>20,000+ live UK and international channels</strong>, all Premier League fixtures, Champions League, Formula 1, and <strong>100,000+ movies in 4K Ultra HD</strong> with zero buffering. Works effortlessly on Amazon Firestick, Smart TV, and mobile.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => {
                    const pricingEl = document.getElementById('pricing-section');
                    if (pricingEl) pricingEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>View IPTV Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenTrialModal}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Free 24h IPTV Trial UK</span>
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">20K+</div>
                  <div className="text-xs text-slate-400 font-medium">Live UK Channels</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">100K+</div>
                  <div className="text-xs text-slate-400 font-medium">4K Movies & VOD</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">99.9%</div>
                  <div className="text-xs text-slate-400 font-medium">Anti-Freeze Uptime</div>
                </div>
              </div>
            </div>

            {/* Hero Right: Live TV Simulator Component */}
            <div className="lg:col-span-5 relative">
              <LiveTvSimulator />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Ticker Bar */}
      <section className="border-y border-slate-800/80 bg-slate-900/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-300 text-center">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>Instant Activation in 2 Mins</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Secure SSL Payment</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>No Contract · Cancel Anytime</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>Free 24h Trial UK · No Card</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (3 Steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3 py-1 rounded-full">
            Simple 3-Step Setup
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Start Streaming In 3 Easy Steps
          </h2>
          <p className="text-sm text-slate-400">
            No technician required. Most UK households are watching live 4K TV within 3 minutes of ordering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono font-black text-xl">
              1
            </div>
            <h3 className="text-lg font-bold text-white">Choose Your Subscription</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Select 3 Months, 6 Months, 12 Months, or Lifetime. Not sure yet? Start with our 100% free 24-hour trial to test your connection first.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-mono font-black text-xl">
              2
            </div>
            <h3 className="text-lg font-bold text-white">Connect via WhatsApp</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Message our 24/7 UK support team on WhatsApp or submit your order online. We verify your device and confirm everything before payment.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono font-black text-xl">
              3
            </div>
            <h3 className="text-lg font-bold text-white">Activate & Stream in 4K</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your M3U link and Xtream Codes arrive in 2 minutes. Paste into IPTV Smarters Pro, TiviMate, or IBO Player and enjoy your favorite sports.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Subscription Plans 3M, 6M, 12M & Lifetime
          </h2>
          <p className="text-sm text-slate-400">
            All British Sports IPTV plans include 20,000+ live channels, 4K streaming, anti-freeze servers, and instant setup.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((plan) => {
            const price = (plan.priceGBP * currentCurrency.rate).toFixed(2);
            const monthly = plan.monthlyEquivalentGBP > 0
              ? (plan.monthlyEquivalentGBP * currentCurrency.rate).toFixed(2)
              : null;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 border-2 border-blue-500 shadow-xl shadow-blue-500/20 lg:-translate-y-2'
                    : plan.isLifetime
                    ? 'bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/60 shadow-xl shadow-amber-500/10'
                    : 'bg-slate-900/90 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popular or Lifetime Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md whitespace-nowrap ${
                        plan.isPopular
                          ? 'bg-blue-600 text-white'
                          : 'bg-gradient-to-r from-amber-500 to-yellow-500 text-black'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="pt-1">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {plan.duration} IPTV
                    </div>
                    <div className="text-xl font-bold text-white">{plan.name}</div>
                  </div>

                  {/* Price Block */}
                  <div className="py-2 border-y border-slate-800/80">
                    <div className="flex items-baseline">
                      <span className="text-lg font-bold text-slate-300">{currentCurrency.symbol}</span>
                      <span className="text-4xl font-black text-white font-mono ml-0.5">{price}</span>
                      <span className="text-xs text-slate-400 ml-1.5">{plan.periodLabel}</span>
                    </div>
                    {monthly && (
                      <div className="text-xs text-emerald-400 font-semibold mt-1">
                        ≈ {currentCurrency.symbol}{monthly} / month equivalent
                      </div>
                    )}
                    {plan.isLifetime && (
                      <div className="text-xs text-amber-400 font-semibold mt-1">
                        Pay once · No monthly bills ever
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        {feat.included ? (
                          <CheckCircle
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              feat.isHighlighted
                                ? plan.isLifetime
                                  ? 'text-amber-400'
                                  : 'text-blue-400'
                                : 'text-emerald-400'
                            }`}
                          />
                        ) : (
                          <XCircle className="w-4 h-4 shrink-0 mt-0.5 text-slate-600" />
                        )}
                        <span className={!feat.included ? 'text-slate-500 line-through' : feat.isHighlighted ? 'font-semibold text-white' : ''}>
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Button */}
                <div className="pt-6">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 ${
                      plan.isPopular
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30'
                        : plan.isLifetime
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold shadow-amber-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    Select {plan.name} Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Trial Banner below pricing */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Want to test our streams on your Firestick or Smart TV first?</span>
            </h4>
            <p className="text-xs text-slate-400">
              Get an instant 24-hour pass with full 4K channels and zero buffering. No card details needed.
            </p>
          </div>
          <button
            onClick={onOpenTrialModal}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-2 shadow-lg shadow-emerald-900/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Claim 24h Free Trial</span>
          </button>
        </div>
      </section>

      {/* Live Sports Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 p-8 sm:p-12">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-slate-950/90 to-red-950/50 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>Live Sports Streaming UK</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl">
              Every Premier League Goal, F1 Lap & Championship Fight in 4K
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Never miss a 3:00 PM blackout game again. British Sports IPTV includes dedicated high-bitrate sports feeds with zero compression artifacts, crystal-clear 60fps frame rates, and English commentary.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-800">
              <div>
                <span className="text-3xl font-black text-white font-mono">500+</span>
                <p className="text-xs text-slate-400 font-medium">Dedicated Sports Feeds</p>
              </div>
              <div>
                <span className="text-3xl font-black text-blue-400 font-mono">4K UHD</span>
                <p className="text-xs text-slate-400 font-medium">Ultra High Definition</p>
              </div>
              <div>
                <span className="text-3xl font-black text-emerald-400 font-mono">0s</span>
                <p className="text-xs text-slate-400 font-medium">Buffer Latency Technology</p>
              </div>
              <div>
                <span className="text-3xl font-black text-amber-400 font-mono">24/7</span>
                <p className="text-xs text-slate-400 font-medium">Worldwide Live Matches</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('channels')}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Explore Sports Channel Directory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Lifestyle Moments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3 py-1 rounded-full">
            Real People · Real Moments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Made for Everyone Who Loves Premium TV
          </h2>
          <p className="text-sm text-slate-400">
            From packed matchday living rooms to quiet family movie nights, British Sports IPTV brings entertainment home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Sports with Friends */}
          <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/src/assets/images/friends_sports_viewing_1792306503581.jpg"
                alt="Friends watching live sports match on British Sports IPTV"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-slate-900/95 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                Live Sports IPTV
              </span>
              <h3 className="text-lg font-bold text-white">Every Game. Every League. Live.</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Stream 500+ sports channels in 4K with multiple connections so everyone in the house can watch their favorite teams.
              </p>
              <button
                onClick={() => onNavigate('pricing')}
                className="pt-2 text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <span>View Sports Plans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Family Movie Night */}
          <div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/src/assets/images/family_movie_night_1792306504453.jpg"
                alt="Family movie night streaming 4K cinema on British Sports IPTV"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-slate-900/95 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded">
                Cinema & VOD Library
              </span>
              <h3 className="text-lg font-bold text-white">100,000+ Movies & Boxsets</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cinema-fresh movie premieres, trending Netflix & HBO series, and dedicated kids channels with complete parental control.
              </p>
              <button
                onClick={() => onNavigate('channels')}
                className="pt-2 text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <span>Browse Movie Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Cable vs. British Sports IPTV Comparison Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3 py-1 rounded-full">
            Cost & Value Comparison
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Traditional UK Pay TV vs. British Sports IPTV
          </h2>
          <p className="text-sm text-slate-400">
            See why British households are switching away from overpriced cable packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Cable Card */}
          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">Traditional UK Cable / Satellite</span>
              <div className="text-3xl font-black text-slate-300 font-mono mt-1">£80 – £120 <span className="text-xs text-slate-500">/ month</span></div>
              <p className="text-xs text-slate-500 mt-1">Over £1,200+ spent every single year</p>
            </div>

            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Strict 18 to 24-month locked contracts with price hikes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Limited to ~300 channels with costly sports add-ons</span>
              </li>
              <li className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Expensive multi-room fees for extra TV sets (£15/mo each)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Requires dish installation or engineer home visits</span>
              </li>
              <li className="flex items-center gap-2.5">
                <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                <span>Expensive PPV boxing and UFC events charged separately (£25+)</span>
              </li>
            </ul>
          </div>

          {/* British Sports IPTV Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-950/80 via-slate-900 to-slate-900 border-2 border-blue-500 shadow-xl shadow-blue-500/10 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">British Sports IPTV</span>
              <div className="text-3xl font-black text-white font-mono mt-1">
                From £3.75 <span className="text-xs text-slate-400">/ month equiv.</span>
              </div>
              <p className="text-xs text-emerald-400 font-semibold mt-1">Save up to £1,100+ every year</p>
            </div>

            <ul className="space-y-3 text-xs text-slate-200">
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero contracts — Cancel or renew whenever you want</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>20,000+ Channels including all UK Sky, TNT & Global feeds</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Up to 5 simultaneous screens included without extra charge</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Installs instantly on your existing Firestick or Smart TV</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All major PPV events, boxing, and MMA included free</span>
              </li>
            </ul>

            <button
              onClick={() => onNavigate('pricing')}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider"
            >
              Switch to British Sports IPTV
            </button>
          </div>
        </div>
      </section>

      {/* Compatible Devices Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Stream on Any Device You Own</h3>
            <p className="text-xs text-slate-400">
              One subscription connects to your living room TV, bedroom Firestick, and mobile devices on the go.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <button
              onClick={() => onNavigate('devices')}
              className="p-4 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors flex flex-col items-center gap-2"
            >
              <Tv className="w-6 h-6 text-blue-400" />
              <span className="text-xs font-semibold text-white">Amazon Firestick</span>
            </button>
            <button
              onClick={() => onNavigate('devices')}
              className="p-4 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors flex flex-col items-center gap-2"
            >
              <Monitor className="w-6 h-6 text-indigo-400" />
              <span className="text-xs font-semibold text-white">Samsung & LG TV</span>
            </button>
            <button
              onClick={() => onNavigate('devices')}
              className="p-4 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors flex flex-col items-center gap-2"
            >
              <Cpu className="w-6 h-6 text-emerald-400" />
              <span className="text-xs font-semibold text-white">Android TV Box</span>
            </button>
            <button
              onClick={() => onNavigate('devices')}
              className="p-4 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors flex flex-col items-center gap-2"
            >
              <Smartphone className="w-6 h-6 text-pink-400" />
              <span className="text-xs font-semibold text-white">Apple & iOS</span>
            </button>
            <button
              onClick={() => onNavigate('devices')}
              className="p-4 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors flex flex-col items-center gap-2"
            >
              <Laptop className="w-6 h-6 text-amber-400" />
              <span className="text-xs font-semibold text-white">Windows & Mac</span>
            </button>
            <button
              onClick={() => onNavigate('devices')}
              className="p-4 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 transition-colors flex flex-col items-center gap-2"
            >
              <Layers className="w-6 h-6 text-purple-400" />
              <span className="text-xs font-semibold text-white">MAG & STB</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3 py-1 rounded-full">
            Help & Answers
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-400">
            Got questions about setup, devices, or streams? Here are answers to our most common queries.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={faq.id}
              className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors hover:border-slate-700"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 sm:p-5 text-left font-semibold text-sm sm:text-base text-white flex items-center justify-between gap-4 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-200 ${
                    openFaqIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaqIndex === index && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Experience British Sports in 4K?
            </h2>
            <p className="text-sm text-blue-200">
              Join thousands of UK viewers streaming Premier League, F1, and cinema favorites from just £19.99. No contracts, instant setup.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenTrialModal}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Claim Free 24h Pass</span>
            </button>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900/80 hover:bg-slate-900 text-white font-bold rounded-xl text-sm border border-white/20 flex items-center justify-center gap-2"
            >
              <span>Chat with UK Support (+44 7418 378240)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
