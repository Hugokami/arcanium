import React, { useState, useMemo, useEffect } from 'react';
import { DrawnCard, Language, ReadingResultData, TarotCard } from '../../types/tarot';
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
  UserCheck,
  Download,
  Loader2
} from 'lucide-react';
import { SpreadCanvasExportService } from '../../services/spreadCanvasExportService';

interface DeepReadingViewProps {
  reading: ReadingResultData;
  language: Language;
  onSaveToJournal: (reading: ReadingResultData, userNotes?: string, isFav?: boolean) => void;
  onResetHome: () => void;
  onOpenScrollModal: () => void;
  onOpenSynergy?: (cards: TarotCard[]) => void;
  isSavedInJournal?: boolean;
}

export const DeepReadingView: React.FC<DeepReadingViewProps> = ({
  reading,
  language,
  onSaveToJournal,
  onResetHome,
  onOpenScrollModal,
  onOpenSynergy,
  isSavedInJournal = false
}) => {
  const [saved, setSaved] = useState<boolean>(isSavedInJournal);
  const [userNotes, setUserNotes] = useState<string>(reading.userNotes || '');
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExportingPng, setIsExportingPng] = useState<boolean>(false);
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

  const handleExportPng = async () => {
    try {
      setIsExportingPng(true);
      await SpreadCanvasExportService.exportSpreadImage(reading, language, userProfile, { format: 'landscape' });
    } catch (err) {
      console.error('Failed to export PNG graphic:', err);
    } finally {
      setIsExportingPng(false);
    }
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
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded border border-[#292524] bg-[#141210] text-[11px] font-mono tracking-widest text-[#a8a29e] uppercase">
          <span>Oracle Decree</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-serif tracking-tight text-[#f5f5f4]">
          {UI_TRANSLATIONS.readingTitle[language]}
        </h1>
        <p className="text-sm sm:text-base text-[#f5f5f4] font-sans italic">
          "{question}"
        </p>
        
        {/* Querent Natal Crest + Live Moon Phase Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          {userProfile && (
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#141210] border border-[#292524] text-xs font-sans text-[#a8a29e]">
              <span>Querent: <b className="text-[#f5f5f4]">{userProfile.name}</b></span>
              {userProfile.zodiacSign && (
                <>
                  <span className="text-[#78716c]">•</span>
                  <span>{userProfile.zodiacSign.symbol} {userProfile.zodiacSign.name[language]}</span>
                </>
              )}
            </div>
          )}

          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#141210] border border-[#292524] text-xs font-sans text-[#a8a29e]">
            <span>{moonPhase.phaseName[language]}</span>
            <span className="text-[#78716c]">•</span>
            <span>{moonPhase.astrologicalSeason[language]}</span>
          </div>
        </div>

        <div className="text-xs font-sans text-[#78716c] flex items-center justify-center space-x-2">
          <span>{UI_TRANSLATIONS.spreadLabel[language]}: {spread.name[language]}</span>
          <span>•</span>
          <span>{drawnCards.length} {UI_TRANSLATIONS.cardsPick[language]}</span>
        </div>

        {/* View Toggle: Altar View vs Deep Analysis */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="inline-flex p-1 rounded-lg bg-[#141210] border border-[#292524]">
            <button
              onClick={() => {
                audioService.playCardSlide();
                setViewMode('altar');
              }}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-sans transition-all ${
                viewMode === 'altar'
                  ? 'bg-[#292524] text-[#f5f5f4] font-medium'
                  : 'text-[#78716c] hover:text-[#f5f5f4]'
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
              className={`flex items-center space-x-1.5 px-3 py-1 rounded text-xs font-sans transition-all ${
                viewMode === 'analysis'
                  ? 'bg-[#292524] text-[#f5f5f4] font-medium'
                  : 'text-[#78716c] hover:text-[#f5f5f4]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{UI_TRANSLATIONS.analysisViewBtn[language]}</span>
            </button>
          </div>
        </div>

        {/* Action Pills: Voice Oracle + Ask Oracle */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <button
            onClick={toggleVoiceOracle}
            className={`h-8 px-3.5 rounded-lg text-xs font-sans flex items-center space-x-1.5 transition-all border ${
              isSpeaking
                ? 'bg-[#292524] border-[#78716c] text-[#f5f5f4]'
                : 'bg-[#141210] hover:bg-[#1c1917] border-[#292524] text-[#a8a29e] hover:text-[#f5f5f4]'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isSpeaking ? UI_TRANSLATIONS.voiceStopBtn[language] : UI_TRANSLATIONS.voiceListenBtn[language]}</span>
          </button>

          <button
            onClick={() => setIsChatOpen(true)}
            className="h-8 px-3.5 rounded-lg text-xs font-sans flex items-center space-x-1.5 transition-all border bg-[#141210] hover:bg-[#1c1917] border-[#292524] text-[#a8a29e] hover:text-[#f5f5f4]"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.askOracleBtn[language]}</span>
          </button>

          <button
            onClick={() => {
              audioService.playCardSlide();
              setIsTreeOfLifeOpen(true);
            }}
            className="h-8 px-3.5 rounded-lg text-xs font-sans flex items-center space-x-1.5 transition-all border bg-[#141210] hover:bg-[#1c1917] border-[#292524] text-[#a8a29e] hover:text-[#f5f5f4]"
          >
            <Sparkles className="w-3.5 h-3.5" />
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
      <div className="craft-card p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm font-serif font-bold text-[#f5f5f4]">
            <Scale className="w-4 h-4 text-[#a8a29e]" />
            <span>{UI_TRANSLATIONS.polarityTitle[language]}</span>
          </div>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
            {polarityGauge.score}% Confidence
          </span>
        </div>

        {/* Meter bar */}
        <div className="w-full h-1.5 rounded-full bg-[#0c0a09] border border-[#292524] overflow-hidden">
          <div
            className="h-full bg-[#f5f5f4] transition-all duration-500"
            style={{ width: `${polarityGauge.score}%` }}
          />
        </div>

        <div className="text-sm font-serif text-[#f5f5f4] font-semibold">
          {polarityGauge.verdict[language]}
        </div>
        <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
          {polarityGauge.explanation[language]}
        </p>
      </div>

      {/* Astrological Synastry & Interpersonal Alchemy Matrix (When Partner Profile is Attuned) */}
      {synastrySummary && userProfile && partnerProfile && (
        <div className="craft-card p-5 sm:p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#292524] pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1c1917] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-serif font-bold text-[#f5f5f4] tracking-wide">
                {language === 'my'
                  ? 'နက္ခတ်ဗေဒ သဟဇာတနှင့် စိတ်ဝိညာဉ် ဓာတ်ပေါင်းစပ်မှု (Astrological Synastry)'
                  : language === 'ja'
                  ? '占星術シナストリー＆魂の錬金術マトリックス'
                  : 'Astrological Synastry & Interpersonal Alchemy Matrix'}
              </h3>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-xs font-mono text-[#a8a29e]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{synastrySummary.compatibilityScore}% {language === 'my' ? 'သဟဇာတ ညှိနှိုင်းမှု' : language === 'ja' ? '調和指数' : 'Harmony Index'}</span>
            </div>
          </div>

          {/* Dual Profile Astrological Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-center">
            {/* Querent Card */}
            <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2.5">
                <span className="text-2xl">{userProfile.zodiacSign?.symbol}</span>
                <div>
                  <div className="text-xs font-serif font-bold text-[#f5f5f4]">{userProfile.name}</div>
                  <div className="text-[11px] font-mono text-[#a8a29e]">
                    {userProfile.zodiacSign?.name[language]} • {userProfile.zodiacSign?.element}
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-[#78716c] pt-1">
                Life Path #{userProfile.lifePathNumber}
              </div>
            </div>

            {/* Elemental Nexus Dynamic */}
            <div className="p-3.5 rounded-xl bg-[#0c0a09] border border-[#292524] text-center space-y-2">
              <div className="text-xs font-mono text-[#a8a29e] uppercase tracking-wider">
                {synastrySummary.userElement} & {synastrySummary.partnerElement} Alchemy
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#1c1917] border border-[#292524] overflow-hidden">
                <div
                  className="h-full bg-[#f5f5f4] transition-all duration-500"
                  style={{ width: `${synastrySummary.compatibilityScore}%` }}
                />
              </div>
              <div className="text-[10px] font-mono text-[#78716c]">
                Composite Key: #{synastrySummary.compositeLifePathNumber} {synastrySummary.compositeSoulCardName[language]}
              </div>
            </div>

            {/* Partner Card */}
            <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-2.5">
                <span className="text-2xl">{partnerProfile.zodiacSign?.symbol}</span>
                <div>
                  <div className="text-xs font-serif font-bold text-[#f5f5f4]">{partnerProfile.name}</div>
                  <div className="text-[11px] font-mono text-[#a8a29e]">
                    {partnerProfile.zodiacSign?.name[language]} • {partnerProfile.zodiacSign?.element}
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-[#78716c] pt-1">
                Life Path #{partnerProfile.lifePathNumber}
              </div>
            </div>
          </div>

          {/* Elemental Chemistry & Narrative */}
          <div className="space-y-2 p-3.5 rounded-xl bg-[#0c0a09] border border-[#292524] text-xs sm:text-sm font-sans leading-relaxed text-[#a8a29e]">
            <p>
              <strong className="text-[#f5f5f4] font-serif">{synastrySummary.dynamicVerdict[language]}</strong>
            </p>
            <p>
              {synastrySummary.elementalChemistry[language]}
            </p>
            <div className="pt-2 border-t border-[#292524] text-[#a8a29e]">
              <span className="font-bold text-[#f5f5f4] font-serif">✦ {language === 'my' ? 'ဆက်ဆံရေး ချိန်ညှိမှု လမ်းညွှန်' : language === 'ja' ? '関係性向上の錬金術' : 'Relational Alchemy Guidance'}: </span>
              {synastrySummary.synastryAdvice[language]}
            </div>
          </div>
        </div>
      )}

      {/* Elemental Dignities & Alchemy Matrix */}
      <div className="craft-card p-5 sm:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm font-serif font-bold text-[#f5f5f4]">
            <Sparkles className="w-4 h-4 text-[#a8a29e]" />
            <span>{UI_TRANSLATIONS.elementalTitle[language]}</span>
          </div>
          <span className="text-xs font-mono text-[#a8a29e]">
            Harmony: <b className="text-[#f5f5f4]">{elementalDignities.harmonyScore}%</b>
          </span>
        </div>

        {/* 4 Elements Distribution Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#0c0a09] border border-[#292524]">
            <Flame className="w-4 h-4 text-[#fca5a5] flex-shrink-0" />
            <div className="text-xs font-sans">
              <span className="text-[#78716c]">Fire: </span>
              <b className="text-[#f5f5f4] font-mono">{elementalDignities.fire}</b>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#0c0a09] border border-[#292524]">
            <Droplet className="w-4 h-4 text-[#93c5fd] flex-shrink-0" />
            <div className="text-xs font-sans">
              <span className="text-[#78716c]">Water: </span>
              <b className="text-[#f5f5f4] font-mono">{elementalDignities.water}</b>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#0c0a09] border border-[#292524]">
            <Wind className="w-4 h-4 text-[#d8b4fe] flex-shrink-0" />
            <div className="text-xs font-sans">
              <span className="text-[#78716c]">Air: </span>
              <b className="text-[#f5f5f4] font-mono">{elementalDignities.air}</b>
            </div>
          </div>
          <div className="flex items-center space-x-2 p-2.5 rounded-lg bg-[#0c0a09] border border-[#292524]">
            <Mountain className="w-4 h-4 text-[#86efac] flex-shrink-0" />
            <div className="text-xs font-sans">
              <span className="text-[#78716c]">Earth: </span>
              <b className="text-[#f5f5f4] font-mono">{elementalDignities.earth}</b>
            </div>
          </div>
        </div>

        <div className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed pt-1">
          <b className="text-[#f5f5f4] font-serif">{elementalDignities.alchemyVerdict[language]}:</b> {elementalDignities.elementalAdvice[language]}
        </div>
      </div>

      {/* Detected Card Synergies */}
      {detectedSynergies.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm font-serif font-bold text-[#f5f5f4] px-1">
            <Zap className="w-4 h-4 text-[#a8a29e]" />
            <span>{UI_TRANSLATIONS.synergyTitle[language]}</span>
          </div>
          {detectedSynergies.map((syn) => (
            <div
              key={syn.id}
              className="craft-card p-5 space-y-1.5"
            >
              <h4 className="text-sm font-serif font-bold text-[#f5f5f4]">
                {syn.title[language]}
              </h4>
              <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
                {syn.description[language]}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* People in Your Orbit — Court Card Archetype Matrix */}
      {courtPersonasInSpread.length > 0 && (
        <div className="craft-card p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between border-b border-[#292524] pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1c1917] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-[#f5f5f4]">
                  {language === 'my' ? 'သင့်ပတ်ဝန်းကျင်ရှိ လူပုဂ္ဂိုလ်များ (Court Card Archetypes)' : language === 'ja' ? 'あなたの軌道上の人物像（コートカード分析）' : 'People in Your Orbit • Court Card Typology'}
                </h3>
                <p className="text-xs text-[#78716c] font-sans">
                  {language === 'my' ? 'အကဲဖြတ်ထားသော ကတ်များမှ တိုက်ရိုက်သက်ရောက်နေသော လူပုဂ္ဂိုလ်ပုံစံများ' : language === 'ja' ? '展開されたカードが示す実生活の重要人物と関係性' : 'Real-world allies, mentors, rivals, or messengers present in your spread'}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
              {courtPersonasInSpread.length} {courtPersonasInSpread.length === 1 ? 'Persona' : 'Personas'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {courtPersonasInSpread.map(({ drawnCard, persona }, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-serif font-bold text-[#f5f5f4] flex items-center space-x-2">
                    <span>✦ {drawnCard.card.name[language]}</span>
                    <span className="text-[10px] text-[#78716c] font-mono">({drawnCard.position.name[language]})</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1917] text-[#a8a29e]">
                    {persona.mbtiResonance}
                  </span>
                </div>
                <div className="text-xs font-serif font-semibold text-[#f5f5f4]">
                  {persona.roleTitle[language]}
                </div>
                <p className="text-xs text-[#a8a29e] font-sans leading-relaxed">
                  {persona.personaArchetype[language]}
                </p>
                <div className="pt-2 border-t border-[#292524] space-y-1 text-xs font-sans">
                  <div><span className="text-[#f5f5f4] font-medium">Guidance: </span><span className="text-[#a8a29e]">{persona.relationshipAdvice[language]}</span></div>
                  <div><span className="text-[#fca5a5] font-medium">Caution: </span><span className="text-[#a8a29e]">{persona.shadowPitfall[language]}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 1. 10-Card Celtic Cross Grand Synthesis Panel */}
      {celticCrossSynthesis && (
        <div className="craft-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#292524] pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1c1917] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {language === 'my' ? '၁၀ ကတ် ဆဲလ်တစ်ကြက်ခြေခတ် မဟာပေါင်းစပ်သုံးသပ်ချက်' : language === 'ja' ? 'ケルト十字 10カード・神聖秘儀総合統合' : '10-Card Celtic Cross Grand Hermeneutic Synthesis'}
              </h3>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
              {celticCrossSynthesis.crossTension.harmonyScore}% Harmony
            </span>
          </div>

          {/* Central Axis & Cross Tension */}
          <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-2">
            <div className="text-xs font-mono text-[#a8a29e] uppercase tracking-wider">
              ✦ {celticCrossSynthesis.crossTension.title[language]}
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {celticCrossSynthesis.crossTension.analysis[language]}
            </p>
          </div>

          {/* Grid: Spiritual Vertical Axis & Temporal Stream */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-2">
              <div className="text-xs font-mono text-[#f5f5f4] uppercase tracking-wider">
                Spiritual Axis (Root ↔ Crown)
              </div>
              <div className="text-xs text-[#a8a29e] font-sans space-y-1">
                <div><b>Root:</b> {celticCrossSynthesis.spiritualAxis.rootFoundation[language]}</div>
                <div><b>Crown:</b> {celticCrossSynthesis.spiritualAxis.crownAspiration[language]}</div>
                <div className="text-[11px] text-[#78716c] italic pt-1">{celticCrossSynthesis.spiritualAxis.axisAlignment[language]}</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-2">
              <div className="text-xs font-mono text-[#f5f5f4] uppercase tracking-wider">
                Temporal Stream (Karma ↔ Manifestation)
              </div>
              <div className="text-xs text-[#a8a29e] font-sans space-y-1">
                <div><b>Past:</b> {celticCrossSynthesis.temporalStream.karmicPast[language]}</div>
                <div><b>Present:</b> {celticCrossSynthesis.temporalStream.presentDynamic[language]}</div>
                <div><b>Future:</b> {celticCrossSynthesis.temporalStream.approachingWave[language]}</div>
              </div>
            </div>
          </div>

          {/* Staff of Destiny 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
              <span className="text-[#f5f5f4] font-medium">Internal Stance:</span>
              <p className="text-[#a8a29e]">{celticCrossSynthesis.staffOfDestiny.querentStance[language]}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
              <span className="text-[#f5f5f4] font-medium">External Mirror:</span>
              <p className="text-[#a8a29e]">{celticCrossSynthesis.staffOfDestiny.environmentalMirror[language]}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
              <span className="text-[#f5f5f4] font-medium">Hopes & Shadow Fears:</span>
              <p className="text-[#a8a29e]">{celticCrossSynthesis.staffOfDestiny.hopesAndFearsPolarity[language]}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
              <span className="text-[#86efac] font-medium">Ultimate Culmination:</span>
              <p className="text-[#a8a29e]">{celticCrossSynthesis.staffOfDestiny.finalManifestation[language]}</p>
            </div>
          </div>

          {/* Waite Grand Verdict */}
          <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] text-center space-y-1.5">
            <div className="text-[10px] font-mono text-[#a8a29e] uppercase tracking-widest">
              • A.E. Waite Oracular Synthesis •
            </div>
            <p className="text-xs sm:text-sm font-sans italic text-[#f5f5f4] leading-relaxed">
              "{celticCrossSynthesis.destinyVerdict[language]}"
            </p>
          </div>
        </div>
      )}

      {/* 2. 7-Chakra Ascending Kundalini Matrix Panel */}
      {chakraSynthesis && (
        <div className="craft-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#292524] pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1c1917] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                  {language === 'my' ? 'စွမ်းအင်စက်ဝန်း ၇ ခု ကုစားဆန်းစစ်မှု (7-Chakra Alignment)' : language === 'ja' ? '7チャクラ・クンダリーニ完全診断マトリックス' : '7-Chakra Ascending Kundalini Alignment Matrix'}
                </h3>
                <p className="text-xs text-[#78716c] font-sans">
                  {chakraSynthesis.overallAlignment[language]}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
              {chakraSynthesis.vitalityScore}% Kundalini Vitality
            </span>
          </div>

          {/* Chakra Centers Vertical Stack */}
          <div className="space-y-2.5">
            {chakraSynthesis.chakraCenters.map((ch) => (
              <div
                key={ch.chakraId}
                className="p-3.5 rounded-xl bg-[#0c0a09] border border-[#292524] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#78716c] transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: ch.color }}
                  />
                  <div>
                    <div className="text-xs font-serif font-bold text-[#f5f5f4] flex items-center space-x-1.5">
                      <span>{ch.name[language]}</span>
                      <span className="text-[10px] font-mono text-[#78716c]">({ch.sanskritName} • {ch.element})</span>
                    </div>
                    <p className="text-xs text-[#a8a29e] font-sans pt-0.5">{ch.insight[language]}</p>
                    <p className="text-[11px] text-[#78716c] font-sans italic pt-0.5">{ch.healingPrescription[language]}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-[#292524] bg-[#141210] text-[#a8a29e]">
                    {ch.status}
                  </span>
                  <div className="w-8 h-12 rounded bg-[#0c0a09] border border-[#292524] overflow-hidden flex items-center justify-center">
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

          <div className="p-3.5 rounded-xl bg-[#0c0a09] border border-[#292524] text-xs text-[#a8a29e] font-sans leading-relaxed text-center">
            {chakraSynthesis.kundaliniGuidance[language]}
          </div>
        </div>
      )}

      {/* 3. Two Paths Decision Fork Synthesis Panel */}
      {decisionForkSynthesis && (
        <div className="craft-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#292524] pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1c1917] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
                <GitFork className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                  {language === 'my' ? 'လမ်းနှစ်ခွ ရွေးချယ်မှု နှိုင်းယှဉ်ချက် (Decision Fork)' : language === 'ja' ? '運命の分岐点・二者択一 比較マトリックス' : 'Two Paths Decision Fork Oracular Comparison'}
                </h3>
                <p className="text-xs text-[#78716c] font-sans">
                  {decisionForkSynthesis.baseCrossroads[language]}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
              {decisionForkSynthesis.recommendedPath}
            </span>
          </div>

          {/* Side by side comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Path A */}
            <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-2.5">
              <div className="flex items-center justify-between border-b border-[#292524] pb-2">
                <span className="text-sm font-serif font-bold text-[#f5f5f4]">
                  {decisionForkSynthesis.pathA.title[language]}
                </span>
                <span className="text-xs font-mono text-[#a8a29e] bg-[#1c1917] px-2 py-0.5 rounded border border-[#292524]">
                  {decisionForkSynthesis.pathA.viabilityScore}% Viable
                </span>
              </div>
              <div className="space-y-1 text-xs font-sans text-[#a8a29e]">
                <div><b>Trajectory:</b> {decisionForkSynthesis.pathA.trajectory[language]}</div>
                <div><b>Outcome:</b> {decisionForkSynthesis.pathA.outcome[language]}</div>
                <div className="text-[#86efac]">{decisionForkSynthesis.pathA.advantages[language]}</div>
                <div className="text-[#fca5a5]">{decisionForkSynthesis.pathA.hiddenRisks[language]}</div>
              </div>
            </div>

            {/* Path B */}
            <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-2.5">
              <div className="flex items-center justify-between border-b border-[#292524] pb-2">
                <span className="text-sm font-serif font-bold text-[#f5f5f4]">
                  {decisionForkSynthesis.pathB.title[language]}
                </span>
                <span className="text-xs font-mono text-[#a8a29e] bg-[#1c1917] px-2 py-0.5 rounded border border-[#292524]">
                  {decisionForkSynthesis.pathB.viabilityScore}% Viable
                </span>
              </div>
              <div className="space-y-1 text-xs font-sans text-[#a8a29e]">
                <div><b>Trajectory:</b> {decisionForkSynthesis.pathB.trajectory[language]}</div>
                <div><b>Outcome:</b> {decisionForkSynthesis.pathB.outcome[language]}</div>
                <div className="text-[#86efac]">{decisionForkSynthesis.pathB.advantages[language]}</div>
                <div className="text-[#fca5a5]">{decisionForkSynthesis.pathB.hiddenRisks[language]}</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0c0a09] border border-[#292524] text-xs sm:text-sm text-[#f5f5f4] font-sans italic text-center leading-relaxed">
            "{decisionForkSynthesis.oracularVerdict[language]}"
          </div>
        </div>
      )}

      {/* 4. Relationship Mirror Matrix Panel */}
      {relationshipMirrorSynthesis && (
        <div className="craft-card p-6 sm:p-8 space-y-5">
          <div className="flex items-center justify-between border-b border-[#292524] pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1c1917] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {language === 'my' ? 'သံယောဇဉ် အချစ်ရေး နှလုံးသား ပေါင်းကူးသုံးသပ်ချက်' : language === 'ja' ? 'リレーションシップ・魂の鏡像分析' : 'Interpersonal Relationship Mirror & Soul Synthesis'}
              </h3>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
              {relationshipMirrorSynthesis.harmonicResonanceScore}% Harmonic Resonance
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
              <span className="text-[#f5f5f4] font-medium">Querent Energy:</span>
              <p className="text-[#a8a29e]">{relationshipMirrorSynthesis.querentArchetype[language]}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
              <span className="text-[#f5f5f4] font-medium">Counterpart Energy:</span>
              <p className="text-[#a8a29e]">{relationshipMirrorSynthesis.partnerArchetype[language]}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
              <span className="text-[#f5f5f4] font-medium">Central Nexus:</span>
              <p className="text-[#a8a29e]">{relationshipMirrorSynthesis.nexusBond[language]}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
              <span className="text-[#fca5a5] font-medium">Growth Friction:</span>
              <p className="text-[#a8a29e]">{relationshipMirrorSynthesis.coreFriction[language]}</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0c0a09] border border-[#292524] space-y-1 text-xs font-sans">
            <span className="text-[#86efac] font-medium">The Forward Bridge:</span>
            <p className="text-[#a8a29e]">{relationshipMirrorSynthesis.forwardBridge[language]}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0c0a09] border border-[#292524] text-xs sm:text-sm text-[#f5f5f4] font-sans italic text-center leading-relaxed">
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
              className="craft-card p-5 sm:p-6 space-y-3 animate-in fade-in slide-in-from-bottom-2 cursor-pointer hover:border-[#78716c] transition-all"
              onClick={() => {
                audioService.playCardHover();
                setInspectedCard(dc);
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base sm:text-lg font-serif text-[#f5f5f4] font-bold">
                      {posName} — {dc.card.name[language]}
                      {dc.isReversed && (
                        <span className="text-[#fca5a5] italic text-xs ml-2 font-sans font-normal">
                          {UI_TRANSLATIONS.reversedTag[language]}
                        </span>
                      )}
                    </h3>

                    {/* Natal Resonance Badge if matched */}
                    {natalResonance && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
                        {natalResonance.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-[10px] uppercase tracking-wider text-[#78716c] font-mono">
                    {dc.card.arcana === 'major'
                      ? 'Major Arcana'
                      : `Minor Arcana · ${dc.card.suit === 'cups' ? 'Cups (Water)' : dc.card.suit === 'pentacles' ? 'Pentacles (Earth)' : dc.card.suit === 'swords' ? 'Swords (Air)' : 'Wands (Fire)'}`}
                  </div>
                </div>

                <div className="w-12 h-18 rounded-lg overflow-hidden border border-[#292524] flex-shrink-0 bg-[#0c0a09]">
                  <img
                    src={`/cards/${dc.card.file}`}
                    alt={dc.card.name[language]}
                    style={{ transform: dc.isReversed ? 'rotate(180deg)' : 'none' }}
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
                {dc.isReversed ? dc.card.reversedMeaning[language] : dc.card.uprightMeaning[language]}
              </p>

              {/* Natal Reason if resonant */}
              {natalResonance && (
                <div className="p-2.5 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs font-sans text-[#a8a29e] leading-relaxed">
                  <span className="font-bold text-[#f5f5f4]">✦ Natal Affinity Note: </span>
                  {natalResonance.reason}
                </div>
              )}

              <div className="pt-2 border-t border-[#292524] text-xs font-sans text-[#78716c] leading-relaxed">
                <b className="text-[#f5f5f4]">{UI_TRANSLATIONS.inThisPosition[language]} ({posName}):</b> {posContext}
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Analysis Sections */}
      <div className="space-y-3.5 pt-2">
        
        {/* Mind */}
        {activeAnalysis.mind && (
          <div className="craft-card p-5 space-y-2">
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-[#a8a29e]" />
              <h3 className="text-sm font-serif text-[#f5f5f4] font-bold">
                {UI_TRANSLATIONS.sectionTitles.mind[language]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {activeAnalysis.mind}
            </p>
          </div>
        )}

        {/* Problems */}
        {activeAnalysis.problems && (
          <div className="craft-card p-5 space-y-2">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[#a8a29e]" />
              <h3 className="text-sm font-serif text-[#f5f5f4] font-bold">
                {UI_TRANSLATIONS.sectionTitles.problems[language]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {activeAnalysis.problems}
            </p>
          </div>
        )}

        {/* Hidden Forces */}
        {activeAnalysis.forces && (
          <div className="craft-card p-5 space-y-2">
            <div className="flex items-center space-x-2">
              <Moon className="w-4 h-4 text-[#a8a29e]" />
              <h3 className="text-sm font-serif text-[#f5f5f4] font-bold">
                {UI_TRANSLATIONS.sectionTitles.forces[language]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {activeAnalysis.forces}
            </p>
          </div>
        )}

        {/* Advice */}
        {activeAnalysis.advice && (
          <div className="craft-card p-5 space-y-2">
            <div className="flex items-center space-x-2">
              <Flame className="w-4 h-4 text-[#a8a29e]" />
              <h3 className="text-sm font-serif text-[#f5f5f4] font-bold">
                {UI_TRANSLATIONS.sectionTitles.advice[language]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {activeAnalysis.advice}
            </p>
          </div>
        )}

        {/* Outlook */}
        {activeAnalysis.outlook && (
          <div className="craft-card p-5 space-y-2">
            <div className="flex items-center space-x-2">
              <Sun className="w-4 h-4 text-[#a8a29e]" />
              <h3 className="text-sm font-serif text-[#f5f5f4] font-bold">
                {UI_TRANSLATIONS.sectionTitles.outlook[language]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {activeAnalysis.outlook}
            </p>
          </div>
        )}

        {/* Timeline */}
        {activeAnalysis.timeline && (
          <div className="craft-card p-5 space-y-2">
            <div className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#a8a29e]" />
              <h3 className="text-sm font-serif text-[#f5f5f4] font-bold">
                {UI_TRANSLATIONS.sectionTitles.timeline[language]}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {activeAnalysis.timeline}
            </p>
          </div>
        )}

        {/* Archetype */}
        {activeAnalysis.archetype && (
          <div className="craft-card p-5 space-y-2">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-[#a8a29e]" />
              <h3 className="text-sm font-serif text-[#f5f5f4] font-bold">
                {UI_TRANSLATIONS.sectionTitles.archetype[language]}
              </h3>
            </div>
            <div className="text-sm font-serif font-bold text-[#f5f5f4]">
              {activeAnalysis.archetype.name}
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {activeAnalysis.archetype.description}
            </p>
            {activeAnalysis.archetype.shadow && (
              <p className="text-xs text-[#fca5a5] italic font-sans pt-1 border-t border-[#292524]">
                {activeAnalysis.archetype.shadow}
              </p>
            )}
          </div>
        )}

        {/* The Quintessence Master Root Card (Primary & Shadow) */}
        <div className="craft-card p-6 sm:p-7 space-y-4">
          <div className="flex items-center justify-between border-b border-[#292524] pb-2.5">
            <div className="flex items-center space-x-2 text-sm sm:text-base font-serif font-bold text-[#f5f5f4]">
              <Crown className="w-4 h-4 text-[#a8a29e]" />
              <span>{UI_TRANSLATIONS.quintessenceTitle[language]}</span>
            </div>
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#1c1917] border border-[#292524] text-[#a8a29e]">
              Arcanum {extendedQuintessence.number}
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-sm sm:text-base font-serif font-bold text-[#f5f5f4] flex items-center space-x-1.5">
              <span>✦ {extendedQuintessence.cardName[language]}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans leading-relaxed">
              {extendedQuintessence.lesson[language]}
            </p>
          </div>

          {/* Shadow Quintessence Complement */}
          <div className="p-3.5 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1">
            <div className="text-xs font-serif font-bold text-[#f5f5f4] flex items-center justify-between">
              <span>Shadow Quintessence: {extendedQuintessence.shadowCardName[language]}</span>
              <span className="text-[10px] font-mono text-[#78716c]">Arcanum {extendedQuintessence.shadowNumber}</span>
            </div>
            <p className="text-xs text-[#a8a29e] font-sans italic leading-relaxed">
              {extendedQuintessence.shadowLesson[language]}
            </p>
          </div>
        </div>

        {/* Manifestation Affirmation & Micro-Ritual Prescription */}
        <div className="craft-card p-6 sm:p-7 space-y-4">
          <div className="flex items-center space-x-2 text-sm sm:text-base font-serif font-bold text-[#f5f5f4]">
            <Sparkles className="w-4 h-4 text-[#a8a29e]" />
            <span>{UI_TRANSLATIONS.ritualTitle[language]}</span>
          </div>

          {/* Manifestation Decree */}
          <div className="p-4 rounded-xl bg-[#0c0a09] border border-[#292524] text-center space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716c]">
              • Sacred Manifestation Decree •
            </div>
            <p className="text-sm sm:text-base font-sans italic text-[#f5f5f4] leading-relaxed">
              "{ritualPrescription.affirmation[language]}"
            </p>
          </div>

          {/* Micro-Rituals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1 flex flex-col justify-between">
              <span className="text-[#f5f5f4] font-medium flex items-center space-x-1.5">
                <Flame className="w-3.5 h-3.5 text-[#fca5a5]" />
                <span>Candle & Color:</span>
              </span>
              <span className="text-[#a8a29e]">{ritualPrescription.candleColor[language]}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1 flex flex-col justify-between">
              <span className="text-[#f5f5f4] font-medium flex items-center space-x-1.5">
                <Gem className="w-3.5 h-3.5 text-[#93c5fd]" />
                <span>Sacred Crystal:</span>
              </span>
              <span className="text-[#a8a29e]">{ritualPrescription.crystal[language]}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1 flex flex-col justify-between">
              <span className="text-[#f5f5f4] font-medium flex items-center space-x-1.5">
                <Sprout className="w-3.5 h-3.5 text-[#d8b4fe]" />
                <span>Sacred Herbs/Scent:</span>
              </span>
              <span className="text-[#a8a29e]">{ritualPrescription.sacredHerb[language]}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0c0a09] border border-[#292524] space-y-1 flex flex-col justify-between">
              <span className="text-[#f5f5f4] font-medium flex items-center space-x-1.5">
                <Wind className="w-3.5 h-3.5 text-[#86efac]" />
                <span>Breath Meditation:</span>
              </span>
              <span className="text-[#a8a29e]">{ritualPrescription.breathRitual[language]}</span>
            </div>
          </div>
        </div>

        {/* Master Summary Panel */}
        <div className="summary craft-card p-6 sm:p-8 bg-[#0c0a09] text-center space-y-3">
          <div className="text-[#a8a29e] text-xs font-mono uppercase tracking-widest">
            • {UI_TRANSLATIONS.sectionTitles.summary[language]} •
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#f5f5f4] font-sans italic leading-relaxed">
            {activeAnalysis.summary}
          </p>
        </div>

      </div>

      {/* Journal Reflection Box & Actions */}
      <div className="craft-card p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-[#a8a29e]">
            {UI_TRANSLATIONS.reflectionsTitle[language]}
          </span>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-lg border transition-all ${
              isFavorite ? 'bg-[#f5f5f4] text-[#0c0a09] border-[#f5f5f4]' : 'text-[#78716c] border-[#292524] hover:text-[#f5f5f4] hover:bg-[#1c1917]'
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
          className="w-full p-3.5 rounded-lg bg-[#0c0a09] border border-[#292524] text-xs sm:text-sm text-[#f5f5f4] placeholder-[#78716c] font-sans resize-none focus:outline-none focus:border-[#78716c]"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <button
            onClick={handleSave}
            className={`h-9 px-4 rounded-lg text-xs font-sans uppercase tracking-wider flex items-center space-x-2 transition-all ${
              saved
                ? 'bg-[#292524] text-[#f5f5f4]'
                : 'btn-primary'
            }`}
          >
            {saved ? <Check className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            <span>{saved ? UI_TRANSLATIONS.savedToJournalBtn[language] : UI_TRANSLATIONS.saveToJournalBtn[language]}</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {onOpenSynergy && (
              <button
                onClick={() => {
                  audioService.playCardFlip();
                  onOpenSynergy(drawnCards.map(dc => dc.card));
                }}
                className="h-9 px-3.5 rounded-lg btn-secondary text-xs font-sans flex items-center space-x-1.5"
                title="Evaluate Synergy Studio"
              >
                <Zap className="w-3.5 h-3.5 text-[#fde047]" />
                <span>Synergy Studio</span>
              </button>
            )}

            <button
              onClick={handleExportPng}
              disabled={isExportingPng}
              className="h-9 px-3.5 rounded-lg btn-secondary text-xs font-sans flex items-center space-x-1.5 disabled:opacity-50"
            >
              {isExportingPng ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              <span>{isExportingPng ? 'Rendering...' : 'PNG Graphic'}</span>
            </button>

            <button
              onClick={handleCopy}
              className="h-9 px-3.5 rounded-lg btn-secondary text-xs font-sans flex items-center space-x-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#86efac]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? UI_TRANSLATIONS.copiedBtn[language] : UI_TRANSLATIONS.copyBtn[language]}</span>
            </button>

            <button
              onClick={onOpenScrollModal}
              className="h-9 px-3.5 rounded-lg btn-secondary text-xs font-sans flex items-center space-x-1.5"
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
          className="btn-primary h-11 px-7 rounded-lg font-sans text-xs tracking-wider uppercase flex items-center space-x-2.5 mx-auto"
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
