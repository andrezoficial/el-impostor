import React from 'react';

// Set de iconos propios, trazo lineal (no relleno), para reemplazar los
// iconos por defecto de Font Awesome y reforzar el tema "expediente".
// Todos heredan color con currentColor y aceptan `style`/`size`.

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export const IconEye = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M2 12c2.8-4.2 6-6.3 10-6.3s7.2 2.1 10 6.3c-2.8 4.2-6 6.3-10 6.3S4.8 16.2 2 12z" />
    <circle cx="12" cy="12" r="2.6" />
  </svg>
);

export const IconSecret = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M4 10c0-3.3 3.6-6 8-6s8 2.7 8 6" />
    <path d="M3 10.5c1-1 2-1 2.6 0 .6-1 1.8-1 2.4 0 .6-1 1.8-1 2.4 0 .6-1 1.8-1 2.4 0 .6-1 1.8-1 2.4 0 .6-1 1.8-1 2.4 0 .6-1 1.6-1 2.4-.2" />
    <path d="M6 10.5v2.2c0 3 2.6 5.3 6 5.3s6-2.3 6-5.3v-2.2" />
    <circle cx="9.3" cy="13.2" r=".9" fill="currentColor" stroke="none" />
    <circle cx="14.7" cy="13.2" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconCheck = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M4 12.5l5 5L20 6" />
  </svg>
);

export const IconHand = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M3 12h13" />
    <path d="M11 7l5 5-5 5" />
    <rect x="17" y="9.5" width="4" height="5" rx="1" />
  </svg>
);

export const IconLock = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <rect x="5" y="11" width="14" height="9" rx="1.5" />
    <path d="M8 11V7.5a4 4 0 018 0V11" />
    <circle cx="12" cy="15.2" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconTrash = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M4 7h16" />
    <path d="M9 7V5.2c0-.7.6-1.2 1.2-1.2h3.6c.6 0 1.2.5 1.2 1.2V7" />
    <path d="M6 7l1 12.5c.1.8.8 1.5 1.6 1.5h6.8c.8 0 1.5-.7 1.6-1.5L18 7" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);

export const IconUserPlus = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <circle cx="9" cy="8.5" r="3.5" />
    <path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6" />
    <path d="M18 8v6M15 11h6" />
  </svg>
);

export const IconTags = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M3 4h7l11 11-7 7L3 11z" />
    <circle cx="8" cy="9" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const IconDice = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <circle cx="8.2" cy="8.2" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="15.8" cy="8.2" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="8.2" cy="15.8" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="15.8" cy="15.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const IconSkull = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M12 3c-4.4 0-7.5 3.1-7.5 7.2 0 2.6 1.2 4.3 2.5 5.6V18h2v-1.5h1.5V18h2.5v-1.5H15V18h2v-2.2c1.3-1.3 2.5-3 2.5-5.6C19.5 6.1 16.4 3 12 3z" />
    <circle cx="9" cy="10.5" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10.5" r="1.3" fill="currentColor" stroke="none" />
    <path d="M11 13.2l1 1.4 1-1.4" />
  </svg>
);

export const IconUsers = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <circle cx="8.5" cy="8" r="3" />
    <circle cx="16.5" cy="9" r="2.4" />
    <path d="M3 20c0-3.2 2.5-5.5 5.5-5.5S14 16.8 14 20" />
    <path d="M15.5 14.8c2.4.2 4.5 2.2 4.5 5.2" />
  </svg>
);

export const IconWarning = ({ size = 16, style, color }) => (
  <svg {...base(size)} style={{ color, ...style }}>
    <path d="M12 3.5L22 20H2z" />
    <path d="M12 9.5v5" />
    <circle cx="12" cy="17" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconFire = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M12 21c-3.9 0-6.5-2.5-6.5-6 0-2.6 1.5-4 2.3-6.3.4 1 1 1.7 1.8 1.7-.2-3 1.2-5.4 3.4-6.9-.5 2.2.2 3.6 1.6 5 1.3 1.2 3.9 3 3.9 6.5 0 3.5-2.6 6-6.5 6z" />
    <path d="M12 21c1.6 0 2.8-1.1 2.8-2.6 0-1.8-1.3-2.6-2.8-4.4-1.5 1.8-2.8 2.6-2.8 4.4 0 1.5 1.2 2.6 2.8 2.6z" />
  </svg>
);

export const IconPlay = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M6 4.5v15l13-7.5z" />
  </svg>
);

export const IconHome = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M4 11.5L12 4l8 7.5" />
    <path d="M6 10v9.5h12V10" />
    <path d="M10 19.5V14h4v5.5" />
  </svg>
);

export const IconChevronDown = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M5 8.5l7 7 7-7" />
  </svg>
);

export const IconChevronUp = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M5 15.5l7-7 7 7" />
  </svg>
);

export const IconShare = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <circle cx="18" cy="6" r="2.4" />
    <circle cx="6" cy="12" r="2.4" />
    <circle cx="18" cy="18" r="2.4" />
    <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
  </svg>
);

export const IconCopy = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <rect x="9" y="9" width="11" height="11" rx="1.5" />
    <path d="M6.5 15H5.5A1.5 1.5 0 014 13.5v-8A1.5 1.5 0 015.5 4h8A1.5 1.5 0 0115 5.5v1" />
  </svg>
);

export const IconIdea = ({ size = 16, style }) => (
  <svg {...base(size)} style={style}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.9v.2h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0012 3z" />
  </svg>
);

// Motivo de marca: sello circular tipo "expediente confidencial",
// usado como elemento decorativo (ver .stamp-decor en global.css).
export const StampSeal = ({ size = 140, style }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={style}>
    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
    <path id="stamp-arc" fill="none" d="M 20 50 A 30 30 0 0 1 80 50" />
    <text fontSize="8" letterSpacing="2" fill="currentColor" fontFamily="'Special Elite', monospace">
      <textPath href="#stamp-arc" startOffset="50%" textAnchor="middle">CASO CONFIDENCIAL</textPath>
    </text>
    <path d="M35 55l10 10 20-22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
  </svg>
);
