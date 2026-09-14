import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconTrash, IconUserPlus, IconTags, IconSecret, IconIdea, IconQuestion } from './icons';
import { getCategories } from '../data/wordBank';
import { useLanguage } from '../i18n/LanguageContext';
import { HowToPlayModal } from './HowToPlayModal';

const ALL_CATEGORIES = getCategories();

export const Setup = ({ onStart }) => {
  const { t } = useLanguage();
  const [players, setPlayers] = useState(['', '', '', '']);
  const [category, setCategory] = useState('all');
  const [numImpostors, setNumImpostors] = useState(1);
  const [error, setError] = useState('');
  const [showHowTo, setShowHowTo] = useState(false);

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

  // Max impostors = floor(players/2), min 1
  const validPlayerCount = players.filter(p => p.trim() !== '').length;
  const maxImpostors = Math.max(1, Math.floor(validPlayerCount / 2));

  const handleImpostorChange = (val) => {
    const n = Math.max(1, Math.min(val, maxImpostors));
    setNumImpostors(n);
  };

  const handleSubmit = () => {
    const validPlayers = players
      .map(name => name.trim())
      .filter(name => name !== '');

    if (validPlayers.length < 3) {
      setError(t('setup.errorMinPlayers'));
      return;
    }

    const namesLower = validPlayers.map(name => name.toLowerCase());
    const hasDuplicates = new Set(namesLower).size !== namesLower.length;
    if (hasDuplicates) {
      setError(t('setup.errorDuplicateNames'));
      return;
    }

    const safeImpostors = Math.min(numImpostors, Math.floor(validPlayers.length / 2));

    setError('');
    onStart(validPlayers, category, safeImpostors);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="title">{t('setup.title')}</h1>
      <p className="subtitle">{t('setup.subtitle')}</p>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowHowTo(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          background: 'transparent',
          border: '2px dashed var(--line)',
          borderRadius: 'var(--radius-sm)',
          color: 'var(--text-secondary)',
          padding: '10px',
          fontSize: 'var(--text-sm)',
          fontWeight: 600,
          cursor: 'pointer',
          marginBottom: '18px',
        }}
      >
        <IconQuestion size={15} />
        {t('howTo.button')}
      </motion.button>

      <AnimatePresence>
        {showHowTo && <HowToPlayModal onClose={() => setShowHowTo(false)} />}
      </AnimatePresence>

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
                placeholder={t('setup.playerPlaceholder', index + 1)}
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
                    color: '#a3311c',
                    cursor: 'pointer',
                    fontSize: 'var(--text-lg)',
                    padding: '8px'
                  }}
                >
                  <IconTrash />
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
          <IconUserPlus style={{ marginRight: '8px' }} />
          {t('setup.addPlayer', players.length)}
        </motion.button>
      )}

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{ color: '#a3311c', marginBottom: '15px', textAlign: 'center' }}
          >
            ⚠️ {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Impostor count selector */}
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-sm)',
            marginBottom: '10px'
          }}
        >
          <IconSecret style={{ color: '#a3311c' }} />
          {t('setup.impostorCountLabel')}
        </label>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          {[1, 2, 3].map(n => {
            const disabled = n > maxImpostors;
            const selected = numImpostors === n;
            return (
              <motion.button
                key={n}
                whileHover={!disabled ? { scale: 1.08 } : {}}
                whileTap={!disabled ? { scale: 0.94 } : {}}
                onClick={() => !disabled && handleImpostorChange(n)}
                style={{
                  flex: 1,
                  padding: '14px 0',
                  borderRadius: '12px',
                  border: selected
                    ? '2px solid #a3311c'
                    : '2px solid rgba(255,255,255,0.1)',
                  background: selected
                    ? 'rgba(163, 49, 28, 0.18)'
                    : 'var(--card)',
                  color: disabled ? 'rgba(255,255,255,0.2)' : selected ? '#a3311c' : 'var(--text)',
                  fontSize: 'var(--text-md)',
                  fontWeight: selected ? 700 : 400,
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ display: 'flex', gap: '2px' }}>
                  {Array.from({ length: n }).map((_, i) => (
                    <IconSecret key={i} size={18} />
                  ))}
                </span>
                <span>{n}</span>
              </motion.button>
            );
          })}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-xs)', textAlign: 'center', marginTop: '8px' }}>
          {t('setup.impostorCountHint', maxImpostors)}
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label
          htmlFor="category-select"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-sm)',
            marginBottom: '8px'
          }}
        >
          <IconTags />
          {t('setup.categoryLabel')}
        </label>
        <select
          id="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 18px',
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            background: 'var(--card)',
            color: 'var(--text)',
            fontSize: 'var(--text-md)'
          }}
        >
          <option value="all">{t('common.allCategoriesLabel')}</option>
          {ALL_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {t(`categories.${cat}`)}
            </option>
          ))}
        </select>
      </div>

      <motion.button
        whileHover={{ scale: 1.03, boxShadow: '6px 6px 0 rgba(0,0,0,0.35)' }}
        whileTap={{ scale: 0.97 }}
        onClick={handleSubmit}
        className="button button-primary"
      >
        {t('setup.startGame')}
      </motion.button>

      <div className="hint">
        <IconIdea className="hint-icon" size={13} style={{ marginRight: '6px', verticalAlign: '-2px' }} />
        {t('setup.hint')}
      </div>
    </motion.div>
  );
};
