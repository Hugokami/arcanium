import { DrawnCard, Language, TarotCard } from '../types/tarot';
import { CardSynergyPair, ElementalDignitySummary, PolarityGaugeResult, QuintessenceResult } from '../types/userProfile';

export class TarotSynergyService {
  /**
   * 1. Calculate Elemental Dignities and Alchemy Balance
   */
  public static calculateElementalDignities(drawnCards: DrawnCard[], lang: Language): ElementalDignitySummary {
    let fire = 0;
    let water = 0;
    let air = 0;
    let earth = 0;

    drawnCards.forEach(dc => {
      const el = dc.card.element;
      if (el === 'Fire') fire++;
      else if (el === 'Water') water++;
      else if (el === 'Air') air++;
      else if (el === 'Earth') earth++;
      else {
        // Fallback suit estimation
        if (dc.card.suit === 'wands') fire++;
        else if (dc.card.suit === 'cups') water++;
        else if (dc.card.suit === 'swords') air++;
        else if (dc.card.suit === 'pentacles') earth++;
      }
    });

    const total = drawnCards.length || 1;
    const elements = [
      { name: 'Fire' as const, count: fire },
      { name: 'Water' as const, count: water },
      { name: 'Air' as const, count: air },
      { name: 'Earth' as const, count: earth },
    ].sort((a, b) => b.count - a.count);

    const dominant = elements[0].count > total / 2 ? elements[0].name : 'Balanced';

    // Calculate Alchemy Harmony Score
    // Friction: Fire + Water, Air + Earth
    // Synergy: Fire + Air, Water + Earth
    const activeSynergy = Math.min(fire, air) + Math.min(water, earth);
    const friction = Math.min(fire, water) + Math.min(air, earth);
    const balanceFactor = (activeSynergy * 25) - (friction * 15);
    const harmonyScore = Math.max(35, Math.min(98, 65 + balanceFactor));

    let verdict = {
      en: 'Balanced Elemental Equilibrium',
      my: 'ဓာတ်ကြီးလေးပါး ဟန်ချက်ညီညီ စီးဆင်းမှု',
      ja: '四元素の調和と均衡'
    };

    let advice = {
      en: 'Your spread balances spirit, mind, heart, and reality in equal measure.',
      my: 'ကတ်ပြားများတွင် စိတ်ဓာတ်၊ ဉာဏ်ပညာ၊ နှလုံးသားနှင့် လက်တွေ့ဘဝတို့ အချိုးညီစွာ ဟန်ချက်ညီနေပါသည်။',
      ja: '情熱、知性、感情、現実の四元素が美しくバランスを保っています。'
    };

    if (dominant === 'Fire') {
      verdict = {
        en: 'Dominant Fire Element (Passion & Will)',
        my: 'မီးဓာတ် အားအလွန်ကောင်းသော စွမ်းအင် (စိတ်အားထက်သန်မှုနှင့် သန္နိဋ္ဌာန်)',
        ja: '火のエレメント優勢（情熱と意志の爆発）'
      };
      advice = {
        en: 'High momentum and decisive drive. Channel this intense fire before impatience causes burn out.',
        my: 'လျင်မြန်သော အရှိန်အဟုန်နှင့် ရဲရင့်သော ဆုံးဖြတ်ချက်များ ရှိသည်။ စိတ်မလောဘဲ စွမ်းအင်ကို အကျိုးရှိစွာ စုစည်းပါ။',
        ja: '急速な展開と決断力に満ちています。焦りによる空回りを避け、確実な行動へと昇華させてください。'
      };
    } else if (dominant === 'Water') {
      verdict = {
        en: 'Dominant Water Element (Deep Intuition & Bonds)',
        my: 'ရေဓာတ် အားအလွန်ကောင်းသော စွမ်းအင် (နက်ရှိုင်းသော စိတ်ခံစားမှုနှင့် သံယောဇဉ်)',
        ja: '水のエレメント優勢（深い直感と魂の繋がり）'
      };
      advice = {
        en: 'Emotional depths and relationships steer the outcome. Trust your gut feelings over cold logic.',
        my: 'နှလုံးသားခံစားချက်များနှင့် ဆက်ဆံရေးများက အဓိက လွှမ်းမိုးနေသည်။ ဦးနှောက်ထက် အတွင်းစိတ်အာရုံကို ယုံကြည်ပါ။',
        ja: '感情の波と人間関係がすべてを左右します。乾いた論理よりも、自らの直感の声を信じてください。'
      };
    } else if (dominant === 'Air') {
      verdict = {
        en: 'Dominant Air Element (Intellect & Clarity)',
        my: 'လေဓာတ် အားအလွန်ကောင်းသော စွမ်းအင် (ဉာဏ်ပညာနှင့် ရှင်းလင်းပြတ်သားမှု)',
        ja: '風のエレメント優勢（知性と明晰な真理）'
      };
      advice = {
        en: 'Mental agility and communication rule the day. Beware of overthinking and mental fatigue.',
        my: 'စဉ်းစားတွေးခေါ်မှုနှင့် အသိဉာဏ်ပညာ လျင်မြန်နေသည်။ အတွေးလွန်ပြီး စိတ်မပင်ပန်းစေရန် သတိပြုပါ။',
        ja: '知的な分析と対話が突破口となります。考えすぎによる思考の迷路に陥らないよう注意してください。'
      };
    } else if (dominant === 'Earth') {
      verdict = {
        en: 'Dominant Earth Element (Stability & Prosperity)',
        my: 'မြေဓာတ် အားအလွန်ကောင်းသော စွမ်းအင် (တည်ငြိမ်မှုနှင့် ရုပ်ဝတ္ထုအောင်မြင်မှု)',
        ja: '地のエレメント優勢（現実的基盤と物質的繁栄）'
      };
      advice = {
        en: 'Solid foundation and material security. Move step by step; patience yields lasting victory.',
        my: 'ခိုင်မာသော အုတ်မြစ်နှင့် ငွေကြေးတည်ငြိမ်မှု ရှိသည်။ ဖြည်းဖြည်းချင်း လျှောက်လှမ်းပါက အောင်မြင်မှု ခိုင်မြဲမည်။',
        ja: '確固たる基盤と経済的安定。焦らず着実に進むことで、揺るぎない果実を収穫できます。'
      };
    }

    return {
      fire,
      water,
      air,
      earth,
      dominantElement: dominant,
      harmonyScore,
      alchemyVerdict: verdict,
      elementalAdvice: advice
    };
  }

