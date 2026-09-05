import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaUsers, FaUserSecret } from 'react-icons/fa';

export const VotingScreen = ({ 
  players, 
  descriptions, 
  onVote, 
  onFinish,
  currentVotes 
}) => {
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  const handleVote = (index) => {
    if (!voted) {
      setSelected(index);
    }
  };

  const confirmVote = () => {
    if (selected !== null && !voted) {
      onVote(selected);
      setVoted(true);
      setTimeout(() => {
        onFinish();
      }, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>🗳️ Votación</h2>
      <p style={{ textAlign: 'center', color: '#a7a9be', marginBottom: '20px' }}>
        <FaUsers style={{ marginRight: '8px' }} />
        ¿Quién es el impostor?
      </p>

      <div style={{ marginBottom: '20px' }}>
        <AnimatePresence>
          {players.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`player-card ${selected === index ? 'selected' : ''}`}
              onClick={() => handleVote(index)}
              style={{ 
                opacity: voted && selected !== index ? 0.5 : 1,
                cursor: voted ? 'default' : 'pointer'
              }}
            >
              <div>
                <span className="name">{player}</span>
                <span style={{ 
                  marginLeft: '10px', 
                  color: '#a7a9be', 
                  fontSize: '14px',
                  fontStyle: 'italic'
                }}>
                  "{descriptions[index] || '...'}"
                </span>
              </div>
              {currentVotes[index] > 0 && (
                <span className="vote-count">{currentVotes[index]}</span>
              )}
            </motion.div>
          ))}
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
                Redirigiendo a resultados...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};