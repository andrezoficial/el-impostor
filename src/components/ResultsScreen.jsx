import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaSkull, FaUsers, FaUserSecret } from 'react-icons/fa';

export const ResultsScreen = ({ 
  players, 
  descriptions, 
  votes, 
  impostorIndex,
  word,
  clue,
  onReset,
  onPlayAgain
}) => {
  const maxVotes = Math.max(...votes);
  const winners = votes.reduce((acc, count, index) => {
    if (count === maxVotes && count > 0) acc.push(index);
    return acc;
  }, []);
  
  const crewWins = winners.includes(impostorIndex);
  const totalVotes = votes.reduce((a, b) => a + b, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>🔎 Resultados</h2>
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        className="role-box"
        style={{ 
          borderColor: crewWins ? '#4ecdc4' : '#e94560',
          background: crewWins ? 'rgba(78, 205, 196, 0.1)' : 'rgba(233, 69, 96, 0.1)'
        }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontSize: '4rem', marginBottom: '10px' }}
        >
          {crewWins ? '🎉' : '😈'}
        </motion.div>
        <h2 style={{ color: crewWins ? '#4ecdc4' : '#e94560' }}>
          {crewWins ? '¡Los Tripulantes Ganaron!' : '¡El Impostor Ganó!'}
        </h2>
        <div style={{ marginTop: '15px', color: '#a7a9be' }}>
          <FaUsers style={{ marginRight: '8px' }} />
          {totalVotes} votos emitidos
        </div>
      </motion.div>

      <div style={{ margin: '20px 0' }}>
        <h3 style={{ marginBottom: '15px', color: '#a7a9be' }}>
          📊 Votación Final
        </h3>
        {players.map((player, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="player-card"
            style={{ 
              border: index === impostorIndex ? '2px solid #e94560' : 'none',
              background: index === impostorIndex ? 'rgba(233, 69, 96, 0.15)' : 'var(--card)'
            }}
          >
            <div>
              <span className="name">{player}</span>
              {index === impostorIndex && (
                <span className="badge badge-impostor" style={{ marginLeft: '10px' }}>
                  <FaUserSecret style={{ marginRight: '5px' }} />
                  Impostor
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="vote-count">{votes[index]}</span>
              {votes[index] === maxVotes && votes[index] > 0 && (
                <span style={{ fontSize: '20px' }}>🏆</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="role-box"
        style={{ background: 'var(--card)', border: '2px solid #f5c842' }}
      >
        <div className="role-label">📝 La palabra era</div>
        <div className="role-word">{word}</div>
        <div className="role-label" style={{ marginTop: '10px' }}>🔍 La pista era</div>
        <div className="role-clue">{clue}</div>
      </motion.div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
        {onPlayAgain && (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onPlayAgain}
            className="button button-primary"
            style={{ flex: '1', minWidth: '220px' }}
          >
            🔁 Otra Ronda (mismos jugadores)
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onReset}
          className="button button-secondary"
          style={{ flex: '1', minWidth: '220px' }}
        >
          🆕 Nueva Partida
        </motion.button>
      </div>
    </motion.div>
  );
};