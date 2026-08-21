import React, { useState, useMemo } from 'react';
import { X, Printer, Copy, Check, Scroll } from 'lucide-react';
import { Language, ReadingResultData } from '../../types/tarot';
import { UI_TRANSLATIONS } from '../../data/translations';
import { analyzeReading } from '../../services/deepReadingEngine';

interface ShareScrollModalProps {
  reading: ReadingResultData;
  language: Language;
  onClose: () => void;
}

export const ShareScrollModal: React.FC<ShareScrollModalProps> = ({
  reading,
  language,
  onClose
}) => {
  const [copied, setCopied] = useState(false);

  const activeAnalysis = useMemo(() => {
    return analyzeReading(reading.topic, reading.drawnCards, reading.spread, language);
  }, [reading.topic, reading.drawnCards, reading.spread, language]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const text = `📜 ARCANIUM — SACRED TAROT SCROLL 📜\n\n` +
      `Question: "${reading.question}"\n` +
      `Spread: ${reading.spread.name[language]}\n` +
      `Date: ${new Date(reading.timestamp).toLocaleDateString()}\n\n` +
      `--- CARDS DRAWN ---\n` +
      reading.drawnCards.map((c, i) => `${i + 1}. [${c.position.name[language]}] - ${c.card.name[language]} ${c.isReversed ? '(Reversed)' : '(Upright)'}\n   ${c.isReversed ? c.card.reversedMeaning[language] : c.card.uprightMeaning[language]}`).join('\n\n') +
      `\n\n--- SUMMARY ---\n${activeAnalysis.summary}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl p-1 bg-gradient-to-b from-[#d4af37]/60 via-[#8a7326]/30 to-[#140c2d] border border-[#d4af37] shadow-2xl overflow-hidden flex flex-col">
        
        <div className="rounded-xl w-full h-full bg-[#120a26] border border-[#8a7326]/40 flex flex-col overflow-hidden">
          
          {/* Action Topbar (Hidden on Print) */}
          <div className="p-3.5 border-b border-[#8a7326]/30 bg-black/40 flex items-center justify-between print:hidden">
            <div className="flex items-center space-x-2 text-[#d4af37] font-serif text-xs uppercase tracking-wider font-bold">
              <Scroll className="w-4 h-4" />
              <span>{UI_TRANSLATIONS.exportScrollBtn[language]}</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1 rounded-full bg-[#d4af37]/15 hover:bg-[#d4af37]/30 text-[#d4af37] text-xs font-serif flex items-center space-x-1 border border-[#8a7326]"
              >
                <Printer className="w-3 h-3" />
                <span>Print</span>
              </button>

              <button
                onClick={handleCopy}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-serif flex items-center space-x-1 border border-white/10"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? UI_TRANSLATIONS.copiedBtn[language] : UI_TRANSLATIONS.copyBtn[language]}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Parchment Printable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 bg-gradient-to-b from-[#140c2d] to-[#0d0720] text-[#e8e0f5] font-serif">
            
            {/* Scroll Header */}
            <div className="text-center space-y-2 border-b border-[#8a7326]/40 pb-5">
              <div className="text-[#d4af37] text-xs font-mono uppercase tracking-[0.25em]">
                ✦ SACRED ARCANIUM DECREE ✦
              </div>
              <h1 className="text-xl sm:text-2xl font-serif font-normal text-[#d4af37] tracking-wider">
                {reading.spread.name[language]}
              </h1>
              <p className="text-xs sm:text-sm text-zinc-200 italic">
                "{reading.question}"
              </p>
              <div className="text-[10px] font-mono text-zinc-400">
                {new Date(reading.timestamp).toLocaleDateString()}
              </div>
            </div>

            {/* Drawn Cards Summary */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                {language === 'my' ? 'ဖွင့်လှစ်ခဲ့သော ကတ်ပြားများ:' : language === 'ja' ? '展開されたカード:' : 'Cards Revealed:'}
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {reading.drawnCards.map((dc, i) => (
                  <div key={i} className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center space-x-3">
                    <img
                      src={`/cards/${dc.card.file}`}
                      alt={dc.card.name[language]}
                      style={{ transform: dc.isReversed ? 'rotate(180deg)' : 'none' }}
                      className="w-10 h-16 object-contain rounded bg-black flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase text-[#d4af37]">{dc.position.name[language]}</div>
                      <div className="text-xs sm:text-sm font-bold text-white truncate">{dc.card.name[language]} {dc.isReversed ? `(${UI_TRANSLATIONS.reversedTag[language]})` : ''}</div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1">{dc.isReversed ? dc.card.reversedKeywords[language][0] : dc.card.uprightKeywords[language][0]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#8a7326]/40 space-y-1.5">
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                {UI_TRANSLATIONS.sectionTitles.summary[language]}:
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic">
                {activeAnalysis.summary}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
