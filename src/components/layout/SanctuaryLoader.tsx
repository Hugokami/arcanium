import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Language } from '../../types/tarot';
import { audioService } from '../../services/audioService';

interface SanctuaryLoaderProps {
  language: Language;
  onLoaded: () => void;
}

const CRITICAL_ASSETS = [
  '/cards/CardBacks.png',
  '/cards/00-TheFool.png',
  '/cards/01-TheMagician.png',
  '/cards/02-TheHighPriestess.png',
  '/cards/03-TheEmpress.png',
  '/cards/04-TheEmperor.png',
  '/cards/10-WheelOfFortune.png',
  '/cards/13-Death.png',
  '/cards/17-TheStar.png',
  '/cards/18-TheMoon.png',
  '/cards/19-TheSun.png',
  '/cards/21-TheWorld.png',
  '/animations/sanctuary-loader.svg',
  '/animations/topic-love.svg',
  '/animations/topic-career.svg',
  '/animations/topic-fortune.svg',
  '/animations/topic-growth.svg',
  '/animations/topic-decision.svg',
  '/animations/topic-general.svg'
];

export const SanctuaryLoader: React.FC<SanctuaryLoaderProps> = ({
  language,
  onLoaded
}) => {
  const [progress, setProgress] = useState<number>(0);
  const [statusIndex, setStatusIndex] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const statusMessages = [
    {
      en: 'Aligning with Celestial Spheres…',
      my: 'စကြဝဠာ နက္ခတ်ကြယ်တာရာများကို ချိန်ညှိနေသည်…',
      ja: '天球の軌道を調律中…'
    },
    {
      en: 'Awakening the 78 Sacred Keys…',
      my: '၇၈ ပြားသော တာရော့သော့ချက်များကို နိုးထစေနေသည်…',
      ja: '78枚の聖なる鍵を覚醒中…'
    },
    {
      en: 'Attuning to Lunar & Planetary Transits…',
      my: 'လနက္ခတ်နှင့် ဂြိုဟ်သွားဂြိုဟ်လာ စွမ်းအင်များကို ဖမ်းယူနေသည်…',
      ja: '月相と天体の波動に感応中…'
    },
    {
      en: 'The Sanctuary of Arcanium Awakens.',
      my: 'အာခေးနီးယမ်း ကံကြမ္မာဂူဗိမာန် ဖွင့်လှစ်ပါပြီ။',
      ja: 'アルカニウムの聖域が開かれました。'
    }
  ];

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = CRITICAL_ASSETS.length;

    const updateProgress = () => {
      loadedCount++;
      const currentPct = Math.min(95, Math.round((loadedCount / totalAssets) * 85));
      setProgress(currentPct);

      if (currentPct > 65) {
        setStatusIndex(2);
      } else if (currentPct > 30) {
        setStatusIndex(1);
      }
    };

    // Preload critical assets
    CRITICAL_ASSETS.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    });

    // Smooth rhythmic progression
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setStatusIndex(3);
          setTimeout(() => {
            setIsFadingOut(true);
            audioService.playSingingBowl(432);
            setTimeout(onLoaded, 800);
          }, 450);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(100, prev + step);
        if (next > 75) setStatusIndex(2);
        else if (next > 35) setStatusIndex(1);
        return next;
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[9990] bg-[#040208] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden transition-all duration-1000 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Deep Space Radial Aura & Astrolabe Atmosphere */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[340px] h-[340px] sm:w-[580px] sm:h-[580px] rounded-full bg-gradient-to-b from-[#8a5cf6]/10 to-[#d4af37]/15 blur-3xl animate-pulse-slow" />
        <div className="w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] rounded-full border border-[#d4af37]/15 animate-spin-slow pointer-events-none" />
        <div className="w-[200px] h-[200px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-[#8a5cf6]/20 animate-reverse-spin pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full space-y-6 sm:space-y-8">
        
        {/* Masterwork Animated SVG Emblem */}
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center filter drop-shadow-[0_0_35px_rgba(212,175,55,0.4)]">
          <img
            src="/animations/sanctuary-loader.svg"
            alt="Sanctuary Astrolabe"
            className="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>

        {/* Branding & Poetic Status Typography */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25 text-[10px] font-mono tracking-[0.25em] text-[#d4af37] uppercase">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span>Sacred Sanctuary</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-[0.3em] text-[#d4af37] text-shadow-gold uppercase">
            ARCANIUM
          </h1>
          
          <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 h-6 transition-all duration-300">
            {statusMessages[statusIndex][language]}
          </p>
        </div>

        {/* Luxury Progress Bar & Numerical Metrics */}
        <div className="w-full max-w-xs space-y-2.5 pt-1">
          <div className="h-1.5 w-full rounded-full bg-white/[0.06] p-0.5 overflow-hidden border border-white/[0.1] shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-100 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(212,175,55,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-amber-200/60 px-1">
            <span>HARMONIZING</span>
            <span className="text-[#d4af37] font-semibold">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};
