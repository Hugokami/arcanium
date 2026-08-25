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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c0a09] border border-[#292524] rounded-2xl p-6 sm:p-7 text-[#f5f5f4] overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#292524] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#141210] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {titles.title[language]}
              </h2>
              <p className="text-xs text-[#78716c] font-sans">
                {titles.sub[language]}
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

        {/* Themes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-5">
          {DECK_THEMES.map((theme) => {
            const isSelected = selectedThemeId === theme.id;

            return (
              <div
                key={theme.id}
                onClick={() => handleSelect(theme)}
                className={`cursor-pointer p-4 rounded-xl border transition-all relative flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-[#1c1917] border-[#f5f5f4]'
                    : 'bg-[#141210] hover:bg-[#1c1917] border-[#292524]'
                }`}
              >
                {/* Active Check Icon */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#f5f5f4] text-[#0c0a09] flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}

                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-18 rounded-lg overflow-hidden border border-[#292524] bg-[#0c0a09] flex-shrink-0"
                  >
                    <img
                      src={theme.image}
                      alt={theme.name.en}
                      onError={(e) => { e.currentTarget.src = '/cards/CardBacks.png'; }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#78716c]">
                      {theme.era}
                    </span>
                    <h4 className="text-sm font-serif font-bold text-[#f5f5f4]">
                      {theme.name[language]}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-[#a8a29e] font-sans leading-relaxed line-clamp-2">
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
            className="btn-primary h-10 px-7 rounded-lg font-sans text-xs tracking-wider uppercase mx-auto"
          >
            Apply Deck Artistry
          </button>
        </div>

      </div>
    </div>
  );
};
