import React, { useState, useEffect } from 'react';
import { DrawnCard, Language, SpreadDefinition, TarotCard } from '../../types/tarot';
import { TAROT_DECK } from '../../data/tarotDeck';
import { UI_TRANSLATIONS } from '../../data/translations';
import { audioService } from '../../services/audioService';
import confetti from 'canvas-confetti';
import { Sparkles, Eye, RotateCw } from 'lucide-react';

interface CardFanTableProps {
  topic: string;
  question: string;
  spread: SpreadDefinition;
  language: Language;
  onFinishReading: (drawnCards: DrawnCard[]) => void;
  onReset: () => void;
}

export const CardFanTable: React.FC<CardFanTableProps> = ({
  topic,
  question,
  spread,
  language,
  onFinishReading,
  onReset
}) => {
  const [fanDeck, setFanDeck] = useState<TarotCard[]>([]);
  const [takenIndices, setTakenIndices] = useState<number[]>([]);
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [hoveredFanIndex, setHoveredFanIndex] = useState<number | null>(null);

  // Initialize randomized fan of 24 cards from full deck
  useEffect(() => {
    const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
    setFanDeck(shuffled.slice(0, 24));
    audioService.playShuffle();
  }, [spread]);

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
        particleCount: 50,
        spread: 60,
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
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#d4af37', '#f5dfa8', '#c4b5fd', '#ffffff']
    });
    audioService.playCelebrationChime();
  };

  const handleReadCards = () => {
    audioService.playSingingBowl(432);
    // Ensure all cards are revealed
    const updated = drawnCards.map(c => ({ ...c, revealed: true }));
    onFinishReading(updated);
  };

  const allDrawn = drawnCards.length === picksNeeded;
  const allRevealed = allDrawn && drawnCards.every(c => c.revealed);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:py-10 space-y-8 flex flex-col items-center animate-in fade-in duration-500">
      
      {/* Step 3 Header Banner */}
      <div className="panel p-4 sm:p-6 rounded-2xl bg-[#140c2d]/85 border border-[#8a7326]/60 text-center max-w-2xl w-full shadow-2xl space-y-2">
        <h2 className="text-[#d4af37] font-serif tracking-[0.15em] text-xs sm:text-sm uppercase font-semibold">
          {UI_TRANSLATIONS.step3Title[language]} <span className="text-amber-200 font-bold">{picksNeeded === 1 ? UI_TRANSLATIONS.oneCardPick[language] : `${picksNeeded} ${UI_TRANSLATIONS.cardsPick[language]}`}</span>.
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300 font-serif italic truncate">
          "{question}"
        </p>
        <div className="text-[11px] font-serif text-[#d4af37]/80">
          {picksLeft > 0 ? (
            <span>
              {language === 'my'
                ? `နောက်ထပ် ${picksLeft} ကတ် ရွေးချယ်ရန် ကျန်ရှိပါသည်`
                : language === 'ja'
                ? `あと ${picksLeft} 枚のカードを選んでください`
                : `Choose ${picksLeft} more card${picksLeft > 1 ? 's' : ''}`}
            </span>
          ) : (
            <span className="text-emerald-400 font-medium">
              {language === 'my'
                ? 'ကတ်များ အားလုံး ရွေးချယ်ပြီးပါပြီ'
                : language === 'ja'
                ? 'すべてのカードが選択されました'
                : 'All cards selected'}
            </span>
          )}
        </div>
      </div>

      {/* Fan of Face-Down Cards (Fully unclipped, spacious arc) */}
      {!allDrawn && (
        <div className="relative w-full max-w-5xl h-[340px] sm:h-[400px] flex items-center justify-center select-none overflow-visible my-2">
          {/* Subtle cosmic aura beneath the fan */}
          <div className="absolute bottom-6 w-96 h-20 bg-gradient-to-t from-[#d4af37]/15 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative w-full max-w-3xl h-full flex items-center justify-center overflow-visible">
            {fanDeck.map((card, i) => {
              const total = fanDeck.length;
              const angle = (i - (total - 1) / 2) * 4.2;
              const lift = Math.abs(i - (total - 1) / 2) * 1.5;
              const isTaken = takenIndices.includes(i);
              const isHovered = hoveredFanIndex === i && !isTaken;

              return (
                <div
                  key={card.id + i}
                  onClick={() => handlePickCard(card, i)}
                  onMouseEnter={() => {
                    if (!isTaken) {
                      setHoveredFanIndex(i);
                      audioService.playCardHover();
                    }
                  }}
                  onMouseLeave={() => setHoveredFanIndex(null)}
                  style={{
                    transformOrigin: '50% 115%',
                    transform: `translateX(-50%) rotate(${angle}deg) translateY(${isHovered ? -50 : lift}px) scale(${isHovered ? 1.16 : 1})`,
                    zIndex: isHovered ? 100 : i + 10,
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s',
                  }}
                  className={`absolute left-1/2 bottom-12 sm:bottom-16 w-24 sm:w-28 h-40 sm:h-48 rounded-xl overflow-hidden shadow-2xl cursor-pointer border border-[#8a7326]/70 ${
                    isTaken
                      ? 'opacity-15 pointer-events-none grayscale'
                      : 'hover:brightness-125 hover:border-[#d4af37] hover:shadow-gold-glow-lg'
                  }`}
                >
                  <img
                    src="/cards/CardBacks.png"
                    alt="Tarot Back"
                    className="w-full h-full object-cover pointer-events-none rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Table Slots for Drawn Cards */}
      <div className="w-full space-y-6 pt-2">
        <div className="flex flex-wrap gap-6 sm:gap-10 justify-center items-start py-2">
          {spread.positions.map((pos, idx) => {
            const drawn = drawnCards[idx];
            const isFlipped = drawn ? drawn.revealed : false;

            return (
              <div key={pos.id} className="flex flex-col items-center gap-2.5 w-36 sm:w-44 select-none">
                
                {/* Slot Label */}
                <div className="text-[11px] sm:text-xs font-serif uppercase tracking-wider text-[#d4af37] text-center min-h-[2.5em] flex items-center justify-center opacity-90">
                  {pos.name[language]}
                </div>

                {/* 3D Card Slot */}
                <div
                  onClick={() => drawn && handleFlipCard(idx)}
                  style={{ perspective: '1000px' }}
                  className={`relative w-32 sm:w-40 h-52 sm:h-64 rounded-xl cursor-pointer transition-transform duration-300 ${
                    drawn ? 'hover:-translate-y-2' : 'border border-dashed border-[#8a7326]/50 bg-white/5 flex items-center justify-center'
                  }`}
                >
                  {drawn ? (
                    <div
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
                        transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
                      }}
                      className="relative w-full h-full rounded-xl shadow-card-elevated"
                    >
                      {/* BACK of card */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                        }}
                        className="absolute inset-0 w-full h-full rounded-xl overflow-hidden border border-[#8a7326] shadow-md"
                      >
                        <img
                          src="/cards/CardBacks.png"
                          alt="Card Back"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                          <span className="text-[10px] font-serif uppercase tracking-widest text-[#d4af37] bg-black/70 px-2 py-0.5 rounded border border-[#8a7326]/50">
                            {UI_TRANSLATIONS.tapToFlip[language]}
                          </span>
                        </div>
                      </div>

                      {/* FRONT of card */}
                      <div
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                        className="absolute inset-0 w-full h-full rounded-xl overflow-hidden bg-black border border-[#d4af37] shadow-gold-glow flex flex-col"
                      >
                        <div className="relative flex-1 w-full overflow-hidden bg-black flex items-center justify-center">
                          <img
                            src={`/cards/${drawn.card.file}`}
                            alt={drawn.card.name[language]}
                            style={{
                              transform: drawn.isReversed ? 'rotate(180deg)' : 'none',
                            }}
                            className="w-full h-full object-contain p-0.5"
                          />

                          {drawn.isReversed && (
                            <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-[9px] font-serif text-rose-200">
                              ↺ {UI_TRANSLATIONS.reversedTag[language]}
                            </div>
                          )}
                        </div>

                        <div className="p-1.5 bg-[#120924] border-t border-[#8a7326]/40 text-center">
                          <div className="text-xs font-serif font-bold text-[#d4af37] truncate">
                            {drawn.card.name[language]}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-xs font-serif text-zinc-500 p-2 space-y-1">
                      <div className="text-lg">✦</div>
                      <div>Card {idx + 1}</div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Reveal Guidance & Action Buttons */}
      {allDrawn && (
        <div className="flex flex-col items-center space-y-4 pt-4 animate-in fade-in">
          {!allRevealed && (
            <p className="text-xs sm:text-sm text-zinc-300 font-serif italic text-center">
              {UI_TRANSLATIONS.flipHint[language]}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3">
            {!allRevealed && (
              <button
                onClick={handleRevealAll}
                className="px-6 py-2.5 rounded-xl border border-[#8a7326] bg-white/5 hover:bg-white/10 text-xs sm:text-sm font-serif text-[#d4af37] transition-all hover:border-[#d4af37]"
              >
                {UI_TRANSLATIONS.revealAllBtn[language]}
              </button>
            )}

            <button
              onClick={handleReadCards}
              className="px-8 py-3 rounded-xl bg-gradient-to-br from-[#2a1a55] to-[#1a0f35] border border-[#d4af37] text-[#d4af37] font-serif text-sm sm:text-base tracking-[0.15em] uppercase hover:shadow-gold-glow-lg transition-all active:scale-95 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{UI_TRANSLATIONS.readBtn[language]}</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
