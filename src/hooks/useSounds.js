// Efectos de sonido con Web Audio API pura — sin dependencias externas.
// Todos los sonidos están sintetizados en el navegador.

let _ctx = null;
let _reverb = null; // nodo de convolución compartido: da a todo un aire
                     // de "sala de interrogatorio" sin pesar nada extra.
let _reverbGain = null;

function getCtx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}

// Genera un impulso de reverb corto y seco (no una catedral, una habitación
// pequeña con paredes duras) sin necesidad de cargar ningún archivo.
function getReverb() {
  const ctx = getCtx();
  if (_reverb) return _reverb;
  const duration = 1.1;
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * duration);
  const impulse = ctx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      // decaimiento exponencial con algo de ruido: eco corto y sucio,
      // no una reverb "de estudio" limpia.
      const decay = Math.pow(1 - i / length, 2.4);
      data[i] = (Math.random() * 2 - 1) * decay;
    }
  }
  _reverb = ctx.createConvolver();
  _reverb.buffer = impulse;
  _reverbGain = ctx.createGain();
  _reverbGain.gain.value = 0.16;
  _reverb.connect(_reverbGain);
  _reverbGain.connect(ctx.destination);
  return _reverb;
}

// En móviles (sobre todo iOS/Safari) el AudioContext nace "suspended" y solo
// puede reanudarse de forma fiable dentro del mismo gesto de usuario
// (click/touchend). Muchos de nuestros sonidos se disparan más tarde, desde
// un setTimeout (countdown, reveal, victoria), momento en el que YA NO
// contamos como "gesto de usuario" para el navegador. Por eso agregamos un
// desbloqueo explícito: en el primer toque/clic de toda la app, creamos el
// contexto, lo reanudamos y reproducimos un buffer silencioso. Esto "activa"
// el audio para el resto de la sesión, incluidos los sonidos programados.
let _unlocked = false;

export function unlockAudio() {
  if (_unlocked) return;
  try {
    const ctx = getCtx();
    const buffer = ctx.createBuffer(1, 1, 22050);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
    if (ctx.state === 'suspended') ctx.resume();
    getReverb(); // precalienta el impulso de reverb en el mismo gesto
    _unlocked = true;
  } catch (_) {
    // Si falla, lo reintentaremos en el próximo gesto.
  }
}

// Utilidad: toca una oscilación con envelope, pasada por un filtro paso-bajo
// (calienta el timbre, evita el pitido "de juguete") y con un pelín de
// reverb enviado en paralelo.
function playTone({ frequency = 440, type = 'sine', duration = 0.2, gain = 0.3, detune = 0, delay = 0, filterFreq = 4000, reverbSend = 0.5 } = {}) {
  try {
    const ctx = getCtx();
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (reverbSend > 0) {
      const send = ctx.createGain();
      send.gain.value = reverbSend;
      filter.connect(send);
      send.connect(getReverb());
    }

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
    osc.detune.setValueAtTime(detune, ctx.currentTime + delay);

    gainNode.gain.setValueAtTime(0, ctx.currentTime + delay);
    gainNode.gain.linearRampToValueAtTime(gain, ctx.currentTime + delay + 0.012);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);

    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + delay + duration + 0.05);
  } catch (_) {}
}

// Utilidad: ráfaga de ruido filtrado — es lo que da el "golpe seco" de un
// sello de goma o el "tac" de papel, cosa que una onda pura nunca logra.
function playThud({ duration = 0.18, gain = 0.35, filterFreq = 900, delay = 0, reverbSend = 0.35 } = {}) {
  try {
    const ctx = getCtx();
    if (ctx.state === 'suspended') ctx.resume();
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(gain, ctx.currentTime + delay);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    if (reverbSend > 0) {
      const send = ctx.createGain();
      send.gain.value = reverbSend;
      filter.connect(send);
      send.connect(getReverb());
    }

    noise.start(ctx.currentTime + delay);
  } catch (_) {}
}

// ---- Sonidos del juego ----

