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

  /**
   * Check if a drawn tarot card has high personal resonance with the user's natal chart
   */
  public static getCardNatalResonance(
    card: TarotCard,
    profile: UserProfile | null,
    lang: Language
  ): { hasResonance: boolean; reason: string; badge: string } | null {
    if (!profile || !profile.zodiacSign) return null;

    const z = profile.zodiacSign;
    const cardId = card.id.toLowerCase();
    const cardName = card.name.en.toLowerCase();

    // Check Sun Sign Zodiac match
    if (z.tarotCardId.toLowerCase() === cardId || cardName.includes(z.id)) {
      const badge = `${z.symbol} Sun Sign Key`;
      const reason = lang === 'my'
        ? `ဤကတ်ပြားသည် သင့်မွေးရာပါ ${z.name[lang]} ၏ အဓိက စိုးမိုးကတ် ဖြစ်သောကြောင့် သင့်စရိုက်နှင့် အလွန်နီးကပ်စွာ ပဲ့တင်ထပ်နေပါသည်။`
        : lang === 'ja'
        ? `このカードはあなたの太陽星座【${z.name[lang]}】を司る守護カードであり、あなた自身の本質と深く共鳴しています。`
        : `This card directly rules your Sun Sign (${z.name.en}) — it carries profound personal karmic resonance for you.`;
      return { hasResonance: true, reason, badge };
    }

    // Check Birth Card match
    if (profile.birthTarotCardId && profile.birthTarotCardId.toLowerCase() === cardId) {
      const badge = `✨ Soul Birth Card`;
      const reason = lang === 'my'
        ? `ဤကတ်ပြားသည် သင့်မွေးသက္ကရာဇ်မှ တွက်ချက်ရရှိသော စိတ်ဝိညာဉ်မွေးဖွားခြင်းကတ် (Soul Card) ဖြစ်ပါသည်။`
        : lang === 'ja'
        ? `このカードはあなたの生年月日から導かれた「ソウル・バースカード」であり、今世の魂の使命を象徴しています。`
        : `This is your sacred Soul Birth Card derived from your natal numerology, representing your lifelong core mastery.`;
      return { hasResonance: true, reason, badge };
    }

    // Check Elemental Alignment match
    if (card.element === z.element && card.arcana === 'major') {
      const badge = `⚡ ${z.element} Element Affinity`;
      const reason = lang === 'my'
        ? `သင့်ရာသီခွင်၏ ${z.element} ဓာတ်နှင့် တူညီသော စွမ်းအင်ဖြစ်သဖြင့် သဘာဝကျကျ အားကောင်းစွာ အကျိုးသက်ရောက်ပါမည်။`
        : lang === 'ja'
        ? `あなたの星座と同じ【${z.element}】のエレメントに属しており、自然で力強い後押しをもたらします。`
        : `Shares your natal ${z.element} element, amplifying its energetic influence in this position.`;
      return { hasResonance: true, reason, badge };
    }

    return null;
  }
}