  /**
   * 2. Detect Signature Tarot Card Synergies
   */
  public static detectCardSynergies(drawnCards: DrawnCard[], lang: Language): CardSynergyPair[] {
    const cardIds = drawnCards.map(dc => dc.card.id.toLowerCase());
    const synergies: CardSynergyPair[] = [];

    const has = (id: string) => cardIds.includes(id.toLowerCase());

    // 1. The Lovers + Two of Cups (Divine Soulmate Union)
    if (has('lovers') && has('cups02')) {
      synergies.push({
        id: 'soulmate_union',
        title: {
          en: '✦ Divine Soulmate Union (The Lovers + Two of Cups)',
          my: '✦ ဝိညာဉ်ချင်းချိတ်ဆက်သော မြင့်မြတ်သည့် စုံတွဲနိမိတ် (The Lovers + Two of Cups)',
          ja: '✦ 魂の聖なる統合（恋人たち ✕ カップの2）'
        },
        description: {
          en: 'An extraordinarily rare mutual soul resonance. Deep unconditional love, harmony, and lasting partnership are blessed.',
          my: 'အလွန်ရှားပါးသော နှလုံးသားချင်း ထပ်တူကျမှု ဖြစ်သည်။ စစ်မှန်သော မေတ္တာ၊ အပြန်အလှန်နားလည်မှုနှင့် ခိုင်မြဲသော လက်တွဲဖော်နိမိတ် ဖြစ်ပါသည်။',
          ja: '極めて稀有な魂の共鳴。無条件の愛、深い相互理解、そして揺るぎないパートナーシップの祝福です。'
        },
        cardAId: 'lovers',
        cardBId: 'cups02',
        potency: 'profound'
      });
    }

    // 2. The Tower + Death (Total Cataclysmic Rebirth)
    if (has('tower') && has('death')) {
      synergies.push({
        id: 'total_rebirth',
        title: {
          en: '⚡ Total Cataclysmic Rebirth (The Tower + Death)',
          my: '⚡ အဟောင်းအားလုံး ပြိုလဲပြီး အသစ်တဖန် မွေးဖွားခြင်း (The Tower + Death)',
          ja: '⚡ 劇的な完全崩壊と新生（塔 ✕ 死神）'
        },
        description: {
          en: 'Old structures are being dismantled rapidly by fate to make room for an entirely new epoch in your life. Surrender the past.',
          my: 'မလိုလားအပ်သော အဟောင်းများ ရုတ်တရက် ပြိုလဲပျက်စီးပြီး ဘဝစာမျက်နှာသစ် စတင်ဖွင့်လှစ်တော့မည်။ အတိတ်ကို လွှတ်ချလိုက်ပါ။',
          ja: '古い枠組みが宿命的に崩れ去り、まったく新しい人生の幕が上がります。過去を手放し、再生を受け入れてください。'
        },
        cardAId: 'tower',
        cardBId: 'death',
        potency: 'profound'
      });
    }

    // 3. The Magician + Ace of Pentacles (Alchemy of Manifestation)
    if (has('magician') && has('pents01')) {
      synergies.push({
        id: 'manifestation_alchemy',
        title: {
          en: '🪙 Alchemy of Material Manifestation (The Magician + Ace of Pentacles)',
          my: '🪙 စိတ်ကူးမှ ရုပ်ဝတ္ထုအဖြစ် အောင်မြင်စွာ ဖန်တီးနိုင်ခြင်း (The Magician + Ace of Pentacles)',
          ja: '🪙 物質化の錬金術（魔術師 ✕ ペンタクルのエース）'
        },
        description: {
          en: 'You hold all the elemental tools to turn an ambitious creative idea into tangible wealth and physical reality.',
          my: 'မိမိ၏ တီထွင်ဖန်တီးနိုင်စွမ်းနှင့် ကြိုးစားအားထုတ်မှုဖြင့် စီးပွားဥစ္စာ အောင်မြင်မှုကို လက်တွေ့ ဖော်ဆောင်နိုင်မည့် အခွင့်အလမ်း ဖြစ်ပါသည်။',
          ja: 'あなたのアイデアを現実の富と成功へと転換する完全な力が揃っています。ためらわずに行動を起こしてください。'
        },
        cardAId: 'magician',
        cardBId: 'pents01',
        potency: 'high'
      });
    }

    // 4. The Star + The Sun (Radiant Triumph & Illumination)
    if (has('star') && has('sun')) {
      synergies.push({
        id: 'radiant_triumph',
        title: {
          en: '☀️ Radiant Cosmic Grace (The Star + The Sun)',
          my: '☀️ မင်္ဂလာအပေါင်းနှင့် ပြည့်စုံသော အောင်မြင်မှုနိမိတ် (The Star + The Sun)',
          ja: '☀️ 天上の光明と大いなる成就（星 ✕ 太陽）'
        },
        description: {
          en: 'The universe pours supreme clarity, joy, and spiritual vitality upon your path. Darkness is fully conquered.',
          my: 'စကြဝဠာက သင့်ထံသို့ ပျော်ရွှင်မှု၊ အလင်းရောင်နှင့် ကြီးကျယ်သော အောင်မြင်မှုကို ပေးသနားနေပါသည်။ အမှောင်ထု လုံးဝ ပျောက်ကွယ်သွားပါပြီ။',
          ja: '至高の光と明晰さ、そして歓喜があなたの道を照らしています。あらゆる不安と影は完全に打ち払われました。'
        },
        cardAId: 'star',
        cardBId: 'sun',
        potency: 'profound'
      });
    }

    // 5. The High Priestess + The Moon (Mystic Veil of Subconscious)
    if (has('high_priestess') && has('moon')) {
      synergies.push({
        id: 'mystic_intuition',
        title: {
          en: '🔮 The Mystic Veil (The High Priestess + The Moon)',
          my: '🔮 မမြင်ရသော စိတ်ဝိညာဉ်ထူးခြားသည့် အာရုံနိမိတ် (The High Priestess + The Moon)',
          ja: '🔮 霊的深淵のヴェール（女教皇 ✕ 月）'
        },
        description: {
          en: 'Psychic sensitivity and prophetic dreams are heightened. Secrets will reveal themselves naturally; listen to your inner voice.',
          my: 'အတွင်းစိတ်အာရုံခံစားမှု အလွန်ထက်မြက်နေသည်။ လျှို့ဝှက်ချက်များ အလိုလို ပေါ်ပေါက်လာမည်ဖြစ်၍ မိမိ၏ အာရုံကိုသာ နားထောင်ပါ။',
          ja: '霊的な感性と予知夢が極限まで高まっています。秘密はやがて自然に明かされます。内なる導きに耳を澄ませてください。'
        },
        cardAId: 'high_priestess',
        cardBId: 'moon',
        potency: 'high'
      });
    }

    // 6. The Empress + The Emperor (Divine Sovereignty)
    if (has('empress') && has('emperor')) {
      synergies.push({
        id: 'divine_sovereignty',
        title: {
          en: '👑 Divine Sovereignty & Creative Authority (The Empress + The Emperor)',
          my: '👑 ဖန်တီးမှုနှင့် အုပ်ချုပ်မှု ဟန်ချက်ညီသော မင်းမြတ်နိမိတ် (The Empress + The Emperor)',
          ja: '👑 聖なる統率と豊穣（女帝 ✕ 皇帝）'
        },
        description: {
          en: 'The ideal marriage of boundless creativity and structured discipline. You have the power to rule your world with grace.',
          my: 'တီထွင်ဖန်တီးနိုင်စွမ်းနှင့် စည်းစနစ်ကျနမှု အကောင်းဆုံး ပေါင်းစပ်မိနေသည်။ မိမိ၏ ဘဝအခြေအနေကို အပြည့်အဝ စီမံအုပ်ချုပ်နိုင်ပါသည်။',
          ja: '無限の創造性と規律ある構築力の完璧な融合。あなたの人生と環境を優雅に統率する力が備わっています。'
        },
        cardAId: 'empress',
        cardBId: 'emperor',
        potency: 'high'
      });
    }

    // 7. Three of Swords + The Tower (Heartbreak Awakening)
    if (has('swords03') && has('tower')) {
      synergies.push({
        id: 'heartbreak_clearing',
        title: {
          en: '⚡ Painful Revelation Leading to Liberation (Three of Swords + The Tower)',
          my: '⚡ နာကျင်ရသော်လည်း အမှန်တရားကြောင့် လွတ်မြောက်ခြင်း (Three of Swords + The Tower)',
          ja: '⚡ 痛烈な真実による解放（ソードの3 ✕ 塔）'
        },
        description: {
          en: 'A sharp illusion or betrayal breaks away. While it stings, it frees your spirit from an ongoing deception.',
          my: 'မမှန်ကန်သော အရာများ ပြိုပျက်သွားခြင်း ဖြစ်သည်။ ခေတ္တနာကျင်ရသော်လည်း သင့်စိတ်ဝိညာဉ်ကို လှည့်စားမှုများမှ အပြီးတိုင် လွတ်မြောက်စေပါသည်။',
          ja: '幻想や偽りが音を立てて崩壊します。痛みは伴いますが、あなたを欺瞞の檻から真に解放するための嵐です。'
        },
        cardAId: 'swords03',
        cardBId: 'tower',
        potency: 'warning'
      });
    }

    return synergies;
  }

