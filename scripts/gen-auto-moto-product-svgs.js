const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../assets/images/auto-moto/products');
fs.mkdirSync(dir, { recursive: true });

const TYPES = {
  hm: 'helmet', ic: 'intercom', jk: 'jacket', pt: 'pants', gl: 'glove',
  bt: 'boot', pr: 'armor', mx: 'offroad', ax: 'bag', mp: 'part',
  bp: 'pad', af: 'air', of: 'oil', em: 'emblem', hd: 'hood', rm: 'rim'
};

const PALETTES = [
  ['#1d1d1b', '#d0122d', '#f5c518'],
  ['#1a2332', '#c45a11', '#e8d5a3'],
  ['#14261c', '#0f6b4c', '#f5c518'],
  ['#2b1d14', '#8a5a12', '#f4e4c4'],
  ['#1d2433', '#2b4c7e', '#d0122d'],
  ['#26151a', '#8a1c2b', '#f5c518']
];

function typeOf(id) {
  const m = id.match(/^bd-([a-z]+)-/);
  return TYPES[m ? m[1] : ''] || 'part';
}

function palette(id) {
  let n = 0;
  for (let i = 0; i < id.length; i++) n += id.charCodeAt(i);
  return PALETTES[n % PALETTES.length];
}

function art(type, dark, accent, gold, view) {
  if (type === 'helmet' && view === 'side') {
    return `<path d="M58 150c8-74 78-96 124-8l-18 22H86z" fill="${dark}"/><path d="M86 148h70c8 18-8 34-34 36-28 0-44-16-36-36z" fill="${accent}"/><path d="M92 118h62c8 8 4 20-8 24H104c-12-2-18-14-12-24z" fill="#cfd8e3"/><rect x="148" y="96" width="28" height="8" rx="3" fill="${gold}"/>`;
  }
  if (type === 'helmet' && view === 'visor') {
    return `<path d="M48 108h144c8 0 12 10 8 18l-18 40c-4 10-14 16-24 16H82c-10 0-20-6-24-16L40 126c-4-8 0-18 8-18z" fill="${dark}"/><path d="M62 118h116l-14 34H76z" fill="${accent}"/><path d="M70 128h100" stroke="${gold}" stroke-width="5" stroke-linecap="round"/>`;
  }
  if (type === 'helmet') {
    return `<path d="M70 150c10-70 90-86 120 0" fill="${dark}"/><path d="M82 148h96c4 20-20 36-48 36s-52-16-48-36z" fill="${accent}"/><path d="M88 118h84c6 10 2 22-10 26H98c-12-4-16-16-10-26z" fill="#cfd8e3"/><rect x="114" y="78" width="22" height="10" rx="3" fill="${gold}"/>`;
  }
  if (type === 'intercom') {
    return `<rect x="70" y="78" width="58" height="84" rx="16" fill="${dark}"/><rect x="80" y="92" width="38" height="22" rx="6" fill="${accent}"/><circle cx="99" cy="140" r="8" fill="${gold}"/><rect x="136" y="102" width="44" height="30" rx="8" fill="${accent}"/>`;
  }
  if (type === 'jacket') {
    return `<path d="M78 58l42 20 42-20 20 34-12 16-14-6v80H84V102l-14 6z" fill="${dark}"/><rect x="90" y="112" width="20" height="14" rx="3" fill="${accent}"/><rect x="130" y="112" width="20" height="14" rx="3" fill="${accent}"/><path d="M120 78v94" stroke="${gold}" stroke-width="5"/>`;
  }
  if (type === 'pants') {
    return `<path d="M88 50h64l8 34-8 108h-20L120 116 100 192H80L72 84z" fill="${dark}"/><rect x="90" y="128" width="20" height="16" rx="3" fill="${accent}"/><rect x="130" y="128" width="20" height="16" rx="3" fill="${accent}"/>`;
  }
  if (type === 'glove') {
    return `<path d="M72 96h74c14 0 26 14 26 30v40c0 12-10 20-22 20H88c-14 0-24-10-24-24v-42c0-12 8-24 8-24z" fill="${dark}"/><rect x="88" y="74" width="16" height="32" rx="7" fill="${accent}"/><rect x="108" y="68" width="16" height="36" rx="7" fill="${accent}"/><path d="M90 128h50" stroke="${gold}" stroke-width="5" stroke-linecap="round"/>`;
  }
  if (type === 'boot') {
    return `<path d="M80 56h48v84H72z" fill="${dark}"/><path d="M72 140h112c10 0 16 8 16 16v16H72z" fill="${accent}"/><path d="M72 164h128v12H72z" fill="${gold}"/>`;
  }
  if (type === 'armor') {
    return `<path d="M120 44l58 24v50c0 42-24 66-58 78-34-12-58-36-58-78V68z" fill="${dark}"/><circle cx="120" cy="112" r="16" fill="${gold}"/><path d="M120 66l36 14v32c0 26-16 42-36 50-20-8-36-24-36-50V80z" fill="${accent}"/>`;
  }
  if (type === 'offroad') {
    return `<path d="M56 156h128" stroke="${dark}" stroke-width="8"/><path d="M80 156 106 96h32l28 60" fill="none" stroke="${accent}" stroke-width="8"/><circle cx="90" cy="168" r="18" fill="${dark}" stroke="${gold}" stroke-width="6"/><circle cx="168" cy="168" r="18" fill="${dark}" stroke="${gold}" stroke-width="6"/>`;
  }
  if (type === 'bag') {
    return `<path d="M88 78h64v16H88z" fill="${dark}"/><path d="M72 94h96l-8 80H80z" fill="${accent}"/><circle cx="120" cy="140" r="10" fill="${gold}"/>`;
  }
  if (type === 'part') {
    return `<rect x="48" y="110" width="144" height="16" rx="6" fill="${dark}"/><rect x="74" y="74" width="24" height="86" rx="6" fill="${accent}"/><rect x="142" y="74" width="24" height="86" rx="6" fill="${accent}"/><circle cx="86" cy="172" r="10" fill="${gold}"/><circle cx="154" cy="172" r="10" fill="${gold}"/>`;
  }
  if (type === 'pad') {
    return `<path d="M60 80h120c8 0 12 8 10 16l-16 72c-2 8-10 12-18 12H84c-8 0-16-4-18-12L50 96c-2-8 2-16 10-16z" fill="${accent}"/><path d="M76 102h88l-8 50H84z" fill="${dark}"/><path d="M88 118h64M90 136h60" stroke="${gold}" stroke-width="5" stroke-linecap="round"/>`;
  }
  if (type === 'air') {
    return `<rect x="54" y="80" width="132" height="86" rx="14" fill="${dark}"/><rect x="70" y="62" width="100" height="20" rx="7" fill="${accent}"/><path d="M74 106h92M74 124h92M74 142h92" stroke="${gold}" stroke-width="5" stroke-linecap="round"/>`;
  }
  if (type === 'oil') {
    return `<rect x="94" y="46" width="52" height="18" rx="5" fill="${dark}"/><rect x="82" y="64" width="76" height="114" rx="16" fill="${accent}"/><circle cx="120" cy="118" r="18" fill="#f4f0ea"/><path d="M120 104v28M106 118h28" stroke="${accent}" stroke-width="5"/>`;
  }
  if (type === 'emblem') {
    return `<path d="M120 46l56 32v50l-56 38-56-38V78z" fill="${dark}"/><circle cx="120" cy="112" r="20" fill="${accent}"/><circle cx="120" cy="112" r="8" fill="${gold}"/>`;
  }
  if (type === 'hood') {
    return `<path d="M44 168c44-74 108-74 152 0" fill="${dark}"/><path d="M120 58c16 26 16 48 0 80-16-32-16-54 0-80z" fill="${accent}"/><rect x="112" y="138" width="16" height="16" rx="3" fill="${gold}"/>`;
  }
  return `<circle cx="120" cy="120" r="64" fill="${dark}"/><circle cx="120" cy="120" r="50" fill="none" stroke="${accent}" stroke-width="10"/><circle cx="120" cy="120" r="16" fill="${gold}"/>`;
}

