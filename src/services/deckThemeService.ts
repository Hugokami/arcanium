import { LocalizedText } from '../types/tarot';

export interface DeckTheme {
  id: string;
  name: LocalizedText;
  era: string;
  description: LocalizedText;
  image: string;
  borderColor: string;
  glowColor: string;
}

export const DECK_THEMES: DeckTheme[] = [
  {
    id: 'tudor_rose_1909',
    name: { en: '1909 Tudor Rose & Lilies', my: '၁၉၀၉ မူရင်း နှင်းဆီနှင့် နှင်းပန်း (Pamela Colman Smith)', ja: '1909年 伝統チューダーローズ＆リリー' },
    era: 'Original Rider-Waite 1909',
    description: { en: 'The authentic original card back drawn by Pamela Colman Smith under Arthur Edward Waite\'s direction.', my: 'အေအီးဝိတ်၏ လမ်းညွှန်မှုဖြင့် Pamela Colman Smith ရေးဆွဲခဲ့သော ၁၉၀၉ မူရင်းဖဲချပ်ကျောဘက်။', ja: 'パメラ・コールマン・スミスとA.E.ウェイトによる1909年公認の歴史的カードバック。' },
    image: '/cards/card-back.png',
    borderColor: '#d4af37',
    glowColor: 'rgba(212, 175, 55, 0.4)'
  },
  {
    id: 'gold_astrolabe',
    name: { en: '24K Celestial Astrolabe', my: '၂၄ကေ ရွှေရောင် နက္ခတ်ကြယ်တာရာ ကွန်ပါ', ja: '24K 黄金天球アストロラーベ' },
    era: 'Hermetic Golden Dawn',
    description: { en: 'Engraved 24-karat gold planetary gearwork on midnight obsidian velvet.', my: 'နက်မှောင်သော ကတ္တီပါပေါ်တွင် ရွှေရောင်ဂြိုဟ်နက္ခတ် စက်ဝိုင်းများ ရေးထိုးထားသော ဒီဇိုင်း။', ja: '黒曜石の夜空に刻まれた24K純金の天体運行歯車と星盤。' },
    image: '/cards/card-back.png',
    borderColor: '#fbbf24',
    glowColor: 'rgba(251, 191, 36, 0.5)'
  },
  {
    id: 'midnight_cosmos',
    name: { en: 'Midnight Velvet Cosmos', my: 'သန်းခေါင်ယံ စကြဝဠာ ကတ္တီပါ', ja: '真夜中のベルベット・コスモス' },
    era: 'Celestial Astral Matrix',
    description: { en: 'Deep indigo starfield woven with golden constellations and planetary seals.', my: 'ရွှေရောင်ကြယ်တာရာများနှင့် ဂြိုဟ်တံဆိပ်တော်များ ပါဝင်သော စကြဝဠာဒီဇိုင်း။', ja: '深淵なる藍色の星界と金色の黄道十二宮の聖印が織りなす宇宙。' },
    image: '/cards/card-back.png',
    borderColor: '#818cf8',
    glowColor: 'rgba(129, 140, 248, 0.4)'
  },
  {
    id: 'metatrons_cube',
    name: { en: 'Sacred Metatron\'s Cube', my: 'မေတ္တာထရွန် သန့်ရှင်းသော ဂျီသြမေတြီ', ja: 'メタトロン・神聖幾何学キューブ' },
    era: 'Sacred Geometry',
    description: { en: 'Holographic sacred geometry channeling universal harmonic resonance and light.', my: 'စကြဝဠာ စွမ်းအင်သဟဇာတဖြစ်မှုကို ကိုယ်စားပြုသော သန့်ရှင်းသော ဂျီဩမေတြီ ဒီဇိုင်း။', ja: '宇宙の全創造原理と高次元波動を宿すメタトロン神聖幾何学の結晶。' },
    image: '/cards/card-back.png',
    borderColor: '#c084fc',
    glowColor: 'rgba(192, 132, 252, 0.5)'
  }
];

const STORAGE_KEY = 'arcanium_deck_theme';

export class DeckThemeService {
  public static getSelectedTheme(): DeckTheme {
    try {
      const savedId = localStorage.getItem(STORAGE_KEY);
      if (savedId) {
        const found = DECK_THEMES.find(t => t.id === savedId);
        if (found) return found;
      }
    } catch (e) {
      // ignore localStorage errors
    }
    return DECK_THEMES[0];
  }

  public static setSelectedTheme(themeId: string): void {
    try {
      localStorage.setItem(STORAGE_KEY, themeId);
    } catch (e) {
      // ignore
    }
  }
}
