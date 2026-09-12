import React from 'react';
import { motion } from 'framer-motion';
import { IconDice } from './icons';
import { sounds } from '../hooks/useSounds';
import { useLanguage } from '../i18n/LanguageContext';

// Pantalla pública (todos pueden verla) que anuncia quién empieza
// la ronda, después de que todos ya vieron su rol y antes de votar.
export const FirstPlayerScreen = ({ firstPlayerName, onNext }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', padding: '30px 0' }}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}
      >
        <IconDice size={48} />
      </motion.div>

      <div className="role-label">{t('firstPlayer.everyoneSawRole')}</div>
      <h2 style={{ fontSize: '1.3rem', margin: '10px 0', color: 'var(--text-secondary)' }}>
        {t('firstPlayer.startsClue')}
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{
          margin: '20px auto',
          padding: '14px 24px',
          background: 'rgba(217, 165, 68, 0.15)',
          border: '1px solid rgba(217, 165, 68, 0.4)',
          borderRadius: '12px',
          color: '#d9a544',
          fontSize: '22px',
          fontWeight: '700',
          maxWidth: '320px',
        }}
      >
        {firstPlayerName}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => { sounds.click(); onNext(); }}
        className="button button-primary"
        style={{ maxWidth: '320px', margin: '25px auto 0' }}
      >
        <IconDice style={{ marginRight: '8px' }} />
        {t('firstPlayer.startVoting')}
      </motion.button>
    </motion.div>
  );
};
