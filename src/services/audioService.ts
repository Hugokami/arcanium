export type SolfeggioFrequencyKey = '432' | '528' | '639' | '741' | '963' | 'bowl';

export interface SolfeggioPreset {
  key: SolfeggioFrequencyKey;
  name: { en: string; my: string; ja: string };
  hz: number;
  chakra: { en: string; my: string; ja: string };
  benefit: { en: string; my: string; ja: string };
  color: string;
}

export const SOLFEGGIO_PRESETS: Record<SolfeggioFrequencyKey, SolfeggioPreset> = {
  '432': {
    key: '432',
    name: { en: '432 Hz Earth Resonance', my: '၄၃၂ Hz သဘာဝကမ္ဘာမြေ ပဲ့တင်သံ', ja: '432 Hz 宇宙調和・自然共鳴' },
    hz: 432,
    chakra: { en: 'Root & Earth Gateway', my: 'မူလဓာတ်နှင့် မြေဆွဲအား', ja: '第1チャクラ・地球ゲート' },
    benefit: { en: 'Deep grounding, mental clarity, and nervous system tranquility.', my: 'စိတ်တည်ငြိမ်အေးချမ်းမှုနှင့် အတွေးရှင်းလင်းခြင်း။', ja: '深い安らぎ、精神の明晰、自律神経の調和。' },
    color: '#a8a29e'
  },
  '528': {
    key: '528',
    name: { en: '528 Hz Miracle & Transformation', my: '၅၂၈ Hz အသွင်ပြောင်းလဲခြင်းနှင့် အံ့ဖွယ်စွမ်းအင်', ja: '528 Hz 奇跡の変容・愛の周波数' },
    hz: 528,
    chakra: { en: 'Solar Plexus & Vitality', my: 'နေဝန်းစွမ်းအင်နှင့် ဇွဲလုံ့လ', ja: '第3チャクラ・生命の躍動' },
    benefit: { en: 'Inner confidence, repair, and awakening latent potential.', my: 'အတွင်းစိတ်ခွန်အားနှင့် အလားအလာကောင်းများ နိုးထစေခြင်း။', ja: '自己肯定感の向上、内なる奇跡の目覚め。' },
    color: '#fde047'
  },
  '639': {
    key: '639',
    name: { en: '639 Hz Relational Harmony', my: '၆၃၉ Hz ဆက်ဆံရေးနှင့် နှလုံးသားသဟဇာတ', ja: '639 Hz 魂の統合・愛の調和' },
    hz: 639,
    chakra: { en: 'Heart Chakra (Anahata)', my: 'နှလုံးသားစွမ်းအင် (မေတ္တာ)', ja: '第4チャクラ・ハートセンター' },
    benefit: { en: 'Healing interpersonal rifts, love synastry, and compassion.', my: 'ချစ်ခြင်းမေတ္တာတိုးပွားခြင်းနှင့် နားလည်မှုရရှိခြင်း။', ja: '人間関係の修復、魂のパートナーシップの調和。' },
    color: '#86efac'
  },
  '741': {
    key: '741',
    name: { en: '741 Hz Intuitive Awakening', my: '၇၄၁ Hz အတွင်းဉာဏ်အလင်းနှင့် တတိယမျက်လုံး', ja: '741 Hz 直感覚醒・第3の眼' },
    hz: 741,
    chakra: { en: 'Third Eye & Throat', my: 'တတိယမျက်လုံးနှင့် အမှန်တရား', ja: '第6チャクラ・直感と表現' },
    benefit: { en: 'Piercing illusions, intuitive psychic vision, and pure truth.', my: 'ထိုးထွင်းသိမြင်မှုနှင့် အမှန်တရားကို ရှင်းလင်းစွာ မြင်နိုင်ခြင်း။', ja: '幻影の打破、直観力の鋭敏化、真実の洞察。' },
    color: '#93c5fd'
  },
  '963': {
    key: '963',
    name: { en: '963 Hz Crown & Divine Light', my: '၉၆၃ Hz ဦးထိပ်ဝိညာဉ်အလင်း (Crown)', ja: '963 Hz 宇宙意識・高次元の光' },
    hz: 963,
    chakra: { en: 'Crown Chakra (Sahasrara)', my: 'ဦးထိပ်စွမ်းအင်နှင့် စကြာဝဠာချိတ်ဆက်မှု', ja: '第7チャクラ・クラウンセンター' },
    benefit: { en: 'Transcendental connection with divine cosmic intelligence.', my: 'စကြာဝဠာအသိဉာဏ်နှင့် တိုက်ရိုက်ထိတွေ့ချိတ်ဆက်ခြင်း။', ja: '宇宙意識との一体化、高次元の導き。' },
    color: '#d8b4fe'
  },
  'bowl': {
    key: 'bowl',
    name: { en: 'Tibetan Singing Bowl Continuum', my: 'တိဘက်သံလွင်ခွက် စဉ်ဆက်မပြတ်အသံလှိုင်း', ja: 'チベット密教・シンギングボウル' },
    hz: 216,
    chakra: { en: 'All Chakras / Multi-Harmonic', my: 'စွမ်းအင်ဗဟိုအားလုံး ပေါင်းစပ်မှု', ja: '全チャクラ統合共鳴' },
    benefit: { en: 'Deep meditative stillness and mental purification.', my: 'နက်ရှိုင်းသော တရားရှုမှတ်ခြင်းနှင့် စိတ်စင်ကြယ်ခြင်း။', ja: '深い瞑想状態、空間と精神の浄化。' },
    color: '#fca5a5'
  }
};

