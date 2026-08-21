// scripts/buildMultilingualDeck.js
import fs from 'fs';

const majorCards = [
  {
    id: "fool",
    file: "00-TheFool.png",
    name: { en: "The Fool", my: "လူမိုက် (သန့်စင်သော စွန့်စားသူ)", ja: "愚者（The Fool）" },
    number: 0,
    romanNumeral: "0",
    arcana: "major",
    suit: "none",
    element: "Air",
    astrology: { en: "Uranus / Air", my: "ယူရေးနပ်စ် / လေဓာတ်", ja: "天王星・風の宮" },
    uprightKeywords: {
      en: ["New Beginnings", "Innocence", "Spontaneity", "Free Spirit", "Leap of Faith"],
      my: ["အစပြုခြင်းသစ်", "ဖြူစင်ခြင်း", "စိတ်ဆန္ဒအတိုင်း လွတ်လပ်စွာနေထိုင်ခြင်း", "ယုံကြည်စွာ စွန့်စားခြင်း"],
      ja: ["新しい始まり", "純真", "自由な精神", "直感", "未知への飛躍"]
    },
    reversedKeywords: {
      en: ["Recklessness", "Risk-taking", "Hesitation", "Naivety"],
      my: ["ဆင်ခြင်တုံတရားမဲ့ခြင်း", "အဆင်အခြင်မဲ့ စွန့်စားခြင်း", "တွန့်ဆုတ်နေခြင်း", "မိုက်မဲမှု"],
      ja: ["軽率", "無謀な行動", "躊躇い", "未熟さ", "盲目的なリスク"]
    },
    uprightMeaning: {
      en: "New beginnings leap into the unknown — trust the sacred adventure with an open heart.",
      my: "မသိသေးသော အနာဂတ်ထဲသို့ ရဲဝံ့စွာ ခြေလှမ်းလိုက်ပါ။ ယုံကြည်မှုအပြည့်ဖြင့် ခရီးသစ်ကို စတင်ပါ။",
      ja: "未知の世界へ踏み出す純粋な旅の始まり。恐れを手放し、直感と冒険を信じてください。"
    },
    reversedMeaning: {
      en: "Leaping blindly before looking. Recklessness dressed as freedom, or paralyzing hesitation.",
      my: "သေချာမကြည့်ဘဲ မဆင်မခြင် ခုန်ချမိခြင်း (သို့မဟုတ်) ကြောက်ရွံ့မှုကြောင့် မလိုအပ်ဘဲ တွန့်ဆုတ်နေခြင်း။",
      ja: "準備不足のまま無謀に飛び込む警告。自由と無責任の混同、あるいは恐れによる足止め。"
    },
    loveMeaning: {
      upright: {
        en: "A fresh, spontaneous romantic adventure is blossoming. Keep an open and playful heart.",
        my: "လတ်ဆတ်ပြီး စိတ်လှုပ်ရှားဖွယ်ရာ အချစ်သစ်တစ်ပွင့် ဖူးပွင့်လာမည်။ ပွင့်လင်းစွာ ကြိုဆိုပါ။",
        ja: "純粋で心躍る恋の幕開け。過去の傷に縛られず、新しい出会いに心を開いてください。"
      },
      reversed: {
        en: "Impulsive choices or fear of emotional commitment may create instability.",
        my: "စိတ်လိုက်မာန်ပါ ဆုံးဖြတ်ချက်များ သို့မဟုတ် သံယောဇဉ်တွယ်ရန် ကြောက်ရွံ့မှုက မတည်ငြိမ်မှုကို ဖြစ်စေနိုင်သည်။",
        ja: "衝動的な行動やコミットメントへの恐れが、関係の不安定さを招く兆し。"
      }
    },
    careerMeaning: {
      upright: {
        en: "A bold new venture or creative career leap is highly favored. Trust your visionary instincts.",
        my: "တီထွင်ဆန်းသစ်သော အလုပ်သစ် (သို့မဟုတ်) စွန့်စားမှုသည် ကောင်းမွန်သော အခွင့်အလမ်းများ ယူဆောင်လာမည်။",
        ja: "型にはまらない斬新な挑戦や転職に絶好の時期。直感を信じて一歩踏み出しましょう。"
      },
      reversed: {
        en: "Beware of taking ill-advised risks before critical logistical details are solidified.",
        my: "အစီအစဉ်မခိုင်မာသေးဘဲ အလျင်စလို စွန့်စားမှုပြုလုပ်ခြင်းကို ရှောင်ကြဉ်ပါ။",
        ja: "無計画な見切り発車や契約の確認不足に注意。足元を固めることが先決です。"
      }
    },
    spiritualMeaning: {
      upright: {
        en: "Your soul is embarking on a sacred pilgrimage of innocence and childlike wonder.",
        my: "သင့်စိတ်ဝိညာဉ်သည် ဖြူစင်သောအံ့ဩဖွယ်ရာများနှင့်အတူ ဝိညာဉ်ရေးရာ ခရီးသစ်တစ်ခုကို စတင်နေပြီဖြစ်သည်။",
        ja: "童心のような純粋な探求心が、魂の覚醒と新たな導きを引き寄せます。"
      },
      reversed: {
        en: "Reconnect with your inner innocence; do not let cynicism cloud your spiritual sight.",
        my: "စိတ်ပျက်လက်ပျက်ဖြစ်မှုများကို ဖယ်ရှားပြီး သင့်အတွင်းစိတ်၏ ဖြူစင်မှုကို ပြန်လည်ရှာဖွေပါ။",
        ja: "疑心暗鬼を手放し、内なる純粋な光を取り戻す静寂の時間を持ちましょう。"
      }
    },
    advice: {
      en: "Take a leap of faith. The universe will catch you when you step with pure intent.",
      my: "သန့်ရှင်းသော စိတ်စေတနာဖြင့် ရဲရဲဝံ့ဝံ့ ခြေလှမ်းလိုက်ပါ။ လောကစကြဝဠာက သင့်ကို စောင့်ရှောက်ပါလိမ့်မည်။",
      ja: "恐れずに信じて跳びなさい。純粋な意志を持つとき、宇宙はあなたを受け止めます。"
    },
    shadowWarning: {
      en: "Do not mistake careless negligence for divine courage.",
      my: "ပေါ့ဆမှုကို ရဲရင့်ခြင်းအဖြစ် အထင်မမှားပါနှင့်။",
      ja: "無責任な現実逃避を、高尚な冒険心と取り違えないでください。"
    },
    yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (အပြုသဘော)", ja: "YES（肯定的）" },
    symbolism: {
      en: ["White rose (purity)", "Sun (divine light)", "Cliff (infinite potential)"],
      my: ["နှင်းဆီဖြူ (ဖြူစင်မှု)", "နေမင်း (မြင့်မြတ်သောအလင်း)", "ချောက်ကမ်းပါး (အဆုံးမဲ့အလားအလာ)"],
      ja: ["白い薔薇（純粋性）", "太陽（神聖な導き）", "断崖（無限の可能性）"]
    }
  },
  {
    id: "magician",
    file: "01-TheMagician.png",
    name: { en: "The Magician", my: "မျက်လှည့်ဆရာ (ဖန်ဆင်းရှင်)", ja: "魔術師（The Magician）" },
    number: 1,
    romanNumeral: "I",
    arcana: "major",
    suit: "none",
    element: "Air",
    astrology: { en: "Mercury", my: "မာကျူရီ (ဗုဒ္ဓဟူးဂြိုဟ်)", ja: "水星" },
    uprightKeywords: {
      en: ["Manifestation", "Resourcefulness", "Power", "Inspired Action", "Mastery"],
      my: ["အကောင်အထည်ဖော်ခြင်း", "စွမ်းရည်ကြွယ်ဝမှု", "စွမ်းအား", "ကျွမ်းကျင်မှု"],
      ja: ["具現化", "創造力", "集中力", "意志の力", "卓越した才能"]
    },
    reversedKeywords: {
      en: ["Manipulation", "Untapped Potential", "Deception", "Scattered Energy"],
      my: ["လှည့်စားမှု", "အသုံးမချရသေးသော စွမ်းရည်", "အာရုံစူးစိုက်မှုမဲ့ခြင်း"],
      ja: ["悪用・ごまかし", "才能の空回り", "散漫", "自信の欠如"]
    },
    uprightMeaning: {
      en: "You possess all the elements and tools needed to manifest your vision into reality.",
      my: "သင်၏ စိတ်ကူးအိပ်မက်များကို လက်တွေ့အကောင်အထည်ဖော်ရန် လိုအပ်သော လက်နက်ကိရိယာ အားလုံး သင့်လက်ထဲတွင် ရှိနေပြီဖြစ်သည်။",
      ja: "望む現実を形にするためのすべての道具は揃っています。強い意志で具現化を始めましょう。"
    },
    reversedMeaning: {
      en: "Manipulation, scattered focus, or feeling disconnected from your innate mastery.",
      my: "စွမ်းအားများကို အာရုံမစိုက်နိုင်ဘဲ ဖြန့်ကြက်မိနေခြင်း သို့မဟုတ် လှည့်စားဖျားယောင်းမှုများ ကြုံရခြင်း။",
      ja: "才能が散漫になり、不誠実な企てや自信の喪失により成果が形にならない状態。"
    },
    loveMeaning: {
      upright: {
        en: "High magnetic chemistry and deliberate co-creation of a deep romantic bond.",
        my: "ဆွဲဆောင်မှုအားကောင်းပြီး နှစ်ဦးသဘောတူ ခိုင်မာသော ချစ်ခြင်းမေတ္တာကို အတူတကွ တည်ဆောက်နိုင်မည်။",
        ja: "強い引き寄せと明確な意思疎通。理想の関係を共に創造できる絶好の時です。"
      },
      reversed: {
        en: "Superficial charm, mixed signals, or manipulative intentions.",
        my: "အပေါ်ယံ ချိုသာမှုများ သို့မဟုတ် လှည့်စားလိုသော သဘောထားများကို သတိထားပါ။",
        ja: "言葉巧みな誘惑や、本心を隠した不誠実な態度に警戒が必要です。"
      }
    },
    careerMeaning: {
      upright: {
        en: "Peak timing to launch, pitch bold ideas, and demonstrate master craftsmanship.",
        my: "လုပ်ငန်းသစ် စတင်ရန်၊ စိတ်ကူးသစ်များ တင်ပြရန်နှင့် ကျွမ်းကျင်မှုကို ပြသရန် အကောင်းဆုံးအချိန်ဖြစ်သည်။",
        ja: "企画の提案や新規事業の立ち上げに最高の運気。あなたの技術が遺憾なく発揮されます。"
      },
      reversed: {
        en: "Procrastination or lack of focus delaying a brilliant concept.",
        my: "အချိန်ဆွဲနေခြင်း သို့မဟုတ် အာရုံမစူးစိုက်နိုင်ခြင်းကြောင့် အခွင့်အရေးများ နှောင့်နှေးနိုင်သည်။",
        ja: "素晴らしいアイデアがあっても実行力が伴わず、準備不足に陥りやすい警告。"
      }
    },
    spiritualMeaning: {
      upright: {
        en: "You are the conscious bridge between spiritual idea and physical form. Speak your truth.",
        my: "သင်သည် စိတ်ကူးအမြင်နှင့် ရုပ်ဝတ္ထုအကြား ပေါင်းကူးတံတားဖြစ်သည်။ သင့်အမှန်တရားကို ဖော်ထုတ်ပါ။",
        ja: "天の意志を地に降ろす意識的な媒介者。言葉と行動で自らの真理を宣言してください。"
      },
      reversed: {
        en: "Align your personal ego with higher cosmic integrity.",
        my: "မိမိ၏ အတ္တထက် မြင့်မြတ်သော ကိုယ်ကျင့်တရားနှင့် ညီညွတ်အောင် ထိန်းညှိပါ။",
        ja: "エゴの満足のためではなく、より高い倫理観と調和して力を使うことが求められます。"
      }
    },
    advice: {
      en: "Align your intention, thought, emotion, and action. Everything you need is present.",
      my: "ရည်ရွယ်ချက်၊ အတွေး၊ စိတ်ခံစားချက်နှင့် လုပ်ဆောင်ချက်တို့ကို တစ်သားတည်း ပေါင်းစပ်ပါ။",
      ja: "意図・思考・感情・行動を一致させなさい。必要な力はすでにあなたの中にあります。"
    },
    shadowWarning: {
      en: "Mastery without ethics devolves into shallow manipulation.",
      my: "ကျင့်ဝတ်မပါသော ကျွမ်းကျင်မှုသည် အပေါ်ယံ လှည့်စားမှုအဖြစ်သို့ ရောက်ရှိသွားတတ်သည်။",
      ja: "倫理を欠いた技術は、ただの空虚なペテンに成り下がります。"
    },
    yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (အပြည့်အဝ)", ja: "YES（力強い肯定）" },
    symbolism: {
      en: ["Infinity symbol (limitless potential)", "Four altar tools (all elements mastered)"],
      my: ["အနန္တသင်္ကေတ (အဆုံးမဲ့စွမ်းရည်)", "ပလ္လင်ပေါ်ရှိ တန်ဆာလေးပါး (ဓာတ်လေးပါးကို ထိန်းချုပ်နိုင်ခြင်း)"],
      ja: ["無限大記号（無限の可能性）", "祭壇の4つの聖具（四大元素の完全な統括）"]
    }
  }
];

