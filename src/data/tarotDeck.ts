import { TarotCard } from '../types/tarot';

export const TAROT_DECK: TarotCard[] = [
  {
    "id": "fool",
    "file": "00-TheFool.png",
    "name": {
      "en": "The Fool",
      "my": "လူမိုက် (သန့်စင်သော စွန့်စားသူ)",
      "ja": "愚者（The Fool）"
    },
    "number": 0,
    "romanNumeral": "0",
    "arcana": "major",
    "suit": "none",
    "element": "Air",
    "astrology": {
      "en": "Uranus / Air",
      "my": "ယူရေးနပ်စ် / လေဓာတ်",
      "ja": "天王星・風の宮"
    },
    "uprightKeywords": {
      "en": [
        "New Beginnings",
        "Innocence",
        "Spontaneity",
        "Free Spirit",
        "Leap of Faith"
      ],
      "my": [
        "အစပြုခြင်းသစ်",
        "ဖြူစင်ခြင်း",
        "စိတ်ဆန္ဒအတိုင်း လွတ်လပ်စွာနေထိုင်ခြင်း",
        "ယုံကြည်စွာ စွန့်စားခြင်း"
      ],
      "ja": [
        "新しい始まり",
        "純真",
        "自由な精神",
        "直感",
        "未知への飛躍"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Recklessness",
        "Risk-taking",
        "Hesitation",
        "Naivety"
      ],
      "my": [
        "ဆင်ခြင်တုံတရားမဲ့ခြင်း",
        "အဆင်အခြင်မဲ့ စွန့်စားခြင်း",
        "တွန့်ဆုတ်နေခြင်း",
        "မိုက်မဲမှု"
      ],
      "ja": [
        "軽率",
        "無謀な行動",
        "躊躇い",
        "未熟さ",
        "盲目的なリスク"
      ]
    },
    "uprightMeaning": {
      "en": "New beginnings leap into the unknown — trust the sacred adventure with an open heart.",
      "my": "မသိသေးသော အနာဂတ်ထဲသို့ ရဲဝံ့စွာ ခြေလှမ်းလိုက်ပါ။ ယုံကြည်မှုအပြည့်ဖြင့် ခရီးသစ်ကို စတင်ပါ။",
      "ja": "未知の世界へ踏み出す純粋な旅の始まり。恐れを手放し、直感と冒険を信じてください。"
    },
    "reversedMeaning": {
      "en": "Leaping blindly before looking. Recklessness dressed as freedom, or paralyzing hesitation.",
      "my": "သေချာမကြည့်ဘဲ မဆင်မခြင် ခုန်ချမိခြင်း (သို့မဟုတ်) ကြောက်ရွံ့မှုကြောင့် မလိုအပ်ဘဲ တွန့်ဆုတ်နေခြင်း။",
      "ja": "準備不足のまま無謀に飛び込む警告。自由と無責任の混同、あるいは恐れによる足止め。"
    },
    "loveMeaning": {
      "upright": {
        "en": "A fresh, spontaneous romantic adventure is blossoming. Keep an open and playful heart.",
        "my": "လတ်ဆတ်ပြီး စိတ်လှုပ်ရှားဖွယ်ရာ အချစ်သစ်တစ်ပွင့် ဖူးပွင့်လာမည်။ ပွင့်လင်းစွာ ကြိုဆိုပါ။",
        "ja": "純粋で心躍る恋の幕開け。過去の傷に縛られず、新しい出会いに心を開いてください。"
      },
      "reversed": {
        "en": "Impulsive choices or fear of emotional commitment may create instability.",
        "my": "စိတ်လိုက်မာန်ပါ ဆုံးဖြတ်ချက်များ သို့မဟုတ် သံယောဇဉ်တွယ်ရန် ကြောက်ရွံ့မှုက မတည်ငြိမ်မှုကို ဖြစ်စေနိုင်သည်။",
        "ja": "衝動的な行動やコミットメントへの恐れが、関係の不安定さを招く兆し。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "A bold new venture or creative career leap is highly favored. Trust your visionary instincts.",
        "my": "တီထွင်ဆန်းသစ်သော အလုပ်သစ် (သို့မဟုတ်) စွန့်စားမှုသည် ကောင်းမွန်သော အခွင့်အလမ်းများ ယူဆောင်လာမည်။",
        "ja": "型にはまらない斬新な挑戦や転職に絶好の時期。直感を信じて一歩踏み出しましょう。"
      },
      "reversed": {
        "en": "Beware of taking ill-advised risks before critical logistical details are solidified.",
        "my": "အစီအစဉ်မခိုင်မာသေးဘဲ အလျင်စလို စွန့်စားမှုပြုလုပ်ခြင်းကို ရှောင်ကြဉ်ပါ။",
        "ja": "無計画な見切り発車や契約の確認不足に注意。足元を固めることが先決です。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Your soul is embarking on a sacred pilgrimage of innocence and childlike wonder.",
        "my": "သင့်စိတ်ဝိညာဉ်သည် ဖြူစင်သောအံ့ဩဖွယ်ရာများနှင့်အတူ ဝိညာဉ်ရေးရာ ခရီးသစ်တစ်ခုကို စတင်နေပြီဖြစ်သည်။",
        "ja": "童心のような純粋な探求心が、魂の覚醒と新たな導きを引き寄せます。"
      },
      "reversed": {
        "en": "Reconnect with your inner innocence; do not let cynicism cloud your spiritual sight.",
        "my": "စိတ်ပျက်လက်ပျက်ဖြစ်မှုများကို ဖယ်ရှားပြီး သင့်အတွင်းစိတ်၏ ဖြူစင်မှုကို ပြန်လည်ရှာဖွေပါ။",
        "ja": "疑心暗鬼を手放し、内なる純粋な光を取り戻す静寂の時間を持ちましょう。"
      }
    },
    "advice": {
      "en": "Take a leap of faith. The universe will catch you when you step with pure intent.",
      "my": "သန့်ရှင်းသော စိတ်စေတနာဖြင့် ရဲရဲဝံ့ဝံ့ ခြေလှမ်းလိုက်ပါ။ လောကစကြဝဠာက သင့်ကို စောင့်ရှောက်ပါလိမ့်မည်။",
      "ja": "恐れずに信じて跳びなさい。純粋な意志を持つとき、宇宙はあなたを受け止めます。"
    },
    "shadowWarning": {
      "en": "Do not mistake careless negligence for divine courage.",
      "my": "ပေါ့ဆမှုကို ရဲရင့်ခြင်းအဖြစ် အထင်မမှားပါနှင့်။",
      "ja": "無責任な現実逃避を、高尚な冒険心と取り違えないでください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (အပြုသဘော)",
      "ja": "YES（肯定的）"
    },
    "symbolism": {
      "en": [
        "White rose (purity)",
        "Sun (divine light)",
        "Cliff (infinite potential)"
      ],
      "my": [
        "နှင်းဆီဖြူ (ဖြူစင်မှု)",
        "နေမင်း (မြင့်မြတ်သောအလင်း)",
        "ချောက်ကမ်းပါး (အဆုံးမဲ့အလားအလာ)"
      ],
      "ja": [
        "白い薔薇（純粋性）",
        "太陽（神聖な導き）",
        "断崖（無限の可能性）"
      ]
    }
  },
  {
    "id": "magician",
    "file": "01-TheMagician.png",
    "name": {
      "en": "The Magician",
      "my": "မျက်လှည့်ဆရာ (ဖန်ဆင်းရှင်)",
      "ja": "魔術師（The Magician）"
    },
    "number": 1,
    "romanNumeral": "I",
    "arcana": "major",
    "suit": "none",
    "element": "Air",
    "astrology": {
      "en": "Mercury",
      "my": "မာကျူရီ (ဗုဒ္ဓဟူးဂြိုဟ်)",
      "ja": "水星"
    },
    "uprightKeywords": {
      "en": [
        "Manifestation",
        "Resourcefulness",
        "Power",
        "Inspired Action",
        "Mastery"
      ],
      "my": [
        "အကောင်အထည်ဖော်ခြင်း",
        "စွမ်းရည်ကြွယ်ဝမှု",
        "စွမ်းအား",
        "ကျွမ်းကျင်မှု"
      ],
      "ja": [
        "具現化",
        "創造力",
        "集中力",
        "意志の力",
        "卓越した才能"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Manipulation",
        "Untapped Potential",
        "Deception",
        "Scattered Energy"
      ],
      "my": [
        "လှည့်စားမှု",
        "အသုံးမချရသေးသော စွမ်းရည်",
        "အာရုံစူးစိုက်မှုမဲ့ခြင်း"
      ],
      "ja": [
        "悪用・ごまかし",
        "才能の空回り",
        "散漫",
        "自信の欠如"
      ]
    },
    "uprightMeaning": {
      "en": "You possess all the elements and tools needed to manifest your vision into reality.",
      "my": "သင်၏ စိတ်ကူးအိပ်မက်များကို လက်တွေ့အကောင်အထည်ဖော်ရန် လိုအပ်သော လက်နက်ကိရိယာ အားလုံး သင့်လက်ထဲတွင် ရှိနေပြီဖြစ်သည်။",
      "ja": "望む現実を形にするためのすべての道具は揃っています。強い意志で具現化を始めましょう。"
    },
    "reversedMeaning": {
      "en": "Manipulation, scattered focus, or feeling disconnected from your innate mastery.",
      "my": "စွမ်းအားများကို အာရုံမစိုက်နိုင်ဘဲ ဖြန့်ကြက်မိနေခြင်း သို့မဟုတ် လှည့်စားဖျားယောင်းမှုများ ကြုံရခြင်း။",
      "ja": "才能が散漫になり、不誠実な企てや自信の喪失により成果が形にならない状態。"
    },
    "loveMeaning": {
      "upright": {
        "en": "High magnetic chemistry and deliberate co-creation of a deep romantic bond.",
        "my": "ဆွဲဆောင်မှုအားကောင်းပြီး နှစ်ဦးသဘောတူ ခိုင်မာသော ချစ်ခြင်းမေတ္တာကို အတူတကွ တည်ဆောက်နိုင်မည်။",
        "ja": "強い引き寄せと明確な意思疎通。理想の関係を共に創造できる絶好の時です。"
      },
      "reversed": {
        "en": "Superficial charm, mixed signals, or manipulative intentions.",
        "my": "အပေါ်ယံ ချိုသာမှုများ သို့မဟုတ် လှည့်စားလိုသော သဘောထားများကို သတိထားပါ။",
        "ja": "言葉巧みな誘惑や、本心を隠した不誠実な態度に警戒が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "Peak timing to launch, pitch bold ideas, and demonstrate master craftsmanship.",
        "my": "လုပ်ငန်းသစ် စတင်ရန်၊ စိတ်ကူးသစ်များ တင်ပြရန်နှင့် ကျွမ်းကျင်မှုကို ပြသရန် အကောင်းဆုံးအချိန်ဖြစ်သည်။",
        "ja": "企画の提案や新規事業の立ち上げに最高の運気。あなたの技術が遺憾なく発揮されます。"
      },
      "reversed": {
        "en": "Procrastination or lack of focus delaying a brilliant concept.",
        "my": "အချိန်ဆွဲနေခြင်း သို့မဟုတ် အာရုံမစူးစိုက်နိုင်ခြင်းကြောင့် အခွင့်အရေးများ နှောင့်နှေးနိုင်သည်။",
        "ja": "素晴らしいアイデアがあっても実行力が伴わず、準備不足に陥りやすい警告。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "You are the conscious bridge between spiritual idea and physical form. Speak your truth.",
        "my": "သင်သည် စိတ်ကူးအမြင်နှင့် ရုပ်ဝတ္ထုအကြား ပေါင်းကူးတံတားဖြစ်သည်။ သင့်အမှန်တရားကို ဖော်ထုတ်ပါ။",
        "ja": "天の意志を地に降ろす意識的な媒介者。言葉と行動で自らの真理を宣言してください。"
      },
      "reversed": {
        "en": "Align your personal ego with higher cosmic integrity.",
        "my": "မိမိ၏ အတ္တထက် မြင့်မြတ်သော ကိုယ်ကျင့်တရားနှင့် ညီညွတ်အောင် ထိန်းညှိပါ။",
        "ja": "エゴの満足のためではなく、より高い倫理観と調和して力を使うことが求められます。"
      }
    },
    "advice": {
      "en": "Align your intention, thought, emotion, and action. Everything you need is present.",
      "my": "ရည်ရွယ်ချက်၊ အတွေး၊ စိတ်ခံစားချက်နှင့် လုပ်ဆောင်ချက်တို့ကို တစ်သားတည်း ပေါင်းစပ်ပါ။",
      "ja": "意図・思考・感情・行動を一致させなさい。必要な力はすでにあなたの中にあります。"
    },
    "shadowWarning": {
      "en": "Mastery without ethics devolves into shallow manipulation.",
      "my": "ကျင့်ဝတ်မပါသော ကျွမ်းကျင်မှုသည် အပေါ်ယံ လှည့်စားမှုအဖြစ်သို့ ရောက်ရှိသွားတတ်သည်။",
      "ja": "倫理を欠いた技術は、ただの空虚なペテンに成り下がります。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (အပြည့်အဝ)",
      "ja": "YES（力強い肯定）"
    },
    "symbolism": {
      "en": [
        "Infinity symbol (limitless potential)",
        "Four altar tools (all elements mastered)"
      ],
      "my": [
        "အနန္တသင်္ကေတ (အဆုံးမဲ့စွမ်းရည်)",
        "ပလ္လင်ပေါ်ရှိ တန်ဆာလေးပါး (ဓာတ်လေးပါးကို ထိန်းချုပ်နိုင်ခြင်း)"
      ],
      "ja": [
        "無限大記号（無限の可能性）",
        "祭壇の4つの聖具（四大元素の完全な統括）"
      ]
    }
  },
  {
    "id": "high-priestess",
    "file": "02-TheHighPriestess.png",
    "name": {
      "en": "The High Priestess",
      "my": "ဆရာမကြီး (လျှို့ဝှက်အသိပညာရှင်)",
      "ja": "女教皇（The High Priestess）"
    },
    "number": 2,
    "romanNumeral": "2",
    "arcana": "major",
    "suit": "none",
    "element": "Water",
    "astrology": {
      "en": "Moon",
      "my": "လမင်း",
      "ja": "月"
    },
    "uprightKeywords": {
      "en": [
        "Intuition",
        "Sacred Secrets",
        "Subconscious"
      ],
      "my": [
        "ပင်ကိုယ်အသိဉာဏ်",
        "လျှို့ဝှက်အသိပညာ",
        "မသိစိတ်"
      ],
      "ja": [
        "直感",
        "神秘",
        "潜在意識",
        "静寂"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Ignored Intuition",
        "Secrets Revealed",
        "Superficiality"
      ],
      "my": [
        "အတွင်းအသံကို လျစ်လျူရှုခြင်း",
        "လျှို့ဝှက်ချက်ပေါက်ကြားခြင်း"
      ],
      "ja": [
        "直感の無視",
        "秘密の露呈",
        "浅薄さ"
      ]
    },
    "uprightMeaning": {
      "en": "The High Priestess signifies intuition and sacred secrets.",
      "my": "ဆရာမကြီး (လျှို့ဝှက်အသိပညာရှင်) သည် ပင်ကိုယ်အသိဉာဏ် နှင့် လျှို့ဝှက်အသိပညာ ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【女教皇（The High Priestess）】は、直感と神秘を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The High Priestess cautions against ignored intuition or secrets revealed.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ဆရာမကြီး (လျှို့ဝှက်အသိပညာရှင်) သည် အတွင်းအသံကို လျစ်လျူရှုခြင်း သို့မဟုတ် လျှို့ဝှက်ချက်ပေါက်ကြားခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【女教皇（The High Priestess）】は、直感の無視や秘密の露呈への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The High Priestess brings intuition into your romantic life.",
        "my": "အချစ်ရေးတွင် ဆရာမကြီး (လျှို့ဝှက်အသိပညာရှင်) သည် ပင်ကိုယ်အသိဉာဏ် ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、直感が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The High Priestess suggests working through ignored intuition.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဆရာမကြီး (လျှို့ဝှက်အသိပညာရှင်) သည် အတွင်းအသံကို လျစ်လျူရှုခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、直感の無視を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The High Priestess highlights intuition.",
        "my": "အလုပ်အကိုင်တွင် ဆရာမကြီး (လျှို့ဝှက်အသိပညာရှင်) သည် ပင်ကိုယ်အသိဉာဏ် ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、直感を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid ignored intuition.",
        "my": "အလုပ်အကိုင်တွင် အတွင်းအသံကို လျစ်လျူရှုခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、直感の無視による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with intuition.",
        "my": "ဝိညာဉ်ရေးရာတွင် ပင်ကိုယ်အသိဉာဏ် ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、直感の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any ignored intuition.",
        "my": "ဝိညာဉ်ရေးရာတွင် အတွင်းအသံကို လျစ်လျူရှုခြင်း ကို ကုစားပါ။",
        "ja": "内なる直感の無視を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody intuition and walk forward with honor.",
      "my": "ပင်ကိုယ်အသိဉာဏ် ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの直感を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of ignored intuition.",
      "my": "အတွင်းအသံကို လျစ်လျူရှုခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "直感の無視に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Neutral / Unclear",
      "my": "အချိန်စောင့်ဆိုင်းရန် လိုအပ်သည်",
      "ja": "中立 / 静観"
    },
    "symbolism": {
      "en": [
        "Symbol of The High Priestess",
        "Elemental connection: Water"
      ],
      "my": [
        "ဆရာမကြီး (လျှို့ဝှက်အသိပညာရှင်) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "女教皇（The High Priestess）の象徴体系",
        "対応元素：Water"
      ]
    }
  },
  {
    "id": "empress",
    "file": "03-TheEmpress.png",
    "name": {
      "en": "The Empress",
      "my": "ဧကရီမိဖုရား (ကြွယ်ဝမှုနှင့် သားဖွားရှင်)",
      "ja": "女帝（The Empress）"
    },
    "number": 3,
    "romanNumeral": "3",
    "arcana": "major",
    "suit": "none",
    "element": "Earth",
    "astrology": {
      "en": "Venus",
      "my": "ဗီးနပ်စ် (သောကြာဂြိုဟ်)",
      "ja": "金星"
    },
    "uprightKeywords": {
      "en": [
        "Abundance",
        "Nurturing",
        "Sensuality",
        "Fertility"
      ],
      "my": [
        "ကြွယ်ဝချမ်းသာမှု",
        "ပြုစုပျိုးထောင်ခြင်း",
        "သဘာဝအလှတရား"
      ],
      "ja": [
        "豊穣",
        "慈愛",
        "実り",
        "美意識"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Creative Block",
        "Smothering",
        "Self-Neglect"
      ],
      "my": [
        "တီထွင်နိုင်စွမ်း ပိတ်ဆို့ခြင်း",
        "မိမိကိုယ်ကို ဂရုမစိုက်မိခြင်း"
      ],
      "ja": [
        "過保護",
        "自己犠牲",
        "創造の停滞"
      ]
    },
    "uprightMeaning": {
      "en": "The Empress signifies abundance and nurturing.",
      "my": "ဧကရီမိဖုရား (ကြွယ်ဝမှုနှင့် သားဖွားရှင်) သည် ကြွယ်ဝချမ်းသာမှု နှင့် ပြုစုပျိုးထောင်ခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【女帝（The Empress）】は、豊穣と慈愛を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Empress cautions against creative block or smothering.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ဧကရီမိဖုရား (ကြွယ်ဝမှုနှင့် သားဖွားရှင်) သည် တီထွင်နိုင်စွမ်း ပိတ်ဆို့ခြင်း သို့မဟုတ် မိမိကိုယ်ကို ဂရုမစိုက်မိခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【女帝（The Empress）】は、過保護や自己犠牲への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Empress brings abundance into your romantic life.",
        "my": "အချစ်ရေးတွင် ဧကရီမိဖုရား (ကြွယ်ဝမှုနှင့် သားဖွားရှင်) သည် ကြွယ်ဝချမ်းသာမှု ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、豊穣が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Empress suggests working through creative block.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဧကရီမိဖုရား (ကြွယ်ဝမှုနှင့် သားဖွားရှင်) သည် တီထွင်နိုင်စွမ်း ပိတ်ဆို့ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、過保護を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Empress highlights abundance.",
        "my": "အလုပ်အကိုင်တွင် ဧကရီမိဖုရား (ကြွယ်ဝမှုနှင့် သားဖွားရှင်) သည် ကြွယ်ဝချမ်းသာမှု ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、豊穣を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid creative block.",
        "my": "အလုပ်အကိုင်တွင် တီထွင်နိုင်စွမ်း ပိတ်ဆို့ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、過保護による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with abundance.",
        "my": "ဝိညာဉ်ရေးရာတွင် ကြွယ်ဝချမ်းသာမှု ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、豊穣の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any creative block.",
        "my": "ဝိညာဉ်ရေးရာတွင် တီထွင်နိုင်စွမ်း ပိတ်ဆို့ခြင်း ကို ကုစားပါ။",
        "ja": "内なる過保護を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody abundance and walk forward with honor.",
      "my": "ကြွယ်ဝချမ်းသာမှု ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの豊穣を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of creative block.",
      "my": "တီထွင်နိုင်စွမ်း ပိတ်ဆို့ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "過保護に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Symbol of The Empress",
        "Elemental connection: Earth"
      ],
      "my": [
        "ဧကရီမိဖုရား (ကြွယ်ဝမှုနှင့် သားဖွားရှင်) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "女帝（The Empress）の象徴体系",
        "対応元素：Earth"
      ]
    }
  },
  {
    "id": "emperor",
    "file": "04-TheEmperor.png",
    "name": {
      "en": "The Emperor",
      "my": "ဧကရာဇ်ဘုရင် (စည်းစနစ်နှင့် တည်ငြိမ်မှု)",
      "ja": "皇帝（The Emperor）"
    },
    "number": 4,
    "romanNumeral": "4",
    "arcana": "major",
    "suit": "none",
    "element": "Fire",
    "astrology": {
      "en": "Aries",
      "my": "မိဿရာသီ",
      "ja": "牡羊座"
    },
    "uprightKeywords": {
      "en": [
        "Authority",
        "Structure",
        "Stability",
        "Discipline"
      ],
      "my": [
        "ဩဇာအာဏာ",
        "စနစ်တကျတည်ဆောက်မှု",
        "ခိုင်မာသောစည်းကမ်း"
      ],
      "ja": [
        "統率力",
        "秩序",
        "安定",
        "不動の基盤"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Tyranny",
        "Rigidity",
        "Lack of Discipline"
      ],
      "my": [
        "အာဏာရှင်ဆန်ခြင်း",
        "တင်းကျပ်လွန်းခြင်း",
        "စည်းကမ်းမဲ့ခြင်း"
      ],
      "ja": [
        "独裁",
        "頑迷",
        "無秩序",
        "横暴"
      ]
    },
    "uprightMeaning": {
      "en": "The Emperor signifies authority and structure.",
      "my": "ဧကရာဇ်ဘုရင် (စည်းစနစ်နှင့် တည်ငြိမ်မှု) သည် ဩဇာအာဏာ နှင့် စနစ်တကျတည်ဆောက်မှု ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【皇帝（The Emperor）】は、統率力と秩序を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Emperor cautions against tyranny or rigidity.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ဧကရာဇ်ဘုရင် (စည်းစနစ်နှင့် တည်ငြိမ်မှု) သည် အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် တင်းကျပ်လွန်းခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【皇帝（The Emperor）】は、独裁や頑迷への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Emperor brings authority into your romantic life.",
        "my": "အချစ်ရေးတွင် ဧကရာဇ်ဘုရင် (စည်းစနစ်နှင့် တည်ငြိမ်မှု) သည် ဩဇာအာဏာ ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、統率力が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Emperor suggests working through tyranny.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဧကရာဇ်ဘုရင် (စည်းစနစ်နှင့် တည်ငြိမ်မှု) သည် အာဏာရှင်ဆန်ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、独裁を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Emperor highlights authority.",
        "my": "အလုပ်အကိုင်တွင် ဧကရာဇ်ဘုရင် (စည်းစနစ်နှင့် တည်ငြိမ်မှု) သည် ဩဇာအာဏာ ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、統率力を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid tyranny.",
        "my": "အလုပ်အကိုင်တွင် အာဏာရှင်ဆန်ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、独裁による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with authority.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဩဇာအာဏာ ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、統率力の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any tyranny.",
        "my": "ဝိညာဉ်ရေးရာတွင် အာဏာရှင်ဆန်ခြင်း ကို ကုစားပါ။",
        "ja": "内なる独裁を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody authority and walk forward with honor.",
      "my": "ဩဇာအာဏာ ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの統率力を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of tyranny.",
      "my": "အာဏာရှင်ဆန်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "独裁に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Symbol of The Emperor",
        "Elemental connection: Fire"
      ],
      "my": [
        "ဧကရာဇ်ဘုရင် (စည်းစနစ်နှင့် တည်ငြိမ်မှု) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "皇帝（The Emperor）の象徴体系",
        "対応元素：Fire"
      ]
    }
  },
  {
    "id": "hierophant",
    "file": "05-TheHierophant.png",
    "name": {
      "en": "The Hierophant",
      "my": "ဘာသာရေးဆရာတော် (ရိုးရာနှင့် သွန်သင်ချက်)",
      "ja": "法皇（The Hierophant）"
    },
    "number": 5,
    "romanNumeral": "5",
    "arcana": "major",
    "suit": "none",
    "element": "Earth",
    "astrology": {
      "en": "Taurus",
      "my": "ပြိဿရာသီ",
      "ja": "牡牛座"
    },
    "uprightKeywords": {
      "en": [
        "Tradition",
        "Spiritual Wisdom",
        "Mentorship",
        "Institutions"
      ],
      "my": [
        "ရိုးရာဓလေ့",
        "မြင့်မြတ်သောအသိဉာဏ်",
        "ဆရာသမား၏ လမ်းညွှန်မှု"
      ],
      "ja": [
        "伝統",
        "教え",
        "導き手",
        "精神的規範"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Rebellion",
        "Dogma",
        "Unconventional Path"
      ],
      "my": [
        "ရိုးရာကို ဆန့်ကျင်ခြင်း",
        "စွဲလမ်းလွန်ကဲသော အယူဝါဒ"
      ],
      "ja": [
        "教条主義",
        "型破りな道",
        "因習の打破"
      ]
    },
    "uprightMeaning": {
      "en": "The Hierophant signifies tradition and spiritual wisdom.",
      "my": "ဘာသာရေးဆရာတော် (ရိုးရာနှင့် သွန်သင်ချက်) သည် ရိုးရာဓလေ့ နှင့် မြင့်မြတ်သောအသိဉာဏ် ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【法皇（The Hierophant）】は、伝統と教えを象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Hierophant cautions against rebellion or dogma.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ဘာသာရေးဆရာတော် (ရိုးရာနှင့် သွန်သင်ချက်) သည် ရိုးရာကို ဆန့်ကျင်ခြင်း သို့မဟုတ် စွဲလမ်းလွန်ကဲသော အယူဝါဒ ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【法皇（The Hierophant）】は、教条主義や型破りな道への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Hierophant brings tradition into your romantic life.",
        "my": "အချစ်ရေးတွင် ဘာသာရေးဆရာတော် (ရိုးရာနှင့် သွန်သင်ချက်) သည် ရိုးရာဓလေ့ ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、伝統が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Hierophant suggests working through rebellion.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဘာသာရေးဆရာတော် (ရိုးရာနှင့် သွန်သင်ချက်) သည် ရိုးရာကို ဆန့်ကျင်ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、教条主義を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Hierophant highlights tradition.",
        "my": "အလုပ်အကိုင်တွင် ဘာသာရေးဆရာတော် (ရိုးရာနှင့် သွန်သင်ချက်) သည် ရိုးရာဓလေ့ ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、伝統を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid rebellion.",
        "my": "အလုပ်အကိုင်တွင် ရိုးရာကို ဆန့်ကျင်ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、教条主義による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with tradition.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရိုးရာဓလေ့ ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、伝統の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any rebellion.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရိုးရာကို ဆန့်ကျင်ခြင်း ကို ကုစားပါ။",
        "ja": "内なる教条主義を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody tradition and walk forward with honor.",
      "my": "ရိုးရာဓလေ့ ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの伝統を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of rebellion.",
      "my": "ရိုးရာကို ဆန့်ကျင်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "教条主義に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "ဖြစ်နိုင်ခြေများပါသည်",
      "ja": "肯定的（規律を守ればYES）"
    },
    "symbolism": {
      "en": [
        "Symbol of The Hierophant",
        "Elemental connection: Earth"
      ],
      "my": [
        "ဘာသာရေးဆရာတော် (ရိုးရာနှင့် သွန်သင်ချက်) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "法皇（The Hierophant）の象徴体系",
        "対応元素：Earth"
      ]
    }
  },
  {
    "id": "lovers",
    "file": "06-TheLovers.png",
    "name": {
      "en": "The Lovers",
      "my": "ချစ်သူများ (သံယောဇဉ်နှင့် ရွေးချယ်မှု)",
      "ja": "恋人たち（The Lovers）"
    },
    "number": 6,
    "romanNumeral": "6",
    "arcana": "major",
    "suit": "none",
    "element": "Air",
    "astrology": {
      "en": "Gemini",
      "my": "မေထုန်ရာသီ",
      "ja": "双子座"
    },
    "uprightKeywords": {
      "en": [
        "Soul Union",
        "Harmony",
        "Values Alignment",
        "Choice"
      ],
      "my": [
        "ဝိညာဉ်ချင်း ပေါင်းစပ်မှု",
        "သဟဇာတဖြစ်ခြင်း",
        "ရွေးချယ်မှု"
      ],
      "ja": [
        "真の絆",
        "調和",
        "価値観の一致",
        "運命の選択"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Disharmony",
        "Misalignment",
        "Avoided Choice"
      ],
      "my": [
        "သဘောထားကွဲလွဲခြင်း",
        "တန်ဖိုးထားမှု မတူညီခြင်း"
      ],
      "ja": [
        "不調和",
        "価値観の対立",
        "選択の先送り"
      ]
    },
    "uprightMeaning": {
      "en": "The Lovers signifies soul union and harmony.",
      "my": "ချစ်သူများ (သံယောဇဉ်နှင့် ရွေးချယ်မှု) သည် ဝိညာဉ်ချင်း ပေါင်းစပ်မှု နှင့် သဟဇာတဖြစ်ခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【恋人たち（The Lovers）】は、真の絆と調和を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Lovers cautions against disharmony or misalignment.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ချစ်သူများ (သံယောဇဉ်နှင့် ရွေးချယ်မှု) သည် သဘောထားကွဲလွဲခြင်း သို့မဟုတ် တန်ဖိုးထားမှု မတူညီခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【恋人たち（The Lovers）】は、不調和や価値観の対立への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Lovers brings soul union into your romantic life.",
        "my": "အချစ်ရေးတွင် ချစ်သူများ (သံယောဇဉ်နှင့် ရွေးချယ်မှု) သည် ဝိညာဉ်ချင်း ပေါင်းစပ်မှု ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、真の絆が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Lovers suggests working through disharmony.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ချစ်သူများ (သံယောဇဉ်နှင့် ရွေးချယ်မှု) သည် သဘောထားကွဲလွဲခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、不調和を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Lovers highlights soul union.",
        "my": "အလုပ်အကိုင်တွင် ချစ်သူများ (သံယောဇဉ်နှင့် ရွေးချယ်မှု) သည် ဝိညာဉ်ချင်း ပေါင်းစပ်မှု ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、真の絆を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid disharmony.",
        "my": "အလုပ်အကိုင်တွင် သဘောထားကွဲလွဲခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、不調和による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with soul union.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဝိညာဉ်ချင်း ပေါင်းစပ်မှု ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、真の絆の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any disharmony.",
        "my": "ဝိညာဉ်ရေးရာတွင် သဘောထားကွဲလွဲခြင်း ကို ကုစားပါ။",
        "ja": "内なる不調和を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody soul union and walk forward with honor.",
      "my": "ဝိညာဉ်ချင်း ပေါင်းစပ်မှု ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの真の絆を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of disharmony.",
      "my": "သဘောထားကွဲလွဲခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "不調和に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Symbol of The Lovers",
        "Elemental connection: Air"
      ],
      "my": [
        "ချစ်သူများ (သံယောဇဉ်နှင့် ရွေးချယ်မှု) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "恋人たち（The Lovers）の象徴体系",
        "対応元素：Air"
      ]
    }
  },
  {
    "id": "chariot",
    "file": "07-TheChariot.png",
    "name": {
      "en": "The Chariot",
      "my": "စစ်ရထား (စိတ်ဓာတ်ကြံ့ခိုင်မှုနှင့် အောင်ပွဲ)",
      "ja": "戦車（The Chariot）"
    },
    "number": 7,
    "romanNumeral": "7",
    "arcana": "major",
    "suit": "none",
    "element": "Water",
    "astrology": {
      "en": "Cancer",
      "my": "ကရကဋ်ရာသီ",
      "ja": "蟹座"
    },
    "uprightKeywords": {
      "en": [
        "Victory",
        "Willpower",
        "Drive",
        "Focus"
      ],
      "my": [
        "အောင်ပွဲ",
        "စိတ်စွမ်းအား",
        "ရည်မှန်းချက်ဆီသို့ ဦးတည်ချီတက်ခြင်း"
      ],
      "ja": [
        "勝利",
        "不屈の意志",
        "前進",
        "統御力"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Lost Control",
        "Aggression",
        "Burnout"
      ],
      "my": [
        "ထိန်းချုပ်မှုမဲ့ခြင်း",
        "ဒေါသတကြီးလုပ်ဆောင်ခြင်း"
      ],
      "ja": [
        "暴走",
        "コントロール喪失",
        "空回り"
      ]
    },
    "uprightMeaning": {
      "en": "The Chariot signifies victory and willpower.",
      "my": "စစ်ရထား (စိတ်ဓာတ်ကြံ့ခိုင်မှုနှင့် အောင်ပွဲ) သည် အောင်ပွဲ နှင့် စိတ်စွမ်းအား ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【戦車（The Chariot）】は、勝利と不屈の意志を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Chariot cautions against lost control or aggression.",
      "my": "ပြောင်းပြန်အနေအထားတွင် စစ်ရထား (စိတ်ဓာတ်ကြံ့ခိုင်မှုနှင့် အောင်ပွဲ) သည် ထိန်းချုပ်မှုမဲ့ခြင်း သို့မဟုတ် ဒေါသတကြီးလုပ်ဆောင်ခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【戦車（The Chariot）】は、暴走やコントロール喪失への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Chariot brings victory into your romantic life.",
        "my": "အချစ်ရေးတွင် စစ်ရထား (စိတ်ဓာတ်ကြံ့ခိုင်မှုနှင့် အောင်ပွဲ) သည် အောင်ပွဲ ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、勝利が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Chariot suggests working through lost control.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် စစ်ရထား (စိတ်ဓာတ်ကြံ့ခိုင်မှုနှင့် အောင်ပွဲ) သည် ထိန်းချုပ်မှုမဲ့ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、暴走を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Chariot highlights victory.",
        "my": "အလုပ်အကိုင်တွင် စစ်ရထား (စိတ်ဓာတ်ကြံ့ခိုင်မှုနှင့် အောင်ပွဲ) သည် အောင်ပွဲ ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、勝利を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid lost control.",
        "my": "အလုပ်အကိုင်တွင် ထိန်းချုပ်မှုမဲ့ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、暴走による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with victory.",
        "my": "ဝိညာဉ်ရေးရာတွင် အောင်ပွဲ ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、勝利の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any lost control.",
        "my": "ဝိညာဉ်ရေးရာတွင် ထိန်းချုပ်မှုမဲ့ခြင်း ကို ကုစားပါ။",
        "ja": "内なる暴走を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody victory and walk forward with honor.",
      "my": "အောင်ပွဲ ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの勝利を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of lost control.",
      "my": "ထိန်းချုပ်မှုမဲ့ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "暴走に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Symbol of The Chariot",
        "Elemental connection: Water"
      ],
      "my": [
        "စစ်ရထား (စိတ်ဓာတ်ကြံ့ခိုင်မှုနှင့် အောင်ပွဲ) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "戦車（The Chariot）の象徴体系",
        "対応元素：Water"
      ]
    }
  },
  {
    "id": "strength",
    "file": "08-Strength.png",
    "name": {
      "en": "Strength",
      "my": "ခွန်အား (နူးညံ့သော အစွမ်းနှင့် သတ္တိ)",
      "ja": "力（Strength）"
    },
    "number": 8,
    "romanNumeral": "8",
    "arcana": "major",
    "suit": "none",
    "element": "Fire",
    "astrology": {
      "en": "Leo",
      "my": "သိဟ်ရာသီ",
      "ja": "獅子座"
    },
    "uprightKeywords": {
      "en": [
        "Courage",
        "Gentle Mastery",
        "Patience",
        "Compassion"
      ],
      "my": [
        "ရဲရင့်မှု",
        "နူးညံ့စွာ ထိန်းကျောင်းနိုင်ခြင်း",
        "သည်းခံခြင်း"
      ],
      "ja": [
        "真の勇気",
        "柔らかな強さ",
        "忍耐",
        "包容力"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Self-Doubt",
        "Raw Force",
        "Impatience"
      ],
      "my": [
        "မိမိကိုယ်ကို သံသယဝင်ခြင်း",
        "အကြမ်းနည်းသုံးမိခြင်း"
      ],
      "ja": [
        "自己不信",
        "力づくの強要",
        "焦り"
      ]
    },
    "uprightMeaning": {
      "en": "Strength signifies courage and gentle mastery.",
      "my": "ခွန်အား (နူးညံ့သော အစွမ်းနှင့် သတ္တိ) သည် ရဲရင့်မှု နှင့် နူးညံ့စွာ ထိန်းကျောင်းနိုင်ခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【力（Strength）】は、真の勇気と柔らかな強さを象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, Strength cautions against self-doubt or raw force.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ခွန်အား (နူးညံ့သော အစွမ်းနှင့် သတ္တိ) သည် မိမိကိုယ်ကို သံသယဝင်ခြင်း သို့မဟုတ် အကြမ်းနည်းသုံးမိခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【力（Strength）】は、自己不信や力づくの強要への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Strength brings courage into your romantic life.",
        "my": "အချစ်ရေးတွင် ခွန်အား (နူးညံ့သော အစွမ်းနှင့် သတ္တိ) သည် ရဲရင့်မှု ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、真の勇気が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed Strength suggests working through self-doubt.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ခွန်အား (နူးညံ့သော အစွမ်းနှင့် သတ္တိ) သည် မိမိကိုယ်ကို သံသယဝင်ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、自己不信を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, Strength highlights courage.",
        "my": "အလုပ်အကိုင်တွင် ခွန်အား (နူးညံ့သော အစွမ်းနှင့် သတ္တိ) သည် ရဲရင့်မှု ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、真の勇気を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid self-doubt.",
        "my": "အလုပ်အကိုင်တွင် မိမိကိုယ်ကို သံသယဝင်ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、自己不信による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with courage.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရဲရင့်မှု ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、真の勇気の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any self-doubt.",
        "my": "ဝိညာဉ်ရေးရာတွင် မိမိကိုယ်ကို သံသယဝင်ခြင်း ကို ကုစားပါ။",
        "ja": "内なる自己不信を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody courage and walk forward with honor.",
      "my": "ရဲရင့်မှု ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの真の勇気を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of self-doubt.",
      "my": "မိမိကိုယ်ကို သံသယဝင်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "自己不信に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Symbol of Strength",
        "Elemental connection: Fire"
      ],
      "my": [
        "ခွန်အား (နူးညံ့သော အစွမ်းနှင့် သတ္တိ) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "力（Strength）の象徴体系",
        "対応元素：Fire"
      ]
    }
  },
  {
    "id": "hermit",
    "file": "09-TheHermit.png",
    "name": {
      "en": "The Hermit",
      "my": "တောရဆောက်တည်သူ (အတွင်းစိတ်ဉာဏ်အလင်း)",
      "ja": "隠者（The Hermit）"
    },
    "number": 9,
    "romanNumeral": "9",
    "arcana": "major",
    "suit": "none",
    "element": "Earth",
    "astrology": {
      "en": "Virgo",
      "my": "ကန်ရာသီ",
      "ja": "乙女座"
    },
    "uprightKeywords": {
      "en": [
        "Solitude",
        "Introspection",
        "Inner Light",
        "Wisdom"
      ],
      "my": [
        "ဆိတ်ငြိမ်မှု",
        "အတွင်းစိတ်ကို ဆင်ခြင်သုံးသပ်ခြင်း",
        "ပညာဉာဏ်"
      ],
      "ja": [
        "内省",
        "探求",
        "灯火",
        "深遠な叡智"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Isolation",
        "Loneliness",
        "Withdrawal"
      ],
      "my": [
        "လူအများနှင့် ဝေးကွာနေခြင်း",
        "အထီးကျန်ဆန်မှု"
      ],
      "ja": [
        "孤立",
        "孤独感",
        "閉鎖的"
      ]
    },
    "uprightMeaning": {
      "en": "The Hermit signifies solitude and introspection.",
      "my": "တောရဆောက်တည်သူ (အတွင်းစိတ်ဉာဏ်အလင်း) သည် ဆိတ်ငြိမ်မှု နှင့် အတွင်းစိတ်ကို ဆင်ခြင်သုံးသပ်ခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【隠者（The Hermit）】は、内省と探求を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Hermit cautions against isolation or loneliness.",
      "my": "ပြောင်းပြန်အနေအထားတွင် တောရဆောက်တည်သူ (အတွင်းစိတ်ဉာဏ်အလင်း) သည် လူအများနှင့် ဝေးကွာနေခြင်း သို့မဟုတ် အထီးကျန်ဆန်မှု ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【隠者（The Hermit）】は、孤立や孤独感への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Hermit brings solitude into your romantic life.",
        "my": "အချစ်ရေးတွင် တောရဆောက်တည်သူ (အတွင်းစိတ်ဉာဏ်အလင်း) သည် ဆိတ်ငြိမ်မှု ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、内省が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Hermit suggests working through isolation.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် တောရဆောက်တည်သူ (အတွင်းစိတ်ဉာဏ်အလင်း) သည် လူအများနှင့် ဝေးကွာနေခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、孤立を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Hermit highlights solitude.",
        "my": "အလုပ်အကိုင်တွင် တောရဆောက်တည်သူ (အတွင်းစိတ်ဉာဏ်အလင်း) သည် ဆိတ်ငြိမ်မှု ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、内省を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid isolation.",
        "my": "အလုပ်အကိုင်တွင် လူအများနှင့် ဝေးကွာနေခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、孤立による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with solitude.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဆိတ်ငြိမ်မှု ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、内省の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any isolation.",
        "my": "ဝိညာဉ်ရေးရာတွင် လူအများနှင့် ဝေးကွာနေခြင်း ကို ကုစားပါ။",
        "ja": "内なる孤立を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody solitude and walk forward with honor.",
      "my": "ဆိတ်ငြိမ်မှု ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの内省を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of isolation.",
      "my": "လူအများနှင့် ဝေးကွာနေခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "孤立に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Neutral / Unclear",
      "my": "မိမိအတွင်းစိတ်ကို အရင်စစ်ဆေးပါ",
      "ja": "内省を要する"
    },
    "symbolism": {
      "en": [
        "Symbol of The Hermit",
        "Elemental connection: Earth"
      ],
      "my": [
        "တောရဆောက်တည်သူ (အတွင်းစိတ်ဉာဏ်အလင်း) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "隠者（The Hermit）の象徴体系",
        "対応元素：Earth"
      ]
    }
  },
  {
    "id": "wheel-of-fortune",
    "file": "10-WheelOfFortune.png",
    "name": {
      "en": "Wheel of Fortune",
      "my": "ကံကြမ္မာစက်ဝိုင်း (ကံအလှည့်အပြောင်း)",
      "ja": "運命の輪（Wheel of Fortune）"
    },
    "number": 10,
    "romanNumeral": "10",
    "arcana": "major",
    "suit": "none",
    "element": "Fire",
    "astrology": {
      "en": "Jupiter",
      "my": "ဂျူပီတာ (ကြာသပတေးဂြိုဟ်)",
      "ja": "木星"
    },
    "uprightKeywords": {
      "en": [
        "Destiny",
        "Turning Point",
        "Cycles",
        "Luck"
      ],
      "my": [
        "ကံကြမ္မာအလှည့်အပြောင်း",
        "အခွင့်အခါကောင်း",
        "ကံကောင်းခြင်း"
      ],
      "ja": [
        "宿命の転換",
        "好転",
        "巡るサイクル",
        "チャンス到来"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Bad Luck",
        "Resistance to Change",
        "Delays"
      ],
      "my": [
        "မလိုလားအပ်သော အလှည့်အပြောင်း",
        "အပြောင်းအလဲကို ငြင်းဆန်ခြင်း"
      ],
      "ja": [
        "抗えない遅延",
        "悪循環",
        "時期尚早"
      ]
    },
    "uprightMeaning": {
      "en": "Wheel of Fortune signifies destiny and turning point.",
      "my": "ကံကြမ္မာစက်ဝိုင်း (ကံအလှည့်အပြောင်း) သည် ကံကြမ္မာအလှည့်အပြောင်း နှင့် အခွင့်အခါကောင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【運命の輪（Wheel of Fortune）】は、宿命の転換と好転を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, Wheel of Fortune cautions against bad luck or resistance to change.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ကံကြမ္မာစက်ဝိုင်း (ကံအလှည့်အပြောင်း) သည် မလိုလားအပ်သော အလှည့်အပြောင်း သို့မဟုတ် အပြောင်းအလဲကို ငြင်းဆန်ခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【運命の輪（Wheel of Fortune）】は、抗えない遅延や悪循環への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Wheel of Fortune brings destiny into your romantic life.",
        "my": "အချစ်ရေးတွင် ကံကြမ္မာစက်ဝိုင်း (ကံအလှည့်အပြောင်း) သည် ကံကြမ္မာအလှည့်အပြောင်း ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、宿命の転換が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed Wheel of Fortune suggests working through bad luck.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ကံကြမ္မာစက်ဝိုင်း (ကံအလှည့်အပြောင်း) သည် မလိုလားအပ်သော အလှည့်အပြောင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、抗えない遅延を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, Wheel of Fortune highlights destiny.",
        "my": "အလုပ်အကိုင်တွင် ကံကြမ္မာစက်ဝိုင်း (ကံအလှည့်အပြောင်း) သည် ကံကြမ္မာအလှည့်အပြောင်း ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、宿命の転換を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid bad luck.",
        "my": "အလုပ်အကိုင်တွင် မလိုလားအပ်သော အလှည့်အပြောင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、抗えない遅延による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with destiny.",
        "my": "ဝိညာဉ်ရေးရာတွင် ကံကြမ္မာအလှည့်အပြောင်း ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、宿命の転換の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any bad luck.",
        "my": "ဝိညာဉ်ရေးရာတွင် မလိုလားအပ်သော အလှည့်အပြောင်း ကို ကုစားပါ။",
        "ja": "内なる抗えない遅延を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody destiny and walk forward with honor.",
      "my": "ကံကြမ္မာအလှည့်အပြောင်း ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの宿命の転換を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of bad luck.",
      "my": "မလိုလားအပ်သော အလှည့်အပြောင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "抗えない遅延に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (အလွန်ကောင်းသော အလှည့်အပြောင်း)",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Symbol of Wheel of Fortune",
        "Elemental connection: Fire"
      ],
      "my": [
        "ကံကြမ္မာစက်ဝိုင်း (ကံအလှည့်အပြောင်း) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "運命の輪（Wheel of Fortune）の象徴体系",
        "対応元素：Fire"
      ]
    }
  },
  {
    "id": "justice",
    "file": "11-Justice.png",
    "name": {
      "en": "Justice",
      "my": "တရားမျှတမှု (အမှန်တရားနှင့် ကံအကျိုးပေး)",
      "ja": "正義（Justice）"
    },
    "number": 11,
    "romanNumeral": "11",
    "arcana": "major",
    "suit": "none",
    "element": "Air",
    "astrology": {
      "en": "Libra",
      "my": "တူရာသီ",
      "ja": "天秤座"
    },
    "uprightKeywords": {
      "en": [
        "Truth",
        "Fairness",
        "Cause and Effect",
        "Integrity"
      ],
      "my": [
        "တရားမျှတမှု",
        "အမှန်တရား",
        "ကံနှင့် ကံ၏အကျိုး"
      ],
      "ja": [
        "真実",
        "公正",
        "因果応報",
        "誠実さ"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Injustice",
        "Dishonesty",
        "Bias"
      ],
      "my": [
        "မတရားမှု",
        "ဘက်လိုက်မှု",
        "တာဝန်ယူမှုမဲ့ခြင်း"
      ],
      "ja": [
        "不公正",
        "偏見",
        "責任転嫁"
      ]
    },
    "uprightMeaning": {
      "en": "Justice signifies truth and fairness.",
      "my": "တရားမျှတမှု (အမှန်တရားနှင့် ကံအကျိုးပေး) သည် တရားမျှတမှု နှင့် အမှန်တရား ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【正義（Justice）】は、真実と公正を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, Justice cautions against injustice or dishonesty.",
      "my": "ပြောင်းပြန်အနေအထားတွင် တရားမျှတမှု (အမှန်တရားနှင့် ကံအကျိုးပေး) သည် မတရားမှု သို့မဟုတ် ဘက်လိုက်မှု ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【正義（Justice）】は、不公正や偏見への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Justice brings truth into your romantic life.",
        "my": "အချစ်ရေးတွင် တရားမျှတမှု (အမှန်တရားနှင့် ကံအကျိုးပေး) သည် တရားမျှတမှု ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、真実が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed Justice suggests working through injustice.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် တရားမျှတမှု (အမှန်တရားနှင့် ကံအကျိုးပေး) သည် မတရားမှု ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、不公正を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, Justice highlights truth.",
        "my": "အလုပ်အကိုင်တွင် တရားမျှတမှု (အမှန်တရားနှင့် ကံအကျိုးပေး) သည် တရားမျှတမှု ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、真実を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid injustice.",
        "my": "အလုပ်အကိုင်တွင် မတရားမှု ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、不公正による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with truth.",
        "my": "ဝိညာဉ်ရေးရာတွင် တရားမျှတမှု ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、真実の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any injustice.",
        "my": "ဝိညာဉ်ရေးရာတွင် မတရားမှု ကို ကုစားပါ။",
        "ja": "内なる不公正を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody truth and walk forward with honor.",
      "my": "တရားမျှတမှု ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの真実を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of injustice.",
      "my": "မတရားမှု ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "不公正に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "အမှန်တရားဘက်တွင် ရှိပါက ဖြစ်ပါသည်",
      "ja": "公正であればYES"
    },
    "symbolism": {
      "en": [
        "Symbol of Justice",
        "Elemental connection: Air"
      ],
      "my": [
        "တရားမျှတမှု (အမှန်တရားနှင့် ကံအကျိုးပေး) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "正義（Justice）の象徴体系",
        "対応元素：Air"
      ]
    }
  },
  {
    "id": "hanged-man",
    "file": "12-TheHangedMan.png",
    "name": {
      "en": "The Hanged Man",
      "my": "ဇောက်ထိုးဆွဲထားသောသူ (အမြင်သစ်နှင့် စွန့်လွှတ်မှု)",
      "ja": "吊るされた男（The Hanged Man）"
    },
    "number": 12,
    "romanNumeral": "12",
    "arcana": "major",
    "suit": "none",
    "element": "Water",
    "astrology": {
      "en": "Neptune",
      "my": "နက်ပကျွန်းဂြိုဟ်",
      "ja": "海王星"
    },
    "uprightKeywords": {
      "en": [
        "Pause",
        "Surrender",
        "New Perspective",
        "Patience"
      ],
      "my": [
        "ရပ်တန့်ဆင်ခြင်ခြင်း",
        "စွန့်လွှတ်အနစ်နာခံခြင်း",
        "အမြင်သစ်ရရှိခြင်း"
      ],
      "ja": [
        "手放し",
        "視点の転換",
        "静かな献身",
        "悟り"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Stalling",
        "Pointless Sacrifice",
        "Resistance"
      ],
      "my": [
        "အကျိုးမရှိသော စွန့်လွှတ်မှု",
        "အလကား အချိန်ဆွဲနေခြင်း"
      ],
      "ja": [
        "無駄な我慢",
        "停滞",
        "自己犠牲の罠"
      ]
    },
    "uprightMeaning": {
      "en": "The Hanged Man signifies pause and surrender.",
      "my": "ဇောက်ထိုးဆွဲထားသောသူ (အမြင်သစ်နှင့် စွန့်လွှတ်မှု) သည် ရပ်တန့်ဆင်ခြင်ခြင်း နှင့် စွန့်လွှတ်အနစ်နာခံခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【吊るされた男（The Hanged Man）】は、手放しと視点の転換を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Hanged Man cautions against stalling or pointless sacrifice.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ဇောက်ထိုးဆွဲထားသောသူ (အမြင်သစ်နှင့် စွန့်လွှတ်မှု) သည် အကျိုးမရှိသော စွန့်လွှတ်မှု သို့မဟုတ် အလကား အချိန်ဆွဲနေခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【吊るされた男（The Hanged Man）】は、無駄な我慢や停滞への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Hanged Man brings pause into your romantic life.",
        "my": "အချစ်ရေးတွင် ဇောက်ထိုးဆွဲထားသောသူ (အမြင်သစ်နှင့် စွန့်လွှတ်မှု) သည် ရပ်တန့်ဆင်ခြင်ခြင်း ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、手放しが関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Hanged Man suggests working through stalling.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဇောက်ထိုးဆွဲထားသောသူ (အမြင်သစ်နှင့် စွန့်လွှတ်မှု) သည် အကျိုးမရှိသော စွန့်လွှတ်မှု ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、無駄な我慢を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Hanged Man highlights pause.",
        "my": "အလုပ်အကိုင်တွင် ဇောက်ထိုးဆွဲထားသောသူ (အမြင်သစ်နှင့် စွန့်လွှတ်မှု) သည် ရပ်တန့်ဆင်ခြင်ခြင်း ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、手放しを意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid stalling.",
        "my": "အလုပ်အကိုင်တွင် အကျိုးမရှိသော စွန့်လွှတ်မှု ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、無駄な我慢による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with pause.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရပ်တန့်ဆင်ခြင်ခြင်း ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、手放しの神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any stalling.",
        "my": "ဝိညာဉ်ရေးရာတွင် အကျိုးမရှိသော စွန့်လွှတ်မှု ကို ကုစားပါ။",
        "ja": "内なる無駄な我慢を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody pause and walk forward with honor.",
      "my": "ရပ်တန့်ဆင်ခြင်ခြင်း ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの手放しを信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of stalling.",
      "my": "အကျိုးမရှိသော စွန့်လွှတ်မှု ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "無駄な我慢に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Neutral / Unclear",
      "my": "စောင့်ဆိုင်းရန် လိုအပ်သည်",
      "ja": "保留・視点変更"
    },
    "symbolism": {
      "en": [
        "Symbol of The Hanged Man",
        "Elemental connection: Water"
      ],
      "my": [
        "ဇောက်ထိုးဆွဲထားသောသူ (အမြင်သစ်နှင့် စွန့်လွှတ်မှု) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "吊るされた男（The Hanged Man）の象徴体系",
        "対応元素：Water"
      ]
    }
  },
  {
    "id": "death",
    "file": "13-Death.png",
    "name": {
      "en": "Death",
      "my": "သေခြင်းတရား (အသစ်ပြန်လည်မွေးဖွားခြင်း)",
      "ja": "死神（Death）"
    },
    "number": 13,
    "romanNumeral": "13",
    "arcana": "major",
    "suit": "none",
    "element": "Water",
    "astrology": {
      "en": "Scorpio",
      "my": "ဗြိစ္ဆာရာသီ",
      "ja": "蠍座"
    },
    "uprightKeywords": {
      "en": [
        "Endings",
        "Transformation",
        "Transition",
        "Rebirth"
      ],
      "my": [
        "အဟောင်းများ ချုပ်ငြိမ်းခြင်း",
        "အသစ်ပြန်လည်မွေးဖွားခြင်း",
        "ကြီးမားသော အပြောင်းအလဲ"
      ],
      "ja": [
        "大いなる終焉",
        "再生",
        "根本的変容",
        "脱皮"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Fear of Change",
        "Holding On",
        "Stagnation"
      ],
      "my": [
        "အပြောင်းအလဲကို ကြောက်ရွံ့ခြင်း",
        "မရှိတော့သောအရာကို ဖက်တွယ်ထားခြင်း"
      ],
      "ja": [
        "変化への抵抗",
        "執着",
        "緩慢な腐敗"
      ]
    },
    "uprightMeaning": {
      "en": "Death signifies endings and transformation.",
      "my": "သေခြင်းတရား (အသစ်ပြန်လည်မွေးဖွားခြင်း) သည် အဟောင်းများ ချုပ်ငြိမ်းခြင်း နှင့် အသစ်ပြန်လည်မွေးဖွားခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【死神（Death）】は、大いなる終焉と再生を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, Death cautions against fear of change or holding on.",
      "my": "ပြောင်းပြန်အနေအထားတွင် သေခြင်းတရား (အသစ်ပြန်လည်မွေးဖွားခြင်း) သည် အပြောင်းအလဲကို ကြောက်ရွံ့ခြင်း သို့မဟုတ် မရှိတော့သောအရာကို ဖက်တွယ်ထားခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【死神（Death）】は、変化への抵抗や執着への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Death brings endings into your romantic life.",
        "my": "အချစ်ရေးတွင် သေခြင်းတရား (အသစ်ပြန်လည်မွေးဖွားခြင်း) သည် အဟောင်းများ ချုပ်ငြိမ်းခြင်း ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、大いなる終焉が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed Death suggests working through fear of change.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သေခြင်းတရား (အသစ်ပြန်လည်မွေးဖွားခြင်း) သည် အပြောင်းအလဲကို ကြောက်ရွံ့ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、変化への抵抗を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, Death highlights endings.",
        "my": "အလုပ်အကိုင်တွင် သေခြင်းတရား (အသစ်ပြန်လည်မွေးဖွားခြင်း) သည် အဟောင်းများ ချုပ်ငြိမ်းခြင်း ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、大いなる終焉を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid fear of change.",
        "my": "အလုပ်အကိုင်တွင် အပြောင်းအလဲကို ကြောက်ရွံ့ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、変化への抵抗による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with endings.",
        "my": "ဝိညာဉ်ရေးရာတွင် အဟောင်းများ ချုပ်ငြိမ်းခြင်း ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、大いなる終焉の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any fear of change.",
        "my": "ဝိညာဉ်ရေးရာတွင် အပြောင်းအလဲကို ကြောက်ရွံ့ခြင်း ကို ကုစားပါ။",
        "ja": "内なる変化への抵抗を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody endings and walk forward with honor.",
      "my": "အဟောင်းများ ချုပ်ငြိမ်းခြင်း ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの大いなる終焉を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of fear of change.",
      "my": "အပြောင်းအလဲကို ကြောက်ရွံ့ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "変化への抵抗に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Transformative",
      "my": "ကြီးမားသော အပြောင်းအလဲဖြစ်ပါသည်",
      "ja": "変革の後にYES"
    },
    "symbolism": {
      "en": [
        "Symbol of Death",
        "Elemental connection: Water"
      ],
      "my": [
        "သေခြင်းတရား (အသစ်ပြန်လည်မွေးဖွားခြင်း) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "死神（Death）の象徴体系",
        "対応元素：Water"
      ]
    }
  },
  {
    "id": "temperance",
    "file": "14-Temperance.png",
    "name": {
      "en": "Temperance",
      "my": "မျှတမှု (စိတ်အေးချမ်းမှုနှင့် ဟန်ချက်ညီခြင်း)",
      "ja": "節制（Temperance）"
    },
    "number": 14,
    "romanNumeral": "14",
    "arcana": "major",
    "suit": "none",
    "element": "Fire",
    "astrology": {
      "en": "Sagittarius",
      "my": "ဓနုရာသီ",
      "ja": "射手座"
    },
    "uprightKeywords": {
      "en": [
        "Balance",
        "Moderation",
        "Patience",
        "Alchemy"
      ],
      "my": [
        "အလယ်အလတ်လမ်းစဉ်",
        "ဟန်ချက်ညီမှု",
        "စိတ်ရှည်သည်းခံခြင်း"
      ],
      "ja": [
        "調和",
        "中庸",
        "錬金術的融合",
        "穏やかな統合"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Excess",
        "Impatience",
        "Extremes"
      ],
      "my": [
        "အစွန်းရောက်ခြင်း",
        "စိတ်မရှည်ခြင်း",
        "မညီမျှမှု"
      ],
      "ja": [
        "極端",
        "不調和",
        "過度なアンバランス"
      ]
    },
    "uprightMeaning": {
      "en": "Temperance signifies balance and moderation.",
      "my": "မျှတမှု (စိတ်အေးချမ်းမှုနှင့် ဟန်ချက်ညီခြင်း) သည် အလယ်အလတ်လမ်းစဉ် နှင့် ဟန်ချက်ညီမှု ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【節制（Temperance）】は、調和と中庸を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, Temperance cautions against excess or impatience.",
      "my": "ပြောင်းပြန်အနေအထားတွင် မျှတမှု (စိတ်အေးချမ်းမှုနှင့် ဟန်ချက်ညီခြင်း) သည် အစွန်းရောက်ခြင်း သို့မဟုတ် စိတ်မရှည်ခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【節制（Temperance）】は、極端や不調和への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Temperance brings balance into your romantic life.",
        "my": "အချစ်ရေးတွင် မျှတမှု (စိတ်အေးချမ်းမှုနှင့် ဟန်ချက်ညီခြင်း) သည် အလယ်အလတ်လမ်းစဉ် ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、調和が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed Temperance suggests working through excess.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် မျှတမှု (စိတ်အေးချမ်းမှုနှင့် ဟန်ချက်ညီခြင်း) သည် အစွန်းရောက်ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、極端を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, Temperance highlights balance.",
        "my": "အလုပ်အကိုင်တွင် မျှတမှု (စိတ်အေးချမ်းမှုနှင့် ဟန်ချက်ညီခြင်း) သည် အလယ်အလတ်လမ်းစဉ် ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、調和を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid excess.",
        "my": "အလုပ်အကိုင်တွင် အစွန်းရောက်ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、極端による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with balance.",
        "my": "ဝိညာဉ်ရေးရာတွင် အလယ်အလတ်လမ်းစဉ် ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、調和の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any excess.",
        "my": "ဝိညာဉ်ရေးရာတွင် အစွန်းရောက်ခြင်း ကို ကုစားပါ။",
        "ja": "内なる極端を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody balance and walk forward with honor.",
      "my": "အလယ်အလတ်လမ်းစဉ် ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの調和を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of excess.",
      "my": "အစွန်းရောက်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "極端に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Symbol of Temperance",
        "Elemental connection: Fire"
      ],
      "my": [
        "မျှတမှု (စိတ်အေးချမ်းမှုနှင့် ဟန်ချက်ညီခြင်း) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "節制（Temperance）の象徴体系",
        "対応元素：Fire"
      ]
    }
  },
  {
    "id": "devil",
    "file": "15-TheDevil.png",
    "name": {
      "en": "The Devil",
      "my": "မာရ်နတ် (တွယ်တာမှုနှင့် ထောင်ချောက်)",
      "ja": "悪魔（The Devil）"
    },
    "number": 15,
    "romanNumeral": "15",
    "arcana": "major",
    "suit": "none",
    "element": "Earth",
    "astrology": {
      "en": "Capricorn",
      "my": "မကာရရာသီ",
      "ja": "山羊座"
    },
    "uprightKeywords": {
      "en": [
        "Attachment",
        "Shadow Self",
        "Material Trap",
        "Temptation"
      ],
      "my": [
        "တွယ်တာမှုထောင်ချောက်",
        "မကောင်းသော အလေ့အထ",
        "သွေးဆောင်ဖျားယောင်းမှု"
      ],
      "ja": [
        "執着",
        "影の自己（シャドウ）",
        "物質的束縛",
        "甘い誘惑"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Breaking Chains",
        "Freedom",
        "Reclaiming Power"
      ],
      "my": [
        "ထောင်ချောက်မှ လွတ်မြောက်ခြင်း",
        "မိမိစွမ်းအားကို ပြန်လည်ရယူခြင်း"
      ],
      "ja": [
        "鎖の解放",
        "覚醒",
        "依存からの脱却"
      ]
    },
    "uprightMeaning": {
      "en": "The Devil signifies attachment and shadow self.",
      "my": "မာရ်နတ် (တွယ်တာမှုနှင့် ထောင်ချောက်) သည် တွယ်တာမှုထောင်ချောက် နှင့် မကောင်းသော အလေ့အထ ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【悪魔（The Devil）】は、執着と影の自己（シャドウ）を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Devil cautions against breaking chains or freedom.",
      "my": "ပြောင်းပြန်အနေအထားတွင် မာရ်နတ် (တွယ်တာမှုနှင့် ထောင်ချောက်) သည် ထောင်ချောက်မှ လွတ်မြောက်ခြင်း သို့မဟုတ် မိမိစွမ်းအားကို ပြန်လည်ရယူခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【悪魔（The Devil）】は、鎖の解放や覚醒への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Devil brings attachment into your romantic life.",
        "my": "အချစ်ရေးတွင် မာရ်နတ် (တွယ်တာမှုနှင့် ထောင်ချောက်) သည် တွယ်တာမှုထောင်ချောက် ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、執着が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Devil suggests working through breaking chains.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် မာရ်နတ် (တွယ်တာမှုနှင့် ထောင်ချောက်) သည် ထောင်ချောက်မှ လွတ်မြောက်ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、鎖の解放を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Devil highlights attachment.",
        "my": "အလုပ်အကိုင်တွင် မာရ်နတ် (တွယ်တာမှုနှင့် ထောင်ချောက်) သည် တွယ်တာမှုထောင်ချောက် ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、執着を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid breaking chains.",
        "my": "အလုပ်အကိုင်တွင် ထောင်ချောက်မှ လွတ်မြောက်ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、鎖の解放による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with attachment.",
        "my": "ဝိညာဉ်ရေးရာတွင် တွယ်တာမှုထောင်ချောက် ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、執着の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any breaking chains.",
        "my": "ဝိညာဉ်ရေးရာတွင် ထောင်ချောက်မှ လွတ်မြောက်ခြင်း ကို ကုစားပါ။",
        "ja": "内なる鎖の解放を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody attachment and walk forward with honor.",
      "my": "တွယ်တာမှုထောင်ချောက် ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの執着を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of breaking chains.",
      "my": "ထောင်ချောက်မှ လွတ်မြောက်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "鎖の解放に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (သတိထားပါ)",
      "ja": "NO（束縛への警告）"
    },
    "symbolism": {
      "en": [
        "Symbol of The Devil",
        "Elemental connection: Earth"
      ],
      "my": [
        "မာရ်နတ် (တွယ်တာမှုနှင့် ထောင်ချောက်) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "悪魔（The Devil）の象徴体系",
        "対応元素：Earth"
      ]
    }
  },
  {
    "id": "tower",
    "file": "16-TheTower.png",
    "name": {
      "en": "The Tower",
      "my": "မျှော်စင် (ရုတ်တရက် အပြောင်းအလဲနှင့် အမှန်တရား)",
      "ja": "塔（The Tower）"
    },
    "number": 16,
    "romanNumeral": "16",
    "arcana": "major",
    "suit": "none",
    "element": "Fire",
    "astrology": {
      "en": "Mars",
      "my": "အင်္ဂါဂြိုဟ်",
      "ja": "火星"
    },
    "uprightKeywords": {
      "en": [
        "Sudden Awakening",
        "Shaking Foundations",
        "Revelation",
        "Breakthrough"
      ],
      "my": [
        "ရုတ်တရက်ပြိုလဲခြင်း",
        "အမှန်တရားပေါ်ပေါက်ခြင်း",
        "လွတ်မြောက်မှု"
      ],
      "ja": [
        "電撃的な崩壊",
        "偽りの打破",
        "劇的目覚め",
        "再生の雷"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Averted Disaster",
        "Feared Collapse",
        "Internal Crisis"
      ],
      "my": [
        "ဘေးအန္တရာယ်မှ သီသီလေးလွတ်ခြင်း",
        "ကြောက်ရွံ့မှုကြောင့် ကြန့်ကြာနေခြင်း"
      ],
      "ja": [
        "危機の一服",
        "未練による崩壊の引き延ばし"
      ]
    },
    "uprightMeaning": {
      "en": "The Tower signifies sudden awakening and shaking foundations.",
      "my": "မျှော်စင် (ရုတ်တရက် အပြောင်းအလဲနှင့် အမှန်တရား) သည် ရုတ်တရက်ပြိုလဲခြင်း နှင့် အမှန်တရားပေါ်ပေါက်ခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【塔（The Tower）】は、電撃的な崩壊と偽りの打破を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Tower cautions against averted disaster or feared collapse.",
      "my": "ပြောင်းပြန်အနေအထားတွင် မျှော်စင် (ရုတ်တရက် အပြောင်းအလဲနှင့် အမှန်တရား) သည် ဘေးအန္တရာယ်မှ သီသီလေးလွတ်ခြင်း သို့မဟုတ် ကြောက်ရွံ့မှုကြောင့် ကြန့်ကြာနေခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【塔（The Tower）】は、危機の一服や未練による崩壊の引き延ばしへの注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Tower brings sudden awakening into your romantic life.",
        "my": "အချစ်ရေးတွင် မျှော်စင် (ရုတ်တရက် အပြောင်းအလဲနှင့် အမှန်တရား) သည် ရုတ်တရက်ပြိုလဲခြင်း ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、電撃的な崩壊が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Tower suggests working through averted disaster.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် မျှော်စင် (ရုတ်တရက် အပြောင်းအလဲနှင့် အမှန်တရား) သည် ဘေးအန္တရာယ်မှ သီသီလေးလွတ်ခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、危機の一服を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Tower highlights sudden awakening.",
        "my": "အလုပ်အကိုင်တွင် မျှော်စင် (ရုတ်တရက် အပြောင်းအလဲနှင့် အမှန်တရား) သည် ရုတ်တရက်ပြိုလဲခြင်း ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、電撃的な崩壊を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid averted disaster.",
        "my": "အလုပ်အကိုင်တွင် ဘေးအန္တရာယ်မှ သီသီလေးလွတ်ခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、危機の一服による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with sudden awakening.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရုတ်တရက်ပြိုလဲခြင်း ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、電撃的な崩壊の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any averted disaster.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဘေးအန္တရာယ်မှ သီသီလေးလွတ်ခြင်း ကို ကုစားပါ။",
        "ja": "内なる危機の一服を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody sudden awakening and walk forward with honor.",
      "my": "ရုတ်တရက်ပြိုလဲခြင်း ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの電撃的な崩壊を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of averted disaster.",
      "my": "ဘေးအန္တရာယ်မှ သီသီလေးလွတ်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "危機の一服に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (ကြီးမားသော သတိပေးချက်)",
      "ja": "NO（激動）"
    },
    "symbolism": {
      "en": [
        "Symbol of The Tower",
        "Elemental connection: Fire"
      ],
      "my": [
        "မျှော်စင် (ရုတ်တရက် အပြောင်းအလဲနှင့် အမှန်တရား) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "塔（The Tower）の象徴体系",
        "対応元素：Fire"
      ]
    }
  },
  {
    "id": "star",
    "file": "17-TheStar.png",
    "name": {
      "en": "The Star",
      "my": "ကြယ်တာရာ (မျှော်လင့်ချက်နှင့် စိတ်သက်သာရာရခြင်း)",
      "ja": "星（The Star）"
    },
    "number": 17,
    "romanNumeral": "17",
    "arcana": "major",
    "suit": "none",
    "element": "Air",
    "astrology": {
      "en": "Aquarius",
      "my": "ကုမ်ရာသီ",
      "ja": "水瓶座"
    },
    "uprightKeywords": {
      "en": [
        "Hope",
        "Healing",
        "Divine Serenity",
        "Inspiration"
      ],
      "my": [
        "မျှော်လင့်ချက်",
        "ကုစားမှုရရှိခြင်း",
        "စိတ်အေးချမ်းမှု"
      ],
      "ja": [
        "希望の光",
        "癒やし",
        "清らかな導き",
        "インスピレーション"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Dimmed Faith",
        "Despair",
        "Disconnection"
      ],
      "my": [
        "ယုံကြည်မှုပျောက်ဆုံးခြင်း",
        "စိတ်ဓာတ်ကျဆင်းခြင်း"
      ],
      "ja": [
        "希望の見失い",
        "失望",
        "孤立感"
      ]
    },
    "uprightMeaning": {
      "en": "The Star signifies hope and healing.",
      "my": "ကြယ်တာရာ (မျှော်လင့်ချက်နှင့် စိတ်သက်သာရာရခြင်း) သည် မျှော်လင့်ချက် နှင့် ကုစားမှုရရှိခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【星（The Star）】は、希望の光と癒やしを象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Star cautions against dimmed faith or despair.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ကြယ်တာရာ (မျှော်လင့်ချက်နှင့် စိတ်သက်သာရာရခြင်း) သည် ယုံကြည်မှုပျောက်ဆုံးခြင်း သို့မဟုတ် စိတ်ဓာတ်ကျဆင်းခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【星（The Star）】は、希望の見失いや失望への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Star brings hope into your romantic life.",
        "my": "အချစ်ရေးတွင် ကြယ်တာရာ (မျှော်လင့်ချက်နှင့် စိတ်သက်သာရာရခြင်း) သည် မျှော်လင့်ချက် ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、希望の光が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Star suggests working through dimmed faith.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ကြယ်တာရာ (မျှော်လင့်ချက်နှင့် စိတ်သက်သာရာရခြင်း) သည် ယုံကြည်မှုပျောက်ဆုံးခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、希望の見失いを乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Star highlights hope.",
        "my": "အလုပ်အကိုင်တွင် ကြယ်တာရာ (မျှော်လင့်ချက်နှင့် စိတ်သက်သာရာရခြင်း) သည် မျှော်လင့်ချက် ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、希望の光を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid dimmed faith.",
        "my": "အလုပ်အကိုင်တွင် ယုံကြည်မှုပျောက်ဆုံးခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、希望の見失いによる停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with hope.",
        "my": "ဝိညာဉ်ရေးရာတွင် မျှော်လင့်ချက် ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、希望の光の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any dimmed faith.",
        "my": "ဝိညာဉ်ရေးရာတွင် ယုံကြည်မှုပျောက်ဆုံးခြင်း ကို ကုစားပါ။",
        "ja": "内なる希望の見失いを静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody hope and walk forward with honor.",
      "my": "မျှော်လင့်ချက် ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの希望の光を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of dimmed faith.",
      "my": "ယုံကြည်မှုပျောက်ဆုံးခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "希望の見失いに囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (အလွန်ကောင်းမွန်သော နိမိတ်)",
      "ja": "YES（確かな光明）"
    },
    "symbolism": {
      "en": [
        "Symbol of The Star",
        "Elemental connection: Air"
      ],
      "my": [
        "ကြယ်တာရာ (မျှော်လင့်ချက်နှင့် စိတ်သက်သာရာရခြင်း) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "星（The Star）の象徴体系",
        "対応元素：Air"
      ]
    }
  },
  {
    "id": "moon",
    "file": "18-TheMoon.png",
    "name": {
      "en": "The Moon",
      "my": "လမင်း (မသေချာမှုနှင့် အတွင်းစိတ်စိုးရိမ်မှု)",
      "ja": "月（The Moon）"
    },
    "number": 18,
    "romanNumeral": "18",
    "arcana": "major",
    "suit": "none",
    "element": "Water",
    "astrology": {
      "en": "Pisces",
      "my": "မိန်ရာသီ",
      "ja": "魚座"
    },
    "uprightKeywords": {
      "en": [
        "Illusion",
        "Intuition",
        "Subconscious Fears",
        "Dreams"
      ],
      "my": [
        "အမြင်မှားခြင်း",
        "မသေချာမရေရာမှု",
        "မသိစိတ်ထဲမှ စိုးရိမ်ပူပန်မှု"
      ],
      "ja": [
        "幻影",
        "曖昧さ",
        "深層心理の不安",
        "直感の蠢き"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Clarity Emerging",
        "Conquering Fear",
        "Truth Revealed"
      ],
      "my": [
        "စိတ်ရှုပ်ထွေးမှုများ ရှင်းလင်းသွားခြင်း",
        "အမှန်တရားပေါ်လာခြင်း"
      ],
      "ja": [
        "霧の晴れ間",
        "不安の克服",
        "真実の浮上"
      ]
    },
    "uprightMeaning": {
      "en": "The Moon signifies illusion and intuition.",
      "my": "လမင်း (မသေချာမှုနှင့် အတွင်းစိတ်စိုးရိမ်မှု) သည် အမြင်မှားခြင်း နှင့် မသေချာမရေရာမှု ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【月（The Moon）】は、幻影と曖昧さを象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Moon cautions against clarity emerging or conquering fear.",
      "my": "ပြောင်းပြန်အနေအထားတွင် လမင်း (မသေချာမှုနှင့် အတွင်းစိတ်စိုးရိမ်မှု) သည် စိတ်ရှုပ်ထွေးမှုများ ရှင်းလင်းသွားခြင်း သို့မဟုတ် အမှန်တရားပေါ်လာခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【月（The Moon）】は、霧の晴れ間や不安の克服への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Moon brings illusion into your romantic life.",
        "my": "အချစ်ရေးတွင် လမင်း (မသေချာမှုနှင့် အတွင်းစိတ်စိုးရိမ်မှု) သည် အမြင်မှားခြင်း ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、幻影が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Moon suggests working through clarity emerging.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် လမင်း (မသေချာမှုနှင့် အတွင်းစိတ်စိုးရိမ်မှု) သည် စိတ်ရှုပ်ထွေးမှုများ ရှင်းလင်းသွားခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、霧の晴れ間を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Moon highlights illusion.",
        "my": "အလုပ်အကိုင်တွင် လမင်း (မသေချာမှုနှင့် အတွင်းစိတ်စိုးရိမ်မှု) သည် အမြင်မှားခြင်း ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、幻影を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid clarity emerging.",
        "my": "အလုပ်အကိုင်တွင် စိတ်ရှုပ်ထွေးမှုများ ရှင်းလင်းသွားခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、霧の晴れ間による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with illusion.",
        "my": "ဝိညာဉ်ရေးရာတွင် အမြင်မှားခြင်း ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、幻影の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any clarity emerging.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်ရှုပ်ထွေးမှုများ ရှင်းလင်းသွားခြင်း ကို ကုစားပါ။",
        "ja": "内なる霧の晴れ間を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody illusion and walk forward with honor.",
      "my": "အမြင်မှားခြင်း ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの幻影を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of clarity emerging.",
      "my": "စိတ်ရှုပ်ထွေးမှုများ ရှင်းလင်းသွားခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "霧の晴れ間に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Likely No",
      "my": "သတိထားဆင်ခြင်ရန် လိုအပ်သည်",
      "ja": "NO（不透明）"
    },
    "symbolism": {
      "en": [
        "Symbol of The Moon",
        "Elemental connection: Water"
      ],
      "my": [
        "လမင်း (မသေချာမှုနှင့် အတွင်းစိတ်စိုးရိမ်မှု) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "月（The Moon）の象徴体系",
        "対応元素：Water"
      ]
    }
  },
  {
    "id": "sun",
    "file": "19-TheSun.png",
    "name": {
      "en": "The Sun",
      "my": "နေမင်း (အောင်မြင်မှု၊ ပျော်ရွှင်မှုနှင့် အလင်း)",
      "ja": "太陽（The Sun）"
    },
    "number": 19,
    "romanNumeral": "19",
    "arcana": "major",
    "suit": "none",
    "element": "Fire",
    "astrology": {
      "en": "Sun",
      "my": "နေမင်း (တနင်္ဂနွေ)",
      "ja": "太陽"
    },
    "uprightKeywords": {
      "en": [
        "Joy",
        "Success",
        "Radiance",
        "Vitality"
      ],
      "my": [
        "ကြီးမားသော အောင်မြင်မှု",
        "ပျော်ရွှင်ကြည်နူးခြင်း",
        "တောက်ပသောအလင်း"
      ],
      "ja": [
        "無上の喜び",
        "大成功",
        "明朗快活",
        "生命の躍動"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Dimmed Joy",
        "Delayed Success",
        "Temporary Clouds"
      ],
      "my": [
        "ပျော်ရွှင်မှု အနည်းငယ်ကြန့်ကြာခြင်း",
        "ယာယီအခက်အခဲ"
      ],
      "ja": [
        "一時的な陰り",
        "遅延する喜び",
        "過信"
      ]
    },
    "uprightMeaning": {
      "en": "The Sun signifies joy and success.",
      "my": "နေမင်း (အောင်မြင်မှု၊ ပျော်ရွှင်မှုနှင့် အလင်း) သည် ကြီးမားသော အောင်မြင်မှု နှင့် ပျော်ရွှင်ကြည်နူးခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【太陽（The Sun）】は、無上の喜びと大成功を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The Sun cautions against dimmed joy or delayed success.",
      "my": "ပြောင်းပြန်အနေအထားတွင် နေမင်း (အောင်မြင်မှု၊ ပျော်ရွှင်မှုနှင့် အလင်း) သည် ပျော်ရွှင်မှု အနည်းငယ်ကြန့်ကြာခြင်း သို့မဟုတ် ယာယီအခက်အခဲ ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【太陽（The Sun）】は、一時的な陰りや遅延する喜びへの注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The Sun brings joy into your romantic life.",
        "my": "အချစ်ရေးတွင် နေမင်း (အောင်မြင်မှု၊ ပျော်ရွှင်မှုနှင့် အလင်း) သည် ကြီးမားသော အောင်မြင်မှု ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、無上の喜びが関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The Sun suggests working through dimmed joy.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် နေမင်း (အောင်မြင်မှု၊ ပျော်ရွှင်မှုနှင့် အလင်း) သည် ပျော်ရွှင်မှု အနည်းငယ်ကြန့်ကြာခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、一時的な陰りを乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The Sun highlights joy.",
        "my": "အလုပ်အကိုင်တွင် နေမင်း (အောင်မြင်မှု၊ ပျော်ရွှင်မှုနှင့် အလင်း) သည် ကြီးမားသော အောင်မြင်မှု ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、無上の喜びを意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid dimmed joy.",
        "my": "အလုပ်အကိုင်တွင် ပျော်ရွှင်မှု အနည်းငယ်ကြန့်ကြာခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、一時的な陰りによる停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with joy.",
        "my": "ဝိညာဉ်ရေးရာတွင် ကြီးမားသော အောင်မြင်မှု ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、無上の喜びの神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any dimmed joy.",
        "my": "ဝိညာဉ်ရေးရာတွင် ပျော်ရွှင်မှု အနည်းငယ်ကြန့်ကြာခြင်း ကို ကုစားပါ။",
        "ja": "内なる一時的な陰りを静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody joy and walk forward with honor.",
      "my": "ကြီးမားသော အောင်မြင်မှု ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの無上の喜びを信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of dimmed joy.",
      "my": "ပျော်ရွှင်မှု အနည်းငယ်ကြန့်ကြာခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "一時的な陰りに囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (အထူးမင်္ဂလာရှိပါသည်)",
      "ja": "YES（絶対の祝福）"
    },
    "symbolism": {
      "en": [
        "Symbol of The Sun",
        "Elemental connection: Fire"
      ],
      "my": [
        "နေမင်း (အောင်မြင်မှု၊ ပျော်ရွှင်မှုနှင့် အလင်း) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "太陽（The Sun）の象徴体系",
        "対応元素：Fire"
      ]
    }
  },
  {
    "id": "judgement",
    "file": "20-Judgement.png",
    "name": {
      "en": "Judgement",
      "my": "တရားစီရင်ခြင်း (နိုးထခြင်းနှင့် ခေါ်ယူသံ)",
      "ja": "審判（Judgement）"
    },
    "number": 20,
    "romanNumeral": "20",
    "arcana": "major",
    "suit": "none",
    "element": "Fire",
    "astrology": {
      "en": "Pluto",
      "my": "ပလူတိုဂြိုဟ်",
      "ja": "冥王星"
    },
    "uprightKeywords": {
      "en": [
        "Awakening",
        "Calling",
        "Rebirth",
        "Absolution"
      ],
      "my": [
        "ဝိညာဉ်နိုးထခြင်း",
        "မြင့်မြတ်သောခေါ်သံ",
        "အသစ်စတင်ခြင်း"
      ],
      "ja": [
        "魂の覚醒",
        "運命の呼び声",
        "復活",
        "赦し"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Self-Doubt",
        "Ignoring the Call",
        "Harsh Self-Criticism"
      ],
      "my": [
        "ခေါ်သံကို လျစ်လျူရှုခြင်း",
        "မိမိကိုယ်ကို အပြစ်တင်နေခြင်း"
      ],
      "ja": [
        "呼び声の無視",
        "過酷な自己批判",
        "躊躇"
      ]
    },
    "uprightMeaning": {
      "en": "Judgement signifies awakening and calling.",
      "my": "တရားစီရင်ခြင်း (နိုးထခြင်းနှင့် ခေါ်ယူသံ) သည် ဝိညာဉ်နိုးထခြင်း နှင့် မြင့်မြတ်သောခေါ်သံ ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【審判（Judgement）】は、魂の覚醒と運命の呼び声を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, Judgement cautions against self-doubt or ignoring the call.",
      "my": "ပြောင်းပြန်အနေအထားတွင် တရားစီရင်ခြင်း (နိုးထခြင်းနှင့် ခေါ်ယူသံ) သည် ခေါ်သံကို လျစ်လျူရှုခြင်း သို့မဟုတ် မိမိကိုယ်ကို အပြစ်တင်နေခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【審判（Judgement）】は、呼び声の無視や過酷な自己批判への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Judgement brings awakening into your romantic life.",
        "my": "အချစ်ရေးတွင် တရားစီရင်ခြင်း (နိုးထခြင်းနှင့် ခေါ်ယူသံ) သည် ဝိညာဉ်နိုးထခြင်း ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、魂の覚醒が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed Judgement suggests working through self-doubt.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် တရားစီရင်ခြင်း (နိုးထခြင်းနှင့် ခေါ်ယူသံ) သည် ခေါ်သံကို လျစ်လျူရှုခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、呼び声の無視を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, Judgement highlights awakening.",
        "my": "အလုပ်အကိုင်တွင် တရားစီရင်ခြင်း (နိုးထခြင်းနှင့် ခေါ်ယူသံ) သည် ဝိညာဉ်နိုးထခြင်း ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、魂の覚醒を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid self-doubt.",
        "my": "အလုပ်အကိုင်တွင် ခေါ်သံကို လျစ်လျူရှုခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、呼び声の無視による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with awakening.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဝိညာဉ်နိုးထခြင်း ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、魂の覚醒の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any self-doubt.",
        "my": "ဝိညာဉ်ရေးရာတွင် ခေါ်သံကို လျစ်လျူရှုခြင်း ကို ကုစားပါ။",
        "ja": "内なる呼び声の無視を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody awakening and walk forward with honor.",
      "my": "ဝိညာဉ်နိုးထခြင်း ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの魂の覚醒を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of self-doubt.",
      "my": "ခေါ်သံကို လျစ်လျူရှုခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "呼び声の無視に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Symbol of Judgement",
        "Elemental connection: Fire"
      ],
      "my": [
        "တရားစီရင်ခြင်း (နိုးထခြင်းနှင့် ခေါ်ယူသံ) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "審判（Judgement）の象徴体系",
        "対応元素：Fire"
      ]
    }
  },
  {
    "id": "world",
    "file": "21-TheWorld.png",
    "name": {
      "en": "The World",
      "my": "ကမ္ဘာလောက (ပြည့်စုံခြင်းနှင့် စက်ဝိုင်းပြည့်မြောက်ခြင်း)",
      "ja": "世界（The World）"
    },
    "number": 21,
    "romanNumeral": "21",
    "arcana": "major",
    "suit": "none",
    "element": "Earth",
    "astrology": {
      "en": "Saturn",
      "my": "စနေဂြိုဟ်",
      "ja": "土星"
    },
    "uprightKeywords": {
      "en": [
        "Completion",
        "Wholeness",
        "Triumph",
        "Integration"
      ],
      "my": [
        "ပြီးပြည့်စုံခြင်း",
        "အောင်မြင်မှုခရီးစဉ် ပြီးဆုံးခြင်း",
        "ဂုဏ်ပြုခံရခြင်း"
      ],
      "ja": [
        "大団円",
        "完全なる達成",
        "統合",
        "世界の調和"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Incompletion",
        "Lack of Closure",
        "Shortcuts"
      ],
      "my": [
        "မပြီးပြတ်သေးခြင်း",
        "အဆုံးသတ်ရန် လိုအပ်နေခြင်း"
      ],
      "ja": [
        "未完結",
        "あと一歩の不足",
        "中途半端"
      ]
    },
    "uprightMeaning": {
      "en": "The World signifies completion and wholeness.",
      "my": "ကမ္ဘာလောက (ပြည့်စုံခြင်းနှင့် စက်ဝိုင်းပြည့်မြောက်ခြင်း) သည် ပြီးပြည့်စုံခြင်း နှင့် အောင်မြင်မှုခရီးစဉ် ပြီးဆုံးခြင်း ကို အဓိက ညွှန်ပြနေသည်။",
      "ja": "【世界（The World）】は、大団円と完全なる達成を象徴しています。"
    },
    "reversedMeaning": {
      "en": "Reversed, The World cautions against incompletion or lack of closure.",
      "my": "ပြောင်းပြန်အနေအထားတွင် ကမ္ဘာလောက (ပြည့်စုံခြင်းနှင့် စက်ဝိုင်းပြည့်မြောက်ခြင်း) သည် မပြီးပြတ်သေးခြင်း သို့မဟုတ် အဆုံးသတ်ရန် လိုအပ်နေခြင်း ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။",
      "ja": "逆位置の【世界（The World）】は、未完結やあと一歩の不足への注意を促しています。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, The World brings completion into your romantic life.",
        "my": "အချစ်ရေးတွင် ကမ္ဘာလောက (ပြည့်စုံခြင်းနှင့် စက်ဝိုင်းပြည့်မြောက်ခြင်း) သည် ပြီးပြည့်စုံခြင်း ကို သယ်ဆောင်လာပေးသည်။",
        "ja": "恋愛面において、大団円が関係を前進させる鍵となります。"
      },
      "reversed": {
        "en": "In love, reversed The World suggests working through incompletion.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ကမ္ဘာလောက (ပြည့်စုံခြင်းနှင့် စက်ဝိုင်းပြည့်မြောက်ခြင်း) သည် မပြီးပြတ်သေးခြင်း ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။",
        "ja": "恋愛面において、未完結を乗り越えることが求められています。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career matters, The World highlights completion.",
        "my": "အလုပ်အကိုင်တွင် ကမ္ဘာလောက (ပြည့်စုံခြင်းနှင့် စက်ဝိုင်းပြည့်မြောက်ခြင်း) သည် ပြီးပြည့်စုံခြင်း ကို အားပေးကူညီသည်။",
        "ja": "仕事面において、大団円を意識することで大きな成果が得られます。"
      },
      "reversed": {
        "en": "In career, avoid incompletion.",
        "my": "အလုပ်အကိုင်တွင် မပြီးပြတ်သေးခြင်း ကို ရှောင်ကြဉ်ပါ။",
        "ja": "仕事面において、未完結による停滞に気をつけてください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, connect with completion.",
        "my": "ဝိညာဉ်ရေးရာတွင် ပြီးပြည့်စုံခြင်း ဖြင့် ချိတ်ဆက်ပါ။",
        "ja": "魂の探求において、大団円の神聖なエネルギーと共鳴してください。"
      },
      "reversed": {
        "en": "Spiritually, heal any incompletion.",
        "my": "ဝိညာဉ်ရေးရာတွင် မပြီးပြတ်သေးခြင်း ကို ကုစားပါ။",
        "ja": "内なる未完結を静かに癒やしましょう。"
      }
    },
    "advice": {
      "en": "Embody completion and walk forward with honor.",
      "my": "ပြီးပြည့်စုံခြင်း ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။",
      "ja": "自らの大団円を信じて、誇り高く前へ進みなさい。"
    },
    "shadowWarning": {
      "en": "Be wary of incompletion.",
      "my": "မပြီးပြတ်သေးခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "未完結に囚われないよう心を澄ませてください。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (အမြင့်ဆုံး အောင်မြင်မှု)",
      "ja": "YES（完全な成就）"
    },
    "symbolism": {
      "en": [
        "Symbol of The World",
        "Elemental connection: Earth"
      ],
      "my": [
        "ကမ္ဘာလောက (ပြည့်စုံခြင်းနှင့် စက်ဝိုင်းပြည့်မြောက်ခြင်း) ၏ အမှတ်သင်္ကေတ",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "世界（The World）の象徴体系",
        "対応元素：Earth"
      ]
    }
  },
  {
    "id": "cups-1",
    "file": "Cups01.png",
    "name": {
      "en": "Ace of Cups",
      "my": "ဖလား ၁ (မေတ္တာအစပျိုးခြင်း)",
      "ja": "カップのエース"
    },
    "number": 1,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 1)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 1)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 1）"
    },
    "uprightKeywords": {
      "en": [
        "A pure spring of overflowing love and new emotional awakening"
      ],
      "my": [
        "မေတ္တာတရားနှင့် စိတ်ခံစားမှုအသစ်များ အလျှံပယ် စတင်စီးဆင်းလာခြင်း"
      ],
      "ja": [
        "溢れ出す純粋な愛と、新たな感情の目覚め"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Emotional blockage or holding back vulnerability"
      ],
      "my": [
        "စိတ်ခံစားချက် ပိတ်ဆို့နေခြင်း သို့မဟုတ် မေတ္တာကို ဖွင့်ဟရန် တွန့်ဆုတ်နေခြင်း"
      ],
      "ja": [
        "感情の滞りや、傷つくことを恐れて心を閉ざす状態"
      ]
    },
    "uprightMeaning": {
      "en": "Ace of Cups: A pure spring of overflowing love and new emotional awakening.",
      "my": "ဖလား ၁ (မေတ္တာအစပျိုးခြင်း): မေတ္တာတရားနှင့် စိတ်ခံစားမှုအသစ်များ အလျှံပယ် စတင်စီးဆင်းလာခြင်း။",
      "ja": "【カップのエース】：溢れ出す純粋な愛と、新たな感情の目覚め。"
    },
    "reversedMeaning": {
      "en": "Reversed Ace of Cups: Emotional blockage or holding back vulnerability.",
      "my": "ပြောင်းပြန် ဖလား ၁ (မေတ္တာအစပျိုးခြင်း): စိတ်ခံစားချက် ပိတ်ဆို့နေခြင်း သို့မဟုတ် မေတ္တာကို ဖွင့်ဟရန် တွန့်ဆုတ်နေခြင်း။",
      "ja": "逆位置【カップのエース】：感情の滞りや、傷つくことを恐れて心を閉ざす状態。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Ace of Cups reflects a pure spring of overflowing love and new emotional awakening.",
        "my": "အချစ်ရေးတွင် ဖလား ၁ (မေတ္တာအစပျိုးခြင်း) သည် မေတ္တာတရားနှင့် စိတ်ခံစားမှုအသစ်များ အလျှံပယ် စတင်စီးဆင်းလာခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、溢れ出す純粋な愛と、新たな感情の目覚めが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Ace of Cups warns of emotional blockage or holding back vulnerability.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၁ (မေတ္တာအစပျိုးခြင်း) သည် စိတ်ခံစားချက် ပိတ်ဆို့နေခြင်း သို့မဟုတ် မေတ္တာကို ဖွင့်ဟရန် တွန့်ဆုတ်နေခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、感情の滞りや、傷つくことを恐れて心を閉ざす状態に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Ace of Cups brings a pure spring of overflowing love and new emotional awakening.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၁ (မေတ္တာအစပျိုးခြင်း) သည် မေတ္တာတရားနှင့် စိတ်ခံစားမှုအသစ်များ အလျှံပယ် စတင်စီးဆင်းလာခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、溢れ出す純粋な愛と、新たな感情の目覚めの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of emotional blockage or holding back vulnerability.",
        "my": "အလုပ်အကိုင်တွင် စိတ်ခံစားချက် ပိတ်ဆို့နေခြင်း သို့မဟုတ် မေတ္တာကို ဖွင့်ဟရန် တွန့်ဆုတ်နေခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、感情の滞りや、傷つくことを恐れて心を閉ざす状態による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace a pure spring of overflowing love and new emotional awakening.",
        "my": "ဝိညာဉ်ရေးရာတွင် မေတ္တာတရားနှင့် စိတ်ခံစားမှုအသစ်များ အလျှံပယ် စတင်စီးဆင်းလာခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、溢れ出す純粋な愛と、新たな感情の目覚めの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform emotional blockage or holding back vulnerability.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်ခံစားချက် ပိတ်ဆို့နေခြင်း သို့မဟုတ် မေတ္တာကို ဖွင့်ဟရန် တွန့်ဆုတ်နေခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる感情の滞りや、傷つくことを恐れて心を閉ざす状態を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from a pure spring of overflowing love and new emotional awakening.",
      "my": "မေတ္တာတရားနှင့် စိတ်ခံစားမှုအသစ်များ အလျှံပယ် စတင်စီးဆင်းလာခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "溢れ出す純粋な愛と、新たな感情の目覚めの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to emotional blockage or holding back vulnerability.",
      "my": "စိတ်ခံစားချက် ပိတ်ဆို့နေခြင်း သို့မဟုတ် မေတ္တာကို ဖွင့်ဟရန် တွန့်ဆုတ်နေခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "感情の滞りや、傷つくことを恐れて心を閉ざす状態に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-2",
    "file": "Cups02.png",
    "name": {
      "en": "Two of Cups",
      "my": "ဖလား ၂ (နှစ်ဦးသဘောတူ ချစ်ခြင်း)",
      "ja": "カップの2"
    },
    "number": 2,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 2)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 2)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 2）"
    },
    "uprightKeywords": {
      "en": [
        "Mutual love, soul union, and balanced partnership"
      ],
      "my": [
        "အပြန်အလှန် ချစ်မြတ်နိုးမှုနှင့် ဟန်ချက်ညီသော လက်တွဲဖော်"
      ],
      "ja": [
        "相思相愛、心の通い合い、調和あるパートナーシップ"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Misunderstandings or broken communication"
      ],
      "my": [
        "နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း"
      ],
      "ja": [
        "すれ違い、誤解、不均衡な関係性"
      ]
    },
    "uprightMeaning": {
      "en": "Two of Cups: Mutual love, soul union, and balanced partnership.",
      "my": "ဖလား ၂ (နှစ်ဦးသဘောတူ ချစ်ခြင်း): အပြန်အလှန် ချစ်မြတ်နိုးမှုနှင့် ဟန်ချက်ညီသော လက်တွဲဖော်။",
      "ja": "【カップの2】：相思相愛、心の通い合い、調和あるパートナーシップ。"
    },
    "reversedMeaning": {
      "en": "Reversed Two of Cups: Misunderstandings or broken communication.",
      "my": "ပြောင်းပြန် ဖလား ၂ (နှစ်ဦးသဘောတူ ချစ်ခြင်း): နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း။",
      "ja": "逆位置【カップの2】：すれ違い、誤解、不均衡な関係性。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Two of Cups reflects mutual love, soul union, and balanced partnership.",
        "my": "အချစ်ရေးတွင် ဖလား ၂ (နှစ်ဦးသဘောတူ ချစ်ခြင်း) သည် အပြန်အလှန် ချစ်မြတ်နိုးမှုနှင့် ဟန်ချက်ညီသော လက်တွဲဖော် ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、相思相愛、心の通い合い、調和あるパートナーシップが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Two of Cups warns of misunderstandings or broken communication.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၂ (နှစ်ဦးသဘောတူ ချစ်ခြင်း) သည် နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、すれ違い、誤解、不均衡な関係性に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Two of Cups brings mutual love, soul union, and balanced partnership.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၂ (နှစ်ဦးသဘောတူ ချစ်ခြင်း) သည် အပြန်အလှန် ချစ်မြတ်နိုးမှုနှင့် ဟန်ချက်ညီသော လက်တွဲဖော် ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、相思相愛、心の通い合い、調和あるパートナーシップの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of misunderstandings or broken communication.",
        "my": "အလုပ်အကိုင်တွင် နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、すれ違い、誤解、不均衡な関係性による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace mutual love, soul union, and balanced partnership.",
        "my": "ဝိညာဉ်ရေးရာတွင် အပြန်အလှန် ချစ်မြတ်နိုးမှုနှင့် ဟန်ချက်ညီသော လက်တွဲဖော် ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、相思相愛、心の通い合い、調和あるパートナーシップの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform misunderstandings or broken communication.",
        "my": "ဝိညာဉ်ရေးရာတွင် နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なるすれ違い、誤解、不均衡な関係性を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from mutual love, soul union, and balanced partnership.",
      "my": "အပြန်အလှန် ချစ်မြတ်နိုးမှုနှင့် ဟန်ချက်ညီသော လက်တွဲဖော် ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "相思相愛、心の通い合い、調和あるパートナーシップの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to misunderstandings or broken communication.",
      "my": "နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "すれ違い、誤解、不均衡な関係性に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-3",
    "file": "Cups03.png",
    "name": {
      "en": "Three of Cups",
      "my": "ဖလား ၃ (အောင်ပွဲခံ မိတ်ဆုံပွဲ)",
      "ja": "カップの3"
    },
    "number": 3,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 3)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 3)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 3）"
    },
    "uprightKeywords": {
      "en": [
        "Celebration, joyful friendship, and soul tribe gathering"
      ],
      "my": [
        "အောင်ပွဲခံ ပျော်ရွှင်ပွဲနှင့် မိတ်ဆွေကောင်းများ စုစည်းခြင်း"
      ],
      "ja": [
        "祝福、友情の深まり、仲間との喜ばしい祝祭"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Overindulgence, gossip, or feeling left out"
      ],
      "my": [
        "အပျော်အပါးလွန်ကဲခြင်း သို့မဟုတ် အုပ်စုအတွင်း စကားများခြင်း"
      ],
      "ja": [
        "度を越した快楽、噂話、疎外感"
      ]
    },
    "uprightMeaning": {
      "en": "Three of Cups: Celebration, joyful friendship, and soul tribe gathering.",
      "my": "ဖလား ၃ (အောင်ပွဲခံ မိတ်ဆုံပွဲ): အောင်ပွဲခံ ပျော်ရွှင်ပွဲနှင့် မိတ်ဆွေကောင်းများ စုစည်းခြင်း။",
      "ja": "【カップの3】：祝福、友情の深まり、仲間との喜ばしい祝祭。"
    },
    "reversedMeaning": {
      "en": "Reversed Three of Cups: Overindulgence, gossip, or feeling left out.",
      "my": "ပြောင်းပြန် ဖလား ၃ (အောင်ပွဲခံ မိတ်ဆုံပွဲ): အပျော်အပါးလွန်ကဲခြင်း သို့မဟုတ် အုပ်စုအတွင်း စကားများခြင်း။",
      "ja": "逆位置【カップの3】：度を越した快楽、噂話、疎外感。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Three of Cups reflects celebration, joyful friendship, and soul tribe gathering.",
        "my": "အချစ်ရေးတွင် ဖလား ၃ (အောင်ပွဲခံ မိတ်ဆုံပွဲ) သည် အောင်ပွဲခံ ပျော်ရွှင်ပွဲနှင့် မိတ်ဆွေကောင်းများ စုစည်းခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、祝福、友情の深まり、仲間との喜ばしい祝祭が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Three of Cups warns of overindulgence, gossip, or feeling left out.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၃ (အောင်ပွဲခံ မိတ်ဆုံပွဲ) သည် အပျော်အပါးလွန်ကဲခြင်း သို့မဟုတ် အုပ်စုအတွင်း စကားများခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、度を越した快楽、噂話、疎外感に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Three of Cups brings celebration, joyful friendship, and soul tribe gathering.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၃ (အောင်ပွဲခံ မိတ်ဆုံပွဲ) သည် အောင်ပွဲခံ ပျော်ရွှင်ပွဲနှင့် မိတ်ဆွေကောင်းများ စုစည်းခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、祝福、友情の深まり、仲間との喜ばしい祝祭の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of overindulgence, gossip, or feeling left out.",
        "my": "အလုပ်အကိုင်တွင် အပျော်အပါးလွန်ကဲခြင်း သို့မဟုတ် အုပ်စုအတွင်း စကားများခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、度を越した快楽、噂話、疎外感による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace celebration, joyful friendship, and soul tribe gathering.",
        "my": "ဝိညာဉ်ရေးရာတွင် အောင်ပွဲခံ ပျော်ရွှင်ပွဲနှင့် မိတ်ဆွေကောင်းများ စုစည်းခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、祝福、友情の深まり、仲間との喜ばしい祝祭の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform overindulgence, gossip, or feeling left out.",
        "my": "ဝိညာဉ်ရေးရာတွင် အပျော်အပါးလွန်ကဲခြင်း သို့မဟုတ် အုပ်စုအတွင်း စကားများခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる度を越した快楽、噂話、疎外感を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from celebration, joyful friendship, and soul tribe gathering.",
      "my": "အောင်ပွဲခံ ပျော်ရွှင်ပွဲနှင့် မိတ်ဆွေကောင်းများ စုစည်းခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "祝福、友情の深まり、仲間との喜ばしい祝祭の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to overindulgence, gossip, or feeling left out.",
      "my": "အပျော်အပါးလွန်ကဲခြင်း သို့မဟုတ် အုပ်စုအတွင်း စကားများခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "度を越した快楽、噂話、疎外感に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-4",
    "file": "Cups04.png",
    "name": {
      "en": "Four of Cups",
      "my": "ဖလား ၄ (စိတ်မပါ မကြည်မလင်ဖြစ်ခြင်း)",
      "ja": "カップの4"
    },
    "number": 4,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 4)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 4)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 4）"
    },
    "uprightKeywords": {
      "en": [
        "Apathy or contemplation; missing an offered blessing"
      ],
      "my": [
        "စိတ်မပါဘဲ ငြီးငွေ့နေခြင်း၊ ရောက်ရှိနေသော အခွင့်အရေးကို သတိမထားမိခြင်း"
      ],
      "ja": [
        "倦怠感、内省、差し出された恩恵を見落とす状態"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Awakening from emotional rut; seizing new opportunities"
      ],
      "my": [
        "စိတ်မွန်းကျပ်မှုမှ နိုးထလာပြီး အခွင့်အရေးသစ်များကို လက်ခံခြင်း"
      ],
      "ja": [
        "意欲の回復、新たな機会の受容、前向きな目覚め"
      ]
    },
    "uprightMeaning": {
      "en": "Four of Cups: Apathy or contemplation; missing an offered blessing.",
      "my": "ဖလား ၄ (စိတ်မပါ မကြည်မလင်ဖြစ်ခြင်း): စိတ်မပါဘဲ ငြီးငွေ့နေခြင်း၊ ရောက်ရှိနေသော အခွင့်အရေးကို သတိမထားမိခြင်း။",
      "ja": "【カップの4】：倦怠感、内省、差し出された恩恵を見落とす状態。"
    },
    "reversedMeaning": {
      "en": "Reversed Four of Cups: Awakening from emotional rut; seizing new opportunities.",
      "my": "ပြောင်းပြန် ဖလား ၄ (စိတ်မပါ မကြည်မလင်ဖြစ်ခြင်း): စိတ်မွန်းကျပ်မှုမှ နိုးထလာပြီး အခွင့်အရေးသစ်များကို လက်ခံခြင်း။",
      "ja": "逆位置【カップの4】：意欲の回復、新たな機会の受容、前向きな目覚め。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Four of Cups reflects apathy or contemplation; missing an offered blessing.",
        "my": "အချစ်ရေးတွင် ဖလား ၄ (စိတ်မပါ မကြည်မလင်ဖြစ်ခြင်း) သည် စိတ်မပါဘဲ ငြီးငွေ့နေခြင်း၊ ရောက်ရှိနေသော အခွင့်အရေးကို သတိမထားမိခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、倦怠感、内省、差し出された恩恵を見落とす状態が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Four of Cups warns of awakening from emotional rut; seizing new opportunities.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၄ (စိတ်မပါ မကြည်မလင်ဖြစ်ခြင်း) သည် စိတ်မွန်းကျပ်မှုမှ နိုးထလာပြီး အခွင့်အရေးသစ်များကို လက်ခံခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、意欲の回復、新たな機会の受容、前向きな目覚めに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Four of Cups brings apathy or contemplation; missing an offered blessing.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၄ (စိတ်မပါ မကြည်မလင်ဖြစ်ခြင်း) သည် စိတ်မပါဘဲ ငြီးငွေ့နေခြင်း၊ ရောက်ရှိနေသော အခွင့်အရေးကို သတိမထားမိခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、倦怠感、内省、差し出された恩恵を見落とす状態の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of awakening from emotional rut; seizing new opportunities.",
        "my": "အလုပ်အကိုင်တွင် စိတ်မွန်းကျပ်မှုမှ နိုးထလာပြီး အခွင့်အရေးသစ်များကို လက်ခံခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、意欲の回復、新たな機会の受容、前向きな目覚めによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace apathy or contemplation; missing an offered blessing.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်မပါဘဲ ငြီးငွေ့နေခြင်း၊ ရောက်ရှိနေသော အခွင့်အရေးကို သတိမထားမိခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、倦怠感、内省、差し出された恩恵を見落とす状態の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform awakening from emotional rut; seizing new opportunities.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်မွန်းကျပ်မှုမှ နိုးထလာပြီး အခွင့်အရေးသစ်များကို လက်ခံခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる意欲の回復、新たな機会の受容、前向きな目覚めを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from apathy or contemplation; missing an offered blessing.",
      "my": "စိတ်မပါဘဲ ငြီးငွေ့နေခြင်း၊ ရောက်ရှိနေသော အခွင့်အရေးကို သတိမထားမိခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "倦怠感、内省、差し出された恩恵を見落とす状態の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to awakening from emotional rut; seizing new opportunities.",
      "my": "စိတ်မွန်းကျပ်မှုမှ နိုးထလာပြီး အခွင့်အရေးသစ်များကို လက်ခံခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "意欲の回復、新たな機会の受容、前向きな目覚めに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely No",
      "my": "မဖြစ်နိုင်ခြေများပါသည်",
      "ja": "NO（停滞）"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-5",
    "file": "Cups05.png",
    "name": {
      "en": "Five of Cups",
      "my": "ဖလား ၅ (ဆုံးရှုံးမှုကို ဝမ်းနည်းပူဆွေးခြင်း)",
      "ja": "カップの5"
    },
    "number": 5,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 5)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 5)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 5）"
    },
    "uprightKeywords": {
      "en": [
        "Grief over spilled cups; remember the two that remain"
      ],
      "my": [
        "ဆုံးရှုံးသွားသောအရာအတွက် ဝမ်းနည်းနေခြင်း (ကျန်ရှိနေသေးသော အခွင့်အရေးကို သတိပြုပါ)"
      ],
      "ja": [
        "失ったものへの嘆き。しかし背後にはまだ残る愛がある"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Healing, acceptance, and moving past sorrow"
      ],
      "my": [
        "ဝမ်းနည်းမှုကို ကျော်လွှား၍ အနာကျက်ကာ ရှေ့ဆက်လှမ်းနိုင်ခြင်း"
      ],
      "ja": [
        "悲しみの受容、心の回復、再起への歩み"
      ]
    },
    "uprightMeaning": {
      "en": "Five of Cups: Grief over spilled cups; remember the two that remain.",
      "my": "ဖလား ၅ (ဆုံးရှုံးမှုကို ဝမ်းနည်းပူဆွေးခြင်း): ဆုံးရှုံးသွားသောအရာအတွက် ဝမ်းနည်းနေခြင်း (ကျန်ရှိနေသေးသော အခွင့်အရေးကို သတိပြုပါ)။",
      "ja": "【カップの5】：失ったものへの嘆き。しかし背後にはまだ残る愛がある。"
    },
    "reversedMeaning": {
      "en": "Reversed Five of Cups: Healing, acceptance, and moving past sorrow.",
      "my": "ပြောင်းပြန် ဖလား ၅ (ဆုံးရှုံးမှုကို ဝမ်းနည်းပူဆွေးခြင်း): ဝမ်းနည်းမှုကို ကျော်လွှား၍ အနာကျက်ကာ ရှေ့ဆက်လှမ်းနိုင်ခြင်း။",
      "ja": "逆位置【カップの5】：悲しみの受容、心の回復、再起への歩み。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Five of Cups reflects grief over spilled cups; remember the two that remain.",
        "my": "အချစ်ရေးတွင် ဖလား ၅ (ဆုံးရှုံးမှုကို ဝမ်းနည်းပူဆွေးခြင်း) သည် ဆုံးရှုံးသွားသောအရာအတွက် ဝမ်းနည်းနေခြင်း (ကျန်ရှိနေသေးသော အခွင့်အရေးကို သတိပြုပါ) ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、失ったものへの嘆き。しかし背後にはまだ残る愛があるが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Five of Cups warns of healing, acceptance, and moving past sorrow.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၅ (ဆုံးရှုံးမှုကို ဝမ်းနည်းပူဆွေးခြင်း) သည် ဝမ်းနည်းမှုကို ကျော်လွှား၍ အနာကျက်ကာ ရှေ့ဆက်လှမ်းနိုင်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、悲しみの受容、心の回復、再起への歩みに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Five of Cups brings grief over spilled cups; remember the two that remain.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၅ (ဆုံးရှုံးမှုကို ဝမ်းနည်းပူဆွေးခြင်း) သည် ဆုံးရှုံးသွားသောအရာအတွက် ဝမ်းနည်းနေခြင်း (ကျန်ရှိနေသေးသော အခွင့်အရေးကို သတိပြုပါ) ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、失ったものへの嘆き。しかし背後にはまだ残る愛があるの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of healing, acceptance, and moving past sorrow.",
        "my": "အလုပ်အကိုင်တွင် ဝမ်းနည်းမှုကို ကျော်လွှား၍ အနာကျက်ကာ ရှေ့ဆက်လှမ်းနိုင်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、悲しみの受容、心の回復、再起への歩みによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace grief over spilled cups; remember the two that remain.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဆုံးရှုံးသွားသောအရာအတွက် ဝမ်းနည်းနေခြင်း (ကျန်ရှိနေသေးသော အခွင့်အရေးကို သတိပြုပါ) ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、失ったものへの嘆き。しかし背後にはまだ残る愛があるの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform healing, acceptance, and moving past sorrow.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဝမ်းနည်းမှုကို ကျော်လွှား၍ အနာကျက်ကာ ရှေ့ဆက်လှမ်းနိုင်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる悲しみの受容、心の回復、再起への歩みを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from grief over spilled cups; remember the two that remain.",
      "my": "ဆုံးရှုံးသွားသောအရာအတွက် ဝမ်းနည်းနေခြင်း (ကျန်ရှိနေသေးသော အခွင့်အရေးကို သတိပြုပါ) ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "失ったものへの嘆き。しかし背後にはまだ残る愛があるの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to healing, acceptance, and moving past sorrow.",
      "my": "ဝမ်းနည်းမှုကို ကျော်လွှား၍ အနာကျက်ကာ ရှေ့ဆက်လှမ်းနိုင်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "悲しみの受容、心の回復、再起への歩みに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-6",
    "file": "Cups06.png",
    "name": {
      "en": "Six of Cups",
      "my": "ဖလား ၆ (အတိတ်မှ အမှတ်တရချိုမြိန်မှု)",
      "ja": "カップの6"
    },
    "number": 6,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 6)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 6)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 6）"
    },
    "uprightKeywords": {
      "en": [
        "Sweet nostalgia, childhood innocence, and fond reunions"
      ],
      "my": [
        "အတိတ်မှ လွမ်းမောဖွယ် အမှတ်တရများ၊ ဖြူစင်သော အချစ်နှင့် ပြန်လည်ဆုံဆည်းမှု"
      ],
      "ja": [
        "幼き日の純真、甘美なノスタルジー、温かい再会"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Living too much in the past; time to grow up"
      ],
      "my": [
        "အတိတ်မှာသာ နစ်မျောနေခြင်းကို ရပ်တန့်၍ လက်ရှိဘဝတွင် ရှင်သန်ရန် လိုအပ်ခြင်း"
      ],
      "ja": [
        "過去への固執、前進の拒絶、成長の時"
      ]
    },
    "uprightMeaning": {
      "en": "Six of Cups: Sweet nostalgia, childhood innocence, and fond reunions.",
      "my": "ဖလား ၆ (အတိတ်မှ အမှတ်တရချိုမြိန်မှု): အတိတ်မှ လွမ်းမောဖွယ် အမှတ်တရများ၊ ဖြူစင်သော အချစ်နှင့် ပြန်လည်ဆုံဆည်းမှု။",
      "ja": "【カップの6】：幼き日の純真、甘美なノスタルジー、温かい再会。"
    },
    "reversedMeaning": {
      "en": "Reversed Six of Cups: Living too much in the past; time to grow up.",
      "my": "ပြောင်းပြန် ဖလား ၆ (အတိတ်မှ အမှတ်တရချိုမြိန်မှု): အတိတ်မှာသာ နစ်မျောနေခြင်းကို ရပ်တန့်၍ လက်ရှိဘဝတွင် ရှင်သန်ရန် လိုအပ်ခြင်း။",
      "ja": "逆位置【カップの6】：過去への固執、前進の拒絶、成長の時。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Six of Cups reflects sweet nostalgia, childhood innocence, and fond reunions.",
        "my": "အချစ်ရေးတွင် ဖလား ၆ (အတိတ်မှ အမှတ်တရချိုမြိန်မှု) သည် အတိတ်မှ လွမ်းမောဖွယ် အမှတ်တရများ၊ ဖြူစင်သော အချစ်နှင့် ပြန်လည်ဆုံဆည်းမှု ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、幼き日の純真、甘美なノスタルジー、温かい再会が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Six of Cups warns of living too much in the past; time to grow up.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၆ (အတိတ်မှ အမှတ်တရချိုမြိန်မှု) သည် အတိတ်မှာသာ နစ်မျောနေခြင်းကို ရပ်တန့်၍ လက်ရှိဘဝတွင် ရှင်သန်ရန် လိုအပ်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、過去への固執、前進の拒絶、成長の時に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Six of Cups brings sweet nostalgia, childhood innocence, and fond reunions.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၆ (အတိတ်မှ အမှတ်တရချိုမြိန်မှု) သည် အတိတ်မှ လွမ်းမောဖွယ် အမှတ်တရများ၊ ဖြူစင်သော အချစ်နှင့် ပြန်လည်ဆုံဆည်းမှု ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、幼き日の純真、甘美なノスタルジー、温かい再会の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of living too much in the past; time to grow up.",
        "my": "အလုပ်အကိုင်တွင် အတိတ်မှာသာ နစ်မျောနေခြင်းကို ရပ်တန့်၍ လက်ရှိဘဝတွင် ရှင်သန်ရန် လိုအပ်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、過去への固執、前進の拒絶、成長の時による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace sweet nostalgia, childhood innocence, and fond reunions.",
        "my": "ဝိညာဉ်ရေးရာတွင် အတိတ်မှ လွမ်းမောဖွယ် အမှတ်တရများ၊ ဖြူစင်သော အချစ်နှင့် ပြန်လည်ဆုံဆည်းမှု ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、幼き日の純真、甘美なノスタルジー、温かい再会の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform living too much in the past; time to grow up.",
        "my": "ဝိညာဉ်ရေးရာတွင် အတိတ်မှာသာ နစ်မျောနေခြင်းကို ရပ်တန့်၍ လက်ရှိဘဝတွင် ရှင်သန်ရန် လိုအပ်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる過去への固執、前進の拒絶、成長の時を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from sweet nostalgia, childhood innocence, and fond reunions.",
      "my": "အတိတ်မှ လွမ်းမောဖွယ် အမှတ်တရများ၊ ဖြူစင်သော အချစ်နှင့် ပြန်လည်ဆုံဆည်းမှု ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "幼き日の純真、甘美なノスタルジー、温かい再会の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to living too much in the past; time to grow up.",
      "my": "အတိတ်မှာသာ နစ်မျောနေခြင်းကို ရပ်တန့်၍ လက်ရှိဘဝတွင် ရှင်သန်ရန် လိုအပ်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "過去への固執、前進の拒絶、成長の時に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-7",
    "file": "Cups07.png",
    "name": {
      "en": "Seven of Cups",
      "my": "ဖလား ၇ (စိတ်ကူးယဉ် အိပ်မက်များနှင့် ရွေးချယ်မှု)",
      "ja": "カップの7"
    },
    "number": 7,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 7)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 7)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 7）"
    },
    "uprightKeywords": {
      "en": [
        "Many tempting choices, wishful illusions, and daydreams"
      ],
      "my": [
        "ရွေးချယ်စရာ များပြားနေခြင်း၊ စိတ်ကူးယဉ် အထင်မှားမှုများ"
      ],
      "ja": [
        "数多の選択肢、甘美な幻想、白昼夢"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Clarity arriving, seeing through illusions to make a real choice"
      ],
      "my": [
        "စိတ်ကူးယဉ်မှုများ ပျောက်ကွယ်၍ လက်တွေ့ကျသော ရွေးချယ်မှုပြုနိုင်ခြင်း"
      ],
      "ja": [
        "幻想からの脱却、現実的な決断、明晰な視界"
      ]
    },
    "uprightMeaning": {
      "en": "Seven of Cups: Many tempting choices, wishful illusions, and daydreams.",
      "my": "ဖလား ၇ (စိတ်ကူးယဉ် အိပ်မက်များနှင့် ရွေးချယ်မှု): ရွေးချယ်စရာ များပြားနေခြင်း၊ စိတ်ကူးယဉ် အထင်မှားမှုများ။",
      "ja": "【カップの7】：数多の選択肢、甘美な幻想、白昼夢。"
    },
    "reversedMeaning": {
      "en": "Reversed Seven of Cups: Clarity arriving, seeing through illusions to make a real choice.",
      "my": "ပြောင်းပြန် ဖလား ၇ (စိတ်ကူးယဉ် အိပ်မက်များနှင့် ရွေးချယ်မှု): စိတ်ကူးယဉ်မှုများ ပျောက်ကွယ်၍ လက်တွေ့ကျသော ရွေးချယ်မှုပြုနိုင်ခြင်း။",
      "ja": "逆位置【カップの7】：幻想からの脱却、現実的な決断、明晰な視界。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Seven of Cups reflects many tempting choices, wishful illusions, and daydreams.",
        "my": "အချစ်ရေးတွင် ဖလား ၇ (စိတ်ကူးယဉ် အိပ်မက်များနှင့် ရွေးချယ်မှု) သည် ရွေးချယ်စရာ များပြားနေခြင်း၊ စိတ်ကူးယဉ် အထင်မှားမှုများ ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、数多の選択肢、甘美な幻想、白昼夢が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Seven of Cups warns of clarity arriving, seeing through illusions to make a real choice.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၇ (စိတ်ကူးယဉ် အိပ်မက်များနှင့် ရွေးချယ်မှု) သည် စိတ်ကူးယဉ်မှုများ ပျောက်ကွယ်၍ လက်တွေ့ကျသော ရွေးချယ်မှုပြုနိုင်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、幻想からの脱却、現実的な決断、明晰な視界に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Seven of Cups brings many tempting choices, wishful illusions, and daydreams.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၇ (စိတ်ကူးယဉ် အိပ်မက်များနှင့် ရွေးချယ်မှု) သည် ရွေးချယ်စရာ များပြားနေခြင်း၊ စိတ်ကူးယဉ် အထင်မှားမှုများ ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、数多の選択肢、甘美な幻想、白昼夢の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of clarity arriving, seeing through illusions to make a real choice.",
        "my": "အလုပ်အကိုင်တွင် စိတ်ကူးယဉ်မှုများ ပျောက်ကွယ်၍ လက်တွေ့ကျသော ရွေးချယ်မှုပြုနိုင်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、幻想からの脱却、現実的な決断、明晰な視界による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace many tempting choices, wishful illusions, and daydreams.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရွေးချယ်စရာ များပြားနေခြင်း၊ စိတ်ကူးယဉ် အထင်မှားမှုများ ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、数多の選択肢、甘美な幻想、白昼夢の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform clarity arriving, seeing through illusions to make a real choice.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်ကူးယဉ်မှုများ ပျောက်ကွယ်၍ လက်တွေ့ကျသော ရွေးချယ်မှုပြုနိုင်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる幻想からの脱却、現実的な決断、明晰な視界を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from many tempting choices, wishful illusions, and daydreams.",
      "my": "ရွေးချယ်စရာ များပြားနေခြင်း၊ စိတ်ကူးယဉ် အထင်မှားမှုများ ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "数多の選択肢、甘美な幻想、白昼夢の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to clarity arriving, seeing through illusions to make a real choice.",
      "my": "စိတ်ကူးယဉ်မှုများ ပျောက်ကွယ်၍ လက်တွေ့ကျသော ရွေးချယ်မှုပြုနိုင်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "幻想からの脱却、現実的な決断、明晰な視界に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Neutral / Unclear",
      "my": "စိတ်ကူးယဉ်မှုကို ဖယ်ရှားရန် လိုအပ်သည်",
      "ja": "迷いの中（中立）"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-8",
    "file": "Cups08.png",
    "name": {
      "en": "Eight of Cups",
      "my": "ဖလား ၈ (မပြည့်စုံသောအရာကို စွန့်ခွာလမ်းခွဲခြင်း)",
      "ja": "カップの8"
    },
    "number": 8,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 8)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 8)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 8）"
    },
    "uprightKeywords": {
      "en": [
        "Walking away from what no longer nourishes your soul"
      ],
      "my": [
        "မိမိစိတ်နှလုံးကို မဖြည့်ဆည်းပေးနိုင်တော့သော အရာများကို စွန့်ခွာ၍ အဆင့်မြင့်ရာသို့ ထွက်ခွာခြင်း"
      ],
      "ja": [
        "満たされぬ場所を去り、より高次元の真実を求めて歩み出す"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Fear of walking away; clinging to an empty situation"
      ],
      "my": [
        "စွန့်ခွာရမည်ကို ကြောက်ရွံ့၍ အကျိုးမရှိသောနေရာတွင် ဆက်လက်နေထိုင်ခြင်း"
      ],
      "ja": [
        "別れの恐れ、惰性による停滞、未練"
      ]
    },
    "uprightMeaning": {
      "en": "Eight of Cups: Walking away from what no longer nourishes your soul.",
      "my": "ဖလား ၈ (မပြည့်စုံသောအရာကို စွန့်ခွာလမ်းခွဲခြင်း): မိမိစိတ်နှလုံးကို မဖြည့်ဆည်းပေးနိုင်တော့သော အရာများကို စွန့်ခွာ၍ အဆင့်မြင့်ရာသို့ ထွက်ခွာခြင်း။",
      "ja": "【カップの8】：満たされぬ場所を去り、より高次元の真実を求めて歩み出す。"
    },
    "reversedMeaning": {
      "en": "Reversed Eight of Cups: Fear of walking away; clinging to an empty situation.",
      "my": "ပြောင်းပြန် ဖလား ၈ (မပြည့်စုံသောအရာကို စွန့်ခွာလမ်းခွဲခြင်း): စွန့်ခွာရမည်ကို ကြောက်ရွံ့၍ အကျိုးမရှိသောနေရာတွင် ဆက်လက်နေထိုင်ခြင်း။",
      "ja": "逆位置【カップの8】：別れの恐れ、惰性による停滞、未練。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Eight of Cups reflects walking away from what no longer nourishes your soul.",
        "my": "အချစ်ရေးတွင် ဖလား ၈ (မပြည့်စုံသောအရာကို စွန့်ခွာလမ်းခွဲခြင်း) သည် မိမိစိတ်နှလုံးကို မဖြည့်ဆည်းပေးနိုင်တော့သော အရာများကို စွန့်ခွာ၍ အဆင့်မြင့်ရာသို့ ထွက်ခွာခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、満たされぬ場所を去り、より高次元の真実を求めて歩み出すが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Eight of Cups warns of fear of walking away; clinging to an empty situation.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၈ (မပြည့်စုံသောအရာကို စွန့်ခွာလမ်းခွဲခြင်း) သည် စွန့်ခွာရမည်ကို ကြောက်ရွံ့၍ အကျိုးမရှိသောနေရာတွင် ဆက်လက်နေထိုင်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、別れの恐れ、惰性による停滞、未練に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Eight of Cups brings walking away from what no longer nourishes your soul.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၈ (မပြည့်စုံသောအရာကို စွန့်ခွာလမ်းခွဲခြင်း) သည် မိမိစိတ်နှလုံးကို မဖြည့်ဆည်းပေးနိုင်တော့သော အရာများကို စွန့်ခွာ၍ အဆင့်မြင့်ရာသို့ ထွက်ခွာခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、満たされぬ場所を去り、より高次元の真実を求めて歩み出すの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of fear of walking away; clinging to an empty situation.",
        "my": "အလုပ်အကိုင်တွင် စွန့်ခွာရမည်ကို ကြောက်ရွံ့၍ အကျိုးမရှိသောနေရာတွင် ဆက်လက်နေထိုင်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、別れの恐れ、惰性による停滞、未練による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace walking away from what no longer nourishes your soul.",
        "my": "ဝိညာဉ်ရေးရာတွင် မိမိစိတ်နှလုံးကို မဖြည့်ဆည်းပေးနိုင်တော့သော အရာများကို စွန့်ခွာ၍ အဆင့်မြင့်ရာသို့ ထွက်ခွာခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、満たされぬ場所を去り、より高次元の真実を求めて歩み出すの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform fear of walking away; clinging to an empty situation.",
        "my": "ဝိညာဉ်ရေးရာတွင် စွန့်ခွာရမည်ကို ကြောက်ရွံ့၍ အကျိုးမရှိသောနေရာတွင် ဆက်လက်နေထိုင်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる別れの恐れ、惰性による停滞、未練を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from walking away from what no longer nourishes your soul.",
      "my": "မိမိစိတ်နှလုံးကို မဖြည့်ဆည်းပေးနိုင်တော့သော အရာများကို စွန့်ခွာ၍ အဆင့်မြင့်ရာသို့ ထွက်ခွာခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "満たされぬ場所を去り、より高次元の真実を求めて歩み出すの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to fear of walking away; clinging to an empty situation.",
      "my": "စွန့်ခွာရမည်ကို ကြောက်ရွံ့၍ အကျိုးမရှိသောနေရာတွင် ဆက်လက်နေထိုင်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "別れの恐れ、惰性による停滞、未練に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (စွန့်ခွာရန် လိုအပ်သည်)",
      "ja": "NO（旅立ち）"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-9",
    "file": "Cups09.png",
    "name": {
      "en": "Nine of Cups",
      "my": "ဖလား ၉ (ဆုတောင်းပြည့်ခြင်းနှင့် ကျေနပ်ရောင့်ရဲမှု)",
      "ja": "カップの9"
    },
    "number": 9,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 9)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 9)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 9）"
    },
    "uprightKeywords": {
      "en": [
        "The Wish Card! Deep satisfaction, emotional fulfillment and joy"
      ],
      "my": [
        "ဆုတောင်းပြည့် ကတ်ပြား! အလိုဆန္ဒများ ပြည့်စုံ၍ အလွန်ကျေနပ်ရောင့်ရဲရခြင်း"
      ],
      "ja": [
        "【ウィッシュカード】願いの成就、深い満足感、歓喜"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Smugness, materialism, or getting what you thought you wanted"
      ],
      "my": [
        "အပေါ်ယံ ပြည့်စုံမှု သို့မဟုတ် မာနထောင်လွှားခြင်း"
      ],
      "ja": [
        "物質的な過信、空虚な満足、おごり"
      ]
    },
    "uprightMeaning": {
      "en": "Nine of Cups: The Wish Card! Deep satisfaction, emotional fulfillment and joy.",
      "my": "ဖလား ၉ (ဆုတောင်းပြည့်ခြင်းနှင့် ကျေနပ်ရောင့်ရဲမှု): ဆုတောင်းပြည့် ကတ်ပြား! အလိုဆန္ဒများ ပြည့်စုံ၍ အလွန်ကျေနပ်ရောင့်ရဲရခြင်း။",
      "ja": "【カップの9】：【ウィッシュカード】願いの成就、深い満足感、歓喜。"
    },
    "reversedMeaning": {
      "en": "Reversed Nine of Cups: Smugness, materialism, or getting what you thought you wanted.",
      "my": "ပြောင်းပြန် ဖလား ၉ (ဆုတောင်းပြည့်ခြင်းနှင့် ကျေနပ်ရောင့်ရဲမှု): အပေါ်ယံ ပြည့်စုံမှု သို့မဟုတ် မာနထောင်လွှားခြင်း။",
      "ja": "逆位置【カップの9】：物質的な過信、空虚な満足、おごり。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Nine of Cups reflects the wish card! deep satisfaction, emotional fulfillment and joy.",
        "my": "အချစ်ရေးတွင် ဖလား ၉ (ဆုတောင်းပြည့်ခြင်းနှင့် ကျေနပ်ရောင့်ရဲမှု) သည် ဆုတောင်းပြည့် ကတ်ပြား! အလိုဆန္ဒများ ပြည့်စုံ၍ အလွန်ကျေနပ်ရောင့်ရဲရခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、【ウィッシュカード】願いの成就、深い満足感、歓喜が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Nine of Cups warns of smugness, materialism, or getting what you thought you wanted.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၉ (ဆုတောင်းပြည့်ခြင်းနှင့် ကျေနပ်ရောင့်ရဲမှု) သည် အပေါ်ယံ ပြည့်စုံမှု သို့မဟုတ် မာနထောင်လွှားခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、物質的な過信、空虚な満足、おごりに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Nine of Cups brings the wish card! deep satisfaction, emotional fulfillment and joy.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၉ (ဆုတောင်းပြည့်ခြင်းနှင့် ကျေနပ်ရောင့်ရဲမှု) သည် ဆုတောင်းပြည့် ကတ်ပြား! အလိုဆန္ဒများ ပြည့်စုံ၍ အလွန်ကျေနပ်ရောင့်ရဲရခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、【ウィッシュカード】願いの成就、深い満足感、歓喜の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of smugness, materialism, or getting what you thought you wanted.",
        "my": "အလုပ်အကိုင်တွင် အပေါ်ယံ ပြည့်စုံမှု သို့မဟုတ် မာနထောင်လွှားခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、物質的な過信、空虚な満足、おごりによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace the wish card! deep satisfaction, emotional fulfillment and joy.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဆုတောင်းပြည့် ကတ်ပြား! အလိုဆန္ဒများ ပြည့်စုံ၍ အလွန်ကျေနပ်ရောင့်ရဲရခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、【ウィッシュカード】願いの成就、深い満足感、歓喜の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform smugness, materialism, or getting what you thought you wanted.",
        "my": "ဝိညာဉ်ရေးရာတွင် အပေါ်ယံ ပြည့်စုံမှု သို့မဟုတ် မာနထောင်လွှားခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる物質的な過信、空虚な満足、おごりを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from the wish card! deep satisfaction, emotional fulfillment and joy.",
      "my": "ဆုတောင်းပြည့် ကတ်ပြား! အလိုဆန္ဒများ ပြည့်စုံ၍ အလွန်ကျေနပ်ရောင့်ရဲရခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "【ウィッシュカード】願いの成就、深い満足感、歓喜の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to smugness, materialism, or getting what you thought you wanted.",
      "my": "အပေါ်ယံ ပြည့်စုံမှု သို့မဟုတ် မာနထောင်လွှားခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "物質的な過信、空虚な満足、おごりに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (ဆုတောင်းပြည့်မည်)",
      "ja": "YES（大願成就）"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-10",
    "file": "Cups10.png",
    "name": {
      "en": "Ten of Cups",
      "my": "ဖလား ၁၀ (မိသားစုပျော်ရွှင်မှုနှင့် အပြည့်စုံဆုံးမေတ္တာ)",
      "ja": "カップの10"
    },
    "number": 10,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 10)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 10)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 10）"
    },
    "uprightKeywords": {
      "en": [
        "Ultimate domestic bliss, lasting harmony, and divine soul union"
      ],
      "my": [
        "မိသားစု အေးချမ်းသာယာမှုနှင့် ထာဝရ မေတ္တာစစ်"
      ],
      "ja": [
        "至福の家庭、永続する調和、満ち足りた魂の共鳴"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Family tension, broken peace, or unrealistic ideals"
      ],
      "my": [
        "မိသားစုအတွင်း စိတ်ဝမ်းကွဲခြင်း သို့မဟုတ် သဘောထားမတိုက်ဆိုင်ခြင်း"
      ],
      "ja": [
        "家庭内の摩擦、理想の崩れ、不協和音"
      ]
    },
    "uprightMeaning": {
      "en": "Ten of Cups: Ultimate domestic bliss, lasting harmony, and divine soul union.",
      "my": "ဖလား ၁၀ (မိသားစုပျော်ရွှင်မှုနှင့် အပြည့်စုံဆုံးမေတ္တာ): မိသားစု အေးချမ်းသာယာမှုနှင့် ထာဝရ မေတ္တာစစ်။",
      "ja": "【カップの10】：至福の家庭、永続する調和、満ち足りた魂の共鳴。"
    },
    "reversedMeaning": {
      "en": "Reversed Ten of Cups: Family tension, broken peace, or unrealistic ideals.",
      "my": "ပြောင်းပြန် ဖလား ၁၀ (မိသားစုပျော်ရွှင်မှုနှင့် အပြည့်စုံဆုံးမေတ္တာ): မိသားစုအတွင်း စိတ်ဝမ်းကွဲခြင်း သို့မဟုတ် သဘောထားမတိုက်ဆိုင်ခြင်း။",
      "ja": "逆位置【カップの10】：家庭内の摩擦、理想の崩れ、不協和音。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Ten of Cups reflects ultimate domestic bliss, lasting harmony, and divine soul union.",
        "my": "အချစ်ရေးတွင် ဖလား ၁၀ (မိသားစုပျော်ရွှင်မှုနှင့် အပြည့်စုံဆုံးမေတ္တာ) သည် မိသားစု အေးချမ်းသာယာမှုနှင့် ထာဝရ မေတ္တာစစ် ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、至福の家庭、永続する調和、満ち足りた魂の共鳴が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Ten of Cups warns of family tension, broken peace, or unrealistic ideals.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ၁၀ (မိသားစုပျော်ရွှင်မှုနှင့် အပြည့်စုံဆုံးမေတ္တာ) သည် မိသားစုအတွင်း စိတ်ဝမ်းကွဲခြင်း သို့မဟုတ် သဘောထားမတိုက်ဆိုင်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、家庭内の摩擦、理想の崩れ、不協和音に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Ten of Cups brings ultimate domestic bliss, lasting harmony, and divine soul union.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ၁၀ (မိသားစုပျော်ရွှင်မှုနှင့် အပြည့်စုံဆုံးမေတ္တာ) သည် မိသားစု အေးချမ်းသာယာမှုနှင့် ထာဝရ မေတ္တာစစ် ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、至福の家庭、永続する調和、満ち足りた魂の共鳴の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of family tension, broken peace, or unrealistic ideals.",
        "my": "အလုပ်အကိုင်တွင် မိသားစုအတွင်း စိတ်ဝမ်းကွဲခြင်း သို့မဟုတ် သဘောထားမတိုက်ဆိုင်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、家庭内の摩擦、理想の崩れ、不協和音による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace ultimate domestic bliss, lasting harmony, and divine soul union.",
        "my": "ဝိညာဉ်ရေးရာတွင် မိသားစု အေးချမ်းသာယာမှုနှင့် ထာဝရ မေတ္တာစစ် ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、至福の家庭、永続する調和、満ち足りた魂の共鳴の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform family tension, broken peace, or unrealistic ideals.",
        "my": "ဝိညာဉ်ရေးရာတွင် မိသားစုအတွင်း စိတ်ဝမ်းကွဲခြင်း သို့မဟုတ် သဘောထားမတိုက်ဆိုင်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる家庭内の摩擦、理想の崩れ、不協和音を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from ultimate domestic bliss, lasting harmony, and divine soul union.",
      "my": "မိသားစု အေးချမ်းသာယာမှုနှင့် ထာဝရ မေတ္တာစစ် ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "至福の家庭、永続する調和、満ち足りた魂の共鳴の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to family tension, broken peace, or unrealistic ideals.",
      "my": "မိသားစုအတွင်း စိတ်ဝမ်းကွဲခြင်း သို့မဟုတ် သဘောထားမတိုက်ဆိုင်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "家庭内の摩擦、理想の崩れ、不協和音に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-11",
    "file": "Cups11.png",
    "name": {
      "en": "Page of Cups",
      "my": "ဖလား စာပို့လုလင် (နူးညံ့သော စိတ်ကူးသစ်)",
      "ja": "カップのペイジ"
    },
    "number": 11,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 11)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 11)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 11）"
    },
    "uprightKeywords": {
      "en": [
        "Heartfelt messages, intuitive sparks, and playful creativity"
      ],
      "my": [
        "မေတ္တာပါသော သတင်းစကားများ၊ ပင်ကိုယ်စိတ်ကူးဉာဏ်နှင့် တီထွင်ဖန်တီးမှု"
      ],
      "ja": [
        "心温まる便り、直感の閃き、純粋な感性"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Emotional immaturity, drama, or blocked intuition"
      ],
      "my": [
        "စိတ်မရင့်ကျက်ခြင်း၊ စိတ်လိုက်မာန်ပါ ဖြစ်ခြင်း"
      ],
      "ja": [
        "感情的な未熟さ、拗ね、直感の鈍り"
      ]
    },
    "uprightMeaning": {
      "en": "Page of Cups: Heartfelt messages, intuitive sparks, and playful creativity.",
      "my": "ဖလား စာပို့လုလင် (နူးညံ့သော စိတ်ကူးသစ်): မေတ္တာပါသော သတင်းစကားများ၊ ပင်ကိုယ်စိတ်ကူးဉာဏ်နှင့် တီထွင်ဖန်တီးမှု။",
      "ja": "【カップのペイジ】：心温まる便り、直感の閃き、純粋な感性。"
    },
    "reversedMeaning": {
      "en": "Reversed Page of Cups: Emotional immaturity, drama, or blocked intuition.",
      "my": "ပြောင်းပြန် ဖလား စာပို့လုလင် (နူးညံ့သော စိတ်ကူးသစ်): စိတ်မရင့်ကျက်ခြင်း၊ စိတ်လိုက်မာန်ပါ ဖြစ်ခြင်း။",
      "ja": "逆位置【カップのペイジ】：感情的な未熟さ、拗ね、直感の鈍り。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Page of Cups reflects heartfelt messages, intuitive sparks, and playful creativity.",
        "my": "အချစ်ရေးတွင် ဖလား စာပို့လုလင် (နူးညံ့သော စိတ်ကူးသစ်) သည် မေတ္တာပါသော သတင်းစကားများ၊ ပင်ကိုယ်စိတ်ကူးဉာဏ်နှင့် တီထွင်ဖန်တီးမှု ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、心温まる便り、直感の閃き、純粋な感性が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Page of Cups warns of emotional immaturity, drama, or blocked intuition.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား စာပို့လုလင် (နူးညံ့သော စိတ်ကူးသစ်) သည် စိတ်မရင့်ကျက်ခြင်း၊ စိတ်လိုက်မာန်ပါ ဖြစ်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、感情的な未熟さ、拗ね、直感の鈍りに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Page of Cups brings heartfelt messages, intuitive sparks, and playful creativity.",
        "my": "အလုပ်အကိုင်တွင် ဖလား စာပို့လုလင် (နူးညံ့သော စိတ်ကူးသစ်) သည် မေတ္တာပါသော သတင်းစကားများ၊ ပင်ကိုယ်စိတ်ကူးဉာဏ်နှင့် တီထွင်ဖန်တီးမှု ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、心温まる便り、直感の閃き、純粋な感性の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of emotional immaturity, drama, or blocked intuition.",
        "my": "အလုပ်အကိုင်တွင် စိတ်မရင့်ကျက်ခြင်း၊ စိတ်လိုက်မာန်ပါ ဖြစ်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、感情的な未熟さ、拗ね、直感の鈍りによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace heartfelt messages, intuitive sparks, and playful creativity.",
        "my": "ဝိညာဉ်ရေးရာတွင် မေတ္တာပါသော သတင်းစကားများ၊ ပင်ကိုယ်စိတ်ကူးဉာဏ်နှင့် တီထွင်ဖန်တီးမှု ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、心温まる便り、直感の閃き、純粋な感性の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform emotional immaturity, drama, or blocked intuition.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်မရင့်ကျက်ခြင်း၊ စိတ်လိုက်မာန်ပါ ဖြစ်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる感情的な未熟さ、拗ね、直感の鈍りを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from heartfelt messages, intuitive sparks, and playful creativity.",
      "my": "မေတ္တာပါသော သတင်းစကားများ၊ ပင်ကိုယ်စိတ်ကူးဉာဏ်နှင့် တီထွင်ဖန်တီးမှု ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "心温まる便り、直感の閃き、純粋な感性の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to emotional immaturity, drama, or blocked intuition.",
      "my": "စိတ်မရင့်ကျက်ခြင်း၊ စိတ်လိုက်မာန်ပါ ဖြစ်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "感情的な未熟さ、拗ね、直感の鈍りに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-12",
    "file": "Cups12.png",
    "name": {
      "en": "Knight of Cups",
      "my": "ဖလား မြင်းစီးသူရဲကောင်း (အချစ်သံတမန်)",
      "ja": "カップのナイト"
    },
    "number": 12,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 12)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 12)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 12）"
    },
    "uprightKeywords": {
      "en": [
        "Romance, poetic proposals, and following your heart"
      ],
      "my": [
        "ချစ်သဝဏ်လွှာ၊ အချစ်ရေး ကမ်းလှမ်းမှုနှင့် နှလုံးသားနောက်သို့ လိုက်ခြင်း"
      ],
      "ja": [
        "ロマンチックな誘い、詩情、理想の愛の追求"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Unrealistic fantasy, moodiness, or broken promises"
      ],
      "my": [
        "လက်တွေ့မကျသော စိတ်ကူးယဉ်မှု သို့မဟုတ် ကတိမတည်ခြင်း"
      ],
      "ja": [
        "甘言による誘惑、気まぐれ、幻滅"
      ]
    },
    "uprightMeaning": {
      "en": "Knight of Cups: Romance, poetic proposals, and following your heart.",
      "my": "ဖလား မြင်းစီးသူရဲကောင်း (အချစ်သံတမန်): ချစ်သဝဏ်လွှာ၊ အချစ်ရေး ကမ်းလှမ်းမှုနှင့် နှလုံးသားနောက်သို့ လိုက်ခြင်း။",
      "ja": "【カップのナイト】：ロマンチックな誘い、詩情、理想の愛の追求。"
    },
    "reversedMeaning": {
      "en": "Reversed Knight of Cups: Unrealistic fantasy, moodiness, or broken promises.",
      "my": "ပြောင်းပြန် ဖလား မြင်းစီးသူရဲကောင်း (အချစ်သံတမန်): လက်တွေ့မကျသော စိတ်ကူးယဉ်မှု သို့မဟုတ် ကတိမတည်ခြင်း။",
      "ja": "逆位置【カップのナイト】：甘言による誘惑、気まぐれ、幻滅。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Knight of Cups reflects romance, poetic proposals, and following your heart.",
        "my": "အချစ်ရေးတွင် ဖလား မြင်းစီးသူရဲကောင်း (အချစ်သံတမန်) သည် ချစ်သဝဏ်လွှာ၊ အချစ်ရေး ကမ်းလှမ်းမှုနှင့် နှလုံးသားနောက်သို့ လိုက်ခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、ロマンチックな誘い、詩情、理想の愛の追求が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Knight of Cups warns of unrealistic fantasy, moodiness, or broken promises.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား မြင်းစီးသူရဲကောင်း (အချစ်သံတမန်) သည် လက်တွေ့မကျသော စိတ်ကူးယဉ်မှု သို့မဟုတ် ကတိမတည်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、甘言による誘惑、気まぐれ、幻滅に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Knight of Cups brings romance, poetic proposals, and following your heart.",
        "my": "အလုပ်အကိုင်တွင် ဖလား မြင်းစီးသူရဲကောင်း (အချစ်သံတမန်) သည် ချစ်သဝဏ်လွှာ၊ အချစ်ရေး ကမ်းလှမ်းမှုနှင့် နှလုံးသားနောက်သို့ လိုက်ခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、ロマンチックな誘い、詩情、理想の愛の追求の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of unrealistic fantasy, moodiness, or broken promises.",
        "my": "အလုပ်အကိုင်တွင် လက်တွေ့မကျသော စိတ်ကူးယဉ်မှု သို့မဟုတ် ကတိမတည်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、甘言による誘惑、気まぐれ、幻滅による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace romance, poetic proposals, and following your heart.",
        "my": "ဝိညာဉ်ရေးရာတွင် ချစ်သဝဏ်လွှာ၊ အချစ်ရေး ကမ်းလှမ်းမှုနှင့် နှလုံးသားနောက်သို့ လိုက်ခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、ロマンチックな誘い、詩情、理想の愛の追求の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform unrealistic fantasy, moodiness, or broken promises.",
        "my": "ဝိညာဉ်ရေးရာတွင် လက်တွေ့မကျသော စိတ်ကူးယဉ်မှု သို့မဟုတ် ကတိမတည်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる甘言による誘惑、気まぐれ、幻滅を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from romance, poetic proposals, and following your heart.",
      "my": "ချစ်သဝဏ်လွှာ၊ အချစ်ရေး ကမ်းလှမ်းမှုနှင့် နှလုံးသားနောက်သို့ လိုက်ခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "ロマンチックな誘い、詩情、理想の愛の追求の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to unrealistic fantasy, moodiness, or broken promises.",
      "my": "လက်တွေ့မကျသော စိတ်ကူးယဉ်မှု သို့မဟုတ် ကတိမတည်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "甘言による誘惑、気まぐれ、幻滅に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-13",
    "file": "Cups13.png",
    "name": {
      "en": "Queen of Cups",
      "my": "ဖလား မိဖုရား (ဂရုဏာရှင်နှင့် အကြားအမြင်ဉာဏ်)",
      "ja": "カップのクイーン"
    },
    "number": 13,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 13)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 13)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 13）"
    },
    "uprightKeywords": {
      "en": [
        "Deep compassion, emotional healing, and psychic receptivity"
      ],
      "my": [
        "နက်ရှိုင်းသော မေတ္တာဂရုဏာ၊ စိတ်ပိုင်းဆိုင်ရာ ကုစားမှုနှင့် အကြားအမြင်ဉာဏ်"
      ],
      "ja": [
        "深い慈悲、共感力、霊的な直感、癒やしの母性"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Emotional overwhelm, insecurity, or codependency"
      ],
      "my": [
        "စိတ်ခံစားချက် လွန်ကဲခြင်း၊ မလုံခြုံသလို ခံစားရခြင်း"
      ],
      "ja": [
        "感情の荒波、依存心、情緒不安定"
      ]
    },
    "uprightMeaning": {
      "en": "Queen of Cups: Deep compassion, emotional healing, and psychic receptivity.",
      "my": "ဖလား မိဖုရား (ဂရုဏာရှင်နှင့် အကြားအမြင်ဉာဏ်): နက်ရှိုင်းသော မေတ္တာဂရုဏာ၊ စိတ်ပိုင်းဆိုင်ရာ ကုစားမှုနှင့် အကြားအမြင်ဉာဏ်။",
      "ja": "【カップのクイーン】：深い慈悲、共感力、霊的な直感、癒やしの母性。"
    },
    "reversedMeaning": {
      "en": "Reversed Queen of Cups: Emotional overwhelm, insecurity, or codependency.",
      "my": "ပြောင်းပြန် ဖလား မိဖုရား (ဂရုဏာရှင်နှင့် အကြားအမြင်ဉာဏ်): စိတ်ခံစားချက် လွန်ကဲခြင်း၊ မလုံခြုံသလို ခံစားရခြင်း။",
      "ja": "逆位置【カップのクイーン】：感情の荒波、依存心、情緒不安定。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Queen of Cups reflects deep compassion, emotional healing, and psychic receptivity.",
        "my": "အချစ်ရေးတွင် ဖလား မိဖုရား (ဂရုဏာရှင်နှင့် အကြားအမြင်ဉာဏ်) သည် နက်ရှိုင်းသော မေတ္တာဂရုဏာ၊ စိတ်ပိုင်းဆိုင်ရာ ကုစားမှုနှင့် အကြားအမြင်ဉာဏ် ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、深い慈悲、共感力、霊的な直感、癒やしの母性が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Queen of Cups warns of emotional overwhelm, insecurity, or codependency.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား မိဖုရား (ဂရုဏာရှင်နှင့် အကြားအမြင်ဉာဏ်) သည် စိတ်ခံစားချက် လွန်ကဲခြင်း၊ မလုံခြုံသလို ခံစားရခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、感情の荒波、依存心、情緒不安定に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Queen of Cups brings deep compassion, emotional healing, and psychic receptivity.",
        "my": "အလုပ်အကိုင်တွင် ဖလား မိဖုရား (ဂရုဏာရှင်နှင့် အကြားအမြင်ဉာဏ်) သည် နက်ရှိုင်းသော မေတ္တာဂရုဏာ၊ စိတ်ပိုင်းဆိုင်ရာ ကုစားမှုနှင့် အကြားအမြင်ဉာဏ် ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、深い慈悲、共感力、霊的な直感、癒やしの母性の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of emotional overwhelm, insecurity, or codependency.",
        "my": "အလုပ်အကိုင်တွင် စိတ်ခံစားချက် လွန်ကဲခြင်း၊ မလုံခြုံသလို ခံစားရခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、感情の荒波、依存心、情緒不安定による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace deep compassion, emotional healing, and psychic receptivity.",
        "my": "ဝိညာဉ်ရေးရာတွင် နက်ရှိုင်းသော မေတ္တာဂရုဏာ၊ စိတ်ပိုင်းဆိုင်ရာ ကုစားမှုနှင့် အကြားအမြင်ဉာဏ် ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、深い慈悲、共感力、霊的な直感、癒やしの母性の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform emotional overwhelm, insecurity, or codependency.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်ခံစားချက် လွန်ကဲခြင်း၊ မလုံခြုံသလို ခံစားရခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる感情の荒波、依存心、情緒不安定を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from deep compassion, emotional healing, and psychic receptivity.",
      "my": "နက်ရှိုင်းသော မေတ္တာဂရုဏာ၊ စိတ်ပိုင်းဆိုင်ရာ ကုစားမှုနှင့် အကြားအမြင်ဉာဏ် ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "深い慈悲、共感力、霊的な直感、癒やしの母性の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to emotional overwhelm, insecurity, or codependency.",
      "my": "စိတ်ခံစားချက် လွန်ကဲခြင်း၊ မလုံခြုံသလို ခံစားရခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "感情の荒波、依存心、情緒不安定に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "cups-14",
    "file": "Cups14.png",
    "name": {
      "en": "King of Cups",
      "my": "ဖလား ဘုရင် (စိတ်ခံစားချက်ကို ထိန်းချုပ်နိုင်သူ)",
      "ja": "カップのキング"
    },
    "number": 14,
    "arcana": "minor",
    "suit": "cups",
    "element": "Water",
    "astrology": {
      "en": "emotions, relationships, intuition, and the heart (Rank 14)",
      "my": "စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ (အဆင့် 14)",
      "ja": "感情、人間関係、直感、そして愛の領域（数秘 14）"
    },
    "uprightKeywords": {
      "en": [
        "Emotional balance, diplomatic wisdom, and calm mastery in storms"
      ],
      "my": [
        "စိတ်ခံစားချက်ကို အေးဆေးစွာ ထိန်းချုပ်နိုင်သော ပညာရှိခေါင်းဆောင်"
      ],
      "ja": [
        "感情の統御、寛大な包容力、嵐の中でも揺るがぬ知恵"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Emotional manipulation, cold moodiness, or repressed feelings"
      ],
      "my": [
        "စိတ်ခံစားချက်ဖြင့် လှည့်စားခြင်း သို့မဟုတ် ဒေါသကို မြိုသိပ်ထားခြင်း"
      ],
      "ja": [
        "感情の操作、冷酷、抑圧された怒り"
      ]
    },
    "uprightMeaning": {
      "en": "King of Cups: Emotional balance, diplomatic wisdom, and calm mastery in storms.",
      "my": "ဖလား ဘုရင် (စိတ်ခံစားချက်ကို ထိန်းချုပ်နိုင်သူ): စိတ်ခံစားချက်ကို အေးဆေးစွာ ထိန်းချုပ်နိုင်သော ပညာရှိခေါင်းဆောင်။",
      "ja": "【カップのキング】：感情の統御、寛大な包容力、嵐の中でも揺るがぬ知恵。"
    },
    "reversedMeaning": {
      "en": "Reversed King of Cups: Emotional manipulation, cold moodiness, or repressed feelings.",
      "my": "ပြောင်းပြန် ဖလား ဘုရင် (စိတ်ခံစားချက်ကို ထိန်းချုပ်နိုင်သူ): စိတ်ခံစားချက်ဖြင့် လှည့်စားခြင်း သို့မဟုတ် ဒေါသကို မြိုသိပ်ထားခြင်း။",
      "ja": "逆位置【カップのキング】：感情の操作、冷酷、抑圧された怒り。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, King of Cups reflects emotional balance, diplomatic wisdom, and calm mastery in storms.",
        "my": "အချစ်ရေးတွင် ဖလား ဘုရင် (စိတ်ခံစားချက်ကို ထိန်းချုပ်နိုင်သူ) သည် စိတ်ခံစားချက်ကို အေးဆေးစွာ ထိန်းချုပ်နိုင်သော ပညာရှိခေါင်းဆောင် ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、感情の統御、寛大な包容力、嵐の中でも揺るがぬ知恵が示されています。"
      },
      "reversed": {
        "en": "In love, reversed King of Cups warns of emotional manipulation, cold moodiness, or repressed feelings.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဖလား ဘုရင် (စိတ်ခံစားချက်ကို ထိန်းချုပ်နိုင်သူ) သည် စိတ်ခံစားချက်ဖြင့် လှည့်စားခြင်း သို့မဟုတ် ဒေါသကို မြိုသိပ်ထားခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、感情の操作、冷酷、抑圧された怒りに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, King of Cups brings emotional balance, diplomatic wisdom, and calm mastery in storms.",
        "my": "အလုပ်အကိုင်တွင် ဖလား ဘုရင် (စိတ်ခံစားချက်ကို ထိန်းချုပ်နိုင်သူ) သည် စိတ်ခံစားချက်ကို အေးဆေးစွာ ထိန်းချုပ်နိုင်သော ပညာရှိခေါင်းဆောင် ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、感情の統御、寛大な包容力、嵐の中でも揺るがぬ知恵の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of emotional manipulation, cold moodiness, or repressed feelings.",
        "my": "အလုပ်အကိုင်တွင် စိတ်ခံစားချက်ဖြင့် လှည့်စားခြင်း သို့မဟုတ် ဒေါသကို မြိုသိပ်ထားခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、感情の操作、冷酷、抑圧された怒りによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace emotional balance, diplomatic wisdom, and calm mastery in storms.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်ခံစားချက်ကို အေးဆေးစွာ ထိန်းချုပ်နိုင်သော ပညာရှိခေါင်းဆောင် ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、感情の統御、寛大な包容力、嵐の中でも揺るがぬ知恵の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform emotional manipulation, cold moodiness, or repressed feelings.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်ခံစားချက်ဖြင့် လှည့်စားခြင်း သို့မဟုတ် ဒေါသကို မြိုသိပ်ထားခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる感情の操作、冷酷、抑圧された怒りを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from emotional balance, diplomatic wisdom, and calm mastery in storms.",
      "my": "စိတ်ခံစားချက်ကို အေးဆေးစွာ ထိန်းချုပ်နိုင်သော ပညာရှိခေါင်းဆောင် ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "感情の統御、寛大な包容力、嵐の中でも揺るがぬ知恵の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to emotional manipulation, cold moodiness, or repressed feelings.",
      "my": "စိတ်ခံစားချက်ဖြင့် လှည့်စားခြင်း သို့မဟုတ် ဒေါသကို မြိုသိပ်ထားခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "感情の操作、冷酷、抑圧された怒りに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Cups",
        "Element: Water"
      ],
      "my": [
        "ဖလား (ရေဓာတ်)",
        "ဓာတ်ကြီး: Water"
      ],
      "ja": [
        "カップ（聖杯・水）",
        "エレメント：Water"
      ]
    }
  },
  {
    "id": "pentacles-1",
    "file": "Pentacles01.png",
    "name": {
      "en": "Ace of Pentacles",
      "my": "ဒင်္ဂါး ၁ (ရုပ်ဝတ္ထုကြွယ်ဝမှု အစပျိုးခြင်း)",
      "ja": "ペンタクルのエース"
    },
    "number": 1,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 1)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 1)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 1）"
    },
    "uprightKeywords": {
      "en": [
        "Tangible opportunity, financial seed, and grounded prosperity"
      ],
      "my": [
        "ငွေကြေးဥစ္စာ အခွင့်အလမ်းသစ်နှင့် လက်တွေ့ကျသော အောင်မြင်မှုအစ"
      ],
      "ja": [
        "確かな富の種、物質的チャンス、実りあるスタート"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Missed investment or shaky foundation"
      ],
      "my": [
        "ရင်းနှီးမြှုပ်နှံမှု အခွင့်အလမ်းလွတ်သွားခြင်း သို့မဟုတ် အခြေခံမခိုင်မာခြင်း"
      ],
      "ja": [
        "好機の逸脱、不安定な計画、浪費"
      ]
    },
    "uprightMeaning": {
      "en": "Ace of Pentacles: Tangible opportunity, financial seed, and grounded prosperity.",
      "my": "ဒင်္ဂါး ၁ (ရုပ်ဝတ္ထုကြွယ်ဝမှု အစပျိုးခြင်း): ငွေကြေးဥစ္စာ အခွင့်အလမ်းသစ်နှင့် လက်တွေ့ကျသော အောင်မြင်မှုအစ။",
      "ja": "【ペンタクルのエース】：確かな富の種、物質的チャンス、実りあるスタート。"
    },
    "reversedMeaning": {
      "en": "Reversed Ace of Pentacles: Missed investment or shaky foundation.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၁ (ရုပ်ဝတ္ထုကြွယ်ဝမှု အစပျိုးခြင်း): ရင်းနှီးမြှုပ်နှံမှု အခွင့်အလမ်းလွတ်သွားခြင်း သို့မဟုတ် အခြေခံမခိုင်မာခြင်း။",
      "ja": "逆位置【ペンタクルのエース】：好機の逸脱、不安定な計画、浪費。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Ace of Pentacles reflects tangible opportunity, financial seed, and grounded prosperity.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၁ (ရုပ်ဝတ္ထုကြွယ်ဝမှု အစပျိုးခြင်း) သည် ငွေကြေးဥစ္စာ အခွင့်အလမ်းသစ်နှင့် လက်တွေ့ကျသော အောင်မြင်မှုအစ ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、確かな富の種、物質的チャンス、実りあるスタートが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Ace of Pentacles warns of missed investment or shaky foundation.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၁ (ရုပ်ဝတ္ထုကြွယ်ဝမှု အစပျိုးခြင်း) သည် ရင်းနှီးမြှုပ်နှံမှု အခွင့်အလမ်းလွတ်သွားခြင်း သို့မဟုတ် အခြေခံမခိုင်မာခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、好機の逸脱、不安定な計画、浪費に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Ace of Pentacles brings tangible opportunity, financial seed, and grounded prosperity.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၁ (ရုပ်ဝတ္ထုကြွယ်ဝမှု အစပျိုးခြင်း) သည် ငွေကြေးဥစ္စာ အခွင့်အလမ်းသစ်နှင့် လက်တွေ့ကျသော အောင်မြင်မှုအစ ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、確かな富の種、物質的チャンス、実りあるスタートの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of missed investment or shaky foundation.",
        "my": "အလုပ်အကိုင်တွင် ရင်းနှီးမြှုပ်နှံမှု အခွင့်အလမ်းလွတ်သွားခြင်း သို့မဟုတ် အခြေခံမခိုင်မာခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、好機の逸脱、不安定な計画、浪費による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace tangible opportunity, financial seed, and grounded prosperity.",
        "my": "ဝိညာဉ်ရေးရာတွင် ငွေကြေးဥစ္စာ အခွင့်အလမ်းသစ်နှင့် လက်တွေ့ကျသော အောင်မြင်မှုအစ ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、確かな富の種、物質的チャンス、実りあるスタートの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform missed investment or shaky foundation.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရင်းနှီးမြှုပ်နှံမှု အခွင့်အလမ်းလွတ်သွားခြင်း သို့မဟုတ် အခြေခံမခိုင်မာခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる好機の逸脱、不安定な計画、浪費を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from tangible opportunity, financial seed, and grounded prosperity.",
      "my": "ငွေကြေးဥစ္စာ အခွင့်အလမ်းသစ်နှင့် လက်တွေ့ကျသော အောင်မြင်မှုအစ ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "確かな富の種、物質的チャンス、実りあるスタートの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to missed investment or shaky foundation.",
      "my": "ရင်းနှီးမြှုပ်နှံမှု အခွင့်အလမ်းလွတ်သွားခြင်း သို့မဟုတ် အခြေခံမခိုင်မာခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "好機の逸脱、不安定な計画、浪費に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-2",
    "file": "Pentacles02.png",
    "name": {
      "en": "Two of Pentacles",
      "my": "ဒင်္ဂါး ၂ (ဟန်ချက်ညီအောင် ထိန်းညှိခြင်း)",
      "ja": "ペンタクルの2"
    },
    "number": 2,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 2)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 2)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 2）"
    },
    "uprightKeywords": {
      "en": [
        "Adaptability, juggling priorities, and financial agility"
      ],
      "my": [
        "အလုပ်များနှင့် ငွေကြေးကို ပါးနပ်စွာ ချိန်ညှိဆောင်ရွက်နိုင်ခြင်း"
      ],
      "ja": [
        "柔軟な適応力、臨機応変なやりくり、バランス"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Overwhelmed, dropped balls, or financial disarray"
      ],
      "my": [
        "ဝန်ပိနေခြင်း၊ မနိုင်ဝန်ထမ်းမိ၍ လွဲချော်ခြင်း"
      ],
      "ja": [
        "キャパオーバー、収支の乱れ、混乱"
      ]
    },
    "uprightMeaning": {
      "en": "Two of Pentacles: Adaptability, juggling priorities, and financial agility.",
      "my": "ဒင်္ဂါး ၂ (ဟန်ချက်ညီအောင် ထိန်းညှိခြင်း): အလုပ်များနှင့် ငွေကြေးကို ပါးနပ်စွာ ချိန်ညှိဆောင်ရွက်နိုင်ခြင်း။",
      "ja": "【ペンタクルの2】：柔軟な適応力、臨機応変なやりくり、バランス。"
    },
    "reversedMeaning": {
      "en": "Reversed Two of Pentacles: Overwhelmed, dropped balls, or financial disarray.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၂ (ဟန်ချက်ညီအောင် ထိန်းညှိခြင်း): ဝန်ပိနေခြင်း၊ မနိုင်ဝန်ထမ်းမိ၍ လွဲချော်ခြင်း။",
      "ja": "逆位置【ペンタクルの2】：キャパオーバー、収支の乱れ、混乱。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Two of Pentacles reflects adaptability, juggling priorities, and financial agility.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၂ (ဟန်ချက်ညီအောင် ထိန်းညှိခြင်း) သည် အလုပ်များနှင့် ငွေကြေးကို ပါးနပ်စွာ ချိန်ညှိဆောင်ရွက်နိုင်ခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、柔軟な適応力、臨機応変なやりくり、バランスが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Two of Pentacles warns of overwhelmed, dropped balls, or financial disarray.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၂ (ဟန်ချက်ညီအောင် ထိန်းညှိခြင်း) သည် ဝန်ပိနေခြင်း၊ မနိုင်ဝန်ထမ်းမိ၍ လွဲချော်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、キャパオーバー、収支の乱れ、混乱に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Two of Pentacles brings adaptability, juggling priorities, and financial agility.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၂ (ဟန်ချက်ညီအောင် ထိန်းညှိခြင်း) သည် အလုပ်များနှင့် ငွေကြေးကို ပါးနပ်စွာ ချိန်ညှိဆောင်ရွက်နိုင်ခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、柔軟な適応力、臨機応変なやりくり、バランスの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of overwhelmed, dropped balls, or financial disarray.",
        "my": "အလုပ်အကိုင်တွင် ဝန်ပိနေခြင်း၊ မနိုင်ဝန်ထမ်းမိ၍ လွဲချော်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、キャパオーバー、収支の乱れ、混乱による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace adaptability, juggling priorities, and financial agility.",
        "my": "ဝိညာဉ်ရေးရာတွင် အလုပ်များနှင့် ငွေကြေးကို ပါးနပ်စွာ ချိန်ညှိဆောင်ရွက်နိုင်ခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、柔軟な適応力、臨機応変なやりくり、バランスの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform overwhelmed, dropped balls, or financial disarray.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဝန်ပိနေခြင်း၊ မနိုင်ဝန်ထမ်းမိ၍ လွဲချော်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なるキャパオーバー、収支の乱れ、混乱を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from adaptability, juggling priorities, and financial agility.",
      "my": "အလုပ်များနှင့် ငွေကြေးကို ပါးနပ်စွာ ချိန်ညှိဆောင်ရွက်နိုင်ခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "柔軟な適応力、臨機応変なやりくり、バランスの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to overwhelmed, dropped balls, or financial disarray.",
      "my": "ဝန်ပိနေခြင်း၊ မနိုင်ဝန်ထမ်းမိ၍ လွဲချော်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "キャパオーバー、収支の乱れ、混乱に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "ဖြစ်နိုင်ခြေရှိပါသည်",
      "ja": "YES（調整次第）"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-3",
    "file": "Pentacles03.png",
    "name": {
      "en": "Three of Pentacles",
      "my": "ဒင်္ဂါး ၃ (လက်တွဲပူးပေါင်းမှုနှင့် ကျွမ်းကျင်မှု)",
      "ja": "ペンタクルの3"
    },
    "number": 3,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 3)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 3)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 3）"
    },
    "uprightKeywords": {
      "en": [
        "Master teamwork, craftsmanship, and professional recognition"
      ],
      "my": [
        "အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်မှုနှင့် ကျွမ်းကျင်မှုအတွက် ချီးကျူးခံရခြင်း"
      ],
      "ja": [
        "熟練の技、建設的な協力体制、高い評価"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Poor teamwork, cutting corners, or lack of skill"
      ],
      "my": [
        "အဖွဲ့အစည်း ညီညွတ်မှုမရှိခြင်း သို့မဟုတ် အရည်အသွေးညံ့ဖျင်းခြင်း"
      ],
      "ja": [
        "チームワークの乱れ、手抜き、技術不足"
      ]
    },
    "uprightMeaning": {
      "en": "Three of Pentacles: Master teamwork, craftsmanship, and professional recognition.",
      "my": "ဒင်္ဂါး ၃ (လက်တွဲပူးပေါင်းမှုနှင့် ကျွမ်းကျင်မှု): အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်မှုနှင့် ကျွမ်းကျင်မှုအတွက် ချီးကျူးခံရခြင်း။",
      "ja": "【ペンタクルの3】：熟練の技、建設的な協力体制、高い評価。"
    },
    "reversedMeaning": {
      "en": "Reversed Three of Pentacles: Poor teamwork, cutting corners, or lack of skill.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၃ (လက်တွဲပူးပေါင်းမှုနှင့် ကျွမ်းကျင်မှု): အဖွဲ့အစည်း ညီညွတ်မှုမရှိခြင်း သို့မဟုတ် အရည်အသွေးညံ့ဖျင်းခြင်း။",
      "ja": "逆位置【ペンタクルの3】：チームワークの乱れ、手抜き、技術不足。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Three of Pentacles reflects master teamwork, craftsmanship, and professional recognition.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၃ (လက်တွဲပူးပေါင်းမှုနှင့် ကျွမ်းကျင်မှု) သည် အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်မှုနှင့် ကျွမ်းကျင်မှုအတွက် ချီးကျူးခံရခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、熟練の技、建設的な協力体制、高い評価が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Three of Pentacles warns of poor teamwork, cutting corners, or lack of skill.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၃ (လက်တွဲပူးပေါင်းမှုနှင့် ကျွမ်းကျင်မှု) သည် အဖွဲ့အစည်း ညီညွတ်မှုမရှိခြင်း သို့မဟုတ် အရည်အသွေးညံ့ဖျင်းခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、チームワークの乱れ、手抜き、技術不足に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Three of Pentacles brings master teamwork, craftsmanship, and professional recognition.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၃ (လက်တွဲပူးပေါင်းမှုနှင့် ကျွမ်းကျင်မှု) သည် အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်မှုနှင့် ကျွမ်းကျင်မှုအတွက် ချီးကျူးခံရခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、熟練の技、建設的な協力体制、高い評価の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of poor teamwork, cutting corners, or lack of skill.",
        "my": "အလုပ်အကိုင်တွင် အဖွဲ့အစည်း ညီညွတ်မှုမရှိခြင်း သို့မဟုတ် အရည်အသွေးညံ့ဖျင်းခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、チームワークの乱れ、手抜き、技術不足による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace master teamwork, craftsmanship, and professional recognition.",
        "my": "ဝိညာဉ်ရေးရာတွင် အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်မှုနှင့် ကျွမ်းကျင်မှုအတွက် ချီးကျူးခံရခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、熟練の技、建設的な協力体制、高い評価の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform poor teamwork, cutting corners, or lack of skill.",
        "my": "ဝိညာဉ်ရေးရာတွင် အဖွဲ့အစည်း ညီညွတ်မှုမရှိခြင်း သို့မဟုတ် အရည်အသွေးညံ့ဖျင်းခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なるチームワークの乱れ、手抜き、技術不足を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from master teamwork, craftsmanship, and professional recognition.",
      "my": "အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်မှုနှင့် ကျွမ်းကျင်မှုအတွက် ချီးကျူးခံရခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "熟練の技、建設的な協力体制、高い評価の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to poor teamwork, cutting corners, or lack of skill.",
      "my": "အဖွဲ့အစည်း ညီညွတ်မှုမရှိခြင်း သို့မဟုတ် အရည်အသွေးညံ့ဖျင်းခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "チームワークの乱れ、手抜き、技術不足に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-4",
    "file": "Pentacles04.png",
    "name": {
      "en": "Four of Pentacles",
      "my": "ဒင်္ဂါး ၄ (ပိုင်ဆိုင်မှုကို တင်းတင်းကျပ်ကျပ် ဆုပ်ကိုင်ထားခြင်း)",
      "ja": "ペンタクルの4"
    },
    "number": 4,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 4)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 4)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 4）"
    },
    "uprightKeywords": {
      "en": [
        "Financial security, holding tight, and conserving resources"
      ],
      "my": [
        "ငွေကြေးတည်ငြိမ်မှု၊ စည်းစိမ်ကို ထိန်းသိမ်းထားခြင်း"
      ],
      "ja": [
        "安定した財政、守りの姿勢、堅実さ"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Greed, scarcity mindset, or financial bleeding"
      ],
      "my": [
        "တွန့်တိုကပ်စေးနည်းလွန်းခြင်း သို့မဟုတ် ငွေကြေးမထိန်းနိုင်ဘဲ ယိုဖိတ်ခြင်း"
      ],
      "ja": [
        "過度な執着、ケチ、浪費の極端さ"
      ]
    },
    "uprightMeaning": {
      "en": "Four of Pentacles: Financial security, holding tight, and conserving resources.",
      "my": "ဒင်္ဂါး ၄ (ပိုင်ဆိုင်မှုကို တင်းတင်းကျပ်ကျပ် ဆုပ်ကိုင်ထားခြင်း): ငွေကြေးတည်ငြိမ်မှု၊ စည်းစိမ်ကို ထိန်းသိမ်းထားခြင်း။",
      "ja": "【ペンタクルの4】：安定した財政、守りの姿勢、堅実さ。"
    },
    "reversedMeaning": {
      "en": "Reversed Four of Pentacles: Greed, scarcity mindset, or financial bleeding.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၄ (ပိုင်ဆိုင်မှုကို တင်းတင်းကျပ်ကျပ် ဆုပ်ကိုင်ထားခြင်း): တွန့်တိုကပ်စေးနည်းလွန်းခြင်း သို့မဟုတ် ငွေကြေးမထိန်းနိုင်ဘဲ ယိုဖိတ်ခြင်း။",
      "ja": "逆位置【ペンタクルの4】：過度な執着、ケチ、浪費の極端さ。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Four of Pentacles reflects financial security, holding tight, and conserving resources.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၄ (ပိုင်ဆိုင်မှုကို တင်းတင်းကျပ်ကျပ် ဆုပ်ကိုင်ထားခြင်း) သည် ငွေကြေးတည်ငြိမ်မှု၊ စည်းစိမ်ကို ထိန်းသိမ်းထားခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、安定した財政、守りの姿勢、堅実さが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Four of Pentacles warns of greed, scarcity mindset, or financial bleeding.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၄ (ပိုင်ဆိုင်မှုကို တင်းတင်းကျပ်ကျပ် ဆုပ်ကိုင်ထားခြင်း) သည် တွန့်တိုကပ်စေးနည်းလွန်းခြင်း သို့မဟုတ် ငွေကြေးမထိန်းနိုင်ဘဲ ယိုဖိတ်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、過度な執着、ケチ、浪費の極端さに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Four of Pentacles brings financial security, holding tight, and conserving resources.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၄ (ပိုင်ဆိုင်မှုကို တင်းတင်းကျပ်ကျပ် ဆုပ်ကိုင်ထားခြင်း) သည် ငွေကြေးတည်ငြိမ်မှု၊ စည်းစိမ်ကို ထိန်းသိမ်းထားခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、安定した財政、守りの姿勢、堅実さの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of greed, scarcity mindset, or financial bleeding.",
        "my": "အလုပ်အကိုင်တွင် တွန့်တိုကပ်စေးနည်းလွန်းခြင်း သို့မဟုတ် ငွေကြေးမထိန်းနိုင်ဘဲ ယိုဖိတ်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、過度な執着、ケチ、浪費の極端さによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace financial security, holding tight, and conserving resources.",
        "my": "ဝိညာဉ်ရေးရာတွင် ငွေကြေးတည်ငြိမ်မှု၊ စည်းစိမ်ကို ထိန်းသိမ်းထားခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、安定した財政、守りの姿勢、堅実さの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform greed, scarcity mindset, or financial bleeding.",
        "my": "ဝိညာဉ်ရေးရာတွင် တွန့်တိုကပ်စေးနည်းလွန်းခြင်း သို့မဟုတ် ငွေကြေးမထိန်းနိုင်ဘဲ ယိုဖိတ်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる過度な執着、ケチ、浪費の極端さを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from financial security, holding tight, and conserving resources.",
      "my": "ငွေကြေးတည်ငြိမ်မှု၊ စည်းစိမ်ကို ထိန်းသိမ်းထားခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "安定した財政、守りの姿勢、堅実さの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to greed, scarcity mindset, or financial bleeding.",
      "my": "တွန့်တိုကပ်စေးနည်းလွန်းခြင်း သို့မဟုတ် ငွေကြေးမထိန်းနိုင်ဘဲ ယိုဖိတ်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "過度な執着、ケチ、浪費の極端さに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-5",
    "file": "Pentacles05.png",
    "name": {
      "en": "Five of Pentacles",
      "my": "ဒင်္ဂါး ၅ (ခက်ခဲကြမ်းတမ်းသော အချိန်ကာလ)",
      "ja": "ペンタクルの5"
    },
    "number": 5,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 5)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 5)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 5）"
    },
    "uprightKeywords": {
      "en": [
        "Hardship, financial winter; look up, sanctuary is near"
      ],
      "my": [
        "ငွေကြေးကျပ်တည်းမှု၊ ခက်ခဲသောအချိန် (အကူအညီနှင့် ခိုလှုံရာသည် အနီးတွင်ရှိသည်)"
      ],
      "ja": [
        "一時的な困窮、孤立感。しかしすぐ側に救いの扉がある"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Recovery, end of poverty, and returning warmth"
      ],
      "my": [
        "အခက်အခဲများ ပြီးဆုံးသွားပြီး ပြန်လည်ဦးမော့လာခြင်း"
      ],
      "ja": [
        "苦境からの脱出、希望の光、経済の好転"
      ]
    },
    "uprightMeaning": {
      "en": "Five of Pentacles: Hardship, financial winter; look up, sanctuary is near.",
      "my": "ဒင်္ဂါး ၅ (ခက်ခဲကြမ်းတမ်းသော အချိန်ကာလ): ငွေကြေးကျပ်တည်းမှု၊ ခက်ခဲသောအချိန် (အကူအညီနှင့် ခိုလှုံရာသည် အနီးတွင်ရှိသည်)။",
      "ja": "【ペンタクルの5】：一時的な困窮、孤立感。しかしすぐ側に救いの扉がある。"
    },
    "reversedMeaning": {
      "en": "Reversed Five of Pentacles: Recovery, end of poverty, and returning warmth.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၅ (ခက်ခဲကြမ်းတမ်းသော အချိန်ကာလ): အခက်အခဲများ ပြီးဆုံးသွားပြီး ပြန်လည်ဦးမော့လာခြင်း။",
      "ja": "逆位置【ペンタクルの5】：苦境からの脱出、希望の光、経済の好転。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Five of Pentacles reflects hardship, financial winter; look up, sanctuary is near.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၅ (ခက်ခဲကြမ်းတမ်းသော အချိန်ကာလ) သည် ငွေကြေးကျပ်တည်းမှု၊ ခက်ခဲသောအချိန် (အကူအညီနှင့် ခိုလှုံရာသည် အနီးတွင်ရှိသည်) ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、一時的な困窮、孤立感。しかしすぐ側に救いの扉があるが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Five of Pentacles warns of recovery, end of poverty, and returning warmth.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၅ (ခက်ခဲကြမ်းတမ်းသော အချိန်ကာလ) သည် အခက်အခဲများ ပြီးဆုံးသွားပြီး ပြန်လည်ဦးမော့လာခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、苦境からの脱出、希望の光、経済の好転に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Five of Pentacles brings hardship, financial winter; look up, sanctuary is near.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၅ (ခက်ခဲကြမ်းတမ်းသော အချိန်ကာလ) သည် ငွေကြေးကျပ်တည်းမှု၊ ခက်ခဲသောအချိန် (အကူအညီနှင့် ခိုလှုံရာသည် အနီးတွင်ရှိသည်) ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、一時的な困窮、孤立感。しかしすぐ側に救いの扉があるの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of recovery, end of poverty, and returning warmth.",
        "my": "အလုပ်အကိုင်တွင် အခက်အခဲများ ပြီးဆုံးသွားပြီး ပြန်လည်ဦးမော့လာခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、苦境からの脱出、希望の光、経済の好転による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace hardship, financial winter; look up, sanctuary is near.",
        "my": "ဝိညာဉ်ရေးရာတွင် ငွေကြေးကျပ်တည်းမှု၊ ခက်ခဲသောအချိန် (အကူအညီနှင့် ခိုလှုံရာသည် အနီးတွင်ရှိသည်) ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、一時的な困窮、孤立感。しかしすぐ側に救いの扉があるの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform recovery, end of poverty, and returning warmth.",
        "my": "ဝိညာဉ်ရေးရာတွင် အခက်အခဲများ ပြီးဆုံးသွားပြီး ပြန်လည်ဦးမော့လာခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる苦境からの脱出、希望の光、経済の好転を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from hardship, financial winter; look up, sanctuary is near.",
      "my": "ငွေကြေးကျပ်တည်းမှု၊ ခက်ခဲသောအချိန် (အကူအညီနှင့် ခိုလှုံရာသည် အနီးတွင်ရှိသည်) ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "一時的な困窮、孤立感。しかしすぐ側に救いの扉があるの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to recovery, end of poverty, and returning warmth.",
      "my": "အခက်အခဲများ ပြီးဆုံးသွားပြီး ပြန်လည်ဦးမော့လာခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "苦境からの脱出、希望の光、経済の好転に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (အခက်အခဲရှိသည်)",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-6",
    "file": "Pentacles06.png",
    "name": {
      "en": "Six of Pentacles",
      "my": "ဒင်္ဂါး ၆ (ပေးကမ်းမျှဝေခြင်းနှင့် အကူအညီရရှိခြင်း)",
      "ja": "ペンタクルの6"
    },
    "number": 6,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 6)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 6)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 6）"
    },
    "uprightKeywords": {
      "en": [
        "Generosity, fair wealth sharing, and karmic prosperity"
      ],
      "my": [
        "ရက်ရောစွာ ပေးကမ်းခြင်း၊ အကူအညီရရှိခြင်းနှင့် သာတူညီမျှ ခံစားရခြင်း"
      ],
      "ja": [
        "寛大さ、富の循環、正当な支援と報酬"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Strings attached, unpaid debts, or one-sided exploitation"
      ],
      "my": [
        "မရိုးသားသော အကူအညီ သို့မဟုတ် တစ်ဖက်သတ် အမြတ်ထုတ်ခံရခြင်း"
      ],
      "ja": [
        "不平等な施し、見返りの要求、借金"
      ]
    },
    "uprightMeaning": {
      "en": "Six of Pentacles: Generosity, fair wealth sharing, and karmic prosperity.",
      "my": "ဒင်္ဂါး ၆ (ပေးကမ်းမျှဝေခြင်းနှင့် အကူအညီရရှိခြင်း): ရက်ရောစွာ ပေးကမ်းခြင်း၊ အကူအညီရရှိခြင်းနှင့် သာတူညီမျှ ခံစားရခြင်း။",
      "ja": "【ペンタクルの6】：寛大さ、富の循環、正当な支援と報酬。"
    },
    "reversedMeaning": {
      "en": "Reversed Six of Pentacles: Strings attached, unpaid debts, or one-sided exploitation.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၆ (ပေးကမ်းမျှဝေခြင်းနှင့် အကူအညီရရှိခြင်း): မရိုးသားသော အကူအညီ သို့မဟုတ် တစ်ဖက်သတ် အမြတ်ထုတ်ခံရခြင်း။",
      "ja": "逆位置【ペンタクルの6】：不平等な施し、見返りの要求、借金。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Six of Pentacles reflects generosity, fair wealth sharing, and karmic prosperity.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၆ (ပေးကမ်းမျှဝေခြင်းနှင့် အကူအညီရရှိခြင်း) သည် ရက်ရောစွာ ပေးကမ်းခြင်း၊ အကူအညီရရှိခြင်းနှင့် သာတူညီမျှ ခံစားရခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、寛大さ、富の循環、正当な支援と報酬が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Six of Pentacles warns of strings attached, unpaid debts, or one-sided exploitation.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၆ (ပေးကမ်းမျှဝေခြင်းနှင့် အကူအညီရရှိခြင်း) သည် မရိုးသားသော အကူအညီ သို့မဟုတ် တစ်ဖက်သတ် အမြတ်ထုတ်ခံရခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、不平等な施し、見返りの要求、借金に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Six of Pentacles brings generosity, fair wealth sharing, and karmic prosperity.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၆ (ပေးကမ်းမျှဝေခြင်းနှင့် အကူအညီရရှိခြင်း) သည် ရက်ရောစွာ ပေးကမ်းခြင်း၊ အကူအညီရရှိခြင်းနှင့် သာတူညီမျှ ခံစားရခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、寛大さ、富の循環、正当な支援と報酬の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of strings attached, unpaid debts, or one-sided exploitation.",
        "my": "အလုပ်အကိုင်တွင် မရိုးသားသော အကူအညီ သို့မဟုတ် တစ်ဖက်သတ် အမြတ်ထုတ်ခံရခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、不平等な施し、見返りの要求、借金による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace generosity, fair wealth sharing, and karmic prosperity.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရက်ရောစွာ ပေးကမ်းခြင်း၊ အကူအညီရရှိခြင်းနှင့် သာတူညီမျှ ခံစားရခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、寛大さ、富の循環、正当な支援と報酬の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform strings attached, unpaid debts, or one-sided exploitation.",
        "my": "ဝိညာဉ်ရေးရာတွင် မရိုးသားသော အကူအညီ သို့မဟုတ် တစ်ဖက်သတ် အမြတ်ထုတ်ခံရခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる不平等な施し、見返りの要求、借金を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from generosity, fair wealth sharing, and karmic prosperity.",
      "my": "ရက်ရောစွာ ပေးကမ်းခြင်း၊ အကူအညီရရှိခြင်းနှင့် သာတူညီမျှ ခံစားရခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "寛大さ、富の循環、正当な支援と報酬の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to strings attached, unpaid debts, or one-sided exploitation.",
      "my": "မရိုးသားသော အကူအညီ သို့မဟုတ် တစ်ဖက်သတ် အမြတ်ထုတ်ခံရခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "不平等な施し、見返りの要求、借金に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-7",
    "file": "Pentacles07.png",
    "name": {
      "en": "Seven of Pentacles",
      "my": "ဒင်္ဂါး ၇ (စိုက်ထုတ်ထားသောအပင် ရိတ်သိမ်းရန် စောင့်ဆိုင်းခြင်း)",
      "ja": "ペンタクルの7"
    },
    "number": 7,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 7)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 7)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 7）"
    },
    "uprightKeywords": {
      "en": [
        "Patience, long-term investments bearing fruit"
      ],
      "my": [
        "သည်းခံစောင့်ဆိုင်းခြင်း၊ ရင်းနှီးမြှုပ်နှံမှုများ တဖြည်းဖြည်း အောင်မြင်လာခြင်း"
      ],
      "ja": [
        "忍耐深い育成、長期投資の成果、実りの確認"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Impatience, wasted effort, or poor harvest yield"
      ],
      "my": [
        "စိတ်မရှည်ခြင်း၊ အကျိုးမရှိသောနေရာတွင် အားစိုက်မိခြင်း"
      ],
      "ja": [
        "焦燥感、労力の無駄遣い、方向転換の必要"
      ]
    },
    "uprightMeaning": {
      "en": "Seven of Pentacles: Patience, long-term investments bearing fruit.",
      "my": "ဒင်္ဂါး ၇ (စိုက်ထုတ်ထားသောအပင် ရိတ်သိမ်းရန် စောင့်ဆိုင်းခြင်း): သည်းခံစောင့်ဆိုင်းခြင်း၊ ရင်းနှီးမြှုပ်နှံမှုများ တဖြည်းဖြည်း အောင်မြင်လာခြင်း။",
      "ja": "【ペンタクルの7】：忍耐深い育成、長期投資の成果、実りの確認。"
    },
    "reversedMeaning": {
      "en": "Reversed Seven of Pentacles: Impatience, wasted effort, or poor harvest yield.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၇ (စိုက်ထုတ်ထားသောအပင် ရိတ်သိမ်းရန် စောင့်ဆိုင်းခြင်း): စိတ်မရှည်ခြင်း၊ အကျိုးမရှိသောနေရာတွင် အားစိုက်မိခြင်း။",
      "ja": "逆位置【ペンタクルの7】：焦燥感、労力の無駄遣い、方向転換の必要。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Seven of Pentacles reflects patience, long-term investments bearing fruit.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၇ (စိုက်ထုတ်ထားသောအပင် ရိတ်သိမ်းရန် စောင့်ဆိုင်းခြင်း) သည် သည်းခံစောင့်ဆိုင်းခြင်း၊ ရင်းနှီးမြှုပ်နှံမှုများ တဖြည်းဖြည်း အောင်မြင်လာခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、忍耐深い育成、長期投資の成果、実りの確認が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Seven of Pentacles warns of impatience, wasted effort, or poor harvest yield.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၇ (စိုက်ထုတ်ထားသောအပင် ရိတ်သိမ်းရန် စောင့်ဆိုင်းခြင်း) သည် စိတ်မရှည်ခြင်း၊ အကျိုးမရှိသောနေရာတွင် အားစိုက်မိခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、焦燥感、労力の無駄遣い、方向転換の必要に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Seven of Pentacles brings patience, long-term investments bearing fruit.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၇ (စိုက်ထုတ်ထားသောအပင် ရိတ်သိမ်းရန် စောင့်ဆိုင်းခြင်း) သည် သည်းခံစောင့်ဆိုင်းခြင်း၊ ရင်းနှီးမြှုပ်နှံမှုများ တဖြည်းဖြည်း အောင်မြင်လာခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、忍耐深い育成、長期投資の成果、実りの確認の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of impatience, wasted effort, or poor harvest yield.",
        "my": "အလုပ်အကိုင်တွင် စိတ်မရှည်ခြင်း၊ အကျိုးမရှိသောနေရာတွင် အားစိုက်မိခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、焦燥感、労力の無駄遣い、方向転換の必要による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace patience, long-term investments bearing fruit.",
        "my": "ဝိညာဉ်ရေးရာတွင် သည်းခံစောင့်ဆိုင်းခြင်း၊ ရင်းနှီးမြှုပ်နှံမှုများ တဖြည်းဖြည်း အောင်မြင်လာခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、忍耐深い育成、長期投資の成果、実りの確認の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform impatience, wasted effort, or poor harvest yield.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်မရှည်ခြင်း၊ အကျိုးမရှိသောနေရာတွင် အားစိုက်မိခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる焦燥感、労力の無駄遣い、方向転換の必要を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from patience, long-term investments bearing fruit.",
      "my": "သည်းခံစောင့်ဆိုင်းခြင်း၊ ရင်းနှီးမြှုပ်နှံမှုများ တဖြည်းဖြည်း အောင်မြင်လာခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "忍耐深い育成、長期投資の成果、実りの確認の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to impatience, wasted effort, or poor harvest yield.",
      "my": "စိတ်မရှည်ခြင်း၊ အကျိုးမရှိသောနေရာတွင် အားစိုက်မိခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "焦燥感、労力の無駄遣い、方向転換の必要に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "အချိန်ယူပါက ဖြစ်ပါသည်",
      "ja": "YES（時間をかければ）"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-8",
    "file": "Pentacles08.png",
    "name": {
      "en": "Eight of Pentacles",
      "my": "ဒင်္ဂါး ၈ (ကျွမ်းကျင်မှုအတွက် ကြိုးစားအားထုတ်ခြင်း)",
      "ja": "ペンタクルの8"
    },
    "number": 8,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 8)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 8)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 8）"
    },
    "uprightKeywords": {
      "en": [
        "Mastery through dedication, meticulous skill building"
      ],
      "my": [
        "မိမိအတတ်ပညာကို ဇွဲလုံ့လကြီးစွာ ကြိုးပမ်းသင်ယူလေ့ကျင့်ခြင်း"
      ],
      "ja": [
        "職人気質、地道な修練、技術の向上"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Burnout, repetitive grind, or cutting corners"
      ],
      "my": [
        "ပင်ပန်းနွမ်းနယ်ခြင်း သို့မဟုတ် အရည်အသွေးမပြည့်မီဘဲ ဖြတ်လမ်းလိုက်ခြင်း"
      ],
      "ja": [
        "手抜き、単調な作業への嫌気、燃え尽き"
      ]
    },
    "uprightMeaning": {
      "en": "Eight of Pentacles: Mastery through dedication, meticulous skill building.",
      "my": "ဒင်္ဂါး ၈ (ကျွမ်းကျင်မှုအတွက် ကြိုးစားအားထုတ်ခြင်း): မိမိအတတ်ပညာကို ဇွဲလုံ့လကြီးစွာ ကြိုးပမ်းသင်ယူလေ့ကျင့်ခြင်း။",
      "ja": "【ペンタクルの8】：職人気質、地道な修練、技術の向上。"
    },
    "reversedMeaning": {
      "en": "Reversed Eight of Pentacles: Burnout, repetitive grind, or cutting corners.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၈ (ကျွမ်းကျင်မှုအတွက် ကြိုးစားအားထုတ်ခြင်း): ပင်ပန်းနွမ်းနယ်ခြင်း သို့မဟုတ် အရည်အသွေးမပြည့်မီဘဲ ဖြတ်လမ်းလိုက်ခြင်း။",
      "ja": "逆位置【ペンタクルの8】：手抜き、単調な作業への嫌気、燃え尽き。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Eight of Pentacles reflects mastery through dedication, meticulous skill building.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၈ (ကျွမ်းကျင်မှုအတွက် ကြိုးစားအားထုတ်ခြင်း) သည် မိမိအတတ်ပညာကို ဇွဲလုံ့လကြီးစွာ ကြိုးပမ်းသင်ယူလေ့ကျင့်ခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、職人気質、地道な修練、技術の向上が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Eight of Pentacles warns of burnout, repetitive grind, or cutting corners.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၈ (ကျွမ်းကျင်မှုအတွက် ကြိုးစားအားထုတ်ခြင်း) သည် ပင်ပန်းနွမ်းနယ်ခြင်း သို့မဟုတ် အရည်အသွေးမပြည့်မီဘဲ ဖြတ်လမ်းလိုက်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、手抜き、単調な作業への嫌気、燃え尽きに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Eight of Pentacles brings mastery through dedication, meticulous skill building.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၈ (ကျွမ်းကျင်မှုအတွက် ကြိုးစားအားထုတ်ခြင်း) သည် မိမိအတတ်ပညာကို ဇွဲလုံ့လကြီးစွာ ကြိုးပမ်းသင်ယူလေ့ကျင့်ခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、職人気質、地道な修練、技術の向上の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of burnout, repetitive grind, or cutting corners.",
        "my": "အလုပ်အကိုင်တွင် ပင်ပန်းနွမ်းနယ်ခြင်း သို့မဟုတ် အရည်အသွေးမပြည့်မီဘဲ ဖြတ်လမ်းလိုက်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、手抜き、単調な作業への嫌気、燃え尽きによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace mastery through dedication, meticulous skill building.",
        "my": "ဝိညာဉ်ရေးရာတွင် မိမိအတတ်ပညာကို ဇွဲလုံ့လကြီးစွာ ကြိုးပမ်းသင်ယူလေ့ကျင့်ခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、職人気質、地道な修練、技術の向上の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform burnout, repetitive grind, or cutting corners.",
        "my": "ဝိညာဉ်ရေးရာတွင် ပင်ပန်းနွမ်းနယ်ခြင်း သို့မဟုတ် အရည်အသွေးမပြည့်မီဘဲ ဖြတ်လမ်းလိုက်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる手抜き、単調な作業への嫌気、燃え尽きを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from mastery through dedication, meticulous skill building.",
      "my": "မိမိအတတ်ပညာကို ဇွဲလုံ့လကြီးစွာ ကြိုးပမ်းသင်ယူလေ့ကျင့်ခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "職人気質、地道な修練、技術の向上の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to burnout, repetitive grind, or cutting corners.",
      "my": "ပင်ပန်းနွမ်းနယ်ခြင်း သို့မဟုတ် အရည်အသွေးမပြည့်မီဘဲ ဖြတ်လမ်းလိုက်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "手抜き、単調な作業への嫌気、燃え尽きに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-9",
    "file": "Pentacles09.png",
    "name": {
      "en": "Nine of Pentacles",
      "my": "ဒင်္ဂါး ၉ (ကိုယ်ပိုင်ကြိုးစားမှုဖြင့် ရရှိသော စည်းစိမ်နှင့် လွတ်လပ်မှု)",
      "ja": "ペンタクルの9"
    },
    "number": 9,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 9)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 9)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 9）"
    },
    "uprightKeywords": {
      "en": [
        "Self-reliance, luxury, refinement, and solitary ease"
      ],
      "my": [
        "ကိုယ်ပိုင်စွမ်းရည်ဖြင့် ရရှိသော ကြွယ်ဝမှုနှင့် သက်တောင့်သက်သာ လွတ်လပ်စွာ နေထိုင်ရခြင်း"
      ],
      "ja": [
        "自立した豊かさ、優雅な暮らし、自力で掴んだ成功"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Living beyond means, superficial status, or isolation"
      ],
      "my": [
        "ကြွားဝါရန် အသုံးအဖြုန်းကြီးခြင်း သို့မဟုတ် ချမ်းသာသော်လည်း အထီးကျန်ခြင်း"
      ],
      "ja": [
        "見栄のための浪費、孤独、経済的依存"
      ]
    },
    "uprightMeaning": {
      "en": "Nine of Pentacles: Self-reliance, luxury, refinement, and solitary ease.",
      "my": "ဒင်္ဂါး ၉ (ကိုယ်ပိုင်ကြိုးစားမှုဖြင့် ရရှိသော စည်းစိမ်နှင့် လွတ်လပ်မှု): ကိုယ်ပိုင်စွမ်းရည်ဖြင့် ရရှိသော ကြွယ်ဝမှုနှင့် သက်တောင့်သက်သာ လွတ်လပ်စွာ နေထိုင်ရခြင်း။",
      "ja": "【ペンタクルの9】：自立した豊かさ、優雅な暮らし、自力で掴んだ成功。"
    },
    "reversedMeaning": {
      "en": "Reversed Nine of Pentacles: Living beyond means, superficial status, or isolation.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၉ (ကိုယ်ပိုင်ကြိုးစားမှုဖြင့် ရရှိသော စည်းစိမ်နှင့် လွတ်လပ်မှု): ကြွားဝါရန် အသုံးအဖြုန်းကြီးခြင်း သို့မဟုတ် ချမ်းသာသော်လည်း အထီးကျန်ခြင်း။",
      "ja": "逆位置【ペンタクルの9】：見栄のための浪費、孤独、経済的依存。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Nine of Pentacles reflects self-reliance, luxury, refinement, and solitary ease.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၉ (ကိုယ်ပိုင်ကြိုးစားမှုဖြင့် ရရှိသော စည်းစိမ်နှင့် လွတ်လပ်မှု) သည် ကိုယ်ပိုင်စွမ်းရည်ဖြင့် ရရှိသော ကြွယ်ဝမှုနှင့် သက်တောင့်သက်သာ လွတ်လပ်စွာ နေထိုင်ရခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、自立した豊かさ、優雅な暮らし、自力で掴んだ成功が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Nine of Pentacles warns of living beyond means, superficial status, or isolation.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၉ (ကိုယ်ပိုင်ကြိုးစားမှုဖြင့် ရရှိသော စည်းစိမ်နှင့် လွတ်လပ်မှု) သည် ကြွားဝါရန် အသုံးအဖြုန်းကြီးခြင်း သို့မဟုတ် ချမ်းသာသော်လည်း အထီးကျန်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、見栄のための浪費、孤独、経済的依存に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Nine of Pentacles brings self-reliance, luxury, refinement, and solitary ease.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၉ (ကိုယ်ပိုင်ကြိုးစားမှုဖြင့် ရရှိသော စည်းစိမ်နှင့် လွတ်လပ်မှု) သည် ကိုယ်ပိုင်စွမ်းရည်ဖြင့် ရရှိသော ကြွယ်ဝမှုနှင့် သက်တောင့်သက်သာ လွတ်လပ်စွာ နေထိုင်ရခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、自立した豊かさ、優雅な暮らし、自力で掴んだ成功の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of living beyond means, superficial status, or isolation.",
        "my": "အလုပ်အကိုင်တွင် ကြွားဝါရန် အသုံးအဖြုန်းကြီးခြင်း သို့မဟုတ် ချမ်းသာသော်လည်း အထီးကျန်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、見栄のための浪費、孤独、経済的依存による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace self-reliance, luxury, refinement, and solitary ease.",
        "my": "ဝိညာဉ်ရေးရာတွင် ကိုယ်ပိုင်စွမ်းရည်ဖြင့် ရရှိသော ကြွယ်ဝမှုနှင့် သက်တောင့်သက်သာ လွတ်လပ်စွာ နေထိုင်ရခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、自立した豊かさ、優雅な暮らし、自力で掴んだ成功の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform living beyond means, superficial status, or isolation.",
        "my": "ဝိညာဉ်ရေးရာတွင် ကြွားဝါရန် အသုံးအဖြုန်းကြီးခြင်း သို့မဟုတ် ချမ်းသာသော်လည်း အထီးကျန်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる見栄のための浪費、孤独、経済的依存を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from self-reliance, luxury, refinement, and solitary ease.",
      "my": "ကိုယ်ပိုင်စွမ်းရည်ဖြင့် ရရှိသော ကြွယ်ဝမှုနှင့် သက်တောင့်သက်သာ လွတ်လပ်စွာ နေထိုင်ရခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "自立した豊かさ、優雅な暮らし、自力で掴んだ成功の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to living beyond means, superficial status, or isolation.",
      "my": "ကြွားဝါရန် အသုံးအဖြုန်းကြီးခြင်း သို့မဟုတ် ချမ်းသာသော်လည်း အထီးကျန်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "見栄のための浪費、孤独、経済的依存に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-10",
    "file": "Pentacles10.png",
    "name": {
      "en": "Ten of Pentacles",
      "my": "ဒင်္ဂါး ၁၀ (မျိုးဆက်လက်ဆင့်ကမ်း အမွေအနှစ်နှင့် စည်းစိမ်)",
      "ja": "ペンタクルの10"
    },
    "number": 10,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 10)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 10)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 10）"
    },
    "uprightKeywords": {
      "en": [
        "Generational wealth, enduring family legacy, and empire"
      ],
      "my": [
        "ခိုင်မာသော မျိုးဆက်ဆက် စည်းစိမ်ဥစ္စာနှင့် မိသားစုအမွေအနှစ်"
      ],
      "ja": [
        "確固たる遺産、一族の繁栄、永続的な富の基盤"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Disputes over inheritance or loss of family wealth"
      ],
      "my": [
        "အမွေကိစ္စ အငြင်းပွားခြင်း သို့မဟုတ် မိသားစုစီးပွားပျက်စီးခြင်း"
      ],
      "ja": [
        "遺産争い、伝統の崩壊、短期的な損失"
      ]
    },
    "uprightMeaning": {
      "en": "Ten of Pentacles: Generational wealth, enduring family legacy, and empire.",
      "my": "ဒင်္ဂါး ၁၀ (မျိုးဆက်လက်ဆင့်ကမ်း အမွေအနှစ်နှင့် စည်းစိမ်): ခိုင်မာသော မျိုးဆက်ဆက် စည်းစိမ်ဥစ္စာနှင့် မိသားစုအမွေအနှစ်။",
      "ja": "【ペンタクルの10】：確固たる遺産、一族の繁栄、永続的な富の基盤。"
    },
    "reversedMeaning": {
      "en": "Reversed Ten of Pentacles: Disputes over inheritance or loss of family wealth.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ၁၀ (မျိုးဆက်လက်ဆင့်ကမ်း အမွေအနှစ်နှင့် စည်းစိမ်): အမွေကိစ္စ အငြင်းပွားခြင်း သို့မဟုတ် မိသားစုစီးပွားပျက်စီးခြင်း။",
      "ja": "逆位置【ペンタクルの10】：遺産争い、伝統の崩壊、短期的な損失。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Ten of Pentacles reflects generational wealth, enduring family legacy, and empire.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ၁၀ (မျိုးဆက်လက်ဆင့်ကမ်း အမွေအနှစ်နှင့် စည်းစိမ်) သည် ခိုင်မာသော မျိုးဆက်ဆက် စည်းစိမ်ဥစ္စာနှင့် မိသားစုအမွေအနှစ် ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、確固たる遺産、一族の繁栄、永続的な富の基盤が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Ten of Pentacles warns of disputes over inheritance or loss of family wealth.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ၁၀ (မျိုးဆက်လက်ဆင့်ကမ်း အမွေအနှစ်နှင့် စည်းစိမ်) သည် အမွေကိစ္စ အငြင်းပွားခြင်း သို့မဟုတ် မိသားစုစီးပွားပျက်စီးခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、遺産争い、伝統の崩壊、短期的な損失に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Ten of Pentacles brings generational wealth, enduring family legacy, and empire.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ၁၀ (မျိုးဆက်လက်ဆင့်ကမ်း အမွေအနှစ်နှင့် စည်းစိမ်) သည် ခိုင်မာသော မျိုးဆက်ဆက် စည်းစိမ်ဥစ္စာနှင့် မိသားစုအမွေအနှစ် ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、確固たる遺産、一族の繁栄、永続的な富の基盤の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of disputes over inheritance or loss of family wealth.",
        "my": "အလုပ်အကိုင်တွင် အမွေကိစ္စ အငြင်းပွားခြင်း သို့မဟုတ် မိသားစုစီးပွားပျက်စီးခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、遺産争い、伝統の崩壊、短期的な損失による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace generational wealth, enduring family legacy, and empire.",
        "my": "ဝိညာဉ်ရေးရာတွင် ခိုင်မာသော မျိုးဆက်ဆက် စည်းစိမ်ဥစ္စာနှင့် မိသားစုအမွေအနှစ် ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、確固たる遺産、一族の繁栄、永続的な富の基盤の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform disputes over inheritance or loss of family wealth.",
        "my": "ဝိညာဉ်ရေးရာတွင် အမွေကိစ္စ အငြင်းပွားခြင်း သို့မဟုတ် မိသားစုစီးပွားပျက်စီးခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる遺産争い、伝統の崩壊、短期的な損失を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from generational wealth, enduring family legacy, and empire.",
      "my": "ခိုင်မာသော မျိုးဆက်ဆက် စည်းစိမ်ဥစ္စာနှင့် မိသားစုအမွေအနှစ် ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "確固たる遺産、一族の繁栄、永続的な富の基盤の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to disputes over inheritance or loss of family wealth.",
      "my": "အမွေကိစ္စ အငြင်းပွားခြင်း သို့မဟုတ် မိသားစုစီးပွားပျက်စီးခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "遺産争い、伝統の崩壊、短期的な損失に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-11",
    "file": "Pentacles11.png",
    "name": {
      "en": "Page of Pentacles",
      "my": "ဒင်္ဂါး စာပို့လုလင် (လက်တွေ့ကျသော သင်ယူသူ)",
      "ja": "ペンタクルのペイジ"
    },
    "number": 11,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 11)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 11)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 11）"
    },
    "uprightKeywords": {
      "en": [
        "Grounded student, practical ambitions, financial seed"
      ],
      "my": [
        "ရည်မှန်းချက်ကြီးသော တပည့်၊ ငွေကြေးအခွင့်အလမ်းသစ်များ"
      ],
      "ja": [
        "勤勉な学徒、現実的な目標、好機の種"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Procrastination, lack of progress, unrealistic ideas"
      ],
      "my": [
        "အချိန်ဆွဲနေခြင်း၊ လက်တွေ့မကျသော စိတ်ကူးများ"
      ],
      "ja": [
        "怠慢、計画性の欠如、未実行の夢"
      ]
    },
    "uprightMeaning": {
      "en": "Page of Pentacles: Grounded student, practical ambitions, financial seed.",
      "my": "ဒင်္ဂါး စာပို့လုလင် (လက်တွေ့ကျသော သင်ယူသူ): ရည်မှန်းချက်ကြီးသော တပည့်၊ ငွေကြေးအခွင့်အလမ်းသစ်များ။",
      "ja": "【ペンタクルのペイジ】：勤勉な学徒、現実的な目標、好機の種。"
    },
    "reversedMeaning": {
      "en": "Reversed Page of Pentacles: Procrastination, lack of progress, unrealistic ideas.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး စာပို့လုလင် (လက်တွေ့ကျသော သင်ယူသူ): အချိန်ဆွဲနေခြင်း၊ လက်တွေ့မကျသော စိတ်ကူးများ။",
      "ja": "逆位置【ペンタクルのペイジ】：怠慢、計画性の欠如、未実行の夢。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Page of Pentacles reflects grounded student, practical ambitions, financial seed.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး စာပို့လုလင် (လက်တွေ့ကျသော သင်ယူသူ) သည် ရည်မှန်းချက်ကြီးသော တပည့်၊ ငွေကြေးအခွင့်အလမ်းသစ်များ ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、勤勉な学徒、現実的な目標、好機の種が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Page of Pentacles warns of procrastination, lack of progress, unrealistic ideas.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး စာပို့လုလင် (လက်တွေ့ကျသော သင်ယူသူ) သည် အချိန်ဆွဲနေခြင်း၊ လက်တွေ့မကျသော စိတ်ကူးများ ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、怠慢、計画性の欠如、未実行の夢に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Page of Pentacles brings grounded student, practical ambitions, financial seed.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး စာပို့လုလင် (လက်တွေ့ကျသော သင်ယူသူ) သည် ရည်မှန်းချက်ကြီးသော တပည့်၊ ငွေကြေးအခွင့်အလမ်းသစ်များ ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、勤勉な学徒、現実的な目標、好機の種の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of procrastination, lack of progress, unrealistic ideas.",
        "my": "အလုပ်အကိုင်တွင် အချိန်ဆွဲနေခြင်း၊ လက်တွေ့မကျသော စိတ်ကူးများ ကို သတိပြုပါ။",
        "ja": "仕事面において、怠慢、計画性の欠如、未実行の夢による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace grounded student, practical ambitions, financial seed.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရည်မှန်းချက်ကြီးသော တပည့်၊ ငွေကြေးအခွင့်အလမ်းသစ်များ ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、勤勉な学徒、現実的な目標、好機の種の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform procrastination, lack of progress, unrealistic ideas.",
        "my": "ဝိညာဉ်ရေးရာတွင် အချိန်ဆွဲနေခြင်း၊ လက်တွေ့မကျသော စိတ်ကူးများ ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる怠慢、計画性の欠如、未実行の夢を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from grounded student, practical ambitions, financial seed.",
      "my": "ရည်မှန်းချက်ကြီးသော တပည့်၊ ငွေကြေးအခွင့်အလမ်းသစ်များ ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "勤勉な学徒、現実的な目標、好機の種の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to procrastination, lack of progress, unrealistic ideas.",
      "my": "အချိန်ဆွဲနေခြင်း၊ လက်တွေ့မကျသော စိတ်ကူးများ ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "怠慢、計画性の欠如、未実行の夢に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-12",
    "file": "Pentacles12.png",
    "name": {
      "en": "Knight of Pentacles",
      "my": "ဒင်္ဂါး မြင်းစီးသူရဲကောင်း (စိတ်အချရဆုံး လုပ်ဆောင်သူ)",
      "ja": "ペンタクルのナイト"
    },
    "number": 12,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 12)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 12)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 12）"
    },
    "uprightKeywords": {
      "en": [
        "Methodical progress, relentless reliability, and hard work"
      ],
      "my": [
        "စနစ်တကျ ဖြည်းဖြည်းနှင့်မှန်မှန် ကြိုးစားလုပ်ဆောင်သူ"
      ],
      "ja": [
        "着実な前進、絶対の信頼性、不屈の粘り強さ"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Stubborn rigidity, workaholism, or complete stagnation"
      ],
      "my": [
        "ခေါင်းမာလွန်းခြင်း သို့မဟုတ် တိုးတက်မှုမရှိဘဲ ရပ်တန့်နေခြင်း"
      ],
      "ja": [
        "頑固、過度な慎重さによる機会損失、停滞"
      ]
    },
    "uprightMeaning": {
      "en": "Knight of Pentacles: Methodical progress, relentless reliability, and hard work.",
      "my": "ဒင်္ဂါး မြင်းစီးသူရဲကောင်း (စိတ်အချရဆုံး လုပ်ဆောင်သူ): စနစ်တကျ ဖြည်းဖြည်းနှင့်မှန်မှန် ကြိုးစားလုပ်ဆောင်သူ။",
      "ja": "【ペンタクルのナイト】：着実な前進、絶対の信頼性、不屈の粘り強さ。"
    },
    "reversedMeaning": {
      "en": "Reversed Knight of Pentacles: Stubborn rigidity, workaholism, or complete stagnation.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး မြင်းစီးသူရဲကောင်း (စိတ်အချရဆုံး လုပ်ဆောင်သူ): ခေါင်းမာလွန်းခြင်း သို့မဟုတ် တိုးတက်မှုမရှိဘဲ ရပ်တန့်နေခြင်း။",
      "ja": "逆位置【ペンタクルのナイト】：頑固、過度な慎重さによる機会損失、停滞。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Knight of Pentacles reflects methodical progress, relentless reliability, and hard work.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး မြင်းစီးသူရဲကောင်း (စိတ်အချရဆုံး လုပ်ဆောင်သူ) သည် စနစ်တကျ ဖြည်းဖြည်းနှင့်မှန်မှန် ကြိုးစားလုပ်ဆောင်သူ ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、着実な前進、絶対の信頼性、不屈の粘り強さが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Knight of Pentacles warns of stubborn rigidity, workaholism, or complete stagnation.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး မြင်းစီးသူရဲကောင်း (စိတ်အချရဆုံး လုပ်ဆောင်သူ) သည် ခေါင်းမာလွန်းခြင်း သို့မဟုတ် တိုးတက်မှုမရှိဘဲ ရပ်တန့်နေခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、頑固、過度な慎重さによる機会損失、停滞に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Knight of Pentacles brings methodical progress, relentless reliability, and hard work.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး မြင်းစီးသူရဲကောင်း (စိတ်အချရဆုံး လုပ်ဆောင်သူ) သည် စနစ်တကျ ဖြည်းဖြည်းနှင့်မှန်မှန် ကြိုးစားလုပ်ဆောင်သူ ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、着実な前進、絶対の信頼性、不屈の粘り強さの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of stubborn rigidity, workaholism, or complete stagnation.",
        "my": "အလုပ်အကိုင်တွင် ခေါင်းမာလွန်းခြင်း သို့မဟုတ် တိုးတက်မှုမရှိဘဲ ရပ်တန့်နေခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、頑固、過度な慎重さによる機会損失、停滞による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace methodical progress, relentless reliability, and hard work.",
        "my": "ဝိညာဉ်ရေးရာတွင် စနစ်တကျ ဖြည်းဖြည်းနှင့်မှန်မှန် ကြိုးစားလုပ်ဆောင်သူ ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、着実な前進、絶対の信頼性、不屈の粘り強さの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform stubborn rigidity, workaholism, or complete stagnation.",
        "my": "ဝိညာဉ်ရေးရာတွင် ခေါင်းမာလွန်းခြင်း သို့မဟုတ် တိုးတက်မှုမရှိဘဲ ရပ်တန့်နေခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる頑固、過度な慎重さによる機会損失、停滞を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from methodical progress, relentless reliability, and hard work.",
      "my": "စနစ်တကျ ဖြည်းဖြည်းနှင့်မှန်မှန် ကြိုးစားလုပ်ဆောင်သူ ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "着実な前進、絶対の信頼性、不屈の粘り強さの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to stubborn rigidity, workaholism, or complete stagnation.",
      "my": "ခေါင်းမာလွန်းခြင်း သို့မဟုတ် တိုးတက်မှုမရှိဘဲ ရပ်တန့်နေခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "頑固、過度な慎重さによる機会損失、停滞に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-13",
    "file": "Pentacles13.png",
    "name": {
      "en": "Queen of Pentacles",
      "my": "ဒင်္ဂါး မိဖုရား (လက်တွေ့ကျသော ကြွယ်ဝမှုရှင်)",
      "ja": "ペンタクルのクイーン"
    },
    "number": 13,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 13)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 13)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 13）"
    },
    "uprightKeywords": {
      "en": [
        "Down-to-earth abundance, nurturing provider, and luxury"
      ],
      "my": [
        "လက်တွေ့ကျသော စည်းစိမ်ဥစ္စာ၊ မိသားစုကို စောင့်ရှောက်သော မိခင်စွမ်းအင်"
      ],
      "ja": [
        "地に足のついた豊かさ、母性的な守護、実利的な知恵"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Neglecting home, obsession with material status"
      ],
      "my": [
        "ရုပ်ဝတ္ထုကိုသာ အလွန်အမင်း မက်မောခြင်း သို့မဟုတ် ကျန်းမာရေးချို့ယွင်းခြင်း"
      ],
      "ja": [
        "過度な物質主義、家庭の軽視、不健康"
      ]
    },
    "uprightMeaning": {
      "en": "Queen of Pentacles: Down-to-earth abundance, nurturing provider, and luxury.",
      "my": "ဒင်္ဂါး မိဖုရား (လက်တွေ့ကျသော ကြွယ်ဝမှုရှင်): လက်တွေ့ကျသော စည်းစိမ်ဥစ္စာ၊ မိသားစုကို စောင့်ရှောက်သော မိခင်စွမ်းအင်။",
      "ja": "【ペンタクルのクイーン】：地に足のついた豊かさ、母性的な守護、実利的な知恵。"
    },
    "reversedMeaning": {
      "en": "Reversed Queen of Pentacles: Neglecting home, obsession with material status.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး မိဖုရား (လက်တွေ့ကျသော ကြွယ်ဝမှုရှင်): ရုပ်ဝတ္ထုကိုသာ အလွန်အမင်း မက်မောခြင်း သို့မဟုတ် ကျန်းမာရေးချို့ယွင်းခြင်း။",
      "ja": "逆位置【ペンタクルのクイーン】：過度な物質主義、家庭の軽視、不健康。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Queen of Pentacles reflects down-to-earth abundance, nurturing provider, and luxury.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး မိဖုရား (လက်တွေ့ကျသော ကြွယ်ဝမှုရှင်) သည် လက်တွေ့ကျသော စည်းစိမ်ဥစ္စာ၊ မိသားစုကို စောင့်ရှောက်သော မိခင်စွမ်းအင် ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、地に足のついた豊かさ、母性的な守護、実利的な知恵が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Queen of Pentacles warns of neglecting home, obsession with material status.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး မိဖုရား (လက်တွေ့ကျသော ကြွယ်ဝမှုရှင်) သည် ရုပ်ဝတ္ထုကိုသာ အလွန်အမင်း မက်မောခြင်း သို့မဟုတ် ကျန်းမာရေးချို့ယွင်းခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、過度な物質主義、家庭の軽視、不健康に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Queen of Pentacles brings down-to-earth abundance, nurturing provider, and luxury.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး မိဖုရား (လက်တွေ့ကျသော ကြွယ်ဝမှုရှင်) သည် လက်တွေ့ကျသော စည်းစိမ်ဥစ္စာ၊ မိသားစုကို စောင့်ရှောက်သော မိခင်စွမ်းအင် ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、地に足のついた豊かさ、母性的な守護、実利的な知恵の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of neglecting home, obsession with material status.",
        "my": "အလုပ်အကိုင်တွင် ရုပ်ဝတ္ထုကိုသာ အလွန်အမင်း မက်မောခြင်း သို့မဟုတ် ကျန်းမာရေးချို့ယွင်းခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、過度な物質主義、家庭の軽視、不健康による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace down-to-earth abundance, nurturing provider, and luxury.",
        "my": "ဝိညာဉ်ရေးရာတွင် လက်တွေ့ကျသော စည်းစိမ်ဥစ္စာ၊ မိသားစုကို စောင့်ရှောက်သော မိခင်စွမ်းအင် ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、地に足のついた豊かさ、母性的な守護、実利的な知恵の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform neglecting home, obsession with material status.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရုပ်ဝတ္ထုကိုသာ အလွန်အမင်း မက်မောခြင်း သို့မဟုတ် ကျန်းမာရေးချို့ယွင်းခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる過度な物質主義、家庭の軽視、不健康を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from down-to-earth abundance, nurturing provider, and luxury.",
      "my": "လက်တွေ့ကျသော စည်းစိမ်ဥစ္စာ၊ မိသားစုကို စောင့်ရှောက်သော မိခင်စွမ်းအင် ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "地に足のついた豊かさ、母性的な守護、実利的な知恵の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to neglecting home, obsession with material status.",
      "my": "ရုပ်ဝတ္ထုကိုသာ အလွန်အမင်း မက်မောခြင်း သို့မဟုတ် ကျန်းမာရေးချို့ယွင်းခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "過度な物質主義、家庭の軽視、不健康に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "pentacles-14",
    "file": "Pentacles14.png",
    "name": {
      "en": "King of Pentacles",
      "my": "ဒင်္ဂါး ဘုရင် (စီးပွားရေးနှင့် စည်းစိမ်၏ ဧကရာဇ်)",
      "ja": "ペンタクルのキング"
    },
    "number": 14,
    "arcana": "minor",
    "suit": "pentacles",
    "element": "Earth",
    "astrology": {
      "en": "money, work, health, and the material world (Rank 14)",
      "my": "ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက (အဆင့် 14)",
      "ja": "金銭、仕事、健康、そして現実世界の基盤（数秘 14）"
    },
    "uprightKeywords": {
      "en": [
        "Master financier, unshakeable stability, and empire ruler"
      ],
      "my": [
        "စီးပွားရေး အောင်မြင်မှု၏ အထွတ်အထိပ်၊ မယိမ်းယိုင်သော တည်ငြိမ်မှု"
      ],
      "ja": [
        "富の最高統率者、堅固な成功、ビジネスの覇者"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Greed, financial corruption, or ruthless materialism"
      ],
      "my": [
        "လောဘကြီးလွန်းခြင်း သို့မဟုတ် ငွေကြေးအတွက် မသမာမှုပြုလုပ်ခြင်း"
      ],
      "ja": [
        "強欲、拝金主義、独断的な経営"
      ]
    },
    "uprightMeaning": {
      "en": "King of Pentacles: Master financier, unshakeable stability, and empire ruler.",
      "my": "ဒင်္ဂါး ဘုရင် (စီးပွားရေးနှင့် စည်းစိမ်၏ ဧကရာဇ်): စီးပွားရေး အောင်မြင်မှု၏ အထွတ်အထိပ်၊ မယိမ်းယိုင်သော တည်ငြိမ်မှု။",
      "ja": "【ペンタクルのキング】：富の最高統率者、堅固な成功、ビジネスの覇者。"
    },
    "reversedMeaning": {
      "en": "Reversed King of Pentacles: Greed, financial corruption, or ruthless materialism.",
      "my": "ပြောင်းပြန် ဒင်္ဂါး ဘုရင် (စီးပွားရေးနှင့် စည်းစိမ်၏ ဧကရာဇ်): လောဘကြီးလွန်းခြင်း သို့မဟုတ် ငွေကြေးအတွက် မသမာမှုပြုလုပ်ခြင်း။",
      "ja": "逆位置【ペンタクルのキング】：強欲、拝金主義、独断的な経営。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, King of Pentacles reflects master financier, unshakeable stability, and empire ruler.",
        "my": "အချစ်ရေးတွင် ဒင်္ဂါး ဘုရင် (စီးပွားရေးနှင့် စည်းစိမ်၏ ဧကရာဇ်) သည် စီးပွားရေး အောင်မြင်မှု၏ အထွတ်အထိပ်၊ မယိမ်းယိုင်သော တည်ငြိမ်မှု ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、富の最高統率者、堅固な成功、ビジネスの覇者が示されています。"
      },
      "reversed": {
        "en": "In love, reversed King of Pentacles warns of greed, financial corruption, or ruthless materialism.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဒင်္ဂါး ဘုရင် (စီးပွားရေးနှင့် စည်းစိမ်၏ ဧကရာဇ်) သည် လောဘကြီးလွန်းခြင်း သို့မဟုတ် ငွေကြေးအတွက် မသမာမှုပြုလုပ်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、強欲、拝金主義、独断的な経営に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, King of Pentacles brings master financier, unshakeable stability, and empire ruler.",
        "my": "အလုပ်အကိုင်တွင် ဒင်္ဂါး ဘုရင် (စီးပွားရေးနှင့် စည်းစိမ်၏ ဧကရာဇ်) သည် စီးပွားရေး အောင်မြင်မှု၏ အထွတ်အထိပ်၊ မယိမ်းယိုင်သော တည်ငြိမ်မှု ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、富の最高統率者、堅固な成功、ビジネスの覇者の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of greed, financial corruption, or ruthless materialism.",
        "my": "အလုပ်အကိုင်တွင် လောဘကြီးလွန်းခြင်း သို့မဟုတ် ငွေကြေးအတွက် မသမာမှုပြုလုပ်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、強欲、拝金主義、独断的な経営による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace master financier, unshakeable stability, and empire ruler.",
        "my": "ဝိညာဉ်ရေးရာတွင် စီးပွားရေး အောင်မြင်မှု၏ အထွတ်အထိပ်၊ မယိမ်းယိုင်သော တည်ငြိမ်မှု ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、富の最高統率者、堅固な成功、ビジネスの覇者の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform greed, financial corruption, or ruthless materialism.",
        "my": "ဝိညာဉ်ရေးရာတွင် လောဘကြီးလွန်းခြင်း သို့မဟုတ် ငွေကြေးအတွက် မသမာမှုပြုလုပ်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる強欲、拝金主義、独断的な経営を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from master financier, unshakeable stability, and empire ruler.",
      "my": "စီးပွားရေး အောင်မြင်မှု၏ အထွတ်အထိပ်၊ မယိမ်းယိုင်သော တည်ငြိမ်မှု ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "富の最高統率者、堅固な成功、ビジネスの覇者の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to greed, financial corruption, or ruthless materialism.",
      "my": "လောဘကြီးလွန်းခြင်း သို့မဟုတ် ငွေကြေးအတွက် မသမာမှုပြုလုပ်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "強欲、拝金主義、独断的な経営に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Pentacles",
        "Element: Earth"
      ],
      "my": [
        "ဒင်္ဂါး (မြေဓာတ်)",
        "ဓာတ်ကြီး: Earth"
      ],
      "ja": [
        "ペンタクル（金貨・地）",
        "エレメント：Earth"
      ]
    }
  },
  {
    "id": "swords-1",
    "file": "Swords01.png",
    "name": {
      "en": "Ace of Swords",
      "my": "ဓား ၁ (အသိဉာဏ်အလင်းနှင့် အမှန်တရား)",
      "ja": "ソードのエース"
    },
    "number": 1,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 1)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 1)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 1）"
    },
    "uprightKeywords": {
      "en": [
        "Mental breakthrough, raw truth, and razor clarity"
      ],
      "my": [
        "စိတ်အသိဉာဏ် ပွင့်လင်းလာခြင်း၊ ရှင်းလင်းပြတ်သားသော အမှန်တရား"
      ],
      "ja": [
        "知性の突破口、絶対的な真実、曇りなき明晰さ"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Confusion, weaponized words, or clouded judgment"
      ],
      "my": [
        "စိတ်ရှုပ်ထွေးခြင်း၊ စကားလုံးများဖြင့် အခြားသူကို နာကျင်စေခြင်း"
      ],
      "ja": [
        "思考の混乱、言葉の刃、誤った判断"
      ]
    },
    "uprightMeaning": {
      "en": "Ace of Swords: Mental breakthrough, raw truth, and razor clarity.",
      "my": "ဓား ၁ (အသိဉာဏ်အလင်းနှင့် အမှန်တရား): စိတ်အသိဉာဏ် ပွင့်လင်းလာခြင်း၊ ရှင်းလင်းပြတ်သားသော အမှန်တရား။",
      "ja": "【ソードのエース】：知性の突破口、絶対的な真実、曇りなき明晰さ。"
    },
    "reversedMeaning": {
      "en": "Reversed Ace of Swords: Confusion, weaponized words, or clouded judgment.",
      "my": "ပြောင်းပြန် ဓား ၁ (အသိဉာဏ်အလင်းနှင့် အမှန်တရား): စိတ်ရှုပ်ထွေးခြင်း၊ စကားလုံးများဖြင့် အခြားသူကို နာကျင်စေခြင်း။",
      "ja": "逆位置【ソードのエース】：思考の混乱、言葉の刃、誤った判断。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Ace of Swords reflects mental breakthrough, raw truth, and razor clarity.",
        "my": "အချစ်ရေးတွင် ဓား ၁ (အသိဉာဏ်အလင်းနှင့် အမှန်တရား) သည် စိတ်အသိဉာဏ် ပွင့်လင်းလာခြင်း၊ ရှင်းလင်းပြတ်သားသော အမှန်တရား ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、知性の突破口、絶対的な真実、曇りなき明晰さが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Ace of Swords warns of confusion, weaponized words, or clouded judgment.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၁ (အသိဉာဏ်အလင်းနှင့် အမှန်တရား) သည် စိတ်ရှုပ်ထွေးခြင်း၊ စကားလုံးများဖြင့် အခြားသူကို နာကျင်စေခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、思考の混乱、言葉の刃、誤った判断に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Ace of Swords brings mental breakthrough, raw truth, and razor clarity.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၁ (အသိဉာဏ်အလင်းနှင့် အမှန်တရား) သည် စိတ်အသိဉာဏ် ပွင့်လင်းလာခြင်း၊ ရှင်းလင်းပြတ်သားသော အမှန်တရား ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、知性の突破口、絶対的な真実、曇りなき明晰さの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of confusion, weaponized words, or clouded judgment.",
        "my": "အလုပ်အကိုင်တွင် စိတ်ရှုပ်ထွေးခြင်း၊ စကားလုံးများဖြင့် အခြားသူကို နာကျင်စေခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、思考の混乱、言葉の刃、誤った判断による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace mental breakthrough, raw truth, and razor clarity.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်အသိဉာဏ် ပွင့်လင်းလာခြင်း၊ ရှင်းလင်းပြတ်သားသော အမှန်တရား ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、知性の突破口、絶対的な真実、曇りなき明晰さの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform confusion, weaponized words, or clouded judgment.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်ရှုပ်ထွေးခြင်း၊ စကားလုံးများဖြင့် အခြားသူကို နာကျင်စေခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる思考の混乱、言葉の刃、誤った判断を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from mental breakthrough, raw truth, and razor clarity.",
      "my": "စိတ်အသိဉာဏ် ပွင့်လင်းလာခြင်း၊ ရှင်းလင်းပြတ်သားသော အမှန်တရား ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "知性の突破口、絶対的な真実、曇りなき明晰さの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to confusion, weaponized words, or clouded judgment.",
      "my": "စိတ်ရှုပ်ထွေးခြင်း၊ စကားလုံးများဖြင့် အခြားသူကို နာကျင်စေခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "思考の混乱、言葉の刃、誤った判断に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-2",
    "file": "Swords02.png",
    "name": {
      "en": "Two of Swords",
      "my": "ဓား ၂ (မျက်စိမှိတ် ဆုံးဖြတ်ရခက်နေခြင်း)",
      "ja": "ソードの2"
    },
    "number": 2,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 2)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 2)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 2）"
    },
    "uprightKeywords": {
      "en": [
        "Stalemate, difficult choice, and blocked emotions"
      ],
      "my": [
        "ရွေးချယ်ရခက်နေခြင်း၊ အမှန်တရားကို ရင်ဆိုင်ရန် တွန့်ဆုတ်နေခြင်း"
      ],
      "ja": [
        "膠着状態、苦渋の決断、感情の遮断"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Blindfold removed, truth faced, stalemate broken"
      ],
      "my": [
        "မျက်စိပွင့်သွားခြင်း၊ အမှန်တရားကို ရဲဝံ့စွာ ရင်ဆိုင်ဆုံးဖြတ်ခြင်း"
      ],
      "ja": [
        "目隠しが外れる時、決着、真実との対峙"
      ]
    },
    "uprightMeaning": {
      "en": "Two of Swords: Stalemate, difficult choice, and blocked emotions.",
      "my": "ဓား ၂ (မျက်စိမှိတ် ဆုံးဖြတ်ရခက်နေခြင်း): ရွေးချယ်ရခက်နေခြင်း၊ အမှန်တရားကို ရင်ဆိုင်ရန် တွန့်ဆုတ်နေခြင်း။",
      "ja": "【ソードの2】：膠着状態、苦渋の決断、感情の遮断。"
    },
    "reversedMeaning": {
      "en": "Reversed Two of Swords: Blindfold removed, truth faced, stalemate broken.",
      "my": "ပြောင်းပြန် ဓား ၂ (မျက်စိမှိတ် ဆုံးဖြတ်ရခက်နေခြင်း): မျက်စိပွင့်သွားခြင်း၊ အမှန်တရားကို ရဲဝံ့စွာ ရင်ဆိုင်ဆုံးဖြတ်ခြင်း။",
      "ja": "逆位置【ソードの2】：目隠しが外れる時、決着、真実との対峙。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Two of Swords reflects stalemate, difficult choice, and blocked emotions.",
        "my": "အချစ်ရေးတွင် ဓား ၂ (မျက်စိမှိတ် ဆုံးဖြတ်ရခက်နေခြင်း) သည် ရွေးချယ်ရခက်နေခြင်း၊ အမှန်တရားကို ရင်ဆိုင်ရန် တွန့်ဆုတ်နေခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、膠着状態、苦渋の決断、感情の遮断が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Two of Swords warns of blindfold removed, truth faced, stalemate broken.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၂ (မျက်စိမှိတ် ဆုံးဖြတ်ရခက်နေခြင်း) သည် မျက်စိပွင့်သွားခြင်း၊ အမှန်တရားကို ရဲဝံ့စွာ ရင်ဆိုင်ဆုံးဖြတ်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、目隠しが外れる時、決着、真実との対峙に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Two of Swords brings stalemate, difficult choice, and blocked emotions.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၂ (မျက်စိမှိတ် ဆုံးဖြတ်ရခက်နေခြင်း) သည် ရွေးချယ်ရခက်နေခြင်း၊ အမှန်တရားကို ရင်ဆိုင်ရန် တွန့်ဆုတ်နေခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、膠着状態、苦渋の決断、感情の遮断の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of blindfold removed, truth faced, stalemate broken.",
        "my": "အလုပ်အကိုင်တွင် မျက်စိပွင့်သွားခြင်း၊ အမှန်တရားကို ရဲဝံ့စွာ ရင်ဆိုင်ဆုံးဖြတ်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、目隠しが外れる時、決着、真実との対峙による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace stalemate, difficult choice, and blocked emotions.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရွေးချယ်ရခက်နေခြင်း၊ အမှန်တရားကို ရင်ဆိုင်ရန် တွန့်ဆုတ်နေခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、膠着状態、苦渋の決断、感情の遮断の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform blindfold removed, truth faced, stalemate broken.",
        "my": "ဝိညာဉ်ရေးရာတွင် မျက်စိပွင့်သွားခြင်း၊ အမှန်တရားကို ရဲဝံ့စွာ ရင်ဆိုင်ဆုံးဖြတ်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる目隠しが外れる時、決着、真実との対峙を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from stalemate, difficult choice, and blocked emotions.",
      "my": "ရွေးချယ်ရခက်နေခြင်း၊ အမှန်တရားကို ရင်ဆိုင်ရန် တွန့်ဆုတ်နေခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "膠着状態、苦渋の決断、感情の遮断の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to blindfold removed, truth faced, stalemate broken.",
      "my": "မျက်စိပွင့်သွားခြင်း၊ အမှန်တရားကို ရဲဝံ့စွာ ရင်ဆိုင်ဆုံးဖြတ်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "目隠しが外れる時、決着、真実との対峙に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Neutral / Unclear",
      "my": "ဆုံးဖြတ်ချက်ချရန် လိုအပ်သည်",
      "ja": "中立（決断待ち）"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-3",
    "file": "Swords03.png",
    "name": {
      "en": "Three of Swords",
      "my": "ဓား ၃ (နှလုံးသား နာကျင်ကြေကွဲရခြင်း)",
      "ja": "ソードの3"
    },
    "number": 3,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 3)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 3)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 3）"
    },
    "uprightKeywords": {
      "en": [
        "Heartbreak, sorrow, and painful truth piercing through"
      ],
      "my": [
        "နှလုံးသား နာကျင်ရခြင်း၊ သစ္စာဖောက်ခံရခြင်း သို့မဟုတ် ဝမ်းနည်းကြေကွဲမှု"
      ],
      "ja": [
        "痛切な悲しみ、失恋、受け入れがたい真実"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Healing heartbreak, releasing grief, and recovery"
      ],
      "my": [
        "အသည်းကွဲဒဏ်ရာများ အနာကျက်လာခြင်း၊ ဝမ်းနည်းမှုကို ကျော်လွှားနိုင်ခြင်း"
      ],
      "ja": [
        "心の回復、痛みの解放、癒やしの訪れ"
      ]
    },
    "uprightMeaning": {
      "en": "Three of Swords: Heartbreak, sorrow, and painful truth piercing through.",
      "my": "ဓား ၃ (နှလုံးသား နာကျင်ကြေကွဲရခြင်း): နှလုံးသား နာကျင်ရခြင်း၊ သစ္စာဖောက်ခံရခြင်း သို့မဟုတ် ဝမ်းနည်းကြေကွဲမှု။",
      "ja": "【ソードの3】：痛切な悲しみ、失恋、受け入れがたい真実。"
    },
    "reversedMeaning": {
      "en": "Reversed Three of Swords: Healing heartbreak, releasing grief, and recovery.",
      "my": "ပြောင်းပြန် ဓား ၃ (နှလုံးသား နာကျင်ကြေကွဲရခြင်း): အသည်းကွဲဒဏ်ရာများ အနာကျက်လာခြင်း၊ ဝမ်းနည်းမှုကို ကျော်လွှားနိုင်ခြင်း။",
      "ja": "逆位置【ソードの3】：心の回復、痛みの解放、癒やしの訪れ。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Three of Swords reflects heartbreak, sorrow, and painful truth piercing through.",
        "my": "အချစ်ရေးတွင် ဓား ၃ (နှလုံးသား နာကျင်ကြေကွဲရခြင်း) သည် နှလုံးသား နာကျင်ရခြင်း၊ သစ္စာဖောက်ခံရခြင်း သို့မဟုတ် ဝမ်းနည်းကြေကွဲမှု ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、痛切な悲しみ、失恋、受け入れがたい真実が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Three of Swords warns of healing heartbreak, releasing grief, and recovery.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၃ (နှလုံးသား နာကျင်ကြေကွဲရခြင်း) သည် အသည်းကွဲဒဏ်ရာများ အနာကျက်လာခြင်း၊ ဝမ်းနည်းမှုကို ကျော်လွှားနိုင်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、心の回復、痛みの解放、癒やしの訪れに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Three of Swords brings heartbreak, sorrow, and painful truth piercing through.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၃ (နှလုံးသား နာကျင်ကြေကွဲရခြင်း) သည် နှလုံးသား နာကျင်ရခြင်း၊ သစ္စာဖောက်ခံရခြင်း သို့မဟုတ် ဝမ်းနည်းကြေကွဲမှု ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、痛切な悲しみ、失恋、受け入れがたい真実の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of healing heartbreak, releasing grief, and recovery.",
        "my": "အလုပ်အကိုင်တွင် အသည်းကွဲဒဏ်ရာများ အနာကျက်လာခြင်း၊ ဝမ်းနည်းမှုကို ကျော်လွှားနိုင်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、心の回復、痛みの解放、癒やしの訪れによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace heartbreak, sorrow, and painful truth piercing through.",
        "my": "ဝိညာဉ်ရေးရာတွင် နှလုံးသား နာကျင်ရခြင်း၊ သစ္စာဖောက်ခံရခြင်း သို့မဟုတ် ဝမ်းနည်းကြေကွဲမှု ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、痛切な悲しみ、失恋、受け入れがたい真実の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform healing heartbreak, releasing grief, and recovery.",
        "my": "ဝိညာဉ်ရေးရာတွင် အသည်းကွဲဒဏ်ရာများ အနာကျက်လာခြင်း၊ ဝမ်းနည်းမှုကို ကျော်လွှားနိုင်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる心の回復、痛みの解放、癒やしの訪れを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from heartbreak, sorrow, and painful truth piercing through.",
      "my": "နှလုံးသား နာကျင်ရခြင်း၊ သစ္စာဖောက်ခံရခြင်း သို့မဟုတ် ဝမ်းနည်းကြေကွဲမှု ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "痛切な悲しみ、失恋、受け入れがたい真実の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to healing heartbreak, releasing grief, and recovery.",
      "my": "အသည်းကွဲဒဏ်ရာများ အနာကျက်လာခြင်း၊ ဝမ်းနည်းမှုကို ကျော်လွှားနိုင်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "心の回復、痛みの解放、癒やしの訪れに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (နာကျင်မှုရှိသည်)",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-4",
    "file": "Swords04.png",
    "name": {
      "en": "Four of Swords",
      "my": "ဓား ၄ (စိတ်အနားယူခြင်းနှင့် ဆိတ်ငြိမ်မှု)",
      "ja": "ソードの4"
    },
    "number": 4,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 4)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 4)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 4）"
    },
    "uprightKeywords": {
      "en": [
        "Rest, sanctuary, meditation, and mental rejuvenation"
      ],
      "my": [
        "စိတ်အေးချမ်းစွာ အနားယူခြင်း၊ တရားရှုမှတ်ခြင်းနှင့် အားမွေးခြင်း"
      ],
      "ja": [
        "休息、祈り、精神の回復、静寂の避難所"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Burnout, restlessness, or forced exhaustion"
      ],
      "my": [
        "စိတ်မနားနိုင်ဘဲ ပင်ပန်းနွမ်းနယ်နေခြင်း"
      ],
      "ja": [
        "過労、焦りによる活動再開、休息不足"
      ]
    },
    "uprightMeaning": {
      "en": "Four of Swords: Rest, sanctuary, meditation, and mental rejuvenation.",
      "my": "ဓား ၄ (စိတ်အနားယူခြင်းနှင့် ဆိတ်ငြိမ်မှု): စိတ်အေးချမ်းစွာ အနားယူခြင်း၊ တရားရှုမှတ်ခြင်းနှင့် အားမွေးခြင်း။",
      "ja": "【ソードの4】：休息、祈り、精神の回復、静寂の避難所。"
    },
    "reversedMeaning": {
      "en": "Reversed Four of Swords: Burnout, restlessness, or forced exhaustion.",
      "my": "ပြောင်းပြန် ဓား ၄ (စိတ်အနားယူခြင်းနှင့် ဆိတ်ငြိမ်မှု): စိတ်မနားနိုင်ဘဲ ပင်ပန်းနွမ်းနယ်နေခြင်း။",
      "ja": "逆位置【ソードの4】：過労、焦りによる活動再開、休息不足。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Four of Swords reflects rest, sanctuary, meditation, and mental rejuvenation.",
        "my": "အချစ်ရေးတွင် ဓား ၄ (စိတ်အနားယူခြင်းနှင့် ဆိတ်ငြိမ်မှု) သည် စိတ်အေးချမ်းစွာ အနားယူခြင်း၊ တရားရှုမှတ်ခြင်းနှင့် အားမွေးခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、休息、祈り、精神の回復、静寂の避難所が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Four of Swords warns of burnout, restlessness, or forced exhaustion.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၄ (စိတ်အနားယူခြင်းနှင့် ဆိတ်ငြိမ်မှု) သည် စိတ်မနားနိုင်ဘဲ ပင်ပန်းနွမ်းနယ်နေခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、過労、焦りによる活動再開、休息不足に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Four of Swords brings rest, sanctuary, meditation, and mental rejuvenation.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၄ (စိတ်အနားယူခြင်းနှင့် ဆိတ်ငြိမ်မှု) သည် စိတ်အေးချမ်းစွာ အနားယူခြင်း၊ တရားရှုမှတ်ခြင်းနှင့် အားမွေးခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、休息、祈り、精神の回復、静寂の避難所の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of burnout, restlessness, or forced exhaustion.",
        "my": "အလုပ်အကိုင်တွင် စိတ်မနားနိုင်ဘဲ ပင်ပန်းနွမ်းနယ်နေခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、過労、焦りによる活動再開、休息不足による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace rest, sanctuary, meditation, and mental rejuvenation.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်အေးချမ်းစွာ အနားယူခြင်း၊ တရားရှုမှတ်ခြင်းနှင့် အားမွေးခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、休息、祈り、精神の回復、静寂の避難所の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform burnout, restlessness, or forced exhaustion.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်မနားနိုင်ဘဲ ပင်ပန်းနွမ်းနယ်နေခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる過労、焦りによる活動再開、休息不足を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from rest, sanctuary, meditation, and mental rejuvenation.",
      "my": "စိတ်အေးချမ်းစွာ အနားယူခြင်း၊ တရားရှုမှတ်ခြင်းနှင့် အားမွေးခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "休息、祈り、精神の回復、静寂の避難所の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to burnout, restlessness, or forced exhaustion.",
      "my": "စိတ်မနားနိုင်ဘဲ ပင်ပန်းနွမ်းနယ်နေခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "過労、焦りによる活動再開、休息不足に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "အနားယူပြီးမှ လုပ်ဆောင်ပါ",
      "ja": "YES（休息が先）"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-5",
    "file": "Swords05.png",
    "name": {
      "en": "Five of Swords",
      "my": "ဓား ၅ (အကျိုးမရှိသော အနိုင်ရမှုနှင့် ပဋိပက္ခ)",
      "ja": "ソードの5"
    },
    "number": 5,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 5)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 5)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 5）"
    },
    "uprightKeywords": {
      "en": [
        "Hollow victory, conflict, arrogance, and selfish winning"
      ],
      "my": [
        "အနိုင်ရသော်လည်း အကျိုးမရှိခြင်း၊ မာနကြီးစွာ အငြင်းပွားခြင်း"
      ],
      "ja": [
        "空しい勝利、不毛な争い、人間関係の破綻"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Reconciliation, ending feuds, and putting down weapons"
      ],
      "my": [
        "ရန်ငြိုးများ အဆုံးသတ်ခြင်း၊ လက်နက်ချ၍ ပြေလည်အောင်ညှိနှိုင်းခြင်း"
      ],
      "ja": [
        "和解、争いの終結、過ちの清算"
      ]
    },
    "uprightMeaning": {
      "en": "Five of Swords: Hollow victory, conflict, arrogance, and selfish winning.",
      "my": "ဓား ၅ (အကျိုးမရှိသော အနိုင်ရမှုနှင့် ပဋိပက္ခ): အနိုင်ရသော်လည်း အကျိုးမရှိခြင်း၊ မာနကြီးစွာ အငြင်းပွားခြင်း။",
      "ja": "【ソードの5】：空しい勝利、不毛な争い、人間関係の破綻。"
    },
    "reversedMeaning": {
      "en": "Reversed Five of Swords: Reconciliation, ending feuds, and putting down weapons.",
      "my": "ပြောင်းပြန် ဓား ၅ (အကျိုးမရှိသော အနိုင်ရမှုနှင့် ပဋိပက္ခ): ရန်ငြိုးများ အဆုံးသတ်ခြင်း၊ လက်နက်ချ၍ ပြေလည်အောင်ညှိနှိုင်းခြင်း။",
      "ja": "逆位置【ソードの5】：和解、争いの終結、過ちの清算。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Five of Swords reflects hollow victory, conflict, arrogance, and selfish winning.",
        "my": "အချစ်ရေးတွင် ဓား ၅ (အကျိုးမရှိသော အနိုင်ရမှုနှင့် ပဋိပက္ခ) သည် အနိုင်ရသော်လည်း အကျိုးမရှိခြင်း၊ မာနကြီးစွာ အငြင်းပွားခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、空しい勝利、不毛な争い、人間関係の破綻が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Five of Swords warns of reconciliation, ending feuds, and putting down weapons.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၅ (အကျိုးမရှိသော အနိုင်ရမှုနှင့် ပဋိပက္ခ) သည် ရန်ငြိုးများ အဆုံးသတ်ခြင်း၊ လက်နက်ချ၍ ပြေလည်အောင်ညှိနှိုင်းခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、和解、争いの終結、過ちの清算に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Five of Swords brings hollow victory, conflict, arrogance, and selfish winning.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၅ (အကျိုးမရှိသော အနိုင်ရမှုနှင့် ပဋိပက္ခ) သည် အနိုင်ရသော်လည်း အကျိုးမရှိခြင်း၊ မာနကြီးစွာ အငြင်းပွားခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、空しい勝利、不毛な争い、人間関係の破綻の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of reconciliation, ending feuds, and putting down weapons.",
        "my": "အလုပ်အကိုင်တွင် ရန်ငြိုးများ အဆုံးသတ်ခြင်း၊ လက်နက်ချ၍ ပြေလည်အောင်ညှိနှိုင်းခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、和解、争いの終結、過ちの清算による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace hollow victory, conflict, arrogance, and selfish winning.",
        "my": "ဝိညာဉ်ရေးရာတွင် အနိုင်ရသော်လည်း အကျိုးမရှိခြင်း၊ မာနကြီးစွာ အငြင်းပွားခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、空しい勝利、不毛な争い、人間関係の破綻の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform reconciliation, ending feuds, and putting down weapons.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရန်ငြိုးများ အဆုံးသတ်ခြင်း၊ လက်နက်ချ၍ ပြေလည်အောင်ညှိနှိုင်းခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる和解、争いの終結、過ちの清算を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from hollow victory, conflict, arrogance, and selfish winning.",
      "my": "အနိုင်ရသော်လည်း အကျိုးမရှိခြင်း၊ မာနကြီးစွာ အငြင်းပွားခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "空しい勝利、不毛な争い、人間関係の破綻の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to reconciliation, ending feuds, and putting down weapons.",
      "my": "ရန်ငြိုးများ အဆုံးသတ်ခြင်း၊ လက်နက်ချ၍ ပြေလည်အောင်ညှိနှိုင်းခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "和解、争いの終結、過ちの清算に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-6",
    "file": "Swords06.png",
    "name": {
      "en": "Six of Swords",
      "my": "ဓား ၆ (မုန်တိုင်းထန်သောနေရာမှ အေးချမ်းရာသို့ ရွေ့ပြောင်းခြင်း)",
      "ja": "ソードの6"
    },
    "number": 6,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 6)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 6)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 6）"
    },
    "uprightKeywords": {
      "en": [
        "Transition to calmer waters, healing journey, moving on"
      ],
      "my": [
        "ခက်ခဲသော အခြေအနေမှ အေးချမ်းတည်ငြိမ်သော နေရာသို့ ကူးပြောင်းခြင်း"
      ],
      "ja": [
        "荒波を抜けて静かな岸辺へ、回復の旅立ち"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Carrying emotional baggage, stormy transit"
      ],
      "my": [
        "အတိတ်မှ ဒဏ်ရာများကို သယ်ဆောင်လာမိခြင်း၊ အကူးအပြောင်း မချောမွေ့ခြင်း"
      ],
      "ja": [
        "過去の引きずり、遅延する旅路、未練"
      ]
    },
    "uprightMeaning": {
      "en": "Six of Swords: Transition to calmer waters, healing journey, moving on.",
      "my": "ဓား ၆ (မုန်တိုင်းထန်သောနေရာမှ အေးချမ်းရာသို့ ရွေ့ပြောင်းခြင်း): ခက်ခဲသော အခြေအနေမှ အေးချမ်းတည်ငြိမ်သော နေရာသို့ ကူးပြောင်းခြင်း။",
      "ja": "【ソードの6】：荒波を抜けて静かな岸辺へ、回復の旅立ち。"
    },
    "reversedMeaning": {
      "en": "Reversed Six of Swords: Carrying emotional baggage, stormy transit.",
      "my": "ပြောင်းပြန် ဓား ၆ (မုန်တိုင်းထန်သောနေရာမှ အေးချမ်းရာသို့ ရွေ့ပြောင်းခြင်း): အတိတ်မှ ဒဏ်ရာများကို သယ်ဆောင်လာမိခြင်း၊ အကူးအပြောင်း မချောမွေ့ခြင်း။",
      "ja": "逆位置【ソードの6】：過去の引きずり、遅延する旅路、未練。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Six of Swords reflects transition to calmer waters, healing journey, moving on.",
        "my": "အချစ်ရေးတွင် ဓား ၆ (မုန်တိုင်းထန်သောနေရာမှ အေးချမ်းရာသို့ ရွေ့ပြောင်းခြင်း) သည် ခက်ခဲသော အခြေအနေမှ အေးချမ်းတည်ငြိမ်သော နေရာသို့ ကူးပြောင်းခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、荒波を抜けて静かな岸辺へ、回復の旅立ちが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Six of Swords warns of carrying emotional baggage, stormy transit.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၆ (မုန်တိုင်းထန်သောနေရာမှ အေးချမ်းရာသို့ ရွေ့ပြောင်းခြင်း) သည် အတိတ်မှ ဒဏ်ရာများကို သယ်ဆောင်လာမိခြင်း၊ အကူးအပြောင်း မချောမွေ့ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、過去の引きずり、遅延する旅路、未練に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Six of Swords brings transition to calmer waters, healing journey, moving on.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၆ (မုန်တိုင်းထန်သောနေရာမှ အေးချမ်းရာသို့ ရွေ့ပြောင်းခြင်း) သည် ခက်ခဲသော အခြေအနေမှ အေးချမ်းတည်ငြိမ်သော နေရာသို့ ကူးပြောင်းခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、荒波を抜けて静かな岸辺へ、回復の旅立ちの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of carrying emotional baggage, stormy transit.",
        "my": "အလုပ်အကိုင်တွင် အတိတ်မှ ဒဏ်ရာများကို သယ်ဆောင်လာမိခြင်း၊ အကူးအပြောင်း မချောမွေ့ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、過去の引きずり、遅延する旅路、未練による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace transition to calmer waters, healing journey, moving on.",
        "my": "ဝိညာဉ်ရေးရာတွင် ခက်ခဲသော အခြေအနေမှ အေးချမ်းတည်ငြိမ်သော နေရာသို့ ကူးပြောင်းခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、荒波を抜けて静かな岸辺へ、回復の旅立ちの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform carrying emotional baggage, stormy transit.",
        "my": "ဝိညာဉ်ရေးရာတွင် အတိတ်မှ ဒဏ်ရာများကို သယ်ဆောင်လာမိခြင်း၊ အကူးအပြောင်း မချောမွေ့ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる過去の引きずり、遅延する旅路、未練を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from transition to calmer waters, healing journey, moving on.",
      "my": "ခက်ခဲသော အခြေအနေမှ အေးချမ်းတည်ငြိမ်သော နေရာသို့ ကူးပြောင်းခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "荒波を抜けて静かな岸辺へ、回復の旅立ちの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to carrying emotional baggage, stormy transit.",
      "my": "အတိတ်မှ ဒဏ်ရာများကို သယ်ဆောင်လာမိခြင်း၊ အကူးအပြောင်း မချောမွေ့ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "過去の引きずり、遅延する旅路、未練に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-7",
    "file": "Swords07.png",
    "name": {
      "en": "Seven of Swords",
      "my": "ဓား ၇ (လှည့်စားမှုနှင့် လျှို့ဝှက်အကြံအစည်)",
      "ja": "ソードの7"
    },
    "number": 7,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 7)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 7)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 7）"
    },
    "uprightKeywords": {
      "en": [
        "Strategy, stealth, deception, or taking a clever risk"
      ],
      "my": [
        "လျှို့ဝှက်လုပ်ဆောင်ခြင်း၊ ပါးနပ်စွာ အကွက်ချခြင်း သို့မဟုတ် လှည့်စားခံရခြင်း"
      ],
      "ja": [
        "策略、単独行動、油断のならぬ駆け引き"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Confession, coming clean, exposed deceit"
      ],
      "my": [
        "အမှန်တရား ပေါ်ပေါက်လာခြင်း၊ မသမာမှုများ ဖော်ထုတ်ခံရခြင်း"
      ],
      "ja": [
        "告白、悪事の露見、良心の呵責"
      ]
    },
    "uprightMeaning": {
      "en": "Seven of Swords: Strategy, stealth, deception, or taking a clever risk.",
      "my": "ဓား ၇ (လှည့်စားမှုနှင့် လျှို့ဝှက်အကြံအစည်): လျှို့ဝှက်လုပ်ဆောင်ခြင်း၊ ပါးနပ်စွာ အကွက်ချခြင်း သို့မဟုတ် လှည့်စားခံရခြင်း။",
      "ja": "【ソードの7】：策略、単独行動、油断のならぬ駆け引き。"
    },
    "reversedMeaning": {
      "en": "Reversed Seven of Swords: Confession, coming clean, exposed deceit.",
      "my": "ပြောင်းပြန် ဓား ၇ (လှည့်စားမှုနှင့် လျှို့ဝှက်အကြံအစည်): အမှန်တရား ပေါ်ပေါက်လာခြင်း၊ မသမာမှုများ ဖော်ထုတ်ခံရခြင်း။",
      "ja": "逆位置【ソードの7】：告白、悪事の露見、良心の呵責。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Seven of Swords reflects strategy, stealth, deception, or taking a clever risk.",
        "my": "အချစ်ရေးတွင် ဓား ၇ (လှည့်စားမှုနှင့် လျှို့ဝှက်အကြံအစည်) သည် လျှို့ဝှက်လုပ်ဆောင်ခြင်း၊ ပါးနပ်စွာ အကွက်ချခြင်း သို့မဟုတ် လှည့်စားခံရခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、策略、単独行動、油断のならぬ駆け引きが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Seven of Swords warns of confession, coming clean, exposed deceit.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၇ (လှည့်စားမှုနှင့် လျှို့ဝှက်အကြံအစည်) သည် အမှန်တရား ပေါ်ပေါက်လာခြင်း၊ မသမာမှုများ ဖော်ထုတ်ခံရခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、告白、悪事の露見、良心の呵責に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Seven of Swords brings strategy, stealth, deception, or taking a clever risk.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၇ (လှည့်စားမှုနှင့် လျှို့ဝှက်အကြံအစည်) သည် လျှို့ဝှက်လုပ်ဆောင်ခြင်း၊ ပါးနပ်စွာ အကွက်ချခြင်း သို့မဟုတ် လှည့်စားခံရခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、策略、単独行動、油断のならぬ駆け引きの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of confession, coming clean, exposed deceit.",
        "my": "အလုပ်အကိုင်တွင် အမှန်တရား ပေါ်ပေါက်လာခြင်း၊ မသမာမှုများ ဖော်ထုတ်ခံရခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、告白、悪事の露見、良心の呵責による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace strategy, stealth, deception, or taking a clever risk.",
        "my": "ဝိညာဉ်ရေးရာတွင် လျှို့ဝှက်လုပ်ဆောင်ခြင်း၊ ပါးနပ်စွာ အကွက်ချခြင်း သို့မဟုတ် လှည့်စားခံရခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、策略、単独行動、油断のならぬ駆け引きの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform confession, coming clean, exposed deceit.",
        "my": "ဝိညာဉ်ရေးရာတွင် အမှန်တရား ပေါ်ပေါက်လာခြင်း၊ မသမာမှုများ ဖော်ထုတ်ခံရခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる告白、悪事の露見、良心の呵責を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from strategy, stealth, deception, or taking a clever risk.",
      "my": "လျှို့ဝှက်လုပ်ဆောင်ခြင်း၊ ပါးနပ်စွာ အကွက်ချခြင်း သို့မဟုတ် လှည့်စားခံရခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "策略、単独行動、油断のならぬ駆け引きの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to confession, coming clean, exposed deceit.",
      "my": "အမှန်တရား ပေါ်ပေါက်လာခြင်း၊ မသမာမှုများ ဖော်ထုတ်ခံရခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "告白、悪事の露見、良心の呵責に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely No",
      "my": "မသမာမှုများကို သတိထားပါ",
      "ja": "NO（警戒せよ）"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-8",
    "file": "Swords08.png",
    "name": {
      "en": "Eight of Swords",
      "my": "ဓား ၈ (မိမိအတွေးဖြင့် မိမိကိုယ်ကို ထောင်ချောက်ဆင်မိခြင်း)",
      "ja": "ソードの8"
    },
    "number": 8,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 8)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 8)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 8）"
    },
    "uprightKeywords": {
      "en": [
        "Self-imposed mental prison, feeling trapped and helpless"
      ],
      "my": [
        "မိမိ၏ အတွေးမှားများဖြင့် ပိတ်မိနေခြင်း၊ အကူအညီမဲ့သလို ခံစားရခြင်း"
      ],
      "ja": [
        "思い込みによる束縛、無力感という名の幻影"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Breaking free from mental limiting beliefs, taking power"
      ],
      "my": [
        "စိတ်တွင်း အချုပ်အနှောင်များမှ လွတ်မြောက်လာခြင်း"
      ],
      "ja": [
        "目覚め、自己解放、新たな選択肢の発見"
      ]
    },
    "uprightMeaning": {
      "en": "Eight of Swords: Self-imposed mental prison, feeling trapped and helpless.",
      "my": "ဓား ၈ (မိမိအတွေးဖြင့် မိမိကိုယ်ကို ထောင်ချောက်ဆင်မိခြင်း): မိမိ၏ အတွေးမှားများဖြင့် ပိတ်မိနေခြင်း၊ အကူအညီမဲ့သလို ခံစားရခြင်း။",
      "ja": "【ソードの8】：思い込みによる束縛、無力感という名の幻影。"
    },
    "reversedMeaning": {
      "en": "Reversed Eight of Swords: Breaking free from mental limiting beliefs, taking power.",
      "my": "ပြောင်းပြန် ဓား ၈ (မိမိအတွေးဖြင့် မိမိကိုယ်ကို ထောင်ချောက်ဆင်မိခြင်း): စိတ်တွင်း အချုပ်အနှောင်များမှ လွတ်မြောက်လာခြင်း။",
      "ja": "逆位置【ソードの8】：目覚め、自己解放、新たな選択肢の発見。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Eight of Swords reflects self-imposed mental prison, feeling trapped and helpless.",
        "my": "အချစ်ရေးတွင် ဓား ၈ (မိမိအတွေးဖြင့် မိမိကိုယ်ကို ထောင်ချောက်ဆင်မိခြင်း) သည် မိမိ၏ အတွေးမှားများဖြင့် ပိတ်မိနေခြင်း၊ အကူအညီမဲ့သလို ခံစားရခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、思い込みによる束縛、無力感という名の幻影が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Eight of Swords warns of breaking free from mental limiting beliefs, taking power.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၈ (မိမိအတွေးဖြင့် မိမိကိုယ်ကို ထောင်ချောက်ဆင်မိခြင်း) သည် စိတ်တွင်း အချုပ်အနှောင်များမှ လွတ်မြောက်လာခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、目覚め、自己解放、新たな選択肢の発見に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Eight of Swords brings self-imposed mental prison, feeling trapped and helpless.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၈ (မိမိအတွေးဖြင့် မိမိကိုယ်ကို ထောင်ချောက်ဆင်မိခြင်း) သည် မိမိ၏ အတွေးမှားများဖြင့် ပိတ်မိနေခြင်း၊ အကူအညီမဲ့သလို ခံစားရခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、思い込みによる束縛、無力感という名の幻影の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of breaking free from mental limiting beliefs, taking power.",
        "my": "အလုပ်အကိုင်တွင် စိတ်တွင်း အချုပ်အနှောင်များမှ လွတ်မြောက်လာခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、目覚め、自己解放、新たな選択肢の発見による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace self-imposed mental prison, feeling trapped and helpless.",
        "my": "ဝိညာဉ်ရေးရာတွင် မိမိ၏ အတွေးမှားများဖြင့် ပိတ်မိနေခြင်း၊ အကူအညီမဲ့သလို ခံစားရခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、思い込みによる束縛、無力感という名の幻影の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform breaking free from mental limiting beliefs, taking power.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်တွင်း အချုပ်အနှောင်များမှ လွတ်မြောက်လာခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる目覚め、自己解放、新たな選択肢の発見を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from self-imposed mental prison, feeling trapped and helpless.",
      "my": "မိမိ၏ အတွေးမှားများဖြင့် ပိတ်မိနေခြင်း၊ အကူအညီမဲ့သလို ခံစားရခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "思い込みによる束縛、無力感という名の幻影の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to breaking free from mental limiting beliefs, taking power.",
      "my": "စိတ်တွင်း အချုပ်အနှောင်များမှ လွတ်မြောက်လာခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "目覚め、自己解放、新たな選択肢の発見に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (စိတ်ကို လွတ်လပ်ခွင့်ပေးပါ)",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-9",
    "file": "Swords09.png",
    "name": {
      "en": "Nine of Swords",
      "my": "ဓား ၉ (ညဉ့်နက်သန်းခေါင် စိုးရိမ်သောကလွန်ကဲခြင်း)",
      "ja": "ソードの9"
    },
    "number": 9,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 9)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 9)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 9）"
    },
    "uprightKeywords": {
      "en": [
        "Anxiety, nightmares, overthinking, and guilt"
      ],
      "my": [
        "အလွန်အမင်း စိုးရိမ်သောကရောက်ခြင်း၊ ညဘက်အိပ်မပျော်ခြင်း၊ အတွေးလွန်ခြင်း"
      ],
      "ja": [
        "深夜の苦悩、悪夢、過度な取り越し苦労"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Dawn after darkness, overcoming despair, finding hope"
      ],
      "my": [
        "စိုးရိမ်သောကများ လျော့ပါးသွားခြင်း၊ မျှော်လင့်ချက် ပြန်လည်ရရှိခြင်း"
      ],
      "ja": [
        "夜明け、苦痛からの解放、受容と安息"
      ]
    },
    "uprightMeaning": {
      "en": "Nine of Swords: Anxiety, nightmares, overthinking, and guilt.",
      "my": "ဓား ၉ (ညဉ့်နက်သန်းခေါင် စိုးရိမ်သောကလွန်ကဲခြင်း): အလွန်အမင်း စိုးရိမ်သောကရောက်ခြင်း၊ ညဘက်အိပ်မပျော်ခြင်း၊ အတွေးလွန်ခြင်း။",
      "ja": "【ソードの9】：深夜の苦悩、悪夢、過度な取り越し苦労。"
    },
    "reversedMeaning": {
      "en": "Reversed Nine of Swords: Dawn after darkness, overcoming despair, finding hope.",
      "my": "ပြောင်းပြန် ဓား ၉ (ညဉ့်နက်သန်းခေါင် စိုးရိမ်သောကလွန်ကဲခြင်း): စိုးရိမ်သောကများ လျော့ပါးသွားခြင်း၊ မျှော်လင့်ချက် ပြန်လည်ရရှိခြင်း။",
      "ja": "逆位置【ソードの9】：夜明け、苦痛からの解放、受容と安息。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Nine of Swords reflects anxiety, nightmares, overthinking, and guilt.",
        "my": "အချစ်ရေးတွင် ဓား ၉ (ညဉ့်နက်သန်းခေါင် စိုးရိမ်သောကလွန်ကဲခြင်း) သည် အလွန်အမင်း စိုးရိမ်သောကရောက်ခြင်း၊ ညဘက်အိပ်မပျော်ခြင်း၊ အတွေးလွန်ခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、深夜の苦悩、悪夢、過度な取り越し苦労が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Nine of Swords warns of dawn after darkness, overcoming despair, finding hope.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၉ (ညဉ့်နက်သန်းခေါင် စိုးရိမ်သောကလွန်ကဲခြင်း) သည် စိုးရိမ်သောကများ လျော့ပါးသွားခြင်း၊ မျှော်လင့်ချက် ပြန်လည်ရရှိခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、夜明け、苦痛からの解放、受容と安息に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Nine of Swords brings anxiety, nightmares, overthinking, and guilt.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၉ (ညဉ့်နက်သန်းခေါင် စိုးရိမ်သောကလွန်ကဲခြင်း) သည် အလွန်အမင်း စိုးရိမ်သောကရောက်ခြင်း၊ ညဘက်အိပ်မပျော်ခြင်း၊ အတွေးလွန်ခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、深夜の苦悩、悪夢、過度な取り越し苦労の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of dawn after darkness, overcoming despair, finding hope.",
        "my": "အလုပ်အကိုင်တွင် စိုးရိမ်သောကများ လျော့ပါးသွားခြင်း၊ မျှော်လင့်ချက် ပြန်လည်ရရှိခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、夜明け、苦痛からの解放、受容と安息による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace anxiety, nightmares, overthinking, and guilt.",
        "my": "ဝိညာဉ်ရေးရာတွင် အလွန်အမင်း စိုးရိမ်သောကရောက်ခြင်း၊ ညဘက်အိပ်မပျော်ခြင်း၊ အတွေးလွန်ခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、深夜の苦悩、悪夢、過度な取り越し苦労の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform dawn after darkness, overcoming despair, finding hope.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိုးရိမ်သောကများ လျော့ပါးသွားခြင်း၊ မျှော်လင့်ချက် ပြန်လည်ရရှိခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる夜明け、苦痛からの解放、受容と安息を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from anxiety, nightmares, overthinking, and guilt.",
      "my": "အလွန်အမင်း စိုးရိမ်သောကရောက်ခြင်း၊ ညဘက်အိပ်မပျော်ခြင်း၊ အတွေးလွန်ခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "深夜の苦悩、悪夢、過度な取り越し苦労の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to dawn after darkness, overcoming despair, finding hope.",
      "my": "စိုးရိမ်သောကများ လျော့ပါးသွားခြင်း၊ မျှော်လင့်ချက် ပြန်လည်ရရှိခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "夜明け、苦痛からの解放、受容と安息に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-10",
    "file": "Swords10.png",
    "name": {
      "en": "Ten of Swords",
      "my": "ဓား ၁၀ (အဆိုးဆုံးအခြေအနေ ပြီးဆုံးခြင်းနှင့် မိုးသောက်ကြယ်)",
      "ja": "ソードの10"
    },
    "number": 10,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 10)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 10)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 10）"
    },
    "uprightKeywords": {
      "en": [
        "Rock bottom, painful ending, but dawn breaks on the horizon"
      ],
      "my": [
        "အဆိုးဆုံး အဆုံးသတ်သို့ ရောက်ရှိသွားခြင်း (သို့သော် မနက်ဖြန်တွင် အလင်းရောင်သစ် ပေါ်ထွန်းမည်)"
      ],
      "ja": [
        "完全な終局、どん底。しかし東の空には夜明けの光が差す"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Rising from the ashes, surviving the worst storm"
      ],
      "my": [
        "အဆိုးဆုံး အခြေအနေမှ ပြန်လည်ရုန်းထနိုင်ခြင်း"
      ],
      "ja": [
        "どん底からの浮上、再起、最悪期の脱出"
      ]
    },
    "uprightMeaning": {
      "en": "Ten of Swords: Rock bottom, painful ending, but dawn breaks on the horizon.",
      "my": "ဓား ၁၀ (အဆိုးဆုံးအခြေအနေ ပြီးဆုံးခြင်းနှင့် မိုးသောက်ကြယ်): အဆိုးဆုံး အဆုံးသတ်သို့ ရောက်ရှိသွားခြင်း (သို့သော် မနက်ဖြန်တွင် အလင်းရောင်သစ် ပေါ်ထွန်းမည်)။",
      "ja": "【ソードの10】：完全な終局、どん底。しかし東の空には夜明けの光が差す。"
    },
    "reversedMeaning": {
      "en": "Reversed Ten of Swords: Rising from the ashes, surviving the worst storm.",
      "my": "ပြောင်းပြန် ဓား ၁၀ (အဆိုးဆုံးအခြေအနေ ပြီးဆုံးခြင်းနှင့် မိုးသောက်ကြယ်): အဆိုးဆုံး အခြေအနေမှ ပြန်လည်ရုန်းထနိုင်ခြင်း။",
      "ja": "逆位置【ソードの10】：どん底からの浮上、再起、最悪期の脱出。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Ten of Swords reflects rock bottom, painful ending, but dawn breaks on the horizon.",
        "my": "အချစ်ရေးတွင် ဓား ၁၀ (အဆိုးဆုံးအခြေအနေ ပြီးဆုံးခြင်းနှင့် မိုးသောက်ကြယ်) သည် အဆိုးဆုံး အဆုံးသတ်သို့ ရောက်ရှိသွားခြင်း (သို့သော် မနက်ဖြန်တွင် အလင်းရောင်သစ် ပေါ်ထွန်းမည်) ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、完全な終局、どん底。しかし東の空には夜明けの光が差すが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Ten of Swords warns of rising from the ashes, surviving the worst storm.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ၁၀ (အဆိုးဆုံးအခြေအနေ ပြီးဆုံးခြင်းနှင့် မိုးသောက်ကြယ်) သည် အဆိုးဆုံး အခြေအနေမှ ပြန်လည်ရုန်းထနိုင်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、どん底からの浮上、再起、最悪期の脱出に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Ten of Swords brings rock bottom, painful ending, but dawn breaks on the horizon.",
        "my": "အလုပ်အကိုင်တွင် ဓား ၁၀ (အဆိုးဆုံးအခြေအနေ ပြီးဆုံးခြင်းနှင့် မိုးသောက်ကြယ်) သည် အဆိုးဆုံး အဆုံးသတ်သို့ ရောက်ရှိသွားခြင်း (သို့သော် မနက်ဖြန်တွင် အလင်းရောင်သစ် ပေါ်ထွန်းမည်) ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、完全な終局、どん底。しかし東の空には夜明けの光が差すの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of rising from the ashes, surviving the worst storm.",
        "my": "အလုပ်အကိုင်တွင် အဆိုးဆုံး အခြေအနေမှ ပြန်လည်ရုန်းထနိုင်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、どん底からの浮上、再起、最悪期の脱出による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace rock bottom, painful ending, but dawn breaks on the horizon.",
        "my": "ဝိညာဉ်ရေးရာတွင် အဆိုးဆုံး အဆုံးသတ်သို့ ရောက်ရှိသွားခြင်း (သို့သော် မနက်ဖြန်တွင် အလင်းရောင်သစ် ပေါ်ထွန်းမည်) ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、完全な終局、どん底。しかし東の空には夜明けの光が差すの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform rising from the ashes, surviving the worst storm.",
        "my": "ဝိညာဉ်ရေးရာတွင် အဆိုးဆုံး အခြေအနေမှ ပြန်လည်ရုန်းထနိုင်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なるどん底からの浮上、再起、最悪期の脱出を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from rock bottom, painful ending, but dawn breaks on the horizon.",
      "my": "အဆိုးဆုံး အဆုံးသတ်သို့ ရောက်ရှိသွားခြင်း (သို့သော် မနက်ဖြန်တွင် အလင်းရောင်သစ် ပေါ်ထွန်းမည်) ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "完全な終局、どん底。しかし東の空には夜明けの光が差すの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to rising from the ashes, surviving the worst storm.",
      "my": "အဆိုးဆုံး အခြေအနေမှ ပြန်လည်ရုန်းထနိုင်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "どん底からの浮上、再起、最悪期の脱出に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (အဆုံးသတ်တစ်ခုဖြစ်သည်)",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-11",
    "file": "Swords11.png",
    "name": {
      "en": "Page of Swords",
      "my": "ဓား စာပို့လုလင် (ထက်မြက်သော သတင်းစုံစမ်းသူ)",
      "ja": "ソードのペイジ"
    },
    "number": 11,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 11)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 11)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 11）"
    },
    "uprightKeywords": {
      "en": [
        "Sharp intellect, vigilance, curiosity, and truth seeking"
      ],
      "my": [
        "ထက်မြက်သော ဉာဏ်ရည်၊ စုံစမ်းထောက်လှမ်းခြင်းနှင့် အမှန်တရားရှာဖွေခြင်း"
      ],
      "ja": [
        "鋭敏な知性、警戒心、知的好奇心"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Gossip, deceptive spying, or cynical tactlessness"
      ],
      "my": [
        "အတင်းအဖျင်းပြောခြင်း သို့မဟုတ် သံသယလွန်ကဲခြင်း"
      ],
      "ja": [
        "口先だけの批判、スパイ行為、悪意ある噂"
      ]
    },
    "uprightMeaning": {
      "en": "Page of Swords: Sharp intellect, vigilance, curiosity, and truth seeking.",
      "my": "ဓား စာပို့လုလင် (ထက်မြက်သော သတင်းစုံစမ်းသူ): ထက်မြက်သော ဉာဏ်ရည်၊ စုံစမ်းထောက်လှမ်းခြင်းနှင့် အမှန်တရားရှာဖွေခြင်း။",
      "ja": "【ソードのペイジ】：鋭敏な知性、警戒心、知的好奇心。"
    },
    "reversedMeaning": {
      "en": "Reversed Page of Swords: Gossip, deceptive spying, or cynical tactlessness.",
      "my": "ပြောင်းပြန် ဓား စာပို့လုလင် (ထက်မြက်သော သတင်းစုံစမ်းသူ): အတင်းအဖျင်းပြောခြင်း သို့မဟုတ် သံသယလွန်ကဲခြင်း။",
      "ja": "逆位置【ソードのペイジ】：口先だけの批判、スパイ行為、悪意ある噂。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Page of Swords reflects sharp intellect, vigilance, curiosity, and truth seeking.",
        "my": "အချစ်ရေးတွင် ဓား စာပို့လုလင် (ထက်မြက်သော သတင်းစုံစမ်းသူ) သည် ထက်မြက်သော ဉာဏ်ရည်၊ စုံစမ်းထောက်လှမ်းခြင်းနှင့် အမှန်တရားရှာဖွေခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、鋭敏な知性、警戒心、知的好奇心が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Page of Swords warns of gossip, deceptive spying, or cynical tactlessness.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား စာပို့လုလင် (ထက်မြက်သော သတင်းစုံစမ်းသူ) သည် အတင်းအဖျင်းပြောခြင်း သို့မဟုတ် သံသယလွန်ကဲခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、口先だけの批判、スパイ行為、悪意ある噂に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Page of Swords brings sharp intellect, vigilance, curiosity, and truth seeking.",
        "my": "အလုပ်အကိုင်တွင် ဓား စာပို့လုလင် (ထက်မြက်သော သတင်းစုံစမ်းသူ) သည် ထက်မြက်သော ဉာဏ်ရည်၊ စုံစမ်းထောက်လှမ်းခြင်းနှင့် အမှန်တရားရှာဖွေခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、鋭敏な知性、警戒心、知的好奇心の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of gossip, deceptive spying, or cynical tactlessness.",
        "my": "အလုပ်အကိုင်တွင် အတင်းအဖျင်းပြောခြင်း သို့မဟုတ် သံသယလွန်ကဲခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、口先だけの批判、スパイ行為、悪意ある噂による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace sharp intellect, vigilance, curiosity, and truth seeking.",
        "my": "ဝိညာဉ်ရေးရာတွင် ထက်မြက်သော ဉာဏ်ရည်၊ စုံစမ်းထောက်လှမ်းခြင်းနှင့် အမှန်တရားရှာဖွေခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、鋭敏な知性、警戒心、知的好奇心の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform gossip, deceptive spying, or cynical tactlessness.",
        "my": "ဝိညာဉ်ရေးရာတွင် အတင်းအဖျင်းပြောခြင်း သို့မဟုတ် သံသယလွန်ကဲခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる口先だけの批判、スパイ行為、悪意ある噂を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from sharp intellect, vigilance, curiosity, and truth seeking.",
      "my": "ထက်မြက်သော ဉာဏ်ရည်၊ စုံစမ်းထောက်လှမ်းခြင်းနှင့် အမှန်တရားရှာဖွေခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "鋭敏な知性、警戒心、知的好奇心の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to gossip, deceptive spying, or cynical tactlessness.",
      "my": "အတင်းအဖျင်းပြောခြင်း သို့မဟုတ် သံသယလွန်ကဲခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "口先だけの批判、スパイ行為、悪意ある噂に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-12",
    "file": "Swords12.png",
    "name": {
      "en": "Knight of Swords",
      "my": "ဓား မြင်းစီးသူရဲကောင်း (အရှိန်အဟုန်ပြင်းစွာ ထိုးဖောက်သူ)",
      "ja": "ソードのナイト"
    },
    "number": 12,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 12)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 12)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 12）"
    },
    "uprightKeywords": {
      "en": [
        "Fierce ambition, decisive speed, and charging into battle"
      ],
      "my": [
        "ပြတ်သားသော အရှိန်အဟုန်ဖြင့် ရှေ့သို့ အပြင်းအထန် တိုးဝင်ဆောင်ရွက်ခြင်း"
      ],
      "ja": [
        "電光石火の行動、鋭利な決断力、猛進"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Reckless haste, tactless aggression, or burn-and-crash"
      ],
      "my": [
        "မဆင်မခြင် အလျင်စလိုလုပ်မိခြင်း၊ ရိုင်းစိုင်းစွာ ဆက်ဆံမိခြင်း"
      ],
      "ja": [
        "無謀な突進、舌禍、計画なき暴走"
      ]
    },
    "uprightMeaning": {
      "en": "Knight of Swords: Fierce ambition, decisive speed, and charging into battle.",
      "my": "ဓား မြင်းစီးသူရဲကောင်း (အရှိန်အဟုန်ပြင်းစွာ ထိုးဖောက်သူ): ပြတ်သားသော အရှိန်အဟုန်ဖြင့် ရှေ့သို့ အပြင်းအထန် တိုးဝင်ဆောင်ရွက်ခြင်း။",
      "ja": "【ソードのナイト】：電光石火の行動、鋭利な決断力、猛進。"
    },
    "reversedMeaning": {
      "en": "Reversed Knight of Swords: Reckless haste, tactless aggression, or burn-and-crash.",
      "my": "ပြောင်းပြန် ဓား မြင်းစီးသူရဲကောင်း (အရှိန်အဟုန်ပြင်းစွာ ထိုးဖောက်သူ): မဆင်မခြင် အလျင်စလိုလုပ်မိခြင်း၊ ရိုင်းစိုင်းစွာ ဆက်ဆံမိခြင်း။",
      "ja": "逆位置【ソードのナイト】：無謀な突進、舌禍、計画なき暴走。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Knight of Swords reflects fierce ambition, decisive speed, and charging into battle.",
        "my": "အချစ်ရေးတွင် ဓား မြင်းစီးသူရဲကောင်း (အရှိန်အဟုန်ပြင်းစွာ ထိုးဖောက်သူ) သည် ပြတ်သားသော အရှိန်အဟုန်ဖြင့် ရှေ့သို့ အပြင်းအထန် တိုးဝင်ဆောင်ရွက်ခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、電光石火の行動、鋭利な決断力、猛進が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Knight of Swords warns of reckless haste, tactless aggression, or burn-and-crash.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား မြင်းစီးသူရဲကောင်း (အရှိန်အဟုန်ပြင်းစွာ ထိုးဖောက်သူ) သည် မဆင်မခြင် အလျင်စလိုလုပ်မိခြင်း၊ ရိုင်းစိုင်းစွာ ဆက်ဆံမိခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、無謀な突進、舌禍、計画なき暴走に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Knight of Swords brings fierce ambition, decisive speed, and charging into battle.",
        "my": "အလုပ်အကိုင်တွင် ဓား မြင်းစီးသူရဲကောင်း (အရှိန်အဟုန်ပြင်းစွာ ထိုးဖောက်သူ) သည် ပြတ်သားသော အရှိန်အဟုန်ဖြင့် ရှေ့သို့ အပြင်းအထန် တိုးဝင်ဆောင်ရွက်ခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、電光石火の行動、鋭利な決断力、猛進の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of reckless haste, tactless aggression, or burn-and-crash.",
        "my": "အလုပ်အကိုင်တွင် မဆင်မခြင် အလျင်စလိုလုပ်မိခြင်း၊ ရိုင်းစိုင်းစွာ ဆက်ဆံမိခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、無謀な突進、舌禍、計画なき暴走による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace fierce ambition, decisive speed, and charging into battle.",
        "my": "ဝိညာဉ်ရေးရာတွင် ပြတ်သားသော အရှိန်အဟုန်ဖြင့် ရှေ့သို့ အပြင်းအထန် တိုးဝင်ဆောင်ရွက်ခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、電光石火の行動、鋭利な決断力、猛進の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform reckless haste, tactless aggression, or burn-and-crash.",
        "my": "ဝိညာဉ်ရေးရာတွင် မဆင်မခြင် အလျင်စလိုလုပ်မိခြင်း၊ ရိုင်းစိုင်းစွာ ဆက်ဆံမိခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる無謀な突進、舌禍、計画なき暴走を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from fierce ambition, decisive speed, and charging into battle.",
      "my": "ပြတ်သားသော အရှိန်အဟုန်ဖြင့် ရှေ့သို့ အပြင်းအထန် တိုးဝင်ဆောင်ရွက်ခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "電光石火の行動、鋭利な決断力、猛進の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to reckless haste, tactless aggression, or burn-and-crash.",
      "my": "မဆင်မခြင် အလျင်စလိုလုပ်မိခြင်း၊ ရိုင်းစိုင်းစွာ ဆက်ဆံမိခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "無謀な突進、舌禍、計画なき暴走に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-13",
    "file": "Swords13.png",
    "name": {
      "en": "Queen of Swords",
      "my": "ဓား မိဖုရား (ပြတ်သားသော အမှန်တရားရှင်)",
      "ja": "ソードのクイーン"
    },
    "number": 13,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 13)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 13)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 13）"
    },
    "uprightKeywords": {
      "en": [
        "Clear boundaries, razor intellect, and unvarnished truth"
      ],
      "my": [
        "ပြတ်သားသော အသိဉာဏ်၊ တိကျသော စည်းကမ်းနှင့် မလှည့်စားနိုင်သော အမှန်တရား"
      ],
      "ja": [
        "明晰な洞察力、厳格な境界線、飾らぬ真実"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Cold bitterness, cruel judgment, or emotional walls"
      ],
      "my": [
        "ရက်စက်စွာ ဝေဖန်ပြစ်တင်ခြင်း သို့မဟုတ် ခံစားချက်မရှိဘဲ အေးစက်လွန်းခြင်း"
      ],
      "ja": [
        "冷酷な批判、頑なな孤高、辛辣さ"
      ]
    },
    "uprightMeaning": {
      "en": "Queen of Swords: Clear boundaries, razor intellect, and unvarnished truth.",
      "my": "ဓား မိဖုရား (ပြတ်သားသော အမှန်တရားရှင်): ပြတ်သားသော အသိဉာဏ်၊ တိကျသော စည်းကမ်းနှင့် မလှည့်စားနိုင်သော အမှန်တရား။",
      "ja": "【ソードのクイーン】：明晰な洞察力、厳格な境界線、飾らぬ真実。"
    },
    "reversedMeaning": {
      "en": "Reversed Queen of Swords: Cold bitterness, cruel judgment, or emotional walls.",
      "my": "ပြောင်းပြန် ဓား မိဖုရား (ပြတ်သားသော အမှန်တရားရှင်): ရက်စက်စွာ ဝေဖန်ပြစ်တင်ခြင်း သို့မဟုတ် ခံစားချက်မရှိဘဲ အေးစက်လွန်းခြင်း။",
      "ja": "逆位置【ソードのクイーン】：冷酷な批判、頑なな孤高、辛辣さ。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Queen of Swords reflects clear boundaries, razor intellect, and unvarnished truth.",
        "my": "အချစ်ရေးတွင် ဓား မိဖုရား (ပြတ်သားသော အမှန်တရားရှင်) သည် ပြတ်သားသော အသိဉာဏ်၊ တိကျသော စည်းကမ်းနှင့် မလှည့်စားနိုင်သော အမှန်တရား ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、明晰な洞察力、厳格な境界線、飾らぬ真実が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Queen of Swords warns of cold bitterness, cruel judgment, or emotional walls.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား မိဖုရား (ပြတ်သားသော အမှန်တရားရှင်) သည် ရက်စက်စွာ ဝေဖန်ပြစ်တင်ခြင်း သို့မဟုတ် ခံစားချက်မရှိဘဲ အေးစက်လွန်းခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、冷酷な批判、頑なな孤高、辛辣さに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Queen of Swords brings clear boundaries, razor intellect, and unvarnished truth.",
        "my": "အလုပ်အကိုင်တွင် ဓား မိဖုရား (ပြတ်သားသော အမှန်တရားရှင်) သည် ပြတ်သားသော အသိဉာဏ်၊ တိကျသော စည်းကမ်းနှင့် မလှည့်စားနိုင်သော အမှန်တရား ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、明晰な洞察力、厳格な境界線、飾らぬ真実の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of cold bitterness, cruel judgment, or emotional walls.",
        "my": "အလုပ်အကိုင်တွင် ရက်စက်စွာ ဝေဖန်ပြစ်တင်ခြင်း သို့မဟုတ် ခံစားချက်မရှိဘဲ အေးစက်လွန်းခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、冷酷な批判、頑なな孤高、辛辣さによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace clear boundaries, razor intellect, and unvarnished truth.",
        "my": "ဝိညာဉ်ရေးရာတွင် ပြတ်သားသော အသိဉာဏ်၊ တိကျသော စည်းကမ်းနှင့် မလှည့်စားနိုင်သော အမှန်တရား ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、明晰な洞察力、厳格な境界線、飾らぬ真実の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform cold bitterness, cruel judgment, or emotional walls.",
        "my": "ဝိညာဉ်ရေးရာတွင် ရက်စက်စွာ ဝေဖန်ပြစ်တင်ခြင်း သို့မဟုတ် ခံစားချက်မရှိဘဲ အေးစက်လွန်းခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる冷酷な批判、頑なな孤高、辛辣さを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from clear boundaries, razor intellect, and unvarnished truth.",
      "my": "ပြတ်သားသော အသိဉာဏ်၊ တိကျသော စည်းကမ်းနှင့် မလှည့်စားနိုင်သော အမှန်တရား ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "明晰な洞察力、厳格な境界線、飾らぬ真実の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to cold bitterness, cruel judgment, or emotional walls.",
      "my": "ရက်စက်စွာ ဝေဖန်ပြစ်တင်ခြင်း သို့မဟုတ် ခံစားချက်မရှိဘဲ အေးစက်လွန်းခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "冷酷な批判、頑なな孤高、辛辣さに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "swords-14",
    "file": "Swords14.png",
    "name": {
      "en": "King of Swords",
      "my": "ဓား ဘုရင် (ဉာဏ်ပညာနှင့် တရားဥပဒေ၏ အရှင်)",
      "ja": "ソードのキング"
    },
    "number": 14,
    "arcana": "minor",
    "suit": "swords",
    "element": "Air",
    "astrology": {
      "en": "mind, truth, communication, and conflict (Rank 14)",
      "my": "စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ (အဆင့် 14)",
      "ja": "知性、真理、言葉、そして試練と葛藤（数秘 14）"
    },
    "uprightKeywords": {
      "en": [
        "Intellectual authority, strategic clarity, and fair judgment"
      ],
      "my": [
        "အသိပညာ၏ အထွတ်အထိပ်၊ မဟာဗျူဟာမြောက် စဉ်းစားတွေးခေါ်နိုင်သော ခေါင်းဆောင်"
      ],
      "ja": [
        "知性の最高権威、冷徹な戦略眼、公明正大な裁き"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Tyranny, manipulation of words, or heartless cruelty"
      ],
      "my": [
        "အာဏာရှင်ဆန်ဆန် ဖိနှိပ်ခြင်း သို့မဟုတ် စကားလုံးဖြင့် လှည့်စားခြင်း"
      ],
      "ja": [
        "冷酷な独裁、詭弁、力による威圧"
      ]
    },
    "uprightMeaning": {
      "en": "King of Swords: Intellectual authority, strategic clarity, and fair judgment.",
      "my": "ဓား ဘုရင် (ဉာဏ်ပညာနှင့် တရားဥပဒေ၏ အရှင်): အသိပညာ၏ အထွတ်အထိပ်၊ မဟာဗျူဟာမြောက် စဉ်းစားတွေးခေါ်နိုင်သော ခေါင်းဆောင်။",
      "ja": "【ソードのキング】：知性の最高権威、冷徹な戦略眼、公明正大な裁き。"
    },
    "reversedMeaning": {
      "en": "Reversed King of Swords: Tyranny, manipulation of words, or heartless cruelty.",
      "my": "ပြောင်းပြန် ဓား ဘုရင် (ဉာဏ်ပညာနှင့် တရားဥပဒေ၏ အရှင်): အာဏာရှင်ဆန်ဆန် ဖိနှိပ်ခြင်း သို့မဟုတ် စကားလုံးဖြင့် လှည့်စားခြင်း။",
      "ja": "逆位置【ソードのキング】：冷酷な独裁、詭弁、力による威圧。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, King of Swords reflects intellectual authority, strategic clarity, and fair judgment.",
        "my": "အချစ်ရေးတွင် ဓား ဘုရင် (ဉာဏ်ပညာနှင့် တရားဥပဒေ၏ အရှင်) သည် အသိပညာ၏ အထွတ်အထိပ်၊ မဟာဗျူဟာမြောက် စဉ်းစားတွေးခေါ်နိုင်သော ခေါင်းဆောင် ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、知性の最高権威、冷徹な戦略眼、公明正大な裁きが示されています。"
      },
      "reversed": {
        "en": "In love, reversed King of Swords warns of tyranny, manipulation of words, or heartless cruelty.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် ဓား ဘုရင် (ဉာဏ်ပညာနှင့် တရားဥပဒေ၏ အရှင်) သည် အာဏာရှင်ဆန်ဆန် ဖိနှိပ်ခြင်း သို့မဟုတ် စကားလုံးဖြင့် လှည့်စားခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、冷酷な独裁、詭弁、力による威圧に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, King of Swords brings intellectual authority, strategic clarity, and fair judgment.",
        "my": "အလုပ်အကိုင်တွင် ဓား ဘုရင် (ဉာဏ်ပညာနှင့် တရားဥပဒေ၏ အရှင်) သည် အသိပညာ၏ အထွတ်အထိပ်၊ မဟာဗျူဟာမြောက် စဉ်းစားတွေးခေါ်နိုင်သော ခေါင်းဆောင် ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、知性の最高権威、冷徹な戦略眼、公明正大な裁きの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of tyranny, manipulation of words, or heartless cruelty.",
        "my": "အလုပ်အကိုင်တွင် အာဏာရှင်ဆန်ဆန် ဖိနှိပ်ခြင်း သို့မဟုတ် စကားလုံးဖြင့် လှည့်စားခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、冷酷な独裁、詭弁、力による威圧による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace intellectual authority, strategic clarity, and fair judgment.",
        "my": "ဝိညာဉ်ရေးရာတွင် အသိပညာ၏ အထွတ်အထိပ်၊ မဟာဗျူဟာမြောက် စဉ်းစားတွေးခေါ်နိုင်သော ခေါင်းဆောင် ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、知性の最高権威、冷徹な戦略眼、公明正大な裁きの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform tyranny, manipulation of words, or heartless cruelty.",
        "my": "ဝိညာဉ်ရေးရာတွင် အာဏာရှင်ဆန်ဆန် ဖိနှိပ်ခြင်း သို့မဟုတ် စကားလုံးဖြင့် လှည့်စားခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる冷酷な独裁、詭弁、力による威圧を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from intellectual authority, strategic clarity, and fair judgment.",
      "my": "အသိပညာ၏ အထွတ်အထိပ်၊ မဟာဗျူဟာမြောက် စဉ်းစားတွေးခေါ်နိုင်သော ခေါင်းဆောင် ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "知性の最高権威、冷徹な戦略眼、公明正大な裁きの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to tyranny, manipulation of words, or heartless cruelty.",
      "my": "အာဏာရှင်ဆန်ဆန် ဖိနှိပ်ခြင်း သို့မဟုတ် စကားလုံးဖြင့် လှည့်စားခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "冷酷な独裁、詭弁、力による威圧に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Swords",
        "Element: Air"
      ],
      "my": [
        "ဓား (လေဓာတ်)",
        "ဓာတ်ကြီး: Air"
      ],
      "ja": [
        "ソード（剣・風）",
        "エレメント：Air"
      ]
    }
  },
  {
    "id": "wands-1",
    "file": "Wands01.png",
    "name": {
      "en": "Ace of Wands",
      "my": "သစ်သားလှံတံ ၁ (စိတ်အားထက်သန်မှု မီးတောက်အစ)",
      "ja": "ワンドのエース"
    },
    "number": 1,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 1)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 1)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 1）"
    },
    "uprightKeywords": {
      "en": [
        "Creative spark, passionate inspiration, bold initiative"
      ],
      "my": [
        "တီထွင်ဖန်တီးနိုင်စွမ်း မီးတောက်စတင်ခြင်း၊ ရဲဝံ့စွာ စတင်ဆောင်ရွက်ခြင်း"
      ],
      "ja": [
        "創造性の火花、情熱の閃き、大胆な挑戦の始まり"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Creative block, lack of passion, or frustrating delays"
      ],
      "my": [
        "စိတ်ဓာတ်ကျဆင်းခြင်း သို့မဟုတ် အကြံဉာဏ်များ ပိတ်ဆို့နေခြင်း"
      ],
      "ja": [
        "情熱の空回り、意欲の減退、出鼻をくじかれる遅延"
      ]
    },
    "uprightMeaning": {
      "en": "Ace of Wands: Creative spark, passionate inspiration, bold initiative.",
      "my": "သစ်သားလှံတံ ၁ (စိတ်အားထက်သန်မှု မီးတောက်အစ): တီထွင်ဖန်တီးနိုင်စွမ်း မီးတောက်စတင်ခြင်း၊ ရဲဝံ့စွာ စတင်ဆောင်ရွက်ခြင်း။",
      "ja": "【ワンドのエース】：創造性の火花、情熱の閃き、大胆な挑戦の始まり。"
    },
    "reversedMeaning": {
      "en": "Reversed Ace of Wands: Creative block, lack of passion, or frustrating delays.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၁ (စိတ်အားထက်သန်မှု မီးတောက်အစ): စိတ်ဓာတ်ကျဆင်းခြင်း သို့မဟုတ် အကြံဉာဏ်များ ပိတ်ဆို့နေခြင်း။",
      "ja": "逆位置【ワンドのエース】：情熱の空回り、意欲の減退、出鼻をくじかれる遅延。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Ace of Wands reflects creative spark, passionate inspiration, bold initiative.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၁ (စိတ်အားထက်သန်မှု မီးတောက်အစ) သည် တီထွင်ဖန်တီးနိုင်စွမ်း မီးတောက်စတင်ခြင်း၊ ရဲဝံ့စွာ စတင်ဆောင်ရွက်ခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、創造性の火花、情熱の閃き、大胆な挑戦の始まりが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Ace of Wands warns of creative block, lack of passion, or frustrating delays.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၁ (စိတ်အားထက်သန်မှု မီးတောက်အစ) သည် စိတ်ဓာတ်ကျဆင်းခြင်း သို့မဟုတ် အကြံဉာဏ်များ ပိတ်ဆို့နေခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、情熱の空回り、意欲の減退、出鼻をくじかれる遅延に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Ace of Wands brings creative spark, passionate inspiration, bold initiative.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၁ (စိတ်အားထက်သန်မှု မီးတောက်အစ) သည် တီထွင်ဖန်တီးနိုင်စွမ်း မီးတောက်စတင်ခြင်း၊ ရဲဝံ့စွာ စတင်ဆောင်ရွက်ခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、創造性の火花、情熱の閃き、大胆な挑戦の始まりの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of creative block, lack of passion, or frustrating delays.",
        "my": "အလုပ်အကိုင်တွင် စိတ်ဓာတ်ကျဆင်းခြင်း သို့မဟုတ် အကြံဉာဏ်များ ပိတ်ဆို့နေခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、情熱の空回り、意欲の減退、出鼻をくじかれる遅延による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace creative spark, passionate inspiration, bold initiative.",
        "my": "ဝိညာဉ်ရေးရာတွင် တီထွင်ဖန်တီးနိုင်စွမ်း မီးတောက်စတင်ခြင်း၊ ရဲဝံ့စွာ စတင်ဆောင်ရွက်ခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、創造性の火花、情熱の閃き、大胆な挑戦の始まりの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform creative block, lack of passion, or frustrating delays.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်ဓာတ်ကျဆင်းခြင်း သို့မဟုတ် အကြံဉာဏ်များ ပိတ်ဆို့နေခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる情熱の空回り、意欲の減退、出鼻をくじかれる遅延を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from creative spark, passionate inspiration, bold initiative.",
      "my": "တီထွင်ဖန်တီးနိုင်စွမ်း မီးတောက်စတင်ခြင်း၊ ရဲဝံ့စွာ စတင်ဆောင်ရွက်ခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "創造性の火花、情熱の閃き、大胆な挑戦の始まりの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to creative block, lack of passion, or frustrating delays.",
      "my": "စိတ်ဓာတ်ကျဆင်းခြင်း သို့မဟုတ် အကြံဉာဏ်များ ပိတ်ဆို့နေခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "情熱の空回り、意欲の減退、出鼻をくじかれる遅延に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-2",
    "file": "Wands02.png",
    "name": {
      "en": "Two of Wands",
      "my": "သစ်သားလှံတံ ၂ (အနာဂတ်အတွက် အစီအစဉ်ချမှတ်ခြင်း)",
      "ja": "ワンドの2"
    },
    "number": 2,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 2)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 2)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 2）"
    },
    "uprightKeywords": {
      "en": [
        "Visionary planning, holding the world, future expansion"
      ],
      "my": [
        "ကမ္ဘာကို လွှမ်းခြုံကြည့်ရှုနိုင်သော အနာဂတ်အစီအစဉ်များ ချမှတ်ခြင်း"
      ],
      "ja": [
        "未来を見据えた構想、世界への進出、大志"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Fear of unknown, staying inside comfort zone"
      ],
      "my": [
        "မသိသေးသောအရာကို ကြောက်ရွံ့၍ အဟောင်းထဲတွင်သာ နေထိုင်မိခြင်း"
      ],
      "ja": [
        "未知への恐れ、安全圏への固執、決断の遅れ"
      ]
    },
    "uprightMeaning": {
      "en": "Two of Wands: Visionary planning, holding the world, future expansion.",
      "my": "သစ်သားလှံတံ ၂ (အနာဂတ်အတွက် အစီအစဉ်ချမှတ်ခြင်း): ကမ္ဘာကို လွှမ်းခြုံကြည့်ရှုနိုင်သော အနာဂတ်အစီအစဉ်များ ချမှတ်ခြင်း။",
      "ja": "【ワンドの2】：未来を見据えた構想、世界への進出、大志。"
    },
    "reversedMeaning": {
      "en": "Reversed Two of Wands: Fear of unknown, staying inside comfort zone.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၂ (အနာဂတ်အတွက် အစီအစဉ်ချမှတ်ခြင်း): မသိသေးသောအရာကို ကြောက်ရွံ့၍ အဟောင်းထဲတွင်သာ နေထိုင်မိခြင်း။",
      "ja": "逆位置【ワンドの2】：未知への恐れ、安全圏への固執、決断の遅れ。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Two of Wands reflects visionary planning, holding the world, future expansion.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၂ (အနာဂတ်အတွက် အစီအစဉ်ချမှတ်ခြင်း) သည် ကမ္ဘာကို လွှမ်းခြုံကြည့်ရှုနိုင်သော အနာဂတ်အစီအစဉ်များ ချမှတ်ခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、未来を見据えた構想、世界への進出、大志が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Two of Wands warns of fear of unknown, staying inside comfort zone.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၂ (အနာဂတ်အတွက် အစီအစဉ်ချမှတ်ခြင်း) သည် မသိသေးသောအရာကို ကြောက်ရွံ့၍ အဟောင်းထဲတွင်သာ နေထိုင်မိခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、未知への恐れ、安全圏への固執、決断の遅れに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Two of Wands brings visionary planning, holding the world, future expansion.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၂ (အနာဂတ်အတွက် အစီအစဉ်ချမှတ်ခြင်း) သည် ကမ္ဘာကို လွှမ်းခြုံကြည့်ရှုနိုင်သော အနာဂတ်အစီအစဉ်များ ချမှတ်ခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、未来を見据えた構想、世界への進出、大志の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of fear of unknown, staying inside comfort zone.",
        "my": "အလုပ်အကိုင်တွင် မသိသေးသောအရာကို ကြောက်ရွံ့၍ အဟောင်းထဲတွင်သာ နေထိုင်မိခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、未知への恐れ、安全圏への固執、決断の遅れによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace visionary planning, holding the world, future expansion.",
        "my": "ဝိညာဉ်ရေးရာတွင် ကမ္ဘာကို လွှမ်းခြုံကြည့်ရှုနိုင်သော အနာဂတ်အစီအစဉ်များ ချမှတ်ခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、未来を見据えた構想、世界への進出、大志の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform fear of unknown, staying inside comfort zone.",
        "my": "ဝိညာဉ်ရေးရာတွင် မသိသေးသောအရာကို ကြောက်ရွံ့၍ အဟောင်းထဲတွင်သာ နေထိုင်မိခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる未知への恐れ、安全圏への固執、決断の遅れを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from visionary planning, holding the world, future expansion.",
      "my": "ကမ္ဘာကို လွှမ်းခြုံကြည့်ရှုနိုင်သော အနာဂတ်အစီအစဉ်များ ချမှတ်ခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "未来を見据えた構想、世界への進出、大志の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to fear of unknown, staying inside comfort zone.",
      "my": "မသိသေးသောအရာကို ကြောက်ရွံ့၍ အဟောင်းထဲတွင်သာ နေထိုင်မိခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "未知への恐れ、安全圏への固執、決断の遅れに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-3",
    "file": "Wands03.png",
    "name": {
      "en": "Three of Wands",
      "my": "သစ်သားလှံတံ ၃ (အဝေးသို့ ချဲ့ထွင်ခြင်းနှင့် ရလဒ်များ စတင်ရောက်ရှိခြင်း)",
      "ja": "ワンドの3"
    },
    "number": 3,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 3)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 3)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 3）"
    },
    "uprightKeywords": {
      "en": [
        "Expansion, foresight, ships coming in, rewarding momentum"
      ],
      "my": [
        "လုပ်ငန်းချဲ့ထွင်နိုင်ခြင်း၊ စိုက်ထုတ်ထားသော အသီးအပွင့်များ ရောက်ရှိလာခြင်း"
      ],
      "ja": [
        "計画の拡大、商機の到来、実りの予感"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Delays in plans, missed opportunities, or obstacles"
      ],
      "my": [
        "အစီအစဉ်များ နှောင့်နှေးခြင်း သို့မဟုတ် အခွင့်အလမ်းများ လွဲချော်ခြင်း"
      ],
      "ja": [
        "期待外れの遅延、障害による停滞"
      ]
    },
    "uprightMeaning": {
      "en": "Three of Wands: Expansion, foresight, ships coming in, rewarding momentum.",
      "my": "သစ်သားလှံတံ ၃ (အဝေးသို့ ချဲ့ထွင်ခြင်းနှင့် ရလဒ်များ စတင်ရောက်ရှိခြင်း): လုပ်ငန်းချဲ့ထွင်နိုင်ခြင်း၊ စိုက်ထုတ်ထားသော အသီးအပွင့်များ ရောက်ရှိလာခြင်း။",
      "ja": "【ワンドの3】：計画の拡大、商機の到来、実りの予感。"
    },
    "reversedMeaning": {
      "en": "Reversed Three of Wands: Delays in plans, missed opportunities, or obstacles.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၃ (အဝေးသို့ ချဲ့ထွင်ခြင်းနှင့် ရလဒ်များ စတင်ရောက်ရှိခြင်း): အစီအစဉ်များ နှောင့်နှေးခြင်း သို့မဟုတ် အခွင့်အလမ်းများ လွဲချော်ခြင်း။",
      "ja": "逆位置【ワンドの3】：期待外れの遅延、障害による停滞。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Three of Wands reflects expansion, foresight, ships coming in, rewarding momentum.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၃ (အဝေးသို့ ချဲ့ထွင်ခြင်းနှင့် ရလဒ်များ စတင်ရောက်ရှိခြင်း) သည် လုပ်ငန်းချဲ့ထွင်နိုင်ခြင်း၊ စိုက်ထုတ်ထားသော အသီးအပွင့်များ ရောက်ရှိလာခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、計画の拡大、商機の到来、実りの予感が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Three of Wands warns of delays in plans, missed opportunities, or obstacles.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၃ (အဝေးသို့ ချဲ့ထွင်ခြင်းနှင့် ရလဒ်များ စတင်ရောက်ရှိခြင်း) သည် အစီအစဉ်များ နှောင့်နှေးခြင်း သို့မဟုတ် အခွင့်အလမ်းများ လွဲချော်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、期待外れの遅延、障害による停滞に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Three of Wands brings expansion, foresight, ships coming in, rewarding momentum.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၃ (အဝေးသို့ ချဲ့ထွင်ခြင်းနှင့် ရလဒ်များ စတင်ရောက်ရှိခြင်း) သည် လုပ်ငန်းချဲ့ထွင်နိုင်ခြင်း၊ စိုက်ထုတ်ထားသော အသီးအပွင့်များ ရောက်ရှိလာခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、計画の拡大、商機の到来、実りの予感の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of delays in plans, missed opportunities, or obstacles.",
        "my": "အလုပ်အကိုင်တွင် အစီအစဉ်များ နှောင့်နှေးခြင်း သို့မဟုတ် အခွင့်အလမ်းများ လွဲချော်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、期待外れの遅延、障害による停滞による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace expansion, foresight, ships coming in, rewarding momentum.",
        "my": "ဝိညာဉ်ရေးရာတွင် လုပ်ငန်းချဲ့ထွင်နိုင်ခြင်း၊ စိုက်ထုတ်ထားသော အသီးအပွင့်များ ရောက်ရှိလာခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、計画の拡大、商機の到来、実りの予感の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform delays in plans, missed opportunities, or obstacles.",
        "my": "ဝိညာဉ်ရေးရာတွင် အစီအစဉ်များ နှောင့်နှေးခြင်း သို့မဟုတ် အခွင့်အလမ်းများ လွဲချော်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる期待外れの遅延、障害による停滞を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from expansion, foresight, ships coming in, rewarding momentum.",
      "my": "လုပ်ငန်းချဲ့ထွင်နိုင်ခြင်း၊ စိုက်ထုတ်ထားသော အသီးအပွင့်များ ရောက်ရှိလာခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "計画の拡大、商機の到来、実りの予感の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to delays in plans, missed opportunities, or obstacles.",
      "my": "အစီအစဉ်များ နှောင့်နှေးခြင်း သို့မဟုတ် အခွင့်အလမ်းများ လွဲချော်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "期待外れの遅延、障害による停滞に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-4",
    "file": "Wands04.png",
    "name": {
      "en": "Four of Wands",
      "my": "သစ်သားလှံတံ ၄ (အောင်ပွဲခံ မင်္ဂလာပွဲနှင့် အိမ်ဂေဟာ)",
      "ja": "ワンドの4"
    },
    "number": 4,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 4)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 4)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 4）"
    },
    "uprightKeywords": {
      "en": [
        "Celebration, homecoming, harmonious sanctuary, and joy"
      ],
      "my": [
        "အောင်ပွဲခံ ပျော်ရွှင်ပွဲ၊ အိမ်ထောင်မင်္ဂလာနှင့် အေးချမ်းသော ဂေဟာ"
      ],
      "ja": [
        "祝祭、安住の地、調和と喜びに満ちた達成"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Transient instability, minor domestic tension"
      ],
      "my": [
        "ယာယီ မတည်ငြိမ်မှု သို့မဟုတ် အိမ်တွင်း အနည်းငယ် စိတ်အနှောင့်အယှက်ဖြစ်ခြင်း"
      ],
      "ja": [
        "一時的な落ち着きのなさ、家庭内の不協和音"
      ]
    },
    "uprightMeaning": {
      "en": "Four of Wands: Celebration, homecoming, harmonious sanctuary, and joy.",
      "my": "သစ်သားလှံတံ ၄ (အောင်ပွဲခံ မင်္ဂလာပွဲနှင့် အိမ်ဂေဟာ): အောင်ပွဲခံ ပျော်ရွှင်ပွဲ၊ အိမ်ထောင်မင်္ဂလာနှင့် အေးချမ်းသော ဂေဟာ။",
      "ja": "【ワンドの4】：祝祭、安住の地、調和と喜びに満ちた達成。"
    },
    "reversedMeaning": {
      "en": "Reversed Four of Wands: Transient instability, minor domestic tension.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၄ (အောင်ပွဲခံ မင်္ဂလာပွဲနှင့် အိမ်ဂေဟာ): ယာယီ မတည်ငြိမ်မှု သို့မဟုတ် အိမ်တွင်း အနည်းငယ် စိတ်အနှောင့်အယှက်ဖြစ်ခြင်း။",
      "ja": "逆位置【ワンドの4】：一時的な落ち着きのなさ、家庭内の不協和音。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Four of Wands reflects celebration, homecoming, harmonious sanctuary, and joy.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၄ (အောင်ပွဲခံ မင်္ဂလာပွဲနှင့် အိမ်ဂေဟာ) သည် အောင်ပွဲခံ ပျော်ရွှင်ပွဲ၊ အိမ်ထောင်မင်္ဂလာနှင့် အေးချမ်းသော ဂေဟာ ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、祝祭、安住の地、調和と喜びに満ちた達成が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Four of Wands warns of transient instability, minor domestic tension.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၄ (အောင်ပွဲခံ မင်္ဂလာပွဲနှင့် အိမ်ဂေဟာ) သည် ယာယီ မတည်ငြိမ်မှု သို့မဟုတ် အိမ်တွင်း အနည်းငယ် စိတ်အနှောင့်အယှက်ဖြစ်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、一時的な落ち着きのなさ、家庭内の不協和音に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Four of Wands brings celebration, homecoming, harmonious sanctuary, and joy.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၄ (အောင်ပွဲခံ မင်္ဂလာပွဲနှင့် အိမ်ဂေဟာ) သည် အောင်ပွဲခံ ပျော်ရွှင်ပွဲ၊ အိမ်ထောင်မင်္ဂလာနှင့် အေးချမ်းသော ဂေဟာ ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、祝祭、安住の地、調和と喜びに満ちた達成の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of transient instability, minor domestic tension.",
        "my": "အလုပ်အကိုင်တွင် ယာယီ မတည်ငြိမ်မှု သို့မဟုတ် အိမ်တွင်း အနည်းငယ် စိတ်အနှောင့်အယှက်ဖြစ်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、一時的な落ち着きのなさ、家庭内の不協和音による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace celebration, homecoming, harmonious sanctuary, and joy.",
        "my": "ဝိညာဉ်ရေးရာတွင် အောင်ပွဲခံ ပျော်ရွှင်ပွဲ၊ အိမ်ထောင်မင်္ဂလာနှင့် အေးချမ်းသော ဂေဟာ ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、祝祭、安住の地、調和と喜びに満ちた達成の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform transient instability, minor domestic tension.",
        "my": "ဝိညာဉ်ရေးရာတွင် ယာယီ မတည်ငြိမ်မှု သို့မဟုတ် အိမ်တွင်း အနည်းငယ် စိတ်အနှောင့်အယှက်ဖြစ်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる一時的な落ち着きのなさ、家庭内の不協和音を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from celebration, homecoming, harmonious sanctuary, and joy.",
      "my": "အောင်ပွဲခံ ပျော်ရွှင်ပွဲ၊ အိမ်ထောင်မင်္ဂလာနှင့် အေးချမ်းသော ဂေဟာ ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "祝祭、安住の地、調和と喜びに満ちた達成の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to transient instability, minor domestic tension.",
      "my": "ယာယီ မတည်ငြိမ်မှု သို့မဟုတ် အိမ်တွင်း အနည်းငယ် စိတ်အနှောင့်အယှက်ဖြစ်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "一時的な落ち着きのなさ、家庭内の不協和音に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-5",
    "file": "Wands05.png",
    "name": {
      "en": "Five of Wands",
      "my": "သစ်သားလှံတံ ၅ (ပြိုင်ဆိုင်မှုနှင့် သဘောထားကွဲလွဲခြင်း)",
      "ja": "ワンドの5"
    },
    "number": 5,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 5)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 5)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 5）"
    },
    "uprightKeywords": {
      "en": [
        "Competition, conflict, chaotic friction, and testing"
      ],
      "my": [
        "အပြိုင်အဆိုင် များပြားခြင်း၊ အချင်းချင်း ပွတ်တိုက်မှုများ ဖြစ်ပေါ်ခြင်း"
      ],
      "ja": [
        "激しい競争、意見の衝突、試練となる摩擦"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Conflict resolution, finding agreement, avoiding drama"
      ],
      "my": [
        "သဘောထားကွဲလွဲမှုများ ပြေလည်သွားခြင်း၊ ပြိုင်ဆိုင်မှုမှ လွတ်မြောက်ခြင်း"
      ],
      "ja": [
        "争いの収束、妥協点の発見、調和への移行"
      ]
    },
    "uprightMeaning": {
      "en": "Five of Wands: Competition, conflict, chaotic friction, and testing.",
      "my": "သစ်သားလှံတံ ၅ (ပြိုင်ဆိုင်မှုနှင့် သဘောထားကွဲလွဲခြင်း): အပြိုင်အဆိုင် များပြားခြင်း၊ အချင်းချင်း ပွတ်တိုက်မှုများ ဖြစ်ပေါ်ခြင်း။",
      "ja": "【ワンドの5】：激しい競争、意見の衝突、試練となる摩擦。"
    },
    "reversedMeaning": {
      "en": "Reversed Five of Wands: Conflict resolution, finding agreement, avoiding drama.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၅ (ပြိုင်ဆိုင်မှုနှင့် သဘောထားကွဲလွဲခြင်း): သဘောထားကွဲလွဲမှုများ ပြေလည်သွားခြင်း၊ ပြိုင်ဆိုင်မှုမှ လွတ်မြောက်ခြင်း။",
      "ja": "逆位置【ワンドの5】：争いの収束、妥協点の発見、調和への移行。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Five of Wands reflects competition, conflict, chaotic friction, and testing.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၅ (ပြိုင်ဆိုင်မှုနှင့် သဘောထားကွဲလွဲခြင်း) သည် အပြိုင်အဆိုင် များပြားခြင်း၊ အချင်းချင်း ပွတ်တိုက်မှုများ ဖြစ်ပေါ်ခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、激しい競争、意見の衝突、試練となる摩擦が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Five of Wands warns of conflict resolution, finding agreement, avoiding drama.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၅ (ပြိုင်ဆိုင်မှုနှင့် သဘောထားကွဲလွဲခြင်း) သည် သဘောထားကွဲလွဲမှုများ ပြေလည်သွားခြင်း၊ ပြိုင်ဆိုင်မှုမှ လွတ်မြောက်ခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、争いの収束、妥協点の発見、調和への移行に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Five of Wands brings competition, conflict, chaotic friction, and testing.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၅ (ပြိုင်ဆိုင်မှုနှင့် သဘောထားကွဲလွဲခြင်း) သည် အပြိုင်အဆိုင် များပြားခြင်း၊ အချင်းချင်း ပွတ်တိုက်မှုများ ဖြစ်ပေါ်ခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、激しい競争、意見の衝突、試練となる摩擦の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of conflict resolution, finding agreement, avoiding drama.",
        "my": "အလုပ်အကိုင်တွင် သဘောထားကွဲလွဲမှုများ ပြေလည်သွားခြင်း၊ ပြိုင်ဆိုင်မှုမှ လွတ်မြောက်ခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、争いの収束、妥協点の発見、調和への移行による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace competition, conflict, chaotic friction, and testing.",
        "my": "ဝိညာဉ်ရေးရာတွင် အပြိုင်အဆိုင် များပြားခြင်း၊ အချင်းချင်း ပွတ်တိုက်မှုများ ဖြစ်ပေါ်ခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、激しい競争、意見の衝突、試練となる摩擦の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform conflict resolution, finding agreement, avoiding drama.",
        "my": "ဝိညာဉ်ရေးရာတွင် သဘောထားကွဲလွဲမှုများ ပြေလည်သွားခြင်း၊ ပြိုင်ဆိုင်မှုမှ လွတ်မြောက်ခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる争いの収束、妥協点の発見、調和への移行を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from competition, conflict, chaotic friction, and testing.",
      "my": "အပြိုင်အဆိုင် များပြားခြင်း၊ အချင်းချင်း ပွတ်တိုက်မှုများ ဖြစ်ပေါ်ခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "激しい競争、意見の衝突、試練となる摩擦の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to conflict resolution, finding agreement, avoiding drama.",
      "my": "သဘောထားကွဲလွဲမှုများ ပြေလည်သွားခြင်း၊ ပြိုင်ဆိုင်မှုမှ လွတ်မြောက်ခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "争いの収束、妥協点の発見、調和への移行に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (ပြိုင်ဆိုင်မှုရှိသည်)",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-6",
    "file": "Wands06.png",
    "name": {
      "en": "Six of Wands",
      "my": "သစ်သားလှံတံ ၆ (အောင်ပွဲခံ မြင်းစီးသူနှင့် ဂုဏ်ပြုခံရခြင်း)",
      "ja": "ワンドの6"
    },
    "number": 6,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 6)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 6)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 6）"
    },
    "uprightKeywords": {
      "en": [
        "Public victory, triumph, acclaim, and proud achievement"
      ],
      "my": [
        "လူထုရှေ့တွင် အောင်ပွဲခံရခြင်း၊ လူအများ၏ အသိအမှတ်ပြု ချီးကျူးမှုကို ရရှိခြင်း"
      ],
      "ja": [
        "輝かしい凱旋、称賛、社会的成功と栄誉"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Fallen ego, public disgrace, or hunger for external validation"
      ],
      "my": [
        "မာနကျဆင်းခြင်း သို့မဟုတ် အခြားသူများ၏ အသိအမှတ်ပြုမှုကိုသာ အလွန်အမင်း တောင့်တခြင်း"
      ],
      "ja": [
        "自信の喪失、過大評価への反動、不名誉"
      ]
    },
    "uprightMeaning": {
      "en": "Six of Wands: Public victory, triumph, acclaim, and proud achievement.",
      "my": "သစ်သားလှံတံ ၆ (အောင်ပွဲခံ မြင်းစီးသူနှင့် ဂုဏ်ပြုခံရခြင်း): လူထုရှေ့တွင် အောင်ပွဲခံရခြင်း၊ လူအများ၏ အသိအမှတ်ပြု ချီးကျူးမှုကို ရရှိခြင်း။",
      "ja": "【ワンドの6】：輝かしい凱旋、称賛、社会的成功と栄誉。"
    },
    "reversedMeaning": {
      "en": "Reversed Six of Wands: Fallen ego, public disgrace, or hunger for external validation.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၆ (အောင်ပွဲခံ မြင်းစီးသူနှင့် ဂုဏ်ပြုခံရခြင်း): မာနကျဆင်းခြင်း သို့မဟုတ် အခြားသူများ၏ အသိအမှတ်ပြုမှုကိုသာ အလွန်အမင်း တောင့်တခြင်း။",
      "ja": "逆位置【ワンドの6】：自信の喪失、過大評価への反動、不名誉。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Six of Wands reflects public victory, triumph, acclaim, and proud achievement.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၆ (အောင်ပွဲခံ မြင်းစီးသူနှင့် ဂုဏ်ပြုခံရခြင်း) သည် လူထုရှေ့တွင် အောင်ပွဲခံရခြင်း၊ လူအများ၏ အသိအမှတ်ပြု ချီးကျူးမှုကို ရရှိခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、輝かしい凱旋、称賛、社会的成功と栄誉が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Six of Wands warns of fallen ego, public disgrace, or hunger for external validation.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၆ (အောင်ပွဲခံ မြင်းစီးသူနှင့် ဂုဏ်ပြုခံရခြင်း) သည် မာနကျဆင်းခြင်း သို့မဟုတ် အခြားသူများ၏ အသိအမှတ်ပြုမှုကိုသာ အလွန်အမင်း တောင့်တခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、自信の喪失、過大評価への反動、不名誉に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Six of Wands brings public victory, triumph, acclaim, and proud achievement.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၆ (အောင်ပွဲခံ မြင်းစီးသူနှင့် ဂုဏ်ပြုခံရခြင်း) သည် လူထုရှေ့တွင် အောင်ပွဲခံရခြင်း၊ လူအများ၏ အသိအမှတ်ပြု ချီးကျူးမှုကို ရရှိခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、輝かしい凱旋、称賛、社会的成功と栄誉の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of fallen ego, public disgrace, or hunger for external validation.",
        "my": "အလုပ်အကိုင်တွင် မာနကျဆင်းခြင်း သို့မဟုတ် အခြားသူများ၏ အသိအမှတ်ပြုမှုကိုသာ အလွန်အမင်း တောင့်တခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、自信の喪失、過大評価への反動、不名誉による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace public victory, triumph, acclaim, and proud achievement.",
        "my": "ဝိညာဉ်ရေးရာတွင် လူထုရှေ့တွင် အောင်ပွဲခံရခြင်း၊ လူအများ၏ အသိအမှတ်ပြု ချီးကျူးမှုကို ရရှိခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、輝かしい凱旋、称賛、社会的成功と栄誉の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform fallen ego, public disgrace, or hunger for external validation.",
        "my": "ဝိညာဉ်ရေးရာတွင် မာနကျဆင်းခြင်း သို့မဟုတ် အခြားသူများ၏ အသိအမှတ်ပြုမှုကိုသာ အလွန်အမင်း တောင့်တခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる自信の喪失、過大評価への反動、不名誉を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from public victory, triumph, acclaim, and proud achievement.",
      "my": "လူထုရှေ့တွင် အောင်ပွဲခံရခြင်း၊ လူအများ၏ အသိအမှတ်ပြု ချီးကျူးမှုကို ရရှိခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "輝かしい凱旋、称賛、社会的成功と栄誉の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to fallen ego, public disgrace, or hunger for external validation.",
      "my": "မာနကျဆင်းခြင်း သို့မဟုတ် အခြားသူများ၏ အသိအမှတ်ပြုမှုကိုသာ အလွန်အမင်း တောင့်တခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "自信の喪失、過大評価への反動、不名誉に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-7",
    "file": "Wands07.png",
    "name": {
      "en": "Seven of Wands",
      "my": "သစ်သားလှံတံ ၇ (အခက်အခဲများကို ရဲဝံ့စွာ ရင်ဆိုင်တွန်းလှန်ခြင်း)",
      "ja": "ワンドの7"
    },
    "number": 7,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 7)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 7)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 7）"
    },
    "uprightKeywords": {
      "en": [
        "Defending high ground, perseverance, and standing tall"
      ],
      "my": [
        "အသာစီးနေရာမှ ရဲဝံ့စွာ ခုခံကာကွယ်ခြင်း၊ မဆုတ်မနစ် ကြံ့ကြံ့ခံခြင်း"
      ],
      "ja": [
        "優位な立場の死守、孤軍奮闘、不屈の勇気"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Feeling overwhelmed, giving up, or fighting unnecessary battles"
      ],
      "my": [
        "အားကုန်နွမ်းနယ်ခြင်း သို့မဟုတ် မလိုအပ်သော တိုက်ပွဲများကို တိုက်နေမိခြင်း"
      ],
      "ja": [
        "圧倒されるプレッシャー、孤立無援、降伏"
      ]
    },
    "uprightMeaning": {
      "en": "Seven of Wands: Defending high ground, perseverance, and standing tall.",
      "my": "သစ်သားလှံတံ ၇ (အခက်အခဲများကို ရဲဝံ့စွာ ရင်ဆိုင်တွန်းလှန်ခြင်း): အသာစီးနေရာမှ ရဲဝံ့စွာ ခုခံကာကွယ်ခြင်း၊ မဆုတ်မနစ် ကြံ့ကြံ့ခံခြင်း။",
      "ja": "【ワンドの7】：優位な立場の死守、孤軍奮闘、不屈の勇気。"
    },
    "reversedMeaning": {
      "en": "Reversed Seven of Wands: Feeling overwhelmed, giving up, or fighting unnecessary battles.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၇ (အခက်အခဲများကို ရဲဝံ့စွာ ရင်ဆိုင်တွန်းလှန်ခြင်း): အားကုန်နွမ်းနယ်ခြင်း သို့မဟုတ် မလိုအပ်သော တိုက်ပွဲများကို တိုက်နေမိခြင်း။",
      "ja": "逆位置【ワンドの7】：圧倒されるプレッシャー、孤立無援、降伏。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Seven of Wands reflects defending high ground, perseverance, and standing tall.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၇ (အခက်အခဲများကို ရဲဝံ့စွာ ရင်ဆိုင်တွန်းလှန်ခြင်း) သည် အသာစီးနေရာမှ ရဲဝံ့စွာ ခုခံကာကွယ်ခြင်း၊ မဆုတ်မနစ် ကြံ့ကြံ့ခံခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、優位な立場の死守、孤軍奮闘、不屈の勇気が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Seven of Wands warns of feeling overwhelmed, giving up, or fighting unnecessary battles.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၇ (အခက်အခဲများကို ရဲဝံ့စွာ ရင်ဆိုင်တွန်းလှန်ခြင်း) သည် အားကုန်နွမ်းနယ်ခြင်း သို့မဟုတ် မလိုအပ်သော တိုက်ပွဲများကို တိုက်နေမိခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、圧倒されるプレッシャー、孤立無援、降伏に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Seven of Wands brings defending high ground, perseverance, and standing tall.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၇ (အခက်အခဲများကို ရဲဝံ့စွာ ရင်ဆိုင်တွန်းလှန်ခြင်း) သည် အသာစီးနေရာမှ ရဲဝံ့စွာ ခုခံကာကွယ်ခြင်း၊ မဆုတ်မနစ် ကြံ့ကြံ့ခံခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、優位な立場の死守、孤軍奮闘、不屈の勇気の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of feeling overwhelmed, giving up, or fighting unnecessary battles.",
        "my": "အလုပ်အကိုင်တွင် အားကုန်နွမ်းနယ်ခြင်း သို့မဟုတ် မလိုအပ်သော တိုက်ပွဲများကို တိုက်နေမိခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、圧倒されるプレッシャー、孤立無援、降伏による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace defending high ground, perseverance, and standing tall.",
        "my": "ဝိညာဉ်ရေးရာတွင် အသာစီးနေရာမှ ရဲဝံ့စွာ ခုခံကာကွယ်ခြင်း၊ မဆုတ်မနစ် ကြံ့ကြံ့ခံခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、優位な立場の死守、孤軍奮闘、不屈の勇気の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform feeling overwhelmed, giving up, or fighting unnecessary battles.",
        "my": "ဝိညာဉ်ရေးရာတွင် အားကုန်နွမ်းနယ်ခြင်း သို့မဟုတ် မလိုအပ်သော တိုက်ပွဲများကို တိုက်နေမိခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる圧倒されるプレッシャー、孤立無援、降伏を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from defending high ground, perseverance, and standing tall.",
      "my": "အသာစီးနေရာမှ ရဲဝံ့စွာ ခုခံကာကွယ်ခြင်း၊ မဆုတ်မနစ် ကြံ့ကြံ့ခံခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "優位な立場の死守、孤軍奮闘、不屈の勇気の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to feeling overwhelmed, giving up, or fighting unnecessary battles.",
      "my": "အားကုန်နွမ်းနယ်ခြင်း သို့မဟုတ် မလိုအပ်သော တိုက်ပွဲများကို တိုက်နေမိခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "圧倒されるプレッシャー、孤立無援、降伏に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (ဆက်လက်ရပ်တည်ပါ)",
      "ja": "YES（耐え抜けば）"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-8",
    "file": "Wands08.png",
    "name": {
      "en": "Eight of Wands",
      "my": "သစ်သားလှံတံ ၈ (အရှိန်အဟုန်ပြင်းစွာ လျင်မြန်စွာ ဖြစ်ပေါ်ခြင်း)",
      "ja": "ワンドの8"
    },
    "number": 8,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 8)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 8)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 8）"
    },
    "uprightKeywords": {
      "en": [
        "Rapid speed, swift action, incoming messages, and flight"
      ],
      "my": [
        "အလွန်လျင်မြန်သော အရှိန်အဟုန်၊ သတင်းစကားများ ချက်ချင်းရောက်ရှိလာခြင်း"
      ],
      "ja": [
        "急展開、迅速な便り、一気呵成の前進"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Delays, panic, rushing headlong into mistakes"
      ],
      "my": [
        "အလျင်စလိုလုပ်၍ မှားယွင်းခြင်း သို့မဟုတ် မမျှော်လင့်ဘဲ နှောင့်နှေးခြင်း"
      ],
      "ja": [
        "焦りによる空回り、不意の遅延、誤報"
      ]
    },
    "uprightMeaning": {
      "en": "Eight of Wands: Rapid speed, swift action, incoming messages, and flight.",
      "my": "သစ်သားလှံတံ ၈ (အရှိန်အဟုန်ပြင်းစွာ လျင်မြန်စွာ ဖြစ်ပေါ်ခြင်း): အလွန်လျင်မြန်သော အရှိန်အဟုန်၊ သတင်းစကားများ ချက်ချင်းရောက်ရှိလာခြင်း။",
      "ja": "【ワンドの8】：急展開、迅速な便り、一気呵成の前進。"
    },
    "reversedMeaning": {
      "en": "Reversed Eight of Wands: Delays, panic, rushing headlong into mistakes.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၈ (အရှိန်အဟုန်ပြင်းစွာ လျင်မြန်စွာ ဖြစ်ပေါ်ခြင်း): အလျင်စလိုလုပ်၍ မှားယွင်းခြင်း သို့မဟုတ် မမျှော်လင့်ဘဲ နှောင့်နှေးခြင်း။",
      "ja": "逆位置【ワンドの8】：焦りによる空回り、不意の遅延、誤報。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Eight of Wands reflects rapid speed, swift action, incoming messages, and flight.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၈ (အရှိန်အဟုန်ပြင်းစွာ လျင်မြန်စွာ ဖြစ်ပေါ်ခြင်း) သည် အလွန်လျင်မြန်သော အရှိန်အဟုန်၊ သတင်းစကားများ ချက်ချင်းရောက်ရှိလာခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、急展開、迅速な便り、一気呵成の前進が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Eight of Wands warns of delays, panic, rushing headlong into mistakes.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၈ (အရှိန်အဟုန်ပြင်းစွာ လျင်မြန်စွာ ဖြစ်ပေါ်ခြင်း) သည် အလျင်စလိုလုပ်၍ မှားယွင်းခြင်း သို့မဟုတ် မမျှော်လင့်ဘဲ နှောင့်နှေးခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、焦りによる空回り、不意の遅延、誤報に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Eight of Wands brings rapid speed, swift action, incoming messages, and flight.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၈ (အရှိန်အဟုန်ပြင်းစွာ လျင်မြန်စွာ ဖြစ်ပေါ်ခြင်း) သည် အလွန်လျင်မြန်သော အရှိန်အဟုန်၊ သတင်းစကားများ ချက်ချင်းရောက်ရှိလာခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、急展開、迅速な便り、一気呵成の前進の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of delays, panic, rushing headlong into mistakes.",
        "my": "အလုပ်အကိုင်တွင် အလျင်စလိုလုပ်၍ မှားယွင်းခြင်း သို့မဟုတ် မမျှော်လင့်ဘဲ နှောင့်နှေးခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、焦りによる空回り、不意の遅延、誤報による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace rapid speed, swift action, incoming messages, and flight.",
        "my": "ဝိညာဉ်ရေးရာတွင် အလွန်လျင်မြန်သော အရှိန်အဟုန်၊ သတင်းစကားများ ချက်ချင်းရောက်ရှိလာခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、急展開、迅速な便り、一気呵成の前進の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform delays, panic, rushing headlong into mistakes.",
        "my": "ဝိညာဉ်ရေးရာတွင် အလျင်စလိုလုပ်၍ မှားယွင်းခြင်း သို့မဟုတ် မမျှော်လင့်ဘဲ နှောင့်နှေးခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる焦りによる空回り、不意の遅延、誤報を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from rapid speed, swift action, incoming messages, and flight.",
      "my": "အလွန်လျင်မြန်သော အရှိန်အဟုန်၊ သတင်းစကားများ ချက်ချင်းရောက်ရှိလာခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "急展開、迅速な便り、一気呵成の前進の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to delays, panic, rushing headlong into mistakes.",
      "my": "အလျင်စလိုလုပ်၍ မှားယွင်းခြင်း သို့မဟုတ် မမျှော်လင့်ဘဲ နှောင့်နှေးခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "焦りによる空回り、不意の遅延、誤報に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည် (အလွန်မြန်မည်)",
      "ja": "YES（迅速）"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-9",
    "file": "Wands09.png",
    "name": {
      "en": "Nine of Wands",
      "my": "သစ်သားလှံတံ ၉ (နောက်ဆုံးအဆင့်အထိ ကြံ့ကြံ့ခံ ရပ်တည်ခြင်း)",
      "ja": "ワンドの9"
    },
    "number": 9,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 9)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 9)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 9）"
    },
    "uprightKeywords": {
      "en": [
        "Resilience, battle-weary grit, defending the final line"
      ],
      "my": [
        "ပင်ပန်းသော်လည်း နောက်ဆုံးအထိ အရှုံးမပေးဘဲ ရဲဝံ့စွာ ကြံ့ကြံ့ခံခြင်း"
      ],
      "ja": [
        "不屈の忍耐、最終防衛線、試練の果ての粘り"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Paranoia, burnout, defensive walls that isolate you"
      ],
      "my": [
        "သံသယလွန်ကဲခြင်း သို့မဟုတ် စိတ်ပင်ပန်းနွမ်းနယ်လွန်း၍ အရှုံးပေးချင်လာခြင်း"
      ],
      "ja": [
        "頑なな意固地、被害妄想、過度の消耗"
      ]
    },
    "uprightMeaning": {
      "en": "Nine of Wands: Resilience, battle-weary grit, defending the final line.",
      "my": "သစ်သားလှံတံ ၉ (နောက်ဆုံးအဆင့်အထိ ကြံ့ကြံ့ခံ ရပ်တည်ခြင်း): ပင်ပန်းသော်လည်း နောက်ဆုံးအထိ အရှုံးမပေးဘဲ ရဲဝံ့စွာ ကြံ့ကြံ့ခံခြင်း။",
      "ja": "【ワンドの9】：不屈の忍耐、最終防衛線、試練の果ての粘り。"
    },
    "reversedMeaning": {
      "en": "Reversed Nine of Wands: Paranoia, burnout, defensive walls that isolate you.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၉ (နောက်ဆုံးအဆင့်အထိ ကြံ့ကြံ့ခံ ရပ်တည်ခြင်း): သံသယလွန်ကဲခြင်း သို့မဟုတ် စိတ်ပင်ပန်းနွမ်းနယ်လွန်း၍ အရှုံးပေးချင်လာခြင်း။",
      "ja": "逆位置【ワンドの9】：頑なな意固地、被害妄想、過度の消耗。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Nine of Wands reflects resilience, battle-weary grit, defending the final line.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၉ (နောက်ဆုံးအဆင့်အထိ ကြံ့ကြံ့ခံ ရပ်တည်ခြင်း) သည် ပင်ပန်းသော်လည်း နောက်ဆုံးအထိ အရှုံးမပေးဘဲ ရဲဝံ့စွာ ကြံ့ကြံ့ခံခြင်း ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、不屈の忍耐、最終防衛線、試練の果ての粘りが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Nine of Wands warns of paranoia, burnout, defensive walls that isolate you.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၉ (နောက်ဆုံးအဆင့်အထိ ကြံ့ကြံ့ခံ ရပ်တည်ခြင်း) သည် သံသယလွန်ကဲခြင်း သို့မဟုတ် စိတ်ပင်ပန်းနွမ်းနယ်လွန်း၍ အရှုံးပေးချင်လာခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、頑なな意固地、被害妄想、過度の消耗に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Nine of Wands brings resilience, battle-weary grit, defending the final line.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၉ (နောက်ဆုံးအဆင့်အထိ ကြံ့ကြံ့ခံ ရပ်တည်ခြင်း) သည် ပင်ပန်းသော်လည်း နောက်ဆုံးအထိ အရှုံးမပေးဘဲ ရဲဝံ့စွာ ကြံ့ကြံ့ခံခြင်း ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、不屈の忍耐、最終防衛線、試練の果ての粘りの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of paranoia, burnout, defensive walls that isolate you.",
        "my": "အလုပ်အကိုင်တွင် သံသယလွန်ကဲခြင်း သို့မဟုတ် စိတ်ပင်ပန်းနွမ်းနယ်လွန်း၍ အရှုံးပေးချင်လာခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、頑なな意固地、被害妄想、過度の消耗による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace resilience, battle-weary grit, defending the final line.",
        "my": "ဝိညာဉ်ရေးရာတွင် ပင်ပန်းသော်လည်း နောက်ဆုံးအထိ အရှုံးမပေးဘဲ ရဲဝံ့စွာ ကြံ့ကြံ့ခံခြင်း ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、不屈の忍耐、最終防衛線、試練の果ての粘りの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform paranoia, burnout, defensive walls that isolate you.",
        "my": "ဝိညာဉ်ရေးရာတွင် သံသယလွန်ကဲခြင်း သို့မဟုတ် စိတ်ပင်ပန်းနွမ်းနယ်လွန်း၍ အရှုံးပေးချင်လာခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる頑なな意固地、被害妄想、過度の消耗を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from resilience, battle-weary grit, defending the final line.",
      "my": "ပင်ပန်းသော်လည်း နောက်ဆုံးအထိ အရှုံးမပေးဘဲ ရဲဝံ့စွာ ကြံ့ကြံ့ခံခြင်း ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "不屈の忍耐、最終防衛線、試練の果ての粘りの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to paranoia, burnout, defensive walls that isolate you.",
      "my": "သံသယလွန်ကဲခြင်း သို့မဟုတ် စိတ်ပင်ပန်းနွမ်းနယ်လွန်း၍ အရှုံးပေးချင်လာခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "頑なな意固地、被害妄想、過度の消耗に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Likely Yes",
      "my": "ဟုတ်ပါသည် (ဆက်လက်ကြိုးစားပါ)",
      "ja": "YES（持ちこたえよ）"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-10",
    "file": "Wands10.png",
    "name": {
      "en": "Ten of Wands",
      "my": "သစ်သားလှံတံ ၁၀ (ဝန်ထုပ်ဝန်ပိုး လွန်ကဲစွာ ထမ်းပိုးထားရခြင်း)",
      "ja": "ワンドの10"
    },
    "number": 10,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 10)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 10)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 10）"
    },
    "uprightKeywords": {
      "en": [
        "Heavy burden, overwhelmed by responsibility; lighten the load"
      ],
      "my": [
        "တာဝန်များ အလွန်အမင်း ဝန်ပိနေခြင်း (မလိုအပ်သော ဝန်များကို လျှော့ချရန် လိုအပ်သည်)"
      ],
      "ja": [
        "過度な重責、抱え込みすぎた重荷。手放す時"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Releasing burdens, delegating, recovering from burnout"
      ],
      "my": [
        "ဝန်ထုပ်ဝန်ပိုးများကို လက်လွှတ်လျှော့ချနိုင်ခြင်း၊ ပြန်လည်သက်သာရာရခြင်း"
      ],
      "ja": [
        "重荷からの解放、委託、燃え尽きからの再生"
      ]
    },
    "uprightMeaning": {
      "en": "Ten of Wands: Heavy burden, overwhelmed by responsibility; lighten the load.",
      "my": "သစ်သားလှံတံ ၁၀ (ဝန်ထုပ်ဝန်ပိုး လွန်ကဲစွာ ထမ်းပိုးထားရခြင်း): တာဝန်များ အလွန်အမင်း ဝန်ပိနေခြင်း (မလိုအပ်သော ဝန်များကို လျှော့ချရန် လိုအပ်သည်)။",
      "ja": "【ワンドの10】：過度な重責、抱え込みすぎた重荷。手放す時。"
    },
    "reversedMeaning": {
      "en": "Reversed Ten of Wands: Releasing burdens, delegating, recovering from burnout.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ၁၀ (ဝန်ထုပ်ဝန်ပိုး လွန်ကဲစွာ ထမ်းပိုးထားရခြင်း): ဝန်ထုပ်ဝန်ပိုးများကို လက်လွှတ်လျှော့ချနိုင်ခြင်း၊ ပြန်လည်သက်သာရာရခြင်း။",
      "ja": "逆位置【ワンドの10】：重荷からの解放、委託、燃え尽きからの再生。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Ten of Wands reflects heavy burden, overwhelmed by responsibility; lighten the load.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ၁၀ (ဝန်ထုပ်ဝန်ပိုး လွန်ကဲစွာ ထမ်းပိုးထားရခြင်း) သည် တာဝန်များ အလွန်အမင်း ဝန်ပိနေခြင်း (မလိုအပ်သော ဝန်များကို လျှော့ချရန် လိုအပ်သည်) ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、過度な重責、抱え込みすぎた重荷。手放す時が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Ten of Wands warns of releasing burdens, delegating, recovering from burnout.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ၁၀ (ဝန်ထုပ်ဝန်ပိုး လွန်ကဲစွာ ထမ်းပိုးထားရခြင်း) သည် ဝန်ထုပ်ဝန်ပိုးများကို လက်လွှတ်လျှော့ချနိုင်ခြင်း၊ ပြန်လည်သက်သာရာရခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、重荷からの解放、委託、燃え尽きからの再生に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Ten of Wands brings heavy burden, overwhelmed by responsibility; lighten the load.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ၁၀ (ဝန်ထုပ်ဝန်ပိုး လွန်ကဲစွာ ထမ်းပိုးထားရခြင်း) သည် တာဝန်များ အလွန်အမင်း ဝန်ပိနေခြင်း (မလိုအပ်သော ဝန်များကို လျှော့ချရန် လိုအပ်သည်) ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、過度な重責、抱え込みすぎた重荷。手放す時の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of releasing burdens, delegating, recovering from burnout.",
        "my": "အလုပ်အကိုင်တွင် ဝန်ထုပ်ဝန်ပိုးများကို လက်လွှတ်လျှော့ချနိုင်ခြင်း၊ ပြန်လည်သက်သာရာရခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、重荷からの解放、委託、燃え尽きからの再生による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace heavy burden, overwhelmed by responsibility; lighten the load.",
        "my": "ဝိညာဉ်ရေးရာတွင် တာဝန်များ အလွန်အမင်း ဝန်ပိနေခြင်း (မလိုအပ်သော ဝန်များကို လျှော့ချရန် လိုအပ်သည်) ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、過度な重責、抱え込みすぎた重荷。手放す時の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform releasing burdens, delegating, recovering from burnout.",
        "my": "ဝိညာဉ်ရေးရာတွင် ဝန်ထုပ်ဝန်ပိုးများကို လက်လွှတ်လျှော့ချနိုင်ခြင်း၊ ပြန်လည်သက်သာရာရခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる重荷からの解放、委託、燃え尽きからの再生を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from heavy burden, overwhelmed by responsibility; lighten the load.",
      "my": "တာဝန်များ အလွန်အမင်း ဝန်ပိနေခြင်း (မလိုအပ်သော ဝန်များကို လျှော့ချရန် လိုအပ်သည်) ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "過度な重責、抱え込みすぎた重荷。手放す時の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to releasing burdens, delegating, recovering from burnout.",
      "my": "ဝန်ထုပ်ဝန်ပိုးများကို လက်လွှတ်လျှော့ချနိုင်ခြင်း၊ ပြန်လည်သက်သာရာရခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "重荷からの解放、委託、燃え尽きからの再生に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "No",
      "my": "မဟုတ်ပါ (ဝန်ပိနေသည်)",
      "ja": "NO"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-11",
    "file": "Wands11.png",
    "name": {
      "en": "Page of Wands",
      "my": "သစ်သားလှံတံ စာပို့လုလင် (စိတ်အားထက်သန်သော စွန့်စားသူငယ်)",
      "ja": "ワンドのペイジ"
    },
    "number": 11,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 11)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 11)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 11）"
    },
    "uprightKeywords": {
      "en": [
        "Enthusiastic messenger, creative adventure, free spirit"
      ],
      "my": [
        "စိတ်အားထက်သန်သော သတင်းပို့သူ၊ စွန့်စားမှုနှင့် တီထွင်ဖန်တီးမှုအစ"
      ],
      "ja": [
        "情熱の使者、冒険心、無邪気な好奇心"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Scattered ideas, impatience, lack of commitment"
      ],
      "my": [
        "အာရုံမစူးစိုက်နိုင်ခြင်း၊ အစသာရှိပြီး အဆုံးမရှိခြင်း"
      ],
      "ja": [
        "口先だけの熱意、忍耐不足、未熟な放蕩"
      ]
    },
    "uprightMeaning": {
      "en": "Page of Wands: Enthusiastic messenger, creative adventure, free spirit.",
      "my": "သစ်သားလှံတံ စာပို့လုလင် (စိတ်အားထက်သန်သော စွန့်စားသူငယ်): စိတ်အားထက်သန်သော သတင်းပို့သူ၊ စွန့်စားမှုနှင့် တီထွင်ဖန်တီးမှုအစ။",
      "ja": "【ワンドのペイジ】：情熱の使者、冒険心、無邪気な好奇心。"
    },
    "reversedMeaning": {
      "en": "Reversed Page of Wands: Scattered ideas, impatience, lack of commitment.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ စာပို့လုလင် (စိတ်အားထက်သန်သော စွန့်စားသူငယ်): အာရုံမစူးစိုက်နိုင်ခြင်း၊ အစသာရှိပြီး အဆုံးမရှိခြင်း။",
      "ja": "逆位置【ワンドのペイジ】：口先だけの熱意、忍耐不足、未熟な放蕩。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Page of Wands reflects enthusiastic messenger, creative adventure, free spirit.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ စာပို့လုလင် (စိတ်အားထက်သန်သော စွန့်စားသူငယ်) သည် စိတ်အားထက်သန်သော သတင်းပို့သူ၊ စွန့်စားမှုနှင့် တီထွင်ဖန်တီးမှုအစ ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、情熱の使者、冒険心、無邪気な好奇心が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Page of Wands warns of scattered ideas, impatience, lack of commitment.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ စာပို့လုလင် (စိတ်အားထက်သန်သော စွန့်စားသူငယ်) သည် အာရုံမစူးစိုက်နိုင်ခြင်း၊ အစသာရှိပြီး အဆုံးမရှိခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、口先だけの熱意、忍耐不足、未熟な放蕩に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Page of Wands brings enthusiastic messenger, creative adventure, free spirit.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ စာပို့လုလင် (စိတ်အားထက်သန်သော စွန့်စားသူငယ်) သည် စိတ်အားထက်သန်သော သတင်းပို့သူ၊ စွန့်စားမှုနှင့် တီထွင်ဖန်တီးမှုအစ ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、情熱の使者、冒険心、無邪気な好奇心の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of scattered ideas, impatience, lack of commitment.",
        "my": "အလုပ်အကိုင်တွင် အာရုံမစူးစိုက်နိုင်ခြင်း၊ အစသာရှိပြီး အဆုံးမရှိခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、口先だけの熱意、忍耐不足、未熟な放蕩による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace enthusiastic messenger, creative adventure, free spirit.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်အားထက်သန်သော သတင်းပို့သူ၊ စွန့်စားမှုနှင့် တီထွင်ဖန်တီးမှုအစ ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、情熱の使者、冒険心、無邪気な好奇心の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform scattered ideas, impatience, lack of commitment.",
        "my": "ဝိညာဉ်ရေးရာတွင် အာရုံမစူးစိုက်နိုင်ခြင်း၊ အစသာရှိပြီး အဆုံးမရှိခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる口先だけの熱意、忍耐不足、未熟な放蕩を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from enthusiastic messenger, creative adventure, free spirit.",
      "my": "စိတ်အားထက်သန်သော သတင်းပို့သူ၊ စွန့်စားမှုနှင့် တီထွင်ဖန်တီးမှုအစ ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "情熱の使者、冒険心、無邪気な好奇心の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to scattered ideas, impatience, lack of commitment.",
      "my": "အာရုံမစူးစိုက်နိုင်ခြင်း၊ အစသာရှိပြီး အဆုံးမရှိခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "口先だけの熱意、忍耐不足、未熟な放蕩に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-12",
    "file": "Wands12.png",
    "name": {
      "en": "Knight of Wands",
      "my": "သစ်သားလှံတံ မြင်းစီးသူရဲကောင်း (ရဲရင့်ထက်သန်သော တိုက်ခိုက်ရေးသမား)",
      "ja": "ワンドのナイト"
    },
    "number": 12,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 12)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 12)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 12）"
    },
    "uprightKeywords": {
      "en": [
        "Fearless passion, adventure, dynamic charisma"
      ],
      "my": [
        "မကြောက်မရွံ့ စွန့်စားချီတက်ခြင်း၊ ဆွဲဆောင်မှုနှင့် ပြင်းပြသော စိတ်အားထက်သန်မှု"
      ],
      "ja": [
        "燃え盛る情熱、大胆不敵な挑戦、圧倒的カリスマ"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Hot-headed recklessness, unpredictable drama, burnout"
      ],
      "my": [
        "စိတ်တိုဒေါသထွက်လွယ်ခြင်း သို့မဟုတ် မဆင်မခြင် စွန့်စားမိခြင်း"
      ],
      "ja": [
        "短気、無謀な暴走、気まぐれな熱狂"
      ]
    },
    "uprightMeaning": {
      "en": "Knight of Wands: Fearless passion, adventure, dynamic charisma.",
      "my": "သစ်သားလှံတံ မြင်းစီးသူရဲကောင်း (ရဲရင့်ထက်သန်သော တိုက်ခိုက်ရေးသမား): မကြောက်မရွံ့ စွန့်စားချီတက်ခြင်း၊ ဆွဲဆောင်မှုနှင့် ပြင်းပြသော စိတ်အားထက်သန်မှု။",
      "ja": "【ワンドのナイト】：燃え盛る情熱、大胆不敵な挑戦、圧倒的カリスマ。"
    },
    "reversedMeaning": {
      "en": "Reversed Knight of Wands: Hot-headed recklessness, unpredictable drama, burnout.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ မြင်းစီးသူရဲကောင်း (ရဲရင့်ထက်သန်သော တိုက်ခိုက်ရေးသမား): စိတ်တိုဒေါသထွက်လွယ်ခြင်း သို့မဟုတ် မဆင်မခြင် စွန့်စားမိခြင်း။",
      "ja": "逆位置【ワンドのナイト】：短気、無謀な暴走、気まぐれな熱狂。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Knight of Wands reflects fearless passion, adventure, dynamic charisma.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ မြင်းစီးသူရဲကောင်း (ရဲရင့်ထက်သန်သော တိုက်ခိုက်ရေးသမား) သည် မကြောက်မရွံ့ စွန့်စားချီတက်ခြင်း၊ ဆွဲဆောင်မှုနှင့် ပြင်းပြသော စိတ်အားထက်သန်မှု ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、燃え盛る情熱、大胆不敵な挑戦、圧倒的カリスマが示されています。"
      },
      "reversed": {
        "en": "In love, reversed Knight of Wands warns of hot-headed recklessness, unpredictable drama, burnout.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ မြင်းစီးသူရဲကောင်း (ရဲရင့်ထက်သန်သော တိုက်ခိုက်ရေးသမား) သည် စိတ်တိုဒေါသထွက်လွယ်ခြင်း သို့မဟုတ် မဆင်မခြင် စွန့်စားမိခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、短気、無謀な暴走、気まぐれな熱狂に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Knight of Wands brings fearless passion, adventure, dynamic charisma.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ မြင်းစီးသူရဲကောင်း (ရဲရင့်ထက်သန်သော တိုက်ခိုက်ရေးသမား) သည် မကြောက်မရွံ့ စွန့်စားချီတက်ခြင်း၊ ဆွဲဆောင်မှုနှင့် ပြင်းပြသော စိတ်အားထက်သန်မှု ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、燃え盛る情熱、大胆不敵な挑戦、圧倒的カリスマの好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of hot-headed recklessness, unpredictable drama, burnout.",
        "my": "အလုပ်အကိုင်တွင် စိတ်တိုဒေါသထွက်လွယ်ခြင်း သို့မဟုတ် မဆင်မခြင် စွန့်စားမိခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、短気、無謀な暴走、気まぐれな熱狂による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace fearless passion, adventure, dynamic charisma.",
        "my": "ဝိညာဉ်ရေးရာတွင် မကြောက်မရွံ့ စွန့်စားချီတက်ခြင်း၊ ဆွဲဆောင်မှုနှင့် ပြင်းပြသော စိတ်အားထက်သန်မှု ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、燃え盛る情熱、大胆不敵な挑戦、圧倒的カリスマの導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform hot-headed recklessness, unpredictable drama, burnout.",
        "my": "ဝိညာဉ်ရေးရာတွင် စိတ်တိုဒေါသထွက်လွယ်ခြင်း သို့မဟုတ် မဆင်မခြင် စွန့်စားမိခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる短気、無謀な暴走、気まぐれな熱狂を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from fearless passion, adventure, dynamic charisma.",
      "my": "မကြောက်မရွံ့ စွန့်စားချီတက်ခြင်း၊ ဆွဲဆောင်မှုနှင့် ပြင်းပြသော စိတ်အားထက်သန်မှု ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "燃え盛る情熱、大胆不敵な挑戦、圧倒的カリスマの精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to hot-headed recklessness, unpredictable drama, burnout.",
      "my": "စိတ်တိုဒေါသထွက်လွယ်ခြင်း သို့မဟုတ် မဆင်မခြင် စွန့်စားမိခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "短気、無謀な暴走、気まぐれな熱狂に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-13",
    "file": "Wands13.png",
    "name": {
      "en": "Queen of Wands",
      "my": "သစ်သားလှံတံ မိဖုရား (ဆွဲဆောင်မှုပြည့်ဝသော ခေါင်းဆောင်)",
      "ja": "ワンドのクイーン"
    },
    "number": 13,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 13)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 13)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 13）"
    },
    "uprightKeywords": {
      "en": [
        "Charismatic radiance, confidence, fierce independence, warmth"
      ],
      "my": [
        "ယုံကြည်မှုပြည့်ဝသော ဆွဲဆောင်မှု၊ နွေးထွေးမှုနှင့် လွတ်လပ်သော ခေါင်းဆောင်မှု"
      ],
      "ja": [
        "情熱の女王、揺るぎなき自信、自立と華やかな魅力"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Jealousy, demanding drama, insecurity"
      ],
      "my": [
        "မနာလိုဝန်တိုခြင်း သို့မဟုတ် စိတ်မလုံခြုံသလို ခံစားရခြင်း"
      ],
      "ja": [
        "嫉妬心、自己顕示欲の暴走、ヒステリー"
      ]
    },
    "uprightMeaning": {
      "en": "Queen of Wands: Charismatic radiance, confidence, fierce independence, warmth.",
      "my": "သစ်သားလှံတံ မိဖုရား (ဆွဲဆောင်မှုပြည့်ဝသော ခေါင်းဆောင်): ယုံကြည်မှုပြည့်ဝသော ဆွဲဆောင်မှု၊ နွေးထွေးမှုနှင့် လွတ်လပ်သော ခေါင်းဆောင်မှု။",
      "ja": "【ワンドのクイーン】：情熱の女王、揺るぎなき自信、自立と華やかな魅力。"
    },
    "reversedMeaning": {
      "en": "Reversed Queen of Wands: Jealousy, demanding drama, insecurity.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ မိဖုရား (ဆွဲဆောင်မှုပြည့်ဝသော ခေါင်းဆောင်): မနာလိုဝန်တိုခြင်း သို့မဟုတ် စိတ်မလုံခြုံသလို ခံစားရခြင်း။",
      "ja": "逆位置【ワンドのクイーン】：嫉妬心、自己顕示欲の暴走、ヒステリー。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, Queen of Wands reflects charismatic radiance, confidence, fierce independence, warmth.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ မိဖုရား (ဆွဲဆောင်မှုပြည့်ဝသော ခေါင်းဆောင်) သည် ယုံကြည်မှုပြည့်ဝသော ဆွဲဆောင်မှု၊ နွေးထွေးမှုနှင့် လွတ်လပ်သော ခေါင်းဆောင်မှု ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、情熱の女王、揺るぎなき自信、自立と華やかな魅力が示されています。"
      },
      "reversed": {
        "en": "In love, reversed Queen of Wands warns of jealousy, demanding drama, insecurity.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ မိဖုရား (ဆွဲဆောင်မှုပြည့်ဝသော ခေါင်းဆောင်) သည် မနာလိုဝန်တိုခြင်း သို့မဟုတ် စိတ်မလုံခြုံသလို ခံစားရခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、嫉妬心、自己顕示欲の暴走、ヒステリーに配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, Queen of Wands brings charismatic radiance, confidence, fierce independence, warmth.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ မိဖုရား (ဆွဲဆောင်မှုပြည့်ဝသော ခေါင်းဆောင်) သည် ယုံကြည်မှုပြည့်ဝသော ဆွဲဆောင်မှု၊ နွေးထွေးမှုနှင့် လွတ်လပ်သော ခေါင်းဆောင်မှု ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、情熱の女王、揺るぎなき自信、自立と華やかな魅力の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of jealousy, demanding drama, insecurity.",
        "my": "အလုပ်အကိုင်တွင် မနာလိုဝန်တိုခြင်း သို့မဟုတ် စိတ်မလုံခြုံသလို ခံစားရခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、嫉妬心、自己顕示欲の暴走、ヒステリーによる課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace charismatic radiance, confidence, fierce independence, warmth.",
        "my": "ဝိညာဉ်ရေးရာတွင် ယုံကြည်မှုပြည့်ဝသော ဆွဲဆောင်မှု၊ နွေးထွေးမှုနှင့် လွတ်လပ်သော ခေါင်းဆောင်မှု ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、情熱の女王、揺るぎなき自信、自立と華やかな魅力の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform jealousy, demanding drama, insecurity.",
        "my": "ဝိညာဉ်ရေးရာတွင် မနာလိုဝန်တိုခြင်း သို့မဟုတ် စိတ်မလုံခြုံသလို ခံစားရခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる嫉妬心、自己顕示欲の暴走、ヒステリーを解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from charismatic radiance, confidence, fierce independence, warmth.",
      "my": "ယုံကြည်မှုပြည့်ဝသော ဆွဲဆောင်မှု၊ နွေးထွေးမှုနှင့် လွတ်လပ်သော ခေါင်းဆောင်မှု ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "情熱の女王、揺るぎなき自信、自立と華やかな魅力の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to jealousy, demanding drama, insecurity.",
      "my": "မနာလိုဝန်တိုခြင်း သို့မဟုတ် စိတ်မလုံခြုံသလို ခံစားရခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "嫉妬心、自己顕示欲の暴走、ヒステリーに陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  },
  {
    "id": "wands-14",
    "file": "Wands14.png",
    "name": {
      "en": "King of Wands",
      "my": "သစ်သားလှံတံ ဘုရင် (အမြော်အမြင်ကြီးသော ခေါင်းဆောင်ကြီး)",
      "ja": "ワンドのキング"
    },
    "number": 14,
    "arcana": "minor",
    "suit": "wands",
    "element": "Fire",
    "astrology": {
      "en": "passion, action, creativity, and willpower (Rank 14)",
      "my": "စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား (အဆင့် 14)",
      "ja": "情熱、行動、創造性、そして不屈の意志（数秘 14）"
    },
    "uprightKeywords": {
      "en": [
        "Visionary leader, dynamic inspiration, honorable mastery"
      ],
      "my": [
        "အမြော်အမြင်ကြီးမားသော ခေါင်းဆောင်၊ အခြားသူများကို လှုံ့ဆော်ပေးနိုင်သော စွမ်းရည်"
      ],
      "ja": [
        "先見の明を持つ指導者、不屈の情熱、高潔な覇気"
      ]
    },
    "reversedKeywords": {
      "en": [
        "Tyrant, ruthless impatience, impossible demands"
      ],
      "my": [
        "အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် အခြားသူများကို ဖိနှိပ်တောင်းဆိုခြင်း"
      ],
      "ja": [
        "独善的、傲慢な支配、短慮"
      ]
    },
    "uprightMeaning": {
      "en": "King of Wands: Visionary leader, dynamic inspiration, honorable mastery.",
      "my": "သစ်သားလှံတံ ဘုရင် (အမြော်အမြင်ကြီးသော ခေါင်းဆောင်ကြီး): အမြော်အမြင်ကြီးမားသော ခေါင်းဆောင်၊ အခြားသူများကို လှုံ့ဆော်ပေးနိုင်သော စွမ်းရည်။",
      "ja": "【ワンドのキング】：先見の明を持つ指導者、不屈の情熱、高潔な覇気。"
    },
    "reversedMeaning": {
      "en": "Reversed King of Wands: Tyrant, ruthless impatience, impossible demands.",
      "my": "ပြောင်းပြန် သစ်သားလှံတံ ဘုရင် (အမြော်အမြင်ကြီးသော ခေါင်းဆောင်ကြီး): အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် အခြားသူများကို ဖိနှိပ်တောင်းဆိုခြင်း။",
      "ja": "逆位置【ワンドのキング】：独善的、傲慢な支配、短慮。"
    },
    "loveMeaning": {
      "upright": {
        "en": "In love, King of Wands reflects visionary leader, dynamic inspiration, honorable mastery.",
        "my": "အချစ်ရေးတွင် သစ်သားလှံတံ ဘုရင် (အမြော်အမြင်ကြီးသော ခေါင်းဆောင်ကြီး) သည် အမြော်အမြင်ကြီးမားသော ခေါင်းဆောင်၊ အခြားသူများကို လှုံ့ဆော်ပေးနိုင်သော စွမ်းရည် ကို ဖော်ပြသည်။",
        "ja": "恋愛面において、先見の明を持つ指導者、不屈の情熱、高潔な覇気が示されています。"
      },
      "reversed": {
        "en": "In love, reversed King of Wands warns of tyrant, ruthless impatience, impossible demands.",
        "my": "အချစ်ရေးတွင် ပြောင်းပြန် သစ်သားလှံတံ ဘုရင် (အမြော်အမြင်ကြီးသော ခေါင်းဆောင်ကြီး) သည် အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် အခြားသူများကို ဖိနှိပ်တောင်းဆိုခြင်း ကို သတိပေးထားသည်။",
        "ja": "恋愛面において、独善的、傲慢な支配、短慮に配慮が必要です。"
      }
    },
    "careerMeaning": {
      "upright": {
        "en": "In career, King of Wands brings visionary leader, dynamic inspiration, honorable mastery.",
        "my": "အလုပ်အကိုင်တွင် သစ်သားလှံတံ ဘုရင် (အမြော်အမြင်ကြီးသော ခေါင်းဆောင်ကြီး) သည် အမြော်အမြင်ကြီးမားသော ခေါင်းဆောင်၊ အခြားသူများကို လှုံ့ဆော်ပေးနိုင်သော စွမ်းရည် ကို ယူဆောင်လာပေးသည်။",
        "ja": "仕事面において、先見の明を持つ指導者、不屈の情熱、高潔な覇気の好機が訪れています。"
      },
      "reversed": {
        "en": "In career, beware of tyrant, ruthless impatience, impossible demands.",
        "my": "အလုပ်အကိုင်တွင် အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် အခြားသူများကို ဖိနှိပ်တောင်းဆိုခြင်း ကို သတိပြုပါ။",
        "ja": "仕事面において、独善的、傲慢な支配、短慮による課題に留意してください。"
      }
    },
    "spiritualMeaning": {
      "upright": {
        "en": "Spiritually, embrace visionary leader, dynamic inspiration, honorable mastery.",
        "my": "ဝိညာဉ်ရေးရာတွင် အမြော်အမြင်ကြီးမားသော ခေါင်းဆောင်၊ အခြားသူများကို လှုံ့ဆော်ပေးနိုင်သော စွမ်းရည် ကို လက်ခံကျင့်သုံးပါ။",
        "ja": "魂の領域において、先見の明を持つ指導者、不屈の情熱、高潔な覇気の導きに従いましょう。"
      },
      "reversed": {
        "en": "Spiritually, transform tyrant, ruthless impatience, impossible demands.",
        "my": "ဝိညာဉ်ရေးရာတွင် အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် အခြားသူများကို ဖိနှိပ်တောင်းဆိုခြင်း ကို ကုစားပြောင်းလဲပါ။",
        "ja": "内なる独善的、傲慢な支配、短慮を解放しましょう。"
      }
    },
    "advice": {
      "en": "Focus your will and act from visionary leader, dynamic inspiration, honorable mastery.",
      "my": "အမြော်အမြင်ကြီးမားသော ခေါင်းဆောင်၊ အခြားသူများကို လှုံ့ဆော်ပေးနိုင်သော စွမ်းရည် ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။",
      "ja": "先見の明を持つ指導者、不屈の情熱、高潔な覇気の精神を重んじて行動してください。"
    },
    "shadowWarning": {
      "en": "Do not succumb to tyrant, ruthless impatience, impossible demands.",
      "my": "အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် အခြားသူများကို ဖိနှိပ်တောင်းဆိုခြင်း ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။",
      "ja": "独善的、傲慢な支配、短慮に陥らぬよう注意しましょう。"
    },
    "yesNo": {
      "en": "Yes",
      "my": "ဟုတ်ပါသည်",
      "ja": "YES"
    },
    "symbolism": {
      "en": [
        "Suit of Wands",
        "Element: Fire"
      ],
      "my": [
        "သစ်သားလှံတံ (မီးဓာတ်)",
        "ဓာတ်ကြီး: Fire"
      ],
      "ja": [
        "ワンド（棍棒・火）",
        "エレメント：Fire"
      ]
    }
  }
];

export const CARD_BACK_IMAGE = '/cards/CardBacks.png';

export function getCardById(id: string): TarotCard | undefined {
  return TAROT_DECK.find(c => c.id === id);
}

export function getRandomCards(count: number, allowReversed = true): { card: TarotCard; isReversed: boolean }[] {
  const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(card => ({
    card,
    isReversed: allowReversed ? Math.random() < 0.35 : false
  }));
}
