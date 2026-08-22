import { DrawnCard, Language, SpreadDefinition, DeepAnalysisResult, TarotCard } from '../types/tarot';
import { UserProfile } from '../types/userProfile';
import { AstrologyService } from './astrologyService';

const SUIT_REALM = {
  cups: {
    en: "the heart — feelings, bonds, and the people who move you",
    my: "နှလုံးသားနှင့် စိတ်ခံစားမှုနယ်ပယ် — သံယောဇဉ်၊ ချစ်ခြင်းမေတ္တာနှင့် မိမိစိတ်ကို လှုပ်ရှားစေသော လူပုဂ္ဂိုလ်များ",
    ja: "心の領域 — 感情、愛の絆、そしてあなたの魂を動かす人々"
  },
  pentacles: {
    en: "the material world — money, work, health, and physical security",
    my: "ရုပ်ဝတ္ထုလောကနယ်ပယ် — ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် လက်တွေ့ဘဝ တည်ငြိမ်မှု",
    ja: "物質世界の領域 — 金銭、仕事、健康、そして現実的な基盤"
  },
  swords: {
    en: "the mind — worries, truths, thoughts, and mental battles",
    my: "စိတ်အတွေးနှင့် အသိဉာဏ်နယ်ပယ် — စိုးရိမ်သောကများ၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် စိတ်တွင်းတိုက်ပွဲများ",
    ja: "知性と精神の領域 — 思考、真実の探求、コミュニケーション、そして心の葛藤"
  },
  wands: {
    en: "the spirit — passion, ambition, creativity, and inner drive",
    my: "စိတ်ဓာတ်စွမ်းအားနယ်ပယ် — စိတ်အားထက်သန်မှု၊ ရည်မှန်းချက်၊ တီထွင်ဖန်တီးနိုင်စွမ်းနှင့် မဆုတ်မနစ်သော တွန်းအား",
    ja: "情熱と魂の領域 — 意欲、野心、創造性、そして行動への不屈のエネルギー"
  }
};

const TEMPO_DATA = {
  wands: {
    en: ["days", "within days to two weeks", "fast-moving fire"],
    my: ["ရက်ပိုင်းအတွင်း", "ရက်ပိုင်းမှ ၂ ပတ်အတွင်း", "မီးဓာတ်၏ လျင်မြန်သော အရှိန်အဟုန်"],
    ja: ["数日", "数日から2週間以内", "急速に燃え盛る火のエネルギー"]
  },
  swords: {
    en: ["days–weeks", "within one to three weeks", "quick but sharp"],
    my: ["ရက်ပိုင်းမှ ရက်သတ္တပတ်ပိုင်း", "၁ ပတ်မှ ၃ ပတ်အတွင်း", "လေဓာတ်၏ ထက်မြက်ပြတ်သားသော အရှိန်"],
    ja: ["数日から数週間", "1〜3週間以内", "鋭利で速い風のエネルギー"]
  },
  cups: {
    en: ["weeks–months", "over the coming weeks to a few months", "flowing at the heart's pace"],
    my: ["ရက်သတ္တပတ်မှ လပိုင်း", "လာမည့် ရက်သတ္တပတ်ပိုင်းမှ လအနည်းငယ်အတွင်း", "ရေဓာတ်၏ နှလုံးသားစီးဆင်းမှုနှုန်း"],
    ja: ["数週間から数ヶ月", "今後数週間から2〜3ヶ月の間", "心のリズムに寄り添う水の流れ"]
  },
  pentacles: {
    en: ["months", "over several months — patience is the price", "slow, solid earth"],
    my: ["လပေါင်းများစွာ", "လအနည်းငယ်ကြာမြင့်နိုင်ပြီး သည်းခံတည်ငြိမ်မှု လိုအပ်သည်", "မြေဓာတ်၏ ခိုင်မာဖြည်းညင်းသော အရှိန်"],
    ja: ["数ヶ月以上", "数ヶ月にわたる着実な歩み（忍耐が必要）", "重厚で確実な地のエネルギー"]
  }
};

const NUM_TIMING = {
  1: {
    en: "a door opens almost immediately",
    my: "တံခါးတစ်ချပ်သည် ချက်ချင်းနီးပါး ပွင့်သွားလိမ့်မည်",
    ja: "新たな扉がほとんど瞬時に開かれます"
  },
  2: {
    en: "a short wait while a choice or duality forms",
    my: "ရွေးချယ်စရာ ပေါ်ပေါက်လာရန် အချိန်တိုအတွင်း စောင့်ဆိုင်းရမည်",
    ja: "選択肢が明確になるまでのわずかな待機期間"
  },
  3: {
    en: "movement after initial seeds take firm root",
    my: "အစပျိုးထားသော အစေ့အဆန်များ အမြစ်တွယ်ပြီးနောက် တိုးတက်မှု စတင်မည်",
    ja: "蒔かれた種が根を張り、目に見える動きが始まります"
  },
  4: {
    en: "a pause or plateau to consolidate before progress resumes",
    my: "ရှေ့မဆက်မီ အခြေခံခိုင်မာအောင် ခေတ္တရပ်နားမည့် ကာလ",
    ja: "前進を再開する前に、足元を固めるための静かな休止"
  },
  5: {
    en: "sudden shift or testing arrives to break routine",
    my: "ပုံမှန်အခြေအနေကို ချိုးဖျက်မည့် ရုတ်တရက် အပြောင်းအလဲနှင့် စမ်းသပ်မှု ရောက်လာမည်",
    ja: "日常を揺さぶる急激な変化と試練の到来"
  },
  6: {
    en: "relief and harmony arrive through another person's hand",
    my: "အခြားသူတစ်ဦး၏ ကူညီမှုဖြင့် သက်သာရာရပြီး သဟဇာတဖြစ်မှု ရောက်လာမည်",
    ja: "他者の救いの手を通じて、安堵と調和が訪れます"
  },
  7: {
    en: "delays and testing stretch the timeline for reassessment",
    my: "ပြန်လည်သုံးသပ်ရန်အတွက် အချိန်ကာလ အနည်းငယ် ကြန့်ကြာစမ်းသပ်မည်",
    ja: "再評価のための試練と、時間の引き延ばし"
  },
  8: {
    en: "things accelerate sharply — messages and rapid motion",
    my: "အရာအားလုံး အလွန်လျင်မြန်စွာ အရှိန်ရလာမည် — သတင်းစကားများနှင့် လှုပ်ရှားမှုများ",
    ja: "急激な加速 — 迅速な連絡と激しい展開"
  },
  9: {
    en: "you are in the final stretch already — fruition is close",
    my: "နောက်ဆုံးအဆင့်သို့ ရောက်ရှိနေပြီဖြစ်၍ အသီးအပွင့်ရရှိရန် နီးကပ်နေပြီ",
    ja: "すでに最終段階に入っています — 実りは目前です"
  },
  10: {
    en: "culmination and definitive closure are imminent",
    my: "ပြည့်မြောက်ခြင်းနှင့် တိကျသောအဆုံးသတ် ရလဒ်သည် အလွန်နီးကပ်နေပြီ",
    ja: "大いなる完結と確固たる結果が目前に迫っています"
  }
};

