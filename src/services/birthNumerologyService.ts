import { LocalizedText } from '../types/tarot';

export interface BirthNumerologyResult {
  birthDate: string;
  personalityCard: {
    number: number;
    name: LocalizedText;
    id: string;
    description: LocalizedText;
  };
  soulCard: {
    number: number;
    name: LocalizedText;
    id: string;
    description: LocalizedText;
  };
  currentYearCard: {
    year: number;
    number: number;
    name: LocalizedText;
    id: string;
    theme: LocalizedText;
  };
  shadowCard: {
    number: number;
    name: LocalizedText;
    id: string;
    shadowLesson: LocalizedText;
  };
  lifePathNumber: number;
}

const MAJOR_ARCANA_NAMES: Record<number, { id: string; name: LocalizedText; desc: LocalizedText; shadow: LocalizedText }> = {
  1: {
    id: 'magician',
    name: { en: 'I The Magician', my: 'I မျက်လှည့်ဆရာ (The Magician)', ja: 'I 魔術師' },
    desc: {
      en: 'Master of Manifestation & Will. You bridge vision into reality through focused creative power.',
      my: 'ဖန်တီးနိုင်စွမ်းနှင့် သန္နိဋ္ဌာန်၏ သခင် — စိတ်ကူးများကို လက်တွေ့ဘဝသို့ အကောင်အထည်ဖော်နိုင်သူ။',
      ja: '具現化と意志の支配者。純粋な意志の力によって、可能性を現実に変容させます。'
    },
    shadow: {
      en: 'Beware of manipulation, trickery, or scattered willpower that fails to ground itself.',
      my: 'လှည့်စားမှု၊ မာယာများ သို့မဟုတ် ဟန်ချက်မညီသော စိတ်ဆန္ဒများကို သတိပြုပါ။',
      ja: '自己過信、操作的な言動、意志の分散に注意してください。'
    }
  },
  2: {
    id: 'high_priestess',
    name: { en: 'II The High Priestess', my: 'II ဗိမာန်တော်ဆရာမ (The High Priestess)', ja: 'II 女教皇' },
    desc: {
      en: 'Guardian of Intuition & Sacred Mysteries. Your power resides in stillness, deep inner knowing, and patience.',
      my: 'အတွင်းစိတ်အာရုံနှင့် လျှို့ဝှက်ဉာဏ်ပညာ၏ စောင့်ရှောက်သူ — ငြိမ်သက်ခြင်းထဲမှ အမှန်တရားကို သိမြင်သူ။',
      ja: '直感と深遠なる叡智の守護者。沈黙と内なる声に従うことで真実を見抜きます。'
    },
    shadow: {
      en: 'Beware of passive withdrawal, secrets that fester, or ignoring your gut feelings.',
      my: 'လူများနှင့် ကင်းကွာလွန်းခြင်း သို့မဟုတ် အတွင်းစိတ်အာရုံကို ဥပေက္ခာပြုခြင်းကို သတိပြုပါ။',
      ja: '秘密主義、感情の抑圧、現実逃避に注意してください。'
    }
  },
  3: {
    id: 'empress',
    name: { en: 'III The Empress', my: 'III ဧကရီမိဖုရား (The Empress)', ja: 'III 女帝' },
    desc: {
      en: 'Embodiment of Abundance, Art & Nurturing. You bring flourishing fertility and beauty to all you touch.',
      my: 'ကြွယ်ဝချမ်းသာမှု၊ အနုပညာနှင့် ရှင်သန်ဖွံ့ဖြိုးမှု၏ ပြယုဂ် — သဘာဝတရား၏ မေတ္တာတော်။',
      ja: '豊穣・美・無条件の慈愛の象徴。触れるものすべてに生命力と美をもたらします。'
    },
    shadow: {
      en: 'Beware of smothering control, creative stagnation, or excessive indulgence.',
      my: 'အလွန်အကျွံ စိုးမိုးလိုစိတ် သို့မဟုတ် ဖန်တီးနိုင်စွမ်း ထိုင်းမှိုင်းမှုကို သတိပြုပါ။',
      ja: '過干渉、創造性の停滞、依存心に注意してください。'
    }
  },
  4: {
    id: 'emperor',
    name: { en: 'IV The Emperor', my: 'IV ဧကရာဇ်ဘုရင် (The Emperor)', ja: 'IV 皇帝' },
    desc: {
      en: 'Architect of Order & Sovereignty. You build lasting structures, govern with wisdom, and establish security.',
      my: 'စည်းစနစ်နှင့် တည်ငြိမ်မှု၏ ဗိသုကာ — ခိုင်မာသော အုတ်မြစ်နှင့် ခေါင်းဆောင်မှုစွမ်းအား။',
      ja: '秩序と統率力の設計者。揺るぎなき基盤を築き、現実世界を力強く統治します。'
    },
    shadow: {
      en: 'Beware of rigidity, tyranny, emotional detachment, or fear of losing control.',
      my: 'ခေါင်းမာလွန်းခြင်း၊ အာဏာရှင်ဆန်ခြင်း သို့မဟုတ် ပြောင်းလွယ်ပြင်လွယ် မရှိခြင်းကို သတိပြုပါ။',
      ja: '頑迷さ、支配欲、感情の欠如に注意してください。'
    }
  },
  5: {
    id: 'hierophant',
    name: { en: 'V The Hierophant', my: 'V သာသနာပိုင်ဆရာတော် (The Hierophant)', ja: 'V 法王' },
    desc: {
      en: 'Spiritual Mentor & Keeper of Tradition. You illuminate sacred principles and guide others to higher truth.',
      my: 'ဝိညာဉ်ရေးရာ လမ်းညွှန်နှင့် ဓမ္မဆရာ — အစဉ်အလာနှင့် မြင့်မြတ်သောအမှန်တရားကို မျှဝေသူ။',
      ja: '聖なる伝統と霊的導師。高次の道徳と真理の灯火を掲げ、人々を導きます。'
    },
    shadow: {
      en: 'Beware of dogmatism, blind conformity, or spiritual hypocrisy.',
      my: 'အယူသီးမှု၊ မျက်စိစုံမှိတ် လိုက်နာမှု သို့မဟုတ် ဟန်ဆောင်မှုများကို သတိပြုပါ။',
      ja: '教条主義、盲従、形骸化した権威に注意してください。'
    }
  },
  6: {
    id: 'lovers',
    name: { en: 'VI The Lovers', my: 'VI ချစ်သူစုံတွဲ (The Lovers)', ja: 'VI 恋人' },
    desc: {
      en: 'Harmony, Sacred Union & Discernment. You navigate life through profound relational bonds and moral choices.',
      my: 'သဟဇာတဖြစ်မှု၊ စိတ်ဝိညာဉ်ချင်း ပေါင်းစည်းမှုနှင့် မှန်ကန်သော ရွေးချယ်မှု။',
      ja: '愛の調和と運命の選択。魂の結合と高次の価値観に基づいた決断を下します。'
    },
    shadow: {
      en: 'Beware of indecision, codependency, or sacrificing authentic values for false peace.',
      my: 'ဆုံးဖြတ်ချက် မပြတ်သားခြင်း သို့မဟုတ် မိမိကိုယ်ကို စွန့်လွှတ်ကာ မှားယွင်းစွာ တွယ်တာခြင်းကို သတိပြုပါ။',
      ja: '優柔不断、共依存、自己の本質を見失った妥協に注意してください。'
    }
  },
  7: {
    id: 'chariot',
    name: { en: 'VII The Chariot', my: 'VII စစ်ရထား (The Chariot)', ja: 'VII 戦車' },
    desc: {
      en: 'Triumphant Will & Focused Momentum. You conquer conflicting forces through unshakable discipline.',
      my: 'အောင်ပွဲခံ သန္နိဋ္ဌာန်နှင့် စိတ်စွမ်းအား — စည်းကမ်းရှိစွာဖြင့် အတားအဆီးအားလုံးကို ကျော်လွှားသူ။',
      ja: '不屈の意志と突破力。相反する感情を統御し、勝利へと突き進みます。'
    },
    shadow: {
      en: 'Beware of aggressive arrogance, burnout, or bulldozing through obstacles without empathy.',
      my: 'မာနထောင်လွှားခြင်း၊ အလျင်စလို ပြုမူခြင်း သို့မဟုတ် အခြားသူများကို နားမလည်ခြင်းကို သတိပြုပါ။',
      ja: '独断専行、強引さ、感情の暴走による燃え尽きに注意してください。'
    }
  },
  8: {
    id: 'strength',
    name: { en: 'VIII Strength', my: 'VIII အတွင်းခွန်အား (Strength)', ja: 'VIII 力' },
    desc: {
      en: 'Gentle Mastery & Moral Courage. You tame wild passions through love, compassion, and inner serenity.',
      my: 'နူးညံ့သော အောင်နိုင်စွမ်းနှင့် စိတ်ဓာတ်ကြံ့ခိုင်မှု — မေတ္တာဖြင့် အရာခပ်သိမ်းကို ထိန်းကျောင်းသူ။',
      ja: '愛と忍耐による真の強さ。力ではなく慈愛と気品によって、内なる野性を昇華させます。'
    },
    shadow: {
      en: 'Beware of self-doubt, suppressing raw emotions until they erupt, or feeling drained.',
      my: 'မိမိကိုယ်ကို သံသယဝင်ခြင်း သို့မဟုတ် စိတ်ခံစားချက်များကို ဖိနှိပ်ထားခြင်းကို သတိပြုပါ။',
      ja: '自己不信、感情の過剰な抑圧、無力感に注意してください。'
    }
  },
  9: {
    id: 'hermit',
    name: { en: 'IX The Hermit', my: 'IX ရသေ့သူတော်စင် (The Hermit)', ja: 'IX 隠者' },
    desc: {
      en: 'The Solitary Beacon of Truth. You seek depth over superficiality and light the path for sincere seekers.',
      my: 'အမှန်တရား၏ မီးရှူးတန်ဆောင် — တစ်ကိုယ်တည်း တရားအားထုတ်လျက် ဉာဏ်အလင်း ရှာဖွေသူ။',
      ja: '真理を探求する孤独な光。深い内省と沈黙を通じて、自他を照らす知恵を獲得します。'
    },
    shadow: {
      en: 'Beware of bitter isolation, cynicism, misanthropy, or fear of re-engaging with the world.',
      my: 'လူအများနှင့် ကင်းကွာလွန်းခြင်း သို့မဟုတ် လောကကြီးအပေါ် အဆိုးမြင်ခြင်းကို သတိပြုပါ။',
      ja: '孤立、世捨て人、批判的な冷笑主義に注意してください。'
    }
  },
  10: {
    id: 'wheel_of_fortune',
    name: { en: 'X Wheel of Fortune', my: 'X ကံကြမ္မာစက်ဝိုင်း (Wheel of Fortune)', ja: 'X 運命の輪' },
    desc: {
      en: 'Avatar of Cosmic Cycles & Serendipity. You adapt masterfully to changing currents and seize destiny.',
      my: 'ကံကြမ္မာအလှည့်အပြောင်းနှင့် စကြဝဠာစက်ဝန်း — အချိန်အခွင့်အခါကို ပိုင်နိုင်စွာ အသုံးချသူ။',
      ja: '宿命の転換と好機の支配者。万物流転の法則を理解し、運命の波に乗ります。'
    },
    shadow: {
      en: 'Beware of fatalism, gambling with life, or feeling helpless in the face of inevitable change.',
      my: 'ကံကိုချည်း ယိုးမယ်ဖွဲ့ခြင်း သို့မဟုတ် အပြောင်းအလဲများကို ကြောက်ရွံ့ခြင်းကို သတိပြုပါ။',
      ja: '運命論への逃避、無責任、変化への過度な恐れに注意してください。'
    }
  },
  11: {
    id: 'justice',
    name: { en: 'XI Justice', my: 'XI တရားမျှတမှု (Justice)', ja: 'XI 正義' },
    desc: {
      en: 'Arbiter of Truth & Karmic Equilibrium. You weigh actions with absolute clarity and uphold integrity.',
      my: 'တရားမျှတမှုနှင့် ကံ၏ ချိန်ခွင်လျှာ — ဖြောင့်မတ်မှန်ကန်စွာဖြင့် အမှန်တရားကို စောင့်ရှောက်သူ။',
      ja: '公正と因果律の執行者。客観的な真実を見つめ、高潔な倫理観を体現します。'
    },
    shadow: {
      en: 'Beware of cold judgmentalism, hypocrisy, perfectionism, or bias masked as objectivity.',
      my: 'အပြစ်ရှာလွန်းခြင်း သို့မဟုတ် မိမိကိုယ်ကို ပြီးပြည့်စုံသည်ဟု ထင်မှတ်ခြင်းကို သတိပြုပါ။',
      ja: '冷酷な断罪、頑なな完璧主義、自己正当化に注意してください。'
    }
  },
  12: {
    id: 'hanged_man',
    name: { en: 'XII The Hanged Man', my: 'XII ဇောက်ထိုးလူ (The Hanged Man)', ja: 'XII 吊るされた男' },
    desc: {
      en: 'Sacred Surrender & Transformed Perspective. You find enlightenment by letting go of ego resistance.',
      my: 'စွန့်လွှတ်အနစ်နာခံခြင်းနှင့် အမြင်သစ်ရရှိခြင်း — အတ္တကို စွန့်လွှတ်၍ ဉာဏ်အလင်း ရယူသူ။',
      ja: '聖なる献身と意識の覚醒。エゴを手放し、視点を逆転させることで悟りに至ります。'
    },
    shadow: {
      en: 'Beware of needless martyrdom, self-pity, feeling suspended in limbo, or stubborn passivity.',
      my: 'အလဟဿ အနစ်နာခံခြင်း သို့မဟုတ် သနားစဖွယ်အဖြစ် ခံယူနေခြင်းကို သတိပြုပါ။',
      ja: '自己犠牲への陶酔、被害者意識、無力な停滞に注意してください。'
    }
  },
  13: {
    id: 'death',
    name: { en: 'XIII Death (Rebirth)', my: 'XIII အသွင်ပြောင်းခြင်း (Death / Rebirth)', ja: 'XIII 死神（再生）' },
    desc: {
      en: 'Alchemist of Radical Metamorphosis. You bravely release the dead past to welcome profound rebirth.',
      my: 'အဟောင်းကို စွန့်၍ အသစ်ပြန်လည် မွေးဖွားခြင်း — ဘဝသံသရာ အသွင်ပြောင်းလဲမှု၏ သခင်။',
      ja: '根源的変容の錬金術師。古い自己を勇敢に脱ぎ捨て、新たな生命へと蘇ります。'
    },
    shadow: {
      en: 'Beware of clinging to decaying situations, paralyzing fear of grief, or resisting closure.',
      my: 'မရှိတော့သောအရာများကို တွယ်ဖက်ထားခြင်း သို့မဟုတ် အသစ်စတင်ရန် ကြောက်ရွံ့ခြင်းကို သတိပြုပါ။',
      ja: '終わったものへの執着、変化への激しい恐怖、未練に注意してください。'
    }
  },
  14: {
    id: 'temperance',
    name: { en: 'XIV Temperance', my: 'XIV အလယ်အလတ်လမ်းစဉ် (Temperance)', ja: 'XIV 節制' },
    desc: {
      en: 'Divine Alchemist & Healer. You blend contrasting elements into sacred harmony and flow effortlessly.',
      my: 'ဓာတ်ပေါင်းစပ်မှုနှင့် ကုစားခြင်း — မျှတသောအလယ်အလတ်လမ်းစဉ်ဖြင့် ဘဝကို ငြိမ်းချမ်းစေသူ။',
      ja: '大いなる調和と錬金術的癒やし。対立するエネルギーを融合し、至高の均衡を保ちます。'
    },
    shadow: {
      en: 'Beware of impatience, excess, compromise that dilutes truth, or energetic volatility.',
      my: 'စိတ်မရှည်ခြင်း၊ အလွန်အကျွံ ပြုမူခြင်း သို့မဟုတ် ဟန်ချက်ပျက်ယွင်းမှုကို သတိပြုပါ။',
      ja: '焦躁、過剰さ、本質を曖昧にする安易な妥協に注意してください。'
    }
  },
  15: {
    id: 'devil',
    name: { en: 'XV The Devil', my: 'XV နှောင်ဖွဲ့မှု (The Devil)', ja: 'XV 悪魔' },
    desc: {
      en: 'Liberator from Material Illusion. You possess immense raw power, charisma, and deep shadow wisdom.',
      my: 'ရုပ်ဝတ္ထုစွဲလမ်းမှုမှ လွတ်မြောက်ခြင်း — စွမ်းအားကြီးမားပြီး လျှို့ဝှက်နက်နဲသော အသိရှိသူ။',
      ja: '物質界の誘惑と影の統合者。強大な情熱とカリスマで、魂の真の自由を問います。'
    },
    shadow: {
      en: 'Beware of addiction, manipulation, obsession with control, or feeling enslaved by fears.',
      my: 'စွဲလမ်းမှုများ၊ အတ္တဆန္ဒ သို့မဟုတ် အကြောက်တရားများ၏ ကျေးကျွန်မဖြစ်စေရန် သတိပြုပါ။',
      ja: '中毒、盲目的な執着、恐怖による自己束縛に注意してください。'
    }
  },
  16: {
    id: 'tower',
    name: { en: 'XVI The Tower', my: 'XVI ရုတ်တရက်နိုးထခြင်း (The Tower)', ja: 'XVI 塔' },
    desc: {
      en: 'Catalyst of Lightning Truth. You shatter obsolete illusions to build upon indestructible truth.',
      my: 'လျှပ်စီးအမှန်တရားဖြင့် နိုးထစေသူ — မခိုင်မာသော အတုအယောင်များကို ဖယ်ရှားရှင်းလင်းသူ။',
      ja: '電光石火の真理の触媒。偽りの土台を打ち砕き、純粋なる真実の上に立ち直ります。'
    },
    shadow: {
      en: 'Beware of destructive anger, crisis addiction, or refusing to rebuild after the fall.',
      my: 'ဒေါသအလျောက် ဖျက်ဆီးခြင်း သို့မဟုတ် ပြန်လည်မထူထောင်နိုင်ဘဲ စိတ်ပျက်ခြင်းကို သတိပြုပါ။',
      ja: '破壊的衝動、カオスへの恐怖、破滅の後の再建放棄に注意してください。'
    }
  },
  17: {
    id: 'star',
    name: { en: 'XVII The Star', my: 'XVII ကြယ်တာရာ (The Star)', ja: 'XVII 星' },
    desc: {
      en: 'Beacon of Cosmic Hope & Inspiration. You pour unconditional light and healing into the world.',
      my: 'မျှော်လင့်ချက်နှင့် စိတ်ကူးဉာဏ်၏ ကြယ်တာရာ — ကမ္ဘာလောကသို့ အလင်းနှင့် ကုစားမှု ဖြန်းပက်သူ။',
      ja: '希望と霊感の星灯り。暗夜を越えた魂に、無条件の癒やしと未来のヴィジョンを注ぎます。'
    },
    shadow: {
      en: 'Beware of ungrounded optimism, loss of faith in darkness, or despair when dreams take time.',
      my: 'လက်တွေ့မဆန်သော မျှော်လင့်ချက် သို့မဟုတ် အခက်အခဲကြုံချိန်တွင် ယုံကြည်မှု ပျောက်ဆုံးခြင်းကို သတိပြုပါ။',
      ja: '非現実的な空想、絶望への急落、失望による不信に注意してください。'
    }
  },
  18: {
    id: 'moon',
    name: { en: 'XVIII The Moon', my: 'XVIII လမင်း (The Moon)', ja: 'XVIII 月' },
    desc: {
      en: 'Voyager of Dreams & the Subconscious. You navigate uncanny depths and channel profound artistry.',
      my: 'မသိစိတ်နှင့် အိပ်မက်နယ်ပယ်၏ ခရီးသည် — နက်ရှိုင်းသော စိတ်အာရုံနှင့် အနုပညာစွမ်းပကား။',
      ja: '深層無意識と夢幻の旅人。言葉にできない深淵の感情を汲み取り、芸術へと昇華させます。'
    },
    shadow: {
      en: 'Beware of paranoia, illusions, emotional fog, or confusing anxiety with authentic intuition.',
      my: 'စိတ်ထင်ယောင်ထင်မှားဖြစ်ခြင်း၊ စိုးရိမ်သောကလွန်ကဲခြင်း သို့မဟုတ် လမ်းပျောက်ခြင်းကို သတိပြုပါ။',
      ja: '被害妄想、幻影への迷い込み、不安と直感の混同に注意してください。'
    }
  },
  19: {
    id: 'sun',
    name: { en: 'XIX The Sun', my: 'XIX နေမင်း (The Sun)', ja: 'XIX 太陽' },
    desc: {
      en: 'Radiant Source of Vitality & Joy. You radiate warmth, clarity, innocence, and celebrate life wholeheartedly.',
      my: 'ရွှင်လန်းတောက်ပသော အသက်စွမ်းအင် — ပျော်ရွှင်မှု၊ ရှင်းလင်းပြတ်သားမှုနှင့် ဘဝအောင်မြင်မှု။',
      ja: '無垢なる生命力と光明。眩いばかりの陽光で周囲を照らし、祝福と成功を分かち合います。'
    },
    shadow: {
      en: 'Beware of childish burnout, superficiality, self-centeredness, or forced toxic positivity.',
      my: 'အပေါ်ယံဆန်ခြင်း၊ အတ္တကြီးခြင်း သို့မဟုတ် အမှန်တကယ် မပျော်ရွှင်ဘဲ ဟန်ဆောင်နေခြင်းကို သတိပြုပါ။',
      ja: '自己顕示欲、浅薄さ、過度の能天気さ、燃え尽きに注意してください。'
    }
  },
  20: {
    id: 'judgement',
    name: { en: 'XX Judgement', my: 'XX ဘဝနိုးထမှု (Judgement)', ja: 'XX 審判' },
    desc: {
      en: 'The Awakener of Higher Calling. You forgive the past, answer your soul\'s true calling, and rebirth.',
      my: 'မြင့်မြတ်သော ဘဝခေါ်သံသစ် — အတိတ်ကို ခွင့်လွှတ်၍ အသိဉာဏ်သစ်ဖြင့် နိုးထလာသူ။',
      ja: '魂の覚醒と新生のラッパ。過去のカルマを清算し、高次の天命へと立ち上がります。'
    },
    shadow: {
      en: 'Beware of harsh self-recrimination, refusal to let go of old guilt, or ignoring your calling.',
      my: 'မိမိကိုယ်ကို အပြစ်တင်လွန်းခြင်း သို့မဟုတ် အတိတ်က နာကျင်မှုများတွင် ပိတ်မိနေခြင်းကို သတိပြုပါ။',
      ja: '過去の罪悪感への固執、自己断罪、天命への抵抗に注意してください。'
    }
  },
  21: {
    id: 'world',
    name: { en: 'XXI The World', my: 'XXI ကမ္ဘာလောက (The World)', ja: 'XXI 世界' },
    desc: {
      en: 'Master of Cosmic Wholeness & Completion. You integrate all dimensions of being into triumphant liberation.',
      my: 'ပြီးပြည့်စုံခြင်းနှင့် အောင်မြင်စွာ ပြီးမြောက်ခြင်း — စကြဝဠာနှင့် တစ်သားတည်း လွတ်မြောက်မှု။',
      ja: '宇宙的統合と完全なる成就。あらゆる二元性を超克し、大団円の歓喜を踊り明かします。'
    },
    shadow: {
      en: 'Beware of fear of final culmination, feeling stagnant at the finish line, or isolation.',
      my: 'ပြီးဆုံးရန် ကြောက်ရွံ့ခြင်း သို့မဟုတ် အောင်မြင်ခါနီးတွင် လက်လျှော့လိုစိတ်ကို သတိပြုပါ။',
      ja: '完結への恐れ、目前での足踏み、閉塞感に注意してください。'
    }
  },
  22: {
    id: 'fool',
    name: { en: '0 The Fool', my: '0 လူမိုက် (The Fool)', ja: '0 愚者' },
    desc: {
      en: 'Pure Spirit on the Edge of Eternity. You walk with boundless faith, childlike wonder, and fearless adventure.',
      my: 'အဆုံးမဲ့ယုံကြည်မှုဖြင့် စွန့်စားသူ — ကလေးငယ်ကဲ့သို့ ဖြူစင်စွာဖြင့် ခရီးသစ် စတင်သူ။',
      ja: '永遠の旅路を歩む純粋な魂。恐れを知らぬ無垢な心で、未知の可能性へ飛び込みます。'
    },
    shadow: {
      en: 'Beware of recklessness, naive gullibility, or evading necessary real-world responsibilities.',
      my: 'မဆင်မခြင် စွန့်စားခြင်း သို့မဟုတ် တာဝန်များကို ရှောင်လွှဲလိုစိတ်ကို သတိပြုပါ။',
      ja: '無謀さ、軽率な行動、現実逃避、責任放棄に注意してください。'
    }
  }
};

