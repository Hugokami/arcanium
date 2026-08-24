import React, { useState } from 'react';
import { X, Sparkles, Heart, Briefcase, Compass, Eye, ShieldAlert, BookOpen, UserCheck } from 'lucide-react';
import { DrawnCard, Language, TarotCard } from '../../types/tarot';
import { EsotericCorrespondenceService } from '../../services/esotericCorrespondenceService';
import { CourtPersonaService } from '../../services/courtPersonaService';

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
  const [activeTab, setActiveTab] = useState<'prophecy' | 'persona' | 'waite' | 'kabbalah'>('prophecy');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!drawnCard) return null;

  const { card, isReversed, position } = drawnCard;
  const esoteric = EsotericCorrespondenceService.getEsotericData(card.id);
  const courtPersona = CourtPersonaService.getCourtPersona(card);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c0a09] border border-[#292524] rounded-2xl p-6 sm:p-7 text-[#f5f5f4] overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg border border-transparent hover:border-[#292524] text-[#78716c] hover:text-[#f5f5f4] transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 relative z-10">
          
          {/* Left: Card Visual Presentation */}
          <div className="sm:col-span-5 flex flex-col items-center text-center space-y-2.5">
            <div className="relative group w-40 h-64 sm:w-44 sm:h-70 rounded-xl overflow-hidden border border-[#292524] bg-[#141210]">
              <img
                src={`/cards/${card.file}`}
                alt={card.name[language]}
                style={{ transform: isReversed ? 'rotate(180deg)' : 'none' }}
                className="w-full h-full object-contain p-0.5"
              />
              {isReversed && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[10px] font-mono text-[#fca5a5]">
                  Reversed
                </div>
              )}
            </div>

            <div className="text-[10px] font-mono uppercase tracking-wider text-[#78716c]">
              {card.arcana === 'major'
                ? `Major Arcana • ${card.romanNumeral}`
                : `${card.suit.toUpperCase()} • ${card.element}`}
            </div>

            {card.astrology && (
              <div className="text-xs font-sans text-[#a8a29e] bg-[#141210] px-2.5 py-0.5 rounded border border-[#292524]">
                {card.astrology[language]}
              </div>
            )}

            {esoteric?.chakraResonance && (
              <div className="text-[10px] font-mono text-[#d8b4fe]">
                ✦ {esoteric.chakraResonance[language]}
              </div>
            )}
          </div>

          {/* Right: Rich Arcana Symbolism Breakdown */}
          <div className="sm:col-span-7 space-y-3.5 text-left">
            <div>
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase text-[#78716c] tracking-wider">
                  {position.name[language]}
                </div>
                {courtPersona && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
                    Orbit Archetype
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#f5f5f4] mt-0.5">
                {card.name[language]}
              </h2>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-1 p-1 rounded-lg bg-[#141210] border border-[#292524] text-xs font-sans">
              <button
                onClick={() => setActiveTab('prophecy')}
                className={`px-3 py-1 rounded text-xs transition-all ${activeTab === 'prophecy' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
              >
                Prophecy
              </button>
              {courtPersona && (
                <button
                  onClick={() => setActiveTab('persona')}
                  className={`px-3 py-1 rounded text-xs flex items-center space-x-1 transition-all ${activeTab === 'persona' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
                >
                  <UserCheck className="w-3 h-3" />
                  <span>Orbit Persona</span>
                </button>
              )}
              <button
                onClick={() => setActiveTab('waite')}
                className={`px-3 py-1 rounded text-xs flex items-center space-x-1 transition-all ${activeTab === 'waite' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
              >
                <BookOpen className="w-3 h-3" />
                <span>Waite Key</span>
              </button>
              <button
                onClick={() => setActiveTab('kabbalah')}
                className={`px-3 py-1 rounded text-xs flex items-center space-x-1 transition-all ${activeTab === 'kabbalah' ? 'bg-[#292524] text-[#f5f5f4] font-medium' : 'text-[#78716c] hover:text-[#f5f5f4]'}`}
              >
                <Sparkles className="w-3 h-3" />
                <span>Kabbalah</span>
              </button>
            </div>

            {activeTab === 'persona' && courtPersona && (
              <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] text-xs sm:text-sm font-sans space-y-2.5 text-[#a8a29e]">
                <div className="flex items-center justify-between border-b border-[#292524] pb-2">
                  <span className="font-bold text-[#f5f5f4] font-serif">{courtPersona.roleTitle[language]}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1917] text-[#a8a29e]">{courtPersona.mbtiResonance}</span>
                </div>
                <p className="leading-relaxed">{courtPersona.personaArchetype[language]}</p>
                <div className="space-y-1 pt-1 text-xs">
                  <div><b className="text-[#f5f5f4]">Behavioral Signals:</b> {courtPersona.behavioralSignals[language]}</div>
                  <div><b className="text-[#86efac]">How to Navigate:</b> {courtPersona.relationshipAdvice[language]}</div>
                  <div><b className="text-[#fca5a5]">Shadow Traps:</b> {courtPersona.shadowPitfall[language]}</div>
                </div>
              </div>
            )}

            {activeTab === 'prophecy' && (
              <div className="space-y-2.5">
                {/* Keywords */}
                <div className="flex flex-wrap gap-1">
                  {(isReversed ? card.reversedKeywords[language] : card.uprightKeywords[language]).map((kw, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-[#141210] border border-[#292524] text-[#a8a29e]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Core Meaning in this spread */}
                <div className="p-3.5 rounded-xl bg-[#141210] border border-[#292524] space-y-1">
                  <div className="text-xs font-serif font-bold text-[#f5f5f4] flex items-center space-x-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#a8a29e]" />
                    <span>{isReversed ? 'Reversed Shadow Warning' : 'Upright Core Prophecy'}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
                    {isReversed ? card.reversedMeaning[language] : card.uprightMeaning[language]}
                  </p>
                </div>

                {/* Specialized Meanings: Love & Career */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                  {card.loveMeaning && (
                    <div className="p-2.5 rounded-lg bg-[#141210] border border-[#292524] space-y-1">
                      <div className="text-[11px] font-sans font-semibold text-[#fca5a5] flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>Love Alchemy</span>
                      </div>
                      <p className="text-[11px] text-[#a8a29e] font-sans leading-relaxed">
                        {isReversed ? card.loveMeaning.reversed[language] : card.loveMeaning.upright[language]}
                      </p>
                    </div>
                  )}

                  {card.careerMeaning && (
                    <div className="p-2.5 rounded-lg bg-[#141210] border border-[#292524] space-y-1">
                      <div className="text-[11px] font-sans font-semibold text-[#f5f5f4] flex items-center space-x-1">
                        <Briefcase className="w-3 h-3 text-[#a8a29e]" />
                        <span>Career & Purpose</span>
                      </div>
                      <p className="text-[11px] text-[#a8a29e] font-sans leading-relaxed">
                        {isReversed ? card.careerMeaning.reversed[language] : card.careerMeaning.upright[language]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'waite' && (
              <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] text-xs sm:text-sm font-sans space-y-2.5 text-[#a8a29e]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#f5f5f4] flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#a8a29e]" />
                  <span>A.E. Waite: The Pictorial Key to the Tarot (1910)</span>
                </div>
                <p className="italic leading-relaxed text-[#f5f5f4]">
                  {esoteric?.waiteOriginalKey?.[language] || card.uprightMeaning[language]}
                </p>
                {esoteric?.traditionalOmens && (
                  <div className="p-2 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs text-[#a8a29e]">
                    <b className="text-[#f5f5f4]">Historical Divinatory Omen: </b> {esoteric.traditionalOmens[language]}
                  </div>
                )}
                <div className="pt-2 border-t border-[#292524] text-xs text-[#78716c]">
                  <b>Sacred Symbols: </b> {card.symbolism[language].join(' • ')}
                </div>
              </div>
            )}

            {activeTab === 'kabbalah' && (
              <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] text-xs sm:text-sm font-sans space-y-2 text-[#a8a29e]">
                <div className="text-xs font-mono uppercase tracking-wider text-[#d8b4fe] flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Hermetic Kabbalah & Tree of Life</span>
                </div>
                {esoteric?.hebrewLetter && (
                  <div className="p-2 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs text-[#d8b4fe]">
                    <b>Hebrew Letter:</b> {esoteric.hebrewLetter[language]}
                  </div>
                )}
                {esoteric?.kabbalahTreeOfLife && (
                  <div className="p-2 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs text-[#a8a29e]">
                    <b>Tree of Life:</b> {esoteric.kabbalahTreeOfLife[language]}
                  </div>
                )}
                {esoteric?.decanateAstrology && (
                  <div className="p-2 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs text-[#93c5fd]">
                    <b>Astrological Decan:</b> {esoteric.decanateAstrology[language]}
                  </div>
                )}
                {esoteric?.goldenDawnTitle && (
                  <div className="p-2 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs text-[#a8a29e]">
                    <b>Golden Dawn Title:</b> {esoteric.goldenDawnTitle[language]}
                  </div>
                )}
              </div>
            )}

            {/* Oracle Advice & Shadow */}
            <div className="pt-2 border-t border-[#292524] space-y-1.5 text-xs font-sans">
              <div className="text-[#a8a29e]">
                <span className="font-bold text-[#f5f5f4]">Oracle Advice:</span> {card.advice[language]}
              </div>
              <div className="text-[#a8a29e] flex items-start space-x-1">
                <ShieldAlert className="w-3.5 h-3.5 text-[#fca5a5] shrink-0 mt-0.5" />
                <span><b className="text-[#fca5a5]">Shadow Warning:</b> {card.shadowWarning[language]}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
