import React, { useState } from 'react';
import { X, Sparkles, Check, Crown, Layers } from 'lucide-react';
import { Language } from '../../types/tarot';
import { DeckTheme, DeckThemeService, DECK_THEMES } from '../../services/deckThemeService';
import { audioService } from '../../services/audioService';

interface DeckThemeModalProps {
  language: Language;
  onClose: () => void;
  onThemeChanged?: (theme: DeckTheme) => void;
}

export const DeckThemeModal: React.FC<DeckThemeModalProps> = ({
  language,
  onClose,
  onThemeChanged
}) => {
  const [selectedThemeId, setSelectedThemeId] = useState<string>(
    DeckThemeService.getSelectedTheme().id
  );

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSelect = (theme: DeckTheme) => {
    audioService.playCardSlide();
    setSelectedThemeId(theme.id);
    DeckThemeService.setSelectedTheme(theme.id);
    if (onThemeChanged) onThemeChanged(theme);
  };

  const titles = {
    title: { en: 'Sacred Deck Artistry & Card Backs', my: 'တာရော့ဖဲချပ် အနုပညာနှင့် ကျောဘက်ဒီဇိုင်းများ', ja: '神聖デッキ装装＆歴史的カードバック' },
    sub: { en: 'Choose your sacred altar tapestry and vector talisman', my: 'သင်နှစ်သက်ရာ ပလ္လင်တော် ဒီဇိုင်းနှင့် အမှတ်တံဆိပ်ကို ရွေးချယ်ပါ', ja: '祭壇を彩る歴史的意匠とタリスマンを選択' }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0e0a16] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(212,175,55,0.25)] text-amber-50 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-xl font-serif font-bold text-[#d4af37]">
                {titles.title[language]}
              </h2>
              <p className="text-xs text-zinc-400 font-serif">
                {titles.sub[language]}
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

        {/* Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
          {DECK_THEMES.map((theme) => {
            const isSelected = selectedThemeId === theme.id;

            return (
              <div
                key={theme.id}
                onClick={() => handleSelect(theme)}
                className={`cursor-pointer group p-4 rounded-2xl border-2 transition-all relative flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-amber-500/10 border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.25)]'
                    : 'bg-black/40 hover:bg-white/[0.04] border-white/10'
                }`}
              >
                {/* Active Check Icon */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}

                <div className="flex items-center space-x-3">
                  <div
                    className="w-14 h-22 rounded-xl overflow-hidden border-2 bg-black flex-shrink-0 shadow-md group-hover:scale-105 transition-transform"
                    style={{ borderColor: theme.borderColor }}
                  >
                    <img src={theme.image} alt={theme.name.en} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300/80">
                      {theme.era}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-amber-100 group-hover:text-[#d4af37] transition-colors">
                      {theme.name[language]}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 font-serif leading-relaxed line-clamp-2">
                  {theme.description[language]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="pt-6 text-center">
          <button
            onClick={onClose}
            className="btn-primary h-11 px-8 rounded-xl font-serif text-xs tracking-widest uppercase mx-auto"
          >
            Apply Deck Artistry
          </button>
        </div>

      </div>
    </div>
  );
};