  /**
   * 3. Calculate The Quintessence (Master Root Card of the Reading)
   */
  public static calculateQuintessence(drawnCards: DrawnCard[], lang: Language): QuintessenceResult {
    let sum = 0;
    drawnCards.forEach(dc => {
      // Add numerical value of card
      sum += dc.card.number || 1;
    });

    // Reduce sum to 1 - 22
    let reduced = sum;
    while (reduced > 22) {
      reduced = reduced
        .toString()
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);
    }

    if (reduced === 0) reduced = 22; // The Fool

    const MAJOR_CARDS: Record<number, { id: string; name: { en: string; my: string; ja: string }; lesson: { en: string; my: string; ja: string } }> = {
      1: {
        id: 'magician',
        name: { en: 'I The Magician', my: 'I မျက်လှည့်ဆရာ (The Magician)', ja: 'I 魔術師' },
        lesson: {
          en: 'The Master Key is Conscious Will: Align thought, word, and action to manifest your desired reality.',
          my: 'အဓိက သော့ချက်မှာ စိတ်စွမ်းအား ဖြစ်သည် — အတွေး၊ စကားနှင့် လုပ်ဆောင်ချက်တို့ကို တစ်သားတည်းထား၍ လက်တွေ့ဖော်ဆောင်ပါ။',
          ja: '支配的な霊的教訓は【意志の具現化】。思考と言葉、行動を一致させて現実を創造してください。'
        }
      },
      2: {
        id: 'high_priestess',
        name: { en: 'II The High Priestess', my: 'II ဘုန်းတော်ကြီးမ (The High Priestess)', ja: 'II 女教皇' },
        lesson: {
          en: 'The Master Key is Stillness & Intuition: The answers are already inside you. Silence external noise.',
          my: 'အဓိက သော့ချက်မှာ တည်ငြိမ်မှုနှင့် အတွင်းစိတ်အာရုံ ဖြစ်သည် — အပြင်ပယောဂများကို ပိတ်ပြီး မိမိစိတ်ကို မေးမြန်းပါ။',
          ja: '支配的な霊的教訓は【静寂と直感】。答えはすでにあなたの内にあります。外部の雑音を静めてください。'
        }
      },
      3: {
        id: 'empress',
        name: { en: 'III The Empress', my: 'III ဧကရီမိဖုရား (The Empress)', ja: 'III 女帝' },
        lesson: {
          en: 'The Master Key is Creative Nurturing: Allow your dreams to incubate with gentle patience and self-love.',
          my: 'အဓိက သော့ချက်မှာ မေတ္တာဖြင့် ပျိုးထောင်ခြင်း ဖြစ်သည် — စိတ်ရှည်မှုနှင့် မိမိကိုယ်ကို ချစ်ခင်မှုဖြင့် အချိန်ပေးပါ။',
          ja: '支配的な霊的教訓は【愛と育み】。焦らず自愛と優しさを持って、夢が実を結ぶのを待ってください。'
        }
      },
      4: {
        id: 'emperor',
        name: { en: 'IV The Emperor', my: 'IV ဧကရာဇ်မင်း (The Emperor)', ja: 'IV 皇帝' },
        lesson: {
          en: 'The Master Key is Divine Order: Establish clear boundaries, structured discipline, and take ownership.',
          my: 'အဓိက သော့ချက်မှာ စည်းစနစ်နှင့် တာဝန်ယူမှု ဖြစ်သည် — စည်းဘောင်များ သတ်မှတ်ပြီး ရဲဝံ့စွာ ဦးဆောင်ပါ။',
          ja: '支配的な霊的教訓は【秩序と規律】。明確な境界線を引き、責任を持って自らの世界を統率してください。'
        }
      },
      5: {
        id: 'hierophant',
        name: { en: 'V The Hierophant', my: 'V ဆရာတော် (The Hierophant)', ja: 'V 教皇' },
        lesson: {
          en: 'The Master Key is Spiritual Wisdom & Mentorship: Seek time-tested truths and ethical alignment.',
          my: 'အဓိက သော့ချက်မှာ အသိပညာနှင့် ကျင့်ဝတ် ဖြစ်သည် — မှန်ကန်သော အကြံဉာဏ်နှင့် လမ်းညွှန်မှုကို ခံယူပါ။',
          ja: '支配的な霊的教訓は【伝統の知恵と倫理】。信頼できる導きと自らの信条に従って歩んでください。'
        }
      },
      6: {
        id: 'lovers',
        name: { en: 'VI The Lovers', my: 'VI ချစ်သူစုံတွဲ (The Lovers)', ja: 'VI 恋人たち' },
        lesson: {
          en: 'The Master Key is Value Alignment: Choose from your highest soul truth rather than fear or convenience.',
          my: 'အဓိက သော့ချက်မှာ တန်ဖိုးထားမှု ရွေးချယ်ခြင်း ဖြစ်သည် — ကြောက်ရွံ့မှုကြောင့် မဟုတ်ဘဲ စစ်မှန်သော နှလုံးသားဖြင့် ရွေးချယ်ပါ။',
          ja: '支配的な霊的教訓は【真の価値観の選択】。恐れではなく、魂の真実に基づいて選んでください。'
        }
      },
      7: {
        id: 'chariot',
        name: { en: 'VII The Chariot', my: 'VII စစ်ရထား (The Chariot)', ja: 'VII 戦車' },
        lesson: {
          en: 'The Master Key is Focused Willpower: Harness conflicting emotions and steer decisively toward your goal.',
          my: 'အဓိက သော့ချက်မှာ စိတ်ဓာတ်ခိုင်မာမှု ဖြစ်သည် — စိတ်ခံစားချက်များကို ထိန်းညှိပြီး ပန်းတိုင်ဆီသို့ မဆုတ်မနစ် ချီတက်ပါ။',
          ja: '支配的な霊的教訓は【不屈の統御力】。相反する感情を手綱で引き締め、目標へ突き進んでください。'
        }
      },
      8: {
        id: 'strength',
        name: { en: 'VIII Strength', my: 'VIII အတွင်းခွန်အား (Strength)', ja: 'VIII 力' },
        lesson: {
          en: 'The Master Key is Gentle Courage: Compassion and patience tame the fiercest storms, not brute force.',
          my: 'အဓိက သော့ချက်မှာ နူးညံ့သော ခွန်အား ဖြစ်သည် — အကြမ်းနည်းထက် မေတ္တာနှင့် စိတ်ရှည်မှုဖြင့် အခက်အခဲကို ကျော်လွှားပါ။',
          ja: '支配的な霊的教訓は【優しき剛毅】。力ずくではなく、慈愛と忍耐によってのみ真の勝利が得られます。'
        }
      },
      9: {
        id: 'hermit',
        name: { en: 'IX The Hermit', my: 'IX ရသေ့သူတော်စင် (The Hermit)', ja: 'IX 隠者' },
        lesson: {
          en: 'The Master Key is Solitude & Inner Light: Retreat from the crowd to illuminate your genuine soul purpose.',
          my: 'အဓိက သော့ချက်မှာ တစ်ကိုယ်တည်း ဆင်ခြင်ခြင်း ဖြစ်သည် — တိတ်ဆိတ်စွာ အနားယူပြီး မိမိအတွင်းအလင်းကို ရှာဖွေပါ။',
          ja: '支配的な霊的教訓は【内省の光】。喧騒から離れ、自らの内なる灯火で道を照らしてください。'
        }
      },
      10: {
        id: 'wheel_of_fortune',
        name: { en: 'X Wheel of Fortune', my: 'X ကံကြမ္မာစက်ဝိုင်း (Wheel of Fortune)', ja: 'X 運命の輪' },
        lesson: {
          en: 'The Master Key is Karmic Timing: Adapt gracefully to life cycles; a favorable turning point is approaching.',
          my: 'အဓိက သော့ချက်မှာ ကံကြမ္မာအချိန်အခါ ဖြစ်သည် — ဘဝအလှည့်အပြောင်းကို လက်ခံပြီး အခွင့်အလမ်းသစ်ကို ဖမ်းဆုပ်ပါ။',
          ja: '支配的な霊的教訓は【運命の転換期】。抗わず流れに乗り、訪れる好機を捉えてください。'
        }
      },
      11: {
        id: 'justice',
        name: { en: 'XI Justice', my: 'XI တရားမျှတခြင်း (Justice)', ja: 'XI 正義' },
        lesson: {
          en: 'The Master Key is Truth & Equilibrium: Absolute honesty with yourself brings karmic balance and clarity.',
          my: 'အဓိက သော့ချက်မှာ သမာသမတ်ကျမှု ဖြစ်သည် — မိမိကိုယ်ကို ရိုးသားစွာ သုံးသပ်ခြင်းဖြင့် တရားမျှတသော ရလဒ် ရရှိမည်။',
          ja: '支配的な霊的教訓は【客観的真実と因果】。誠実さと公平さが、最善の調和をもたらします。'
        }
      },
      12: {
        id: 'hanged_man',
        name: { en: 'XII The Hanged Man', my: 'XII ဇောက်ထိုးတွဲလောင်းကျနေသူ (The Hanged Man)', ja: 'XII 吊るされた男' },
        lesson: {
          en: 'The Master Key is Spiritual Surrender: Pause and look from an inverted perspective; surrender unlocks wisdom.',
          my: 'အဓိက သော့ချက်မှာ အမြင်ပြောင်းလဲခြင်း ဖြစ်သည် — အတင်းမရုန်းကန်ဘဲ ရှုထောင့်အသစ်မှ ကြည့်ရှုအဖြေရှာပါ။',
          ja: '支配的な霊的教訓は【視点の転換と手放し】。執着を手放すことで、高次の智慧が開かれます。'
        }
      },
      13: {
        id: 'death',
        name: { en: 'XIII Death', my: 'XIII သေခြင်းတရားနှင့် အသွင်ပြောင်းလဲခြင်း (Death)', ja: 'XIII 死神' },
        lesson: {
          en: 'The Master Key is Necessary Metamorphosis: Let what has expired fall away completely so new life may enter.',
          my: 'အဓိက သော့ချက်မှာ အသွင်ကူးပြောင်းခြင်း ဖြစ်သည် — ကုန်ဆုံးသွားသောအရာများကို လွှတ်ချပြီး ဘဝသစ်ကို ကြိုဆိုပါ။',
          ja: '支配的な霊的教訓は【必然の脱皮】。役目を終えた過去を完全に手放し、再生を迎えてください。'
        }
      },
      14: {
        id: 'temperance',
        name: { en: 'XIV Temperance', my: 'XIV အလယ်အလတ်လမ်းစဉ် (Temperance)', ja: 'XIV 節制' },
        lesson: {
          en: 'The Master Key is Inner Alchemy: Blend extremes, find middle ground, and allow healing to integrate.',
          my: 'အဓိက သော့ချက်မှာ အလယ်အလတ် မျှတမှု ဖြစ်သည် — အစွန်းမရောက်ဘဲ စိတ်အေးချမ်းမှုကို ထိန်းသိမ်းပါ။',
          ja: '支配的な霊的教訓は【中庸と調合】。極端を避け、調和の中で心身の治癒を促してください。'
        }
      },
      15: {
        id: 'devil',
        name: { en: 'XV The Devil', my: 'XV မာရ်နတ် (The Devil)', ja: 'XV 悪魔' },
        lesson: {
          en: 'The Master Key is Shadow Integration: Break free from self-imposed illusions, addictions, and limiting fears.',
          my: 'အဓိက သော့ချက်မှာ စိတ်စွဲလမ်းမှုမှ လွတ်မြောက်ခြင်း ဖြစ်သည် — မိမိကိုယ်ကို ပိတ်လှောင်ထားသော ကြောက်ရွံ့မှုများကို ချိုးဖျက်ပါ။',
          ja: '支配的な霊的教訓は【影の統合と執着の打破】。自らを縛る恐れや幻想の鎖を解き放ってください。'
        }
      },
      16: {
        id: 'tower',
        name: { en: 'XVI The Tower', my: 'XVI မျှော်စင်ပြိုလဲခြင်း (The Tower)', ja: 'XVI 塔' },
        lesson: {
          en: 'The Master Key is Awakening Through Truth: False foundations collapse so authentic truth can rebuild.',
          my: 'အဓိက သော့ချက်မှာ အမှန်တရားကို မျက်ဝါးထင်ထင် တွေ့မြင်ခြင်း ဖြစ်သည် — မခိုင်မာသော အတုအယောင်များ ပျက်စီးသွားခြင်း ဖြစ်သည်။',
          ja: '支配的な霊的教訓は【稲妻の如き目覚め】。偽りの土台が崩れ、純粋な真実の上に再建が始まります。'
        }
      },
      17: {
        id: 'star',
        name: { en: 'XVII The Star', my: 'XVII ကြယ်တာရာ (The Star)', ja: 'XVII 星' },
        lesson: {
          en: 'The Master Key is Sacred Hope & Renewal: Trust the guiding light of the cosmos; healing is unfolding.',
          my: 'အဓိက သော့ချက်မှာ မျှော်လင့်ချက်နှင့် ကုစားခြင်း ဖြစ်သည် — ကံကြမ္မာ၏ အလင်းရောင်ကို ယုံကြည်စွာ လျှောက်လှမ်းပါ။',
          ja: '支配的な霊的教訓は【希望と霊的再生】。宇宙の導きを信じてください。癒やしは着実に進んでいます。'
        }
      },
      18: {
        id: 'moon',
        name: { en: 'XVIII The Moon', my: 'XVIII လမင်း (The Moon)', ja: 'XVIII 月' },
        lesson: {
          en: 'The Master Key is Navigating the Unknown: Trust intuition over illusions and let the subconscious clear.',
          my: 'အဓိက သော့ချက်မှာ မရေရာမှုကြားမှ အသိဉာဏ် ဖြစ်သည် — အမှားနှင့် အမှန်ကို အတွင်းစိတ်ဖြင့် ခွဲခြားသိမြင်ပါ။',
          ja: '支配的な霊的教訓は【幻影の超越】。不安に惑わされず、自らの直感の羅針盤に従ってください。'
        }
      },
      19: {
        id: 'sun',
        name: { en: 'XIX The Sun', my: 'XIX နေမင်း (The Sun)', ja: 'XIX 太陽' },
        lesson: {
          en: 'The Master Key is Radiant Vitality: Live in authenticity, joy, and unobstructed celebration of life.',
          my: 'အဓိက သော့ချက်မှာ ရွှင်လန်းတောက်ပမှု ဖြစ်သည် — ပွင့်လင်းရိုးသားမှုနှင့် ပျော်ရွှင်မှုတို့က အောင်မြင်ခြင်းကို ဆောင်ကြဉ်းပေးမည်။',
          ja: '支配的な霊的教訓は【無邪気な歓喜と生命力】。ありのままの自分を輝かせ、豊かさを謳歌してください。'
        }
      },
      20: {
        id: 'judgement',
        name: { en: 'XX Judgement', my: 'XX စီရင်ဆုံးဖြတ်ခြင်း (Judgement)', ja: 'XX 審判' },
        lesson: {
          en: 'The Master Key is Higher Calling: Step into your elevated identity; past karma is forgiven and transformed.',
          my: 'အဓိက သော့ချက်မှာ ဘဝရည်မှန်းချက်သစ် နိုးထခြင်း ဖြစ်သည် — အတိတ်ကို ခွင့်လွှတ်ပြီး မြင့်မြတ်သော လမ်းသစ်သို့ လျှောက်လှမ်းပါ။',
          ja: '支配的な霊的教訓は【魂の覚醒と新生】。過去のカルマは清算され、高次の使命へと招かれています。'
        }
      },
      21: {
        id: 'world',
        name: { en: 'XXI The World', my: 'XXI ကမ္ဘာလောက (The World)', ja: 'XXI 世界' },
        lesson: {
          en: 'The Master Key is Wholeness & Completion: A significant cycle culminates triumphantly. Step into your wholeness.',
          my: 'အဓိက သော့ချက်မှာ ပြည့်စုံခြင်းနှင့် အောင်မြင်စွာ ပြီးမြောက်ခြင်း ဖြစ်သည် — ဘဝစက်ဝန်းတစ်ခု အောင်မြင်စွာ ပြီးဆုံးပါပြီ။',
          ja: '支配的な霊的教訓は【大成と完全なる統合】。ひとつの偉大なサイクルが完結し、大いなる統合を迎えます。'
        }
      },
      22: {
        id: 'fool',
        name: { en: '0 The Fool', my: '0 လူမိုက် (The Fool)', ja: '0 愚者' },
        lesson: {
          en: 'The Master Key is Leap of Faith: Step fearlessly into the fresh unknown with pure trust in the sacred universe.',
          my: 'အဓိက သော့ချက်မှာ ယုံကြည်စွာ စွန့်စားခြင်း ဖြစ်သည် — ကြောက်ရွံ့မှုကင်းစွာဖြင့် စွန့်စားမှုအသစ်ကို ရဲရဲဝံ့ဝံ့ စတင်ပါ။',
          ja: '支配的な霊的教訓は【純粋なる未知への飛躍】。恐れを手放し、無垢な心で新たな冒険へ踏み出してください。'
        }
      }
    };