const COLOR_PALETTE = {
  'bd-hm-ff06-mb': ['#1d1d1b', '#2a2a28', '#f5c518'],
  'bd-hm-ff06-wh': ['#e8e4dc', '#d0122d', '#1d1d1b'],
  'bd-hm-ff06-rd': ['#1d1d1b', '#d0122d', '#f5c518'],
  'bd-hm-ff06-bl': ['#1d1d1b', '#2b4c7e', '#f5c518'],
  'bd-hm-ff06-sv': ['#8b919a', '#1d1d1b', '#f5c518'],
  'bd-hm-ff-tour-mb': ['#1d1d1b', '#4a5560', '#f5c518'],
  'bd-hm-ff-tour-wh': ['#f4f1ea', '#b01024', '#1d1d1b'],
  'bd-hm-ff-tour-rd': ['#b01024', '#1d1d1b', '#f5c518'],
  'bd-hm-ff-gfx-rd': ['#1d1d1b', '#d0122d', '#f5c518'],
  'bd-hm-ff-gfx-bl': ['#f4f1ea', '#2b4c7e', '#d0122d'],
  'bd-hm-carbon-bk': ['#111110', '#3a3a38', '#f5c518'],
  'bd-hm-carbon-rd': ['#111110', '#d0122d', '#f5c518'],
  'bd-hm-mod-bk': ['#1d1d1b', '#4a5560', '#f5c518'],
  'bd-hm-mod-wh': ['#f4f1ea', '#1d1d1b', '#d0122d'],
  'bd-hm-mod-ti': ['#6d7278', '#1d1d1b', '#f5c518'],
  'bd-hm-open-bk': ['#1d1d1b', '#d0122d', '#f5c518'],
  'bd-hm-open-wh': ['#f4f1ea', '#1d1d1b', '#d0122d'],
  'bd-hm-mx-bk': ['#1d1d1b', '#f5c518', '#d0122d'],
  'bd-hm-mx-or': ['#c45a11', '#1d1d1b', '#f5c518'],
  'bd-hm-women-bk': ['#1d1d1b', '#8a5a12', '#f5c518'],
  'bd-hm-women-pk': ['#1d1d1b', '#c45a7a', '#f4f1ea'],
  'bd-hm-women-wh': ['#f4f1ea', '#c45a7a', '#1d1d1b'],
  'bd-hm-vis-sm': ['#4a5560', '#1d1d1b', '#f5c518'],
  'bd-jk-leather-br': ['#6b3f22', '#1d1d1b', '#f5c518'],
  'bd-jk-textile-rd': ['#1d1d1b', '#d0122d', '#f5c518'],
  'bd-pt-tour-gy': ['#6d7278', '#1d1d1b', '#f5c518'],
  'bd-gl-lea-br': ['#6b3f22', '#1d1d1b', '#f5c518'],
  'bd-bt-mx-rd': ['#1d1d1b', '#d0122d', '#f5c518']
};

