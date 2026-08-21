import React, { useState } from 'react';
import { Language, SpreadDefinition, TopicOption } from '../../types/tarot';
import { TOPICS, SPREAD_CONFIGS, UI_TRANSLATIONS, getSpreadConfig } from '../../data/translations';
import { audioService } from '../../services/audioService';
import { ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

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

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-14 space-y-10 animate-in fade-in duration-500">
      
      {/* Title Heading */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal tracking-[0.25em] text-[#d4af37] text-shadow-gold">
          ✦ ARCANIUM ✦
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 font-serif italic tracking-wide">
          {UI_TRANSLATIONS.appSubtitle[language]}
        </p>
      </div>

      {/* STEP 1: What brings you to the cards? */}
      {step === 1 && (
        <section className="panel p-6 sm:p-10 rounded-2xl bg-[#140c2d]/75 border border-[#8a7326]/60 backdrop-blur-md shadow-2xl space-y-8 animate-in fade-in slide-in-from-bottom-2">
          
          <div className="text-center space-y-2">
            <h2 className="text-[#d4af37] font-serif tracking-[0.15em] text-sm sm:text-base uppercase font-semibold">
              {UI_TRANSLATIONS.step1Title[language]}
            </h2>
          </div>

          {/* Topic Buttons Grid */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {TOPICS.map(topic => {
              const isSelected = selectedTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => handleSelectTopic(topic)}
                  onMouseEnter={() => audioService.playCardHover()}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-serif text-sm sm:text-base tracking-wide transition-all duration-300 border ${
                    isSelected
                      ? 'border-[#d4af37] text-[#d4af37] bg-[#d4af37]/15 shadow-gold-glow -translate-y-1'
                      : 'border-[#8a7326]/50 hover:border-[#d4af37] text-[#e8e0f5] hover:text-[#d4af37] bg-white/5 hover:bg-white/10 hover:-translate-y-0.5'
                  }`}
                >
                  <span className="text-lg">{topic.icon}</span>
                  <span>{topic.title[language]}</span>
                </button>
              );
            })}
          </div>

          {/* Custom Question Input */}
          <form onSubmit={handleCustomQuestionSubmit} className="max-w-xl mx-auto space-y-3 pt-2">
            <div className="relative">
              <input
                type="text"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder={UI_TRANSLATIONS.questionPlaceholder[language]}
                className="w-full px-5 py-3 rounded-xl bg-black/40 border border-[#8a7326]/50 focus:border-[#d4af37] focus:outline-none text-sm sm:text-base text-[#e8e0f5] placeholder-zinc-500 font-serif transition-all"
              />
              {customQuestion.trim() && (
                <button
                  type="submit"
                  className="absolute right-2.5 top-2 px-3 py-1.5 rounded-lg bg-[#d4af37] text-black font-serif text-xs font-bold flex items-center space-x-1 hover:brightness-110 shadow-sm"
                >
                  <span>{UI_TRANSLATIONS.nextBtn[language]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <p className="text-[11px] text-zinc-400 text-center font-serif italic">
              {language === 'my'
                ? 'အကြံပြုချက်: Enter ခေါက်ပါ သို့မဟုတ် အထက်ပါ ကံကြမ္မာခေါင်းစဉ် တစ်ခုခုကို ရွေးချယ်ပါ'
                : language === 'ja'
                ? 'ヒント：Enterキーを押すか、上記のテーマを選択して次に進んでください'
                : 'Tip: Press Enter or pick any card topic above to proceed'}
            </p>
          </form>

        </section>
      )}

      {/* STEP 2: Choose your spread */}
      {step === 2 && (
        <section className="panel p-6 sm:p-10 rounded-2xl bg-[#140c2d]/75 border border-[#8a7326]/60 backdrop-blur-md shadow-2xl space-y-8 animate-in fade-in slide-in-from-bottom-2">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-[#d4af37] font-serif tracking-[0.15em] text-sm sm:text-base uppercase font-semibold">
                {UI_TRANSLATIONS.step2Title[language]}
              </h2>
              <p className="text-xs text-zinc-400 font-serif italic mt-0.5">
                {UI_TRANSLATIONS.topicLabel[language]}: {customQuestion.trim() ? `"${customQuestion}"` : selectedTopic.title[language]}
              </p>
            </div>

            <button
              onClick={() => setStep(1)}
              className="text-xs font-serif text-zinc-400 hover:text-[#d4af37] underline"
            >
              {UI_TRANSLATIONS.changeTopicBtn[language]}
            </button>
          </div>

          {/* Spreads Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {SPREAD_CONFIGS.map(spread => (
              <button
                key={spread.id}
                onClick={() => handleSelectSpread(spread)}
                onMouseEnter={() => audioService.playCardHover()}
                className="group p-5 rounded-xl border border-[#8a7326]/50 hover:border-[#d4af37] bg-white/5 hover:bg-[#d4af37]/10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1">
                  <div className="font-serif font-bold text-base sm:text-lg text-[#d4af37] group-hover:text-amber-200 tracking-wide flex items-center justify-between">
                    <span>{spread.name[language]}</span>
                    <span className="text-[11px] font-mono font-normal text-zinc-400">
                      {spread.cardCount} {spread.cardCount === 1 ? UI_TRANSLATIONS.oneCardPick[language] : UI_TRANSLATIONS.cardsPick[language]}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {spread.subtitle[language]}
                  </p>
                </div>

                <div className="flex items-center space-x-1 text-[11px] font-serif text-amber-300/80 group-hover:text-[#d4af37] pt-2 border-t border-white/5">
                  <span>{UI_TRANSLATIONS.communeAndDrawBtn[language]}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>

        </section>
      )}

    </div>
  );
};
