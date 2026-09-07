// Utilidad para compartir resultados del juego.
// En móvil usa navigator.share (share sheet nativo).
// En desktop hace fallback a copiar al portapapeles.

export const buildShareText = ({ players, word, impostorName, crewWins, eliminatedName }) => {
  const result = crewWins
    ? `🎉 ¡Los Tripulantes ganaron! Atraparon al impostor.`
    : `😈 ¡El Impostor ganó! Nadie lo descubrió.`;

  const lines = [
    `🕵️ *El Impostor* — Resultado de la ronda`,
    ``,
    result,
    ``,
    `🔍 Impostor: *${impostorName}*`,
    `📝 Palabra: *${word}*`,
    eliminatedName ? `☠️ Eliminado: ${eliminatedName}` : null,
    ``,
    `👥 Jugadores: ${players.join(', ')}`,
    ``,
    `¿Juegan una ronda? 👉 https://el-impostor-delta-woad.vercel.app/`,
  ].filter(Boolean).join('\n');

  return lines;
};

export const buildInviteText = (players) => {
  return [
    `🕵️ *¡Juguemos El Impostor!*`,
    ``,
    `Un juego de deducción social para ${players.length} jugadores.`,
    `Uno de ustedes es el impostor — ¿pueden descubrirlo?`,
    ``,
    `👉 https://el-impostor-delta-woad.vercel.app/`,
  ].join('\n');
};

export const shareOrCopy = async (text, onSuccess, onError) => {
  // Intenta share nativo (móvil)
  if (navigator.share) {
    try {
      await navigator.share({ text });
      onSuccess?.('shared');
      return;
    } catch (e) {
      // Si cancela, no hacer nada
      if (e.name === 'AbortError') return;
    }
  }

  // Fallback: copiar al portapapeles
  try {
    await navigator.clipboard.writeText(text);
    onSuccess?.('copied');
  } catch (_) {
    // Último fallback: textarea
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      onSuccess?.('copied');
    } catch (err) {
      onError?.(err);
    }
  }
};