const ids = [
  'bd-hm-ff06', 'bd-hm-ff06-mb', 'bd-hm-ff06-wh', 'bd-hm-ff06-rd', 'bd-hm-ff06-bl', 'bd-hm-ff06-sv',
  'bd-hm-ff06-side', 'bd-hm-ff06-visor',
  'bd-hm-ff-tour', 'bd-hm-ff-tour-mb', 'bd-hm-ff-tour-wh', 'bd-hm-ff-tour-rd',
  'bd-hm-ff-tour-side', 'bd-hm-ff-tour-visor',
  'bd-hm-ff-gfx', 'bd-hm-ff-gfx-rd', 'bd-hm-ff-gfx-bl',
  'bd-hm-ff-gfx-side', 'bd-hm-ff-gfx-visor',
  'bd-hm-carbon', 'bd-hm-carbon-bk', 'bd-hm-carbon-rd',
  'bd-hm-carbon-side', 'bd-hm-carbon-visor',
  'bd-hm-mod', 'bd-hm-mod-bk', 'bd-hm-mod-wh', 'bd-hm-mod-ti',
  'bd-hm-mod-side', 'bd-hm-mod-visor',
  'bd-hm-open', 'bd-hm-open-bk', 'bd-hm-open-wh',
  'bd-hm-open-side', 'bd-hm-open-visor',
  'bd-hm-mx', 'bd-hm-mx-bk', 'bd-hm-mx-or',
  'bd-hm-mx-side', 'bd-hm-mx-visor',
  'bd-hm-women', 'bd-hm-women-bk', 'bd-hm-women-pk', 'bd-hm-women-wh',
  'bd-hm-women-side', 'bd-hm-women-visor',
  'bd-hm-vis', 'bd-hm-vis-sm',
  'bd-ic-bt1', 'bd-ic-pair', 'bd-ic-cam', 'bd-ic-mount',
  'bd-jk-leather', 'bd-jk-leather-br', 'bd-jk-textile', 'bd-jk-textile-rd', 'bd-jk-rain', 'bd-jk-vest',
  'bd-pt-tour', 'bd-pt-tour-gy', 'bd-pt-jean', 'bd-pt-rain',
  'bd-gl-sum', 'bd-gl-win', 'bd-gl-lea', 'bd-gl-lea-br', 'bd-gl-touch',
  'bd-bt-urban', 'bd-bt-tour', 'bd-bt-mx', 'bd-bt-mx-rd',
  'bd-pr-back', 'bd-pr-knee', 'bd-pr-chest', 'bd-pr-neck',
  'bd-mx-kit', 'bd-mx-gog', 'bd-mx-kid',
  'bd-ax-bag', 'bd-ax-neck', 'bd-ax-therm', 'bd-ax-lock',
  'bd-mp-light', 'bd-mp-mirror', 'bd-mp-chain', 'bd-mp-guard',
  'bd-bp-mb-e', 'bd-bp-mb-er', 'bd-bp-mb-c', 'bd-bp-au-a6', 'bd-bp-au-a6r', 'bd-bp-lx-es', 'bd-bp-bm-3', 'bd-bp-vw-g',
  'bd-af-mb', 'bd-af-au', 'bd-af-lx', 'bd-af-cabin',
  'bd-of-mb', 'bd-of-au', 'bd-of-jp',
  'bd-em-mb', 'bd-em-au', 'bd-em-lx', 'bd-em-bm',
  'bd-hd-mb', 'bd-hd-base',
  'bd-rm-17', 'bd-rm-18', 'bd-rm-cap'
];

