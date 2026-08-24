import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, BookOpen, Scroll, Music, ChevronDown, Globe, Check, Sun, Compass, Layers, Sparkles, MoreHorizontal } from 'lucide-react';
import { Language } from '../../types/tarot';
import { UI_TRANSLATIONS } from '../../data/translations';
import { audioService } from '../../services/audioService';
import { UserProfile } from '../../types/userProfile';

interface HeaderProps {
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenJournal: () => void;
  onOpenCodex: () => void;
  onOpenProfile: () => void;
  onOpenDailyCard: () => void;
  onOpenBirthMatrix?: () => void;
  onOpenDeckTheme?: () => void;
  onOpenTreeOfLife?: () => void;
  onResetHome: () => void;
  journalCount: number;
  userProfile?: UserProfile | null;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onSelectLanguage,
  onOpenJournal,
  onOpenCodex,
  onOpenProfile,
  onOpenDailyCard,
  onOpenBirthMatrix,
  onOpenDeckTheme,
  onOpenTreeOfLife,
  onResetHome,
  journalCount,
  userProfile
}) => {
  const [isMuted, setIsMuted] = useState(audioService.getMuted());
  const [isAmbientOn, setIsAmbientOn] = useState(audioService.getIsAmbientPlaying());
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showVolumeMenu, setShowVolumeMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [volume, setVolume] = useState(audioService.getVolume());

  const langMenuRef = useRef<HTMLDivElement>(null);
  const volMenuRef = useRef<HTMLDivElement>(null);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
      if (volMenuRef.current && !volMenuRef.current.contains(event.target as Node)) {
        setShowVolumeMenu(false);
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setShowMoreMenu(false);
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
    { id: 'en', label: 'English', nativeName: 'English', flag: 'EN' },
    { id: 'my', label: 'Burmese', nativeName: 'မြန်မာဘာသာ', flag: 'MY' },
    { id: 'ja', label: 'Japanese', nativeName: '日本語', flag: 'JA' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0c0a09]/95 border-b border-[#292524] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        
        {/* Left: Clean Brand Logo & Subtitle */}
        <button
          onClick={onResetHome}
          className="group flex items-center space-x-2.5 text-left focus:outline-none rounded-md py-1 transition-transform active:scale-98 flex-shrink-0"
        >
          <span className="text-[#f5f5f4] text-xs">✦</span>
          <span className="font-serif text-sm sm:text-base font-bold tracking-[0.2em] text-[#f5f5f4] group-hover:text-amber-200 transition-colors uppercase">
            ARCANIUM
          </span>
          <span className="hidden md:inline text-[11px] text-[#78716c] font-sans pl-1.5 border-l border-[#292524]">
            {UI_TRANSLATIONS.appSubtitle[language]}
          </span>
        </button>

        {/* Right: Minimalist Controls Hub */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          
          {/* Daily Oracle / Pulse Button */}
          <button
            onClick={() => {
              audioService.playCardFlip();
              onOpenDailyCard();
            }}
            className="flex items-center space-x-1.5 h-8 px-2.5 sm:px-3 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#44403c] text-xs text-[#f5f5f4] transition-all focus:outline-none active:scale-98"
            title={UI_TRANSLATIONS.dailyCardBtn[language]}
          >
            <Sun className="w-3.5 h-3.5 text-[#a8a29e]" />
            <span className="hidden md:inline font-sans text-[11px] uppercase tracking-wider">{UI_TRANSLATIONS.dailyCardBtn[language]}</span>
          </button>

          {/* Birth Blueprint Button */}
          {onOpenBirthMatrix && (
            <button
              onClick={() => {
                audioService.playCardSlide();
                onOpenBirthMatrix();
              }}
              className="hidden lg:flex items-center space-x-1.5 h-8 px-2.5 sm:px-3 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#44403c] text-xs text-[#f5f5f4] transition-all focus:outline-none active:scale-98"
              title="Tarot Birth Blueprint"
            >
              <Compass className="w-3.5 h-3.5 text-[#a8a29e]" />
              <span className="font-sans text-[11px] uppercase tracking-wider">Blueprint</span>
            </button>
          )}

          {/* Deck Artistry / Card Back Theme Button */}
          {onOpenDeckTheme && (
            <button
              onClick={() => {
                audioService.playCardSlide();
                onOpenDeckTheme();
              }}
              className="hidden xl:flex items-center space-x-1.5 h-8 px-2.5 sm:px-3 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#44403c] text-xs text-[#f5f5f4] transition-all focus:outline-none active:scale-98"
              title="Sacred Deck Artistry"
            >
              <Layers className="w-3.5 h-3.5 text-[#a8a29e]" />
              <span className="font-sans text-[11px] uppercase tracking-wider">Decks</span>
            </button>
          )}

          {/* Tree of Life Astral Map Button */}
          {onOpenTreeOfLife && (
            <button
              onClick={() => {
                audioService.playCardSlide();
                onOpenTreeOfLife();
              }}
              className="hidden md:flex items-center space-x-1.5 h-8 px-2.5 sm:px-3 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#44403c] text-xs text-[#f5f5f4] transition-all focus:outline-none active:scale-98"
              title="Kabbalistic Tree of Life"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#a8a29e]" />
              <span className="font-sans text-[11px] uppercase tracking-wider">Tree of Life</span>
            </button>
          )}

          {/* Natal Profile Button */}
          <button
            onClick={() => {
              audioService.playCardSlide();
              onOpenProfile();
            }}
            className="flex items-center space-x-1.5 h-8 px-2 sm:px-3 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#44403c] text-xs text-[#f5f5f4] transition-all focus:outline-none active:scale-98"
            title={UI_TRANSLATIONS.profileBtn[language]}
          >
            <Compass className="w-3.5 h-3.5 text-[#a8a29e]" />
            <span className="hidden sm:inline font-sans text-[11px] max-w-[80px] truncate uppercase tracking-wider">
              {userProfile?.zodiacSign ? userProfile.name.split(' ')[0] : UI_TRANSLATIONS.profileBtn[language]}
            </span>
          </button>

          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center space-x-1 h-8 px-2.5 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#44403c] text-xs text-[#f5f5f4] transition-all focus:outline-none active:scale-98"
            >
              <Globe className="w-3.5 h-3.5 text-[#a8a29e]" />
              <span className="font-mono text-[11px] font-medium">
                {language.toUpperCase()}
              </span>
              <ChevronDown className={`w-3 h-3 text-[#78716c] transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 mt-1.5 w-44 rounded-lg bg-[#141210] border border-[#292524] shadow-modal p-1 z-50 animate-in fade-in">
                {languages.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => {
                      onSelectLanguage(lang.id);
                      setShowLangMenu(false);
                      audioService.playCardSlide();
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-left text-xs font-sans transition-all ${
                      language === lang.id
                        ? 'bg-[#1c1917] text-[#f5f5f4] font-semibold border border-[#292524]'
                        : 'hover:bg-[#1c1917] text-[#a8a29e]'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[10px] text-[#78716c]">{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                    </div>
                    {language === lang.id && <Check className="w-3.5 h-3.5 text-[#f5f5f4]" />}
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
            className="hidden lg:flex items-center space-x-1.5 h-8 px-2.5 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#44403c] text-xs text-[#f5f5f4] transition-all focus:outline-none active:scale-98"
            title={UI_TRANSLATIONS.codexBtn[language]}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#a8a29e]" />
            <span className="font-sans text-[11px] uppercase tracking-wider">{UI_TRANSLATIONS.codexBtn[language]}</span>
          </button>

          {/* Journal Button with Count */}
          <button
            onClick={() => {
              audioService.playCardSlide();
              onOpenJournal();
            }}
            className="relative flex items-center space-x-1.5 h-8 px-2.5 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#44403c] text-xs text-[#f5f5f4] transition-all focus:outline-none active:scale-98"
            title={UI_TRANSLATIONS.journalBtn[language]}
          >
            <Scroll className="w-3.5 h-3.5 text-[#a8a29e]" />
            <span className="hidden sm:inline font-sans text-[11px] uppercase tracking-wider">{UI_TRANSLATIONS.journalBtn[language]}</span>
            {journalCount > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[9px] font-mono font-semibold rounded bg-[#292524] text-[#f5f5f4]">
                {journalCount}
              </span>
            )}
          </button>

          {/* Mobile More Tools Dropdown */}
          <div className="relative md:hidden" ref={moreMenuRef}>
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[#141210] hover:bg-[#1c1917] border border-[#292524] text-[#a8a29e] hover:text-[#f5f5f4] transition-all focus:outline-none"
              title="Tools"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>

            {showMoreMenu && (
              <div className="absolute right-0 mt-1.5 w-48 rounded-lg bg-[#141210] border border-[#292524] shadow-modal p-1 z-50 animate-in fade-in space-y-0.5">
                <button
                  onClick={() => {
                    audioService.playCardSlide();
                    setShowMoreMenu(false);
                    onOpenCodex();
                  }}
                  className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-md text-left text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] hover:bg-[#1c1917] transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{UI_TRANSLATIONS.codexBtn[language]}</span>
                </button>

                {onOpenBirthMatrix && (
                  <button
                    onClick={() => {
                      audioService.playCardSlide();
                      setShowMoreMenu(false);
                      onOpenBirthMatrix();
                    }}
                    className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-md text-left text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] hover:bg-[#1c1917] transition-colors"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>Birth Blueprint</span>
                  </button>
                )}

                {onOpenDeckTheme && (
                  <button
                    onClick={() => {
                      audioService.playCardSlide();
                      setShowMoreMenu(false);
                      onOpenDeckTheme();
                    }}
                    className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-md text-left text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] hover:bg-[#1c1917] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Sacred Decks</span>
                  </button>
                )}

                {onOpenTreeOfLife && (
                  <button
                    onClick={() => {
                      audioService.playCardSlide();
                      setShowMoreMenu(false);
                      onOpenTreeOfLife();
                    }}
                    className="w-full flex items-center space-x-2.5 px-2.5 py-1.5 rounded-md text-left text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] hover:bg-[#1c1917] transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tree of Life</span>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Audio Console Hub */}
          <div className="relative flex items-center space-x-1 bg-[#141210] p-1 rounded-md border border-[#292524]" ref={volMenuRef}>
            {/* Ambient Drone (432Hz) */}
            <button
              onClick={handleToggleAmbient}
              className={`p-1 rounded transition-all active:scale-90 ${
                isAmbientOn
                  ? 'bg-[#1c1917] text-[#f5f5f4] border border-[#44403c]'
                  : 'text-[#78716c] hover:text-[#f5f5f4]'
              }`}
              title={UI_TRANSLATIONS.ambientAudio[language]}
            >
              <Music className="w-3.5 h-3.5" />
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={handleToggleMute}
              className={`p-1 rounded transition-all active:scale-90 ${
                isMuted ? 'text-rose-400' : 'text-[#78716c] hover:text-[#f5f5f4]'
              }`}
              title={UI_TRANSLATIONS.soundFx[language]}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* Volume dropdown arrow */}
            <button
              onClick={() => setShowVolumeMenu(!showVolumeMenu)}
              className="p-0.5 text-[#78716c] hover:text-[#f5f5f4] focus:outline-none"
            >
              <ChevronDown className={`w-2.5 h-2.5 transition-transform ${showVolumeMenu ? 'rotate-180' : ''}`} />
            </button>

            {showVolumeMenu && (
              <div className="absolute right-0 top-9 w-44 p-3 rounded-lg bg-[#141210] border border-[#292524] shadow-modal z-50 animate-in fade-in">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#a8a29e] mb-2 flex justify-between">
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
                  className="w-full accent-[#f5f5f4] cursor-pointer h-1 bg-[#292524] rounded"
                />
              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};
