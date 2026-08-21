import React, { useState, useMemo } from 'react';
import { DrawnCard, Language, ReadingResultData } from '../../types/tarot';
import { UI_TRANSLATIONS } from '../../data/translations';
import { getPositionContextualMeaning, analyzeReading } from '../../services/deepReadingEngine';
import { audioService } from '../../services/audioService';
import { RotateCcw, Bookmark, Share2, Copy, Check, Sparkles, Scroll, Star } from 'lucide-react';

interface DeepReadingViewProps {
  reading: ReadingResultData;
  language: Language;
  onSaveToJournal: (reading: ReadingResultData, userNotes?: string, isFav?: boolean) => void;
  onResetHome: () => void;
  onOpenScrollModal: () => void;
  isSavedInJournal?: boolean;
}

export const DeepReadingView: React.FC<DeepReadingViewProps> = ({
  reading,
  language,
  onSaveToJournal,
  onResetHome,
  onOpenScrollModal,
  isSavedInJournal = false
}) => {
  const [saved, setSaved] = useState<boolean>(isSavedInJournal);
  const [userNotes, setUserNotes] = useState<string>(reading.userNotes || '');
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const { drawnCards, spread, topic, question } = reading;

  // Dynamically compute analysis based on active language so it always translates instantly
  const activeAnalysis = useMemo(() => {
    return analyzeReading(topic, drawnCards, spread, language);
  }, [topic, drawnCards, spread, language]);

  const handleSave = () => {
    audioService.playCardSlide();
    const updatedReading: ReadingResultData = {
      ...reading,
      language,
      analysis: activeAnalysis,
      userNotes,
      favorite: isFavorite
    };
    onSaveToJournal(updatedReading, userNotes, isFavorite);
    setSaved(true);
  };

  const handleCopy = () => {
    const text = `✦ ARCANA TAROT READING ✦\n\n` +
      `Question: "${question}"\n` +
      `Spread: ${spread.name[language]}\n` +
      `Date: ${new Date(reading.timestamp).toLocaleDateString()}\n\n` +
      `--- CARDS DRAWN ---\n` +
      drawnCards.map((dc, i) => `${i + 1}. ${dc.position.name[language]}: ${dc.card.name[language]} ${dc.isReversed ? '(Reversed)' : '(Upright)'}\n   ${dc.isReversed ? dc.card.reversedMeaning[language] : dc.card.uprightMeaning[language]}`).join('\n\n') +
      `\n\n--- SUMMARY ---\n${activeAnalysis.summary}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8 animate-in fade-in duration-700">
      
      {/* Top Banner */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-serif tracking-[0.2em] text-[#d4af37] text-shadow-gold">
          {UI_TRANSLATIONS.readingTitle[language]}
        </h1>
        <p className="text-sm sm:text-base text-zinc-200 font-serif italic">
          "{question}"
        </p>
        <div className="text-xs font-serif text-[#d4af37]/90 flex items-center justify-center space-x-2">
          <span>{UI_TRANSLATIONS.spreadLabel[language]}: {spread.name[language]}</span>
          <span>•</span>
          <span>{drawnCards.length} {UI_TRANSLATIONS.cardsPick[language]}</span>
        </div>
      </div>

      {/* 1. Card-by-card, position-aware readings */}
      <div className="space-y-4">
        {drawnCards.map((dc, i) => {
          const posName = dc.position.name[language];
          const posContext = getPositionContextualMeaning(dc.position.name.en, dc.card, dc.isReversed, language);

          return (
            <div
              key={dc.card.id + i}
              style={{ animationDelay: `${i * 0.15}s` }}
              className="panel p-5 sm:p-6 rounded-xl bg-[#140c2d]/80 border-l-4 border-l-[#d4af37] border-y border-r border-[#8a7326]/40 backdrop-blur-md shadow-lg space-y-3 animate-in fade-in slide-in-from-bottom-3"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-[#d4af37] tracking-wide">
                    {posName} — {dc.card.name[language]}
                    {dc.isReversed && (
                      <span className="text-[#c77dff] italic text-sm ml-2 font-sans font-normal">
                        {UI_TRANSLATIONS.reversedTag[language]}
                      </span>
                    )}
                  </h3>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-zinc-400 font-mono mt-0.5">
                    {dc.card.arcana === 'major'
                      ? 'Major Arcana'
                      : `Minor Arcana · ${dc.card.suit === 'cups' ? 'Cups (Water)' : dc.card.suit === 'pentacles' ? 'Pentacles (Earth)' : dc.card.suit === 'swords' ? 'Swords (Air)' : 'Wands (Fire)'}`}
                  </div>
                </div>

                <div className="w-14 h-22 rounded-lg overflow-hidden border border-[#8a7326]/70 flex-shrink-0 bg-black shadow-md">
                  <img
                    src={`/cards/${dc.card.file}`}
                    alt={dc.card.name[language]}
                    style={{ transform: dc.isReversed ? 'rotate(180deg)' : 'none' }}
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed">
                {dc.isReversed ? dc.card.reversedMeaning[language] : dc.card.uprightMeaning[language]}
              </p>

              <div className="pt-2.5 border-t border-white/10 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                <b className="text-[#d4af37]">{UI_TRANSLATIONS.inThisPosition[language]} ({posName}):</b> {posContext}
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Deep Analysis Sections (100% Dynamic Language) */}
      <div className="space-y-4 pt-2">
        
        {/* Mind */}
        {activeAnalysis.mind && (
          <div className="panel p-5 sm:p-6 rounded-xl bg-[#140c2d]/80 border-l-4 border-l-purple-400 border-y border-r border-[#8a7326]/40 backdrop-blur-md shadow-lg space-y-2">
            <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
              {UI_TRANSLATIONS.sectionTitles.mind[language]}
            </h3>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed">
              {activeAnalysis.mind}
            </p>
          </div>
        )}

        {/* Problems */}
        {activeAnalysis.problems && (
          <div className="panel p-5 sm:p-6 rounded-xl bg-[#140c2d]/80 border-l-4 border-l-amber-500 border-y border-r border-[#8a7326]/40 backdrop-blur-md shadow-lg space-y-2">
            <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
              {UI_TRANSLATIONS.sectionTitles.problems[language]}
            </h3>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed">
              {activeAnalysis.problems}
            </p>
          </div>
        )}

        {/* Hidden Forces */}
        {activeAnalysis.forces && (
          <div className="panel p-5 sm:p-6 rounded-xl bg-[#140c2d]/80 border-l-4 border-l-indigo-400 border-y border-r border-[#8a7326]/40 backdrop-blur-md shadow-lg space-y-2">
            <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
              {UI_TRANSLATIONS.sectionTitles.forces[language]}
            </h3>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed">
              {activeAnalysis.forces}
            </p>
          </div>
        )}

        {/* Advice */}
        {activeAnalysis.advice && (
          <div className="panel p-5 sm:p-6 rounded-xl bg-[#140c2d]/80 border-l-4 border-l-yellow-400 border-y border-r border-[#8a7326]/40 backdrop-blur-md shadow-lg space-y-2">
            <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
              {UI_TRANSLATIONS.sectionTitles.advice[language]}
            </h3>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed">
              {activeAnalysis.advice}
            </p>
          </div>
        )}

        {/* Outlook */}
        {activeAnalysis.outlook && (
          <div className="panel p-5 sm:p-6 rounded-xl bg-[#140c2d]/80 border-l-4 border-l-rose-400 border-y border-r border-[#8a7326]/40 backdrop-blur-md shadow-lg space-y-2">
            <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
              {UI_TRANSLATIONS.sectionTitles.outlook[language]}
            </h3>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed">
              {activeAnalysis.outlook}
            </p>
          </div>
        )}

        {/* Timeline */}
        {activeAnalysis.timeline && (
          <div className="panel p-5 sm:p-6 rounded-xl bg-[#140c2d]/80 border-l-4 border-l-teal-400 border-y border-r border-[#8a7326]/40 backdrop-blur-md shadow-lg space-y-2">
            <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
              {UI_TRANSLATIONS.sectionTitles.timeline[language]}
            </h3>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed">
              {activeAnalysis.timeline}
            </p>
          </div>
        )}

        {/* Archetype */}
        {activeAnalysis.archetype && (
          <div className="panel p-5 sm:p-6 rounded-xl bg-[#140c2d]/80 border-l-4 border-l-[#d4af37] border-y border-r border-[#8a7326]/40 backdrop-blur-md shadow-lg space-y-3">
            <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
              {UI_TRANSLATIONS.sectionTitles.archetype[language]}
            </h3>
            <div className="text-base sm:text-lg font-serif font-bold text-amber-200">
              {activeAnalysis.archetype.name}
            </div>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed">
              {activeAnalysis.archetype.description}
            </p>
            {activeAnalysis.archetype.shadow && (
              <p className="text-xs sm:text-sm text-[#c77dff] italic font-serif pt-2 border-t border-white/5">
                {activeAnalysis.archetype.shadow}
              </p>
            )}
          </div>
        )}

        {/* Master Summary Panel */}
        <div className="summary panel p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1a0f35] to-[#120924] border border-[#d4af37]/70 text-center space-y-3 shadow-2xl">
          <div className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em] font-semibold">
            • {UI_TRANSLATIONS.sectionTitles.summary[language]} •
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#e8e0f5] font-serif italic leading-relaxed">
            {activeAnalysis.summary}
          </p>
        </div>

      </div>

      {/* Journal Reflection Box & Actions */}
      <div className="panel p-5 sm:p-6 rounded-2xl bg-black/50 border border-[#8a7326]/50 space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-serif uppercase tracking-wider text-[#d4af37] font-semibold">
            {UI_TRANSLATIONS.reflectionsTitle[language]}
          </span>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-1.5 rounded-lg border transition-all ${
              isFavorite ? 'bg-[#d4af37] text-black border-[#d4af37]' : 'text-zinc-400 border-white/10 hover:text-white'
            }`}
            title="Favorite"
          >
            <Star className="w-4 h-4 fill-current" />
          </button>
        </div>

        <textarea
          rows={3}
          value={userNotes}
          onChange={(e) => setUserNotes(e.target.value)}
          placeholder={UI_TRANSLATIONS.reflectionsPlaceholder[language]}
          className="w-full p-3.5 rounded-xl bg-black/70 border border-white/10 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 font-serif resize-none focus:outline-none focus:border-[#d4af37]"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleSave}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-bold uppercase tracking-wider flex items-center space-x-2 transition-all shadow-md ${
              saved
                ? 'bg-emerald-700 text-white'
                : 'bg-[#d4af37] text-black shadow-gold-glow hover:brightness-110'
            }`}
          >
            {saved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            <span>{saved ? UI_TRANSLATIONS.savedToJournalBtn[language] : UI_TRANSLATIONS.saveToJournalBtn[language]}</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-serif text-zinc-300 border border-white/10 flex items-center space-x-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? UI_TRANSLATIONS.copiedBtn[language] : UI_TRANSLATIONS.copyBtn[language]}</span>
            </button>

            <button
              onClick={onOpenScrollModal}
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-serif text-[#d4af37] border border-[#8a7326]/60 flex items-center space-x-1.5 transition-colors hover:border-[#d4af37]"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{UI_TRANSLATIONS.exportScrollBtn[language]}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Shuffle Again Button */}
      <div className="text-center pt-4">
        <button
          onClick={onResetHome}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-br from-[#2a1a55] to-[#1a0f35] border border-[#d4af37] text-[#d4af37] font-serif text-sm sm:text-base tracking-[0.15em] uppercase hover:shadow-gold-glow-lg transition-all active:scale-95 flex items-center space-x-2 mx-auto font-medium"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{UI_TRANSLATIONS.shuffleAgainBtn[language]}</span>
        </button>
      </div>

    </div>
  );
};
