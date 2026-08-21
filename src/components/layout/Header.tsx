import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, BookOpen, Scroll, Music, ChevronDown, Globe, Check } from 'lucide-react';
import { Language } from '../../types/tarot';
import { UI_TRANSLATIONS } from '../../data/translations';
import { audioService } from '../../services/audioService';

interface HeaderProps {
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenJournal: () => void;
  onOpenCodex: () => void;
  onResetHome: () => void;
  journalCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onSelectLanguage,
  onOpenJournal,
  onOpenCodex,
  onResetHome,
  journalCount
}) => {
  const [isMuted, setIsMuted] = useState(audioService.getMuted());
  const [isAmbientOn, setIsAmbientOn] = useState(audioService.getIsAmbientPlaying());
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showVolumeMenu, setShowVolumeMenu] = useState(false);
  const [volume, setVolume] = useState(audioService.getVolume());

  const langMenuRef = useRef<HTMLDivElement>(null);
  const volMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
      if (volMenuRef.current && !volMenuRef.current.contains(event.target as Node)) {
        setShowVolumeMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleMute = () => {
    const muted = audioService.toggleMute();
    setIsMuted(muted);
  };

  const handleToggleAmbient = () => {
    const playing = audioService.toggleAmbientDrone();
    setIsAmbientOn(playing);
    audioService.playSingingBowl(432);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioService.setVolume(val);
  };

  const languages: { id: Language; label: string; nativeName: string; flag: string }[] = [
    { id: 'en', label: 'English', nativeName: 'English', flag: '🇬🇧' },
    { id: 'my', label: 'Burmese', nativeName: 'မြန်မာဘာသာ', flag: '🇲🇲' },
    { id: 'ja', label: 'Japanese', nativeName: '日本語', flag: '🇯🇵' }
  ];

  const currentLangObj = languages.find(l => l.id === language) || languages[0];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#07040f]/80 border-b border-white/[0.08] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left: Clean Brand Logo & Subtitle */}
        <button
          onClick={onResetHome}
          className="group flex flex-col items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-lg py-1 transition-transform active:scale-95"
        >
          <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.24em] text-[#d4af37] text-shadow-gold group-hover:text-amber-200 transition-colors">
            ✦ ARCANIUM ✦
          </span>
          <span className="text-[10px] text-zinc-400 font-serif italic tracking-wide">
            {UI_TRANSLATIONS.appSubtitle[language]}
          </span>
        </button>

        {/* Right: Controls Hub */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          
          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center space-x-1.5 h-8 px-3 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#d4af37]/50 text-xs text-[#e8e0f5] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-serif font-medium">{currentLangObj.nativeName}</span>
              <ChevronDown className={`w-3 h-3 text-zinc-400 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#110924] border border-white/[0.12] shadow-2xl p-1 z-50 animate-in fade-in slide-in-from-top-1 backdrop-blur-2xl">
                {languages.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => {
                      onSelectLanguage(lang.id);
                      setShowLangMenu(false);
                      audioService.playCardSlide();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs font-serif transition-all active:scale-[0.98] ${
                      language === lang.id
                        ? 'bg-[#d4af37]/15 text-[#d4af37] font-semibold border border-[#d4af37]/30'
                        : 'hover:bg-white/5 text-zinc-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                    </div>
                    {language === lang.id && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 78-Card Deck Codex Button */}
          <button
            onClick={() => {
              audioService.playCardSlide();
              onOpenCodex();
            }}
            className="hidden sm:flex items-center space-x-1.5 h-8 px-3 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#d4af37]/50 text-xs text-zinc-300 hover:text-[#d4af37] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] active:scale-95"
            title={UI_TRANSLATIONS.codexBtn[language]}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-serif">{UI_TRANSLATIONS.codexBtn[language]}</span>
          </button>

          {/* Journal Button with Count Pill */}
          <button
            onClick={() => {
              audioService.playCardSlide();
              onOpenJournal();
            }}
            className="relative flex items-center space-x-1.5 h-8 px-3 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#d4af37]/50 text-xs text-zinc-300 hover:text-[#d4af37] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] active:scale-95"
            title={UI_TRANSLATIONS.journalBtn[language]}
          >
            <Scroll className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden sm:inline font-serif">{UI_TRANSLATIONS.journalBtn[language]}</span>
            {journalCount > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[9px] font-mono font-bold rounded-full bg-[#d4af37] text-black">
                {journalCount}
              </span>
            )}
          </button>

          {/* Audio Console Hub */}
          <div className="relative flex items-center space-x-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.08]" ref={volMenuRef}>
            {/* Ambient Drone (432Hz) */}
            <button
              onClick={handleToggleAmbient}
              className={`p-1.5 rounded-full transition-all active:scale-90 ${
                isAmbientOn
                  ? 'bg-[#d4af37]/20 text-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title={UI_TRANSLATIONS.ambientAudio[language]}
            >
              <Music className="w-3.5 h-3.5" />
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={handleToggleMute}
              className={`p-1.5 rounded-full transition-all active:scale-90 ${
                isMuted ? 'text-rose-400' : 'text-zinc-300 hover:text-[#d4af37]'
              }`}
              title={UI_TRANSLATIONS.soundFx[language]}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Volume dropdown arrow */}
            <button
              onClick={() => setShowVolumeMenu(!showVolumeMenu)}
              className="p-1 text-zinc-400 hover:text-zinc-200 focus:outline-none"
            >
              <ChevronDown className={`w-2.5 h-2.5 transition-transform ${showVolumeMenu ? 'rotate-180' : ''}`} />
            </button>

            {showVolumeMenu && (
              <div className="absolute right-0 top-10 w-48 p-3.5 rounded-xl bg-[#110924] border border-white/[0.12] shadow-2xl z-50 backdrop-blur-2xl animate-in fade-in">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] mb-2 flex justify-between">
                  <span>Soundscape Volume</span>
                  <span>{Math.round(volume * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full accent-[#d4af37] cursor-pointer h-1.5 bg-zinc-700 rounded-lg"
                />
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};
