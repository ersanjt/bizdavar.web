/**
 * Page-level i18n — array/list handlers that can't be expressed with a single
 * data-i18n attribute. Simple text is handled by I18n.applyDataI18n via
 * data-i18n / data-i18n-html attributes in the HTML.
 */
(function () {
  function t(key, fb) {
    return window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key);
  }

  function raw(key) {
    return window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined;
  }

  function applyAboutFeatures() {
    const feats = raw('aboutPage.features');
    const els = document.querySelectorAll('.about__features .about__feature');
    if (!Array.isArray(feats) || !els.length) return;
    els.forEach((el, i) => { if (feats[i]) el.textContent = feats[i]; });
  }

  function applyAboutValues() {
    const items = raw('aboutPage.values.items');
    const cards = document.querySelectorAll('.features-grid .feature-item');
    if (!Array.isArray(items) || !cards.length) return;
    cards.forEach((card, i) => {
      if (!items[i]) return;
      const h = card.querySelector('h3');
      const p = card.querySelector('p');
      if (h && items[i].title) h.textContent = items[i].title;
      if (p && items[i].desc) p.textContent = items[i].desc;
    });
  }

  function applyServiceBlocks() {
    const blocks = raw('servicesPage.blocks');
    if (!Array.isArray(blocks)) return;
    const ids = ['digital-marketing', 'web-design', 'smm', 'industrial'];
    ids.forEach((id, i) => {
      const b = blocks[i];
      if (!b) return;
      const section = document.getElementById(id);
      if (!section) return;
      const tags = section.querySelector('.service-block__tags');
      if (tags && b.tags) {
        tags.innerHTML = b.tags.map(tag => `<span class="service-block__tag">${tag}</span>`).join('');
      }
      const checks = section.querySelector('.check-list');
      if (checks && b.checks) {
        checks.innerHTML = b.checks.map(c => `<li>${c}</li>`).join('');
      }
    });
  }

  function applyListById(id, key) {
    const ul = document.getElementById(id);
    const items = raw(key);
    if (!ul || !Array.isArray(items)) return;
    ul.innerHTML = items.map(i => `<li>${i}</li>`).join('');
  }

  function applyPortfolioTags() {
    const tags = raw('portfolioPage.tags');
    const els = document.querySelectorAll('.portfolio-tags .tags-cloud__tag');
    if (!Array.isArray(tags) || !els.length) return;
    els.forEach((el, i) => { if (tags[i]) el.textContent = tags[i]; });
  }

  function applyArticlePage() {
    const slug = document.body.dataset.article;
    if (!slug) return;
    const art = raw(`articles.${slug}`);
    if (!art || typeof art !== 'object') return;
    const header = document.querySelector('.article__header');
    if (header) {
      const cat = header.querySelector('.blog-item__cat');
      const h1 = header.querySelector('h1');
      const meta = header.querySelector('.article__meta');
      if (cat && art.category) cat.textContent = art.category;
      if (h1 && art.title) h1.textContent = art.title;
      if (meta && art.dateDisplay) meta.innerHTML = art.dateDisplay;
    }
    const ctaBlock = document.querySelector('.article__cta');
    if (ctaBlock && art.cta) {
      const p = ctaBlock.querySelector('p');
      const btns = ctaBlock.querySelectorAll('.btn');
      if (p && art.cta.text) p.textContent = art.cta.text;
      if (btns[0] && art.cta.btnPrimary) btns[0].textContent = art.cta.btnPrimary;
      if (btns[1] && art.cta.btnSecondary) btns[1].textContent = art.cta.btnSecondary;
    }
  }

  window.applyPageI18n = function () {
    if (!window.BIZDAVAR_I18N) return;
    const page = document.body.dataset.page;
    if (page === 'about') {
      applyAboutFeatures();
      applyAboutValues();
    }
    if (page === 'services') {
      applyServiceBlocks();
      if (typeof window.renderServicesRelatedLinks === 'function') {
        window.renderServicesRelatedLinks();
      }
    }
    if (page === 'privacy') applyListById('privacyUseList', 'privacyPage.sections.1.items');
    if (page === 'portfolio') {
      applyPortfolioTags();
      if (typeof window.initPortfolioPage === 'function') window.initPortfolioPage();
      if (typeof window.renderPortfolioRelatedLinks === 'function') window.renderPortfolioRelatedLinks();
    }
    if (page === 'fast') {
      if (typeof window.initFastPage === 'function') window.initFastPage();
      if (typeof window.renderFastRelatedLinks === 'function') window.renderFastRelatedLinks();
      if (typeof window.injectFastProductSchema === 'function') window.injectFastProductSchema();
    }
    const supplyInits = {
      gamak: 'initGamakPage',
      'digi-system': 'initDigiSystemPage',
      teraoka: 'initTeraokaPage',
      teltonika: 'initTeltonikaPage',
      prosense: 'initProsensePage',
      vega: 'initVegaPage'
    };
    if (supplyInits[page] && typeof window[supplyInits[page]] === 'function') {
      window[supplyInits[page]]();
    }
    if (page === 'biztejarat') applyListById('biztejaratServices', 'caseStudy.biztejarat.about.services');
    if (page === 'biztab') applyListById('biztabSpecs', 'caseStudy.biztab.about.specs');
    if (page === 'bizsanitizer-v5') applyListById('bizsanitizerSpecs', 'caseStudy.bizsanitizerV5.about.specs');
    if (page === 'fxguard' && typeof window.initFxguardPage === 'function') window.initFxguardPage();
    if (page === 'bizswap' && typeof window.initBizswapPage === 'function') window.initBizswapPage();
    if (page === 'bz-diamond') applyListById('bzDiamondServices', 'caseStudy.bzDiamond.about.services');
    if (page === 'article') applyArticlePage();
  };
})();
