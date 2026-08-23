import React, { useState, useMemo, useEffect } from 'react';
import { DrawnCard, Language, ReadingResultData } from '../../types/tarot';
import { UI_TRANSLATIONS } from '../../data/translations';
import {
  getPositionContextualMeaning,
  analyzeReading,
  calculateCelticCrossSynthesis,
  calculateChakraAlignment,
  calculateDecisionForkSynthesis,
  calculateRelationshipMirrorSynthesis
} from '../../services/deepReadingEngine';
import { audioService } from '../../services/audioService';
import { TarotSynergyService } from '../../services/tarotSynergyService';
import { AstrologyService } from '../../services/astrologyService';
import { VoiceOracleService } from '../../services/voiceOracleService';
import { LunarTransitService } from '../../services/lunarTransitService';
import { RitualAffirmationService } from '../../services/ritualAffirmationService';
import { CourtPersonaService, CourtCardPersona } from '../../services/courtPersonaService';
import { UserProfile } from '../../types/userProfile';
import { OracleChatDrawer } from './OracleChatDrawer';
import { SpatialSpreadAltar } from './SpatialSpreadAltar';
import { CardInspectorModal } from './CardInspectorModal';
import { TreeOfLifeModal } from '../astral/TreeOfLifeModal';
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
  Scale,
  Moon,
  LayoutGrid,
  FileText,
  Gem,
  Sprout,
  Sun,
  Eye,
  Compass,
  Sparkle,
  Heart,
  Users,
  GitFork,
  Activity,
  ShieldCheck,
  Award,
  UserCheck
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
  const [isTreeOfLifeOpen, setIsTreeOfLifeOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'altar' | 'analysis'>('altar');
  const [inspectedCard, setInspectedCard] = useState<DrawnCard | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [partnerProfile, setPartnerProfile] = useState<UserProfile | null>(null);

  const { drawnCards, spread, topic, question } = reading;

  useEffect(() => {
    setUserProfile(AstrologyService.loadProfile());
    setPartnerProfile(reading.partnerProfile || AstrologyService.loadPartnerProfile());
    const unsub = VoiceOracleService.subscribeState(setIsSpeaking);
    return () => {
      unsub();
      VoiceOracleService.stop();
    };
  }, [reading.partnerProfile]);

  // Live Lunar Transit
  const moonPhase = useMemo(() => {
    return LunarTransitService.getCurrentMoonPhase(language);
  }, [language]);

  // Astrological Synastry calculation if partner is present
  const synastrySummary = useMemo(() => {
    if (!userProfile || !partnerProfile) return null;
    return AstrologyService.calculateSynastry(userProfile, partnerProfile, language);
  }, [userProfile, partnerProfile, language]);

  // Dynamically compute analysis based on active language so it always translates instantly
  const activeAnalysis = useMemo(() => {
    return analyzeReading(topic, drawnCards, spread, language, userProfile, partnerProfile);
  }, [topic, drawnCards, spread, language, userProfile, partnerProfile]);

  // Specialized Spread Hermeneutic Syntheses
  const celticCrossSynthesis = useMemo(() => {
    if (spread.id === 'celtic_cross' || drawnCards.length >= 10) {
      return calculateCelticCrossSynthesis(drawnCards, language);
    }
    return null;
  }, [spread.id, drawnCards, language]);

  const chakraSynthesis = useMemo(() => {
    if (spread.id === 'chakra_spread' || (drawnCards.length === 7 && spread.id.includes('chakra'))) {
      return calculateChakraAlignment(drawnCards, language);
    }
    return null;
  }, [spread.id, drawnCards, language]);

  const decisionForkSynthesis = useMemo(() => {
    if (spread.id === 'decision_fork' || (drawnCards.length === 5 && spread.id.includes('decision'))) {
      return calculateDecisionForkSynthesis(drawnCards, language);
    }
    return null;
  }, [spread.id, drawnCards, language]);

  const relationshipMirrorSynthesis = useMemo(() => {
    if (spread.id === 'celtic' || spread.id === 'relationship' || (drawnCards.length === 5 && topic === 'love')) {
      return calculateRelationshipMirrorSynthesis(drawnCards, language, userProfile, partnerProfile);
    }
    return null;
  }, [spread.id, topic, drawnCards, language, userProfile, partnerProfile]);

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

  const extendedQuintessence = useMemo(() => {
    return TarotSynergyService.calculateExtendedQuintessence(drawnCards, language);
  }, [drawnCards, language]);

  const courtPersonasInSpread = useMemo(() => {
    return drawnCards
      .map(dc => ({
        drawnCard: dc,
        persona: CourtPersonaService.getCourtPersona(dc.card)
      }))
      .filter((item): item is { drawnCard: DrawnCard; persona: CourtCardPersona } => item.persona !== null);
  }, [drawnCards]);

  const polarityGauge = useMemo(() => {
    return TarotSynergyService.calculatePolarityGauge(drawnCards);
  }, [drawnCards]);

  // Ritual Prescription & Manifestation Affirmation
  const ritualPrescription = useMemo(() => {
    return RitualAffirmationService.generatePrescription(
      elementalDignities,
      quintessence,
      drawnCards,
      language
    );
  }, [elementalDignities, quintessence, drawnCards, language]);

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
    audioService.playCardSlide();
    const shadowText = extendedQuintessence?.shadowCardName
      ? `\n\n--- SHADOW INTEGRATION QUINTESSENCE ---\n✦ ${extendedQuintessence.shadowCardName[language]}: ${extendedQuintessence.shadowLesson[language]}`
      : '';

    const text = `╔══════════════════════════════════════════════════════╗\n` +
      `   ✦ ARCANIUM — SACRED TAROT DECREE ✦\n` +
      `╚══════════════════════════════════════════════════════╝\n\n` +
      `📜 Inquiry: "${question}"\n` +
      `🌌 Spread: ${spread.name[language]}\n` +
      `📅 Cast Date: ${new Date(reading.timestamp).toLocaleDateString()}\n\n` +
      `--- 🔮 POLARITY & CERTAINTY ---\n` +
      `${polarityGauge.verdict[language]} (${polarityGauge.score}% Harmonic Resonance)\n` +
      `${polarityGauge.explanation[language]}\n\n` +
      `--- 🎴 SACRED CARDS DRAWN ---\n` +
      drawnCards.map((dc, i) => `${i + 1}. [${dc.position.name[language]}]\n   ✦ ${dc.card.name[language]} ${dc.isReversed ? '⟲ (Reversed)' : '▲ (Upright)'}\n   "${dc.isReversed ? dc.card.reversedMeaning[language] : dc.card.uprightMeaning[language]}"`).join('\n\n') +
      `\n\n--- ☀️ PRIMARY MASTER QUINTESSENCE ---\n✦ ${quintessence.cardName[language]}: ${quintessence.lesson[language]}` +
      shadowText +
      `\n\n--- 🕯️ SACRED MANIFESTATION AFFIRMATION ---\n"${ritualPrescription.affirmation[language]}"` +
      `\n\n--- 🏛️ HERMENEUTIC SYNTHESIS ---\n${activeAnalysis.summary}` +
      `\n\n🔮 Cast on Arcanium: https://arcanium-tarot.vercel.app`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleVoiceOracle = () => {
    if (isSpeaking) {
      VoiceOracleService.stop();
    } else {
      audioService.playChime();
      const narrativeToRead = `${activeAnalysis.summary} ${activeAnalysis.advice} ${quintessence.lesson[language]} ${ritualPrescription.affirmation[language]}`;
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
        
        {/* Querent Natal Crest + Live Moon Phase Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {userProfile && (
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-serif text-amber-200">
              <span>Querent: <b>{userProfile.name}</b></span>
              {userProfile.zodiacSign && (
                <>
                  <span>•</span>
                  <span>{userProfile.zodiacSign.symbol} {userProfile.zodiacSign.name[language]}</span>
                </>
              )}
            </div>
          )}

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-xs font-serif text-indigo-200">
            <span>{moonPhase.emoji} {moonPhase.phaseName[language]}</span>
            <span>•</span>
            <span className="text-amber-300/90">{moonPhase.astrologicalSeason[language]}</span>
          </div>
        </div>

        <div className="text-xs font-serif text-[#d4af37]/90 flex items-center justify-center space-x-2">
          <span>{UI_TRANSLATIONS.spreadLabel[language]}: {spread.name[language]}</span>
          <span>•</span>
          <span>{drawnCards.length} {UI_TRANSLATIONS.cardsPick[language]}</span>
        </div>

        {/* View Toggle: Altar View vs Deep Analysis */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="inline-flex p-1 rounded-full bg-black/60 border border-white/[0.1]">
            <button
              onClick={() => {
                audioService.playCardSlide();
                setViewMode('altar');
              }}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-serif transition-all ${
                viewMode === 'altar'
                  ? 'bg-[#d4af37] text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{UI_TRANSLATIONS.altarViewBtn[language]}</span>
            </button>

            <button
              onClick={() => {
                audioService.playCardSlide();
                setViewMode('analysis');
              }}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-serif transition-all ${
                viewMode === 'analysis'
                  ? 'bg-[#d4af37] text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{UI_TRANSLATIONS.analysisViewBtn[language]}</span>
            </button>
          </div>
        </div>

        {/* Action Pills: Voice Oracle + Ask Oracle */}
        <div className="flex items-center justify-center gap-2.5 pt-1">
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

          <button
            onClick={() => {
              audioService.playCardSlide();
              setIsTreeOfLifeOpen(true);
            }}
            className="h-9 px-4 rounded-full text-xs font-serif flex items-center space-x-2 transition-all border bg-purple-950/30 hover:bg-purple-900/40 border-purple-500/40 text-purple-200 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-300" />
            <span>{language === 'my' ? 'ကဘ္ဗလာ ဝိညာဉ်အပင်' : language === 'ja' ? '生命の樹マップ' : 'Tree of Life'}</span>
          </button>
        </div>
      </div>

      {/* ALTAR SPATIAL VIEW (Sacred Geometry Canvas) */}
      {viewMode === 'altar' && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="text-center text-[11px] text-zinc-300 font-serif italic">
            ✦ {UI_TRANSLATIONS.cardInspectorHint[language]} ✦
          </div>
          <SpatialSpreadAltar
            drawnCards={drawnCards}
            spread={spread}
            language={language}
            onCardClick={(card) => setInspectedCard(card)}
          />
        </div>
      )}

      {/* DEEP ANALYSIS VIEW (Horizontal Mini Gallery) */}
      {viewMode === 'analysis' && (
        <div className="scroll-fade-x flex items-center justify-center gap-3 py-2 overflow-x-auto px-4 animate-in fade-in duration-300">
          {drawnCards.map((dc, i) => (
            <div
              key={i}
              onClick={() => {
                audioService.playCardHover();
                setInspectedCard(dc);
              }}
              className="flex flex-col items-center space-y-1 p-2 rounded-xl bg-black/40 border border-white/[0.08] flex-shrink-0 hover:border-[#d4af37]/50 transition-colors cursor-pointer"
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
      )}

      {/* Certainty & Polarity Gauge */}
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

      {/* Astrological Synastry & Interpersonal Alchemy Matrix (When Partner Profile is Attuned) */}
      {synastrySummary && userProfile && partnerProfile && (
        <div className="craft-panel p-5 sm:p-7 rounded-3xl border-2 border-rose-400/40 bg-gradient-to-b from-[#1c0a2a] via-[#10051c] to-[#0a0312] space-y-5 shadow-[0_0_35px_rgba(251,113,133,0.15)] animate-in fade-in duration-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300">
                <Heart className="w-4 h-4 fill-rose-400/40" />
              </div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-rose-100 tracking-wide">
                {language === 'my'
                  ? 'နက္ခတ်ဗေဒ သဟဇာတနှင့် စိတ်ဝိညာဉ် ဓာတ်ပေါင်းစပ်မှု (Astrological Synastry)'
                  : language === 'ja'
                  ? '占星術シナストリー＆魂の錬金術マトリックス'
                  : 'Astrological Synastry & Interpersonal Alchemy Matrix'}
              </h3>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-xs font-mono font-bold text-rose-200">
              <Sparkles className="w-3.5 h-3.5 text-rose-300" />
              <span>{synastrySummary.compatibilityScore}% {language === 'my' ? 'သဟဇာတ ညှိနှိုင်းမှု' : language === 'ja' ? '調和指数' : 'Harmony Index'}</span>
            </div>
          </div>

          {/* Dual Profile Astrological Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-center">
            {/* Querent Card */}
            <div className="p-4 rounded-2xl bg-black/40 border border-[#d4af37]/30 space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2.5">
                <span className="text-2xl">{userProfile.zodiacSign?.symbol}</span>
                <div>
                  <div className="text-xs font-serif font-bold text-amber-100">{userProfile.name}</div>
                  <div className="text-[11px] font-mono text-[#d4af37]">
                    {userProfile.zodiacSign?.name[language]} • {userProfile.zodiacSign?.element}
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-zinc-400 pt-1">
                Life Path #{userProfile.lifePathNumber}
              </div>
            </div>

            {/* Elemental Nexus Dynamic */}
            <div className="p-3.5 rounded-2xl bg-rose-950/40 border border-rose-400/30 text-center space-y-2">
              <div className="text-xs font-serif font-bold text-rose-200 uppercase tracking-wider">
                {synastrySummary.userElement} & {synastrySummary.partnerElement} Alchemy
              </div>
              <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-500 via-amber-400 to-rose-400 transition-all duration-700"
                  style={{ width: `${synastrySummary.compatibilityScore}%` }}
                />
              </div>
              <div className="text-[10px] font-mono text-rose-300/80">
                Composite Key: #{synastrySummary.compositeLifePathNumber} {synastrySummary.compositeSoulCardName[language]}
              </div>
            </div>

            {/* Partner Card */}
            <div className="p-4 rounded-2xl bg-black/40 border border-rose-400/30 space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2.5">
                <span className="text-2xl">{partnerProfile.zodiacSign?.symbol}</span>
                <div>
                  <div className="text-xs font-serif font-bold text-rose-100">{partnerProfile.name}</div>
                  <div className="text-[11px] font-mono text-rose-300">
                    {partnerProfile.zodiacSign?.name[language]} • {partnerProfile.zodiacSign?.element}
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-zinc-400 pt-1">
                Life Path #{partnerProfile.lifePathNumber}
              </div>
            </div>
          </div>

          {/* Elemental Chemistry & Narrative */}
          <div className="space-y-2 p-3.5 rounded-2xl bg-black/40 border border-white/[0.06] text-xs sm:text-sm font-serif leading-relaxed text-zinc-200">
            <p>
              <strong className="text-rose-300 font-semibold">{synastrySummary.dynamicVerdict[language]}</strong>
            </p>
            <p className="text-zinc-300">
              {synastrySummary.elementalChemistry[language]}
            </p>
            <div className="pt-2 border-t border-white/[0.06] text-amber-200/90">
              <span className="font-bold text-rose-300">✦ {language === 'my' ? 'ဆက်ဆံရေး ချိန်ညှိမှု လမ်းညွှန်' : language === 'ja' ? '関係性向上の錬金術' : 'Relational Alchemy Guidance'}: </span>
              {synastrySummary.synastryAdvice[language]}
            </div>
          </div>
        </div>
      )}

      {/* Elemental Dignities & Alchemy Matrix */}
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

      {/* Detected Card Synergies */}
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

      {/* People in Your Orbit — Court Card Archetype Matrix */}
      {courtPersonasInSpread.length > 0 && (
        <div className="craft-panel p-6 sm:p-7 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-950/20 via-[#0d071d] to-black space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-emerald-300">
                  {language === 'my' ? 'သင့်ပတ်ဝန်းကျင်ရှိ လူပုဂ္ဂိုလ်များ (Court Card Archetypes)' : language === 'ja' ? 'あなたの軌道上の人物像（コートカード分析）' : 'People in Your Orbit • Court Card Typology'}
                </h3>
                <p className="text-xs text-zinc-400 font-serif">
                  {language === 'my' ? 'အကဲဖြတ်ထားသော ကတ်များမှ တိုက်ရိုက်သက်ရောက်နေသော လူပုဂ္ဂိုလ်ပုံစံများ' : language === 'ja' ? '展開されたカードが示す実生活の重要人物と関係性' : 'Real-world allies, mentors, rivals, or messengers present in your spread'}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-400/15 border border-emerald-400/40 text-emerald-200 font-bold">
              {courtPersonasInSpread.length} {courtPersonasInSpread.length === 1 ? 'Persona' : 'Personas'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courtPersonasInSpread.map(({ drawnCard, persona }, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black/60 border border-emerald-500/25 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-serif font-bold text-amber-200 flex items-center space-x-2">
                    <span>👑 {drawnCard.card.name[language]}</span>
                    <span className="text-[10px] text-zinc-400 font-mono">({drawnCard.position.name[language]})</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300">
                    {persona.mbtiResonance}
                  </span>
                </div>
                <div className="text-xs font-serif font-bold text-emerald-300">
                  {persona.roleTitle[language]}
                </div>
                <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                  {persona.personaArchetype[language]}
                </p>
                <div className="pt-2 border-t border-white/5 space-y-1 text-xs font-serif">
                  <div><span className="text-amber-300 font-bold">🧭 Guidance: </span><span className="text-zinc-300">{persona.relationshipAdvice[language]}</span></div>
                  <div><span className="text-rose-400 font-bold">⚠️ Warning: </span><span className="text-zinc-300">{persona.shadowPitfall[language]}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 1. 10-Card Celtic Cross Grand Synthesis Panel */}
      {celticCrossSynthesis && (
        <div className="craft-panel p-6 sm:p-8 rounded-3xl border-2 border-[#d4af37]/60 bg-gradient-to-b from-[#180e2f] via-[#0d071d] to-black space-y-6 shadow-[0_0_40px_rgba(212,175,55,0.2)] animate-in fade-in duration-500">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#d4af37]">
                {language === 'my' ? '၁၀ ကတ် ဆဲလ်တစ်ကြက်ခြေခတ် မဟာပေါင်းစပ်သုံးသပ်ချက်' : language === 'ja' ? 'ケルト十字 10カード・神聖秘儀総合統合' : '10-Card Celtic Cross Grand Hermeneutic Synthesis'}
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-200 font-bold">
              {celticCrossSynthesis.crossTension.harmonyScore}% Harmony
            </span>
          </div>

          {/* Central Axis & Cross Tension */}
          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              ✦ {celticCrossSynthesis.crossTension.title[language]}
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 font-serif leading-relaxed">
              {celticCrossSynthesis.crossTension.analysis[language]}
            </p>
          </div>

          {/* Grid: Spiritual Vertical Axis & Temporal Stream */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-2">
              <div className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">
                🌌 Spiritual Axis (Root ↔ Crown)
              </div>
              <div className="text-xs text-zinc-300 font-serif space-y-1">
                <div><b>Root:</b> {celticCrossSynthesis.spiritualAxis.rootFoundation[language]}</div>
                <div><b>Crown:</b> {celticCrossSynthesis.spiritualAxis.crownAspiration[language]}</div>
                <div className="text-[11px] text-purple-200 italic pt-1">{celticCrossSynthesis.spiritualAxis.axisAlignment[language]}</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
              <div className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                ⏳ Temporal Stream (Karma ↔ Manifestation)
              </div>
              <div className="text-xs text-zinc-300 font-serif space-y-1">
                <div><b>Past:</b> {celticCrossSynthesis.temporalStream.karmicPast[language]}</div>
                <div><b>Present:</b> {celticCrossSynthesis.temporalStream.presentDynamic[language]}</div>
                <div><b>Future:</b> {celticCrossSynthesis.temporalStream.approachingWave[language]}</div>
              </div>
            </div>
          </div>

          {/* Staff of Destiny 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold">Internal Stance:</span>
              <p className="text-zinc-300">{celticCrossSynthesis.staffOfDestiny.querentStance[language]}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold">External Mirror:</span>
              <p className="text-zinc-300">{celticCrossSynthesis.staffOfDestiny.environmentalMirror[language]}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold">Hopes & Shadow Fears:</span>
              <p className="text-zinc-300">{celticCrossSynthesis.staffOfDestiny.hopesAndFearsPolarity[language]}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-emerald-300 font-bold">Ultimate Culmination:</span>
              <p className="text-zinc-300">{celticCrossSynthesis.staffOfDestiny.finalManifestation[language]}</p>
            </div>
          </div>

          {/* Waite Grand Verdict */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-[#d4af37]/40 text-center space-y-1.5">
            <div className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest font-bold">
              • A.E. Waite Oracular Synthesis •
            </div>
            <p className="text-xs sm:text-sm font-serif italic text-amber-100 leading-relaxed">
              "{celticCrossSynthesis.destinyVerdict[language]}"
            </p>
          </div>
        </div>
      )}

      {/* 2. 7-Chakra Ascending Kundalini Matrix Panel */}
      {chakraSynthesis && (
        <div className="craft-panel p-6 sm:p-8 rounded-3xl border-2 border-purple-500/40 bg-gradient-to-b from-[#1c0a2f] via-[#0e051c] to-black space-y-6 shadow-[0_0_40px_rgba(168,85,247,0.2)] animate-in fade-in duration-500">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-purple-200">
                  {language === 'my' ? 'စွမ်းအင်စက်ဝန်း ၇ ခု ကုစားဆန်းစစ်မှု (7-Chakra Alignment)' : language === 'ja' ? '7チャクラ・クンダリーニ完全診断マトリックス' : '7-Chakra Ascending Kundalini Alignment Matrix'}
                </h3>
                <p className="text-xs text-zinc-400 font-serif">
                  {chakraSynthesis.overallAlignment[language]}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-400/15 border border-purple-400/40 text-purple-200 font-bold">
              {chakraSynthesis.vitalityScore}% Kundalini Vitality
            </span>
          </div>

          {/* Chakra Centers Vertical Stack */}
          <div className="space-y-3">
            {chakraSynthesis.chakraCenters.map((ch) => (
              <div
                key={ch.chakraId}
                className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-purple-400/40 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0 shadow-md"
                    style={{ backgroundColor: ch.color }}
                  />
                  <div>
                    <div className="text-xs font-serif font-bold text-amber-100 flex items-center space-x-1.5">
                      <span>{ch.name[language]}</span>
                      <span className="text-[10px] font-mono text-zinc-400">({ch.sanskritName} • {ch.element})</span>
                    </div>
                    <p className="text-xs text-zinc-300 font-serif pt-0.5">{ch.insight[language]}</p>
                    <p className="text-[11px] text-amber-200/80 font-serif italic pt-0.5">{ch.healingPrescription[language]}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                    ch.status === 'open' ? 'bg-emerald-950/60 border-emerald-400/50 text-emerald-300' :
                    ch.status === 'blocked' ? 'bg-rose-950/60 border-rose-400/50 text-rose-300' :
                    'bg-amber-950/60 border-amber-400/50 text-amber-300'
                  }`}>
                    {ch.status}
                  </span>
                  <div className="w-8 h-12 rounded-lg bg-black border border-white/10 overflow-hidden flex items-center justify-center">
                    <img
                      src={`/cards/${ch.card.file}`}
                      alt={ch.card.name[language]}
                      style={{ transform: ch.isReversed ? 'rotate(180deg)' : 'none' }}
                      className="w-full h-full object-contain p-0.5"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-xs text-purple-200 font-serif leading-relaxed text-center">
            {chakraSynthesis.kundaliniGuidance[language]}
          </div>
        </div>
      )}

      {/* 3. Two Paths Decision Fork Synthesis Panel */}
      {decisionForkSynthesis && (
        <div className="craft-panel p-6 sm:p-8 rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-[#1c1308] via-[#0f0904] to-black space-y-6 shadow-[0_0_40px_rgba(245,158,11,0.2)] animate-in fade-in duration-500">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <GitFork className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-amber-200">
                  {language === 'my' ? 'လမ်းနှစ်ခွ ရွေးချယ်မှု နှိုင်းယှဉ်ချက် (Decision Fork)' : language === 'ja' ? '運命の分岐点・二者択一 比較マトリックス' : 'Two Paths Decision Fork Oracular Comparison'}
                </h3>
                <p className="text-xs text-zinc-400 font-serif">
                  {decisionForkSynthesis.baseCrossroads[language]}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-200 font-bold">
              {decisionForkSynthesis.recommendedPath}
            </span>
          </div>

          {/* Side by side comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Path A */}
            <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-sm font-serif font-bold text-amber-300">
                  {decisionForkSynthesis.pathA.title[language]}
                </span>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                  {decisionForkSynthesis.pathA.viabilityScore}% Viable
                </span>
              </div>
              <div className="space-y-1.5 text-xs font-serif text-zinc-200">
                <div><b>Trajectory:</b> {decisionForkSynthesis.pathA.trajectory[language]}</div>
                <div><b>Outcome:</b> {decisionForkSynthesis.pathA.outcome[language]}</div>
                <div className="text-emerald-300">{decisionForkSynthesis.pathA.advantages[language]}</div>
                <div className="text-rose-300">{decisionForkSynthesis.pathA.hiddenRisks[language]}</div>
              </div>
            </div>

            {/* Path B */}
            <div className="p-4 rounded-2xl bg-black/50 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-sm font-serif font-bold text-cyan-300">
                  {decisionForkSynthesis.pathB.title[language]}
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
                  {decisionForkSynthesis.pathB.viabilityScore}% Viable
                </span>
              </div>
              <div className="space-y-1.5 text-xs font-serif text-zinc-200">
                <div><b>Trajectory:</b> {decisionForkSynthesis.pathB.trajectory[language]}</div>
                <div><b>Outcome:</b> {decisionForkSynthesis.pathB.outcome[language]}</div>
                <div className="text-emerald-300">{decisionForkSynthesis.pathB.advantages[language]}</div>
                <div className="text-rose-300">{decisionForkSynthesis.pathB.hiddenRisks[language]}</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-100 font-serif italic text-center leading-relaxed">
            "{decisionForkSynthesis.oracularVerdict[language]}"
          </div>
        </div>
      )}

      {/* 4. Relationship Mirror Matrix Panel */}
      {relationshipMirrorSynthesis && (
        <div className="craft-panel p-6 sm:p-8 rounded-3xl border-2 border-pink-500/40 bg-gradient-to-b from-[#220a1e] via-[#12040f] to-black space-y-5 shadow-[0_0_40px_rgba(244,114,182,0.2)] animate-in fade-in duration-500">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-pink-500/20 border border-pink-400/40 flex items-center justify-center text-pink-300">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-pink-200">
                {language === 'my' ? 'သံယောဇဉ် အချစ်ရေး နှလုံးသား ပေါင်းကူးသုံးသပ်ချက်' : language === 'ja' ? 'リレーションシップ・魂の鏡像分析' : 'Interpersonal Relationship Mirror & Soul Synthesis'}
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-pink-400/15 border border-pink-400/40 text-pink-200 font-bold">
              {relationshipMirrorSynthesis.harmonicResonanceScore}% Harmonic Resonance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif">
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-pink-300 font-bold">Querent Energy:</span>
              <p className="text-zinc-200">{relationshipMirrorSynthesis.querentArchetype[language]}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-pink-300 font-bold">Counterpart Energy:</span>
              <p className="text-zinc-200">{relationshipMirrorSynthesis.partnerArchetype[language]}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-amber-300 font-bold">Central Nexus:</span>
              <p className="text-zinc-200">{relationshipMirrorSynthesis.nexusBond[language]}</p>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <span className="text-rose-400 font-bold">Growth Friction:</span>
              <p className="text-zinc-200">{relationshipMirrorSynthesis.coreFriction[language]}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1 text-xs font-serif">
            <span className="text-emerald-300 font-bold">The Forward Bridge:</span>
            <p className="text-zinc-200">{relationshipMirrorSynthesis.forwardBridge[language]}</p>
          </div>

          <div className="p-4 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-xs sm:text-sm text-pink-100 font-serif italic text-center leading-relaxed">
            "{relationshipMirrorSynthesis.relationalAlchemyCounsel[language]}"
          </div>
        </div>
      )}

      {/* Card-by-card, position-aware readings */}
      <div className="space-y-4">
        {drawnCards.map((dc, i) => {
          const posName = dc.position.name[language];
          const posContext = getPositionContextualMeaning(dc.position.name.en, dc.card, dc.isReversed, language);
          const natalResonance = AstrologyService.getCardNatalResonance(dc.card, userProfile, language);

          return (
            <div
              key={dc.card.id + i}
              style={{ animationDelay: `${i * 0.12}s` }}
              className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-[#d4af37] space-y-3 animate-in fade-in slide-in-from-bottom-2 cursor-pointer hover:border-[#d4af37]/80 transition-all"
              onClick={() => {
                audioService.playCardHover();
                setInspectedCard(dc);
              }}
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

      {/* Deep Analysis Sections */}
      <div className="space-y-4 pt-2">
        
        {/* Mind */}
        {activeAnalysis.mind && (
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-purple-400 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-sm">
                <Eye className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
                {UI_TRANSLATIONS.sectionTitles.mind[language]}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed pl-1">
              {activeAnalysis.mind}
            </p>
          </div>
        )}

        {/* Problems */}
        {activeAnalysis.problems && (
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-amber-500 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow-sm">
                <Zap className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
                {UI_TRANSLATIONS.sectionTitles.problems[language]}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed pl-1">
              {activeAnalysis.problems}
            </p>
          </div>
        )}

        {/* Hidden Forces */}
        {activeAnalysis.forces && (
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-indigo-400 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shadow-sm">
                <Moon className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
                {UI_TRANSLATIONS.sectionTitles.forces[language]}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed pl-1">
              {activeAnalysis.forces}
            </p>
          </div>
        )}

        {/* Advice */}
        {activeAnalysis.advice && (
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-yellow-400 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center text-yellow-300 shadow-sm">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
                {UI_TRANSLATIONS.sectionTitles.advice[language]}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed pl-1">
              {activeAnalysis.advice}
            </p>
          </div>
        )}

        {/* Outlook */}
        {activeAnalysis.outlook && (
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-rose-400 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-300 shadow-sm">
                <Sun className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
                {UI_TRANSLATIONS.sectionTitles.outlook[language]}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed pl-1">
              {activeAnalysis.outlook}
            </p>
          </div>
        )}

        {/* Timeline */}
        {activeAnalysis.timeline && (
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-teal-400 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 shadow-sm">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
                {UI_TRANSLATIONS.sectionTitles.timeline[language]}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#e8e0f5] font-serif leading-relaxed pl-1">
              {activeAnalysis.timeline}
            </p>
          </div>
        )}

        {/* Archetype */}
        {activeAnalysis.archetype && (
          <div className="craft-panel p-5 sm:p-6 rounded-2xl border-l-4 border-l-[#d4af37] space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shadow-sm">
                <Crown className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif text-[#d4af37] tracking-wide font-semibold">
                {UI_TRANSLATIONS.sectionTitles.archetype[language]}
              </h3>
            </div>
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

        {/* The Quintessence Master Root Card (Primary & Shadow) */}
        <div className="craft-panel p-6 sm:p-7 rounded-3xl border-l-4 border-l-amber-400 space-y-4 shadow-xl bg-gradient-to-br from-amber-950/20 via-black/50 to-black">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center space-x-2 text-sm sm:text-base font-serif font-bold text-[#d4af37]">
              <Crown className="w-4 h-4 text-[#d4af37]" />
              <span>{UI_TRANSLATIONS.quintessenceTitle[language]}</span>
            </div>
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-200">
              Arcanum {extendedQuintessence.number}
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="text-base sm:text-lg font-serif font-bold text-amber-100 flex items-center space-x-2">
              <span>✦ {extendedQuintessence.cardName[language]}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#e8e0f5] font-serif leading-relaxed">
              {extendedQuintessence.lesson[language]}
            </p>
          </div>

          {/* Shadow Quintessence Complement */}
          <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/20 space-y-1">
            <div className="text-xs font-serif font-bold text-purple-300 flex items-center justify-between">
              <span>🌑 Shadow Quintessence: {extendedQuintessence.shadowCardName[language]}</span>
              <span className="text-[10px] font-mono text-purple-400">Arcanum {extendedQuintessence.shadowNumber}</span>
            </div>
            <p className="text-xs text-purple-200/90 font-serif italic leading-relaxed">
              {extendedQuintessence.shadowLesson[language]}
            </p>
          </div>
        </div>

        {/* Manifestation Affirmation & Micro-Ritual Prescription */}
        <div className="craft-panel p-6 sm:p-7 rounded-2xl border-l-4 border-l-emerald-400 space-y-4 shadow-xl bg-gradient-to-br from-emerald-950/15 via-black/40 to-black/60">
          <div className="flex items-center space-x-2 text-sm sm:text-base font-serif font-bold text-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{UI_TRANSLATIONS.ritualTitle[language]}</span>
          </div>

          {/* Golden Affirmation Decree */}
          <div className="p-4 rounded-xl bg-white/[0.04] border border-emerald-500/30 text-center space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
              • Sacred Manifestation Decree •
            </div>
            <p className="text-sm sm:text-base font-serif italic font-medium text-amber-100 leading-relaxed">
              "{ritualPrescription.affirmation[language]}"
            </p>
          </div>

          {/* Micro-Rituals Grid with Glowing SVG Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-serif">
            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5 flex flex-col justify-between">
              <span className="text-amber-300 font-semibold flex items-center space-x-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Candle & Color:</span>
              </span>
              <span className="text-zinc-200">{ritualPrescription.candleColor[language]}</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5 flex flex-col justify-between">
              <span className="text-cyan-300 font-semibold flex items-center space-x-1.5">
                <Gem className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sacred Crystal:</span>
              </span>
              <span className="text-zinc-200">{ritualPrescription.crystal[language]}</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5 flex flex-col justify-between">
              <span className="text-purple-300 font-semibold flex items-center space-x-1.5">
                <Sprout className="w-3.5 h-3.5 text-purple-400" />
                <span>Sacred Herbs/Scent:</span>
              </span>
              <span className="text-zinc-200">{ritualPrescription.sacredHerb[language]}</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] space-y-1.5 flex flex-col justify-between">
              <span className="text-emerald-300 font-semibold flex items-center space-x-1.5">
                <Wind className="w-3.5 h-3.5 text-emerald-400" />
                <span>Breath Meditation:</span>
              </span>
              <span className="text-zinc-200">{ritualPrescription.breathRitual[language]}</span>
            </div>
          </div>
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

      {/* Card Deep Dive Inspector Modal */}
      <CardInspectorModal
        drawnCard={inspectedCard}
        language={language}
        onClose={() => setInspectedCard(null)}
      />

      {/* Tree of Life Astral Overlay Modal */}
      {isTreeOfLifeOpen && (
        <TreeOfLifeModal
          drawnCards={drawnCards}
          language={language}
          onClose={() => setIsTreeOfLifeOpen(false)}
        />
      )}

    </div>
  );
};
