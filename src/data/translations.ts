import { Language, LocalizedText } from '../types/tarot';

export const UI_TRANSLATIONS = {
  appName: {
    en: 'ARCANIUM',
    my: 'အာခေးနီးယမ်း (ARCANIUM)',
    ja: 'ARCANIUM（アルカニウム）'
  },
  appSubtitle: {
    en: 'The cards already know what you seek',
    my: 'ကတ်ပြားများက သင့်စိတ်ထဲရှိ အဖြေကို ကြိုတင်သိရှိနေပါသည်',
    ja: 'カードは、あなたが求める答えをすでに知っています'
  },
  step1Title: {
    en: 'I. What brings you to the cards?',
    my: '၁။ သိရှိလိုသော ကံကြမ္မာအမေးပုစ္ဆာကို ရွေးချယ်ပါ',
    ja: 'I. あなたがカードに尋ねたいテーマは何ですか？'
  },
  questionPlaceholder: {
    en: '…or whisper your own question (optional)',
    my: '…သို့မဟုတ် သိလိုရာ မေးခွန်းကို တိုက်ရိုက် ရေးသားမေးမြန်းပါ',
    ja: '…または、心にある質問を自由に入力してください（任意）'
  },
  step2Title: {
    en: 'II. Choose your spread',
    my: '၂။ ကတ်ခင်းကျင်းပုံ (Spread) ကို ရွေးချယ်ပါ',
    ja: 'II. スプレッド（展開法）を選んでください'
  },
  step3Title: {
    en: 'III. Breathe. Focus on your question. Then choose',
    my: '၃။ စိတ်ကို တည်ငြိမ်စွာထားပြီး အာရုံစူးစိုက်ကာ ကတ်များကို ရွေးချယ်ပါ',
    ja: 'III. 深呼吸をして、心を静めてください。そしてカードを選んでください'
  },
  oneCardPick: {
    en: 'one card',
    my: '၁ ကတ်',
    ja: '1枚'
  },
  cardsPick: {
    en: 'cards',
    my: 'ကတ်',
    ja: '枚'
  },
  flipHint: {
    en: 'Click each card to reveal its ancient prophecy…',
    my: 'ကတ်ပြားများကို တစ်ခုချင်း ဖွင့်လှစ်ပြီး ကံကြမ္မာ၏ သတင်းစကားကို ဖတ်ကြားပါ…',
    ja: '各カードをクリックして、運命の託宣を明かしてください…'
  },
  readBtn: {
    en: 'Read the Cards',
    my: 'ကံကြမ္မာနိမိတ် ဖတ်ကြားမည်',
    ja: 'カードの啓示を読む'
  },
  revealAllBtn: {
    en: 'Reveal All Cards',
    my: 'ကတ်အားလုံးကို တစ်ပြိုင်နက် ဖွင့်မည်',
    ja: 'すべてのカードを表にする'
  },
  shuffleAgainBtn: {
    en: '✦ Shuffle Again ✦',
    my: '✦ မေးခွန်းအသစ်ဖြင့် ပြန်လည်စတင်မည် ✦',
    ja: '✦ 新しい問いを立てる（再シャッフル） ✦'
  },
  saveToJournalBtn: {
    en: 'Save to Journal',
    my: 'မှတ်တမ်းဂျာနယ်တွင် သိမ်းမည်',
    ja: 'ジャーナルに保存'
  },
  savedToJournalBtn: {
    en: 'Saved to Journal ✓',
    my: 'မှတ်တမ်းတင်ပြီးပါပြီ ✓',
    ja: 'ジャーナルに保存済み ✓'
  },
  exportScrollBtn: {
    en: 'Export Sacred Scroll',
    my: 'ကံကြမ္မာပေစာလိပ် ထုတ်ယူမည်',
    ja: '預言の巻物をエクスポート'
  },
  codexBtn: {
    en: '78-Card Codex',
    my: '၇၈ ပြား တာရော့ကျမ်း',
    ja: '78枚のタロット図鑑'
  },
  journalBtn: {
    en: 'Journal',
    my: 'ဗေဒင်မှတ်တမ်း',
    ja: 'リーディング記録'
  },
  dailyCardBtn: {
    en: 'Daily Oracle',
    my: 'နေ့စဉ် နိမိတ်ကတ်',
    ja: 'デイリー・オラクル'
  },
  profileBtn: {
    en: 'Natal Profile',
    my: 'မွေးရာပါ ဇာတာမှတ်တမ်း',
    ja: '出生ホロスコープ'
  },
  askOracleBtn: {
    en: 'Ask Oracle',
    my: 'နိမိတ်ထပ်မံမေးမည်',
    ja: 'オラクルに対話する'
  },
  voiceListenBtn: {
    en: 'Listen to Oracle',
    my: 'နိမိတ်အသံ ဖတ်ကြားစေမည်',
    ja: 'オラクルの託宣を聴く'
  },
  voiceStopBtn: {
    en: 'Stop Voice',
    my: 'အသံ ရပ်တန့်မည်',
    ja: '音声停止'
  },
  polarityTitle: {
    en: '⚖️ Certainty & Cosmic Polarity',
    my: '⚖️ အဖြေ၏ သေချာမှုနှင့် စကြဝဠာချိန်ခွင်လျှာ (Polarity)',
    ja: '⚖️ 運命の極性と確信度（Yes/No・ポラリティ）'
  },
  elementalTitle: {
    en: '🜂 Elemental Dignities & Alchemy',
    my: '🜂 ဓာတ်ကြီးလေးပါး ချိန်ခွင်လျှာနှင့် ဓာတုပေါင်းစပ်မှု (Elemental Alchemy)',
    ja: '🜂 四大元素の品格と錬金術的調和'
  },
  synergyTitle: {
    en: '⚡ Card Synergy & Sacred Alchemy',
    my: '⚡ ကတ်ပြားများအကြား အထူး ပေါင်းစပ်စွမ်းအင် (Card Synergy)',
    ja: '⚡ カード間の特別なシナジー（聖なる共鳴）'
  },
  quintessenceTitle: {
    en: '👑 The Quintessence (Master Shadow Key)',
    my: '👑 ကံကြမ္မာ၏ အဓိက မာစတာသော့ချက် (The Quintessence)',
    ja: '👑 クインテッセンス（運命を統べる根源のマスターキー）'
  },
  altarViewBtn: {
    en: 'Altar View',
    my: 'နိမိတ်ပလ္လင် ခင်းကျင်းပုံ',
    ja: '祭壇スプレッド配置'
  },
  analysisViewBtn: {
    en: 'Deep Analysis',
    my: 'အသေးစိတ် ဗေဒင်သုံးသပ်ချက်',
    ja: '深層リーディング'
  },
  lunarPhaseTitle: {
    en: 'Lunar Transit & Cosmic Weather',
    my: 'ယနေ့ လနက္ခတ်နှင့် ကောင်းကင်ရာသီဥတု',
    ja: '月相と天体配置のエネルギー'
  },
  ritualTitle: {
    en: '🕯️ Manifestation Affirmation & Micro-Ritual',
    my: '🕯️ အဓိဋ္ဌာန်ပြုချက်နှင့် မင်္ဂလာယတြာ အစီအမံ',
    ja: '🕯️ 現実化のアファメーションと聖なる小儀式'
  },
  cardInspectorHint: {
    en: 'Click any card to inspect its deep esoteric symbolism',
    my: 'ကတ်တစ်ခုချင်းစီ၏ အသေးစိတ် အဓိပ္ပာယ်နှင့် နက္ခတ်ကို ကြည့်ရန် ကတ်ကို နှိပ်ပါ',
    ja: 'カードをクリックすると詳細な象徴体系と星位を閲覧できます'
  },
  ambientAudio: {
    en: 'Ambient Sound (432Hz)',
    my: 'စိတ်ငြိမ် အသံလှိုင်း (432Hz)',
    ja: '聖なる環境音（432Hz）'
  },
  soundFx: {
    en: 'Sound FX',
    my: 'အသံထွက်',
    ja: '効果音'
  },
  reversedTag: {
    en: '(Reversed)',
    my: '(ပြောင်းပြန်ကျ)',
    ja: '（逆位置）'
  },
  inThisPosition: {
    en: 'In this position',
    my: 'ဤနေရာတွင် ကျရောက်သော သဘောသဘာဝ',
    ja: 'この位置での意味'
  },
  sectionTitles: {
    mind: {
      en: "🧠 What's Been on Your Mind",
      my: "🧠 စိတ်အတွင်း အလေးထားတွေးတောနေသော အရာ",
      ja: "🧠 心の深層と意識のフォーカス"
    },
    problems: {
      en: "⚡ The Problems You've Been Facing",
      my: "⚡ ရင်ဆိုင်နေရသော အခက်အခဲနှင့် စိန်ခေါ်မှုများ",
      ja: "⚡ 直面している試練と摩擦"
    },
    forces: {
      en: "🌙 Hidden Forces at Work",
      my: "🌙 မမြင်ရဘဲ လွှမ်းမိုးနေသော အတွင်းစွမ်းအားများ",
      ja: "🌙 水面下で働く見えない力"
    },
    advice: {
      en: "🕯️ What the Cards Ask of You",
      my: "🕯️ ကတ်ပြားများ၏ လမ်းညွှန်အကြံပြုချက်",
      ja: "🕯️ カードが求める行動と心構え"
    },
    outlook: {
      en: "🌅 Where Things Are Heading",
      my: "🌅 ရှေ့ဆက်ဖြစ်ပေါ်လာမည့် အလားအလာ",
      ja: "🌅 これから向かう未来の展望"
    },
    timeline: {
      en: "⏳ When — The Timing of Things",
      my: "⏳ အချိန်ကာလနှင့် အရှိန်အဟုန် ခန့်မှန်းချက်",
      ja: "⏳ 運命のタイミング・時期の目安"
    },
    archetype: {
      en: "✨ Your Card Archetype",
      my: "✨ သင့်အတွင်းစိတ်၏ မူလစရိုက်လက္ခဏာ (Archetype)",
      ja: "✨ あなたの魂の元型（アーキタイプ）"
    },
    summary: {
      en: "The Oracle's Synthesis",
      my: "ကံကြမ္မာ၏ အနှစ်ချုပ် လမ်းညွှန်ချက်",
      ja: "オラクルによる最終統合理念"
    }
  },
  readingTitle: {
    en: '✦ THE READING ✦',
    my: '✦ ကံကြမ္မာဗေဒ နိမိတ်ဖတ်ကြားချက် ✦',
    ja: '✦ 運命の託宣（リーディング結果） ✦'
  },
  reflectionsTitle: {
    en: 'Personal Reflections & Notes',
    my: 'ကိုယ်ပိုင်ခံစားချက်နှင့် အတွေးအမြင် မှတ်စု',
    ja: '個人的な気づきと瞑想ノート'
  },
  reflectionsPlaceholder: {
    en: 'Jot down any personal feelings, insights, or intuitions from this reading...',
    my: 'ဤဗေဒင်နိမိတ်မှ ရရှိသော အသိဉာဏ်၊ အတွေးနှင့် စိတ်ခံစားချက်များကို ဤနေရာတွင် မှတ်တမ်းတင်ပါ...',
    ja: 'このリーディングから得た直感、気づき、感情をここに記録してください...'
  },
  copyBtn: {
    en: 'Copy',
    my: 'ကူးယူမည်',
    ja: 'コピー'
  },
  copiedBtn: {
    en: 'Copied ✓',
    my: 'ကူးယူပြီး ✓',
    ja: 'コピー完了 ✓'
  },
  nextBtn: {
    en: 'Next',
    my: 'ရှေ့သို့',
    ja: '次へ'
  },
  changeTopicBtn: {
    en: '← Change Topic',
    my: '← ခေါင်းစဉ် အသစ်ရွေးမည်',
    ja: '← テーマを変更する'
  },
  communeAndDrawBtn: {
    en: 'Commune & Draw',
    my: 'အာရုံပြု၍ ကတ်စတင်ရွေးမည်',
    ja: '精神を集中してカードを引く'
  },
  tapToFlip: {
    en: 'Tap to Flip',
    my: 'ဖွင့်ရန် နှိပ်ပါ',
    ja: 'タップして開く'
  },
  topicLabel: {
    en: 'Topic',
    my: 'ခေါင်းစဉ်',
    ja: 'テーマ'
  },
  spreadLabel: {
    en: 'Spread',
    my: 'ခင်းကျင်းပုံ',
    ja: 'スプレッド'
  },
  dateLabel: {
    en: 'Date',
    my: 'ရက်စွဲ',
    ja: '日時'
  }
};

