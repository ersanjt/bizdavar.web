#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { polishAccessory } = require('./lib/polish-moto-titles');

const catalogPath = path.join(__dirname, '..', 'assets', 'data', 'auto-moto', 'catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
const write = process.argv.includes('--write');
let changed = 0;
const samples = [];

(catalog.categories || []).forEach((cat) => {
  (cat.series || []).forEach((item, index) => {
    const next = polishAccessory(item);
    if (next === item || next.titleFa === item.titleFa) return;
    changed += 1;
    if (samples.length < 16) samples.push(item.titleFa + '\n  -> ' + next.titleFa + ' | ' + next.categoryFa + ' / ' + next.leafFa);
    if (write) cat.series[index] = next;
  });
});

if (write && catalog.highlights) {
  const byId = new Map();
  catalog.categories.forEach((cat) => {
    (cat.series || []).forEach((item) => byId.set(item.id, item));
  });
  catalog.highlights.forEach((item) => {
    const src = byId.get(item.id);
    if (!src) return;
    item.title = src.titleFa;
    item.titleEn = src.titleEn;
    item.descFa = src.descFa;
  });
  fs.writeFileSync(catalogPath, JSON.stringify(catalog));
}

console.log(write ? 'wrote' : 'dry', changed);
samples.forEach((line) => console.log(line));
