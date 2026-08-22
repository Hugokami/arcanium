import React, { useState, useEffect } from 'react';
import { DrawnCard, Language, SpreadDefinition, TarotCard } from '../../types/tarot';
import { TAROT_DECK } from '../../data/tarotDeck';
import { UI_TRANSLATIONS } from '../../data/translations';
import { audioService } from '../../services/audioService';
import confetti from 'canvas-confetti';
import { Sparkles, Eye, RotateCw, Hand, Layers } from 'lucide-react';

interface CardFanTableProps {
  topic: string;
  question: string;
  spread: SpreadDefinition;
  language: Language;
  onFinishReading: (drawnCards: DrawnCard[]) => void;
  onReset: () => void;
}

interface DeckStream {
  id: number;
  title: { en: string; my: string; ja: string };
  subtitle: { en: string; my: string; ja: string };
  pillar: string;
  cards: TarotCard[];
}

export const CardFanTable: React.FC<CardFanTableProps> = ({
  topic,
  question,
  spread,
  language,
  onFinishReading,
  onReset
}) => {
  // Stage 1: Deck choice, Stage 2: Card selection
  const [selectionStage, setSelectionStage] = useState<'choose_deck' | 'pick_cards'>('choose_deck');
  const [deckStreams, setDeckStreams] = useState<DeckStream[]>([]);
  const [selectedDeckStream, setSelectedDeckStream] = useState<DeckStream | null>(null);

  const [fanDeck, setFanDeck] = useState<TarotCard[]>([]);
  const [takenIndices, setTakenIndices] = useState<number[]>([]);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [hoveredFanIndex, setHoveredFanIndex] = useState<number | null>(null);

  // Initialize 3 shuffled decks on mount
  useEffect(() => {
    const fullShuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
    
    // Split 78 cards into 3 balanced piles of 26 cards
    const pile1 = fullShuffled.slice(0, 26);
    const pile2 = fullShuffled.slice(26, 52);
    const pile3 = fullShuffled.slice(52, 78);

    const streams: DeckStream[] = [
      {
        id: 1,
        title: {
          en: 'Deck I: Past Karma & Intuition',
          my: 'ပထမကတ်တွဲ: အတိတ်ကံနှင့် အတွင်းစိတ်အာရုံ (Left Pillar)',
          ja: '第一のデッキ：過去の因果と直感の柱'
        },
        subtitle: {
          en: 'Attuned to subconscious roots, memory, and hidden truths.',
          my: 'မသိစိတ်အခြေခံ၊ အတိတ်အကျိုးပေးနှင့် မမြင်ရသော အမှန်တရားများ။',
          ja: '潜在意識の根源、魂の記憶、隠された真実に感応。'
        },
        pillar: 'Left Pillar (Water & Air)',
        cards: pile1
      },
      {
        id: 2,
        title: {
          en: 'Deck II: Present Will & Manifestation',
          my: 'ဒုတိယကတ်တွဲ: ပစ္စုပ္ပန် သန္နိဋ္ဌာန်နှင့် လက်တွေ့ဖန်တီးမှု (Center Pillar)',
          ja: '第二のデッキ：現在の意志と具現化の柱'
        },
        subtitle: {
          en: 'Attuned to active choices, courage, and earthly reality.',
          my: 'လက်ရှိရွေးချယ်မှု၊ စိတ်ခွန်အားနှင့် မျက်မှောက်ဘဝ ရလဒ်များ။',
          ja: '能動的選択、決断の勇気、現実の具現化に感応。'
        },
        pillar: 'Center Pillar (Fire & Earth)',
        cards: pile2
      },
      {
        id: 3,
        title: {
          en: 'Deck III: Future Destiny & Higher Vision',
          my: 'တတိယကတ်တွဲ: အနာဂတ် ကံကြမ္မာနှင့် ဉာဏ်အလင်း (Right Pillar)',
          ja: '第三のデッキ：未来の宿命と高次の叡智の柱'
        },
        subtitle: {
          en: 'Attuned to cosmic evolution, potential, and spiritual guidance.',
          my: 'စကြဝဠာကံကြမ္မာ၊ အလားအလာသစ်များနှင့် စိတ်ဝိညာဉ်လမ်းပြမှု။',
          ja: '宇宙的展開、魂の可能性、高次の導きに感応。'
        },
        pillar: 'Right Pillar (Spirit & Cosmos)',
        cards: pile3
      }
    ];

    setDeckStreams(streams);
    audioService.playShuffle();
  }, [spread]);

  const handleSelectDeck = (stream: DeckStream) => {
    audioService.playSingingBowl(324);
    setSelectedDeckStream(stream);
    // Take the 26 cards from chosen stream as the interactive fan
    setFanDeck(stream.cards);
    setSelectionStage('pick_cards');
  };

  const picksNeeded = spread.cardCount;
  const picksLeft = picksNeeded - drawnCards.length;

  const handlePickCard = (fanCard: TarotCard, index: number) => {
    if (drawnCards.length >= picksNeeded || takenIndices.includes(index)) return;

    audioService.playCardSlide();
    setTakenIndices(prev => [...prev, index]);

    const nextPosIndex = drawnCards.length;
    const nextPos = spread.positions[nextPosIndex];

    const newDrawn: DrawnCard = {
      card: fanCard,
      isReversed: Math.random() < 0.35, // 35% chance reversed
      position: nextPos,
      revealed: false
    };

    const updated = [...drawnCards, newDrawn];
    setDrawnCards(updated);

    if (updated.length === picksNeeded) {
      audioService.playSingingBowl(324);
    }
  };

  const handleFlipCard = (index: number) => {
    audioService.playCardFlip();
    const updated = [...drawnCards];
    updated[index].revealed = !updated[index].revealed;
    setDrawnCards(updated);

    const allRevealed = updated.every(c => c.revealed);
    if (allRevealed && updated.length === picksNeeded) {
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#d4af37', '#f5dfa8', '#c4b5fd', '#ffffff']
      });
      audioService.playCelebrationChime();
    }
  };

  const handleRevealAll = () => {
    audioService.playCardFlip();
    const updated = drawnCards.map(c => ({ ...c, revealed: true }));
    setDrawnCards(updated);
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#d4af37', '#f5dfa8', '#c4b5fd', '#ffffff']
    });
    audioService.playCelebrationChime();
  };

  const handleReadCards = () => {
    audioService.playSingingBowl(432);
    const updated = drawnCards.map(c => ({ ...c, revealed: true }));
    onFinishReading(updated);
  };

  const allDrawn = drawnCards.length === picksNeeded;
  const allRevealed = allDrawn && drawnCards.every(c => c.revealed);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-10 space-y-8 flex flex-col items-center animate-in fade-in duration-500">
      
      {/* ================= STAGE 1: CHOOSE FROM 3 SHUFFLED DECKS ================= */}
      {selectionStage === 'choose_deck' && (
        <div className="w-full max-w-4xl space-y-8 text-center animate-in fade-in zoom-in-95 duration-500">
          
          <div className="craft-panel p-6 sm:p-8 rounded-3xl space-y-3 max-w-2xl mx-auto shadow-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-xs font-mono uppercase tracking-widest text-[#d4af37]">
              <Layers className="w-3.5 h-3.5" />
              <span>Sacred 3-Deck Cut</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#d4af37] tracking-wide">
              {language === 'my'
                ? 'မွှေပြီးသော ကတ်တွဲ ၃ ခုအနက် မိမိအာရုံကျရာ ကတ်တွဲကို ရွေးချယ်ပါ'
                : language === 'ja'
                ? 'シャッフルされた3つのデッキから、直感に従い1つお選びください'
                : 'Choose your Deck from the Sacred 3-Fold Cut'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif italic">
              "{question}"
            </p>
            <p className="text-[11px] text-amber-200/80 font-serif">
              {language === 'my'
                ? 'ကတ်ပြား ၇၈ ပြားကို စွမ်းအင်လမ်းကြောင်း ၃ ခုအဖြစ် ခွဲဝေထားပါသည်။ သင် ရွေးချယ်သော ကတ်တွဲမှ ကံကြမ္မာကတ်များကို ဆက်လက်ရွေးချယ်ပါမည်။'
                : language === 'ja'
                ? '78枚のカードが3つのエネルギーの柱に分けられています。選ばれたデッキから最終的なカードを引きます。'
                : 'The 78 cards are divided into three cosmic streams. Your chosen deck will open for the final draw.'}
            </p>
          </div>

          {/* 3 Glowing Decks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
            {deckStreams.map((stream) => (
              <button
                key={stream.id}
                onClick={() => handleSelectDeck(stream)}
                onMouseEnter={() => audioService.playCardHover()}
                className="group relative craft-card p-6 sm:p-7 rounded-3xl text-left flex flex-col justify-between items-center space-y-6 cursor-pointer hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] transition-all duration-300 active:scale-95"
              >
                {/* 3D Stacked Card Pile Visual */}
                <div className="relative w-28 h-44 sm:w-32 sm:h-48 my-2">
                  {/* Layer 3 Bottom */}
                  <div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-[#d4af37]/30 shadow-lg translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                  {/* Layer 2 Middle */}
                  <div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-[#d4af37]/50 shadow-lg translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform" />
                  {/* Layer 1 Top Front */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.25)] bg-[#0b0813] flex flex-col items-center justify-center p-2">
                    <img
                      src="/cards/card-back.jpg"
                      alt="Tarot Back"
                      className="w-full h-full object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                      <Sparkles className="w-8 h-8 text-[#d4af37] group-hover:scale-125 transition-transform" />
                    </div>
                  </div>
                </div>

                <div className="text-center space-y-2 w-full">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37]/80">
                    {stream.pillar}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-amber-100 group-hover:text-[#d4af37] transition-colors">
                    {stream.title[language]}
                  </h3>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {stream.subtitle[language]}
                  </p>
                </div>

                <div className="w-full pt-3 border-t border-white/[0.08] flex items-center justify-center text-xs font-serif text-[#d4af37] font-semibold group-hover:underline">
                  <span>
                    {language === 'my' ? 'ဤကတ်တွဲကို ဖွင့်မည် ✦' : language === 'ja' ? 'このデッキを開く ✦' : 'Commune with this Deck ✦'}
                  </span>
                </div>
              </button>
            ))}
          </div>

        </div>
      )}

      {/* ================= STAGE 2: CARD FAN SELECTION FROM CHOSEN DECK ================= */}
      {selectionStage === 'pick_cards' && (
        <>
          {/* Header Banner */}
          <div className="craft-panel p-4 sm:p-6 rounded-2xl text-center max-w-2xl w-full shadow-2xl space-y-2 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <span className="text-[11px] font-mono uppercase text-[#d4af37]">
                {selectedDeckStream?.title[language]}
              </span>
              <button
                onClick={() => {
                  audioService.playCardSlide();
                  setSelectionStage('choose_deck');
                  setDrawnCards([]);
                  setTakenIndices([]);
                }}
                className="text-[11px] font-serif text-zinc-400 hover:text-[#d4af37] underline transition-colors"
              >
                {language === 'my' ? 'ကတ်တွဲ ပြန်ပြောင်းမည်' : language === 'ja' ? 'デッキを選び直す' : 'Change Deck'}
              </button>
            </div>

            <h2 className="text-[#d4af37] font-serif tracking-[0.18em] text-xs sm:text-sm uppercase font-semibold">
              {UI_TRANSLATIONS.step3Title[language]} <span className="text-amber-200 font-bold">{picksNeeded === 1 ? UI_TRANSLATIONS.oneCardPick[language] : `${picksNeeded} ${UI_TRANSLATIONS.cardsPick[language]}`}</span>.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-200 font-serif italic truncate">
              "{question}"
            </p>
            <div className="text-[11px] font-serif text-[#d4af37]">
              {picksLeft > 0 ? (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25">
                  <Hand className="w-3 h-3 animate-bounce" />
                  <span>
                    {language === 'my'
                      ? `${picksLeft} ကတ် ထပ်မံရွေးပါ`
                      : language === 'ja'
                      ? `あと${picksLeft}枚引いてください`
                      : `${picksLeft} more to choose`}
                  </span>
                </span>
              ) : (
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>
                    {language === 'my'
                      ? 'ကတ်အားလုံး ရွေးချယ်ပြီးပါပြီ'
                      : language === 'ja'
                      ? 'すべてのカードが選ばれました'
                      : 'All cards chosen'}
                  </span>
                </span>
              )}
            </div>
          </div>

          {/* SPREAD SLOTS (Where drawn cards land) */}
          <div className="w-full max-w-4xl py-2">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {spread.positions.map((pos, idx) => {
                const drawn = drawnCards[idx];
                const isCurrentPickSlot = drawnCards.length === idx;

                return (
                  <div
                    key={pos.name.en + idx}
                    className={`relative flex flex-col items-center transition-all duration-300 ${
                      isCurrentPickSlot ? 'scale-105' : ''
                    }`}
                  >
                    {/* Position Label */}
                    <span className="text-[10px] font-mono tracking-wider text-amber-300/80 mb-1.5 uppercase max-w-[100px] truncate text-center">
                      {pos.name[language]}
                    </span>

                    {/* Card Slot */}
                    <div
                      onClick={() => drawn && !drawn.revealed && handleFlipCard(idx)}
                      className={`relative w-20 h-32 sm:w-24 sm:h-38 rounded-xl overflow-hidden border-2 transition-all duration-500 flex items-center justify-center ${
                        drawn
                          ? drawn.revealed
                            ? 'border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-default'
                            : 'border-amber-400/80 shadow-[0_0_15px_rgba(251,191,36,0.3)] cursor-pointer hover:scale-105'
                          : isCurrentPickSlot
                          ? 'border-[#d4af37] border-dashed bg-[#d4af37]/5 animate-pulse'
                          : 'border-white/[0.12] border-dashed bg-black/30'
                      }`}
                    >
                      {drawn ? (
                        drawn.revealed ? (
                          /* Revealed Card Front */
                          <div className="relative w-full h-full bg-black">
                            <img
                              src={`/cards/${drawn.card.file}`}
                              alt={drawn.card.name[language]}
                              style={{ transform: drawn.isReversed ? 'rotate(180deg)' : 'none' }}
                              className="w-full h-full object-cover"
                            />
                            {drawn.isReversed && (
                              <span className="absolute bottom-1 right-1 px-1 py-0.2 text-[8px] font-sans font-bold bg-purple-900/90 text-purple-200 rounded">
                                Rev
                              </span>
                            )}
                          </div>
                        ) : (
                          /* Card Back (Click to reveal) */
                          <div className="relative w-full h-full bg-[#120a24] flex flex-col items-center justify-center p-1">
                            <img
                              src="/cards/card-back.jpg"
                              alt="Card Back"
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/20 transition-colors">
                              <Eye className="w-5 h-5 text-[#d4af37] animate-pulse" />
                              <span className="text-[9px] font-serif text-amber-200 mt-1 font-semibold">
                                {language === 'my' ? 'ကတ်ကိုဖွင့်မည်' : language === 'ja' ? 'めくる' : 'Click to reveal'}
                              </span>
                            </div>
                          </div>
                        )
                      ) : (
                        /* Empty Slot Placeholder */
                        <span className="text-xs font-mono text-zinc-400">
                          {idx + 1}
                        </span>
                      )}
                    </div>

                    {/* Card Name Under Slot */}
                    <div className="mt-1 text-center max-w-[100px] h-4">
                      {drawn && drawn.revealed && (
                        <span className="text-[10px] font-serif text-[#d4af37] font-semibold truncate block">
                          {drawn.card.name[language]}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* THE 3D FAN OF CARDS */}
          {picksLeft > 0 && (
            <div className="w-full py-8 flex flex-col items-center">
              <div className="text-center text-xs font-serif text-amber-200/90 mb-4 animate-pulse">
                ✦ {language === 'my' ? 'ကတ်ပြားပေါ်သို့ မျှားတင်ပြီး ကံကြမ္မာကတ်ကို နှိပ်၍ ဆွဲယူပါ' : language === 'ja' ? 'カードに触れて直感で1枚ずつ引いてください' : 'Hover and click to draw your destiny'} ✦
              </div>

              {/* Fan Deck Arc Container */}
              <div className="relative h-44 sm:h-52 w-full max-w-3xl flex justify-center items-end select-none">
                {fanDeck.map((card, idx) => {
                  const isTaken = takenIndices.includes(idx);
                  const isHovered = hoveredFanIndex === idx;
                  const total = fanDeck.length;
                  // Calculate angle for fan (-38 deg to +38 deg)
                  const angle = ((idx - total / 2) / (total / 2)) * 36;
                  const xOffset = (idx - total / 2) * (window.innerWidth < 640 ? 18 : 28);
                  const yOffset = Math.abs(idx - total / 2) * 2.8;

                  return (
                    <div
                      key={card.id + idx}
                      onClick={() => !isTaken && handlePickCard(card, idx)}
                      onMouseEnter={() => {
                        if (!isTaken) {
                          setHoveredFanIndex(idx);
                          audioService.playCardHover();
                        }
                      }}
                      onMouseLeave={() => setHoveredFanIndex(null)}
                      style={{
                        transform: isTaken
                          ? `translate(${xOffset}px, 60px) scale(0.6) rotate(${angle}deg)`
                          : isHovered
                          ? `translate(${xOffset}px, -35px) scale(1.18) rotate(0deg)`
                          : `translate(${xOffset}px, ${yOffset}px) rotate(${angle}deg)`,
                        zIndex: isHovered ? 40 : idx,
                        opacity: isTaken ? 0.2 : 1
                      }}
                      className={`absolute bottom-0 w-16 h-26 sm:w-20 sm:h-32 rounded-xl overflow-hidden border border-[#8a7326] bg-[#120a24] shadow-[0_0_12px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-200 ease-out origin-bottom ${
                        isTaken ? 'pointer-events-none' : 'hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                      }`}
                    >
                      <img
                        src="/cards/card-back.jpg"
                        alt="Card Back"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action Buttons: Reveal All or Read the Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {allDrawn && !allRevealed && (
              <button
                onClick={handleRevealAll}
                className="btn-secondary h-11 px-6 rounded-xl font-serif text-xs sm:text-sm flex items-center space-x-2 text-[#d4af37]"
              >
                <Eye className="w-4 h-4" />
                <span>{UI_TRANSLATIONS.revealAllBtn[language]}</span>
              </button>
            )}

            {allRevealed && (
              <button
                onClick={handleReadCards}
                className="btn-primary h-12 px-8 rounded-xl font-serif text-sm sm:text-base tracking-[0.16em] uppercase flex items-center space-x-2.5 animate-pulse shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                <Sparkles className="w-4 h-4 text-zinc-950" />
                <span>{UI_TRANSLATIONS.readBtn[language]}</span>
              </button>
            )}

            <button
              onClick={onReset}
              className="text-xs font-serif text-zinc-400 hover:text-zinc-200 underline transition-colors px-3 py-2"
            >
              {language === 'my' ? 'အစမှ ပြန်စမည်' : language === 'ja' ? '最初からやり直す' : 'Start Over'}
            </button>
          </div>
        </>
      )}

    </div>
  );
};