export function getPositionContextualMeaning(
  positionName: string,
  card: TarotCard,
  isReversed: boolean,
  lang: Language,
  userProfile?: UserProfile | null,
  partnerProfile?: UserProfile | null
): string {
  const kw = isReversed ? card.reversedKeywords[lang][0] : card.uprightKeywords[lang][0];
  const cName = card.name[lang];
  const qName = userProfile?.name || (lang === 'my' ? 'သင်' : lang === 'ja' ? 'あなた' : 'you');
  const pName = partnerProfile?.name || (lang === 'my' ? 'သူ/သူမ' : lang === 'ja' ? 'お相手' : 'they');
  const pSign = partnerProfile?.zodiacSign ? ` (${partnerProfile.zodiacSign.name[lang]})` : '';
  const uSign = userProfile?.zodiacSign ? ` (${userProfile.zodiacSign.name[lang]})` : '';

  if (lang === 'my') {
    switch (positionName) {
      case 'The Answer':
      case 'ကံကြမ္မာ၏ အဖြေ':
        return `အဓိက နိမိတ်အဖြစ် ${cName} က အခြေအနေ၏ အနှစ်သာရသည် "${kw}" ဖြစ်ကြောင်း ညွှန်ပြနေပါသည်။`;
      case 'Past':
      case 'အတိတ်အခြေခံ':
        return `"${kw}" သည် အတိတ်ကာလကို ပုံဖော်ခဲ့ပြီး ယနေ့ ရွေးချယ်မှုများအပေါ် ဆက်လက် သက်ရောက်နေပါသည်။`;
      case 'Present':
      case 'ပစ္စုပ္ပန်အခြေအနေ':
        return `ယခုအချိန်တွင် "${kw}" သည် သင် လက်ရှိ ရပ်တည်နေသော အခြေခံအုတ်မြစ် ဖြစ်ပါသည်။`;
      case 'Future':
      case 'အနာဂတ်လားရာ':
        return `ဤလမ်းအတိုင်း ဆက်သွားပါက "${kw}" သည် မနက်ဖြန်တွင် အသီးအပွင့်အဖြစ် ပေါ်ထွန်းလာမည် ဖြစ်ပါသည်။`;
      case 'The Situation':
      case 'အဓိက အခြေအနေ':
        return `ကိစ္စရပ်၏ အဓိက အနှစ်သာရမှာ "${kw}" ဖြစ်ပါသည်။`;
      case 'The Obstacle':
      case 'တားဆီးနေသော အတားအဆီး':
        return `ရှေ့သို့ မတိုးနိုင်အောင် ပိတ်ပင်နေသောအရာမှာ "${kw}" ဖြစ်သည် — ၎င်းကို သတိပြုမိသည်နှင့် အခက်အခဲ၏ ထက်ဝက်ကျော် ပြေလည်သွားပါလိမ့်မည်။`;
      case 'The Advice':
      case 'လုပ်ဆောင်ရန် အကြံပြုချက်':
        return `ကတ်ပြားများက "${kw}" ကို လက်ကိုင်ထားရန် အကြံပြုထားသည်။ ဤသည်မှာ အခက်အခဲကို ကျော်လွှားမည့် သော့ချက်ဖြစ်ပါသည်။`;
      case 'The Hidden Force':
      case 'မမြင်ရသော လျှို့ဝှက်စွမ်းအား':
        return `မျက်နှာပြင်အောက်တွင် "${kw}" က မသိမသာ တွန်းအားပေး စွမ်းအင်ဖြည့်ဆည်းနေပါသည်။`;
      case 'The Outcome':
      case 'နောက်ဆုံးရလဒ်':
        return `လက်ရှိ အခြေအနေ ဆက်လက်စီးဆင်းပါက "${kw}" က နောက်ဆုံးရလဒ်ကို ပုံဖော်ပါလိမ့်မည်။`;
      case 'You':
      case 'သင့်ဘက်မှ စွမ်းအင်':
        return `${qName}${uSign} သည် "${kw}" စွမ်းအင်ဖြင့် ဤဆက်ဆံရေးထဲသို့ ဝင်ရောက်လာခြင်း ဖြစ်ပါသည်။`;
      case 'Them':
      case 'သူ့ဘက်မှ စွမ်းအင်':
        return `${pName}${pSign} သည် "${kw}" စိတ်ခံစားချက်နှင့် အတွင်းစိတ်သဘောထားကို သယ်ဆောင်လာပါသည်။`;
      case 'The Bond':
      case 'နှစ်ဦးကြား သံယောဇဉ်':
        return `${qName} နှင့် ${pName} ကြားတွင် "${kw}" စီးဆင်းနေပြီး ၎င်းသည် ဆက်ဆံရေး၏ အစစ်အမှန် အရောင်အသွေး ဖြစ်ပါသည်။`;
      case 'The Challenge':
      case 'ရင်ဆိုင်ရမည့် စိန်ခေါ်မှု':
        return `နှစ်ဦးကြား ပွတ်တိုက်မှု အချက်မှာ "${kw}" ဖြစ်ပြီး ၎င်းသည် နှစ်ဦးစလုံး၏ နားလည်မှုကို စမ်းသပ်ပါလိမ့်မည်။`;
      case 'The Path Forward':
      case 'ရှေ့ဆက်ရမည့် လမ်းကြောင်း':
        return `"${kw}" ကို ဖြတ်သန်း၍ ရှေ့သို့ လှမ်းချီပါ — ဤသည်မှာ ဇာတ်လမ်း ဆက်လက်ရွေ့လျားမည့် လမ်းကြောင်းဖြစ်ပါသည်။`;
      default:
        return `ဤနေရာတွင် "${kw}" အဖြစ် အဓိပ္ပာယ်သက်ရောက်ပါသည်။`;
    }
  }

  if (lang === 'ja') {
    switch (positionName) {
      case 'The Answer':
      case '運命の答え':
        return `単一の啓示として、【${cName}】はあなたの状況の本質が「${kw}」にあると告げています。`;
      case 'Past':
      case '過去の要因':
        return `「${kw}」があなたの過去を形作り、その余韻が今日の選択にも影響を与えています。`;
      case 'Present':
      case '現在の状況':
        return `今この瞬間、「${kw}」があなたの立つ足元と現実を決定づけています。`;
      case 'Future':
      case '未来の展望':
        return `このまま進めば、「${kw}」が明日を形作る決定的な要素となるでしょう。`;
      case 'The Situation':
      case '現状の本質':
        return `問題の核心にあるエネルギーは「${kw}」です。`;
      case 'The Obstacle':
      case '直面する障害':
        return `あなたを阻んでいる壁は「${kw}」です — その正体を直視して認識することで、障害の力は半減します。`;
      case 'The Advice':
      case '導きの助言':
        return `カードは「${kw}」を行動指针とするよう助言しています。これがあなたの最大の突破口です。`;
      case 'The Hidden Force':
      case '水面下の潜在力':
        return `水面下で静かに、「${kw}」の力が出来事の舵を取っています。`;
      case 'The Outcome':
      case '最終的な結果':
        return `現在の流れが保たれれば、「${kw}」が最終的な結末を決定づけるでしょう。`;
      case 'You':
      case 'あなたの心境':
        return `【${qName}様${uSign}】は「${kw}」のエネルギーを抱いて、この絆に向き合っています。`;
      case 'Them':
      case '相手の心境':
        return `【${pName}様${pSign}】は「${kw}」という心象風景をこの関係に持ち込んでいます。`;
      case 'The Bond':
      case '二人の絆の本質':
        return `【${qName}様】と【${pName}様】の間には「${kw}」が流れており、これがこの繋がりの本物の質感です。`;
      case 'The Challenge':
      case '乗り越えるべき試練':
        return `二人が直面する摩擦の根源は「${kw}」であり、互いの器が試されています。`;
      case 'The Path Forward':
      case '未来へ続く道':
        return `「${kw}」の精神を持って歩んでください。そこから新たな物語が動き出します。`;
      default:
        return `この位置において、「${kw}」のメッセージを伝えています。`;
    }
  }

  // English fallback
  switch (positionName) {
    case 'The Answer':
      return `as a lone signal, ${cName} says the essence of your situation is ${kw.toLowerCase()}.`;
    case 'Past':
      return `${kw.toLowerCase()} shaped where you've been; its echo still colors today's choices.`;
    case 'Present':
      return `right now, ${kw.toLowerCase()} defines the ground you stand on.`;
    case 'Future':
      return `carried forward, ${kw.toLowerCase()} is what tomorrow is made of.`;
    case 'The Situation':
      return `the heart of the matter is ${kw.toLowerCase()}.`;
    case 'The Obstacle':
      return `what blocks you is ${kw.toLowerCase()} — name it and it loses half its power.`;
    case 'The Advice':
      return `the cards counsel ${kw.toLowerCase()}. This is your lever.`;
    case 'The Hidden Force':
      return `beneath the surface, ${kw.toLowerCase()} quietly steers events.`;
    case 'The Outcome':
      return `if the current holds, expect ${kw.toLowerCase()} to define the result.`;
    case 'You':
      return `${qName}${uSign} arrives carrying ${kw.toLowerCase()} into this connection.`;
    case 'Them':
      return `${pName}${pSign} comes with ${kw.toLowerCase()} — this is what they bring into the bond.`;
    case 'The Bond':
      return `between ${qName} and ${pName} flows ${kw.toLowerCase()} — the true texture of the connection.`;
    case 'The Challenge':
      return `the friction point is ${kw.toLowerCase()}. It will test you both.`;
    case 'The Path Forward':
      return `walk ahead through ${kw.toLowerCase()}; this is how the story moves.`;
    default:
      return `its message here is ${kw.toLowerCase()}.`;
  }
}

