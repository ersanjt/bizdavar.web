/**
 * Internet speed test — measures against Cloudflare's speed endpoints
 * (same method as speed.cloudflare.com: sequential transfers of growing size,
 * 90th-percentile bandwidth, median ping, mean consecutive-difference jitter).
 */
(function () {
  const ORIGIN = 'https://speed.cloudflare.com';
  const LATENCY_COUNT = 20;
  const DOWN_STEPS = [[1e5, 8], [1e6, 6], [1e7, 4], [2.5e7, 4], [1e8, 3]];
  const UP_STEPS = [[1e5, 8], [1e6, 6], [1e7, 4], [2.5e7, 4], [5e7, 3]];
  // A step whose slowest transfer exceeds this ends the direction — bigger files add data, not accuracy.
  const STEP_FINISH_MS = 1000;
  // Transfers shorter than this are dominated by timer resolution.
  const MIN_SAMPLE_MS = 10;
  const PHASE_BUDGET_MS = 12000;
  const REQUEST_TIMEOUT_MS = 30000;
  const GAUGE_MAX_MBPS = 1000;
  const HISTORY_KEY = 'bizdavar_speedtest_history';
  const HISTORY_MAX = 5;
  const META_CACHE_KEY = 'bizdavar_speedtest_meta';

  const COLO_CITY = {
    IST: 'Istanbul', ESB: 'Ankara', ADB: 'Izmir', EVN: 'Yerevan', TBS: 'Tbilisi', GYD: 'Baku',
    DXB: 'Dubai', FJR: 'Fujairah', AUH: 'Abu Dhabi', MCT: 'Muscat', BAH: 'Bahrain', DOH: 'Doha',
    KWI: 'Kuwait', RUH: 'Riyadh', JED: 'Jeddah', DMM: 'Dammam', BGW: 'Baghdad', BSR: 'Basra',
    EBL: 'Erbil', NJF: 'Najaf', ISU: 'Sulaymaniyah', AMM: 'Amman', BEY: 'Beirut', CAI: 'Cairo',
    TLV: 'Tel Aviv', KHI: 'Karachi', LHE: 'Lahore', ISB: 'Islamabad', BOM: 'Mumbai', DEL: 'New Delhi',
    DME: 'Moscow', SVO: 'Moscow', LED: 'Saint Petersburg', KJA: 'Krasnoyarsk', SVX: 'Yekaterinburg',
    ALA: 'Almaty', NQZ: 'Astana', TAS: 'Tashkent', KIV: 'Chișinău', KBP: 'Kyiv', MSQ: 'Minsk',
    FRA: 'Frankfurt', MUC: 'Munich', DUS: 'Düsseldorf', HAM: 'Hamburg', TXL: 'Berlin', BER: 'Berlin',
    AMS: 'Amsterdam', BRU: 'Brussels', LHR: 'London', MAN: 'Manchester', CDG: 'Paris', MRS: 'Marseille',
    MAD: 'Madrid', BCN: 'Barcelona', LIS: 'Lisbon', MXP: 'Milan', FCO: 'Rome', VIE: 'Vienna',
    ZRH: 'Zurich', PRG: 'Prague', WAW: 'Warsaw', BUD: 'Budapest', OTP: 'Bucharest', SOF: 'Sofia',
    ATH: 'Athens', SKG: 'Thessaloniki', BEG: 'Belgrade', ZAG: 'Zagreb', ARN: 'Stockholm', CPH: 'Copenhagen',
    OSL: 'Oslo', HEL: 'Helsinki', DUB: 'Dublin', SIN: 'Singapore', HKG: 'Hong Kong', NRT: 'Tokyo',
    KIX: 'Osaka', ICN: 'Seoul', SYD: 'Sydney', IAD: 'Ashburn', EWR: 'Newark', ORD: 'Chicago',
    DFW: 'Dallas', ATL: 'Atlanta', MIA: 'Miami', LAX: 'Los Angeles', SJC: 'San Jose', SEA: 'Seattle',
    YYZ: 'Toronto', YUL: 'Montreal', GRU: 'São Paulo', JNB: 'Johannesburg'
  };

  const ACTIVITIES = [
    { key: 'browsing', ok: (r) => r.down >= 1 },
    { key: 'hd', ok: (r) => r.down >= 5 },
    { key: 'uhd', ok: (r) => r.down >= 25 },
    { key: 'calls', ok: (r) => r.down >= 3 && r.up >= 3 && r.ping <= 150 },
    { key: 'gaming', ok: (r) => r.down >= 3 && r.ping <= 60 && r.jitter <= 30 },
    { key: 'uploads', ok: (r) => r.up >= 10 }
  ];

  const $ = (id) => document.getElementById(id);
  const t = (key) => {
    const full = `speedTestPage.ui.${key}`;
    const val = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(full, '') : '';
    return val && val !== full ? val : '';
  };

  function lang() {
    return (window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.locale) || document.documentElement.lang || 'fa';
  }

  function intlLocale() {
    return { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' }[lang()] || 'en-US';
  }

  function fmt(value, digits) {
    try {
      return new Intl.NumberFormat(intlLocale(), {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
      }).format(value);
    } catch (_) {
      return value.toFixed(digits);
    }
  }

  function fmtSpeed(mbps) {
    if (mbps == null || !isFinite(mbps)) return '–';
    return fmt(mbps, mbps < 10 ? 2 : mbps < 100 ? 1 : 0);
  }

  function fmtMs(ms) {
    if (ms == null || !isFinite(ms)) return '–';
    return fmt(ms, ms < 10 ? 1 : 0);
  }

  function percentile(values, p) {
    if (!values.length) return null;
    const sorted = values.slice().sort((a, b) => a - b);
    const idx = (sorted.length - 1) * p;
    const lo = Math.floor(idx);
    const hi = Math.ceil(idx);
    return sorted[lo] + (sorted[hi] - sorted[lo]) * (idx - lo);
  }

  function jitterOf(values) {
    if (values.length < 2) return 0;
    let sum = 0;
    for (let i = 1; i < values.length; i++) sum += Math.abs(values[i] - values[i - 1]);
    return sum / (values.length - 1);
  }

  function measId() {
    return Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  function parseServerMs(header) {
    const m = /cfSpeedWorker;dur=([\d.]+)/.exec(header || '') || /cfRequestDuration;dur=([\d.]+)/.exec(header || '');
    return m ? parseFloat(m[1]) : 0;
  }

  function timingEntry(url) {
    if (!window.performance || typeof performance.getEntriesByName !== 'function') return null;
    const list = performance.getEntriesByName(url, 'resource');
    const entry = list[list.length - 1];
    return entry && entry.responseStart > 0 && entry.requestStart > 0 ? entry : null;
  }

  function request(method, url, body, onProgress) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const times = { open: performance.now(), headers: 0, end: 0 };
      xhr.open(method, url, true);
      xhr.timeout = REQUEST_TIMEOUT_MS;
      if (method === 'GET') xhr.responseType = 'blob';
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 2 && !times.headers) times.headers = performance.now();
      };
      if (onProgress) {
        const target = method === 'GET' ? xhr : xhr.upload;
        target.onprogress = (e) => onProgress(e.loaded, performance.now());
      }
      xhr.onload = () => {
        times.end = performance.now();
        if (xhr.status < 200 || xhr.status >= 300) {
          reject(new Error(`HTTP ${xhr.status}`));
          return;
        }
        resolve({
          times,
          serverMs: parseServerMs(xhr.getResponseHeader('server-timing')),
          entry: timingEntry(url)
        });
      };
      xhr.onerror = () => reject(new Error('network'));
      xhr.ontimeout = () => reject(new Error('timeout'));
      xhr.send(body || null);
    });
  }

  async function measureLatency(onSample) {
    const samples = [];
    // The first request pays for DNS/TLS setup, so it is discarded.
    for (let i = 0; i <= LATENCY_COUNT; i++) {
      const url = `${ORIGIN}/__down?bytes=0&measId=${measId()}`;
      const r = await request('GET', url);
      const raw = r.entry
        ? r.entry.responseStart - r.entry.requestStart
        : (r.times.headers || r.times.end) - r.times.open;
      const ping = Math.max(0, raw - r.serverMs);
      if (i > 0) {
        samples.push(ping);
        onSample(samples);
      }
    }
    return { ping: percentile(samples, 0.5), jitter: jitterOf(samples) };
  }

  function liveMeter(onLive) {
    let t0 = 0;
    let l0 = 0;
    return (loaded, now) => {
      if (!t0) {
        t0 = now;
        l0 = loaded;
        return;
      }
      const dt = now - t0;
      if (dt > 150) onLive(((loaded - l0) * 8) / (dt / 1000) / 1e6);
    };
  }

  async function downloadOnce(bytes, onLive) {
    const url = `${ORIGIN}/__down?bytes=${bytes}&measId=${measId()}`;
    const r = await request('GET', url, null, liveMeter(onLive));
    const ms = r.entry
      ? r.entry.responseEnd - r.entry.responseStart
      : r.times.end - (r.times.headers || r.times.open);
    return { ms, mbps: ms > 0 ? (bytes * 8) / (ms / 1000) / 1e6 : 0 };
  }

  const blobCache = {};
  function uploadBody(bytes) {
    if (!blobCache[bytes]) blobCache[bytes] = new Blob([new Uint8Array(bytes)]);
    return blobCache[bytes];
  }

  async function uploadOnce(bytes, onLive, pingMs) {
    const url = `${ORIGIN}/__up?measId=${measId()}`;
    const r = await request('POST', url, uploadBody(bytes), liveMeter(onLive));
    // The server reports how long it spent receiving the body; client-side upload timing is unreliable.
    const ms = r.serverMs > 0 ? r.serverMs : (r.times.end - r.times.open - (pingMs || 0));
    return { ms, mbps: ms > 0 ? (bytes * 8) / (ms / 1000) / 1e6 : 0 };
  }

  async function measureBandwidth(steps, once, onLive) {
    const samples = [];
    const started = performance.now();
    for (const [bytes, count] of steps) {
      let slowest = 0;
      for (let i = 0; i < count; i++) {
        if (performance.now() - started > PHASE_BUDGET_MS) return percentile(samples, 0.9);
        const s = await once(bytes, onLive);
        slowest = Math.max(slowest, s.ms);
        if (s.ms >= MIN_SAMPLE_MS) {
          samples.push(s.mbps);
          onLive(percentile(samples, 0.9));
        }
      }
      if (slowest >= STEP_FINISH_MS) break;
    }
    return percentile(samples, 0.9);
  }

  // ── Connection info (IP, ISP, location, nearest Cloudflare server) ──────

  function parseTrace(text) {
    const out = {};
    String(text || '').split('\n').forEach((line) => {
      const i = line.indexOf('=');
      if (i > 0) out[line.slice(0, i)] = line.slice(i + 1).trim();
    });
    return out;
  }

  function countryName(code) {
    if (!code) return '';
    try {
      return new Intl.DisplayNames([intlLocale()], { type: 'region' }).of(code) || code;
    } catch (_) {
      return code;
    }
  }

  async function loadMeta() {
    try {
      const cached = sessionStorage.getItem(META_CACHE_KEY);
      if (cached) return JSON.parse(cached);
    } catch (_) { /* storage blocked */ }

    const [trace, who] = await Promise.allSettled([
      fetch(`${ORIGIN}/cdn-cgi/trace`, { cache: 'no-store' }).then((r) => r.text()).then(parseTrace),
      fetch('https://ipwho.is/', { cache: 'no-store' }).then((r) => r.json())
    ]);
    const tr = trace.status === 'fulfilled' ? trace.value : {};
    const wh = who.status === 'fulfilled' && who.value && who.value.success ? who.value : {};
    const conn = wh.connection || {};
    const meta = {
      ip: tr.ip || wh.ip || '',
      country: tr.loc || wh.country_code || '',
      city: wh.city || '',
      isp: conn.isp || conn.org || '',
      asn: conn.asn || '',
      colo: tr.colo || ''
    };
    try { sessionStorage.setItem(META_CACHE_KEY, JSON.stringify(meta)); } catch (_) { /* ignore */ }
    return meta;
  }

  function renderMeta(meta) {
    if (!meta) return;
    $('stIp').textContent = meta.ip || '–';
    $('stIsp').textContent = meta.isp
      ? (meta.asn ? `${meta.isp} (AS${meta.asn})` : meta.isp)
      : '–';
    const sep = lang() === 'fa' || lang() === 'ar' ? '، ' : ', ';
    const place = [meta.city, countryName(meta.country)].filter(Boolean).join(sep);
    $('stLoc').textContent = place || '–';
    $('stServer').textContent = meta.colo
      ? `Cloudflare · ${COLO_CITY[meta.colo] || meta.colo} (${meta.colo})`
      : '–';
  }

  // ── UI ────────────────────────────────────────────────────────────────

  function setGauge(value, unit, fraction) {
    $('stGaugeValue').textContent = value;
    $('stGaugeUnit').textContent = unit;
    const pct = Math.max(0, Math.min(1, fraction || 0)) * 100;
    const fill = $('stGaugeFill');
    fill.style.strokeDashoffset = String(100 - pct);
    // A round linecap draws a dot even at zero length.
    fill.style.opacity = pct > 0 ? '1' : '0';
  }

  function speedFraction(mbps) {
    return Math.log10(1 + Math.max(0, mbps)) / Math.log10(1 + GAUGE_MAX_MBPS);
  }

  function showSpeed(mbps) {
    setGauge(fmtSpeed(mbps), t('mbps') || 'Mbps', speedFraction(mbps));
  }

  function setStatus(key) {
    const el = $('stStatus');
    el.removeAttribute('data-i18n');
    el.textContent = t(key);
  }

  function setPhase(key, metricId) {
    $('stGaugePhase').textContent = key ? t(key) : '';
    document.querySelectorAll('.st-metric').forEach((m) => m.classList.toggle('is-active', m.id === metricId));
  }

  function renderVerdict(result) {
    const list = $('stVerdictList');
    list.innerHTML = '';
    ACTIVITIES.forEach((a) => {
      const ok = a.ok(result);
      const li = document.createElement('li');
      li.className = `st-verdict__item ${ok ? 'is-ok' : 'is-no'}`;
      const name = document.createElement('span');
      name.textContent = t(`activities.${a.key}`);
      const badge = document.createElement('span');
      badge.className = 'st-verdict__badge';
      badge.textContent = t(ok ? 'okLabel' : 'noLabel');
      li.append(name, badge);
      list.appendChild(li);
    });
    $('stVerdict').hidden = false;
  }

  function readHistory() {
    try {
      const list = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      return Array.isArray(list) ? list : [];
    } catch (_) {
      return [];
    }
  }

  function writeHistory(list) {
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, HISTORY_MAX))); } catch (_) { /* ignore */ }
  }

  function renderHistory() {
    const list = readHistory();
    $('stHistory').hidden = !list.length;
    const body = $('stHistoryBody');
    body.innerHTML = '';
    let dateFmt;
    try {
      dateFmt = new Intl.DateTimeFormat(intlLocale(), { dateStyle: 'short', timeStyle: 'short' });
    } catch (_) {
      dateFmt = { format: (d) => d.toLocaleString() };
    }
    list.forEach((r) => {
      const tr = document.createElement('tr');
      [dateFmt.format(new Date(r.ts)), fmtSpeed(r.down), fmtSpeed(r.up), fmtMs(r.ping)].forEach((v) => {
        const td = document.createElement('td');
        td.textContent = v;
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
  }

  function shareText(result) {
    const url = `${location.origin}${location.pathname}`;
    return (t('shareText') || '{down} / {up} Mbps · {ping} ms — {url}')
      .replace('{down}', fmtSpeed(result.down))
      .replace('{up}', fmtSpeed(result.up))
      .replace('{ping}', fmtMs(result.ping))
      .replace('{url}', url);
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }

  function trackResult(result, meta) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'speed_test_complete',
      speed_down_mbps: Math.round(result.down * 10) / 10,
      speed_up_mbps: Math.round(result.up * 10) / 10,
      speed_ping_ms: Math.round(result.ping),
      speed_jitter_ms: Math.round(result.jitter),
      speed_country: (meta && meta.country) || '',
      speed_colo: (meta && meta.colo) || '',
      page_locale: lang()
    });
  }

  window.initSpeedTestPage = function () {
    const startBtn = $('stStart');
    if (!startBtn || startBtn.dataset.ready) return;
    startBtn.dataset.ready = '1';

    let running = false;
    let lastResult = null;
    let meta = null;

    loadMeta().then((m) => {
      meta = m;
      renderMeta(m);
    });
    renderHistory();

    document.addEventListener('bizdavar:locale', () => {
      renderMeta(meta);
      renderHistory();
      if (lastResult) renderVerdict(lastResult);
    });

    const shareBtn = $('stShare');
    if (navigator.share) shareBtn.hidden = false;

    $('stCopy').addEventListener('click', async () => {
      if (!lastResult) return;
      const btn = $('stCopy');
      try {
        await copyText(shareText(lastResult));
        btn.textContent = t('copied');
        setTimeout(() => { btn.textContent = t('copy'); }, 2000);
      } catch (_) { /* clipboard denied */ }
    });

    shareBtn.addEventListener('click', () => {
      if (!lastResult || !navigator.share) return;
      navigator.share({ title: document.title, text: shareText(lastResult) }).catch(() => {});
    });

    $('stHistoryClear').addEventListener('click', () => {
      writeHistory([]);
      renderHistory();
    });

    startBtn.addEventListener('click', async () => {
      if (running) return;
      running = true;
      startBtn.disabled = true;
      startBtn.removeAttribute('data-i18n');
      $('stVerdict').hidden = true;
      $('stActions').hidden = true;
      ['stDown', 'stUp', 'stPing', 'stJitter'].forEach((id) => { $(id).textContent = '–'; });
      document.getElementById('speedTest').classList.add('is-running');

      const result = { down: 0, up: 0, ping: 0, jitter: 0 };
      try {
        setStatus('statusLatency');
        setPhase('ping', 'stMetricPing');
        const lat = await measureLatency((samples) => {
          const p = percentile(samples, 0.5);
          setGauge(fmtMs(p), t('ms') || 'ms', 0);
          $('stPing').textContent = fmtMs(p);
          $('stJitter').textContent = fmtMs(jitterOf(samples));
        });
        result.ping = lat.ping;
        result.jitter = lat.jitter;

        setStatus('statusDownload');
        setPhase('download', 'stMetricDown');
        showSpeed(0);
        result.down = await measureBandwidth(DOWN_STEPS, downloadOnce, (mbps) => {
          showSpeed(mbps);
          $('stDown').textContent = fmtSpeed(mbps);
        }) || 0;
        $('stDown').textContent = fmtSpeed(result.down);

        setStatus('statusUpload');
        setPhase('upload', 'stMetricUp');
        showSpeed(0);
        result.up = await measureBandwidth(UP_STEPS, (bytes, onLive) => uploadOnce(bytes, onLive, result.ping), (mbps) => {
          showSpeed(mbps);
          $('stUp').textContent = fmtSpeed(mbps);
        }) || 0;
        $('stUp').textContent = fmtSpeed(result.up);

        setPhase('', '');
        showSpeed(result.down);
        $('stGaugePhase').textContent = t('download');
        setStatus('statusDone');

        lastResult = result;
        renderVerdict(result);
        $('stActions').hidden = false;
        writeHistory([{ ts: Date.now(), ...result }].concat(readHistory()));
        renderHistory();
        trackResult(result, meta);
      } catch (_) {
        setPhase('', '');
        setGauge('0', t('mbps') || 'Mbps', 0);
        setStatus('statusError');
      } finally {
        running = false;
        startBtn.disabled = false;
        startBtn.textContent = t('restart');
        document.getElementById('speedTest').classList.remove('is-running');
      }
    });
  };
})();
