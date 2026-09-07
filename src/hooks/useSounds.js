// Efectos de sonido con Web Audio API pura — sin dependencias externas.
// Todos los sonidos están sintetizados en el navegador.

const getCtx = (() => {
  let ctx = null;
  return () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Reanudar si el navegador lo suspendió por política de autoplay
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
})();

// Utilidad: toca una oscilación con envelope
function playTone({ frequency = 440, type = 'sine', duration = 0.2, gain = 0.3, detune = 0, delay = 0 } = {}) {
  try {
    const ctx = getCtx();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
    osc.detune.setValueAtTime(detune, ctx.currentTime + delay);

    gainNode.gain.setValueAtTime(0, ctx.currentTime + delay);
    gainNode.gain.linearRampToValueAtTime(gain, ctx.currentTime + delay + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);

    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + duration);
  } catch (_) {}
}

// ---- Sonidos del juego ----

export const sounds = {
  // Botón / acción genérica
  click() {
    playTone({ frequency: 880, type: 'sine', duration: 0.08, gain: 0.15 });
  },

  // Revelar rol — tripulante
  revealCrew() {
    playTone({ frequency: 440, type: 'sine', duration: 0.15, gain: 0.2 });
    playTone({ frequency: 660, type: 'sine', duration: 0.2,  gain: 0.2, delay: 0.12 });
  },

  // Revelar rol — impostor (más oscuro, inquietante)
  revealImpostor() {
    playTone({ frequency: 180, type: 'sawtooth', duration: 0.3, gain: 0.15 });
    playTone({ frequency: 160, type: 'sawtooth', duration: 0.4, gain: 0.12, delay: 0.25 });
    playTone({ frequency: 140, type: 'sawtooth', duration: 0.5, gain: 0.10, delay: 0.5 });
  },

  // Voto confirmado
  vote() {
    playTone({ frequency: 300, type: 'square', duration: 0.1, gain: 0.12 });
    playTone({ frequency: 200, type: 'square', duration: 0.15, gain: 0.12, delay: 0.1 });
  },

  // Countdown del reveal del impostor (cada tick)
  tick() {
    playTone({ frequency: 600, type: 'square', duration: 0.06, gain: 0.18 });
  },

  // Último tick del countdown (más grave y largo)
  tickFinal() {
    playTone({ frequency: 400, type: 'square', duration: 0.12, gain: 0.25 });
    playTone({ frequency: 300, type: 'square', duration: 0.18, gain: 0.2, delay: 0.1 });
  },

  // Victoria — tripulantes ganan 🎉
  crewWin() {
    const notes = [523, 659, 784, 1047];
    notes.forEach((f, i) => {
      playTone({ frequency: f, type: 'sine', duration: 0.25, gain: 0.22, delay: i * 0.12 });
    });
  },

  // Victoria — impostor gana 😈
  impostorWin() {
    const notes = [300, 280, 260, 200];
    notes.forEach((f, i) => {
      playTone({ frequency: f, type: 'sawtooth', duration: 0.3, gain: 0.18, delay: i * 0.15 });
    });
  },

  // Reveal dramático del impostor
  dramaticReveal() {
    // Acorde tenso
    [220, 277, 330].forEach(f => {
      playTone({ frequency: f, type: 'sawtooth', duration: 0.8, gain: 0.1 });
    });
    // Golpe al final
    playTone({ frequency: 80, type: 'sine', duration: 0.6, gain: 0.3, delay: 0.5 });
  },
};

export const useSounds = () => sounds;
