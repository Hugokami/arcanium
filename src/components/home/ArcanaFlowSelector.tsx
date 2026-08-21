import React, { useState } from 'react';
import { Language, SpreadDefinition, TopicOption } from '../../types/tarot';
import { TOPICS, SPREAD_CONFIGS, QUICK_INQUIRIES, UI_TRANSLATIONS, getSpreadConfig } from '../../data/translations';
import { audioService } from '../../services/audioService';
import { ArrowRight, Sparkles, MessageSquare, Compass, Check } from 'lucide-react';

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

  const handleSelectTopic = (topic: TopicOption) => {
    audioService.playCardSlide();
    setSelectedTopic(topic);
    setSelectedSpread(getSpreadConfig(topic.suggestedSpread));
    setStep(2);
  };

  const handleQuickQuestionClick = (qText: string, topicIndex = 0) => {
    audioService.playCardSlide();
    setCustomQuestion(qText);
    setSelectedTopic(TOPICS[topicIndex]);
    setSelectedSpread(getSpreadConfig('three'));
    setStep(2);
  };

  const handleCustomQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    audioService.playCardSlide();
    setStep(2);
  };

  const handleSelectSpread = (spread: SpreadDefinition) => {
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
    en: 'Select a domain of your life below, or whisper a personal inquiry to commune with the 78 keys.',
    my: 'အောက်ပါ ဘဝကဏ္ဍတစ်ခုကို ရွေးချယ်ပါ သို့မဟုတ် သင်သိလိုသော မေးခွန်းကို တိုက်ရိုက်မေးမြန်းပါ။',
    ja: '以下のテーマを選択するか、心にある個人的な問いをカードに投げかけてください。'
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

      {/* STEP 1: Domain Cards & Personal Portal */}
      {step === 1 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          
          {/* 6 Rich Domain Tiles */}
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
                      <span className="text-2xl sm:text-3xl filter drop-shadow-md group-hover:scale-105 transition-transform duration-200">
                        {topic.icon}
                      </span>
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

          {/* Custom Question Whisper Portal */}
          <div className="craft-panel p-6 sm:p-7 rounded-2xl space-y-4">
            <div className="flex items-center space-x-2 text-[#d4af37] font-serif text-xs uppercase tracking-wider font-semibold">
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
              <span>
                {language === 'my'
                  ? '…သို့မဟုတ် မိမိစိတ်ကြိုက် မေးခွန်းကို ရေးသားမေးမြန်းပါ'
                  : language === 'ja'
                  ? '…または、心にある問いを自由に入力してください'
                  : 'Or whisper your personal inquiry to the cards'}
              </span>
            </div>

            <form onSubmit={handleCustomQuestionSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="text"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder={UI_TRANSLATIONS.questionPlaceholder[language]}
                  className="w-full pl-4.5 pr-28 py-3.5 rounded-xl bg-black/60 border border-white/[0.1] focus:border-[#d4af37] focus:outline-none text-sm sm:text-base text-[#e8e0f5] placeholder-zinc-500 font-serif transition-all shadow-inner focus:ring-1 focus:ring-[#d4af37]"
                />
                {customQuestion.trim() && (
                  <button
                    type="submit"
                    className="absolute right-2 top-2 px-4 py-2 rounded-lg bg-[#d4af37] text-black font-serif text-xs font-bold flex items-center space-x-1.5 hover:brightness-110 shadow-sm transition-all active:scale-95"
                  >
                    <span>{UI_TRANSLATIONS.nextBtn[language]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>

            {/* Clickable Quick Inquiry Inspiration Pills */}
            <div className="space-y-2 pt-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">
                {language === 'my' ? 'အမြန်မေးလိုသော မေးခွန်းနမူနာများ:' : language === 'ja' ? '問いのインスピレーション:' : 'Quick Inquiry Inspiration:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {QUICK_INQUIRIES.map((qi, idx) => (
                  <button
                    key={qi.id}
                    onClick={() => handleQuickQuestionClick(qi.text[language], idx % TOPICS.length)}
                    className="text-[11px] font-serif text-zinc-300 hover:text-[#d4af37] px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-[#d4af37]/10 border border-white/[0.06] hover:border-[#d4af37]/40 transition-all text-left active:scale-95"
                  >
                    "{qi.text[language]}"
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* STEP 2: Choose your spread with Mini Visual Slot Diagrams */}
      {step === 2 && (
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
                  <div className="flex items-center gap-1.5 py-1">
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
