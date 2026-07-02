/**
 * Geo/locale bootstrap — defers chrome & render helpers until locale is ready
 */
(function () {
  let localeReady = false;
  let renderSiteChromeOrig = null;
  let geoStripDone = false;

  const RENDER_FNS = [
    'renderSiteChrome',
    'renderTrustBar',
    'renderCredibilitySection',
    'renderProcessSection',
    'renderIndustrialSection',
    'renderClientsGrid',
    'renderBlogGrid',
    'renderPortfolioGrid',
    'renderBreadcrumbs',
    'renderRelatedLinks',
    'renderGeoStrip',
    'renderCompanyIntelAbout',
    'fillContactDetails',
    'setupWhatsappLinks',
    'initFastPage',
    'initVegaPage',
    'initProsensePage',
    'initTeltonikaPage',
    'initGamakPage',
    'initDigiSystemPage',
    'initTeraokaPage',
    'initServicesPage',
    'initPortfolioPage',
    'injectSeo',
    'injectPageSeo',
    'injectBreadcrumbSchema',
    'injectContactPageSchema',
    'injectServiceSchema',
    'injectBlogListSchema',
    'injectPortfolioSchema',
    'injectCaseStudySchema',
    'injectFaqSchema',
    'injectIntelFaqSchema',
    'injectArticleSchema',
    'injectServiceProductSchema',
    'injectSupplyBrandSchema',
    'injectJsonLdProductList',
    'injectProsenseSchema',
    'injectTeltonikaSchema',
    'injectGamakSchema',
    'injectDigiSystemSchema',
    'injectTeraokaSchema'
  ];

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
  }

  function ensureSiteChrome() {
    const header = document.getElementById('siteHeader');
    const footer = document.getElementById('siteFooter');
    const empty = (el) => el && !String(el.innerHTML || '').trim();
    if ((empty(header) || empty(footer)) && renderSiteChromeOrig) {
      try {
        renderSiteChromeOrig();
      } catch (e) {
        console.error('[Bizdavar] renderSiteChrome failed', e);
      }
    }
  }

  function runWhenReady(fn) {
    if (localeReady) {
      try {
        return fn();
      } catch (e) {
        console.error('[Bizdavar] page init failed', e);
        ensureSiteChrome();
      }
      return undefined;
    }
    return window.bizdavarReady.then(fn).catch(err => {
      console.error('[Bizdavar] locale init failed', err);
      localeReady = true;
      ensureSiteChrome();
    });
  }

  function wrapRenderFns() {
    RENDER_FNS.forEach(name => {
      const orig = window[name];
      if (typeof orig !== 'function' || orig.__i18nWrapped) return;
      if (name === 'renderSiteChrome') renderSiteChromeOrig = orig;

      const wrapped = function (...args) {
        return runWhenReady(() => {
          const result = orig.apply(this, args);
          afterLocale();
          return result;
        });
      };

      wrapped.__i18nWrapped = true;
      window[name] = wrapped;
    });
  }

  wrapRenderFns();
  window.bizdavarWrapRenderFns = wrapRenderFns;

  if (window.BIZDAVAR_I18N) {
    window.bizdavarReady = Promise.resolve(window.BIZDAVAR_I18N.init())
      .then(() => {
        localeReady = true;
        wrapRenderFns();
        afterLocale();
        ensureSiteChrome();
        return window.BIZDAVAR_I18N;
      })
      .catch(err => {
        console.error('[Bizdavar] i18n init failed', err);
        localeReady = true;
        ensureSiteChrome();
        throw err;
      });

    document.addEventListener('bizdavar:locale', () => {
      afterLocale();
      if (renderSiteChromeOrig) {
        try {
          renderSiteChromeOrig();
        } catch (e) {
          console.error('[Bizdavar] locale re-render failed', e);
        }
      }
      afterLocale();
    });
  } else {
    window.bizdavarReady = Promise.resolve(null).then(() => {
      localeReady = true;
    });
  }

  window.bizdavarPageInit = function (fn) {
    runWhenReady(() => {
      afterLocale();
      if (typeof fn === 'function') fn();
      afterLocale();
      ensureSiteChrome();
    });
  };
})();
