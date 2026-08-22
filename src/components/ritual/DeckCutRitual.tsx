import React, { useState } from 'react';
import { Sparkles, Check, RotateCcw, Hand } from 'lucide-react';
import { Language } from '../../types/tarot';
import { audioService } from '../../services/audioService';

interface DeckCutRitualProps {
  language: Language;
  onCompleteRitual: () => void;
  cardBackImage?: string;
}

export const DeckCutRitual: React.FC<DeckCutRitualProps> = ({
  language,
  onCompleteRitual,
  cardBackImage = '/cards/card-back.png'
}) => {
  const [ritualState, setRitualState] = useState<'initial' | 'cut' | 'reuniting' | 'complete'>('initial');

  const texts = {
    step1Title: { en: '1910 Sacred Deck Cutting Ritual', my: '၁၉၁၀ ရိုးရာ တာရော့ဖဲချပ် သုံးပုံပိုင်းခြင်း ထုံးတမ်းစဉ်လာ', ja: '1910年 ウェイト伝統・3分割デッキカット儀式' },
    step1Sub: { en: 'In accordance with A. E. Waite\'s 1910 Pictorial Key: "Cut the cards into three packets with your left hand."', my: 'အေအီးဝိတ်၏ ၁၉၁၀ မူရင်းကျမ်းဂန်အရ — ဖဲချပ်များကို ဘယ်လက်ဖြင့် ၃ ပုံ ပိုင်းဖြတ်ပါ', ja: 'A.E.ウェイト1910年原典の手法：「左手によってデッキを3つのパケットに分割せよ」' },
    tapToCut: { en: '✦ Tap Deck to Cut into 3 Packets ✦', my: '✦ ဖဲချပ် ၃ ပုံ ပိုင်းရန် နှိပ်ပါ ✦', ja: '✦ タップしてデッキを3分割する ✦' },
    tapToReunite: { en: '✦ Tap Packets to Recombine & Seal ✦', my: '✦ ဖဲချပ်များကို ပြန်လည်ပေါင်းစည်းရန် နှိပ်ပါ ✦', ja: '✦ タップしてパケットを再統合し封印する ✦' },
    sealed: { en: 'Sacred Deck Attuned & Sealed', my: 'တာရော့ဖဲချပ်အား စွမ်းအင်သွင်းပြီးပါပြီ', ja: '神聖なるデッキが調律されました' },
    proceedBtn: { en: 'Begin Divination Draw', my: 'ကတ်များ စတင်ဆွဲယူမည်', ja: '運命のドローを開始する' }
  };

  const handleCut = () => {
    audioService.playCardSlide();
    setRitualState('cut');
  };

  const handleReunite = () => {
    audioService.playCardSlide();
    setRitualState('reuniting');
    setTimeout(() => {
      audioService.playSingingBowl(528);
      setRitualState('complete');
    }, 600);
  };

  return (
    <div className="craft-panel p-6 sm:p-8 rounded-3xl border-2 border-[#d4af37]/60 bg-gradient-to-b from-[#180d2e] via-[#0d071c] to-black shadow-[0_0_50px_rgba(212,175,55,0.25)] text-center space-y-6 animate-in fade-in duration-300 max-w-xl mx-auto">
      
      {/* Header */}
      <div className="space-y-1.5">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-xs font-serif text-amber-200">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{texts.step1Title[language]}</span>
        </div>
        <p className="text-xs text-zinc-300 font-serif italic max-w-md mx-auto">
          {texts.step1Sub[language]}
        </p>
      </div>

      {/* Interactive Ritual Stage */}
      <div className="h-56 relative flex items-center justify-center select-none">
        
        {ritualState === 'initial' && (
          <div
            onClick={handleCut}
            className="cursor-pointer group relative flex flex-col items-center justify-center transition-transform hover:scale-105"
          >
            {/* Stacked 3D Card Layers */}
            <div className="absolute -top-2 w-32 h-48 rounded-2xl bg-[#090514] border border-[#d4af37]/30 shadow-md transform rotate-[-3deg]" />
            <div className="absolute -top-1 w-32 h-48 rounded-2xl bg-[#090514] border border-[#d4af37]/50 shadow-md transform rotate-[3deg]" />
            <div className="relative w-32 h-48 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-gold-glow bg-black">
              <img src={cardBackImage} alt="Deck" className="w-full h-full object-cover" />
            </div>

            <div className="absolute -bottom-8 px-4 py-1.5 rounded-full bg-black/80 border border-[#d4af37] text-xs font-serif text-amber-200 shadow-gold-glow animate-pulse whitespace-nowrap">
              {texts.tapToCut[language]}
            </div>
          </div>
        )}

        {ritualState === 'cut' && (
          <div
            onClick={handleReunite}
            className="cursor-pointer group flex items-center justify-center gap-4 transition-all"
          >
            {/* Packet 1 (Left) */}
            <div className="w-24 sm:w-28 h-36 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-gold-glow bg-black transform -rotate-6 hover:-translate-y-2 transition-all">
              <img src={cardBackImage} alt="Packet 1" className="w-full h-full object-cover" />
              <div className="absolute bottom-1 left-0 right-0 text-[10px] font-mono text-center text-amber-300 bg-black/60">
                Left (Past)
              </div>
            </div>

            {/* Packet 2 (Center) */}
            <div className="w-24 sm:w-28 h-36 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-gold-glow bg-black transform hover:-translate-y-2 transition-all z-10">
              <img src={cardBackImage} alt="Packet 2" className="w-full h-full object-cover" />
              <div className="absolute bottom-1 left-0 right-0 text-[10px] font-mono text-center text-amber-300 bg-black/60">
                Center (Present)
              </div>
            </div>

            {/* Packet 3 (Right) */}
            <div className="w-24 sm:w-28 h-36 sm:h-44 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-gold-glow bg-black transform rotate-6 hover:-translate-y-2 transition-all">
              <img src={cardBackImage} alt="Packet 3" className="w-full h-full object-cover" />
              <div className="absolute bottom-1 left-0 right-0 text-[10px] font-mono text-center text-amber-300 bg-black/60">
                Right (Future)
              </div>
            </div>

            <div className="absolute -bottom-8 px-4 py-1.5 rounded-full bg-black/80 border border-[#d4af37] text-xs font-serif text-amber-200 shadow-gold-glow animate-pulse whitespace-nowrap">
              {texts.tapToReunite[language]}
            </div>
          </div>
        )}

        {ritualState === 'reuniting' && (
          <div className="relative flex items-center justify-center animate-pulse">
            <div className="w-32 h-48 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-[0_0_50px_rgba(212,175,55,0.6)] bg-black">
              <img src={cardBackImage} alt="Deck Reunited" className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        {ritualState === 'complete' && (
          <div className="space-y-4 animate-in zoom-in duration-300 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,0.4)]">
              <Check className="w-8 h-8" />
            </div>
            <div className="text-base sm:text-lg font-serif font-bold text-emerald-200">
              {texts.sealed[language]}
            </div>
          </div>
        )}

      </div>

      {/* Action Footer */}
      {ritualState === 'complete' && (
        <button
          onClick={onCompleteRitual}
          className="btn-primary h-12 px-8 rounded-xl font-serif text-sm tracking-[0.18em] uppercase flex items-center space-x-2.5 mx-auto animate-in fade-in"
        >
          <Sparkles className="w-4 h-4" />
          <span>{texts.proceedBtn[language]}</span>
        </button>
      )}

    </div>
  );
};
