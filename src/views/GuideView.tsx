import React from 'react';
import { BookOpen, ShieldCheck, Wifi, Zap, Globe, MessageCircle, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/pricing';

interface GuideViewProps {
  onOpenTrialModal: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({ onOpenTrialModal }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3.5 py-1 rounded-full">
          Knowledge Base & Tutorials
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          British Sports IPTV Streaming Guide
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Learn how to get the most out of your 4K UK streaming subscription, configure TV guides, and eliminate buffering.
        </p>
      </div>

      {/* Guide Content Sections */}
      <div className="space-y-8">
        {/* Guide 1: Xtream Codes vs M3U */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5 text-blue-400">
            <Zap className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              1. Xtream Codes API vs. M3U Playlist URL: Which Should You Use?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            When you subscribe to British Sports IPTV, you receive two formats of login details: an <strong>M3U Playlist URL</strong> and <strong>Xtream Codes API Credentials</strong> (Server URL, Username, and Password).
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase">Xtream Codes API (Recommended)</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Best for modern apps like IPTV Smarters, TiviMate, and XCIPTV. Automatically separates live sports, movies, and series into dedicated libraries with complete EPG TV guides and fast metadata loading.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase">M3U Playlist URL</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ideal for VLC Media Player, Perfect Player, or simple media centers. A single web address that automatically loads all channel streams in raw playlist format.
              </p>
            </div>
          </div>
        </div>

        {/* Guide 2: Buffer-Free Tips */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5 text-emerald-400">
            <Wifi className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              2. How to Eliminate Buffering & Optimize Your Home Network
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            While British Sports IPTV uses dedicated 10Gbps UK streaming nodes with anti-freeze balancing, home network optimization ensures you receive flawless 60fps frame rates:
          </p>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Use 5GHz Wi-Fi or Ethernet:</strong> Connect your Firestick or Smart TV to the 5GHz Wi-Fi band or an Ethernet LAN adapter rather than crowded 2.4GHz Wi-Fi.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Restart Your Router Weekly:</strong> Clears memory caches and renews ISP connection leases for lower ping times during live sports.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Adjust Stream Buffer in App Settings:</strong> In TiviMate or IPTV Smarters, change "Buffer Size" from None to Normal or Large (3-5 seconds).</span>
            </li>
          </ul>
        </div>

        {/* Guide 3: VPN Best Practices */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-400">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              3. Do You Need a VPN for British Sports Streaming?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our servers work seamlessly without a VPN on all major UK broadband providers (BT, Virgin Media, Sky, TalkTalk, EE). However, during high-profile Premier League weekends, certain UK ISPs deploy automated traffic throttling on video streaming ports.
          </p>
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200 leading-relaxed flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <span>
              If you experience sudden slowdowns specifically between 3:00 PM and 5:00 PM on Saturdays, toggling on a VPN (connecting to a UK, Swiss, or Dutch server) completely prevents ISP throttling.
            </span>
          </div>
        </div>

        {/* Guide 4: EPG Setup */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2.5 text-indigo-400">
            <Globe className="w-5 h-5" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              4. How to Refresh and Configure Your EPG TV Guide
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            An Electronic Program Guide (EPG) shows what match or movie is playing right now and what is coming up next across all channels.
          </p>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-300 list-decimal pl-5">
            <li>In your IPTV player, navigate to <strong>Settings &gt; EPG Sources</strong>.</li>
            <li>Verify your EPG URL is active (our server sends this automatically).</li>
            <li>Click <strong>Update EPG</strong> or <strong>Sync Channels</strong> to download the latest 7-day British TV listings.</li>
          </ol>
        </div>
      </div>

      {/* Support CTA */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-center space-y-4 shadow-xl">
        <h3 className="text-xl font-bold text-white">Need Personal Setup Assistance?</h3>
        <p className="text-xs text-blue-200 max-w-md mx-auto">
          Our UK engineering team is available 24/7 on WhatsApp to guide you through setup on your specific television or streaming stick.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Message UK Support on WhatsApp</span>
          </a>
          <button
            onClick={onOpenTrialModal}
            className="px-6 py-3 bg-slate-900/90 hover:bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20"
          >
            Start Free 24h Test
          </button>
        </div>
      </div>
    </div>
  );
};
