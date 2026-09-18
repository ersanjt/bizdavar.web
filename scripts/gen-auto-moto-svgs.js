const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../assets/images/auto-moto/categories');
fs.mkdirSync(dir, { recursive: true });

function svg(name, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="${name}">
  <rect width="240" height="240" rx="28" fill="#f4f0ea"/>
  ${inner}
</svg>`;
}

const items = {
  'motorcycle-helmet': svg('motorcycle-helmet', `
  <path d="M48 150c8-62 48-96 72-96 28 0 68 28 76 96" fill="#1d1d1b"/>
  <path d="M52 150c10-48 42-78 68-78s56 28 66 78" fill="#2c2c29"/>
  <path d="M70 148h108c2 18-18 34-54 34s-56-16-54-34z" fill="#d0122d"/>
  <path d="M78 118h92c6 10 4 22-8 28H86c-12-6-14-18-8-28z" fill="#c7d4e0"/>
  <rect x="108" y="78" width="24" height="10" rx="3" fill="#f5c518"/>`),

  'motorcycle-intercom': svg('motorcycle-intercom', `
  <rect x="58" y="70" width="70" height="96" rx="18" fill="#1d1d1b"/>
  <rect x="70" y="86" width="46" height="28" rx="8" fill="#2b4c7e"/>
  <circle cx="93" cy="140" r="10" fill="#f5c518"/>
  <rect x="132" y="96" width="52" height="36" rx="8" fill="#d0122d"/>
  <path d="M184 114h16" stroke="#1d1d1b" stroke-width="8" stroke-linecap="round"/>
  <circle cx="204" cy="114" r="7" fill="#1d1d1b"/>`),

  'motorcycle-jacket': svg('motorcycle-jacket', `
  <path d="M78 54l42 22 42-22 22 36-10 18-16-8v86H82V100l-16 8-10-18z" fill="#2b4c7e"/>
  <path d="M120 76v114" stroke="#f4f0ea" stroke-width="6"/>
  <rect x="86" y="108" width="22" height="16" rx="4" fill="#d0122d"/>
  <rect x="132" y="108" width="22" height="16" rx="4" fill="#d0122d"/>
  <path d="M96 54l24 18 24-18" fill="none" stroke="#1d1d1b" stroke-width="8" stroke-linecap="round"/>`),

  'motorcycle-pants': svg('motorcycle-pants', `
  <path d="M86 48h68l8 36-8 108H148L120 118 92 192H78L70 84z" fill="#3d3d3a"/>
  <path d="M120 84v34" stroke="#f4f0ea" stroke-width="6"/>
  <rect x="88" y="128" width="22" height="18" rx="4" fill="#d0122d"/>
  <rect x="130" y="128" width="22" height="18" rx="4" fill="#d0122d"/>`),

  'motorcycle-gloves': svg('motorcycle-gloves', `
  <path d="M70 92h78c16 0 28 16 28 32v46c0 14-12 22-26 22H86c-16 0-26-12-26-28V118c0-14 10-26 10-26z" fill="#c45a11"/>
  <rect x="86" y="70" width="18" height="36" rx="8" fill="#a0460d"/>
  <rect x="108" y="62" width="18" height="42" rx="8" fill="#a0460d"/>
  <rect x="130" y="70" width="18" height="36" rx="8" fill="#a0460d"/>
  <rect x="152" y="86" width="22" height="28" rx="8" fill="#1d1d1b"/>
  <path d="M86 128h58" stroke="#f5c518" stroke-width="6" stroke-linecap="round"/>`),

  'motorcycle-boots': svg('motorcycle-boots', `
  <path d="M78 58h52v86H70z" fill="#1d1d1b"/>
  <path d="M70 144h118c12 0 18 10 18 18v16H70z" fill="#2a2a28"/>
  <path d="M70 168h136v14H70z" fill="#d0122d"/>
  <rect x="88" y="78" width="28" height="10" rx="3" fill="#f5c518"/>
  <rect x="88" y="100" width="28" height="10" rx="3" fill="#f5c518"/>`),

  'motorcycle-protection': svg('motorcycle-protection', `
  <path d="M120 40l64 26v54c0 46-28 72-64 86-36-14-64-40-64-86V66z" fill="#0f6b4c"/>
  <path d="M120 62l42 16v40c0 32-18 52-42 62-24-10-42-30-42-62V78z" fill="#14825c"/>
  <circle cx="120" cy="112" r="16" fill="#f5c518"/>`),

  'motorcycle-offroad': svg('motorcycle-offroad', `
  <path d="M52 156h136" stroke="#8a1c2b" stroke-width="10" stroke-linecap="round"/>
  <path d="M78 156l28-62h36l30 62" fill="none" stroke="#1d1d1b" stroke-width="10" stroke-linejoin="round"/>
  <circle cx="88" cy="168" r="22" fill="#1d1d1b" stroke="#d0122d" stroke-width="8"/>
  <circle cx="168" cy="168" r="22" fill="#1d1d1b" stroke="#d0122d" stroke-width="8"/>
  <circle cx="88" cy="168" r="6" fill="#f5c518"/>
  <circle cx="168" cy="168" r="6" fill="#f5c518"/>
  <path d="M118 94h28l-8-22h-20z" fill="#d0122d"/>`),

  'motorcycle-accessory': svg('motorcycle-accessory', `
  <path d="M86 78h68v18H86z" fill="#1d1d1b"/>
  <path d="M70 96h100l-10 86H80z" fill="#5b3a8c"/>
  <path d="M92 118h56" stroke="#f5c518" stroke-width="6" stroke-linecap="round"/>
  <circle cx="120" cy="150" r="10" fill="#d0122d"/>`),

  'motorcycle-parts': svg('motorcycle-parts', `
  <rect x="46" y="108" width="148" height="18" rx="6" fill="#1d4e89"/>
  <rect x="72" y="70" width="28" height="92" rx="8" fill="#1d1d1b"/>
  <rect x="140" y="70" width="28" height="92" rx="8" fill="#1d1d1b"/>
  <circle cx="86" cy="176" r="12" fill="#d0122d"/>
  <circle cx="154" cy="176" r="12" fill="#f5c518"/>`),

  'car-brake-pad': svg('car-brake-pad', `
  <path d="M58 78h124c8 0 12 8 10 16L176 168c-2 8-10 12-18 12H82c-8 0-16-4-18-12L48 94c-2-8 2-16 10-16z" fill="#d0122d"/>
  <path d="M74 100h92l-10 56H84z" fill="#2a2a28"/>
  <path d="M86 118h68" stroke="#f5c518" stroke-width="6" stroke-linecap="round"/>
  <path d="M90 138h60" stroke="#f5c518" stroke-width="6" stroke-linecap="round"/>`),

  'car-air-filter': svg('car-air-filter', `
  <rect x="52" y="78" width="136" height="92" rx="16" fill="#2b6b4a"/>
  <rect x="68" y="60" width="104" height="22" rx="8" fill="#1d1d1b"/>
  <path d="M72 104h96M72 122h96M72 140h96" stroke="#d9efe4" stroke-width="6" stroke-linecap="round"/>`),

  'car-oil-filter': svg('car-oil-filter', `
  <rect x="92" y="42" width="56" height="22" rx="6" fill="#1d1d1b"/>
  <rect x="80" y="64" width="80" height="122" rx="18" fill="#8a5a12"/>
  <circle cx="120" cy="118" r="22" fill="#f4f0ea"/>
  <path d="M120 102v32M104 118h32" stroke="#8a5a12" stroke-width="6" stroke-linecap="round"/>
  <rect x="92" y="168" width="56" height="12" rx="4" fill="#d0122d"/>`),

  'car-emblem': svg('car-emblem', `
  <path d="M120 42l62 36v56l-62 42-62-42V78z" fill="#1d1d1b"/>
  <path d="M120 64l40 24v36l-40 28-40-28V88z" fill="#2c2c29"/>
  <circle cx="120" cy="112" r="18" fill="#d0122d"/>
  <circle cx="120" cy="112" r="8" fill="#f5c518"/>`),

  'car-hood-emblem': svg('car-hood-emblem', `
  <path d="M40 168c46-78 114-78 160 0" fill="#3a3a38"/>
  <path d="M120 58c18 28 18 52 0 86-18-34-18-58 0-86z" fill="#d0122d"/>
  <rect x="112" y="142" width="16" height="18" rx="3" fill="#1d1d1b"/>
  <circle cx="120" cy="86" r="8" fill="#f5c518"/>`),

  'car-rim': svg('car-rim', `
  <circle cx="120" cy="120" r="72" fill="#1d1d1b"/>
  <circle cx="120" cy="120" r="58" fill="none" stroke="#d0122d" stroke-width="10"/>
  <circle cx="120" cy="120" r="18" fill="#f5c518"/>
  <path d="M120 62l10 40-10 18-10-18zM178 120l-40 10-18-10 18-10zM120 178l-10-40 10-18 10 18zM62 120l40-10 18 10-18 10z" fill="#f4f0ea"/>`)
};

Object.entries(items).forEach(([name, markup]) => {
  fs.writeFileSync(path.join(dir, `${name}.svg`), markup);
});

console.log('wrote', Object.keys(items).length, 'category svgs');
