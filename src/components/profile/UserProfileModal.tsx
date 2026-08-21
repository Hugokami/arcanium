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
  }, [isOpen]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-[#0d0914] border border-[#d4af37]/35 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)] text-amber-50 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37]">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-serif font-semibold text-[#d4af37] tracking-wider">
                {language === 'my' ? 'မွေးရာပါ ဇာတာနှင့် နက္ခတ်မှတ်တမ်း' : language === 'ja' ? '出生ホロスコープ・魂のカルテ' : 'Natal Chart & Soul Key'}
              </h2>
              <p className="text-xs text-zinc-300 font-serif">
                {language === 'my' ? 'သင့်မွေးနေ့ဖြင့် တာရော့စိုးမိုးကတ်နှင့် ရာသီခွင်ကို ချိတ်ဆက်ပါ' : language === 'ja' ? '生年月日から魂の守護カードと数秘を導きます' : 'Calculate your Zodiac Archetype, Soul Card, and Life Path'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Natal Oracle Preview Card */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-white/[0.04] to-[#d4af37]/[0.06] border border-[#d4af37]/30 space-y-3 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-3xl filter drop-shadow-md">{currentZodiac.symbol}</span>
              <div>
                <div className="text-sm font-serif font-bold text-amber-200">
                  {currentZodiac.name[language]}
                </div>
                <div className="text-[11px] text-zinc-300 flex items-center space-x-1.5 font-mono">
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
              <div className="text-[10px] uppercase font-mono tracking-wider text-amber-300/80">Life Path</div>
              <div className="text-xl font-serif font-black text-[#d4af37]">#{lifePath}</div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-xs font-serif">
            <span className="text-zinc-300">{language === 'my' ? 'အဓိက စိုးမိုးကတ်:' : language === 'ja' ? '魂の守護カード:' : 'Soul Birth Card:'}</span>
            <span className="text-amber-300 font-semibold">{birthCard.name[language]}</span>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSave} className="space-y-4 relative z-10">
          <div>
            <label className="block text-xs font-serif font-medium text-amber-200/90 mb-1.5 flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'သင့်အမည် / အမည်ဝှက်' : language === 'ja' ? 'お名前（またはニックネーム）' : 'Your Name / Querent Title'}</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={language === 'my' ? 'ဥပမာ - မင်းခန့်' : language === 'ja' ? '例：サクラ' : 'e.g. Luna or The Seeker'}
              className="w-full px-3.5 py-2.5 bg-black/50 border border-white/[0.12] focus:border-[#d4af37] rounded-xl text-sm text-amber-100 placeholder:text-zinc-500 focus:outline-none transition-colors font-serif"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-medium text-amber-200/90 mb-1.5 flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'မွေးသက္ကရာဇ် (ရက် / လ / နှစ်)' : language === 'ja' ? '生年月日' : 'Date of Birth (YYYY-MM-DD)'}</span>
            </label>
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 bg-black/50 border border-white/[0.12] focus:border-[#d4af37] rounded-xl text-sm text-amber-100 focus:outline-none transition-colors font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-serif font-medium text-amber-200/90 mb-1.5 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'လက်ရှိ အာရုံစိုက်လိုသော ဆုတောင်း / ရည်မှန်းချက် (ရွေးချယ်ရန်)' : language === 'ja' ? '現在の祈り・人生のフォーカス（任意）' : 'Spiritual Focus / Sacred Intention (Optional)'}</span>
            </label>
            <input
              type="text"
              value={spiritualFocus}
              onChange={(e) => setSpiritualFocus(e.target.value)}
              placeholder={language === 'my' ? 'ဥပမာ - စိတ်အေးချမ်းမှုနှင့် စီးပွားတိုးတက်ရေး' : language === 'ja' ? '例：心の平穏、天職の開花' : 'e.g. Inner peace, creative purpose'}
              className="w-full px-3.5 py-2.5 bg-black/50 border border-white/[0.12] focus:border-[#d4af37] rounded-xl text-sm text-amber-100 placeholder:text-zinc-500 focus:outline-none transition-colors font-serif"
            />
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-amber-300 to-[#b89628] text-zinc-950 font-serif font-bold text-sm tracking-wider hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center space-x-2"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-900" />
                  <span>{language === 'my' ? 'ဇာတာ မှတ်တမ်းတင်ပြီးပါပြီ ✓' : language === 'ja' ? 'カルテを記録しました ✓' : 'Natal Chart Aligned ✓'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-zinc-950" />
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
