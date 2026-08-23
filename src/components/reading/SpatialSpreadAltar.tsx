import React from 'react';
import { DrawnCard, Language, SpreadDefinition } from '../../types/tarot';
import { audioService } from '../../services/audioService';

interface SpatialSpreadAltarProps {
  drawnCards: DrawnCard[];
  spread: SpreadDefinition;
  language: Language;
  onCardClick?: (card: DrawnCard) => void;
}

export const SpatialSpreadAltar: React.FC<SpatialSpreadAltarProps> = ({
  drawnCards,
  spread,
  language,
  onCardClick
}) => {
  const getCard = (index: number) => drawnCards[index] || null;

  const renderCardItem = (
    dc: DrawnCard | null,
    positionLabel?: string,
    extraClasses = ''
  ) => {
    if (!dc) return null;

    return (
      <div
        onClick={() => {
          audioService.playCardHover();
          if (onCardClick) onCardClick(dc);
        }}
        className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 ${extraClasses}`}
      >
        <div className="craft-card-sheen relative w-14 h-22 sm:w-18 sm:h-28 md:w-20 md:h-32 rounded-xl overflow-hidden border-2 border-[#d4af37]/60 group-hover:border-amber-300 shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] bg-black transition-all">
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] pointer-events-none z-10 rounded-xl" />
          <img
            src={`/cards/${dc.card.file}`}
            alt={dc.card.name[language]}
            style={{ transform: dc.isReversed ? 'rotate(180deg)' : 'none' }}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {dc.isReversed && (
            <span className="absolute bottom-1 right-1 px-1 py-0.2 text-[8px] font-sans font-bold bg-purple-900/90 text-purple-200 rounded z-20 border border-purple-400/40">
              Rev
            </span>
          )}
        </div>
        
        <div className="mt-1 text-center max-w-[80px] sm:max-w-[90px]">
          <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-amber-300/80 truncate">
            {positionLabel || dc.position.name[language]}
          </div>
          <div className="text-[10px] sm:text-[11px] font-serif font-semibold text-amber-100 truncate group-hover:text-amber-200">
            {dc.card.name[language]}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative w-full p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-[#100a20]/90 to-[#090514]/95 border border-[#d4af37]/35 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
      
      {/* Altar Sacred Geometry background circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full border border-[#d4af37]/50" />
        <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-[#d4af37]/40 animate-spin-slow" />
      </div>

      <div className="relative z-10">
        
        {/* 1. CELTIC CROSS (10 Cards) */}
        {spread.id === 'celtic_cross' && (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 py-4">
            
            {/* Left: The Sacred Cross (Positions 1-6) */}
            <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] flex items-center justify-center">
              
              {/* Top: 5. Crown */}
              <div className="absolute top-0 inset-x-0 flex justify-center">
                {renderCardItem(getCard(4), '5. Crown')}
              </div>

              {/* Bottom: 3. Root */}
              <div className="absolute bottom-0 inset-x-0 flex justify-center">
                {renderCardItem(getCard(2), '3. Root')}
              </div>

              {/* Left: 4. Past */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
                {renderCardItem(getCard(3), '4. Past')}
              </div>

              {/* Right: 6. Future */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                {renderCardItem(getCard(5), '6. Future')}
              </div>

              {/* Center: 1. Present + 2. Obstacle Crossing */}
              <div className="relative flex items-center justify-center">
                {/* Base Card 1 */}
                <div className="relative z-10">
                  {renderCardItem(getCard(0), '1. Present')}
                </div>
                {/* Crossing Card 2 */}
                {getCard(1) && (
                  <div
                    onClick={() => {
                      audioService.playCardHover();
                      if (onCardClick) onCardClick(getCard(1)!);
                    }}
                    className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-90 hover:opacity-100 cursor-pointer transition-all hover:scale-105"
                  >
                    <div className="w-14 h-22 sm:w-16 sm:h-26 rounded-lg overflow-hidden border-2 border-rose-400/80 shadow-2xl bg-black">
                      <img
                        src={`/cards/${getCard(1)!.card.file}`}
                        alt={getCard(1)!.card.name[language]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: The Staff / Column (Positions 7, 8, 9, 10 stacked) */}
            <div className="flex flex-row lg:flex-col items-center justify-center gap-3 sm:gap-4 pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-white/[0.1] pt-4 lg:pt-0">
              {renderCardItem(getCard(9), '10. Outcome')}
              {renderCardItem(getCard(8), '9. Hopes/Fears')}
              {renderCardItem(getCard(7), '8. Environment')}
              {renderCardItem(getCard(6), '7. Self')}
            </div>

          </div>
        )}

        {/* 2. CHAKRA ALIGNMENT (7 Cards Vertical) */}
        {spread.id === 'chakra_spread' && (
          <div className="flex flex-col items-center justify-center space-y-4 py-2">
            {[
              { idx: 6, label: '7. Crown Chakra (Violet 🜂)', glow: 'border-purple-400' },
              { idx: 5, label: '6. Third Eye (Indigo 👁️)', glow: 'border-indigo-400' },
              { idx: 4, label: '5. Throat (Cyan 🗣️)', glow: 'border-cyan-400' },
              { idx: 3, label: '4. Heart (Emerald 💚)', glow: 'border-emerald-400' },
              { idx: 2, label: '3. Solar Plexus (Gold ☀️)', glow: 'border-amber-400' },
              { idx: 1, label: '2. Sacral (Orange 🌊)', glow: 'border-orange-400' },
              { idx: 0, label: '1. Root Chakra (Ruby 🏛️)', glow: 'border-red-500' }
            ].map(ch => (
              <div key={ch.idx} className="flex items-center space-x-4 w-full max-w-sm justify-between p-2 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-serif text-amber-200">{ch.label}</div>
                {renderCardItem(getCard(ch.idx), undefined, ch.glow)}
              </div>
            ))}
          </div>
        )}

        {/* 3. TWO PATHS DECISION FORK (5 Cards) */}
        {spread.id === 'decision_fork' && (
          <div className="space-y-8 py-4">
            {/* Two Branches Top */}
            <div className="grid grid-cols-2 gap-6 sm:gap-12 max-w-xl mx-auto">
              
              {/* Path A */}
              <div className="p-4 rounded-2xl bg-amber-500/[0.04] border border-amber-500/30 flex flex-col items-center space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
                  {language === 'my' ? 'လမ်းကြောင်း (က)' : language === 'ja' ? '道 A' : 'Path A'}
                </div>
                <div className="flex flex-col items-center space-y-3">
                  {renderCardItem(getCard(1), 'Trajectory')}
                  {renderCardItem(getCard(2), 'Outcome')}
                </div>
              </div>

              {/* Path B */}
              <div className="p-4 rounded-2xl bg-purple-500/[0.04] border border-purple-500/30 flex flex-col items-center space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold">
                  {language === 'my' ? 'လမ်းကြောင်း (ခ)' : language === 'ja' ? '道 B' : 'Path B'}
                </div>
                <div className="flex flex-col items-center space-y-3">
                  {renderCardItem(getCard(3), 'Trajectory')}
                  {renderCardItem(getCard(4), 'Outcome')}
                </div>
              </div>

            </div>

            {/* Crossroads Root Bottom */}
            <div className="flex flex-col items-center pt-2">
              {renderCardItem(getCard(0), 'Crossroads (Root)')}
            </div>
          </div>
        )}

        {/* 4. FIVE-CARD CROSS */}
        {spread.id === 'cross' && (
          <div className="relative w-[300px] h-[340px] sm:w-[360px] sm:h-[380px] mx-auto flex items-center justify-center py-4">
            {/* Top Advice */}
            <div className="absolute top-0 inset-x-0 flex justify-center">
              {renderCardItem(getCard(2), 'Advice')}
            </div>
            {/* Left Obstacle */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
              {renderCardItem(getCard(1), 'Obstacle')}
            </div>
            {/* Center Situation */}
            <div className="flex items-center justify-center">
              {renderCardItem(getCard(0), 'Situation')}
            </div>
            {/* Right Hidden */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
              {renderCardItem(getCard(3), 'Hidden Force')}
            </div>
            {/* Bottom Outcome */}
            <div className="absolute bottom-0 inset-x-0 flex justify-center">
              {renderCardItem(getCard(4), 'Outcome')}
            </div>
          </div>
        )}

        {/* 5. RELATIONSHIP SPREAD (5 Cards) */}
        {spread.id === 'celtic' && (
          <div className="space-y-6 max-w-xl mx-auto py-4">
            <div className="grid grid-cols-3 gap-3 items-center">
              <div className="flex justify-center">{renderCardItem(getCard(0), 'You')}</div>
              <div className="flex flex-col items-center space-y-3">
                {renderCardItem(getCard(2), 'The Bond')}
                {renderCardItem(getCard(3), 'The Challenge')}
              </div>
              <div className="flex justify-center">{renderCardItem(getCard(1), 'Them')}</div>
            </div>
            <div className="flex justify-center pt-2">
              {renderCardItem(getCard(4), 'The Path Forward')}
            </div>
          </div>
        )}

        {/* 6. THREE CARDS (Past, Present, Future) */}
        {spread.id === 'three' && (
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto py-6 items-center justify-center">
            <div className="flex justify-center">{renderCardItem(getCard(0), 'Past')}</div>
            <div className="flex justify-center">{renderCardItem(getCard(1), 'Present')}</div>
            <div className="flex justify-center">{renderCardItem(getCard(2), 'Future')}</div>
          </div>
        )}

        {/* 7. ONE CARD ORACLE */}
        {spread.id === 'single' && (
          <div className="flex justify-center py-6">
            {renderCardItem(getCard(0), 'The Oracle Answer')}
          </div>
        )}

      </div>
    </div>
  );
};
