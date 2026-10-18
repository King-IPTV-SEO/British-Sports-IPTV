import React, { useState } from 'react';
import {
  Tv,
  Monitor,
  Cpu,
  Smartphone,
  Laptop,
  Layers,
  Clock,
  Award,
  CheckCircle,
  Download,
  AlertCircle,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { DEVICES, DeviceSetup } from '../data/devices';

interface DevicesViewProps {
  onOpenTrialModal: () => void;
}

export const DevicesView: React.FC<DevicesViewProps> = ({ onOpenTrialModal }) => {
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('firestick');

  const selectedDevice = DEVICES.find((d) => d.id === selectedDeviceId) || DEVICES[0];

  const getDeviceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Apple':
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      case 'HardDrive':
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3.5 py-1 rounded-full">
          Device Installation Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          How to Setup IPTV on Any Device
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Step-by-step guides for Amazon Firestick, Samsung & LG Smart TVs, Android boxes, Apple TV, and computers. Setup takes under 3 minutes.
        </p>
      </div>

      {/* Device Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {DEVICES.map((dev) => (
          <button
            key={dev.id}
            onClick={() => setSelectedDeviceId(dev.id)}
            className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 ${
              selectedDeviceId === dev.id
                ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20 scale-[1.02]'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className={selectedDeviceId === dev.id ? 'text-white' : 'text-blue-400'}>
                {getDeviceIcon(dev.iconName)}
              </div>
              {dev.popularBadge && (
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Popular
                </span>
              )}
            </div>
            <div>
              <div className="text-xs font-bold line-clamp-1">{dev.name}</div>
              <div className="text-[10px] opacity-75">{dev.setupTime} setup</div>
            </div>
          </button>
        ))}
      </div>

      {/* Active Device Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Overview & Recommended Apps */}
        <div className="lg:col-span-5 space-y-6">
          {/* Device Showcase Card */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                {selectedDevice.category}
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>{selectedDevice.setupTime}</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white">{selectedDevice.name}</h2>
            <p className="text-xs text-slate-300 leading-relaxed">{selectedDevice.summary}</p>

            {selectedDevice.downloaderCode && (
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Downloader Quick Code</span>
                  <span className="font-mono font-black text-amber-400 text-base">{selectedDevice.downloaderCode}</span>
                </div>
                <span className="text-[11px] text-slate-400">Enter in Downloader app</span>
              </div>
            )}
          </div>

          {/* Device Image Showcase */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl aspect-video relative">
            <img
              src="/src/assets/images/devices_streaming_setup_1792306504547.jpg"
              alt="4K Smart TV and Streaming Media Player Setup"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
              <span className="font-semibold">{selectedDevice.name}</span>
              <span className="text-emerald-400 font-bold">Tested & Verified 2026</span>
            </div>
          </div>

          {/* Recommended Apps */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Recommended Player Apps
            </h3>
            <div className="space-y-2.5">
              {selectedDevice.recommendedApps.map((app, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      {app.name}
                      {app.isPrimary && (
                        <span className="text-[9px] bg-blue-600/30 text-blue-300 px-1.5 py-0.2 rounded font-semibold border border-blue-500/40">
                          Recommended
                        </span>
                      )}
                    </span>
                    <span className="text-[11px] font-mono text-amber-400 font-bold">{app.rating}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Step-by-Step Installation Walkthrough */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">
                Step-by-Step Installation Instructions
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                Difficulty: {selectedDevice.difficulty}
              </span>
            </div>

            <div className="space-y-6">
              {selectedDevice.steps.map((st) => (
                <div key={st.stepNumber} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20 mt-0.5">
                    {st.stepNumber}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">{st.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{st.description}</p>
                    {st.tip && (
                      <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/20 text-xs text-blue-300 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span><strong>Pro Tip:</strong> {st.tip}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trial CTA inside guide */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left space-y-0.5">
                <span className="text-xs font-bold text-white">Need credentials to complete setup?</span>
                <p className="text-[11px] text-slate-400">Get an instant 24-hour test login for {selectedDevice.name}.</p>
              </div>
              <button
                onClick={onOpenTrialModal}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Free Setup Credentials</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
