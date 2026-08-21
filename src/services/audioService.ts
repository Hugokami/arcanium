// Web Audio API Synthesizer for Mystical Soundscapes

class AudioService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.6;
  private ambientGain: GainNode | null = null;
  private ambientOscillators: OscillatorNode[] = [];
  private isAmbientPlaying: boolean = false;

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
      this.ambientGain.gain.value = this.isMuted ? 0 : 0.12 * this.volume;
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.ambientGain && !this.isMuted) {
      this.ambientGain.gain.value = 0.12 * this.volume;
    }
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
      // White noise buffer for paper swoosh
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

  // Card Flip / Reveal Bell (Harmonic Singing Chime)
  public playCardFlip() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      // Solfeggio 528 Hz / 639 Hz crystal bell chime
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

  // Deck Shuffle Sound Effect (multi-swish sequence)
  public playShuffle() {
    if (this.isMuted) return;
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        this.playCardSlide();
      }, i * 60);
    }
  }

  // Singing Bowl / Gong Strike for Meditation & Grand Reveal
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

  // Celestial Victory / Complete Reading Fanfare
  public playCelebrationChime() {
    if (this.isMuted) return;
    const notes = [432, 540, 648, 864, 1080];
    notes.forEach((note, i) => {
      setTimeout(() => {
        if (this.isMuted || !this.ctx) return;
        this.initContext();
        try {
          const now = this.ctx.currentTime;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(note, now);

          gain.gain.setValueAtTime(0.12 * this.volume, now);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(now);
          osc.stop(now + 2.0);
        } catch {
          // ignore
        }
      }, i * 140);
    });
  }

  // Ambient Celestial Drone Loop
  public startAmbientDrone() {
    if (this.isAmbientPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.value = this.isMuted ? 0 : 0.08 * this.volume;
      this.ambientGain.connect(this.ctx.destination);

      // 432 Hz Pythagorean sacred harmonic chord
      const chords = [108, 162, 216, 324]; // A2, E3, A3, E4

      this.ambientOscillators = chords.map(freq => {
        const osc = this.ctx!.createOscillator();
        const filter = this.ctx!.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.value = freq;

        // Subtle LFO vibrato
        const lfo = this.ctx!.createOscillator();
        const lfoGain = this.ctx!.createGain();
        lfo.frequency.value = 0.15 + Math.random() * 0.1;
        lfoGain.gain.value = 1.2;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        filter.type = 'lowpass';
        filter.frequency.value = 600;

        osc.connect(filter);
        filter.connect(this.ambientGain!);
        osc.start();

        return osc;
      });

      this.isAmbientPlaying = true;
    } catch {
      // browser may block auto start
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
