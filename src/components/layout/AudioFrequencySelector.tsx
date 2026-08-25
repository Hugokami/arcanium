import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Play, Square, Sliders } from 'lucide-react';
import { Language } from '../../types/tarot';
import { audioService, SOLFEGGIO_PRESETS, SolfeggioFrequencyKey } from '../../services/audioService';

interface AudioFrequencySelectorProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const AudioFrequencySelector: React.FC<AudioFrequencySelectorProps> = ({
  language,
  isOpen,
  onClose
}) => {
  const [isPlaying, setIsPlaying] = useState(audioService.getIsAmbientPlaying());
  const [isMuted, setIsMuted] = useState(audioService.getMuted());
  const [volume, setVolume] = useState(audioService.getVolume());
  const [activeKey, setActiveKey] = useState<SolfeggioFrequencyKey>(audioService.getActiveFrequency());
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = audioService.subscribe(() => {
      setIsPlaying(audioService.getIsAmbientPlaying());
      setIsMuted(audioService.getMuted());
      setVolume(audioService.getVolume());
      setActiveKey(audioService.getActiveFrequency());
    });
    return unsub;
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectFrequency = (key: SolfeggioFrequencyKey) => {
    audioService.setActiveFrequency(key);
    if (!isPlaying) {
      audioService.startAmbientDrone();
    }
  };

  const handleTogglePlay = () => {
    audioService.toggleAmbientDrone();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    audioService.setVolume(newVol);
  };

  const handleToggleMute = () => {
    audioService.toggleMute();
  };

  const titles = {
    header: { en: 'Solfeggio Soundscapes', my: 'ဆိုးလ်ဖက်ဂျီယို အသံလှိုင်း စွမ်းအင်', ja: 'ソルフェジオ周波数・瞑想音響' },
    sub: { en: 'Binaural harmonic carrier waves for deep meditation & divination', my: 'တရားရှုမှတ်ခြင်းနှင့် တာရော့ဖတ်ကြားခြင်းအတွက် မြင့်မြတ်သော အသံလှိုင်းများ', ja: '瞑想と運命鑑定のための神聖バイノーラル音響' },
    active: { en: 'Active Harmonic', my: 'လက်ရှိ အသံလှိုင်း', ja: '現在の周波数' },
    volume: { en: 'Sanctuary Master Volume', my: 'အသံပမာဏ ထိန်းညှိမှု', ja: '音量調整' },
    playBtn: { en: 'Start Soundscape', my: 'အသံလှိုင်း စတင်မည်', ja: '音響を開始' },
    stopBtn: { en: 'Silence Drone', my: 'အသံလှိုင်း ပိတ်မည်', ja: '音響を停止' }
  };

  return (
    <div
      ref={popoverRef}
      className="absolute top-14 right-0 z-50 w-80 sm:w-96 rounded-2xl bg-[#0c0a09] border border-[#292524] p-4 sm:p-5 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150 text-[#f5f5f4]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#292524] pb-3">
        <div className="space-y-0.5">
          <div className="flex items-center space-x-1.5 text-xs font-serif font-bold text-[#f5f5f4]">
            <Sparkles className="w-3.5 h-3.5 text-[#a8a29e]" />
            <span>{titles.header[language]}</span>
          </div>
          <p className="text-[11px] text-[#78716c] font-sans">
            {titles.sub[language]}
          </p>
        </div>

        {/* Master Play/Stop toggle */}
        <button
          onClick={handleTogglePlay}
          className={`h-8 px-3 rounded-lg text-xs font-sans font-medium flex items-center space-x-1.5 transition-all ${
            isPlaying
              ? 'bg-[#1c1917] border border-[#78716c] text-[#f5f5f4]'
              : 'bg-[#f5f5f4] text-[#0c0a09] hover:bg-white'
          }`}
        >
          {isPlaying ? (
            <>
              <Square className="w-3 h-3 text-[#fca5a5]" />
              <span>Stop</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-current" />
              <span>Start</span>
            </>
          )}
        </button>
      </div>

      {/* Animated Cymatic Sacred Waveform Visualizer */}
      <div className="p-3 rounded-xl bg-[#141210] border border-[#292524] flex items-center space-x-3">
        <div className="w-12 h-12 flex-shrink-0 relative">
          <img
            src="/animations/solfeggio-cymatics.svg"
            alt="Cymatics Visualizer"
            className={`w-full h-full object-contain ${isPlaying ? 'opacity-100 animate-pulse' : 'opacity-40'}`}
          />
        </div>
        <div className="space-y-0.5 flex-1">
          <div className="text-[10px] font-mono text-[#38bdf8] uppercase">Active Frequency Matrix</div>
          <div className="text-xs font-serif font-bold text-[#f5f5f4]">
            {SOLFEGGIO_PRESETS[activeKey].name[language]}
          </div>
          <div className="text-[10px] text-[#78716c] font-mono">
            {SOLFEGGIO_PRESETS[activeKey].chakra[language]}
          </div>
        </div>
      </div>

      {/* Solfeggio Presets List */}
      <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
        {(Object.keys(SOLFEGGIO_PRESETS) as SolfeggioFrequencyKey[]).map((key) => {
          const preset = SOLFEGGIO_PRESETS[key];
          const isSelected = activeKey === key;
          return (
            <button
              key={key}
              onClick={() => handleSelectFrequency(key)}
              className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start space-x-2.5 ${
                isSelected
                  ? 'bg-[#1c1917] border-[#78716c] text-[#f5f5f4]'
                  : 'bg-[#141210] border-[#292524] hover:border-[#78716c]/50 text-[#a8a29e]'
              }`}
            >
              <div className="pt-0.5">
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: preset.color }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-[#f5f5f4] truncate">
                    {preset.name[language]}
                  </span>
                  <span className="text-[10px] font-mono text-[#78716c] pl-1">
                    {preset.hz}Hz
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#a8a29e] pt-0.5">
                  {preset.chakra[language]}
                </div>
                <p className="text-[11px] text-[#78716c] font-sans leading-snug line-clamp-1 pt-0.5">
                  {preset.benefit[language]}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Volume & Mute Controls */}
      <div className="pt-2 border-t border-[#292524] space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#78716c]">
          <span>{titles.volume[language]}</span>
          <span>{Math.round(volume * 100)}%</span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleToggleMute}
            className="p-1.5 rounded-lg bg-[#141210] border border-[#292524] text-[#a8a29e] hover:text-[#f5f5f4]"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#fca5a5]" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-1.5 bg-[#141210] rounded-lg appearance-none cursor-pointer accent-[#f5f5f4]"
          />
        </div>
      </div>
    </div>
  );
};
