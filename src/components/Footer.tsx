import React from 'react';
import { Tv, MessageCircle, Send, Mail, ShieldCheck, Zap, Globe, Lock } from 'lucide-react';
import { CONTACT_INFO } from '../data/pricing';
import { NavView } from './Navbar';

interface FooterProps {
  onNavigate: (view: NavView) => void;
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTrialModal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-red-600 flex items-center justify-center text-white">
                <Tv className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white">
                  BritishSports<span className="text-red-500">IPTV</span>
                </span>
                <p className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase">
                  Premium • 4K Sports UK
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The United Kingdom's premier IPTV streaming provider. Enjoy 20,000+ live TV channels, comprehensive Premier League football, Champions League, Formula 1, and 100,000+ movies in 4K Ultra HD with zero buffering.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-700/80 hover:bg-emerald-600 rounded-lg transition-colors border border-emerald-600/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {CONTACT_INFO.whatsappNumber}</span>
              </a>
              <a
                href={CONTACT_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              >
                <Send className="w-4 h-4 text-blue-400" />
                <span>Telegram: @{CONTACT_INFO.telegramUsername}</span>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Subscription Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('channels')}
                  className="hover:text-blue-400 transition-colors"
                >
                  20K+ Channel List
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('devices')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Supported Devices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guide')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Setup Guide & EPG
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTrialModal}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  Free 24h Trial
                </button>
              </li>
            </ul>
          </div>

          {/* Supported Devices */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Devices & Apps</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Amazon Fire TV Stick 4K</li>
              <li>Samsung Smart TV (Tizen)</li>
              <li>LG Smart TV (webOS)</li>
              <li>Android Box & Nvidia Shield</li>
              <li>Apple TV 4K & iOS</li>
              <li>IPTV Smarters Pro & TiviMate</li>
            </ul>
          </div>

          {/* Guarantee & Compliance */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Guaranteed Quality</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant Credential Activation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Global UK Sports Streams</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Secure SSL Encrypted Checkout</span>
              </div>
              <p className="pt-2 text-[11px] text-slate-500 leading-normal">
                Direct WhatsApp: <strong className="text-emerald-400">{CONTACT_INFO.whatsappNumber}</strong> · Telegram: <strong className="text-blue-400">@{CONTACT_INFO.telegramUsername}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {CONTACT_INFO.brandName} LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('faq')} className="hover:text-slate-300">FAQ</button>
            <span>·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300">Support</button>
            <span>·</span>
            <span className="text-slate-600">High-Bitrate 4K Stream Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
