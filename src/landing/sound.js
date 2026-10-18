/* Optionales Sounddesign: standardmäßig stumm, synthetisiert per WebAudio. */
export class Sound {
  constructor() { this.enabled = false; this.ctx = null; }

  enable(on) {
    this.enabled = on;
    if (!on) return;
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) { this.enabled = false; return; }
      this.ctx = new AC();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }

  /* Klick beim Einrasten: kurzer Rauschimpuls + abfallender Sinus */
  click(pitch = 1, gain = 0.16) {
    if (!this.enabled || !this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    const out = c.createGain(); out.gain.value = gain; out.connect(c.destination);

    const len = Math.floor(c.sampleRate * 0.05);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.2);
    const noise = c.createBufferSource(); noise.buffer = buf;
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800 * pitch; bp.Q.value = 1.2;
    noise.connect(bp).connect(out);
    noise.start(t); noise.stop(t + 0.06);

    const osc = c.createOscillator(); osc.type = 'sine';
    osc.frequency.setValueAtTime(920 * pitch, t);
    osc.frequency.exponentialRampToValueAtTime(380 * pitch, t + 0.09);
    const g = c.createGain(); g.gain.setValueAtTime(0.9, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
    osc.connect(g).connect(out);
    osc.start(t); osc.stop(t + 0.13);
  }

  /* Freigabe: zwei weiche Töne */
  chime(gain = 0.12) {
    if (!this.enabled || !this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    [[660, 0], [990, 0.09]].forEach(([f, dt]) => {
      const osc = c.createOscillator(); osc.type = 'triangle'; osc.frequency.value = f;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t + dt);
      g.gain.exponentialRampToValueAtTime(gain, t + dt + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.35);
      osc.connect(g).connect(c.destination);
      osc.start(t + dt); osc.stop(t + dt + 0.4);
    });
  }
}
