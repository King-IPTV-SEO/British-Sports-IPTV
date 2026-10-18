import React, { useState } from 'react';
import { Volume2, VolumeX, Maximize2, Radio, Play, Pause, Zap } from 'lucide-react';
import { CHANNELS } from '../data/channels';

export const LiveTvSimulator: React.FC = () => {
  const [activeChannelIndex, setActiveChannelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const activeChannel = CHANNELS[activeChannelIndex] || CHANNELS[0];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Floating Ambient Live Badges */}
      <div className="flex items-center justify-between gap-2 mb-2 px-1">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Live Broadcast • 20,000+ Channels</span>
        </div>
        <div className="text-xs text-slate-400 font-medium hidden sm:block">
          Ultra HD 4K · 60 FPS · 0s Buffer
        </div>
      </div>

      {/* Modern TV Casing */}
      <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 shadow-2xl shadow-blue-900/30 border border-slate-700">
        {/* TV Screen Container */}
        <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 flex flex-col justify-between">
          {/* Main Visual Broadcast Image (Premier League Stadium) */}
          <img
            src="/src/assets/images/hero_premier_league_1792306503169.jpg"
            alt="Premier League 4K Match Live Stream Preview"
            className="absolute inset-0 w-full h-full object-cover transform scale-105 filter brightness-90 contrast-105"
            onError={(e) => {
              // Fallback gradient if file fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />

          {/* Broadcast Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />

          {/* Top Broadcast Bar (Scoreboard & Watermark) */}
          <div className="relative z-10 p-3 flex items-start justify-between">
            {/* Live Scoreboard Pill */}
            <div className="bg-black/85 backdrop-blur-md rounded-lg border border-white/10 px-3 py-1.5 flex items-center gap-3 shadow-lg">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[11px] font-black tracking-wider text-red-500 uppercase">LIVE</span>
              </div>
              <div className="h-3 w-px bg-white/20" />
              <div className="text-xs font-black tracking-wide text-white flex items-center gap-2 font-mono">
                <span>ARS</span>
                <span className="bg-blue-600 px-1.5 py-0.5 rounded text-white text-[11px]">2</span>
                <span className="text-slate-400">-</span>
                <span className="bg-slate-800 px-1.5 py-0.5 rounded text-white text-[11px]">1</span>
                <span>MCI</span>
              </div>
              <div className="h-3 w-px bg-white/20" />
              <span className="text-[11px] font-mono text-amber-400 font-bold">78:24</span>
            </div>

            {/* Quality & Resolution Tag */}
            <div className="flex items-center gap-2">
              <span className="bg-blue-600/90 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider shadow">
                4K UHD
              </span>
              <span className="bg-red-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider hidden sm:inline-block">
                60 FPS
              </span>
            </div>
          </div>

          {/* Middle Overlay: Interactive Channel Selector Drawer */}
          <div className="relative z-10 px-3 flex-1 flex items-center justify-end pointer-events-none">
            <div className="pointer-events-auto bg-slate-950/80 backdrop-blur-md rounded-xl p-2 border border-white/10 w-44 sm:w-52 space-y-1 shadow-2xl">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-0.5 flex items-center justify-between">
                <span>Fast Channel Switch</span>
                <Radio className="w-3 h-3 text-red-400" />
              </div>
              <div className="space-y-1 max-h-32 overflow-y-auto pr-1">
                {CHANNELS.slice(0, 5).map((ch, idx) => (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChannelIndex(idx)}
                    className={`w-full text-left px-2 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      activeChannelIndex === idx
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="truncate max-w-[110px] sm:max-w-[130px]">{ch.name}</span>
                    <span className="text-[9px] font-mono opacity-80">{ch.badge}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Broadcast Information & Controls */}
          <div className="relative z-10 p-3 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-blue-400 font-semibold mb-0.5">
                  <span className="px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {activeChannel.name}
                  </span>
                  <span>•</span>
                  <span className="text-slate-300">{activeChannel.category}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-1">
                  {activeChannel.epgNow}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-1">
                  Next: {activeChannel.epgNext}
                </p>
              </div>

              {/* TV Interactive Controls */}
              <div className="flex items-center gap-1.5 shrink-0 bg-slate-900/90 rounded-lg p-1 border border-slate-700">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-slate-800"
                  title={isPlaying ? 'Pause simulation' : 'Play simulation'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-slate-800"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                </button>
                <button
                  onClick={() => setActiveChannelIndex((activeChannelIndex + 1) % 5)}
                  className="px-2 py-1 text-[10px] font-bold bg-blue-600 text-white rounded hover:bg-blue-500 flex items-center gap-1"
                  title="Next Live Feed"
                >
                  <Zap className="w-3 h-3" />
                  <span>Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TV Metallic Stand */}
      <div className="w-28 h-3.5 bg-gradient-to-b from-slate-700 to-slate-800 mx-auto rounded-b-md shadow-lg" />
      <div className="w-44 h-1.5 bg-slate-700 mx-auto rounded-full shadow-md -mt-0.5" />

      {/* Ambient Floor Glow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-600/15 blur-xl pointer-events-none rounded-full" />
    </div>
  );
};
