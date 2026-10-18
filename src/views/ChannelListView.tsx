import React, { useState, useMemo } from 'react';
import { Search, Radio, Tv, Sparkles, Filter, CheckCircle, MessageCircle } from 'lucide-react';
import { CHANNELS, CHANNEL_CATEGORIES, Channel } from '../data/channels';

interface ChannelListViewProps {
  onOpenTrialModal: () => void;
}

export const ChannelListView: React.FC<ChannelListViewProps> = ({ onOpenTrialModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Channels');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResolution, setSelectedResolution] = useState<string>('All');

  const filteredChannels = useMemo(() => {
    return CHANNELS.filter((ch) => {
      const matchesCategory =
        selectedCategory === 'All Channels' || ch.category === selectedCategory;
      const matchesQuery =
        searchQuery === '' ||
        ch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ch.epgNow.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesResolution =
        selectedResolution === 'All' || ch.resolution.includes(selectedResolution);

      return matchesCategory && matchesQuery && matchesResolution;
    });
  }, [selectedCategory, searchQuery, selectedResolution]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-900/30 border border-blue-500/20 px-3.5 py-1 rounded-full">
          20,000+ Channels & VOD
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Live UK & International Channel Directory
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Browse our extensive collection of high-bitrate live television networks. Stream all UK sports, movies, documentaries, and kids networks in 4K Ultra HD.
        </p>
      </div>

      {/* Search & Filter Controls */}
      <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Search Input */}
          <div className="sm:col-span-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search channel name, match, or TV show (e.g. Sky Sports, Arsenal, BBC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Resolution Filter */}
          <div className="sm:col-span-4 flex items-center gap-2">
            <span className="text-xs text-slate-400 font-semibold shrink-0">Quality:</span>
            <div className="grid grid-cols-3 gap-1 w-full bg-slate-950 p-1 rounded-xl border border-slate-700 text-xs">
              {['All', '4K', 'FHD'].map((res) => (
                <button
                  key={res}
                  onClick={() => setSelectedResolution(res)}
                  className={`py-1.5 rounded-lg font-semibold transition-colors ${
                    selectedResolution === res
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {CHANNEL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow'
                  : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Showing <strong className="text-white">{filteredChannels.length}</strong> channels in category{' '}
          <strong className="text-blue-400">"{selectedCategory}"</strong>
        </span>
        <button
          onClick={onOpenTrialModal}
          className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Test all channels on 24h trial</span>
        </button>
      </div>

      {/* Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredChannels.map((channel) => (
          <div
            key={channel.id}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              {/* Channel Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs text-white shadow-sm shrink-0 font-mono"
                    style={{ backgroundColor: channel.color }}
                  >
                    {channel.badge}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white line-clamp-1">{channel.name}</h3>
                    <span className="text-[11px] text-slate-400">{channel.category}</span>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shrink-0 ${
                    channel.resolution === '4K UHD'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}
                >
                  {channel.resolution}
                </span>
              </div>

              <p className="text-xs text-slate-400 line-clamp-2">{channel.tagline}</p>
            </div>

            {/* EPG Live Info */}
            <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-semibold text-white truncate">Now: {channel.epgNow}</span>
              </div>
              <div className="text-slate-400 truncate pl-3">
                Next: {channel.epgNext}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredChannels.length === 0 && (
        <div className="text-center py-12 p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <Tv className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No channels matched your search</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try searching a different league, broadcaster name, or reset your filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Channels');
              setSelectedResolution('All');
            }}
            className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom Conversion Prompt */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 text-center space-y-4">
        <h3 className="text-xl font-bold text-white">Want the Full 20,000+ M3U & Xtream Channel List?</h3>
        <p className="text-xs text-slate-400 max-w-md mx-auto">
          Start your free 24-hour test on Amazon Firestick, Smart TV, or Android box today. Instant automated credentials delivery.
        </p>
        <button
          onClick={onOpenTrialModal}
          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Request 24h Free Pass</span>
        </button>
      </div>
    </div>
  );
};
