#!/usr/bin/env node
/**
 * Run all quality checks — exit 0 only if everything passes.
 */
const { spawnSync } = require('child_process');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const checks = [
  ['audit-assets.js', 'Asset files & SVG validity'],
  ['verify-config-images.js', 'Config image references'],
  ['site-audit.js', 'HTML links, script order, structure'],
];

let failed = false;

console.log('Bizdavar — full site verification\n');

for (const [script, label] of checks) {
  console.log(`▶ ${label}`);
  const r = spawnSync(process.execPath, [path.join(__dirname, script)], {
    cwd: ROOT,
    stdio: 'inherit',
  });
  if (r.status !== 0) failed = true;
  console.log('');
}

if (failed) {
  console.error('Verification FAILED — fix errors above before deploy.');
  process.exit(1);
}

console.log('✓ All checks passed — safe to deploy.');
process.exit(0);
