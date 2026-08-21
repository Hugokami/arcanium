import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, BookOpen, Scroll, Music, ChevronDown, Globe } from 'lucide-react';
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

  const languages: { id: Language; label: string; flag: string }[] = [
    { id: 'en', label: 'English', flag: '🇬🇧' },
    { id: 'my', label: 'မြန်မာဘာသာ', flag: '🇲🇲' },
    { id: 'ja', label: '日本語', flag: '🇯🇵' }
  ];

  const currentLangObj = languages.find(l => l.id === language) || languages[0];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090514]/80 border-b border-[#8a7326]/30 transition-all shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        
        {/* Left: Arcana Brand */}
        <button
          onClick={onResetHome}
          className="group flex items-center space-x-3 text-left focus:outline-none transition-transform active:scale-95"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4af37]/30 to-[#8a7326]/10 p-[1px] shadow-gold-glow">
            <div className="w-full h-full rounded-[11px] bg-[#120924] flex items-center justify-center border border-[#d4af37]/40 group-hover:border-[#d4af37] transition-colors">
              <Sparkles className="w-4 h-4 text-[#d4af37] animate-pulse-slow" />
            </div>
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl font-normal tracking-[0.2em] text-[#d4af37] text-shadow-gold">
              ✦ ARCANIUM ✦
            </span>
            <p className="text-[10px] text-zinc-400 font-serif italic tracking-wide">
              {UI_TRANSLATIONS.appSubtitle[language]}
            </p>
          </div>
        </button>

        {/* Right: Controls (Language, Codex, Journal, Audio) */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-[#8a7326]/40 hover:border-[#d4af37] text-xs text-[#e8e0f5] transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-serif font-medium">{currentLangObj.label}</span>
              <ChevronDown className="w-3 h-3 text-zinc-400" />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#140c2d] border border-[#d4af37]/40 shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                {languages.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => {
                      onSelectLanguage(lang.id);
                      setShowLangMenu(false);
                      audioService.playCardSlide();
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-xl text-left text-xs font-serif transition-colors ${
                      language === lang.id
                        ? 'bg-[#d4af37]/20 text-[#d4af37] font-bold border border-[#d4af37]/30'
                        : 'hover:bg-white/5 text-zinc-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
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
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d4af37]/50 text-xs text-zinc-300 hover:text-[#d4af37] transition-all"
            title={UI_TRANSLATIONS.codexBtn[language]}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-serif">{UI_TRANSLATIONS.codexBtn[language]}</span>
          </button>

          {/* Journal Button */}
          <button
            onClick={() => {
              audioService.playCardSlide();
              onOpenJournal();
            }}
            className="relative flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d4af37]/50 text-xs text-zinc-300 hover:text-[#d4af37] transition-all"
            title={UI_TRANSLATIONS.journalBtn[language]}
          >
            <Scroll className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden sm:inline font-serif">{UI_TRANSLATIONS.journalBtn[language]}</span>
            {journalCount > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[10px] font-mono font-bold rounded-full bg-[#d4af37] text-black">
                {journalCount}
              </span>
            )}
          </button>

          {/* Sound Controls */}
          <div className="relative flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10">
            {/* Ambient Drone (432Hz) */}
            <button
              onClick={handleToggleAmbient}
              className={`p-1.5 rounded-full transition-all ${
                isAmbientOn
                  ? 'bg-[#d4af37]/25 text-[#d4af37] shadow-gold-glow'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              title={UI_TRANSLATIONS.ambientAudio[language]}
            >
              <Music className="w-3.5 h-3.5" />
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={handleToggleMute}
              className={`p-1.5 rounded-full transition-all ${
                isMuted ? 'text-rose-400' : 'text-zinc-300 hover:text-[#d4af37]'
              }`}
              title={UI_TRANSLATIONS.soundFx[language]}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Volume dropdown */}
            <button
              onClick={() => setShowVolumeMenu(!showVolumeMenu)}
              className="p-1 text-zinc-400 hover:text-zinc-200"
            >
              <ChevronDown className="w-2.5 h-2.5" />
            </button>

            {showVolumeMenu && (
              <div className="absolute right-0 top-10 w-44 p-3 rounded-xl bg-[#140c2d] border border-[#d4af37]/40 shadow-2xl z-50">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#d4af37] mb-2 flex justify-between">
                  <span>Volume</span>
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
