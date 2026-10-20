/**
 * Free tool pages — one entry point (window.initFreeTool) that wires the tool named by
 * #freeTool[data-tool]: whatsapp, sitespeed, myip, utm, tank, units.
 */
(function () {
  const $ = (id) => document.getElementById(id);
  const I18N = () => window.BIZDAVAR_I18N;

  function lang() {
    return (I18N() && I18N().locale) || document.documentElement.lang || 'fa';
  }

  function intlLocale() {
    return { fa: 'fa-IR', tr: 'tr-TR', en: 'en-US', ru: 'ru-RU', ar: 'ar-AE' }[lang()] || 'en-US';
  }

  function translator(ns) {
    return (key) => {
      const full = `${ns}.ui.${key}`;
      const val = I18N() ? I18N().t(full, '') : '';
      return val && val !== full ? val : '';
    };
  }

  function fmt(value, maxFrac, minFrac) {
    try {
      return new Intl.NumberFormat(intlLocale(), {
        minimumFractionDigits: minFrac || 0,
        maximumFractionDigits: maxFrac
      }).format(value);
    } catch (_) {
      return value.toFixed(maxFrac);
    }
  }

  function fmtSig(value) {
    const abs = Math.abs(value);
    const opts = abs !== 0 && (abs >= 1e9 || abs < 1e-4)
      ? { notation: 'scientific', maximumSignificantDigits: 4 }
      : { maximumSignificantDigits: 6 };
    try {
      return new Intl.NumberFormat(intlLocale(), opts).format(value);
    } catch (_) {
      return String(Number(value.toPrecision(6)));
    }
  }

  /** Accepts Persian/Arabic digits and comma or Arabic decimal separators. */
  function parseNum(input) {
    const s = String(input == null ? '' : input).trim()
      .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
      .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
      .replace(/[\s٬']/g, '')
      .replace(/[٫,]/g, '.')
      .replace(/[−–]/g, '-');
    if (!/^-?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(s)) return NaN;
    return parseFloat(s);
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

  /** Shows "copied" on a button, then restores its data-i18n label. */
  function flashCopied(btn, t) {
    const key = btn.getAttribute('data-i18n');
    btn.textContent = t('copied');
    clearTimeout(btn._ftTimer);
    btn._ftTimer = setTimeout(() => {
      const label = key && I18N() ? I18N().t(key, '') : '';
      if (label && label !== key) btn.textContent = label;
    }, 2000);
  }

  function track(tool, action, extra) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: 'free_tool_use', tool_name: tool, tool_action: action, page_locale: lang() }, extra || {}));
  }

  /** Fires the first-use event once per page view for tools that update as you type. */
  function trackOnce(tool, action) {
    const flag = `_ft_${tool}_${action}`;
    if (window[flag]) return;
    window[flag] = true;
    track(tool, action);
  }

  function onLocale(fn) {
    document.addEventListener('bizdavar:locale', fn);
  }

  function setPressed(group, btn) {
    group.querySelectorAll('[aria-pressed]').forEach((b) => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
  }

  function regionName(code) {
    try {
      return new Intl.DisplayNames([intlLocale()], { type: 'region' }).of(code) || code;
    } catch (_) {
      return code;
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  /* ───────────────────────── WhatsApp link generator ───────────────────────── */

  const DIAL_CODES = {
    IR: '98', TR: '90', AE: '971', IQ: '964', RU: '7', SA: '966', AF: '93', AZ: '994', AM: '374', GE: '995',
    KZ: '7', UZ: '998', TJ: '992', TM: '993', KG: '996', BY: '375', UA: '380', QA: '974', KW: '965', BH: '973',
    OM: '968', JO: '962', LB: '961', SY: '963', EG: '20', PS: '970', YE: '967', LY: '218', TN: '216', DZ: '213',
    MA: '212', SD: '249', PK: '92', IN: '91', CN: '86', JP: '81', KR: '82', MY: '60', ID: '62', SG: '65',
    TH: '66', VN: '84', PH: '63', BD: '880', US: '1', CA: '1', GB: '44', DE: '49', FR: '33', NL: '31',
    BE: '32', IT: '39', ES: '34', PT: '351', SE: '46', NO: '47', DK: '45', FI: '358', PL: '48', AT: '43',
    CH: '41', GR: '30', CY: '357', BG: '359', RO: '40', HU: '36', CZ: '420', RS: '381', IE: '353', AU: '61',
    NZ: '64', BR: '55', MX: '52', AR: '54', ZA: '27', NG: '234', KE: '254', ET: '251'
  };
  const PRIORITY_COUNTRIES = ['IR', 'TR', 'AE', 'IQ', 'RU', 'SA', 'AF', 'AZ', 'KZ', 'DE', 'GB', 'US'];
  const LOCALE_COUNTRY = { fa: 'IR', tr: 'TR', ru: 'RU', ar: 'AE' };
  const WA_COUNTRY_KEY = 'bizdavar_wa_country';

  function defaultCountry() {
    try {
      const saved = localStorage.getItem(WA_COUNTRY_KEY);
      if (saved && DIAL_CODES[saved]) return saved;
    } catch (_) { /* storage blocked */ }
    if (LOCALE_COUNTRY[lang()]) return LOCALE_COUNTRY[lang()];
    const region = (navigator.language || '').split('-')[1];
    return region && DIAL_CODES[region.toUpperCase()] ? region.toUpperCase() : 'US';
  }

  function toLatinDigits(s) {
    return String(s)
      .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
      .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660));
  }

  /** National or international input → E.164 digits without "+". */
  function waNumber(input, dial) {
    let s = toLatinDigits(input).trim();
    if (s.startsWith('+')) return s.replace(/\D/g, '');
    s = s.replace(/\D/g, '');
    if (s.startsWith('00')) return s.slice(2);
    if (dial === '7' && s.length === 11 && s.startsWith('8')) s = s.slice(1);
    s = s.replace(/^0+/, '');
    if (!s) return '';
    if (s.startsWith(dial) && s.length >= dial.length + 8) return s;
    return dial + s;
  }

  function qrDataUrl(text) {
    if (typeof window.qrcode !== 'function') return '';
    const qr = window.qrcode(0, 'M');
    qr.addData(text);
    qr.make();
    const count = qr.getModuleCount();
    const quiet = 4;
    const scale = Math.max(4, Math.floor(512 / (count + quiet * 2)));
    const size = (count + quiet * 2) * scale;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#000';
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (qr.isDark(r, c)) ctx.fillRect((c + quiet) * scale, (r + quiet) * scale, scale, scale);
      }
    }
    return canvas.toDataURL('image/png');
  }

  function initWhatsapp() {
    const t = translator('whatsappLinkPage');
    const country = $('waCountry');
    const phone = $('waPhone');
    const msg = $('waMsg');
    let link = '';

    function fillCountries() {
      const selected = country.value || defaultCountry();
      const rest = Object.keys(DIAL_CODES).filter((c) => !PRIORITY_COUNTRIES.includes(c))
        .map((c) => ({ c, name: regionName(c) }))
        .sort((a, b) => a.name.localeCompare(b.name, intlLocale()));
      const opt = (c, name) => `<option value="${c}">${escapeHtml(name)} (+${DIAL_CODES[c]})</option>`;
      country.innerHTML = PRIORITY_COUNTRIES.map((c) => opt(c, regionName(c))).join('')
        + '<option disabled>──────────</option>'
        + rest.map((r) => opt(r.c, r.name)).join('');
      country.value = selected;
    }

    function update() {
      const raw = phone.value.trim();
      const num = raw ? waNumber(raw, DIAL_CODES[country.value] || '') : '';
      const valid = num.length >= 7 && num.length <= 15;
      $('waError').hidden = !raw || valid;
      $('waEmpty').hidden = valid;
      $('waResult').hidden = !valid;
      if (!valid) { link = ''; return; }
      const text = msg.value.trim();
      link = `https://wa.me/${num}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
      $('waLink').textContent = link;
      $('waOpen').href = link;
      const qr = qrDataUrl(link);
      $('waQrBox').hidden = !qr;
      if (qr) {
        $('waQr').src = qr;
        $('waQrDownload').href = qr;
      }
    }

    fillCountries();
    country.addEventListener('change', () => {
      try { localStorage.setItem(WA_COUNTRY_KEY, country.value); } catch (_) { /* storage blocked */ }
      update();
    });
    phone.addEventListener('input', update);
    msg.addEventListener('input', update);

    document.querySelectorAll('[data-wa-template]').forEach((chip) => {
      chip.addEventListener('click', () => {
        msg.value = t(chip.getAttribute('data-wa-template'));
        update();
        msg.focus();
      });
    });

    $('waCopy').addEventListener('click', async (e) => {
      if (!link) return;
      try {
        await copyText(link);
        flashCopied(e.currentTarget, t);
        track('whatsapp_link', 'copy_link');
      } catch (_) { /* clipboard denied */ }
    });
    $('waOpen').addEventListener('click', () => track('whatsapp_link', 'open'));
    $('waCopyHtml').addEventListener('click', async (e) => {
      if (!link) return;
      const html = `<a href="${escapeHtml(link)}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:999px;background:#25D366;color:#fff;font:600 16px/1.2 system-ui,sans-serif;text-decoration:none">${escapeHtml(t('buttonLabel'))}</a>`;
      try {
        await copyText(html);
        flashCopied(e.currentTarget, t);
        track('whatsapp_link', 'copy_html');
      } catch (_) { /* clipboard denied */ }
    });
    $('waQrDownload').addEventListener('click', () => track('whatsapp_link', 'download_qr'));

    onLocale(fillCountries);
    update();
  }

  /* ───────────────────────── Website speed test (PageSpeed Insights) ───────────────────────── */

  const PSI_API = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
  const PSI_TIMEOUT_MS = 90000;
  const LAB_AUDITS = [
    ['fcp', 'first-contentful-paint'],
    ['lcp', 'largest-contentful-paint'],
    ['tbt', 'total-blocking-time'],
    ['cls', 'cumulative-layout-shift'],
    ['si', 'speed-index']
  ];
  const FIELD_METRICS = [
    ['lcp', 'LARGEST_CONTENTFUL_PAINT_MS', (v) => `${fmt(v / 1000, 1)} s`],
    ['inp', 'INTERACTION_TO_NEXT_PAINT', (v) => `${fmt(v, 0)} ms`],
    ['cls', 'CUMULATIVE_LAYOUT_SHIFT_SCORE', (v) => fmt(v / 100, 2)]
  ];

  function normalizeSiteUrl(input) {
    let s = toLatinDigits(input).trim();
    if (!s) return '';
    if (!/^https?:\/\//i.test(s)) s = `https://${s}`;
    try {
      const u = new URL(s);
      if (!u.hostname.includes('.') || /\s/.test(u.hostname)) return '';
      return u.href;
    } catch (_) {
      return '';
    }
  }

  function scoreClass(score) {
    if (score == null) return '';
    return score >= 0.9 ? 'is-good' : score >= 0.5 ? 'is-avg' : 'is-poor';
  }

  function metricHtml(label, value, cls, sub) {
    return `<div class="st-metric ${cls}"><span class="st-metric__label">${escapeHtml(label)}</span>`
      + `<span class="st-metric__value" dir="ltr"><b>${escapeHtml(value)}</b></span>`
      + (sub ? `<span class="ft-sub">${escapeHtml(sub)}</span>` : '')
      + '</div>';
  }

  function initSiteSpeed() {
    const t = translator('siteSpeedPage');
    const form = $('psForm');
    const input = $('psUrl');
    const submit = $('psSubmit');
    const seg = $('psDevice');
    let strategy = 'mobile';
    let running = false;
    let last = null;

    const preset = new URLSearchParams(location.search).get('url');
    if (preset) input.value = preset;

    seg.querySelectorAll('[data-strategy]').forEach((btn) => {
      btn.addEventListener('click', () => {
        strategy = btn.getAttribute('data-strategy');
        setPressed(seg, btn);
      });
    });

    function setStatus(key) {
      const el = $('psStatus');
      el.removeAttribute('data-i18n');
      el.textContent = t(key);
    }

    function showError(key, url) {
      const el = $('psError');
      el.textContent = t(key);
      if (url) {
        const a = document.createElement('a');
        a.href = `https://pagespeed.web.dev/report?url=${encodeURIComponent(url)}&form_factor=${strategy}`;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = t('fullReport');
        el.append(' ', a);
      }
      el.hidden = false;
    }

    function render(data) {
      const lh = data.lighthouseResult || {};
      const audits = lh.audits || {};
      const perf = lh.categories && lh.categories.performance;
      const score = perf && perf.score != null ? perf.score : null;
      const ring = $('psRing');
      ring.className = `ft-score__ring ${scoreClass(score)}`;
      ring.style.setProperty('--score', score == null ? 0 : Math.round(score * 100));
      $('psScore').textContent = score == null ? '–' : fmt(Math.round(score * 100), 0);
      $('psVerdict').textContent = score == null ? '' : t(score >= 0.9 ? 'scoreGood' : score >= 0.5 ? 'scoreAvg' : 'scorePoor');

      const shot = audits['final-screenshot'] && audits['final-screenshot'].details && audits['final-screenshot'].details.data;
      $('psShot').hidden = !shot;
      if (shot) $('psShot').src = shot;

      $('psLab').innerHTML = LAB_AUDITS.map(([key, id]) => {
        const a = audits[id];
        return a ? metricHtml(t(key), a.displayValue || '–', scoreClass(a.score)) : '';
      }).join('');

      const field = (data.loadingExperience && data.loadingExperience.metrics) || (data.originLoadingExperience && data.originLoadingExperience.metrics);
      const fieldItems = field ? FIELD_METRICS.filter(([, id]) => field[id]) : [];
      $('psFieldNone').hidden = fieldItems.length > 0;
      $('psField').hidden = !fieldItems.length;
      $('psField').innerHTML = fieldItems.map(([key, id, format]) => {
        const m = field[id];
        const cat = { FAST: ['is-good', 'fieldGood'], AVERAGE: ['is-avg', 'fieldAvg'], SLOW: ['is-poor', 'fieldPoor'] }[m.category] || ['', ''];
        return metricHtml(t(key), format(m.percentile), cat[0], cat[1] ? t(cat[1]) : '');
      }).join('');

      const opps = Object.values(audits).map((a) => {
        const d = a.details || {};
        const ms = d.overallSavingsMs || (a.metricSavings ? Math.max(a.metricSavings.LCP || 0, a.metricSavings.FCP || 0) : 0);
        return { title: a.title, ms, score: a.score };
      }).filter((o) => o.ms > 0 && o.score != null && o.score < 0.9)
        .sort((x, y) => y.ms - x.ms)
        .slice(0, 6);
      $('psOpps').innerHTML = opps.length
        ? opps.map((o) => `<li><span>${escapeHtml(String(o.title || '').replace(/`/g, ''))}</span><b dir="ltr">−${escapeHtml(fmt(o.ms / 1000, 1))} s</b></li>`).join('')
        : `<li><span>${escapeHtml(t('oppNone'))}</span></li>`;

      $('psFull').href = `https://pagespeed.web.dev/report?url=${encodeURIComponent(data.id || lh.finalUrl || '')}&form_factor=${strategy === 'desktop' ? 'desktop' : 'mobile'}`;
      $('psResult').hidden = false;
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (running) return;
      $('psError').hidden = true;
      const url = normalizeSiteUrl(input.value);
      if (!url) {
        showError('errInvalid');
        input.focus();
        return;
      }
      input.value = url;
      running = true;
      submit.disabled = true;
      submit.textContent = t('analyzing');
      $('psProgress').hidden = false;
      $('psResult').hidden = true;
      setStatus('statusRunning');

      const params = new URLSearchParams({ url, strategy, category: 'performance', locale: lang() });
      const key = window.BIZDAVAR_CONFIG && window.BIZDAVAR_CONFIG.pagespeedApiKey;
      if (key) params.set('key', key);
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), PSI_TIMEOUT_MS);
      try {
        const res = await fetch(`${PSI_API}?${params}`, { signal: ctrl.signal });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.error) {
          const quota = res.status === 429 || /quota|rate/i.test((data.error && data.error.message) || '');
          throw new Error(quota ? 'errQuota' : 'errFetch');
        }
        last = { data, strategy };
        render(data);
        setStatus('statusDone');
        const perf = data.lighthouseResult && data.lighthouseResult.categories && data.lighthouseResult.categories.performance;
        track('site_speed', 'analyze', { site_speed_score: perf && perf.score != null ? Math.round(perf.score * 100) : null, site_speed_strategy: strategy });
      } catch (err) {
        const msg = err && err.message;
        showError(msg === 'errQuota' || msg === 'errFetch' ? msg : 'errNetwork', url);
        setStatus('statusIdle');
      } finally {
        clearTimeout(timer);
        running = false;
        submit.disabled = false;
        submit.textContent = t('analyze');
        $('psProgress').hidden = true;
      }
    });

    onLocale(() => { if (last) render(last.data); });
  }

  /* ───────────────────────── What is my IP ───────────────────────── */

  async function fetchJson(url, ms) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    try {
      const res = await fetch(url, { signal: ctrl.signal, cache: 'no-store' });
      if (!res.ok) throw new Error(String(res.status));
      return await res.json();
    } finally {
      clearTimeout(timer);
    }
  }

  function detectBrowser() {
    const ua = navigator.userAgent;
    const pick = (re, name) => {
      const m = ua.match(re);
      return m ? `${name} ${m[1].split('.')[0]}` : '';
    };
    return pick(/Edg(?:e|A|iOS)?\/([\d.]+)/, 'Edge') || pick(/OPR\/([\d.]+)/, 'Opera')
      || pick(/YaBrowser\/([\d.]+)/, 'Yandex Browser') || pick(/SamsungBrowser\/([\d.]+)/, 'Samsung Internet')
      || pick(/(?:Firefox|FxiOS)\/([\d.]+)/, 'Firefox') || pick(/(?:Chrome|CriOS)\/([\d.]+)/, 'Chrome')
      || pick(/Version\/([\d.]+).*Safari/, 'Safari') || '–';
  }

  function detectOs() {
    const ua = navigator.userAgent;
    if (/Windows NT/.test(ua)) return 'Windows';
    const android = ua.match(/Android ([\d.]+)/);
    if (android) return `Android ${android[1].split('.')[0]}`;
    if (/iPhone|iPad|iPod/.test(ua)) {
      const m = ua.match(/OS (\d+)_/);
      return m ? `iOS ${m[1]}` : 'iOS';
    }
    if (/CrOS/.test(ua)) return 'ChromeOS';
    if (/Mac OS X/.test(ua)) return 'macOS';
    if (/Linux/.test(ua)) return 'Linux';
    return '–';
  }

  function languageName(tag) {
    try {
      const name = new Intl.DisplayNames([intlLocale()], { type: 'language' }).of(tag);
      return name && name !== tag ? `${name} (${tag})` : tag;
    } catch (_) {
      return tag;
    }
  }

  function initMyIp() {
    const t = translator('myIpPage');
    let state = null;

    function setText(id, value) {
      const el = $(id);
      if (!el) return;
      el.removeAttribute('data-i18n');
      el.textContent = value || t('notAvailable') || '–';
    }

    function renderDevice() {
      setText('ipBrowser', detectBrowser());
      setText('ipOs', detectOs());
      setText('ipLang', languageName(navigator.language || ''));
      setText('ipScreen', `${screen.width} × ${screen.height} @${Math.round((window.devicePixelRatio || 1) * 100) / 100}x`);
      let tz = '';
      try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (_) { /* old browser */ }
      setText('ipDeviceTz', tz);
    }

    function renderIp() {
      if (!state) return;
      const { v4, v6, info } = state;
      setText('ipMain', v4 || v6 || (info && info.ip));
      setText('ipV4', v4 || (info && info.type === 'IPv4' ? info.ip : ''));
      setText('ipV6', v6 || (info && info.type === 'IPv6' ? info.ip : ''));
      if (info && info.success !== false) {
        setText('ipCountry', info.country_code ? regionName(info.country_code) : info.country);
        setText('ipRegion', info.region);
        setText('ipCity', info.city);
        setText('ipIsp', info.connection && (info.connection.isp || info.connection.org));
        setText('ipAsn', info.connection && info.connection.asn ? `AS${info.connection.asn}` : '');
        setText('ipTz', info.timezone && info.timezone.id);
        const ipOffset = info.timezone && typeof info.timezone.offset === 'number' ? info.timezone.offset : null;
        const deviceOffset = -new Date().getTimezoneOffset() * 60;
        $('ipVpn').hidden = ipOffset == null || ipOffset === deviceOffset;
      }
    }

    async function load() {
      $('ipError').hidden = true;
      $('ipVpn').hidden = true;
      ['ipMain', 'ipV4', 'ipV6', 'ipCountry', 'ipRegion', 'ipCity', 'ipIsp', 'ipAsn', 'ipTz'].forEach((id) => {
        const el = $(id);
        if (el) el.textContent = id === 'ipMain' ? t('loading') : '…';
      });
      const [v4, v6, info] = await Promise.all([
        fetchJson('https://api.ipify.org?format=json', 6000).then((d) => d.ip).catch(() => ''),
        fetchJson('https://api6.ipify.org?format=json', 6000).then((d) => (d.ip && d.ip.includes(':') ? d.ip : '')).catch(() => ''),
        fetchJson('https://ipwho.is/', 8000).catch(() => null)
      ]);
      if (!v4 && !v6 && !(info && info.ip)) {
        setText('ipMain', '–');
        $('ipError').hidden = false;
        state = null;
        return;
      }
      state = { v4, v6, info };
      renderIp();
    }

    $('ipCopy').addEventListener('click', async (e) => {
      const ip = state && (state.v4 || state.v6 || (state.info && state.info.ip));
      if (!ip) return;
      try {
        await copyText(ip);
        flashCopied(e.currentTarget, t);
        track('my_ip', 'copy');
      } catch (_) { /* clipboard denied */ }
    });
    $('ipRefresh').addEventListener('click', () => {
      load();
      track('my_ip', 'refresh');
    });

    onLocale(() => {
      renderDevice();
      renderIp();
    });
    renderDevice();
    load();
  }

  /* ───────────────────────── UTM builder ───────────────────────── */

  const UTM_PRESETS = {
    instagram: ['instagram', 'social'],
    google: ['google', 'cpc'],
    email: ['newsletter', 'email'],
    whatsapp: ['whatsapp', 'social'],
    telegram: ['telegram', 'social'],
    linkedin: ['linkedin', 'social']
  };
  const UTM_FIELDS = ['source', 'medium', 'campaign', 'term', 'content'];

  function initUtm() {
    const t = translator('utmBuilderPage');
    const form = $('utmForm');
    const field = (name) => $(`utm_${name}`);
    let link = '';

    function clean(v) {
      const s = v.trim();
      return $('utmNormalize').checked ? s.toLowerCase().replace(/\s+/g, '-') : s;
    }

    function update() {
      const rawUrl = $('utmUrl').value.trim();
      const url = rawUrl ? normalizeSiteUrl(rawUrl) : '';
      $('utmUrlError').hidden = !rawUrl || !!url;
      const values = {};
      UTM_FIELDS.forEach((f) => { values[f] = clean(field(f).value); });
      const ready = url && values.source && values.medium && values.campaign;
      $('utmEmpty').hidden = !!ready;
      $('utmResult').hidden = !ready;
      if (!ready) { link = ''; return; }
      const u = new URL(url);
      UTM_FIELDS.forEach((f) => {
        if (values[f]) u.searchParams.set(`utm_${f}`, values[f]);
        else u.searchParams.delete(`utm_${f}`);
      });
      link = u.href;
      $('utmLink').textContent = link;
      $('utmOpen').href = link;
      trackOnce('utm_builder', 'build');
    }

    form.addEventListener('input', update);
    form.addEventListener('change', update);
    form.addEventListener('submit', (e) => e.preventDefault());

    document.querySelectorAll('[data-utm-preset]').forEach((chip) => {
      chip.addEventListener('click', () => {
        const [source, medium] = UTM_PRESETS[chip.getAttribute('data-utm-preset')] || [];
        field('source').value = source || '';
        field('medium').value = medium || '';
        update();
        field('campaign').focus();
      });
    });

    $('utmCopy').addEventListener('click', async (e) => {
      if (!link) return;
      try {
        await copyText(link);
        flashCopied(e.currentTarget, t);
        track('utm_builder', 'copy');
      } catch (_) { /* clipboard denied */ }
    });
    $('utmReset').addEventListener('click', () => {
      form.reset();
      update();
      $('utmUrl').focus();
    });

    update();
  }

  /* ───────────────────────── Tank volume ───────────────────────── */

  const LENGTH_TO_M = { mm: 0.001, cm: 0.01, m: 1, in: 0.0254, ft: 0.3048 };
  const M3_TO_US_GAL = 264.172052358;
  const TANK_SHAPES = {
    vcyl: { dims: ['diameter', 'height'], max: (d) => d.height },
    hcyl: { dims: ['diameter', 'length'], max: (d) => d.diameter },
    rect: { dims: ['length', 'width', 'height'], max: (d) => d.height },
    sphere: { dims: ['diameter'], max: (d) => d.diameter }
  };

  function tankVolumes(shape, d, h) {
    const r = d.diameter / 2;
    switch (shape) {
      case 'vcyl':
        return { total: Math.PI * r * r * d.height, fill: h == null ? null : Math.PI * r * r * h };
      case 'hcyl': {
        const total = Math.PI * r * r * d.length;
        if (h == null) return { total, fill: null };
        const seg = r * r * Math.acos((r - h) / r) - (r - h) * Math.sqrt(Math.max(0, 2 * r * h - h * h));
        return { total, fill: seg * d.length };
      }
      case 'rect':
        return { total: d.length * d.width * d.height, fill: h == null ? null : d.length * d.width * h };
      case 'sphere':
        return { total: (4 / 3) * Math.PI * r * r * r, fill: h == null ? null : (Math.PI * h * h * (3 * r - h)) / 3 };
      default:
        return { total: 0, fill: null };
    }
  }

  function fmtLiters(l) {
    return fmt(l, l < 10 ? 2 : l < 1000 ? 1 : 0);
  }

  function initTank() {
    const t = translator('tankVolumePage');
    const seg = $('tankShape');
    const ids = { diameter: 'tankD', length: 'tankL', width: 'tankW', height: 'tankH' };
    let shape = 'vcyl';
    let lastText = '';

    function update() {
      const cfg = TANK_SHAPES[shape];
      Object.keys(ids).forEach((k) => { $(ids[k]).closest('.form-group').hidden = !cfg.dims.includes(k); });
      const k = LENGTH_TO_M[$('tankUnit').value] || 0.01;
      const dims = {};
      let ok = true;
      cfg.dims.forEach((name) => {
        const v = parseNum($(ids[name]).value);
        if (!(v > 0)) ok = false;
        dims[name] = v * k;
      });
      const fillRaw = $('tankFill').value.trim();
      let h = fillRaw ? parseNum(fillRaw) * k : null;
      const tooHigh = ok && h != null && h > cfg.max(dims) * 1.000001;
      $('tankError').hidden = !tooHigh;
      if (h != null && !(h >= 0)) h = null;
      $('tankEmpty').hidden = ok;
      $('tankResult').hidden = !ok || tooHigh;
      if (!ok || tooHigh) { lastText = ''; return; }

      const v = tankVolumes(shape, dims, h == null ? null : Math.min(h, cfg.max(dims)));
      const rows = [['total', v.total]];
      if (v.fill != null) rows.push(['filled', v.fill], ['empty', v.total - v.fill]);
      ['total', 'filled', 'empty'].forEach((name) => {
        const row = rows.find((r) => r[0] === name);
        const box = $(`tank_${name}`);
        box.hidden = !row;
        if (!row) return;
        box.querySelector('b').textContent = fmtLiters(row[1] * 1000);
        box.querySelector('.ft-sub').textContent = `${fmt(row[1], 3)} ${t('m3')} · ${fmt(row[1] * M3_TO_US_GAL, 1)} ${t('gallons')}`;
      });
      const pct = v.fill != null && v.total > 0 ? (v.fill / v.total) * 100 : null;
      $('tankFillWrap').hidden = pct == null;
      if (pct != null) {
        $('tankFillBar').style.width = `${Math.min(100, pct)}%`;
        $('tankFillPct').textContent = `${fmt(pct, 1)}%`;
      }
      lastText = rows.map(([name, m3]) => `${t(name)}: ${fmtLiters(m3 * 1000)} ${t('liters')} (${fmt(m3, 3)} m³)`).join('\n')
        + (pct != null ? `\n${t('fillPct')}: ${fmt(pct, 1)}%` : '');
      trackOnce('tank_volume', `calc_${shape}`);
    }

    seg.querySelectorAll('[data-shape]').forEach((btn) => {
      btn.addEventListener('click', () => {
        shape = btn.getAttribute('data-shape');
        setPressed(seg, btn);
        update();
      });
    });
    $('tankForm').addEventListener('input', update);
    $('tankForm').addEventListener('change', update);
    $('tankForm').addEventListener('submit', (e) => e.preventDefault());
    $('tankCopy').addEventListener('click', async (e) => {
      if (!lastText) return;
      try {
        await copyText(`${lastText}\n${location.href.split('#')[0]}`);
        flashCopied(e.currentTarget, t);
        track('tank_volume', 'copy');
      } catch (_) { /* clipboard denied */ }
    });

    onLocale(update);
    update();
  }

  /* ───────────────────────── Unit converter ───────────────────────── */

  const UNIT_CATEGORIES = {
    pressure: {
      def: 'bar',
      units: {
        pa: ['Pa', 1], kpa: ['kPa', 1e3], mpa: ['MPa', 1e6], bar: ['bar', 1e5], mbar: ['mbar', 100],
        psi: ['psi', 6894.757293168], atm: ['atm', 101325], kgcm2: ['kgf/cm²', 98066.5],
        mmhg: ['mmHg', 133.322387415], mh2o: ['mH₂O', 9806.65], inh2o: ['inH₂O', 249.08891]
      }
    },
    flow: {
      def: 'm3h',
      units: {
        m3h: ['m³/h', 1 / 3600], m3s: ['m³/s', 1], ls: ['L/s', 1e-3], lmin: ['L/min', 1e-3 / 60], lh: ['L/h', 1e-3 / 3600],
        usgpm: ['gpm (US)', 3.785411784e-3 / 60], ukgpm: ['gpm (UK)', 4.54609e-3 / 60],
        cfm: ['cfm', 0.028316846592 / 60], bpd: ['bbl/d', 0.158987294928 / 86400]
      }
    },
    temperature: {
      def: 'c',
      units: {
        c: ['°C', [(v) => v + 273.15, (k) => k - 273.15]],
        f: ['°F', [(v) => ((v - 32) * 5) / 9 + 273.15, (k) => ((k - 273.15) * 9) / 5 + 32]],
        k: ['K', [(v) => v, (k) => k]],
        r: ['°R', [(v) => (v * 5) / 9, (k) => (k * 9) / 5]]
      }
    },
    length: {
      def: 'm',
      units: {
        mm: ['mm', 1e-3], cm: ['cm', 1e-2], m: ['m', 1], km: ['km', 1e3],
        in: ['in', 0.0254], ft: ['ft', 0.3048], yd: ['yd', 0.9144], mi: ['mi', 1609.344]
      }
    },
    volume: {
      def: 'l',
      units: {
        ml: ['mL', 1e-6], l: ['L', 1e-3], m3: ['m³', 1], usgal: ['gal (US)', 3.785411784e-3],
        ukgal: ['gal (UK)', 4.54609e-3], bbl: ['bbl', 0.158987294928], ft3: ['ft³', 0.028316846592], in3: ['in³', 1.6387064e-5]
      }
    }
  };

  function convertUnit(cat, value, from, to) {
    const units = UNIT_CATEGORIES[cat].units;
    const f = units[from][1];
    const g = units[to][1];
    if (Array.isArray(f)) return g[1](f[0](value));
    return (value * f) / g;
  }

  function initUnits() {
    const t = translator('unitConverterPage');
    const seg = $('ucCategory');
    const valueInput = $('ucValue');
    const fromSelect = $('ucFrom');
    const list = $('ucResults');
    const fromHash = (location.hash || '').slice(1);
    let cat = UNIT_CATEGORIES[fromHash] ? fromHash : 'pressure';

    const unitName = (key) => {
      const full = `unitConverterPage.units.${key}`;
      const val = I18N() ? I18N().t(full, '') : '';
      return val && val !== full ? val : key;
    };

    function fillUnits(keep) {
      const units = UNIT_CATEGORIES[cat].units;
      const selected = keep && units[fromSelect.value] ? fromSelect.value : UNIT_CATEGORIES[cat].def;
      fromSelect.innerHTML = Object.keys(units)
        .map((k) => `<option value="${k}">${escapeHtml(unitName(k))} (${escapeHtml(units[k][0])})</option>`).join('');
      fromSelect.value = selected;
      const catBtn = seg.querySelector(`[data-cat="${cat}"]`);
      if (catBtn) setPressed(seg, catBtn);
    }

    function render() {
      const value = parseNum(valueInput.value);
      const valid = isFinite(value);
      $('ucError').hidden = valid || !valueInput.value.trim();
      if (!valid) { list.innerHTML = ''; return; }
      const units = UNIT_CATEGORIES[cat].units;
      const from = fromSelect.value;
      list.innerHTML = Object.keys(units).map((k) => {
        const out = convertUnit(cat, value, from, k);
        const sym = units[k][0];
        const plain = `${Number(out.toPrecision(6))} ${sym}`;
        return `<li><button type="button" class="${k === from ? 'is-from' : ''}" data-copy="${escapeHtml(plain)}">`
          + `<span>${escapeHtml(unitName(k))}</span><b dir="ltr">${escapeHtml(fmtSig(out))} ${escapeHtml(sym)}</b></button></li>`;
      }).join('');
      trackOnce('unit_converter', `convert_${cat}`);
    }

    seg.querySelectorAll('[data-cat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        cat = btn.getAttribute('data-cat');
        if (cat === 'temperature' && valueInput.value.trim() === '1') valueInput.value = '25';
        fillUnits(false);
        render();
        history.replaceState(null, '', `#${cat}`);
      });
    });
    valueInput.addEventListener('input', render);
    fromSelect.addEventListener('change', render);
    $('ucForm').addEventListener('submit', (e) => e.preventDefault());

    list.addEventListener('click', async (e) => {
      const btn = e.target.closest('button[data-copy]');
      if (!btn) return;
      try {
        await copyText(btn.getAttribute('data-copy'));
        const b = btn.querySelector('b');
        b.textContent = t('copied');
        setTimeout(render, 1200);
        track('unit_converter', 'copy');
      } catch (_) { /* clipboard denied */ }
    });

    onLocale(() => {
      fillUnits(true);
      render();
    });
    if (cat === 'temperature') valueInput.value = '25';
    fillUnits(false);
    render();
  }

  const TOOLS = {
    whatsapp: initWhatsapp,
    sitespeed: initSiteSpeed,
    myip: initMyIp,
    utm: initUtm,
    tank: initTank,
    units: initUnits
  };

  window.initFreeTool = function () {
    const root = $('freeTool');
    if (!root || root.dataset.ready) return;
    root.dataset.ready = '1';
    const init = TOOLS[root.getAttribute('data-tool')];
    if (init) init(root);
  };
})();
