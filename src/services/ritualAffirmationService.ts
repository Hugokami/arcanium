import { DrawnCard, Language, LocalizedText } from '../types/tarot';
import { ElementalDignitySummary, QuintessenceResult } from '../types/userProfile';

export interface RitualPrescription {
  affirmation: LocalizedText;
  candleColor: LocalizedText;
  crystal: LocalizedText;
  breathRitual: LocalizedText;
  sacredHerb: LocalizedText;
}

export class RitualAffirmationService {
  public static generatePrescription(
    elemental: ElementalDignitySummary,
    quintessence: QuintessenceResult,
    drawnCards: DrawnCard[],
    lang: Language
  ): RitualPrescription {
    const dominant = elemental.dominantElement;

    let candleColor = {
      en: 'Gold & Ivory (Cosmic Clarity & Divine Light)',
      my: 'ရွှေရောင်နှင့် ဆင်စွယ်ရောင် ဖယောင်းတိုင် (စကြဝဠာအလင်းရောင်)',
      ja: '金色と純白のキャンドル（神聖な明晰さと光）'
    };

    let crystal = {
      en: 'Clear Quartz (Master Amplifier & Spiritual Focus)',
      my: 'သလင်းဖြူ ကျောက်မျက် (Clear Quartz - စိတ်ကြည်လင်သန့်စင်မှု)',
      ja: 'クリアクォーツ（万能の増幅と浄化のクリスタル）'
    };

    let sacredHerb = {
      en: 'White Sage & Frankincense (Purification & Awakening)',
      my: 'စမုန်ဖြူနှင့် မွှေးရနံ့သာ (သန့်စင်ခြင်းနှင့် စိတ်အေးချမ်းမှု)',
      ja: 'ホワイトセージとフランキンセンス（浄化と覚醒）'
    };

    let breathRitual = {
      en: 'Inhale for 4 beats, hold for 4, exhale for 4 beats (Box Breathing for Sacred Grounding).',
      my: '၄ စက္ကန့် ရှူသွင်းပါ၊ ၄ စက္ကန့် အောင့်ထားပါ၊ ၄ စက္ကန့် ဖြည်းညင်းစွာ ရှူထုတ်ပါ (စိတ်တည်ငြိမ်ရေး အသက်ရှူနည်း)။',
      ja: '4秒吸って、4秒止め、4秒吐き出す（心を静めるボックス呼吸法）。'
    };

    let affirmation = {
      en: `I am aligned with divine timing. I step forward with calm courage, trusting the wisdom within my soul.`,
      my: `ကျွန်ုပ်သည် စကြဝဠာ၏ အချိန်အခါနှင့် တစ်သားတည်း ရှိပါသည်။ အတွင်းစိတ်ဉာဏ်ပညာကို ယုံကြည်ပြီး ရဲရင့်တည်ငြိမ်စွာ ရှေ့ဆက်လှမ်းပါမည်။`,
      ja: `私は宇宙の完璧なタイミングと調和しています。魂の内なる智慧を信じ、静かな勇気を持って前進します。`
    };

    if (dominant === 'Fire') {
      candleColor = {
        en: 'Crimson or Deep Amber (Igniting Passion & Courage)',
        my: 'နီညိုရောင် သို့မဟုတ် ပယင်းရောင် ဖယောင်းတိုင် (ရဲရင့်မှုနှင့် မီးတောက်စွမ်းအင်)',
        ja: '深紅または琥珀色のキャンドル（情熱と意志の点火）'
      };
      crystal = {
        en: 'Carnelian & Tiger Eye (Vitality, Confidence & Action)',
        my: 'ကျောက်ပယင်းနှင့် ကျားမျက်လုံးကျောက် (Tiger Eye - စိတ်ခွန်အားနှင့် သန္နိဋ္ဌာန်)',
        ja: 'カーネリアンとタイガーズアイ（行動力と自己確信）'
      };
      sacredHerb = {
        en: 'Cinnamon & Rosemary (Active Courage & Manifestation)',
        my: 'သစ်ကြံပိုးနှင့် ရိုစမာရီရနံ့ (တက်ကြွမှုနှင့် အောင်မြင်ခြင်း)',
        ja: 'シナモンとローズマリー（情熱の喚起と保護）'
      };
      affirmation = {
        en: `My will is focused and unwavering. I channel the sacred fire to create my reality without burning out.`,
        my: `ကျွန်ုပ်၏ သန္နိဋ္ဌာန်သည် ခိုင်မာပြတ်သားပါသည်။ မဆုတ်မနစ်သော စိတ်ဓာတ်ဖြင့် ရည်မှန်းချက်များကို အောင်မြင်စွာ ဖန်တီးပါမည်။`,
        ja: `私の意志は揺るぎなく研ぎ澄まされています。聖なる炎を統御し、恐れなく自らの現実を切り拓きます。`
      };
    } else if (dominant === 'Water') {
      candleColor = {
        en: 'Ocean Blue or Silver (Emotional Harmony & Intuition)',
        my: 'ပင်လယ်ပြာရောင် သို့မဟုတ် ငွေရောင် ဖယောင်းတိုင် (စိတ်ခံစားမှု သဟဇာတဖြစ်ခြင်း)',
        ja: 'オーシャンブルーまたは銀色のキャンドル（感情の調和と直感）'
      };
      crystal = {
        en: 'Rose Quartz & Moonstone (Unconditional Love & Psychic Flow)',
        my: 'နှင်းဆီသလင်းနှင့် လကျောက် (Moonstone - စစ်မှန်သော မေတ္တာနှင့် အတွင်းအာရုံ)',
        ja: 'ローズクォーツとムーンストーン（愛の治癒と霊感）'
      };
      sacredHerb = {
        en: 'Lavender & Chamomile (Peaceful Surrender & Healing)',
        my: 'လာဗင်ဒါနှင့် ကာမိုမိုင်းရနံ့ (စိတ်ငြိမ်းချမ်းခြင်းနှင့် ကုစားမှု)',
        ja: 'ラベンダーとカモミール（心の平穏と深い癒やし）'
      };
      affirmation = {
        en: `I open my heart to true connection. I release all emotional resistance and flow like sacred water.`,
        my: `ကျွန်ုပ်၏ နှလုံးသားကို မေတ္တာအတွက် ဖွင့်လှစ်ထားပါသည်။ စိတ်ဒဏ်ရာဟောင်းများကို လွှတ်ချပြီး ရေစီးကဲ့သို့ အေးချမ်းစွာ ရှင်သန်ပါမည်။`,
        ja: `私は真の愛と絆に心を開きます。感情の滞りをすべて手放し、清らかな水のように優雅に流れます。`
      };
    } else if (dominant === 'Air') {
      candleColor = {
        en: 'Sky Blue or Pale Violet (Clarity of Mind & Truth)',
        my: 'မိုးပြာရောင် သို့မဟုတ် ခရမ်းနုရောင် ဖယောင်းတိုင် (ဉာဏ်ပညာနှင့် အမှန်တရား)',
        ja: 'スカイブルーまたは淡い紫のキャンドル（思考の明晰と真理）'
      };
      crystal = {
        en: 'Amethyst & Lapis Lazuli (Mental Serenity & Higher Vision)',
        my: 'ခရမ်းစွဲကျောက်မျက် (Amethyst) နှင့် နီလာပြာ (ဉာဏ်အလင်းနှင့် အတွေးကြည်လင်မှု)',
        ja: 'アメジストとラピスラズリ（知性の静寂と高次の視点）'
      };
      sacredHerb = {
        en: 'Peppermint & Sandalwood (Mental Focus & Stillness)',
        my: 'ပူစီနံနှင့် စန္ဒကူးရနံ့ (အာရုံစူးစိုက်မှုနှင့် အတွေးရှင်းလင်းခြင်း)',
        ja: 'ペパーミントとサンダルウッド（思考の明鏡止水）'
      };
      affirmation = {
        en: `My mind is clear and tranquil. I speak my truth with grace and see through every illusion.`,
        my: `ကျွန်ုပ်၏ စိတ်အာရုံသည် ကြည်လင်အေးချမ်းပါသည်။ အမှန်တရားကို ရဲဝံ့စွာ ပြောဆိုပြီး သံသယအားလုံးကို ရှင်းလင်းပါမည်။`,
        ja: `私の精神は澄み渡り、静寂に満ちています。真実の声を優雅に語り、すべての幻影を見通します。`
      };
    } else if (dominant === 'Earth') {
      candleColor = {
        en: 'Forest Green or Bronze (Material Abundance & Stability)',
        my: 'သစ်တောစိမ်းရောင် သို့မဟုတ် ကြေးညိုရောင် ဖယောင်းတိုင် (ကြွယ်ဝချမ်းသာမှုနှင့် တည်ငြိမ်ခြင်း)',
        ja: 'フォレストグリーンまたはブロンズのキャンドル（豊穣と現実的基盤）'
      };
      crystal = {
        en: 'Pyrite & Green Aventurine (Wealth, Growth & Earth Grounding)',
        my: 'ရွှေရောင်သံကျောက် (Pyrite) နှင့် မြစိမ်းကျောက် (စည်းစိမ်ဥစ္စာနှင့် အုတ်မြစ်ခိုင်မာမှု)',
        ja: 'パイライトとアベンチュリン（富の具現化と大地のグラウンディング）'
      };
      sacredHerb = {
        en: 'Patchouli & Cedarwood (Security, Rooting & Prosperity)',
        my: 'စည်ဒါထင်းရှူးနှင့် မြေရနံ့သာ (ဘဝလုံခြုံရေးနှင့် ကြီးပွားတိုးတက်မှု)',
        ja: 'パチョリとシダーウッド（揺るぎない安定と繁栄）'
      };
      affirmation = {
        en: `I am deeply rooted in peace and security. I build lasting prosperity step by step with patient faith.`,
        my: `ကျွန်ုပ်၏ ဘဝအုတ်မြစ်သည် ခိုင်မာလုံခြုံပါသည်။ စိတ်ရှည်မှုနှင့် ယုံကြည်မှုဖြင့် ကြာရှည်ခံသော အောင်မြင်မှုကို တည်ဆောက်ပါမည်။`,
        ja: `私は大いなる大地にしっかりと根ざしています。揺るぎない忍耐と信頼をもって、真の豊かさを築きます。`
      };
    }

    return {
      affirmation,
      candleColor,
      crystal,
      breathRitual,
      sacredHerb
    };
  }
}
