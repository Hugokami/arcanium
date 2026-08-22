import { LocalizedText, TarotCard } from '../types/tarot';

export interface CourtCardPersona {
  roleTitle: LocalizedText;
  personaArchetype: LocalizedText;
  elementalTitle: LocalizedText;
  mbtiResonance: string;
  behavioralSignals: LocalizedText;
  relationshipAdvice: LocalizedText;
  shadowPitfall: LocalizedText;
}

export class CourtPersonaService {
  private static PERSONAS: Record<string, CourtCardPersona> = {
    // ================= WANDS (FIRE) =================
    king_of_wands: {
      roleTitle: { en: 'The Charismatic Visionary & Leader', my: 'ဆွဲဆောင်မှုရှိသော အမြော်အမြင်ကြီး ခေါင်းဆောင်', ja: 'カリスマ的先見者・指導者' },
      personaArchetype: { en: 'An inspiring entrepreneur, bold director, or fiery champion who leads by dynamic example.', my: 'ရဲရင့်သော စွန့်ဦးတီထွင်သူ သို့မဟုတ် စိတ်ဓာတ်ခွန်အား လှုံ့ဆော်ပေးနိုင်သော ခေါင်းဆောင်။', ja: '情熱的な起業家、果敢なリーダー、自ら率先して道を切り拓く開拓者。' },
      elementalTitle: { en: 'Fire of Fire', my: 'မီးအထပ်ထပ် စွမ်းအင်', ja: '火の中の火' },
      mbtiResonance: 'ENTJ / ENFP',
      behavioralSignals: { en: 'Direct eye contact, high energy, big gestures, impatient with stagnation, champions bold plans.', my: 'တိုက်ရိုက်မျက်လုံးချင်းဆုံကြည့်ခြင်း၊ အရှိန်အဟုန်ပြင်းခြင်း၊ စိတ်မရှည်တတ်ခြင်း။', ja: '力強い眼差し、素早い決断、停滞を嫌い壮大な計画を好む。' },
      relationshipAdvice: { en: 'Give them space to lead, match their passion, and celebrate their victories without competing.', my: 'သူတို့၏ ဦးဆောင်မှုကို နေရာပေးပါ၊ စိတ်အားထက်သန်စွာ ပူးပေါင်းဆောင်ရွက်ပါ။', ja: '彼らの主導権を尊重し、情熱の火を共に燃え上がらせてください。' },
      shadowPitfall: { en: 'Can become domineering, egotistical, temperamental, or lose interest once initial novelty fades.', my: 'အတ္တကြီးခြင်း၊ ဒေါသထွက်လွယ်ခြင်း သို့မဟုတ် အာဏာပြလိုခြင်း။', ja: '独裁的な態度、自己中心的、熱しやすく冷めやすい傾向。' }
    },
    queen_of_wands: {
      roleTitle: { en: 'The Radiant Magnetic Catalyst', my: 'တောက်ပဆွဲဆောင်မှုရှိသော လှုံ့ဆော်သူ', ja: '磁力的な魅力を持つ発火点' },
      personaArchetype: { en: 'A fiercely independent, warm, and courageous personality who lights up any room they enter.', my: 'လွတ်လပ်ပြီး ရဲရင့်သော၊ နွေးထွေးပြီး အားလုံးကို ဆွဲဆောင်နိုင်သော လူပုဂ္ဂိုလ်။', ja: '自立心旺盛で温かく、場を一瞬で明るくする華やかな存在。' },
      elementalTitle: { en: 'Water of Fire', my: 'မီးဓာတ်ထဲမှ ရေစွမ်းအင်', ja: '火の中の水' },
      mbtiResonance: 'ENFJ / ESFP',
      behavioralSignals: { en: 'Infectious laughter, natural confidence, creative flair, protective of friends, highly active.', my: 'ရယ်သံလွင်လွင်၊ ကိုယ့်ကိုယ်ကိုယ် ယုံကြည်မှုအပြည့်နှင့် သူငယ်ချင်းများကို ကာကွယ်တတ်ခြင်း။', ja: '屈託のない笑顔、強い自信、クリエイティブな表現力。' },
      relationshipAdvice: { en: 'Acknowledge their brilliance, invite them into creative endeavors, and respect their autonomy.', my: 'သူတို့၏ အရည်အချင်းကို အသိအမှတ်ပြုပါ၊ လွတ်လပ်မှုကို လေးစားပါ။', ja: '才能を賞賛し、束縛せず自立した関係を築いてください。' },
      shadowPitfall: { en: 'Can be dramatic, jealous, demands perpetual center stage, or quick to take perceived slights personally.', my: 'စိတ်ခံစားချက် ပြင်းထန်လွန်းခြင်း သို့မဟုတ် မနာလိုဖြစ်လွယ်ခြင်း။', ja: '自己顕示欲の暴走、嫉妬深さ、感情の起伏の激しさ。' }
    },
    knight_of_wands: {
      roleTitle: { en: 'The Daring Adventurer & Disruptor', my: 'ရဲဝံ့သော စွန့်စားသူနှင့် အပြောင်းအလဲဖန်တီးသူ', ja: '大胆不敵な冒険家・変革者' },
      personaArchetype: { en: 'An impetuous mover, fearless traveler, or revolutionary who dives into action before overthinking.', my: 'မဆိုင်းမတွ ရှေ့သို့တိုးသော စွန့်စားသူ သို့မဟုတ် တော်လှန်ပြောင်းလဲလိုသူ။', ja: '考える前に行動する情熱的なチャレンジャー、冒険心溢れる旅人。' },
      elementalTitle: { en: 'Air of Fire', my: 'မီးဓာတ်ထဲမှ လေစွမ်းအင်', ja: '火の中の風' },
      mbtiResonance: 'ESTP / ENTP',
      behavioralSignals: { en: 'Restless posture, talks fast about new adventures, easily bored by routine, craves novelty.', my: 'ငြိမ်ငြိမ်မနေနိုင်ခြင်း၊ စွန့်စားမှုအသစ်များကို အမြဲရှာဖွေနေခြင်း။', ja: '落ち着きのない熱意、新しいことへの渇望、ルーティンへの退屈。' },
      relationshipAdvice: { en: 'Enjoy the exhilarating ride, but avoid relying on them for long-term rigid consistency.', my: 'သူတို့၏ စိတ်လှုပ်ရှားဖွယ် ခရီးတွင် အတူလိုက်ပါပါ၊ သို့သော် အလွန်အမင်း မချုပ်ချယ်ပါနှင့်။', ja: '刺激的な展開を共に楽しむ一方、長期的な安定を性急に求めすぎないこと。' },
      shadowPitfall: { en: 'Prone to recklessness, hot-headed conflicts, ghosting when things get mundane, or burnout.', my: 'မဆင်မခြင် ပြုမူခြင်း၊ ဒေါသပေါက်ကွဲခြင်း သို့မဟုတ် စိတ်မရှည်ဘဲ ထွက်ခွာသွားခြင်း။', ja: '無謀な衝動、口論の引き金、飽きっぽさによる突然の離脱。' }
    },
    page_of_wands: {
      roleTitle: { en: 'The Enthusiastic Creative Messenger', my: 'တက်ကြွသော စိတ်ကူးသစ် သံတမန်', ja: '情熱的なひらめきの使者' },
      personaArchetype: { en: 'A curious student, young innovator, or spontaneous friend bringing exciting news and sparks.', my: 'စိတ်ကူးစိတ်သန်း ကောင်းသော လူငယ် သို့မဟုတ် သတင်းကောင်း ယူဆောင်လာသူ။', ja: '好奇心旺盛な学び手、斬新なアイデアを運ぶ若きインスピレーション。' },
      elementalTitle: { en: 'Earth of Fire', my: 'မီးဓာတ်ထဲမှ မြေစွမ်းအင်', ja: '火の中の地' },
      mbtiResonance: 'INFP / ENFP',
      behavioralSignals: { en: 'Wide-eyed excitement, asks endless questions, starts multiple creative projects with passion.', my: 'မျက်လုံးတောက်ပစွာ မေးခွန်းများမေးခြင်း၊ ပရောဂျက်အသစ်များ အားတက်သရော စတင်ခြင်း။', ja: '輝く瞳、尽きない好奇心、新しいプロジェクトへの無邪気な挑戦。' },
      relationshipAdvice: { en: 'Encourage their sparks, offer gentle grounding, and celebrate their fresh ideas.', my: 'သူတို့၏ စိတ်ကူးများကို အားပေးပါ၊ ဖြည်းဖြည်းချင်း အကောင်အထည်ဖော်ရန် ကူညီပါ။', ja: 'アイデアを温かく応援し、形にするための助言を与えてください。' },
      shadowPitfall: { en: 'Easily distracted, lacks follow-through, childish tantrums, or gossips hastily.', my: 'အာရုံစူးစိုက်မှု မရှိခြင်း၊ စတင်ပြီး အဆုံးမသတ်နိုင်ခြင်း။', ja: '持続力の欠如、散漫、軽はずみな言動。' }
    },

    // ================= CUPS (WATER) =================
    king_of_cups: {
      roleTitle: { en: 'The Compassionate Mentor & Healer', my: 'ကရုဏာရှင် အကြံပေးနှင့် ကုစားသူ', ja: '慈愛に満ちた導師・調停者' },
      personaArchetype: { en: 'An emotionally mature counselor, empathetic elder, or artist who masters deep feelings calmly.', my: 'စိတ်ခံစားချက် ရင့်ကျက်သော အကြံပေး သို့မဟုတ် ငြိမ်းချမ်းသော အနုပညာရှင်။', ja: '感情の波を完全に統御した賢者、深い受容力を持つカウンセラー。' },
      elementalTitle: { en: 'Fire of Water', my: 'ရေဓာတ်ထဲမှ မီးစွမ်းအင်', ja: '水の中の火' },
      mbtiResonance: 'INFJ / ENFJ',
      behavioralSignals: { en: 'Soft and reassuring voice, listens deeply without interrupting, calm presence in crises.', my: 'နူးညံ့ငြိမ်းချမ်းသော စကားသံ၊ အခြားသူများကို အာရုံစိုက် နားထောင်ပေးတတ်ခြင်း။', ja: '穏やかな語り口、深い傾聴力、困難な状況でも乱れない安心感。' },
      relationshipAdvice: { en: 'Be honest and emotionally open; they cherish soul-level authenticity and mutual care.', my: 'ပွင့်လင်းရိုးသားစွာ ဆက်ဆံပါ၊ သူတို့သည် စိတ်ရင်းမှန်မှုကို အထူးတန်ဖိုးထားသည်။', ja: '心を開いて真実を伝えてください。魂の深いつながりを何より好みます。' },
      shadowPitfall: { en: 'Emotional manipulation, passive-aggressive brooding, or suppressing feelings until bitterness forms.', my: 'အတွင်းစိတ် ခံစားချက်ကို ဖုံးကွယ်ထားခြင်း သို့မဟုတ် မသိမသာ ခြယ်လှယ်ခြင်း။', ja: '受動的攻撃、感情の抑圧による冷淡さ、心理的誘導。' }
    },
    queen_of_cups: {
      roleTitle: { en: 'The Intuitive Empath & Mystical Confidante', my: 'အတွင်းစိတ်အာရုံ ထက်မြက်သော မေတ္တာရှင်', ja: '直感的な共感者・神秘の相談相手' },
      personaArchetype: { en: 'A profoundly intuitive psychic, poetic soul, or spiritual guide who reads unexpressed feelings.', my: 'နက်ရှိုင်းသော စိတ်အာရုံရှိသူ သို့မဟုတ် စကားမပြောဘဲ သူတစ်ပါးစိတ်ကို သိမြင်သူ။', ja: '言葉にせずとも心を見抜く共感能力者、詩的で神秘的な魂。' },
      elementalTitle: { en: 'Water of Water', my: 'ရေအထပ်ထပ် စွမ်းအင်', ja: '水の中の水' },
      mbtiResonance: 'INFP / ISFP',
      behavioralSignals: { en: 'Dreamy eyes, observant, sensitive to room energy, deeply moved by music, nature, and art.', my: 'အကဲခတ်ကောင်းခြင်း၊ စွမ်းအင်စီးဆင်းမှုကို အလွယ်တကူ ခံစားသိရှိနိုင်ခြင်း။', ja: '夢見るような眼差し、場の波動への繊細な感性、芸術への深い共鳴。' },
      relationshipAdvice: { en: 'Protect their sensitive boundaries, validate their feelings, and avoid harsh abrasive criticism.', my: 'သူတို့၏ နူးညံ့သော စိတ်ကို နားလည်ပါ၊ ကြမ်းတမ်းသော စကားများကို ရှောင်ကြဉ်ပါ။', ja: '繊細な心を尊重し、傷つけないよう優しく誠実に対話してください。' },
      shadowPitfall: { en: 'Overwhelmed by others\' emotions, martyr complex, living in fantasy, or hypersensitivity.', my: 'အခြားသူများ၏ ပြဿနာကို မိမိကိုယ်တိုင် ခံစားလွန်းခြင်း သို့မဟုတ် စိတ်ထိခိုက်လွယ်ခြင်း။', ja: '過度の感情移入による衰弱、被害妄想、現実逃避の幻想。' }
    },
    knight_of_cups: {
      roleTitle: { en: 'The Romantic Dreamer & Chivalrous Seeker', my: 'ရိုမန်းတစ် စိတ်ကူးယဉ်သူနှင့် သစ္စာရှိ ချစ်သူ', ja: 'ロマンチックな夢想家・理想の求道者' },
      personaArchetype: { en: 'A charming suitor, poetic idealist, or passionate peacemaker offering loving gestures.', my: 'ချစ်စဖွယ် အပြောအဆိုရှိပြီး စိတ်ကူးယဉ်ဆန်သော မေတ္တာရှင်။', ja: '愛の使者、騎士道精神を持つ理想主義者、心を揺さぶるロマンティスト。' },
      elementalTitle: { en: 'Air of Water', my: 'ရေဓာတ်ထဲမှ လေစွမ်းအင်', ja: '水の中の風' },
      mbtiResonance: 'INFP / ENFP',
      behavioralSignals: { en: 'Charming compliments, grand romantic gestures, writes heartfelt messages, wears heart on sleeve.', my: 'ချိုသာသော စကားများ၊ နှလုံးသားခံစားချက်ကို ပွင့်လင်းစွာ ဖော်ပြတတ်ခြင်း။', ja: 'ロマンチックな提案、洗練されたマナー、心温まるメッセージ。' },
      relationshipAdvice: { en: 'Appreciate their romantic vision, but gently help ground practical day-to-day commitments.', my: 'သူတို့၏ မေတ္တာစိတ်ကို တန်ဖိုးထားပါ၊ လက်တွေ့ကျသော အခြေအနေများနှင့် ချိန်ညှိပေးပါ။', ja: 'その美しい理想を受け止めつつ、現実的な歩調を合わせるよう促してください。' },
      shadowPitfall: { en: 'Fickle affections, infatuation with the idea of love rather than the reality, escapism.', my: 'စိတ်ကူးယဉ်လွန်းခြင်း သို့မဟုတ် လက်တွေ့ဘဝကို ရင်မဆိုင်လိုခြင်း။', ja: '移り気、恋に恋する未熟さ、困難に直面した時の幻滅と逃走。' }
    },
    page_of_cups: {
      roleTitle: { en: 'The Sweet Creative Soul & Messenger of Affection', my: 'ချစ်စဖွယ် ဖန်တီးရှင်နှင့် မေတ္တာသံတမန်', ja: '純真な愛とひらめきのメッセンジャー' },
      personaArchetype: { en: 'An innocent, artistic spirit or child-like soul delivering messages of reconciliation, love, or synchronicities.', my: 'ဖြူစင်သော အနုပညာရှင် သို့မဟုတ် မေတ္တာသတင်းကောင်း ယူဆောင်လာသူ။', ja: '無邪気で純粋な魂、愛や和解のメッセージを運ぶ愛すべき存在。' },
      elementalTitle: { en: 'Earth of Water', my: 'ရေဓာတ်ထဲမှ မြေစွမ်းအင်', ja: '水の中の地' },
      mbtiResonance: 'ISFP / INFP',
      behavioralSignals: { en: 'Gentle, shy smile, creative doodles, unexpected synchronicities, opens up when feeling safe.', my: 'ရှက်ပြုံးလေးများ၊ ဖန်တီးမှုအနုပညာ လုပ်ဆောင်တတ်ခြင်း။', ja: 'はにかむような笑顔、豊かな想像力、安全な環境で花開く感性。' },
      relationshipAdvice: { en: 'Treat them with gentle kindness; nurture their creativity and do not rush their openness.', my: 'ကြင်နာစွာ ဆက်ဆံပါ၊ သူတို့၏ ဖန်တီးနိုင်စွမ်းကို မြေတောင်မြှောက်ပေးပါ။', ja: '優しく接し、その純粋な感性を決して否定しないでください。' },
      shadowPitfall: { en: 'Emotional immaturity, sulking, easily seduced by flattery, or over-identifying with wounds.', my: 'စိတ်မရင့်ကျက်ခြင်း၊ စိတ်ကောက်လွယ်ခြင်း သို့မဟုတ် မြှောက်ပင့်စကားကို ယုံလွယ်ခြင်း။', ja: '感情的な未熟さ、拗ね、お世辞に騙されやすい脆さ。' }
    },

    // ================= SWORDS (AIR) =================
    king_of_swords: {
      roleTitle: { en: 'The Objective Strategist & Master Arbiter', my: 'ဓမ္မဓိဋ္ဌာန်ကျသော မဟာဗျူဟာပညာရှင်', ja: '明晰なる戦略家・至高の裁判官' },
      personaArchetype: { en: 'A brilliant jurist, analyst, physician, or strategist who cuts through emotion to reveal absolute truth.', my: 'ထက်မြက်သော ဥပဒေပညာရှင်၊ သုတေသီ သို့မဟုတ် စိတ်ခံစားမှုမပါဘဲ အမှန်တရားကို ဖော်ထုတ်သူ။', ja: '鋭利な頭脳を持つ知性派、感情を排して真理を追求する戦略のマスター。' },
      elementalTitle: { en: 'Fire of Air', my: 'လေဓာတ်ထဲမှ မီးစွမ်းအင်', ja: '風の中の火' },
      mbtiResonance: 'INTJ / ENTJ',
      behavioralSignals: { en: 'Precise articulate speech, relies strictly on evidence, values logic and truth above all else.', my: 'တိကျပြတ်သားသော စကား၊ အထောက်အထားကိုသာ အဓိကထားခြင်း။', ja: '論理的で無駄のない言葉遣い、事実に基づいた冷静な判断。' },
      relationshipAdvice: { en: 'Communicate with direct clarity and respect their intellect; do not expect emotional melodrama.', my: 'ရှင်းလင်းပြတ်သားစွာ ပြောဆိုပါ၊ သူတို့၏ ဉာဏ်ပညာကို လေးစားပါ။', ja: '筋道を立てて明瞭に話してください。感情的な訴えよりも論理的な合意を好みます。' },
      shadowPitfall: { en: 'Cold detachment, cynical arrogance, hyper-critical verbal blades, or ruthless severity.', my: 'အေးစက်လွန်းခြင်း၊ ဝေဖန်ပြစ်တင်လွန်းခြင်း သို့မဟုတ် ရက်စက်သော စကားလုံးများ သုံးစွဲခြင်း။', ja: '冷酷、辛辣な言葉による攻撃、共感の完全な欠如。' }
    },
    queen_of_swords: {
      roleTitle: { en: 'The Perceptive Truth-Teller & Independent Sovereign', my: 'အမှန်တရားကို ပွင့်လင်းစွာ ပြောဆိုသူ မာနရှင်', ja: '真実を見抜く孤高の賢女' },
      personaArchetype: { en: 'A fiercely intelligent, witty, and resilient woman who has weathered storms and tolerates zero BS.', my: 'ဉာဏ်ရည်မြင့်မားပြီး အမှားကို လက်မခံသော၊ အခက်အခဲများကို ကျော်ဖြတ်ထားသူ။', ja: '酸いも甘いも噛み分けた知的な女性、一切の虚飾を見抜く独立独歩の存在。' },
      elementalTitle: { en: 'Water of Air', my: 'လေဓာတ်ထဲမှ ရေစွမ်းအင်', ja: '風の中の水' },
      mbtiResonance: 'INTJ / ISTJ',
      behavioralSignals: { en: 'Sharp wit, candid honesty, impeccable boundaries, piercing gaze, values truth above flattery.', my: 'ထက်မြက်သော ဉာဏ်၊ ရိုးသားပြတ်သားမှုနှင့် ခိုင်မာသော စည်းဘောင်များ ရှိခြင်း။', ja: '鋭いユーモア、嘘を許さない誠実さ、明確な境界線。' },
      relationshipAdvice: { en: 'Always speak the unvarnished truth; earn their trust through consistency and respect their boundaries.', my: 'အမှန်အတိုင်း ရိုးသားစွာ ပြောဆိုပါ၊ သူတို့၏ စည်းဘောင်များကို မကျော်လွန်ပါနှင့်။', ja: '絶対に嘘をつかず誠実であってください。一度信頼を勝ち得れば最も頼もしい味方となります。' },
      shadowPitfall: { en: 'Bitterness from past scars, overly guarded fortress around heart, sharp cruelty.', my: 'အတိတ်ဒဏ်ရာကြောင့် စိတ်ခက်ထန်နေခြင်း သို့မဟုတ် စိတ်တံခါးကို လုံးဝပိတ်ထားခြင်း။', ja: '過去の傷による冷笑、心を閉ざした要塞化、過度な猜疑心。' }
    },
    knight_of_swords: {
      roleTitle: { en: 'The Fierce Debater & Swift Champion', my: 'ထက်မြက်သော စကားစစ်ထိုးသူနှင့် အလျင်စလိုသူ', ja: '電光石火の論客・突撃の騎士' },
      personaArchetype: { en: 'A fast-talking advocate, aggressive problem solver, or intellectual warrior charging into intellectual battle.', my: 'စကားစစ်ထိုးရာတွင် အလွန်ထက်မြက်သူ သို့မဟုတ် ပြဿနာများကို ချက်ချင်းဖြေရှင်းလိုသူ။', ja: '圧倒的なスピードで議論に切り込む知の戦士、恐れを知らぬ改革者。' },
      elementalTitle: { en: 'Air of Air', my: 'လေအထပ်ထပ် စွမ်းအင်', ja: '風の中の風' },
      mbtiResonance: 'ENTP / ESTP',
      behavioralSignals: { en: 'Rapid argumentation, impatient with slowness, hyper-focused on goals, loves a good intellectual duel.', my: 'အငြင်းအခုံပြုလုပ်ရသည်ကို နှစ်သက်ခြင်း၊ နှေးကွေးသောအရာများကို သည်းမခံနိုင်ခြင်း။', ja: '矢継ぎ早の意見表明、スピード重視、知的な議論への異常な熱中。' },
      relationshipAdvice: { en: 'Hold your ground with facts, don\'t take their bluntness personally, and help them slow down.', my: 'အချက်အလက်ဖြင့် ရင်ဆိုင်ပါ၊ သူတို့၏ စကားကြမ်းတမ်းမှုကို စိတ်ထဲမထားပါနှင့်။', ja: '事実に基づいて対峙し、言葉の鋭さに感情的にならず冷静を受け止めてください。' },
      shadowPitfall: { en: 'Tactless cruelty, bulldozing others\' feelings, ideological fanaticism, or reckless haste.', my: 'သူတစ်ပါးခံစားချက်ကို နင်းခြေခြင်း သို့မဟုတ် အလျင်စလို ဆုံးဖြတ်ခြင်း။', ja: '無神経な暴言、他者の感情の軽視、独善的な狂信。' }
    },
    page_of_swords: {
      roleTitle: { en: 'The Inquisitive Scout & Sharp Observer', my: 'စူးစမ်းလေ့လာတတ်သော ကင်းထောက်နှင့် အကဲခတ်ရှင်', ja: '鋭敏な観察者・探求の偵察兵' },
      personaArchetype: { en: 'A vigilant learner, tech-savvy researcher, or watchful scout who catches details others miss.', my: 'အသေးစိတ်ကို သတိပြုမိသော သုတေသီ သို့မဟုတ် စူးစမ်းရှာဖွေလိုစိတ် ပြင်းထန်သူ။', ja: '細部を見逃さない鋭い観察眼を持つ探偵、知的好奇心の塊。' },
      elementalTitle: { en: 'Earth of Air', my: 'လေဓာတ်ထဲမှ မြေစွမ်းအင်', ja: '風の中の地' },
      mbtiResonance: 'INTP / ENTP',
      behavioralSignals: { en: 'Always researching on their phone, observant eyes, asks penetrating questions, loves uncovering facts.', my: 'အမြဲတမ်း စူးစမ်းရှာဖွေနေခြင်း၊ ထိုးထွင်းသိမြင်သော မေးခွန်းများ မေးခြင်း။', ja: '常に情報を探る視線、本質を突く質問、データ収集への熱狂。' },
      relationshipAdvice: { en: 'Engage them with mental puzzles and interesting debates; provide honest transparency.', my: 'စိတ်ဝင်စားဖွယ် ဆွေးနွေးမှုများ ပြုလုပ်ပါ၊ ပွင့်လင်းမြင်သာမှု ရှိပါစေ။', ja: '知的な話題で対話を深め、隠し事をせず透明性を保ってください。' },
      shadowPitfall: { en: 'Snooping, gossiping, paranoia, defensive over-intellectualization of emotional issues.', my: 'သူတစ်ပါးကိစ္စ စပ်စုခြင်း သို့မဟုတ် မဟုတ်မမှန် သတင်းဖြန့်ခြင်း။', ja: '覗き見、陰口、過度の警戒心、感情の理屈づけによる逃避。' }
    },

    // ================= PENTACLES (EARTH) =================
    king_of_pentacles: {
      roleTitle: { en: 'The Master Provider & Tycoon', my: 'ချမ်းသာကြွယ်ဝသော ဖန်တီးရှင်နှင့် ပံ့ပိုးသူ', ja: '豊かさを築く実業家・泰然自若たる守護者' },
      personaArchetype: { en: 'A grounded business magnate, generous provider, or seasoned investor who turns dirt into gold.', my: 'အောင်မြင်သော စီးပွားရေးသမား၊ ရက်ရောသော ပံ့ပိုးသူ သို့မဟုတ် ရုပ်ဝတ္ထုတည်ငြိမ်မှု ဖန်တီးသူ။', ja: '物質的成功を収めた安定の主、寛大な支援者、揺るぎなき実力者。' },
      elementalTitle: { en: 'Fire of Earth', my: 'မြေဓာတ်ထဲမှ မီးစွမ်းအင်', ja: '地の中の火' },
      mbtiResonance: 'ESTJ / ISTJ',
      behavioralSignals: { en: 'Immaculate presentation, generous host, values craftsmanship and tangible results, unshakeable calm.', my: 'ခန့်ညားထည်ဝါသော အသွင်အပြင်၊ ဧည့်ဝတ်ကျေပွန်ခြင်း၊ လက်တွေ့ရလဒ်ကို တန်ဖိုးထားခြင်း။', ja: '重厚な身なり、手厚いもてなし、確実な成果と品質へのこだわり。' },
      relationshipAdvice: { en: 'Show appreciation for their practical support, be reliable with commitments, and value their time.', my: 'သူတို့၏ ပံ့ပိုးမှုကို ကျေးဇူးတင်ပါ၊ ကတိတည်ပါစေ။', ja: '彼らの現実的な支援に感謝を示し、約束を忠実に守ってください。' },
      shadowPitfall: { en: 'Materialistic greed, stubborn miserliness, measuring human worth solely by bank accounts.', my: 'ငွေကြေးလောဘကြီးခြင်း သို့မဟုတ် လူ့တန်ဖိုးကို ပစ္စည်းဥစ္စာဖြင့်သာ တိုင်းတာခြင်း။', ja: '拝金主義、過度のケチ、物質的豊かさによる他者の格付け。' }
    },
    queen_of_pentacles: {
      roleTitle: { en: 'The Grounded Matriarch & Earth Sovereign', my: 'တည်ငြိမ်ရင့်ကျက်သော အိမ်ရှင်မနှင့် ပံ့ပိုးရှင်', ja: '大地に根ざす母性・現実的な守護神' },
      personaArchetype: { en: 'A resourceful homemaker, practical creator, or generous mentor who creates sanctuary and comfort.', my: 'လက်တွေ့ကျသော စီမံခန့်ခွဲသူ သို့မဟုတ် နွေးထွေးလုံခြုံသော ပတ်ဝန်းကျင်ကို ဖန်တီးပေးသူ။', ja: '現実的なやりくり上手、安心できる居場所を作る温かな守護者。' },
      elementalTitle: { en: 'Water of Earth', my: 'မြေဓာတ်ထဲမှ ရေစွမ်းအင်', ja: '地の中の水' },
      mbtiResonance: 'ISFJ / ESFJ',
      behavioralSignals: { en: 'Offers food and comfort, practical problem solving, loves plants/gardens, financially astute.', my: 'ကျွေးမွေးဧည့်ခံတတ်ခြင်း၊ အပင်များနှင့် သဘာဝတရားကို ချစ်မြတ်နိုးခြင်း။', ja: '料理やもてなしで人を癒やす、植物や自然を愛する、堅実な金銭感覚。' },
      relationshipAdvice: { en: 'Reciprocate their everyday care, bring grounding reality to conversations, and honor home.', my: 'သူတို့၏ နွေးထွေးမှုကို ပြန်လည်တုံ့ပြန်ပါ၊ အိမ်တွင်းရေး ငြိမ်းချမ်းမှုကို တန်ဖိုးထားပါ။', ja: '日常の気配りに感謝を返し、共に落ち着ける時間を大切にしてください。' },
      shadowPitfall: { en: 'Hovering worry, smothering overprotectiveness, or neglecting own needs to fix others.', my: 'အလွန်အကျွံ စိုးရိမ်ပူပန်ခြင်း သို့မဟုတ် မိမိကိုယ်ကို မေ့လျော့ပြီး သူတစ်ပါးအတွက်သာ လုပ်ဆောင်ခြင်း။', ja: '過保護、取り越し苦労、自分を犠牲にした他者救済の罠。' }
    },
    knight_of_pentacles: {
      roleTitle: { en: 'The Methodical Builder & Reliable Stalwart', my: 'စနစ်တကျ တည်ဆောက်သူနှင့် ယုံကြည်စိတ်ချရသူ', ja: '着実なる建設者・不屈の努力家' },
      personaArchetype: { en: 'A diligent craftsman, loyal ally, or tireless worker who never cuts corners and finishes what they start.', my: 'ကြိုးစားအားထုတ်သော လက်မှုပညာရှင် သို့မဟုတ် စတင်ထားသောအလုပ်ကို ပြီးမြောက်အောင် လုပ်သူ။', ja: '一歩一歩確実に前進する職人肌、最も信頼できる実直なパートナー。' },
      elementalTitle: { en: 'Air of Earth', my: 'မြေဓာတ်ထဲမှ လေစွမ်းအင်', ja: '地の中の風' },
      mbtiResonance: 'ISTJ / ISFJ',
      behavioralSignals: { en: 'Punctual, thorough, meticulous with details, quiet determination, patient with long timeline.', my: 'အချိန်တိကျခြင်း၊ အသေးစိတ်အထိ သေချာဂရုစိုက်ခြင်း၊ စိတ်ရှည်သည်းခံခြင်း။', ja: '時間厳守、丁寧な仕事ぶり、寡黙な集中力、長期戦に耐えうる忍耐力。' },
      relationshipAdvice: { en: 'Value their steadfast loyalty; don\'t push for sudden hasty pivots or rush their deliberate pace.', my: 'သူတို့၏ သစ္စာရှိမှုကို တန်ဖိုးထားပါ၊ အလျင်စလို မတွန်းအားပေးပါနှင့်။', ja: 'その誠実さを信じ、急かさず彼らのペースを尊重してください。' },
      shadowPitfall: { en: 'Extreme stubbornness, tedious perfectionism, resistance to innovation, or boring workaholism.', my: 'ခေါင်းမာလွန်းခြင်း သို့မဟုတ် အပြောင်းအလဲကို လုံးဝလက်မခံလိုခြင်း။', ja: '極度の頑固さ、融通の利かなさ、ワーカホリックによる視野狭窄。' }
    },
    page_of_pentacles: {
      roleTitle: { en: 'The Studious Apprentice & Wealth Builder', my: 'ကြိုးစားသော တပည့်နှင့် အောင်မြင်မှုအစပျိုးသူ', ja: '真摯なる見習い・豊かさの種蒔く者' },
      personaArchetype: { en: 'An ambitious student, humble beginner, or eager apprentice focused on mastering a valuable craft.', my: 'ပညာသင်ယူနေသော ကျောင်းသား သို့မဟုတ် အသစ်စတင်နေသော စီးပွားရေးသမားငယ်။', ja: '謙虚に技術を磨く見習い、新しいキャリアの種を大切に育てる初心者。' },
      elementalTitle: { en: 'Earth of Earth', my: 'မြေအထပ်ထပ် စွမ်းအင်', ja: '地の中の地' },
      mbtiResonance: 'ISTJ / INTJ',
      behavioralSignals: { en: 'Takes notes, attentive listener, pragmatic goals, invests time and effort into practical skills.', my: 'မှတ်စုရေးမှတ်ခြင်း၊ လက်တွေ့ကျသော ပန်းတိုင်များ ချမှတ်ခြင်း။', ja: '熱心なメモ魔、高い学習意欲、実利的なスキルへの投資。' },
      relationshipAdvice: { en: 'Support their learning curve, offer practical resources, and celebrate incremental gains.', my: 'သူတို့၏ သင်ယူမှုကို ကူညီပံ့ပိုးပါ၊ အောင်မြင်မှုလေးများကို ချီးကျူးပေးပါ။', ja: '学びのプロセスを応援し、具体的なツールや機会を提供してください。' },
      shadowPitfall: { en: 'Analysis paralysis, fear of starting until conditions are "perfect", or penny-pinching anxiety.', my: 'စတင်ရန် ကြောက်ရွံ့နေခြင်း သို့မဟုတ် ပြီးပြည့်စုံမှ လုပ်မည်ဟု တွေးတောနေခြင်း။', ja: '完璧主義による着手の遅れ、失敗への恐怖、近視眼的な節約。' }
    }
  };

  /**
   * Check if a card is a Court Card and retrieve its Persona
   */
  public static getCourtPersona(card: TarotCard): CourtCardPersona | null {
    if (card.arcana === 'major') return null;
    return this.PERSONAS[card.id] || null;
  }
}
