// Efectos de sonido con Web Audio API pura — Versión 3.1 (Detective / Expediente X)
// Corregido: eco con auto-limpieza, manejo de errores y desconexión de nodos.

let _ctx = null;

function getCtx() {
  if (!_ctx) {
    try {
      _ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API no soportada:', e);
      return null;
    }
  }
  return _ctx;
}

let _unlocked = false;

export function unlockAudio() {
  if (_unlocked) return;
  try {
    const ctx = getCtx();
    if (!ctx) return;
    const buffer = ctx.createBuffer(1, 1, 22050);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
    if (ctx.state === 'suspended') ctx.resume();
    _unlocked = true;
  } catch (_) {
    // Reintentamos en el próximo gesto
  }
}

// ---- Utilidades ----

function createNoiseBuffer(ctx, duration) {
  const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

// ---- Motor de audio ----

function playSound({
  frequency = 440,
  endFrequency = null,
  type = 'sine',
  duration = 0.2,
  gain = 0.3,
  delay = 0,
  filterFreq = null,
  filterEndFreq = null,
  filterQ = 1,
  filterType = 'lowpass',
  useNoise = false,
  attack = 0.01,
  release = 0.1,
  echo = false,
  echoDelay = 0.2,
  echoGain = 0.3,
} = {}) {
  const ctx = getCtx();
  if (!ctx) return;

  try {
    if (ctx.state === 'suspended') ctx.resume();

    const startTime = ctx.currentTime + delay;
    const endTime = startTime + duration;

    // 1. Fuente
    let source;
    if (useNoise) {
      const noiseBuffer = createNoiseBuffer(ctx, duration);
      source = ctx.createBufferSource();
      source.buffer = noiseBuffer;
    } else {
      source = ctx.createOscillator();
      source.type = type;
      source.frequency.setValueAtTime(frequency, startTime);
      if (endFrequency && endFrequency > 0) {
        source.frequency.exponentialRampToValueAtTime(endFrequency, endTime);
      }
    }

    // 2. Filtro
    let filter = null;
    if (filterFreq) {
      filter = ctx.createBiquadFilter();
      filter.type = filterType;
      filter.frequency.setValueAtTime(filterFreq, startTime);
      if (filterEndFreq && filterEndFreq > 0) {
        filter.frequency.exponentialRampToValueAtTime(filterEndFreq, endTime);
      }
      filter.Q.setValueAtTime(filterQ, startTime);
    }

    // 3. Ganancia principal con envolvente
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(gain, startTime + attack);
    gainNode.gain.setValueAtTime(gain, endTime - release);
    gainNode.gain.exponentialRampToValueAtTime(0.001, endTime);

    // Conexiones base
    if (filter) {
      source.connect(filter);
      filter.connect(gainNode);
    } else {
      source.connect(gainNode);
    }

    // 4. Eco con auto-limpieza
    let echoNode = null;
    let echoGainNode = null;
    let echoOutNode = null;

    if (echo) {
      echoNode = ctx.createDelay(2.0);
      echoNode.delayTime.setValueAtTime(echoDelay, startTime);

      echoGainNode = ctx.createGain();
      echoGainNode.gain.setValueAtTime(echoGain, startTime);
      // El eco se desvanece con el tiempo
      const echoEndTime = endTime + echoDelay * 4;
      echoGainNode.gain.setValueAtTime(echoGain, echoEndTime - 0.5);
      echoGainNode.gain.exponentialRampToValueAtTime(0.001, echoEndTime);

      echoOutNode = ctx.createGain();
      echoOutNode.gain.setValueAtTime(1, startTime);
      echoOutNode.gain.setValueAtTime(1, echoEndTime - 0.5);
      echoOutNode.gain.exponentialRampToValueAtTime(0.001, echoEndTime);

      gainNode.connect(echoNode);
      echoNode.connect(echoGainNode);
      echoGainNode.connect(echoNode); // Feedback
      echoNode.connect(echoOutNode);
      echoOutNode.connect(ctx.destination);

      // Auto-limpieza: desconectar todo después del eco
      setTimeout(() => {
        try {
          echoNode.disconnect();
          echoGainNode.disconnect();
          echoOutNode.disconnect();
        } catch (_) {}
      }, (echoEndTime - ctx.currentTime + 0.5) * 1000);
    }

    // Conexión directa (siempre)
    gainNode.connect(ctx.destination);

    // Iniciar y detener
    source.start(startTime);
    source.stop(endTime);

    // Limpieza del source
    source.onended = () => {
      try {
        source.disconnect();
        if (filter) filter.disconnect();
        gainNode.disconnect();
      } catch (_) {}
    };

  } catch (e) {
    // Silencioso: no queremos romper el juego por un sonido
    console.warn('Error en playSound:', e);
  }
}

// ---- SONIDOS DEL JUEGO ----

export const sounds = {
  // Click: tecla de máquina de escribir / computadora antigua
  click() {
    playSound({
      frequency: 1800, endFrequency: 400, type: 'square',
      duration: 0.03, gain: 0.08, filterFreq: 3000,
    });
    playSound({
      useNoise: true, duration: 0.02, gain: 0.04,
      filterFreq: 5000, filterType: 'highpass',
    });
  },

  // Revelar rol — tripulante: escaneo limpio con toque de radio
  revealCrew() {
    playSound({
      frequency: 400, endFrequency: 1200, type: 'sine',
      duration: 0.8, gain: 0.12, filterFreq: 800, filterEndFreq: 3000,
      echo: true, echoDelay: 0.15, echoGain: 0.2,
    });
    playSound({
      frequency: 1600, type: 'sine', duration: 0.4, gain: 0.06, delay: 0.6,
      echo: true, echoDelay: 0.2, echoGain: 0.3,
    });
  },

  // Revelar rol — impostor: drone opresivo con estática
  revealImpostor() {
    playSound({
      frequency: 100, endFrequency: 45, type: 'sawtooth',
      duration: 2.0, gain: 0.15, filterFreq: 400, filterEndFreq: 100, filterQ: 6,
      echo: true, echoDelay: 0.3, echoGain: 0.4,
    });
    playSound({
      useNoise: true, duration: 1.0, gain: 0.06, delay: 0.2,
      filterFreq: 1500, filterEndFreq: 500, filterType: 'bandpass', filterQ: 4,
      echo: true, echoDelay: 0.25, echoGain: 0.3,
    });
    playSound({
      frequency: 50, endFrequency: 30, type: 'sine',
      duration: 0.8, gain: 0.25, delay: 1.2,
    });
  },

  // Voto confirmado: sello de expediente
  vote() {
    playSound({
      frequency: 250, endFrequency: 80, type: 'square',
      duration: 0.12, gain: 0.15, filterFreq: 800,
    });
    playSound({
      useNoise: true, duration: 0.08, gain: 0.06, delay: 0.02,
      filterFreq: 2000, filterType: 'bandpass', filterQ: 2,
    });
  },

  // Tick de countdown: reloj antiguo
  tick() {
    playSound({
      frequency: 2000, endFrequency: 1200, type: 'square',
      duration: 0.03, gain: 0.1, filterFreq: 4000,
    });
  },

  // Último tick: toc grave con eco
  tickFinal() {
    playSound({
      frequency: 300, endFrequency: 100, type: 'sawtooth',
      duration: 0.3, gain: 0.2, filterFreq: 600, filterEndFreq: 200,
      echo: true, echoDelay: 0.2, echoGain: 0.5,
    });
  },

  // Victoria — tripulantes: acorde de misterio resuelto
  crewWin() {
    const notes = [261.63, 329.63, 392.00, 493.88];
    notes.forEach((f, i) => {
      playSound({
        frequency: f, type: 'triangle', duration: 1.5, gain: 0.08,
        delay: i * 0.1, filterFreq: 2000,
        echo: true, echoDelay: 0.3, echoGain: 0.4,
      });
    });
    playSound({
      frequency: 1200, endFrequency: 2400, type: 'sine',
      duration: 1.0, gain: 0.05, delay: 0.5,
    });
  },

  // Victoria — impostor: descenso disonante
  impostorWin() {
    const notes = [220, 207.65, 196, 185, 174.61];
    notes.forEach((f, i) => {
      playSound({
        frequency: f, endFrequency: f * 0.8, type: 'sawtooth',
        duration: 0.6, gain: 0.1, delay: i * 0.15,
        filterFreq: 500, filterEndFreq: 150, filterQ: 8,
        echo: true, echoDelay: 0.3, echoGain: 0.5,
      });
    });
    playSound({
      useNoise: true, duration: 1.5, gain: 0.15, delay: 1.0,
      filterFreq: 200, filterEndFreq: 30, filterType: 'lowpass',
      echo: true, echoDelay: 0.4, echoGain: 0.6,
    });
  },

  // Reveal dramático: el momento "Expediente X"
  dramaticReveal() {
    [110, 116.54].forEach(f => {
      playSound({
        frequency: f, type: 'sawtooth', duration: 3.0, gain: 0.06,
        filterFreq: 300, filterEndFreq: 100, filterQ: 12,
        echo: true, echoDelay: 0.5, echoGain: 0.6,
      });
    });
    playSound({
      useNoise: true, duration: 2.0, gain: 0.05,
      filterFreq: 500, filterEndFreq: 6000, filterType: 'bandpass', filterQ: 3,
      echo: true, echoDelay: 0.4, echoGain: 0.5,
    });
    playSound({
      frequency: 60, endFrequency: 25, type: 'sine',
      duration: 1.5, gain: 0.3, delay: 1.5,
    });
    playSound({
      frequency: 2500, endFrequency: 800, type: 'sine',
      duration: 0.8, gain: 0.08, delay: 2.0,
      echo: true, echoDelay: 0.3, echoGain: 0.7,
    });
    playSound({
      useNoise: true, duration: 0.5, gain: 0.03, delay: 2.5,
      filterFreq: 3000, filterType: 'highpass',
    });
  },
};

export const useSounds = () => sounds;