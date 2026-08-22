import { LocalizedText } from '../types/tarot';

export interface CardEsotericData {
  hebrewLetter: LocalizedText;
  kabbalahTreeOfLife: LocalizedText;
  goldenDawnTitle: LocalizedText;
  decanateAstrology: LocalizedText;
  waiteOriginalKey: LocalizedText;
  chakraResonance: LocalizedText;
  timingSeason: LocalizedText;
  traditionalOmens?: LocalizedText;
}

export class EsotericCorrespondenceService {
  private static CORRESPONDENCES: Record<string, Partial<CardEsotericData>> = {
    // ================= MAJOR ARCANA =================
    fool: {
      hebrewLetter: { en: 'Aleph (א) — The Breath of Spirit', my: 'အလပ်ဖ် (Aleph א) — ဝိညာဉ်တော်၏ အသက်ရှူသံ', ja: 'アレフ（א）— 霊気の息吹' },
      kabbalahTreeOfLife: { en: 'Path 11: Kether ↔ Chokmah (The Scintillating Intelligence)', my: 'လမ်းကြောင်း ၁၁: ကီသာ (Kether) မှ ချိုမာ (Chokmah) သို့', ja: '第11の小径：ケテル ↔ コクマー（電光の知性）' },
      goldenDawnTitle: { en: 'The Spirit of Aether', my: 'အီသာဝိညာဉ်တော် (The Spirit of Aether)', ja: 'エーテルの霊' },
      decanateAstrology: { en: 'Element of Air / Planet Uranus', my: 'လေဓာတ် / ယူရေးနပ်စ်ဂြိုဟ်', ja: '風のエレメント / 天王星' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice. He is the spirit in search of experience. He signifies the divine breath." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "မြေကြီး၏ နှောင်ဖွဲ့မှုများ သူ့ကို မတားဆီးနိုင်သကဲ့သို့ ချောက်ကမ်းပါးထိပ်တွင် ရဲဝံ့စွာ ခြေလှမ်းနေသော လူငယ်။ သူသည် ဝိညာဉ်ရေးရာ အတွေ့အကြုံသစ်ကို ရှာဖွေနေသော နတ်ဘုရားတို့၏ အသက်ရှူသံ ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「大地とその束縛を軽やかに超越し、華麗な衣装を纏った若者が断崖の縁に立つ。彼は経験を求めて旅立つ純粋な魂であり、神聖なる息吹を象徴する。」'
      },
      chakraResonance: { en: 'Sahasrara (Crown Chakra)', my: 'သဟသြာရ (ဦးထိပ်စွမ်းအင်ဗဟို)', ja: '第7チャクラ（クラウン）' },
      timingSeason: { en: 'Spring Equinox / Instantaneous Cosmic Leap', my: 'နွေဦးကာလ / ချက်ချင်းဖြစ်ပေါ်သော စကြဝဠာစွန့်စားမှု', ja: '春分点 / 瞬時の跳躍' }
    },
    magician: {
      hebrewLetter: { en: 'Beth (ב) — The House / Manifestation', my: 'ဘက်သ် (Beth ב) — တည်ဆောက်ရာ အိမ်', ja: 'ベート（ב）— 家・顕現' },
      kabbalahTreeOfLife: { en: 'Path 12: Kether ↔ Binah (The Transparent Intelligence)', my: 'လမ်းကြောင်း ၁၂: ကီသာ (Kether) မှ ဘီနာ (Binah) သို့', ja: '第12の小径：ケテル ↔ ビナー（透明なる知性）' },
      goldenDawnTitle: { en: 'The Magus of Power', my: 'တန်ခိုးတော်ပိုင် မျက်လှည့်ဆရာ (The Magus of Power)', ja: '力の魔術師' },
      decanateAstrology: { en: 'Planet Mercury (Hermes/Thoth)', my: 'မာကျူရီ (ဗုဒ္ဓဟူးဂြိုဟ်)', ja: '水星（ヘルメス・トート）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "In his right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign signifies the descent of grace, drawn from things above and derived to things below: As Above, So Below." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ညာလက်က ကောင်းကင်သို့ လှံတံကို မြှောက်ထားပြီး၊ ဘယ်လက်က မြေကြီးသို့ ညွှန်ပြနေသည်။ အထက်ကောင်းကင်ဘုံမှ မင်္ဂလာစွမ်းအင်ကို အောက်မြေပြင်သို့ စီးဆင်းစေခြင်း (As Above, So Below) ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「右手に掲げた杖は天を指し、左手は地を指す。上なるものの恩寵を引き出し、下なるものへと導く神秘の極意：上なるものの如く、下なるものも然り。」'
      },
      chakraResonance: { en: 'Vishuddha (Throat Chakra) & Ajna (Third Eye)', my: 'ဝိသုဒ္ဓိ (လည်ချောင်း) နှင့် အာညာ (မျက်ခုံးနှစ်ခုကြား)', ja: '第5チャクラ（喉）＆ 第6チャクラ（第三の目）' },
      timingSeason: { en: 'Wednesday / Mercury Retrograde Direct Transits', my: 'ဗုဒ္ဓဟူးဂြိုဟ် အလှည့်အပြောင်း ကာလ', ja: '水曜日 / 水星順行期' }
    },
    high_priestess: {
      hebrewLetter: { en: 'Gimel (ג) — The Camel / Spiritual Bridge', my: 'ဂီမယ် (Gimel ג) — ဝိညာဉ်ရေးရာ ပေါင်းကူးတံတား', ja: 'ギーメル（ג）— 魂の架け橋' },
      kabbalahTreeOfLife: { en: 'Path 13: Kether ↔ Tiphareth (The Uniting Intelligence)', my: 'လမ်းကြောင်း ၁၃: ကီသာ (Kether) မှ တီဖာရက်သ် (Tiphareth) သို့', ja: '第13の小径：ケテル ↔ ティファレト（統合の知性）' },
      goldenDawnTitle: { en: 'Priestess of the Silver Star', my: 'ငွေရောင်ကြယ်တာရာ၏ ဆရာမ (Priestess of the Silver Star)', ja: '銀星の女司祭' },
      decanateAstrology: { en: 'The Moon (Lunar Mystery & Intuition)', my: 'လမင်း (စန္ဒြာဂြိုဟ် / နက်ရှိုင်းသော စိတ်အာရုံ)', ja: '月（直感と深層無意識）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "She has the lunar crescent at her feet and the scroll inscribed with TORA. Seated between the white and black pillars of the mystic Temple—Jachin and Boaz—she is the Indwelling Glory, Shekinah." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ခြေရင်းတွင် လခြမ်းနှင့် လက်ထဲတွင် TORA ကျမ်းလိပ်ကို ကိုင်ဆောင်ထားသည်။ ဗိမာန်တော်၏ အဖြူနှင့် အမည်း တိုင်နှစ်လုံး (Jachin နှင့် Boaz) ကြားတွင် စံပယ်နေသော မြင့်မြတ်သော စိတ်ဝိညာဉ်တော် ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「足元に三日月を置き、手にはTORA（律法）の巻物を抱く。ヤヒンとボアズの白黒の二本柱の間に座す彼女は、神の内在的栄光（シェキナー）そのものである。」'
      },
      chakraResonance: { en: 'Ajna (Third Eye Chakra)', my: 'အာညာ (ဉာဏ်အမြင် စွမ်းအင်ဗဟို)', ja: '第6チャクラ（サードアイ）' },
      timingSeason: { en: 'Full Moon & New Moon Lunar Transitions', my: 'လပြည့်နှင့် လကွယ် ညများ', ja: '新月および満月の夜' }
    },
    empress: {
      hebrewLetter: { en: 'Daleth (ד) — The Door / Universal Womb', my: 'ဒါလတ်သ် (Daleth ד) — စကြဝဠာ သားအိမ်တံခါး', ja: 'ダレット（ד）— 豊穣の扉' },
      kabbalahTreeOfLife: { en: 'Path 14: Chokmah ↔ Binah (The Luminous Intelligence)', my: 'လမ်းကြောင်း ၁၄: ချိုမာ (Chokmah) မှ ဘီနာ (Binah) သို့', ja: '第14の小径：コクマー ↔ ビナー（輝かしき知性）' },
      goldenDawnTitle: { en: 'Daughter of the Mighty Ones', my: 'တန်ခိုးကြီးသူတို့၏ သမီးတော် (Daughter of the Mighty Ones)', ja: '万能なる神々の娘' },
      decanateAstrology: { en: 'Planet Venus (Love, Fertility & Art)', my: 'ဗီးနပ်စ် (သောကြာဂြိုဟ် / အလှတရားနှင့် သာယာဝပြောမှု)', ja: '金星（愛・豊穣・美）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "Her diadem is of twelve stars; the symbol of Venus is on her shield. She is the Earthly Paradise, universal fecundity, and the gate through which all life enters manifest reality." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ခေါင်းပေါ်တွင် ကြယ် ၁၂ လုံး သရဖူဆောင်းထားပြီး ဒိုင်းတွင် သောကြာဂြိုဟ် သင်္ကေတ ပါရှိသည်။ သူမသည် ကမ္ဘာမြေ၏ ပရဒိသုဘုံနှင့် အရာခပ်သိမ်းကို မွေးဖွားပေးသော သာယာဝပြောခြင်း၏ တံခါးပေါက် ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「12の星の冠を戴き、盾には金星の紋章。彼女は地上の楽園であり、万物に命を吹き込む普遍的な豊穣の扉である。」'
      },
      chakraResonance: { en: 'Anahata (Heart Chakra) & Svadhisthana (Sacral)', my: 'အနာဟတ (နှလုံး) နှင့် ဆွာဓိဌာန (ဖန်တီးမှုဗဟို)', ja: '第4チャクラ（ハート）＆ 第2チャクラ（仙骨）' },
      timingSeason: { en: 'Spring Bloom / Taurus & Libra Seasons', my: 'ပန်းပွင့်ဝေဆာသော နွေဦးကာလ', ja: '春の開花期 / 牡牛座・天秤座シーズン' }
    },
    emperor: {
      hebrewLetter: { en: 'Heh (ה) — The Window / Royal Authority', my: 'ဟေး (Heh ה) — ဘုရင့်အာဏာစက် ပြတင်းပေါက်', ja: 'ヘー（ה）— 窓・統治の意志' },
      kabbalahTreeOfLife: { en: 'Path 15: Chokmah ↔ Tiphareth (The Constituting Intelligence)', my: 'လမ်းကြောင်း ၁၅: ချိုမာ (Chokmah) မှ တီဖာရက်သ် (Tiphareth) သို့', ja: '第15の小径：コクマー ↔ ティファレト（建設の知性）' },
      goldenDawnTitle: { en: 'Chief Among the Mighty', my: 'တန်ခိုးကြီးသူတို့၏ ခေါင်းဆောင် (Chief Among the Mighty)', ja: '大いなる力の首長' },
      decanateAstrology: { en: 'Zodiac Sign Aries (The Ram / Mars Force)', my: 'မိဿရာသီ (Aries ♈ / အင်္ဂါဂြိုဟ်စွမ်းအား)', ja: '牡羊座（♈・火星の原動力）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "He is seated on a throne fronted by rams\' heads, bearing the Crux Ansata (Ankh of Life). He represents executive sovereignty, the power of this world, and the lordship of structured thought." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "သိုးထီးခေါင်းများ တပ်ဆင်ထားသော ရာဇပလ္လင်ပေါ်တွင် စံပယ်နေပြီး အသက်၏ အန်ခ် (Ankh) လက်ဝါးကပ်တိုင်ကို ကိုင်ဆောင်ထားသည်။ သူသည် လက်တွေ့လောကကို အုပ်ချုပ်စီမံသော အာဏာစက်နှင့် ခိုင်မာသော စည်းစနစ် ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「牡羊の頭部で飾られた玉座に座し、アンクの杖を握る。彼は現実世界の統治権、揺るぎなき秩序、そして構築された知性の王権を象徴する。」'
      },
      chakraResonance: { en: 'Manipura (Solar Plexus Chakra)', my: 'မဏိပူရ (နေမင်းစွမ်းအားဗဟို)', ja: '第3チャクラ（太陽神経叢）' },
      timingSeason: { en: 'Aries Season (March 21 – April 19)', my: 'မိဿရာသီကာလ (မတ် ၂၁ - ဧပြီ ၁၉)', ja: '牡羊座期（3月21日〜4月19日）' }
    },
    hierophant: {
      hebrewLetter: { en: 'Vav (ו) — The Nail / Sacred Link', my: 'ဗက်ဗ် (Vav ו) — သန့်ရှင်းသော နှောင်ကြိုး', ja: 'ヴァヴ（ו）— 聖なる釘・結合' },
      kabbalahTreeOfLife: { en: 'Path 16: Chokmah ↔ Chesed (The Triumphal Intelligence)', my: 'လမ်းကြောင်း ၁၆: ချိုမာ (Chokmah) မှ ချီဆက်ဒ် (Chesed) သို့', ja: '第16の小径：コクマー ↔ ケセド（凱旋の知性）' },
      goldenDawnTitle: { en: 'Magus of the Eternal Gods', my: 'ထာဝရနတ်ဘုရားတို့၏ ဆရာတော် (Magus of the Eternal)', ja: '永遠なる神々の魔術師' },
      decanateAstrology: { en: 'Zodiac Sign Taurus (The Bull / Earth Wisdom)', my: 'ပြိဿရာသီ (Taurus ♉ / မြေဓာတ်ပညာ)', ja: '牡牛座（♉・大地の知恵）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "He wears the triple crown and gives the ecclesiastical sign of esotericism distinguishing manifest from concealed doctrine. He is the channel of grace belonging to the world of institution." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "သရဖူ ၃ ဆင့်ကို ဆောင်းထားပြီး သာသနာရေးရာ သင်္ကေတဖြင့် တရားဓမ္မကို ဖွင့်ပြသည်။ သူသည် မြင့်မြတ်သော သာသနာနှင့် ဝိညာဉ်ရေးရာ အစဉ်အလာတို့၏ တံခါးမှူး ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「三重の冠を戴き、顕教と密教を分かつ神聖な秘儀の印を結ぶ。彼は聖なる伝統と恩寵の導き手である。」'
      },
      chakraResonance: { en: 'Vishuddha (Throat Chakra)', my: 'ဝိသုဒ္ဓိ (လည်ချောင်း စွမ်းအင်ဗဟို)', ja: '第5チャクラ（スロート）' },
      timingSeason: { en: 'Taurus Season (April 20 – May 20)', my: 'ပြိဿရာသီကာလ (ဧပြီ ၂၀ - မေ ၂၀)', ja: '牡牛座期（4月20日〜5月20日）' }
    },
    lovers: {
      hebrewLetter: { en: 'Zayin (ז) — The Sword / Twin Discernment', my: 'ဇာယင်း (Zayin ז) — ဝိညာဉ်စုံတွဲ ရွေးချယ်မှု', ja: 'ザイン（ז）— 双子の剣・識別' },
      kabbalahTreeOfLife: { en: 'Path 17: Binah ↔ Tiphareth (The Disposing Intelligence)', my: 'လမ်းကြောင်း ၁၇: ဘီနာ (Binah) မှ တီဖာရက်သ် (Tiphareth) သို့', ja: '第17の小径：ビナー ↔ ティファレト（配置の知性）' },
      goldenDawnTitle: { en: 'Children of the Voice Divine', my: 'ဘုရားရှင် အသံတော်၏ သားသမီးများ (Children of the Voice)', ja: '神の御声の子供たち' },
      decanateAstrology: { en: 'Zodiac Sign Gemini (The Twins / Mercury)', my: 'မေထုန်ရာသီ (Gemini ♊ / အမြွှာစုံတွဲ)', ja: '双子座（♊・水星の調和）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "The sun shines in the zenith, beneath which Raphael pours down influences over Adam and Eve. Behind the man is the Tree of Life; behind the woman, the Tree of Knowledge. It is the mystery of the Covenant and Sabbath." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "နေမင်းကြီးအောက်တွင် ကောင်းကင်တမန် ရာဖာအယ်လ်က အာဒမ်နှင့် ဧဝတို့အပေါ် မေတ္တာမိုး ဖြန်းပက်နေသည်။ ဤကတ်သည် သန့်ရှင်းသော ပဋိညာဉ်နှင့် ဝိညာဉ်စုံတွဲတို့၏ ချစ်ခြင်းမေတ္တာနက်နဲမှု ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「天頂の太陽のもと、大天使ラファエルがアダムとエヴァに恩寵を注ぐ。男性の後ろには生命の樹、女性の後ろには知恵の樹。神聖なる魂の契約の神秘。」'
      },
      chakraResonance: { en: 'Anahata (Heart Chakra)', my: 'အနာဟတ (နှလုံးသား စွမ်းအင်ဗဟို)', ja: '第4チャクラ（ハート）' },
      timingSeason: { en: 'Gemini Season (May 21 – June 20)', my: 'မေထုန်ရာသီကာလ (မေ ၂၁ - ဇွန် ၂၀)', ja: '双子座期（5月21日〜6月20日）' }
    },
    chariot: {
      hebrewLetter: { en: 'Cheth (ח) — The Enclosure / Sacred Victory', my: 'ခက်သ် (Cheth ח) — အောင်ပွဲခံရထား', ja: 'ヘット（ח）— 囲い・不屈の勝利' },
      kabbalahTreeOfLife: { en: 'Path 18: Binah ↔ Geburah (The House of Influence)', my: 'လမ်းကြောင်း ၁၈: ဘီနာ (Binah) မှ ဂျီဘူရာ (Geburah) သို့', ja: '第18の小径：ビナー ↔ ゲブラー（放射の知性）' },
      goldenDawnTitle: { en: 'Child of the Powers of the Waters', my: 'ရေစွမ်းအားတို့၏ သားတော် (Child of Waters)', ja: '水の力の御子' },
      decanateAstrology: { en: 'Zodiac Sign Cancer (The Crab / Moon Charioteer)', my: 'ကရကဋ်ရာသီ (Cancer ♋ / စိတ်စွမ်းအားအောင်ပွဲ)', ja: '蟹座（♋・月の防壁）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "An erect and princely figure borne within a chariot drawn by two sphinxes (black and white). He has captive passions and carries the conqueror\'s laurel. It is triumph in all planes of action." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "အဖြူနှင့် အမည်း စဖင့်စ်နှစ်ကောင် ဆွဲသော ရထားပေါ်တွင် မင်းသားတစ်ပါး ရပ်နေသည်။ သူသည် မိမိ၏ စိတ်ဆန္ဒများကို ထိန်းချုပ်နိုင်ပြီး အောင်ပွဲရ သရဖူကို ဆောင်းထားသော စစ်သူကြီး ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「白と黒のスフィンクスが引く戦車に立つ高貴な勝者。彼は対立する情動を完全に御し、あらゆる行動領域での完全なる勝利を勝ち取る。」'
      },
      chakraResonance: { en: 'Manipura (Solar Plexus) & Muladhara (Root)', my: 'မဏိပူရ (စွမ်းအား) နှင့် မူလဒါရ (အခြေခံဗဟို)', ja: '第3チャクラ（太陽神経叢）＆ 第1チャクラ（基底）' },
      timingSeason: { en: 'Cancer Season (June 21 – July 22)', my: 'ကရကဋ်ရာသီကာလ (ဇွန် ၂၁ - ဇူလိုင် ၂၂)', ja: '蟹座期（6月21日〜7月22日）' }
    },
    strength: {
      hebrewLetter: { en: 'Teth (ט) — The Serpent / Gentle Mastery', my: 'တက်သ် (Teth ט) — နူးညံ့စွာ ထိန်းချုပ်နိုင်စွမ်း', ja: 'テット（ט）— 蛇・柔和なる支配' },
      kabbalahTreeOfLife: { en: 'Path 19: Chesed ↔ Geburah (The Intelligence of the Secret)', my: 'လမ်းကြောင်း ၁၉: ချီဆက်ဒ် (Chesed) မှ ဂျီဘူရာ (Geburah) သို့', ja: '第19の小径：ケセド ↔ ゲブラー（秘密の知性）' },
      goldenDawnTitle: { en: 'Daughter of the Flaming Sword', my: 'မီးတောက်ဓား၏ သမီးတော် (Daughter of Flaming Sword)', ja: '炎の剣の娘' },
      decanateAstrology: { en: 'Zodiac Sign Leo (The Lion / Solar Radiance)', my: 'သိဟ်ရာသီ (Leo ♌ / ခြင်္သေ့မင်းစွမ်းအား)', ja: '獅子座（♌・太陽の光輝）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A woman crowned with the lemniscate closes the jaws of a lion without violence. It signifies confidence, higher moral power, and the gentle triumph of spirit over animal nature." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "အနန္တသင်္ကေတ သရဖူဆောင်းထားသော အမျိုးသမီးက ခြင်္သေ့၏ မေးရိုးကို အကြမ်းမဖက်ဘဲ နူးညံ့စွာ ထိန်းချုပ်ထားသည်။ ၎င်းသည် စိတ်ဓာတ်ခွန်အားဖြင့် တိရစ္ဆာန်ဗီဇကို အနိုင်ယူခြင်း ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「頭上に無限大（レムニスケート）を戴く乙女が、力ではなく愛と気品によって獅子の口を閉ざす。野性に勝る不屈の精神的勝利。」'
      },
      chakraResonance: { en: 'Anahata (Heart Chakra)', my: 'အနာဟတ (နှလုံးသား စွမ်းအင်ဗဟို)', ja: '第4チャクラ（ハート）' },
      timingSeason: { en: 'Leo Season (July 23 – August 22)', my: 'သိဟ်ရာသီကာလ (ဇူလိုင် ၂၃ - သြဂုတ် ၂၂)', ja: '獅子座期（7月23日〜8月22日）' }
    },
    hermit: {
      hebrewLetter: { en: 'Yod (י) — The Open Hand / Spark of Wisdom', my: 'ယော့ဒ် (Yod י) — ဉာဏ်အလင်းမီးပွား', ja: 'ヨッド（י）— 開かれた手・神聖な火花' },
      kabbalahTreeOfLife: { en: 'Path 20: Chesed ↔ Tiphareth (The Intelligence of Will)', my: 'လမ်းကြောင်း ၂၀: ချီဆက်ဒ် (Chesed) မှ တီဖာရက်သ် (Tiphareth) သို့', ja: '第20の小径：ケセド ↔ ティファレト（意志の知性）' },
      goldenDawnTitle: { en: 'Magus of the Voice of Light', my: 'အလင်းအသံတော်၏ ပညာရှင် (Magus of the Voice of Light)', ja: '光の御声の魔術師' },
      decanateAstrology: { en: 'Zodiac Sign Virgo (The Maiden / Earth Hermitage)', my: 'ကန်ရာသီ (Virgo ♍ / တစ်ကိုယ်တည်း တရားအားထုတ်ခြင်း)', ja: '乙女座（♍・内省と探求）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "He carries a lantern containing a six-pointed star of truth. He is not seeking, but protecting the beacon for those who follow. He represents divine prudence and contemplation." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ခြောက်ထောင့်ကြယ် အလင်းပါသော မီးအိမ်ကို ကိုင်ဆောင်ထားသည်။ သူသည် လမ်းရှာနေသူ မဟုတ်ဘဲ နောက်လိုက်များအတွက် အမှန်တရားမီးရှူးတန်ဆောင်ကို စောင့်ရှောက်ပေးနေသူ ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「六芒星が灯る真理のランタンを高く掲げる。彼は探求者ではなく、後から歩む者たちのために光を守る導師である。」'
      },
      chakraResonance: { en: 'Ajna (Third Eye) & Sahasrara (Crown)', my: 'အာညာ (မျက်ခုံးဗဟို) နှင့် သဟသြာရ (ဦးထိပ်)', ja: '第6チャクラ（サードアイ）＆ 第7チャクラ（クラウン）' },
      timingSeason: { en: 'Virgo Season (August 23 – September 22)', my: 'ကန်ရာသီကာလ (သြဂုတ် ၂၃ - စက်တင်ဘာ ၂၂)', ja: '乙女座期（8月23日〜9月22日）' }
    },
    wheel_of_fortune: {
      hebrewLetter: { en: 'Kaph (כ) — The Grasping Palm / Cosmic Cycles', my: 'ကပ်ဖ် (Kaph כ) — ကံကြမ္မာစက်ဝိုင်း', ja: 'カフ（כ）— 掌・運命の輪' },
      kabbalahTreeOfLife: { en: 'Path 21: Chesed ↔ Netzach (The Rewarding Intelligence)', my: 'လမ်းကြောင်း ၂၁: ချီဆက်ဒ် (Chesed) မှ နက်ဆာ့ခ် (Netzach) သို့', ja: '第21の小径：ケセド ↔ ネツァク（報酬の知性）' },
      goldenDawnTitle: { en: 'Lord of the Forces of Life', my: 'ဘဝစွမ်းအားတို့၏ အရှင် (Lord of Forces of Life)', ja: '生命の力の主' },
      decanateAstrology: { en: 'Planet Jupiter (Destiny, Expansion & Luck)', my: 'ဂျူပီတာ (ကြာသပတေးဂြိုဟ် / ကံကောင်းခြင်း)', ja: '木星（拡大・幸運・宿命の転換）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A wheel revolving amid the four living creatures of Ezekiel. On the wheel are the letters TARO / ROTA and Hebrew letters YHVH. It is destiny, change of fortune, and the perpetual cycle of life." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "အီဇီကီရယ်၏ သတ္တဝါ ၄ ကောင်ကြားတွင် လည်ပတ်နေသော စက်ဝိုင်းကြီး။ TARO / ROTA စာလုံးများနှင့် ယေဟောဝါ ဘုရားနာမတော် ပါရှိသည်။ ၎င်းသည် ကံကြမ္မာအပြောင်းအလဲနှင့် ဘဝသံသရာ ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「エゼキエル書の四つの聖獣の間で回転する車輪。TARO/ROTAの文字と神聖四字文字YHVHが刻まれ、宿命の好転と永遠の循環を示す。」'
      },
      chakraResonance: { en: 'Sahasrara (Crown Chakra)', my: 'သဟသြာရ (ဦးထိပ် စွမ်းအင်ဗဟို)', ja: '第7チャクラ（クラウン）' },
      timingSeason: { en: 'Solstices & Equinoxes / Cosmic Karmic Turning Points', my: 'နေယဉ်စွန်းချိန်နှင့် ညညီချိန်များ', ja: '至点および分点 / 運命の転換期' }
    },
    justice: {
      hebrewLetter: { en: 'Lamed (ל) — The Ox-Goad / Law of Karma', my: 'လာမတ်ဒ် (Lamed ל) — တရားမျှတမှု ချိန်ခွင်', ja: 'ラメッド（ל）— 突き棒・カルマの法' },
      kabbalahTreeOfLife: { en: 'Path 22: Geburah ↔ Tiphareth (The Faithful Intelligence)', my: 'လမ်းကြောင်း ၂၂: ဂျီဘူရာ (Geburah) မှ တီဖာရက်သ် (Tiphareth) သို့', ja: '第22の小径：ゲブラー ↔ ティファレト（忠実なる知性）' },
      goldenDawnTitle: { en: 'Daughter of the Lords of Truth', my: 'အမှန်တရားအရှင်တို့၏ သမီးတော် (Daughter of Truth)', ja: '真理の主たちの娘' },
      decanateAstrology: { en: 'Zodiac Sign Libra (The Scales / Venus Balance)', my: 'တူရာသီ (Libra ♎ / တရားမျှတသော ချိန်ခွင်)', ja: '天秤座（♎・金星の均衡）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "She holds the upright sword of division in her right hand and the balance of equity in her left. It represents spiritual equilibrium, karmic retribution, and total objective truth." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ညာလက်တွင် တရားစီရင်ရေး ဓားကို ထောင်ထားပြီး ဘယ်လက်တွင် ချိန်ခွင်ကို ကိုင်ထားသည်။ ၎င်းသည် ကံကြမ္မာ၏ တရားမျှတမှုနှင့် ဘက်မလိုက်သော အမှန်တရား ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「右手に裁きの剣を垂直に掲げ、左手に公正の天秤を持つ。因果応報の法、霊的均衡、そして絶対的な客観的真実の執行。」'
      },
      chakraResonance: { en: 'Anahata (Heart) & Ajna (Third Eye)', my: 'အနာဟတ (နှလုံး) နှင့် အာညာ (ဉာဏ်အမြင်)', ja: '第4チャクラ（ハート）＆ 第6チャクラ（サードアイ）' },
      timingSeason: { en: 'Libra Season (September 23 – October 22)', my: 'တူရာသီကာလ (စက်တင်ဘာ ၂၃ - အောက်တိုဘာ ၂၂)', ja: '天秤座期（9月23日〜10月22日）' }
    },
    hanged_man: {
      hebrewLetter: { en: 'Mem (מ) — Sacred Waters / Surrender', my: 'မမ် (Mem מ) — နက်ရှိုင်းသော စွန့်လွှတ်မှု', ja: 'メム（מ）— 大いなる水・受容' },
      kabbalahTreeOfLife: { en: 'Path 23: Geburah ↔ Hod (The Stable Intelligence)', my: 'လမ်းကြောင်း ၂၃: ဂျီဘူရာ (Geburah) မှ ဟော့ဒ် (Hod) သို့', ja: '第23の小径：ゲブラー ↔ ホド（安定の知性）' },
      goldenDawnTitle: { en: 'Spirit of the Mighty Waters', my: 'ရေစွမ်းအားတို့၏ ဝိညာဉ်တော် (Spirit of Mighty Waters)', ja: '大水流の霊' },
      decanateAstrology: { en: 'Element of Water / Planet Neptune', my: 'ရေဓာတ် / နက်ပကျွန်းဂြိုဟ်', ja: '水のエレメント / 海王星' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "Suspended from a T-cross by one foot, his face expresses deep entrenchment in contemplation, not suffering. Around his head is a nimbus of spiritual illumination." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "သစ်ပင်တွင် ဇောက်ထိုးဆွဲထားသော်လည်း မျက်နှာတွင် နာကျင်မှုမရှိဘဲ ငြိမ်းချမ်းသော အလင်းရောင် ထွက်ပေါ်နေသည်။ ၎င်းသည် မိမိအတ္တကို စွန့်လွှတ်၍ ရရှိသော ဉာဏ်အလင်း ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「生きた木の十字架から片足で吊るされながらも、その表情には苦痛なく静寂な悟りが漂う。頭上の後光は霊的覚醒の証である。」'
      },
      chakraResonance: { en: 'Sahasrara (Crown) & Svadhisthana (Sacral)', my: 'သဟသြာရ (ဦးထိပ်) နှင့် ဆွာဓိဌာန (စိတ်ခံစားမှု)', ja: '第7チャクラ（クラウン）＆ 第2チャクラ（仙骨）' },
      timingSeason: { en: 'Neptunian Inward Suspensions / Pisces Transitions', my: 'အတွင်းစိတ် ဆင်ခြင်သုံးသပ်ရမည့် ကာလ', ja: '海王星の内省期 / 魚座の変容期' }
    },
    death: {
      hebrewLetter: { en: 'Nun (נ) — The Fish / Rebirth from Depths', my: 'နွန် (Nun נ) — သေခြင်းမှ ပြန်လည်မွေးဖွားခြင်း', ja: 'ヌン（נ）— 魚・深淵からの再生' },
      kabbalahTreeOfLife: { en: 'Path 24: Tiphareth ↔ Netzach (The Imaginative Intelligence)', my: 'လမ်းကြောင်း ၂၄: တီဖာရက်သ် (Tiphareth) မှ နက်ဆာ့ခ် (Netzach) သို့', ja: '第24の小径：ティファレト ↔ ネツァク（想像の知性）' },
      goldenDawnTitle: { en: 'Child of the Great Transformers', my: 'အသွင်ပြောင်းခြင်း၏ သားတော် (Lord of the Gate of Death)', ja: '大いなる変容者の子' },
      decanateAstrology: { en: 'Zodiac Sign Scorpio (The Scorpion / Pluto)', my: 'ဗြိစ္ဆာရာသီ (Scorpio ♏ / ပလူတိုဂြိုဟ် အသွင်ပြောင်းမှု)', ja: '蠍座（♏・冥王星の死と再生）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A black-armored knight bearing a black banner with the Mystic Rose of Life. Before him, earthly kings and pontiffs fall. Between the two distant towers, the sun of immortality rises." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "အနက်ရောင် သံချပ်ကာဝတ် မြင်းစီးသူရဲက ဘဝနှင်းဆီနက် အလံကို ကိုင်ဆောင်ထားသည်။ အဝေးမှ မျှော်စင်နှစ်ခုကြားတွင် မသေသော နေမင်း ထွက်ပေါ်လာနေသည်။ ၎င်းသည် အဟောင်းသေဆုံးပြီး အသစ်ပြန်လည် မွေးဖွားခြင်း ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「神秘の白薔薇が描かれた黒旗を掲げる黒甲冑の騎士。地上の権力者たちは倒れ伏すが、遥かな二つの塔の間からは不滅の太陽が昇る。」'
      },
      chakraResonance: { en: 'Muladhara (Root Chakra)', my: 'မူလဒါရ (အခြေခံစွမ်းအင်ဗဟို)', ja: '第1チャクラ（ルート）' },
      timingSeason: { en: 'Scorpio Season (October 23 – November 21)', my: 'ဗြိစ္ဆာရာသီကာလ (အောက်တိုဘာ ၂၃ - နိုဝင်ဘာ ၂၁)', ja: '蠍座期（10月23日〜11月21日）' }
    },
    temperance: {
      hebrewLetter: { en: 'Samekh (ס) — The Prop / Sacred Alchemy', my: 'ဆာမတ်ခ် (Samekh ס) — ဓာတ်ပေါင်းစပ်မှု ဟန်ချက်', ja: 'サメフ（ס）— 支柱・聖なる錬金術' },
      kabbalahTreeOfLife: { en: 'Path 25: Tiphareth ↔ Yesod (The Tentative Intelligence)', my: 'လမ်းကြောင်း ၂၅: တီဖာရက်သ် (Tiphareth) မှ ယေဆော့ဒ် (Yesod) သို့', ja: '第25の小径：ティファレト ↔ イエソド（試みの知性）' },
      goldenDawnTitle: { en: 'Daughter of the Reconcilers', my: 'သဟဇာတဖြစ်စေသူတို့၏ သမီးတော် (Daughter of Reconcilers)', ja: '和解者の娘' },
      decanateAstrology: { en: 'Zodiac Sign Sagittarius (The Archer / Jupiter)', my: 'ဓနုရာသီ (Sagittarius ♐ / စိတ်ဝိညာဉ် ဟန်ချက်ညီမှု)', ja: '射手座（♐・高次の調和）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A winged angel with the sign of the sun on her brow pours the essence of life between two chalices without spilling a drop. One foot is in water, one on earth: the perfect blend of spirit and reality." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "နေမင်းတံဆိပ်ပါသော ကောင်းကင်တမန်က ဖလားနှစ်လုံးကြားတွင် အသက်အရည်ကို တစ်စက်မျှ မဖိတ်ဘဲ စီးဆင်းစေသည်။ ခြေတစ်ဖက်က ရေထဲတွင်၊ တစ်ဖက်က မြေပေါ်တွင် ရှိနေပြီး စိတ်နှင့် ရုပ်ကို အပြည့်အဝ ပေါင်းစပ်ပေးသည်။"',
        ja: 'A.E.ウェイト卿の原典：「額に太陽の印を持つ大天使が、二つの杯の間で生命の霊液を一滴も零さず注ぎ交わす。水と大地に片足ずつ置く完璧な錬金術的統合。」'
      },
      chakraResonance: { en: 'Manipura (Solar Plexus) & Svadhisthana (Sacral)', my: 'မဏိပူရ နှင့် ဆွာဓိဌာန', ja: '第3チャクラ（太陽神経叢）＆ 第2チャクラ（仙骨）' },
      timingSeason: { en: 'Sagittarius Season (November 22 – December 21)', my: 'ဓနုရာသီကာလ (နိုဝင်ဘာ ၂၂ - ဒီဇင်ဘာ ၂၁)', ja: '射手座期（11月22日〜12月21日）' }
    },
    devil: {
      hebrewLetter: { en: 'Ayin (ע) — The Eye / Material Bondage', my: 'အာယင် (Ayin ע) — ရုပ်ဝတ္ထု နှောင်ဖွဲ့ခြင်း', ja: 'アイン（ע）— 目・物質の束縛' },
      kabbalahTreeOfLife: { en: 'Path 26: Tiphareth ↔ Hod (The Renovating Intelligence)', my: 'လမ်းကြောင်း ၂၆: တီဖာရက်သ် (Tiphareth) မှ ဟော့ဒ် (Hod) သို့', ja: '第26の小径：ティファレト ↔ ホド（革新の知性）' },
      goldenDawnTitle: { en: 'Lord of the Gates of Matter', my: 'ရုပ်ဝတ္ထုတံခါးတို့၏ အရှင် (Lord of Gates of Matter)', ja: '物質の門の主' },
      decanateAstrology: { en: 'Zodiac Sign Capricorn (The Goat / Saturn)', my: 'မကာရရာသီ (Capricorn ♑ / စနေဂြိုဟ် စည်းဘောင်များ)', ja: '山羊座（♑・土星の試練）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A horned goat-figure seated on a pedestal to which two figures are loosely chained. The chains are loose and can be removed at will. It represents self-imposed bondage to illusion." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ဂျိုပါသော နတ်ဆိုးကြီး၏ အောက်တွင် လူနှစ်ဦးကို သံကြိုးဖြင့် ချည်နှောင်ထားသော်လည်း သံကြိုးမှာ ချောင်နေပြီး အချိန်မရွေး ချွတ်နိုင်သည်။ ၎င်းသည် မိမိကိုယ်တိုင် ဖန်တီးထားသော အတ္တနှင့် စွဲလမ်းမှု နှောင်ကြိုး ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「台座に座す角ある獣神の前に、鎖で繋がれた男女。しかしその鎖は緩く、いつでも自らの意志で外すことができる。自己欺瞞による執着の戒め。」'
      },
      chakraResonance: { en: 'Muladhara (Root Chakra)', my: 'မူလဒါရ (အခြေခံဗဟို)', ja: '第1チャクラ（ルート）' },
      timingSeason: { en: 'Capricorn Season (December 22 – January 19)', my: 'မကာရရာသီကာလ (ဒီဇင်ဘာ ၂၂ - ဇန်နဝါရီ ၁၉)', ja: '山羊座期（12月22日〜1月19日）' }
    },
    tower: {
      hebrewLetter: { en: 'Pe (פ) — The Mouth / Sudden Awakening', my: 'ဖေး (Pe פ) — ရုတ်တရက် နိုးထခြင်း', ja: 'ペー（פ）— 口・突発的な覚醒' },
      kabbalahTreeOfLife: { en: 'Path 27: Netzach ↔ Hod (The Exciting Intelligence)', my: 'လမ်းကြောင်း ၂၇: နက်ဆာ့ခ် (Netzach) မှ ဟော့ဒ် (Hod) သို့', ja: '第27の小径：ネツァク ↔ ホド（激動の知性）' },
      goldenDawnTitle: { en: 'Lord of the Hosts of the Mighty', my: 'တန်ခိုးကြီးတပ်မတို့၏ အရှင် (Lord of Hosts of the Mighty)', ja: '大いなる軍勢の主' },
      decanateAstrology: { en: 'Planet Mars (Destruction of Illusion)', my: 'အင်္ဂါဂြိုဟ် (Mars / မဟုတ်မမှန်သောအရာများ ပြိုပျက်ခြင်း)', ja: '火星（幻想の粉砕と純化）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A tower struck by lightning, throwing down crowned figures. It is the ruin of material ambition and false pride. The lightning is divine truth shattering human conceit." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "လျှပ်စီးလက်၍ မျှော်စင်ကြီး ပြိုကျကာ သရဖူဆောင်းသူများ ပြုတ်ကျလာသည်။ ၎င်းသည် မာနနှင့် အတုအယောင် တည်ဆောက်မှုများ ပျက်စီးပြီး စစ်မှန်သော အမှန်တရား ပေါ်ပေါက်လာခြင်း ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「稲妻に打たれ炎上する塔から落下する傲慢なる王たち。神聖な真理の雷光が、人間が築いた偽りの安全保障とエゴを粉砕する。」'
      },
      chakraResonance: { en: 'Muladhara (Root) & Manipura (Solar Plexus)', my: 'မူလဒါရ နှင့် မဏိပူရ', ja: '第1チャクラ（ルート）＆ 第3チャクラ（太陽神経叢）' },
      timingSeason: { en: 'Mars Transits / Unforeseen Breakthrough Epochs', my: 'အင်္ဂါဂြိုဟ် လှုပ်ရှားချိန် / ရုတ်တရက် အပြောင်းအလဲများ', ja: '火星直撃期 / 予期せぬブレイクスルー' }
    },
    star: {
      hebrewLetter: { en: 'Tzaddi (צ) — The Fish-Hook / Divine Hope', my: 'ဆာဒီ (Tzaddi צ) — မြင့်မြတ်သော မျှော်လင့်ချက်', ja: 'ツァディ（צ）— 釣り針・神聖な希望' },
      kabbalahTreeOfLife: { en: 'Path 28: Netzach ↔ Yesod (The Natural Intelligence)', my: 'လမ်းကြောင်း ၂၈: နက်ဆာ့ခ် (Netzach) မှ ယေဆော့ဒ် (Yesod) သို့', ja: '第28の小径：ネツァク ↔ イエソド（自然の知性）' },
      goldenDawnTitle: { en: 'Daughter of the Firmament', my: 'ကောင်းကင်ဘုံ၏ သမီးတော် (Daughter of Firmament)', ja: '天空の娘' },
      decanateAstrology: { en: 'Zodiac Sign Aquarius (The Water Bearer / Uranus)', my: 'ကုမ်ရာသီ (Aquarius ♒ / ကောင်းကင်ကြယ်တာရာ)', ja: '水瓶座（♒・天王星の先見性）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A naked maiden pours water upon land and sea under the great eight-pointed Star of the Magi. She is eternal youth and beauty, pouring out divine inspiration. It is hope and spiritual unclouded vision." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ကြယ်တာရာကြီးအောက်တွင် အပျိုစင်မလေးက မြေပြင်နှင့် ရေထဲသို့ အသက်ရေစင် ဖြန်းပက်နေသည်။ သူမသည် ထာဝရ နုပျိုခြင်းနှင့် မြင့်မြတ်သော စိတ်ကူးဉာဏ်တို့၏ အလင်းရောင် ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「八芒星の大星のもと、大地と泉に生命の水を注ぎ続ける無垢な乙女。彼女は不滅の美と希望であり、魂に曇りなき霊感を注ぐ。」'
      },
      chakraResonance: { en: 'Anahata (Heart) & Ajna (Third Eye)', my: 'အနာဟတ နှင့် အာညာ', ja: '第4チャクラ（ハート）＆ 第6チャクラ（サードアイ）' },
      timingSeason: { en: 'Aquarius Season (January 20 – February 18)', my: 'ကုမ်ရာသီကာလ (ဇန်နဝါရီ ၂၀ - ဖေဖော်ဝါရီ ၁၈)', ja: '水瓶座期（1月20日〜2月18日）' }
    },
    moon: {
      hebrewLetter: { en: 'Qoph (ק) — The Back of the Head / Subconscious', my: 'ကော့ဖ် (Qoph ק) — မသိစိတ် နက်နဲရာ', ja: 'コフ（ק）— 後頭部・深層無意識' },
      kabbalahTreeOfLife: { en: 'Path 29: Netzach ↔ Malkuth (The Corporeal Intelligence)', my: 'လမ်းကြောင်း ၂၉: နက်ဆာ့ခ် (Netzach) မှ မာကွတ်သ် (Malkuth) သို့', ja: '第29の小径：ネツァク ↔ マルクト（身体の知性）' },
      goldenDawnTitle: { en: 'Ruler of Flux & Reflux', my: 'ရေတက်ရေကျတို့၏ အရှင် (Ruler of Flux & Reflux)', ja: '干満の支配者' },
      decanateAstrology: { en: 'Zodiac Sign Pisces (The Fishes / Deep Waters)', my: 'မိန်ရာသီ (Pisces ♓ / နက်ရှိုင်းသော မသိစိတ်ပင်လယ်)', ja: '魚座（♓・海王星の夢幻）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A crayfish crawls from the abyss; a dog and wolf howl at the moon between two towers. It represents the path through the subconscious, illusions, and the emergence of consciousness from wild instinct." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ပင်လယ်နက်ထဲမှ ပုစွန်တစ်ကောင် တက်လာပြီး ခွေးနှင့် ဝံပုလွေတို့ လကို မော့ဟောင်နေကြသည်။ ၎င်းသည် မသိစိတ်၏ စိုးရိမ်ပူပန်မှုများနှင့် မရေရာသော အမှောင်ထုကြားမှ ဖြတ်သန်းရခြင်း ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「深淵から這い出るザリガニ、二つの塔の間で月に吼える犬と狼。深層無意識の幻影を抜け、直感の光によって夜明けを目指す旅路。」'
      },
      chakraResonance: { en: 'Svadhisthana (Sacral) & Ajna (Third Eye)', my: 'ဆွာဓိဌာန နှင့် အာညာ', ja: '第2チャクラ（仙骨）＆ 第6チャクラ（サードアイ）' },
      timingSeason: { en: 'Pisces Season (February 19 – March 20)', my: 'မိန်ရာသီကာလ (ဖေဖော်ဝါရီ ၁၉ - မတ် ၂၀)', ja: '魚座期（2月19日〜3月20日）' }
    },
    sun: {
      hebrewLetter: { en: 'Resh (ר) — The Head / Solar Radiance', my: 'ရက်ရှ် (Resh ר) — နေမင်းရောင်ခြည်', ja: 'レーシュ（ר）— 頭・太陽の歓喜' },
      kabbalahTreeOfLife: { en: 'Path 30: Hod ↔ Yesod (The Collecting Intelligence)', my: 'လမ်းကြောင်း ၃၀: ဟော့ဒ် (Hod) မှ ယေဆော့ဒ် (Yesod) သို့', ja: '第30の小径：ホド ↔ イエソド（収集の知性）' },
      goldenDawnTitle: { en: 'Lord of the Fire of the World', my: 'လောကမီးတောက်တို့၏ အရှင် (Lord of Fire of the World)', ja: '世界の火の主' },
      decanateAstrology: { en: 'The Sun (Solar Vitality & Illumination)', my: 'နေမင်း (The Sun / အသက်စွမ်းအင်နှင့် ပျော်ရွှင်မှု)', ja: '太陽（絶対的生命力と光明）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A naked child crowned with flowers rides a white horse beneath a radiant sun. It symbolizes conscious clarity, triumph of spiritual life, innocence, and total earthly fulfillment." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "နေမင်းကြီးအောက်တွင် ပန်းသရဖူဆောင်းထားသော ကလေးငယ်က မြင်းဖြူကို စီးနင်းနေသည်။ ၎င်းသည် ရှင်းလင်းပြတ်သားသော အောင်မြင်မှု၊ ဖြူစင်ခြင်းနှင့် ဘဝ၏ ကြီးကျယ်သော ပျော်ရွှင်မှု ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「輝く太陽のもと、花冠を戴いた無垢な童子が白馬に跨る。知性の完全な明晰さ、精神の勝利、そして地上の至高の歓喜。」'
      },
      chakraResonance: { en: 'Manipura (Solar Plexus) & Sahasrara (Crown)', my: 'မဏိပူရ နှင့် သဟသြာရ', ja: '第3チャクラ（太陽神経叢）＆ 第7チャクラ（クラウン）' },
      timingSeason: { en: 'Summer Solstice / Peak Daylight', my: 'နွေရာသီ အမြင့်ဆုံးကာလ / နေ့တာအရှည်ဆုံးနေ့', ja: '夏至 / 太陽光の極致' }
    },
    judgement: {
      hebrewLetter: { en: 'Shin (ש) — The Holy Fire / Awakening', my: 'ရှင် (Shin ש) — သန့်ရှင်းသော မီးတောက်နိုးထမှု', ja: 'シン（ש）— 聖なる炎・最終覚醒' },
      kabbalahTreeOfLife: { en: 'Path 31: Hod ↔ Malkuth (The Perpetual Intelligence)', my: 'လမ်းကြောင်း ၃၁: ဟော့ဒ် (Hod) မှ မာကွတ်သ် (Malkuth) သို့', ja: '第31の小径：ホド ↔ マルクト（永遠の知性）' },
      goldenDawnTitle: { en: 'Spirit of the Primal Fire', my: 'မူလမီးတောက်၏ ဝိညာဉ်တော် (Spirit of Primal Fire)', ja: '根源の炎の霊' },
      decanateAstrology: { en: 'Element of Fire / Planet Pluto', my: 'မီးဓာတ် / ပလူတိုဂြိုဟ်', ja: '火のエレメント / 冥王星' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "The angel Gabriel sounds the trumpet from above, and the dead rise from their tombs. It is not judgment of condemnation, but the resurrection of the soul into its higher divine state." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "ကောင်းကင်တမန် ဂါဘရီယယ်လ်က တံပိုးမှုတ်ပြီး သင်္ချိုင်းဂူများထဲမှ ဝိညာဉ်များ ထမြောက်လာကြသည်။ ၎င်းသည် ပြစ်ဒဏ်စီရင်ခြင်း မဟုတ်ဘဲ မြင့်မြတ်သော ဘဝသစ်သို့ နိုးထလာခြင်း ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「大天使ガブリエルが天よりラッパを吹き鳴らし、魂たちが墓より蘇る。断罪ではなく、魂が高次の神聖なる境地へと新生する復活の瞬間。」'
      },
      chakraResonance: { en: 'Vishuddha (Throat) & Sahasrara (Crown)', my: 'ဝိသုဒ္ဓိ နှင့် သဟသြာရ', ja: '第5チャクラ（喉）＆ 第7チャクラ（クラウン）' },
      timingSeason: { en: 'Plutonian Karmic Reckonings / Spring Awakening', my: 'ကံကြမ္မာ အဆစ်အချိုး ကာလ', ja: '冥王星のカルマ清算期 / 新生への夜明け' }
    },
    world: {
      hebrewLetter: { en: 'Tav (ת) — The Cosmic Cross / Full Culmination', my: 'တက်ဗ် (Tav ת) — စကြဝဠာ အောင်မြင်စွာ ပြီးပြည့်စုံခြင်း', ja: 'タヴ（ת）— 宇宙の十字架・大成' },
      kabbalahTreeOfLife: { en: 'Path 32: Yesod ↔ Malkuth (The Administrative Intelligence)', my: 'လမ်းကြောင်း ၃၂: ယေဆော့ဒ် (Yesod) မှ မာကွတ်သ် (Malkuth) သို့', ja: '第32の小径：イエソド ↔ マルクト（統治の知性）' },
      goldenDawnTitle: { en: 'The Great One of the Night of Time', my: 'အချိန်ညတာတို့၏ ကြီးမြတ်သူ (The Great One of Time)', ja: '時の夜の大いなる者' },
      decanateAstrology: { en: 'Planet Saturn (Mastery, Structure & Eternity)', my: 'စနေဂြိုဟ် (Saturn / ထာဝရ ပြီးပြည့်စုံခြင်း)', ja: '土星（大いなる完成・永遠の統合）' },
      waiteOriginalKey: {
        en: 'A.E. Waite: "A dancing maiden encircled by a green wreath of victory, flanked by the four Kerubic creatures. It represents the perfection and end of the Cosmos, synthesis of all planes, and liberation." (PKT 1910)',
        my: 'A.E. Waite မှတ်ချက်: "သတ္တဝါ ၄ ကောင် ခြံရံထားသော အောင်ပွဲသရဖူ စက်ဝိုင်းအတွင်း ကချေသည်မလေး ကနေသည်။ ၎င်းသည် စကြဝဠာတစ်ခုလုံး အောင်မြင်စွာ ပြီးမြောက်ခြင်းနှင့် လွတ်မြောက်ခြင်း ဖြစ်သည်။"',
        ja: 'A.E.ウェイト卿の原典：「月桂樹の輪の中で踊る勝利の乙女と、周囲を囲む四聖獣。宇宙の完成、全次元の調和的統合、そして魂の完全なる解脱。」'
      },
      chakraResonance: { en: 'Sahasrara (Crown Chakra)', my: 'သဟသြာရ (ဦးထိပ် စွမ်းအင်ဗဟို)', ja: '第7チャクラ（クラウン）' },
      timingSeason: { en: 'Completion of Annual Astrological Wheel', my: 'နှစ်ပတ်လည် ဇာတာခွင် ပြည့်မြောက်ချိန်', ja: '黄道十二宮の完全なる一周 / 大団円' }
    }
  };

