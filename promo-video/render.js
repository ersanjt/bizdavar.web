// Usage: node promo-video/render.js [--lang fa|en|tr] [--layout portrait|landscape] [--cut full|short] [--preview t1,t2,...]
const path = require('path');
const fs = require('fs');
const { spawn, execFileSync } = require('child_process');
const { chromium } = require('playwright');

const FPS = 30;
const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : def; };
const lang = opt('--lang', 'fa');
const layout = opt('--layout', 'portrait');
const cut = opt('--cut', 'full');
const [W, H] = layout === 'landscape' ? [1920, 1080] : [1080, 1920];
const name = `bizdavar-ad-${lang}-${layout === 'landscape' ? '16x9' : '9x16'}-${cut === 'short' ? '15s' : '30s'}`;

const dir = __dirname;
const out = path.join(dir, 'out');
fs.mkdirSync(out, { recursive: true });

const ffmpeg = process.env.FFMPEG ||
  execFileSync('python', ['-c', 'import imageio_ffmpeg as f; print(f.get_ffmpeg_exe())']).toString().trim();

(async () => {
  const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || 'msedge' });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const url = 'file:///' + path.join(dir, 'ad.html').replace(/\\/g, '/') + `?lang=${lang}&layout=${layout}&cut=${cut}`;
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForLoadState('networkidle');
  const { duration, cuts } = await page.evaluate(() => ({ duration: window.DURATION, cuts: window.CUTS }));

  const preview = opt('--preview');
  if (preview) {
    for (const t of preview.split(',').map(Number)) {
      await page.evaluate(t => render(t), t);
      await page.screenshot({ path: path.join(out, `preview-${name}-${t}.png`) });
    }
    await browser.close();
    return;
  }

  const audio = path.join(out, `music-${cut}.wav`);
  if (!fs.existsSync(audio)) {
    execFileSync('python', [path.join(dir, 'music.py'), '--duration', String(duration), '--cuts', cuts.join(','), '--out', audio], { stdio: 'inherit' });
  }

  const target = path.join(out, `${name}.mp4`);
  const ff = spawn(ffmpeg, [
    '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-i', audio, '-c:a', 'aac', '-b:a', '192k', '-shortest',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    target
  ], { stdio: ['pipe', 'ignore', 'inherit'] });

  const total = Math.round(duration * FPS);
  for (let i = 0; i < total; i++) {
    await page.evaluate(t => render(t), i / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await browser.close();
  console.log('done:', target);
})();
