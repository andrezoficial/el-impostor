import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaUserSecret, FaSkull, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const confettiColors = ['#e94560', '#4ecdc4', '#f5c842', '#533483', '#fff'];

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
  players, votes, eliminatedIndex, impostorIndex,
  word, clue, onReset, onPlayAgain, allRoundsVotes,
}) => {
  const [showHistory, setShowHistory] = useState(false);
  const crewWins = eliminatedIndex !== -1 && eliminatedIndex === impostorIndex;
  const totalVotes = votes.reduce((a, b) => a + b, 0);
  const eliminatedName = eliminatedIndex !== -1 ? players[eliminatedIndex] : null;
  const hadMultipleRounds = allRoundsVotes && allRoundsVotes.length > 1;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} style={{ position: 'relative' }}>
      {crewWins && <Confetti />}

      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ textAlign: 'center', marginBottom: '10px' }}>
        🔎 Resultados
      </motion.h2>

      <motion.div
        initial={{ scale: 0.4, opacity: 0, rotateY: 90 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 180, delay: 0.2 }}
        className="role-box"
        style={{ borderColor: crewWins ? '#4ecdc4' : '#e94560', background: crewWins ? 'rgba(78,205,196,0.1)' : 'rgba(233,69,96,0.1)' }}
      >
        <motion.div
          animate={crewWins ? { scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] } : { scale: [1, 1.1, 1], y: [0, -8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          style={{ fontSize: '4rem', marginBottom: '10px' }}
        >
          {crewWins ? '🎉' : '😈'}
        </motion.div>

        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ color: crewWins ? '#4ecdc4' : '#e94560' }}>
          {crewWins ? '¡Los Tripulantes Ganaron!' : '¡El Impostor Ganó!'}
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ marginTop: '15px', color: 'white' }}>
          <FaSkull style={{ marginRight: '8px' }} />
          {eliminatedName ? `Eliminado: ${eliminatedName}` : 'Nadie recibió votos suficientes'}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ marginTop: '10px', color: '#a7a9be' }}>
          <FaUsers style={{ marginRight: '8px' }} />
          {totalVotes} votos emitidos
          {hadMultipleRounds && (
            <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--warning)' }}>
              ({allRoundsVotes.length} rondas de votación)
            </span>
          )}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ margin: '20px 0' }}>
        <h3 style={{ marginBottom: '15px', color: '#a7a9be' }}>📊 Votación Final</h3>
        {players.map((player, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.08, type: 'spring', stiffness: 200 }}
            className="player-card"
            style={{ border: index === impostorIndex ? '2px solid #e94560' : '2px solid transparent', background: index === impostorIndex ? 'rgba(233,69,96,0.15)' : 'var(--card)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span className="name">{player}</span>
              {index === impostorIndex && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 + index * 0.08, type: 'spring' }} className="badge badge-impostor" style={{ marginLeft: '6px' }}>
                  <FaUserSecret style={{ marginRight: '4px' }} />Impostor
                </motion.span>
              )}
              {eliminatedIndex === index && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 + index * 0.08, type: 'spring' }} className="badge" style={{ background: 'var(--warning)', color: 'var(--background)' }}>
                  <FaSkull style={{ marginRight: '4px' }} />Eliminado
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

      {hadMultipleRounds && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ marginBottom: 16 }}>
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={() => setShowHistory(h => !h)}
            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, color: '#a7a9be', fontSize: 14, padding: '12px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <span>📋 Historial de rondas ({allRoundsVotes.length})</span>
            {showHistory ? <FaChevronUp /> : <FaChevronDown />}
          </motion.button>

          <AnimatePresence>
            {showHistory && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} style={{ overflow: 'hidden' }}>
                {allRoundsVotes.map(({ votes: rv, round }) => (
                  <div key={round} style={{ background: 'var(--card)', borderRadius: 10, padding: '12px 16px', marginTop: 8, border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ color: 'var(--warning)', fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                      Ronda {round}{round === 1 ? ' (inicial)' : ' (desempate)'}
                    </div>
                    {players.map((p, i) => rv[i] > 0 && (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', color: '#a7a9be', fontSize: 13, padding: '3px 0' }}>
                        <span>{p}</span>
                        <span style={{ fontWeight: 600, color: 'white' }}>{rv[i]} voto{rv[i] !== 1 ? 's' : ''}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="role-box" style={{ background: 'var(--card)', border: '2px solid #f5c842' }}>
        <div className="role-label">📝 La palabra era</div>
        <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2, repeat: Infinity }} className="role-word">{word}</motion.div>
        <div className="role-label" style={{ marginTop: '10px' }}>🔍 La pista era</div>
        <div className="role-clue">{clue}</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
        {onPlayAgain && (
          <motion.button whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(233,69,96,0.4)' }} whileTap={{ scale: 0.96 }} onClick={onPlayAgain} className="button button-primary" style={{ flex: '1', minWidth: '220px' }}>
            🔁 Otra Ronda (mismos jugadores)
          </motion.button>
        )}
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={onReset} className="button button-secondary" style={{ flex: '1', minWidth: '220px' }}>
          🆕 Nueva Partida
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
