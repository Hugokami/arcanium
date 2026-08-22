import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { Language } from '../../types/tarot';
import { audioService } from '../../services/audioService';

interface EntranceIntroProps {
  language: Language;
  onComplete: () => void;
}

export const EntranceIntro: React.FC<EntranceIntroProps> = ({
  language,
  onComplete
}) => {
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Attempt autoplay with sound, fallback to muted if browser blocks audio autoplay
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setHasStarted(true);
          })
          .catch(() => {
            // Autoplay with sound prevented by browser policy, mute and retry
            video.muted = true;
            setIsMuted(true);
            video.play().then(() => setHasStarted(true)).catch(() => {});
          });
      }
    }
  }, []);

  const handleFinish = () => {
    setIsFadingOut(true);
    audioService.playSingingBowl(432);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const enterText = {
    en: 'Enter Sanctuary',
    my: 'အာခေးနီးယမ်းသို့ ဝင်ရောက်မည်',
    ja: '聖域へ入る'
  };

  const skipText = {
    en: 'Skip Intro',
    my: 'နိဒါန်းကို ကျော်မည်',
    ja: 'スキップ'
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-800 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Fullscreen Video */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        playsInline
        autoPlay
        muted={isMuted}
        onEnded={handleFinish}
        className="w-full h-full object-cover select-none"
      />

      {/* Top Floating Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center space-x-2 sm:space-x-3 pt-[env(safe-area-inset-top,0px)]">
        {/* Sound Toggle */}
        <button
          onClick={toggleSound}
          className="h-8 sm:h-10 px-2.5 sm:px-3.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/20 backdrop-blur-md text-amber-200 hover:text-white flex items-center space-x-1.5 text-[11px] sm:text-xs font-serif transition-all"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          <span className="hidden xs:inline sm:inline">{isMuted ? 'Unmute' : 'Mute'}</span>
        </button>

        {/* Skip Intro */}
        <button
          onClick={handleFinish}
          className="h-8 sm:h-10 px-3.5 sm:px-5 rounded-full bg-black/70 hover:bg-black/90 border border-[#d4af37]/60 hover:border-[#d4af37] backdrop-blur-md text-amber-200 hover:text-white flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs font-serif font-bold uppercase tracking-wider transition-all shadow-lg active:scale-95"
        >
          <span>{skipText[language]}</span>
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </button>
      </div>

      {/* Bottom Center "Enter Sanctuary" Prompt */}
      <div className="absolute bottom-6 sm:bottom-12 inset-x-0 z-20 flex justify-center px-4 pointer-events-auto pb-[env(safe-area-inset-bottom,0px)]">
        <button
          onClick={handleFinish}
          className="group w-full max-w-[280px] sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] text-zinc-950 font-serif text-xs sm:text-sm font-bold uppercase tracking-[0.18em] shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:shadow-[0_0_50px_rgba(212,175,55,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2"
        >
          <Sparkles className="w-4 h-4 text-zinc-950 group-hover:rotate-12 transition-transform" />
          <span>{enterText[language]}</span>
        </button>
      </div>

      {/* Subtle vignette border */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
    </div>
  );
};