export function analyzeReading(
  topic: string,
  drawnCards: DrawnCard[],
  spread: SpreadDefinition,
  lang: Language,
  userProfile?: UserProfile | null,
  partnerProfile?: UserProfile | null
): DeepAnalysisResult {
  const cards = drawnCards.map(d => ({
    ...d.card,
    isReversed: d.isReversed,
    posName: d.position.name[lang],
    kw: d.isReversed ? d.card.reversedKeywords[lang][0] : d.card.uprightKeywords[lang][0]
  }));

  const majors = cards.filter(c => c.arcana === 'major');
  const reversed = cards.filter(c => c.isReversed);

  // Calculate suit distribution
  const suitsCount: Record<string, typeof cards> = {};
  cards.forEach(c => {
    if (c.arcana === 'minor' && c.suit !== 'none') {
      suitsCount[c.suit] = suitsCount[c.suit] || [];
      suitsCount[c.suit].push(c);
    }
  });

  const sortedSuits = Object.entries(suitsCount).sort((a, b) => b[1].length - a[1].length);
  const topSuitEntry = sortedSuits[0];
  const topSuitKey = topSuitEntry ? (topSuitEntry[0] as 'cups' | 'pentacles' | 'swords' | 'wands') : null;

  const querentName = userProfile?.name || '';
  const zodiac = userProfile?.zodiacSign;
  const lifePath = userProfile?.lifePathNumber;

  const partnerName = partnerProfile?.name || '';
  const partnerZodiac = partnerProfile?.zodiacSign;
  const synastry = userProfile && partnerProfile ? AstrologyService.calculateSynastry(userProfile, partnerProfile, lang) : null;

  // Detect domain category
  const topicLower = (topic || '').toLowerCase();
  const domain: 'love' | 'career' | 'fortune' | 'growth' | 'decision' | 'general' =
    topicLower.includes('love') || topicLower.includes('heart') || topicLower.includes('relationship') || topicLower.includes('အချစ်') || topicLower.includes('ချစ်ခြင်း') || topicLower.includes('恋愛') || topicLower.includes('愛') || Boolean(partnerProfile)
      ? 'love'
      : topicLower.includes('career') || topicLower.includes('purpose') || topicLower.includes('work') || topicLower.includes('အလုပ်') || topicLower.includes('ဘဝလမ်းကြောင်း') || topicLower.includes('仕事') || topicLower.includes('キャリア')
      ? 'career'
      : topicLower.includes('money') || topicLower.includes('abundance') || topicLower.includes('fortune') || topicLower.includes('wealth') || topicLower.includes('ငွေကြေး') || topicLower.includes('စီးပွား') || topicLower.includes('金運') || topicLower.includes('富')
      ? 'fortune'
      : topicLower.includes('growth') || topicLower.includes('personal') || topicLower.includes('spiritual') || topicLower.includes('တိုးတက်') || topicLower.includes('စိတ်ခွန်အား') || topicLower.includes('自己探求') || topicLower.includes('成長')
      ? 'growth'
      : topicLower.includes('decision') || topicLower.includes('crossroad') || topicLower.includes('choice') || topicLower.includes('ဆုံးဖြတ်') || topicLower.includes('လမ်းဆုံ') || topicLower.includes('決断') || topicLower.includes('選択')
      ? 'decision'
      : 'general';

  const domainLabels = {
    love: {
      en: partnerName ? `Sacred Synastry & Connection with ${partnerName}` : 'Heart, Romance & Sacred Relationships',
      my: partnerName ? `${partnerName} နှင့် စိတ်ဝိညာဉ် ဇာတာခွင် ဆက်နွှယ်မှု` : 'နှလုံးသား၊ အချစ်ရေးနှင့် သံယောဇဉ်ဆက်ဆံရေး',
      ja: partnerName ? `【${partnerName}様】との神聖なシナストリーと絆` : '愛・パートナーシップ・魂の絆'
    },
    career: {
      en: 'Career, Vocation & Soul Ambition',
      my: 'အလုပ်အကိုင်၊ ဂုဏ်သိက္ခာနှင့် ဘဝရည်မှန်းချက်',
      ja: 'キャリア・天職・自己実現'
    },
    fortune: {
      en: 'Prosperity, Wealth & Material Flow',
      my: 'ဥစ္စာဓန၊ စီးပွားရေးနှင့် ရုပ်ဝတ္ထုစီးဆင်းမှု',
      ja: '金運・豊かさ・物質的繁栄'
    },
    growth: {
      en: 'Spiritual Awakening & Inner Healing',
      my: 'စိတ်ဝိညာဉ်နိုးကြားမှုနှင့် အတွင်းစိတ်ကုစားခြင်း',
      ja: '自己変容・魂の癒やし・精神的覚醒'
    },
    decision: {
      en: 'Crossroads & Strategic Destiny Choices',
      my: 'လမ်းဆုံလမ်းခွနှင့် မဟာဗျူဟာမြောက် ရွေးချယ်မှု',
      ja: '運命の岐路・二者択一の重大決断'
    },
    general: {
      en: 'Cosmic Wisdom & The Sacred Unknown',
      my: 'စကြဝဠာဉာဏ်ပညာနှင့် မသိသောကံကြမ္မာနိမိတ်',
      ja: '大いなる宇宙の叡智・未知なる神託'
    }
  };

  /* ================= 1. MIND SECTION ================= */
  let mind = '';
  if (lang === 'my') {
    const parts: string[] = [];
    if (partnerName && synastry) {
      parts.push(`${querentName ? querentName : 'သင်'} (${zodiac ? zodiac.name.my : ''}) နှင့် ${partnerName} (${partnerZodiac ? partnerZodiac.name.my : ''}) တို့၏ **${domainLabels[domain].my}** အတွက် —`);
      parts.push(`နက္ခတ်ဗေဒ သဟဇာတအရ "${synastry.elementalChemistry.my}" စွမ်းအင် စီးဆင်းနေပြီး`);
    } else if (querentName) {
      parts.push(`${querentName} ၏ **${domainLabels[domain].my}** ကဏ္ဍအတွက် —`);
    } else {
      parts.push(`**${domainLabels[domain].my}** နှင့် ပတ်သက်သော ကံကြမ္မာခရီးတွင် —`);
    }
    if (!partnerName && zodiac) {
      parts.push(`မွေးရာပါ ${zodiac.name.my} (${zodiac.element} ဓာတ်) ၏ စရိုက်သဘာဝနှင့် ပေါင်းစပ်ချိန်ညှိကြည့်ပါက`);
    }
    if (topSuitKey) {
      parts.push(`လက်ရှိ စိတ်အာရုံသည် ${SUIT_REALM[topSuitKey].my} ပေါ်တွင် အဓိက သက်ရောက်လွှမ်းမိုးနေပါသည် (${topSuitEntry[1].length} ကတ်အထိ ဤဓာတ်သဘာဝ ကျရောက်နေသောကြောင့် ဖြစ်ပါသည်)။`);
    }
    if (domain === 'love') {
      if (partnerName) {
        parts.push(`နှစ်ဦးကြားတွင် ခံစားချက်ဖလှယ်မှု၊ အပြန်အလှန်နားလည်မှုနှင့် သံယောဇဉ်ခိုင်မာစေရေးတို့သည် အဓိက အာရုံစူးစိုက်ရာ ဖြစ်နေပါသည်။`);
      } else {
        parts.push(`နှလုံးသားနယ်ပယ်တွင် မိမိ၏ စိတ်ခံစားမှု၊ နွေးထွေးမှုနှင့် နားလည်မှုမျှဝေနိုင်စွမ်းတို့မှာ အလွန်ပင် ထိလွယ်ရှလွယ် ဖြစ်နေပြီး အတွင်းစိတ်၏ စစ်မှန်သော ဆန္ဒကို ရှာဖွေနေချိန် ဖြစ်ပါသည်။`);
      }
    } else if (domain === 'career') {
      parts.push(`အလုပ်အကိုင်နယ်ပယ်တွင် မိမိ၏ ကျွမ်းကျင်မှု၊ အသိအမှတ်ပြုခံရမှုနှင့် ရှေ့ဆက်တိုးတက်လိုသော ရည်မှန်းချက်တို့က အတွင်းစိတ်ကို အားမာန်အပြည့် လှုံ့ဆော်ပေးနေပါသည်။`);
    } else if (domain === 'fortune') {
      parts.push(`ငွေကြေးစီးပွားနယ်ပယ်တွင် ရေရှည်တည်ငြိမ်မှုနှင့် အခွင့်အလမ်းသစ်များကို ဖမ်းဆုပ်ရန်အတွက် စိတ်ပိုင်းဖြတ်မှုများ ရှိနေပါသည်။`);
    } else if (domain === 'decision') {
      parts.push(`ရွေးချယ်မှုပြုလုပ်ရာတွင် စိတ်နှစ်ခွဖြစ်နေမှုများကို ကျော်လွန်၍ ဉာဏ်ပညာရှိသော လမ်းကြောင်းမှန်ကို ဆုံးဖြတ်ရန် စိတ်အားထက်သန်နေပါသည်။`);
    }
    if (majors.length >= Math.ceil(cards.length / 2)) {
      parts.push(`မဟာကံကြမ္မာကတ်ကြီးများ (Major Arcana) ${majors.length} ပြားအထိ ပါဝင်နေသဖြင့် ဤကိစ္စသည် သာမန်ကိစ္စမဟုတ်ဘဲ ဘဝ၏ ကြီးမားသော ကံကြမ္မာအလှည့်အပြောင်း ဖြစ်ကြောင်း ညွှန်ပြနေပါသည်။`);
    }
    if (reversed.length > 0) {
      const rNames = reversed.map(c => c.name.my).join('၊ ');
      parts.push(`ပြောင်းပြန်ကျဆင်းနေသော ${rNames} ကတ်များအရ စိတ်ထဲတွင် သံသယဖြစ်နေခြင်း သို့မဟုတ် မသိမသာ တွန့်ဆုတ်နေမှုများကို သတိပြုမိစေပါသည်။`);
    }
    mind = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (partnerName && synastry) {
      parts.push(`【${querentName || 'あなた'}様（${zodiac ? zodiac.name.ja : ''}）】と【${partnerName}様（${partnerZodiac ? partnerZodiac.name.ja : ''}）】の${domainLabels[domain].ja}において —`);
      parts.push(`天体シナストリー分析によると、【${synastry.elementalChemistry.ja}】が働いています。`);
    } else if (querentName) {
      parts.push(`【${querentName}様の「${domainLabels[domain].ja}」における探求路】`);
    } else {
      parts.push(`【${domainLabels[domain].ja}の領域において】`);
    }
    if (!partnerName && zodiac) {
      parts.push(`生まれ持つ${zodiac.name.ja}（${zodiac.element}のエレメント）の資質と共鳴し、`);
    }
    if (topSuitKey) {
      parts.push(`あなたの意識のアンテナは現在、【${SUIT_REALM[topSuitKey].ja}】に深くチューニングされています（展開されたカードのうち${topSuitEntry[1].length}枚がこのスートに属しています）。`);
    }
    if (domain === 'love') {
      parts.push(`愛と人間関係において、魂の純粋な共鳴と真実の理解を求める強いエネルギーが働いています。`);
    } else if (domain === 'career') {
      parts.push(`キャリアと天職において、あなたの内なる才能を開花させ、確固たる価値を築く好機が訪れています。`);
    } else if (domain === 'fortune') {
      parts.push(`豊かさの循環において、過去の不安を手放し、新たな繁栄の基盤を受け入れる準備が整いつつあります。`);
    } else if (domain === 'decision') {
      parts.push(`重要な岐路において、恐れからの選択ではなく、魂の成長を促す真の道を見極めようとしています。`);
    }
    if (majors.length >= Math.ceil(cards.length / 2)) {
      parts.push(`大アルカナが${majors.length}枚も現れていることから、これは単なる日常の出来事ではなく、魂の宿命に関わる重大な転換点です。`);
    }
    if (reversed.length > 0) {
      const rNames = reversed.map(c => c.name.ja).join('、');
      parts.push(`逆位置で現れた【${rNames}】は、無意識の抵抗や手放すべき執着を優しく浮き彫りにしています。`);
    }
    mind = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (partnerName && synastry) {
      parts.push(`For ${querentName || 'Querent'} (${zodiac?.name.en}) and ${partnerName} (${partnerZodiac?.name.en}) exploring **${domainLabels[domain].en}**:`);
      parts.push(`Synastry reveals **${synastry.elementalChemistry.en}**.`);
    } else if (querentName) {
      parts.push(`For ${querentName}'s inquiry into **${domainLabels[domain].en}**:`);
    } else {
      parts.push(`Tuned to the sphere of **${domainLabels[domain].en}**:`);
    }
    if (!partnerName && zodiac) {
      parts.push(`interfacing with your natal ${zodiac.name.en} (${zodiac.element} element),`);
    }
    if (topSuitKey) {
      parts.push(`your focus is firmly anchored in ${SUIT_REALM[topSuitKey].en} — ${topSuitEntry[1].length} cards emphasize this domain.`);
    }
    if (domain === 'love') {
      parts.push(`In the heart realm, authentic emotional connection, open vulnerability, and mutual reciprocity are seeking alignment.`);
    } else if (domain === 'career') {
      parts.push(`In your professional sphere, ambition, leadership, and aligning daily work with your higher purpose are demanding expression.`);
    } else if (domain === 'fortune') {
      parts.push(`In material matters, building sustainable foundation and shifting into an expansive abundance mindset are paramount.`);
    } else if (domain === 'decision') {
      parts.push(`At this crossroads, moving beyond fear-based hesitation into clear intuitive alignment will unveil the true path.`);
    }
    if (majors.length >= Math.ceil(cards.length / 2)) {
      parts.push(`With ${majors.length} Major Arcana in play, profound currents of destiny and pivotal soul lessons are at work.`);
    }
    if (reversed.length > 0) {
      const rNames = reversed.map(c => c.name.en).join(', ');
      parts.push(`The reversed cards (${rNames}) highlight inner friction or self-doubt that you are invited to heal.`);
    }
    mind = parts.join(' ');
  }

  /* ================= 2. PROBLEMS SECTION ================= */
  let problems = '';
  const obstacleCard = cards.find(c =>
    c.posName.includes('Obstacle') ||
    c.posName.includes('Challenge') ||
    c.posName.includes('အတားအဆီး') ||
    c.posName.includes('စိန်ခေါ်မှု') ||
    c.posName.includes('障害') ||
    c.posName.includes('試練')
  );

  const intenseCards = cards.filter(c => /Tower|Devil|Death|Moon|Five|Seven|မျှော်စင်|မာရ်နတ်|သေခြင်းတရား|လမင်း|塔|悪魔|死神|月/i.test(c.file + c.name.en + c.name.my + c.name.ja));

  if (lang === 'my') {
    const parts: string[] = [];
    if (obstacleCard) {
      parts.push(`ဤ **${domainLabels[domain].my}** ခရီးစဉ်တွင် အဓိက ရင်ဆိုင်ရမည့် အတားအဆီးမှာ **${obstacleCard.name.my}${obstacleCard.isReversed ? ' (ပြောင်းပြန်)' : ''}** ဖြစ်ပြီး "${obstacleCard.kw}" ကြောင့် ရှေ့သို့ တိုးရန် နှောင့်နှေးမှုများ ဖြစ်ပေါ်နေရပါသည်။`);
    }
    if (partnerName && synastry) {
      parts.push(`နှစ်ဦးကြား ဓာတ်သဟဇာတ စိစစ်ချက်အရ (${synastry.compatibilityScore}% သဟဇာတရှိမှု): ${synastry.dynamicVerdict.my}`);
    } else if (domain === 'love') {
      parts.push(`အချစ်ရေးနှင့် ပတ်သက်၍ အဓိက သတိပြုရမည့် အချက်မှာ နားလည်မှုလွဲမှားခြင်း၊ မျှော်လင့်ချက်များလွန်းခြင်း သို့မဟုတ် စိတ်ခံစားချက်ကို ပွင့်လင်းစွာ မဖော်ပြနိုင်ခြင်းတို့ ဖြစ်နိုင်ပါသည်။`);
    } else if (domain === 'career') {
      parts.push(`အလုပ်အကိုင်တွင် အဓိက စိန်ခေါ်မှုမှာ လုပ်ငန်းခွင်ဖိအားများ၊ ဦးတည်ချက်မရှင်းလင်းခြင်း သို့မဟုတ် အပြောင်းအလဲကို စိုးရိမ်နေခြင်းတို့ ဖြစ်နိုင်ပါသည်။`);
    } else if (domain === 'fortune') {
      parts.push(`ငွေကြေးကိစ္စတွင် မလိုအပ်သော အသုံးစရိတ်များ၊ ဇဝေဇဝါဖြစ်ဖွယ် ရင်းနှီးမြှုပ်နှံမှုများ သို့မဟုတ် တွန့်တိုစိုးရိမ်စိတ်များကို သတိပြုသင့်ပါသည်။`);
    } else if (domain === 'decision') {
      parts.push(`ဆုံးဖြတ်ချက်တွင် အဓိက အဟန့်အတားမှာ မဆုံးဖြတ်နိုင်ဘဲ အချိန်ဆွဲနေခြင်း သို့မဟုတ် သူတပါး၏ သဘောထားကို အလွန်အမင်း အလေးထားမိနေခြင်း ဖြစ်ပါသည်။`);
    }
    if (intenseCards.length > 0) {
      parts.push(`${intenseCards.map(c => c.name.my).join('၊ ')} ကဲ့သို့သော ကတ်များက မကြာသေးမီက ကြုံတွေ့ခဲ့ရသော အပြောင်းအလဲ မုန်တိုင်းများကို ညွှန်ပြနေပါသည်။`);
    }
    problems = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (obstacleCard) {
      parts.push(`【${domainLabels[domain].ja}】における最大の障壁は、**【${obstacleCard.name.ja}${obstacleCard.isReversed ? '（逆位置）' : ''}】**、すなわち「${obstacleCard.kw}」のエネルギーです。`);
    }
    if (partnerName && synastry) {
      parts.push(`シナストリー相性分析（調和度 ${synastry.compatibilityScore}%）：${synastry.dynamicVerdict.ja}`);
    } else if (domain === 'love') {
      parts.push(`愛の領域では、言葉にできない誤解や過去の傷から来る防衛心が、相手との距離感を生んでいる可能性があります。`);
    } else if (domain === 'career') {
      parts.push(`仕事面では、多忙によるエネルギーの分散や、周囲の期待に振り回されることが前進を阻む要因となっています。`);
    } else if (domain === 'fortune') {
      parts.push(`金銭面では、衝動的な判断や「足りない」という欠乏の恐れが、豊かさの循環を一時的に停滞させています。`);
    } else if (domain === 'decision') {
      parts.push(`決断においては、完璧を求めすぎるあまり選択を先延ばしにしてしまう心理的ブレーキが課題です。`);
    }
    if (intenseCards.length > 0) {
      parts.push(`【${intenseCards.map(c => c.name.ja).join('、')}】は、最近のストレスや変革期に伴う摩擦を物語っています。`);
    }
    problems = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (obstacleCard) {
      parts.push(`In your journey through **${domainLabels[domain].en}**, the focal obstacle is **${obstacleCard.name.en}${obstacleCard.isReversed ? ' (reversed)' : ''}** — ${obstacleCard.kw.toLowerCase()}.`);
    }
    if (partnerName && synastry) {
      parts.push(`Astrological Synastry Analysis (${synastry.compatibilityScore}% Harmony Index): ${synastry.dynamicVerdict.en}`);
    } else if (domain === 'love') {
      parts.push(`In relationships, the friction stems from unspoken assumptions, emotional guardedness, or projecting past wounds onto present dynamics.`);
    } else if (domain === 'career') {
      parts.push(`Professionally, the barrier lies in scattered focus, workplace friction, or holding back from claiming your authority.`);
    } else if (domain === 'fortune') {
      parts.push(`Financially, scarcity fears, hesitation to invest wisely, or unclear boundaries regarding resources form the current bottleneck.`);
    } else if (domain === 'decision') {
      parts.push(`Regarding your decision, overanalyzing edge cases and fearing mistakes is delaying necessary movement.`);
    }
    if (intenseCards.length > 0) {
      parts.push(`Cards like ${intenseCards.map(c => c.name.en).join(', ')} echo recent turbulence in this area.`);
    }
    problems = parts.join(' ');
  }

  /* ================= 3. HIDDEN FORCES SECTION ================= */
  let forces = '';
  const hiddenCard = cards.find(c =>
    c.posName.includes('Hidden') ||
    c.posName.includes('လျှို့ဝှက်') ||
    c.posName.includes('潜在')
  ) || (majors.length ? majors[majors.length - 1] : cards[cards.length - 1]);

  if (lang === 'my') {
    const parts: string[] = [];
    if (hiddenCard) {
      parts.push(`မျက်နှာပြင်အောက်တွင် **${hiddenCard.name.my}${hiddenCard.isReversed ? ' (ပြောင်းပြန်)' : ''}** က "${hiddenCard.kw}" အဖြစ် **${domainLabels[domain].my}** ကဏ္ဍအတွက် တိတ်တဆိတ် စွမ်းအင်စီးဆင်းပေးနေပါသည်။`);
    }
    if (partnerName && synastry) {
      parts.push(`နှစ်ဦးပေါင်းစပ် ကံကြမ္မာသင်္ကေတ (Composite Soul Nexus Key #${synastry.compositeLifePathNumber} ${synastry.compositeSoulCardName.my}) ၏ မသိစိတ်ဆွဲအားက နောက်ကွယ်မှ ဦးဆောင်ပေးနေပါသည်။`);
    } else if (topSuitKey === 'swords') {
      parts.push(`ဓားကတ်များ များနေခြင်းက အတွေးလွန်ခြင်းသည် လက်တွေ့ထက် ပိုမိုပြင်းထန်သော စိတ်ဖိစီးမှုကို ဖြစ်စေနိုင်ကြောင်း သတိပေးနေပါသည်။`);
    } else if (topSuitKey === 'cups') {
      parts.push(`ဖလားကတ်များ အားကောင်းနေခြင်းက နက်ရှိုင်းသော မေတ္တာနှင့် အတွင်းစိတ်ခံစားချက်များက နောက်ကွယ်မှ အဓိက တွန်းအားပေးနေကြောင်း ပြသနေပါသည်။`);
    } else if (topSuitKey === 'wands') {
      parts.push(`မီးဓာတ်ကတ်များက မဆုတ်မနစ်သော စိတ်အားထက်သန်မှုစွမ်းအင် နောက်ကွယ်တွင် အပြည့်အဝ ရှိနေကြောင်း ဖော်ပြနေပါသည်။`);
    } else if (topSuitKey === 'pentacles') {
      parts.push(`မြေဓာတ်ကတ်များက ခိုင်မာသော အခြေခံအုတ်မြစ် တည်ဆောက်ရန် စကြဝဠာက အားပေးနေကြောင်း ပြသနေပါသည်။`);
    }
    forces = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (hiddenCard) {
      parts.push(`【${domainLabels[domain].ja}】の水面下において、**【${hiddenCard.name.ja}${hiddenCard.isReversed ? '（逆位置）' : ''}】**が「${hiddenCard.kw}」の神秘的な力として静かに働いています。`);
    }
    if (partnerName && synastry) {
      parts.push(`二人の複合ソウルナンバー【#${synastry.compositeLifePathNumber} ${synastry.compositeSoulCardName.ja}】の深層的引力が、見えない絆を宿命的に導いています。`);
    } else if (topSuitKey === 'swords') {
      parts.push(`思考の刃が鋭利になりすぎていないか、客観的な静寂を取り戻すことが促されています。`);
    } else if (topSuitKey === 'cups') {
      parts.push(`豊かな感情の泉が、魂と魂を繋ぐ見えない架け橋となっています。`);
    }
    forces = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (hiddenCard) {
      parts.push(`Operating beneath the surface of **${domainLabels[domain].en}**, **${hiddenCard.name.en}${hiddenCard.isReversed ? ' (reversed)' : ''}** channels the power of ${hiddenCard.kw.toLowerCase()}.`);
    }
    if (partnerName && synastry) {
      parts.push(`The Composite Soul Nexus Key (#${synastry.compositeLifePathNumber} ${synastry.compositeSoulCardName.en}) exerts a powerful subconscious gravitational pull over this bond.`);
    } else if (topSuitKey === 'swords') {
      parts.push(`Excess air/swords energy signals that overthinking itself has become an invisible force.`);
    } else if (topSuitKey === 'cups') {
      parts.push(`Deep water/cups currents ensure that authentic emotional truth will inevitably rise to the surface.`);
    }
    forces = parts.join(' ');
  }

  /* ================= 4. ADVICE SECTION ================= */
  let advice = '';
  const adviceCard = cards.find(c =>
    c.posName.includes('Advice') ||
    c.posName.includes('အကြံပြု') ||
    c.posName.includes('助言')
  );

  if (lang === 'my') {
    const parts: string[] = [];
    if (adviceCard) {
      parts.push(`ကတ်ပြားများ၏ တိုက်ရိုက် လမ်းညွှန်ချက်အရ **${adviceCard.name.my}** ကို အလေးထားပါ — "${adviceCard.kw}" ကို လက်ကိုင်ထား၍ **${domainLabels[domain].my}** အတွက် အောက်ပါအတိုင်း ဆောင်ရွက်ပါ:`);
    }
    if (partnerName && synastry) {
      parts.push(`ဆက်ဆံရေး ချိန်ညှိမှု လမ်းညွှန်ချက်: ${synastry.synastryAdvice.my}`);
    } else if (domain === 'love') {
      parts.push(`ချစ်ခြင်းမေတ္တာတွင် သံသယများကို ဘေးဖယ်၍ ပွင့်လင်းရိုးသားသော ဆက်သွယ်မှုကို တည်ဆောက်ပါ။ မိမိကိုယ်ကို ချစ်တတ်မှသာ တပါးသူကို အပြည့်အဝ ချစ်နိုင်ပါလိမ့်မည်။`);
    } else if (domain === 'career') {
      parts.push(`လုပ်ငန်းခွင်တွင် မိမိ၏ တန်ဖိုးကို ယုံကြည်ပြီး မဟာဗျူဟာကျကျ စီမံလုပ်ဆောင်ပါ။ စိတ်ရှည်သည်းခံမှုနှင့် စိတ်အားထက်သန်မှုကို ပေါင်းစပ်ပါ။`);
    } else if (domain === 'fortune') {
      parts.push(`စီးပွားဥစ္စာတွင် စနစ်တကျ ဘဏ္ဍာရေးစီမံခန့်ခွဲမှုကို အလေးပေးပြီး ရေရှည်အကျိုးရှိမည့် အခွင့်အလမ်းများကို စိစစ်ဖမ်းဆုပ်ပါ။`);
    } else if (domain === 'decision') {
      parts.push(`ဆုံးဖြတ်ချက်ချရာတွင် အကြောက်တရားကြောင့် မဟုတ်ဘဲ မိမိ၏ ရေရှည် ပျော်ရွှင်မှုနှင့် ဂုဏ်သိက္ခာကို အခြေခံ၍ ရဲရဲဝံ့ဝံ့ ဆုံးဖြတ်ပါ။`);
    }
    if (lifePath) {
      parts.push(`သင့် Life Path နံပါတ် #${lifePath} ၏ ဉာဏ်ပညာစွမ်းအင်အရ မိမိကိုယ်ကို အပြည့်အဝ ယုံကြည်မှုရှိပါ။`);
    }
    advice = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (adviceCard) {
      parts.push(`**【${adviceCard.name.ja}】**からの神聖な助言 — 「${adviceCard.kw}」。【${domainLabels[domain].ja}】を好転させる最大の鍵となります：`);
    }
    if (partnerName && synastry) {
      parts.push(`関係性を高める錬金術的アプローチ：${synastry.synastryAdvice.ja}`);
    } else if (domain === 'love') {
      parts.push(`愛において、防衛壁を緩め、真摯な言葉で心を通わせてください。自分自身を尊ぶことが、相手からの真の愛を引き寄せます。`);
    } else if (domain === 'career') {
      parts.push(`仕事において、自己価値を信じて主導権を握りましょう。長期的なビジョンに立ち返ることが突破口を開きます。`);
    } else if (domain === 'fortune') {
      parts.push(`豊かさにおいて、堅実な管理と分かち合いの精神がさらなる富の循環を呼び込みます。`);
    } else if (domain === 'decision') {
      parts.push(`決断において、周囲の雑音を遮断し、魂が最も軽やかに感じる道を選択してください。`);
    }
    if (lifePath) {
      parts.push(`あなたのライフパスナンバー【#${lifePath}】の波動が、直感的な確信を後押ししています。`);
    }
    advice = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (adviceCard) {
      parts.push(`Take **${adviceCard.name.en}**'s counsel directly: **${adviceCard.kw.toLowerCase()}**. Apply this directly to **${domainLabels[domain].en}**:`);
    }
    if (partnerName && synastry) {
      parts.push(`Relational Alchemy Counsel: ${synastry.synastryAdvice.en}`);
    } else if (domain === 'love') {
      parts.push(`In love, lower defensive walls, practice radical honesty, and lead with heartfelt presence. Mutual respect will follow.`);
    } else if (domain === 'career') {
      parts.push(`Professionally, stand firm in your competence, communicate with clarity, and execute with disciplined passion.`);
    } else if (domain === 'fortune') {
      parts.push(`Financially, honor thoughtful stewardship while opening your mindset to receive new streams of abundance.`);
    } else if (domain === 'decision') {
      parts.push(`For your decision, choose the path that expands your soul rather than the one merely seeking short-term comfort.`);
    }
    if (lifePath) {
      parts.push(`Channeling your Life Path #${lifePath} gifts will illuminate the optimal move.`);
    }
    advice = parts.join(' ');
  }

  /* ================= 5. OUTLOOK SECTION ================= */
  let outlook = '';
  const outcomeCard = cards.find(c =>
    c.posName.includes('Outcome') ||
    c.posName.includes('Future') ||
    c.posName.includes('Path Forward') ||
    c.posName.includes('ရလဒ်') ||
    c.posName.includes('အနာဂတ်') ||
    c.posName.includes('လမ်းကြောင်း') ||
    c.posName.includes('結果') ||
    c.posName.includes('未来') ||
    c.posName.includes('道')
  ) || cards[cards.length - 1];

  if (lang === 'my') {
    const parts: string[] = [];
    if (outcomeCard) {
      parts.push(`ဤလမ်းညွှန်ချက်အတိုင်း ရှေ့သို့ လှမ်းချီပါက **${domainLabels[domain].my}** တွင် **${outcomeCard.name.my}${outcomeCard.isReversed ? ' (ပြောင်းပြန်)' : ''}** ပြသသော အကျိုးရလဒ်သို့ ရောက်ရှိပါလိမ့်မည် — "${outcomeCard.kw}"။`);
    }
    if (partnerName) {
      parts.push(`${partnerName} နှင့် ဆက်ဆံရေးတွင် ပိုမိုနက်ရှိုင်းသော နားလည်မှုနှင့် စိတ်အေးချမ်းရွှင်လန်းဖွယ် ရလဒ်များ ပွင့်လန်းလာမည် ဖြစ်ပါသည်။`);
    } else if (domain === 'love') {
      parts.push(`ဆက်ဆံရေးတွင် ပိုမိုနက်ရှိုင်းသော နားလည်မှုနှင့် စိတ်အေးချမ်းရွှင်လန်းဖွယ် ရလဒ်များ ပွင့်လန်းလာမည် ဖြစ်ပါသည်။`);
    } else if (domain === 'career') {
      parts.push(`အလုပ်အကိုင်တွင် အသီးအပွင့်များ ရရှိလာပြီး မိမိ၏ စွမ်းဆောင်ရည်ကို ထင်ရှားစွာ သက်သေပြနိုင်ပါလိမ့်မည်။`);
    } else if (domain === 'fortune') {
      parts.push(`ဘဏ္ဍာရေးတွင် တည်ငြိမ်မှုနှင့် အောင်မြင်မှု အခွင့်အလမ်းများ စီးဆင်းလာမည် ဖြစ်ပါသည်။`);
    } else if (domain === 'decision') {
      parts.push(`ရွေးချယ်မှုအပြီးတွင် သံသယများ ကင်းစင်သွားပြီး ရှင်းလင်းပြတ်သားသော အနာဂတ်လမ်းကို မြင်တွေ့ရပါလိမ့်မည်။`);
    }
    outlook = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (outcomeCard) {
      parts.push(`この導きに従うことで、【${domainLabels[domain].ja}】の先には**【${outcomeCard.name.ja}${outcomeCard.isReversed ? '（逆位置）' : ''}】**が示す境地が待っています — 「${outcomeCard.kw}」。`);
    }
    if (partnerName) {
      parts.push(`【${partnerName}様】との関係性に真の調和と深い精神的絆が結実します。`);
    } else if (domain === 'love') {
      parts.push(`関係性に真の調和と深い精神的絆が結実します。`);
    } else if (domain === 'career') {
      parts.push(`努力が正当に評価され、確固たる地位と充実感がもたらされます。`);
    } else if (domain === 'fortune') {
      parts.push(`物質的・精神的な豊かさが安定した循環を築きます。`);
    } else if (domain === 'decision') {
      parts.push(`決断によって霧が晴れ、確信に満ちた前進が可能となります。`);
    }
    outlook = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (outcomeCard) {
      parts.push(`Following this counsel leads **${domainLabels[domain].en}** directly toward **${outcomeCard.name.en}${outcomeCard.isReversed ? ' (reversed)' : ''}**: ${outcomeCard.kw.toLowerCase()}.`);
    }
    if (partnerName) {
      parts.push(`A higher octave of mutual trust, harmonic resonance, and sacred reciprocity with ${partnerName} awaits.`);
    } else if (domain === 'love') {
      parts.push(`A higher octave of mutual respect, trust, and shared joy awaits.`);
    } else if (domain === 'career') {
      parts.push(`Recognition, tangible progress, and alignment with your true vocational power unfold.`);
    } else if (domain === 'fortune') {
      parts.push(`Financial clarity, sustainable growth, and a grounded sense of security establish themselves.`);
    } else if (domain === 'decision') {
      parts.push(`The fog clears, leaving you with total confidence in your chosen destiny.`);
    }
    outlook = parts.join(' ');
  }

  /* ================= 6. TIMELINE SECTION ================= */
  let timeline = '';
  if (lang === 'my') {
    const parts: string[] = [];
    if (topSuitKey) {
      parts.push(`ကတ်ပြားများ၏ စွမ်းအင်စီးဆင်းမှုအရ ${topSuitKey === 'wands' ? 'မီးဓာတ် (Wands)' : topSuitKey === 'swords' ? 'လေဓာတ် (Swords)' : topSuitKey === 'cups' ? 'ရေဓာတ် (Cups)' : 'မြေဓာတ် (Pentacles)'} က အရှိန်အဟုန်ကို ဦးဆောင်နေပါသည် — ${TEMPO_DATA[topSuitKey].my[2]} ဖြစ်သောကြောင့် **${TEMPO_DATA[topSuitKey].my[1]}** အတွင်း အပြောင်းအလဲများ စတင်ပေါ်ပေါက်လာမည်ဟု မျှော်လင့်နိုင်ပါသည်။`);
    }
    if (outcomeCard && outcomeCard.number >= 1 && outcomeCard.number <= 10) {
      parts.push(`အနာဂတ်ကတ်၏ နံပါတ်စွမ်းအင်အရ: ${NUM_TIMING[outcomeCard.number as keyof typeof NUM_TIMING]?.my || ''}။`);
    }
    timeline = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (topSuitKey) {
      parts.push(`デッキ全体のテンポは主に【${topSuitKey === 'wands' ? 'ワンド（火）' : topSuitKey === 'swords' ? 'ソード（風）' : topSuitKey === 'cups' ? 'カップ（水）' : 'ペンタクル（地）'}】によって決定づけられています — ${TEMPO_DATA[topSuitKey].ja[2]}のため、**${TEMPO_DATA[topSuitKey].ja[1]}**に最初の展開が期待されます。`);
    }
    if (outcomeCard && outcomeCard.number >= 1 && outcomeCard.number <= 10) {
      parts.push(`結果の位置にあるカードの数秘は示しています：${NUM_TIMING[outcomeCard.number as keyof typeof NUM_TIMING]?.ja || ''}。`);
    }
    timeline = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (topSuitKey) {
      parts.push(`The deck's tempo is set mostly by ${topSuitKey} energy (${topSuitEntry[1].length} cards) — ${TEMPO_DATA[topSuitKey].en[2]}, so expect movement ${TEMPO_DATA[topSuitKey].en[1]}.`);
    }
    if (outcomeCard && outcomeCard.number >= 1 && outcomeCard.number <= 10) {
      parts.push(`Your outcome card suggests: ${NUM_TIMING[outcomeCard.number as keyof typeof NUM_TIMING]?.en || ''}.`);
    }
    timeline = parts.join(' ');
  }

  /* ================= 7. ARCHETYPE SECTION ================= */
  let archName = '';
  let archDesc = '';
  let archShadow = '';

  if (lang === 'my') {
    if (partnerName) {
      archName = `စိတ်ဝိညာဉ် မှန်ရိပ်စုံတွဲ (The Sacred Mirror 🜂)`;
      archDesc = `${querentName || 'သင်'} နှင့် ${partnerName} တို့သည် တစ်ဦးကိုတစ်ဦး မိမိတို့၏ အတွင်းစိတ် အလင်းနှင့် အရိပ်များကို အတိအကျ ပြန်လည်ထင်ဟပ်ပြနေသော စိတ်ဝိညာဉ် မိတ်ဖက်များ ဖြစ်ကြပါသည်။`;
    } else if (majors.length >= Math.ceil(cards.length / 2)) {
      archName = "ကံကြမ္မာ၏ ရွေးချယ်ခံရသူ (The Fated One 🜂)";
      archDesc = "မိမိ၏ ဘဝခရီးလမ်းတွင် ပိုမိုကြီးမားသော စကြဝဠာစွမ်းအားတစ်ခု၏ ဆွဲခေါ်မှုကို ခံစားရသူ ဖြစ်ပါသည်။ တံခါးများသည် မိမိထိန်းချုပ်မှုထက် ကျော်လွန်၍ ပွင့်လာတတ်သောကြောင့် ကိုယ့်တာဝန်မှာ လမ်းကို အတင်းဖောက်ရန် မဟုတ်ဘဲ မှန်ကန်သော လမ်းကြောင်းကို ပညာဉာဏ်ဖြင့် သိမြင်လက်ခံရန် ဖြစ်ပါသည်။";
    } else if (topSuitKey === 'cups') {
      archName = "နက်ရှိုင်းသော စိတ်ခံစားမှုပိုင်ရှင် (The Empath of Deep Waters 🌊)";
      archDesc = "အရာရာကို နှလုံးသားဖြင့် နက်နက်ရှိုင်းရှိုင်း ခံစားလွယ်သူ ဖြစ်ပါသည်။ တပါးသူများ၏ ခံစားချက်ကိုပါ ကြိုတင်ရိပ်မိနိုင်သော မေတ္တာပါရမီရှိပြီး မိမိကိုယ်ကို ကာကွယ်သည့် စည်းဘောင်လေး သတ်မှတ်ထားရန် လိုအပ်ပါသည်။";
    } else if (topSuitKey === 'pentacles') {
      archName = "ခိုင်မာသော အုတ်မြစ်တည်ဆောက်သူ (The Builder of Stone 🏛️)";
      archDesc = "လက်တွေ့ကျပြီး စိတ်ရှည်တည်ကြည်စွာ အခြေခံကောင်းကို တည်ဆောက်တတ်သူ ဖြစ်ပါသည်။ ငွေကြေး၊ အလုပ်အကိုင်နှင့် ဘဝလုံခြုံရေးကို အလေးထားနေချိန်တွင် အနားယူခြင်းသည်လည်း အနာဂတ်အတွက် အရေးပါသော ရင်းနှီးမြှုပ်နှံမှုတစ်ခု ဖြစ်ကြောင်း သတိရပါ။";
    } else if (topSuitKey === 'swords') {
      archName = "ထက်မြက်သော ဉာဏ်ပညာရှင် (The Blade-Minded Strategist ⚔️)";
      archDesc = "စဉ်းစားတွေးခေါ်မှု အလွန်ထက်မြက်ပြီး အမှန်တရားကို ရှင်းရှင်းလင်းလင်း မြင်လိုသူ ဖြစ်ပါသည်။ ရှင်းလင်းပြတ်သားမှုသည် မိမိအတွက် ခွန်အားဖြစ်သော်လည်း အတွေးလွန်ခြင်းသည် စိတ်ပင်ပန်းစေသော အဆိပ်ဖြစ်နိုင်ပါသည်။";
    } else if (topSuitKey === 'wands') {
      archName = "မဆုတ်မနစ်သော မီးတောက်ရှင် (The Restless Flame 🔥)";
      archDesc = "စိတ်အားထက်သန်မှု ပြင်းပြပြီး ရပ်တန့်နေခြင်းကို မနှစ်သက်သူ ဖြစ်ပါသည်။ စွမ်းအင်များကို ဟိုတစ်စဒီတစ်စ မဖြန့်ဘဲ အဓိက ပန်းတိုင်တစ်ခုတည်းအပေါ်တွင် စုစည်းအသုံးချပါ။";
    } else {
      archName = "ဟန်ချက်ညီသော ရှာဖွေသူ (The Seeker Between Worlds 🌗)";
      archDesc = "နှလုံးသား၊ အတွေး၊ စိတ်ဓာတ်နှင့် ရုပ်ဝတ္ထု အားလုံးကြားတွင် ဟန်ချက်ညီစွာ လျှောက်လှမ်းနိုင်သော လိုက်လျောညီထွေရှိသူ ဖြစ်ပါသည်။";
    }

    archShadow = reversed.length >= 2
      ? ` သတိပြုရန် အတွင်းစိတ်ထောင်ချောက်: ${reversed.map(c => c.kw).slice(0, 3).join('၊ ')} စသည့် အချက်များကို သတိထားရန် လိုအပ်ပါသည်။`
      : " လက်ရှိတွင် ဤစရိုက်သဘာဝသည် သင့်ဘက်မှ ကောင်းမွန်စွာ စွမ်းအင်ပေးလျက် ရှိပါသည်။";
  } else if (lang === 'ja') {
    if (partnerName) {
      archName = `魂を映す聖なる鏡（The Sacred Mirror 🜂）`;
      archDesc = `【${querentName || 'あなた'}様】と【${partnerName}様】は、互いの内なる光と影を映し出す宿命のパートナーです。真摯な対話が二人の霊的進化を促します。`;
    } else if (majors.length >= Math.ceil(cards.length / 2)) {
      archName = "運命に選ばれし者（The Fated One 🜂）";
      archDesc = "あなたは今、より大いなる力に導かれながら歩んでいます。扉は人間の作為を超えて開閉し、あなたの役目は道を無理にこじ開けることではなく、真の導きを見極めることにあります。";
    } else if (topSuitKey === 'cups') {
      archName = "深淵なる共感者（The Empath of Deep Waters 🌊）";
      archDesc = "あなたは他者の感情の機微を誰よりも早く深く感じ取ります。あなたの天賦の才は「心の絆」であり、乗り越えるべき課題は「健全な心の境界線」を保つことです。";
    } else if (topSuitKey === 'pentacles') {
      archName = "堅固なる建築者（The Builder of Stone 🏛️）";
      archDesc = "あなたは現実的で誠実、着実に足元を固める職人肌です。今、仕事や経済の安定に意識が向いています。「適切な休息もまた未来への投資である」ことを心に留めてください。";
    } else if (topSuitKey === 'swords') {
      archName = "鋭鋒の戦略家（The Blade-Minded Strategist ⚔️）";
      archDesc = "知性と明晰な論理を武器とする人です。問題の本質を見抜く力がありますが、考えすぎや反芻思考が自らを傷つける刃とならぬよう、客観的明晰さを保ちましょう。";
    } else if (topSuitKey === 'wands') {
      archName = "奔放なる炎（The Restless Flame 🔥）";
      archDesc = "情熱的で停滞を嫌い、素早い変化を求める開拓者です。火花を散らしすぎるのではなく、持続する確かな炎へとエネルギーを集中させましょう。";
    } else {
      archName = "境界の探求者（The Seeker Between Worlds 🌗）";
      archDesc = "感情、知性、精神、物質のすべてのバランスを保ち、柔軟に適応できる探求者です。統合された知恵を現実に活かしましょう。";
    }

    archShadow = reversed.length >= 2
      ? ` 【影の警告】：${reversed.map(c => c.kw).slice(0, 3).join('、')}といった罠に囚われないよう注意してください。`
      : ` すべてのカードが正位置にあり、このアーキタイプの光が現在あなたを力強く後押ししています。`;
  } else {
    if (partnerName) {
      archName = "The Sacred Mirror 🜂";
      archDesc = `${querentName || 'You'} and ${partnerName} act as spiritual mirrors for one another, reflecting both unexpressed light and sacred growth edges.`;
    } else if (majors.length >= Math.ceil(cards.length / 2)) {
      archName = "The Fated One 🜂";
      archDesc = "You walk through life feeling pulled by something larger. Doors open and close beyond your control, and your task has never been to force paths, but to recognize the right ones. People with heavy Major Arcana spreads live at the center of their own myth.";
    } else if (topSuitKey === 'cups') {
      archName = "The Empath of Deep Waters 🌊";
      archDesc = "You feel everything — often before others know they're feeling it. Your current struggles are emotional entanglements. Your gift is connection; your trial is boundaries.";
    } else if (topSuitKey === 'pentacles') {
      archName = "The Builder of Stone 🏛️";
      archDesc = "You are practical, loyal, and quietly stubborn. Right now your mind circles security — money, work, health, stability. Remember that rest is also an investment.";
    } else if (topSuitKey === 'swords') {
      archName = "The Blade-Minded Strategist ⚔️";
      archDesc = "You live in your head — analyzing, replaying conversations. Your problems right now are more mental than material. Clarity is your medicine; rumination is your poison.";
    } else if (topSuitKey === 'wands') {
      archName = "The Restless Flame 🔥";
      archDesc = "You run hot — passionate, impatient, allergic to stagnation. Channel the fire into one sustained flame instead of many scattered sparks.";
    } else {
      archName = "The Seeker Between Worlds 🌗";
      archDesc = "Your energy is balanced across all realms — heart, mind, spirit, and matter each get a voice. Integration, not intensity, is your next lesson.";
    }

    archShadow = reversed.length >= 2
      ? ` In shadow, this archetype turns against you: ${reversed.map(c => c.kw.toLowerCase()).slice(0, 3).join(', ')} — these are its traps to watch for.`
      : " Standing upright across the board, this archetype currently works for you rather than against you.";
  }

  /* ================= 8. MASTER SUMMARY ================= */
  let summary = '';
  if (lang === 'my') {
    const greeting = partnerName ? `${querentName ? querentName : 'သင်'} နှင့် ${partnerName} တို့အတွက် ` : querentName ? `${querentName} အတွက် ` : '';
    summary = `${greeting}"${domainLabels[domain].my}" နှင့် ပတ်သက်၍ အနှစ်ချုပ်မှာ: ကတ်ပြားများအရ မိမိ၏ စိတ်အာရုံသည် ${topSuitKey ? SUIT_REALM[topSuitKey].my.split(' — ')[0] : 'ဘဝကဏ္ဍ'} ဘက်သို့ ဦးတည်နေပြီး၊ ${reversed.length ? 'အတွင်းစိတ် အတားအဆီးများကို ဖြေလျှော့ရန် လိုအပ်နေချိန်တွင်' : 'စိတ်ဆန္ဒနှင့် စွမ်းအင်များ ညီညွတ်စွာ စီးဆင်းနေကာ'} နောက်ဆုံး၌ ${outcomeCard ? outcomeCard.name.my : 'အသစ်သော အခွင့်အလမ်း'} ဆီသို့ ဦးတည်နေကြောင်း ဖော်ပြနေပါသည်။ တာရော့ကတ်ပြားများသည် အနာဂတ်ရာသီဥတုကို ပြသပေးသော လမ်းညွှန်ဖြစ်ပြီး ကံကြမ္မာစတီယာရင်ကို အမှန်တကယ် ကိုင်တွယ်မောင်းနှင်သူမှာ သင်ကိုယ်တိုင်သာ ဖြစ်ပါသည်။`;
  } else if (lang === 'ja') {
    const greeting = partnerName ? `【${querentName || 'あなた'}様と${partnerName}様へ】` : querentName ? `【${querentName}様へ】` : '';
    summary = `${greeting}「${domainLabels[domain].ja}」について：カードは、あなたの意識が【${topSuitKey ? SUIT_REALM[topSuitKey].ja.split(' — ')[0] : '多面的な波動'}】に向かい、${reversed.length ? '内なる滞りを手放す試練' : '稀に見る意志と感情の調和'}を経て、最終的に【${outcomeCard ? outcomeCard.name.ja : '未踏の未来'}】へと向かっていることを示しています。タロットは運命の天気予報を示すものであり、船の舵を握っているのは、いつでもあなた自身です。`;
  } else {
    const greeting = partnerName ? `For ${querentName || 'Querent'} and ${partnerName} — ` : querentName ? `For ${querentName} — ` : '';
    summary = `${greeting}On **${domainLabels[domain].en}**: the cards reveal a sacred connection tuned to ${topSuitKey ? SUIT_REALM[topSuitKey].en.split(' — ')[0] : 'shifting currents'}, guided through ${reversed.length ? 'inner blockages seeking release' : 'a harmonious alignment of will and feeling'}, and moving steadily toward ${outcomeCard ? outcomeCard.name.en : 'an auspicious outcome'}. The cards do not dictate your fate — they illuminate the weather. You hold the wheel.`;
  }

  return {
    mind,
    problems,
    forces,
    advice,
    outlook,
    timeline,
    archetype: {
      name: archName,
      description: archDesc,
      shadow: archShadow
    },
    summary
  };
}

