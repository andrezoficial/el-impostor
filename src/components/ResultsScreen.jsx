import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconUsers, IconSecret, IconSkull, IconChevronDown, IconChevronUp, IconShare, IconCheck, IconCopy } from './icons';
import { sounds } from '../hooks/useSounds';
import { buildShareText, buildInviteText, shareOrCopy } from '../hooks/useShare';
import { useLanguage } from '../i18n/LanguageContext';

const confettiColors = ['#c1440e', '#c9a227', '#e8b74b', '#6b4226', '#fff'];

const Confetti = () => (
  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ y: -20, x: Math.random() * 100 + '%', opacity: 1, rotate: 0 }}
        animate={{ y: '110%', rotate: Math.random() * 720 - 360, opacity: [1, 1, 0] }}
        transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 1.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          width: 8 + Math.random() * 8, height: 8 + Math.random() * 8,
          borderRadius: Math.random() > 0.5 ? '50%' : 2,
          background: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        }}
      />
    ))}
  </div>
);

export const ResultsScreen = ({
  players, votes, eliminatedIndex, impostorIndex, impostorIndices,
  word, clue, onReset, onPlayAgain, allRoundsVotes,
}) => {
  const { t, lang } = useLanguage();
  const [showHistory, setShowHistory] = useState(false);
  const [shareStatus, setShareStatus] = useState(null); // null | 'copied' | 'shared'
  const [inviteStatus, setInviteStatus] = useState(null);

  // Soporta tanto el prop nuevo (impostorIndices, varios) como el legado
  // (impostorIndex, uno solo), por si algún componente aún lo pasa así.
  const allImpostorIndices = impostorIndices && impostorIndices.length > 0
    ? impostorIndices
    : (impostorIndex !== undefined && impostorIndex !== -1 ? [impostorIndex] : []);

  const crewWins = eliminatedIndex !== -1 && allImpostorIndices.includes(eliminatedIndex);
  const totalVotes = votes.reduce((a, b) => a + b, 0);
  const eliminatedName = eliminatedIndex !== -1 ? players[eliminatedIndex] : null;
  const impostorNames = allImpostorIndices.map(i => players[i]).filter(Boolean);
  const impostorNamesStr = impostorNames.join(', ');
  const hadMultipleRounds = allRoundsVotes && allRoundsVotes.length > 1;

  // Sonido al entrar en resultados
  useEffect(() => {
    const t = setTimeout(() => {
      if (crewWins) sounds.crewWin();
      else sounds.impostorWin();
    }, 400);
    return () => clearTimeout(t);
  }, [crewWins]);

  const handleShare = () => {
    sounds.click();
    const text = buildShareText({ players, word, impostorNames, crewWins, eliminatedName, t });
    shareOrCopy(text,
      (type) => { setShareStatus(type); setTimeout(() => setShareStatus(null), 2500); },
    );
  };

  const handleInvite = () => {
    sounds.click();
    const text = buildInviteText(players, t);
    shareOrCopy(text,
      (type) => { setInviteStatus(type); setTimeout(() => setInviteStatus(null), 2500); },
    );
  };

  const statusLabel = (status) =>
    status === 'shared' ? t('results.shared') : status === 'copied' ? t('results.copied') : null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} style={{ position: 'relative' }}>
      {crewWins && <Confetti />}

      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ textAlign: 'center', marginBottom: '10px' }}>
        {t('results.title')}
      </motion.h2>

      {/* Resultado principal */}
      <motion.div
        initial={{ scale: 0.4, opacity: 0, rotateY: 90 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 180, delay: 0.2 }}
        className="role-box"
        style={{ borderColor: crewWins ? '#c9a227' : '#c1440e', background: crewWins ? 'rgba(201, 162, 39,0.1)' : 'rgba(193, 68, 14,0.1)' }}
      >
        <motion.div
          animate={crewWins ? { scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] } : { scale: [1, 1.1, 1], y: [0, -8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ fontSize: '4rem', marginBottom: '10px' }}
        >
          {crewWins ? '🎉' : '😈'}
        </motion.div>

        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ color: crewWins ? '#c9a227' : '#c1440e' }}>
          {crewWins ? t('results.crewWon') : t('results.impostorWon')}
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ marginTop: '15px', color: 'white' }}>
          <IconSkull style={{ marginRight: '8px' }} />
          {eliminatedName ? t('results.eliminated', eliminatedName) : t('results.noOneEliminated')}
        </motion.div>

        {impostorNamesStr && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} style={{ marginTop: '8px', color: '#c1440e', fontSize: '14px', fontWeight: 600 }}>
            {t('results.impostorsLabel', impostorNamesStr)}
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ marginTop: '10px', color: '#a39e93' }}>
          <IconUsers style={{ marginRight: '8px' }} />
          {t('results.votesCast', totalVotes)}
          {hadMultipleRounds && (
            <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--warning)' }}>
              {t('results.votingRounds', allRoundsVotes.length)}
            </span>
          )}
        </motion.div>
      </motion.div>

      {/* Votación */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ margin: '20px 0' }}>
        <h3 style={{ marginBottom: '15px', color: '#a39e93' }}>{t('results.finalVoting')}</h3>
        {players.map((player, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.08, type: 'spring', stiffness: 200 }}
            className="player-card"
            style={{ border: allImpostorIndices.includes(index) ? '2px solid #c1440e' : '2px solid transparent', background: allImpostorIndices.includes(index) ? 'rgba(193, 68, 14,0.15)' : 'var(--card)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span className="name">{player}</span>
              {allImpostorIndices.includes(index) && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 + index * 0.08, type: 'spring' }} className="badge badge-impostor" style={{ marginLeft: '6px' }}>
                  <IconSecret style={{ marginRight: '4px' }} />{t('results.impostorBadge')}
                </motion.span>
              )}
              {eliminatedIndex === index && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 + index * 0.08, type: 'spring' }} className="badge" style={{ background: 'var(--warning)', color: 'var(--background)' }}>
                  <IconSkull style={{ marginRight: '4px' }} />{t('results.eliminatedBadge')}
                </motion.span>
              )}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 + index * 0.08, type: 'spring' }} className="vote-count">
                {votes[index]}
              </motion.span>
              {eliminatedIndex === index && <span style={{ fontSize: '18px' }}>🏆</span>}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Historial de rondas */}
      {hadMultipleRounds && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ marginBottom: 16 }}>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={() => { sounds.click(); setShowHistory(h => !h); }}
            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, color: '#a39e93', fontSize: 14, padding: '12px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <span>{t('results.roundHistory', allRoundsVotes.length)}</span>
            {showHistory ? <IconChevronUp /> : <IconChevronDown />}
          </motion.button>

          <AnimatePresence>
            {showHistory && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
                {allRoundsVotes.map(({ votes: rv, round }) => (
                  <div key={round} style={{ background: 'var(--card)', borderRadius: 10, padding: '12px 16px', marginTop: 8, border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ color: 'var(--warning)', fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                      {t('results.round', round)}{round === 1 ? t('results.roundInitial') : t('results.roundRunoff')}
                    </div>
                    {players.map((p, i) => rv[i] > 0 && (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', color: '#a39e93', fontSize: 13, padding: '3px 0' }}>
                        <span>{p}</span>
                        <span style={{ fontWeight: 600, color: 'white' }}>{t('results.votesLabel', rv[i])}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Palabra y pista */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="role-box" style={{ background: 'var(--card)', border: '2px solid #e8b74b' }}>
        <div className="role-label">{t('results.theWordWas')}</div>
        <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity }} className="role-word">{word}</motion.div>
        <div className="role-label" style={{ marginTop: '10px' }}>{t('results.theClueWas')}</div>
        <div className="role-clue">{clue}</div>
      </motion.div>

      {/* Botones de compartir */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px' }}>
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          onClick={handleShare}
          style={{
            flex: '1', minWidth: '150px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            padding: '13px 18px', borderRadius: '12px', cursor: 'pointer', fontSize: '14px', fontWeight: '600',
            background: shareStatus ? 'rgba(201, 162, 39,0.15)' : 'rgba(37,211,102,0.12)',
            border: `2px solid ${shareStatus ? '#c9a227' : 'rgba(37,211,102,0.4)'}`,
            color: shareStatus ? '#c9a227' : '#25d366',
            transition: 'all 0.3s',
          }}
        >
          {shareStatus ? <IconCheck /> : <IconShare />}
          {statusLabel(shareStatus) || t('results.shareResult')}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          onClick={handleInvite}
          style={{
            flex: '1', minWidth: '150px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            padding: '13px 18px', borderRadius: '12px', cursor: 'pointer', fontSize: '14px', fontWeight: '600',
            background: inviteStatus ? 'rgba(201, 162, 39,0.15)' : 'rgba(107, 66, 38,0.2)',
            border: `2px solid ${inviteStatus ? '#c9a227' : 'rgba(107, 66, 38,0.5)'}`,
            color: inviteStatus ? '#c9a227' : '#c9946b',
            transition: 'all 0.3s',
          }}
        >
          {inviteStatus ? <IconCheck /> : <IconCopy />}
          {statusLabel(inviteStatus) || t('results.inviteToPlay')}
        </motion.button>
      </motion.div>

      {/* Acciones principales */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '12px' }}>
        {onPlayAgain && (
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '6px 6px 0 rgba(0,0,0,0.35)' }} whileTap={{ scale: 0.96 }}
            onClick={() => { sounds.click(); onPlayAgain(); }}
            className="button button-primary" style={{ flex: '1', minWidth: '220px' }}
          >
            {t('results.playAgain')}
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          onClick={() => { sounds.click(); onReset(); }}
          className="button button-secondary" style={{ flex: '1', minWidth: '220px' }}
        >
          {t('results.newGame')}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
