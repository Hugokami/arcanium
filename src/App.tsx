import React, { useState, useEffect } from 'react';
import { MysticBackground } from './components/layout/MysticBackground';
import { Header } from './components/layout/Header';
import { ArcanaFlowSelector } from './components/home/ArcanaFlowSelector';
import { CardFanTable } from './components/reading/CardFanTable';
import { DeepReadingView } from './components/reading/DeepReadingView';
import { JournalModal } from './components/journal/JournalModal';
import { CardEncyclopediaModal } from './components/encyclopedia/CardEncyclopediaModal';
import { ShareScrollModal } from './components/common/ShareScrollModal';
import { UserProfileModal } from './components/profile/UserProfileModal';
import { DailyCardModal } from './components/reading/DailyCardModal';
import { EntranceIntro } from './components/layout/EntranceIntro';
import { SanctuaryLoader } from './components/layout/SanctuaryLoader';

import { DrawnCard, JournalEntry, Language, ReadingResultData, SpreadDefinition } from './types/tarot';
import { SPREAD_CONFIGS, TOPICS } from './data/translations';
import { analyzeReading } from './services/deepReadingEngine';
import { audioService } from './services/audioService';
import { AstrologyService } from './services/astrologyService';
import { UserProfile } from './types/userProfile';

const JOURNAL_STORAGE_KEY = 'arcana_tarot_journal_v2';