export class BirthNumerologyService {
  /**
   * Computes the Full Numerological Blueprint from Date of Birth string (YYYY-MM-DD)
   */
  public static calculateBlueprint(dobString: string, targetYear = new Date().getFullYear()): BirthNumerologyResult | null {
    if (!dobString) return null;
    const parts = dobString.split('-');
    if (parts.length < 3) return null;

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);

    if (isNaN(year) || isNaN(month) || isNaN(day)) return null;

    // 1. Life Path Number (Sum of all digits reduced to 1-9 or master numbers)
    const allDigits = `${year}${month < 10 ? '0' + month : month}${day < 10 ? '0' + day : day}`
      .split('')
      .map(Number);
    let lpSum = allDigits.reduce((a, b) => a + b, 0);
    while (lpSum > 9 && lpSum !== 11 && lpSum !== 22 && lpSum !== 33) {
      lpSum = String(lpSum).split('').map(Number).reduce((a, b) => a + b, 0);
    }

    // 2. Personality Arcana (Month + Day + Year reduced to 1-22)
    let pSum = month + day + year;
    while (pSum > 22) {
      pSum = String(pSum).split('').map(Number).reduce((a, b) => a + b, 0);
    }
    const personalityNum = pSum === 0 ? 22 : pSum;

    // 3. Soul Arcana (Personality Number reduced to 1-9)
    let sSum = personalityNum;
    if (sSum === 22) sSum = 4; // 2+2
    while (sSum > 9) {
      sSum = String(sSum).split('').map(Number).reduce((a, b) => a + b, 0);
    }
    const soulNum = sSum === 0 ? 9 : sSum;

