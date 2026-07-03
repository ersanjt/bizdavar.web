/**
 * Locale bootstrap — sync locale immediately; never block chrome or page renders on geo.
 */
(function () {
  let geoStripDone = false;

  function syncLocaleNow() {
    const I = window.BIZDAVAR_I18N;
    if (!I || !window.BIZDAVAR_LOCALES) return;
    const lang = I.resolveLocaleSync();
    const dict = window.BIZDAVAR_LOCALES[lang] || window.BIZDAVAR_LOCALES.fa;
    I.locale = lang;
    I.dict = dict;
    I.applyDocumentLocale();
    I.syncConfig();
    I.ready = true;
  }

  function snapshotChrome() {
    if (typeof window.renderSiteChrome === 'function' && !window.__bizdavarChrome) {
      window.__bizdavarChrome = window.renderSiteChrome;
    }
  }

  function autoRenderGeoStrip() {
    if (geoStripDone) return;
    const el = document.getElementById('geoStrip');
    if (!el || String(el.innerHTML || '').trim()) return;
    if (typeof window.renderGeoStrip !== 'function') return;
    geoStripDone = true;
    try {
      window.renderGeoStrip('geoStrip');
    } catch (e) {
      geoStripDone = false;
      console.error('[Bizdavar] renderGeoStrip failed', e);
    }
  }

  function afterLocale() {
    if (!window.BIZDAVAR_I18N) return;
    window.BIZDAVAR_I18N.applyDataI18n();
    window.BIZDAVAR_I18N.applyContactPage();
    window.BIZDAVAR_I18N.applyHomeFaqs();
    window.BIZDAVAR_I18N.applyAboutHeroImage();
    if (typeof window.applyPageI18n === 'function') {
      window.applyPageI18n();
    }
    autoRenderGeoStrip();
    if (typeof window.initDataIcons === 'function') {
      window.initDataIcons();
    }
  }

  function ensureSiteChrome() {
    const header = document.getElementById('siteHeader');
    const footer = document.getElementById('siteFooter');
    const empty = (el) => el && !String(el.innerHTML || '').trim();
    const render = window.__bizdavarChrome || window.renderSiteChrome;
    if ((empty(header) || empty(footer)) && typeof render === 'function') {
      try {
        render();
      } catch (e) {
        console.error('[Bizdavar] renderSiteChrome failed', e);
      }
    }
  }

  function refreshChrome() {
    const render = window.__bizdavarChrome || window.renderSiteChrome;
    if (typeof render !== 'function') return;
    try {
      render();
    } catch (e) {
      console.error('[Bizdavar] chrome refresh failed', e);
    }
  }

  function runPageBoot(fn) {
    syncLocaleNow();
    snapshotChrome();
    afterLocale();
    try {
      if (typeof fn === 'function') fn();
    } catch (e) {
      console.error('[Bizdavar] page init failed', e);
      ensureSiteChrome();
    }
    afterLocale();
    ensureSiteChrome();
  }

  function onLocaleChanged() {
    geoStripDone = false;
    syncLocaleNow();
    refreshChrome();
    afterLocale();
    if (typeof window.__bizdavarPageBoot === 'function') {
      try {
        window.__bizdavarPageBoot();
      } catch (e) {
        console.error('[Bizdavar] page boot on locale failed', e);
      }
    }
    afterLocale();
  }

  snapshotChrome();
  syncLocaleNow();
  afterLocale();

  if (window.BIZDAVAR_I18N) {
    window.bizdavarReady = Promise.resolve(window.BIZDAVAR_I18N.init())
      .then(() => {
        syncLocaleNow();
        afterLocale();
        ensureSiteChrome();
        return window.BIZDAVAR_I18N;
      })
      .catch(err => {
        console.error('[Bizdavar] i18n init failed', err);
        ensureSiteChrome();
        throw err;
      });

    document.addEventListener('bizdavar:locale', onLocaleChanged);
  } else {
    window.bizdavarReady = Promise.resolve();
  }

  document.addEventListener('DOMContentLoaded', () => {
    snapshotChrome();
    syncLocaleNow();
    ensureSiteChrome();
    afterLocale();
  });

  window.bizdavarPageInit = function (fn) {
    if (typeof fn === 'function') {
      window.__bizdavarPageBoot = fn;
    }
    runPageBoot(fn);
  };
})();
