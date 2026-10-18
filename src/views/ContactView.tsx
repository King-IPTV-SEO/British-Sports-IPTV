import React, { useState } from 'react';
import { MessageCircle, Send, Mail, Clock, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/pricing';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Question');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3.5 py-1 rounded-full">
          24/7 Dedicated Support
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          We're Here to Help You Stream
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Have a question about a channel, device setup, or custom multi-room packages? Contact our UK support team anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Direct Contact Hub */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Direct */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">WhatsApp 24/7 Live Support</h3>
                <span className="text-xs text-emerald-400 font-mono font-bold">{CONTACT_INFO.whatsappNumber}</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fastest way to get trial activation codes, billing questions answered, or custom playlist configurations. Available 24/7.
            </p>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-center text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with {CONTACT_INFO.whatsappNumber}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Telegram Channel */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/40">
                <Send className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Telegram Direct</h3>
                <span className="text-xs text-blue-400 font-mono font-bold">@{CONTACT_INFO.telegramUsername}</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly on Telegram for instant fixture announcements, 4K stream updates, and VIP account setup.
            </p>
            <a
              href={CONTACT_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-center text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700"
            >
              <Send className="w-4 h-4 text-blue-400" />
              <span>Open @{CONTACT_INFO.telegramUsername} on Telegram</span>
            </a>
          </div>

          {/* Email Support */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Direct Email</h3>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-xs text-blue-400 hover:text-blue-300 underline font-mono"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <p className="text-xs text-slate-400">
              For corporate inquiries, partner affiliate programs, and detailed technical logs.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Support Ticket Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-white">Send Us a Direct Message</h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the details below and an on-duty UK technician will respond shortly.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email or Phone Number</label>
                    <input
                      type="text"
                      required
                      placeholder="For our reply"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Subject / Inquiry Type</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Free Trial Request">Free 24h Trial Request</option>
                    <option value="Device Setup Assistance">Device Setup Assistance (Firestick/Smart TV)</option>
                    <option value="Billing & Payment Methods">Billing & Payment Methods</option>
                    <option value="Channel Request">Request a Channel or League</option>
                    <option value="Technical Issue">Technical / Buffering Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how we can help you..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg shadow-blue-600/20"
                >
                  Send Inquiry Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Thank You, {name || 'Customer'}!</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
                    Your inquiry regarding "{subject}" has been received. Our support team will respond to <strong>{email}</strong> within 15-30 minutes.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Need Immediate Live Assistance? Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
