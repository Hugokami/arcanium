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
    suggestedSpread: 'cross'
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
  }
];

export function getSpreadConfig(id: string) {
  return SPREAD_CONFIGS.find(s => s.id === id) || SPREAD_CONFIGS[1];
}
