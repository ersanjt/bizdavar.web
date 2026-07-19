/**
 * Bizdavar i18n — geo IP → fa (IR) | tr (TR) | en (other)
 */
(function () {
  const STORAGE_KEY = 'bizdavar_locale';
  const MANUAL_KEY = 'bizdavar_locale_manual';
  const GEO_CACHE_KEY = 'bizdavar_geo_locale';
  const GEO_MAP = { TR: 'tr', IR: 'fa' };
  const DEFAULT_OTHER = 'en';
  const GEO_TIMEOUT = 2500;

  function localeHintFromNavigator() {
    const nav = String(navigator.language || navigator.userLanguage || '').toLowerCase();
    if (nav.startsWith('tr')) return 'tr';
    if (nav.startsWith('fa')) return 'fa';
    if (nav.startsWith('en')) return 'en';
    return null;
  }

  function fetchAbortSignal(ms) {
    if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function') {
      return AbortSignal.timeout(ms);
    }
    const controller = new AbortController();
    setTimeout(() => controller.abort(), ms);
    return controller.signal;
  }

  function getByPath(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  async function detectCountryCode() {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('geo-timeout')), GEO_TIMEOUT);
    });
    const lookup = (async () => {
      const endpoints = [
        async () => {
          const r = await fetch('https://ipapi.co/country_code/', { signal: fetchAbortSignal(GEO_TIMEOUT) });
          if (!r.ok) throw new Error('ipapi');
          const code = (await r.text()).trim().toUpperCase();
          return code.length === 2 ? code : null;
        },
        async () => {
          const r = await fetch('https://ipwho.is/', { signal: fetchAbortSignal(GEO_TIMEOUT) });
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
    })();
    try {
      return await Promise.race([lookup, timeout]);
    } catch (_) {
      return null;
    }
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

  function localizeInternalLinks(root) {
    const scope = root || document;
    const siteLink = window.BD_CTX?.siteLink;
    const pagePath = window.resolvePagePath;
    if (!siteLink && !pagePath) return;
    scope.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || /^(https?:|mailto:|tel:|#|javascript:)/i.test(href)) return;
      const localized = siteLink ? siteLink(href) : pagePath(href);
      if (localized) a.setAttribute('href', localized);
    });
  }

  window.localizeInternalLinks = localizeInternalLinks;

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

    raw(key) {
      const val = getByPath(this.dict, key);
      if (val !== undefined && val !== null) return val;
      const fa = window.BIZDAVAR_LOCALES?.fa;
      return getByPath(fa, key);
    },

    getGeo() {
      const hubs = this.raw('geo.hubs');
      return {
        summaryFa: this.t('geo.summary'),
        hubs: Array.isArray(hubs) ? hubs : (window.BIZDAVAR_CONFIG?.geo?.hubs || [])
      };
    },

    getTrustMetrics() {
      const v = this.raw('trustMetrics');
      return Array.isArray(v) ? v : (window.BIZDAVAR_CONFIG?.trustMetrics || []);
    },

    getProcessSteps() {
      const v = this.raw('processSteps');
      return Array.isArray(v) ? v : (window.BIZDAVAR_CONFIG?.processSteps || []);
    },

    getIndustrialProducts() {
      const base = window.BIZDAVAR_CONFIG?.industrialProducts || [];
      const localized = this.raw('industrial.products');
      if (!Array.isArray(localized)) return base;
      const map = Object.fromEntries(localized.filter(p => p && p.name).map(p => [p.name, p]));
      return base.map(p => ({ ...p, ...(map[p.name] || {}) }));
    },

    getOwnedProducts() {
      const base = window.BIZDAVAR_OWNED_PRODUCTS?.items || [];
      const page = this.raw('productsPage') || this.raw('pages.products') || {};
      const meta = page.items || {};
      const cats = page.categories || {};
      const baseCats = Object.fromEntries(
        (window.BIZDAVAR_OWNED_PRODUCTS?.categories || [])
          .filter(c => c && c.id && c.label)
          .map(c => [c.id, { label: c.label }])
      );
      return base.map(item => {
        const m = meta[item.id] || {};
        const cat = cats[item.category] || baseCats[item.category] || {};
        return {
          ...item,
          ...m,
          categoryLabel: cat.label || item.categoryLabel || item.category,
          tags: m.tags || item.tags || []
        };
      });
    },

    getOwnedProductCategories() {
      const cats = window.BIZDAVAR_OWNED_PRODUCTS?.categories || [];
      const page = this.raw('productsPage') || this.raw('pages.products') || {};
      const labels = page.categories || {};
      return cats.map(c => ({
        ...c,
        label: labels[c.id]?.label || c.label || c.id,
        desc: labels[c.id]?.desc || c.desc || ''
      }));
    },

    mergeLocalizedList(key, base) {
      const localized = this.raw(key);
      if (!Array.isArray(localized)) return base || [];
      return (base || []).map((item, i) => ({ ...item, ...(localized[i] || {}) }));
    },

    getBlogPosts() {
      return this.mergeLocalizedList('blogPosts', window.BIZDAVAR_CONFIG?.blogPosts || []);
    },

    getPortfolioItems() {
      const base = window.BIZDAVAR_CONFIG?.portfolio || [];
      const localized = this.raw('portfolioMeta');
      if (!localized || typeof localized !== 'object' || Array.isArray(localized)) {
        return this.mergeLocalizedList('portfolioMeta', base);
      }
      return base.map(p => ({ ...p, ...(localized[p.name] || {}) }));
    },

    getServicesPageCards() {
      return this.raw('servicesPage.cards');
    },

    getFastCatalog() {
      const base = window.FAST_CATALOG || {};
      return {
        ...base,
        brand: { ...(base.brand || {}), ...(this.raw('fastCatalog.brand') || {}) },
        trustSignals: this.mergeLocalizedList('fastCatalog.trustSignals', base.trustSignals || []),
        plans: this.mergeLocalizedList('fastCatalog.plans', base.plans || []),
        compareRows: this.mergeLocalizedList('fastCatalog.compareRows', base.compareRows || []),
        timeline: this.mergeLocalizedList('fastCatalog.timeline', base.timeline || []),
        whyChoose: this.mergeLocalizedList('fastCatalog.whyChoose', base.whyChoose || []),
        showcases: this.mergeLocalizedList('fastCatalog.showcases', base.showcases || []),
        faq: this.mergeLocalizedList('fastCatalog.faq', base.faq || [])
      };
    },

    getSupplyCatalog(catalogKey) {
      const keyMap = {
        GAMAK_CATALOG: 'gamakCatalog',
        DIGI_SYSTEM_CATALOG: 'digiSystemCatalog',
        TERAOKA_CATALOG: 'teraokaCatalog',
        TELTONIKA_CATALOG: 'teltonikaCatalog',
        VEGA_CATALOG: 'vegaCatalog',
        PROSENSE_CATALOG: 'prosenseCatalog'
      };
      const i18nKey = keyMap[catalogKey];
      const base = window[catalogKey] || {};
      if (!i18nKey) return this.normalizeSupplyCatalog(base);

      const brandOverlay = this.raw(`${i18nKey}.brand`) || {};
      const academyBase = base.academy || {};
      const academyOverlay = this.raw(`${i18nKey}.academy`) || {};

      let result = this.normalizeSupplyCatalog({
        ...base,
        brand: { ...(base.brand || {}), ...brandOverlay },
        trustSignals: this.mergeLocalizedList(`${i18nKey}.trustSignals`, base.trustSignals || []),
        whyBuyFromUs: this.mergeLocalizedList(`${i18nKey}.whyBuyFromUs`, base.whyBuyFromUs || []),
        purchaseSteps: this.mergeLocalizedList(`${i18nKey}.purchaseSteps`, base.purchaseSteps || []),
        highlights: this.mergeLocalizedList(`${i18nKey}.highlights`, base.highlights || []),
        categories: this.mergeLocalizedList(`${i18nKey}.categories`, base.categories || []),
        iranIndustries: this.mergeLocalizedList(`${i18nKey}.iranIndustries`, base.iranIndustries || []),
        industries: this.mergeLocalizedList(`${i18nKey}.industries`, base.industries || []),
        services: this.mergeLocalizedList(`${i18nKey}.services`, base.services || []),
        faq: this.mergeLocalizedList(`${i18nKey}.faq`, base.faq || []),
        academy: {
          ...academyBase,
          ...academyOverlay,
          topics: Array.isArray(academyOverlay.topics)
            ? academyOverlay.topics
            : (academyBase.topics || [])
        },
        inquiryTemplate: this.t(`${i18nKey}.inquiryTemplate`, base.inquiryTemplate)
      });

      if (catalogKey === 'VEGA_CATALOG') {
        const fpBase = base.featuredProducts || [];
        const fpLoc = this.raw(`${i18nKey}.featuredProducts`);
        const ds = base.digitalServices || {};
        const dsLoc = this.raw(`${i18nKey}.digitalServices`) || {};
        result = {
          ...result,
          featuredProducts: fpBase.map((item, i) => {
            const loc = Array.isArray(fpLoc) ? fpLoc[i] || {} : {};
            return {
              ...item,
              ...loc,
              summary: loc.summary || item.summaryFa,
              useCase: loc.useCase || item.useCaseFa,
              features: Array.isArray(loc.features) ? loc.features : item.features,
              applications: Array.isArray(loc.applications) ? loc.applications : item.applications,
              badge: loc.badge != null && loc.badge !== '' ? loc.badge : item.badge
            };
          }),
          valueProps: this.mergeLocalizedList(`${i18nKey}.valueProps`, base.valueProps || []),
          measuringPrinciples: this.mergeLocalizedList(`${i18nKey}.measuringPrinciples`, base.measuringPrinciples || []),
          bizdavarServices: this.mergeLocalizedList(`${i18nKey}.bizdavarServices`, base.bizdavarServices || []),
          digitalServices: {
            ...ds,
            ...dsLoc,
            desc: dsLoc.desc || ds.desc || ds.descFa
          }
        };
      }

      return result;
    },

    normalizeSupplyCatalog(cat) {
      if (!cat || typeof cat !== 'object') return cat;
      const b = cat.brand || {};
      const a = cat.academy;
      return {
        ...cat,
        brand: {
          ...b,
          tagline: b.tagline || b.taglineFa,
          description: b.description || b.descriptionFa
        },
        highlights: (cat.highlights || []).map(h => ({
          ...h,
          useCase: h.useCase || h.useCaseFa
        })),
        academy: a ? { ...a, desc: a.desc || a.descFa } : a,
        featuredProducts: (cat.featuredProducts || []).map(p => ({
          ...p,
          summary: p.summary || p.summaryFa,
          useCase: p.useCase || p.useCaseFa
        }))
      };
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
      document.body.dir = d.dir;
      document.body.classList.toggle('is-ltr', d.dir === 'ltr');
      document.body.classList.toggle('is-rtl', d.dir === 'rtl');
      document.documentElement.classList.toggle('is-ltr-locale', d.dir === 'ltr');
    },

    resolveString(key) {
      let val = this.t(key);
      if (val && val !== key) return val;
      const faVal = getByPath(window.BIZDAVAR_LOCALES?.fa, key);
      if (typeof faVal === 'string' && faVal) return faVal;
      return null;
    },

    applyDataI18n() {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = this.resolveString(key);
        if (val) el.textContent = val;
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const val = this.resolveString(key);
        if (val) {
          el.innerHTML = val;
          localizeInternalLinks(el);
        }
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = this.resolveString(key);
        if (val) el.placeholder = val;
      });
      document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        const val = this.resolveString(key);
        if (val) el.setAttribute('aria-label', val);
      });
      document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        const val = this.resolveString(key);
        if (val) el.alt = val;
      });
      const skip = document.querySelector('.skip-link');
      if (skip) {
        const val = this.resolveString('common.skipLink');
        if (val) skip.textContent = val;
      }
      const btt = document.getElementById('backToTop');
      if (btt) {
        const val = this.resolveString('common.backToTop');
        if (val) btt.setAttribute('aria-label', val);
      }
    },

    applyHomeFaqs() {
      const el = document.getElementById('homeFaqGrid');
      const faqs = this.raw('home.faqs');
      if (!el || !Array.isArray(faqs)) return;
      const dir = this.dict?.dir || 'rtl';
      el.innerHTML = faqs.map(item => `
        <details class="faq-item" dir="${dir}">
          <summary dir="${dir}">${item.q}</summary>
          <p dir="${dir}">${item.a}</p>
        </details>
      `).join('');
    },

    applyAboutHeroImage() {
      const file = this.raw('home.aboutHeroImage') || 'assets/images/content/about-hero.svg';
      const alt = this.t('home.aboutHeroAlt', 'Bizdavar Group');
      const src = '/' + String(file).replace(/^\//, '');
      document.querySelectorAll('[data-about-hero], img[src*="about-hero"]').forEach(img => {
        img.src = src;
        if (alt) img.alt = alt;
      });
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
          priv.innerHTML = `${p.privacyBefore || p.privacy || ''} <a href="privacy" target="_blank" rel="noopener">${p.privacyLink}</a>${p.privacyAfter || p.privacyAgree || ''}`;
        }
        const note = document.getElementById('privacy-note');
        if (note && p.formNote) note.textContent = p.formNote;
        const success = document.getElementById('formSuccess');
        if (success && success.hidden && p.formSuccessMailto) success.textContent = p.formSuccessMailto;
      }

      const waTr = document.getElementById('whatsappBtnTr');
      const waIr = document.getElementById('whatsappBtnIr');
      const waBtnHtml = (label) => {
        const icon = window.BD_ICON ? window.BD_ICON('whatsapp', { size: 18, variant: 'white' }) : '';
        return icon ? `${icon}<span>${label}</span>` : label;
      };
      if (waTr && p.waTr) waTr.innerHTML = waBtnHtml(p.waTr);
      if (waIr && p.waIr) waIr.innerHTML = waBtnHtml(p.waIr);

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
        const channels = C.contact.channels || [];
        const ir = channels.find(c => c.id === 'ir');
        const tr = channels.find(c => c.id === 'tr');
        if (ir) ir.label = this.t('contact.channelIr');
        if (tr) tr.label = this.t('contact.channelTr');
        // Persian-first by default; Turkish locale keeps TR as primary CTA target
        const prefer = this.locale === 'tr' ? tr : ir;
        if (prefer?.whatsapp) {
          C.contact.whatsapp = prefer.whatsapp;
          if (prefer.tel) C.contact.phone = prefer.tel;
        }
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

    resolveLocaleSync() {
      const LU = window.BIZDAVAR_LOCALE_URL;
      if (LU) {
        const pathLocale = LU.currentLocale();
        if (pathLocale !== LU.DEFAULT) {
          return pathLocale;
        }
      }
      if (document.body?.dataset?.page === 'article') {
        return 'fa';
      }
      const params = new URLSearchParams(window.location.search);
      if (params.get('lang') && window.BIZDAVAR_LOCALES[params.get('lang')]) {
        localStorage.setItem(STORAGE_KEY, params.get('lang'));
        localStorage.setItem(MANUAL_KEY, '1');
        return params.get('lang');
      }
      const manual = localStorage.getItem(MANUAL_KEY) === '1';
      const stored = localStorage.getItem(STORAGE_KEY);
      if (manual && stored && window.BIZDAVAR_LOCALES[stored]) {
        return stored;
      }
      const geoCached = sessionStorage.getItem(GEO_CACHE_KEY);
      if (LU) {
        const pathLocale = LU.currentLocale();
        if (geoCached && window.BIZDAVAR_LOCALES[geoCached]) {
          return geoCached;
        }
        const hinted = localeHintFromNavigator();
        if (hinted && window.BIZDAVAR_LOCALES[hinted]) {
          return hinted;
        }
        return pathLocale;
      }
      if (geoCached && window.BIZDAVAR_LOCALES[geoCached]) {
        return geoCached;
      }
      const htmlLang = document.documentElement.lang;
      if (htmlLang === 'tr' || htmlLang === 'en') return htmlLang;
      return localeHintFromNavigator() || 'fa';
    },

    async applyGeoLocale(currentLang) {
      const LU = window.BIZDAVAR_LOCALE_URL;
      if (LU?.isSearchBot?.()) return currentLang;
      if (LU?.isPrefixedLocale?.()) return currentLang;
      if (localStorage.getItem(MANUAL_KEY) === '1') return currentLang;
      const params = new URLSearchParams(window.location.search);
      if (params.get('lang') && window.BIZDAVAR_LOCALES[params.get('lang')]) return currentLang;

      const country = await detectCountryCode();
      const loc = localeFromCountry(country);
      sessionStorage.setItem(GEO_CACHE_KEY, loc);

      const pathLocale = LU?.currentLocale?.() || 'fa';

      if (LU && loc !== pathLocale) {
        const target = LU.toLocalePath(loc, LU.currentPagePath());
        const destPath = target.split('#')[0];
        if (window.location.pathname !== destPath) {
          window.location.replace(target + window.location.hash);
          return loc;
        }
      }

      localStorage.setItem(STORAGE_KEY, loc);
      localStorage.removeItem(MANUAL_KEY);
      if (loc !== currentLang) {
        applyLocaleData(loc);
        document.dispatchEvent(new CustomEvent('bizdavar:locale', { detail: { locale: loc } }));
      }
      return loc;
    },

    setLocale(lang) {
      if (!window.BIZDAVAR_LOCALES[lang]) return;
      localStorage.setItem(STORAGE_KEY, lang);
      localStorage.setItem(MANUAL_KEY, '1');
      if (window.BIZDAVAR_LOCALE_URL) {
        const target = window.BIZDAVAR_LOCALE_URL.toLocalePath(
          lang,
          window.BIZDAVAR_LOCALE_URL.currentPagePath()
        );
        if (window.location.pathname !== target.split('#')[0]) {
          window.location.href = target + window.location.hash;
          return;
        }
      } else {
        window.location.reload();
        return;
      }
      applyLocaleData(lang);
      document.dispatchEvent(new CustomEvent('bizdavar:locale', { detail: { locale: lang } }));
    },

    async init() {
      const lang = this.resolveLocaleSync();
      applyLocaleData(lang);
      this.applyGeoLocale(lang).catch(() => {});
      return this;
    }
  };

  window.BIZDAVAR_I18N = I18n;

  (function preloadLocale() {
    const LU = window.BIZDAVAR_LOCALE_URL;
    const pathLocale = LU?.currentLocale?.();
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get('lang');
    const stored = localStorage.getItem(STORAGE_KEY);
    const manual = localStorage.getItem(MANUAL_KEY) === '1';
    const articlePage = document.body?.dataset?.page === 'article';
    const pre = (LU && pathLocale && pathLocale !== LU.DEFAULT) ? pathLocale
      : articlePage ? 'fa'
      : pathLocale || null
      || ((qLang && window.BIZDAVAR_LOCALES[qLang]) ? qLang
      : (manual && stored && window.BIZDAVAR_LOCALES[stored]) ? stored : null);
    if (pre) applyLocaleData(pre);
  })();
})();

