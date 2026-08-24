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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl h-[88vh] rounded-2xl bg-[#0c0a09] border border-[#292524] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-[#292524] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#141210] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {titles.modalTitle[language]}
              </h2>
              <p className="text-xs text-[#78716c] font-sans">
                {titles.subTitle[language]}
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

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          
          {/* Birth Date Picker Bar */}
          <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center space-x-2 text-xs font-sans text-[#a8a29e]">
              <Calendar className="w-4 h-4 text-[#78716c]" />
              <span>{titles.enterDob[language]}:</span>
            </div>
            <input
              type="date"
              value={dobInput}
              onChange={(e) => {
                setDobInput(e.target.value);
                audioService.playCardHover();
              }}
              className="px-3 py-1.5 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs text-[#f5f5f4] font-mono focus:outline-none focus:border-[#78716c]"
            />
            {blueprint && (
              <div className="px-2.5 py-1 rounded bg-[#1c1917] border border-[#292524] text-xs font-mono text-[#a8a29e]">
                Life Path #{blueprint.lifePathNumber}
              </div>
            )}
          </div>

          {blueprint ? (
            <div className="space-y-5">
              
              {/* 4 Life Path Archetype Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-sans">
                <button
                  onClick={() => {
                    audioService.playCardHover();
                    setActiveTab('personality');
                  }}
                  className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                    activeTab === 'personality'
                      ? 'bg-[#292524] text-[#f5f5f4] border-[#78716c] font-medium'
                      : 'bg-[#141210] hover:bg-[#1c1917] text-[#a8a29e] border-[#292524]'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono text-[#78716c]">Core Archetype</span>
                  <span className="font-bold truncate">{blueprint.personalityCard.name[language].split(' ')[1] || blueprint.personalityCard.name[language]}</span>
                </button>

                <button
                  onClick={() => {
                    audioService.playCardHover();
                    setActiveTab('soul');
                  }}
                  className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                    activeTab === 'soul'
                      ? 'bg-[#292524] text-[#f5f5f4] border-[#78716c] font-medium'
                      : 'bg-[#141210] hover:bg-[#1c1917] text-[#a8a29e] border-[#292524]'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono text-[#78716c]">Soul Card</span>
                  <span className="font-bold truncate">{blueprint.soulCard.name[language].split(' ')[1] || blueprint.soulCard.name[language]}</span>
                </button>

                <button
                  onClick={() => {
                    audioService.playCardHover();
                    setActiveTab('year');
                  }}
                  className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                    activeTab === 'year'
                      ? 'bg-[#292524] text-[#f5f5f4] border-[#78716c] font-medium'
                      : 'bg-[#141210] hover:bg-[#1c1917] text-[#a8a29e] border-[#292524]'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono text-[#78716c]">{blueprint.currentYearCard.year} Transit</span>
                  <span className="font-bold truncate">{blueprint.currentYearCard.name[language].split(' ')[1] || blueprint.currentYearCard.name[language]}</span>
                </button>

                <button
                  onClick={() => {
                    audioService.playCardHover();
                    setActiveTab('shadow');
                  }}
                  className={`p-2.5 rounded-lg border text-center transition-all flex flex-col items-center justify-center space-y-1 ${
                    activeTab === 'shadow'
                      ? 'bg-[#292524] text-[#f5f5f4] border-[#78716c] font-medium'
                      : 'bg-[#141210] hover:bg-[#1c1917] text-[#a8a29e] border-[#292524]'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono text-[#78716c]">Shadow Growth</span>
                  <span className="font-bold truncate">{blueprint.shadowCard.name[language].split(' ')[1] || blueprint.shadowCard.name[language]}</span>
                </button>
              </div>

              {/* Main Card Spotlight View */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#141210] border border-[#292524] grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                
                {/* Card Visual Left */}
                <div className="md:col-span-4 flex flex-col items-center text-center space-y-2">
                  <div className="w-36 h-60 rounded-xl overflow-hidden border border-[#292524] bg-[#0c0a09] p-1">
                    <img
                      src={getCardImage(
                        activeTab === 'personality' ? blueprint.personalityCard.id :
                        activeTab === 'soul' ? blueprint.soulCard.id :
                        activeTab === 'year' ? blueprint.currentYearCard.id :
                        blueprint.shadowCard.id
                      )}
                      alt="Arcana"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <span className="text-xs font-mono text-[#a8a29e] uppercase tracking-wider">
                    Arcanum #{
                      activeTab === 'personality' ? blueprint.personalityCard.number :
                      activeTab === 'soul' ? blueprint.soulCard.number :
                      activeTab === 'year' ? blueprint.currentYearCard.number :
                      blueprint.shadowCard.number
                    }
                  </span>
                </div>

                {/* Card Meaning Right */}
                <div className="md:col-span-8 space-y-3.5">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716c]">
                      {activeTab === 'personality' ? '• Lifetime Personality Archetype •' :
                       activeTab === 'soul' ? '• Deep Soul Essence & Destiny •' :
                       activeTab === 'year' ? `• ${blueprint.currentYearCard.year} Solar Return Transit •` :
                       '• Unconscious Shadow & Growth Lesson •'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#f5f5f4] mt-0.5">
                      {activeTab === 'personality' ? blueprint.personalityCard.name[language] :
                       activeTab === 'soul' ? blueprint.soulCard.name[language] :
                       activeTab === 'year' ? blueprint.currentYearCard.name[language] :
                       blueprint.shadowCard.name[language]}
                    </h3>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
                    {activeTab === 'personality' && blueprint.personalityCard.description[language]}
                    {activeTab === 'soul' && blueprint.soulCard.description[language]}
                    {activeTab === 'year' && blueprint.currentYearCard.theme[language]}
                    {activeTab === 'shadow' && blueprint.shadowCard.shadowLesson[language]}
                  </div>

                  <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs font-sans text-[#a8a29e] leading-relaxed">
                    <b className="text-[#f5f5f4] font-medium">Hermetic Principle: </b>
                    {activeTab === 'personality' ? 'Your personality card reveals your outward gifts, strengths, and how you naturally navigate external challenges.' :
                     activeTab === 'soul' ? 'Your soul card is your innermost spiritual core — the timeless frequency guiding your soul across all incarnations.' :
                     activeTab === 'year' ? `This year is governed by ${blueprint.currentYearCard.name.en}. Emphasize its virtues to align with universal flow.` :
                     'By acknowledging and integrating this shadow card, you unlock hidden creative power and eliminate unconscious self-sabotage.'}
                  </div>
                </div>

              </div>

            </div>
          ) : (
            <div className="p-12 text-center text-[#78716c] font-sans">
              Please enter a valid Date of Birth to reveal your Numerological Blueprint.
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