/* =========================================================================
   SPECIALIZED SPREAD HERMENEUTIC SYNTHESIS ENGINES (A.E. WAITE & ESOTERIC)
========================================================================= */

import {
  CelticCrossSynthesis,
  ChakraAlignmentSynthesis,
  ChakraCenterAnalysis,
  DecisionForkSynthesis,
  RelationshipMirrorSynthesis
} from '../types/tarot';

/**
 * 1. 10-Card Celtic Cross Grand Hermeneutic Synthesis
 */
export function calculateCelticCrossSynthesis(drawnCards: DrawnCard[], lang: Language): CelticCrossSynthesis | null {
  if (drawnCards.length < 10) return null;

  const [present, challenge, root, past, crown, future, self, env, hopesFears, outcome] = drawnCards;

  // Cross Tension & Harmony Score
  const challengeFriction = challenge.isReversed || /tower|devil|death|three of swords|nine of swords|ten of swords/i.test(challenge.card.file);
  const presentUpright = !present.isReversed;
  const crossHarmony = (presentUpright ? 40 : 15) + (challengeFriction ? 10 : 35) + (!root.isReversed ? 15 : 0);

  return {
    crossTension: {
      title: {
        en: `Central Axis: ${present.card.name.en} crossed by ${challenge.card.name.en}`,
        my: `ဗဟိုအချက်အချာ: ${present.card.name.my} ကို ${challenge.card.name.my} ဖြင့် စိန်ခေါ်ဖြတ်သန်းမှု`,
        ja: `中心軸：【${present.card.name.ja}】と交差する試練【${challenge.card.name.ja}】`
      },
      analysis: {
        en: `Your focal reality is anchored in "${present.card.uprightKeywords.en.slice(0, 2).join(', ')}", while the crossing dynamic demands addressing "${challenge.isReversed ? challenge.card.reversedKeywords.en.slice(0, 2).join(', ') : challenge.card.uprightKeywords.en.slice(0, 2).join(', ')}".`,
        my: `လက်ရှိ အခြေအနေသည် "${present.card.uprightKeywords.my.slice(0, 2).join(', ')}" ပေါ်တွင် အခြေတည်နေပြီး၊ ရင်ဆိုင်ဖြေရှင်းရမည့် အတားအဆီးမှာ "${challenge.isReversed ? challenge.card.reversedKeywords.my.slice(0, 2).join(', ') : challenge.card.uprightKeywords.my.slice(0, 2).join(', ')}" ဖြစ်ပါသည်။`,
        ja: `現在の基盤は「${present.card.uprightKeywords.ja.slice(0, 2).join('・')}」に根ざしており、直面する試練は「${challenge.isReversed ? challenge.card.reversedKeywords.ja.slice(0, 2).join('・') : challenge.card.uprightKeywords.ja.slice(0, 2).join('・')}」の克服を求めています。`
      },
      harmonyScore: Math.min(95, Math.max(30, crossHarmony))
    },
    spiritualAxis: {
      rootFoundation: {
        en: `Subconscious Origin: ${root.card.name.en} (${root.card.uprightKeywords.en[0]})`,
        my: `မသိစိတ်အခြေခံဇစ်မြစ်: ${root.card.name.my} (${root.card.uprightKeywords.my[0]})`,
        ja: `潜在的根源：【${root.card.name.ja}】（${root.card.uprightKeywords.ja[0]}）`
      },
      crownAspiration: {
        en: `Conscious Crown Aspiration: ${crown.card.name.en} (${crown.card.uprightKeywords.en[0]})`,
        my: `သိစိတ်ရည်မှန်းချက်: ${crown.card.name.my} (${crown.card.uprightKeywords.my[0]})`,
        ja: `顕在的志向・冠：【${crown.card.name.ja}】（${crown.card.uprightKeywords.ja[0]}）`
      },
      axisAlignment: {
        en: `The distance between your unconscious root (${root.card.name.en}) and conscious goal (${crown.card.name.en}) is bridged through conscious intentionality.`,
        my: `မသိစိတ်ဇစ်မြစ် (${root.card.name.my}) နှင့် သိစိတ်ရည်မှန်းချက် (${crown.card.name.my}) ကြားရှိ ကွာဟချက်ကို သတိတရားဖြင့် ပေါင်းကူးတံတားထိုးနိုင်ပါသည်။`,
        ja: `潜在意識の根（${root.card.name.ja}）と顕在意識の頂（${crown.card.name.ja}）の間の距離は、自覚的な意思によって統合されます。`
      }
    },
    temporalStream: {
      karmicPast: {
        en: `Passing Karma: ${past.card.name.en}`,
        my: `ကုန်လွန်ခဲ့သော ကံအကျိုးပေး: ${past.card.name.my}`,
        ja: `去りゆく過去のカルマ：【${past.card.name.ja}】`
      },
      presentDynamic: {
        en: `Active Fulcrum: ${present.card.name.en}`,
        my: `လက်ရှိလည်ပတ်နေသော အင်အား: ${present.card.name.my}`,
        ja: `現在の活動力：【${present.card.name.ja}】`
      },
      approachingWave: {
        en: `Approaching Wave: ${future.card.name.en}`,
        my: `နီးကပ်လာသော ကံကြမ္မာလှိုင်း: ${future.card.name.my}`,
        ja: `接近する未来の波動：【${future.card.name.ja}】`
      }
    },
    staffOfDestiny: {
      querentStance: {
        en: `Internal Self: ${self.card.name.en} — ${self.isReversed ? 'Experiencing inward transition' : 'Operating with clarity and purpose'}`,
        my: `မိမိ၏ အတွင်းစိတ်ရပ်တည်ချက်: ${self.card.name.my} — ${self.isReversed ? 'အတွင်းစိတ် အပြောင်းအလဲကို ဖြတ်သန်းနေရသည်' : 'ရှင်းလင်းပြတ်သားသော ဦးတည်ချက်ဖြင့် လုပ်ဆောင်နေသည်'}`,
        ja: `内なる自己の構え：【${self.card.name.ja}】— ${self.isReversed ? '内的な変容と再構築の最中' : '明晰な意図を持って行動中'}`
      },
      environmentalMirror: {
        en: `External Environment: ${env.card.name.en} — Reflected circumstances and interpersonal field`,
        my: `ပတ်ဝန်းကျင်မှ ထင်ဟပ်မှု: ${env.card.name.my} — ပြင်ပအခြေအနေများနှင့် ဆက်ဆံရေးများ`,
        ja: `外的な環境と他者からの影響：【${env.card.name.ja}】`
      },
      hopesAndFearsPolarity: {
        en: `Subconscious Gate: ${hopesFears.card.name.en} — Both your secret hope and shadow fear mirror here`,
        my: `မသိစိတ်တံခါးဝ: ${hopesFears.card.name.my} — လျှို့ဝှက်မျှော်လင့်ချက်နှင့် စိုးရိမ်ပူပန်မှုတို့ ထင်ဟပ်နေသည်`,
        ja: `希望と恐れの鏡：【${hopesFears.card.name.ja}】`
      },
      finalManifestation: {
        en: `Ultimate Culmination: ${outcome.card.name.en} — The synthesized horizon of this sacred cycle`,
        my: `နောက်ဆုံးအကျိုးရလဒ်: ${outcome.card.name.my} — ဤသံသရာစက်ဝန်း၏ အောင်မြင်သော အသီးအပွင့်`,
        ja: `最終的な結実：【${outcome.card.name.ja}】`
      }
    },
    destinyVerdict: {
      en: `The Celtic Cross illuminates a pivotal threshold. By integrating the crossing lesson (${challenge.card.name.en}), you step directly into ${outcome.card.name.en}'s fulfillment.`,
      my: `ဆဲလ်တစ်ကြက်ခြေခတ် ခင်းကျင်းမှုအရ အရေးပါသော အချိုးအကွေ့သို့ ရောက်ရှိနေပါသည်။ စိန်ခေါ်မှု (${challenge.card.name.my}) ကို ကျော်လွှားနိုင်ပါက ${outcome.card.name.my} ပြသသော အောင်မြင်မှုဆီသို့ အရောက်လှမ်းနိုင်ပါလိမ့်မည်။`,
      ja: `ケルト十字は重要な運命の岐路を照らし出しています。試練【${challenge.card.name.ja}】の教訓を統合することで、最終結果【${outcome.card.name.ja}】の成就へと導かれます。`
    }
  };
}

