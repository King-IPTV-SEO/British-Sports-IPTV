import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, Tv, ArrowRight, ShieldCheck, Clock, Copy, Check } from 'lucide-react';
import { CONTACT_INFO } from '../data/pricing';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose }) => {
  const [device, setDevice] = useState('Amazon Firestick');
  const [app, setApp] = useState('IPTV Smarters Pro');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'email'>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello British Sports IPTV team! I would like to request a Free 24-Hour Trial for my ${device} using ${app}. My contact is: ${contactValue || 'via this chat'}. Please send my login details.`
  );
  const directWhatsAppUrl = `${CONTACT_INFO.whatsappUrl}?text=${whatsappMessage}`;

  const trialCode = `BST-TRIAL-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(trialCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Free 24-Hour UK IPTV Trial</h3>
              <p className="text-xs text-slate-400">20,000+ Channels · Full 4K Sports · No Credit Card</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Trust Badges */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Instant Activation</span>
                </div>
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Tv className="w-3.5 h-3.5" />
                  <span>4K Premier League</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Zero Payment Required</span>
                </div>
              </div>

              {/* Device Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  1. Which device will you use?
                </label>
                <select
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Amazon Firestick / Fire TV">Amazon Firestick / Fire TV (Recommended)</option>
                  <option value="Samsung Smart TV (Tizen)">Samsung Smart TV (Tizen)</option>
                  <option value="LG Smart TV (webOS)">LG Smart TV (webOS)</option>
                  <option value="Android TV / Nvidia Shield">Android TV / Nvidia Shield Box</option>
                  <option value="Apple TV 4K / iOS">Apple TV 4K / iOS (iPhone/iPad)</option>
                  <option value="Windows PC / Mac">Windows PC / Mac Computer</option>
                  <option value="MAG Box / STB">MAG Box / Formuler STB</option>
                  <option value="Other / Web Browser">Other / Web Browser</option>
                </select>
              </div>

              {/* Preferred App */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  2. Preferred IPTV Player App (Optional)
                </label>
                <select
                  value={app}
                  onChange={(e) => setApp(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="IPTV Smarters Pro">IPTV Smarters Pro (Standard & Easy)</option>
                  <option value="TiviMate IPTV Player">TiviMate IPTV Player (Best for Firestick/Android)</option>
                  <option value="IBO Player">IBO Player (Best for Samsung/LG Smart TVs)</option>
                  <option value="XCIPTV Player">XCIPTV Player</option>
                  <option value="I will need recommendations">I will need recommendations from support</option>
                </select>
              </div>

              {/* Contact Method */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    3. Where should we send your trial?
                  </label>
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setContactMethod('whatsapp')}
                      className={`font-semibold ${contactMethod === 'whatsapp' ? 'text-emerald-400' : 'text-slate-500'}`}
                    >
                      WhatsApp
                    </button>
                    <span className="text-slate-600">|</span>
                    <button
                      type="button"
                      onClick={() => setContactMethod('email')}
                      className={`font-semibold ${contactMethod === 'email' ? 'text-blue-400' : 'text-slate-500'}`}
                    >
                      Email
                    </button>
                  </div>
                </div>
                <input
                  type={contactMethod === 'whatsapp' ? 'tel' : 'email'}
                  placeholder={contactMethod === 'whatsapp' ? 'e.g. +44 7123 456789 (WhatsApp number)' : 'e.g. yourname@example.com'}
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Trial via WhatsApp (Fastest - 2 Mins)</span>
                </a>
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-center text-xs transition-colors"
                >
                  Submit Request on Website
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                🔒 No credit card or billing information required. Free 24h pass expires automatically.
              </p>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Your Trial Request Is Ready!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto mt-1">
                  We've reserved a 24-hour testing slot on our high-bitrate UK sports server for your <strong>{device}</strong>.
                </p>
              </div>

              {/* Generated Reference Code */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-left">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Trial Reference Code</span>
                  <span className="font-mono text-sm font-bold text-blue-400">{trialCode}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="px-2.5 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp to Receive Login Link</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-white underline py-1"
                >
                  Return to website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
