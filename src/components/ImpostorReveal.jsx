import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sounds } from '../hooks/useSounds';
import { useLanguage } from '../i18n/LanguageContext';
import { IconSecret, IconCheck } from './icons';

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

  // Usamos un portal para pintar esta pantalla directo en <body>, fuera
  // del árbol de App.jsx. Así evitamos que un ancestro con "perspective"
  // o "transform" (como el envoltorio animado de Framer Motion) se
  // convierta en el contenedor de este elemento "position: fixed" y lo
  // deje con altura 0 (invisible) en vez de cubrir toda la pantalla.
  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#14120f',
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
            background: i % 3 === 0 ? '#a3311c' : i % 3 === 1 ? '#d9a544' : '#8a9d52',
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
            <div style={{ fontSize: '5rem', color: '#a89a7d', marginBottom: '16px' }}>
              {t('reveal.whoWasIt')}
            </div>
            <motion.div
              animate={{ color: ['#a3311c', '#d9a544', '#8a9d52'] }}
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
              style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center', gap: '6px' }}
            >
              {impostorNames.map((_, i) => (
                <IconSecret key={i} size={multipleImpostors ? 40 : 64} />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ color: '#a89a7d', fontSize: 'var(--text-md)', marginBottom: '8px' }}
            >
              {multipleImpostors ? t('reveal.impostorsWere') : t('reveal.impostorWas')}
            </motion.div>

            {/* Names */}
            <div style={{ marginBottom: '20px' }}>
              {impostorNames.map((name, idx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.5, rotate: -14 }}
                  animate={{ opacity: 1, scale: 1, rotate: -3 }}
                  transition={{ delay: 0.4 + idx * 0.2, type: 'spring', stiffness: 250 }}
                  className="impostor-stamp"
                  style={{
                    fontSize: multipleImpostors ? '1.6rem' : '2.4rem',
                    lineHeight: 1.2,
                    margin: '4px',
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
              className="verdict-box"
              style={{
                borderColor: isCorrect ? 'var(--success)' : 'var(--primary)',
              }}
            >
              <div style={{ marginBottom: '10px', color: isCorrect ? 'var(--success)' : 'var(--primary)' }}>
                {isCorrect ? <IconCheck size={30} /> : <IconSecret size={30} />}
              </div>
              <div
                className="verdict-title"
                style={{ color: isCorrect ? 'var(--success)' : 'var(--primary)' }}
              >
                {isCorrect
                  ? t('reveal.crewCaught')
                  : t('reveal.impostorEscaped')}
              </div>
              {eliminatedName && !allImpostorIndices.includes(eliminatedIndex) && (
                <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)', marginTop: '10px', fontFamily: 'var(--font-tag)' }}>
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
              className="button button-secondary"
              style={{ marginTop: '24px', maxWidth: 260, marginLeft: 'auto', marginRight: 'auto' }}
            >
              {t('reveal.seeFullResults')}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
};