export const TOPICS = [
  {
    id: 'love',
    icon: '💞',
    title: {
      en: 'Love & Relationships',
      my: 'အချစ်ရေးနှင့် သံယောဇဉ်',
      ja: '恋愛・パートナーシップ'
    },
    description: {
      en: 'Explore feelings, bonds, emotional depths, and soul connections.',
      my: 'နှလုံးသားခံစားချက်များ၊ ချစ်ခြင်းမေတ္တာနှင့် ဝိညာဉ်ချင်းချိတ်ဆက်မှုများ။',
      ja: '愛の絆、深層の感情、魂のパートナーシップを探求します。'
    },
    defaultQuestion: {
      en: 'Where is my heart and relationship heading?',
      my: 'ကျွန်ုပ်၏ အချစ်ရေးနှင့် နှလုံးသားဆက်ဆံရေး မည်သို့ဖြစ်လာမည်နည်း။',
      ja: '私の恋愛関係と心の行方はどこに向かっていますか？'
    },
    suggestedSpread: 'celtic'
  },
  {
    id: 'career',
    icon: '💼',
    title: {
      en: 'Career & Purpose',
      my: 'အလုပ်အကိုင်နှင့် ဘဝရည်မှန်းချက်',
      ja: '仕事・キャリア・使命'
    },
    description: {
      en: 'Uncover career trajectories, hidden ambitions, and professional triumphs.',
      my: 'အလုပ်အကိုင်လမ်းကြောင်းများ၊ ရည်မှန်းချက်များနှင့် အောင်မြင်မှုနိမိတ်များ။',
      ja: '天職への導き、潜在能力、そして仕事上の飛躍を見通します。'
    },
    defaultQuestion: {
      en: 'What career opportunity and direction awaits me?',
      my: 'ကျွန်ုပ်၏ အလုပ်အကိုင်နှင့် အောင်မြင်မှုအခွင့်အလမ်း မည်သို့ရှိသနည်း။',
      ja: 'どのような仕事の好機と進路が待っていますか？'
    },
    suggestedSpread: 'cross'
  },
  {
    id: 'fortune',
    icon: '💰',
    title: {
      en: 'Money & Abundance',
      my: 'စီးပွားဥစ္စာနှင့် ကြွယ်ဝချမ်းသာမှု',
      ja: '金運・豊かさ・繁栄'
    },
    description: {
      en: 'Navigate financial tides, material security, and prosperity.',
      my: 'ငွေကြေးစီးဆင်းမှု၊ ရုပ်ဝတ္ထုလုံခြုံမှုနှင့် စီးပွားလာဘ်လာဘ။',
      ja: '金運の潮流、現実的な基盤、物質的な豊かさを紐解きます。'
    },
    defaultQuestion: {
      en: 'How can I unlock financial abundance and security?',
      my: 'စီးပွားဥစ္စာကြွယ်ဝမှုနှင့် တည်ငြိမ်မှုကို မည်သို့ရယူနိုင်မည်နည်း။',
      ja: '金運の流れと豊かさを引き寄せるにはどうすべきですか？'
    },
    suggestedSpread: 'three'
  },
  {
    id: 'growth',
    icon: '🌱',
    title: {
      en: 'Personal Growth',
      my: 'အတွင်းစိတ် ရင့်ကျက်ဖွံ့ဖြိုးမှုနှင့် ကုစားခြင်း',
      ja: '自己成長・魂の進化'
    },
    description: {
      en: 'Awaken spiritual clarity, inner healing, and personal alchemy.',
      my: 'စိတ်ဝိညာဉ်ကြည်လင်မှု၊ အတွင်းစိတ်ကုစားမှုနှင့် အသိဉာဏ်ပွင့်လင်းခြင်း။',
      ja: '魂の覚醒、内なる癒やし、自己変容のレッスンを照らします。'
    },
    defaultQuestion: {
      en: 'What inner lesson is calling for my growth?',
      my: 'ကျွန်ုပ်၏ စိတ်ဝိညာဉ်တိုးတက်ရန် မည်သည့်သင်ခန်းစာကို လေ့လာရမည်နည်း။',
      ja: '私の内なる成長のために必要な学びは何ですか？'
    },
    suggestedSpread: 'three'
  },
  {
    id: 'decision',
    icon: '⚔️',
    title: {
      en: 'A Crossroads Decision',
      my: 'ဘဝအလှည့်အပြောင်း လမ်းခွဲနှင့် အဆုံးအဖြတ်',
      ja: '運命の岐路・決断'
    },
    description: {
      en: 'Illuminate forks in the road, weighing outcomes and unspoken risks.',
      my: 'လမ်းဆုံလမ်းခွများ၊ ရလဒ်များအား ချိန်ဆခြင်းနှင့် မမြင်ရသော အန္တရာယ်များ။',
      ja: '分かれ道の先にある結末、潜在するリスクと好機を明かします。'
    },
    defaultQuestion: {
      en: 'What should I know before making this crucial choice?',
      my: 'ဤအရေးကြီးသော ဆုံးဖြတ်ချက်မချမီ မည်သည့်အရာကို ကြိုတင်သိရှိထားသင့်သနည်း။',
      ja: 'この重要な選択をする前に知っておくべき真実は何ですか？'
    },
    suggestedSpread: 'decision_fork'
  },
  {
    id: 'unknown',
    icon: '🔮',
    title: {
      en: 'The Sacred Unknown',
      my: 'စကြဝဠာ၏ လျှို့ဝှက်နိမိတ်နှင့် သတင်းစကား',
      ja: '未知なる啓示・直感'
    },
    description: {
      en: 'Direct cosmic channel for whatever the universe needs you to hear.',
      my: 'စကြဝဠာက သင့်အား အသိပေးလိုသော တိုက်ရိုက်ကံကြမ္မာသတင်းစကား။',
      ja: '今、宇宙があなたに最も届けたいメッセージを受け取ります。'
    },
    defaultQuestion: {
      en: 'What message does the universe have for me right now?',
      my: 'လောကစကြဝဠာက ကျွန်ုပ်အား ယခုအချိန်တွင် မည်သည့်သတင်းစကား ပေးလိုသနည်း။',
      ja: '宇宙が今、私に最も伝えたいメッセージは何ですか？'
    },
    suggestedSpread: 'single'
  }
];

