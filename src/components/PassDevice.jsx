import React from 'react';
import { motion } from 'framer-motion';
import { IconHand, IconLock } from './icons';
import { useLanguage } from '../i18n/LanguageContext';

// Pantalla intermedia que se muestra antes de revelar el rol de cada
// jugador o antes de que cada jugador vote, para darle tiempo a pasar
// el dispositivo sin que el jugador anterior vea información ajena.
export const PassDevice = ({ name, subtitle, buttonLabel, onReady }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ textAlign: 'center', padding: '30px 0' }}
    >
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{ fontSize: '3rem', marginBottom: '20px' }}
      >
        📱
      </motion.div>

      <div className="role-label">{t('passDevice.passTo')}</div>
      <h2 style={{ fontSize: '2rem', margin: '10px 0', color: 'white' }}>
        {name}
      </h2>

      {subtitle && (
        <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>
          {subtitle}
        </p>
      )}

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onReady}
        className="button button-primary"
        style={{ maxWidth: '320px', margin: '25px auto 0' }}
      >
        <IconHand style={{ marginRight: '8px' }} />
        {buttonLabel || t('passDevice.defaultButton', name)}
      </motion.button>

      <div className="hint">
        <IconLock className="hint-icon" style={{ marginRight: '6px' }} />
        {t('passDevice.hint')}
      </div>
    </motion.div>
  );
};