  /**
   * Helper to retrieve full esoteric attributes for any card
   */
  public static getEsotericData(cardId: string): Partial<CardEsotericData> {
    const data = this.CORRESPONDENCES[cardId] || {};

    if (this.CORRESPONDENCES[cardId]) {
      return {
        ...data,
        traditionalOmens: data.traditionalOmens || {
          en: 'Waite 1910 Traditional Divinatory Omen: Portends significant spiritual shifts, catalytic encounters, and karmic realignment in worldly affairs.',
          my: '၁၉၁၀ ရိုးရာ နိမိတ်ဖတ်မှတ်ချက်: ဝိညာဉ်ရေးရာ အပြောင်းအလဲများ၊ ကံကြမ္မာအလှည့်အပြောင်းနှင့် မမျှော်လင့်သော ကံကောင်းမှုများကို ညွှန်ပြသည်။',
          ja: '1910年 伝統的兆候・神託：人生の重大な霊的変容、予期せぬ運命の転換、カルマの清算を告げる瑞兆。'
        }
      };
    }

    // Generic Golden Dawn / Decanate generator for Minor Arcana
    if (cardId.includes('wands') || cardId.includes('cups') || cardId.includes('swords') || cardId.includes('pentacles')) {
      const isWands = cardId.includes('wands');
      const isCups = cardId.includes('cups');
      const isSwords = cardId.includes('swords');
      const isPentacles = cardId.includes('pentacles');

      const suitName = isWands ? 'Wands (Fire)' : isCups ? 'Cups (Water)' : isSwords ? 'Swords (Air)' : 'Pentacles (Earth)';

      return {
        goldenDawnTitle: {
          en: `Golden Dawn Title of ${suitName}`,
          my: `${suitName} ၏ ရွှေရောင်အရုဏ်ဦး ဘွဲ့တော်`,
          ja: `黄金の夜明け団における【${suitName}】の秘儀称号`
        },
        chakraResonance: {
          en: isWands ? 'Manipura (Solar Plexus)' : isCups ? 'Anahata (Heart)' : isSwords ? 'Vishuddha (Throat)' : 'Muladhara (Root)',
          my: isWands ? 'မဏိပူရ (မီးဓာတ်)' : isCups ? 'အနာဟတ (ရေဓာတ်)' : isSwords ? 'ဝိသုဒ္ဓိ (လေဓာတ်)' : 'မူလဒါရ (မြေဓာတ်)',
          ja: isWands ? '第3チャクラ（太陽神経叢）' : isCups ? '第4チャクラ（ハート）' : isSwords ? '第5チャクラ（喉）' : '第1チャクラ（基底）'
        },
        timingSeason: {
          en: isWands ? 'Spring / Aries-Leo-Sagittarius' : isCups ? 'Summer / Cancer-Scorpio-Pisces' : isSwords ? 'Autumn / Gemini-Libra-Aquarius' : 'Winter / Taurus-Virgo-Capricorn',
          my: isWands ? 'နွေဦး / မီးရာသီခွင်များ' : isCups ? 'မိုးကာလ / ရေရာသီခွင်များ' : isSwords ? 'ဆောင်းဦး / လေရာသီခွင်များ' : 'ဆောင်းကာလ / မြေရာသီခွင်များ',
          ja: isWands ? '春 / 火の星座期' : isCups ? '夏 / 水の星座期' : isSwords ? '秋 / 風の星座期' : '冬 / 地の星座期'
        },
        traditionalOmens: {
          en: isWands ? 'Traditional Omen: Sudden news of creative enterprise, travel, or an energetic ally arriving.' :
              isCups ? 'Traditional Omen: Joyful emotional reunion, invitation to celebrations, or heartfelt message.' :
              isSwords ? 'Traditional Omen: Swift legal or analytical resolution; a decisive truth cutting through deceit.' :
              'Traditional Omen: Material reward, commercial contract fruition, or tangible security established.',
          my: isWands ? 'ရိုးရာနိမိတ်: စီးပွားရေးအခွင့်အလမ်းသစ်၊ ခရီးသွားခြင်း သို့မဟုတ် အကူအညီပေးမည့် မိတ်ဆွေသစ် ရောက်ရှိလာခြင်း။' :
              isCups ? 'ရိုးရာနိမိတ်: ဝမ်းမြောက်ဖွယ် နှလုံးသားဆုံတွေ့မှု၊ ပွဲလမ်းသဘင် ဖိတ်ကြားလွှာ သို့မဟုတ် မေတ္တာသတင်းစကား။' :
              isSwords ? 'ရိုးရာနိမိတ်: ဥပဒေရေးရာ သို့မဟုတ် အငြင်းပွားမှု ရှင်းလင်းပြတ်သားစွာ ပြီးဆုံးခြင်း။' :
              'ရိုးရာနိမိတ်: ငွေကြေးဥစ္စာ တိုးပွားခြင်း၊ စာချုပ်စာတမ်း အောင်မြင်ခြင်း သို့မဟုတ် ခိုင်မာသော အကျိုးအမြတ်။',
          ja: isWands ? '伝統的兆候：創造的な事業の進展、旅立ちの知らせ、熱心な協力者の出現。' :
              isCups ? '伝統的兆候：愛の再会、祝宴への招待状、心温まる吉報の到来。' :
              isSwords ? '伝統的兆候：知的な解決、契約や議論の電光石火の決着、真実の開示。' :
              '伝統的兆候：物質的報酬、商取引の成就、確固たる経済的基盤の確立。'
        }
      };
    }

    return {};
  }
}
