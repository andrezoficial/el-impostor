import React from 'react';
import { motion } from 'framer-motion';
import { FaHandPointRight, FaLock } from 'react-icons/fa';

// Pantalla intermedia que se muestra antes de revelar el rol de cada
// jugador o antes de que cada jugador vote, para darle tiempo a pasar
// el dispositivo sin que el jugador anterior vea información ajena.
export const PassDevice = ({ name, subtitle, buttonLabel, onReady }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ textAlign: 'center', padding: '30px 0' }}
    >
      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
        style={{ fontSize: '3rem', marginBottom: '20px' }}
      >
        📱
      </motion.div>

      <div className="role-label">Pasa el dispositivo a</div>
      <h2 style={{ fontSize: '2rem', margin: '10px 0', color: 'white' }}>
        {name}
      </h2>

      {subtitle && (
        <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>
          {subtitle}
        </p>
      )}

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onReady}
        className="button button-primary"
        style={{ maxWidth: '320px', margin: '25px auto 0' }}
      >
        <FaHandPointRight style={{ marginRight: '8px' }} />
        {buttonLabel || `Soy ${name}, continuar`}
      </motion.button>

      <div className="hint">
        <FaLock className="hint-icon" style={{ marginRight: '6px' }} />
        Los demás no deberían ver la pantalla ahora
      </div>
    </motion.div>
  );
};
