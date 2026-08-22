import { Language, LocalizedText } from '../types/tarot';

export interface MoonPhaseInfo {
  phaseName: LocalizedText;
  emoji: string;
  illumination: number; // 0 - 100%
  lunarInfluence: LocalizedText;
  astrologicalSeason: LocalizedText;
}

export class LunarTransitService {
  /**
   * Calculate current approximate moon phase from epoch
   */
  public static getCurrentMoonPhase(lang: Language): MoonPhaseInfo {
    const now = new Date();
    // Known new moon reference: Jan 11, 2024 11:57 UTC
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
      // New Moon
      phaseName = { en: 'New Moon', my: 'လကွယ်နေ့ (New Moon 🌑)', ja: '新月（朔）' };
      emoji = '🌑';
      illumination = 1;
    } else if (cycleFraction < 0.22) {
      // Waxing Crescent
      phaseName = { en: 'Waxing Crescent', my: 'လဆန်းပိုင်း (Waxing Crescent 🌒)', ja: '三日月（成長の兆し）' };
      emoji = '🌒';
      illumination = Math.round(cycleFraction * 200);
      influence = {
        en: 'Energy is gathering momentum. Focus on planting positive intentions and stepping forward.',
        my: 'စွမ်းအင်များ တိုးတက်အရှိန်ရလာချိန် ဖြစ်သည်။ ကောင်းသော ရည်မှန်းချက်များ စတင်လုပ်ဆောင်ပါ။',
        ja: 'エネルギーが膨らみ始める時。前進への意志を固める好機です。'
      };
    } else if (cycleFraction < 0.28) {
      // First Quarter
      phaseName = { en: 'First Quarter Moon', my: 'ပထမ လခြမ်း (First Quarter 🌓)', ja: '上弦の月（決断の時）' };
      emoji = '🌓';
      illumination = 50;
      influence = {
        en: 'A cosmic turning point requiring courage, overcoming friction, and decisive action.',
        my: 'သန္နိဋ္ဌာန်ခိုင်မာမှုနှင့် အတားအဆီးများကို ကျော်လွှားရန် ရဲဝံ့စွာ ဆုံးဖြတ်ရမည့်အချိန်။',
        ja: '試練を乗り越え、決断と積極的な行動が求められる節目です。'
      };
    } else if (cycleFraction < 0.47) {
      // Waxing Gibbous
      phaseName = { en: 'Waxing Gibbous', my: 'လပြည့်အကြို (Waxing Gibbous 🌔)', ja: '十三夜（完成への熟成）' };
      emoji = '🌔';
      illumination = Math.round(50 + (cycleFraction - 0.25) * 200);
      influence = {
        en: 'Refining details, cultivating patience, and trusting that fruition is imminent.',
        my: 'အသေးစိတ်အချက်အလက်များကို ပြင်ဆင်ပြီး အသီးအပွင့်ရရှိရန် စိတ်ရှည်စွာ စောင့်ဆိုင်းချိန်။',
        ja: '細部を整え、完成に向けて確かな忍耐を培う時期です。'
      };
    } else if (cycleFraction < 0.53) {
      // Full Moon
      phaseName = { en: 'Full Moon', my: 'လပြည့်နေ့ (Full Moon 🌕)', ja: '満月（大いなる成就）' };
      emoji = '🌕';
      illumination = 100;
      influence = {
        en: 'Peak illumination, emotional clarity, spiritual culmination, and total manifestation.',
        my: 'စိတ်ဝိညာဉ်အာရုံ အလွန်ထက်မြက်ပြီး အမှန်တရားအားလုံး ရှင်းလင်းစွာ ပေါ်လွင်ချိန်။',
        ja: 'エネルギーが最高潮に達する成就の夜。深い洞察と感謝を捧げましょう。'
      };
    } else if (cycleFraction < 0.72) {
      // Waning Gibbous
      phaseName = { en: 'Waning Gibbous', my: 'လဆုတ်ပိုင်း (Waning Gibbous 🌖)', ja: '種撒き月（分かち合いの時）' };
      emoji = '🌖';
      illumination = Math.round(100 - (cycleFraction - 0.5) * 200);
      influence = {
        en: 'Sharing wisdom, releasing gratitude, and distributing the fruits of your success.',
        my: 'အသိပညာများကို မျှဝေပြီး ရရှိထားသော အောင်မြင်မှုများကို တန်ဖိုးထားကျေးဇူးတင်ချိန်။',
        ja: '得られた智慧を分かち合い、感謝と共に収穫を味わう時。'
      };
    } else if (cycleFraction < 0.78) {
      // Last Quarter
      phaseName = { en: 'Last Quarter Moon', my: 'နောက်ဆုံး လခြမ်း (Last Quarter 🌗)', ja: '下弦の月（手放しと浄化）' };
      emoji = '🌗';
      illumination = 50;
      influence = {
        en: 'Releasing outdated attachments, deep spiritual forgiveness, and internal clearing.',
        my: 'မလိုလားအပ်သော အဟောင်းများကို လွှတ်ချပြီး အတွင်းစိတ်ကို သန့်စင်ဆေးကြောချိန်။',
        ja: '不要な執着や過去を手放し、内なる浄化を行う神聖な時。'
      };
    } else {
      // Waning Crescent
      phaseName = { en: 'Waning Crescent', my: 'လကွယ်အကြို (Waning Crescent 🌘)', ja: '鎮静の月（休息と再生）' };
      emoji = '🌘';
      illumination = Math.round(50 - (cycleFraction - 0.75) * 200);
      influence = {
        en: 'Rest, spiritual surrender, dream meditation, and resting before the new cycle.',
        my: 'အနားယူခြင်း၊ စိတ်ကို လျှော့ချခြင်းနှင့် သံသရာစက်ဝန်းသစ် မစမီ အားမွေးချိန်။',
        ja: '深い休息と瞑想、次のサイクルに向けた静かな回復の時。'
      };
    }

    // Determine current Astrological Sun Season
    const month = now.getMonth() + 1;
    const day = now.getDate();

    let season = { en: 'Leo Season (Fire)', my: 'သိဟ်ရာသီခွင်ကာလ (မီးဓာတ်)', ja: '獅子座の季節（火）' };
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
}
