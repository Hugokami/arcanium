import React, { useMemo, useEffect } from 'react';
import { X, Sparkles, Moon, Sun, Compass, Clock, ArrowRight, Shield } from 'lucide-react';
import { Language } from '../../types/tarot';
import { LunarTransitService } from '../../services/lunarTransitService';
import { audioService } from '../../services/audioService';

interface CosmicAlmanacModalProps {
  language: Language;
  onClose: () => void;
  onSelectSpread?: (spreadId: string) => void;
}

export const CosmicAlmanacModal: React.FC<CosmicAlmanacModalProps> = ({
  language,
  onClose,
  onSelectSpread
}) => {
  const almanac = useMemo(() => {
    return LunarTransitService.getCosmicAlmanac(language);
  }, [language]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const titles = {
    modalTitle: { en: 'Cosmic Almanac & Planetary Hours', my: 'စကြာဝဠာ ဂြိုဟ်နက္ခတ်နှင့် လပြက္ခဒိန် ဇယား', ja: '天体暦・惑星時アストロラーベ' },
    modalSub: { en: 'Real-time lunar illumination, Chaldean planetary hours & celestial divination windows', my: 'လက်ရှိ လအလင်းရောင်ရာခိုင်နှုန်း၊ ဂြိုဟ်စိုးမိုးချိန်နှင့် ဗေဒင်ဟောကိန်း အကြံပြုချက်များ', ja: 'リアルタイム月齢・カルデア惑星時・運命鑑定の神聖吉時' },
    lunarDial: { en: 'Lunar Phase Transit', my: 'လစက်ဝန်း အခြေအနေ', ja: '月相トランジット' },
    planetaryHour: { en: 'Current Planetary Hour', my: 'လက်ရှိ စိုးမိုးသော ဂြိုဟ်နာရီ', ja: '現在の惑星時（プラネタリー・アワー）' },
    decanate: { en: 'Active Astrological Decanate', my: 'လက်ရှိ ရာသီခွင် အပိုင်းအခြား (Decan)', ja: '運行中のデーカン度数' },
    advisory: { en: 'Celestial Divination Advisory', my: 'ယနေ့အတွက် ကောင်းကင်စွမ်းအင် လမ်းညွှန်ချက်', ja: '天界からの神聖アドバイス' },
    suggestedSpreads: { en: 'Favored Spread Alignments', my: 'အထူးသင့်လျော်သော တာရော့ခွင်များ', ja: '現在同調する推奨スプレッド' },
    dayHour: { en: 'Day Hour (Solar Light)', my: 'နေ့ပိုင်း ဂြိုဟ်နာရီ', ja: '昼の刻（陽光）' },
    nightHour: { en: 'Night Hour (Nocturnal Veil)', my: 'ညပိုင်း ဂြိုဟ်နာရီ', ja: '夜の刻（深淵）' }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl bg-[#0c0a09] border border-[#292524] overflow-hidden flex flex-col shadow-2xl text-[#f5f5f4]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#292524] bg-[#141210] flex items-center justify-between flex-shrink-0">
          <div className="space-y-0.5">
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[10px] font-mono tracking-widest text-[#a8a29e] uppercase">
              <Sparkles className="w-3 h-3 text-[#a8a29e]" />
              <span>Cosmic Weather</span>
            </div>
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
              {titles.modalTitle[language]}
            </h2>
            <p className="text-xs text-[#78716c] font-sans">
              {titles.modalSub[language]}
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
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-sans text-xs">
          
          {/* Top 2-Column Bento: Moon Phase & Planetary Hour */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            
            {/* 1. Moon Phase Card */}
            <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#78716c] uppercase tracking-wider">
                  {titles.lunarDial[language]}
                </span>
                <span className="text-xl">{almanac.moonPhase.emoji}</span>
              </div>

              <div>
                <div className="text-sm sm:text-base font-serif font-bold text-[#f5f5f4]">
                  {almanac.moonPhase.phaseName[language]}
                </div>
                <div className="text-[11px] font-mono text-[#a8a29e] pt-0.5">
                  Illumination: <b className="text-[#f5f5f4]">{almanac.moonPhase.illumination}%</b>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-[#1c1917] border border-[#292524] overflow-hidden">
                <div
                  className="h-full bg-[#f5f5f4] rounded-full transition-all"
                  style={{ width: `${almanac.moonPhase.illumination}%` }}
                />
              </div>

              <p className="text-[#a8a29e] text-[11px] leading-relaxed italic">
                "{almanac.moonPhase.lunarInfluence[language]}"
              </p>
            </div>

            {/* 2. Planetary Hour Card */}
            <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#78716c] uppercase tracking-wider">
                  {titles.planetaryHour[language]}
                </span>
                <span className="text-base font-mono px-2 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#f5f5f4]">
                  {almanac.planetaryHour.symbol}
                </span>
              </div>

              <div>
                <div className="text-sm sm:text-base font-serif font-bold text-[#f5f5f4]">
                  Hour of {almanac.planetaryHour.name[language]}
                </div>
                <div className="text-[11px] font-mono text-[#a8a29e] pt-0.5 flex items-center space-x-1.5">
                  <span>{almanac.planetaryHour.isDayHour ? titles.dayHour[language] : titles.nightHour[language]}</span>
                  <span>•</span>
                  <span>Hour #{almanac.planetaryHour.hourNumber}</span>
                </div>
              </div>

              {/* Tarot Key Association */}
              <div className="p-2 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-0.5">
                <div className="text-[10px] font-mono text-[#78716c] uppercase">Governing Tarot Key:</div>
                <div className="text-xs font-serif font-semibold text-[#f5f5f4]">
                  ✦ {almanac.planetaryHour.rulingTarotKey[language]}
                </div>
              </div>

              <p className="text-[#a8a29e] text-[11px] leading-relaxed">
                {almanac.planetaryHour.divinatoryGuidance[language]}
              </p>
            </div>

          </div>

          {/* Decanate & Sun Season Banner */}
          <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#a8a29e]" />
                <span className="font-serif font-bold text-xs text-[#f5f5f4]">
                  {almanac.moonPhase.astrologicalSeason[language]}
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#78716c]">
                {almanac.currentDecanate.degreeRange}
              </span>
            </div>

            <p className="text-[#a8a29e] text-[11px] leading-relaxed">
              {almanac.currentDecanate.name[language]} is currently active, anchoring earthly reality into the overarching celestial wheel.
            </p>
          </div>

          {/* Celestial Divination Advisory Box */}
          <div className="p-4 rounded-xl bg-[#1c1917] border border-[#78716c]/40 space-y-2">
            <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#f5f5f4]">
              <Sparkles className="w-3.5 h-3.5 text-[#fde047]" />
              <span>{titles.advisory[language]}</span>
            </div>
            <p className="text-xs text-[#f5f5f4] leading-relaxed">
              {almanac.celestialAdvisory[language]}
            </p>
          </div>

          {/* Recommended Spreads for Current Hour */}
          <div className="space-y-2 pt-1">
            <span className="font-mono text-[11px] text-[#78716c] uppercase tracking-wider block">
              {titles.suggestedSpreads[language]}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {almanac.recommendedSpreads.map((spread) => (
                <div
                  key={spread.id}
                  className="p-3 rounded-xl bg-[#141210] border border-[#292524] flex flex-col justify-between space-y-2"
                >
                  <div>
                    <div className="font-serif font-bold text-xs text-[#f5f5f4]">
                      {spread.name[language]}
                    </div>
                    <p className="text-[11px] text-[#a8a29e] pt-1 leading-snug">
                      {spread.reason[language]}
                    </p>
                  </div>

                  {onSelectSpread && (
                    <button
                      onClick={() => {
                        audioService.playCardSlide();
                        onSelectSpread(spread.id);
                        onClose();
                      }}
                      className="inline-flex items-center space-x-1 text-[11px] font-mono text-[#f5f5f4] hover:text-white pt-1"
                    >
                      <span>Cast Spread</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
