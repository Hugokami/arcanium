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

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0c0a09] border border-[#292524] rounded-2xl p-6 sm:p-7 text-[#f5f5f4] overflow-hidden max-h-[90vh] overflow-y-auto shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#292524] relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#141210] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {language === 'my' ? 'ယနေ့အတွက် နေ့စဉ် နိမိတ်ကတ်' : language === 'ja' ? '本日のデイリー・オラクル' : 'Daily Oracle of the Day'}
              </h2>
              <div className="flex items-center space-x-1.5 text-[11px] text-[#78716c] font-mono">
                <Calendar className="w-3 h-3" />
                <span>{new Date().toLocaleDateString(language === 'ja' ? 'ja-JP' : language === 'my' ? 'my-MM' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg border border-transparent hover:border-[#292524] text-[#78716c] hover:text-[#f5f5f4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Card Display */}
        <div className="my-5 flex flex-col items-center text-center space-y-3.5 relative z-10">
          <div className="relative group cursor-pointer" onClick={() => audioService.playCardHover()}>
            <div className="w-36 h-56 rounded-xl overflow-hidden border border-[#292524] bg-[#141210] p-0.5">
              <img
                src={`/cards/${dailyCard.file}`}
                alt={dailyCard.name[language]}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-[#78716c] mb-0.5">
              {dailyCard.arcana === 'major' ? `Major Arcana • ${dailyCard.romanNumeral}` : `${dailyCard.suit.toUpperCase()} • ${dailyCard.element}`}
            </div>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#f5f5f4]">
              {dailyCard.name[language]}
            </h3>
          </div>

          {/* Meaning & Intention */}
          <div className="p-3.5 rounded-xl bg-[#141210] border border-[#292524] text-xs sm:text-sm font-sans leading-relaxed text-[#a8a29e] text-left space-y-1.5">
            <div className="font-semibold text-[#f5f5f4] flex items-center space-x-1.5 text-xs font-serif">
              <Sparkles className="w-3.5 h-3.5 text-[#a8a29e]" />
              <span>{language === 'my' ? 'ယနေ့ လိုက်နာရမည့် နိမိတ်သတင်းစကား:' : language === 'ja' ? '今日を導く託宣の光:' : "Today's Sacred Guidance:"}</span>
            </div>
            <p>{dailyCard.uprightMeaning[language]}</p>
          </div>

          {/* Reflection Notepad */}
          <div className="w-full text-left space-y-1 pt-1">
            <label className="text-[11px] font-sans text-[#78716c]">
              {language === 'my' ? 'ယနေ့ အတွေးအမြင်နှင့် ခံစားချက် မှတ်တမ်း:' : language === 'ja' ? '本日の気づきと瞑想メモ:' : 'Daily Reflection & Manifestation Note:'}
            </label>
            <textarea
              value={reflection}
              onChange={(e) => handleSaveNote(e.target.value)}
              rows={2}
              placeholder={language === 'my' ? 'ယနေ့ ရရှိခဲ့သော သင်ခန်းစာ သို့မဟုတ် ခံစားချက်…' : language === 'ja' ? '今日心に残った気づきを記録…' : 'Jot down today’s insight or intention…'}
              className="w-full px-3 py-2 bg-[#141210] border border-[#292524] focus:border-[#78716c] rounded-lg text-xs text-[#f5f5f4] placeholder-[#78716c] focus:outline-none transition-colors font-sans resize-none"
            />
          </div>

          <div className="flex items-center justify-between w-full pt-2">
            <button
              onClick={handleDrawFresh}
              className="px-3 py-1.5 rounded-lg bg-[#141210] hover:bg-[#1c1917] border border-[#292524] text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] flex items-center space-x-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'နိမိတ်အသစ် ဆွဲမည်' : language === 'ja' ? '再抽出する' : 'Draw Fresh'}</span>
            </button>
            <button
              onClick={onClose}
              className="btn-primary h-8 px-4 rounded-lg text-xs font-sans font-medium tracking-wider transition-colors"
            >
              {language === 'my' ? 'ပြီးပြီ' : language === 'ja' ? '閉じる' : 'Blessed'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
