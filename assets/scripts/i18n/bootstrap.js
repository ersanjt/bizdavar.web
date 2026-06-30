/**

 * Geo/locale bootstrap — defers chrome & render helpers until locale is ready

 */

(function () {

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



  function afterLocale() {

    if (!window.BIZDAVAR_I18N) return;

    window.BIZDAVAR_I18N.applyDataI18n();

    window.BIZDAVAR_I18N.applyContactPage();

    window.BIZDAVAR_I18N.applyHomeFaqs();

    window.BIZDAVAR_I18N.applyAboutHeroImage();

    if (typeof window.applyPageI18n === 'function') {
      window.applyPageI18n();
    }
  }



  function wrapRenderFns() {

    RENDER_FNS.forEach(name => {

      const orig = window[name];

      if (typeof orig !== 'function' || orig.__i18nWrapped) return;

      const wrapped = function (...args) {

        return window.bizdavarReady.then(() => {
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

    window.bizdavarReady = window.BIZDAVAR_I18N.init().then(() => {

      wrapRenderFns();

      afterLocale();

      return window.BIZDAVAR_I18N;

    });

  } else {

    window.bizdavarReady = Promise.resolve(null);

  }



  window.bizdavarPageInit = function (fn) {

    window.bizdavarReady.then(() => {

      afterLocale();

      if (typeof fn === 'function') fn();

      afterLocale();

    });

  };

})();


