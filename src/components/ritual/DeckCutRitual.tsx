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
  cardBackImage = '/cards/CardBacks.png'
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
    <div className="p-6 sm:p-7 rounded-2xl border border-[#292524] bg-[#0c0a09] shadow-xl text-center space-y-5 animate-in fade-in duration-200 max-w-xl mx-auto">
      
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#141210] border border-[#292524] text-xs font-mono text-[#a8a29e]">
          <Sparkles className="w-3.5 h-3.5 text-[#a8a29e]" />
          <span>{texts.step1Title[language]}</span>
        </div>
        <p className="text-xs text-[#78716c] font-sans italic max-w-md mx-auto">
          {texts.step1Sub[language]}
        </p>
      </div>

      {/* Interactive Ritual Stage */}
      <div className="h-52 relative flex items-center justify-center select-none">
        
        {ritualState === 'initial' && (
          <div
            onClick={handleCut}
            className="cursor-pointer group relative flex flex-col items-center justify-center transition-transform hover:scale-105"
          >
            {/* Stacked Card Layers */}
            <div className="absolute -top-2 w-28 h-44 rounded-xl bg-[#141210] border border-[#292524] transform rotate-[-3deg]" />
            <div className="absolute -top-1 w-28 h-44 rounded-xl bg-[#141210] border border-[#292524] transform rotate-[3deg]" />
            <div className="relative w-28 h-44 rounded-xl overflow-hidden border border-[#292524] bg-[#141210] p-0.5">
              <img
                src={cardBackImage}
                alt="Deck"
                onError={(e) => { e.currentTarget.src = '/cards/CardBacks.png'; }}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="absolute -bottom-7 px-3 py-1 rounded-full bg-[#141210] border border-[#292524] text-xs font-sans text-[#f5f5f4] whitespace-nowrap">
              {texts.tapToCut[language]}
            </div>
          </div>
        )}

        {ritualState === 'cut' && (
          <div
            onClick={handleReunite}
            className="cursor-pointer group flex items-center justify-center gap-3.5 transition-all"
          >
            {/* Packet 1 (Left) */}
            <div className="w-22 sm:w-26 h-34 sm:h-40 rounded-xl overflow-hidden border border-[#292524] bg-[#141210] p-0.5 transform -rotate-6 hover:-translate-y-1 transition-all">
              <img
                src={cardBackImage}
                alt="Packet 1"
                onError={(e) => { e.currentTarget.src = '/cards/CardBacks.png'; }}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-1 left-0 right-0 text-[10px] font-mono text-center text-[#a8a29e] bg-black/70">
                Left (Past)
              </div>
            </div>

            {/* Packet 2 (Center) */}
            <div className="w-22 sm:w-26 h-34 sm:h-40 rounded-xl overflow-hidden border border-[#292524] bg-[#141210] p-0.5 transform hover:-translate-y-1 transition-all z-10">
              <img
                src={cardBackImage}
                alt="Packet 2"
                onError={(e) => { e.currentTarget.src = '/cards/CardBacks.png'; }}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-1 left-0 right-0 text-[10px] font-mono text-center text-[#a8a29e] bg-black/70">
                Center (Present)
              </div>
            </div>

            {/* Packet 3 (Right) */}
            <div className="w-22 sm:w-26 h-34 sm:h-40 rounded-xl overflow-hidden border border-[#292524] bg-[#141210] p-0.5 transform rotate-6 hover:-translate-y-1 transition-all">
              <img
                src={cardBackImage}
                alt="Packet 3"
                onError={(e) => { e.currentTarget.src = '/cards/CardBacks.png'; }}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-1 left-0 right-0 text-[10px] font-mono text-center text-[#a8a29e] bg-black/70">
                Right (Future)
              </div>
            </div>

            <div className="absolute -bottom-7 px-3 py-1 rounded-full bg-[#141210] border border-[#292524] text-xs font-sans text-[#f5f5f4] whitespace-nowrap">
              {texts.tapToReunite[language]}
            </div>
          </div>
        )}

        {ritualState === 'reuniting' && (
          <div className="relative flex items-center justify-center animate-pulse">
            <div className="w-28 h-44 rounded-xl overflow-hidden border border-[#292524] bg-[#141210] p-0.5">
              <img
                src={cardBackImage}
                alt="Deck Reunited"
                onError={(e) => { e.currentTarget.src = '/cards/CardBacks.png'; }}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        )}

        {ritualState === 'complete' && (
          <div className="space-y-3 animate-in zoom-in duration-200 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#141210] border border-[#292524] flex items-center justify-center text-[#86efac]">
              <Check className="w-6 h-6" />
            </div>
            <div className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
              {texts.sealed[language]}
            </div>
          </div>
        )}

      </div>

      {/* Action Footer */}
      {ritualState === 'complete' && (
        <button
          onClick={onCompleteRitual}
          className="btn-primary h-10 px-6 rounded-lg font-sans text-xs uppercase tracking-wider flex items-center space-x-2 mx-auto animate-in fade-in"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{texts.proceedBtn[language]}</span>
        </button>
      )}

    </div>
  );
};
