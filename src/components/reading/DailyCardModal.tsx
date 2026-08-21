import React, { useState, useEffect } from 'react';
import { X, Sparkles, Sun, Moon, Calendar, RotateCcw } from 'lucide-react';
import { Language, TarotCard } from '../../types/tarot';
import { TAROT_DECK } from '../../data/tarotDeck';
import { audioService } from '../../services/audioService';

interface DailyCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const DailyCardModal: React.FC<DailyCardModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [dailyCard, setDailyCard] = useState<TarotCard | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reflection, setReflection] = useState('');

  // Daily seed algorithm so card is consistent for the whole day, or can be drawn fresh
  const getDailyCard = (forceNew = false): TarotCard => {
    const today = new Date().toISOString().slice(0, 10);
    const stored = localStorage.getItem(`arcanium_daily_${today}`);

    if (stored && !forceNew) {
      const parsed = JSON.parse(stored);
      const found = TAROT_DECK.find(c => c.id === parsed.id);
      if (found) return found;
    }

    // Seeded random based on date string
    let seed = 0;
    for (let i = 0; i < today.length; i++) seed += today.charCodeAt(i);
    if (forceNew) seed = Math.floor(Math.random() * 100000);

    const card = TAROT_DECK[seed % TAROT_DECK.length];
    localStorage.setItem(`arcanium_daily_${today}`, JSON.stringify({ id: card.id, date: today }));
    return card;
  };

  useEffect(() => {
    if (isOpen) {
      const card = getDailyCard();
      setDailyCard(card);
      setIsFlipped(true);
      const savedNote = localStorage.getItem(`arcanium_daily_note_${new Date().toISOString().slice(0, 10)}`) || '';
      setReflection(savedNote);
    }
  }, [isOpen]);

  if (!isOpen || !dailyCard) return null;

  const handleSaveNote = (text: string) => {
    setReflection(text);
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem(`arcanium_daily_note_${today}`, text);
  };

  const handleDrawFresh = () => {
    audioService.playShuffle();
    setIsFlipped(false);
    setTimeout(() => {
      const newCard = getDailyCard(true);
      setDailyCard(newCard);
      setIsFlipped(true);
      audioService.playCardFlip();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-md bg-[#0d0914] border border-[#d4af37]/35 rounded-3xl p-6 sm:p-7 shadow-[0_0_50px_rgba(212,175,55,0.2)] text-amber-50 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow backdrop */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37]">
              <Sun className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-semibold text-[#d4af37] tracking-wider">
                {language === 'my' ? 'ယနေ့အတွက် နေ့စဉ် နိမိတ်ကတ်' : language === 'ja' ? '本日のデイリー・オラクル' : 'Daily Oracle of the Day'}
              </h2>
              <div className="flex items-center space-x-1.5 text-[11px] text-zinc-300 font-mono">
                <Calendar className="w-3 h-3" />
                <span>{new Date().toLocaleDateString(language === 'ja' ? 'ja-JP' : language === 'my' ? 'my-MM' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Display */}
        <div className="my-5 flex flex-col items-center text-center space-y-4 relative z-10">
          <div className="relative group cursor-pointer" onClick={() => audioService.playCardHover()}>
            <div className="w-36 h-60 sm:w-40 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_0_30px_rgba(212,175,55,0.25)] transition-transform duration-300 group-hover:scale-105">
              <img
                src={`/cards/${dailyCard.file}`}
                alt={dailyCard.name[language]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-0.5">
              {dailyCard.arcana === 'major' ? `Major Arcana • ${dailyCard.romanNumeral}` : `${dailyCard.suit.toUpperCase()} • ${dailyCard.element}`}
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-100">
              {dailyCard.name[language]}
            </h3>
          </div>

          {/* Meaning & Intention */}
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-[#d4af37]/25 text-xs sm:text-sm font-serif leading-relaxed text-amber-100/90 text-left space-y-2">
            <div className="font-semibold text-amber-300 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'ယနေ့ လိုက်နာရမည့် နိမိတ်သတင်းစကား:' : language === 'ja' ? '今日を導く託宣の光:' : "Today's Sacred Guidance:"}</span>
            </div>
            <p>{dailyCard.uprightMeaning[language]}</p>
          </div>

          {/* Reflection Notepad */}
          <div className="w-full text-left space-y-1.5 pt-1">
            <label className="text-[11px] font-serif text-zinc-300">
              {language === 'my' ? 'ယနေ့ အတွေးအမြင်နှင့် ခံစားချက် မှတ်တမ်း:' : language === 'ja' ? '本日の気づきと瞑想メモ:' : 'Daily Reflection & Manifestation Note:'}
            </label>
            <textarea
              value={reflection}
              onChange={(e) => handleSaveNote(e.target.value)}
              rows={2}
              placeholder={language === 'my' ? 'ယနေ့ ရရှိခဲ့သော သင်ခန်းစာ သို့မဟုတ် ခံစားချက်…' : language === 'ja' ? '今日心に残った気づきを記録…' : 'Jot down today’s insight or intention…'}
              className="w-full px-3 py-2 bg-black/50 border border-white/[0.12] focus:border-[#d4af37] rounded-xl text-xs text-amber-100 placeholder:text-zinc-500 focus:outline-none transition-colors font-serif resize-none"
            />
          </div>

          <div className="flex items-center justify-between w-full pt-2">
            <button
              onClick={handleDrawFresh}
              className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-xs font-serif text-amber-200/80 hover:text-amber-100 flex items-center space-x-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'နိမိတ်အသစ် ဆွဲမည်' : language === 'ja' ? '再抽出する' : 'Draw Fresh'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-1.5 rounded-lg bg-[#d4af37] hover:bg-amber-300 text-zinc-950 font-serif font-bold text-xs tracking-wider transition-colors shadow-sm"
            >
              {language === 'my' ? 'ပြီးပြီ' : language === 'ja' ? '閉じる' : 'Blessed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
