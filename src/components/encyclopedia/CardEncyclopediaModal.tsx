import React, { useState } from 'react';
import { X, Search, Sparkles, ArrowLeft, Heart, Briefcase, MoonStar, Eye, BookOpen, Compass, ShieldAlert, Zap } from 'lucide-react';
import { Language, TarotCard } from '../../types/tarot';
import { TAROT_DECK } from '../../data/tarotDeck';
import { UI_TRANSLATIONS } from '../../data/translations';
import { audioService } from '../../services/audioService';
import { EsotericCorrespondenceService } from '../../services/esotericCorrespondenceService';

interface CardEncyclopediaModalProps {
  language: Language;
  onClose: () => void;
  initialCard?: TarotCard;
  onOpenSynergy?: (cards: TarotCard[]) => void;
}

export const CardEncyclopediaModal: React.FC<CardEncyclopediaModalProps> = ({
  language,
  onClose,
  initialCard,
  onOpenSynergy
}) => {
  const [filterSuit, setFilterSuit] = useState<'all' | 'major' | 'cups' | 'pentacles' | 'swords' | 'wands'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inspectedCard, setInspectedCard] = useState<TarotCard | null>(initialCard || null);
  const [activeTab, setActiveTab] = useState<'waite' | 'kabbalah' | 'upright' | 'reversed' | 'love' | 'career' | 'spiritual'>('waite');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (inspectedCard) {
          setInspectedCard(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inspectedCard, onClose]);

  const filteredCards = TAROT_DECK.filter(card => {
    if (filterSuit === 'major' && card.arcana !== 'major') return false;
    if (filterSuit === 'cups' && card.suit !== 'cups') return false;
    if (filterSuit === 'pentacles' && card.suit !== 'pentacles') return false;
    if (filterSuit === 'swords' && card.suit !== 'swords') return false;
    if (filterSuit === 'wands' && card.suit !== 'wands') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const eso = EsotericCorrespondenceService.getEsotericData(card.id);
      return (
        card.name[language].toLowerCase().includes(q) ||
        card.name.en.toLowerCase().includes(q) ||
        String(card.number).includes(q) ||
        card.element.toLowerCase().includes(q) ||
        card.uprightKeywords[language].some(k => k.toLowerCase().includes(q)) ||
        card.reversedKeywords[language].some(k => k.toLowerCase().includes(q)) ||
        (eso?.hebrewLetter && eso.hebrewLetter[language].toLowerCase().includes(q)) ||
        (eso?.goldenDawnTitle && eso.goldenDawnTitle[language].toLowerCase().includes(q)) ||
        (eso?.decanateAstrology && eso.decanateAstrology[language].toLowerCase().includes(q))
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

  const esoteric = inspectedCard ? EsotericCorrespondenceService.getEsotericData(inspectedCard.id) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[90vh] rounded-2xl bg-[#0c0a09] border border-[#292524] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Top Bar */}
        <div className="p-4 sm:p-5 border-b border-[#292524] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {inspectedCard && (
              <button
                onClick={() => setInspectedCard(null)}
                className="p-1.5 rounded-lg border border-[#292524] hover:bg-[#141210] text-[#a8a29e] hover:text-[#f5f5f4] mr-1"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {inspectedCard ? inspectedCard.name[language] : UI_TRANSLATIONS.codexBtn[language]}
              </h2>
              <p className="text-xs text-[#78716c] font-sans">
                {inspectedCard
                  ? `${inspectedCard.arcana === 'major' ? 'Major Arcana' : `Minor Arcana · ${inspectedCard.suit}`} • Element: ${inspectedCard.element}`
                  : 'A.E. Waite & Rider–Waite–Smith 78 Cards Esoteric Codex'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg border border-transparent hover:border-[#292524] text-[#78716c] hover:text-[#f5f5f4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        {!inspectedCard ? (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {/* Filter Tabs & Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 max-w-full text-xs font-sans">
                {filterTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      audioService.playCardHover();
                      setFilterSuit(tab.id as typeof filterSuit);
                    }}
                    className={`px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all ${
                      filterSuit === tab.id
                        ? 'bg-[#292524] text-[#f5f5f4] border-[#78716c] font-medium'
                        : 'bg-[#141210] hover:bg-[#1c1917] text-[#a8a29e] border-[#292524]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-60">
                <Search className="w-3.5 h-3.5 text-[#78716c] absolute left-3 top-2.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search card, meaning..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#141210] border border-[#292524] text-xs text-[#f5f5f4] placeholder-[#78716c] font-sans focus:outline-none focus:border-[#78716c]"
                />
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredCards.map(card => (
                <div
                  key={card.id}
                  onClick={() => {
                    audioService.playCardSlide();
                    setInspectedCard(card);
                  }}
                  className="p-1.5 rounded-xl bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#78716c] cursor-pointer transition-all flex flex-col space-y-1.5"
                >
                  <div className="relative w-full h-36 rounded-lg overflow-hidden bg-[#0c0a09] flex items-center justify-center border border-[#292524]">
                    <img
                      src={`/cards/${card.file}`}
                      alt={card.name[language]}
                      className="w-full h-full object-contain p-0.5"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center space-y-0.5">
                    <div className="text-xs font-serif font-bold text-[#f5f5f4] truncate">
                      {card.name[language]}
                    </div>
                    <div className="text-[10px] text-[#78716c] truncate font-sans">
                      {card.uprightKeywords[language][0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Single Card Inspector */
          <div className="flex-1 overflow-y-auto p-4 sm:p-7">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-4xl mx-auto items-start">
              <div className="md:col-span-4 flex flex-col items-center space-y-3">
                <div className="w-48 h-72 rounded-xl p-1 bg-[#0c0a09] border border-[#292524] overflow-hidden">
                  <img
                    src={`/cards/${inspectedCard.file}`}
                    alt={inspectedCard.name[language]}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="text-xs font-sans text-[#a8a29e] text-center space-y-1">
                  <div>Element: <b className="text-[#f5f5f4]">{inspectedCard.element}</b> • Valence: <b className="text-[#f5f5f4]">{inspectedCard.yesNo[language]}</b></div>
                  {esoteric?.chakraResonance && (
                    <div className="text-[11px] font-mono text-[#d8b4fe]">
                      ✦ Chakra: {esoteric.chakraResonance[language]}
                    </div>
                  )}
                  {esoteric?.timingSeason && (
                    <div className="text-[11px] font-mono text-[#93c5fd]">
                      Season: {esoteric.timingSeason[language]}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <div className="border-b border-[#292524] pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#f5f5f4] font-bold">
                      {inspectedCard.name[language]}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {onOpenSynergy && (
                        <button
                          onClick={() => {
                            audioService.playCardFlip();
                            onOpenSynergy([inspectedCard]);
                            onClose();
                          }}
                          className="px-2.5 py-1 rounded-md bg-[#1c1917] hover:bg-[#292524] border border-[#292524] text-[11px] font-mono text-[#f5f5f4] flex items-center space-x-1.5 transition-colors"
                        >
                          <Sparkles className="w-3 h-3 text-[#fde047]" />
                          <span>Synergy Studio</span>
                        </button>
                      )}
                      {esoteric?.goldenDawnTitle && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
                          {esoteric.goldenDawnTitle[language]}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-[#78716c] font-mono mt-0.5">
                    {inspectedCard.astrology[language]}
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-1 bg-[#141210] border border-[#292524] p-1 rounded-lg text-xs font-sans">
                  <button
                    onClick={() => setActiveTab('waite')}
                    className={`px-3 py-1 rounded text-xs flex items-center space-x-1 ${activeTab === 'waite' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Waite Key (1910)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('kabbalah')}
                    className={`px-3 py-1 rounded text-xs flex items-center space-x-1 ${activeTab === 'kabbalah' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Kabbalah & Decan</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('upright')}
                    className={`px-3 py-1 rounded text-xs ${activeTab === 'upright' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
                  >
                    Upright
                  </button>
                  <button
                    onClick={() => setActiveTab('reversed')}
                    className={`px-3 py-1 rounded text-xs ${activeTab === 'reversed' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
                  >
                    Reversed
                  </button>
                  <button
                    onClick={() => setActiveTab('love')}
                    className={`px-3 py-1 rounded text-xs ${activeTab === 'love' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
                  >
                    Love
                  </button>
                  <button
                    onClick={() => setActiveTab('career')}
                    className={`px-3 py-1 rounded text-xs ${activeTab === 'career' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
                  >
                    Career
                  </button>
                  <button
                    onClick={() => setActiveTab('spiritual')}
                    className={`px-3 py-1 rounded text-xs ${activeTab === 'spiritual' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
                  >
                    Spiritual
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed space-y-3">
                  {activeTab === 'waite' && (
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#f5f5f4] flex items-center space-x-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Arthur Edward Waite — The Pictorial Key to the Tarot (1910)</span>
                      </div>
                      <p className="italic text-[#f5f5f4] text-xs sm:text-sm leading-relaxed">
                        {esoteric?.waiteOriginalKey?.[language] || inspectedCard.uprightMeaning[language]}
                      </p>
                      <div className="pt-2 border-t border-[#292524] text-xs text-[#a8a29e]">
                        <span className="font-bold text-[#f5f5f4]">Sacred Symbols: </span>
                        {inspectedCard.symbolism[language].join(' • ')}
                      </div>
                    </div>
                  )}

                  {activeTab === 'kabbalah' && (
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#d8b4fe] flex items-center space-x-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Hermetic Order of the Golden Dawn & Kabbalistic Tree of Life</span>
                      </div>
                      {esoteric?.hebrewLetter && (
                        <div className="p-2.5 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs font-sans text-[#d8b4fe]">
                          <b>Hebrew Letter Attribution:</b> {esoteric.hebrewLetter[language]}
                        </div>
                      )}
                      {esoteric?.kabbalahTreeOfLife && (
                        <div className="p-2.5 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs font-sans text-[#a8a29e]">
                          <b>Tree of Life Path:</b> {esoteric.kabbalahTreeOfLife[language]}
                        </div>
                      )}
                      {esoteric?.decanateAstrology && (
                        <div className="p-2.5 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs font-sans text-[#93c5fd]">
                          <b>Astrological Decan / Ruler:</b> {esoteric.decanateAstrology[language]}
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'upright' && (
                    <div className="space-y-2">
                      <div className="text-xs text-[#f5f5f4] font-bold">Keywords: {inspectedCard.uprightKeywords[language].join(', ')}</div>
                      <p>{inspectedCard.uprightMeaning[language]}</p>
                    </div>
                  )}

                  {activeTab === 'reversed' && (
                    <div className="space-y-2">
                      <div className="text-xs text-[#fca5a5] font-bold">Keywords: {inspectedCard.reversedKeywords[language].join(', ')}</div>
                      <p>{inspectedCard.reversedMeaning[language]}</p>
                    </div>
                  )}

                  {activeTab === 'love' && (
                    <div className="space-y-2">
                      <div className="text-xs text-[#fca5a5] font-bold">Relational Dynamics:</div>
                      <p>{inspectedCard.loveMeaning.upright[language]}</p>
                    </div>
                  )}

                  {activeTab === 'career' && (
                    <div className="space-y-2">
                      <div className="text-xs text-[#f5f5f4] font-bold">Vocation & Material Prosperity:</div>
                      <p>{inspectedCard.careerMeaning.upright[language]}</p>
                    </div>
                  )}

                  {activeTab === 'spiritual' && (
                    <div className="space-y-2">
                      <div className="text-xs text-[#d8b4fe] font-bold">Soul Initiation:</div>
                      <p>{inspectedCard.spiritualMeaning.upright[language]}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2 pt-2 border-t border-[#292524] text-xs text-[#a8a29e] font-sans">
                  <div className="p-2.5 rounded-lg bg-[#141210] border border-[#292524] text-[#a8a29e]">
                    <b className="text-[#f5f5f4]">Oracle Advice:</b> {inspectedCard.advice[language]}
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#141210] border border-[#292524] text-[#a8a29e]">
                    <b className="text-[#fca5a5]">Shadow Warning:</b> {inspectedCard.shadowWarning[language]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
