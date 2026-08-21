import { DrawnCard, Language, SpreadDefinition, DeepAnalysisResult, TarotCard } from '../types/tarot';

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

export function getPositionContextualMeaning(positionName: string, card: TarotCard, isReversed: boolean, lang: Language): string {
  const kw = isReversed ? card.reversedKeywords[lang][0] : card.uprightKeywords[lang][0];
  const cName = card.name[lang];

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
        return `သင်သည် "${kw}" စွမ်းအင်ဖြင့် ဤဆက်ဆံရေးထဲသို့ ဝင်ရောက်လာခြင်း ဖြစ်ပါသည်။`;
      case 'Them':
      case 'သူ့ဘက်မှ စွမ်းအင်':
        return `သူ/သူမသည် "${kw}" စိတ်ခံစားချက်နှင့် သဘောထားကို သယ်ဆောင်လာပါသည်။`;
      case 'The Bond':
      case 'နှစ်ဦးကြား သံယောဇဉ်':
        return `နှစ်ဦးကြားတွင် "${kw}" စီးဆင်းနေပြီး ၎င်းသည် ဆက်ဆံရေး၏ အစစ်အမှန် အရောင်အသွေး ဖြစ်ပါသည်။`;
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
        return `カードは「${kw}」を行動指針とするよう助言しています。これがあなたの最大の突破口です。`;
      case 'The Hidden Force':
      case '水面下の潜在力':
        return `水面下で静かに、「${kw}」の力が出来事の舵を取っています。`;
      case 'The Outcome':
      case '最終的な結果':
        return `現在の流れが保たれれば、「${kw}」が最終的な結末を決定づけるでしょう。`;
      case 'You':
      case 'あなたの心境':
        return `あなたは「${kw}」のエネルギーを抱いて、この絆に向き合っています。`;
      case 'Them':
      case '相手の心境':
        return `相手は「${kw}」という心象風景をこの関係に持ち込んでいます。`;
      case 'The Bond':
      case '二人の絆の本質':
        return `二人の間には「${kw}」が流れており、これがこの繋がりの本物の質感です。`;
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
      return `you arrive carrying ${kw.toLowerCase()} into this connection.`;
    case 'Them':
      return `they come with ${kw.toLowerCase()} — this is what they bring.`;
    case 'The Bond':
      return `between you flows ${kw.toLowerCase()} — the true texture of the connection.`;
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
  lang: Language
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

  /* ================= 1. MIND SECTION ================= */
  let mind = '';
  if (lang === 'my') {
    const parts: string[] = [];
    if (topSuitKey) {
      parts.push(`လတ်တလောတွင် စိတ်အာရုံသည် ${SUIT_REALM[topSuitKey].my} ပေါ်၌ အဓိက သက်ရောက်နေပါသည် (${topSuitEntry[1].length} ကတ်အထိ ဤဓာတ်သဘာဝ ကျရောက်နေသောကြောင့် ဖြစ်ပါသည်)။`);
    }
    if (majors.length >= Math.ceil(cards.length / 2)) {
      parts.push(`မဟာကံကြမ္မာကတ်ကြီးများ (Major Arcana) ${majors.length} ပြားအထိ ပါဝင်နေသဖြင့် ဤကိစ္စသည် သာမန်ကိစ္စမဟုတ်ဘဲ ဘဝ၏ ကြီးမားသော ကံကြမ္မာအလှည့်အပြောင်းနှင့် စိတ်ဝိညာဉ်ရွေးချယ်မှု ဖြစ်ကြောင်း ညွှန်ပြနေပါသည်။`);
    } else if (majors.length === 0) {
      parts.push(`မဟာကံကြမ္မာကတ်ကြီးများ မပါဘဲ လက်တွေ့ကျသော ကတ်များချည်း ကျရောက်နေသဖြင့် အဆုံးအဖြတ်သည် ကြိုတင်သတ်မှတ်ထားသော ကံကြမ္မာထက် ကိုယ်တိုင်၏ နေ့စဉ်လုပ်ဆောင်ချက်နှင့် ရွေးချယ်မှုများအပေါ်တွင်သာ တိုက်ရိုက် မူတည်နေပါသည်။`);
    }
    if (reversed.length > 0) {
      const rNames = reversed.map(c => c.name.my).join('၊ ');
      parts.push(`ပြောင်းပြန်ကျဆင်းနေသော ${rNames} ကတ်များအရ စိတ်ထဲတွင် မတင်မကျဖြစ်နေခြင်း၊ သံသယဖြစ်နေခြင်း သို့မဟုတ် အတွင်းစိတ်၏ မသိမသာ တွန့်ဆုတ်နေမှုများကို သတိပြုမိစေပါသည်။`);
    } else {
      parts.push(`ကတ်အားလုံး အတည့်ကျရောက်နေသဖြင့် မိမိ၏ စိတ်ဆန္ဒနှင့် ပြင်ပလှုပ်ရှားမှုများမှာ အလွန်ပင် ဟန်ချက်ညီညီ စီးဆင်းနေပါသည်။`);
    }
    mind = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (topSuitKey) {
      parts.push(`あなたの意識のアンテナは現在、【${SUIT_REALM[topSuitKey].ja}】に強くチューニングされています（展開されたカードのうち${topSuitEntry[1].length}枚がこのスートに属しています）。`);
    }
    if (majors.length >= Math.ceil(cards.length / 2)) {
      parts.push(`大アルカナが${majors.length}枚も現れていることから、これは単なる日常の些事ではなく、あなたの魂の成長と宿命に関わる重大な転換期であることを示しています。`);
    } else if (majors.length === 0) {
      parts.push(`大アルカナが現れていないということは、運命の強制力ではなく、あなた自身の現実的で日々の選択によって未来が完全に委ねられていることを意味します。`);
    }
    if (reversed.length > 0) {
      const rNames = reversed.map(c => c.name.ja).join('、');
      parts.push(`逆位置で現れた【${rNames}】は、無意識の抵抗やエネルギーの滞り、あるいは心の中の葛藤を暗示しています。`);
    } else {
      parts.push(`すべてのカードが正位置で現れており、あなたの意識と内なる意志は稀に見る調和と明晰さを保っています。`);
    }
    mind = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (topSuitKey) {
      parts.push(`Your inner life is currently tuned to ${SUIT_REALM[topSuitKey].en} — ${topSuitEntry[1].length} of your cards belong to that suit, so it claims most of your mental bandwidth.`);
    }
    if (majors.length >= Math.ceil(cards.length / 2)) {
      parts.push(`With ${majors.length} Major Arcana in play, this isn't a small worry — deeper currents of fate and identity are working in you. You may feel that something larger than daily logistics is at stake.`);
    } else if (majors.length === 0) {
      parts.push(`No Major Arcana appeared — your mind is occupied by practical, everyday matters rather than grand destiny. That means the outcome lives firmly in your own hands.`);
    }
    if (reversed.length > 0) {
      const rNames = reversed.map(c => c.name.en).join(', ');
      parts.push(`The reversed ${rNames} suggest internal resistance: parts of you may be blocked, tired, or quietly at war with what you consciously want.`);
    } else {
      parts.push(`Every card stands upright — your conscious mind and inner current are aligned. That clarity is rare; use it.`);
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
      parts.push(`ဤနေရာတွင် အဓိက ရင်ဆိုင်ရမည့် အခက်အခဲကို ကတ်ပြားများက ရှင်းရှင်းလင်းလင်း ဖော်ပြထားပါသည် — **${obstacleCard.name.my}${obstacleCard.isReversed ? ' (ပြောင်းပြန်)' : ''}** ဖြစ်ပြီး "${obstacleCard.kw}" သည် ရှေ့တွင် ပိတ်ဆို့နေသော နံရံတစ်ခု ဖြစ်နေပါသည်။`);
    }
    if (intenseCards.length > 0) {
      parts.push(`${intenseCards.map(c => c.name.my).join('၊ ')} ကဲ့သို့သော ကတ်များက မကြာသေးမီက ကြုံတွေ့ခဲ့ရသော စိတ်ဖိစီးမှုနှင့် အပြောင်းအလဲ မုန်တိုင်းများကို ညွှန်ပြနေပါသည်။`);
    }
    if (parts.length === 0) {
      parts.push(`အလွန်အမင်း ပြင်းထန်သော ဆိုးကျိုးကတ်များ မရှိပါ — အဓိက စိန်ခေါ်မှုမှာ စိတ်မပြတ်သားမှု၊ တွေဝေမှု သို့မဟုတ် အချိန်အခါသင့်ကို စောင့်ဆိုင်းရန် လိုအပ်နေသော သဘောသာ ဖြစ်ပါသည်။`);
    }
    problems = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (obstacleCard) {
      parts.push(`スプレッドはあなたの摩擦の核心を明示しています — **【${obstacleCard.name.ja}${obstacleCard.isReversed ? '（逆位置）' : ''}】**、すなわち「${obstacleCard.kw}」こそが、あなたが乗り越えるべき壁です。`);
    }
    if (intenseCards.length > 0) {
      parts.push(`【${intenseCards.map(c => c.name.ja).join('、')}】のようなカードは、最近の激動やストレスの根源を示唆しています。`);
    }
    if (parts.length === 0) {
      parts.push(`過度に過酷なカードは見当たらず、あなたの直面している課題は、激しい対立というよりも「躊躇」「バランスの乱れ」「言葉足らず」といった内省的なものです。`);
    }
    problems = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (obstacleCard) {
      parts.push(`The spread names your core friction directly: **${obstacleCard.name.en}${obstacleCard.isReversed ? ' (reversed)' : ''}** — ${obstacleCard.kw.toLowerCase()}. This is the wall you keep meeting.`);
    }
    if (intenseCards.length > 0) {
      parts.push(`Cards like ${intenseCards.map(c => c.name.en).join(', ')} point to turbulence. Expect these themes to be the source of recent stress around "${topic}".`);
    }
    if (parts.length === 0) {
      parts.push(`No overtly harsh cards appear — your difficulties are subtler: hesitation, imbalance, or things left unsaid rather than open conflict.`);
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
      parts.push(`မျက်နှာပြင်အောက်တွင် **${hiddenCard.name.my}${hiddenCard.isReversed ? ' (ပြောင်းပြန်)' : ''}** က "${hiddenCard.kw}" အဖြစ် တိတ်တဆိတ် စွမ်းအင်ပေးနေပါသည်။ ကိုယ်တိုင် ရိပ်မိနေသော်လည်း ရှင်းရှင်းလင်းလင်း နာမည်မတပ်ရသေးသော အတွင်းစွမ်းအား ဖြစ်ပါသည်။`);
    }
    if (topSuitKey === 'swords') {
      parts.push(`ဓားကတ်များ များနေခြင်းက အတွေးလွန်ခြင်းသည် ကိုယ့်ကိုယ်ကိုယ် ပြန်လည်ထိခိုက်စေသော ဓားသွားလို ဖြစ်လာနိုင်ကြောင်း သတိပေးနေပါသည်။`);
    }
    if (topSuitKey === 'cups') {
      parts.push(`ဖလားကတ်များ အားကောင်းနေခြင်းက အတိတ်မှ စိတ်ခံစားချက်ဟောင်းများနှင့် သံယောဇဉ်ကြိုးများက နောက်ကွယ်မှ လွှမ်းမိုးနေကြောင်း ပြသနေပါသည်။`);
    }
    forces = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (hiddenCard) {
      parts.push(`水面下において、**【${hiddenCard.name.ja}${hiddenCard.isReversed ? '（逆位置）' : ''}】**が「${hiddenCard.kw}」として静かに働いています。あなたは薄々感じながらも、まだ言葉にしていなかった力です。`);
    }
    if (topSuitKey === 'swords') {
      parts.push(`ソードの多さは、「考えすぎ」そのものが見えない力となり、現実以上に自らを縛っている危険性を警告しています。`);
    }
    if (topSuitKey === 'cups') {
      parts.push(`カップの強さは、過去の感情や未完了の想いが、底流で出来事を引き寄せていることを示しています。`);
    }
    forces = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (hiddenCard) {
      parts.push(`${hiddenCard.name.en}${hiddenCard.isReversed ? ' (reversed)' : ''} works beneath the surface: ${hiddenCard.kw.toLowerCase()}. You sense it but haven't fully named it yet.`);
    }
    if (topSuitKey === 'swords') {
      parts.push(`An excess of Swords warns that overthinking itself has become a force — the stories you tell yourself may be sharper than reality.`);
    }
    if (topSuitKey === 'cups') {
      parts.push(`Strong Cups energy means old feelings and unfinished emotional business are pulling strings from below.`);
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
      parts.push(`**${adviceCard.name.my}** ၏ လမ်းညွှန်ချက်ကို အလေးထားစေချင်ပါသည် — "${adviceCard.kw}" ကို လက်ကိုင်ထားပြီး ရှေ့ခြေတစ်လှမ်းကို စတင်ပြင်ဆင်ပါ။`);
    }
    if (reversed.length > 0) {
      parts.push(`ပြောင်းပြန်ကတ်များ ကျရောက်နေသဖြင့် အပြင်ဘက်သို့ အတင်းတွန်းအားမပေးမီ မိမိ၏ အတွင်းစိတ်ကို အရင်ဆုံး အေးချမ်းရှင်းလင်းအောင် ပြုပြင်ပါ။ အနားယူပါ၊ သုံးသပ်ပါ၊ ပြီးမှ ယုံကြည်မှုအပြည့်ဖြင့် ရှေ့ဆက်ပါ။`);
    } else {
      parts.push(`ကတ်များအားလုံး အတည့်ကျရောက်နေသဖြင့် မတွန့်ဆုတ်ဘဲ ရဲရဲဝံ့ဝံ့ ရှေ့ဆက်လှမ်းပါ။ အခွင့်အလမ်းတံခါး ပွင့်နေပါပြီ။`);
    }
    advice = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (adviceCard) {
      parts.push(`**【${adviceCard.name.ja}】**の助言を真摯に受け止めてください — 「${adviceCard.kw}」。これがあなたの最大のテコとなります。`);
    }
    if (reversed.length > 0) {
      parts.push(`逆位置のカードがある場合、まず「内側の調整」が先決です。外側に無理に押し出す前に、休息と内省によって自らを解き放ち、その後に動いてください。`);
    } else {
      parts.push(`正位置の勢いは、迷いのない果断な行動を促しています。扉は開かれています。躊躇こそが最大の障害です。`);
    }
    advice = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (adviceCard) {
      parts.push(`Take ${adviceCard.name.en}'s counsel seriously: ${adviceCard.kw.toLowerCase()}. Build your next step around it.`);
    }
    parts.push(reversed.length
      ? `Where cards fall reversed, the instruction is inward first — unblock yourself before pushing outward. Rest, reflect, then act.`
      : `The upright deck urges decisive motion — the door is open now; hesitation is your only real enemy.`);
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
      parts.push(`လက်ရှိ ရပ်တည်ချက်အတိုင်း ဆက်လက်လျှောက်လှမ်းပါက **${outcomeCard.name.my}${outcomeCard.isReversed ? ' (ပြောင်းပြန်)' : ''}** ပြသသော အခြေအနေသို့ ရောက်ရှိပါလိမ့်မည် — "${outcomeCard.kw}"။`);
    }
    if (majors.length >= Math.ceil(cards.length / 2)) {
      parts.push(`မဟာကံကြမ္မာကတ်ကြီးများ ဦးဆောင်နေသဖြင့် အရာရာသည် သဘာဝစီးဆင်းမှုအတိုင်း ဖြစ်ပေါ်လာမည် ဖြစ်ပြီး ကိုယ့်ဘက်မှ အတင်းအကျပ် ထိန်းချုပ်ရန်ထက် အခြေအနေကို ပညာဉာဏ်ရှိရှိ ရင်ဆိုင်ကြိုဆိုရန် လိုအပ်ပါသည်။`);
    } else {
      parts.push(`လက်တွေ့ကတ်များ များပြားသဖြင့် အနာဂတ်သည် ကျောက်ထွင်းထားသလို မသေချာသေးပါ — မိမိ၏ နေ့စဉ် ဆုံးဖြတ်ချက်မှန်ကန်မှုများဖြင့် ကံကြမ္မာရလဒ်ကို ပိုမိုကောင်းမွန်အောင် ဖန်တီးနိုင်ပါသည်။`);
    }
    outlook = parts.join(' ');
  } else if (lang === 'ja') {
    const parts: string[] = [];
    if (outcomeCard) {
      parts.push(`現在の歩みの先には、**【${outcomeCard.name.ja}${outcomeCard.isReversed ? '（逆位置）' : ''}】**が示す境地が待っています — 「${outcomeCard.kw}」。`);
    }
    if (majors.length >= Math.ceil(cards.length / 2)) {
      parts.push(`大アルカナが主導しているため、あなたが無理に抗おうとしなくとも、運命の大きなうねりが展開していきます。無理に支配しようとせず、品格を持って迎えることが鍵です。`);
    } else {
      parts.push(`小アルカナが中心であるため、未来はまだ確定していません。日々の小さな積み重ねと選択が、全体の結末をいくらでも変えることができます。`);
    }
    outlook = parts.join(' ');
  } else {
    const parts: string[] = [];
    if (outcomeCard) {
      parts.push(`Following the current path leads toward ${outcomeCard.name.en}${outcomeCard.isReversed ? ' (reversed)' : ''}: ${outcomeCard.kw.toLowerCase()}.`);
    }
    parts.push(majors.length >= Math.ceil(cards.length / 2)
      ? `Because fate-cards dominate, much will unfold whether you push or not — your task is to meet it well, not to control it.`
      : `Because everyday cards dominate, nothing is fixed yet — small consistent choices on your side can bend the whole ending.`);
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
    if (majors.length >= Math.ceil(cards.length / 2)) {
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
    if (majors.length >= Math.ceil(cards.length / 2)) {
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
    if (majors.length >= Math.ceil(cards.length / 2)) {
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
    summary = `"${topic}" နှင့် ပတ်သက်၍ အနှစ်ချုပ်မှာ: ကတ်ပြားများအရ မိမိ၏ စိတ်အာရုံသည် ${topSuitKey ? SUIT_REALM[topSuitKey].my.split(' — ')[0] : 'ဘဝကဏ္ဍ'} ဘက်သို့ ဦးတည်နေပြီး၊ ${reversed.length ? 'အတွင်းစိတ် အတားအဆီးများကို ဖြေလျှော့ရန် လိုအပ်နေချိန်တွင်' : 'စိတ်ဆန္ဒနှင့် စွမ်းအင်များ ညီညွတ်စွာ စီးဆင်းနေကာ'} နောက်ဆုံး၌ ${outcomeCard ? outcomeCard.name.my : 'အသစ်သော အခွင့်အလမ်း'} ဆီသို့ ဦးတည်နေကြောင်း ဖော်ပြနေပါသည်။ တာရော့ကတ်ပြားများသည် အနာဂတ်ရာသီဥတုကို ပြသပေးသော လမ်းညွှန်ဖြစ်ပြီး ကံကြမ္မာစတီယာရင်ကို အမှန်တကယ် ကိုင်တွယ်မောင်းနှင်သူမှာ သင်ကိုယ်တိုင်သာ ဖြစ်ပါသည်။`;
  } else if (lang === 'ja') {
    summary = `「${topic}」について：カードは、あなたの意識が【${topSuitKey ? SUIT_REALM[topSuitKey].ja.split(' — ')[0] : '多面的な波動'}】に向かい、${reversed.length ? '内なる滞りを手放す試練' : '稀に見る意志と感情の調和'}を経て、最終的に【${outcomeCard ? outcomeCard.name.ja : '未踏の未来'}】へと向かっていることを示しています。タロットは運命の天気予報を示すものであり、船の舵を握っているのは、いつでもあなた自身です。`;
  } else {
    summary = `On "${topic}": the cards tell of a mind occupied by ${topSuitKey ? SUIT_REALM[topSuitKey].en.split(' — ')[0] : 'shifting currents'}, tested by ${reversed.length ? 'inner blockages seeking release' : 'a rare alignment of will and feeling'}, and moving toward ${outcomeCard ? outcomeCard.name.en : 'an unwritten close'}. The cards do not decide for you — they only show the weather. You still hold the wheel.`;
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
