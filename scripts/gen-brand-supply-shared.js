const fs = require('fs');
const path = require('path');

const prefixes = ['teltonika', 'gamak', 'digi', 'teraoka'];
const srcPath = path.join(__dirname, '../assets/styles/teltonika.css');
let css = fs.readFileSync(srcPath, 'utf8');

css = css
  .replace(/#0054A6/g, 'var(--brand-accent)')
  .replace(/#003d7a/g, 'var(--brand-accent-dark)')
  .replace(/#f0f5fa/g, 'var(--brand-surface)');

function expandSelector(sel) {
  if (!sel.includes('.teltonika-')) return sel;
  return prefixes.map(p => sel.replace(/\.teltonika-/g, `.${p}-`)).join(', ');
}

const out = [];
const lines = css.split('\n');
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.includes('.teltonika-') && line.includes('{')) {
    const idx = line.indexOf('{');
    const sel = line.slice(0, idx).trim();
    const rest = line.slice(idx);
    if (sel.includes('.teltonika-')) {
      line = expandSelector(sel) + ' ' + rest.trim();
    }
  }
  out.push(line);
}

const header = `/**
 * Shared industrial supply brand page styles (Teltonika, Gamak, Digi, Teraoka)
 * Accent colors & hero images: see gamak.css, digi.css, teraoka.css, teltonika.css
 */
:root {
  --brand-accent: #0054A6;
  --brand-accent-dark: #003d7a;
  --brand-surface: #f0f5fa;
}
`;

fs.writeFileSync(
  path.join(__dirname, '../assets/styles/brand-supply-shared.css'),
  header + out.join('\n')
);

const accents = {
  teltonika: {
    page: 'teltonika',
    accent: '#0054A6',
    accentDark: '#003d7a',
    surface: '#f0f5fa',
    hero: "../images/teltonika/hero/fleet-telematics.webp"
  },
  gamak: {
    page: 'gamak',
    accent: '#c45a11',
    accentDark: '#9a4209',
    surface: '#faf6f2',
    hero: "../images/gamak/hero/gamak-motor.webp"
  },
  digi: {
    page: 'digiSystem',
    accent: '#c8102e',
    accentDark: '#9a0c24',
    surface: '#fdf5f6',
    hero: "../images/digi-system/hero/digi-retail.webp"
  },
  teraoka: {
    page: 'teraoka',
    accent: '#003da5',
    accentDark: '#002d7a',
    surface: '#f2f6fc',
    hero: "../images/teraoka/hero/teraoka-scales.webp"
  }
};

for (const [file, cfg] of Object.entries(accents)) {
  const accentCss = `/**
 * ${file} brand accent overrides
 */
body[data-page="${cfg.page}"] {
  --brand-accent: ${cfg.accent};
  --brand-accent-dark: ${cfg.accentDark};
  --brand-surface: ${cfg.surface};
}

body[data-page="${cfg.page}"] .${file === 'digi' ? 'digi' : file}-hero {
  background: ${cfg.surface};
  border-bottom-color: ${cfg.accent};
}

body[data-page="${cfg.page}"] .${file === 'digi' ? 'digi' : file}-hero::before {
  background:
    linear-gradient(105deg, rgba(244, 249, 250, 0.97) 42%, rgba(244, 249, 250, 0.55) 68%, rgba(244, 249, 250, 0.2) 100%),
    url('${cfg.hero}') center right / cover no-repeat;
}
`;
  const outName = file === 'teltonika' ? 'teltonika.css' : `${file}.css`;
  fs.writeFileSync(path.join(__dirname, '../assets/styles', outName), accentCss);
  console.log('Wrote', outName);
}

console.log('Wrote brand-supply-shared.css');
