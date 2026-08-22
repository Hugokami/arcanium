import { LocalizedText, TarotCard } from '../types/tarot';
import { TAROT_DECK } from '../data/tarotDeck';

export interface DailyPulseEntry {
  dateString: string; // YYYY-MM-DD
  cardId: string;
  isReversed: boolean;
  morningDecree: LocalizedText;
  eveningReflection?: string;
  streakCount: number;
}

const STORAGE_KEY = 'arcanium_daily_pulse';
const STREAK_KEY = 'arcanium_daily_streak';

export class DailyPulseService {
  /**
   * Deterministic Card of the Day generator based on date string and optional seed
   */
  public static getTodayCard(date = new Date()): { card: TarotCard; isReversed: boolean } {
    const dateStr = date.toISOString().split('T')[0];
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    const absHash = Math.abs(hash);
    const cardIndex = absHash % TAROT_DECK.length;
    const isReversed = (absHash % 7) === 0;

    return {
      card: TAROT_DECK[cardIndex],
      isReversed
    };
  }

  public static getMorningDecree(card: TarotCard, isReversed: boolean): LocalizedText {
    const kw = isReversed ? card.reversedKeywords.en[0] : card.uprightKeywords.en[0];
    const kwMy = isReversed ? card.reversedKeywords.my[0] : card.uprightKeywords.my[0];
    const kwJa = isReversed ? card.reversedKeywords.ja[0] : card.uprightKeywords.ja[0];

    return {
      en: `Today, I align my spirit with the divine frequency of ${card.name.en}. I embody ${kw} and walk with unwavering clarity and sovereign grace.`,
      my: `ယနေ့တွင် ကျွန်ုပ်၏ စိတ်ဝိညာဉ်ကို ${card.name.my} ၏ မြင့်မြတ်သော စွမ်းအင်နှင့် ချိတ်ဆက်ပါသည်။ "${kwMy}" အသိတရားဖြင့် အရာရာကို အောင်မြင်စွာ ရင်ဆိုင်ပါမည်။`,
      ja: `本日、私は【${card.name.ja}】の神聖なる波動と同調します。「${kwJa}」の美徳を体現し、揺るぎなき明晰さと気品をもって歩みます。`
    };
  }

  public static getStreak(): number {
    try {
      const saved = localStorage.getItem(STREAK_KEY);
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  }

  public static saveDailyEntry(entry: DailyPulseEntry): void {
    try {
      const historyStr = localStorage.getItem(STORAGE_KEY);
      const history: DailyPulseEntry[] = historyStr ? JSON.parse(historyStr) : [];
      const filtered = history.filter(h => h.dateString !== entry.dateString);
      filtered.unshift(entry);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered.slice(0, 30)));
      localStorage.setItem(STREAK_KEY, String(entry.streakCount));
    } catch {
      // ignore
    }
  }

  public static getTodayEntry(): DailyPulseEntry | null {
    try {
      const todayStr = new Date().toISOString().split('T')[0];
      const historyStr = localStorage.getItem(STORAGE_KEY);
      if (!historyStr) return null;
      const history: DailyPulseEntry[] = JSON.parse(historyStr);
      return history.find(h => h.dateString === todayStr) || null;
    } catch {
      return null;
    }
  }
}
