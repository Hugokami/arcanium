import { UserProfile, ZodiacSignId, ZodiacSignInfo } from '../types/userProfile';
import { TarotCard, Language } from '../types/tarot';

export const ZODIAC_SIGNS: Record<ZodiacSignId, ZodiacSignInfo> = {
  aries: {
    id: 'aries',
    name: { en: 'Aries', my: 'မိဿရာသီ (Aries)', ja: '牡羊座（おひつじ座）' },
    symbol: '♈',
    dates: 'Mar 21 – Apr 19',
    element: 'Fire',
    modality: 'Cardinal',
    rulingPlanet: { en: 'Mars', my: 'အင်္ဂါဂြိုဟ် (Mars)', ja: '火星' },
    tarotCardId: 'emperor',
    tarotCardName: { en: 'IV The Emperor', my: 'IV ဧကရာဇ်မင်း (The Emperor)', ja: 'IV 皇帝' },
    traits: {
      en: 'Pioneering, courageous, assertive, and natural-born leader.',
      my: 'ရဲရင့်ပြတ်သားပြီး ရှေ့ဆောင်လမ်းပြတတ်သော ခေါင်းဆောင်စရိုက်ရှိသည်။',
      ja: '先駆的、勇敢、決断力に富む生まれながらのリーダー。'
    }
  },
  taurus: {
    id: 'taurus',
    name: { en: 'Taurus', my: 'ပြိဿရာသီ (Taurus)', ja: '牡牛座（おうし座）' },
    symbol: '♉',
    dates: 'Apr 20 – May 20',
    element: 'Earth',
    modality: 'Fixed',
    rulingPlanet: { en: 'Venus', my: 'သောကြာဂြိုဟ် (Venus)', ja: '金星' },
    tarotCardId: 'hierophant',
    tarotCardName: { en: 'V The Hierophant', my: 'V ဆရာတော် (The Hierophant)', ja: 'V 教皇' },
    traits: {
      en: 'Grounded, patient, loyal, and appreciative of beauty & stability.',
      my: 'စိတ်ရှည်တည်ကြည်ပြီး သစ္စာရှိကာ ရုပ်ဝတ္ထုနှင့် အလှတရားကို တန်ဖိုးထားသည်။',
      ja: '着実、忍耐強い、誠実、美と安定を愛する心。'
    }
  },
  gemini: {
    id: 'gemini',
    name: { en: 'Gemini', my: 'မေထုန်ရာသီ (Gemini)', ja: '双子座（ふたご座）' },
    symbol: '♊',
    dates: 'May 21 – Jun 20',
    element: 'Air',
    modality: 'Mutable',
    rulingPlanet: { en: 'Mercury', my: 'ဗုဒ္ဓဟူးဂြိုဟ် (Mercury)', ja: '水星' },
    tarotCardId: 'lovers',
    tarotCardName: { en: 'VI The Lovers', my: 'VI ချစ်သူစုံတွဲ (The Lovers)', ja: 'VI 恋人たち' },
    traits: {
      en: 'Curious, versatile, intellectually agile, and a master communicator.',
      my: 'ဉာဏ်ရည်ထက်မြက်ပြီး စူးစမ်းလိုစိတ်ရှိကာ ဆက်သွယ်ပြောဆိုမှု ကောင်းမွန်သည်။',
      ja: '好奇心旺盛、多才、知性的、対話の達人。'
    }
  },
  cancer: {
    id: 'cancer',
    name: { en: 'Cancer', my: 'ကရကဋ်ရာသီ (Cancer)', ja: '蟹座（かに座）' },
    symbol: '♋',
    dates: 'Jun 21 – Jul 22',
    element: 'Water',
    modality: 'Cardinal',
    rulingPlanet: { en: 'Moon', my: 'လမင်း (The Moon)', ja: '月' },
    tarotCardId: 'chariot',
    tarotCardName: { en: 'VII The Chariot', my: 'VII စစ်ရထား (The Chariot)', ja: 'VII 戦車' },
    traits: {
      en: 'Intuitive, deeply protective, empathetic, and emotionally driven.',
      my: 'အတွင်းစိတ်အာရုံခံစားမှု နက်ရှိုင်းပြီး ချစ်ရသူများအား စောင့်ရှောက်ကာကွယ်တတ်သည်။',
      ja: '直感的、保護愛が強い、深い共感力、感情の守護者。'
    }
  },
  leo: {
    id: 'leo',
    name: { en: 'Leo', my: 'သိဟ်ရာသီ (Leo)', ja: '獅子座（しし座）' },
    symbol: '♌',
    dates: 'Jul 23 – Aug 22',
    element: 'Fire',
    modality: 'Fixed',
    rulingPlanet: { en: 'Sun', my: 'နေမင်း (The Sun)', ja: '太陽' },
    tarotCardId: 'strength',
    tarotCardName: { en: 'VIII Strength', my: 'VIII အတွင်းခွန်အား (Strength)', ja: 'VIII 力' },
    traits: {
      en: 'Radiant, noble-hearted, passionate, generous, and charismatic.',
      my: 'မြင့်မြတ်သော စိတ်ထားရှိပြီး စိတ်အားထက်သန်ကာ ဆွဲဆောင်မှုအပြည့်ရှိသည်။',
      ja: '輝かしい、高潔、情熱的、寛大、カリスマ性に富む。'
    }
  },
  virgo: {
    id: 'virgo',
    name: { en: 'Virgo', my: 'ကန်ရာသီ (Virgo)', ja: '乙女座（おとめ座）' },
    symbol: '♍',
    dates: 'Aug 23 – Sep 22',
    element: 'Earth',
    modality: 'Mutable',
    rulingPlanet: { en: 'Mercury', my: 'ဗုဒ္ဓဟူးဂြိုဟ် (Mercury)', ja: '水星' },
    tarotCardId: 'hermit',
    tarotCardName: { en: 'IX The Hermit', my: 'IX ရသေ့သူတော်စင် (The Hermit)', ja: 'IX 隠者' },
    traits: {
      en: 'Discerning, analytical, dedicated to service, and seeker of truth.',
      my: 'စိစစ်သုံးသပ်မှု အလွန်ကောင်းပြီး အမှန်တရားနှင့် တိကျသေချာမှုကို အလေးထားသည်။',
      ja: '明晰、分析的、真理の探求者、繊細な奉仕の心。'
    }
  },
  libra: {
    id: 'libra',
    name: { en: 'Libra', my: 'တူရာသီ (Libra)', ja: '天秤座（てんびん座）' },
    symbol: '♎',
    dates: 'Sep 23 – Oct 22',
    element: 'Air',
    modality: 'Cardinal',
    rulingPlanet: { en: 'Venus', my: 'သောကြာဂြိုဟ် (Venus)', ja: '金星' },
    tarotCardId: 'justice',
    tarotCardName: { en: 'XI Justice', my: 'XI တရားမျှတခြင်း (Justice)', ja: 'XI 正義' },
    traits: {
      en: 'Harmonious, fair-minded, diplomatic, and lover of equilibrium.',
      my: 'တရားမျှတမှုကို မြတ်နိုးပြီး သဟဇာတဖြစ်မှုကို လိုလားသော သံတမန်စရိုက်ရှိသည်။',
      ja: '調和を重んじる、公平、洗練された美的センス、平和の守護者。'
    }
  },
  scorpio: {
    id: 'scorpio',
    name: { en: 'Scorpio', my: 'ဗြိစ္ဆာရာသီ (Scorpio)', ja: '蠍座（さそり座）' },
    symbol: '♏',
    dates: 'Oct 23 – Nov 21',
    element: 'Water',
    modality: 'Fixed',
    rulingPlanet: { en: 'Pluto & Mars', my: 'ပလူတိုနှင့် အင်္ဂါဂြိုဟ်', ja: '冥王星・火星' },
    tarotCardId: 'death',
    tarotCardName: { en: 'XIII Death (Transformation)', my: 'XIII သေခြင်းတရားနှင့် အသွင်ကူးပြောင်းခြင်း (Death)', ja: 'XIII 死神（変容と再生）' },
    traits: {
      en: 'Transformative, magnetic, psychologically penetrating, and fiercely loyal.',
      my: 'အတွင်းစိတ်အနက်ရှိုင်းဆုံးကို ထိုးဖောက်မြင်နိုင်ပြီး အသွင်ပြောင်းလဲနိုင်စွမ်း မြင့်မားသည်။',
      ja: '変容の力、神秘的、圧倒的な洞察力、揺るぎない忠誠心。'
    }
  },
  sagittarius: {
    id: 'sagittarius',
    name: { en: 'Sagittarius', my: 'ဓနုရာသီ (Sagittarius)', ja: '射手座（いて座）' },
    symbol: '♐',
    dates: 'Nov 22 – Dec 21',
    element: 'Fire',
    modality: 'Mutable',
    rulingPlanet: { en: 'Jupiter', my: 'ကြာသပတေးဂြိုဟ် (Jupiter)', ja: '木星' },
    tarotCardId: 'temperance',
    tarotCardName: { en: 'XIV Temperance', my: 'XIV အလယ်အလတ်လမ်းစဉ် (Temperance)', ja: 'XIV 節制' },
    traits: {
      en: 'Philosophical, freedom-seeking, optimistic, and spiritual explorer.',
      my: 'လွတ်လပ်မှုကို မြတ်နိုးပြီး အကောင်းမြင်စိတ်ရှိကာ အသိဉာဏ်ပညာကို ရှာဖွေသူဖြစ်သည်။',
      ja: '哲学的、自由を愛する、楽観的、精神の冒険家。'
    }
  },
  capricorn: {
    id: 'capricorn',
    name: { en: 'Capricorn', my: 'မကာရရာသီ (Capricorn)', ja: '山羊座（やぎ座）' },
    symbol: '♑',
    dates: 'Dec 22 – Jan 19',
    element: 'Earth',
    modality: 'Cardinal',
    rulingPlanet: { en: 'Saturn', my: 'စနေဂြိုဟ် (Saturn)', ja: '土星' },
    tarotCardId: 'devil',
    tarotCardName: { en: 'XV The Devil (Master of Shadow)', my: 'XV အရိပ်ကို ပိုင်စိုးသူ (The Devil)', ja: 'XV 悪魔（物質と影の統合）' },
    traits: {
      en: 'Ambitious, disciplined, architect of reality, and master of endurance.',
      my: 'ရည်မှန်းချက်ကြီးမားပြီး စည်းကမ်းရှိကာ လက်တွေ့ဘဝကို စိတ်ရှည်စွာ တည်ဆောက်တတ်သည်။',
      ja: '大志を抱く、自律的、現実の構築者、不屈の忍耐力。'
    }
  },
  aquarius: {
    id: 'aquarius',
    name: { en: 'Aquarius', my: 'ကုံရာသီ (Aquarius)', ja: '水瓶座（みずがめ座）' },
    symbol: '♒',
    dates: 'Jan 20 – Feb 18',
    element: 'Air',
    modality: 'Fixed',
    rulingPlanet: { en: 'Uranus & Saturn', my: 'ယူရေးနပ်စ်နှင့် စနေဂြိုဟ်', ja: '天王星・土星' },
    tarotCardId: 'star',
    tarotCardName: { en: 'XVII The Star', my: 'XVII ကြယ်တာရာ (The Star)', ja: 'XVII 星' },
    traits: {
      en: 'Visionary, humanitarian, unconventional, and channel of divine inspiration.',
      my: 'အမြော်အမြင်ကြီးပြီး လူသားချင်းစာနာတတ်ကာ တီထွင်ဆန်းသစ်မှု အပြည့်ရှိသည်။',
      ja: '先見の明、人道主義、独創的、天上のひらめきの受容者。'
    }
  },
  pisces: {
    id: 'pisces',
    name: { en: 'Pisces', my: 'မိန်ရာသီ (Pisces)', ja: '魚座（うお座）' },
    symbol: '♓',
    dates: 'Feb 19 – Mar 20',
    element: 'Water',
    modality: 'Mutable',
    rulingPlanet: { en: 'Neptune & Jupiter', my: 'နက်ပကျွန်းနှင့် ကြာသပတေးဂြိုဟ်', ja: '海王星・木星' },
    tarotCardId: 'moon',
    tarotCardName: { en: 'XVIII The Moon', my: 'XVIII လမင်းနှင့် စိတ်ဝိညာဉ်အာရုံ (The Moon)', ja: 'XVIII 月' },
    traits: {
      en: 'Mystical, boundless empathy, artistic dreamer, and connected to the unseen.',
      my: 'စိတ်ဝိညာဉ်နူးညံ့ပြီး စာနာနားလည်လွယ်ကာ မမြင်ရသောလောကနှင့် ဆက်သွယ်နိုင်စွမ်းရှိသည်။',
      ja: '神秘的、無辺の共感力、夢想家、見えざる世界と響き合う魂。'
    }
  }
};

