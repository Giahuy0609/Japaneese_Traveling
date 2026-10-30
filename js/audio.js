/* ==========================================================================
   JAPAN SAMURAI — PROCEDURAL AUDIO ENGINE (WEB AUDIO API)
   Authentic Japanese sound synthesis: Brush strokes, Taiko, Katana slash, Ambience
   ========================================================================== */

class JapanSoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isInitialized = false;
    this.ambientGain = null;
    this.ambientOscillators = [];
  }

  init() {
    if (this.isInitialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported in this browser.', e);
    }
  }

  ensureContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.ambientGain) {
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.05, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  /* ------------------------------------------------------------------------
     1. Japanese Calligraphy Brush Stroke Sound
     Realistic horsehair friction across textured washi paper
     ------------------------------------------------------------------------ */
  playBrushStroke(duration = 0.45, intensity = 1.0) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    
    // Create Pink/Brown noise buffer
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.25;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    // Bandpass filter to simulate brush friction frequencies
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(900, t);
    filter.frequency.exponentialRampToValueAtTime(1800, t + duration * 0.5);
    filter.frequency.exponentialRampToValueAtTime(650, t + duration);
    filter.Q.setValueAtTime(3.0, t);

    // Gain envelope with brush contact attack, body friction, and soft lift
    const gain = this.ctx.createGain();
    const peakGain = 0.35 * intensity;
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.exponentialRampToValueAtTime(peakGain, t + duration * 0.18);
    gain.gain.exponentialRampToValueAtTime(peakGain * 0.7, t + duration * 0.7);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whiteNoise.start(t);
    whiteNoise.stop(t + duration);
  }

  /* ------------------------------------------------------------------------
     2. Hanko Stamp / Taiko Drum Impact Strike
     Deep sub-bass resonance with punchy parchment contact
     ------------------------------------------------------------------------ */
  playTaikoImpact(pitch = 110) {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // Sub-bass sine sweep
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, t);
    osc.frequency.exponentialRampToValueAtTime(38, t + 0.38);

    gain.gain.setValueAtTime(0.8, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.65);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.7);

    // High frequency wood slap
    const slap = this.ctx.createOscillator();
    const slapGain = this.ctx.createGain();
    slap.type = 'triangle';
    slap.frequency.setValueAtTime(280, t);
    slap.frequency.exponentialRampToValueAtTime(90, t + 0.08);

    slapGain.gain.setValueAtTime(0.4, t);
    slapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

    slap.connect(slapGain);
    slapGain.connect(this.ctx.destination);

    slap.start(t);
    slap.stop(t + 0.1);
  }

  /* ------------------------------------------------------------------------
     3. Samurai Katana Sword Slash & Screen Split
     Razor-sharp blade sheen, high-speed slice, and explosive impact
     ------------------------------------------------------------------------ */
  playKatanaSlash() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // A. Metallic blade ring / harmonic chime
    [2200, 3400, 4800].forEach((freq, idx) => {
      const bladeRing = this.ctx.createOscillator();
      const ringGain = this.ctx.createGain();
      bladeRing.type = 'sine';
      bladeRing.frequency.setValueAtTime(freq, t);
      bladeRing.frequency.exponentialRampToValueAtTime(freq * 0.95, t + 0.4);

      ringGain.gain.setValueAtTime(0.15 / (idx + 1), t);
      ringGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);

      bladeRing.connect(ringGain);
      ringGain.connect(this.ctx.destination);

      bladeRing.start(t);
      bladeRing.stop(t + 0.55);
    });

    // B. Hyper-speed slice whoosh (Filtered noise burst swept downwards)
    const duration = 0.28;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const whoosh = this.ctx.createBufferSource();
    whoosh.buffer = noiseBuffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(5500, t);
    filter.frequency.exponentialRampToValueAtTime(320, t + duration);
    filter.Q.setValueAtTime(4.0, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.exponentialRampToValueAtTime(0.75, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    whoosh.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    whoosh.start(t);
    whoosh.stop(t + duration);

    // C. Deep boom when the slash tears through the screen
    setTimeout(() => {
      this.playTaikoImpact(95);
    }, 120);
  }

  /* ------------------------------------------------------------------------
     4. Ambient Japanese Pentatonic Drone (Hirajoshi Scale)
     Subtle, mystical, cinematic soundscape
     ------------------------------------------------------------------------ */
  startAmbientDrone() {
    if (this.isMuted) return;
    this.ensureContext();
    if (!this.ctx || this.ambientGain) return;

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.045, this.ctx.currentTime + 3.0);
    this.ambientGain.connect(this.ctx.destination);

    // Root chord: D2 (73.4Hz), A2 (110Hz), D3 (146.8Hz)
    const pitches = [73.42, 110.0, 146.83];
    pitches.forEach((f) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(this.ambientGain);
      osc.start();
      this.ambientOscillators.push(osc);
    });
  }

  stopAmbientDrone() {
    if (!this.ambientGain || !this.ctx) return;
    this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
    setTimeout(() => {
      this.ambientOscillators.forEach(o => {
        try { o.stop(); } catch(e){}
      });
      this.ambientOscillators = [];
      this.ambientGain = null;
    }, 1600);
  }
}

// Global singleton instance
window.japanAudio = new JapanSoundEngine();

// Suspend the WebAudio context whenever the tab is hidden so procedural
// sounds (brush strokes, taiko, ambient drone) cannot play in background
// tabs, and resume it when the tab becomes visible again.
document.addEventListener('visibilitychange', () => {
  const engine = window.japanAudio;
  if (!engine || !engine.ctx) return;
  if (document.visibilityState === 'hidden') {
    engine.ctx.suspend().catch(() => {});
  } else if (engine.ctx.state === 'suspended') {
    engine.ctx.resume().catch(() => {});
  }
});
window.addEventListener('pagehide', () => {
  const engine = window.japanAudio;
  if (engine && engine.ctx && engine.ctx.state === 'running') {
    engine.ctx.suspend().catch(() => {});
  }
});

