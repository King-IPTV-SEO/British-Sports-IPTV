import React, { useState } from 'react';
import { X, CheckCircle, MessageCircle, ShieldCheck, Zap, Mail, ArrowRight } from 'lucide-react';
import { Plan, CurrencyCode, CURRENCIES, CONTACT_INFO } from '../data/pricing';

interface CheckoutModalProps {
  plan: Plan | null;
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  plan,
  isOpen,
  onClose,
  currency,
}) => {
  const [device, setDevice] = useState('Amazon Firestick');
  const [customerName, setCustomerName] = useState('');
  const [contactValue, setContactValue] = useState('');

  if (!isOpen || !plan) return null;

  const currentCurrency = CURRENCIES[currency];
  const convertedPrice = (plan.priceGBP * currentCurrency.rate).toFixed(2);

  const orderMessage = encodeURIComponent(
    `Hello British Sports IPTV team! I want to order the [${plan.duration} - ${plan.name} Plan] for ${currentCurrency.symbol}${convertedPrice}. My device is: ${device}. My contact: ${customerName ? customerName + ' (' + contactValue + ')' : 'via this chat'}. Please send payment options.`
  );
  const whatsappOrderUrl = `${CONTACT_INFO.whatsappUrl}?text=${orderMessage}`;
  const emailOrderUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(`Order: ${plan.duration} British Sports IPTV Plan`)}&body=${orderMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Order Confirmation</span>
              {plan.badge && (
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-bold">
                  {plan.badge}
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {plan.duration} — {plan.name} Plan
            </h3>
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
        <div className="p-6 space-y-5">
          {/* Price Summary Card */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block">Subscription Total</span>
              <div className="text-2xl font-black text-white font-mono">
                {currentCurrency.symbol}{convertedPrice}
                <span className="text-xs text-slate-400 font-sans font-normal ml-1">
                  {plan.periodLabel}
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-emerald-400 font-semibold block flex items-center gap-1 justify-end">
                <Zap className="w-3.5 h-3.5" />
                <span>Instant Activation</span>
              </span>
              <span className="text-[11px] text-slate-500">{plan.connections} Simultaneous Screens</span>
            </div>
          </div>

          {/* Key Features Included */}
          <div className="space-y-1.5 text-xs text-slate-300">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Package Includes:</span>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>20,000+ UK & Global Channels</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Premier League 4K Live</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>100K+ Movies & Series VOD</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Anti-Freeze 99.9% Server</span>
              </div>
            </div>
          </div>

          {/* Device Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Select your primary device for tailored setup instructions:
            </label>
            <select
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
            >
              <option value="Amazon Firestick / Fire TV">Amazon Firestick / Fire TV</option>
              <option value="Samsung Smart TV">Samsung Smart TV (Tizen)</option>
              <option value="LG Smart TV">LG Smart TV (webOS)</option>
              <option value="Android TV / Nvidia Shield">Android TV / Nvidia Shield</option>
              <option value="Apple TV 4K / iOS">Apple TV 4K / iOS</option>
              <option value="Windows PC / Mac">Windows PC / Mac</option>
              <option value="MAG Box / STB">MAG Box / Formuler STB</option>
            </select>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name (Optional)</label>
              <input
                type="text"
                placeholder="e.g. John S."
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Email / Phone</label>
              <input
                type="text"
                placeholder="For credentials dispatch"
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Complete Order via WhatsApp (Instant Setup)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={emailOrderUrl}
              className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-center text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Order via Email</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>48h Money-Back Guarantee</span>
            </span>
            <span>·</span>
            <span>No recurring subscription trap</span>
          </div>
        </div>
      </div>
    </div>
  );
};