function typeOfId(id) {
  const base = id.replace(/-(side|visor|mb|wh|rd|bl|sv|or|pk|ti|bk|br|gy|sm)$/, '');
  if (/-(side|visor)$/.test(id) || id.indexOf('bd-hm-') === 0) return 'helmet';
  return typeOf(base.indexOf('bd-') === 0 ? base : id);
}

function viewOf(id) {
  if (id.endsWith('-side')) return 'side';
  if (id.endsWith('-visor') || id.indexOf('bd-hm-vis') === 0) return 'visor';
  return '';
}

ids.forEach((id) => {
  const [dark, accent, gold] = COLOR_PALETTE[id] || palette(id);
  const sku = id.toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="${sku}">
  <rect width="240" height="240" rx="28" fill="#f3efe8"/>
  <rect x="16" y="16" width="208" height="208" rx="22" fill="#fff"/>
  ${art(typeOfId(id), dark, accent, gold, viewOf(id))}
  <rect x="28" y="196" width="184" height="22" rx="8" fill="${dark}"/>
  <text x="120" y="212" text-anchor="middle" fill="#f5c518" font-family="Arial, sans-serif" font-size="10" font-weight="700">${sku}</text>
</svg>`;
  fs.writeFileSync(path.join(dir, id + '.svg'), svg);
});

console.log('wrote', ids.length, 'product svgs');
