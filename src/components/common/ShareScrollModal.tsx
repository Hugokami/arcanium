import React, { useState, useMemo } from 'react';
import { X, Printer, Copy, Check, Scroll, Image as ImageIcon, Download, Loader2 } from 'lucide-react';
import { Language, ReadingResultData } from '../../types/tarot';
import { UI_TRANSLATIONS } from '../../data/translations';
import { analyzeReading } from '../../services/deepReadingEngine';
import { SpreadCanvasExportService } from '../../services/spreadCanvasExportService';
import { AstrologyService } from '../../services/astrologyService';

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
  const [isExportingPng, setIsExportingPng] = useState(false);
  const [pngFormat, setPngFormat] = useState<'landscape' | 'square' | 'story'>('landscape');

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const activeAnalysis = useMemo(() => {
    return analyzeReading(reading.topic, reading.drawnCards, reading.spread, language);
  }, [reading.topic, reading.drawnCards, reading.spread, language]);

  const handlePrint = () => {
    window.print();
  };

  const handleExportPng = async () => {
    try {
      setIsExportingPng(true);
      const profile = AstrologyService.loadProfile();
      await SpreadCanvasExportService.exportSpreadImage(reading, language, profile, { format: pngFormat });
    } catch (err) {
      console.error('Failed to export PNG spread image:', err);
    } finally {
      setIsExportingPng(false);
    }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl bg-[#0c0a09] border border-[#292524] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Action Topbar (Hidden on Print) */}
        <div className="p-3.5 border-b border-[#292524] bg-[#141210] flex flex-wrap items-center justify-between gap-2 print:hidden">
          <div className="flex items-center space-x-2 text-[#f5f5f4] font-mono text-xs uppercase tracking-wider">
            <Scroll className="w-4 h-4 text-[#a8a29e]" />
            <span>{UI_TRANSLATIONS.exportScrollBtn[language]}</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* Format Picker */}
            <select
              value={pngFormat}
              onChange={(e) => setPngFormat(e.target.value as 'landscape' | 'square' | 'story')}
              className="px-2 py-1 rounded-lg bg-[#0c0a09] border border-[#292524] text-[#a8a29e] text-xs font-mono focus:border-[#78716c] focus:outline-none"
            >
              <option value="landscape">16:9 Landscape</option>
              <option value="square">1:1 Square</option>
              <option value="story">9:16 Story</option>
            </select>

            {/* Export PNG */}
            <button
              onClick={handleExportPng}
              disabled={isExportingPng}
              className="px-3 py-1 rounded-lg bg-[#f5f5f4] hover:bg-white text-[#0c0a09] text-xs font-sans font-medium flex items-center space-x-1.5 transition-colors disabled:opacity-50"
            >
              {isExportingPng ? (
                <Loader2 className="w-3 h-3 animate-spin text-[#0c0a09]" />
              ) : (
                <Download className="w-3 h-3 text-[#0c0a09]" />
              )}
              <span>{isExportingPng ? 'Rendering...' : 'PNG Graphic'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-2.5 py-1 rounded-lg bg-[#0c0a09] hover:bg-[#1c1917] text-[#f5f5f4] text-xs font-sans flex items-center space-x-1 border border-[#292524]"
            >
              <Printer className="w-3 h-3" />
              <span>Print</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded-lg bg-[#0c0a09] hover:bg-[#1c1917] text-[#a8a29e] hover:text-[#f5f5f4] text-xs font-sans flex items-center space-x-1 border border-[#292524]"
            >
              {copied ? <Check className="w-3 h-3 text-[#86efac]" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? UI_TRANSLATIONS.copiedBtn[language] : UI_TRANSLATIONS.copyBtn[language]}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded-lg border border-transparent hover:border-[#292524] text-[#78716c] hover:text-[#f5f5f4] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Parchment Printable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-[#0c0a09] text-[#f5f5f4] font-sans">
          
          {/* Scroll Header */}
          <div className="text-center space-y-1.5 border-b border-[#292524] pb-4">
            <div className="text-[#78716c] text-xs font-mono uppercase tracking-widest">
              ✦ SACRED ARCANIUM DECREE ✦
            </div>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-[#f5f5f4]">
              {reading.spread.name[language]}
            </h1>
            <p className="text-xs sm:text-sm text-[#a8a29e] italic">
              "{reading.question}"
            </p>
            <div className="text-[10px] font-mono text-[#78716c]">
              {new Date(reading.timestamp).toLocaleDateString()}
            </div>
          </div>

          {/* Drawn Cards Summary */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#a8a29e]">
              {language === 'my' ? 'ဖွင့်လှစ်ခဲ့သော ကတ်ပြားများ:' : language === 'ja' ? '展開されたカード:' : 'Cards Revealed:'}
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {reading.drawnCards.map((dc, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#141210] border border-[#292524] flex items-center space-x-3">
                  <img
                    src={`/cards/${dc.card.file}`}
                    alt={dc.card.name[language]}
                    style={{ transform: dc.isReversed ? 'rotate(180deg)' : 'none' }}
                    className="w-9 h-14 object-contain rounded bg-[#0c0a09] border border-[#292524] flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase font-mono text-[#78716c]">{dc.position.name[language]}</div>
                    <div className="text-xs sm:text-sm font-serif font-bold text-[#f5f5f4] truncate">{dc.card.name[language]} {dc.isReversed ? `(${UI_TRANSLATIONS.reversedTag[language]})` : ''}</div>
                    <div className="text-[11px] text-[#a8a29e] line-clamp-1">{dc.isReversed ? dc.card.reversedKeywords[language][0] : dc.card.uprightKeywords[language][0]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 rounded-xl bg-[#141210] border border-[#292524] space-y-1">
            <span className="text-xs font-mono text-[#a8a29e] uppercase tracking-wider block">
              {UI_TRANSLATIONS.sectionTitles.summary[language]}:
            </span>
            <p className="text-xs sm:text-sm text-[#f5f5f4] leading-relaxed italic">
              {activeAnalysis.summary}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