    const target = MAJOR_CARDS[reduced] || MAJOR_CARDS[1];

    return {
      number: reduced,
      cardId: target.id,
      cardName: target.name,
      lesson: target.lesson
    };
  }

  /**
   * 3b. Calculate Extended Primary & Shadow Quintessence
   */
  public static calculateExtendedQuintessence(drawnCards: DrawnCard[], lang: Language): {
    number: number;
    cardId: string;
    cardName: { en: string; my: string; ja: string };
    lesson: { en: string; my: string; ja: string };
    shadowNumber: number;
    shadowCardId: string;
    shadowCardName: { en: string; my: string; ja: string };
    shadowLesson: { en: string; my: string; ja: string };
  } {
    const primary = this.calculateQuintessence(drawnCards, lang);
    const shadowNum = (22 - primary.number) % 22 || 9;
    const shadowTarget = this.calculateQuintessence([{ card: { number: shadowNum, arcana: 'major' } as any, isReversed: false, position: {} as any, revealed: true }], lang);

    return {
      number: primary.number,
      cardId: primary.cardId,
      cardName: primary.cardName,
      lesson: primary.lesson,
      shadowNumber: shadowNum,
      shadowCardId: shadowTarget.cardId,
      shadowCardName: shadowTarget.cardName,
      shadowLesson: {
        en: `Shadow Reflection: Unconscious resistance or blindspots relating to ${shadowTarget.cardName.en}. Integrate this to unlock full manifestation.`,
        my: `မသိစိတ်အရိပ်ရောင်ပြန်ဟပ်မှု: ${shadowTarget.cardName.my} တွင် ပိတ်ဆို့နေသော အတွင်းစိတ်များကို သတိပြု၍ ပြုပြင်ကုစားပါ။`,
        ja: `影の統合課題：【${shadowTarget.cardName.ja}】に関連する無意識の抵抗や死角。これを統合することで真の自己実現が解放されます。`
      }
    };
  }

  /**
   * 4. Calculate Polarity and Certainty Gauge (Yes / No / Maybe)
   */
  public static calculatePolarityGauge(drawnCards: DrawnCard[]): PolarityGaugeResult {
    let score = 50; // Neutral base

    const total = drawnCards.length || 1;
    let uprightCount = 0;
    let majorCount = 0;

    drawnCards.forEach(dc => {
      if (!dc.isReversed) uprightCount++;
      if (dc.card.arcana === 'major') majorCount++;

      // Inherent card energy modifier
      const name = dc.card.name.en.toLowerCase();
      if (/sun|star|world|empress|ace of cups|ace of pentacles|three of cups|six of wands/.test(name)) {
        score += dc.isReversed ? 2 : 12;
      } else if (/tower|devil|death|three of swords|nine of swords|ten of swords|five of pentacles/.test(name)) {
        score -= dc.isReversed ? 4 : 12;
      } else if (/two of cups|four of wands|ten of cups|ten of pentacles/.test(name)) {
        score += dc.isReversed ? 0 : 8;
      } else {
        score += dc.isReversed ? -4 : 6;
      }
    });

    const uprightRatio = Math.round((uprightCount / total) * 100);
    const finalScore = Math.max(12, Math.min(96, Math.round(score)));

    let verdict = {
      en: 'Favorable (Yes)',
      my: 'အလားအလာ ကောင်းမွန်သည် (သေချာသော အဖြေ - Yes)',
      ja: '好転の兆し（肯定的な流れ・Yes）'
    };

    let explanation = {
      en: 'The cosmic currents strongly favor your intention. Move forward with mindful conviction.',
      my: 'စကြဝဠာ၏ စွမ်းအင်စီးဆင်းမှုက သင့်ဘက်တွင် ရှိနေပါသည်။ ယုံကြည်မှုအပြည့်ဖြင့် ရှေ့ဆက်ပါ။',
      ja: '運命の流れは強くあなたの願いを後押ししています。確信を持って前進してください。'
    };

    if (finalScore >= 75) {
      verdict = {
        en: 'Resounding & Radiant Yes',
        my: 'အထူး အောင်မြင်မည့် အဖြေ (Resounding Yes ★★★)',
        ja: '大いなる実り（力強い肯定・Resounding Yes）'
      };
      explanation = {
        en: 'The spiritual forces are extraordinarily aligned. Success and fruitful fruition are clearly indicated.',
        my: 'စကြဝဠာစွမ်းအားများ ထူးကဲစွာ ညီညွတ်နေပါသည်။ အောင်မြင်မှုနှင့် အသီးအပွင့်များ ရရှိမည်မှာ သေချာသလောက် ရှိပါသည်။',
        ja: '霊的な力が完璧に整っています。大いなる成功と収穫が約束されています。'
      };
    } else if (finalScore <= 40) {
      verdict = {
        en: 'Caution / Internal Realignment (No for now)',
        my: 'သတိပြုရန် လိုအပ်သည် (လောလောဆယ် ဆိုင်းငံ့ပါ - Caution / No)',
        ja: '再考の時（時期尚早・Caution / No）'
      };
      explanation = {
        en: 'Obstacles or illusions require resolution before progressing. Step back, re-evaluate, and do not rush.',
        my: 'ရှေ့သို့ မတိုးမီ အတားအဆီးများနှင့် အတွေးအမြင်များကို အရင်ဆုံး ရှင်းလင်းပါ။ အလျင်စလို မပြုလုပ်ပါနှင့်။',
        ja: '進展の前に解決すべき課題や幻想があります。今は焦らず、内面の整理と再評価を行ってください。'
      };
    } else {
      verdict = {
        en: 'Equilibrium (Depends on Your Choices)',
        my: 'မျှတနေသော အခြေအနေ (မိမိ၏ ရွေးချယ်မှုအပေါ် တည်မှီနေသည်)',
        ja: '調和と分かれ道（あなたの選択次第）'
      };
      explanation = {
        en: 'The scale is balanced. Your consistent daily actions will decisively determine the final outcome.',
        my: 'ချိန်ခွင်လျှာသည် ညီမျှနေပါသည်။ သင်၏ နေ့စဉ် မှန်ကန်သော ဆုံးဖြတ်ချက်များက နောက်ဆုံးရလဒ်ကို အဆုံးအဖြတ်ပေးပါလိမ့်မည်။',
        ja: '天秤は釣り合っています。あなた自身の日々の決断と行動が、最終的な結末を決定づけます。'
      };
    }

    return {
      score: finalScore,
      verdict,
      explanation,
      uprightRatio,
      majorCount
    };
  }

  /**
   * 5. Multi-Card Esoteric Synergy & Comparison Engine
   * Compares 2 or 3 arbitrary cards across Elemental Alchemy, Numerology, and Archetypal Interlocking
   */
  public static compareCards(cards: TarotCard[], lang: Language): {
    chemistryScore: number;
    elementalRelation: {
      title: { en: string; my: string; ja: string };
      description: { en: string; my: string; ja: string };
      type: 'harmonic' | 'tension' | 'support' | 'neutral';
    };
    compositeArchetype: {
      key: number;
      name: { en: string; my: string; ja: string };
      meaning: { en: string; my: string; ja: string };
    };
    interlockingInsight: { en: string; my: string; ja: string };
    advice: { en: string; my: string; ja: string };
  } {
    if (cards.length === 0) {
      return {
        chemistryScore: 50,
        elementalRelation: {
          title: { en: 'No Cards Selected', my: 'ကတ်များ မရွေးချယ်ရသေးပါ', ja: 'カード未選択' },
          description: { en: 'Select 2 or 3 cards to evaluate synergy.', my: 'စွမ်းအင်နှိုင်းယှဉ်ရန် ကတ် ၂ သို့မဟုတ် ၃ ခု ရွေးချယ်ပါ။', ja: '比較するカードを2〜3枚選択してください。' },
          type: 'neutral'
        },
        compositeArchetype: {
          key: 0,
          name: { en: 'The Fool', my: 'The Fool (အစပြုခြင်း)', ja: '愚者' },
          meaning: { en: 'The infinite unmanifest void.', my: 'အဆုံးမဲ့ ဖြစ်နိုင်စွမ်းများ။', ja: '無限の可能性。' }
        },
        interlockingInsight: { en: '', my: '', ja: '' },
        advice: { en: '', my: '', ja: '' }
      };
    }

    // 1. Elemental Alchemy
    const elements = cards.map(c => c.element || (c.suit === 'wands' ? 'Fire' : c.suit === 'cups' ? 'Water' : c.suit === 'swords' ? 'Air' : 'Earth'));
    const hasFire = elements.includes('Fire');
    const hasWater = elements.includes('Water');
    const hasAir = elements.includes('Air');
    const hasEarth = elements.includes('Earth');

    let relationType: 'harmonic' | 'tension' | 'support' | 'neutral' = 'neutral';
    let elTitle = { en: 'Harmonic Elemental Dialogue', my: 'ဓာတ်များ အပြန်အလှန် လိုက်ဖက်မှု', ja: '元素の調和的対話' };
    let elDesc = {
      en: 'The elemental essences flow in balance without direct contradiction.',
      my: 'ဓာတ်စွမ်းအင်များသည် ပဋိပက္ခမရှိဘဲ ဟန်ချက်ညီညီ ပေါင်းစပ်နေပါသည်။',
      ja: 'エレメント同士が対立することなく、バランスを保って調和しています。'
    };

    if (hasFire && hasAir) {
      relationType = 'harmonic';
      elTitle = { en: '✦ Active Ignition (Fire & Air Synergy)', my: '✦ တောက်ပသော မီးနှင့် လေ ပေါင်းစပ်မှု', ja: '✦ 燃焼の相乗（火と風の共鳴）' };
      elDesc = {
        en: 'Air feeds Fire: ideas quickly spark into dynamic willpower, creative inspiration, and bold momentum.',
        my: 'လေက မီးကို တောက်လောင်စေသကဲ့သို့ အတွေးအမြင်များသည် စိတ်အားထက်သန်မှုနှင့် သန္နိဋ္ဌာန်အဖြစ် လျင်မြန်စွာ ပြောင်းလဲစေသည်။',
        ja: '風が火を燃え上がらせるように、知性と情熱が結合して強力な推進力を生み出します。'
      };
    } else if (hasWater && hasEarth) {
      relationType = 'support';
      elTitle = { en: '✦ Fertile Manifestation (Water & Earth Support)', my: '✦ မြေနှင့် ရေ အကျိုးပြု ပေါင်းစပ်မှု', ja: '✦ 豊穣の具現化（水と地の育成）' };
      elDesc = {
        en: 'Water nourishes Earth: intuition, emotional depth, and devotion take physical root in lasting material reality.',
        my: 'ရေက မြေကို မြေဩဇာကောင်းစေသကဲ့သို့ နှလုံးသားခံစားချက်များသည် ခိုင်မာသော လက်တွေ့ဘဝအောင်မြင်မှုအဖြစ် အမြစ်တွယ်သည်။',
        ja: '水が大地を潤すように、感情と直感が確かな現実基盤と成果を結びつけます。'
      };
    } else if (hasFire && hasWater) {
      relationType = 'tension';
      elTitle = { en: '✦ Steam & Transmutation (Fire & Water Friction)', my: '✦ မီးနှင့် ရေ ပြင်းထန်သော စွမ်းအင် ပွတ်တိုက်မှု', ja: '✦ 蒸気と変容（火と水の劇的緊張）' };
      elDesc = {
        en: 'Dynamic tension between action and feeling: requires emotional maturity so fiery impulse does not evaporate deep bonds.',
        my: 'လုပ်ဆောင်ချက်နှင့် စိတ်ခံစားမှုကြား ပြင်းထန်သော တင်းမာမှုရှိသည်။ စိတ်ရှည်မှုဖြင့် ထိန်းညှိရန် လိုအပ်သည်။',
        ja: '情熱と感情の激しいせめぎ合い。衝動で絆を蒸発させない成熟した制御が求められます。'
      };
    } else if (hasAir && hasEarth) {
      relationType = 'tension';
      elTitle = { en: '✦ Architecture & Logic (Air & Earth Duality)', my: '✦ လေနှင့် မြေ သဘာဝနှစ်မျိုး ပေါင်းစပ်မှု', ja: '✦ 理論と実用（風と地の構築）' };
      elDesc = {
        en: 'Abstract thoughts meeting grounded reality: brilliant planning requires practical execution to avoid paralysis.',
        my: 'အတွေးအခေါ်များနှင့် လက်တွေ့ဘဝတို့ ချိတ်ဆက်နေသည်။ အကြံဉာဏ်များကို လက်တွေ့အကောင်အထည်ဖော်ရန် လိုအပ်သည်။',
        ja: '理想と現実の交差点。優れた構想を行動に移すための着実な設計が鍵となります。'
      };
    }

    // 2. Numerology Composite Archetype
    const cardNums = cards.map(c => {
      const val = parseInt(c.id.replace(/\D/g, ''), 10);
      return isNaN(val) ? 1 : val;
    });
    const sum = cardNums.reduce((a, b) => a + b, 0);
    const reducedKey = sum % 22;

    const majorNames: Record<number, { name: { en: string; my: string; ja: string }; meaning: { en: string; my: string; ja: string } }> = {
      0: { name: { en: '0 The Fool', my: '0 The Fool (အစပြုခြင်း)', ja: '0 愚者' }, meaning: { en: 'Pure potential, leap of faith, unbounded innocence', my: 'အစပြုခြင်းသစ်နှင့် အဆုံးမဲ့ ဖြစ်နိုင်စွမ်း', ja: '無限の可能性と直感的な跳躍' } },
      1: { name: { en: 'I The Magician', my: 'I The Magician (ဖန်တီးရှင်)', ja: 'I 魔術師' }, meaning: { en: 'Conscious manifestation, resource mastery', my: 'ဉာဏ်ပညာဖြင့် လက်တွေ့ဖန်တီးနိုင်စွမ်း', ja: '意識的な創造と万物の掌握' } },
      2: { name: { en: 'II The High Priestess', my: 'II The High Priestess (မယ်တော်)', ja: 'II 女教皇' }, meaning: { en: 'Esoteric intuition, subconscious wisdom', my: 'နက်နဲသော အတွင်းစိတ်အာရုံနှင့် လျှို့ဝှက်ဉာဏ်', ja: '深層の直感と神秘の記憶' } },
      3: { name: { en: 'III The Empress', my: 'III The Empress (ဧကရီ)', ja: 'III 女帝' }, meaning: { en: 'Abundant fertility, creative blossoming', my: 'ကြွယ်ဝပြည့်စုံခြင်းနှင့် အနုပညာဖန်တီးမှု', ja: '豊穣、美、母性的な愛の結実' } },
      4: { name: { en: 'IV The Emperor', my: 'IV The Emperor (ဧကရာဇ်)', ja: 'IV 皇帝' }, meaning: { en: 'Sovereign authority, order, worldly structure', my: 'ခေါင်းဆောင်မှုနှင့် စနစ်တကျ တည်ဆောက်ခြင်း', ja: '不動の秩序、統率力、現実支配' } },
      5: { name: { en: 'V The Hierophant', my: 'V The Hierophant (ဆရာ)', ja: 'V 法王' }, meaning: { en: 'Sacred tradition, spiritual mentorship', my: 'ဓလေ့ထုံးတမ်းနှင့် လမ်းညွှန်မှု', ja: '神聖な伝統、霊的教導、真理の伝承' } },
      6: { name: { en: 'VI The Lovers', my: 'VI The Lovers (စုံတွဲ)', ja: 'VI 恋人たち' }, meaning: { en: 'Soulmate union, deep ethical choice', my: 'နှလုံးသားချင်း ပေါင်းစပ်မှုနှင့် မှန်ကန်သော ရွေးချယ်မှု', ja: '魂の統合、愛の選択、真の調和' } },
      7: { name: { en: 'VII The Chariot', my: 'VII The Chariot (စစ်ရထား)', ja: 'VII 戦車' }, meaning: { en: 'Victorious will, overcoming opposing forces', my: 'ဇွဲလုံ့လဖြင့် အတားအဆီးများကို အနိုင်ယူကျော်လွှားခြင်း', ja: '不屈の意志、勝利への前進、二元性の克服' } },
      8: { name: { en: 'VIII Strength', my: 'VIII Strength (ခွန်အား)', ja: 'VIII 力' }, meaning: { en: 'Gentle mastery of primal passion', my: 'နူးညံ့မှုဖြင့် စိတ်ရိုင်းများကို ထိန်းချုပ်နိုင်ခြင်း', ja: '内なる勇気、愛による本能の昇華' } },
      9: { name: { en: 'IX The Hermit', my: 'IX The Hermit (ရသေ့)', ja: 'IX 隠者' }, meaning: { en: 'Solitary contemplation, lantern of inner truth', my: 'အတွင်းစိတ်အမှန်တရားကို တစ်ကိုယ်တည်း ရှာဖွေခြင်း', ja: '孤独な内省、内なる光による導き' } },
      10: { name: { en: 'X Wheel of Fortune', my: 'X Wheel of Fortune (ကံကြမ္မာစက်ဝန်း)', ja: 'X 運命の輪' }, meaning: { en: 'Karmic cycle, opportune turning point', my: 'ကံကြမ္မာအလှည့်အပြောင်းနှင့် အခွင့်အလမ်း', ja: 'カルマの転換、幸運の周期' } },
      11: { name: { en: 'XI Justice', my: 'XI Justice (တရားမျှတမှု)', ja: 'XI 正義' }, meaning: { en: 'Karmic equilibrium, objective truth', my: 'တရားမျှတခြင်းနှင့် အမှန်တရားစစ်စစ်', ja: '客観的真理、公正な因果、均衡' } },
      12: { name: { en: 'XII The Hanged Man', my: 'XII The Hanged Man (စွန့်လွှတ်သူ)', ja: 'XII 吊るされた男' }, meaning: { en: 'Spiritual surrender, enlightened perspective', my: 'အနစ်နာခံခြင်းနှင့် အမြင်သစ်ရရှိခြင်း', ja: '自己放棄による覚醒、逆転の視点' } },
      13: { name: { en: 'XIII Death', my: 'XIII Death (အသွင်ပြောင်းခြင်း)', ja: 'XIII 死神' }, meaning: { en: 'Profound transition, clearing the old', my: 'အဟောင်းများ ကုန်ဆုံးပြီး အသစ်ဖြစ်တည်ခြင်း', ja: '大いなる変容、過去の終焉と再生' } },
      14: { name: { en: 'XIV Temperance', my: 'XIV Temperance (အချိုးကျပေါင်းစပ်မှု)', ja: 'XIV 節制' }, meaning: { en: 'Alchemical alchemy, emotional balance', my: 'အလယ်အလတ်လမ်းစဉ်နှင့် သဟဇာတဖြစ်မှု', ja: '錬金術的統合、中庸、聖なる調和' } },
      15: { name: { en: 'XV The Devil', my: 'XV The Devil (အရိပ်မာရ်နတ်)', ja: 'XV 悪魔' }, meaning: { en: 'Shadow attachments, liberating from illusions', my: 'စွဲလမ်းမှုများကို သိမြင်ကျော်လွှားခြင်း', ja: '影の執着、物質の束縛からの解放' } },
      16: { name: { en: 'XVI The Tower', my: 'XVI The Tower (ရဲတိုက်ပြိုလဲခြင်း)', ja: 'XVI 塔' }, meaning: { en: 'Sudden awakening, shattering false edifices', my: 'မှားယွင်းသော အရာများ ရုတ်တရက် ပြိုလဲပြီး အလင်းရရှိခြင်း', ja: '稲妻による幻影の破壊、劇的覚醒' } },
      17: { name: { en: 'XVII The Star', my: 'XVII The Star (ကြယ်ပွင့်)', ja: 'XVII 星' }, meaning: { en: 'Divine hope, inspiration, crystal clarity', my: 'မျှော်လင့်ချက်အလင်းနှင့် စိတ်အေးချမ်းမှု', ja: '大いなる希望、霊感、澄み切った導き' } },
      18: { name: { en: 'XVIII The Moon', my: 'XVIII The Moon (လမင်း)', ja: 'XVIII 月' }, meaning: { en: 'Psychic depth, navigating illusions and dreams', my: 'စိတ်ဝိညာဉ်ထိုးထွင်းသိမြင်မှုနှင့် အိပ်မက်', ja: '無意識の深淵、直感の試練' } },
      19: { name: { en: 'XIX The Sun', my: 'XIX The Sun (နေမင်း)', ja: 'XIX 太陽' }, meaning: { en: 'Radiant success, vitality, joyful celebration', my: 'အောင်မြင်မှုအလင်း၊ ပျော်ရွှင်မှုနှင့် ကျန်းမာကြံ့ခိုင်ခြင်း', ja: '至高の光、生命の祝祭、完全な成就' } },
      20: { name: { en: 'XX Judgement', my: 'XX Judgement (နိုးထခြင်း)', ja: 'XX 審判' }, meaning: { en: 'Higher calling, absolute spiritual rebirth', my: 'ဘဝ၏ မွန်မြတ်သော ခေါ်ယူသံနှင့် နိုးထခြင်း', ja: '高次の使命への覚醒、究極の再生' } },
      21: { name: { en: 'XXI The World', my: 'XXI The World (ကမ္ဘာလောက)', ja: 'XXI 世界' }, meaning: { en: 'Wholeness, cosmic completion, master sovereignty', my: 'ပြည့်စုံခြင်းနှင့် စကြဝဠာနှင့် တစ်သားတည်းဖြစ်တည်ခြင်း', ja: '完全なる統合、大団円、究極の調和' } }
    };

    const compositeArch = majorNames[reducedKey] || majorNames[0];

    // 3. Interlocking Insight & Chemistry Calculation
    let chemistry = 70;
    if (relationType === 'harmonic' || relationType === 'support') chemistry += 18;
    if (relationType === 'tension') chemistry -= 12;
    if (cards.length === 3) chemistry += 5;
    chemistry = Math.max(30, Math.min(98, chemistry));

    const cardNames = cards.map(c => c.name[lang] || c.name.en).join(' + ');

    const interlockingInsight = {
      en: `When ${cardNames} combine, their shared energy synthesizes into the master theme of ${compositeArch.name.en}. ${compositeArch.meaning.en}.`,
      my: `${cardNames} တို့ တွဲဖက်ပေါင်းစပ်လိုက်သောအခါ ${compositeArch.name.my} ၏ စွမ်းအင်အဖြစ် ပြောင်းလဲစီးဆင်းသွားပါသည်။ ${compositeArch.meaning.my}။`,
      ja: `【${cardNames}】が重なり合うことで、エネルギーは【${compositeArch.name.ja}】のテーマへと昇華します。${compositeArch.meaning.ja}。`
    };

    const advice = {
      en: `Honor the distinct message of each card while focusing on the overarching composite quintessence of ${compositeArch.name.en}.`,
      my: `ကတ်တစ်ခုချင်းစီ၏ သတိပေးချက်ကို သတိချပ်ပြီး ${compositeArch.name.my} ၏ စုစည်းစွမ်းအင်ကို အခြေပြု၍ ဆုံးဖြတ်ပါ။`,
      ja: `各カードの固有の啓示を尊重しつつ、統合された【${compositeArch.name.ja}】の智慧を中心軸として行動してください。`
    };

    return {
      chemistryScore: chemistry,
      elementalRelation: {
        title: elTitle,
        description: elDesc,
        type: relationType
      },
      compositeArchetype: {
        key: reducedKey,
        name: compositeArch.name,
        meaning: compositeArch.meaning
      },
      interlockingInsight,
      advice
    };
  }
}

