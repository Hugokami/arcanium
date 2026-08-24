import React, { useState } from 'react';
import { X, Search, Bookmark, Trash2, Calendar, Star, Eye, Scroll } from 'lucide-react';
import { JournalEntry, Language, ReadingResultData } from '../../types/tarot';
import { UI_TRANSLATIONS } from '../../data/translations';
import { audioService } from '../../services/audioService';

interface JournalModalProps {
  entries: JournalEntry[];
  language: Language;
  onClose: () => void;
  onDeleteEntry: (id: string) => void;
  onSelectEntry: (entry: ReadingResultData) => void;
}

export const JournalModal: React.FC<JournalModalProps> = ({
  entries,
  language,
  onClose,
  onDeleteEntry,
  onSelectEntry
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterFavOnly, setFilterFavOnly] = useState<boolean>(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filteredEntries = entries.filter(e => {
    if (filterFavOnly && !e.favorite) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        e.question.toLowerCase().includes(q) ||
        e.topic.toLowerCase().includes(q) ||
        (e.userNotes && e.userNotes.toLowerCase().includes(q)) ||
        e.drawnCards.some(c => c.card.name[language].toLowerCase().includes(q) || c.card.name.en.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl h-[88vh] rounded-2xl bg-[#0c0a09] border border-[#292524] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#292524] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#141210] border border-[#292524] flex items-center justify-center text-[#f5f5f4]">
              <Scroll className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-[#f5f5f4]">
                {UI_TRANSLATIONS.journalBtn[language]}
              </h2>
              <p className="text-xs text-[#78716c] font-sans">
                {entries.length} {language === 'my' ? 'ခု မှတ်တမ်းတင်ထားသည်' : language === 'ja' ? '件の記録' : 'Readings Recorded'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg border border-transparent hover:border-[#292524] text-[#78716c] hover:text-[#f5f5f4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Filter */}
        <div className="p-4 border-b border-[#292524] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-3.5 h-3.5 text-[#78716c] absolute left-3 top-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions, notes, cards..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#141210] border border-[#292524] text-xs text-[#f5f5f4] placeholder-[#78716c] font-sans focus:outline-none focus:border-[#78716c]"
            />
          </div>

          <button
            onClick={() => setFilterFavOnly(!filterFavOnly)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-sans border transition-all ${
              filterFavOnly
                ? 'bg-[#292524] text-[#f5f5f4] border-[#78716c]'
                : 'bg-[#141210] hover:bg-[#1c1917] text-[#a8a29e] border-[#292524]'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Favorites</span>
          </button>
        </div>

        {/* Entries */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-16 space-y-2">
              <Bookmark className="w-8 h-8 text-[#78716c] mx-auto opacity-50" />
              <h3 className="text-xs text-[#78716c] font-sans">
                {entries.length === 0 ? 'No readings saved yet' : 'No matching records found'}
              </h3>
            </div>
          ) : (
            filteredEntries.map(entry => (
              <div
                key={entry.id}
                className="p-4 rounded-xl bg-[#141210] hover:bg-[#1c1917] border border-[#292524] hover:border-[#78716c] transition-all space-y-2.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center space-x-2 text-[10px] font-mono text-[#78716c]">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(entry.timestamp).toLocaleDateString()}</span>
                      <span>•</span>
                      <span className="text-[#a8a29e]">{entry.spread.name[language]}</span>
                      {entry.partnerProfile && (
                        <>
                          <span>•</span>
                          <span className="text-[#fca5a5] font-semibold flex items-center gap-1">
                            ♥ {entry.partnerProfile.name} ({entry.partnerProfile.zodiacSign?.symbol})
                          </span>
                        </>
                      )}
                    </div>
                    <h4 className="text-sm font-serif font-bold text-[#f5f5f4] truncate">
                      "{entry.question}"
                    </h4>
                    {entry.userNotes && (
                      <p className="text-xs text-[#a8a29e] italic font-sans bg-[#0c0a09] p-2 rounded border border-[#292524]">
                        "{entry.userNotes}"
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-1">
                    {entry.favorite && <Star className="w-3.5 h-3.5 text-[#f5f5f4] fill-current" />}
                    <button
                      onClick={() => {
                        audioService.playCardSlide();
                        onSelectEntry(entry);
                      }}
                      className="px-2.5 py-1 rounded bg-[#1c1917] hover:bg-[#292524] text-[#f5f5f4] text-xs font-sans flex items-center space-x-1 border border-[#292524]"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => onDeleteEntry(entry.id)}
                      className="p-1 text-[#78716c] hover:text-[#fca5a5]"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {entry.drawnCards.map((dc, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#0c0a09] border border-[#292524] text-[10px] font-mono text-[#a8a29e]">
                      {dc.card.name[language]} {dc.isReversed ? '↺' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
