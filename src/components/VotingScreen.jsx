import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSkull, FaUsers, FaExclamationTriangle, FaFire } from 'react-icons/fa';
import { PassDevice } from './PassDevice';

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
  const [deviceReady, setDeviceReady] = useState(false);
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  const totalPlayers = players.length;
  const isRunoff = votingTied && tiedPlayers && tiedPlayers.length > 0;

  if (!deviceReady) {
    return (
      <PassDevice
        name={voterName}
        subtitle="Es tu turno de votar"
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
          🗳️ Votación
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
                  background: i + 1 < votingRound ? 'rgba(78,205,196,0.3)' : i + 1 === votingRound ? 'var(--primary)' : 'rgba(255,255,255,0.08)',
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
                background: 'rgba(245,200,66,0.15)', border: '2px solid var(--warning)',
                borderRadius: 12, padding: '10px 16px', marginBottom: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              }}
            >
              <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}>
                <FaExclamationTriangle color="var(--warning)" />
              </motion.div>
              <div>
                <div style={{ color: 'var(--warning)', fontWeight: 700, fontSize: 14 }}>
                  ¡Empate! Ronda de desempate #{votingRound}
                </div>
                <div style={{ color: '#a7a9be', fontSize: 12 }}>
                  Solo puedes votar a: {tiedPlayers.map(i => players[i]).join(', ')}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <p style={{ color: '#a7a9be', marginBottom: '4px', fontSize: 14 }}>
          <FaUsers style={{ marginRight: '6px' }} />¿A quién quieren eliminar?
        </p>
        <p style={{ color: 'white', fontWeight: 'bold', marginBottom: '16px' }}>
          Turno de votar: {voterName}
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
                border: isInRunoffGroup && !isSelf ? '2px solid rgba(245,200,66,0.5)' : isSelected ? '2px solid var(--primary)' : '2px solid transparent',
                transition: 'all 0.25s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="name">{player}</span>
                {isSelf && <span style={{ color: '#a7a9be', fontSize: 12 }}>(tú)</span>}
                {isInRunoffGroup && !isSelf && (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                    style={{ fontSize: 11, color: 'var(--warning)', fontWeight: 600, background: 'rgba(245,200,66,0.15)', padding: '2px 8px', borderRadius: 20 }}
                  >
                    <FaFire style={{ marginRight: 3 }} />Empatado
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
            <motion.button whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(233,69,96,0.45)' }} whileTap={{ scale: 0.96 }} onClick={confirmVote} className="button button-primary">
              <FaSkull style={{ marginRight: '8px' }} />Eliminar a {players[selected]}
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
            <div style={{ background: 'rgba(78,205,196,0.1)', padding: '16px', borderRadius: '14px', border: '2px solid #4ecdc4' }}>
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.6, repeat: 2 }} style={{ color: '#4ecdc4', fontSize: '20px', fontWeight: 'bold' }}>
                ✅ ¡Voto registrado!
              </motion.div>
              <div style={{ color: '#a7a9be', fontSize: '14px', marginTop: '6px' }}>
                {currentVoterIndex === totalPlayers - 1 ? 'Calculando resultados...' : 'Pasa el dispositivo al siguiente jugador...'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="progress-bar">
        <motion.div className="progress-bar-fill" initial={{ width: 0 }} animate={{ width: `${((currentVoterIndex + 1) / totalPlayers) * 100}%` }} transition={{ duration: 0.5 }} />
      </div>

      <div className="hint">
        <span className="hint-icon">🔒</span>Vota en privado, no muestres tu elección a los demás
      </div>
    </motion.div>
  );
};