class AudioService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.6;
  private ambientGain: GainNode | null = null;
  private ambientOscillators: OscillatorNode[] = [];
  private isAmbientPlaying: boolean = false;
  private activeFrequency: SolfeggioFrequencyKey = '432';
  private listeners: Array<() => void> = [];

  private notify() {
    this.listeners.forEach(fn => fn());
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  public getActiveFrequency(): SolfeggioFrequencyKey {
    return this.activeFrequency;
  }

  public setActiveFrequency(freq: SolfeggioFrequencyKey) {
    this.activeFrequency = freq;
    if (this.isAmbientPlaying) {
      this.stopAmbientDrone();
      this.startAmbientDrone();
    }
    this.notify();
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.ambientGain) {
      this.ambientGain.gain.value = this.isMuted ? 0 : 0.08 * this.volume;
    }
    this.notify();
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.ambientGain && !this.isMuted) {
      this.ambientGain.gain.value = 0.08 * this.volume;
    }
    this.notify();
  }

  public getVolume(): number {
    return this.volume;
  }

  // Play a soft card hover tick / whisper
  public playCardHover() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.04);

      gain.gain.setValueAtTime(0.02 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Audio context might be restricted before interaction
    }
  }

  // Play realistic card draw / slide swoosh
  public playCardSlide() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.15;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(2400, now + 0.12);
      filter.Q.value = 3.0;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.08 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.15);
    } catch {
      // fallback
    }
  }

  public playChime() {
    this.playCardFlip();
  }

  public playCardSelect() {
    this.playCardSlide();
  }

  // Card Flip / Reveal Bell (Harmonic Singing Chime)
  public playCardFlip() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const frequencies = [528, 792, 1056];
      frequencies.forEach((freq, index) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const initialGain = (0.15 / (index + 1)) * this.volume;
        gain.gain.setValueAtTime(initialGain, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2 + index * 0.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 1.5);
      });
    } catch {
      // ignore
    }
  }

  // Deck Shuffle Sound Effect
  public playShuffle() {
    if (this.isMuted) return;
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        this.playCardSlide();
      }, i * 60);
    }
  }

  // Singing Bowl Strike
  public playSingingBowl(baseFreq = 216) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const partials = [
        { mult: 1.0, gain: 0.25, decay: 3.5 },
        { mult: 2.76, gain: 0.15, decay: 2.8 },
        { mult: 5.4, gain: 0.08, decay: 2.0 },
        { mult: 8.9, gain: 0.03, decay: 1.2 }
      ];

      partials.forEach(p => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq * p.mult, now);

        gain.gain.setValueAtTime(p.gain * this.volume, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + p.decay);
      });
    } catch {
      // ignore
    }
  }

  // Solfeggio Ambient Drone Engine
  public startAmbientDrone() {
    if (this.isAmbientPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.value = this.isMuted ? 0 : 0.08 * this.volume;
      this.ambientGain.connect(this.ctx.destination);

      let chords: number[] = [108, 162, 216, 324]; // 432 default
      if (this.activeFrequency === '528') {
        chords = [132, 198, 264, 528];
      } else if (this.activeFrequency === '639') {
        chords = [159.75, 213, 319.5, 639];
      } else if (this.activeFrequency === '741') {
        chords = [185.25, 247, 370.5, 741];
      } else if (this.activeFrequency === '963') {
        chords = [240.75, 321, 481.5, 963];
      } else if (this.activeFrequency === 'bowl') {
        chords = [108, 216, 596.16, 1166.4];
      }

      this.ambientOscillators = chords.map((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const filter = this.ctx!.createBiquadFilter();

        osc.type = this.activeFrequency === 'bowl' ? 'triangle' : 'sine';
        osc.frequency.value = freq;

        // Subtle LFO vibrato
        const lfo = this.ctx!.createOscillator();
        const lfoGain = this.ctx!.createGain();
        lfo.frequency.value = 0.12 + idx * 0.04;
        lfoGain.gain.value = 1.0;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        filter.type = 'lowpass';
        filter.frequency.value = 750;

        osc.connect(filter);
        filter.connect(this.ambientGain!);
        osc.start();

        return osc;
      });

      this.isAmbientPlaying = true;
      this.notify();
    } catch {
      // browser might block auto start
    }
  }

  public stopAmbientDrone() {
    if (!this.isAmbientPlaying) return;
    try {
      this.ambientOscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      this.ambientOscillators = [];
      this.isAmbientPlaying = false;
      this.notify();
    } catch {
      // ignore
    }
  }

  public toggleAmbientDrone(): boolean {
    if (this.isAmbientPlaying) {
      this.stopAmbientDrone();
      return false;
    } else {
      this.startAmbientDrone();
      return true;
    }
  }

  public getIsAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }
}

export const audioService = new AudioService();

