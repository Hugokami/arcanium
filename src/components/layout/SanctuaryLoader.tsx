import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, Eye, Shield } from 'lucide-react';
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
  '/cards/21-TheWorld.png'
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

    // Preload card images
    CRITICAL_ASSETS.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    });

    // Micro-delay simulation for high-craft atmospheric feel
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setStatusIndex(3);
          setTimeout(() => {
            setIsFadingOut(true);
            audioService.playSingingBowl(432);
            setTimeout(onLoaded, 700);
          }, 450);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(100, prev + step);
        if (next > 75) setStatusIndex(2);
        else if (next > 35) setStatusIndex(1);
        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[9990] bg-[#080410] flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-opacity duration-700 select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Mystical Background Astrolabe Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 sm:opacity-25 overflow-hidden">
        <div className="w-[260px] h-[260px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#d4af37]/40 animate-spin-slow" />
        <div className="w-[200px] h-[200px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-[#d4af37]/30 animate-reverse-spin" />
        <div className="w-[140px] h-[140px] sm:w-[240px] sm:h-[240px] rounded-full bg-[#d4af37]/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full space-y-6 sm:space-y-7">
        
        {/* Animated Sacred Seal Emblem */}
        <div className="relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#d4af37] bg-gradient-to-b from-[#1c1232] to-[#0c0617] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-transform duration-500 hover:scale-105">
            <div className="relative flex items-center justify-center">
              <Sun className="w-12 h-12 text-[#d4af37] animate-spin-slow" />
              <Eye className="w-6 h-6 text-amber-100 absolute" />
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>
        </div>

        {/* Branding & Status text */}
        <div className="space-y-2.5">
          <h1 className="text-xl sm:text-2xl font-serif font-normal tracking-[0.25em] text-[#d4af37] text-shadow-gold uppercase">
            ARCANIUM
          </h1>
          <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 h-5 transition-all duration-300">
            {statusMessages[statusIndex][language]}
          </p>
        </div>

        {/* Progress Bar & Numerical Percentage */}
        <div className="w-full max-w-xs space-y-2">
          <div className="h-1.5 w-full rounded-full bg-white/[0.08] p-0.5 overflow-hidden border border-white/[0.1]">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-200 rounded-full transition-all duration-200 shadow-[0_0_12px_rgba(212,175,55,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#d4af37]/80">
            <span>SANCTUARY ATTUNEMENT</span>
            <span className="font-bold text-amber-200">{progress}%</span>
          </div>
        </div>

      </div>

      {/* Outer subtle vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]" />
    </div>
  );
};