export const QUICK_INQUIRIES = [
  {
    id: 'q1',
    text: {
      en: 'What guidance does the universe have for me today?',
      my: 'ယနေ့အတွက် စကြဝဠာက မည်သည့်လမ်းညွှန်ချက် ပေးလိုသနည်း။',
      ja: '今日、宇宙が私に授けたい導きは何ですか？'
    }
  },
  {
    id: 'q2',
    text: {
      en: 'What hidden force or challenge is currently around me?',
      my: 'ကျွန်ုပ်ပတ်ဝန်းကျင်တွင် မည်သည့် လျှို့ဝှက်စွမ်းအား သို့မဟုတ် စိန်ခေါ်မှု ရှိနေသနည်း။',
      ja: '今、私の周りで静かに働いている見えない力や試練は何ですか？'
    }
  },
  {
    id: 'q3',
    text: {
      en: 'What should I focus on to achieve true peace and clarity?',
      my: 'အေးချမ်းမှုနှင့် ရှင်းလင်းပြတ်သားမှုရရှိရန် မည်သည့်အရာကို အဓိက အာရုံစိုက်ရမည်နည်း။',
      ja: '真の心の平穏と明晰さを得るために、何に意識を向けるべきですか？'
    }
  },
  {
    id: 'q4',
    text: {
      en: 'Where is my most important relationship heading?',
      my: 'ကျွန်ုပ်၏ အရေးကြီးဆုံး ဆက်ဆံရေးသည် မည်သည့်လားရာသို့ ဦးတည်နေသနည်း။',
      ja: '私にとって最も大切な関係性は、今後どこに向かいますか？'
    }
  }
];

