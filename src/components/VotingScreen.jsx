import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconSkull, IconUsers, IconWarning, IconFire, IconLock } from './icons';
import { PassDevice } from './PassDevice';
import { sounds } from '../hooks/useSounds';
import { useLanguage } from '../i18n/LanguageContext';

export const VotingScreen = ({
  players,
  onVote,
  currentVoterIndex,
  voterName,
  votingRound,
  maxVotingRounds,
  votingTied,
  tiedPlayers,
}) => {
  const { t } = useLanguage();
  const [deviceReady, setDeviceReady] = useState(false);
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  const totalPlayers = players.length;
  const isRunoff = votingTied && tiedPlayers && tiedPlayers.length > 0;

  if (!deviceReady) {
    return (
      <PassDevice
        name={voterName}
        subtitle={t('voting.passSubtitle')}
        onReady={() => setDeviceReady(true)}
      />
    );
  }

  const handleVote = (index) => {
    if (voted || index === currentVoterIndex) return;
    if (isRunoff && !tiedPlayers.includes(index)) return;
    setSelected(index);
  };

  const confirmVote = () => {
    if (selected !== null && !voted) {
      setVoted(true);
      sounds.vote();
      setTimeout(() => { onVote(selected); }, 1200);
    }
  };

  const isEligible = (index) => {
    if (!isRunoff) return index !== currentVoterIndex;
    return tiedPlayers.includes(index) && index !== currentVoterIndex;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          style={{ marginBottom: '6px' }}
        >
          {t('voting.title')}
        </motion.h2>

        {maxVotingRounds > 1 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '8px' }}
          >
            {Array.from({ length: maxVotingRounds }).map((_, i) => (
              <motion.div
                key={i}
                animate={i + 1 === votingRound ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.6, repeat: Infinity }}
                style={{
                  width: 28, height: 28, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700,
                  background: i + 1 < votingRound ? 'rgba(182, 144, 47,0.3)' : i + 1 === votingRound ? 'var(--primary)' : 'rgba(255,255,255,0.08)',
                  border: i + 1 === votingRound ? '2px solid var(--primary)' : '2px solid rgba(255,255,255,0.15)',
                  color: 'white',
                }}
              >
                {i + 1 < votingRound ? '✓' : i + 1}
              </motion.div>
            ))}
          </motion.div>
        )}

        <AnimatePresence>
          {isRunoff && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                background: 'rgba(217, 165, 68,0.15)', border: '2px solid var(--warning)',
                borderRadius: 12, padding: '10px 16px', marginBottom: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
            >
              <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}>
                <IconWarning color="var(--warning)" />
              </motion.div>
              <div>
                <div style={{ color: 'var(--warning)', fontWeight: 700, fontSize: 14 }}>
                  {t('voting.tieRunoff', votingRound)}
                </div>
                <div style={{ color: '#a89a7d', fontSize: 12 }}>
                  {t('voting.onlyVoteFor', tiedPlayers.map(i => players[i]).join(', '))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p style={{ color: '#a89a7d', marginBottom: '4px', fontSize: 14 }}>
          <IconUsers style={{ marginRight: '6px' }} />{t('voting.whoToEliminate')}
        </p>
        <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '16px' }}>
          {t('voting.votingTurn', voterName)}
        </p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        {players.map((player, index) => {
          const isSelf = index === currentVoterIndex;
          const eligible = isEligible(index);
          const isSelected = selected === index;
          const isInRunoffGroup = isRunoff && tiedPlayers.includes(index);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.07, type: 'spring', stiffness: 200 }}
              className={`player-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleVote(index)}
              whileHover={eligible && !voted ? { x: 6, scale: 1.01 } : {}}
              whileTap={eligible && !voted ? { scale: 0.98 } : {}}
              style={{
                opacity: (!eligible || (voted && !isSelected)) ? 0.35 : 1,
                cursor: eligible && !voted ? 'pointer' : 'default',
                border: isInRunoffGroup && !isSelf ? '2px solid rgba(217, 165, 68,0.5)' : isSelected ? '2px solid var(--primary)' : '2px solid transparent',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="name">{player}</span>
                {isSelf && <span style={{ color: '#a89a7d', fontSize: 12 }}>{t('common.you')}</span>}
                {isInRunoffGroup && !isSelf && (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    style={{ fontSize: 11, color: 'var(--warning)', fontWeight: 600, background: 'rgba(217, 165, 68,0.15)', padding: '2px 8px', borderRadius: 20 }}
                  >
                    <IconFire style={{ marginRight: 3 }} />{t('voting.tied')}
                  </motion.span>
                )}
              </div>
              {isSelected && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ color: 'var(--primary)', fontWeight: 700, fontSize: 20 }}>
                  ☠️
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selected !== null && !voted && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <motion.button whileHover={{ scale: 1.04, boxShadow: '6px 6px 0 rgba(0,0,0,0.35)' }} whileTap={{ scale: 0.96 }} onClick={confirmVote} className="button button-primary">
              <IconSkull style={{ marginRight: '8px' }} />{t('voting.eliminate', players[selected])}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {voted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: 'spring', stiffness: 250 }}
            style={{ textAlign: 'center', marginTop: '16px' }}
          >
            <div style={{ background: 'rgba(182, 144, 47,0.1)', padding: '16px', borderRadius: '14px', border: '2px solid #b6902f' }}>
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.6, repeat: 2 }} style={{ color: '#b6902f', fontSize: '20px', fontWeight: 'bold' }}>
                {t('voting.voteRegistered')}
              </motion.div>
              <div style={{ color: '#a89a7d', fontSize: '14px', marginTop: '6px' }}>
                {currentVoterIndex === totalPlayers - 1 ? t('voting.calculating') : t('voting.passToNext')}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="progress-bar">
        <motion.div className="progress-bar-fill" initial={{ width: 0 }} animate={{ width: `${((currentVoterIndex + 1) / totalPlayers) * 100}%` }} transition={{ duration: 0.5 }} />
      </div>

      <div className="hint">
        <span className="hint-icon"><IconLock size={13} style={{ verticalAlign: '-2px' }} /></span>{t('voting.hint')}
      </div>
    </motion.div>
  );
};
