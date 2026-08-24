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
  }, []);

  const handleSelectDeck = (stream: DeckStream) => {
    audioService.playCardSlide();
    setSelectedDeckStream(stream);
    setFanDeck(stream.cards);
    setSelectionStage('pick_cards');
  };

  const picksNeeded = spread.cardCount;
  const picksLeft = picksNeeded - drawnCards.length;
  const allDrawn = drawnCards.length === picksNeeded;
  const allRevealed = allDrawn && drawnCards.every(c => c.revealed);

  // Dynamic deck back from DeckThemeService
  const selectedTheme = DeckThemeService.getSelectedTheme();
  const cardBackImage = selectedTheme.image || '/cards/CardBacks.png';

  const handlePickCard = (card: TarotCard, index: number) => {
    if (picksLeft <= 0 || takenIndices.includes(index)) return;

    audioService.playCardFlip();
    const isReversed = Math.random() < 0.25; // 25% chance reversed
    const currentPosition = spread.positions[drawnCards.length];

    setTakenIndices(prev => [...prev, index]);
    setDrawnCards(prev => [
      ...prev,
      {
        card,
        isReversed,
        position: currentPosition,
        revealed: false
      }
    ]);
  };

  const handleFlipCard = (index: number) => {
    audioService.playCardFlip();
    setDrawnCards(prev => {
      const next = [...prev];
      if (next[index]) {
        next[index] = { ...next[index], revealed: true };
      }
      return next;
    });
  };

  const handleRevealAll = () => {
    audioService.playSingingBowl(528);
    setDrawnCards(prev => prev.map(c => ({ ...c, revealed: true })));
  };

  const handleReadCards = () => {
    audioService.playSingingBowl(432);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f5f5f4', '#a8a29e', '#78716c']
      });
    } catch {
      // safe fallback
    }
    onFinishReading(drawnCards);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (selectionStage === 'choose_deck') {
          if (deckStreams.length > 0) {
            handleSelectDeck(deckStreams[0]);
          }
        } else if (selectionStage === 'pick_cards') {
          if (allRevealed) {
            handleReadCards();
          } else if (allDrawn && !allRevealed) {
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
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-8 flex flex-col items-center animate-in fade-in duration-300">
      
      {/* ================= STAGE 1: CHOOSE FROM 3 RANDOMLY SHUFFLED DECKS ================= */}
      {selectionStage === 'choose_deck' && (
        <div className="w-full max-w-3xl space-y-8 text-center animate-in fade-in duration-300">
          
          <div className="craft-card p-6 sm:p-8 space-y-3">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded border border-[#292524] bg-[#0c0a09] text-[11px] font-mono tracking-wider text-[#a8a29e] uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>Sacred 3-Deck Cut</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-[#f5f5f4] tracking-tight">
              {language === 'my'
                ? 'ကျပန်းမွှေထားသော ကတ်တွဲ ၃ ခုအနက် တစ်ခုကို ရွေးချယ်ပါ'
                : language === 'ja'
                ? 'シャッフルされた3つのデッキから1つお選びください'
                : 'Choose 1 of the 3 Randomly Shuffled Decks'}
            </h2>
            <p className="text-xs sm:text-sm text-[#a8a29e] font-sans italic">
              "{question}"
            </p>
            <p className="text-xs text-[#78716c] font-sans">
              {language === 'my'
                ? 'ကတ်ပြား ၇၈ ပြားကို ကတ်တွဲ ၃ တွဲအဖြစ် ကျပန်းခွဲဝေထားပါသည်။ သင် ရွေးချယ်သော ကတ်တွဲမှ ကံကြမ္မာကတ်များကို ဆက်လက်ရွေးချယ်ပါမည်။'
                : language === 'ja'
                ? '78枚のカードが均等に3つのデッキにランダムに分けられています。カードを引くデッキを1つお選びください。'
                : 'The 78 cards are randomly divided into 3 equal decks. Select a deck to open its cards for your draw.'}
            </p>
          </div>

          {/* 3 Decks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {deckStreams.map((stream) => (
              <div
                key={stream.id}
                onClick={() => handleSelectDeck(stream)}
                onMouseEnter={() => audioService.playCardHover()}
                className="craft-card p-6 cursor-pointer flex flex-col justify-between items-center space-y-5 text-center hover:border-[#78716c] transition-all"
              >
                {/* Stacked Card Pile Visual */}
                <div className="relative w-24 h-38 sm:w-28 sm:h-42 my-1">
                  <div className="absolute inset-0 rounded-lg bg-[#0c0a09] border border-[#292524] translate-x-1.5 translate-y-1.5" />
                  <div className="absolute inset-0 rounded-lg overflow-hidden border border-[#292524] bg-[#141210] flex flex-col items-center justify-center p-1.5">
                    <img
                      src="/cards/CardBacks.png"
                      alt="Tarot Back"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </div>

                <div className="space-y-1 w-full">
                  <h3 className="text-sm font-serif font-bold text-[#f5f5f4]">
                    {stream.title[language]}
                  </h3>
                  <p className="text-xs text-[#78716c] font-sans">
                    {stream.subtitle[language]}
                  </p>
                </div>

                <div className="w-full pt-3 border-t border-[#292524] flex items-center justify-between text-xs font-sans text-[#a8a29e]">
                  <span>
                    {language === 'my' ? 'ဤကတ်တွဲကို ရွေးမည်' : language === 'ja' ? 'このデッキを選ぶ' : 'Select Deck'}
                  </span>
                  <span className="text-[11px] font-mono text-[#78716c]">→</span>
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
          <div className="craft-card p-4 sm:p-6 text-center max-w-2xl w-full space-y-2 animate-in fade-in duration-300">
            <div className="flex items-center justify-between border-b border-[#292524] pb-2">
              <span className="text-[11px] font-mono uppercase text-[#78716c]">
                {selectedDeckStream?.title[language]}
              </span>
              <button
                onClick={() => {
                  audioService.playCardSlide();
                  setSelectionStage('choose_deck');
                  setDrawnCards([]);
                  setTakenIndices([]);
                }}
                className="text-[11px] font-sans text-[#78716c] hover:text-[#f5f5f4] underline transition-colors"
              >
                {language === 'my' ? 'ကတ်တွဲ ပြန်ပြောင်းမည်' : language === 'ja' ? 'デッキを選び直す' : 'Change Deck'}
              </button>
            </div>

            <h2 className="text-[#a8a29e] font-mono text-xs uppercase tracking-wider">
              {UI_TRANSLATIONS.step3Title[language]} <span className="text-[#f5f5f4] font-bold">{picksNeeded === 1 ? UI_TRANSLATIONS.oneCardPick[language] : `${picksNeeded} ${UI_TRANSLATIONS.cardsPick[language]}`}</span>.
            </h2>
            <p className="text-xs text-[#f5f5f4] font-sans italic truncate">
              "{question}"
            </p>
            <div className="text-xs font-sans text-[#a8a29e]">
              {picksLeft > 0 ? (
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded border border-[#292524] bg-[#0c0a09]">
                  <Hand className="w-3 h-3 text-[#f5f5f4]" />
                  <span>
                    {language === 'my'
                      ? `${picksLeft} ကတ် ထပ်မံရွေးပါ`
                      : language === 'ja'
                      ? `あと${picksLeft}枚引いてください`
                      : `${picksLeft} more to choose`}
                  </span>
                </span>
              ) : (
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded border border-[#21432e] bg-[#132219] text-[#86efac]">
                  <Sparkles className="w-3 h-3" />
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
                    <span className="text-[9px] sm:text-[10px] font-mono text-[#78716c] mb-1 uppercase max-w-[80px] sm:max-w-[100px] truncate text-center">
                      {pos.name[language]}
                    </span>

                    {/* Card Slot */}
                    <div
                      onClick={() => drawn && !drawn.revealed && handleFlipCard(idx)}
                      className={`relative w-16 h-24 sm:w-20 sm:h-32 md:w-24 md:h-38 rounded-lg overflow-hidden border transition-all duration-300 flex items-center justify-center ${
                        drawn
                          ? drawn.revealed
                            ? 'border-[#78716c] bg-[#0c0a09] cursor-default'
                            : 'border-[#44403c] bg-[#141210] cursor-pointer hover:border-[#78716c]'
                          : isCurrentPickSlot
                          ? 'border-[#44403c] border-dashed bg-[#1c1917]'
                          : 'border-[#292524] border-dashed bg-[#0c0a09]'
                      }`}
                    >
                      {drawn ? (
                        drawn.revealed ? (
                          /* Revealed Card Front */
                          <div className="craft-card-sheen relative w-full h-full bg-[#0c0a09]">
                            <img
                              src={`/cards/${drawn.card.file}`}
                              alt={drawn.card.name[language]}
                              style={{ transform: drawn.isReversed ? 'rotate(180deg)' : 'none' }}
                              className="w-full h-full object-cover"
                            />
                            {drawn.isReversed && (
                              <span className="absolute bottom-1 right-1 px-1 py-0.2 text-[8px] font-mono uppercase bg-[#0c0a09] text-[#f5f5f4] border border-[#292524] rounded">
                                Rev
                              </span>
                            )}
                          </div>
                        ) : (
                          /* Card Back (Click to reveal) */
                          <div className="craft-card-sheen relative w-full h-full bg-[#141210] flex flex-col items-center justify-center p-0.5 sm:p-1">
                            <img
                              src={cardBackImage}
                              alt="Card Back"
                              className="w-full h-full object-cover rounded"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 hover:bg-black/20 transition-colors">
                              <Eye className="w-4 h-4 text-[#f5f5f4]" />
                              <span className="text-[8px] sm:text-[9px] font-sans text-[#f5f5f4] mt-0.5 font-medium text-center px-0.5">
                                {language === 'my' ? 'ဖွင့်မည်' : language === 'ja' ? 'めくる' : 'Reveal'}
                              </span>
                            </div>
                          </div>
                        )
                      ) : (
                        /* Empty Slot Placeholder */
                        <span className="text-xs font-mono text-[#78716c]">
                          {idx + 1}
                        </span>
                      )}
                    </div>

                    {/* Card Name Under Slot */}
                    <div className="mt-1 text-center max-w-[80px] sm:max-w-[100px] h-4">
                      {drawn && drawn.revealed && (
                        <span className="text-[9px] sm:text-[10px] font-serif text-[#f5f5f4] truncate block">
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
              <div className="text-center text-[11px] sm:text-xs font-sans text-[#a8a29e] mb-3 px-2">
                <span>{language === 'my' ? 'ကတ်ပြားပေါ်သို့ မျှားတင်ပြီး ကံကြမ္မာကတ်ကို နှိပ်၍ ဆွဲယူပါ' : language === 'ja' ? 'カードに触れて直感で1枚ずつ引いてください' : 'Hover and click to draw your destiny'}</span>
              </div>

              {/* Fan Deck Arc Container */}
              <div className="relative h-36 sm:h-52 w-full max-w-full sm:max-w-3xl flex justify-center items-end select-none overflow-visible px-4">
                {fanDeck.map((card, idx) => {
                  const isTaken = takenIndices.includes(idx);
                  const isHovered = hoveredFanIndex === idx;
                  const total = fanDeck.length;
                  const isMobile = windowWidth < 640;
                  const isSmallMobile = windowWidth < 380;
                  
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
                        opacity: isTaken ? 0.15 : 1
                      }}
                      className={`craft-card-sheen absolute bottom-0 w-10 h-16 sm:w-16 sm:h-26 md:w-20 md:h-32 rounded-lg overflow-hidden border border-[#292524] bg-[#141210] cursor-pointer transition-all duration-200 ease-out origin-bottom ${
                        isTaken ? 'pointer-events-none' : 'hover:border-[#78716c]'
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
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {allDrawn && !allRevealed && (
              <button
                onClick={handleRevealAll}
                className="btn-secondary h-10 px-5 text-xs sm:text-sm flex items-center space-x-2"
              >
                <Eye className="w-4 h-4" />
                <span>{UI_TRANSLATIONS.revealAllBtn[language]}</span>
              </button>
            )}

            {allRevealed && (
              <button
                onClick={handleReadCards}
                className="btn-primary h-11 px-7 text-xs sm:text-sm tracking-wider uppercase flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{UI_TRANSLATIONS.readBtn[language]}</span>
              </button>
            )}

            <button
              onClick={onReset}
              className="text-xs font-sans text-[#78716c] hover:text-[#f5f5f4] underline transition-colors px-3 py-2"
            >
              {language === 'my' ? 'အစမှ ပြန်စမည်' : language === 'ja' ? '最初からやり直す' : 'Start Over'}
            </button>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-[#141210] border border-[#292524] text-[11px] font-sans text-[#78716c]">
            <Keyboard className="w-3.5 h-3.5 text-[#a8a29e]" />
            <span>Shortcuts: Press <kbd>Space</kbd> or <kbd>Enter</kbd> to draw & reveal</span>
          </div>
        </>
      )}

    </div>
  );
};
