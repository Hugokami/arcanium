import React, { useState, useMemo, useEffect } from 'react';
import { DrawnCard, Language, ReadingResultData } from '../../types/tarot';
import { UI_TRANSLATIONS } from '../../data/translations';
import { getPositionContextualMeaning, analyzeReading } from '../../services/deepReadingEngine';
import { audioService } from '../../services/audioService';
import { TarotSynergyService } from '../../services/tarotSynergyService';
import { AstrologyService } from '../../services/astrologyService';
import { VoiceOracleService } from '../../services/voiceOracleService';
import { UserProfile } from '../../types/userProfile';
import { OracleChatDrawer } from './OracleChatDrawer';
import {
  RotateCcw,
  Bookmark,
  Share2,
  Copy,
  Check,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
  MessageSquareQuote,
  Flame,
  Droplet,
  Wind,
  Mountain,
  Zap,
  Crown,
  Scale
} from 'lucide-react';

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
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const { drawnCards, spread, topic, question } = reading;

  useEffect(() => {
    setUserProfile(AstrologyService.loadProfile());
    const unsub = VoiceOracleService.subscribeState(setIsSpeaking);
    return () => {
      unsub();
      VoiceOracleService.stop();
    };
  }, []);

  // Dynamically compute analysis based on active language so it always translates instantly
  const activeAnalysis = useMemo(() => {
    return analyzeReading(topic, drawnCards, spread, language);
  }, [topic, drawnCards, spread, language]);

  // Master Tarot Synergy calculations
  const elementalDignities = useMemo(() => {
    return TarotSynergyService.calculateElementalDignities(drawnCards, language);
  }, [drawnCards, language]);

  const detectedSynergies = useMemo(() => {
    return TarotSynergyService.detectCardSynergies(drawnCards, language);
  }, [drawnCards, language]);

  const quintessence = useMemo(() => {
    return TarotSynergyService.calculateQuintessence(drawnCards, language);
  }, [drawnCards, language]);

  const polarityGauge = useMemo(() => {
    return TarotSynergyService.calculatePolarityGauge(drawnCards);
  }, [drawnCards]);

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
    const text = `✦ ARCANIUM TAROT READING ✦\n\n` +
      `Question: "${question}"\n` +
      `Spread: ${spread.name[language]}\n` +
      `Date: ${new Date(reading.timestamp).toLocaleDateString()}\n\n` +
      `--- POLARITY & CERTAINTY ---\n` +
      `${polarityGauge.verdict[language]} (${polarityGauge.score}%)\n` +
      `${polarityGauge.explanation[language]}\n\n` +
      `--- CARDS DRAWN ---\n` +
      drawnCards.map((dc, i) => `${i + 1}. ${dc.position.name[language]}: ${dc.card.name[language]} ${dc.isReversed ? '(Reversed)' : '(Upright)'}\n   ${dc.isReversed ? dc.card.reversedMeaning[language] : dc.card.uprightMeaning[language]}`).join('\n\n') +
      `\n\n--- THE QUINTESSENCE ---\n${quintessence.cardName[language]}: ${quintessence.lesson[language]}` +
      `\n\n--- SUMMARY ---\n${activeAnalysis.summary}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleVoiceOracle = () => {
    if (isSpeaking) {
      VoiceOracleService.stop();
    } else {
      audioService.playChime();
      const narrativeToRead = `${activeAnalysis.summary} ${activeAnalysis.advice} ${quintessence.lesson[language]}`;
      VoiceOracleService.speak(narrativeToRead, language);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8 animate-in fade-in duration-500">
      
      {/* Top Reading Banner */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25 text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          <span>Oracle Decree</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-serif tracking-[0.16em] text-[#d4af37] text-shadow-gold">
          {UI_TRANSLATIONS.readingTitle[language]}
        </h1>
        <p className="text-sm sm:text-base text-zinc-200 font-serif italic">
          "{question}"
        </p>
        
        {userProfile && (
          <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-serif text-amber-200/90">
            <span>Querent: <b>{userProfile.name}</b></span>
            {userProfile.zodiacSign && (
              <>
                <span>•</span>
                <span>{userProfile.zodiacSign.symbol} {userProfile.zodiacSign.name[language]}</span>
              </>
            )}
          </div>
        )}

        <div className="text-xs font-serif text-[#d4af37]/90 flex items-center justify-center space-x-2">
          <span>{UI_TRANSLATIONS.spreadLabel[language]}: {spread.name[language]}</span>
          <span>•</span>
          <span>{drawnCards.length} {UI_TRANSLATIONS.cardsPick[language]}</span>
        </div>

        {/* Action Pills: Voice Oracle + Ask Oracle */}
        <div className="flex items-center justify-center gap-2.5 pt-2">
          <button
            onClick={toggleVoiceOracle}
            className={`h-9 px-4 rounded-full text-xs font-serif flex items-center space-x-2 transition-all border ${
              isSpeaking
                ? 'bg-amber-400/20 border-amber-400 text-amber-200 animate-pulse'
                : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.12] text-amber-200/90'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isSpeaking ? UI_TRANSLATIONS.voiceStopBtn[language] : UI_TRANSLATIONS.voiceListenBtn[language]}</span>
          </button>

          <button
            onClick={() => setIsChatOpen(true)}
            className="h-9 px-4 rounded-full text-xs font-serif flex items-center space-x-2 transition-all border bg-[#d4af37]/15 hover:bg-[#d4af37]/25 border-[#d4af37]/50 text-amber-200 shadow-sm"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{UI_TRANSLATIONS.askOracleBtn[language]}</span>
          </button>
        </div>
      </div>

      {/* Horizontal Mini Card Gallery with Scroll Edge Fade */}
      <div className="scroll-fade-x flex items-center justify-center gap-3 py-2 overflow-x-auto px-4">
        {drawnCards.map((dc, i) => (
          <div
            key={i}
            className="flex flex-col items-center space-y-1 p-2 rounded-xl bg-black/40 border border-white/[0.08] flex-shrink-0 hover:border-[#d4af37]/50 transition-colors"
          >
            <div className="w-12 h-18 rounded-lg overflow-hidden border border-[#8a7326]/60 bg-black flex items-center justify-center">
              <img
                src={`/cards/${dc.card.file}`}
                alt={dc.card.name[language]}
                style={{ transform: dc.isReversed ? 'rotate(180deg)' : 'none' }}
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <span className="text-[10px] font-serif text-[#d4af37] max-w-[72px] truncate text-center">
              {dc.card.name[language]}
            </span>
          </div>
        ))}
      </div>

      {/* NEW FEATURE: Polarity & Certainty Gauge */}
      <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-[#d4af37] space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm font-serif font-bold text-[#d4af37]">
            <Scale className="w-4 h-4" />
            <span>{UI_TRANSLATIONS.polarityTitle[language]}</span>
          </div>
          <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-amber-200">
            {polarityGauge.score}% Confidence
          </span>
        </div>

        {/* Meter bar */}
        <div className="w-full h-2 rounded-full bg-white/[0.08] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-amber-400 to-emerald-400 transition-all duration-700"
            style={{ width: `${polarityGauge.score}%` }}
          />
        </div>

        <div className="text-sm font-serif text-amber-100 font-semibold">
          {polarityGauge.verdict[language]}
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
          {polarityGauge.explanation[language]}
        </p>
      </div>

      {/* NEW FEATURE: Elemental Dignities & Alchemy Matrix */}
      <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-cyan-400 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm font-serif font-bold text-cyan-300">
            <Sparkles className="w-4 h-4" />
            <span>{UI_TRANSLATIONS.elementalTitle[language]}</span>
          </div>
          <span className="text-xs font-mono text-zinc-300">
            Harmony: <b className="text-amber-200">{elementalDignities.harmonyScore}%</b>
          </span>
        </div>

        {/* 4 Elements Distribution Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-black/40 border border-white/[0.06]">
            <Flame className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <div className="text-xs font-serif">
              <span className="text-zinc-300">Fire: </span>
              <b className="text-amber-200">{elementalDignities.fire}</b>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-black/40 border border-white/[0.06]">
            <Droplet className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <div className="text-xs font-serif">
              <span className="text-zinc-300">Water: </span>
              <b className="text-blue-200">{elementalDignities.water}</b>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-black/40 border border-white/[0.06]">
            <Wind className="w-4 h-4 text-cyan-300 flex-shrink-0" />
            <div className="text-xs font-serif">
              <span className="text-zinc-300">Air: </span>
              <b className="text-cyan-200">{elementalDignities.air}</b>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-black/40 border border-white/[0.06]">
            <Mountain className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <div className="text-xs font-serif">
              <span className="text-zinc-300">Earth: </span>
              <b className="text-emerald-200">{elementalDignities.earth}</b>
            </div>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed pt-1">
          <b className="text-[#d4af37]">{elementalDignities.alchemyVerdict[language]}:</b> {elementalDignities.elementalAdvice[language]}
        </div>
      </div>

      {/* NEW FEATURE: Detected Card Synergies */}
      {detectedSynergies.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-serif font-bold text-amber-300 px-1">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>{UI_TRANSLATIONS.synergyTitle[language]}</span>
          </div>
          {detectedSynergies.map((syn) => (
            <div
              key={syn.id}
              className={`craft-panel p-5 rounded-2xl border-l-4 space-y-2 ${
                syn.potency === 'profound'
                  ? 'border-l-amber-400 bg-gradient-to-r from-amber-500/10 to-transparent'
                  : syn.potency === 'warning'
                  ? 'border-l-rose-500 bg-gradient-to-r from-rose-500/10 to-transparent'
                  : 'border-l-purple-400 bg-gradient-to-r from-purple-500/10 to-transparent'
              }`}
            >
              <h4 className="text-sm sm:text-base font-serif font-bold text-amber-200">
                {syn.title[language]}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                {syn.description[language]}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 1. Card-by-card, position-aware readings */}
      <div className="space-y-4">
        {drawnCards.map((dc, i) => {
          const posName = dc.position.name[language];
          const posContext = getPositionContextualMeaning(dc.position.name.en, dc.card, dc.isReversed, language);
          const natalResonance = AstrologyService.getCardNatalResonance(dc.card, userProfile, language);

          return (
            <div
              key={dc.card.id + i}
              style={{ animationDelay: `${i * 0.12}s` }}
              className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-[#d4af37] space-y-3 animate-in fade-in slide-in-from-bottom-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-serif text-[#d4af37] tracking-wide">
                      {posName} — {dc.card.name[language]}
                      {dc.isReversed && (
                        <span className="text-[#c77dff] italic text-sm ml-2 font-sans font-normal">
                          {UI_TRANSLATIONS.reversedTag[language]}
                        </span>
                      )}
                    </h3>

                    {/* Natal Resonance Badge if matched */}
                    {natalResonance && (
                      <span className="text-[10px] font-serif font-bold px-2 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 animate-pulse">
                        {natalResonance.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-mono">
                    {dc.card.arcana === 'major'
                      ? 'Major Arcana'
                      : `Minor Arcana · ${dc.card.suit === 'cups' ? 'Cups (Water)' : dc.card.suit === 'pentacles' ? 'Pentacles (Earth)' : dc.card.suit === 'swords' ? 'Swords (Air)' : 'Wands (Fire)'}`}
                  </div>
                </div>

                <div className="w-14 h-22 rounded-xl overflow-hidden border border-[#8a7326]/70 flex-shrink-0 bg-black shadow-md">
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

              {/* Natal Reason if resonant */}
              {natalResonance && (
                <div className="p-2.5 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-serif text-amber-200/95 leading-relaxed">
                  <span className="font-bold text-amber-300">✦ Natal Affinity Note: </span>
                  {natalResonance.reason}
                </div>
              )}

              <div className="pt-2.5 border-t border-white/[0.08] text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                <b className="text-[#d4af37]">{UI_TRANSLATIONS.inThisPosition[language]} ({posName}):</b> {posContext}
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Deep Analysis Sections (100% Dynamic Multi-lingual) */}
      <div className="space-y-4 pt-2">
        
        {/* Mind */}
        {activeAnalysis.mind && (
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-purple-400 space-y-2">
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
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-amber-500 space-y-2">
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
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-indigo-400 space-y-2">
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
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-yellow-400 space-y-2">
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
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-rose-400 space-y-2">
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
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-teal-400 space-y-2">
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
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-[#d4af37] space-y-3">
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
              <p className="text-xs sm:text-sm text-[#c77dff] italic font-serif pt-2 border-t border-white/[0.08]">
                {activeAnalysis.archetype.shadow}
              </p>
            )}
          </div>
        )}

        {/* NEW FEATURE: The Quintessence Master Root Card */}
        <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-amber-400 space-y-3 shadow-xl">
          <div className="flex items-center space-x-2 text-sm font-serif font-bold text-[#d4af37]">
            <Crown className="w-4 h-4 text-[#d4af37]" />
            <span>{UI_TRANSLATIONS.quintessenceTitle[language]}</span>
          </div>
          <div className="text-base sm:text-lg font-serif font-bold text-amber-100">
            {quintessence.cardName[language]}
          </div>
          <p className="text-xs sm:text-sm text-[#e8e0f5] font-serif leading-relaxed">
            {quintessence.lesson[language]}
          </p>
        </div>

        {/* Master Summary Panel */}
        <div className="summary craft-panel p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1a0f35] to-[#120924] border border-[#d4af37]/60 text-center space-y-3 shadow-2xl">
          <div className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em] font-semibold">
            • {UI_TRANSLATIONS.sectionTitles.summary[language]} •
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#e8e0f5] font-serif italic leading-relaxed">
            {activeAnalysis.summary}
          </p>
        </div>

      </div>

      {/* Journal Reflection Box & Actions */}
      <div className="craft-panel p-5 sm:p-6 rounded-2xl space-y-3 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-serif uppercase tracking-wider text-[#d4af37] font-semibold">
            {UI_TRANSLATIONS.reflectionsTitle[language]}
          </span>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-xl border transition-all active:scale-95 ${
              isFavorite ? 'bg-[#d4af37] text-black border-[#d4af37]' : 'text-zinc-400 border-white/[0.1] hover:text-white hover:bg-white/5'
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
          className="w-full p-3.5 rounded-xl bg-black/60 border border-white/[0.1] text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 font-serif resize-none focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37]"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleSave}
            className={`h-10 px-5 rounded-xl text-xs sm:text-sm font-serif font-bold uppercase tracking-wider flex items-center space-x-2 transition-all active:scale-[0.98] ${
              saved
                ? 'bg-emerald-700 text-white'
                : 'btn-primary'
            }`}
          >
            {saved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            <span>{saved ? UI_TRANSLATIONS.savedToJournalBtn[language] : UI_TRANSLATIONS.saveToJournalBtn[language]}</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="h-10 px-4 rounded-xl btn-secondary text-xs sm:text-sm font-serif flex items-center space-x-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? UI_TRANSLATIONS.copiedBtn[language] : UI_TRANSLATIONS.copyBtn[language]}</span>
            </button>

            <button
              onClick={onOpenScrollModal}
              className="h-10 px-4 rounded-xl btn-secondary text-xs sm:text-sm font-serif text-[#d4af37] flex items-center space-x-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
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
          className="btn-primary h-12 px-8 rounded-xl font-serif text-sm sm:text-base tracking-[0.18em] uppercase flex items-center space-x-2.5 mx-auto"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{UI_TRANSLATIONS.shuffleAgainBtn[language]}</span>
        </button>
      </div>

      {/* Ask the Oracle Drawer */}
      <OracleChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        language={language}
        topic={topic}
        drawnCards={drawnCards}
        spread={spread}
        userProfile={userProfile}
      />

    </div>
  );
};
