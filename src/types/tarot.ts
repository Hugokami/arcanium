export type Language = 'en' | 'my' | 'ja';

export type ArcanaType = 'major' | 'minor';
export type SuitType = 'cups' | 'pentacles' | 'swords' | 'wands' | 'none';
export type ElementType = 'Fire' | 'Water' | 'Air' | 'Earth' | 'Spirit';

export interface LocalizedText {
  en: string;
  my: string;
  ja: string;
}

export interface LocalizedStringArray {
  en: string[];
  my: string[];
  ja: string[];
}

export interface TarotCard {
  id: string;
  file: string; // e.g. "00-TheFool.png"
  name: LocalizedText;
  number: number;
  romanNumeral?: string;
  arcana: ArcanaType;
  suit: SuitType;
  element: ElementType;
  astrology: LocalizedText;
  uprightKeywords: LocalizedStringArray;
  reversedKeywords: LocalizedStringArray;
  uprightMeaning: LocalizedText;
  reversedMeaning: LocalizedText;
  loveMeaning: {
    upright: LocalizedText;
    reversed: LocalizedText;
  };
  careerMeaning: {
    upright: LocalizedText;
    reversed: LocalizedText;
  };
  spiritualMeaning: {
    upright: LocalizedText;
    reversed: LocalizedText;
  };
  advice: LocalizedText;
  shadowWarning: LocalizedText;
  yesNo: LocalizedText;
  symbolism: LocalizedStringArray;
  hebrewLetter?: LocalizedText;
  kabbalahTreeOfLife?: LocalizedText;
  goldenDawnTitle?: LocalizedText;
  decanateAstrology?: LocalizedText;
  waiteOriginalKey?: LocalizedText;
  chakraResonance?: LocalizedText;
  timingSeason?: LocalizedText;
  traditionalOmens?: LocalizedText;
}

export interface CelticCrossSynthesis {
  crossTension: {
    title: LocalizedText;
    analysis: LocalizedText;
    harmonyScore: number;
  };
  spiritualAxis: {
    rootFoundation: LocalizedText;
    crownAspiration: LocalizedText;
    axisAlignment: LocalizedText;
  };
  temporalStream: {
    karmicPast: LocalizedText;
    presentDynamic: LocalizedText;
    approachingWave: LocalizedText;
  };
  staffOfDestiny: {
    querentStance: LocalizedText;
    environmentalMirror: LocalizedText;
    hopesAndFearsPolarity: LocalizedText;
    finalManifestation: LocalizedText;
  };
  destinyVerdict: LocalizedText;
}

export interface ChakraCenterAnalysis {
  chakraId: string;
  name: LocalizedText;
  sanskritName: string;
  element: string;
  color: string;
  card: TarotCard;
  isReversed: boolean;
  status: 'open' | 'balanced' | 'blocked' | 'overactive';
  insight: LocalizedText;
  healingPrescription: LocalizedText;
}

export interface ChakraAlignmentSynthesis {
  vitalityScore: number; // 0 - 100
  overallAlignment: LocalizedText;
  blockedChakrasCount: number;
  dominantCenter: LocalizedText;
  chakraCenters: ChakraCenterAnalysis[];
  kundaliniGuidance: LocalizedText;
}

export interface DecisionForkSynthesis {
  baseCrossroads: LocalizedText;
  pathA: {
    title: LocalizedText;
    trajectory: LocalizedText;
    outcome: LocalizedText;
    viabilityScore: number;
    advantages: LocalizedText;
    hiddenRisks: LocalizedText;
  };
  pathB: {
    title: LocalizedText;
    trajectory: LocalizedText;
    outcome: LocalizedText;
    viabilityScore: number;
    advantages: LocalizedText;
    hiddenRisks: LocalizedText;
  };
  oracularVerdict: LocalizedText;
  recommendedPath: 'Path A' | 'Path B' | 'Synthesized Middle Way';
}

export interface RelationshipMirrorSynthesis {
  querentArchetype: LocalizedText;
  partnerArchetype: LocalizedText;
  nexusBond: LocalizedText;
  coreFriction: LocalizedText;
  forwardBridge: LocalizedText;
  harmonicResonanceScore: number;
  relationalAlchemyCounsel: LocalizedText;
}

export interface ExtendedQuintessenceResult {
  number: number;
  cardId: string;
  cardName: LocalizedText;
  lesson: LocalizedText;
  shadowNumber: number;
  shadowCardId: string;
  shadowCardName: LocalizedText;
  shadowLesson: LocalizedText;
}

export interface SpreadPosition {
  id: number;
  name: LocalizedText;
  description: LocalizedText;
}

export interface SpreadDefinition {
  id: string;
  name: LocalizedText;
  subtitle: LocalizedText;
  cardCount: number;
  description: LocalizedText;
  positions: SpreadPosition[];
}

export interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  position: SpreadPosition;
  revealed: boolean;
}

export interface TopicOption {
  id: string;
  icon: string;
  title: LocalizedText;
  description?: LocalizedText;
  defaultQuestion: LocalizedText;
  suggestedSpread: string;
}

export interface DeepAnalysisResult {
  mind: string;
  problems: string;
  forces: string;
  advice: string;
  outlook: string;
  timeline: string;
  archetype: {
    name: string;
    description: string;
    shadow: string;
  };
  summary: string;
}

export interface ReadingResultData {
  id: string;
  timestamp: number;
  topic: string;
  question: string;
  spread: SpreadDefinition;
  drawnCards: DrawnCard[];
  language: Language;
  analysis: DeepAnalysisResult;
  userNotes?: string;
  favorite?: boolean;
  partnerProfile?: import('./userProfile').UserProfile | null;
}

export interface JournalEntry extends ReadingResultData {}
