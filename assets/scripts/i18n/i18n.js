/**
 * Bizdavar i18n — geo IP → fa (IR) | tr (TR) | en (other)
 */
(function () {
  const STORAGE_KEY = 'bizdavar_locale';
  const MANUAL_KEY = 'bizdavar_locale_manual';
  const GEO_MAP = { TR: 'tr', IR: 'fa' };
  const DEFAULT_OTHER = 'en';
  const GEO_TIMEOUT = 4000;

  function getByPath(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  async function detectCountryCode() {
    const endpoints = [
      async () => {
        const r = await fetch('https://ipapi.co/country_code/', { signal: AbortSignal.timeout(GEO_TIMEOUT) });
        if (!r.ok) throw new Error('ipapi');
        const code = (await r.text()).trim().toUpperCase();
        return code.length === 2 ? code : null;
      },
      async () => {
        const r = await fetch('https://ipwho.is/', { signal: AbortSignal.timeout(GEO_TIMEOUT) });
        if (!r.ok) throw new Error('ipwho');
        const j = await r.json();
        return j.success ? String(j.country_code || '').toUpperCase() : null;
      }
    ];
    for (const fn of endpoints) {
      try {
        const code = await fn();
        if (code) return code;
      } catch (_) { /* try next */ }
    }
    return null;
  }

  function localeFromCountry(code) {
    if (!code) return DEFAULT_OTHER;
    return GEO_MAP[code] || DEFAULT_OTHER;
  }

  function applyLocaleData(lang) {
    const dict = window.BIZDAVAR_LOCALES[lang] || window.BIZDAVAR_LOCALES.fa;
    I18n.locale = lang;
    I18n.dict = dict;
    I18n.applyDocumentLocale();
    if (window.BIZDAVAR_CONFIG) I18n.syncConfig();
    I18n.ready = true;
  }

  const I18n = {
    locale: 'en',
    dict: window.BIZDAVAR_LOCALES?.en || null,
    ready: false,

    t(key, fallback) {
      const val = getByPath(this.dict, key);
      if (val !== undefined && val !== null && val !== '') {
        if (typeof val === 'object') return fallback !== undefined ? fallback : key;
        return val;
      }
      if (fallback !== undefined) return fallback;
      const fa = window.BIZDAVAR_LOCALES?.fa;
      const faVal = getByPath(fa, key);
      if (faVal !== undefined && typeof faVal !== 'object') return faVal;
      return key;
    },

    getGeo() {
      const hubs = this.t('geo.hubs', null);
      return {
        summaryFa: this.t('geo.summary'),
        hubs: Array.isArray(hubs) ? hubs : (window.BIZDAVAR_CONFIG?.geo?.hubs || [])
      };
    },

    getTrustMetrics() {
      return this.t('trustMetrics', window.BIZDAVAR_CONFIG?.trustMetrics || []);
    },

    getProcessSteps() {
      return this.t('processSteps', window.BIZDAVAR_CONFIG?.processSteps || []);
    },

    getIndustrialProducts() {
      const base = window.BIZDAVAR_CONFIG?.industrialProducts || [];
      const localized = this.t('industrial.products', null);
      if (!Array.isArray(localized)) return base;
      return base.map((p, i) => ({ ...p, ...(localized[i] || {}) }));
    },

    getFastPlanMessages() {
      return {
        basic: this.t('fast.planBasic'),
        store: this.t('fast.planStore'),
        pro: this.t('fast.planPro')
      };
    },

    applyDocumentLocale() {
      const d = this.dict;
      if (!d) return;
      document.documentElement.lang = d.lang;
      document.documentElement.dir = d.dir;
      document.body.classList.toggle('is-ltr', d.dir === 'ltr');
      document.body.classList.toggle('is-rtl', d.dir === 'rtl');
    },

    applyDataI18n() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = this.t(key);
        if (val && val !== key) el.textContent = val;
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const val = this.t(key);
        if (val && val !== key) el.innerHTML = val;
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = this.t(key);
        if (val) el.placeholder = val;
      });
      document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        const val = this.t(key);
        if (val) el.setAttribute('aria-label', val);
      });
      const skip = document.querySelector('.skip-link');
      if (skip) skip.textContent = this.t('common.skipLink');
      const btt = document.getElementById('backToTop');
      if (btt) btt.setAttribute('aria-label', this.t('common.backToTop'));
    },

    applyHomeFaqs() {
      const el = document.getElementById('homeFaqGrid');
      const faqs = this.t('home.faqs', null);
      if (!el || !Array.isArray(faqs)) return;
      el.innerHTML = faqs.map(item => `
        <details class="faq-item"><summary>${item.q}</summary><p>${item.a}</p></details>
      `).join('');
    },

    pageCrumb(pageKey, fallback) {
      return this.t(`pages.${pageKey}.crumb`, fallback);
    },

    applyContactPage() {
      const p = this.dict?.contactPage;
      if (!p || document.body.dataset.page !== 'contact') return;

      const tag = document.querySelector('.page-hero .section__tag');
      if (tag) tag.textContent = p.title;
      const h1 = document.querySelector('.page-hero h1');
      if (h1) h1.textContent = p.heroTitle || p.title;
      const heroP = document.querySelector('.page-hero p');
      if (heroP) heroP.textContent = p.heroDesc || p.subtitle;

      const form = document.getElementById('contactForm');
      if (form) {
        const setLabel = (forId, text) => {
          const lbl = form.querySelector(`label[for="${forId}"]`);
          if (lbl) lbl.childNodes[0].textContent = text + ' ';
        };
        const ft = form.querySelector('.form-title');
        if (ft) ft.textContent = p.formTitle || p.title;
        const fd = form.querySelector('.form-desc');
        if (fd) fd.textContent = p.formDesc || '';
        setLabel('firstName', p.firstName || p.name);
        setLabel('lastName', p.lastName || p.name);
        setLabel('email', p.email);
        setLabel('phone', p.phone);
        setLabel('service', p.service);
        setLabel('message', p.message);
        const fn = form.firstName;
        const ln = form.lastName;
        if (fn && p.placeholderFirstName) fn.placeholder = p.placeholderFirstName;
        if (ln && p.placeholderLastName) ln.placeholder = p.placeholderLastName;
        const sel = form.service;
        if (sel && sel.options[0]) sel.options[0].textContent = p.servicePlaceholder;
        const opts = {
          'digital-marketing': p.optDm,
          'web-design': p.optWeb,
          'fast-studio': p.optFast,
          smm: p.optSmm,
          industrial: p.optIndustrial,
          consulting: p.optConsult,
          other: p.optOther
        };
        Object.entries(opts).forEach(([val, label]) => {
          const o = sel && sel.querySelector(`option[value="${val}"]`);
          if (o) o.textContent = label;
        });
        const msg = form.message;
        if (msg) msg.placeholder = p.messagePlaceholder;
        const submit = form.querySelector('button[type="submit"]');
        if (submit) submit.textContent = p.submit;
        const priv = form.querySelector('label input#privacy')?.parentElement;
        if (priv && p.privacyLink) {
          const link = priv.querySelector('a');
          if (link) link.textContent = p.privacyLink;
          priv.innerHTML = `${p.privacyBefore || p.privacy || ''} <a href="privacy.html" target="_blank" rel="noopener">${p.privacyLink}</a>${p.privacyAfter || p.privacyAgree || ''}`;
        }
        const note = document.getElementById('privacy-note');
        if (note && p.formNote) note.textContent = p.formNote;
        const success = document.getElementById('formSuccess');
        if (success && p.formSuccess) success.textContent = p.formSuccess;
      }

      const waTr = document.getElementById('whatsappBtnTr');
      const waIr = document.getElementById('whatsappBtnIr');
      if (waTr && p.waTr) waTr.textContent = p.waTr;
      if (waIr && p.waIr) waIr.textContent = p.waIr;

      const mapH = document.querySelector('.contact-map__text h2');
      const mapP = document.querySelector('.contact-map__text p');
      if (mapH && p.mapTitle) mapH.textContent = p.mapTitle;
      if (mapP && p.mapDesc) mapP.textContent = p.mapDesc;
    },

    syncConfig() {
      const C = window.BIZDAVAR_CONFIG;
      if (!C) return;
      C.language = this.dict.lang;
      C.locale = this.dict.localeTag;
      C.siteName = this.dict.siteName;
      if (C.contact) {
        C.contact.whatsappMessage = this.t('contact.whatsappMessage');
        C.contact.workingHours = this.t('contact.workingHours');
        C.contact.address = this.t('contact.address');
        if (C.contact.channels?.[0]) C.contact.channels[0].label = this.t('contact.channelTr');
        if (C.contact.channels?.[1]) C.contact.channels[1].label = this.t('contact.channelIr');
      }
      if (C.seo) {
        C.seo.defaultTitle = this.t('seo.defaultTitle');
        C.seo.defaultDescription = this.t('seo.defaultDescription');
        C.seo.keywords = this.t('seo.keywords');
      }
      if (C.fast) {
        C.fast.planMessages = this.getFastPlanMessages();
      }
    },

  async resolveLocale() {
      const params = new URLSearchParams(window.location.search);
      if (params.get('lang') && window.BIZDAVAR_LOCALES[params.get('lang')]) {
        localStorage.setItem(STORAGE_KEY, params.get('lang'));
        localStorage.setItem(MANUAL_KEY, '1');
        return params.get('lang');
      }
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && window.BIZDAVAR_LOCALES[stored] && localStorage.getItem(MANUAL_KEY) === '1') {
        return stored;
      }
      const country = await detectCountryCode();
      const loc = localeFromCountry(country);
      localStorage.setItem(STORAGE_KEY, loc);
      localStorage.removeItem(MANUAL_KEY);
      return loc;
    },

    setLocale(lang) {
      if (!window.BIZDAVAR_LOCALES[lang]) return;
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(MANUAL_KEY, '1');
      window.location.reload();
    },

    async init() {
      const lang = await this.resolveLocale();
      applyLocaleData(lang);
      return this;
    }
  };

  window.BIZDAVAR_I18N = I18n;

  (function preloadLocale() {
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get('lang');
    const stored = localStorage.getItem(STORAGE_KEY);
    const manual = localStorage.getItem(MANUAL_KEY) === '1';
    const pre = (qLang && window.BIZDAVAR_LOCALES[qLang]) ? qLang
      : (manual && stored && window.BIZDAVAR_LOCALES[stored]) ? stored : null;
    if (pre) applyLocaleData(pre);
  })();
})();

