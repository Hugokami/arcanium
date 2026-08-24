import React, { useState, useEffect } from 'react';
import { X, Sparkles, Sun, Moon, Flame, Check, Volume2, VolumeX, Save, Calendar, Award } from 'lucide-react';
import { Language, TarotCard } from '../../types/tarot';
import { DailyPulseService, DailyPulseEntry } from '../../services/dailyPulseService';
import { VoiceOracleService } from '../../services/voiceOracleService';
import { audioService } from '../../services/audioService';

interface DailyPulseModalProps {
  language: Language;
  onClose: () => void;
}

export const DailyPulseModal: React.FC<DailyPulseModalProps> = ({
  language,
  onClose
}) => {
  const [todayData, setTodayData] = useState<{ card: TarotCard; isReversed: boolean }>(
    DailyPulseService.getTodayCard()
  );
  const [reflectionText, setReflectionText] = useState<string>('');
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(DailyPulseService.getStreak());

  const todayStr = new Date().toISOString().split('T')[0];
  const { card, isReversed } = todayData;
  const morningDecree = DailyPulseService.getMorningDecree(card, isReversed);

  useEffect(() => {
    const existing = DailyPulseService.getTodayEntry();
    if (existing && existing.eveningReflection) {
      setReflectionText(existing.eveningReflection);
    }
    const unsub = VoiceOracleService.subscribeState(setIsSpeaking);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      unsub();
      VoiceOracleService.stop();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleSaveReflection = () => {
    audioService.playCardSlide();
    const entry: DailyPulseEntry = {
      dateString: todayStr,
      cardId: card.id,
      isReversed,
      morningDecree,
      eveningReflection: reflectionText,
      streakCount: streak + 1
    };
    DailyPulseService.saveDailyEntry(entry);
    setStreak(s => s + 1);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleSpeakDecree = () => {
    if (isSpeaking) {
      VoiceOracleService.stop();
    } else {
      VoiceOracleService.speak(morningDecree[language], language);
    }
  };

  const titles = {
    title: { en: 'Daily Oracle Pulse & Evening Journal', my: 'နေ့စဉ် တာရော့နိုးထမှုနှင့် ညနေခင်း မှတ်တမ်း', ja: 'デイリー・オラクル神託＆夜の省察ジャーナル' },
    sub: { en: 'Your daily spiritual alignment and manifestation streak', my: 'နေ့စဉ် ဝိညာဉ်ရေးရာ စွမ်းအင်ချိန်ညှိမှုနှင့် ကံကြမ္မာ အလေ့အကျင့်', ja: '日々の霊的調律とマニフェステーション連続記録' },
    morningTitle: { en: 'Morning Sovereignty Decree', my: 'နံနက်ခင်း စိတ်စွမ်းအား သန္နိဋ္ဌာန်', ja: '朝の主権宣言（アファメーション）' },
    eveningTitle: { en: 'Evening Manifestation Reflection', my: 'ညနေခင်း ပြန်လည်သုံးသပ်ချက် မှတ်စု', ja: '夜の顕現・省察ジャーナル' },
    streakBadge: { en: 'Consecutive Day Streak', my: 'ရက်ဆက် လေ့ကျင့်မှု', ja: '日連続ストリーク' }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0c0a09] border border-[#292524] rounded-2xl p-6 sm:p-7 text-[#f5f5f4] overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#292524] pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#141210] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {titles.title[language]}
              </h2>
              <p className="text-xs text-[#78716c] font-sans">
                {todayStr} • {titles.sub[language]}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="px-2.5 py-1 rounded bg-[#1c1917] border border-[#292524] text-xs font-mono text-[#a8a29e] flex items-center space-x-1.5">
              <Flame className="w-3.5 h-3.5 text-[#fca5a5]" />
              <span>{streak} {titles.streakBadge[language]}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded-lg border border-transparent hover:border-[#292524] text-[#78716c] hover:text-[#f5f5f4] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card of the Day Presentation */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 pt-5 items-center">
          
          {/* Card Visual Left */}
          <div className="sm:col-span-5 flex flex-col items-center text-center space-y-2">
            <div className="w-36 h-56 rounded-xl overflow-hidden border border-[#292524] bg-[#141210]">
              <img
                src={`/cards/${card.file}`}
                alt={card.name[language]}
                style={{ transform: isReversed ? 'rotate(180deg)' : 'none' }}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-mono uppercase text-[#a8a29e]">
              ✦ {card.name[language]} ✦
            </span>
          </div>

          {/* Morning Decree Right */}
          <div className="sm:col-span-7 space-y-3.5">
            
            {/* Morning Decree Box */}
            <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs font-serif font-bold text-[#f5f5f4]">
                  <Sparkles className="w-3.5 h-3.5 text-[#a8a29e]" />
                  <span>{titles.morningTitle[language]}</span>
                </div>
                <button
                  onClick={handleSpeakDecree}
                  className={`px-2 py-1 rounded text-xs flex items-center space-x-1 transition-all border ${
                    isSpeaking
                      ? 'bg-[#292524] text-[#f5f5f4] border-[#78716c]'
                      : 'bg-[#0c0a09] border-[#292524] text-[#a8a29e] hover:text-[#f5f5f4]'
                  }`}
                >
                  {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{isSpeaking ? 'Mute' : 'Voice Decree'}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#f5f5f4] font-sans leading-relaxed italic">
                "{morningDecree[language]}"
              </p>
            </div>

            {/* Daily Core Insight */}
            <div className="p-3.5 rounded-xl bg-[#141210] border border-[#292524] text-xs font-sans text-[#a8a29e] leading-relaxed">
              <b className="text-[#f5f5f4]">Cosmic Focus: </b>
              {isReversed ? card.reversedMeaning[language] : card.uprightMeaning[language]}
            </div>

          </div>

        </div>

        {/* Evening Manifestation Reflection Box */}
        <div className="pt-5 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-serif font-bold text-[#f5f5f4]">
              <Moon className="w-4 h-4 text-[#a8a29e]" />
              <span>{titles.eveningTitle[language]}</span>
            </div>
            <span className="text-[11px] text-[#78716c] font-sans">How did this card manifest in your day?</span>
          </div>

          <textarea
            value={reflectionText}
            onChange={(e) => setReflectionText(e.target.value)}
            placeholder="Record your syncs, insights, dreams, or lessons learned today..."
            rows={3}
            className="w-full p-3 rounded-xl bg-[#141210] border border-[#292524] text-xs text-[#f5f5f4] placeholder-[#78716c] font-sans focus:outline-none focus:border-[#78716c] resize-none"
          />

          <div className="flex items-center justify-end space-x-3">
            {savedSuccess && (
              <span className="text-xs font-sans text-[#86efac] flex items-center space-x-1 animate-in fade-in">
                <Check className="w-3.5 h-3.5" />
                <span>Journal Entry Saved!</span>
              </span>
            )}

            <button
              onClick={handleSaveReflection}
              className="btn-primary h-9 px-5 rounded-lg text-xs font-sans flex items-center space-x-1.5 uppercase tracking-wider"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Daily Reflection</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