const MAJOR_TAROT_BY_NUMBER: Record<number, { id: string; name: { en: string; my: string; ja: string } }> = {
  1: { id: 'magician', name: { en: 'I The Magician', my: 'I မျက်လှည့်ဆရာ (The Magician)', ja: 'I 魔術師' } },
  2: { id: 'high_priestess', name: { en: 'II The High Priestess', my: 'II ဘုန်းတော်ကြီးမ (The High Priestess)', ja: 'II 女教皇' } },
  3: { id: 'empress', name: { en: 'III The Empress', my: 'III ဧကရီမိဖုရား (The Empress)', ja: 'III 女帝' } },
  4: { id: 'emperor', name: { en: 'IV The Emperor', my: 'IV ဧကရာဇ်မင်း (The Emperor)', ja: 'IV 皇帝' } },
  5: { id: 'hierophant', name: { en: 'V The Hierophant', my: 'V ဆရာတော် (The Hierophant)', ja: 'V 教皇' } },
  6: { id: 'lovers', name: { en: 'VI The Lovers', my: 'VI ချစ်သူစုံတွဲ (The Lovers)', ja: 'VI 恋人たち' } },
  7: { id: 'chariot', name: { en: 'VII The Chariot', my: 'VII စစ်ရထား (The Chariot)', ja: 'VII 戦車' } },
  8: { id: 'strength', name: { en: 'VIII Strength', my: 'VIII အတွင်းခွန်အား (Strength)', ja: 'VIII 力' } },
  9: { id: 'hermit', name: { en: 'IX The Hermit', my: 'IX ရသေ့သူတော်စင် (The Hermit)', ja: 'IX 隠者' } },
  10: { id: 'wheel_of_fortune', name: { en: 'X Wheel of Fortune', my: 'X ကံကြမ္မာစက်ဝိုင်း (Wheel of Fortune)', ja: 'X 運命の輪' } },
  11: { id: 'justice', name: { en: 'XI Justice', my: 'XI တရားမျှတခြင်း (Justice)', ja: 'XI 正義' } },
  12: { id: 'hanged_man', name: { en: 'XII The Hanged Man', my: 'XII ဇောက်ထိုးတွဲလောင်းကျနေသူ (The Hanged Man)', ja: 'XII 吊るされた男' } },
  13: { id: 'death', name: { en: 'XIII Death', my: 'XIII သေခြင်းတရားနှင့် အသွင်ပြောင်းလဲခြင်း (Death)', ja: 'XIII 死神' } },
  14: { id: 'temperance', name: { en: 'XIV Temperance', my: 'XIV အလယ်အလတ်လမ်းစဉ် (Temperance)', ja: 'XIV 節制' } },
  15: { id: 'devil', name: { en: 'XV The Devil', my: 'XV မာရ်နတ် (The Devil)', ja: 'XV 悪魔' } },
  16: { id: 'tower', name: { en: 'XVI The Tower', my: 'XVI မျှော်စင်ပြိုလဲခြင်း (The Tower)', ja: 'XVI 塔' } },
  17: { id: 'star', name: { en: 'XVII The Star', my: 'XVII ကြယ်တာရာ (The Star)', ja: 'XVII 星' } },
  18: { id: 'moon', name: { en: 'XVIII The Moon', my: 'XVIII လမင်း (The Moon)', ja: 'XVIII 月' } },
  19: { id: 'sun', name: { en: 'XIX The Sun', my: 'XIX နေမင်း (The Sun)', ja: 'XIX 太陽' } },
  20: { id: 'judgement', name: { en: 'XX Judgement', my: 'XX စီရင်ဆုံးဖြတ်ခြင်း (Judgement)', ja: 'XX 審判' } },
  21: { id: 'world', name: { en: 'XXI The World', my: 'XXI ကမ္ဘာလောက (The World)', ja: 'XXI 世界' } },
  22: { id: 'fool', name: { en: '0 The Fool', my: '0 လူမိုက် (The Fool)', ja: '0 愚者' } }
};

