import React, { useState, useEffect } from 'react';
import { Language, SpreadDefinition, TopicOption } from '../../types/tarot';
import { TOPICS, SPREAD_CONFIGS, QUICK_INQUIRIES, UI_TRANSLATIONS, getSpreadConfig } from '../../data/translations';
import { audioService } from '../../services/audioService';
import { AstrologyService, ZODIAC_SIGNS } from '../../services/astrologyService';
import { UserProfile, ZodiacSignId } from '../../types/userProfile';
import { ArrowRight, Sparkles, MessageSquare, Compass, Check, User, Calendar, Lock, Unlock, Edit3, Heart, Users, AlertCircle, Trash2 } from 'lucide-react';
import { DeckCutRitual } from '../ritual/DeckCutRitual';
import { DeckThemeService } from '../../services/deckThemeService';

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
    const profile = AstrologyService.buildPartnerProfile(
      partnerNameInput.trim(),
      partnerZodiacInput || undefined,
      partnerBirthdateInput.trim() || undefined
    );
    AstrologyService.savePartnerProfile(profile);
    setPartnerProfile(profile);
    setIsEditingPartner(false);
    setPartnerError(false);
  };

  const handleClearPartner = () => {
    AstrologyService.clearPartnerProfile();
    setPartnerProfile(null);
    setPartnerNameInput('');
    setPartnerBirthdateInput('');
    setIsPartnerAttunementOpen(false);
  };

  const handleSelectTopic = (topic: TopicOption) => {
    audioService.playCardFlip();
    setSelectedTopic(topic);
    setSelectedSpread(getSpreadConfig(topic.suggestedSpread));
    setStep(2);

    if (topic.id === 'love' && !partnerProfile) {
      setIsPartnerAttunementOpen(true);
      setIsEditingPartner(true);
    }
  };

  const handleSelectSpread = (spread: SpreadDefinition) => {
    audioService.playCardSlide();
    setSelectedSpread(spread);

    if ((selectedTopic.id === 'love' || spread.id === 'celtic' || isPartnerAttunementOpen) && !partnerProfile) {
      setPartnerError(true);
      const partnerEl = document.getElementById('partner-attunement-section');
      if (partnerEl) {
        partnerEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setStep(3);
  };

  const handleFinishRitual = () => {
    audioService.playCardFlip();
    const finalQuestion = customQuestion.trim()
      ? customQuestion.trim()
      : selectedTopic.defaultQuestion[language];

    onStartDrawing(selectedTopic.title[language], finalQuestion, selectedSpread, partnerProfile);
  };

  const heroHeadline = {
    en: 'Query the Arcana',
    my: 'သင်သိရှိလိုသော ကံကြမ္မာခေါင်းစဉ်ကို ရွေးချယ်ပါ',
    ja: '運命の扉を開く、あなたの問いを選んでください'
  };

  const heroSubtext = {
    en: 'Attune your natal chart, select a domain, or formulate a personal inquiry to commune with the 78 keys.',
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
      <div className="relative w-12 h-12 rounded-lg flex items-center justify-center">
        <img
          src={svgSrc}
          alt={topicId}
          className="w-full h-full object-contain pointer-events-none opacity-85"
        />
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 sm:py-16 space-y-12 animate-in fade-in duration-300">
      
      {/* Editorial Hero Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded border border-[#292524] bg-[#141210] text-[11px] font-mono tracking-widest text-[#a8a29e] uppercase">
          <span>78 Keys of Wisdom</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#f5f5f4]">
          {heroHeadline[language]}
        </h1>
        <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
          {heroSubtext[language]}
        </p>
      </div>

      {/* MANDATORY NATAL PROFILE ATTUNEMENT FORM (STEP 0) */}
      {(!userProfile || isEditingProfile) ? (
        <div className="craft-card p-6 sm:p-8 max-w-xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[11px] font-sans text-[#a8a29e]">
              <Lock className="w-3 h-3 text-[#f5f5f4]" />
              <span>
                {language === 'my'
                  ? 'မဖြစ်မနေ လိုအပ်သော မွေးရာပါ ဇာတာ အချက်အလက်'
                  : language === 'ja'
                  ? 'リーディングに必要な出生情報（必須）'
                  : 'Required Querent Natal Chart Attunement'}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-serif text-[#f5f5f4]">
              {language === 'my'
                ? 'သင်၏ အမည်နှင့် မွေးသက္ကရာဇ်ကို ထည့်သွင်းပါ'
                : language === 'ja'
                ? 'お名前と生年月日をご入力ください'
                : 'Enter Your Name & Date of Birth'}
            </h2>
            <p className="text-xs text-[#a8a29e] font-sans leading-relaxed">
              {language === 'my'
                ? 'တိကျသော နက္ခတ်ဗေဒင်နှင့် တာရော့ပေါင်းစပ် ဟောကိန်းများအတွက် သင်၏ အမည်နှင့် မွေးရက် လိုအပ်ပါသည်။'
                : language === 'ja'
                ? '西洋占星術と数秘術の精密な照合のため、お名前と生年月日が必要です。'
                : 'To synthesize precise astrological correspondences, your name and birthday are required.'}
            </p>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-sans text-[#a8a29e] flex items-center space-x-1.5">
                <User className="w-3.5 h-3.5" />
                <span>{language === 'my' ? 'သင့်အမည်' : language === 'ja' ? 'お名前' : 'Your Sacred Name'}</span>
              </label>
              <input
                type="text"
                required
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder={language === 'my' ? 'ဥပမာ: မင်းမင်း' : language === 'ja' ? '例: アレクサンダー' : 'e.g., Alexander'}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0a09] border border-[#292524] focus:border-[#78716c] text-sm text-[#f5f5f4] font-sans focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-sans text-[#a8a29e] flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{language === 'my' ? 'မွေးသက္ကရာဇ် (YYYY-MM-DD)' : language === 'ja' ? '生年月日' : 'Date of Birth (YYYY-MM-DD)'}</span>
              </label>
              <input
                type="date"
                required
                value={birthdateInput}
                onChange={(e) => setBirthdateInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0a09] border border-[#292524] focus:border-[#78716c] text-sm text-[#f5f5f4] font-sans focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary h-11 text-xs uppercase tracking-wider flex items-center justify-center space-x-2 mt-2"
            >
              <Unlock className="w-4 h-4" />
              <span>
                {language === 'my'
                  ? 'ဇာတာချိန်ညှိပြီး တာရော့ဗေဒင် ဖွင့်မည်'
                  : language === 'ja'
                  ? '調律を完了してリーディングを開始'
                  : 'Attune Soul & Unlock Reading'}
              </span>
            </button>
          </form>
        </div>
      ) : (
        /* NATAL AFFINITY ACTIVE BADGE */
        <div className="craft-card max-w-lg mx-auto p-4 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-[#1c1917] border border-[#292524] flex items-center justify-center text-lg font-serif text-[#f5f5f4] flex-shrink-0">
              {userProfile.zodiacSign?.symbol || '♈'}
            </div>
            <div className="text-left space-y-0.5">
              <div className="text-xs sm:text-sm font-serif text-[#f5f5f4] flex items-center space-x-2">
                <span>{userProfile.name}</span>
                <span className="text-[#78716c]">•</span>
                <span className="text-[#a8a29e]">{userProfile.zodiacSign?.name[language]}</span>
              </div>
              <div className="text-[11px] font-mono text-[#78716c]">
                Life Path #{userProfile.lifePathNumber} • Soul: {userProfile.birthTarotCardName?.[language] || ''}
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsEditingProfile(true)}
            className="text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] bg-[#1c1917] hover:bg-[#292524] px-3 py-1.5 rounded border border-[#292524] transition-all flex items-center space-x-1.5 flex-shrink-0 active:scale-98"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{language === 'my' ? 'ပြင်မည်' : language === 'ja' ? '編集' : 'Edit'}</span>
          </button>
        </div>
      )}

      {/* STEP 1: Domain Cards & Bento Grid */}
      {step === 1 && userProfile && !isEditingProfile && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Bento Grid Domain Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOPICS.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              const desc = topic.description ? topic.description[language] : '';

              return (
                <div
                  key={topic.id}
                  onClick={() => handleSelectTopic(topic)}
                  onMouseEnter={() => audioService.playCardHover()}
                  className={`craft-card p-5 sm:p-6 cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected ? 'border-[#78716c] bg-[#1c1917]' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      {renderTopicSvgIcon(topic.id)}
                    </div>

                    <h3 className="font-serif font-semibold text-base sm:text-lg text-[#f5f5f4] tracking-wide">
                      {topic.title[language]}
                    </h3>

                    {desc && (
                      <p className="text-xs text-[#a8a29e] font-sans leading-relaxed line-clamp-2">
                        {desc}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-sans text-[#78716c] pt-3 border-t border-[#292524]">
                    <span className="italic truncate max-w-[210px]">{topic.defaultQuestion[language]}</span>
                    
                    <div className="w-5 h-5 rounded bg-[#1c1917] border border-[#292524] flex items-center justify-center flex-shrink-0 ml-1.5">
                      <ArrowRight className="w-3 h-3 text-[#a8a29e]" />
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
                className="text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] bg-[#141210] hover:bg-[#1c1917] px-4 py-2 rounded-lg border border-[#292524] transition-all flex items-center space-x-2 active:scale-98"
              >
                <Users className="w-3.5 h-3.5" />
                <span>{UI_TRANSLATIONS.addPartnerToggle[language]}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* PARTNER / COUNTERPART ASTROLOGICAL ATTUNEMENT CARD */}
      {(isRelationshipReading || isPartnerAttunementOpen || partnerProfile) && userProfile && !isEditingProfile && (
        <div id="partner-attunement-section" className="craft-card p-6 sm:p-8 max-w-xl mx-auto space-y-5 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-[#292524] pb-3">
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-[#a8a29e]" />
              <h3 className="text-sm sm:text-base font-serif text-[#f5f5f4]">
                {UI_TRANSLATIONS.partnerAttunementTitle[language]}
              </h3>
            </div>
            {partnerProfile && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1917] text-[#a8a29e] border border-[#292524]">
                {UI_TRANSLATIONS.synastryActiveBadge[language]}
              </span>
            )}
          </div>

          {partnerError && (
            <div className="p-3 rounded-lg bg-[#251417] border border-[#4d2229] flex items-center space-x-3 text-xs font-sans text-[#fca5a5]">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{UI_TRANSLATIONS.partnerRequiredNotice[language]}</span>
            </div>
          )}

          {(!partnerProfile || isEditingPartner) ? (
            <form onSubmit={handleSavePartner} className="space-y-4">
              <p className="text-xs text-[#a8a29e] font-sans leading-relaxed">
                {UI_TRANSLATIONS.partnerAttunementDesc[language]}
              </p>

              {/* Partner Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-sans text-[#a8a29e] flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{UI_TRANSLATIONS.partnerNameLabel[language]}</span>
                </label>
                <input
                  type="text"
                  required
                  value={partnerNameInput}
                  onChange={(e) => setPartnerNameInput(e.target.value)}
                  placeholder={language === 'my' ? 'ဥပမာ: ချစ်သူ / လုပ်ဖော်ကိုင်ဖက်' : language === 'ja' ? '例: パートナーのお名前' : 'e.g., Alex / Counterpart'}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0a09] border border-[#292524] focus:border-[#78716c] text-sm text-[#f5f5f4] font-sans focus:outline-none"
                />
              </div>

              {/* 12-Zodiac Sign Selector Pills */}
              <div className="space-y-2">
                <label className="text-xs font-sans text-[#a8a29e] flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{UI_TRANSLATIONS.partnerZodiacLabel[language]}</span>
                  </span>
                  {partnerZodiacInput && (
                    <span className="text-[11px] font-mono text-[#f5f5f4]">
                      {ZODIAC_SIGNS[partnerZodiacInput as ZodiacSignId]?.symbol} {ZODIAC_SIGNS[partnerZodiacInput as ZodiacSignId]?.name[language]}
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
                        className={`p-2 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-0.5 ${
                          isSelected
                            ? 'bg-[#1c1917] border-[#78716c] text-[#f5f5f4]'
                            : 'bg-[#0c0a09] border-[#292524] hover:border-[#44403c] text-[#78716c] hover:text-[#f5f5f4]'
                        }`}
                      >
                        <span className="text-base">{zInfo.symbol}</span>
                        <span className="text-[10px] font-sans truncate w-full">{zInfo.name[language].split(' ')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Birthdate Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-sans text-[#78716c] flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#78716c]" />
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
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0c0a09] border border-[#292524] focus:border-[#78716c] text-xs text-[#f5f5f4] font-sans focus:outline-none"
                />
              </div>

              <div className="flex gap-2.5 pt-2">
                <button
                  type="submit"
                  className="flex-1 btn-primary h-10 text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>{UI_TRANSLATIONS.savePartnerBtn[language]}</span>
                </button>

                {partnerProfile && (
                  <button
                    type="button"
                    onClick={() => setIsEditingPartner(false)}
                    className="px-3.5 h-10 rounded-lg text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] bg-[#1c1917] border border-[#292524] active:scale-98"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          ) : (
            /* DUAL CELESTIAL SYNASTRY BANNER */
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* User Soul Badge */}
                <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] flex items-center space-x-3">
                  <div className="w-9 h-9 rounded bg-[#1c1917] border border-[#292524] flex items-center justify-center text-base font-serif text-[#f5f5f4]">
                    {userProfile.zodiacSign?.symbol || '♈'}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-serif text-[#f5f5f4]">{userProfile.name}</div>
                    <div className="text-[11px] font-mono text-[#78716c]">
                      {userProfile.zodiacSign?.name[language]} • {userProfile.zodiacSign?.element}
                    </div>
                  </div>
                </div>

                {/* Partner Soul Badge */}
                <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] flex items-center space-x-3">
                  <div className="w-9 h-9 rounded bg-[#1c1917] border border-[#292524] flex items-center justify-center text-base font-serif text-[#f5f5f4]">
                    {partnerProfile.zodiacSign?.symbol || '♋'}
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-xs font-serif text-[#f5f5f4]">{partnerProfile.name}</div>
                    <div className="text-[11px] font-mono text-[#78716c]">
                      {partnerProfile.zodiacSign?.name[language]} • {partnerProfile.zodiacSign?.element}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-[#292524] text-xs">
                <span className="text-[11px] font-mono text-[#a8a29e] flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#78716c]" />
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
                    className="text-[11px] font-sans text-[#a8a29e] hover:text-[#f5f5f4] bg-[#1c1917] px-2.5 py-1 rounded border border-[#292524] transition-all flex items-center space-x-1 active:scale-98"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>{language === 'my' ? 'ပြင်မည်' : language === 'ja' ? '編集' : 'Edit'}</span>
                  </button>

                  <button
                    onClick={handleClearPartner}
                    className="text-[11px] font-sans text-[#78716c] hover:text-rose-400 bg-[#1c1917] px-2 py-1 rounded border border-[#292524] transition-all active:scale-98"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* STEP 2: Choose your spread with Bento Spread Cards */}
      {step === 2 && userProfile && (
        <section className="craft-card p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-[#292524] pb-4">
            <div className="space-y-0.5">
              <h2 className="text-[#a8a29e] font-mono text-xs uppercase tracking-wider">
                {UI_TRANSLATIONS.step2Title[language]}
              </h2>
              <p className="text-xs text-[#f5f5f4] font-sans">
                {UI_TRANSLATIONS.topicLabel[language]}: <span className="font-semibold">{customQuestion.trim() ? `"${customQuestion}"` : selectedTopic.title[language]}</span>
              </p>
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs font-sans text-[#78716c] hover:text-[#f5f5f4] underline transition-colors active:scale-98"
            >
              {UI_TRANSLATIONS.changeTopicBtn[language]}
            </button>
          </div>

          {/* Spreads Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
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
                  className="craft-card p-5 sm:p-6 cursor-pointer flex flex-col justify-between space-y-4 hover:border-[#78716c] transition-all"
                >
                  <div className="space-y-3 w-full">
                    <div className="flex items-center justify-between">
                      <div className="font-serif font-bold text-base sm:text-lg text-[#f5f5f4] tracking-wide">
                        {spread.name[language]}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
                        {spread.cardCount} {spread.cardCount === 1 ? UI_TRANSLATIONS.oneCardPick[language] : UI_TRANSLATIONS.cardsPick[language]}
                      </span>
                    </div>

                    {/* Animated Spread Diagram */}
                    <div className="w-full h-20 sm:h-24 py-1 flex items-center justify-center bg-[#0c0a09] rounded-lg border border-[#292524] overflow-hidden">
                      <img
                        src={getSpreadSvg(spread.id)}
                        alt={spread.name.en}
                        className="h-full w-auto object-contain pointer-events-none opacity-85"
                      />
                    </div>

                    <p className="text-xs text-[#a8a29e] font-sans leading-relaxed line-clamp-2">
                      {spread.subtitle[language]}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-sans text-[#78716c] pt-3 border-t border-[#292524]">
                    <span>{UI_TRANSLATIONS.communeAndDrawBtn[language]}</span>
                    
                    <div className="w-5 h-5 rounded bg-[#1c1917] border border-[#292524] flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-[#a8a29e]" />
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
              className="text-xs font-sans text-[#78716c] hover:text-[#f5f5f4] flex items-center space-x-1.5"
            >
              <span>← Back to Spreads</span>
            </button>
            <button
              onClick={handleFinishRitual}
              className="text-xs font-sans text-[#a8a29e] hover:text-[#f5f5f4] hover:underline"
            >
              Skip Ritual →
            </button>
          </div>

          <DeckCutRitual
            language={language}
            cardBackImage={DeckThemeService.getSelectedTheme().image || '/cards/CardBacks.png'}
            onCompleteRitual={handleFinishRitual}
          />
        </section>
      )}

    </div>
  );
};