export function App() {
  // Active Language: 'en' | 'my' | 'ja'
  const [language, setLanguage] = useState<Language>('en');

  // App Flow State: 'select' | 'draw' | 'reading'
  const [stage, setStage] = useState<'select' | 'draw' | 'reading'>('select');

  // Current Session Data
  const [activeTopic, setActiveTopic] = useState<string>(TOPICS[0].title.en);
  const [activeQuestion, setActiveQuestion] = useState<string>(TOPICS[0].defaultQuestion.en);
  const [activeSpread, setActiveSpread] = useState<SpreadDefinition>(SPREAD_CONFIGS[1]);
  const [currentReading, setCurrentReading] = useState<ReadingResultData | null>(null);

  // User Natal Profile
  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    return AstrologyService.loadProfile();
  });

  // Intro & Preloader Animation State
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  // Modals
  const [isJournalOpen, setIsJournalOpen] = useState<boolean>(false);
  const [isCodexOpen, setIsCodexOpen] = useState<boolean>(false);
  const [isScrollOpen, setIsScrollOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isDailyCardOpen, setIsDailyCardOpen] = useState<boolean>(false);

  // Journal Persistence
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activePartnerProfile, setActivePartnerProfile] = useState<UserProfile | null>(() => AstrologyService.loadPartnerProfile());

  const saveJournalEntries = (newEntries: JournalEntry[]) => {
    setJournalEntries(newEntries);
    try {
      localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(newEntries));
    } catch {
      // ignore
    }
  };

  // Launch drawing phase (Step 3) from Step 1 & 2
  const handleStartDrawing = (
    topic: string,
    question: string,
    spread: SpreadDefinition,
    partnerProfile?: UserProfile | null
  ) => {
    setActiveTopic(topic);
    setActiveQuestion(question);
    setActiveSpread(spread);
    setActivePartnerProfile(partnerProfile || null);
    if (partnerProfile) {
      AstrologyService.savePartnerProfile(partnerProfile);
    }
    setStage('draw');
  };

  // Complete card selection and analyze (Step 4)
  const handleFinishReading = (drawnCards: DrawnCard[]) => {
    const profile = AstrologyService.loadProfile();
    const partner = activePartnerProfile;
    const analysis = analyzeReading(
      activeTopic,
      drawnCards,
      activeSpread,
      language,
      profile,
      partner
    );

    const readingData: ReadingResultData = {
      id: 'arcana-' + Date.now() + '-' + Math.random().toString(36).substr(2, 6),
      timestamp: Date.now(),
      topic: activeTopic,
      question: activeQuestion,
      spread: activeSpread,
      drawnCards,
      language,
      analysis,
      partnerProfile: partner
    };

    setCurrentReading(readingData);
    setStage('reading');
  };

  // Save to Journal
  const handleSaveToJournal = (reading: ReadingResultData, userNotes?: string, isFav?: boolean) => {
    const entry: JournalEntry = {
      ...reading,
      userNotes,
      favorite: isFav
    };
    const updated = [entry, ...journalEntries.filter(e => e.id !== reading.id)];
    saveJournalEntries(updated);
  };

  const handleDeleteJournalEntry = (id: string) => {
    const updated = journalEntries.filter(e => e.id !== id);
    saveJournalEntries(updated);
  };

  const handleSelectJournalEntry = (entry: ReadingResultData) => {
    setCurrentReading(entry);
    setLanguage(entry.language || 'en');
    setIsJournalOpen(false);
    setStage('reading');
  };

  const handleResetHome = () => {
    audioService.playCardSlide();
    setStage('select');
    setCurrentReading(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-[#d4af37]/30 selection:text-amber-200">
      
      {/* Background Starfield & Gradient Glow */}
      <MysticBackground />

      {/* Top Header */}
      <Header
        language={language}
        onSelectLanguage={setLanguage}
        onOpenJournal={() => setIsJournalOpen(true)}
        onOpenCodex={() => setIsCodexOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenDailyCard={() => setIsDailyCardOpen(true)}
        onResetHome={handleResetHome}
        journalCount={journalEntries.length}
        userProfile={userProfile}
      />

      {/* Main Experience Flows */}
      <main className="flex-1 flex flex-col justify-center">
        {stage === 'select' && (
          <ArcanaFlowSelector
            language={language}
            onStartDrawing={handleStartDrawing}
          />
        )}

        {stage === 'draw' && (
          <CardFanTable
            topic={activeTopic}
            question={activeQuestion}
            spread={activeSpread}
            language={language}
            onFinishReading={handleFinishReading}
            onReset={handleResetHome}
          />
        )}

        {stage === 'reading' && currentReading && (
          <DeepReadingView
            reading={currentReading}
            language={language}
            onSaveToJournal={handleSaveToJournal}
            onResetHome={handleResetHome}
            onOpenScrollModal={() => setIsScrollOpen(true)}
            isSavedInJournal={journalEntries.some(e => e.id === currentReading.id)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center border-t border-[#8a7326]/20 backdrop-blur-sm text-xs text-zinc-500 font-serif">
        <p>✦ ARCANIUM — 78 Keys of Wisdom • English • မြန်မာ • 日本語 ✦</p>
      </footer>

      {/* Modals */}
      {isJournalOpen && (
        <JournalModal
          entries={journalEntries}
          language={language}
          onClose={() => setIsJournalOpen(false)}
          onDeleteEntry={handleDeleteJournalEntry}
          onSelectEntry={handleSelectJournalEntry}
        />
      )}

      {isCodexOpen && (
        <CardEncyclopediaModal
          language={language}
          onClose={() => setIsCodexOpen(false)}
        />
      )}

      {isScrollOpen && currentReading && (
        <ShareScrollModal
          reading={currentReading}
          language={language}
          onClose={() => setIsScrollOpen(false)}
        />
      )}

      {/* Natal Profile Modal */}
      <UserProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        language={language}
        onProfileUpdated={(profile) => setUserProfile(profile)}
      />

      {/* Daily Card of the Day Modal */}
      <DailyCardModal
        isOpen={isDailyCardOpen}
        onClose={() => setIsDailyCardOpen(false)}
        language={language}
      />

      {/* Fullscreen Entrance Intro Animation */}
      {showIntro && (
        <EntranceIntro
          language={language}
          onComplete={() => {
            setShowIntro(false);
            setShowLoader(true);
          }}
        />
      )}

      {/* Beautiful Asset Preloader & Cosmic Attunement Screen */}
      {showLoader && (
        <SanctuaryLoader
          language={language}
          onLoaded={() => setShowLoader(false)}
        />
      )}

    </div>
  );
}

export default App;