    // 4. Current Year Growth Arcana (Month + Day + targetYear reduced to 1-22)
    let ySum = month + day + targetYear;
    while (ySum > 22) {
      ySum = String(ySum).split('').map(Number).reduce((a, b) => a + b, 0);
    }
    const yearNum = ySum === 0 ? 22 : ySum;

    // 5. Shadow Arcana Complement ((22 - PersonalityNum) % 22 || 9)
    const shadowNum = (22 - personalityNum) % 22 || 9;

    const pTarget = MAJOR_ARCANA_NAMES[personalityNum] || MAJOR_ARCANA_NAMES[1];
    const sTarget = MAJOR_ARCANA_NAMES[soulNum] || MAJOR_ARCANA_NAMES[1];
    const yTarget = MAJOR_ARCANA_NAMES[yearNum] || MAJOR_ARCANA_NAMES[1];
    const shTarget = MAJOR_ARCANA_NAMES[shadowNum] || MAJOR_ARCANA_NAMES[9];

    return {
      birthDate: dobString,
      lifePathNumber: lpSum,
      personalityCard: {
        number: personalityNum,
        name: pTarget.name,
        id: pTarget.id,
        description: pTarget.desc
      },
      soulCard: {
        number: soulNum,
        name: sTarget.name,
        id: sTarget.id,
        description: sTarget.desc
      },
      currentYearCard: {
        year: targetYear,
        number: yearNum,
        name: yTarget.name,
        id: yTarget.id,
        theme: yTarget.desc
      },
      shadowCard: {
        number: shadowNum,
        name: shTarget.name,
        id: shTarget.id,
        shadowLesson: shTarget.shadow
      }
    };
  }
}
