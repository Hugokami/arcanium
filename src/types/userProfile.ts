import { Language, LocalizedText } from './tarot';

export type ZodiacSignId =
  | 'aries'
  | 'taurus'
  | 'gemini'
  | 'cancer'
  | 'leo'
  | 'virgo'
  | 'libra'
  | 'scorpio'
  | 'sagittarius'
  | 'capricorn'
  | 'aquarius'
  | 'pisces';

export interface ZodiacSignInfo {
  id: ZodiacSignId;
  name: LocalizedText;
  symbol: string;
  dates: string;
  element: 'Fire' | 'Water' | 'Air' | 'Earth';
  modality: 'Cardinal' | 'Fixed' | 'Mutable';
  rulingPlanet: LocalizedText;
  tarotCardId: string; // e.g. 'emperor'
  tarotCardName: LocalizedText;
  traits: LocalizedText;
}

export interface UserProfile {
  name: string;
  birthdate: string; // YYYY-MM-DD
  zodiacSign?: ZodiacSignInfo;
  lifePathNumber?: number;
  birthTarotCardId?: string;
  birthTarotCardName?: LocalizedText;
  spiritualFocus?: string;
  createdAt: number;
}

export interface ElementalDignitySummary {
  fire: number;
  water: number;
  air: number;
  earth: number;
  dominantElement: 'Fire' | 'Water' | 'Air' | 'Earth' | 'Balanced';
  harmonyScore: number; // 0 - 100
  alchemyVerdict: LocalizedText;
  elementalAdvice: LocalizedText;
}

export interface CardSynergyPair {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  cardAId: string;
  cardBId: string;
  potency: 'high' | 'profound' | 'warning';
}

export interface QuintessenceResult {
  number: number;
  cardId: string;
  cardName: LocalizedText;
  lesson: LocalizedText;
}

export interface PolarityGaugeResult {
  score: number; // 0 to 100
  verdict: LocalizedText;
  explanation: LocalizedText;
  uprightRatio: number;
  majorCount: number;
}

export interface AstrologicalSynastrySummary {
  userZodiac: ZodiacSignInfo;
  partnerZodiac: ZodiacSignInfo;
  userElement: 'Fire' | 'Water' | 'Air' | 'Earth';
  partnerElement: 'Fire' | 'Water' | 'Air' | 'Earth';
  elementalChemistry: LocalizedText;
  compatibilityScore: number; // 0 to 100
  dynamicVerdict: LocalizedText;
  synastryAdvice: LocalizedText;
  compositeLifePathNumber: number;
  compositeSoulCardName: LocalizedText;
}
