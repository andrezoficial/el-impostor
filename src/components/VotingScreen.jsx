import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaUsers } from 'react-icons/fa';

export const VotingScreen = ({
  players,
  descriptions,
  onVote,
  currentVoterIndex,
  voterName
}) => {
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  const totalPlayers = players.length;

  const handleVote = (index) => {
    if (!voted && index !== currentVoterIndex) {
      setSelected(index);
    }
  };

  const confirmVote = () => {
    if (selected !== null && !voted) {
      setVoted(true);
      // Le damos un momento para mostrar la confirmación antes de
      // pasar el turno de voto al siguiente jugador (o a resultados).
      setTimeout(() => {
        onVote(selected);
      }, 1200);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>🗳️ Votación</h2>
      <p style={{ textAlign: 'center', color: '#a7a9be', marginBottom: '4px' }}>
        <FaUsers style={{ marginRight: '8px' }} />
        ¿Quién es el impostor?
      </p>
      <p style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>
        Turno de votar: {voterName}
      </p>

      <div style={{ marginBottom: '20px' }}>
        <AnimatePresence>
          {players.map((player, index) => {
            const isSelf = index === currentVoterIndex;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`player-card ${selected === index ? 'selected' : ''}`}
                onClick={() => handleVote(index)}
                style={{
                  opacity: isSelf ? 0.4 : voted && selected !== index ? 0.5 : 1,
                  cursor: isSelf || voted ? 'default' : 'pointer'
                }}
              >
                <div>
                  <span className="name">{player}</span>
                  {isSelf && (
                    <span style={{ marginLeft: '10px', color: '#a7a9be', fontSize: '12px' }}>
                      (tú)
                    </span>
                  )}
                  <span style={{
                    marginLeft: '10px',
                    color: '#a7a9be',
                    fontSize: '14px',
                    fontStyle: 'italic'
                  }}>
                    "{descriptions[index] || '...'}"
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected !== null && !voted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={confirmVote}
              className="button button-primary"
            >
              <FaCheck style={{ marginRight: '8px' }} />
              Votar por {players[selected]}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {voted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{ textAlign: 'center', marginTop: '20px' }}
          >
            <div style={{
              background: 'rgba(78, 205, 196, 0.1)',
              padding: '15px',
              borderRadius: '12px',
              border: '2px solid #4ecdc4'
            }}>
              <div style={{ color: '#4ecdc4', fontSize: '18px', fontWeight: 'bold' }}>
                ✅ ¡Voto registrado!
              </div>
              <div style={{ color: '#a7a9be', fontSize: '14px', marginTop: '5px' }}>
                {currentVoterIndex === totalPlayers - 1
                  ? 'Calculando resultados...'
                  : 'Pasa el dispositivo al siguiente jugador...'}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="progress-bar">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${((currentVoterIndex + 1) / totalPlayers) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="hint">
        <span className="hint-icon">🔒</span>
        Vota en privado, no muestres tu elección a los demás
      </div>
    </motion.div>
  );
};
