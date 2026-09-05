import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaUserSecret, FaCheck } from 'react-icons/fa';
import { PassDevice } from './PassDevice';

export const RoleScreen = ({ 
  player, 
  isImpostor, 
  word, 
  clue, 
  onNext, 
  totalPlayers,
  currentIndex 
}) => {
  // El componente se vuelve a montar en cada cambio de jugador (App.jsx
  // usa `key` con el índice), así que este estado arranca en false cada
  // vez y obliga a confirmar antes de ver el rol.
  const [deviceReady, setDeviceReady] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [description, setDescription] = useState('');

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleNext = () => {
    if (description.trim() === '') return;
    onNext(description.trim());
  };

  if (!deviceReady) {
    return (
      <PassDevice
        name={player}
        subtitle={`Jugador ${currentIndex + 1} de ${totalPlayers}`}
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
              {isImpostor ? '🕵️ Eres el' : '👤 Eres'}
            </div>
            <h2 style={{ fontSize: '2rem', margin: '10px 0', color: 'white' }}>
              {player}
            </h2>
            <div style={{ fontSize: '14px', color: '#a7a9be' }}>
              Jugador {currentIndex + 1} de {totalPlayers}
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
                  Revelar Rol
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
                        IMPOSTOR
                      </div>
                      <div style={{ marginTop: '20px' }}>
                        <div className="role-label">🔍 Tu pista es:</div>
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="role-clue"
                        >
                          {clue}
                        </motion.div>
                      </div>
                      <div style={{ marginTop: '15px', color: '#a7a9be', fontSize: '14px' }}>
                        ⚠️ No sabes la palabra exacta, solo esta pista
                      </div>
                      <div style={{ marginTop: '10px', color: '#f5c842', fontSize: '12px' }}>
                        💡 Da una descripción que encaje con la pista
                      </div>
                      <input
                        type="text"
                        placeholder="Escribe tu descripción..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                        style={{ marginTop: '15px' }}
                      />
                    </>
                  ) : (
                    <>
                      <div className="role-label" style={{ color: '#4ecdc4', fontSize: '18px' }}>
                        <FaCheck style={{ marginRight: '8px' }} />
                        TRIPULANTE
                      </div>
                      <div style={{ marginTop: '20px' }}>
                        <div className="role-label">📝 La palabra es:</div>
                        <motion.div
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="role-word"
                        >
                          {word}
                        </motion.div>
                      </div>
                      <div style={{ marginTop: '15px', color: '#a7a9be', fontSize: '14px' }}>
                        ✅ Da una descripción que ayude a identificar la palabra
                      </div>
                      <input
                        type="text"
                        placeholder="Escribe tu descripción..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                        style={{ marginTop: '15px' }}
                      />
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
              whileHover={{ scale: description.trim() ? 1.05 : 1 }}
              whileTap={{ scale: description.trim() ? 0.95 : 1 }}
              onClick={handleNext}
              disabled={description.trim() === ''}
              className="button button-primary"
              style={{
                flex: '1',
                minWidth: '200px',
                opacity: description.trim() === '' ? 0.5 : 1,
                cursor: description.trim() === '' ? 'not-allowed' : 'pointer'
              }}
            >
              {currentIndex === totalPlayers - 1 ? '🔎 Ir a Votación' : '👀 Siguiente Jugador'}
            </motion.button>
          )}
        </div>

        <div className="hint">
          <span className="hint-icon">🔒</span>
          Asegúrate de que nadie más vea la pantalla
        </div>
      </div>
    </motion.div>
  );
};