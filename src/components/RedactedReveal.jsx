import React, { useRef, useState, useCallback } from 'react';
import { IconLock } from './icons';

// Barra "censurada" tipo expediente clasificado: en vez de un botón
// normal, el jugador arrastra el dedo sobre la barra negra para ir
// descubriéndola, como si raspara la tinta de censura. Un toque simple
// (sin arrastre) también revela todo, para no frustrar a quien no
// arrastre con precisión en pantallas chicas.
export const RedactedReveal = ({ label, onReveal }) => {
  const barRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 a 100
  const [dragging, setDragging] = useState(false);
  const startXRef = useRef(null);
  const movedRef = useRef(0);

  const progressFromClientX = useCallback((clientX) => {
    const el = barRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  const handlePointerDown = (e) => {
    setDragging(true);
    startXRef.current = e.clientX;
    movedRef.current = 0;
    barRef.current?.setPointerCapture?.(e.pointerId);
    setProgress(progressFromClientX(e.clientX));
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    if (startXRef.current !== null) {
      movedRef.current = Math.abs(e.clientX - startXRef.current);
    }
    setProgress(progressFromClientX(e.clientX));
  };

  const handlePointerUp = (e) => {
    if (!dragging) return;
    setDragging(false);

    // Un toque casi sin arrastre cuenta como "revelar todo": no todos
    // van a arrastrar con precisión, y no queremos que se sientan
    // atascados.
    if (movedRef.current < 12) {
      onReveal();
      return;
    }

    const pct = progressFromClientX(e.clientX);
    if (pct >= 62) {
      onReveal();
    } else {
      // No se rasp\u00f3 lo suficiente: la censura vuelve a taparse.
      setProgress(0);
    }
  };

  return (
    <div
      ref={barRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={(e) => { if (dragging) handlePointerUp(e); }}
      className="redacted-bar"
      role="button"
      tabIndex={0}
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onReveal();
      }}
    >
      <div className="redacted-label">
        <IconLock size={13} style={{ marginRight: '6px', verticalAlign: '-2px' }} />
        {label}
      </div>
      <div
        className="redacted-fill"
        style={{
          width: `${100 - progress}%`,
          transition: dragging ? 'none' : 'width 0.25s ease',
        }}
      />
    </div>
  );
};
