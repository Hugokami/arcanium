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
  '/animations/topic-general.svg',
  '/animations/spread-single.svg',
  '/animations/spread-trinity.svg',
  '/animations/spread-cross.svg',
  '/animations/spread-relationship.svg',
  '/animations/spread-fork.svg',
  '/animations/spread-chakra.svg',
  '/animations/spread-celtic.svg',
  '/animations/oracle-crystal-ball.svg'
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
      className={`fixed inset-0 z-[9990] bg-[#0c0a09] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden transition-all duration-700 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative z-10 flex flex-col items-center max-w-sm sm:max-w-md w-full space-y-6">
        
        {/* Animated SVG Emblem */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
          <img
            src="/animations/sanctuary-loader.svg"
            alt="Sanctuary Astrolabe"
            className="w-full h-full object-contain pointer-events-none select-none opacity-90"
          />
        </div>

        {/* Branding & Status Typography */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#141210] border border-[#292524] text-[10px] font-mono tracking-widest text-[#a8a29e] uppercase">
            <Sparkles className="w-3 h-3 text-[#a8a29e]" />
            <span>Sacred Sanctuary</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-widest text-[#f5f5f4] uppercase">
            ARCANIUM
          </h1>
          
          <p className="text-xs sm:text-sm font-sans text-[#a8a29e] h-5 transition-all duration-300">
            {statusMessages[statusIndex][language]}
          </p>
        </div>

        {/* Progress Bar & Numerical Metrics */}
        <div className="w-full max-w-xs space-y-2 pt-1">
          <div className="h-1 w-full rounded-full bg-[#141210] overflow-hidden border border-[#292524]">
            <div
              className="h-full bg-[#f5f5f4] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#78716c] px-0.5">
            <span>HARMONIZING</span>
            <span className="text-[#f5f5f4] font-semibold">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
};
