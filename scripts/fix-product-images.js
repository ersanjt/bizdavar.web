#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const PL = 'assets/images/content/industrial-placeholder.svg';

let v = fs.readFileSync(path.join(ROOT, 'assets/scripts/config/vega-products.js'), 'utf8');
v = v.replace(/assets\/images\/vega\/slides\/[^'"]+/g, PL);
v = v.replace(/assets\/images\/vega\/industries\/[^'"]+/g, PL);
v = v.replace(/vegapuls-6x\.png/g, 'vegapuls-6x.svg');
v = v.replace(/vegapuls\.png/g, 'vegapuls.svg');
v = v.replace(/vegabar\.png/g, 'vegabar.svg');
v = v.replace(/vegapoint\.png/g, 'vegapoint.svg');
v = v.replace(/heroImage: '[^']+'/, "heroImage: 'assets/images/vega/vega-logo.svg'");
fs.writeFileSync(path.join(ROOT, 'assets/scripts/config/vega-products.js'), v);

let p = fs.readFileSync(path.join(ROOT, 'assets/scripts/config/prosense-products.js'), 'utf8');
p = p.replace(/assets\/images\/prosense\/[^'"]+/g, PL);
p = p.replace(/logo: '[^']+'/, "logo: 'assets/images/partners/vega.svg'");
fs.writeFileSync(path.join(ROOT, 'assets/scripts/config/prosense-products.js'), p);

console.log('Fixed vega-products.js and prosense-products.js');
