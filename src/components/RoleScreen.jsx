import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaUserSecret, FaCheck } from 'react-icons/fa';
import { PassDevice } from './PassDevice';
import { sounds } from '../hooks/useSounds';
import { useLanguage } from '../i18n/LanguageContext';

export const RoleScreen = ({
  player,
  isImpostor,
  word,
  clue,
  onNext,
  totalPlayers,
  currentIndex
}) => {
  const { t } = useLanguage();
  const [deviceReady, setDeviceReady] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    // Mismo sonido para todos: si sonara distinto según el rol,
    // los demás jugadores podrían adivinar quién es el impostor solo escuchando.
    sounds.revealCrew();
  };

  if (!deviceReady) {
    return (
      <PassDevice
        name={player}
        subtitle={t('role.subtitle', currentIndex + 1, totalPlayers)}
        onReady={() => setDeviceReady(true)}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ textAlign: 'center' }}>
        <div className="role-box">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="role-label">
              {isImpostor ? t('role.youAreThe') : t('role.youAre')}
            </div>
            <h2 style={{ fontSize: '2rem', margin: '10px 0', color: 'white' }}>
              {player}
            </h2>
            <div style={{ fontSize: '14px', color: '#a7a9be' }}>
              {t('role.subtitle', currentIndex + 1, totalPlayers)}
            </div>
          </motion.div>

          <div style={{ marginTop: '30px' }}>
            <AnimatePresence mode="wait">
              {!revealed ? (
                <motion.button
                  key="reveal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReveal}
                  className="button button-primary"
                  style={{ maxWidth: '300px', margin: '0 auto' }}
                >
                  <FaEye style={{ marginRight: '8px' }} />
                  {t('role.revealRole')}
                </motion.button>
              ) : (
                <motion.div
                  key="role"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {isImpostor ? (
                    <>
                      <div className="role-label" style={{ color: '#e94560', fontSize: '18px' }}>
                        <FaUserSecret style={{ marginRight: '8px' }} />
                        {t('role.impostorLabel')}
                      </div>
                      <div style={{ marginTop: '20px' }}>
                        <div className="role-label">{t('role.yourClueIs')}</div>
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="role-clue"
                        >
                          {clue}
                        </motion.div>
                      </div>
                      <div style={{ marginTop: '15px', color: '#a7a9be', fontSize: '14px' }}>
                        {t('role.impostorHint1')}
                      </div>
                      <div style={{ marginTop: '10px', color: '#f5c842', fontSize: '12px' }}>
                        {t('role.impostorHint2')}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="role-label" style={{ color: '#4ecdc4', fontSize: '18px' }}>
                        <FaCheck style={{ marginRight: '8px' }} />
                        {t('role.crewLabel')}
                      </div>
                      <div style={{ marginTop: '20px' }}>
                        <div className="role-label">{t('role.theWordIs')}</div>
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="role-word"
                        >
                          {word}
                        </motion.div>
                      </div>
                      <div style={{ marginTop: '15px', color: '#a7a9be', fontSize: '14px' }}>
                        {t('role.crewHint')}
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="progress-bar">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / totalPlayers) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {revealed && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { sounds.click(); onNext(); }}
              className="button button-primary"
              style={{ flex: '1', minWidth: '200px' }}
            >
              {currentIndex === totalPlayers - 1 ? t('role.goToVoting') : t('role.nextPlayer')}
            </motion.button>
          )}
        </div>

        <div className="hint">
          <span className="hint-icon">🔒</span>
          {t('role.hint')}
        </div>
      </div>
    </motion.div>
  );
};
