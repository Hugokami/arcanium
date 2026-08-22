import React, { useState, useEffect } from 'react';
import { Language, SpreadDefinition, TopicOption } from '../../types/tarot';
import { TOPICS, SPREAD_CONFIGS, QUICK_INQUIRIES, UI_TRANSLATIONS, getSpreadConfig } from '../../data/translations';
import { audioService } from '../../services/audioService';
import { AstrologyService } from '../../services/astrologyService';
import { UserProfile } from '../../types/userProfile';
import { ArrowRight, Sparkles, MessageSquare, Compass, Check, User, Calendar, Lock, Unlock, Edit3, Heart, Coins, Sprout, Scale, Eye } from 'lucide-react';

interface ArcanaFlowSelectorProps {
  language: Language;
  onStartDrawing: (topic: string, question: string, spread: SpreadDefinition) => void;
}

export const ArcanaFlowSelector: React.FC<ArcanaFlowSelectorProps> = ({
  language,
  onStartDrawing
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedTopic, setSelectedTopic] = useState<TopicOption>(TOPICS[0]);
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [selectedSpread, setSelectedSpread] = useState<SpreadDefinition>(
    getSpreadConfig(TOPICS[0].suggestedSpread)
  );

  // Natal Profile Requirement State
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>('');
  const [birthdateInput, setBirthdateInput] = useState<string>('');

  useEffect(() => {
    const loaded = AstrologyService.loadProfile();
    setUserProfile(loaded);
    if (loaded) {
      setNameInput(loaded.name);
      setBirthdateInput(loaded.birthdate);
    } else {
      setIsEditingProfile(true);
    }
  }, []);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !birthdateInput.trim()) return;

    audioService.playSingingBowl(432);
    const profile = AstrologyService.buildProfile(nameInput.trim(), birthdateInput.trim());
    AstrologyService.saveProfile(profile);
    setUserProfile(profile);
    setIsEditingProfile(false);
  };

  const handleSelectTopic = (topic: TopicOption) => {
    if (!userProfile) {
      setIsEditingProfile(true);
      return;
    }
    audioService.playCardSlide();
    setSelectedTopic(topic);
    setSelectedSpread(getSpreadConfig(topic.suggestedSpread));
    setStep(2);
  };

  const handleQuickQuestionClick = (qText: string, topicIndex = 0) => {
    if (!userProfile) {
      setIsEditingProfile(true);
      return;
    }
    audioService.playCardSlide();
    setCustomQuestion(qText);
    setSelectedTopic(TOPICS[topicIndex]);
    setSelectedSpread(getSpreadConfig('three'));
    setStep(2);
  };

  const handleCustomQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userProfile) {
      setIsEditingProfile(true);
      return;
    }
    if (!customQuestion.trim()) return;
    audioService.playCardSlide();
    setStep(2);
  };

  const handleSelectSpread = (spread: SpreadDefinition) => {
    if (!userProfile) {
      setIsEditingProfile(true);
      return;
    }
    audioService.playSingingBowl(324);
    setSelectedSpread(spread);
    const finalQuestion = customQuestion.trim() || selectedTopic.defaultQuestion[language];
    const finalTopic = customQuestion.trim() ? customQuestion.trim() : selectedTopic.title[language];
    onStartDrawing(finalTopic, finalQuestion, spread);
  };

  const heroHeadline = {
    en: 'What mystery seeks your revelation?',
    my: 'သင်သိရှိလိုသော ကံကြမ္မာခေါင်းစဉ်ကို ရွေးချယ်ပါ',
    ja: '運命の扉を開く、あなたの問いを選んでください'
  };

  const heroSubtext = {
    en: 'Attune your natal chart, then select a domain or whisper a personal inquiry to commune with the 78 keys.',
    my: 'မွေးရာပါ ဇာတာမှတ်တမ်းကို ချိန်ညှိပြီး ကံကြမ္မာမေးခွန်းကို တိုက်ရိုက် မေးမြန်းပါ။',
    ja: '出生ホロスコープを調律し、心にある個人的な問いをカードに投げかけてください。'
  };

  const renderTopicSvgIcon = (topicId: string) => {
    switch (topicId) {
      case 'love':
        return (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:bg-rose-500/20 group-hover:border-rose-400/60 shadow-[0_0_24px_rgba(244,63,94,0.3)] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl border border-rose-400/25 animate-spin-slow pointer-events-none" />
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse text-rose-400 drop-shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
          </div>
        );
      case 'career':
        return (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 group-hover:border-amber-400/60 shadow-[0_0_24px_rgba(245,158,11,0.3)] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl border border-dashed border-amber-400/30 animate-spin-slow pointer-events-none" />
            <Compass className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-90 transition-transform duration-700 text-amber-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
          </div>
        );
      case 'fortune':
        return (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-300 group-hover:scale-110 group-hover:bg-yellow-500/20 group-hover:border-yellow-400/60 shadow-[0_0_24px_rgba(234,179,8,0.3)] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl border border-yellow-400/25 animate-spin-slow pointer-events-none" />
            <Coins className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300 text-yellow-300 drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]" />
          </div>
        );
      case 'growth':
        return (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/60 shadow-[0_0_24px_rgba(16,185,129,0.3)] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl border border-dashed border-emerald-400/30 animate-spin-slow pointer-events-none" />
            <Sprout className="w-6 h-6 sm:w-7 sm:h-7 group-hover:-translate-y-1 transition-transform duration-300 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
          </div>
        );
      case 'decision':
        return (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/20 group-hover:border-purple-400/60 shadow-[0_0_24px_rgba(168,85,247,0.3)] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl border border-purple-400/25 animate-spin-slow pointer-events-none" />
            <Scale className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300 text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
          </div>
        );
      default:
        return (
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/35 flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:bg-[#d4af37]/20 group-hover:border-[#d4af37]/70 shadow-[0_0_24px_rgba(212,175,55,0.35)] transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl border border-[#d4af37]/30 animate-spin-slow pointer-events-none" />
            <Eye className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300 text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.7)]" />
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-10 animate-in fade-in duration-500">
      
      {/* Ethereal Hero Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25 text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          <span>78 Keys of Wisdom</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal tracking-[0.16em] text-[#d4af37] text-shadow-gold">
          {heroHeadline[language]}
        </h1>
        <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed italic">
          {heroSubtext[language]}
        </p>
      </div>

      {/* MANDATORY NATAL PROFILE AT-TUNEMENT FORM (STEP 0) */}
      {(!userProfile || isEditingProfile) ? (
        <div className="craft-panel p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto space-y-6 border-2 border-[#d4af37]/60 shadow-[0_0_40px_rgba(212,175,55,0.2)] bg-gradient-to-b from-[#140b25] to-[#0d071a]">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-xs font-serif text-amber-200">
              <Lock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>
                {language === 'my'
                  ? 'မဖြစ်မနေ လိုအပ်သော မွေးရာပါ ဇာတာ အချက်အလက်'
                  : language === 'ja'
                  ? 'リーディングに必要な出生情報（必須）'
                  : 'Required Querent Natal Chart Attunement'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">
              {language === 'my'
                ? 'သင်၏ အမည်နှင့် မွေးသက္ကရာဇ်ကို ထည့်သွင်းပါ'
                : language === 'ja'
                ? 'お名前と生年月日をご入力ください'
                : 'Enter Your Name & Date of Birth'}
            </h2>
            <p className="text-xs text-zinc-300 font-serif leading-relaxed">
              {language === 'my'
                ? 'တိကျသော နက္ခတ်ဗေဒင်နှင့် တာရော့ပေါင်းစပ် ဟောကိန်းများအတွက် သင်၏ အမည်နှင့် မွေးရက် လိုအပ်ပါသည်။'
                : language === 'ja'
                ? '西洋占星術と数秘術の精密な照合のため、お名前と生年月日が必要です。'
                : 'To synthesize precise astrological correspondences, your name and birthday are required.'}
            </p>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-serif text-amber-200 flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{language === 'my' ? 'သင့်အမည်' : language === 'ja' ? 'お名前' : 'Your Sacred Name'}</span>
              </label>
              <input
                type="text"
                required
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder={language === 'my' ? 'ဥပမာ: မင်းမင်း' : language === 'ja' ? '例: アレクサンダー' : 'e.g., Alexander'}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.12] focus:border-[#d4af37] text-sm text-amber-100 font-serif focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-serif text-amber-200 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{language === 'my' ? 'မွေးသက္ကရာဇ် (YYYY-MM-DD)' : language === 'ja' ? '生年月日' : 'Date of Birth (YYYY-MM-DD)'}</span>
              </label>
              <input
                type="date"
                required
                value={birthdateInput}
                onChange={(e) => setBirthdateInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.12] focus:border-[#d4af37] text-sm text-amber-100 font-serif focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary h-12 rounded-xl text-sm font-serif font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-amber-900/30 active:scale-[0.98]"
            >
              <Unlock className="w-4 h-4 text-zinc-950" />
              <span>
                {language === 'my'
                  ? '✦ ဇာတာချိန်ညှိပြီး တာရော့ဗေဒင် ဖွင့်မည် ✦'
                  : language === 'ja'
                  ? '✦ 調律を完了してリーディングを開始 ✦'
                  : '✦ Attune Soul & Unlock Reading ✦'}
              </span>
            </button>
          </form>
        </div>
      ) : (
        /* NATAL AFFINITY ACTIVE BADGE */
        <div className="craft-panel p-4 rounded-2xl max-w-xl mx-auto flex items-center justify-between gap-4 border border-[#d4af37]/40 bg-[#d4af37]/5 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-lg font-serif text-[#d4af37] font-bold">
              {userProfile.zodiacSign?.symbol || '♈'}
            </div>
            <div className="text-left space-y-0.5">
              <div className="text-xs font-serif text-amber-100 font-bold flex items-center space-x-1.5">
                <span>{userProfile.name}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-[#d4af37]">{userProfile.zodiacSign?.name[language]}</span>
              </div>
              <div className="text-[11px] font-mono text-zinc-300">
                Life Path #{userProfile.lifePathNumber} • Soul Card: {userProfile.birthTarotCardName?.[language] || ''}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsEditingProfile(true)}
            className="text-xs font-serif text-amber-300/80 hover:text-[#d4af37] underline flex items-center space-x-1 flex-shrink-0"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{language === 'my' ? 'ပြင်မည်' : language === 'ja' ? '編集' : 'Edit'}</span>
          </button>
        </div>
      )}

      {/* STEP 1: Domain Cards & Personal Portal */}
      {step === 1 && userProfile && !isEditingProfile && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          {/* 6 Rich Domain Tiles with SVG Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TOPICS.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              const desc = topic.description ? topic.description[language] : '';

              return (
                <div
                  key={topic.id}
                  onClick={() => handleSelectTopic(topic)}
                  onMouseEnter={() => audioService.playCardHover()}
                  className={`group relative craft-card p-5 sm:p-6 rounded-2xl cursor-pointer flex flex-col justify-between space-y-4 active:scale-[0.98] ${
                    isSelected ? 'border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_24px_rgba(212,175,55,0.25)]' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      {renderTopicSvgIcon(topic.id)}
                    </div>

                    <h3 className="font-serif font-semibold text-base sm:text-lg text-[#d4af37] group-hover:text-amber-200 tracking-wide">
                      {topic.title[language]}
                    </h3>

                    {desc && (
                      <p className="text-xs text-zinc-300 font-serif leading-relaxed line-clamp-2">
                        {desc}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-serif text-amber-300/75 group-hover:text-[#d4af37] pt-2.5 border-t border-white/[0.08]">
                    <span className="italic truncate max-w-[210px]">{topic.defaultQuestion[language]}</span>
                    <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-1 transition-transform ml-1.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* STEP 2: Choose your spread with Mini Visual Slot Diagrams */}
      {step === 2 && userProfile && (
        <section className="craft-panel p-6 sm:p-10 rounded-2xl space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
            <div className="space-y-0.5">
              <h2 className="text-[#d4af37] font-serif tracking-[0.18em] text-xs sm:text-sm uppercase font-semibold">
                {UI_TRANSLATIONS.step2Title[language]}
              </h2>
              <p className="text-xs text-zinc-300 font-serif italic">
                {UI_TRANSLATIONS.topicLabel[language]}: <span className="text-[#d4af37] font-semibold">{customQuestion.trim() ? `"${customQuestion}"` : selectedTopic.title[language]}</span>
              </p>
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs font-serif text-zinc-400 hover:text-[#d4af37] underline transition-colors active:scale-95"
            >
              {UI_TRANSLATIONS.changeTopicBtn[language]}
            </button>
          </div>

          {/* Spreads Grid with Mini Card Slot Diagrams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {SPREAD_CONFIGS.map(spread => (
              <button
                key={spread.id}
                onClick={() => handleSelectSpread(spread)}
                onMouseEnter={() => audioService.playCardHover()}
                className="group craft-card p-5 sm:p-6 rounded-2xl text-left flex flex-col justify-between space-y-4 cursor-pointer active:scale-[0.98]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-serif font-bold text-base sm:text-lg text-[#d4af37] group-hover:text-amber-200 tracking-wide">
                      {spread.name[language]}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-amber-200">
                      {spread.cardCount} {spread.cardCount === 1 ? UI_TRANSLATIONS.oneCardPick[language] : UI_TRANSLATIONS.cardsPick[language]}
                    </span>
                  </div>

                  {/* Mini Visual Slot Diagram */}
                  <div className="flex items-center flex-wrap gap-1.5 py-1">
                    {Array.from({ length: spread.cardCount }).map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-7 rounded border border-[#8a7326]/60 bg-black/40 group-hover:border-[#d4af37] transition-colors"
                      />
                    ))}
                  </div>

                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {spread.subtitle[language]}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-serif text-amber-300/80 group-hover:text-[#d4af37] pt-3 border-t border-white/[0.08]">
                  <span>{UI_TRANSLATIONS.communeAndDrawBtn[language]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>

        </section>
      )}

    </div>
  );
};