/**
 * 2. 7-Chakra Ascending Kundalini Alignment Synthesis
 */
export function calculateChakraAlignment(drawnCards: DrawnCard[], lang: Language): ChakraAlignmentSynthesis | null {
  if (drawnCards.length < 7) return null;

  const CHAKRA_METADATA = [
    { id: 'root', name: { en: 'Root Chakra', my: 'မူလဒါရ (အခြေခံစွမ်းအင်ဗဟို)', ja: '第1チャクラ（ルート・基底）' }, sanskrit: 'Muladhara', element: 'Earth', color: '#ef4444' },
    { id: 'sacral', name: { en: 'Sacral Chakra', my: 'ဆွာဓိဌာန (ဖန်တီးမှုနှင့် စိတ်ခံစားမှု)', ja: '第2チャクラ（セイクラル・仙骨）' }, sanskrit: 'Svadhisthana', element: 'Water', color: '#f97316' },
    { id: 'solar', name: { en: 'Solar Plexus', my: 'မဏိပူရ (စွမ်းအားနှင့် သန္နိဋ္ဌာန်)', ja: '第3チャクラ（ソーラープレクサス・太陽神経叢）' }, sanskrit: 'Manipura', element: 'Fire', color: '#eab308' },
    { id: 'heart', name: { en: 'Heart Chakra', my: 'အနာဟတ (မေတ္တာနှင့် သဟဇာတ)', ja: '第4チャクラ（ハート・心臓）' }, sanskrit: 'Anahata', element: 'Air', color: '#10b981' },
    { id: 'throat', name: { en: 'Throat Chakra', my: 'ဝိသုဒ္ဓိ (အမှန်တရားနှင့် ဆက်သွယ်ရေး)', ja: '第5チャクラ（スロート・喉）' }, sanskrit: 'Vishuddha', element: 'Ether', color: '#06b6d4' },
    { id: 'third_eye', name: { en: 'Third Eye', my: 'အာညာ (ဉာဏ်အမြင်နှင့် အသိ)', ja: '第6チャクラ（サードアイ・眉間）' }, sanskrit: 'Ajna', element: 'Light', color: '#6366f1' },
    { id: 'crown', name: { en: 'Crown Chakra', my: 'သဟသြာရ (စကြဝဠာနှင့် တစ်သားတည်း)', ja: '第7チャクラ（クラウン・頭頂）' }, sanskrit: 'Sahasrara', element: 'Cosmic Spirit', color: '#a855f7' },
  ];

  let openCount = 0;
  let blockedCount = 0;

  const chakraCenters: ChakraCenterAnalysis[] = CHAKRA_METADATA.map((meta, idx) => {
    const dc = drawnCards[idx];
    const isReversed = dc.isReversed;
    const isMajor = dc.card.arcana === 'major';
    const isHeavy = /tower|devil|death|three of swords|nine of swords|ten of swords|five of pentacles/i.test(dc.card.file);

    let status: 'open' | 'balanced' | 'blocked' | 'overactive' = 'balanced';
    if (isReversed || isHeavy) {
      status = 'blocked';
      blockedCount++;
    } else if (isMajor) {
      status = 'open';
      openCount++;
    }

    const insight = {
      en: `${dc.card.name.en}${isReversed ? ' (Reversed)' : ''} channels ${status === 'blocked' ? 'restricted flow needing clearing' : 'radiant vitality'} into your ${meta.name.en}.`,
      my: `${dc.card.name.my}${isReversed ? ' (ပြောင်းပြန်)' : ''} က ${meta.name.my} တွင် ${status === 'blocked' ? 'ပိတ်ဆို့နေသော စွမ်းအင်ကို သန့်စင်ရန် လိုအပ်ကြောင်း' : 'တောက်ပသော စွမ်းအင်စီးဆင်းနေကြောင်း'} ဖော်ပြနေပါသည်။`,
      ja: `【${dc.card.name.ja}${isReversed ? '（逆位置）' : ''}】が、${meta.name.ja}において${status === 'blocked' ? '浄化を要するエネルギーの滞り' : '高次の調和した生命力'}をもたらしています。`
    };

    const healingPrescription = {
      en: status === 'blocked'
        ? `Prescription: Meditate with ${meta.element} frequency, breathe into ${meta.sanskrit}, and release ${dc.card.reversedKeywords.en[0] || 'tension'}.`
        : `Prescription: Harmonize and channel ${dc.card.uprightKeywords.en[0] || 'light'} outward.`,
      my: status === 'blocked'
        ? `ကုစားမှု: ${meta.element} ဓာတ်စွမ်းအင်ဖြင့် တရားထိုင်ပါ၊ ${meta.sanskrit} ဗဟိုသို့ အာရုံပြု၍ အတားအဆီးများကို ဖယ်ရှားပါ။`
        : `ကုစားမှု: ${meta.name.my} ၏ စွမ်းအင်ကောင်းများကို အခြားသူများနှင့် မျှဝေပါ။`,
      ja: status === 'blocked'
        ? `処方箋：${meta.element}の瞑想を行い、${meta.sanskrit}へ深く呼吸を送り滞りを解放してください。`
        : `処方箋：活性化したエネルギーを現実に活かし、調和を保ちましょう。`
    };

    return {
      chakraId: meta.id,
      name: meta.name,
      sanskritName: meta.sanskrit,
      element: meta.element,
      color: meta.color,
      card: dc.card,
      isReversed,
      status,
      insight,
      healingPrescription
    };
  });

  const vitalityScore = Math.max(30, Math.min(98, Math.round(((7 - blockedCount) / 7) * 85 + (openCount * 3))));

  return {
    vitalityScore,
    overallAlignment: {
      en: `${7 - blockedCount} of 7 Chakras Harmoniously Activated`,
      my: `စွမ်းအင်ဗဟို ၇ ခုအနက် ${7 - blockedCount} ခုသည် အပြည့်အဝ ပွင့်လန်းလျက်ရှိသည်`,
      ja: `7つのチャクラ中 ${7 - blockedCount} 箇所が完全に調和・活性化`
    },
    blockedChakrasCount: blockedCount,
    dominantCenter: chakraCenters.find(c => c.status === 'open')?.name || chakraCenters[3].name,
    chakraCenters,
    kundaliniGuidance: {
      en: `Your spiritual Kundalini spine is radiating at ${vitalityScore}% vitality. Focus breath and awareness into the ${blockedCount > 0 ? 'blocked energy gates' : 'radiant heart and crown'}.`,
      my: `သင်၏ ဝိညာဉ်ရေးရာ စွမ်းအင်လိုင်းမကြီးသည် ${vitalityScore}% ရှင်သန်လျက် ရှိပါသည်။ ${blockedCount > 0 ? 'ပိတ်ဆို့နေသော ဗဟိုများကို အထူးဂရုပြု ကုစားပါ' : 'နှလုံးသားနှင့် ဦးထိပ်ဗဟိုများ အထူးကောင်းမွန်နေပါသည်'}။`,
      ja: `クンダリーニの脊髄エネルギーは現在【${vitalityScore}%】の生命力で脈動しています。${blockedCount > 0 ? '滞りのあるチャクラを重点的にヒーリングしてください。' : 'ハートとクラウンが神聖な輝きを放っています。'}`
    }
  };
}

