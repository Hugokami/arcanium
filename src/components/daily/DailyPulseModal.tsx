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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-[#0c0718] border border-[#d4af37]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(212,175,55,0.25)] text-amber-50 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-gold-glow">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#d4af37]">
                {titles.title[language]}
              </h2>
              <p className="text-xs text-zinc-400 font-serif">
                {todayStr} • {titles.sub[language]}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs font-mono text-amber-200 flex items-center space-x-1.5 font-bold">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{streak} {titles.streakBadge[language]}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card of the Day Presentation */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-6 items-center">
          
          {/* Card Visual Left */}
          <div className="sm:col-span-5 flex flex-col items-center text-center space-y-2">
            <div className="w-40 h-64 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-gold-glow bg-black">
              <img
                src={`/cards/${card.file}`}
                alt={card.name[language]}
                style={{ transform: isReversed ? 'rotate(180deg)' : 'none' }}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-mono uppercase text-amber-300 font-bold">
              ✦ {card.name[language]} ✦
            </span>
          </div>

          {/* Morning Decree Right */}
          <div className="sm:col-span-7 space-y-4">
            
            {/* Morning Decree Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-[#d4af37]/40 space-y-2.5 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-xs font-serif font-bold text-[#d4af37]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{titles.morningTitle[language]}</span>
                </div>
                <button
                  onClick={handleSpeakDecree}
                  className={`p-1.5 rounded-lg border text-xs flex items-center space-x-1 transition-all ${
                    isSpeaking
                      ? 'bg-amber-400 text-black border-amber-400'
                      : 'bg-white/5 border-white/10 text-amber-200 hover:bg-white/10'
                  }`}
                >
                  {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  <span>{isSpeaking ? 'Mute' : 'Voice Decree'}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-amber-100 font-serif leading-relaxed italic">
                "{morningDecree[language]}"
              </p>
            </div>

            {/* Daily Core Insight */}
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs font-serif text-zinc-300 leading-relaxed">
              <b className="text-amber-200">Cosmic Focus: </b>
              {isReversed ? card.reversedMeaning[language] : card.uprightMeaning[language]}
            </div>

          </div>

        </div>

        {/* Evening Manifestation Reflection Box */}
        <div className="pt-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-serif font-bold text-indigo-300">
              <Moon className="w-4 h-4 text-indigo-400" />
              <span>{titles.eveningTitle[language]}</span>
            </div>
            <span className="text-[11px] text-zinc-400 font-serif">How did this card manifest in your day?</span>
          </div>

          <textarea
            value={reflectionText}
            onChange={(e) => setReflectionText(e.target.value)}
            placeholder="Record your syncs, insights, dreams, or lessons learned today..."
            rows={3}
            className="w-full p-4 rounded-2xl bg-black/50 border border-white/15 text-xs text-zinc-200 font-serif focus:outline-none focus:border-[#d4af37] resize-none"
          />

          <div className="flex items-center justify-end space-x-3">
            {savedSuccess && (
              <span className="text-xs font-serif text-emerald-400 flex items-center space-x-1 animate-in fade-in">
                <Check className="w-3.5 h-3.5" />
                <span>Journal Entry Saved!</span>
              </span>
            )}

            <button
              onClick={handleSaveReflection}
              className="btn-primary h-10 px-6 rounded-xl text-xs font-serif flex items-center space-x-1.5 uppercase tracking-wider"
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
