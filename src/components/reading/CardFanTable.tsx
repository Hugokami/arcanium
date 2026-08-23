import React, { useState, useEffect } from 'react';
import { DrawnCard, Language, SpreadDefinition, TarotCard } from '../../types/tarot';
import { TAROT_DECK } from '../../data/tarotDeck';
import { UI_TRANSLATIONS } from '../../data/translations';
import { audioService } from '../../services/audioService';
import { DeckThemeService } from '../../services/deckThemeService';
import confetti from 'canvas-confetti';
import { Sparkles, Eye, RotateCw, Hand, Layers, Keyboard } from 'lucide-react';

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
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize 3 purely randomly shuffled decks on mount
  useEffect(() => {
    const fullShuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
    
    // Split 78 cards into 3 purely randomized piles of 26 cards without topics
    const pile1 = fullShuffled.slice(0, 26);
    const pile2 = fullShuffled.slice(26, 52);
    const pile3 = fullShuffled.slice(52, 78);

    const streams: DeckStream[] = [
      {
        id: 1,
        title: {
          en: 'Deck I',
          my: 'ပထမ ကတ်တွဲ (Deck I)',
          ja: '第1のデッキ'
        },
        subtitle: {
          en: '26 Randomly Shuffled Cards',
          my: 'ကျပန်းမွှေထားသော ကတ် ၂၆ ပြား',
          ja: '26枚のシャッフルされたカード'
        },
        cards: pile1
      },
      {
        id: 2,
        title: {
          en: 'Deck II',
          my: 'ဒုတိယ ကတ်တွဲ (Deck II)',
          ja: '第2のデッキ'
        },
        subtitle: {
          en: '26 Randomly Shuffled Cards',
          my: 'ကျပန်းမွှေထားသော ကတ် ၂၆ ပြား',
          ja: '26枚のシャッフルされたカード'
        },
        cards: pile2
      },
      {
        id: 3,
        title: {
          en: 'Deck III',
          my: 'တတိယ ကတ်တွဲ (Deck III)',
          ja: '第3のデッキ'
        },
        subtitle: {
          en: '26 Randomly Shuffled Cards',
          my: 'ကျပန်းမွှေထားသော ကတ် ၂၆ ပြား',
          ja: '26枚のシャッフルされたカード'
        },
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

  const selectedTheme = DeckThemeService.getSelectedTheme();
  const cardBackImage = selectedTheme.image;

  // Global Keyboard Shortcuts (Space/Enter to auto-pick, reveal, or proceed)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        if (selectionStage === 'choose_deck' && deckStreams.length > 0) {
          handleSelectDeck(deckStreams[0]);
        } else if (selectionStage === 'pick_cards') {
          if (allRevealed) {
            handleReadCards();
          } else if (allDrawn) {
            handleRevealAll();
          } else if (picksLeft > 0 && fanDeck.length > 0) {
            const nextIdx = fanDeck.findIndex((_, idx) => !takenIndices.includes(idx));
            if (nextIdx !== -1) {
              handlePickCard(fanDeck[nextIdx], nextIdx);
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectionStage, deckStreams, allRevealed, allDrawn, picksLeft, fanDeck, takenIndices, drawnCards]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-10 space-y-8 flex flex-col items-center animate-in fade-in duration-500">
      
      {/* ================= STAGE 1: CHOOSE FROM 3 RANDOMLY SHUFFLED DECKS ================= */}
      {selectionStage === 'choose_deck' && (
        <div className="w-full max-w-4xl space-y-8 text-center animate-in fade-in zoom-in-95 duration-500">
          
          <div className="craft-panel p-6 sm:p-8 rounded-3xl space-y-3 max-w-2xl mx-auto shadow-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-xs font-mono uppercase tracking-widest text-[#d4af37]">
              <Layers className="w-3.5 h-3.5" />
              <span>Sacred 3-Deck Cut</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#d4af37] tracking-wide">
              {language === 'my'
                ? 'ကျပန်းမွှေထားသော ကတ်တွဲ ၃ ခုအနက် တစ်ခုကို ရွေးချယ်ပါ'
                : language === 'ja'
                ? 'シャッフルされた3つのデッキから1つお選びください'
                : 'Choose 1 of the 3 Randomly Shuffled Decks'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-serif italic">
              "{question}"
            </p>
            <p className="text-[11px] text-amber-200/80 font-serif">
              {language === 'my'
                ? 'ကတ်ပြား ၇၈ ပြားကို ကတ်တွဲ ၃ တွဲအဖြစ် ကျပန်းခွဲဝေထားပါသည်။ သင် ရွေးချယ်သော ကတ်တွဲမှ ကံကြမ္မာကတ်များကို ဆက်လက်ရွေးချယ်ပါမည်။'
                : language === 'ja'
                ? '78枚のカードが均等に3つのデッキにランダムに分けられています。カードを引くデッキを1つお選びください。'
                : 'The 78 cards are randomly divided into 3 equal decks. Select a deck to open its cards for your draw.'}
            </p>
          </div>

          {/* 3 Glowing Decks Grid with Double-Bezel Nested Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto pt-4">
            {deckStreams.map((stream) => (
              <div
                key={stream.id}
                onClick={() => handleSelectDeck(stream)}
                onMouseEnter={() => audioService.playCardHover()}
                className="group craft-bezel-outer cursor-pointer active:scale-[0.98]"
              >
                <div className="craft-bezel-inner p-6 sm:p-7 flex flex-col justify-between items-center space-y-6 h-full text-center">
                  
                  {/* 3D Stacked Card Pile Visual */}
                  <div className="relative w-28 h-44 sm:w-32 sm:h-48 my-2">
                    {/* Layer 3 Bottom */}
                    <div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-[#d4af37]/30 shadow-lg translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                    {/* Layer 2 Middle */}
                    <div className="absolute inset-0 rounded-2xl bg-zinc-900 border border-[#d4af37]/50 shadow-lg translate-x-1 translate-y-1 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
                    {/* Layer 1 Top Front */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-[0_0_24px_rgba(212,175,55,0.3)] bg-[#0b0813] flex flex-col items-center justify-center p-2 group-hover:border-amber-200 transition-colors duration-300">
                      <img
                        src="/cards/CardBacks.png"
                        alt="Tarot Back"
                        className="w-full h-full object-cover rounded-xl opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/15 transition-colors">
                        <Sparkles className="w-8 h-8 text-[#d4af37] group-hover:scale-125 transition-transform duration-300 filter drop-shadow-[0_0_8px_#d4af37]" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 w-full">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-amber-100 group-hover:text-[#d4af37] transition-colors">
                      {stream.title[language]}
                    </h3>
                    <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                      {stream.subtitle[language]}
                    </p>
                  </div>

                  <div className="w-full pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-serif text-[#d4af37] font-semibold">
                    <span>
                      {language === 'my' ? 'ဤကတ်တွဲကို ရွေးမည်' : language === 'ja' ? 'このデッキを選ぶ' : 'Select Deck'}
                    </span>
                    
                    {/* Button-in-Button Trailing Icon */}
                    <div className="w-6 h-6 rounded-full bg-white/[0.05] border border-white/[0.08] group-hover:bg-[#d4af37]/20 group-hover:border-[#d4af37]/40 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Sparkles className="w-3 h-3 text-amber-200 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                </div>
              </div>
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
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
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
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-wider text-amber-300/80 mb-1 uppercase max-w-[80px] sm:max-w-[100px] truncate text-center">
                      {pos.name[language]}
                    </span>

                    {/* Card Slot */}
                    <div
                      onClick={() => drawn && !drawn.revealed && handleFlipCard(idx)}
                      className={`relative w-16 h-24 sm:w-20 sm:h-32 md:w-24 md:h-38 rounded-xl overflow-hidden border-2 transition-all duration-500 flex items-center justify-center ${
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
                          <div className="relative w-full h-full bg-[#120a24] flex flex-col items-center justify-center p-0.5 sm:p-1">
                            <img
                              src={cardBackImage}
                              alt="Card Back"
                              className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/20 transition-colors">
                              <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] animate-pulse" />
                              <span className="text-[8px] sm:text-[9px] font-serif text-amber-200 mt-0.5 font-semibold text-center px-0.5">
                                {language === 'my' ? 'ဖွင့်မည်' : language === 'ja' ? 'めくる' : 'Reveal'}
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
                    <div className="mt-1 text-center max-w-[80px] sm:max-w-[100px] h-4">
                      {drawn && drawn.revealed && (
                        <span className="text-[9px] sm:text-[10px] font-serif text-[#d4af37] font-semibold truncate block">
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
            <div className="w-full py-4 sm:py-8 flex flex-col items-center overflow-visible">
              <div className="text-center text-[11px] sm:text-xs font-serif text-amber-200/90 mb-3 sm:mb-4 animate-pulse px-2">
                ✦ {language === 'my' ? 'ကတ်ပြားပေါ်သို့ မျှားတင်ပြီး ကံကြမ္မာကတ်ကို နှိပ်၍ ဆွဲယူပါ' : language === 'ja' ? 'カードに触れて直感で1枚ずつ引いてください' : 'Hover and click to draw your destiny'} ✦
              </div>

              {/* Fan Deck Arc Container */}
              <div className="relative h-36 sm:h-52 w-full max-w-full sm:max-w-3xl flex justify-center items-end select-none overflow-visible px-4">
                {fanDeck.map((card, idx) => {
                  const isTaken = takenIndices.includes(idx);
                  const isHovered = hoveredFanIndex === idx;
                  const total = fanDeck.length;
                  const isMobile = windowWidth < 640;
                  const isSmallMobile = windowWidth < 380;
                  
                  // Calculate dynamic angle and spacing based on screen width
                  const maxAngle = isSmallMobile ? 22 : isMobile ? 26 : 34;
                  const xStep = isSmallMobile ? 7.6 : isMobile ? 8.8 : 20;
                  const yCurve = isSmallMobile ? 0.9 : isMobile ? 1.2 : 2.2;

                  const angle = ((idx - total / 2) / (total / 2)) * maxAngle;
                  const xOffset = (idx - total / 2) * xStep;
                  const yOffset = Math.abs(idx - total / 2) * yCurve;

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
                          ? `translate(${xOffset}px, ${isMobile ? -20 : -32}px) scale(${isMobile ? 1.12 : 1.18}) rotate(0deg)`
                          : `translate(${xOffset}px, ${yOffset}px) rotate(${angle}deg)`,
                        zIndex: isHovered ? 40 : idx,
                        opacity: isTaken ? 0.2 : 1
                      }}
                      className={`absolute bottom-0 w-10 h-16 sm:w-16 sm:h-26 md:w-20 md:h-32 rounded-lg sm:rounded-xl overflow-hidden border border-[#8a7326] bg-[#120a24] shadow-[0_0_10px_rgba(0,0,0,0.8)] cursor-pointer transition-all duration-200 ease-out origin-bottom ${
                        isTaken ? 'pointer-events-none' : 'hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                      }`}
                    >
                      <img
                        src={cardBackImage}
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

          <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-zinc-400">
            <Keyboard className="w-3 h-3 text-[#d4af37]" />
            <span>Shortcuts: Press <b>[Space]</b> or <b>[Enter]</b> to draw & reveal</span>
          </div>
        </>
      )}

    </div>
  );
};
