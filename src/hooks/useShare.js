// Utilidad para compartir resultados del juego.
// En móvil usa navigator.share (share sheet nativo).
// En desktop hace fallback a copiar al portapapeles.
// Recibe la función `t` (de useLanguage) para generar el texto en el
// idioma activo.

export const buildShareText = ({ players, word, impostorNames, crewWins, eliminatedName, t }) => {
  const names = impostorNames || [];
  const multiple = names.length > 1;
  const namesStr = names.join(', ');
  const result = crewWins ? t('share.crewWonText', multiple) : t('share.impostorWonText', multiple);

  const lines = [
    t('share.resultTitle'),
    ``,
    result,
    ``,
    t('share.impostorLine', namesStr, multiple),
    t('share.wordLine', word),
    eliminatedName ? t('share.eliminatedLine', eliminatedName) : null,
    ``,
    t('share.playersLine', players.join(', ')),
    ``,
    t('share.playPrompt'),
  ].filter(Boolean).join('\n');

  return lines;
};

export const buildInviteText = (players, t) => {
  return [
    t('share.inviteTitle'),
    ``,
    t('share.inviteBody', players.length),
    t('share.inviteQuestion'),
    ``,
    t('share.inviteLink'),
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
