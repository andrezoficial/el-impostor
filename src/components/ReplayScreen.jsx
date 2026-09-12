import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconTags, IconPlay, IconHome } from './icons';
import { getCategories, wordBank } from '../data/wordBank';
import { useLanguage } from '../i18n/LanguageContext';

const ALL_CATEGORIES = getCategories();

export const ReplayScreen = ({ players, currentCategory, usedWords, onPlay, onReset }) => {
  const { t } = useLanguage();
  const [category, setCategory] = useState(currentCategory || 'all');

  const getStats = (cat) => {
    const pool = cat && cat !== 'all'
      ? wordBank.filter(w => w.category === cat)
      : wordBank;
    const used = pool.filter(w => usedWords.includes(w.id)).length;
    return { total: pool.length, used, remaining: pool.length - used };
  };

  const { total, remaining } = getStats(category);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ fontSize: '3rem', marginBottom: '8px' }}>🔁</div>
        <h2 style={{ margin: '0 0 6px', color: 'white' }}>{t('replay.anotherRound')}</h2>
        <p style={{ color: '#a89a7d', margin: 0, fontSize: 'var(--text-sm)' }}>
          {t('replay.subtitle')}
        </p>
      </div>

      {/* Jugadores */}
      <div className="role-box" style={{ marginBottom: '20px' }}>
        <div className="role-label" style={{ marginBottom: '12px' }}>
          {t('replay.players', players.length)}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          {players.map((p, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '20px',
                padding: '6px 14px',
                color: 'white',
                fontSize: 'var(--text-sm)',
                fontWeight: '600',
              }}
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Selector de categoría */}
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-secondary)',
            fontSize: 'var(--text-sm)',
            marginBottom: '8px',
          }}
        >
          <IconTags />
          {t('replay.categoryLabel')}
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: '100%',
            padding: '14px 18px',
            borderRadius: '12px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            background: 'var(--card)',
            color: 'var(--text)',
            fontSize: 'var(--text-md)',
          }}
        >
          <option value="all">{t('common.allCategoriesLabel')}</option>
          {ALL_CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{t(`categories.${cat}`)}</option>
          ))}
        </select>

        {/* Indicador de palabras restantes */}
        <motion.div
          key={category}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '8px',
            padding: '8px 14px',
            borderRadius: '8px',
            background: remaining === 0
              ? 'rgba(163, 49, 28, 0.12)'
              : 'rgba(138, 157, 82, 0.1)',
            border: `1px solid ${remaining === 0 ? 'rgba(163, 49, 28,0.3)' : 'rgba(138, 157, 82,0.25)'}`,
            fontSize: 'var(--text-xs)',
            color: remaining === 0 ? '#a3311c' : '#8a9d52',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          {remaining === 0
            ? t('replay.allUsedUp', total)
            : t('replay.remainingWords', remaining, total)}
        </motion.div>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <motion.button
          whileHover={{ scale: 1.04, boxShadow: '6px 6px 0 rgba(0,0,0,0.35)' }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onPlay(category)}
          className="button button-primary"
          style={{ flex: '1', minWidth: '200px' }}
        >
          <IconPlay style={{ marginRight: '8px' }} />
          {t('replay.play')}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onReset}
          className="button button-secondary"
          style={{ flex: '1', minWidth: '200px' }}
        >
          <IconHome style={{ marginRight: '8px' }} />
          {t('replay.newGame')}
        </motion.button>
      </div>
    </motion.div>
  );
};
