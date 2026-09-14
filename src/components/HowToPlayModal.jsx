import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { IconClose, IconUsers, IconSecret, IconHand, IconEye } from './icons';
import { useLanguage } from '../i18n/LanguageContext';

// Modal simple de "Cómo funciona": explica el objetivo, el paso a paso
// de una ronda y cómo se gana. Reutiliza el lenguaje visual del resto
// de la app (--card, --shadow, radius duro) para que se sienta parte
// del mismo "expediente" en vez de un componente ajeno.
//
// Se monta con un portal a document.body: la pantalla de setup vive
// dentro de un contenedor animado por framer-motion (rotateY/x), y
// cualquier transform en un ancestro crea un nuevo "containing block"
// que rompería un position:fixed normal (quedaría recortado/mal
// posicionado en vez de cubrir todo el viewport).
export const HowToPlayModal = ({ onClose }) => {
  const { t } = useLanguage();

  // Cierra con la tecla Escape, por comodidad en desktop.
  useEffect(() => {
    const handler = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const steps = [
    { icon: IconUsers, title: t('howTo.step1Title'), body: t('howTo.step1Body') },
    { icon: IconSecret, title: t('howTo.step2Title'), body: t('howTo.step2Body') },
    { icon: IconHand, title: t('howTo.step3Title'), body: t('howTo.step3Body') },
    { icon: IconEye, title: t('howTo.step4Title'), body: t('howTo.step4Body') },
  ];

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--card)',
          borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--shadow)',
          border: '1px solid var(--line)',
          maxWidth: '440px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: '24px',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          aria-label={t('howTo.close')}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <IconClose size={18} />
        </button>

        <h2
          style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--text)',
            marginBottom: '4px',
            paddingRight: '24px',
          }}
        >
          {t('howTo.title')}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginBottom: '20px' }}>
          {t('howTo.subtitle')}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
          {steps.map(({ icon: Icon, title, body }, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div
                style={{
                  flexShrink: 0,
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(163, 49, 28, 0.15)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={16} />
              </div>
              <div>
                <p style={{ fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--text)', marginBottom: '2px' }}>
                  {title}
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'var(--card-raised)',
            borderRadius: 'var(--radius-sm)',
            border: '1px dashed var(--line)',
            padding: '14px 16px',
          }}
        >
          <p style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--warning)', marginBottom: '6px' }}>
            {t('howTo.winTitle')}
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '8px' }}>
            {t('howTo.winCrew')}
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {t('howTo.winImpostor')}
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
          className="button button-primary"
          style={{ marginTop: '20px' }}
        >
          {t('howTo.gotIt')}
        </motion.button>
      </motion.div>
    </motion.div>,
    document.body
  );
};