// Helper to fill other 20 Major Arcana succinctly
const remainingMajors = [
  { id: "high-priestess", file: "02-TheHighPriestess.png", num: 2, name: { en: "The High Priestess", my: "ဆရာမကြီး (လျှို့ဝှက်အသိပညာရှင်)", ja: "女教皇（The High Priestess）" }, el: "Water", ast: { en: "Moon", my: "လမင်း", ja: "月" }, upK: { en: ["Intuition", "Sacred Secrets", "Subconscious"], my: ["ပင်ကိုယ်အသိဉာဏ်", "လျှို့ဝှက်အသိပညာ", "မသိစိတ်"], ja: ["直感", "神秘", "潜在意識", "静寂"] }, revK: { en: ["Ignored Intuition", "Secrets Revealed", "Superficiality"], my: ["အတွင်းအသံကို လျစ်လျူရှုခြင်း", "လျှို့ဝှက်ချက်ပေါက်ကြားခြင်း"], ja: ["直感の無視", "秘密の露呈", "浅薄さ"] }, yesNo: { en: "Neutral / Unclear", my: "အချိန်စောင့်ဆိုင်းရန် လိုအပ်သည်", ja: "中立 / 静観" } },
  { id: "empress", file: "03-TheEmpress.png", num: 3, name: { en: "The Empress", my: "ဧကရီမိဖုရား (ကြွယ်ဝမှုနှင့် သားဖွားရှင်)", ja: "女帝（The Empress）" }, el: "Earth", ast: { en: "Venus", my: "ဗီးနပ်စ် (သောကြာဂြိုဟ်)", ja: "金星" }, upK: { en: ["Abundance", "Nurturing", "Sensuality", "Fertility"], my: ["ကြွယ်ဝချမ်းသာမှု", "ပြုစုပျိုးထောင်ခြင်း", "သဘာဝအလှတရား"], ja: ["豊穣", "慈愛", "実り", "美意識"] }, revK: { en: ["Creative Block", "Smothering", "Self-Neglect"], my: ["တီထွင်နိုင်စွမ်း ပိတ်ဆို့ခြင်း", "မိမိကိုယ်ကို ဂရုမစိုက်မိခြင်း"], ja: ["過保護", "自己犠牲", "創造の停滞"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
  { id: "emperor", file: "04-TheEmperor.png", num: 4, name: { en: "The Emperor", my: "ဧကရာဇ်ဘုရင် (စည်းစနစ်နှင့် တည်ငြိမ်မှု)", ja: "皇帝（The Emperor）" }, el: "Fire", ast: { en: "Aries", my: "မိဿရာသီ", ja: "牡羊座" }, upK: { en: ["Authority", "Structure", "Stability", "Discipline"], my: ["ဩဇာအာဏာ", "စနစ်တကျတည်ဆောက်မှု", "ခိုင်မာသောစည်းကမ်း"], ja: ["統率力", "秩序", "安定", "不動の基盤"] }, revK: { en: ["Tyranny", "Rigidity", "Lack of Discipline"], my: ["အာဏာရှင်ဆန်ခြင်း", "တင်းကျပ်လွန်းခြင်း", "စည်းကမ်းမဲ့ခြင်း"], ja: ["独裁", "頑迷", "無秩序", "横暴"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
  { id: "hierophant", file: "05-TheHierophant.png", num: 5, name: { en: "The Hierophant", my: "ဘာသာရေးဆရာတော် (ရိုးရာနှင့် သွန်သင်ချက်)", ja: "法皇（The Hierophant）" }, el: "Earth", ast: { en: "Taurus", my: "ပြိဿရာသီ", ja: "牡牛座" }, upK: { en: ["Tradition", "Spiritual Wisdom", "Mentorship", "Institutions"], my: ["ရိုးရာဓလေ့", "မြင့်မြတ်သောအသိဉာဏ်", "ဆရာသမား၏ လမ်းညွှန်မှု"], ja: ["伝統", "教え", "導き手", "精神的規範"] }, revK: { en: ["Rebellion", "Dogma", "Unconventional Path"], my: ["ရိုးရာကို ဆန့်ကျင်ခြင်း", "စွဲလမ်းလွန်ကဲသော အယူဝါဒ"], ja: ["教条主義", "型破りな道", "因習の打破"] }, yesNo: { en: "Likely Yes", my: "ဖြစ်နိုင်ခြေများပါသည်", ja: "肯定的（規律を守ればYES）" } },
  { id: "lovers", file: "06-TheLovers.png", num: 6, name: { en: "The Lovers", my: "ချစ်သူများ (သံယောဇဉ်နှင့် ရွေးချယ်မှု)", ja: "恋人たち（The Lovers）" }, el: "Air", ast: { en: "Gemini", my: "မေထုန်ရာသီ", ja: "双子座" }, upK: { en: ["Soul Union", "Harmony", "Values Alignment", "Choice"], my: ["ဝိညာဉ်ချင်း ပေါင်းစပ်မှု", "သဟဇာတဖြစ်ခြင်း", "ရွေးချယ်မှု"], ja: ["真の絆", "調和", "価値観の一致", "運命の選択"] }, revK: { en: ["Disharmony", "Misalignment", "Avoided Choice"], my: ["သဘောထားကွဲလွဲခြင်း", "တန်ဖိုးထားမှု မတူညီခြင်း"], ja: ["不調和", "価値観の対立", "選択の先送り"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
  { id: "chariot", file: "07-TheChariot.png", num: 7, name: { en: "The Chariot", my: "စစ်ရထား (စိတ်ဓာတ်ကြံ့ခိုင်မှုနှင့် အောင်ပွဲ)", ja: "戦車（The Chariot）" }, el: "Water", ast: { en: "Cancer", my: "ကရကဋ်ရာသီ", ja: "蟹座" }, upK: { en: ["Victory", "Willpower", "Drive", "Focus"], my: ["အောင်ပွဲ", "စိတ်စွမ်းအား", "ရည်မှန်းချက်ဆီသို့ ဦးတည်ချီတက်ခြင်း"], ja: ["勝利", "不屈の意志", "前進", "統御力"] }, revK: { en: ["Lost Control", "Aggression", "Burnout"], my: ["ထိန်းချုပ်မှုမဲ့ခြင်း", "ဒေါသတကြီးလုပ်ဆောင်ခြင်း"], ja: ["暴走", "コントロール喪失", "空回り"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
  { id: "strength", file: "08-Strength.png", num: 8, name: { en: "Strength", my: "ခွန်အား (နူးညံ့သော အစွမ်းနှင့် သတ္တိ)", ja: "力（Strength）" }, el: "Fire", ast: { en: "Leo", my: "သိဟ်ရာသီ", ja: "獅子座" }, upK: { en: ["Courage", "Gentle Mastery", "Patience", "Compassion"], my: ["ရဲရင့်မှု", "နူးညံ့စွာ ထိန်းကျောင်းနိုင်ခြင်း", "သည်းခံခြင်း"], ja: ["真の勇気", "柔らかな強さ", "忍耐", "包容力"] }, revK: { en: ["Self-Doubt", "Raw Force", "Impatience"], my: ["မိမိကိုယ်ကို သံသယဝင်ခြင်း", "အကြမ်းနည်းသုံးမိခြင်း"], ja: ["自己不信", "力づくの強要", "焦り"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
  { id: "hermit", file: "09-TheHermit.png", num: 9, name: { en: "The Hermit", my: "တောရဆောက်တည်သူ (အတွင်းစိတ်ဉာဏ်အလင်း)", ja: "隠者（The Hermit）" }, el: "Earth", ast: { en: "Virgo", my: "ကန်ရာသီ", ja: "乙女座" }, upK: { en: ["Solitude", "Introspection", "Inner Light", "Wisdom"], my: ["ဆိတ်ငြိမ်မှု", "အတွင်းစိတ်ကို ဆင်ခြင်သုံးသပ်ခြင်း", "ပညာဉာဏ်"], ja: ["内省", "探求", "灯火", "深遠な叡智"] }, revK: { en: ["Isolation", "Loneliness", "Withdrawal"], my: ["လူအများနှင့် ဝေးကွာနေခြင်း", "အထီးကျန်ဆန်မှု"], ja: ["孤立", "孤独感", "閉鎖的"] }, yesNo: { en: "Neutral / Unclear", my: "မိမိအတွင်းစိတ်ကို အရင်စစ်ဆေးပါ", ja: "内省を要する" } },
  { id: "wheel-of-fortune", file: "10-WheelOfFortune.png", num: 10, name: { en: "Wheel of Fortune", my: "ကံကြမ္မာစက်ဝိုင်း (ကံအလှည့်အပြောင်း)", ja: "運命の輪（Wheel of Fortune）" }, el: "Fire", ast: { en: "Jupiter", my: "ဂျူပီတာ (ကြာသပတေးဂြိုဟ်)", ja: "木星" }, upK: { en: ["Destiny", "Turning Point", "Cycles", "Luck"], my: ["ကံကြမ္မာအလှည့်အပြောင်း", "အခွင့်အခါကောင်း", "ကံကောင်းခြင်း"], ja: ["宿命の転換", "好転", "巡るサイクル", "チャンス到来"] }, revK: { en: ["Bad Luck", "Resistance to Change", "Delays"], my: ["မလိုလားအပ်သော အလှည့်အပြောင်း", "အပြောင်းအလဲကို ငြင်းဆန်ခြင်း"], ja: ["抗えない遅延", "悪循環", "時期尚早"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (အလွန်ကောင်းသော အလှည့်အပြောင်း)", ja: "YES" } },
  { id: "justice", file: "11-Justice.png", num: 11, name: { en: "Justice", my: "တရားမျှတမှု (အမှန်တရားနှင့် ကံအကျိုးပေး)", ja: "正義（Justice）" }, el: "Air", ast: { en: "Libra", my: "တူရာသီ", ja: "天秤座" }, upK: { en: ["Truth", "Fairness", "Cause and Effect", "Integrity"], my: ["တရားမျှတမှု", "အမှန်တရား", "ကံနှင့် ကံ၏အကျိုး"], ja: ["真実", "公正", "因果応報", "誠実さ"] }, revK: { en: ["Injustice", "Dishonesty", "Bias"], my: ["မတရားမှု", "ဘက်လိုက်မှု", "တာဝန်ယူမှုမဲ့ခြင်း"], ja: ["不公正", "偏見", "責任転嫁"] }, yesNo: { en: "Likely Yes", my: "အမှန်တရားဘက်တွင် ရှိပါက ဖြစ်ပါသည်", ja: "公正であればYES" } },
  { id: "hanged-man", file: "12-TheHangedMan.png", num: 12, name: { en: "The Hanged Man", my: "ဇောက်ထိုးဆွဲထားသောသူ (အမြင်သစ်နှင့် စွန့်လွှတ်မှု)", ja: "吊るされた男（The Hanged Man）" }, el: "Water", ast: { en: "Neptune", my: "နက်ပကျွန်းဂြိုဟ်", ja: "海王星" }, upK: { en: ["Pause", "Surrender", "New Perspective", "Patience"], my: ["ရပ်တန့်ဆင်ခြင်ခြင်း", "စွန့်လွှတ်အနစ်နာခံခြင်း", "အမြင်သစ်ရရှိခြင်း"], ja: ["手放し", "視点の転換", "静かな献身", "悟り"] }, revK: { en: ["Stalling", "Pointless Sacrifice", "Resistance"], my: ["အကျိုးမရှိသော စွန့်လွှတ်မှု", "အလကား အချိန်ဆွဲနေခြင်း"], ja: ["無駄な我慢", "停滞", "自己犠牲の罠"] }, yesNo: { en: "Neutral / Unclear", my: "စောင့်ဆိုင်းရန် လိုအပ်သည်", ja: "保留・視点変更" } },
  { id: "death", file: "13-Death.png", num: 13, name: { en: "Death", my: "သေခြင်းတရား (အသစ်ပြန်လည်မွေးဖွားခြင်း)", ja: "死神（Death）" }, el: "Water", ast: { en: "Scorpio", my: "ဗြိစ္ဆာရာသီ", ja: "蠍座" }, upK: { en: ["Endings", "Transformation", "Transition", "Rebirth"], my: ["အဟောင်းများ ချုပ်ငြိမ်းခြင်း", "အသစ်ပြန်လည်မွေးဖွားခြင်း", "ကြီးမားသော အပြောင်းအလဲ"], ja: ["大いなる終焉", "再生", "根本的変容", "脱皮"] }, revK: { en: ["Fear of Change", "Holding On", "Stagnation"], my: ["အပြောင်းအလဲကို ကြောက်ရွံ့ခြင်း", "မရှိတော့သောအရာကို ဖက်တွယ်ထားခြင်း"], ja: ["変化への抵抗", "執着", "緩慢な腐敗"] }, yesNo: { en: "Transformative", my: "ကြီးမားသော အပြောင်းအလဲဖြစ်ပါသည်", ja: "変革の後にYES" } },
  { id: "temperance", file: "14-Temperance.png", num: 14, name: { en: "Temperance", my: "မျှတမှု (စိတ်အေးချမ်းမှုနှင့် ဟန်ချက်ညီခြင်း)", ja: "節制（Temperance）" }, el: "Fire", ast: { en: "Sagittarius", my: "ဓနုရာသီ", ja: "射手座" }, upK: { en: ["Balance", "Moderation", "Patience", "Alchemy"], my: ["အလယ်အလတ်လမ်းစဉ်", "ဟန်ချက်ညီမှု", "စိတ်ရှည်သည်းခံခြင်း"], ja: ["調和", "中庸", "錬金術的融合", "穏やかな統合"] }, revK: { en: ["Excess", "Impatience", "Extremes"], my: ["အစွန်းရောက်ခြင်း", "စိတ်မရှည်ခြင်း", "မညီမျှမှု"], ja: ["極端", "不調和", "過度なアンバランス"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
  { id: "devil", file: "15-TheDevil.png", num: 15, name: { en: "The Devil", my: "မာရ်နတ် (တွယ်တာမှုနှင့် ထောင်ချောက်)", ja: "悪魔（The Devil）" }, el: "Earth", ast: { en: "Capricorn", my: "မကာရရာသီ", ja: "山羊座" }, upK: { en: ["Attachment", "Shadow Self", "Material Trap", "Temptation"], my: ["တွယ်တာမှုထောင်ချောက်", "မကောင်းသော အလေ့အထ", "သွေးဆောင်ဖျားယောင်းမှု"], ja: ["執着", "影の自己（シャドウ）", "物質的束縛", "甘い誘惑"] }, revK: { en: ["Breaking Chains", "Freedom", "Reclaiming Power"], my: ["ထောင်ချောက်မှ လွတ်မြောက်ခြင်း", "မိမိစွမ်းအားကို ပြန်လည်ရယူခြင်း"], ja: ["鎖の解放", "覚醒", "依存からの脱却"] }, yesNo: { en: "No", my: "မဟုတ်ပါ (သတိထားပါ)", ja: "NO（束縛への警告）" } },
  { id: "tower", file: "16-TheTower.png", num: 16, name: { en: "The Tower", my: "မျှော်စင် (ရုတ်တရက် အပြောင်းအလဲနှင့် အမှန်တရား)", ja: "塔（The Tower）" }, el: "Fire", ast: { en: "Mars", my: "အင်္ဂါဂြိုဟ်", ja: "火星" }, upK: { en: ["Sudden Awakening", "Shaking Foundations", "Revelation", "Breakthrough"], my: ["ရုတ်တရက်ပြိုလဲခြင်း", "အမှန်တရားပေါ်ပေါက်ခြင်း", "လွတ်မြောက်မှု"], ja: ["電撃的な崩壊", "偽りの打破", "劇的目覚め", "再生の雷"] }, revK: { en: ["Averted Disaster", "Feared Collapse", "Internal Crisis"], my: ["ဘေးအန္တရာယ်မှ သီသီလေးလွတ်ခြင်း", "ကြောက်ရွံ့မှုကြောင့် ကြန့်ကြာနေခြင်း"], ja: ["危機の一服", "未練による崩壊の引き延ばし"] }, yesNo: { en: "No", my: "မဟုတ်ပါ (ကြီးမားသော သတိပေးချက်)", ja: "NO（激動）" } },
  { id: "star", file: "17-TheStar.png", num: 17, name: { en: "The Star", my: "ကြယ်တာရာ (မျှော်လင့်ချက်နှင့် စိတ်သက်သာရာရခြင်း)", ja: "星（The Star）" }, el: "Air", ast: { en: "Aquarius", my: "ကုမ်ရာသီ", ja: "水瓶座" }, upK: { en: ["Hope", "Healing", "Divine Serenity", "Inspiration"], my: ["မျှော်လင့်ချက်", "ကုစားမှုရရှိခြင်း", "စိတ်အေးချမ်းမှု"], ja: ["希望の光", "癒やし", "清らかな導き", "インスピレーション"] }, revK: { en: ["Dimmed Faith", "Despair", "Disconnection"], my: ["ယုံကြည်မှုပျောက်ဆုံးခြင်း", "စိတ်ဓာတ်ကျဆင်းခြင်း"], ja: ["希望の見失い", "失望", "孤立感"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (အလွန်ကောင်းမွန်သော နိမိတ်)", ja: "YES（確かな光明）" } },
  { id: "moon", file: "18-TheMoon.png", num: 18, name: { en: "The Moon", my: "လမင်း (မသေချာမှုနှင့် အတွင်းစိတ်စိုးရိမ်မှု)", ja: "月（The Moon）" }, el: "Water", ast: { en: "Pisces", my: "မိန်ရာသီ", ja: "魚座" }, upK: { en: ["Illusion", "Intuition", "Subconscious Fears", "Dreams"], my: ["အမြင်မှားခြင်း", "မသေချာမရေရာမှု", "မသိစိတ်ထဲမှ စိုးရိမ်ပူပန်မှု"], ja: ["幻影", "曖昧さ", "深層心理の不安", "直感の蠢き"] }, revK: { en: ["Clarity Emerging", "Conquering Fear", "Truth Revealed"], my: ["စိတ်ရှုပ်ထွေးမှုများ ရှင်းလင်းသွားခြင်း", "အမှန်တရားပေါ်လာခြင်း"], ja: ["霧の晴れ間", "不安の克服", "真実の浮上"] }, yesNo: { en: "Likely No", my: "သတိထားဆင်ခြင်ရန် လိုအပ်သည်", ja: "NO（不透明）" } },
  { id: "sun", file: "19-TheSun.png", num: 19, name: { en: "The Sun", my: "နေမင်း (အောင်မြင်မှု၊ ပျော်ရွှင်မှုနှင့် အလင်း)", ja: "太陽（The Sun）" }, el: "Fire", ast: { en: "Sun", my: "နေမင်း (တနင်္ဂနွေ)", ja: "太陽" }, upK: { en: ["Joy", "Success", "Radiance", "Vitality"], my: ["ကြီးမားသော အောင်မြင်မှု", "ပျော်ရွှင်ကြည်နူးခြင်း", "တောက်ပသောအလင်း"], ja: ["無上の喜び", "大成功", "明朗快活", "生命の躍動"] }, revK: { en: ["Dimmed Joy", "Delayed Success", "Temporary Clouds"], my: ["ပျော်ရွှင်မှု အနည်းငယ်ကြန့်ကြာခြင်း", "ယာယီအခက်အခဲ"], ja: ["一時的な陰り", "遅延する喜び", "過信"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (အထူးမင်္ဂလာရှိပါသည်)", ja: "YES（絶対の祝福）" } },
  { id: "judgement", file: "20-Judgement.png", num: 20, name: { en: "Judgement", my: "တရားစီရင်ခြင်း (နိုးထခြင်းနှင့် ခေါ်ယူသံ)", ja: "審判（Judgement）" }, el: "Fire", ast: { en: "Pluto", my: "ပလူတိုဂြိုဟ်", ja: "冥王星" }, upK: { en: ["Awakening", "Calling", "Rebirth", "Absolution"], my: ["ဝိညာဉ်နိုးထခြင်း", "မြင့်မြတ်သောခေါ်သံ", "အသစ်စတင်ခြင်း"], ja: ["魂の覚醒", "運命の呼び声", "復活", "赦し"] }, revK: { en: ["Self-Doubt", "Ignoring the Call", "Harsh Self-Criticism"], my: ["ခေါ်သံကို လျစ်လျူရှုခြင်း", "မိမိကိုယ်ကို အပြစ်တင်နေခြင်း"], ja: ["呼び声の無視", "過酷な自己批判", "躊躇"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
  { id: "world", file: "21-TheWorld.png", num: 21, name: { en: "The World", my: "ကမ္ဘာလောက (ပြည့်စုံခြင်းနှင့် စက်ဝိုင်းပြည့်မြောက်ခြင်း)", ja: "世界（The World）" }, el: "Earth", ast: { en: "Saturn", my: "စနေဂြိုဟ်", ja: "土星" }, upK: { en: ["Completion", "Wholeness", "Triumph", "Integration"], my: ["ပြီးပြည့်စုံခြင်း", "အောင်မြင်မှုခရီးစဉ် ပြီးဆုံးခြင်း", "ဂုဏ်ပြုခံရခြင်း"], ja: ["大団円", "完全なる達成", "統合", "世界の調和"] }, revK: { en: ["Incompletion", "Lack of Closure", "Shortcuts"], my: ["မပြီးပြတ်သေးခြင်း", "အဆုံးသတ်ရန် လိုအပ်နေခြင်း"], ja: ["未完結", "あと一歩の不足", "中途半端"] }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (အမြင့်ဆုံး အောင်မြင်မှု)", ja: "YES（完全な成就）" } }
];

for (const item of remainingMajors) {
  majorCards.push({
    id: item.id,
    file: item.file,
    name: item.name,
    number: item.num,
    romanNumeral: String(item.num),
    arcana: "major",
    suit: "none",
    element: item.el,
    astrology: item.ast,
    uprightKeywords: item.upK,
    reversedKeywords: item.revK,
    uprightMeaning: {
      en: `${item.name.en} signifies ${item.upK.en.slice(0, 2).join(' and ').toLowerCase()}.`,
      my: `${item.name.my} သည် ${item.upK.my.slice(0, 2).join(' နှင့် ')} ကို အဓိက ညွှန်ပြနေသည်။`,
      ja: `【${item.name.ja}】は、${item.upK.ja.slice(0, 2).join('と')}を象徴しています。`
    },
    reversedMeaning: {
      en: `Reversed, ${item.name.en} cautions against ${item.revK.en.slice(0, 2).join(' or ').toLowerCase()}.`,
      my: `ပြောင်းပြန်အနေအထားတွင် ${item.name.my} သည် ${item.revK.my.slice(0, 2).join(' သို့မဟုတ် ')} ဖြစ်ပေါ်နိုင်သည်ဟု သတိပေးထားသည်။`,
      ja: `逆位置の【${item.name.ja}】は、${item.revK.ja.slice(0, 2).join('や')}への注意を促しています。`
    },
    loveMeaning: {
      upright: {
        en: `In love, ${item.name.en} brings ${item.upK.en[0].toLowerCase()} into your romantic life.`,
        my: `အချစ်ရေးတွင် ${item.name.my} သည် ${item.upK.my[0]} ကို သယ်ဆောင်လာပေးသည်။`,
        ja: `恋愛面において、${item.upK.ja[0]}が関係を前進させる鍵となります。`
      },
      reversed: {
        en: `In love, reversed ${item.name.en} suggests working through ${item.revK.en[0].toLowerCase()}.`,
        my: `အချစ်ရေးတွင် ပြောင်းပြန် ${item.name.my} သည် ${item.revK.my[0]} ကို သတိထားဖြေရှင်းရန် လိုအပ်ကြောင်း ပြသသည်။`,
        ja: `恋愛面において、${item.revK.ja[0]}を乗り越えることが求められています。`
      }
    },
    careerMeaning: {
      upright: {
        en: `In career matters, ${item.name.en} highlights ${item.upK.en[0].toLowerCase()}.`,
        my: `အလုပ်အကိုင်တွင် ${item.name.my} သည် ${item.upK.my[0]} ကို အားပေးကူညီသည်။`,
        ja: `仕事面において、${item.upK.ja[0]}を意識することで大きな成果が得られます。`
      },
      reversed: {
        en: `In career, avoid ${item.revK.en[0].toLowerCase()}.`,
        my: `အလုပ်အကိုင်တွင် ${item.revK.my[0]} ကို ရှောင်ကြဉ်ပါ။`,
        ja: `仕事面において、${item.revK.ja[0]}による停滞に気をつけてください。`
      }
    },
    spiritualMeaning: {
      upright: {
        en: `Spiritually, connect with ${item.upK.en[0].toLowerCase()}.`,
        my: `ဝိညာဉ်ရေးရာတွင် ${item.upK.my[0]} ဖြင့် ချိတ်ဆက်ပါ။`,
        ja: `魂の探求において、${item.upK.ja[0]}の神聖なエネルギーと共鳴してください。`
      },
      reversed: {
        en: `Spiritually, heal any ${item.revK.en[0].toLowerCase()}.`,
        my: `ဝိညာဉ်ရေးရာတွင် ${item.revK.my[0]} ကို ကုစားပါ။`,
        ja: `内なる${item.revK.ja[0]}を静かに癒やしましょう。`
      }
    },
    advice: {
      en: `Embody ${item.upK.en[0].toLowerCase()} and walk forward with honor.`,
      my: `${item.upK.my[0]} ဖြင့် ဂုဏ်သိက္ခာရှိစွာ ရှေ့သို့ လှမ်းချီပါ။`,
      ja: `自らの${item.upK.ja[0]}を信じて、誇り高く前へ進みなさい。`
    },
    shadowWarning: {
      en: `Be wary of ${item.revK.en[0].toLowerCase()}.`,
      my: `${item.revK.my[0]} ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။`,
      ja: `${item.revK.ja[0]}に囚われないよう心を澄ませてください。`
    },
    yesNo: item.yesNo,
    symbolism: {
      en: [`Symbol of ${item.name.en}`, `Elemental connection: ${item.el}`],
      my: [`${item.name.my} ၏ အမှတ်သင်္ကေတ`, `ဓာတ်ကြီး: ${item.el}`],
      ja: [`${item.name.ja}の象徴体系`, `対応元素：${item.el}`]
    }
  });
}

// Minor Arcana Generator
const suitDefinitions = [
  {
    suit: 'cups',
    element: 'Water',
    name: { en: 'Cups', my: 'ဖလား (ရေဓာတ်)', ja: 'カップ（聖杯・水）' },
    theme: {
      en: 'emotions, relationships, intuition, and the heart',
      my: 'စိတ်ခံစားချက်၊ အချစ်ရေး၊ ပင်ကိုယ်သိစိတ်နှင့် နှလုံးသားရေးရာ',
      ja: '感情、人間関係、直感、そして愛の領域'
    },
    ranks: [
      { num: 1, en: "Ace of Cups", my: "ဖလား ၁ (မေတ္တာအစပျိုးခြင်း)", ja: "カップのエース", up: { en: "A pure spring of overflowing love and new emotional awakening", my: "မေတ္တာတရားနှင့် စိတ်ခံစားမှုအသစ်များ အလျှံပယ် စတင်စီးဆင်းလာခြင်း", ja: "溢れ出す純粋な愛と、新たな感情の目覚め" }, rev: { en: "Emotional blockage or holding back vulnerability", my: "စိတ်ခံစားချက် ပိတ်ဆို့နေခြင်း သို့မဟုတ် မေတ္တာကို ဖွင့်ဟရန် တွန့်ဆုတ်နေခြင်း", ja: "感情の滞りや、傷つくことを恐れて心を閉ざす状態" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 2, en: "Two of Cups", my: "ဖလား ၂ (နှစ်ဦးသဘောတူ ချစ်ခြင်း)", ja: "カップの2", up: { en: "Mutual love, soul union, and balanced partnership", my: "အပြန်အလှန် ချစ်မြတ်နိုးမှုနှင့် ဟန်ချက်ညီသော လက်တွဲဖော်", ja: "相思相愛、心の通い合い、調和あるパートナーシップ" }, rev: { en: "Misunderstandings or broken communication", my: "နားလည်မှုလွဲမှားခြင်း သို့မဟုတ် ဆက်သွယ်ရေး ပြတ်တောက်ခြင်း", ja: "すれ違い、誤解、不均衡な関係性" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 3, en: "Three of Cups", my: "ဖလား ၃ (အောင်ပွဲခံ မိတ်ဆုံပွဲ)", ja: "カップの3", up: { en: "Celebration, joyful friendship, and soul tribe gathering", my: "အောင်ပွဲခံ ပျော်ရွှင်ပွဲနှင့် မိတ်ဆွေကောင်းများ စုစည်းခြင်း", ja: "祝福、友情の深まり、仲間との喜ばしい祝祭" }, rev: { en: "Overindulgence, gossip, or feeling left out", my: "အပျော်အပါးလွန်ကဲခြင်း သို့မဟုတ် အုပ်စုအတွင်း စကားများခြင်း", ja: "度を越した快楽、噂話、疎外感" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 4, en: "Four of Cups", my: "ဖလား ၄ (စိတ်မပါ မကြည်မလင်ဖြစ်ခြင်း)", ja: "カップの4", up: { en: "Apathy or contemplation; missing an offered blessing", my: "စိတ်မပါဘဲ ငြီးငွေ့နေခြင်း၊ ရောက်ရှိနေသော အခွင့်အရေးကို သတိမထားမိခြင်း", ja: "倦怠感、内省、差し出された恩恵を見落とす状態" }, rev: { en: "Awakening from emotional rut; seizing new opportunities", my: "စိတ်မွန်းကျပ်မှုမှ နိုးထလာပြီး အခွင့်အရေးသစ်များကို လက်ခံခြင်း", ja: "意欲の回復、新たな機会の受容、前向きな目覚め" }, yesNo: { en: "Likely No", my: "မဖြစ်နိုင်ခြေများပါသည်", ja: "NO（停滞）" } },
      { num: 5, en: "Five of Cups", my: "ဖလား ၅ (ဆုံးရှုံးမှုကို ဝမ်းနည်းပူဆွေးခြင်း)", ja: "カップの5", up: { en: "Grief over spilled cups; remember the two that remain", my: "ဆုံးရှုံးသွားသောအရာအတွက် ဝမ်းနည်းနေခြင်း (ကျန်ရှိနေသေးသော အခွင့်အရေးကို သတိပြုပါ)", ja: "失ったものへの嘆き。しかし背後にはまだ残る愛がある" }, rev: { en: "Healing, acceptance, and moving past sorrow", my: "ဝမ်းနည်းမှုကို ကျော်လွှား၍ အနာကျက်ကာ ရှေ့ဆက်လှမ်းနိုင်ခြင်း", ja: "悲しみの受容、心の回復、再起への歩み" }, yesNo: { en: "No", my: "မဟုတ်ပါ", ja: "NO" } },
      { num: 6, en: "Six of Cups", my: "ဖလား ၆ (အတိတ်မှ အမှတ်တရချိုမြိန်မှု)", ja: "カップの6", up: { en: "Sweet nostalgia, childhood innocence, and fond reunions", my: "အတိတ်မှ လွမ်းမောဖွယ် အမှတ်တရများ၊ ဖြူစင်သော အချစ်နှင့် ပြန်လည်ဆုံဆည်းမှု", ja: "幼き日の純真、甘美なノスタルジー、温かい再会" }, rev: { en: "Living too much in the past; time to grow up", my: "အတိတ်မှာသာ နစ်မျောနေခြင်းကို ရပ်တန့်၍ လက်ရှိဘဝတွင် ရှင်သန်ရန် လိုအပ်ခြင်း", ja: "過去への固執、前進の拒絶、成長の時" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 7, en: "Seven of Cups", my: "ဖလား ၇ (စိတ်ကူးယဉ် အိပ်မက်များနှင့် ရွေးချယ်မှု)", ja: "カップの7", up: { en: "Many tempting choices, wishful illusions, and daydreams", my: "ရွေးချယ်စရာ များပြားနေခြင်း၊ စိတ်ကူးယဉ် အထင်မှားမှုများ", ja: "数多の選択肢、甘美な幻想、白昼夢" }, rev: { en: "Clarity arriving, seeing through illusions to make a real choice", my: "စိတ်ကူးယဉ်မှုများ ပျောက်ကွယ်၍ လက်တွေ့ကျသော ရွေးချယ်မှုပြုနိုင်ခြင်း", ja: "幻想からの脱却、現実的な決断、明晰な視界" }, yesNo: { en: "Neutral / Unclear", my: "စိတ်ကူးယဉ်မှုကို ဖယ်ရှားရန် လိုအပ်သည်", ja: "迷いの中（中立）" } },
      { num: 8, en: "Eight of Cups", my: "ဖလား ၈ (မပြည့်စုံသောအရာကို စွန့်ခွာလမ်းခွဲခြင်း)", ja: "カップの8", up: { en: "Walking away from what no longer nourishes your soul", my: "မိမိစိတ်နှလုံးကို မဖြည့်ဆည်းပေးနိုင်တော့သော အရာများကို စွန့်ခွာ၍ အဆင့်မြင့်ရာသို့ ထွက်ခွာခြင်း", ja: "満たされぬ場所を去り、より高次元の真実を求めて歩み出す" }, rev: { en: "Fear of walking away; clinging to an empty situation", my: "စွန့်ခွာရမည်ကို ကြောက်ရွံ့၍ အကျိုးမရှိသောနေရာတွင် ဆက်လက်နေထိုင်ခြင်း", ja: "別れの恐れ、惰性による停滞、未練" }, yesNo: { en: "No", my: "မဟုတ်ပါ (စွန့်ခွာရန် လိုအပ်သည်)", ja: "NO（旅立ち）" } },
      { num: 9, en: "Nine of Cups", my: "ဖလား ၉ (ဆုတောင်းပြည့်ခြင်းနှင့် ကျေနပ်ရောင့်ရဲမှု)", ja: "カップの9", up: { en: "The Wish Card! Deep satisfaction, emotional fulfillment and joy", my: "ဆုတောင်းပြည့် ကတ်ပြား! အလိုဆန္ဒများ ပြည့်စုံ၍ အလွန်ကျေနပ်ရောင့်ရဲရခြင်း", ja: "【ウィッシュカード】願いの成就、深い満足感、歓喜" }, rev: { en: "Smugness, materialism, or getting what you thought you wanted", my: "အပေါ်ယံ ပြည့်စုံမှု သို့မဟုတ် မာနထောင်လွှားခြင်း", ja: "物質的な過信、空虚な満足、おごり" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (ဆုတောင်းပြည့်မည်)", ja: "YES（大願成就）" } },
      { num: 10, en: "Ten of Cups", my: "ဖလား ၁၀ (မိသားစုပျော်ရွှင်မှုနှင့် အပြည့်စုံဆုံးမေတ္တာ)", ja: "カップの10", up: { en: "Ultimate domestic bliss, lasting harmony, and divine soul union", my: "မိသားစု အေးချမ်းသာယာမှုနှင့် ထာဝရ မေတ္တာစစ်", ja: "至福の家庭、永続する調和、満ち足りた魂の共鳴" }, rev: { en: "Family tension, broken peace, or unrealistic ideals", my: "မိသားစုအတွင်း စိတ်ဝမ်းကွဲခြင်း သို့မဟုတ် သဘောထားမတိုက်ဆိုင်ခြင်း", ja: "家庭内の摩擦、理想の崩れ、不協和音" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 11, en: "Page of Cups", my: "ဖလား စာပို့လုလင် (နူးညံ့သော စိတ်ကူးသစ်)", ja: "カップのペイジ", up: { en: "Heartfelt messages, intuitive sparks, and playful creativity", my: "မေတ္တာပါသော သတင်းစကားများ၊ ပင်ကိုယ်စိတ်ကူးဉာဏ်နှင့် တီထွင်ဖန်တီးမှု", ja: "心温まる便り、直感の閃き、純粋な感性" }, rev: { en: "Emotional immaturity, drama, or blocked intuition", my: "စိတ်မရင့်ကျက်ခြင်း၊ စိတ်လိုက်မာန်ပါ ဖြစ်ခြင်း", ja: "感情的な未熟さ、拗ね、直感の鈍り" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 12, en: "Knight of Cups", my: "ဖလား မြင်းစီးသူရဲကောင်း (အချစ်သံတမန်)", ja: "カップのナイト", up: { en: "Romance, poetic proposals, and following your heart", my: "ချစ်သဝဏ်လွှာ၊ အချစ်ရေး ကမ်းလှမ်းမှုနှင့် နှလုံးသားနောက်သို့ လိုက်ခြင်း", ja: "ロマンチックな誘い、詩情、理想の愛の追求" }, rev: { en: "Unrealistic fantasy, moodiness, or broken promises", my: "လက်တွေ့မကျသော စိတ်ကူးယဉ်မှု သို့မဟုတ် ကတိမတည်ခြင်း", ja: "甘言による誘惑、気まぐれ、幻滅" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 13, en: "Queen of Cups", my: "ဖလား မိဖုရား (ဂရုဏာရှင်နှင့် အကြားအမြင်ဉာဏ်)", ja: "カップのクイーン", up: { en: "Deep compassion, emotional healing, and psychic receptivity", my: "နက်ရှိုင်းသော မေတ္တာဂရုဏာ၊ စိတ်ပိုင်းဆိုင်ရာ ကုစားမှုနှင့် အကြားအမြင်ဉာဏ်", ja: "深い慈悲、共感力、霊的な直感、癒やしの母性" }, rev: { en: "Emotional overwhelm, insecurity, or codependency", my: "စိတ်ခံစားချက် လွန်ကဲခြင်း၊ မလုံခြုံသလို ခံစားရခြင်း", ja: "感情の荒波、依存心、情緒不安定" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 14, en: "King of Cups", my: "ဖလား ဘုရင် (စိတ်ခံစားချက်ကို ထိန်းချုပ်နိုင်သူ)", ja: "カップのキング", up: { en: "Emotional balance, diplomatic wisdom, and calm mastery in storms", my: "စိတ်ခံစားချက်ကို အေးဆေးစွာ ထိန်းချုပ်နိုင်သော ပညာရှိခေါင်းဆောင်", ja: "感情の統御、寛大な包容力、嵐の中でも揺るがぬ知恵" }, rev: { en: "Emotional manipulation, cold moodiness, or repressed feelings", my: "စိတ်ခံစားချက်ဖြင့် လှည့်စားခြင်း သို့မဟုတ် ဒေါသကို မြိုသိပ်ထားခြင်း", ja: "感情の操作、冷酷、抑圧された怒り" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } }
    ]
  },
  {
    suit: 'pentacles',
    element: 'Earth',
    name: { en: 'Pentacles', my: 'ဒင်္ဂါး (မြေဓာတ်)', ja: 'ペンタクル（金貨・地）' },
    theme: {
      en: 'money, work, health, and the material world',
      my: 'ငွေကြေး၊ အလုပ်အကိုင်၊ ကျန်းမာရေးနှင့် ရုပ်ဝတ္ထုလောက',
      ja: '金銭、仕事、健康、そして現実世界の基盤'
    },
    ranks: [
      { num: 1, en: "Ace of Pentacles", my: "ဒင်္ဂါး ၁ (ရုပ်ဝတ္ထုကြွယ်ဝမှု အစပျိုးခြင်း)", ja: "ペンタクルのエース", up: { en: "Tangible opportunity, financial seed, and grounded prosperity", my: "ငွေကြေးဥစ္စာ အခွင့်အလမ်းသစ်နှင့် လက်တွေ့ကျသော အောင်မြင်မှုအစ", ja: "確かな富の種、物質的チャンス、実りあるスタート" }, rev: { en: "Missed investment or shaky foundation", my: "ရင်းနှီးမြှုပ်နှံမှု အခွင့်အလမ်းလွတ်သွားခြင်း သို့မဟုတ် အခြေခံမခိုင်မာခြင်း", ja: "好機の逸脱、不安定な計画、浪費" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 2, en: "Two of Pentacles", my: "ဒင်္ဂါး ၂ (ဟန်ချက်ညီအောင် ထိန်းညှိခြင်း)", ja: "ペンタクルの2", up: { en: "Adaptability, juggling priorities, and financial agility", my: "အလုပ်များနှင့် ငွေကြေးကို ပါးနပ်စွာ ချိန်ညှိဆောင်ရွက်နိုင်ခြင်း", ja: "柔軟な適応力、臨機応変なやりくり、バランス" }, rev: { en: "Overwhelmed, dropped balls, or financial disarray", my: "ဝန်ပိနေခြင်း၊ မနိုင်ဝန်ထမ်းမိ၍ လွဲချော်ခြင်း", ja: "キャパオーバー、収支の乱れ、混乱" }, yesNo: { en: "Likely Yes", my: "ဖြစ်နိုင်ခြေရှိပါသည်", ja: "YES（調整次第）" } },
      { num: 3, en: "Three of Pentacles", my: "ဒင်္ဂါး ၃ (လက်တွဲပူးပေါင်းမှုနှင့် ကျွမ်းကျင်မှု)", ja: "ペンタクルの3", up: { en: "Master teamwork, craftsmanship, and professional recognition", my: "အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်မှုနှင့် ကျွမ်းကျင်မှုအတွက် ချီးကျူးခံရခြင်း", ja: "熟練の技、建設的な協力体制、高い評価" }, rev: { en: "Poor teamwork, cutting corners, or lack of skill", my: "အဖွဲ့အစည်း ညီညွတ်မှုမရှိခြင်း သို့မဟုတ် အရည်အသွေးညံ့ဖျင်းခြင်း", ja: "チームワークの乱れ、手抜き、技術不足" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 4, en: "Four of Pentacles", my: "ဒင်္ဂါး ၄ (ပိုင်ဆိုင်မှုကို တင်းတင်းကျပ်ကျပ် ဆုပ်ကိုင်ထားခြင်း)", ja: "ペンタクルの4", up: { en: "Financial security, holding tight, and conserving resources", my: "ငွေကြေးတည်ငြိမ်မှု၊ စည်းစိမ်ကို ထိန်းသိမ်းထားခြင်း", ja: "安定した財政、守りの姿勢、堅実さ" }, rev: { en: "Greed, scarcity mindset, or financial bleeding", my: "တွန့်တိုကပ်စေးနည်းလွန်းခြင်း သို့မဟုတ် ငွေကြေးမထိန်းနိုင်ဘဲ ယိုဖိတ်ခြင်း", ja: "過度な執着、ケチ、浪費の極端さ" }, yesNo: { en: "Likely Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 5, en: "Five of Pentacles", my: "ဒင်္ဂါး ၅ (ခက်ခဲကြမ်းတမ်းသော အချိန်ကာလ)", ja: "ペンタクルの5", up: { en: "Hardship, financial winter; look up, sanctuary is near", my: "ငွေကြေးကျပ်တည်းမှု၊ ခက်ခဲသောအချိန် (အကူအညီနှင့် ခိုလှုံရာသည် အနီးတွင်ရှိသည်)", ja: "一時的な困窮、孤立感。しかしすぐ側に救いの扉がある" }, rev: { en: "Recovery, end of poverty, and returning warmth", my: "အခက်အခဲများ ပြီးဆုံးသွားပြီး ပြန်လည်ဦးမော့လာခြင်း", ja: "苦境からの脱出、希望の光、経済の好転" }, yesNo: { en: "No", my: "မဟုတ်ပါ (အခက်အခဲရှိသည်)", ja: "NO" } },
      { num: 6, en: "Six of Pentacles", my: "ဒင်္ဂါး ၆ (ပေးကမ်းမျှဝေခြင်းနှင့် အကူအညီရရှိခြင်း)", ja: "ペンタクルの6", up: { en: "Generosity, fair wealth sharing, and karmic prosperity", my: "ရက်ရောစွာ ပေးကမ်းခြင်း၊ အကူအညီရရှိခြင်းနှင့် သာတူညီမျှ ခံစားရခြင်း", ja: "寛大さ、富の循環、正当な支援と報酬" }, rev: { en: "Strings attached, unpaid debts, or one-sided exploitation", my: "မရိုးသားသော အကူအညီ သို့မဟုတ် တစ်ဖက်သတ် အမြတ်ထုတ်ခံရခြင်း", ja: "不平等な施し、見返りの要求、借金" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 7, en: "Seven of Pentacles", my: "ဒင်္ဂါး ၇ (စိုက်ထုတ်ထားသောအပင် ရိတ်သိမ်းရန် စောင့်ဆိုင်းခြင်း)", ja: "ペンタクルの7", up: { en: "Patience, long-term investments bearing fruit", my: "သည်းခံစောင့်ဆိုင်းခြင်း၊ ရင်းနှီးမြှုပ်နှံမှုများ တဖြည်းဖြည်း အောင်မြင်လာခြင်း", ja: "忍耐深い育成、長期投資の成果、実りの確認" }, rev: { en: "Impatience, wasted effort, or poor harvest yield", my: "စိတ်မရှည်ခြင်း၊ အကျိုးမရှိသောနေရာတွင် အားစိုက်မိခြင်း", ja: "焦燥感、労力の無駄遣い、方向転換の必要" }, yesNo: { en: "Likely Yes", my: "အချိန်ယူပါက ဖြစ်ပါသည်", ja: "YES（時間をかければ）" } },
      { num: 8, en: "Eight of Pentacles", my: "ဒင်္ဂါး ၈ (ကျွမ်းကျင်မှုအတွက် ကြိုးစားအားထုတ်ခြင်း)", ja: "ペンタクルの8", up: { en: "Mastery through dedication, meticulous skill building", my: "မိမိအတတ်ပညာကို ဇွဲလုံ့လကြီးစွာ ကြိုးပမ်းသင်ယူလေ့ကျင့်ခြင်း", ja: "職人気質、地道な修練、技術の向上" }, rev: { en: "Burnout, repetitive grind, or cutting corners", my: "ပင်ပန်းနွမ်းနယ်ခြင်း သို့မဟုတ် အရည်အသွေးမပြည့်မီဘဲ ဖြတ်လမ်းလိုက်ခြင်း", ja: "手抜き、単調な作業への嫌気、燃え尽き" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 9, en: "Nine of Pentacles", my: "ဒင်္ဂါး ၉ (ကိုယ်ပိုင်ကြိုးစားမှုဖြင့် ရရှိသော စည်းစိမ်နှင့် လွတ်လပ်မှု)", ja: "ペンタクルの9", up: { en: "Self-reliance, luxury, refinement, and solitary ease", my: "ကိုယ်ပိုင်စွမ်းရည်ဖြင့် ရရှိသော ကြွယ်ဝမှုနှင့် သက်တောင့်သက်သာ လွတ်လပ်စွာ နေထိုင်ရခြင်း", ja: "自立した豊かさ、優雅な暮らし、自力で掴んだ成功" }, rev: { en: "Living beyond means, superficial status, or isolation", my: "ကြွားဝါရန် အသုံးအဖြုန်းကြီးခြင်း သို့မဟုတ် ချမ်းသာသော်လည်း အထီးကျန်ခြင်း", ja: "見栄のための浪費、孤独、経済的依存" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 10, en: "Ten of Pentacles", my: "ဒင်္ဂါး ၁၀ (မျိုးဆက်လက်ဆင့်ကမ်း အမွေအနှစ်နှင့် စည်းစိမ်)", ja: "ペンタクルの10", up: { en: "Generational wealth, enduring family legacy, and empire", my: "ခိုင်မာသော မျိုးဆက်ဆက် စည်းစိမ်ဥစ္စာနှင့် မိသားစုအမွေအနှစ်", ja: "確固たる遺産、一族の繁栄、永続的な富の基盤" }, rev: { en: "Disputes over inheritance or loss of family wealth", my: "အမွေကိစ္စ အငြင်းပွားခြင်း သို့မဟုတ် မိသားစုစီးပွားပျက်စီးခြင်း", ja: "遺産争い、伝統の崩壊、短期的な損失" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 11, en: "Page of Pentacles", my: "ဒင်္ဂါး စာပို့လုလင် (လက်တွေ့ကျသော သင်ယူသူ)", ja: "ペンタクルのペイジ", up: { en: "Grounded student, practical ambitions, financial seed", my: "ရည်မှန်းချက်ကြီးသော တပည့်၊ ငွေကြေးအခွင့်အလမ်းသစ်များ", ja: "勤勉な学徒、現実的な目標、好機の種" }, rev: { en: "Procrastination, lack of progress, unrealistic ideas", my: "အချိန်ဆွဲနေခြင်း၊ လက်တွေ့မကျသော စိတ်ကူးများ", ja: "怠慢、計画性の欠如、未実行の夢" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 12, en: "Knight of Pentacles", my: "ဒင်္ဂါး မြင်းစီးသူရဲကောင်း (စိတ်အချရဆုံး လုပ်ဆောင်သူ)", ja: "ペンタクルのナイト", up: { en: "Methodical progress, relentless reliability, and hard work", my: "စနစ်တကျ ဖြည်းဖြည်းနှင့်မှန်မှန် ကြိုးစားလုပ်ဆောင်သူ", ja: "着実な前進、絶対の信頼性、不屈の粘り強さ" }, rev: { en: "Stubborn rigidity, workaholism, or complete stagnation", my: "ခေါင်းမာလွန်းခြင်း သို့မဟုတ် တိုးတက်မှုမရှိဘဲ ရပ်တန့်နေခြင်း", ja: "頑固、過度な慎重さによる機会損失、停滞" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 13, en: "Queen of Pentacles", my: "ဒင်္ဂါး မိဖုရား (လက်တွေ့ကျသော ကြွယ်ဝမှုရှင်)", ja: "ペンタクルのクイーン", up: { en: "Down-to-earth abundance, nurturing provider, and luxury", my: "လက်တွေ့ကျသော စည်းစိမ်ဥစ္စာ၊ မိသားစုကို စောင့်ရှောက်သော မိခင်စွမ်းအင်", ja: "地に足のついた豊かさ、母性的な守護、実利的な知恵" }, rev: { en: "Neglecting home, obsession with material status", my: "ရုပ်ဝတ္ထုကိုသာ အလွန်အမင်း မက်မောခြင်း သို့မဟုတ် ကျန်းမာရေးချို့ယွင်းခြင်း", ja: "過度な物質主義、家庭の軽視、不健康" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 14, en: "King of Pentacles", my: "ဒင်္ဂါး ဘုရင် (စီးပွားရေးနှင့် စည်းစိမ်၏ ဧကရာဇ်)", ja: "ペンタクルのキング", up: { en: "Master financier, unshakeable stability, and empire ruler", my: "စီးပွားရေး အောင်မြင်မှု၏ အထွတ်အထိပ်၊ မယိမ်းယိုင်သော တည်ငြိမ်မှု", ja: "富の最高統率者、堅固な成功、ビジネスの覇者" }, rev: { en: "Greed, financial corruption, or ruthless materialism", my: "လောဘကြီးလွန်းခြင်း သို့မဟုတ် ငွေကြေးအတွက် မသမာမှုပြုလုပ်ခြင်း", ja: "強欲、拝金主義、独断的な経営" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } }
    ]
  },
  {
    suit: 'swords',
    element: 'Air',
    name: { en: 'Swords', my: 'ဓား (လေဓာတ်)', ja: 'ソード（剣・風）' },
    theme: {
      en: 'mind, truth, communication, and conflict',
      my: 'စိတ်အတွေး၊ အမှန်တရား၊ ဆက်သွယ်ရေးနှင့် အခက်အခဲပဋိပက္ခ',
      ja: '知性、真理、言葉、そして試練と葛藤'
    },
    ranks: [
      { num: 1, en: "Ace of Swords", my: "ဓား ၁ (အသိဉာဏ်အလင်းနှင့် အမှန်တရား)", ja: "ソードのエース", up: { en: "Mental breakthrough, raw truth, and razor clarity", my: "စိတ်အသိဉာဏ် ပွင့်လင်းလာခြင်း၊ ရှင်းလင်းပြတ်သားသော အမှန်တရား", ja: "知性の突破口、絶対的な真実、曇りなき明晰さ" }, rev: { en: "Confusion, weaponized words, or clouded judgment", my: "စိတ်ရှုပ်ထွေးခြင်း၊ စကားလုံးများဖြင့် အခြားသူကို နာကျင်စေခြင်း", ja: "思考の混乱、言葉の刃、誤った判断" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 2, en: "Two of Swords", my: "ဓား ၂ (မျက်စိမှိတ် ဆုံးဖြတ်ရခက်နေခြင်း)", ja: "ソードの2", up: { en: "Stalemate, difficult choice, and blocked emotions", my: "ရွေးချယ်ရခက်နေခြင်း၊ အမှန်တရားကို ရင်ဆိုင်ရန် တွန့်ဆုတ်နေခြင်း", ja: "膠着状態、苦渋の決断、感情の遮断" }, rev: { en: "Blindfold removed, truth faced, stalemate broken", my: "မျက်စိပွင့်သွားခြင်း၊ အမှန်တရားကို ရဲဝံ့စွာ ရင်ဆိုင်ဆုံးဖြတ်ခြင်း", ja: "目隠しが外れる時、決着、真実との対峙" }, yesNo: { en: "Neutral / Unclear", my: "ဆုံးဖြတ်ချက်ချရန် လိုအပ်သည်", ja: "中立（決断待ち）" } },
      { num: 3, en: "Three of Swords", my: "ဓား ၃ (နှလုံးသား နာကျင်ကြေကွဲရခြင်း)", ja: "ソードの3", up: { en: "Heartbreak, sorrow, and painful truth piercing through", my: "နှလုံးသား နာကျင်ရခြင်း၊ သစ္စာဖောက်ခံရခြင်း သို့မဟုတ် ဝမ်းနည်းကြေကွဲမှု", ja: "痛切な悲しみ、失恋、受け入れがたい真実" }, rev: { en: "Healing heartbreak, releasing grief, and recovery", my: "အသည်းကွဲဒဏ်ရာများ အနာကျက်လာခြင်း၊ ဝမ်းနည်းမှုကို ကျော်လွှားနိုင်ခြင်း", ja: "心の回復、痛みの解放、癒やしの訪れ" }, yesNo: { en: "No", my: "မဟုတ်ပါ (နာကျင်မှုရှိသည်)", ja: "NO" } },
      { num: 4, en: "Four of Swords", my: "ဓား ၄ (စိတ်အနားယူခြင်းနှင့် ဆိတ်ငြိမ်မှု)", ja: "ソードの4", up: { en: "Rest, sanctuary, meditation, and mental rejuvenation", my: "စိတ်အေးချမ်းစွာ အနားယူခြင်း၊ တရားရှုမှတ်ခြင်းနှင့် အားမွေးခြင်း", ja: "休息、祈り、精神の回復、静寂の避難所" }, rev: { en: "Burnout, restlessness, or forced exhaustion", my: "စိတ်မနားနိုင်ဘဲ ပင်ပန်းနွမ်းနယ်နေခြင်း", ja: "過労、焦りによる活動再開、休息不足" }, yesNo: { en: "Likely Yes", my: "အနားယူပြီးမှ လုပ်ဆောင်ပါ", ja: "YES（休息が先）" } },
      { num: 5, en: "Five of Swords", my: "ဓား ၅ (အကျိုးမရှိသော အနိုင်ရမှုနှင့် ပဋိပက္ခ)", ja: "ソードの5", up: { en: "Hollow victory, conflict, arrogance, and selfish winning", my: "အနိုင်ရသော်လည်း အကျိုးမရှိခြင်း၊ မာနကြီးစွာ အငြင်းပွားခြင်း", ja: "空しい勝利、不毛な争い、人間関係の破綻" }, rev: { en: "Reconciliation, ending feuds, and putting down weapons", my: "ရန်ငြိုးများ အဆုံးသတ်ခြင်း၊ လက်နက်ချ၍ ပြေလည်အောင်ညှိနှိုင်းခြင်း", ja: "和解、争いの終結、過ちの清算" }, yesNo: { en: "No", my: "မဟုတ်ပါ", ja: "NO" } },
      { num: 6, en: "Six of Swords", my: "ဓား ၆ (မုန်တိုင်းထန်သောနေရာမှ အေးချမ်းရာသို့ ရွေ့ပြောင်းခြင်း)", ja: "ソードの6", up: { en: "Transition to calmer waters, healing journey, moving on", my: "ခက်ခဲသော အခြေအနေမှ အေးချမ်းတည်ငြိမ်သော နေရာသို့ ကူးပြောင်းခြင်း", ja: "荒波を抜けて静かな岸辺へ、回復の旅立ち" }, rev: { en: "Carrying emotional baggage, stormy transit", my: "အတိတ်မှ ဒဏ်ရာများကို သယ်ဆောင်လာမိခြင်း၊ အကူးအပြောင်း မချောမွေ့ခြင်း", ja: "過去の引きずり、遅延する旅路、未練" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 7, en: "Seven of Swords", my: "ဓား ၇ (လှည့်စားမှုနှင့် လျှို့ဝှက်အကြံအစည်)", ja: "ソードの7", up: { en: "Strategy, stealth, deception, or taking a clever risk", my: "လျှို့ဝှက်လုပ်ဆောင်ခြင်း၊ ပါးနပ်စွာ အကွက်ချခြင်း သို့မဟုတ် လှည့်စားခံရခြင်း", ja: "策略、単独行動、油断のならぬ駆け引き" }, rev: { en: "Confession, coming clean, exposed deceit", my: "အမှန်တရား ပေါ်ပေါက်လာခြင်း၊ မသမာမှုများ ဖော်ထုတ်ခံရခြင်း", ja: "告白、悪事の露見、良心の呵責" }, yesNo: { en: "Likely No", my: "မသမာမှုများကို သတိထားပါ", ja: "NO（警戒せよ）" } },
      { num: 8, en: "Eight of Swords", my: "ဓား ၈ (မိမိအတွေးဖြင့် မိမိကိုယ်ကို ထောင်ချောက်ဆင်မိခြင်း)", ja: "ソードの8", up: { en: "Self-imposed mental prison, feeling trapped and helpless", my: "မိမိ၏ အတွေးမှားများဖြင့် ပိတ်မိနေခြင်း၊ အကူအညီမဲ့သလို ခံစားရခြင်း", ja: "思い込みによる束縛、無力感という名の幻影" }, rev: { en: "Breaking free from mental limiting beliefs, taking power", my: "စိတ်တွင်း အချုပ်အနှောင်များမှ လွတ်မြောက်လာခြင်း", ja: "目覚め、自己解放、新たな選択肢の発見" }, yesNo: { en: "No", my: "မဟုတ်ပါ (စိတ်ကို လွတ်လပ်ခွင့်ပေးပါ)", ja: "NO" } },
      { num: 9, en: "Nine of Swords", my: "ဓား ၉ (ညဉ့်နက်သန်းခေါင် စိုးရိမ်သောကလွန်ကဲခြင်း)", ja: "ソードの9", up: { en: "Anxiety, nightmares, overthinking, and guilt", my: "အလွန်အမင်း စိုးရိမ်သောကရောက်ခြင်း၊ ညဘက်အိပ်မပျော်ခြင်း၊ အတွေးလွန်ခြင်း", ja: "深夜の苦悩、悪夢、過度な取り越し苦労" }, rev: { en: "Dawn after darkness, overcoming despair, finding hope", my: "စိုးရိမ်သောကများ လျော့ပါးသွားခြင်း၊ မျှော်လင့်ချက် ပြန်လည်ရရှိခြင်း", ja: "夜明け、苦痛からの解放、受容と安息" }, yesNo: { en: "No", my: "မဟုတ်ပါ", ja: "NO" } },
      { num: 10, en: "Ten of Swords", my: "ဓား ၁၀ (အဆိုးဆုံးအခြေအနေ ပြီးဆုံးခြင်းနှင့် မိုးသောက်ကြယ်)", ja: "ソードの10", up: { en: "Rock bottom, painful ending, but dawn breaks on the horizon", my: "အဆိုးဆုံး အဆုံးသတ်သို့ ရောက်ရှိသွားခြင်း (သို့သော် မနက်ဖြန်တွင် အလင်းရောင်သစ် ပေါ်ထွန်းမည်)", ja: "完全な終局、どん底。しかし東の空には夜明けの光が差す" }, rev: { en: "Rising from the ashes, surviving the worst storm", my: "အဆိုးဆုံး အခြေအနေမှ ပြန်လည်ရုန်းထနိုင်ခြင်း", ja: "どん底からの浮上、再起、最悪期の脱出" }, yesNo: { en: "No", my: "မဟုတ်ပါ (အဆုံးသတ်တစ်ခုဖြစ်သည်)", ja: "NO" } },
      { num: 11, en: "Page of Swords", my: "ဓား စာပို့လုလင် (ထက်မြက်သော သတင်းစုံစမ်းသူ)", ja: "ソードのペイジ", up: { en: "Sharp intellect, vigilance, curiosity, and truth seeking", my: "ထက်မြက်သော ဉာဏ်ရည်၊ စုံစမ်းထောက်လှမ်းခြင်းနှင့် အမှန်တရားရှာဖွေခြင်း", ja: "鋭敏な知性、警戒心、知的好奇心" }, rev: { en: "Gossip, deceptive spying, or cynical tactlessness", my: "အတင်းအဖျင်းပြောခြင်း သို့မဟုတ် သံသယလွန်ကဲခြင်း", ja: "口先だけの批判、スパイ行為、悪意ある噂" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 12, en: "Knight of Swords", my: "ဓား မြင်းစီးသူရဲကောင်း (အရှိန်အဟုန်ပြင်းစွာ ထိုးဖောက်သူ)", ja: "ソードのナイト", up: { en: "Fierce ambition, decisive speed, and charging into battle", my: "ပြတ်သားသော အရှိန်အဟုန်ဖြင့် ရှေ့သို့ အပြင်းအထန် တိုးဝင်ဆောင်ရွက်ခြင်း", ja: "電光石火の行動、鋭利な決断力、猛進" }, rev: { en: "Reckless haste, tactless aggression, or burn-and-crash", my: "မဆင်မခြင် အလျင်စလိုလုပ်မိခြင်း၊ ရိုင်းစိုင်းစွာ ဆက်ဆံမိခြင်း", ja: "無謀な突進、舌禍、計画なき暴走" }, yesNo: { en: "Likely Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 13, en: "Queen of Swords", my: "ဓား မိဖုရား (ပြတ်သားသော အမှန်တရားရှင်)", ja: "ソードのクイーン", up: { en: "Clear boundaries, razor intellect, and unvarnished truth", my: "ပြတ်သားသော အသိဉာဏ်၊ တိကျသော စည်းကမ်းနှင့် မလှည့်စားနိုင်သော အမှန်တရား", ja: "明晰な洞察力、厳格な境界線、飾らぬ真実" }, rev: { en: "Cold bitterness, cruel judgment, or emotional walls", my: "ရက်စက်စွာ ဝေဖန်ပြစ်တင်ခြင်း သို့မဟုတ် ခံစားချက်မရှိဘဲ အေးစက်လွန်းခြင်း", ja: "冷酷な批判、頑なな孤高、辛辣さ" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 14, en: "King of Swords", my: "ဓား ဘုရင် (ဉာဏ်ပညာနှင့် တရားဥပဒေ၏ အရှင်)", ja: "ソードのキング", up: { en: "Intellectual authority, strategic clarity, and fair judgment", my: "အသိပညာ၏ အထွတ်အထိပ်၊ မဟာဗျူဟာမြောက် စဉ်းစားတွေးခေါ်နိုင်သော ခေါင်းဆောင်", ja: "知性の最高権威、冷徹な戦略眼、公明正大な裁き" }, rev: { en: "Tyranny, manipulation of words, or heartless cruelty", my: "အာဏာရှင်ဆန်ဆန် ဖိနှိပ်ခြင်း သို့မဟုတ် စကားလုံးဖြင့် လှည့်စားခြင်း", ja: "冷酷な独裁、詭弁、力による威圧" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } }
    ]
  },
  {
    suit: 'wands',
    element: 'Fire',
    name: { en: 'Wands', my: 'သစ်သားလှံတံ (မီးဓာတ်)', ja: 'ワンド（棍棒・火）' },
    theme: {
      en: 'passion, action, creativity, and willpower',
      my: 'စိတ်အားထက်သန်မှု၊ လုပ်ဆောင်ချက်၊ တီထွင်ဖန်တီးမှုနှင့် စိတ်ဓာတ်စွမ်းအား',
      ja: '情熱、行動、創造性、そして不屈の意志'
    },
    ranks: [
      { num: 1, en: "Ace of Wands", my: "သစ်သားလှံတံ ၁ (စိတ်အားထက်သန်မှု မီးတောက်အစ)", ja: "ワンドのエース", up: { en: "Creative spark, passionate inspiration, bold initiative", my: "တီထွင်ဖန်တီးနိုင်စွမ်း မီးတောက်စတင်ခြင်း၊ ရဲဝံ့စွာ စတင်ဆောင်ရွက်ခြင်း", ja: "創造性の火花、情熱の閃き、大胆な挑戦の始まり" }, rev: { en: "Creative block, lack of passion, or frustrating delays", my: "စိတ်ဓာတ်ကျဆင်းခြင်း သို့မဟုတ် အကြံဉာဏ်များ ပိတ်ဆို့နေခြင်း", ja: "情熱の空回り、意欲の減退、出鼻をくじかれる遅延" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 2, en: "Two of Wands", my: "သစ်သားလှံတံ ၂ (အနာဂတ်အတွက် အစီအစဉ်ချမှတ်ခြင်း)", ja: "ワンドの2", up: { en: "Visionary planning, holding the world, future expansion", my: "ကမ္ဘာကို လွှမ်းခြုံကြည့်ရှုနိုင်သော အနာဂတ်အစီအစဉ်များ ချမှတ်ခြင်း", ja: "未来を見据えた構想、世界への進出、大志" }, rev: { en: "Fear of unknown, staying inside comfort zone", my: "မသိသေးသောအရာကို ကြောက်ရွံ့၍ အဟောင်းထဲတွင်သာ နေထိုင်မိခြင်း", ja: "未知への恐れ、安全圏への固執、決断の遅れ" }, yesNo: { en: "Likely Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 3, en: "Three of Wands", my: "သစ်သားလှံတံ ၃ (အဝေးသို့ ချဲ့ထွင်ခြင်းနှင့် ရလဒ်များ စတင်ရောက်ရှိခြင်း)", ja: "ワンドの3", up: { en: "Expansion, foresight, ships coming in, rewarding momentum", my: "လုပ်ငန်းချဲ့ထွင်နိုင်ခြင်း၊ စိုက်ထုတ်ထားသော အသီးအပွင့်များ ရောက်ရှိလာခြင်း", ja: "計画の拡大、商機の到来、実りの予感" }, rev: { en: "Delays in plans, missed opportunities, or obstacles", my: "အစီအစဉ်များ နှောင့်နှေးခြင်း သို့မဟုတ် အခွင့်အလမ်းများ လွဲချော်ခြင်း", ja: "期待外れの遅延、障害による停滞" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 4, en: "Four of Wands", my: "သစ်သားလှံတံ ၄ (အောင်ပွဲခံ မင်္ဂလာပွဲနှင့် အိမ်ဂေဟာ)", ja: "ワンドの4", up: { en: "Celebration, homecoming, harmonious sanctuary, and joy", my: "အောင်ပွဲခံ ပျော်ရွှင်ပွဲ၊ အိမ်ထောင်မင်္ဂလာနှင့် အေးချမ်းသော ဂေဟာ", ja: "祝祭、安住の地、調和と喜びに満ちた達成" }, rev: { en: "Transient instability, minor domestic tension", my: "ယာယီ မတည်ငြိမ်မှု သို့မဟုတ် အိမ်တွင်း အနည်းငယ် စိတ်အနှောင့်အယှက်ဖြစ်ခြင်း", ja: "一時的な落ち着きのなさ、家庭内の不協和音" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 5, en: "Five of Wands", my: "သစ်သားလှံတံ ၅ (ပြိုင်ဆိုင်မှုနှင့် သဘောထားကွဲလွဲခြင်း)", ja: "ワンドの5", up: { en: "Competition, conflict, chaotic friction, and testing", my: "အပြိုင်အဆိုင် များပြားခြင်း၊ အချင်းချင်း ပွတ်တိုက်မှုများ ဖြစ်ပေါ်ခြင်း", ja: "激しい競争、意見の衝突、試練となる摩擦" }, rev: { en: "Conflict resolution, finding agreement, avoiding drama", my: "သဘောထားကွဲလွဲမှုများ ပြေလည်သွားခြင်း၊ ပြိုင်ဆိုင်မှုမှ လွတ်မြောက်ခြင်း", ja: "争いの収束、妥協点の発見、調和への移行" }, yesNo: { en: "No", my: "မဟုတ်ပါ (ပြိုင်ဆိုင်မှုရှိသည်)", ja: "NO" } },
      { num: 6, en: "Six of Wands", my: "သစ်သားလှံတံ ၆ (အောင်ပွဲခံ မြင်းစီးသူနှင့် ဂုဏ်ပြုခံရခြင်း)", ja: "ワンドの6", up: { en: "Public victory, triumph, acclaim, and proud achievement", my: "လူထုရှေ့တွင် အောင်ပွဲခံရခြင်း၊ လူအများ၏ အသိအမှတ်ပြု ချီးကျူးမှုကို ရရှိခြင်း", ja: "輝かしい凱旋、称賛、社会的成功と栄誉" }, rev: { en: "Fallen ego, public disgrace, or hunger for external validation", my: "မာနကျဆင်းခြင်း သို့မဟုတ် အခြားသူများ၏ အသိအမှတ်ပြုမှုကိုသာ အလွန်အမင်း တောင့်တခြင်း", ja: "自信の喪失、過大評価への反動、不名誉" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 7, en: "Seven of Wands", my: "သစ်သားလှံတံ ၇ (အခက်အခဲများကို ရဲဝံ့စွာ ရင်ဆိုင်တွန်းလှန်ခြင်း)", ja: "ワンドの7", up: { en: "Defending high ground, perseverance, and standing tall", my: "အသာစီးနေရာမှ ရဲဝံ့စွာ ခုခံကာကွယ်ခြင်း၊ မဆုတ်မနစ် ကြံ့ကြံ့ခံခြင်း", ja: "優位な立場の死守、孤軍奮闘、不屈の勇気" }, rev: { en: "Feeling overwhelmed, giving up, or fighting unnecessary battles", my: "အားကုန်နွမ်းနယ်ခြင်း သို့မဟုတ် မလိုအပ်သော တိုက်ပွဲများကို တိုက်နေမိခြင်း", ja: "圧倒されるプレッシャー、孤立無援、降伏" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (ဆက်လက်ရပ်တည်ပါ)", ja: "YES（耐え抜けば）" } },
      { num: 8, en: "Eight of Wands", my: "သစ်သားလှံတံ ၈ (အရှိန်အဟုန်ပြင်းစွာ လျင်မြန်စွာ ဖြစ်ပေါ်ခြင်း)", ja: "ワンドの8", up: { en: "Rapid speed, swift action, incoming messages, and flight", my: "အလွန်လျင်မြန်သော အရှိန်အဟုန်၊ သတင်းစကားများ ချက်ချင်းရောက်ရှိလာခြင်း", ja: "急展開、迅速な便り、一気呵成の前進" }, rev: { en: "Delays, panic, rushing headlong into mistakes", my: "အလျင်စလိုလုပ်၍ မှားယွင်းခြင်း သို့မဟုတ် မမျှော်လင့်ဘဲ နှောင့်နှေးခြင်း", ja: "焦りによる空回り、不意の遅延、誤報" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည် (အလွန်မြန်မည်)", ja: "YES（迅速）" } },
      { num: 9, en: "Nine of Wands", my: "သစ်သားလှံတံ ၉ (နောက်ဆုံးအဆင့်အထိ ကြံ့ကြံ့ခံ ရပ်တည်ခြင်း)", ja: "ワンドの9", up: { en: "Resilience, battle-weary grit, defending the final line", my: "ပင်ပန်းသော်လည်း နောက်ဆုံးအထိ အရှုံးမပေးဘဲ ရဲဝံ့စွာ ကြံ့ကြံ့ခံခြင်း", ja: "不屈の忍耐、最終防衛線、試練の果ての粘り" }, rev: { en: "Paranoia, burnout, defensive walls that isolate you", my: "သံသယလွန်ကဲခြင်း သို့မဟုတ် စိတ်ပင်ပန်းနွမ်းနယ်လွန်း၍ အရှုံးပေးချင်လာခြင်း", ja: "頑なな意固地、被害妄想、過度の消耗" }, yesNo: { en: "Likely Yes", my: "ဟုတ်ပါသည် (ဆက်လက်ကြိုးစားပါ)", ja: "YES（持ちこたえよ）" } },
      { num: 10, en: "Ten of Wands", my: "သစ်သားလှံတံ ၁၀ (ဝန်ထုပ်ဝန်ပိုး လွန်ကဲစွာ ထမ်းပိုးထားရခြင်း)", ja: "ワンドの10", up: { en: "Heavy burden, overwhelmed by responsibility; lighten the load", my: "တာဝန်များ အလွန်အမင်း ဝန်ပိနေခြင်း (မလိုအပ်သော ဝန်များကို လျှော့ချရန် လိုအပ်သည်)", ja: "過度な重責、抱え込みすぎた重荷。手放す時" }, rev: { en: "Releasing burdens, delegating, recovering from burnout", my: "ဝန်ထုပ်ဝန်ပိုးများကို လက်လွှတ်လျှော့ချနိုင်ခြင်း၊ ပြန်လည်သက်သာရာရခြင်း", ja: "重荷からの解放、委託、燃え尽きからの再生" }, yesNo: { en: "No", my: "မဟုတ်ပါ (ဝန်ပိနေသည်)", ja: "NO" } },
      { num: 11, en: "Page of Wands", my: "သစ်သားလှံတံ စာပို့လုလင် (စိတ်အားထက်သန်သော စွန့်စားသူငယ်)", ja: "ワンドのペイジ", up: { en: "Enthusiastic messenger, creative adventure, free spirit", my: "စိတ်အားထက်သန်သော သတင်းပို့သူ၊ စွန့်စားမှုနှင့် တီထွင်ဖန်တီးမှုအစ", ja: "情熱の使者、冒険心、無邪気な好奇心" }, rev: { en: "Scattered ideas, impatience, lack of commitment", my: "အာရုံမစူးစိုက်နိုင်ခြင်း၊ အစသာရှိပြီး အဆုံးမရှိခြင်း", ja: "口先だけの熱意、忍耐不足、未熟な放蕩" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 12, en: "Knight of Wands", my: "သစ်သားလှံတံ မြင်းစီးသူရဲကောင်း (ရဲရင့်ထက်သန်သော တိုက်ခိုက်ရေးသမား)", ja: "ワンドのナイト", up: { en: "Fearless passion, adventure, dynamic charisma", my: "မကြောက်မရွံ့ စွန့်စားချီတက်ခြင်း၊ ဆွဲဆောင်မှုနှင့် ပြင်းပြသော စိတ်အားထက်သန်မှု", ja: "燃え盛る情熱、大胆不敵な挑戦、圧倒的カリスマ" }, rev: { en: "Hot-headed recklessness, unpredictable drama, burnout", my: "စိတ်တိုဒေါသထွက်လွယ်ခြင်း သို့မဟုတ် မဆင်မခြင် စွန့်စားမိခြင်း", ja: "短気、無謀な暴走、気まぐれな熱狂" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 13, en: "Queen of Wands", my: "သစ်သားလှံတံ မိဖုရား (ဆွဲဆောင်မှုပြည့်ဝသော ခေါင်းဆောင်)", ja: "ワンドのクイーン", up: { en: "Charismatic radiance, confidence, fierce independence, warmth", my: "ယုံကြည်မှုပြည့်ဝသော ဆွဲဆောင်မှု၊ နွေးထွေးမှုနှင့် လွတ်လပ်သော ခေါင်းဆောင်မှု", ja: "情熱の女王、揺るぎなき自信、自立と華やかな魅力" }, rev: { en: "Jealousy, demanding drama, insecurity", my: "မနာလိုဝန်တိုခြင်း သို့မဟုတ် စိတ်မလုံခြုံသလို ခံစားရခြင်း", ja: "嫉妬心、自己顕示欲の暴走、ヒステリー" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } },
      { num: 14, en: "King of Wands", my: "သစ်သားလှံတံ ဘုရင် (အမြော်အမြင်ကြီးသော ခေါင်းဆောင်ကြီး)", ja: "ワンドのキング", up: { en: "Visionary leader, dynamic inspiration, honorable mastery", my: "အမြော်အမြင်ကြီးမားသော ခေါင်းဆောင်၊ အခြားသူများကို လှုံ့ဆော်ပေးနိုင်သော စွမ်းရည်", ja: "先見の明を持つ指導者、不屈の情熱、高潔な覇気" }, rev: { en: "Tyrant, ruthless impatience, impossible demands", my: "အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် အခြားသူများကို ဖိနှိပ်တောင်းဆိုခြင်း", ja: "独善的、傲慢な支配、短慮" }, yesNo: { en: "Yes", my: "ဟုတ်ပါသည်", ja: "YES" } }
    ]
  }
];

const allCards = [...majorCards];

for (const sDef of suitDefinitions) {
  for (const r of sDef.ranks) {
    const numPad = String(r.num).padStart(2, "0");
    const fileName = `${sDef.suit.charAt(0).toUpperCase() + sDef.suit.slice(1)}${numPad}.png`;

    allCards.push({
      id: `${sDef.suit}-${r.num}`,
      file: fileName,
      name: { en: r.en, my: r.my, ja: r.ja },
      number: r.num,
      arcana: "minor",
      suit: sDef.suit,
      element: sDef.element,
      astrology: {
        en: `${sDef.theme.en} (Rank ${r.num})`,
        my: `${sDef.theme.my} (အဆင့် ${r.num})`,
        ja: `${sDef.theme.ja}（数秘 ${r.num}）`
      },
      uprightKeywords: {
        en: [r.up.en],
        my: [r.up.my],
        ja: [r.up.ja]
      },
      reversedKeywords: {
        en: [r.rev.en],
        my: [r.rev.my],
        ja: [r.rev.ja]
      },
      uprightMeaning: {
        en: `${r.en}: ${r.up.en}.`,
        my: `${r.my}: ${r.up.my}။`,
        ja: `【${r.ja}】：${r.up.ja}。`
      },
      reversedMeaning: {
        en: `Reversed ${r.en}: ${r.rev.en}.`,
        my: `ပြောင်းပြန် ${r.my}: ${r.rev.my}။`,
        ja: `逆位置【${r.ja}】：${r.rev.ja}。`
      },
      loveMeaning: {
        upright: {
          en: `In love, ${r.en} reflects ${r.up.en.toLowerCase()}.`,
          my: `အချစ်ရေးတွင် ${r.my} သည် ${r.up.my} ကို ဖော်ပြသည်။`,
          ja: `恋愛面において、${r.up.ja}が示されています。`
        },
        reversed: {
          en: `In love, reversed ${r.en} warns of ${r.rev.en.toLowerCase()}.`,
          my: `အချစ်ရေးတွင် ပြောင်းပြန် ${r.my} သည် ${r.rev.my} ကို သတိပေးထားသည်။`,
          ja: `恋愛面において、${r.rev.ja}に配慮が必要です。`
        }
      },
      careerMeaning: {
        upright: {
          en: `In career, ${r.en} brings ${r.up.en.toLowerCase()}.`,
          my: `အလုပ်အကိုင်တွင် ${r.my} သည် ${r.up.my} ကို ယူဆောင်လာပေးသည်။`,
          ja: `仕事面において、${r.up.ja}の好機が訪れています。`
        },
        reversed: {
          en: `In career, beware of ${r.rev.en.toLowerCase()}.`,
          my: `အလုပ်အကိုင်တွင် ${r.rev.my} ကို သတိပြုပါ။`,
          ja: `仕事面において、${r.rev.ja}による課題に留意してください。`
        }
      },
      spiritualMeaning: {
        upright: {
          en: `Spiritually, embrace ${r.up.en.toLowerCase()}.`,
          my: `ဝိညာဉ်ရေးရာတွင် ${r.up.my} ကို လက်ခံကျင့်သုံးပါ။`,
          ja: `魂の領域において、${r.up.ja}の導きに従いましょう。`
        },
        reversed: {
          en: `Spiritually, transform ${r.rev.en.toLowerCase()}.`,
          my: `ဝိညာဉ်ရေးရာတွင် ${r.rev.my} ကို ကုစားပြောင်းလဲပါ။`,
          ja: `内なる${r.rev.ja}を解放しましょう。`
        }
      },
      advice: {
        en: `Focus your will and act from ${r.up.en.toLowerCase()}.`,
        my: `${r.up.my} ကို အခြေခံ၍ သတိရှိစွာ လုပ်ဆောင်ပါ။`,
        ja: `${r.up.ja}の精神を重んじて行動してください。`
      },
      shadowWarning: {
        en: `Do not succumb to ${r.rev.en.toLowerCase()}.`,
        my: `${r.rev.my} ဖြစ်ပေါ်လာနိုင်မှုကို သတိပြုပါ။`,
        ja: `${r.rev.ja}に陥らぬよう注意しましょう。`
      },
      yesNo: r.yesNo,
      symbolism: {
        en: [`Suit of ${sDef.name.en}`, `Element: ${sDef.element}`],
        my: [`${sDef.name.my}`, `ဓာတ်ကြီး: ${sDef.element}`],
        ja: [`${sDef.name.ja}`, `エレメント：${sDef.element}`]
      }
    });
  }
}

const fileContent = `import { TarotCard } from '../types/tarot';

export const TAROT_DECK: TarotCard[] = ${JSON.stringify(allCards, null, 2)};

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
`;

fs.writeFileSync('src/data/tarotDeck.ts', fileContent, 'utf-8');
console.log(`Generated src/data/tarotDeck.ts with ${allCards.length} multi-lingual cards.`);
