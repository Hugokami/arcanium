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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl h-[88vh] rounded-2xl p-1 bg-gradient-to-b from-[#d4af37]/40 via-[#8a7326]/20 to-[#140c2d] border border-[#8a7326] shadow-2xl overflow-hidden flex flex-col">
        
        <div className="rounded-xl w-full h-full bg-[#0e0720] flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                <Scroll className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl font-serif font-bold text-[#d4af37]">
                  {UI_TRANSLATIONS.journalBtn[language]}
                </h2>
                <p className="text-xs text-zinc-400 font-serif">
                  {entries.length} {language === 'my' ? 'ခု မှတ်တမ်းတင်ထားသည်' : language === 'ja' ? '件の記録' : 'Readings Recorded'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Filter */}
          <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions, notes, cards..."
                className="w-full pl-9 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-200 placeholder-zinc-500 font-serif focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <button
              onClick={() => setFilterFavOnly(!filterFavOnly)}
              className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-serif transition-all ${
                filterFavOnly ? 'bg-[#d4af37] text-black font-bold' : 'bg-white/5 hover:bg-white/10 text-zinc-300'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Favorites</span>
            </button>
          </div>

          {/* Entries */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
            {filteredEntries.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <Bookmark className="w-10 h-10 text-zinc-600 mx-auto" />
                <h3 className="text-sm font-serif text-zinc-400">
                  {entries.length === 0 ? 'No readings saved yet' : 'No matching records found'}
                </h3>
              </div>
            ) : (
              filteredEntries.map(entry => (
                <div
                  key={entry.id}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#8a7326]/60 transition-all space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-400">
                        <Calendar className="w-3 h-3 text-[#d4af37]" />
                        <span>{new Date(entry.timestamp).toLocaleDateString()}</span>
                        <span>•</span>
                        <span className="text-[#d4af37]">{entry.spread.name[language]}</span>
                        {entry.partnerProfile && (
                          <>
                            <span>•</span>
                            <span className="text-rose-300 font-semibold flex items-center gap-1">
                              ♥ {entry.partnerProfile.name} ({entry.partnerProfile.zodiacSign?.symbol})
                            </span>
                          </>
                        )}
                      </div>
                      <h4 className="text-sm font-serif font-bold text-[#e8e0f5] truncate">
                        "{entry.question}"
                      </h4>
                      {entry.userNotes && (
                        <p className="text-xs text-zinc-300 italic font-serif bg-black/40 p-2 rounded border border-white/5">
                          "{entry.userNotes}"
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-1">
                      {entry.favorite && <Star className="w-3.5 h-3.5 text-[#d4af37] fill-current" />}
                      <button
                        onClick={() => {
                          audioService.playCardSlide();
                          onSelectEntry(entry);
                        }}
                        className="px-2.5 py-1 rounded bg-[#d4af37]/15 hover:bg-[#d4af37]/30 text-[#d4af37] text-xs font-serif flex items-center space-x-1"
                      >
                        <Eye className="w-3 h-3" />
                        <span>View</span>
                      </button>
                      <button
                        onClick={() => onDeleteEntry(entry.id)}
                        className="p-1 text-zinc-500 hover:text-rose-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {entry.drawnCards.map((dc, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-black/50 border border-white/5 text-[10px] font-serif text-zinc-300">
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
    </div>
  );
};