export class AstrologyService {
  private static STORAGE_KEY = 'arcanium_user_profile';

  /**
   * Determine Zodiac sign based on birthdate string (YYYY-MM-DD)
   */
  public static getZodiacSign(birthdate: string): ZodiacSignInfo {
    const parts = birthdate.split('-');
    if (parts.length < 3) return ZODIAC_SIGNS.aries;
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return ZODIAC_SIGNS.aries;
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return ZODIAC_SIGNS.taurus;
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return ZODIAC_SIGNS.gemini;
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return ZODIAC_SIGNS.cancer;
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return ZODIAC_SIGNS.leo;
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return ZODIAC_SIGNS.virgo;
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return ZODIAC_SIGNS.libra;
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return ZODIAC_SIGNS.scorpio;
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return ZODIAC_SIGNS.sagittarius;
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return ZODIAC_SIGNS.capricorn;
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return ZODIAC_SIGNS.aquarius;
    return ZODIAC_SIGNS.pisces;
  }

  /**
   * Calculate Life Path Number (1 - 9, or Master 11 / 22)
   */
  public static calculateLifePathNumber(birthdate: string): number {
    const digits = birthdate.replace(/\D/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);

    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
    }
    return sum;
  }

  /**
   * Calculate Birth Tarot Card (1 - 22)
   */
  public static calculateBirthTarotCard(birthdate: string): { id: string; name: { en: string; my: string; ja: string } } {
    const digits = birthdate.replace(/\D/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);

    while (sum > 22) {
      sum = sum
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
    }

    if (sum === 0) sum = 22; // The Fool
    return MAJOR_TAROT_BY_NUMBER[sum] || MAJOR_TAROT_BY_NUMBER[1];
  }

  /**
   * Create or update UserProfile
   */
  public static buildProfile(name: string, birthdate: string, spiritualFocus = ''): UserProfile {
    const zodiacSign = this.getZodiacSign(birthdate);
    const lifePathNumber = this.calculateLifePathNumber(birthdate);
    const birthCard = this.calculateBirthTarotCard(birthdate);

    const profile: UserProfile = {
      name: name.trim() || 'The Seeker',
      birthdate,
      zodiacSign,
      lifePathNumber,
      birthTarotCardId: birthCard.id,
      birthTarotCardName: birthCard.name,
      spiritualFocus,
      createdAt: Date.now()
    };

    return profile;
  }

  /**
   * Save profile to localStorage
   */
  public static saveProfile(profile: UserProfile): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn('Failed to save user profile to localStorage', e);
    }
  }

  /**
   * Load profile from localStorage
   */
  public static loadProfile(): UserProfile | null {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (!data) return null;
      return JSON.parse(data) as UserProfile;
    } catch (e) {
      return null;
    }
  }

  private static PARTNER_STORAGE_KEY = 'arcanium_partner_profile';

  /**
   * Create or update Partner UserProfile
   */
  public static buildPartnerProfile(name: string, zodiacId?: ZodiacSignId, birthdate?: string): UserProfile {
    let zodiacSign: ZodiacSignInfo;
    let lifePathNumber = 7;
    let birthDateStr = birthdate && birthdate.trim() ? birthdate : '2000-01-01';

    if (birthdate && birthdate.trim()) {
      zodiacSign = this.getZodiacSign(birthdate);
      lifePathNumber = this.calculateLifePathNumber(birthdate);
      birthDateStr = birthdate;
    } else if (zodiacId && ZODIAC_SIGNS[zodiacId]) {
      zodiacSign = ZODIAC_SIGNS[zodiacId];
      lifePathNumber = (name.trim().length % 9) || 1;
    } else {
      zodiacSign = ZODIAC_SIGNS.cancer;
    }

    const birthCard = this.calculateBirthTarotCard(birthDateStr);

    return {
      name: name.trim() || 'Counterpart Soul',
      birthdate: birthDateStr,
      zodiacSign,
      lifePathNumber,
      birthTarotCardId: birthCard.id,
      birthTarotCardName: birthCard.name,
      createdAt: Date.now()
    };
  }

  /**
   * Save partner profile to localStorage
   */
  public static savePartnerProfile(partner: UserProfile): void {
    try {
      localStorage.setItem(this.PARTNER_STORAGE_KEY, JSON.stringify(partner));
    } catch (e) {
      console.warn('Failed to save partner profile to localStorage', e);
    }
  }

  /**
   * Load partner profile from localStorage
   */
  public static loadPartnerProfile(): UserProfile | null {
    try {
      const data = localStorage.getItem(this.PARTNER_STORAGE_KEY);
      if (!data) return null;
      return JSON.parse(data) as UserProfile;
    } catch (e) {
      return null;
    }
  }

  /**
   * Calculate Astrological Synastry between Querent and Partner
   */
  public static calculateSynastry(
    userProfile: UserProfile,
    partnerProfile: UserProfile,
    lang: Language
  ): import('../types/userProfile').AstrologicalSynastrySummary {
    const uZ = userProfile.zodiacSign || ZODIAC_SIGNS.aries;
    const pZ = partnerProfile.zodiacSign || ZODIAC_SIGNS.leo;
    const uEl = uZ.element;
    const pEl = pZ.element;

    let score = 85;
    let chemistry: import('../types/tarot').LocalizedText;
    let verdict: import('../types/tarot').LocalizedText;
    let advice: import('../types/tarot').LocalizedText;

    if (uEl === pEl) {
      score = 92;
      chemistry = {
        en: `Twin ${uEl} Resonances — Deep Instinctual Mirroring`,
        my: `တူညီသော ${uEl} ဓာတ် ပဲ့တင်ထပ်မှု — အချင်းချင်း အလိုလို နားလည်နိုင်သော စွမ်းအား`,
        ja: `同質のエレメント【${uEl}】— 直感的共鳴と魂のミラーリング`
      };
      verdict = {
        en: `High empathic resonance and natural rapport. You share identical instinctual motivations.`,
        my: `အလွန်နက်ရှိုင်းသော နားလည်မှုနှင့် သဘာဝကျသော သဟဇာတရှိမှု။ အတွင်းစိတ်ဆန္ဒချင်း တူညီစွာ စီးဆင်းနေပါသည်။`,
        ja: `高い共感性と自然な波長の合致。互いの行動原理を言葉なしに理解し合える関係です。`
      };
      advice = {
        en: `Guard against amplifying mutual blind spots or stubbornness. Bring intentional balance.`,
        my: `အားနည်းချက်များ သို့မဟုတ် အတ္တများကို အပြန်အလှန် ပြင်းထန်မသွားစေရန် သတိပြု၍ မျှတမှုထားရှိပါ။`,
        ja: `互いの頑なさや死角を増幅させないよう、意識的に中庸と柔軟性を保ちましょう。`
      };
    } else if ((uEl === 'Fire' && pEl === 'Air') || (uEl === 'Air' && pEl === 'Fire')) {
      score = 95;
      chemistry = {
        en: `Fire & Air Alchemy — Creative Fuel & Mutual Expansion`,
        my: `မီးနှင့် လေဓာတ် ပေါင်းစပ်မှု — တီထွင်ဖန်တီးမှု စွမ်းအားနှင့် အပြန်အလှန် တိုးတက်စေခြင်း`,
        ja: `火と風の錬金術 — 創造的刺激と相互拡大`
      };
      verdict = {
        en: `Dynamic, stimulating, and visionary chemistry. Air fuels Fire's passion, while Fire inspires Air's intellect.`,
        my: `အလွန်သွက်လက်တက်ကြွပြီး အမြင်ကျယ်စေသော ပေါင်းစပ်မှု။ လေက မီးကို တောက်လောင်စေသကဲ့သို့ မီးက လေ၏ ဉာဏ်ပညာကို လှုံ့ဆော်ပေးပါသည်။`,
        ja: `刺激的で高揚感に満ちた最高の相性。風が火の情熱を煽り、火が風の知性に光を灯します。`
      };
      advice = {
        en: `Ensure abstract visions are grounded into practical daily commitments so enthusiasm endures.`,
        my: `စိတ်ကူးအိပ်မက်များကို လက်တွေ့ဘဝတွင် ခိုင်မာအောင် အကောင်အထည်ဖော်ခြင်းဖြင့် ရေရှည်တည်မြဲစေပါ။`,
        ja: `情熱の火を長続きさせるため、抽象的な理想を日々の具体的な約束として着実に根づかせましょう。`
      };
    } else if ((uEl === 'Earth' && pEl === 'Water') || (uEl === 'Water' && pEl === 'Earth')) {
      score = 94;
      chemistry = {
        en: `Earth & Water Alchemy — Fertile Oasis & Emotional Security`,
        my: `မြေနှင့် ရေဓာတ် ပေါင်းစပ်မှု — မြေဆီမြေသြဇာကောင်းသော အိုအေစစ်နှင့် စိတ်လုံခြုံမှု`,
        ja: `地と水の錬金術 — 肥沃なオアシスと深い情緒的安心感`
      };
      verdict = {
        en: `Deeply nourishing, grounding, and protective union. Water softens Earth, while Earth holds Water's depths safely.`,
        my: `နွေးထွေးခိုင်မာပြီး အပြန်အလှန် ကာကွယ်စောင့်ရှောက်သော ပေါင်းစပ်မှု။ ရေက မြေကို နူးညံ့စေပြီး မြေက ရေကို လုံခြုံစွာ ထိန်းကျောင်းပေးပါသည်။`,
        ja: `互いを深く養い、育み合う安らぎの絆。水が地を潤し、地が水の感情を安全に包み込みます。`
      };
      advice = {
        en: `Keep communication active so emotional tides do not settle into unexpressed stagnation.`,
        my: `ခံစားချက်များ မအောင့်အီးဘဲ ပွင့်လင်းစွာ ပြောဆိုဆက်သွယ်ခြင်းဖြင့် ဆက်ဆံရေးကို အစဉ်လန်းဆန်းစေပါ။`,
        ja: `感情の流れが滞らないよう、日頃から素直な対話と新しい刺激を大切にしてください。`
      };
    } else if ((uEl === 'Fire' && pEl === 'Water') || (uEl === 'Water' && pEl === 'Fire')) {
      score = 78;
      chemistry = {
        en: `Fire & Water Alchemy — Steam, Deep Passion & Emotional Catharsis`,
        my: `မီးနှင့် ရေဓာတ် ပေါင်းစပ်မှု — ရေနွေးငွေ့၊ နက်ရှိုင်းသော စွဲမက်မှုနှင့် ခံစားချက်ပေါက်ကွဲမှု`,
        ja: `火と水の錬金術 — 蒸気の情熱・強烈な引力と感情の昇華`
      };
      verdict = {
        en: `Intensely magnetic and transformative. Fire brings bold action while Water brings soulful depth.`,
        my: `ဆွဲဆောင်မှု အလွန်ပြင်းထန်ပြီး အသွင်ပြောင်းလဲစေနိုင်သော ဆက်ဆံရေး။ မီးက ရဲရင့်မှုကို ပေး၍ ရေက နက်ရှိုင်းသော ခံစားချက်ကို ဖြည့်ဆည်းပေးပါသည်။`,
        ja: `強烈な引き寄せと変容をもたらす関係。火が前進の勇気を与え、水が魂の深みをもたらします。`
      };
      advice = {
        en: `Respect differing emotional speeds: Fire must avoid rushing Water, while Water should express feelings openly without retreating.`,
        my: `ခံစားချက် အရှိန်အဟုန် မတူညီမှုကို နားလည်ပေးပါ: မီးက ရေကို အလောတကြီး မတိုက်တွန်းဘဲ ရေကလည်း စိတ်မဆုတ်ဘဲ ပွင့်လင်းစွာ ပြောဆိုပါ။`,
        ja: `テンポの違いを尊重すること。火は水を急かさず、水は殻に閉じこもらずに想いを伝えましょう。`
      };
    } else if ((uEl === 'Earth' && pEl === 'Air') || (uEl === 'Air' && pEl === 'Earth')) {
      score = 80;
      chemistry = {
        en: `Earth & Air Alchemy — Pragmatic Vision & Structural Intellect`,
        my: `မြေနှင့် လေဓာတ် ပေါင်းစပ်မှု — လက်တွေ့ကျသော အမြင်နှင့် စနစ်တကျ ဉာဏ်ပညာ`,
        ja: `地と風の錬金術 — 現実的ビジョンと構造的知性`
      };
      verdict = {
        en: `Intellectually constructive partnership. Air generates strategic concepts while Earth builds tangible reality.`,
        my: `ဉာဏ်ပညာပိုင်းဆိုင်ရာ အကျိုးပြုသော မဟာမိတ်ဆက်ဆံရေး။ လေက မဟာဗျူဟာမြောက် အတွေးအခေါ်များကို ဖန်တီးပေးပြီး မြေက လက်တွေ့ဖြစ်လာအောင် တည်ဆောက်ပေးပါသည်။`,
        ja: `極めて建設的な知の共創。風が斬新なアイデアを生み、地がそれを堅固な現実に具現化します。`
      };
      advice = {
        en: `Balance logic with emotional warmth; do not let conversations become purely transactional.`,
        my: `ကျိုးကြောင်းဆင်ခြင်မှုအပြင် နှလုံးသား နွေးထွေးမှုကိုလည်း မျှတစွာ ထည့်သွင်းပါ။`,
        ja: `理屈だけでなく心の温もりを交わし、関係が単なる事務的協力に終わらないよう配慮しましょう。`
      };
    } else if ((uEl === 'Fire' && pEl === 'Earth') || (uEl === 'Earth' && pEl === 'Fire')) {
      score = 82;
      chemistry = {
        en: `Fire & Earth Alchemy — Volcanic Ambition & Materialized Drive`,
        my: `မီးနှင့် မြေဓာတ် ပေါင်းစပ်မှု — မီးတောင်ကဲ့သို့ ခွန်အားနှင့် လက်တွေ့ကျသော ရည်မှန်းချက်`,
        ja: `火と地の錬金術 — 火山のような野心と不屈の具現化力`
      };
      verdict = {
        en: `Powerhouse of accomplishment. Fire fuels inspiration and courage while Earth provides durable stamina and container.`,
        my: `ကြီးမားသော အောင်မြင်မှုကို ဖန်တီးနိုင်သော ပေါင်းစပ်မှု။ မီးက စိတ်ဓာတ်ခွန်အားနှင့် ရဲရင့်မှုကို ပေးပြီး မြေက ရေရှည်ခံနိုင်ရည်နှင့် အခြေခံကို ပေးပါသည်။`,
        ja: `偉業を成し遂げる強力なタッグ。火がひらめきと勇気を与え、地が確固たる基盤と持続力を提供します。`
      };
      advice = {
        en: `Harmonize speed expectations: Fire's urgency needs Earth's steady patience.`,
        my: `လုပ်ဆောင်မှု အမြန်နှုန်းကို ချိန်ညှိပါ: မီး၏ အလျင်လိုမှုကို မြေ၏ စိတ်ရှည်မှုဖြင့် ထိန်းညှိပေးပါ။`,
        ja: `スピード感の調和が鍵。火の焦りを地の穏やかな忍耐力で包み込みましょう。`
      };
    } else {
      score = 79;
      chemistry = {
        en: `Air & Water Alchemy — Intuitive Insight & Emotional Waves`,
        my: `လေနှင့် ရေဓာတ် ပေါင်းစပ်မှု — အတွင်းစိတ်အာရုံ ထိုးထွင်းသိမြင်မှုနှင့် ခံစားချက်လှိုင်းများ`,
        ja: `風と水の錬金術 — 直感的洞察と情感の波`
      };
      verdict = {
        en: `Poetic and psychologically rich connection. Air analyzes patterns while Water senses unspoken currents.`,
        my: `ကဗျာဆန်ပြီး စိတ်ပညာအရ နက်နဲသော ဆက်ဆံရေး။ လေက အကြောင်းအရာများကို ခွဲခြမ်းစိတ်ဖြာပြီး ရေက မမြင်ရသော ခံစားချက်များကို ကြိုတင်သိရှိပါသည်။`,
        ja: `詩的で深層心理に響く絆。風が知的に整理し、水が見えない心の機微を感じ取ります。`
      };
      advice = {
        en: `Bridge head and heart with clear vulnerability. Avoid overthinking subtle emotional shifts.`,
        my: `အတွေးနှင့် နှလုံးသားကို ပွင့်လင်းစွာ ချိတ်ဆက်ပါ၊ သံသယမလွန်ကဲဘဲ ရိုးသားစွာ ဖလှယ်ပါ။`,
        ja: `知性と感情の架け橋を築くこと。深読みしすぎず、素直な気持ちを言葉で伝え合いましょう。`
      };
    }

    const uLP = userProfile.lifePathNumber || 1;
    const pLP = partnerProfile.lifePathNumber || 1;
    let compositeLP = uLP + pLP;
    while (compositeLP > 9 && compositeLP !== 11 && compositeLP !== 22) {
      compositeLP = compositeLP.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }

    const compositeBirthCard = this.calculateBirthTarotCard(`${uLP + pLP}-01-01`);

    return {
      userZodiac: uZ,
      partnerZodiac: pZ,
      userElement: uEl,
      partnerElement: pEl,
      elementalChemistry: chemistry,
      compatibilityScore: score,
      dynamicVerdict: verdict,
      synastryAdvice: advice,
      compositeLifePathNumber: compositeLP,
      compositeSoulCardName: compositeBirthCard.name
    };
  }

  /**
   * Check if a drawn tarot card has high personal resonance with the user's or partner's natal chart
   */
  public static getCardNatalResonance(
    card: TarotCard,
    profile: UserProfile | null,
    lang: Language,
    isPartner = false
  ): { hasResonance: boolean; reason: string; badge: string } | null {
    if (!profile || !profile.zodiacSign) return null;

    const z = profile.zodiacSign;
    const cardId = card.id.toLowerCase();
    const cardName = card.name.en.toLowerCase();
    const prefix = isPartner ? `${profile.name}: ` : '';

    // Check Sun Sign Zodiac match
    if (z.tarotCardId.toLowerCase() === cardId || cardName.includes(z.id)) {
      const badge = `${z.symbol} ${profile.name}'s Sign Key`;
      const reason = lang === 'my'
        ? `${prefix}ဤကတ်ပြားသည် ${profile.name} ၏ မွေးရာပါ ${z.name[lang]} ၏ အဓိက စိုးမိုးကတ် ဖြစ်သောကြောင့် စရိုက်သဘာဝနှင့် အလွန်နီးကပ်စွာ ပဲ့တင်ထပ်နေပါသည်။`
        : lang === 'ja'
        ? `${prefix}このカードは【${profile.name}】の太陽星座【${z.name[lang]}】を司る守護カードであり、その本質と深く共鳴しています。`
        : `${prefix}This card directly rules ${profile.name}'s Sun Sign (${z.name.en}) — carrying profound personal karmic resonance.`;
      return { hasResonance: true, reason, badge };
    }

    // Check Birth Card match
    if (profile.birthTarotCardId && profile.birthTarotCardId.toLowerCase() === cardId) {
      const badge = `✨ ${profile.name}'s Soul Card`;
      const reason = lang === 'my'
        ? `${prefix}ဤကတ်ပြားသည် ${profile.name} ၏ စိတ်ဝိညာဉ်မွေးဖွားခြင်းကတ် (Soul Card) ဖြစ်ပါသည်။`
        : lang === 'ja'
        ? `${prefix}このカードは【${profile.name}】のソウル・バースカードであり、魂の根源的な波動を象徴しています。`
        : `${prefix}This is ${profile.name}'s sacred Soul Birth Card derived from their natal numerology.`;
      return { hasResonance: true, reason, badge };
    }

    // Check Elemental Alignment match
    if (card.element === z.element && card.arcana === 'major') {
      const badge = `⚡ ${profile.name}'s ${z.element} Affinity`;
      const reason = lang === 'my'
        ? `${prefix}${profile.name} ၏ ${z.element} ဓာတ်နှင့် တူညီသော စွမ်းအင်ဖြစ်သဖြင့် အားကောင်းစွာ အကျိုးသက်ရောက်ပါမည်။`
        : lang === 'ja'
        ? `${prefix}【${profile.name}】の星座と同じ【${z.element}】のエレメントに属しており、自然で力強い後押しをもたらします。`
        : `${prefix}Shares ${profile.name}'s natal ${z.element} element, amplifying its energetic influence.`;
      return { hasResonance: true, reason, badge };
    }

    return null;
  }
}
