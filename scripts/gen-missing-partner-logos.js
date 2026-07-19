/**
 * Generate simple wordmark SVGs for portfolio items missing logo assets.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'assets', 'images', 'partners');

function svg({ file, label, w = 220, h = 48, bg = '#0f172a', text = '#f8fafc', parts, sub, badge, badgeBg = '#1d4ed8' }) {
  const y = sub ? 26 : 30;
  let x = 14;
  const textNodes = (parts || [{ t: label, fill: text, size: 15 }]).map((p) => {
    const node = `<text x="${x}" y="${y}" font-family="system-ui,sans-serif" font-size="${p.size || 15}" font-weight="${p.weight || 700}" fill="${p.fill || text}">${p.t}</text>`;
    x += (p.advance != null ? p.advance : String(p.t).length * (p.size || 15) * 0.58);
    return node;
  }).join('\n  ');

  const subXml = sub
    ? `<text x="14" y="40" font-family="system-ui,sans-serif" font-size="9" font-weight="600" fill="#94a3b8" letter-spacing="1">${sub}</text>`
    : '';

  const badgeXml = badge
    ? `<rect x="${w - 54}" y="14" width="42" height="20" rx="4" fill="${badgeBg}"/>
  <text x="${w - 33}" y="28" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#fff">${badge}</text>`
    : '';

  const out = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">
  <rect width="${w}" height="${h}" rx="8" fill="${bg}"/>
  ${textNodes}
  ${subXml}
  ${badgeXml}
</svg>
`;
  fs.writeFileSync(path.join(dir, file), out);
  console.log('wrote', file);
}

svg({
  file: 'fxguard-accounting.svg',
  label: 'FXGuard Accounting',
  w: 250,
  parts: [
    { t: 'fx', fill: '#22c55e', size: 18, advance: 26 },
    { t: 'guard', fill: '#f8fafc', size: 14, weight: 600, advance: 52 },
  ],
  badge: 'ACC',
  badgeBg: '#0ea5e9',
});

svg({
  file: 'marvispace.svg',
  label: 'Marvispace',
  w: 200,
  bg: '#111827',
  parts: [{ t: 'Marvi', fill: '#a78bfa', size: 16, advance: 52 }, { t: 'space', fill: '#f8fafc', size: 16, advance: 60 }],
});

svg({
  file: 'marvi-society.svg',
  label: 'Marvi Society',
  w: 210,
  bg: '#1e1b4b',
  parts: [{ t: 'Marvi', fill: '#c4b5fd', size: 16, advance: 52 }, { t: 'Society', fill: '#f8fafc', size: 15, advance: 70 }],
  badge: 'iOS',
  badgeBg: '#7c3aed',
});

svg({
  file: 'goopay-ai.svg',
  label: 'GooPay AI',
  w: 180,
  bg: '#052e16',
  parts: [{ t: 'Goo', fill: '#4ade80', size: 17, advance: 38 }, { t: 'Pay', fill: '#f8fafc', size: 17, advance: 40 }, { t: ' AI', fill: '#86efac', size: 14, weight: 600, advance: 30 }],
});

svg({
  file: 'ajansin.svg',
  label: 'Ajansin',
  w: 170,
  bg: '#0c4a6e',
  parts: [{ t: 'Ajansin', fill: '#e0f2fe', size: 18 }],
});

svg({
  file: 'ersan-jahed-tabrizi.svg',
  label: 'Ersan Jahed Tabrizi',
  w: 250,
  bg: '#1d1d1b',
  parts: [{ t: 'Ersan', fill: '#fbbf24', size: 15, advance: 52 }, { t: ' Jahed', fill: '#f8fafc', size: 15, advance: 58 }],
  sub: 'TABRIZI',
});

svg({
  file: 'europe-gayrimenkul.svg',
  label: 'Europe Gayrimenkul',
  w: 250,
  bg: '#1e3a5f',
  parts: [{ t: 'Europe', fill: '#93c5fd', size: 15, advance: 62 }, { t: ' Gayrimenkul', fill: '#f8fafc', size: 13, weight: 600, advance: 110 }],
});

svg({
  file: 'erst-investment.svg',
  label: 'Erst Investment',
  w: 220,
  bg: '#14532d',
  parts: [{ t: 'ERST', fill: '#86efac', size: 16, advance: 52 }, { t: ' Investment', fill: '#f8fafc', size: 13, weight: 600, advance: 100 }],
});

svg({
  file: 'mandella-chocolate.svg',
  label: 'Mandella Chocolate',
  w: 240,
  bg: '#3f1d0f',
  parts: [{ t: 'Mandella', fill: '#f5d0a9', size: 16, advance: 78 }, { t: ' Chocolate', fill: '#fde68a', size: 13, weight: 600, advance: 90 }],
});

console.log('done');
