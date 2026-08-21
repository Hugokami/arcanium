import React, { useState } from 'react';
import { X, Search, Sparkles, ArrowLeft, Heart, Briefcase, MoonStar, Eye } from 'lucide-react';
import { Language, TarotCard } from '../../types/tarot';
import { TAROT_DECK } from '../../data/tarotDeck';
import { UI_TRANSLATIONS } from '../../data/translations';
import { audioService } from '../../services/audioService';

interface CardEncyclopediaModalProps {
  language: Language;
  onClose: () => void;
  initialCard?: TarotCard;
}

export const CardEncyclopediaModal: React.FC<CardEncyclopediaModalProps> = ({
  language,
  onClose,
  initialCard
}) => {
  const [filterSuit, setFilterSuit] = useState<'all' | 'major' | 'cups' | 'pentacles' | 'swords' | 'wands'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedCard, setInspectedCard] = useState<TarotCard | null>(initialCard || null);
  const [activeTab, setActiveTab] = useState<'upright' | 'reversed' | 'love' | 'career' | 'spiritual'>('upright');

  const filteredCards = TAROT_DECK.filter(card => {
    if (filterSuit === 'major' && card.arcana !== 'major') return false;
    if (filterSuit === 'cups' && card.suit !== 'cups') return false;
    if (filterSuit === 'pentacles' && card.suit !== 'pentacles') return false;
    if (filterSuit === 'swords' && card.suit !== 'swords') return false;
    if (filterSuit === 'wands' && card.suit !== 'wands') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        card.name[language].toLowerCase().includes(q) ||
        card.name.en.toLowerCase().includes(q) ||
        card.uprightKeywords[language].some(k => k.toLowerCase().includes(q)) ||
        card.reversedKeywords[language].some(k => k.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const filterTabs = [
    { id: 'all', label: language === 'my' ? 'ကတ် ၇၈ ပြားလုံး' : language === 'ja' ? '全78枚' : 'All 78 Cards' },
    { id: 'major', label: language === 'my' ? 'Major Arcana (၂၂)' : language === 'ja' ? '大アルカナ（22枚）' : 'Major Arcana (22)' },
    { id: 'cups', label: language === 'my' ? 'ဖလား (Cups)' : language === 'ja' ? 'カップ（聖杯）' : 'Cups (Water)' },
    { id: 'pentacles', label: language === 'my' ? 'ဒင်္ဂါး (Pentacles)' : language === 'ja' ? 'ペンタクル（金貨）' : 'Pentacles (Earth)' },
    { id: 'swords', label: language === 'my' ? 'ဓား (Swords)' : language === 'ja' ? 'ソード（剣）' : 'Swords (Air)' },
    { id: 'wands', label: language === 'my' ? 'သစ်သားလှံတံ (Wands)' : language === 'ja' ? 'ワンド（棍棒）' : 'Wands (Fire)' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl h-[90vh] rounded-2xl p-1 bg-gradient-to-b from-[#d4af37]/40 via-[#8a7326]/20 to-[#140c2d] border border-[#8a7326] shadow-2xl overflow-hidden flex flex-col">
        
        <div className="rounded-xl w-full h-full bg-[#0e0720] flex flex-col overflow-hidden">
          
          {/* Top Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {inspectedCard && (
                <button
                  onClick={() => setInspectedCard(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#d4af37] mr-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div>
                <h2 className="text-base sm:text-xl font-serif font-bold text-[#d4af37]">
                  {inspectedCard ? inspectedCard.name[language] : UI_TRANSLATIONS.codexBtn[language]}
                </h2>
                <p className="text-xs text-zinc-400 font-serif">
                  {inspectedCard
                    ? `${inspectedCard.arcana === 'major' ? 'Major Arcana' : `Minor Arcana · ${inspectedCard.suit}`} • Element: ${inspectedCard.element}`
                    : 'Rider–Waite–Smith 78 Cards Encyclopedia'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          {!inspectedCard ? (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* Filter Tabs & Search */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-1 overflow-x-auto pb-1 max-w-full text-xs font-serif">
                  {filterTabs.map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        audioService.playCardHover();
                        setFilterSuit(tab.id as typeof filterSuit);
                      }}
                      className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                        filterSuit === tab.id
                          ? 'bg-[#d4af37] text-black font-bold shadow-gold-glow'
                          : 'bg-white/5 hover:bg-white/10 text-zinc-400'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-60">
                  <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search card, meaning..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-200 placeholder-zinc-500 font-serif focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                {filteredCards.map(card => (
                  <div
                    key={card.id}
                    onClick={() => {
                      audioService.playCardSlide();
                      setInspectedCard(card);
                    }}
                    className="group rounded-xl p-1 bg-white/5 hover:bg-[#d4af37]/15 border border-white/5 hover:border-[#d4af37] cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-md flex flex-col"
                  >
                    <div className="relative w-full h-40 rounded-lg overflow-hidden bg-black flex items-center justify-center">
                      <img
                        src={`/cards/${card.file}`}
                        alt={card.name[language]}
                        className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-1.5 text-center space-y-0.5">
                      <div className="text-xs font-serif font-bold text-[#d4af37] truncate">
                        {card.name[language]}
                      </div>
                      <div className="text-[10px] text-zinc-400 truncate font-serif">
                        {card.uprightKeywords[language][0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Single Card Inspector */
            <div className="flex-1 overflow-y-auto p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-4xl mx-auto">
                <div className="md:col-span-4 flex flex-col items-center space-y-3">
                  <div className="w-52 h-84 rounded-xl p-1 bg-black border border-[#d4af37] shadow-gold-glow overflow-hidden">
                    <img
                      src={`/cards/${inspectedCard.file}`}
                      alt={inspectedCard.name[language]}
                      className="w-full h-full object-contain bg-black rounded-lg"
                    />
                  </div>
                  <div className="text-xs font-serif text-amber-300/80 text-center">
                    Element: {inspectedCard.element} • Valence: {inspectedCard.yesNo[language]}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-5">
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="text-2xl font-serif text-[#d4af37]">
                      {inspectedCard.name[language]}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      {inspectedCard.astrology[language]}
                    </p>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center space-x-1 bg-white/5 p-1 rounded-xl text-xs font-serif">
                    <button
                      onClick={() => setActiveTab('upright')}
                      className={`px-3 py-1.5 rounded-lg ${activeTab === 'upright' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400'}`}
                    >
                      Upright
                    </button>
                    <button
                      onClick={() => setActiveTab('reversed')}
                      className={`px-3 py-1.5 rounded-lg ${activeTab === 'reversed' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400'}`}
                    >
                      Reversed
                    </button>
                    <button
                      onClick={() => setActiveTab('love')}
                      className={`px-3 py-1.5 rounded-lg ${activeTab === 'love' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400'}`}
                    >
                      Love
                    </button>
                    <button
                      onClick={() => setActiveTab('career')}
                      className={`px-3 py-1.5 rounded-lg ${activeTab === 'career' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400'}`}
                    >
                      Career
                    </button>
                    <button
                      onClick={() => setActiveTab('spiritual')}
                      className={`px-3 py-1.5 rounded-lg ${activeTab === 'spiritual' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400'}`}
                    >
                      Spiritual
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-[#e8e0f5] font-serif leading-relaxed">
                    {activeTab === 'upright' && (
                      <div className="space-y-2">
                        <div className="text-xs text-[#d4af37]">Keywords: {inspectedCard.uprightKeywords[language].join(', ')}</div>
                        <p>{inspectedCard.uprightMeaning[language]}</p>
                      </div>
                    )}
                    {activeTab === 'reversed' && (
                      <div className="space-y-2">
                        <div className="text-xs text-[#c77dff]">Keywords: {inspectedCard.reversedKeywords[language].join(', ')}</div>
                        <p>{inspectedCard.reversedMeaning[language]}</p>
                      </div>
                    )}
                    {activeTab === 'love' && (
                      <p>{inspectedCard.loveMeaning.upright[language]}</p>
                    )}
                    {activeTab === 'career' && (
                      <p>{inspectedCard.careerMeaning.upright[language]}</p>
                    )}
                    {activeTab === 'spiritual' && (
                      <p>{inspectedCard.spiritualMeaning.upright[language]}</p>
                    )}
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-zinc-300 font-serif">
                    <div><b className="text-[#d4af37]">Advice:</b> {inspectedCard.advice[language]}</div>
                    <div><b className="text-rose-300">Shadow Warning:</b> {inspectedCard.shadowWarning[language]}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
