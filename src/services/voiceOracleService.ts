import { Language } from '../types/tarot';

export class VoiceOracleService {
  private static synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static isSpeaking = false;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;
  private static onStateChangeListeners: Array<(speaking: boolean) => void> = [];

  public static isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public static subscribeState(callback: (speaking: boolean) => void): () => void {
    this.onStateChangeListeners.push(callback);
    return () => {
      this.onStateChangeListeners = this.onStateChangeListeners.filter(cb => cb !== callback);
    };
  }

  private static notify(speaking: boolean) {
    this.isSpeaking = speaking;
    this.onStateChangeListeners.forEach(cb => cb(speaking));
  }

  public static stop(): void {
    if (!this.synth) return;
    this.synth.cancel();
    this.currentUtterance = null;
    this.notify(false);
  }

  public static speak(text: string, lang: Language): void {
    if (!this.synth) return;

    this.stop();

    if (!text.trim()) return;

    // Clean text of markdown formatting (*, #, _, etc.)
    const cleanText = text
      .replace(/[*#_`~[\]]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    this.currentUtterance = utterance;

    // Set language and voice characteristics
    if (lang === 'my') {
      utterance.lang = 'my-MM';
      utterance.rate = 0.88;
      utterance.pitch = 1.0;
    } else if (lang === 'ja') {
      utterance.lang = 'ja-JP';
      utterance.rate = 0.92;
      utterance.pitch = 1.02;
    } else {
      utterance.lang = 'en-US';
      utterance.rate = 0.90;
      utterance.pitch = 0.95;
    }

    // Try to find natural voice
    const voices = this.synth.getVoices();
    const voicePrefix = lang === 'my' ? 'my' : lang === 'ja' ? 'ja' : 'en';
    const naturalVoice = voices.find(v => v.lang.toLowerCase().startsWith(voicePrefix) && (v.name.includes('Natural') || v.name.includes('Neural') || v.name.includes('Google') || v.name.includes('Siri')));
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    utterance.onstart = () => {
      this.notify(true);
    };

    utterance.onend = () => {
      this.notify(false);
      this.currentUtterance = null;
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error', e);
      this.notify(false);
      this.currentUtterance = null;
    };

    this.synth.speak(utterance);
  }

  public static getSpeakingState(): boolean {
    return this.isSpeaking;
  }
}
