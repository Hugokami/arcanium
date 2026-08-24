import { Language, LocalizedText } from '../types/tarot';

export interface MoonPhaseInfo {
  phaseName: LocalizedText;
  emoji: string;
  illumination: number; // 0 - 100%
  lunarInfluence: LocalizedText;
  astrologicalSeason: LocalizedText;
}

export interface PlanetaryHourInfo {
  planet: string;
  symbol: string;
  name: LocalizedText;
  element: string;
  rulingTarotKey: LocalizedText;
  hourNumber: number; // 1 - 24
  isDayHour: boolean;
  idealReadingThemes: LocalizedText;
  divinatoryGuidance: LocalizedText;
}

export interface CosmicAlmanacData {
  moonPhase: MoonPhaseInfo;
  planetaryHour: PlanetaryHourInfo;
  currentDecanate: {
    decanNumber: number;
    name: LocalizedText;
    degreeRange: string;
    rulingPlanet: LocalizedText;
    tarotMinorCard: LocalizedText;
  };
  celestialAdvisory: LocalizedText;
  recommendedSpreads: Array<{ id: string; name: LocalizedText; reason: LocalizedText }>;
}

export class LunarTransitService {
  private static CHALDEAN_ORDER = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon'];
  private static DAY_RULERS = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];

  private static PLANET_DETAILS: Record<string, {
    symbol: string;
    name: LocalizedText;
    element: string;
    rulingTarotKey: LocalizedText;
    themes: LocalizedText;
    guidance: LocalizedText;
  }> = {
    Sun: {
      symbol: '☉',
      name: { en: 'The Sun (Sol)', my: 'နေမင်း (Sun)', ja: '太陽（Sol）' },
      element: 'Fire',
      rulingTarotKey: { en: 'XIX The Sun', my: 'XIX နေမင်းကတ် (The Sun)', ja: 'XIX 太陽' },
      themes: { en: 'Clarity, Vitality, Leadership, Truth', my: 'ရှင်းလင်းပြတ်သားမှု၊ အသက်စွမ်းအား၊ ခေါင်းဆောင်မှု', ja: '真理の開示、生命力、リーダーシップ' },
      guidance: { en: 'Ideal for uncovering hidden truth, career milestones, and pure conscious intention.', my: 'အမှန်တရားရှာဖွေခြင်း၊ အလုပ်အကိုင်အောင်မြင်မှုနှင့် ရည်မှန်းချက်များအတွက် အလွန်ကောင်းသည်။', ja: '隠された真実の解明、キャリアの飛躍、明確な意図の設定に最適です。' }
    },
    Moon: {
      symbol: '☽',
      name: { en: 'The Moon (Luna)', my: 'လမင်း (Moon)', ja: '月（Luna）' },
      element: 'Water',
      rulingTarotKey: { en: 'XVIII The Moon & II High Priestess', my: 'XVIII လမင်းနှင့် II မဟာမယ်တော် (High Priestess)', ja: 'XVIII 月・II 女教皇' },
      themes: { en: 'Intuition, Dreams, Emotional Undercurrents', my: 'အတွင်းစိတ်အာရုံ၊ အိပ်မက်၊ နှလုံးသားခံစားချက်', ja: '直感、霊視、無意識の深層心理' },
      guidance: { en: 'Deep psychic divination, dream interpretation, and emotional healing.', my: 'စိတ်ဝိညာဉ်ထိုးထွင်းသိမြင်မှု၊ အိပ်မက်ဖော်ထုတ်ခြင်းနှင့် စိတ်ခံစားမှုကုစားခြင်း။', ja: '深層心理の探求、直感的な占い、感情の浄化に最も適した時間です。' }
    },
    Mars: {
      symbol: '♂',
      name: { en: 'Mars (Ares)', my: 'အင်္ဂါဂြိုဟ် (Mars)', ja: '火星（Mars）' },
      element: 'Fire',
      rulingTarotKey: { en: 'XVI The Tower & IV The Emperor', my: 'XVI ရဲတိုက်ပြိုလဲခြင်းနှင့် IV ဧကရာဇ် (The Emperor)', ja: 'XVI 塔・IV 皇帝' },
      themes: { en: 'Courage, Breakthrough, Decisive Action', my: 'သတ္တိ၊ အတားအဆီးဖြတ်ကျော်မှု၊ ပြတ်သားသော ဆုံးဖြတ်ချက်', ja: '突破力、決断、勇気ある行動' },
      guidance: { en: 'Cutting through stagnation, resolving conflicts, and initiating bold ventures.', my: 'အခက်အခဲများကို ရဲရင့်စွာ ကျော်လွှားရန်နှင့် စွန့်စားလုပ်ကိုင်ရန် အခွင့်ကောင်း။', ja: '停滞の打破、対立の克服、力強い一歩を踏み出す瞬間に最適です。' }
    },
    Mercury: {
      symbol: '☿',
      name: { en: 'Mercury (Hermes)', my: 'ဗုဒ္ဓဟူးဂြိုဟ် (Mercury)', ja: '水星（Mercury）' },
      element: 'Air',
      rulingTarotKey: { en: 'I The Magician', my: 'I မျက်လှည့်ပညာရှင် (The Magician)', ja: 'I 魔術師' },
      themes: { en: 'Communication, Contracts, Intellect, Strategy', my: 'ပြောဆိုဆက်ဆံရေး၊ စာချုပ်စာတမ်း၊ ဉာဏ်ပညာ၊ ဗျူဟာ', ja: '知性、交渉、契約、明晰な戦略' },
      guidance: { en: 'Favorable for business strategy, writing, study, and diplomatic negotiations.', my: 'စီးပွားရေးဗျူဟာ၊ စာပေလေ့လာခြင်းနှင့် စေ့စပ်ဆွေးနွေးမှုများအတွက် သင့်လျော်သည်။', ja: 'ビジネス戦略、学問の探求、契約や知的な対話に最高の恩恵をもたらします。' }
    },
    Jupiter: {
      symbol: '♃',
      name: { en: 'Jupiter (Zeus)', my: 'ကြာသပတေးဂြိုဟ် (Jupiter)', ja: '木星（Jupiter）' },
      element: 'Fire / Air',
      rulingTarotKey: { en: 'X Wheel of Fortune', my: 'X ကံကြမ္မာစက်ဝန်း (Wheel of Fortune)', ja: 'X 運命の輪' },
      themes: { en: 'Expansion, Prosperity, Abundance, Karma', my: 'တိုးတက်ကြီးပွားမှု၊ ကြွယ်ဝချမ်းသာခြင်း၊ ကံကောင်းခြင်း', ja: '拡大、幸運、富の引き寄せ、好機' },
      guidance: { en: 'Highly auspicious for wealth expansion, legal success, and spiritual optimism.', my: 'ဓနဥစ္စာတိုးပွားခြင်း၊ အခွင့်အလမ်းကောင်းများရရှိခြင်းနှင့် မင်္ဂလာရှိသော ဆုံးဖြတ်ချက်များ။', ja: '財運の拡大、幸運の引き寄せ、大いなる飛躍を誓う瞬間に最適です。' }
    },
    Venus: {
      symbol: '♀',
      name: { en: 'Venus (Aphrodite)', my: 'သောကြာဂြိုဟ် (Venus)', ja: '金星（Venus）' },
      element: 'Water / Earth',
      rulingTarotKey: { en: 'III The Empress & VI The Lovers', my: 'III ဧကရီမယ်တော်နှင့် VI စုံတွဲကတ် (The Lovers)', ja: 'III 女帝・VI 恋人たち' },
      themes: { en: 'Love, Beauty, Relational Synastry, Harmony', my: 'အချစ်ရေး၊ အလှအပ၊ ဆက်ဆံရေးသဟဇာတ၊ အနုပညာ', ja: '愛、美意識、調和、ソウルメイト' },
      guidance: { en: 'The most sacred window for love readings, partner synastry, and creative arts.', my: 'အချစ်ရေးမေးခွန်းများ၊ စုံတွဲလိုက်ဖက်မှုနှင့် အနုပညာဖန်တီးမှုများအတွက် အကောင်းဆုံးအချိန်။', ja: '恋愛の行方、パートナーシップの相性、芸術的創造の鑑定に最適です。' }
    },
    Saturn: {
      symbol: '♄',
      name: { en: 'Saturn (Kronos)', my: 'စနေဂြိုဟ် (Saturn)', ja: '土星（Saturn）' },
      element: 'Earth',
      rulingTarotKey: { en: 'XXI The World & XV The Devil', my: 'XXI ကမ္ဘာလောကနှင့် XV အရိပ်မာရ်နတ် (The Devil)', ja: 'XXI 世界・XV 悪魔' },
      themes: { en: 'Structure, Discipline, Karmic Boundaries, Mastery', my: 'တည်ဆောက်မှု၊ စည်းကမ်း၊ ကံကြမ္မာအတားအဆီး၊ ရေရှည်ခိုင်မြဲမှု', ja: '構造、カルマ、規律、長期の基盤' },
      guidance: { en: 'Powerful for boundary setting, long-term foundation work, and karmic release.', my: 'စည်းမျဉ်းသတ်မှတ်ခြင်း၊ ရေရှည်အုတ်မြစ်ချခြင်းနှင့် ကံကြမ္မာသင်ခန်းစာများအတွက် အလွန်ထိရောက်သည်။', ja: '境界線の確立、長期的な現実基盤の構築、カルマの清算に向いています。' }
    }
  };

  /**
   * Calculate current approximate moon phase from epoch
   */
  public static getCurrentMoonPhase(lang: Language): MoonPhaseInfo {
    const now = new Date();
    const refNewMoon = new Date('2024-01-11T11:57:00Z').getTime();
    const synodicMonthMs = 29.53058867 * 24 * 60 * 60 * 1000;

    const diff = (now.getTime() - refNewMoon) % synodicMonthMs;
    const daysIntoCycle = diff / (24 * 60 * 60 * 1000);
    const cycleFraction = daysIntoCycle / 29.53058867;

    let phaseName = { en: 'New Moon', my: 'လကွယ်နေ့ (New Moon 🌑)', ja: '新月（始まりの夜）' };
    let emoji = '🌑';
    let illumination = 0;
    let influence = {
      en: 'A sacred threshold of new beginnings, fertile darkness, and intention setting.',
      my: 'အစပြုခြင်းသစ်၊ အာရုံစူးစိုက်မှုနှင့် ရည်ရွယ်ချက်သစ်များ စတင်ပျိုးထောင်ရန် အကောင်းဆုံးအချိန်။',
      ja: '新たな始まり、意図の設定、静寂なるリセットに最適な夜。'
    };

    if (cycleFraction < 0.03 || cycleFraction >= 0.97) {
      phaseName = { en: 'New Moon', my: 'လကွယ်နေ့ (New Moon 🌑)', ja: '新月（朔）' };
      emoji = '🌑';
      illumination = 1;
    } else if (cycleFraction < 0.22) {
      phaseName = { en: 'Waxing Crescent', my: 'လဆန်းပိုင်း (Waxing Crescent 🌒)', ja: '三日月（成長の兆し）' };
      emoji = '🌒';
      illumination = Math.round(cycleFraction * 200);
      influence = {
        en: 'Energy is gathering momentum. Focus on planting positive intentions and stepping forward.',
        my: 'စွမ်းအင်များ တိုးတက်အရှိန်ရလာချိန် ဖြစ်သည်။ ကောင်းသော ရည်မှန်းချက်များ စတင်လုပ်ဆောင်ပါ။',
        ja: 'エネルギーが膨らみ始める時。前進への意志を固める好機です。'
      };
    } else if (cycleFraction < 0.28) {
      phaseName = { en: 'First Quarter Moon', my: 'ပထမ လခြမ်း (First Quarter 🌓)', ja: '上弦の月（決断の時）' };
      emoji = '🌓';
      illumination = 50;
      influence = {
        en: 'A cosmic turning point requiring courage, overcoming friction, and decisive action.',
        my: 'သန္နိဋ္ဌာန်ခိုင်မာမှုနှင့် အတားအဆီးများကို ကျော်လွှားရန် ရဲဝံ့စွာ ဆုံးဖြတ်ရမည့်အချိန်။',
        ja: '試練を乗り越え、決断と積極的な行動が求められる節目です。'
      };
    } else if (cycleFraction < 0.47) {
      phaseName = { en: 'Waxing Gibbous', my: 'လပြည့်အကြို (Waxing Gibbous 🌔)', ja: '十三夜（完成への熟成）' };
      emoji = '🌔';
      illumination = Math.round(50 + (cycleFraction - 0.25) * 200);
      influence = {
        en: 'Refining details, cultivating patience, and trusting that fruition is imminent.',
        my: 'အသေးစိတ်အချက်အလက်များကို ပြင်ဆင်ပြီး အသီးအပွင့်ရရှိရန် စိတ်ရှည်စွာ စောင့်ဆိုင်းချိန်။',
        ja: '細部を整え、完成に向けて確かな忍耐を培う時期です。'
      };
    } else if (cycleFraction < 0.53) {
      phaseName = { en: 'Full Moon', my: 'လပြည့်နေ့ (Full Moon 🌕)', ja: '満月（大いなる成就）' };
      emoji = '🌕';
      illumination = 100;
      influence = {
        en: 'Peak illumination, emotional clarity, spiritual culmination, and total manifestation.',
        my: 'စိတ်ဝိညာဉ်အာရုံ အလွန်ထက်မြက်ပြီး အမှန်တရားအားလုံး ရှင်းလင်းစွာ ပေါ်လွင်ချိန်။',
        ja: 'エネルギーが最高潮に達する成就の夜。深い洞察と感謝を捧げましょう。'
      };
    } else if (cycleFraction < 0.72) {
      phaseName = { en: 'Waning Gibbous', my: 'လဆုတ်ပိုင်း (Waning Gibbous 🌖)', ja: '種撒き月（分かち合いの時）' };
      emoji = '🌖';
      illumination = Math.round(100 - (cycleFraction - 0.5) * 200);
      influence = {
        en: 'Sharing wisdom, releasing gratitude, and distributing the fruits of your success.',
        my: 'အသိပညာများကို မျှဝေပြီး ရရှိထားသော အောင်မြင်မှုများကို တန်ဖိုးထားကျေးဇူးတင်ချိန်။',
        ja: '得られた智慧を分かち合い、感謝と共に収穫を味わう時。'
      };
    } else if (cycleFraction < 0.78) {
      phaseName = { en: 'Last Quarter Moon', my: 'နောက်ဆုံး လခြမ်း (Last Quarter 🌗)', ja: '下弦の月（手放しと浄化）' };
      emoji = '🌗';
      illumination = 50;
      influence = {
        en: 'Releasing outdated attachments, deep spiritual forgiveness, and internal clearing.',
        my: 'မလိုလားအပ်သော အဟောင်းများကို လွှတ်ချပြီး အတွင်းစိတ်ကို သန့်စင်ဆေးကြောချိန်။',
        ja: '不要な執着や過去を手放し、内なる浄化を行う神聖な時。'
      };
    } else {
      phaseName = { en: 'Waning Crescent', my: 'လကွယ်အကြို (Waning Crescent 🌘)', ja: '鎮静の月（休息と再生）' };
      emoji = '🌘';
      illumination = Math.round(50 - (cycleFraction - 0.75) * 200);
      influence = {
        en: 'Rest, spiritual surrender, dream meditation, and resting before the new cycle.',
        my: 'အနားယူခြင်း၊ စိတ်ကို လျှော့ချခြင်းနှင့် သံသရာစက်ဝန်းသစ် မစမီ အားမွေးချိန်။',
        ja: '深い休息と瞑想、次のサイクルに向けた静かな回復の時。'
      };
    }

    const month = now.getMonth() + 1;
    const day = now.getDate();

    let season = { en: 'Leo Season (Fire ♌)', my: 'သိဟ်ရာသီခွင်ကာလ (မီးဓာတ် ♌)', ja: '獅子座の季節（火 ♌）' };
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      season = { en: 'Aries Season (Fire ♈)', my: 'မိဿရာသီကာလ (မီးဓာတ် ♈)', ja: '牡羊座の季節（火 ♈）' };
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      season = { en: 'Taurus Season (Earth ♉)', my: 'ပြိဿရာသီကာလ (မြေဓာတ် ♉)', ja: '牡牛座の季節（地 ♉）' };
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      season = { en: 'Gemini Season (Air ♊)', my: 'မေထုန်ရာသီကာလ (လေဓာတ် ♊)', ja: '双子座の季節（風 ♊）' };
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      season = { en: 'Cancer Season (Water ♋)', my: 'ကရကဋ်ရာသီကာလ (ရေဓာတ် ♋)', ja: '蟹座の季節（水 ♋）' };
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      season = { en: 'Leo Season (Fire ♌)', my: 'သိဟ်ရာသီကာလ (မီးဓာတ် ♌)', ja: '獅子座の季節（火 ♌）' };
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      season = { en: 'Virgo Season (Earth ♍)', my: 'ကန်ရာသီကာလ (မြေဓာတ် ♍)', ja: '乙女座の季節（地 ♍）' };
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      season = { en: 'Libra Season (Air ♎)', my: 'တူရာသီကာလ (လေဓာတ် ♎)', ja: '天秤座の季節（風 ♎）' };
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      season = { en: 'Scorpio Season (Water ♏)', my: 'ဗြိစ္ဆာရာသီကာလ (ရေဓာတ် ♏)', ja: '蠍座の季節（水 ♏）' };
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      season = { en: 'Sagittarius Season (Fire ♐)', my: 'ဓနုရာသီကာလ (မီးဓာတ် ♐)', ja: '射手座の季節（火 ♐）' };
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      season = { en: 'Capricorn Season (Earth ♑)', my: 'မကာရရာသီကာလ (မြေဓာတ် ♑)', ja: '山羊座の季節（地 ♑）' };
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      season = { en: 'Aquarius Season (Air ♒)', my: 'ကုံရာသီကာလ (လေဓာတ် ♒)', ja: '水瓶座の季節（風 ♒）' };
    } else {
      season = { en: 'Pisces Season (Water ♓)', my: 'မိန်ရာသီကာလ (ရေဓာတ် ♓)', ja: '魚座の季節（水 ♓）' };
    }

    return {
      phaseName,
      emoji,
      illumination: Math.max(0, Math.min(100, illumination)),
      lunarInfluence: influence,
      astrologicalSeason: season
    };
  }

  /**
   * Calculate current Chaldean Planetary Hour based on local solar time
   */
  public static getCurrentPlanetaryHour(): PlanetaryHourInfo {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday ... 6 = Saturday
    const currentHour = now.getHours();

    const dayRulerPlanet = this.DAY_RULERS[dayOfWeek];
    const startIndex = this.CHALDEAN_ORDER.indexOf(dayRulerPlanet);

    // Approximate planetary hour (from 6 AM sunrise)
    let hourFromSunrise = currentHour - 6;
    if (hourFromSunrise < 0) hourFromSunrise += 24;

    const planetIndex = (startIndex + hourFromSunrise) % 7;
    const activePlanet = this.CHALDEAN_ORDER[planetIndex];
    const details = this.PLANET_DETAILS[activePlanet] || this.PLANET_DETAILS.Sun;

    const isDayHour = currentHour >= 6 && currentHour < 18;

    return {
      planet: activePlanet,
      symbol: details.symbol,
      name: details.name,
      element: details.element,
      rulingTarotKey: details.rulingTarotKey,
      hourNumber: hourFromSunrise + 1,
      isDayHour,
      idealReadingThemes: details.themes,
      divinatoryGuidance: details.guidance
    };
  }

  /**
   * Get full Cosmic Almanac synthesis combining Lunar Phase + Planetary Hour + Decanate
   */
  public static getCosmicAlmanac(lang: Language): CosmicAlmanacData {
    const moon = this.getCurrentMoonPhase(lang);
    const hour = this.getCurrentPlanetaryHour();

    const now = new Date();
    const day = now.getDate();
    let decanNum = 1;
    let decanRange = '0° – 10°';
    if (day > 10 && day <= 20) {
      decanNum = 2;
      decanRange = '10° – 20°';
    } else if (day > 20) {
      decanNum = 3;
      decanRange = '20° – 30°';
    }

    const decanate = {
      decanNumber: decanNum,
      name: {
        en: `${decanNum === 1 ? '1st' : decanNum === 2 ? '2nd' : '3rd'} Decanate of ${moon.astrologicalSeason.en.split(' ')[0]}`,
        my: `${moon.astrologicalSeason.my.split(' ')[0]} ၏ အဆင့် (${decanNum}) ဧရိယာ`,
        ja: `${moon.astrologicalSeason.ja.split('（')[0]} 第${decanNum}デーカン`
      },
      degreeRange: decanRange,
      rulingPlanet: hour.name,
      tarotMinorCard: {
        en: `Minor Arcana Decanate Ruler`,
        my: `မိုင်းနားအာကာနာ စိုးမိုးကတ်ပြား`,
        ja: `小アルカナ・デーカン守護`
      }
    };

    const celestialAdvisory = {
      en: `Under the ${moon.phaseName.en} and the Planetary Hour of ${hour.name.en}, current cosmic energies deeply favor inquiries into ${hour.idealReadingThemes.en}.`,
      my: `${moon.phaseName.my} နှင့် ${hour.name.my} ၏ စွမ်းအင်အောက်တွင် ${hour.idealReadingThemes.my} ဆိုင်ရာ မေးခွန်းများ မေးမြန်းရန် အထူးကောင်းမွန်ပါသည်။`,
      ja: `【${moon.phaseName.ja}】と【${hour.name.ja}の刻】の加護により、現在は【${hour.idealReadingThemes.ja}】に関する占断に最も強い霊的共鳴が得られます。`
    };

    const recommendedSpreads = [
      {
        id: '3card',
        name: { en: 'Past, Present, Future Trinity', my: 'အတိတ်၊ ပစ္စုပ္ပန်၊ အနာဂတ် ၃ ကတ်ခွင်', ja: '過去・現在・未来 3カード' },
        reason: { en: 'Quick elemental synchronization with current transit', my: 'လက်ရှိ စွမ်းအင်နှင့် လျင်မြန်စွာ ချိတ်ဆက်နိုင်သော ခွင်', ja: '現在の天体配置と素早く同調する基礎スプレッド' }
      },
      {
        id: 'celtic_cross',
        name: { en: '10-Card Grand Celtic Cross', my: '၁၀ ကတ် ဆဲလ်တစ်ကြက်ခြေခတ် မဟာခွင်', ja: 'ケルト十字 10カード' },
        reason: { en: 'Full karmic and situational illumination', my: 'ကံကြမ္မာနှင့် အခြေအနေအားလုံးကို ပြည့်စုံစွာ ဖွင့်ပြနိုင်သောခွင်', ja: '魂のカルマと未来を完全に照らし出す総合スプレッド' }
      }
    ];

    return {
      moonPhase: moon,
      planetaryHour: hour,
      currentDecanate: decanate,
      celestialAdvisory,
      recommendedSpreads
    };
  }
}
