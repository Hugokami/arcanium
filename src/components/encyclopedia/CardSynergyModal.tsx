import React, { useState, useMemo, useEffect } from 'react';
import { X, Sparkles, Plus, Trash2, ArrowRight, Zap, RefreshCw, Search } from 'lucide-react';
import { Language, TarotCard } from '../../types/tarot';
import { TAROT_DECK } from '../../data/tarotDeck';
import { TarotSynergyService } from '../../services/tarotSynergyService';
import { audioService } from '../../services/audioService';

interface CardSynergyModalProps {
  language: Language;
  onClose: () => void;
  initialCards?: TarotCard[];
}

export const CardSynergyModal: React.FC<CardSynergyModalProps> = ({
  language,
  onClose,
  initialCards = []
}) => {
  const [selectedCards, setSelectedCards] = useState<TarotCard[]>(() => {
    if (initialCards && initialCards.length > 0) {
      return initialCards.slice(0, 3);
    }
    // Default preset: The Magician & The High Priestess
    const mag = TAROT_DECK.find(c => c.id === 'magician') || TAROT_DECK[1];
    const priestess = TAROT_DECK.find(c => c.id === 'high_priestess') || TAROT_DECK[2];
    return [mag, priestess];
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [targetSlotIndex, setTargetSlotIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isPickerOpen) setIsPickerOpen(false);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPickerOpen, onClose]);

  const synergy = useMemo(() => {
    return TarotSynergyService.compareCards(selectedCards, language);
  }, [selectedCards, language]);

  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) return TAROT_DECK;
    const q = searchQuery.toLowerCase();
    return TAROT_DECK.filter(c =>
      c.name.en.toLowerCase().includes(q) ||
      (c.name.my && c.name.my.includes(q)) ||
      (c.name.ja && c.name.ja.includes(q))
    );
  }, [searchQuery]);

  const handleSelectCardForSlot = (card: TarotCard) => {
    audioService.playCardSlide();
    if (targetSlotIndex !== null && targetSlotIndex < selectedCards.length) {
      const next = [...selectedCards];
      next[targetSlotIndex] = card;
      setSelectedCards(next);
    } else if (selectedCards.length < 3) {
      setSelectedCards([...selectedCards, card]);
    }
    setIsPickerOpen(false);
    setTargetSlotIndex(null);
  };

  const handleRemoveCard = (index: number) => {
    if (selectedCards.length <= 2) return; // Keep at least 2 cards for synergy
    audioService.playCardSlide();
    const next = selectedCards.filter((_, i) => i !== index);
    setSelectedCards(next);
  };

  const handleLoadPreset = (presetIds: string[]) => {
    audioService.playCardFlip();
    const loaded = presetIds
      .map(id => TAROT_DECK.find(c => c.id.toLowerCase() === id.toLowerCase()))
      .filter((c): c is TarotCard => !!c);
    if (loaded.length >= 2) {
      setSelectedCards(loaded);
    }
  };

  const titles = {
    title: { en: 'Tarot Synergy & Comparison Studio', my: 'တာရော့ ကတ် ၂~၃ ခု စွမ်းအင် ပေါင်းစပ်နှိုင်းယှဉ်ခန်း', ja: 'タロット相乗効果・カード比較スタジオ' },
    sub: { en: 'Cross-evaluate elemental alchemy, numerological synthesis & archetype dynamics', my: 'ဓာတ်ကြီးလေးပါး အချိုးညီမှု၊ ဂဏန်းဗေဒင်နှင့် အတွင်းစိတ်စွမ်းအင် ပေါင်းစပ်မှုကို လေ့လာပါ', ja: '四元素の錬金術・数秘術の統合・象徴の共鳴を多角的に解き明かす' },
    slotEmpty: { en: 'Select Card', my: 'ကတ်ရွေးချယ်ပါ', ja: 'カードを選択' },
    presets: { en: 'Sacred Signature Presets', my: 'ထင်ရှားသော စွမ်းအင်တွဲဖက် နမူနာများ', ja: '代表的な神聖ペア' },
    chemistry: { en: 'Harmonic Chemistry', my: 'စွမ်းအင် လိုက်ဖက်ညီမှု', ja: '調和ケミストリー' },
    composite: { en: 'Numerological Composite Archetype', my: 'ဂဏန်းဗေဒင် စုစည်းစွမ်းအင်', ja: '数秘術的統合元型' },
    synthesis: { en: 'Interlocking Esoteric Synthesis', my: 'နက်နဲသော စွမ်းအင်ပေါင်းစပ် သုံးသပ်ချက်', ja: '複合的シンセシス' },
    guidance: { en: 'Hermetic Action Guidance', my: 'လက်တွေ့ လမ်းညွှန်ချက်', ja: '実践的アドバイス' }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] rounded-2xl bg-[#0c0a09] border border-[#292524] overflow-hidden flex flex-col shadow-2xl text-[#f5f5f4]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#292524] bg-[#141210] flex items-center justify-between flex-shrink-0">
          <div className="space-y-0.5">
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[10px] font-mono tracking-widest text-[#a8a29e] uppercase">
              <Zap className="w-3 h-3 text-[#fde047]" />
              <span>Esoteric Synergy Engine</span>
            </div>
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
              {titles.title[language]}
            </h2>
            <p className="text-xs text-[#78716c] font-sans">
              {titles.sub[language]}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-transparent hover:border-[#292524] text-[#78716c] hover:text-[#f5f5f4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 font-sans text-xs">
          
          {/* Card Slots Bar (2 or 3 Cards) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#78716c] uppercase tracking-wider">
                Active Card Matrix ({selectedCards.length}/3)
              </span>
              {selectedCards.length < 3 && (
                <button
                  onClick={() => {
                    setTargetSlotIndex(null);
                    setIsPickerOpen(true);
                  }}
                  className="inline-flex items-center space-x-1 text-[11px] font-mono text-[#a8a29e] hover:text-[#f5f5f4]"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add 3rd Card</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {selectedCards.map((card, idx) => (
                <div
                  key={card.id + idx}
                  className="relative group p-3 rounded-xl bg-[#141210] border border-[#292524] hover:border-[#78716c] transition-all flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between space-x-2">
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#78716c]">
                      Card {idx + 1}
                    </span>

                    {selectedCards.length > 2 && (
                      <button
                        onClick={() => handleRemoveCard(idx)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-[#78716c] hover:text-[#fca5a5] transition-opacity"
                        title="Remove Card"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  <div className="py-2.5 text-center space-y-1">
                    <div className="text-xs sm:text-sm font-serif font-bold text-[#f5f5f4] line-clamp-1">
                      {card.name[language] || card.name.en}
                    </div>
                    <div className="text-[10px] font-mono text-[#a8a29e]">
                      {card.element || (card.suit ? card.suit.toUpperCase() : 'SPIRIT')} • {card.arcana.toUpperCase()}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setTargetSlotIndex(idx);
                      setIsPickerOpen(true);
                    }}
                    className="w-full py-1 rounded-md bg-[#1c1917] hover:bg-[#292524] text-[10px] font-mono text-[#a8a29e] hover:text-[#f5f5f4] border border-[#292524] transition-colors"
                  >
                    Change Card
                  </button>
                </div>
              ))}

              {selectedCards.length < 3 && (
                <button
                  onClick={() => {
                    setTargetSlotIndex(null);
                    setIsPickerOpen(true);
                  }}
                  className="h-full min-h-[110px] rounded-xl border border-dashed border-[#292524] hover:border-[#78716c] bg-[#0c0a09]/50 flex flex-col items-center justify-center space-y-1.5 text-[#78716c] hover:text-[#f5f5f4] transition-all"
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-[11px] font-mono">{titles.slotEmpty[language]}</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Presets Carousel */}
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] text-[#78716c] uppercase tracking-wider block">
              {titles.presets[language]}
            </span>
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-[11px] font-sans scrollbar-none">
              <button
                onClick={() => handleLoadPreset(['lovers', 'cups02'])}
                className="px-2.5 py-1 rounded-lg bg-[#141210] border border-[#292524] hover:border-[#78716c] text-[#a8a29e] hover:text-[#f5f5f4] whitespace-nowrap transition-colors"
              >
                Lovers + 2 of Cups (Soulmate)
              </button>
              <button
                onClick={() => handleLoadPreset(['tower', 'death'])}
                className="px-2.5 py-1 rounded-lg bg-[#141210] border border-[#292524] hover:border-[#78716c] text-[#a8a29e] hover:text-[#f5f5f4] whitespace-nowrap transition-colors"
              >
                Tower + Death (Rebirth)
              </button>
              <button
                onClick={() => handleLoadPreset(['magician', 'high_priestess'])}
                className="px-2.5 py-1 rounded-lg bg-[#141210] border border-[#292524] hover:border-[#78716c] text-[#a8a29e] hover:text-[#f5f5f4] whitespace-nowrap transition-colors"
              >
                Magician + Priestess (Hermetic Twin)
              </button>
              <button
                onClick={() => handleLoadPreset(['star', 'sun', 'world'])}
                className="px-2.5 py-1 rounded-lg bg-[#141210] border border-[#292524] hover:border-[#78716c] text-[#a8a29e] hover:text-[#f5f5f4] whitespace-nowrap transition-colors"
              >
                Star + Sun + World (Ascension Trinity)
              </button>
            </div>
          </div>

          {/* Analysis Dashboard Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            
            {/* 1. Elemental Relation Card */}
            <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#78716c] uppercase tracking-wider">
                  Elemental Alchemy
                </span>
                <span
                  className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                    synergy.elementalRelation.type === 'harmonic'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                      : synergy.elementalRelation.type === 'support'
                      ? 'bg-blue-950 text-blue-300 border border-blue-800/40'
                      : synergy.elementalRelation.type === 'tension'
                      ? 'bg-amber-950 text-amber-300 border border-amber-800/40'
                      : 'bg-[#1c1917] text-[#a8a29e] border border-[#292524]'
                  }`}
                >
                  {synergy.elementalRelation.type}
                </span>
              </div>

              <div className="text-xs sm:text-sm font-serif font-bold text-[#f5f5f4]">
                {synergy.elementalRelation.title[language]}
              </div>

              <p className="text-[#a8a29e] text-[11px] leading-relaxed">
                {synergy.elementalRelation.description[language]}
              </p>
            </div>

            {/* 2. Harmonic Chemistry & Numerology Card */}
            <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#78716c] uppercase tracking-wider">
                  {titles.chemistry[language]}
                </span>
                <span className="text-sm font-mono font-bold text-[#f5f5f4]">
                  {synergy.chemistryScore}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-[#1c1917] border border-[#292524] overflow-hidden">
                <div
                  className="h-full bg-[#f5f5f4] rounded-full transition-all"
                  style={{ width: `${synergy.chemistryScore}%` }}
                />
              </div>

              <div className="pt-1 space-y-1">
                <span className="font-mono text-[10px] text-[#78716c] uppercase block">
                  {titles.composite[language]}:
                </span>
                <div className="text-xs font-serif font-bold text-[#f5f5f4]">
                  ✦ {synergy.compositeArchetype.name[language]}
                </div>
                <p className="text-[11px] text-[#a8a29e] leading-snug">
                  {synergy.compositeArchetype.meaning[language]}
                </p>
              </div>
            </div>

          </div>

          {/* Interlocking Esoteric Synthesis Box */}
          <div className="p-4 rounded-xl bg-[#1c1917] border border-[#78716c]/40 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#f5f5f4]">
              <Sparkles className="w-3.5 h-3.5 text-[#fde047]" />
              <span>{titles.synthesis[language]}</span>
            </div>
            <p className="text-xs text-[#f5f5f4] leading-relaxed">
              {synergy.interlockingInsight[language]}
            </p>
          </div>

          {/* Action Guidance */}
          <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-1.5">
            <span className="font-mono text-[10px] text-[#78716c] uppercase tracking-wider block">
              {titles.guidance[language]}
            </span>
            <p className="text-[11px] text-[#a8a29e] leading-relaxed">
              {synergy.advice[language]}
            </p>
          </div>

        </div>

      </div>

      {/* 78-Card Picker Modal Drawer */}
      {isPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl max-h-[80vh] rounded-2xl bg-[#0c0a09] border border-[#292524] flex flex-col shadow-2xl text-[#f5f5f4] overflow-hidden">
            <div className="p-4 border-b border-[#292524] bg-[#141210] flex items-center justify-between">
              <span className="font-serif font-bold text-sm text-[#f5f5f4]">
                Choose Card from 78-Card Codex
              </span>
              <button
                onClick={() => setIsPickerOpen(false)}
                className="p-1 rounded text-[#78716c] hover:text-[#f5f5f4]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-3 border-b border-[#292524] bg-[#0c0a09]">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#78716c]" />
                <input
                  type="text"
                  placeholder="Search card name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#141210] border border-[#292524] text-xs text-[#f5f5f4] focus:outline-none focus:border-[#78716c]"
                />
              </div>
            </div>

            {/* Cards Grid */}
            <div className="flex-1 overflow-y-auto p-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {filteredCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleSelectCardForSlot(card)}
                  className="p-2.5 rounded-lg bg-[#141210] border border-[#292524] hover:border-[#78716c] text-left transition-all hover:scale-[1.02]"
                >
                  <div className="text-xs font-serif font-bold text-[#f5f5f4] truncate">
                    {card.name[language] || card.name.en}
                  </div>
                  <div className="text-[10px] font-mono text-[#78716c] pt-0.5">
                    {card.element || card.suit || 'SPIRIT'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