/**
 * 3. 5-Card Decision Fork Synthesis
 */
export function calculateDecisionForkSynthesis(drawnCards: DrawnCard[], lang: Language): DecisionForkSynthesis | null {
  if (drawnCards.length < 5) return null;

  const [base, trajA, outA, trajB, outB] = drawnCards;

  // Path A Score
  let scoreA = 60;
  if (!trajA.isReversed) scoreA += 15;
  if (!outA.isReversed) scoreA += 20;
  if (/sun|star|world|ace of pentacles|ten of cups|six of wands/i.test(outA.card.file)) scoreA += 15;
  if (/tower|devil|death|three of swords|ten of swords/i.test(outA.card.file)) scoreA -= 25;

  // Path B Score
  let scoreB = 60;
  if (!trajB.isReversed) scoreB += 15;
  if (!outB.isReversed) scoreB += 20;
  if (/sun|star|world|ace of pentacles|ten of cups|six of wands/i.test(outB.card.file)) scoreB += 15;
  if (/tower|devil|death|three of swords|ten of swords/i.test(outB.card.file)) scoreB -= 25;

  const finalScoreA = Math.max(20, Math.min(96, scoreA));
  const finalScoreB = Math.max(20, Math.min(96, scoreB));

  const recommended: 'Path A' | 'Path B' | 'Synthesized Middle Way' =
    Math.abs(finalScoreA - finalScoreB) <= 5 ? 'Synthesized Middle Way' : finalScoreA > finalScoreB ? 'Path A' : 'Path B';

  return {
    baseCrossroads: {
      en: `Present Standpoint: ${base.card.name.en} — "${base.card.uprightKeywords.en.slice(0, 2).join(', ')}"`,
      my: `လက်ရှိ လမ်းဆုံအခြေအနေ: ${base.card.name.my} — "${base.card.uprightKeywords.my.slice(0, 2).join(', ')}"`,
      ja: `現在の分岐点：【${base.card.name.ja}】—「${base.card.uprightKeywords.ja.slice(0, 2).join('・')}」`
    },
    pathA: {
      title: { en: 'Path A (First Option)', my: 'ပထမ ရွေးချယ်မှု လမ်းကြောင်း (Path A)', ja: '選択肢A（第1の道）' },
      trajectory: {
        en: `Immediate Momentum: ${trajA.card.name.en}${trajA.isReversed ? ' (Reversed)' : ''}`,
        my: `ချက်ချင်းဖြစ်ပေါ်လာမည့် အရှိန်: ${trajA.card.name.my}`,
        ja: `当面の進展動向：【${trajA.card.name.ja}${trajA.isReversed ? '（逆位置）' : ''}】`
      },
      outcome: {
        en: `Ultimate Destination: ${outA.card.name.en}`,
        my: `နောက်ဆုံး ရောက်ရှိမည့် ရလဒ်: ${outA.card.name.my}`,
        ja: `最終到達点：【${outA.card.name.ja}】`
      },
      viabilityScore: finalScoreA,
      advantages: {
        en: `Strengths: ${outA.card.uprightKeywords.en.slice(0, 2).join(', ')}`,
        my: `အားသာချက်များ: ${outA.card.uprightKeywords.my.slice(0, 2).join(', ')}`,
        ja: `利点：${outA.card.uprightKeywords.ja.slice(0, 2).join('・')}`
      },
      hiddenRisks: {
        en: `Caveat: ${outA.card.shadowWarning.en}`,
        my: `သတိပြုရန်: ${outA.card.shadowWarning.my}`,
        ja: `留意点：${outA.card.shadowWarning.ja}`
      }
    },
    pathB: {
      title: { en: 'Path B (Second Option)', my: 'ဒုတိယ ရွေးချယ်မှု လမ်းကြောင်း (Path B)', ja: '選択肢B（第2の道）' },
      trajectory: {
        en: `Immediate Momentum: ${trajB.card.name.en}${trajB.isReversed ? ' (Reversed)' : ''}`,
        my: `ချက်ချင်းဖြစ်ပေါ်လာမည့် အရှိန်: ${trajB.card.name.my}`,
        ja: `当面の進展動向：【${trajB.card.name.ja}${trajB.isReversed ? '（逆位置）' : ''}】`
      },
      outcome: {
        en: `Ultimate Destination: ${outB.card.name.en}`,
        my: `နောက်ဆုံး ရောက်ရှိမည့် ရလဒ်: ${outB.card.name.my}`,
        ja: `最終到達点：【${outB.card.name.ja}】`
      },
      viabilityScore: finalScoreB,
      advantages: {
        en: `Strengths: ${outB.card.uprightKeywords.en.slice(0, 2).join(', ')}`,
        my: `အားသာချက်များ: ${outB.card.uprightKeywords.my.slice(0, 2).join(', ')}`,
        ja: `利点：${outB.card.uprightKeywords.ja.slice(0, 2).join('・')}`
      },
      hiddenRisks: {
        en: `Caveat: ${outB.card.shadowWarning.en}`,
        my: `သတိပြုရန်: ${outB.card.shadowWarning.my}`,
        ja: `留意点：${outB.card.shadowWarning.ja}`
      }
    },
    oracularVerdict: {
      en: recommended === 'Synthesized Middle Way'
        ? `Both paths hold equitable spiritual viability (${finalScoreA}% vs ${finalScoreB}%). A synthesized blend of both is optimal.`
        : `${recommended} demonstrates higher cosmic harmony (${recommended === 'Path A' ? finalScoreA : finalScoreB}% vs ${recommended === 'Path A' ? finalScoreB : finalScoreA}%). Align with ${recommended === 'Path A' ? outA.card.name.en : outB.card.name.en}.`,
      my: recommended === 'Synthesized Middle Way'
        ? `လမ်းကြောင်းနှစ်ခုလုံးသည် အလားတူ ကောင်းမွန်နေပါသည် (${finalScoreA}% နှင့် ${finalScoreB}%)။ နှစ်ခုစလုံးကို ပေါင်းစပ်အသုံးချခြင်းက အကောင်းဆုံး ဖြစ်ပါလိမ့်မည်။`
        : `${recommended === 'Path A' ? 'ပထမလမ်းကြောင်း (Path A)' : 'ဒုတိယလမ်းကြောင်း (Path B)'} က စကြဝဠာစွမ်းအင် ပိုမိုအားကောင်းနေပါသည် (${recommended === 'Path A' ? finalScoreA : finalScoreB}% နှင့် ${recommended === 'Path A' ? finalScoreB : finalScoreA}%)။`,
      ja: recommended === 'Synthesized Middle Way'
        ? `双方の道は同等の霊的調和度を示しています（${finalScoreA}% vs ${finalScoreB}%）。両者の利点を融合させた中道が最善です。`
        : `【${recommended === 'Path A' ? '選択肢A' : '選択肢B'}】がより高い運命の調和度を示しています（${recommended === 'Path A' ? finalScoreA : finalScoreB}%）。【${recommended === 'Path A' ? outA.card.name.ja : outB.card.name.ja}】の示す方角へ進んでください。`
    },
    recommendedPath: recommended
  };
}

