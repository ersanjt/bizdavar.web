#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { factsToFa } = require('./lib/tr-to-fa');

const catalogPath = path.join(__dirname, '..', 'assets', 'data', 'auto-moto', 'catalog.json');
const factsPath = path.join(__dirname, '..', 'work', 'automoto-facts.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const facts = JSON.parse(fs.readFileSync(factsPath, 'utf8')).bySku || {};
let filled = 0;
let empty = 0;

catalog.categories.forEach((cat) => {
  (cat.series || []).forEach((item) => {
    const raw = facts[String(item.sku || '').toUpperCase()];
    if (!raw) return;
    const lines = factsToFa(raw);
    if (!lines.length) {
      empty += 1;
      return;
    }
    item.featuresFa = lines;
    item.descFa = [item.titleFa, lines.slice(0, 4).join('؛ ')].filter(Boolean).join('. ') + '.';
    filled += 1;
  });
});

fs.writeFileSync(catalogPath, JSON.stringify(catalog));
console.log('persian facts', filled, 'untranslated', empty);
