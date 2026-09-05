import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaTrash, FaUserPlus } from 'react-icons/fa';

export const Setup = ({ onStart }) => {
  const [players, setPlayers] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleAddPlayer = () => {
    if (players.length < 12) {
      setPlayers([...players, '']);
    }
  };

  const handleRemovePlayer = (index) => {
    if (players.length > 3) {
      const newPlayers = players.filter((_, i) => i !== index);
      setPlayers(newPlayers);
    }
  };

  const handlePlayerChange = (index, value) => {
    const newPlayers = [...players];
    newPlayers[index] = value;
    setPlayers(newPlayers);
  };

  const handleSubmit = () => {
    const validPlayers = players
      .map(name => name.trim())
      .filter(name => name !== '');

    if (validPlayers.length < 3) {
      setError('¡Necesitas al menos 3 jugadores!');
      return;
    }

    const namesLower = validPlayers.map(name => name.toLowerCase());
    const hasDuplicates = new Set(namesLower).size !== namesLower.length;
    if (hasDuplicates) {
      setError('¡No puede haber dos jugadores con el mismo nombre!');
      return;
    }

    setError('');
    onStart(validPlayers);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="title">🕵️ El Impostor</h1>
      <p className="subtitle">Ingresa los nombres de los jugadores</p>
      
      <div className="input-group">
        <AnimatePresence>
          {players.map((player, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.05 }}
              style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
            >
              <input
                type="text"
                placeholder={`Jugador ${index + 1}`}
                value={player}
                onChange={(e) => handlePlayerChange(index, e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                style={{ flex: 1 }}
              />
              {players.length > 3 && (
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleRemovePlayer(index)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#e94560',
                    cursor: 'pointer',
                    fontSize: '18px',
                    padding: '8px'
                  }}
                >
                  <FaTrash />
                </motion.button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {players.length < 12 && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddPlayer}
          className="button button-secondary"
          style={{ marginBottom: '15px' }}
        >
          <FaUserPlus style={{ marginRight: '8px' }} />
          Agregar Jugador ({players.length}/12)
        </motion.button>
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ color: '#e94560', marginBottom: '15px', textAlign: 'center' }}
          >
            ⚠️ {error}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.03, boxShadow: '0 8px 25px rgba(233, 69, 96, 0.4)' }}
        whileTap={{ scale: 0.97 }}
        onClick={handleSubmit}
        className="button button-primary"
      >
        🎯 Iniciar Juego
      </motion.button>

      <div className="hint">
        <span className="hint-icon">💡</span>
        Mínimo 3 jugadores, máximo 12
      </div>
    </motion.div>
  );
};