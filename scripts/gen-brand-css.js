const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '../assets/styles/teltonika.css'), 'utf8');
const brands = [
  { name: 'gamak', color: '#c45a11', colorDark: '#9a4209', bg: '#faf6f2', hero: '../images/gamak/hero/gamak-motor.webp' },
  { name: 'digi', color: '#c8102e', colorDark: '#9a0c24', bg: '#fdf5f6', hero: '../images/digi-system/hero/digi-retail-hero.webp' },
  { name: 'teraoka', color: '#003da5', colorDark: '#002d7a', bg: '#f2f6fc', hero: '../images/teraoka/hero/teraoka-retail-hero.webp' }
];
for (const b of brands) {
  let css = src
    .replace(/#0054A6/g, b.color)
    .replace(/#003d7a/g, b.colorDark)
    .replace(/#f0f5fa/g, b.bg)
    .replace(/teltonika/g, b.name)
    .replace(/url\('\.\.\/images\/[^']+\/hero\/[^']+'\)/, `url('${b.hero}')`);
  fs.writeFileSync(path.join(__dirname, '../assets/styles', `${b.name}.css`), css);
  console.log('Wrote', b.name + '.css');
}