export const SPREAD_CONFIGS = [
  {
    id: 'single',
    name: {
      en: '☉ One Card',
      my: '☉ တစ်ကတ်နိမိတ် ခင်းကျင်းမှု',
      ja: '☉ ワンオラクル（1枚）'
    },
    subtitle: {
      en: 'A single flash of insight. Quick, sharp, honest.',
      my: 'တိုက်ရိုက်အဖြေ။ မြန်ဆန်၊ ထက်မြက်ပြီး ရိုးသားသော နိမိတ်။',
      ja: '一筋の明確な閃き。迅速で的確、純粋な真実。'
    },
    cardCount: 1,
    description: {
      en: 'Direct single-card oracle answer for immediate clarity.',
      my: 'ချက်ချင်းပြတ်သားသော အဖြေအတွက် တစ်ကတ်ဆွဲ နိမိတ်။',
      ja: '明快な答えを導く1枚のオラクルリーディング。'
    },
    positions: [
      {
        id: 1,
        name: {
          en: 'The Answer',
          my: 'ကံကြမ္မာ၏ အဖြေ',
          ja: '運命の答え'
        },
        description: {
          en: 'The core essence and spiritual answer to your inquiry.',
          my: 'သင့်မေးခွန်းအတွက် အဓိကအနှစ်သာရနှင့် အဖြေ။',
          ja: 'あなたの問いに対する本質的な答え。'
        }
      }
    ]
  },
  {
    id: 'three',
    name: {
      en: '☾ Three Cards',
      my: '☾ သုံးကတ်ခင်းကျင်းမှု',
      ja: '☾ スリーカード（3枚）'
    },
    subtitle: {
      en: 'Past · Present · Future. The river of time.',
      my: 'အတိတ် • ပစ္စုပ္ပန် • အနာဂတ်။ အချိန်ကာလ၏ စီးဆင်းမှု။',
      ja: '過去・現在・未来。時を流れる運命の河。'
    },
    cardCount: 3,
    description: {
      en: 'Classic temporal spread tracing how the past creates today and tomorrow.',
      my: 'အတိတ်က ယနေ့နှင့် မနက်ဖြန်ကို မည်သို့ပုံဖော်သည်ကို ကြည့်ရှုသော ရှေးရိုးခင်းကျင်းပုံ။',
      ja: '過去から現在、そして未来への運命の軌跡を読み解く伝統的な展開法。'
    },
    positions: [
      {
        id: 1,
        name: {
          en: 'Past',
          my: 'အတိတ်အခြေခံ',
          ja: '過去の要因'
        },
        description: {
          en: 'Past influences and foundational karma.',
          my: 'အတိတ်က လွှမ်းမိုးခဲ့သော အကြောင်းတရားများနှင့် အရင်းအမြစ်။',
          ja: '現在を形作った過去の出来事や根本原因。'
        }
      },
      {
        id: 2,
        name: {
          en: 'Present',
          my: 'ပစ္စုပ္ပန်အခြေအနေ',
          ja: '現在の状況'
        },
        description: {
          en: 'Current energetic state and immediate reality.',
          my: 'လက်ရှိကြုံတွေ့နေရသော အခြေအနေနှင့် စွမ်းအင်။',
          ja: '今あなたが立っている足元と直面している現実。'
        }
      },
      {
        id: 3,
        name: {
          en: 'Future',
          my: 'အနာဂတ်လားရာ',
          ja: '未来の展望'
        },
        description: {
          en: 'Projected outcome if current trajectory continues.',
          my: 'ဤလမ်းအတိုင်း ဆက်သွားပါက ပေါ်ပေါက်လာမည့် ရလဒ်။',
          ja: 'このまま進んだ先に待ち受ける運命の結末。'
        }
      }
    ]
  },
  {
    id: 'cross',
    name: {
      en: '✦ Five-Card Cross',
      my: '✦ ငါးကတ် ကြက်ခြေခတ် ခင်းကျင်းမှု',
      ja: '✦ 5カード・クロス（5枚）'
    },
    subtitle: {
      en: 'Situation · Obstacle · Advice · Hidden force · Outcome.',
      my: 'အခြေအနေ • အတားအဆီး • လမ်းညွှန်ချက် • လျှို့ဝှက်စွမ်းအား • ရလဒ်။',
      ja: '現状・障害・助言・潜在力・最終結果。'
    },
    cardCount: 5,
    description: {
      en: 'Comprehensive situational diagnosis and problem solving.',
      my: 'ပြဿနာကို ထဲထဲဝင်ဝင် ခွဲခြမ်းစိတ်ဖြာ၍ အဖြေရှာပေးသော ခင်းကျင်းမှု။',
      ja: '状況を多角的に分析し、課題を乗り越えるための完全な診断。'
    },
    positions: [
      {
        id: 1,
        name: {
          en: 'The Situation',
          my: 'အဓိက အခြေအနေ',
          ja: '現状の本質'
        },
        description: {
          en: 'The core truth of the matter.',
          my: 'ကိစ္စရပ်၏ အဓိက အနှစ်သာရ။',
          ja: '問題の中心にある真実。'
        }
      },
      {
        id: 2,
        name: {
          en: 'The Obstacle',
          my: 'တားဆီးနေသော အတားအဆီး',
          ja: '直面する障害'
        },
        description: {
          en: 'What blocks you or causes friction.',
          my: 'သင့်အား ပိတ်ပင်တားဆီးနေသော အရာ။',
          ja: '前進を阻んでいる壁や摩擦。'
        }
      },
      {
        id: 3,
        name: {
          en: 'The Advice',
          my: 'လုပ်ဆောင်ရန် အကြံပြုချက်',
          ja: '導きの助言'
        },
        description: {
          en: 'The recommended action and mindset.',
          my: 'အောင်မြင်ရန် သုံးစွဲရမည့် နည်းလမ်းနှင့် စိတ်ထား။',
          ja: '状況を打開するための最善の行動と姿勢。'
        }
      },
      {
        id: 4,
        name: {
          en: 'The Hidden Force',
          my: 'မမြင်ရသော လျှို့ဝှက်စွမ်းအား',
          ja: '水面下の潜在力'
        },
        description: {
          en: 'Subconscious or unseen forces driving events.',
          my: 'အတွင်းပိုင်းမှ မသိမသာ တွန်းအားပေးနေသော စွမ်းအင်။',
          ja: '無意識や見えない場所で影響を及ぼしている力。'
        }
      },
      {
        id: 5,
        name: {
          en: 'The Outcome',
          my: 'နောက်ဆုံးရလဒ်',
          ja: '最終的な結果'
        },
        description: {
          en: 'The resolution and destination.',
          my: 'နောက်ဆုံးတွင် ပေါ်ထွက်လာမည့် အဆုံးသတ်ရလဒ်။',
          ja: '導かれる最終的な結末と実り。'
        }
      }
    ]
  },
  {
    id: 'celtic',
    name: {
      en: '✧ Relationship Spread',
      my: '✧ အချစ်ရေးနှင့် သံယောဇဉ် ခင်းကျင်းမှု',
      ja: '✧ リレーションシップ・スプレッド（5枚）'
    },
    subtitle: {
      en: 'You · Them · The Bond · The Challenge · The Path Forward.',
      my: 'သင် • သူ/သူမ • သံယောဇဉ် • စိန်ခေါ်မှု • ရှေ့ဆက်ရမည့်လမ်း။',
      ja: 'あなた・相手・絆・試練・進むべき道。'
    },
    cardCount: 5,
    description: {
      en: 'Deep interpersonal alchemy between two hearts.',
      my: 'လူနှစ်ဦးကြားရှိ စိတ်ခံစားချက်နှင့် ဆက်ဆံရေးကို အသေးစိတ် ဖော်ပြပေးသော ခင်းကျင်းမှု။',
      ja: '二人の心象風景、絆の深さ、そして未来への道筋を照らす展開法。'
    },
    positions: [
      {
        id: 1,
        name: {
          en: 'You',
          my: 'သင့်ဘက်မှ စွမ်းအင်',
          ja: 'あなたの心境'
        },
        description: {
          en: 'Your feelings, energy, and perspective.',
          my: 'သင့်ဘက်မှ သယ်ဆောင်လာသော စိတ်ခံစားချက်နှင့် စွမ်းအင်။',
          ja: 'あなたがこの関係に持ち込んでいる感情とエネルギー。'
        }
      },
      {
        id: 2,
        name: {
          en: 'Them',
          my: 'သူ့ဘက်မှ စွမ်းအင်',
          ja: '相手の心境'
        },
        description: {
          en: 'Their thoughts, emotions, and unspoken attitude.',
          my: 'သူ/သူမဘက်မှ စိတ်အခြေအနေနှင့် သဘောထား။',
          ja: '相手が抱いている本音や感情の波。'
        }
      },
      {
        id: 3,
        name: {
          en: 'The Bond',
          my: 'နှစ်ဦးကြား သံယောဇဉ်',
          ja: '二人の絆の本質'
        },
        description: {
          en: 'The true chemistry and connection between you.',
          my: 'နှစ်ဦးကြား စီးဆင်းနေသော သံယောဇဉ်၏ အစစ်အမှန် သဘောသဘာဝ။',
          ja: '二人の間に流れる本物の繋がりと魂の共鳴。'
        }
      },
      {
        id: 4,
        name: {
          en: 'The Challenge',
          my: 'ရင်ဆိုင်ရမည့် စိန်ခေါ်မှု',
          ja: '乗り越えるべき試練'
        },
        description: {
          en: 'The friction point testing the union.',
          my: 'ဆက်ဆံရေးကို စမ်းသပ်နေသော ပွတ်တိုက်မှုနှင့် အခက်အခဲ။',
          ja: '関係を深めるために乗り越えるべき摩擦と課題。'
        }
      },
      {
        id: 5,
        name: {
          en: 'The Path Forward',
          my: 'ရှေ့ဆက်ရမည့် လမ်းကြောင်း',
          ja: '未来へ続く道'
        },
        description: {
          en: 'How the relationship moves ahead.',
          my: 'ဤဆက်ဆံရေး ရှေ့ဆက်လှမ်းချီရမည့် လမ်းညွှန်ချက်။',
          ja: '二人が共に歩んでいくための最善の道筋。'
        }
      }
    ]
  },
  {
    id: 'decision_fork',
    name: {
      en: '⚔️ Two Paths Decision Fork',
      my: '⚔️ လမ်းနှစ်ခွ ရွေးချယ်မှု ခင်းကျင်းပုံ',
      ja: '⚔️ 運命の分岐点（2つの道・5枚）'
    },
    subtitle: {
      en: 'Crossroads · Path A Flow · Path A Outcome · Path B Flow · Path B Outcome.',
      my: 'လမ်းဆုံလမ်းခွ • လမ်းကြောင်း A အလားအလာ • လမ်းကြောင်း A ရလဒ် • လမ်းကြောင်း B အလားအလာ • လမ်းကြောင်း B ရလဒ်။',
      ja: '分岐点・道Aの展開・道Aの結末・道Bの展開・道Bの結末。'
    },
    cardCount: 5,
    description: {
      en: 'Compare two diverging decisions side by side before choosing.',
      my: 'ရွေးချယ်စရာ လမ်းကြောင်းနှစ်ခု၏ အကျိုးအပြစ်နှင့် အနာဂတ်ရလဒ်များကို နှိုင်းယှဉ်ကြည့်ရှုခြင်း။',
      ja: '2つの選択肢がもたらす未来の軌跡を左右で比較対照する決定版スプレッド。'
    },
    positions: [
      {
        id: 1,
        name: {
          en: 'The Crossroads',
          my: 'လက်ရှိ လမ်းဆုံလမ်းခွ',
          ja: '現在の分岐点'
        },
        description: {
          en: 'The current tension or decision point.',
          my: 'လက်ရှိ ရင်ဆိုင်နေရသော အဆုံးအဖြတ် လမ်းခွဲ။',
          ja: '今まさにあなたが立たされている選択の岐路。'
        }
      },
      {
        id: 2,
        name: {
          en: 'Path A: Trajectory',
          my: 'လမ်းကြောင်း (က) ၏ အလားအလာ',
          ja: '道A：展開とエネルギー'
        },
        description: {
          en: 'What unfolds if you take the first path.',
          my: 'ပထမလမ်းကြောင်းကို ရွေးချယ်ပါက ဖြစ်ပေါ်လာမည့် အခြေအနေ။',
          ja: '第1の選択肢を選んだ場合のプロセス。'
        }
      },
      {
        id: 3,
        name: {
          en: 'Path A: Outcome',
          my: 'လမ်းကြောင်း (က) ၏ အဆုံးသတ်ရလဒ်',
          ja: '道A：最終結果'
        },
        description: {
          en: 'The long-term destination of the first path.',
          my: 'ပထမလမ်းကြောင်း၏ နောက်ဆုံး အသီးအပွင့် ရလဒ်။',
          ja: '第1の選択肢の終着点と実り。'
        }
      },
      {
        id: 4,
        name: {
          en: 'Path B: Trajectory',
          my: 'လမ်းကြောင်း (ခ) ၏ အလားအလာ',
          ja: '道B：展開とエネルギー'
        },
        description: {
          en: 'What unfolds if you take the second path.',
          my: 'ဒုတိယလမ်းကြောင်းကို ရွေးချယ်ပါက ဖြစ်ပေါ်လာမည့် အခြေအနေ။',
          ja: '第2の選択肢を選んだ場合のプロセス。'
        }
      },
      {
        id: 5,
        name: {
          en: 'Path B: Outcome',
          my: 'လမ်းကြောင်း (ခ) ၏ အဆုံးသတ်ရလဒ်',
          ja: '道B：最終結果'
        },
        description: {
          en: 'The long-term destination of the second path.',
          my: 'ဒုတိယလမ်းကြောင်း၏ နောက်ဆုံး အသီးအပွင့် ရလဒ်။',
          ja: '第2の選択肢の終着点と実り。'
        }
      }
    ]
  },
  {
    id: 'chakra_spread',
    name: {
      en: '🧘 7-Chakra Alignment',
      my: '🧘 စွမ်းအင်စက်ဝိုင်း ၇ ခု ခင်းကျင်းပုံ (7 Chakras)',
      ja: '🧘 7つのチャクラ・エネルギー診断（7枚）'
    },
    subtitle: {
      en: 'Root · Sacral · Solar Plexus · Heart · Throat · Third Eye · Crown.',
      my: 'မူလအခြေစိုက် • ဖန်တီးမှု • အတွင်းခွန်အား • မေတ္တာ • အမှန်တရား • ဉာဏ်အလင်း • စကြဝဠာချိတ်ဆက်မှု။',
      ja: '第1（基底）・第2（仙骨）・第3（太陽神経叢）・第4（心臓）・第5（喉）・第6（第三の目）・第7（頭頂）。'
    },
    cardCount: 7,
    description: {
      en: 'Diagnose spiritual, emotional, and physical energetic centers.',
      my: 'မိမိ၏ စိတ်ဝိညာဉ်၊ ခံစားချက်နှင့် စွမ်းအင်စက်ဝန်းများကို အဆင့်ဆင့် စစ်ဆေးကုစားခြင်း။',
      ja: '肉体・精神・魂の7つのエネルギーセンターの状態を詳細にスキャンする聖なる展開法。'
    },
    positions: [
      {
        id: 1,
        name: {
          en: '1. Root Chakra (Muladhara)',
          my: '၁။ မူလအခြေစိုက် စွမ်းအင် (ရုပ်ဝတ္ထုနှင့် လုံခြုံမှု)',
          ja: '第1チャクラ：ルート（生存・物質的基盤）'
        },
        description: {
          en: 'Physical vitality, material survival, and sense of safety.',
          my: 'ရုပ်ဝတ္ထုလုံခြုံရေး၊ ကျန်းမာရေးနှင့် မြေပြင်အခြေစိုက်စွမ်းအင်။',
          ja: '物質的な安心感と大地に根ざす生命力。'
        }
      },
      {
        id: 2,
        name: {
          en: '2. Sacral Chakra (Svadhisthana)',
          my: '၂။ ဖန်တီးမှုနှင့် ဆက်ဆံရေး စွမ်းအင်',
          ja: '第2チャクラ：セイクラル（情動・セクシャリティ・創造力）'
        },
        description: {
          en: 'Creative flow, intimacy, emotional passion, and adaptability.',
          my: 'ဖန်တီးနိုင်စွမ်း၊ သံယောဇဉ်နှင့် ခံစားချက်စီးဆင်းမှု။',
          ja: '感情の受容、情熱、人間関係の親密さ。'
        }
      },
      {
        id: 3,
        name: {
          en: '3. Solar Plexus Chakra (Manipura)',
          my: '၃။ သန္နိဋ္ဌာန်နှင့် အတွင်းခွန်အား စွမ်းအင်',
          ja: '第3チャクラ：ソーラープレクサス（意志・自信・自己主権）'
        },
        description: {
          en: 'Personal power, self-esteem, willpower, and autonomy.',
          my: 'မိမိကိုယ်ကို ယုံကြည်မှု၊ ဆုံးဖြတ်ချက်နှင့် စိတ်ခွန်အား။',
          ja: '自己肯定感、決断力、人生の主権。'
        }
      },
      {
        id: 4,
        name: {
          en: '4. Heart Chakra (Anahata)',
          my: '၄။ မေတ္တာနှင့် ကရုဏာ စွမ်းအင်',
          ja: '第4チャクラ：ハート（無条件の愛・慈悲・調和）'
        },
        description: {
          en: 'Compassion, unconditional love, healing, and forgiveness.',
          my: 'စစ်မှန်သော မေတ္တာ၊ ကုစားခြင်းနှင့် ခွင့်လွှတ်နားလည်မှု။',
          ja: '他者への慈愛、心の解放、無条件の愛。'
        }
      },
      {
        id: 5,
        name: {
          en: '5. Throat Chakra (Vishuddha)',
          my: '၅။ အမှန်တရားနှင့် ဆက်သွယ်ပြောဆိုမှု စွမ်းအင်',
          ja: '第5チャクラ：スロート（真実の表現・対話・自己開示）'
        },
        description: {
          en: 'Authentic truth, communication, clarity, and expression.',
          my: 'ရိုးသားဖြောင့်မတ်သော စကား၊ အမှန်တရားနှင့် ဖော်ပြပြောဆိုနိုင်စွမ်း။',
          ja: '真実の声、明晰なコミュニケーション、表現力。'
        }
      },
      {
        id: 6,
        name: {
          en: '6. Third Eye Chakra (Ajna)',
          my: '၆။ အတွင်းစိတ်အာရုံနှင့် ဉာဏ်အလင်း စွမ်းအင်',
          ja: '第6チャクラ：サードアイ（直感・洞察力・霊視力）'
        },
        description: {
          en: 'Intuition, mental vision, dream insights, and wisdom.',
          my: 'အတွင်းစိတ်အာရုံ၊ အမြော်အမြင်နှင့် ဉာဏ်ပညာ။',
          ja: '直感、深層のビジョン、見通す智慧。'
        }
      },
      {
        id: 7,
        name: {
          en: '7. Crown Chakra (Sahasrara)',
          my: '၇။ စကြဝဠာနှင့် စိတ်ဝိညာဉ် ချိတ်ဆက်မှု စွမ်းအင်',
          ja: '第7チャクラ：クラウン（天界との繋がり・宇宙意識）'
        },
        description: {
          en: 'Spiritual transcendence, cosmic oneness, and divine grace.',
          my: 'စကြဝဠာနှင့် တစ်သားတည်းဖြစ်မှု၊ ဉာဏ်အလင်းပွင့်ခြင်းနှင့် သစ္စာတရား။',
          ja: '大いなる宇宙との合一、悟り、天上の祝福。'
        }
      }
    ]
  },
  {
    id: 'celtic_cross',
    name: {
      en: '✡ 10-Card Celtic Cross',
      my: '✡ ၁၀ ကတ် မဟာကံကြမ္မာ ခင်းကျင်းပုံ (Celtic Cross)',
      ja: '✡ ケルティック・クロス（大いなる啓示・10枚）'
    },
    subtitle: {
      en: 'The Master Standard: Present · Challenge · Root · Past · Crown · Future · Self · Environment · Hopes · Final Outcome.',
      my: 'တာရော့ဗေဒ၏ အထွတ်အထိပ် ခင်းကျင်းပုံ: ပစ္စုပ္ပန် • စိန်ခေါ်မှု • အခြေခံ • အတိတ် • ရည်မှန်းချက် • အနာဂတ် • မိမိ • ပတ်ဝန်းကျင် • မျှော်လင့်ချက် • အဆုံးစွန်ရလဒ်။',
      ja: 'タロット最高峰の伝統スプレッド：現状・障害・根本・過去・理想・未来・自己・環境・願望と恐れ・最終結果。'
    },
    cardCount: 10,
    description: {
      en: 'The definitive deep psychological and karmic blueprint of your life.',
      my: 'ဘဝ၏ ကံကြမ္မာခရီးလမ်းကြောင်းနှင့် အတွင်းစိတ်အနက်ရှိုင်းဆုံးကို အသေးစိတ် ဖော်ပြပေးသော မဟာခင်းကျင်းပုံ။',
      ja: '宿命の全容、心理的深層、未来の軌跡を完全に見通す最も権威ある展開法。'
    },
    positions: [
      {
        id: 1,
        name: {
          en: '1. The Heart of the Matter',
          my: '၁။ ကိစ္စရပ်၏ အဓိက အနှစ်သာရ',
          ja: '第1位置：問題の核心・現状'
        },
        description: {
          en: 'The central atmosphere and active energy right now.',
          my: 'လက်ရှိအချိန်တွင် အဓိက လွှမ်းမိုးနေသော စွမ်းအင်။',
          ja: '今まさに中心で渦巻いている本質的エネルギー。'
        }
      },
      {
        id: 2,
        name: {
          en: '2. The Crossing Challenge',
          my: '၂။ ကန့်လန့်ဖြတ် စိန်ခေါ်မှုနှင့် အတားအဆီး',
          ja: '第2位置：直面する障害・試練'
        },
        description: {
          en: 'What directly opposes, crosses, or catalyzes you.',
          my: 'တိုက်ရိုက်ရင်ဆိုင်နေရသော အတားအဆီး သို့မဟုတ် စမ်းသပ်မှု။',
          ja: '前進を阻んでいる摩擦、または目覚めの引き金。'
        }
      },
      {
        id: 3,
        name: {
          en: '3. The Root Foundation',
          my: '၃။ အခြေခံအုတ်မြစ်နှင့် ကံကြမ္မာအကြောင်းရင်း',
          ja: '第3位置：根本の土台・無意識の根源'
        },
        description: {
          en: 'Subconscious roots and past causes underpinning the situation.',
          my: 'အခြေအနေ၏ မူလအစနှင့် နောက်ကွယ်မှ အကြောင်းတရား။',
          ja: '状況を支えている潜在意識の根幹と根本原因。'
        }
      },
      {
        id: 4,
        name: {
          en: '4. The Passing Past',
          my: '၄။ ကုန်လွန်ခဲ့သော အတိတ်လွှမ်းမိုးမှု',
          ja: '第4位置：過ぎ去りし過去・去りゆく影響'
        },
        description: {
          en: 'Events or energies that are receding from your field.',
          my: 'ပြီးဆုံးသွားတော့မည့် အတိတ်က စွမ်းအင်များနှင့် သင်ခန်းစာများ။',
          ja: 'すでにピークを過ぎ、背後へと去りゆく影響力。'
        }
      },
      {
        id: 5,
        name: {
          en: '5. The Crown & Highest Potential',
          my: '၅။ အမြင့်ဆုံး ရည်မှန်းချက်နှင့် ဖြစ်နိုင်ခြေ',
          ja: '第5位置：理想・高次の可能性（クラウン）'
        },
        description: {
          en: 'The best achievable goal or conscious aspiration.',
          my: 'အကောင်းဆုံး ရရှိနိုင်သော အောင်မြင်မှုနှင့် မျှော်မှန်းချက်။',
          ja: '達成可能な最善の結果、あるいは意識的な理想。'
        }
      },
      {
        id: 6,
        name: {
          en: '6. The Near Future',
          my: '၆။ မကြာမီ ရောက်ရှိလာမည့် အနာဂတ်',
          ja: '第6位置：近未来の展開'
        },
        description: {
          en: 'What is entering your life within days or weeks.',
          my: 'ရက်သတ္တပတ်ပိုင်းအတွင်း စတင်ပေါ်ပေါက်လာမည့် အပြောင်းအလဲ။',
          ja: '数日〜数週間以内に訪れる次の一歩。'
        }
      },
      {
        id: 7,
        name: {
          en: '7. Self & Internal Attitude',
          my: '၇။ မိမိ၏ ရပ်တည်ချက်နှင့် အတွင်းစိတ်',
          ja: '第7位置：自己の立場・内なる姿勢'
        },
        description: {
          en: 'How you perceive yourself and your emotional posture.',
          my: 'မိမိကိုယ်ကို မြင်သည့် အမြင်နှင့် စိတ်နေသဘောထား။',
          ja: 'あなた自身の精神的立ち位置と内なる感情。'
        }
      },
      {
        id: 8,
        name: {
          en: '8. External Environment & People',
          my: '၈။ ပတ်ဝန်းကျင်နှင့် အခြားသူများ၏ သဘောထား',
          ja: '第8位置：周囲の環境・他者の影響'
        },
        description: {
          en: 'The external circumstances, people, and vibes around you.',
          my: 'မိမိပတ်ဝန်းကျင်ရှိ လူပုဂ္ဂိုလ်များ၏ သဘောထားနှင့် အခြေအနေ။',
          ja: '取り巻く環境、他者の意図、外部からのエネルギー。'
        }
      },
      {
        id: 9,
        name: {
          en: '9. Hopes & Secret Fears',
          my: '၉။ မျှော်လင့်ချက်နှင့် အတွင်းစိတ် စိုးရိမ်သောကများ',
          ja: '第9位置：希望と恐れ'
        },
        description: {
          en: 'Your deepest desires tangled with your hidden worries.',
          my: 'နှလုံးသားထဲရှိ ဆန္ဒများနှင့် မသိစိတ်၏ စိုးရိမ်ပူပန်မှုများ။',
          ja: '魂が最も望んでいること、そして恐れている影。'
        }
      },
      {
        id: 10,
        name: {
          en: '10. Ultimate Outcome & Destiny',
          my: '၁၀။ နောက်ဆုံး အဆုံးစွန် ကံကြမ္မာရလဒ်',
          ja: '第10位置：最終結末・大いなる着地点'
        },
        description: {
          en: 'The definitive culmination of this sacred cycle.',
          my: 'ဤခရီးလမ်း၏ နောက်ဆုံး အထွတ်အထိပ် ပြည့်မြောက်ခြင်း ရလဒ်။',
          ja: 'すべての要素が統合された先にある、宿命の最終結論。'
        }
      }
    ]
  }
];

export function getSpreadConfig(id: string) {
  return SPREAD_CONFIGS.find(s => s.id === id) || SPREAD_CONFIGS[1];
}
