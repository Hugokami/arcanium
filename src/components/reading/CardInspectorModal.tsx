import React, { useState } from 'react';
import { X, Sparkles, Heart, Briefcase, Compass, Eye, ShieldAlert, BookOpen } from 'lucide-react';
import { DrawnCard, Language, TarotCard } from '../../types/tarot';
import { EsotericCorrespondenceService } from '../../services/esotericCorrespondenceService';

interface CardInspectorModalProps {
  drawnCard: DrawnCard | null;
  language: Language;
  onClose: () => void;
}

export const CardInspectorModal: React.FC<CardInspectorModalProps> = ({
  drawnCard,
  language,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'prophecy' | 'waite' | 'kabbalah'>('prophecy');
  if (!drawnCard) return null;

  const { card, isReversed, position } = drawnCard;
  const esoteric = EsotericCorrespondenceService.getEsotericData(card.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0e0a16] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(212,175,55,0.25)] text-amber-50 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 relative z-10">
          
          {/* Left: Card Visual Presentation */}
          <div className="sm:col-span-5 flex flex-col items-center text-center space-y-3">
            <div className="relative group w-44 h-72 sm:w-48 sm:h-76 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.3)] bg-black">
              <img
                src={`/cards/${card.file}`}
                alt={card.name[language]}
                style={{ transform: isReversed ? 'rotate(180deg)' : 'none' }}
                className="w-full h-full object-cover"
              />
              {isReversed && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-purple-950/90 border border-purple-400/50 text-[10px] font-mono text-purple-200">
                  Reversed
                </div>
              )}
            </div>

            <div className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">
              {card.arcana === 'major'
                ? `Major Arcana • ${card.romanNumeral}`
                : `${card.suit.toUpperCase()} • ${card.element}`}
            </div>

            {card.astrology && (
              <div className="text-xs font-serif text-amber-200/80 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
                🪐 {card.astrology[language]}
              </div>
            )}

            {esoteric?.chakraResonance && (
              <div className="text-[10px] font-mono text-purple-300">
                ✦ {esoteric.chakraResonance[language]}
              </div>
            )}
          </div>

          {/* Right: Rich Arcana Symbolism Breakdown */}
          <div className="sm:col-span-7 space-y-4 text-left">
            <div>
              <div className="text-xs font-mono uppercase text-amber-400/80 tracking-wider">
                {position.name[language]}
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-100 tracking-wide">
                {card.name[language]}
              </h2>
            </div>

            {/* Navigation Tabs */}
            <div className="flex space-x-1 p-1 rounded-xl bg-white/5 text-xs font-serif">
              <button
                onClick={() => setActiveTab('prophecy')}
                className={`px-3 py-1 rounded-lg transition-all ${activeTab === 'prophecy' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                Prophecy
              </button>
              <button
                onClick={() => setActiveTab('waite')}
                className={`px-3 py-1 rounded-lg flex items-center space-x-1 transition-all ${activeTab === 'waite' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                <BookOpen className="w-3 h-3" />
                <span>Waite Key</span>
              </button>
              <button
                onClick={() => setActiveTab('kabbalah')}
                className={`px-3 py-1 rounded-lg flex items-center space-x-1 transition-all ${activeTab === 'kabbalah' ? 'bg-[#d4af37] text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Kabbalah</span>
              </button>
            </div>

            {activeTab === 'prophecy' && (
              <div className="space-y-3">
                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5">
                  {(isReversed ? card.reversedKeywords[language] : card.uprightKeywords[language]).map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-xs font-serif bg-[#d4af37]/15 border border-[#d4af37]/35 text-amber-200"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Core Meaning in this spread */}
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-1.5">
                  <div className="text-xs font-serif font-bold text-[#d4af37] flex items-center space-x-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isReversed ? 'Reversed Shadow Warning' : 'Upright Core Prophecy'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
                    {isReversed ? card.reversedMeaning[language] : card.uprightMeaning[language]}
                  </p>
                </div>

                {/* Specialized Meanings: Love & Career */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {card.loveMeaning && (
                    <div className="p-2.5 rounded-xl bg-pink-950/20 border border-pink-500/20 space-y-1">
                      <div className="text-[11px] font-serif font-semibold text-pink-300 flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>Love Alchemy</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 font-serif leading-relaxed">
                        {isReversed ? card.loveMeaning.reversed[language] : card.loveMeaning.upright[language]}
                      </p>
                    </div>
                  )}

                  {card.careerMeaning && (
                    <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1">
                      <div className="text-[11px] font-serif font-semibold text-amber-300 flex items-center space-x-1">
                        <Briefcase className="w-3 h-3" />
                        <span>Career & Purpose</span>
                      </div>
                      <p className="text-[11px] text-zinc-300 font-serif leading-relaxed">
                        {isReversed ? card.careerMeaning.reversed[language] : card.careerMeaning.upright[language]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'waite' && (
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs sm:text-sm font-serif space-y-3 text-zinc-200">
                <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>A.E. Waite: The Pictorial Key to the Tarot (1910)</span>
                </div>
                <p className="italic leading-relaxed text-zinc-300">
                  {esoteric?.waiteOriginalKey?.[language] || card.uprightMeaning[language]}
                </p>
                <div className="pt-2 border-t border-white/10 text-xs text-amber-200">
                  <b>Sacred Symbols: </b> {card.symbolism[language].join(' • ')}
                </div>
              </div>
            )}

            {activeTab === 'kabbalah' && (
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs sm:text-sm font-serif space-y-2.5 text-zinc-200">
                <div className="text-xs font-mono uppercase tracking-widest text-purple-300 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Hermetic Kabbalah & Tree of Life</span>
                </div>
                {esoteric?.hebrewLetter && (
                  <div className="p-2 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200">
                    <b>Hebrew Letter:</b> {esoteric.hebrewLetter[language]}
                  </div>
                )}
                {esoteric?.kabbalahTreeOfLife && (
                  <div className="p-2 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-200">
                    <b>Tree of Life:</b> {esoteric.kabbalahTreeOfLife[language]}
                  </div>
                )}
                {esoteric?.decanateAstrology && (
                  <div className="p-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200">
                    <b>Astrological Decan:</b> {esoteric.decanateAstrology[language]}
                  </div>
                )}
                {esoteric?.goldenDawnTitle && (
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300">
                    <b>Golden Dawn Title:</b> {esoteric.goldenDawnTitle[language]}
                  </div>
                )}
              </div>
            )}

            {/* Oracle Advice & Shadow */}
            <div className="pt-2 border-t border-white/[0.08] space-y-2 text-xs font-serif">
              <div className="text-amber-200/90">
                <span className="font-bold text-[#d4af37]">Oracle Advice:</span> {card.advice[language]}
              </div>
              <div className="text-rose-300/90 flex items-start space-x-1">
                <ShieldAlert className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span><b className="text-rose-400">Shadow Warning:</b> {card.shadowWarning[language]}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
