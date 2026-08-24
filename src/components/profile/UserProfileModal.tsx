import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, User, Compass, Check, Flame, Droplet, Wind, Mountain } from 'lucide-react';
import { Language } from '../../types/tarot';
import { UserProfile, ZodiacSignInfo } from '../../types/userProfile';
import { AstrologyService } from '../../services/astrologyService';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onProfileUpdated?: (profile: UserProfile) => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  language,
  onProfileUpdated
}) => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('1998-08-08');
  const [spiritualFocus, setSpiritualFocus] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const existing = AstrologyService.loadProfile();
    if (existing) {
      setName(existing.name);
      setBirthdate(existing.birthdate || '1998-08-08');
      setSpiritualFocus(existing.spiritualFocus || '');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentZodiac = AstrologyService.getZodiacSign(birthdate);
  const lifePath = AstrologyService.calculateLifePathNumber(birthdate);
  const birthCard = AstrologyService.calculateBirthTarotCard(birthdate);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const profile = AstrologyService.buildProfile(name, birthdate, spiritualFocus);
    AstrologyService.saveProfile(profile);
    if (onProfileUpdated) onProfileUpdated(profile);

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Fire':
        return <Flame className="w-4 h-4 text-amber-400" />;
      case 'Water':
        return <Droplet className="w-4 h-4 text-blue-400" />;
      case 'Air':
        return <Wind className="w-4 h-4 text-cyan-300" />;
      case 'Earth':
      default:
        return <Mountain className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#0c0a09] border border-[#292524] rounded-2xl p-6 sm:p-7 text-[#f5f5f4] overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#292524]">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-[#141210] border border-[#292524] text-[#f5f5f4]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {language === 'my' ? 'မွေးရာပါ ဇာတာနှင့် နက္ခတ်မှတ်တမ်း' : language === 'ja' ? '出生ホロスコープ・魂のカルテ' : 'Natal Chart & Soul Key'}
              </h2>
              <p className="text-xs text-[#78716c] font-sans">
                {language === 'my' ? 'သင့်မွေးနေ့ဖြင့် တာရော့စိုးမိုးကတ်နှင့် ရာသီခွင်ကို ချိတ်ဆက်ပါ' : language === 'ja' ? '生年月日から魂の守護カードと数秘を導きます' : 'Calculate your Zodiac Archetype, Soul Card, and Life Path'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg border border-transparent hover:border-[#292524] text-[#78716c] hover:text-[#f5f5f4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Natal Oracle Preview Card */}
        <div className="my-4 p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="text-2xl">{currentZodiac.symbol}</span>
              <div>
                <div className="text-sm font-serif font-bold text-[#f5f5f4]">
                  {currentZodiac.name[language]}
                </div>
                <div className="text-[11px] text-[#78716c] flex items-center space-x-1.5 font-mono">
                  <span>{currentZodiac.dates}</span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    {getElementIcon(currentZodiac.element)}
                    <span>{currentZodiac.element}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-[10px] uppercase font-mono tracking-wider text-[#78716c]">Life Path</div>
              <div className="text-lg font-serif font-bold text-[#f5f5f4]">#{lifePath}</div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#292524] flex items-center justify-between text-xs font-sans">
            <span className="text-[#78716c]">{language === 'my' ? 'အဓိက စိုးမိုးကတ်:' : language === 'ja' ? '魂の守護カード:' : 'Soul Birth Card:'}</span>
            <span className="text-[#f5f5f4] font-medium">{birthCard.name[language]}</span>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSave} className="space-y-3.5">
          <div>
            <label className="block text-xs font-sans text-[#a8a29e] mb-1 flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'သင့်အမည် / အမည်ဝှက်' : language === 'ja' ? 'お名前（またはニックネーム）' : 'Your Name / Querent Title'}</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={language === 'my' ? 'ဥပမာ - မင်းခန့်' : language === 'ja' ? '例：サクラ' : 'e.g. Luna or The Seeker'}
              className="w-full px-3 py-2 bg-[#141210] border border-[#292524] focus:border-[#78716c] rounded-lg text-xs sm:text-sm text-[#f5f5f4] placeholder-[#78716c] focus:outline-none transition-colors font-sans"
            />
          </div>

          <div>
            <label className="block text-xs font-sans text-[#a8a29e] mb-1 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'မွေးသက္ကရာဇ် (ရက် / လ / နှစ်)' : language === 'ja' ? '生年月日' : 'Date of Birth (YYYY-MM-DD)'}</span>
            </label>
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
              className="w-full px-3 py-2 bg-[#141210] border border-[#292524] focus:border-[#78716c] rounded-lg text-xs sm:text-sm text-[#f5f5f4] focus:outline-none transition-colors font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-sans text-[#a8a29e] mb-1 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'လက်ရှိ အာရုံစိုက်လိုသော ဆုတောင်း / ရည်မှန်းချက် (ရွေးချယ်ရန်)' : language === 'ja' ? '現在の祈り・人生のフォーカス（任意）' : 'Spiritual Focus / Sacred Intention (Optional)'}</span>
            </label>
            <input
              type="text"
              value={spiritualFocus}
              onChange={(e) => setSpiritualFocus(e.target.value)}
              placeholder={language === 'my' ? 'ဥပမာ - စိတ်အေးချမ်းမှုနှင့် စီးပွားတိုးတက်ရေး' : language === 'ja' ? '例：心の平穏、天職の開花' : 'e.g. Inner peace, creative purpose'}
              className="w-full px-3 py-2 bg-[#141210] border border-[#292524] focus:border-[#78716c] rounded-lg text-xs sm:text-sm text-[#f5f5f4] placeholder-[#78716c] focus:outline-none transition-colors font-sans"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-primary w-full h-10 rounded-lg text-xs font-sans uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-[#86efac]" />
                  <span>{language === 'my' ? 'ဇာတာ မှတ်တမ်းတင်ပြီးပါပြီ ✓' : language === 'ja' ? 'カルテを記録しました ✓' : 'Natal Chart Aligned ✓'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{language === 'my' ? 'ဇာတာ အတည်ပြုသိမ်းဆည်းမည်' : language === 'ja' ? 'ホロスコープを確定する' : 'Attune & Save Profile'}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