/**
 * 4. 5-Card Relationship Mirror & Synastry Synthesis
 */
export function calculateRelationshipMirrorSynthesis(
  drawnCards: DrawnCard[],
  lang: Language,
  userProfile?: UserProfile | null,
  partnerProfile?: UserProfile | null
): RelationshipMirrorSynthesis | null {
  if (drawnCards.length < 5) return null;

  const [you, them, bond, challenge, pathForward] = drawnCards;
  const querentName = userProfile?.name || (lang === 'my' ? 'သင်' : lang === 'ja' ? 'あなた' : 'You');
  const partnerName = partnerProfile?.name || (lang === 'my' ? 'လက်တွဲဖော်' : lang === 'ja' ? 'お相手' : 'Them');

  let score = 70;
  if (!you.isReversed) score += 5;
  if (!them.isReversed) score += 5;
  if (!bond.isReversed) score += 10;
  if (!pathForward.isReversed) score += 10;

  return {
    querentArchetype: {
      en: `${querentName}'s Stance: ${you.card.name.en} (${you.card.uprightKeywords.en[0]})`,
      my: `${querentName} ၏ ရပ်တည်ချက်: ${you.card.name.my} (${you.card.uprightKeywords.my[0]})`,
      ja: `【${querentName}様】の現在地：【${you.card.name.ja}】（${you.card.uprightKeywords.ja[0]}）`
    },
    partnerArchetype: {
      en: `${partnerName}'s Stance: ${them.card.name.en} (${them.card.uprightKeywords.en[0]})`,
      my: `${partnerName} ၏ ရပ်တည်ချက်: ${them.card.name.my} (${them.card.uprightKeywords.my[0]})`,
      ja: `【${partnerName}様】の現在地：【${them.card.name.ja}】（${them.card.uprightKeywords.ja[0]}）`
    },
    nexusBond: {
      en: `The Central Nexus: ${bond.card.name.en} — The soul bridge connecting both hearts`,
      my: `နှစ်ဦးကြား ဗဟိုနှလုံးသားချိတ်ဆက်မှု: ${bond.card.name.my} — ဝိညာဉ်ချင်း ပေါင်းကူးတံတား`,
      ja: `二人の結節点（ソウル・ネクサス）：【${bond.card.name.ja}】`
    },
    coreFriction: {
      en: `The Karmic Challenge: ${challenge.card.name.en} — "${challenge.isReversed ? challenge.card.reversedKeywords.en[0] : challenge.card.uprightKeywords.en[0]}"`,
      my: `ရင်ဆိုင်ဖြေရှင်းရမည့် စိန်ခေါ်မှု: ${challenge.card.name.my} — "${challenge.isReversed ? challenge.card.reversedKeywords.my[0] : challenge.card.uprightKeywords.my[0]}"`,
      ja: `魂の成長課題・摩擦：【${challenge.card.name.ja}】`
    },
    forwardBridge: {
      en: `The Harmonious Path Forward: ${pathForward.card.name.en} — ${pathForward.card.uprightMeaning.en}`,
      my: `ရှေ့ဆက်ရမည့် လမ်းကြောင်း: ${pathForward.card.name.my} — ${pathForward.card.uprightMeaning.my}`,
      ja: `未来への架け橋：【${pathForward.card.name.ja}】— ${pathForward.card.uprightMeaning.ja}`
    },
    harmonicResonanceScore: Math.max(40, Math.min(98, score)),
    relationalAlchemyCounsel: {
      en: `Harmonize ${querentName}'s ${you.card.element} with ${partnerName}'s ${them.card.element}. Use ${bond.card.name.en}'s sacred light to dissolve ${challenge.card.name.en}'s tension.`,
      my: `${querentName} ၏ ${you.card.element} ဓာတ်နှင့် ${partnerName} ၏ ${them.card.element} ဓာတ်ကို ချိန်ညှိပါ။ ${bond.card.name.my} ၏ အလင်းရောင်ဖြင့် ${challenge.card.name.my} ၏ အတားအဆီးကို ဖြေလျှော့ပါ။`,
      ja: `【${querentName}様】の${you.card.element}と【${partnerName}様】の${them.card.element}を調和させ、【${bond.card.name.ja}】の神聖な光で【${challenge.card.name.ja}】の摩擦を愛へと昇華させてください。`
    }
  };
}
