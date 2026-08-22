import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../../types/tarot';
import { audioService } from '../../services/audioService';

interface EntranceIntroProps {
  language: Language;
  onComplete: () => void;
}

export const EntranceIntro: React.FC<EntranceIntroProps> = ({
  onComplete
}) => {
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Unmuted by default as requested
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser security policy blocks unmuted autoplay without prior user gesture
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  }, []);

  const handleFinish = () => {
    if (isFadingOut) return;
    setIsFadingOut(true);
    audioService.playSingingBowl(432);
    setTimeout(() => {
      onComplete();
    }, 700);
  };

  return (
    <div
      onClick={handleFinish}
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 select-none cursor-pointer ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Fullscreen Video (Unmuted default, no UI overlay buttons) */}
      <video
        ref={videoRef}
        src="/intro.mp4"
        playsInline
        autoPlay
        onEnded={handleFinish}
        className="w-full h-full object-cover select-none"
      />

      {/* Subtle bottom touch hint that fades out */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center pointer-events-none opacity-40 hover:opacity-80 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-[#d4af37]/70 uppercase animate-pulse">
          ✦ Tap anywhere to enter sanctuary ✦
        </span>
      </div>

      {/* Vignette border */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" />
    </div>
  );
};