export const sounds = {
  // Botón / acción genérica — un "tac" seco de tecla de máquina de
  // escribir en vez de un beep genérico de UI.
  click() {
    playThud({ duration: 0.05, gain: 0.22, filterFreq: 2200, reverbSend: 0.1 });
    playTone({ frequency: 1400, type: 'sine', duration: 0.04, gain: 0.08, filterFreq: 3000, reverbSend: 0.1 });
  },

  // Revelar rol — tripulante: dos notas ascendentes, cálidas, con aire.
  revealCrew() {
    playTone({ frequency: 440, type: 'sine', duration: 0.18, gain: 0.22, filterFreq: 2600 });
    playTone({ frequency: 660, type: 'sine', duration: 0.26, gain: 0.22, delay: 0.12, filterFreq: 2600 });
  },

  // Revelar rol — impostor (más oscuro, inquietante; no se usa en el
  // reveal compartido para no delatar el rol por el oído, pero queda
  // disponible para otros momentos).
  revealImpostor() {
    playTone({ frequency: 180, type: 'sawtooth', duration: 0.3, gain: 0.16, filterFreq: 900 });
    playTone({ frequency: 160, type: 'sawtooth', duration: 0.4, gain: 0.13, delay: 0.25, filterFreq: 800 });
    playTone({ frequency: 140, type: 'sawtooth', duration: 0.5, gain: 0.11, delay: 0.5, filterFreq: 700 });
  },

  // Voto confirmado — como estampar el voto en la ficha: golpe + tono.
  vote() {
    playThud({ duration: 0.09, gain: 0.28, filterFreq: 1200 });
    playTone({ frequency: 260, type: 'square', duration: 0.12, gain: 0.14, delay: 0.02, filterFreq: 1800 });
  },

  // Countdown del reveal del impostor (cada tick) — más seco, menos "8-bit".
  tick() {
    playTone({ frequency: 700, type: 'triangle', duration: 0.05, gain: 0.2, filterFreq: 2400, reverbSend: 0.15 });
  },

  // Último tick del countdown (más grave y largo, con más cola de reverb
  // para marcar que ahí termina la cuenta).
  tickFinal() {
    playTone({ frequency: 420, type: 'triangle', duration: 0.16, gain: 0.28, filterFreq: 2000, reverbSend: 0.3 });
    playThud({ duration: 0.14, gain: 0.2, filterFreq: 1400, delay: 0.05 });
  },

  // Victoria — tripulantes ganan 🎉: arpegio mayor brillante con cola de
  // reverb, para que suene a triunfo real y no a jingle plano.
  crewWin() {
    const notes = [523, 659, 784, 1047, 1319];
    notes.forEach((f, i) => {
      playTone({ frequency: f, type: 'sine', duration: 0.3, gain: 0.2, delay: i * 0.1, filterFreq: 4500, reverbSend: 0.4 });
    });
  },

  // Victoria — impostor gana 😈: acorde menor descendente, sucio y grave.
  impostorWin() {
    const notes = [300, 284, 260, 200, 150];
    notes.forEach((f, i) => {
      playTone({ frequency: f, type: 'sawtooth', duration: 0.32, gain: 0.16, delay: i * 0.13, filterFreq: 1000, reverbSend: 0.4 });
    });
    playThud({ duration: 0.4, gain: 0.25, filterFreq: 400, delay: 0.55, reverbSend: 0.5 });
  },

  // Reveal dramático del impostor: acorde de tensión que crece y un
  // golpe final de sello sobre papel — el "veredicto" del expediente.
  dramaticReveal() {
    [220, 277, 330].forEach((f, i) => {
      playTone({ frequency: f, type: 'sawtooth', duration: 0.8, gain: 0.1, delay: i * 0.03, filterFreq: 1200, reverbSend: 0.3 });
    });
    playThud({ duration: 0.5, gain: 0.4, filterFreq: 350, delay: 0.5, reverbSend: 0.55 });
    playTone({ frequency: 80, type: 'sine', duration: 0.6, gain: 0.28, delay: 0.5, filterFreq: 500 });
  },

  // Sello de tinta — nuevo: golpe seco de goma contra papel, disponible
  // para usar en cualquier momento de "confirmación oficial".
  stamp() {
    playThud({ duration: 0.22, gain: 0.4, filterFreq: 700, reverbSend: 0.4 });
    playTone({ frequency: 110, type: 'sine', duration: 0.18, gain: 0.2, filterFreq: 500, reverbSend: 0.2 });
  },
};

export const useSounds = () => sounds;
