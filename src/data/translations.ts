import { Language, LocalizedText } from '../types/tarot';

export const UI_TRANSLATIONS = {
  appName: {
    en: 'ARCANIUM',
    my: 'အာခေးနီးယမ်း (ARCANIUM)',
    ja: 'ARCANIUM（アルカニウム）'
  },
  appSubtitle: {
    en: 'The cards already know what you seek',
    my: 'ကတ်ပြားများသည် သင်ရှာဖွေနေသောအဖြေကို ကြိုတင်သိရှိပြီးဖြစ်သည်',
    ja: 'カードは、あなたが求める答えをすでに知っています'
  },
  step1Title: {
    en: 'I. What brings you to the cards?',
    my: '၁။ သင်သိရှိလိုသော ကံကြမ္မာခေါင်းစဉ်ကို ရွေးချယ်ပါ',
    ja: 'I. あなたがカードに尋ねたいテーマは何ですか？'
  },
  questionPlaceholder: {
    en: '…or whisper your own question (optional)',
    my: '…သို့မဟုတ် သင်မေးလိုသော မေးခွန်းကို တိုက်ရိုက်ရေးသားပါ (စိတ်ကြိုက်)',
    ja: '…または、心にある質問を自由に入力してください（任意）'
  },
  step2Title: {
    en: 'II. Choose your spread',
    my: '၂။ ကတ်ခင်းကျင်းပုံ (Spread) ကို ရွေးချယ်ပါ',
    ja: 'II. スプレッド（展開法）を選んでください'
  },
  step3Title: {
    en: 'III. Breathe. Focus on your question. Then choose',
    my: '၃။ အသက်ကို ဖြည်းညင်းစွာရှူသွင်းပါ။ မေးခွန်းကို အာရုံပြု၍ ကတ်များကို ရွေးချယ်ပါ',
    ja: 'III. 深呼吸をして、心を静めてください。そしてカードを選んでください'
  },
  oneCardPick: {
    en: 'one card',
    my: '၁ ကတ်',
    ja: '1枚'
  },
  cardsPick: {
    en: 'cards',
    my: 'ကတ်များ',
    ja: '枚'
  },
  flipHint: {
    en: 'Click each card to reveal its ancient prophecy…',
    my: 'ကတ်ပြားတစ်ခုချင်းစီကို နှိပ်၍ ကံကြမ္မာနိမိတ်ကို ဖွင့်လှစ်ပါ…',
    ja: '各カードをクリックして、運命の託宣を明かしてください…'
  },
  readBtn: {
    en: 'Read the Cards',
    my: 'ကံကြမ္မာနိမိတ်ဖတ်မည်',
    ja: 'カードの啓示を読む'
  },
  revealAllBtn: {
    en: 'Reveal All Cards',
    my: 'ကတ်အားလုံးကို ဖွင့်မည်',
    ja: 'すべてのカードを表にする'
  },
  shuffleAgainBtn: {
    en: '✦ Shuffle Again ✦',
    my: '✦ အသစ်ပြန်လည် စတင်မွှေမည် ✦',
    ja: '✦ 新しい問いを立てる（再シャッフル） ✦'
  },
  saveToJournalBtn: {
    en: 'Save to Journal',
    my: 'မှတ်တမ်းတွင် သိမ်းဆည်းမည်',
    ja: 'ジャーナルに保存'
  },
  savedToJournalBtn: {
    en: 'Saved to Journal ✓',
    my: 'မှတ်တမ်းတွင် သိမ်းဆည်းပြီး ✓',
    ja: 'ジャーナルに保存済み ✓'
  },
  exportScrollBtn: {
    en: 'Export Sacred Scroll',
    my: 'ရှေးဟောင်းစာလိပ် ထုတ်ယူမည်',
    ja: '預言の巻物をエクスポート'
  },
  codexBtn: {
    en: '78-Card Codex',
    my: 'ကတ် ၇၈ ပြား ကျမ်းဂန်',
    ja: '78枚のタロット図鑑'
  },
  journalBtn: {
    en: 'Journal',
    my: 'မှတ်တမ်းဂျာနယ်',
    ja: 'リーディング記録'
  },
  ambientAudio: {
    en: 'Ambient Sound (432Hz)',
    my: 'စိတ်အေးချမ်းစေသော ဂီတသံ (432Hz)',
    ja: '聖なる環境音（432Hz）'
  },
  soundFx: {
    en: 'Sound FX',
    my: 'အသံအထူးပြုလုပ်ချက်',
    ja: '効果音'
  },
  reversedTag: {
    en: '(Reversed)',
    my: '(ပြောင်းပြန်ကျဆင်းမှု)',
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
      my: "🧠 သင့်စိတ်အတွင်း တွေးတောဖြစ်ပျက်နေသော အခြေအနေ",
      ja: "🧠 心の深層と意識のフォーカス"
    },
    problems: {
      en: "⚡ The Problems You've Been Facing",
      my: "⚡ သင်ရင်ဆိုင်နေရသော စိန်ခေါ်မှုနှင့် အတားအဆီးများ",
      ja: "⚡ 直面している試練と摩擦"
    },
    forces: {
      en: "🌙 Hidden Forces at Work",
      my: "🌙 အတွင်းပိုင်းမှ လှုံ့ဆော်နေသော လျှို့ဝှက်စွမ်းအားများ",
      ja: "🌙 水面下で働く見えない力"
    },
    advice: {
      en: "🕯️ What the Cards Ask of You",
      my: "🕯️ ကတ်ပြားများက ညွှန်ပြသော လုပ်ဆောင်ရမည့်အကြံပြုချက်",
      ja: "🕯️ カードが求める行動と心構え"
    },
    outlook: {
      en: "🌅 Where Things Are Heading",
      my: "🌅 ရှေ့ဆက်ဖြစ်ပေါ်လာမည့် အနာဂတ်လားရာ",
      ja: "🌅 これから向かう未来の展望"
    },
    timeline: {
      en: "⏳ When — The Timing of Things",
      my: "⏳ အချိန်အခါ သတ်မှတ်ချက်နှင့် အရှိန်အဟုန်",
      ja: "⏳ 運命のタイミング・時期の目安"
    },
    archetype: {
      en: "✨ Your Card Archetype",
      my: "✨ သင့်စိတ်ဝိညာဉ်၏ ပင်ကိုစရိုက်ပုံစံ (Archetype)",
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
    my: 'ကိုယ်ပိုင် ခံစားချက်နှင့် အတွေးအမြင် မှတ်တမ်း',
    ja: '個人的な気づきと瞑想ノート'
  },
  reflectionsPlaceholder: {
    en: 'Jot down any personal feelings, insights, or intuitions from this reading...',
    my: 'ဤနိမိတ်ဖတ်ခြင်းမှ သင်ရရှိသော စိတ်ခံစားချက်၊ အသိဉာဏ်နှင့် အတွေးများကို ဤနေရာတွင် မှတ်တမ်းတင်ပါ...',
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
      my: 'အချစ်ရေးနှင့် ဆက်ဆံရေး',
      ja: '恋愛・パートナーシップ'
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
      my: 'စီးပွားဥစ္စာနှင့် ကြွယ်ဝမှု',
      ja: '金運・豊かさ・繁栄'
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
      my: 'စိတ်ပိုင်းဆိုင်ရာ ကြီးထွားမှု',
      ja: '自己成長・魂の進化'
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
      my: 'လမ်းဆုံလမ်းခွ ဆုံးဖြတ်ချက်',
      ja: '運命の岐路・決断'
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
      en: 'The Unknown',
      my: 'မသိသေးသော အနာဂတ်နိမိတ်',
      ja: '未知なる啓示・直感'
    },
    defaultQuestion: {
      en: 'What message does the universe have for me right now?',
      my: 'လောကစကြဝဠာက ကျွန်ုပ်အား ယခုအချိန်တွင် မည်သည့်သတင်းစကား ပေးလိုသနည်း။',
      ja: '宇宙が今、私に最も伝えたいメッセージは何ですか？'
    },
    suggestedSpread: 'single'
  }
];

export const SPREAD_CONFIGS = [
  {
    id: 'single',
    name: {
      en: '☉ One Card',
      my: '☉ တစ်ကတ်ခင်းကျင်းမှု',
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
      my: '✦ ငါးကတ်ကြက်ခြေခတ် ခင်းကျင်းမှု',
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
      my: '✧ အချစ်ရေးနှင့် ဆက်ဆံရေးခင်းကျင်းမှု',
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
