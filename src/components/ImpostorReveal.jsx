import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sounds } from '../hooks/useSounds';
import { useLanguage } from '../i18n/LanguageContext';

// Pantalla dramática que aparece antes de ResultsScreen.
// Hace un countdown 3-2-1 y luego revela quién era el/los impostor(es).
export const ImpostorReveal = ({ players, eliminatedIndex, impostorIndex, impostorIndices, onDone }) => {
  const { t } = useLanguage();
  const [phase, setPhase] = useState('countdown'); // 'countdown' | 'reveal' | 'done'
  const [count, setCount] = useState(3);

  // Support both old (single) and new (multiple) impostor props
  const allImpostorIndices = impostorIndices && impostorIndices.length > 0
    ? impostorIndices
    : (impostorIndex !== undefined && impostorIndex !== -1 ? [impostorIndex] : []);

  const eliminatedName = eliminatedIndex !== -1 ? players[eliminatedIndex] : null;
  const isCorrect = eliminatedIndex !== -1 && allImpostorIndices.includes(eliminatedIndex);
  const impostorNames = allImpostorIndices.map(i => players[i]).filter(Boolean);
  const multipleImpostors = impostorNames.length > 1;

  useEffect(() => {
    if (phase !== 'countdown') return;

    sounds.tick();

    if (count > 1) {
      const t = setTimeout(() => {
        setCount(c => c - 1);
        sounds.tick();
      }, 900);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        sounds.tickFinal();
        setPhase('reveal');
        setTimeout(() => {
          sounds.dramaticReveal();
          setTimeout(() => {
            if (isCorrect) sounds.crewWin();
            else sounds.impostorWin();
          }, 900);
        }, 200);
      }, 900);
      return () => clearTimeout(t);
    }
  }, [count, phase, isCorrect]);

  useEffect(() => {
    if (phase !== 'reveal') return;
    const t = setTimeout(onDone, 4500);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#0f0e17',
      overflow: 'hidden',
    }}>
      {/* Partículas de fondo */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0], scale: [0.5, 1.5, 0.5], x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 8)], y: [0, -60 - i * 10] }}
          transition={{ duration: 3 + i * 0.2, delay: 1.8 + i * 0.08, repeat: Infinity, repeatDelay: 1 }}
          style={{
            position: 'absolute',
            width: 6, height: 6, borderRadius: '50%',
            background: i % 3 === 0 ? '#e94560' : i % 3 === 1 ? '#f5c842' : '#4ecdc4',
          }}
        />
      ))}

      <AnimatePresence mode="wait">
        {phase === 'countdown' && (
          <motion.div
            key={`count-${count}`}
            initial={{ scale: 2.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ fontSize: '5rem', color: '#a7a9be', marginBottom: '16px' }}>
              {t('reveal.whoWasIt')}
            </div>
            <motion.div
              animate={{ color: ['#e94560', '#f5c842', '#4ecdc4'] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              style={{ fontSize: '9rem', fontWeight: 900, lineHeight: 1 }}
            >
              {count}
            </motion.div>
          </motion.div>
        )}

        {phase === 'reveal' && (
          <motion.div
            key="reveal"
            initial={{ scale: 0, rotateY: 180, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            style={{ textAlign: 'center', padding: '0 20px', maxWidth: 420 }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: multipleImpostors ? '3rem' : '5rem', marginBottom: '12px' }}
            >
              {'🕵️'.repeat(impostorNames.length)}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ color: '#a7a9be', fontSize: '16px', marginBottom: '8px' }}
            >
              {multipleImpostors ? t('reveal.impostorsWere') : t('reveal.impostorWas')}
            </motion.div>

            {/* Names */}
            <div style={{ marginBottom: '20px' }}>
              {impostorNames.map((name, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.2, type: 'spring', stiffness: 250 }}
                  style={{
                    fontSize: multipleImpostors ? '2rem' : '3rem',
                    fontWeight: 900,
                    color: '#e94560',
                    textShadow: '0 0 30px rgba(233,69,96,0.6)',
                    lineHeight: 1.2,
                  }}
                >
                  {name}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{
                padding: '16px 24px',
                borderRadius: '16px',
                background: isCorrect ? 'rgba(78,205,196,0.15)' : 'rgba(233,69,96,0.15)',
                border: `2px solid ${isCorrect ? '#4ecdc4' : '#e94560'}`,
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                {isCorrect ? '🎉' : '😈'}
              </div>
              <div style={{
                fontSize: '1.2rem', fontWeight: 700,
                color: isCorrect ? '#4ecdc4' : '#e94560',
              }}>
                {isCorrect
                  ? t('reveal.crewCaught')
                  : t('reveal.impostorEscaped')}
              </div>
              {eliminatedName && !allImpostorIndices.includes(eliminatedIndex) && (
                <div style={{ color: '#a7a9be', fontSize: '13px', marginTop: '8px' }}>
                  {t('reveal.eliminatedByMistake', eliminatedName)}
                </div>
              )}
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onDone}
              style={{
                marginTop: '24px',
                padding: '12px 28px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.06)',
                color: '#a7a9be',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              {t('reveal.seeFullResults')}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
