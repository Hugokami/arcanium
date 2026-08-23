import React, { useState } from 'react';
import { X, Sparkles, Sun, Moon, Calendar, Award, ShieldAlert, ChevronRight, RotateCcw } from 'lucide-react';
import { Language } from '../../types/tarot';
import { UserProfile } from '../../types/userProfile';
import { BirthNumerologyService } from '../../services/birthNumerologyService';
import { TAROT_DECK } from '../../data/tarotDeck';
import { audioService } from '../../services/audioService';

interface BirthMatrixModalProps {
  userProfile: UserProfile | null;
  language: Language;
  onClose: () => void;
  onUpdateProfile?: (profile: UserProfile) => void;
}

export const BirthMatrixModal: React.FC<BirthMatrixModalProps> = ({
  userProfile,
  language,
  onClose,
  onUpdateProfile
}) => {
  const [dobInput, setDobInput] = useState<string>(userProfile?.birthdate || '1996-07-20');
  const [activeTab, setActiveTab] = useState<'personality' | 'soul' | 'year' | 'shadow'>('personality');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const blueprint = BirthNumerologyService.calculateBlueprint(dobInput);

  const getCardImage = (id: string) => {
    const found = TAROT_DECK.find(c => c.id === id);
    return found ? `/cards/${found.file}` : '/cards/00-TheFool.png';
  };

  const titles = {
    modalTitle: { en: 'Tarot Birth Blueprint & Annual Transit', my: 'မွေးသက္ကရာဇ် နက္ခတ်ဗေဒနှင့် နှစ်စဉ်ကံကြမ္မာ အလင်းပြ', ja: 'タロット誕生数秘術＆年間運行運命マトリックス' },
    subTitle: { en: 'Pythagorean & Hermetic Life Path Archetypes', my: 'ပိုက်သာဂိုရပ်နှင့် ဟားမက်တစ် ဝိညာဉ်ရေးရာ ဘဝလမ်းကြောင်း', ja: 'ピタゴラス＆ヘルメス数秘術による魂の原型' },
    enterDob: { en: 'Date of Birth (YYYY-MM-DD)', my: 'မွေးသက္ကရာဇ် ရွေးချယ်ပါ', ja: '生年月日を入力' },
    personalityTab: { en: 'Personality Arcana', my: 'ပင်ကိုစရိုက် ကတ် (Personality)', ja: '人格のアルカナ' },
    soulTab: { en: 'Soul Arcana', my: 'ဝိညာဉ်အမြုတေ ကတ် (Soul)', ja: '魂の本質アルカナ' },
    yearTab: { en: `${new Date().getFullYear()} Growth Theme`, my: `${new Date().getFullYear()} နှစ်အလိုက် ကံကြမ္မာ`, ja: `${new Date().getFullYear()}年 成長テーマ` },
    shadowTab: { en: 'Shadow Integration', my: 'အရိပ်ကုစားမှု (Shadow)', ja: '影の統合課題' }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl h-[90vh] rounded-3xl p-1 bg-gradient-to-b from-[#d4af37]/50 via-[#6a5518]/25 to-[#120a24] border border-[#d4af37]/60 shadow-[0_0_60px_rgba(212,175,55,0.25)] flex flex-col overflow-hidden">
        
        <div className="rounded-2xl w-full h-full bg-[#0d071c] flex flex-col overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-gold-glow">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-serif font-bold text-[#d4af37]">
                  {titles.modalTitle[language]}
                </h2>
                <p className="text-xs text-zinc-400 font-serif">
                  {titles.subTitle[language]}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            
            {/* Birth Date Picker Bar */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs font-serif text-amber-200">
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                <span>{titles.enterDob[language]}:</span>
              </div>
              <input
                type="date"
                value={dobInput}
                onChange={(e) => {
                  setDobInput(e.target.value);
                  audioService.playCardHover();
                }}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/15 text-xs text-zinc-100 font-mono focus:outline-none focus:border-[#d4af37]"
              />
              {blueprint && (
                <div className="px-3 py-1.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-xs font-mono text-amber-200 font-bold">
                  Life Path #{blueprint.lifePathNumber}
                </div>
              )}
            </div>

            {blueprint ? (
              <div className="space-y-6">
                
                {/* 4 Life Path Archetype Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-serif">
                  <button
                    onClick={() => {
                      audioService.playCardHover();
                      setActiveTab('personality');
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                      activeTab === 'personality'
                        ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-gold-glow'
                        : 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider font-mono">Core Archetype</span>
                    <span className="font-bold truncate">{blueprint.personalityCard.name[language].split(' ')[1] || blueprint.personalityCard.name[language]}</span>
                  </button>

                  <button
                    onClick={() => {
                      audioService.playCardHover();
                      setActiveTab('soul');
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                      activeTab === 'soul'
                        ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-gold-glow'
                        : 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider font-mono">Soul Card</span>
                    <span className="font-bold truncate">{blueprint.soulCard.name[language].split(' ')[1] || blueprint.soulCard.name[language]}</span>
                  </button>

                  <button
                    onClick={() => {
                      audioService.playCardHover();
                      setActiveTab('year');
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                      activeTab === 'year'
                        ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-gold-glow'
                        : 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider font-mono">{blueprint.currentYearCard.year} Transit</span>
                    <span className="font-bold truncate">{blueprint.currentYearCard.name[language].split(' ')[1] || blueprint.currentYearCard.name[language]}</span>
                  </button>

                  <button
                    onClick={() => {
                      audioService.playCardHover();
                      setActiveTab('shadow');
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                      activeTab === 'shadow'
                        ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold shadow-gold-glow'
                        : 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider font-mono">Shadow Growth</span>
                    <span className="font-bold truncate">{blueprint.shadowCard.name[language].split(' ')[1] || blueprint.shadowCard.name[language]}</span>
                  </button>
                </div>

                {/* Main Card Spotlight View */}
                <div className="relative p-6 sm:p-8 rounded-3xl bg-black/50 border-2 border-[#d4af37]/40 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center overflow-hidden">
                  
                  {/* Subtle Astrolabe Rotating Backdrop */}
                  <img
                    src="/animations/astrolabe-birth-matrix.svg"
                    alt=""
                    className="absolute -right-16 -bottom-16 w-80 h-80 opacity-20 pointer-events-none select-none z-0"
                  />

                  {/* Card Visual Left */}
                  <div className="md:col-span-4 flex flex-col items-center text-center space-y-2 relative z-10">
                    <div className="craft-card-sheen w-44 h-72 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-gold-glow bg-black p-1">
                      <img
                        src={getCardImage(
                          activeTab === 'personality' ? blueprint.personalityCard.id :
                          activeTab === 'soul' ? blueprint.soulCard.id :
                          activeTab === 'year' ? blueprint.currentYearCard.id :
                          blueprint.shadowCard.id
                        )}
                        alt="Arcana"
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                    <span className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                      Arcanum #{
                        activeTab === 'personality' ? blueprint.personalityCard.number :
                        activeTab === 'soul' ? blueprint.soulCard.number :
                        activeTab === 'year' ? blueprint.currentYearCard.number :
                        blueprint.shadowCard.number
                      }
                    </span>
                  </div>

                  {/* Card Meaning Right */}
                  <div className="md:col-span-8 space-y-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                        {activeTab === 'personality' ? '• Lifetime Personality Archetype •' :
                         activeTab === 'soul' ? '• Deep Soul Essence & Destiny •' :
                         activeTab === 'year' ? `• ${blueprint.currentYearCard.year} Solar Return Transit •` :
                         '• Unconscious Shadow & Growth Lesson •'}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-amber-100 mt-1">
                        {activeTab === 'personality' ? blueprint.personalityCard.name[language] :
                         activeTab === 'soul' ? blueprint.soulCard.name[language] :
                         activeTab === 'year' ? blueprint.currentYearCard.name[language] :
                         blueprint.shadowCard.name[language]}
                      </h3>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-sm text-[#e8e0f5] font-serif leading-relaxed">
                      {activeTab === 'personality' && blueprint.personalityCard.description[language]}
                      {activeTab === 'soul' && blueprint.soulCard.description[language]}
                      {activeTab === 'year' && blueprint.currentYearCard.theme[language]}
                      {activeTab === 'shadow' && blueprint.shadowCard.shadowLesson[language]}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-serif text-amber-200/90 leading-relaxed">
                      <b>Hermetic Principle: </b>
                      {activeTab === 'personality' ? 'Your personality card reveals your outward gifts, strengths, and how you naturally navigate external challenges.' :
                       activeTab === 'soul' ? 'Your soul card is your innermost spiritual core — the timeless frequency guiding your soul across all incarnations.' :
                       activeTab === 'year' ? `This year is governed by ${blueprint.currentYearCard.name.en}. Emphasize its virtues to align with universal flow.` :
                       'By acknowledging and integrating this shadow card, you unlock hidden creative power and eliminate unconscious self-sabotage.'}
                    </div>
                  </div>

                </div>

              </div>
            ) : (
              <div className="p-12 text-center text-zinc-400 font-serif">
                Please enter a valid Date of Birth to reveal your Numerological Blueprint.
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
