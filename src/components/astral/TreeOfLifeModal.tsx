import React, { useState } from 'react';
import { X, Sparkles, Compass, Eye, Info, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { DrawnCard, Language, TarotCard } from '../../types/tarot';
import { audioService } from '../../services/audioService';

interface TreeOfLifeModalProps {
  drawnCards?: DrawnCard[];
  language: Language;
  onClose: () => void;
}

interface SephirahNode {
  id: number;
  name: { en: string; my: string; ja: string };
  transliteration: string;
  hebrew: string;
  pillar: 'Middle' | 'Right' | 'Left';
  world: string;
  x: number; // Percentage coordinate
  y: number;
  color: string;
  divineName: string;
  archangel: string;
  planet: string;
  virtue: { en: string; my: string; ja: string };
}

interface KabbalahPath {
  pathNum: number;
  from: number;
  to: number;
  hebrewLetter: string;
  letterName: string;
  majorCardId: string;
  majorCardName: { en: string; my: string; ja: string };
  esotericTitle: { en: string; my: string; ja: string };
}

const SEPHIROTH: SephirahNode[] = [
  { id: 1, name: { en: 'Kether', my: 'ကေသာ (သရဖူ)', ja: 'ケテル（王冠）' }, transliteration: 'Crown', hebrew: 'כֶּתֶר', pillar: 'Middle', world: 'Atziluth', x: 50, y: 8, color: '#ffffff', divineName: 'Eheieh (I Am)', archangel: 'Metatron', planet: 'Primum Mobile', virtue: { en: 'Attainment of Divine Will', my: 'အမြင့်မြတ်ဆုံး သန္နိဋ္ဌာန်နှင့် အသိဉာဏ်', ja: '神的意志の完全なる成就' } },
  { id: 2, name: { en: 'Chokmah', my: 'ဟောခမာ (ဉာဏ်ပညာ)', ja: 'コクマー（知恵）' }, transliteration: 'Wisdom', hebrew: 'חָכְמָה', pillar: 'Right', world: 'Atziluth', x: 80, y: 20, color: '#93c5fd', divineName: 'Yah', archangel: 'Raziel', planet: 'Zodiac / Neptune', virtue: { en: 'Dynamic Creative Flash', my: 'ဖန်တီးမှု လျှပ်စီးအသိဉာဏ်', ja: '創造的直感と根源的躍動' } },
  { id: 3, name: { en: 'Binah', my: 'ဘီနာ (ထိုးထွင်းနားလည်မှု)', ja: 'ビナー（理解）' }, transliteration: 'Understanding', hebrew: 'בִּינָה', pillar: 'Left', world: 'Briah', x: 20, y: 20, color: '#c084fc', divineName: 'Elohim', archangel: 'Tzaphkiel', planet: 'Saturn', virtue: { en: 'Receptive Structure & Form', my: 'ဖွဲ့စည်းပုံနှင့် နားလည်သဘောပေါက်မှု', ja: '受容と構造化、大いなる母性' } },
  { id: 4, name: { en: 'Chesed', my: 'ဟီဆဒ် (ကရုဏာ)', ja: 'ケセド（慈悲）' }, transliteration: 'Mercy', hebrew: 'חֶסֶד', pillar: 'Right', world: 'Briah', x: 80, y: 40, color: '#60a5fa', divineName: 'El', archangel: 'Tzadkiel', planet: 'Jupiter', virtue: { en: 'Expansive Grace & Love', my: 'အဆုံးမဲ့ မေတ္တာနှင့် ကြွယ်ဝမှု', ja: '無条件の愛と拡大・恩寵' } },
  { id: 5, name: { en: 'Geburah', my: 'ဂီဘူရာ (စွမ်းအားနှင့် ပြတ်သားမှု)', ja: 'ゲブラー（峻厳）' }, transliteration: 'Severity', hebrew: 'גְּבוּרָה', pillar: 'Left', world: 'Briah', x: 20, y: 40, color: '#f87171', divineName: 'Elohim Gibor', archangel: 'Kamael', planet: 'Mars', virtue: { en: 'Sacred Discernment & Power', my: 'တရားမျှတသော စည်းကမ်းနှင့် စွမ်းအား', ja: '峻厳なる規律と勇気・破壊と再編' } },
  { id: 6, name: { en: 'Tiphareth', my: 'တီဖာရက်သ် (အလှတရားနှင့် သဟဇာတ)', ja: 'ティファレト（美・調和）' }, transliteration: 'Beauty', hebrew: 'תִּפְאֶרֶת', pillar: 'Middle', world: 'Yetzirah', x: 50, y: 52, color: '#fbbf24', divineName: 'YHVH Eloah va-Daath', archangel: 'Raphael / Michael', planet: 'Sun', virtue: { en: 'Solar Christ Consciousness', my: 'ဗဟိုအလင်းရောင်နှင့် နှလုံးသားငြိမ်းချမ်းမှု', ja: 'キリスト意識・太陽の調和と自己統合' } },
  { id: 7, name: { en: 'Netzach', my: 'နတ်ဇာဟ် (အောင်ပွဲ)', ja: 'ネツァク（勝利）' }, transliteration: 'Victory', hebrew: 'נֶצַח', pillar: 'Right', world: 'Yetzirah', x: 80, y: 68, color: '#34d399', divineName: 'YHVH Tzabaoth', archangel: 'Haniel', planet: 'Venus', virtue: { en: 'Unselfish Love & Creative Passion', my: 'မေတ္တာနှင့် အနုပညာခံစားမှု', ja: '感情の自由と創造的歓喜' } },
  { id: 8, name: { en: 'Hod', my: 'ဟော့ဒ် (ဂုဏ်သရေ)', ja: 'ホド（栄光）' }, transliteration: 'Glory', hebrew: 'הוֹד', pillar: 'Left', world: 'Yetzirah', x: 20, y: 68, color: '#fb923c', divineName: 'Elohim Tzabaoth', archangel: 'Michael / Raphael', planet: 'Mercury', virtue: { en: 'Intellectual Truth & Communication', my: 'ဉာဏ်ပညာနှင့် ဆက်သွယ်ရေးသစ္စာ', ja: '真理の探求と明晰な知性' } },
  { id: 9, name: { en: 'Yesod', my: 'ယေဆော့ဒ် (အုတ်မြစ်)', ja: 'イエソド（基礎）' }, transliteration: 'Foundation', hebrew: 'יְסוֹד', pillar: 'Middle', world: 'Yetzirah', x: 50, y: 80, color: '#a855f7', divineName: 'Shaddai El Chai', archangel: 'Gabriel', planet: 'Moon', virtue: { en: 'Subconscious Astral Conduit', my: 'မသိစိတ်အာရုံနှင့် စိတ်ကူးပုံရိပ်များ', ja: 'アストラル界の鏡・潜在意識の基盤' } },
  { id: 10, name: { en: 'Malkuth', my: 'မားလ်ကုသ် (ရုပ်ဝတ္ထုလောက)', ja: 'マルクト（王国）' }, transliteration: 'Kingdom', hebrew: 'מַלְכוּת', pillar: 'Middle', world: 'Assiah', x: 50, y: 94, color: '#eab308', divineName: 'Adonai ha-Aretz', archangel: 'Sandalphon', planet: 'Earth / 4 Elements', virtue: { en: 'Physical Manifestation in Reality', my: 'လက်တွေ့ဘဝတွင် အကောင်အထည်ဖော်မှု', ja: '物質的現実世界における完全な具現化' } }
];

const KABBALAH_PATHS: KabbalahPath[] = [
  { pathNum: 11, from: 1, to: 2, hebrewLetter: 'א', letterName: 'Aleph', majorCardId: 'fool', majorCardName: { en: '0 The Fool', my: '0 လူမိုက်', ja: '0 愚者' }, esotericTitle: { en: 'Path of Air & Pure Spirit', my: 'လေဓာတ်နှင့် စိတ်ဝိညာဉ်ဖြူစင်မှုလမ်းကြောင်း', ja: '気息・純粋精神の小径' } },
  { pathNum: 12, from: 1, to: 3, hebrewLetter: 'ב', letterName: 'Beth', majorCardId: 'magician', majorCardName: { en: 'I The Magician', my: 'I မျက်လှည့်ဆရာ', ja: 'I 魔術師' }, esotericTitle: { en: 'Path of Mercury & Conscious Will', my: 'ဗုဒ္ဓဟူးနှင့် သန္နိဋ္ဌာန်လမ်းကြောင်း', ja: '水星・意志伝達の小径' } },
  { pathNum: 13, from: 1, to: 6, hebrewLetter: 'ג', letterName: 'Gimel', majorCardId: 'high_priestess', majorCardName: { en: 'II The High Priestess', my: 'II ဗိမာန်တော်ဆရာမ', ja: 'II 女教皇' }, esotericTitle: { en: 'The Great Camel Bridge across the Abyss', my: 'အသူရာချောက်ကို ဖြတ်သန်းသော ဝိညာဉ်တံတား', ja: '深淵（アビス）を渡る直感のラクダ' } },
  { pathNum: 14, from: 2, to: 3, hebrewLetter: 'ד', letterName: 'Daleth', majorCardId: 'empress', majorCardName: { en: 'III The Empress', my: 'III ဧကရီမိဖုရား', ja: 'III 女帝' }, esotericTitle: { en: 'Path of Venus & Cosmic Fertility', my: 'သောကြာနှင့် သဘာဝဖန်တီးမှုလမ်းကြောင်း', ja: '金星・大いなる愛の扉' } },
  { pathNum: 15, from: 2, to: 6, hebrewLetter: 'ה', letterName: 'Heh', majorCardId: 'emperor', majorCardName: { en: 'IV The Emperor', my: 'IV ဧကရာဇ်ဘုရင်', ja: 'IV 皇帝' }, esotericTitle: { en: 'Path of Aries & Constituting Intelligence', my: 'မိဿရာသီနှင့် ခေါင်းဆောင်မှုလမ်းကြောင်း', ja: '白羊宮・秩序創始の窓' } },
  { pathNum: 16, from: 2, to: 4, hebrewLetter: 'ו', letterName: 'Vav', majorCardId: 'hierophant', majorCardName: { en: 'V The Hierophant', my: 'V သာသနာပိုင်ဆရာတော်', ja: 'V 法王' }, esotericTitle: { en: 'Path of Taurus & Eternal Teachings', my: 'ပြိဿရာသီနှင့် ဓမ္မဆရာလမ်းကြောင်း', ja: '金牛宮・神聖契約の釘' } },
  { pathNum: 17, from: 3, to: 6, hebrewLetter: 'ז', letterName: 'Zayin', majorCardId: 'lovers', majorCardName: { en: 'VI The Lovers', my: 'VI ချစ်သူစုံတွဲ', ja: 'VI 恋人' }, esotericTitle: { en: 'Path of Gemini & Sacred Discernment', my: 'မေထုန်ရာသီနှင့် နှလုံးသားရွေးချယ်မှုလမ်းကြောင်း', ja: '双児宮・二元性統合の剣' } },
  { pathNum: 18, from: 3, to: 5, hebrewLetter: 'ח', letterName: 'Cheth', majorCardId: 'chariot', majorCardName: { en: 'VII The Chariot', my: 'VII စစ်ရထား', ja: 'VII 戦車' }, esotericTitle: { en: 'Path of Cancer & House of Influence', my: 'ကရကဋ်ရာသီနှင့် စိတ်ဓာတ်ခွန်အားလမ်းကြောင်း', ja: '巨蟹宮・勝利の鎧と囲い' } },
  { pathNum: 19, from: 4, to: 5, hebrewLetter: 'ט', letterName: 'Teth', majorCardId: 'strength', majorCardName: { en: 'VIII Strength', my: 'VIII အတွင်းခွန်အား', ja: 'VIII 力' }, esotericTitle: { en: 'Path of Leo & Tamed Serpent Kundalini', my: 'သိဟ်ရာသီနှင့် ကွန်ဒါလီနီစွမ်းအင်လမ်းကြောင်း', ja: '獅子宮・内なる蛇の調御' } },
  { pathNum: 20, from: 4, to: 6, hebrewLetter: 'י', letterName: 'Yod', majorCardId: 'hermit', majorCardName: { en: 'IX The Hermit', my: 'IX ရသေ့သူတော်စင်', ja: 'IX 隠者' }, esotericTitle: { en: 'Path of Virgo & Secret Foundation Light', my: 'ကန်ရာသီနှင့် လျှို့ဝှက်အလင်းလမ်းကြောင်း', ja: '処女宮・内なる手の灯火' } },
  { pathNum: 21, from: 4, to: 7, hebrewLetter: 'כ', letterName: 'Kaph', majorCardId: 'wheel_of_fortune', majorCardName: { en: 'X Wheel of Fortune', my: 'X ကံကြမ္မာစက်ဝိုင်း', ja: 'X 運命の輪' }, esotericTitle: { en: 'Path of Jupiter & Cycles of Destiny', my: 'ကြာသပတေးနှင့် ကံကြမ္မာအလှည့်အပြောင်းလမ်းကြောင်း', ja: '木星・運命の把握の手のひら' } },
  { pathNum: 22, from: 5, to: 6, hebrewLetter: 'ל', letterName: 'Lamed', majorCardId: 'justice', majorCardName: { en: 'XI Justice', my: 'XI တရားမျှတမှု', ja: 'XI 正義' }, esotericTitle: { en: 'Path of Libra & Faithful Balance', my: 'တူရာသီနှင့် တရားမျှတမှုချိန်ခွင်လမ်းကြောင်း', ja: '天秤宮・公正の鞭と天秤' } },
  { pathNum: 23, from: 5, to: 8, hebrewLetter: 'מ', letterName: 'Mem', majorCardId: 'hanged_man', majorCardName: { en: 'XII The Hanged Man', my: 'XII ဇောက်ထိုးလူ', ja: 'XII 吊るされた男' }, esotericTitle: { en: 'Path of Water & Mystical Surrender', my: 'ရေဓာတ်နှင့် စွန့်လွှတ်အနစ်နာခံမှုလမ်းကြောင်း', ja: '原初の水・自己変革の献身' } },
  { pathNum: 24, from: 6, to: 7, hebrewLetter: 'נ', letterName: 'Nun', majorCardId: 'death', majorCardName: { en: 'XIII Death', my: 'XIII အသွင်ပြောင်းခြင်း', ja: 'XIII 死神' }, esotericTitle: { en: 'Path of Scorpio & Rebirth Alchemical Stream', my: 'ဗြိစ္ဆာရာသီနှင့် ပြန်လည်မွေးဖွားခြင်းလမ်းကြောင်း', ja: '天蠍宮・死と再生の魚' } },
  { pathNum: 25, from: 6, to: 9, hebrewLetter: 'ס', letterName: 'Samekh', majorCardId: 'temperance', majorCardName: { en: 'XIV Temperance', my: 'XIV အလယ်အလတ်လမ်းစဉ်', ja: 'XIV 節制' }, esotericTitle: { en: 'Path of Sagittarius & The Central Pillar Arrow', my: 'ဓနုရာသီနှင့် ဗဟိုဝင်ရိုးမြှားလမ်းကြောင်း', ja: '人馬宮・神聖なる調和の支柱' } },
  { pathNum: 26, from: 6, to: 8, hebrewLetter: 'ע', letterName: 'Ayin', majorCardId: 'devil', majorCardName: { en: 'XV The Devil', my: 'XV နှောင်ဖွဲ့မှု', ja: 'XV 悪魔' }, esotericTitle: { en: 'Path of Capricorn & Renewing Vision Eye', my: 'မကာရရာသီနှင့် အသိအမြင်နိုးထမှုလမ်းကြောင်း', ja: '磨羯宮・物質界の誘惑を見抜く目' } },
  { pathNum: 27, from: 7, to: 8, hebrewLetter: 'פ', letterName: 'Pe', majorCardId: 'tower', majorCardName: { en: 'XVI The Tower', my: 'XVI ရုတ်တရက်နိုးထခြင်း', ja: 'XVI 塔' }, esotericTitle: { en: 'Path of Mars & Awakening Lightning Mouth', my: 'အင်္ဂါနှင့် လျှပ်စီးနှုတ်ထွက်လမ်းကြောင်း', ja: '火星・覚醒の電光と崩壊の口' } },
  { pathNum: 28, from: 7, to: 9, hebrewLetter: 'צ', letterName: 'Tzaddi', majorCardId: 'star', majorCardName: { en: 'XVII The Star', my: 'XVII ကြယ်တာရာ', ja: 'XVII 星' }, esotericTitle: { en: 'Path of Aquarius & Natural Intelligence Hook', my: 'ကုမ်ရာသီနှင့် မျှော်လင့်ချက်ကြယ်လမ်းကြောင်း', ja: '宝瓶宮・希望を釣る義人の鉤' } },
  { pathNum: 29, from: 7, to: 10, hebrewLetter: 'ק', letterName: 'Qoph', majorCardId: 'moon', majorCardName: { en: 'XVIII The Moon', my: 'XVIII လမင်း', ja: 'XVIII 月' }, esotericTitle: { en: 'Path of Pisces & Subconscious Evolution', my: 'မိန်ရာသီနှင့် မသိစိတ်အိပ်မက်လမ်းကြောင်း', ja: '双魚宮・夜明けへの進化の旅路' } },
  { pathNum: 30, from: 8, to: 9, hebrewLetter: 'ר', letterName: 'Resh', majorCardId: 'sun', majorCardName: { en: 'XIX The Sun', my: 'XIX နေမင်း', ja: 'XIX 太陽' }, esotericTitle: { en: 'Path of the Sun & Radiant Collective Intellect', my: 'နေမင်းနှင့် အလင်းဉာဏ်လမ်းကြောင်း', ja: '太陽・光り輝く生命の頭部' } },
  { pathNum: 31, from: 8, to: 10, hebrewLetter: 'ש', letterName: 'Shin', majorCardId: 'judgement', majorCardName: { en: 'XX Judgement', my: 'XX ဘဝနိုးထမှု', ja: 'XX 審判' }, esotericTitle: { en: 'Path of Fire & Holy Spirit Reawakening', my: 'မီးဓာတ်နှင့် ဝိညာဉ်နိုးထခြင်းလမ်းကြောင်း', ja: '聖なる火・永遠の復活の歯' } },
  { pathNum: 32, from: 9, to: 10, hebrewLetter: 'ת', letterName: 'Tav', majorCardId: 'world', majorCardName: { en: 'XXI The World', my: 'XXI ကမ္ဘာလောက', ja: 'XXI 世界' }, esotericTitle: { en: 'Path of Saturn / Earth & Cosmic Completion Mark', my: 'စနေနှင့် စကြဝဠာပြီးပြည့်စုံခြင်းလမ်းကြောင်း', ja: '土星・大宇宙の完全なる刻印' } }
];

export const TreeOfLifeModal: React.FC<TreeOfLifeModalProps> = ({
  drawnCards = [],
  language,
  onClose
}) => {
  const [selectedSephirah, setSelectedSephirah] = useState<SephirahNode | null>(null);
  const [selectedPath, setSelectedPath] = useState<KabbalahPath | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedSephirah || selectedPath) {
          setSelectedSephirah(null);
          setSelectedPath(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSephirah, selectedPath, onClose]);

  // Identify which Major Arcana cards are active in this spread
  const activeMajorCardIds = new Set(
    drawnCards
      .filter(dc => dc.card.arcana === 'major')
      .map(dc => dc.card.id)
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl h-[92vh] rounded-3xl p-1 bg-gradient-to-b from-[#d4af37]/60 via-[#442c75]/30 to-[#0e071e] border border-[#d4af37]/70 shadow-[0_0_80px_rgba(212,175,55,0.3)] flex flex-col overflow-hidden">
        
        <div className="rounded-2xl w-full h-full bg-[#0a0515] flex flex-col overflow-hidden">
          
          {/* Header Bar */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shadow-gold-glow">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-[#d4af37]">
                  {language === 'my' ? 'ကဘ္ဗလာ ဝိညာဉ်အပင် မဟာမြေပုံ (Tree of Life)' : language === 'ja' ? '生命の樹（カバラ・セフィロト）対話型マトリックス' : 'Kabbalistic Tree of Life • Otz Chiim'}
                </h2>
                <p className="text-xs text-zinc-400 font-serif">
                  {language === 'my' ? '၁၀ စက်ဝန်းနှင့် ၂၂ လျှို့ဝှက်လမ်းကြောင်းများ' : language === 'ja' ? '10のセフィラとタロット大アルカナ22の小径' : '10 Divine Sephiroth & 22 Major Arcana Pathways'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 relative">
            
            {/* Left/Center: Interactive SVG Astral Tree Map */}
            <div className="md:col-span-8 relative bg-black/60 flex items-center justify-center p-4 overflow-hidden select-none">
              
              {/* Astral Background Particles and Pillars */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.2),transparent_70%)]" />
              
              <svg className="w-full h-full max-h-[70vh]" viewBox="0 0 100 105">
                <defs>
                  <filter id="glow-path" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="lightning" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fef08a" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="100%" stopColor="#ca8a04" />
                  </linearGradient>
                </defs>

                {/* 22 Connecting Paths */}
                {KABBALAH_PATHS.map((p) => {
                  const nodeFrom = SEPHIROTH.find(s => s.id === p.from)!;
                  const nodeTo = SEPHIROTH.find(s => s.id === p.to)!;
                  const isActive = activeMajorCardIds.has(p.majorCardId);
                  const isSelected = selectedPath?.pathNum === p.pathNum;

                  return (
                    <g key={p.pathNum} className="cursor-pointer group" onClick={() => {
                      audioService.playCardHover();
                      setSelectedPath(p);
                      setSelectedSephirah(null);
                    }}>
                      <line
                        x1={nodeFrom.x}
                        y1={nodeFrom.y}
                        x2={nodeTo.x}
                        y2={nodeTo.y}
                        stroke={isSelected ? '#fde047' : isActive ? '#d4af37' : 'rgba(255, 255, 255, 0.15)'}
                        strokeWidth={isSelected ? 1.8 : isActive ? 1.4 : 0.8}
                        strokeDasharray={isActive ? 'none' : '1.5, 1'}
                        filter={isActive || isSelected ? 'url(#glow-path)' : 'none'}
                        className="transition-all duration-300 group-hover:stroke-[#d4af37]"
                      />
                      {/* Midpoint Hebrew Letter Badge */}
                      <circle
                        cx={(nodeFrom.x + nodeTo.x) / 2}
                        cy={(nodeFrom.y + nodeTo.y) / 2}
                        r={isSelected ? 2.5 : 2}
                        fill={isSelected ? '#d4af37' : isActive ? '#854d0e' : '#18181b'}
                        stroke={isActive || isSelected ? '#fde047' : 'rgba(255, 255, 255, 0.3)'}
                        strokeWidth="0.3"
                      />
                      <text
                        x={(nodeFrom.x + nodeTo.x) / 2}
                        y={(nodeFrom.y + nodeTo.y) / 2 + 0.8}
                        fontSize="1.8"
                        textAnchor="middle"
                        fill={isSelected ? '#000000' : '#ffffff'}
                        className="font-serif font-bold pointer-events-none"
                      >
                        {p.hebrewLetter}
                      </text>
                    </g>
                  );
                })}

                {/* 10 Sephiroth Nodes */}
                {SEPHIROTH.map((s) => {
                  const isSelected = selectedSephirah?.id === s.id;

                  return (
                    <g
                      key={s.id}
                      className="cursor-pointer group"
                      onClick={() => {
                        audioService.playCardHover();
                        setSelectedSephirah(s);
                        setSelectedPath(null);
                      }}
                    >
                      <circle
                        cx={s.x}
                        cy={s.y}
                        r={isSelected ? 5.5 : 4.5}
                        fill="#0c071a"
                        stroke={isSelected ? '#fef08a' : s.color}
                        strokeWidth={isSelected ? 1.2 : 0.8}
                        filter={isSelected ? 'url(#glow-path)' : 'none'}
                        className="transition-all duration-300 group-hover:scale-110"
                      />
                      {/* Inner Core */}
                      <circle
                        cx={s.x}
                        cy={s.y}
                        r={2.5}
                        fill={s.color}
                        opacity={0.4}
                      />
                      <text
                        x={s.x}
                        y={s.y + 0.9}
                        fontSize="2.4"
                        textAnchor="middle"
                        fill="#ffffff"
                        className="font-serif font-bold pointer-events-none"
                      >
                        {s.id}
                      </text>
                      {/* Sephirah Label */}
                      <text
                        x={s.x}
                        y={s.y + 5.5}
                        fontSize="1.7"
                        textAnchor="middle"
                        fill="#d4af37"
                        className="font-serif font-semibold pointer-events-none"
                      >
                        {s.name.en}
                      </text>
                    </g>
                  );
                })}
              </svg>

            </div>

            {/* Right: Detailed Sephirah / Path Inspector Panel */}
            <div className="md:col-span-4 p-5 sm:p-6 bg-[#0e071f] border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto space-y-4">
              
              {selectedSephirah ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-mono uppercase text-[#d4af37]">Sephirah #{selectedSephirah.id}</span>
                    <span className="text-lg font-serif text-amber-200">{selectedSephirah.hebrew}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-amber-100">{selectedSephirah.name[language]}</h3>
                    <p className="text-xs text-[#d4af37] font-serif">{selectedSephirah.transliteration} • {selectedSephirah.pillar} Pillar</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs font-serif space-y-1.5 text-zinc-300">
                    <div><b className="text-amber-300">Divine Name:</b> {selectedSephirah.divineName}</div>
                    <div><b className="text-cyan-300">Archangel:</b> {selectedSephirah.archangel}</div>
                    <div><b className="text-purple-300">Cosmic Ruler:</b> {selectedSephirah.planet}</div>
                    <div><b className="text-emerald-300">World:</b> {selectedSephirah.world}</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-serif text-amber-200">
                    <b className="text-[#d4af37]">Spiritual Virtue: </b>
                    {selectedSephirah.virtue[language]}
                  </div>
                </div>
              ) : selectedPath ? (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-xs font-mono uppercase text-[#d4af37]">Path #{selectedPath.pathNum}</span>
                    <span className="text-2xl font-serif text-amber-200">{selectedPath.hebrewLetter} ({selectedPath.letterName})</span>
                  </div>

                  <div>
                    <div className="text-xs font-mono uppercase text-emerald-400">Tarot Key • {selectedPath.majorCardName[language]}</div>
                    <h3 className="text-lg font-serif font-bold text-amber-100">{selectedPath.esotericTitle[language]}</h3>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-xs font-serif space-y-1.5 text-zinc-300">
                    <div><b className="text-amber-300">Connects:</b> {SEPHIROTH.find(s => s.id === selectedPath.from)?.name.en} ↔ {SEPHIROTH.find(s => s.id === selectedPath.to)?.name.en}</div>
                    <div><b className="text-purple-300">Hebrew Letter:</b> {selectedPath.letterName} ({selectedPath.hebrewLetter})</div>
                  </div>

                  {activeMajorCardIds.has(selectedPath.majorCardId) ? (
                    <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-xs font-serif text-emerald-200">
                      ✦ <b>Active in Your Reading:</b> This sacred pathway is currently illuminated by {selectedPath.majorCardName[language]}.
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-serif text-zinc-400">
                      This path bridges the cosmic descent of consciousness between Sephiroth.
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4 text-center p-6 text-zinc-400 font-serif">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 mx-auto flex items-center justify-center text-[#d4af37]">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-amber-200">
                    {language === 'my' ? 'စက်ဝန်း သို့မဟုတ် လမ်းကြောင်းကို နှိပ်ပါ' : language === 'ja' ? 'セフィラまたは小径を選択してください' : 'Select a Sephirah or Hebrew Path'}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {language === 'my' ? 'ကဘ္ဗလာဝိညာဉ်ရေးရာ အဓိပ္ပာယ်များနှင့် တာရော့ချိတ်ဆက်မှုများကို စစ်ဆေးနိုင်ပါသည်' : language === 'ja' ? '対応するタロット大アルカナと神聖幾何学の叡智が表示されます' : 'Click on any sphere (1–10) or connecting Hebrew path (11–32) to reveal its sacred attributes and Tarot resonances.'}
                  </p>
                  {activeMajorCardIds.size > 0 && (
                    <div className="p-3 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 text-xs text-amber-200 font-mono">
                      ✦ {activeMajorCardIds.size} Active Major Arcana in Reading
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
