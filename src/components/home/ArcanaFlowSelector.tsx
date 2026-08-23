import React, { useState, useEffect } from 'react';
import { Language, SpreadDefinition, TopicOption } from '../../types/tarot';
import { TOPICS, SPREAD_CONFIGS, QUICK_INQUIRIES, UI_TRANSLATIONS, getSpreadConfig } from '../../data/translations';
import { audioService } from '../../services/audioService';
import { AstrologyService, ZODIAC_SIGNS } from '../../services/astrologyService';
import { UserProfile, ZodiacSignId } from '../../types/userProfile';
import { ArrowRight, Sparkles, MessageSquare, Compass, Check, User, Calendar, Lock, Unlock, Edit3, Heart, Coins, Sprout, Scale, Eye, Users, AlertCircle, Trash2 } from 'lucide-react';
import { DeckCutRitual } from '../ritual/DeckCutRitual';

interface ArcanaFlowSelectorProps {
  language: Language;
  onStartDrawing: (topic: string, question: string, spread: SpreadDefinition, partnerProfile?: UserProfile | null) => void;
}

export const ArcanaFlowSelector: React.FC<ArcanaFlowSelectorProps> = ({
  language,
  onStartDrawing
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
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

  // Partner / Counterpart Profile State
  const [partnerProfile, setPartnerProfile] = useState<UserProfile | null>(null);
  const [isEditingPartner, setIsEditingPartner] = useState<boolean>(false);
  const [partnerNameInput, setPartnerNameInput] = useState<string>('');
  const [partnerZodiacInput, setPartnerZodiacInput] = useState<ZodiacSignId | ''>('cancer');
  const [partnerBirthdateInput, setPartnerBirthdateInput] = useState<string>('');
  const [partnerError, setPartnerError] = useState<boolean>(false);
  const [isPartnerAttunementOpen, setIsPartnerAttunementOpen] = useState<boolean>(false);

  useEffect(() => {
    const loaded = AstrologyService.loadProfile();
    setUserProfile(loaded);
    if (loaded) {
      setNameInput(loaded.name);
      setBirthdateInput(loaded.birthdate);
    } else {
      setIsEditingProfile(true);
    }

    const loadedPartner = AstrologyService.loadPartnerProfile();
    if (loadedPartner) {
      setPartnerProfile(loadedPartner);
      setPartnerNameInput(loadedPartner.name);
      if (loadedPartner.zodiacSign) {
        setPartnerZodiacInput(loadedPartner.zodiacSign.id);
      }
      setPartnerBirthdateInput(loadedPartner.birthdate || '');
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'Escape') {
        if (step === 3) {
          audioService.playCardSlide();
          setStep(2);
        } else if (step === 2) {
          audioService.playCardSlide();
          setStep(1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step]);

  const isRelationshipReading =
    selectedTopic.id === 'love' ||
    selectedSpread.id === 'celtic' ||
    isPartnerAttunementOpen;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !birthdateInput.trim()) return;

    audioService.playSingingBowl(432);
    const profile = AstrologyService.buildProfile(nameInput.trim(), birthdateInput.trim());
    AstrologyService.saveProfile(profile);
    setUserProfile(profile);
    setIsEditingProfile(false);
  };

  const handleSavePartner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerNameInput.trim()) return;
    if (!partnerZodiacInput && !partnerBirthdateInput.trim()) return;

    audioService.playSingingBowl(528);
    const partner = AstrologyService.buildPartnerProfile(
      partnerNameInput.trim(),
      partnerZodiacInput ? (partnerZodiacInput as ZodiacSignId) : undefined,
      partnerBirthdateInput.trim() || undefined
    );
    AstrologyService.savePartnerProfile(partner);
    setPartnerProfile(partner);
    setIsEditingPartner(false);
    setPartnerError(false);
  };

  const handleClearPartner = () => {
    try {
      localStorage.removeItem('arcanium_partner_profile');
    } catch {
      // ignore
    }
    setPartnerProfile(null);
    setPartnerNameInput('');
    setPartnerBirthdateInput('');
    setIsEditingPartner(false);
    setIsPartnerAttunementOpen(false);
  };

  const handleSelectTopic = (topic: TopicOption) => {
    if (!userProfile) {
      setIsEditingProfile(true);
      return;
    }
    audioService.playCardSlide();
    setSelectedTopic(topic);
    setSelectedSpread(getSpreadConfig(topic.suggestedSpread));
    if (topic.id === 'love') {
      setIsPartnerAttunementOpen(true);
      if (!partnerProfile) {
        setIsEditingPartner(true);
      }
    }
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

    const needsPartner =
      selectedTopic.id === 'love' ||
      spread.id === 'celtic' ||
      isPartnerAttunementOpen;

    if (needsPartner && !partnerProfile) {
      setPartnerError(true);
      setIsEditingPartner(true);
      setIsPartnerAttunementOpen(true);
      audioService.playCardHover();
      window.scrollTo({ top: 300, behavior: 'smooth' });
      return;
    }

    audioService.playSingingBowl(324);
    setSelectedSpread(spread);
    setStep(3);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const handleFinishRitual = () => {
    const finalQuestion = customQuestion.trim() || selectedTopic.defaultQuestion[language];
    const finalTopic = customQuestion.trim() ? customQuestion.trim() : selectedTopic.title[language];
    onStartDrawing(finalTopic, finalQuestion, selectedSpread, partnerProfile);
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
    const fileMap: Record<string, string> = {
      love: '/animations/topic-love.svg',
      career: '/animations/topic-career.svg',
      fortune: '/animations/topic-fortune.svg',
      growth: '/animations/topic-growth.svg',
      decision: '/animations/topic-decision.svg',
      general: '/animations/topic-general.svg'
    };

    const svgSrc = fileMap[topicId] || '/animations/topic-general.svg';

    return (
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img
          src={svgSrc}
          alt={topicId}
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_12px_rgba(212,175,55,0.35)]"
        />
      </div>
    );
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
        <div className="craft-bezel-outer max-w-xl mx-auto">
          <div className="craft-bezel-inner p-4 sm:p-5 flex items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#d4af37]/25 to-[#8a5cf6]/20 border border-[#d4af37]/40 flex items-center justify-center text-xl font-serif text-[#d4af37] font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)] flex-shrink-0">
                {userProfile.zodiacSign?.symbol || '♈'}
              </div>
              <div className="text-left space-y-1">
                <div className="text-xs sm:text-sm font-serif text-amber-100 font-bold flex items-center space-x-2">
                  <span>{userProfile.name}</span>
                  <span className="text-[#d4af37]/60">•</span>
                  <span className="text-[#d4af37] font-semibold">{userProfile.zodiacSign?.name[language]}</span>
                </div>
                <div className="text-[11px] font-mono text-zinc-300">
                  Life Path #{userProfile.lifePathNumber} • Soul Key: <span className="text-amber-200/90">{userProfile.birthTarotCardName?.[language] || ''}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsEditingProfile(true)}
              className="text-xs font-serif text-amber-300/80 hover:text-[#d4af37] bg-white/[0.04] hover:bg-white/[0.08] px-3 py-1.5 rounded-full border border-white/[0.08] hover:border-[#d4af37]/40 transition-all flex items-center space-x-1.5 flex-shrink-0 active:scale-95"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{language === 'my' ? 'ပြင်မည်' : language === 'ja' ? '編集' : 'Edit'}</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 1: Domain Cards & Personal Portal */}
      {step === 1 && userProfile && !isEditingProfile && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          {/* 6 Rich Domain Tiles with Double-Bezel Hardware Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {TOPICS.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              const desc = topic.description ? topic.description[language] : '';

              return (
                <div
                  key={topic.id}
                  onClick={() => handleSelectTopic(topic)}
                  onMouseEnter={() => audioService.playCardHover()}
                  className={`group craft-bezel-outer cursor-pointer active:scale-[0.98] ${
                    isSelected ? 'border-[#d4af37] shadow-[0_0_30px_rgba(212,175,55,0.35)]' : ''
                  }`}
                >
                  <div className="craft-bezel-inner p-5 sm:p-6 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        {renderTopicSvgIcon(topic.id)}
                      </div>

                      <h3 className="font-serif font-semibold text-base sm:text-lg text-[#d4af37] group-hover:text-amber-200 tracking-wide transition-colors">
                        {topic.title[language]}
                      </h3>

                      {desc && (
                        <p className="text-xs text-zinc-300 font-serif leading-relaxed line-clamp-2">
                          {desc}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-serif text-amber-300/80 group-hover:text-[#d4af37] pt-3 border-t border-white/[0.08]">
                      <span className="italic truncate max-w-[210px]">{topic.defaultQuestion[language]}</span>
                      
                      {/* Button-in-Button Trailing Icon */}
                      <div className="w-6 h-6 rounded-full bg-white/[0.05] border border-white/[0.08] group-hover:bg-[#d4af37]/20 group-hover:border-[#d4af37]/40 flex items-center justify-center flex-shrink-0 transition-colors ml-1.5">
                        <ArrowRight className="w-3.5 h-3.5 text-amber-200 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Optional Partner Attunement Toggle in Step 1 */}
          <div className="flex justify-center">
            {!isPartnerAttunementOpen && !partnerProfile && (
              <button
                onClick={() => {
                  setIsPartnerAttunementOpen(true);
                  setIsEditingPartner(true);
                  audioService.playCardSlide();
                }}
                className="text-xs font-serif text-amber-300/80 hover:text-[#d4af37] bg-white/[0.03] hover:bg-white/[0.07] px-4 py-2 rounded-full border border-white/[0.08] hover:border-[#d4af37]/40 transition-all flex items-center space-x-2 active:scale-95"
              >
                <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{UI_TRANSLATIONS.addPartnerToggle[language]}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* PARTNER / COUNTERPART ASTROLOGICAL ATTUNEMENT CARD */}
      {(isRelationshipReading || isPartnerAttunementOpen || partnerProfile) && userProfile && !isEditingProfile && (
        <div id="partner-attunement-section" className="craft-panel p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto space-y-6 border-2 border-rose-400/40 bg-gradient-to-b from-[#190a28] to-[#0d0517] shadow-[0_0_40px_rgba(251,113,133,0.15)] animate-in fade-in slide-in-from-bottom-2 duration-400">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400/30" />
              <h3 className="text-sm sm:text-base font-serif font-bold text-rose-100 tracking-wide">
                {UI_TRANSLATIONS.partnerAttunementTitle[language]}
              </h3>
            </div>
            {partnerProfile && (
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-200 border border-rose-500/40">
                {UI_TRANSLATIONS.synastryActiveBadge[language]}
              </span>
            )}
          </div>

          {partnerError && (
            <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/50 flex items-center space-x-3 text-xs font-serif text-rose-200 animate-pulse">
              <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span>{UI_TRANSLATIONS.partnerRequiredNotice[language]}</span>
            </div>
          )}

          {(!partnerProfile || isEditingPartner) ? (
            <form onSubmit={handleSavePartner} className="space-y-5">
              <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                {UI_TRANSLATIONS.partnerAttunementDesc[language]}
              </p>

              {/* Partner Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-serif text-rose-200 flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-rose-400" />
                  <span>{UI_TRANSLATIONS.partnerNameLabel[language]}</span>
                </label>
                <input
                  type="text"
                  required
                  value={partnerNameInput}
                  onChange={(e) => setPartnerNameInput(e.target.value)}
                  placeholder={language === 'my' ? 'ဥပမာ: ချစ်သူ / လုပ်ဖော်ကိုင်ဖက်' : language === 'ja' ? '例: パートナーのお名前' : 'e.g., Alex / Counterpart'}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.12] focus:border-rose-400 text-sm text-rose-100 font-serif focus:outline-none"
                />
              </div>

              {/* 12-Zodiac Sign Selector Pills */}
              <div className="space-y-2">
                <label className="text-xs font-serif text-rose-200 flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                    <span>{UI_TRANSLATIONS.partnerZodiacLabel[language]}</span>
                  </span>
                  {partnerZodiacInput && (
                    <span className="text-[11px] font-mono text-rose-300">
                      {ZODIAC_SIGNS[partnerZodiacInput as ZodiacSignId]?.symbol} {ZODIAC_SIGNS[partnerZodiacInput as ZodiacSignId]?.name[language]} ({ZODIAC_SIGNS[partnerZodiacInput as ZodiacSignId]?.element})
                    </span>
                  )}
                </label>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {(Object.keys(ZODIAC_SIGNS) as ZodiacSignId[]).map((zKey) => {
                    const zInfo = ZODIAC_SIGNS[zKey];
                    const isSelected = partnerZodiacInput === zKey;

                    return (
                      <button
                        type="button"
                        key={zKey}
                        onClick={() => {
                          setPartnerZodiacInput(zKey);
                          setPartnerError(false);
                          audioService.playCardHover();
                        }}
                        className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                          isSelected
                            ? 'bg-rose-500/25 border-rose-400 shadow-[0_0_12px_rgba(251,113,133,0.4)] text-rose-100'
                            : 'bg-black/40 border-white/[0.08] hover:border-rose-400/50 text-zinc-300 hover:text-rose-200'
                        }`}
                      >
                        <span className="text-base sm:text-lg">{zInfo.symbol}</span>
                        <span className="text-[10px] font-serif font-medium truncate w-full">{zInfo.name[language].split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Birthdate Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-serif text-zinc-400 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{UI_TRANSLATIONS.partnerBirthdateLabel[language]}</span>
                </label>
                <input
                  type="date"
                  value={partnerBirthdateInput}
                  onChange={(e) => {
                    setPartnerBirthdateInput(e.target.value);
                    if (e.target.value) {
                      const sign = AstrologyService.getZodiacSign(e.target.value);
                      setPartnerZodiacInput(sign.id);
                    }
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/[0.08] focus:border-rose-400 text-xs text-zinc-200 font-serif focus:outline-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 btn-primary h-11 rounded-xl text-xs font-serif font-bold uppercase tracking-wider flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 shadow-lg shadow-rose-900/30 active:scale-[0.98]"
                >
                  <Heart className="w-3.5 h-3.5 text-zinc-950 fill-zinc-950" />
                  <span>{UI_TRANSLATIONS.savePartnerBtn[language]}</span>
                </button>

                {partnerProfile && (
                  <button
                    type="button"
                    onClick={() => setIsEditingPartner(false)}
                    className="px-4 h-11 rounded-xl text-xs font-serif text-zinc-400 hover:text-white bg-white/[0.05] border border-white/[0.1] active:scale-95"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* DUAL CELESTIAL SYNASTRY BANNER */
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* User Soul Badge */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-[#d4af37]/30 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-lg font-serif text-[#d4af37] font-bold">
                    {userProfile.zodiacSign?.symbol || '♈'}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-serif font-bold text-amber-100">{userProfile.name}</div>
                    <div className="text-[11px] font-mono text-amber-300/80">
                      {userProfile.zodiacSign?.name[language]} • {userProfile.zodiacSign?.element}
                    </div>
                  </div>
                </div>

                {/* Partner Soul Badge */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-rose-400/30 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-400/40 flex items-center justify-center text-lg font-serif text-rose-300 font-bold">
                    {partnerProfile.zodiacSign?.symbol || '♋'}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-serif font-bold text-rose-100">{partnerProfile.name}</div>
                    <div className="text-[11px] font-mono text-rose-300/80">
                      {partnerProfile.zodiacSign?.name[language]} • {partnerProfile.zodiacSign?.element}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs">
                <span className="text-[11px] font-mono text-rose-300/90 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  <span>
                    {language === 'my'
                      ? 'နက္ခတ်ဗေဒ သဟဇာတ တွက်ချက်မှု အဆင်သင့်ဖြစ်ပါပြီ'
                      : language === 'ja'
                      ? '天体シナストリーの計算準備が整いました'
                      : 'Synastry and Dual Hermeneutics Ready'}
                  </span>
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsEditingPartner(true)}
                    className="text-[11px] font-serif text-rose-200 hover:text-white bg-rose-500/20 hover:bg-rose-500/30 px-3 py-1 rounded-full border border-rose-400/30 transition-all flex items-center space-x-1 active:scale-95"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>{language === 'my' ? 'ပြင်မည်' : language === 'ja' ? '編集' : 'Edit'}</span>
                  </button>

                  <button
                    onClick={handleClearPartner}
                    className="text-[11px] font-serif text-zinc-400 hover:text-rose-400 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.08] hover:border-rose-400/30 transition-all active:scale-95"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* STEP 2: Choose your spread with Double-Bezel Spread Diagrams */}
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

          {/* Spreads Grid with Double-Bezel Nested Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {SPREAD_CONFIGS.map(spread => {
              const getSpreadSvg = (spreadId: string) => {
                switch (spreadId) {
                  case 'single':
                    return '/animations/spread-single.svg';
                  case 'three':
                    return '/animations/spread-trinity.svg';
                  case 'cross':
                    return '/animations/spread-cross.svg';
                  case 'celtic':
                    return '/animations/spread-relationship.svg';
                  case 'decision_fork':
                    return '/animations/spread-fork.svg';
                  case 'chakra_spread':
                  case 'chakra_seven':
                  case 'seven':
                    return '/animations/spread-chakra.svg';
                  case 'celtic_cross':
                    return '/animations/spread-celtic.svg';
                  default:
                    return '/animations/spread-single.svg';
                }
              };

              return (
                <div
                  key={spread.id}
                  onClick={() => handleSelectSpread(spread)}
                  onMouseEnter={() => audioService.playCardHover()}
                  className="group craft-bezel-outer cursor-pointer active:scale-[0.98]"
                >
                  <div className="craft-bezel-inner p-5 sm:p-6 flex flex-col justify-between space-y-4 h-full">
                    <div className="space-y-3 w-full">
                      <div className="flex items-center justify-between">
                        <div className="font-serif font-bold text-base sm:text-lg text-[#d4af37] group-hover:text-amber-200 tracking-wide">
                          {spread.name[language]}
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-amber-200">
                          {spread.cardCount} {spread.cardCount === 1 ? UI_TRANSLATIONS.oneCardPick[language] : UI_TRANSLATIONS.cardsPick[language]}
                        </span>
                      </div>

                      {/* Animated Spread Diagram */}
                      <div className="w-full h-20 sm:h-24 py-1 flex items-center justify-center bg-black/40 rounded-xl border border-white/[0.06] group-hover:border-[#d4af37]/50 group-hover:bg-[#d4af37]/5 transition-all duration-300 overflow-hidden">
                        <img
                          src={getSpreadSvg(spread.id)}
                          alt={spread.name.en}
                          className="h-full w-auto object-contain pointer-events-none group-hover:scale-108 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                        />
                      </div>

                      <p className="text-xs text-zinc-300 font-serif leading-relaxed line-clamp-2">
                        {spread.subtitle[language]}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-serif text-amber-300/80 group-hover:text-[#d4af37] pt-3 border-t border-white/[0.08]">
                      <span>{UI_TRANSLATIONS.communeAndDrawBtn[language]}</span>
                      
                      {/* Button-in-Button Trailing Icon */}
                      <div className="w-6 h-6 rounded-full bg-white/[0.05] border border-white/[0.08] group-hover:bg-[#d4af37]/20 group-hover:border-[#d4af37]/40 flex items-center justify-center flex-shrink-0 transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 text-amber-200 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </section>
      )}

      {/* STEP 3: 1910 TACTILE DECK CUTTING RITUAL */}
      {step === 3 && (
        <section className="space-y-6 animate-in fade-in duration-300">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                audioService.playCardSlide();
                setStep(2);
              }}
              className="text-xs font-serif text-zinc-400 hover:text-amber-200 flex items-center space-x-1.5"
            >
              <span>← Back to Spreads</span>
            </button>
            <button
              onClick={handleFinishRitual}
              className="text-xs font-serif text-[#d4af37] hover:underline"
            >
              Skip Ritual →
            </button>
          </div>

          <DeckCutRitual
            language={language}
            onCompleteRitual={handleFinishRitual}
          />
        </section>
      )}

    </div>
  );
};
