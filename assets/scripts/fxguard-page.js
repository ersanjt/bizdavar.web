/**
 * WhatsApp CRM script page — dynamic sections + stat counters
 */
(function () {
  function raw(key) {
    return window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw(key) : undefined;
  }

  function contactHref(query) {
    const base = window.resolvePagePath
      ? window.resolvePagePath('pages/contact.html')
      : '/pages/contact';
    return query ? `${base}?${query}` : base;
  }

  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderCards(containerId, items, template) {
    const el = document.getElementById(containerId);
    if (!el || !Array.isArray(items)) return;
    el.innerHTML = items.map(template).join('');
  }

  function animateStat(el, target, suffix) {
    const duration = 1200;
    const start = performance.now();
    const from = 0;
    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = from + (target - from) * eased;
      const display = Number.isInteger(target) ? Math.round(val) : val.toFixed(1);
      el.textContent = `${display}${suffix || ''}`;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function iconHtml(name, size = 28) {
    return window.BD_ICON ? window.BD_ICON(name, { size }) : '';
  }

  window.initFxguardPage = function () {
    const cs = raw('caseStudy.fxguard');
    if (!cs) return;

    const regionsEl = document.getElementById('fxguardRegions');
    if (regionsEl && Array.isArray(cs.hero?.regionItems)) {
      regionsEl.innerHTML = window.bdRegionListHtml
        ? window.bdRegionListHtml(cs.hero.regionItems)
        : cs.hero.regions || '';
    }

    renderCards('fxguardProblems', cs.problem?.items, item => `
      <article class="fxguard-card">
        <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
      </article>`);

    renderCards('fxguardSteps', cs.steps?.items, item => `
      <article class="fxguard-step">
        <div class="fxguard-step__num">${esc(item.num)}</div>
        <div class="fxguard-step__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
      </article>`);

    renderCards('fxguardFeatures', cs.features?.items, item => `
      <article class="fxguard-card">
        <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
      </article>`);

    renderCards('fxguardAudiences', cs.audiences?.items, item => `
      <article class="fxguard-card">
        <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
        <h3>${esc(item.title)}</h3>
        <p class="fxguard-card__region">${esc(item.region)}</p>
        <p>${esc(item.desc)}</p>
        ${item.tag ? `<span class="fxguard-card__tag">${esc(item.tag)}</span>` : ''}
      </article>`);

    const pricingEl = document.getElementById('fxguardPricing');
    if (pricingEl && Array.isArray(cs.pricing?.plans)) {
      pricingEl.innerHTML = cs.pricing.plans.map(plan => {
        const href = plan.href || contactHref('product=whatsapp-crm');
        const external = /^https?:/.test(href);
        return `
        <article class="fxguard-plan${plan.featured ? ' fxguard-plan--featured' : ''}">
          ${plan.badge ? `<span class="fxguard-plan__badge">${esc(plan.badge)}</span>` : ''}
          <h3>${esc(plan.name)}</h3>
          <p class="fxguard-plan__price">${esc(plan.price)}<span class="fxguard-plan__period">${esc(plan.period || '')}</span></p>
          <p>${esc(plan.desc)}</p>
          <ul>${(plan.features || []).map(f => `<li>${esc(f)}</li>`).join('')}</ul>
          <a href="${esc(href)}" class="btn ${plan.featured ? 'btn--green' : 'btn--outline'}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(plan.cta)}</a>
        </article>`;
      }).join('');
    }

    const faqEl = document.getElementById('fxguardFaq');
    if (faqEl && Array.isArray(cs.faq?.items)) {
      faqEl.innerHTML = cs.faq.items.map(item => `
        <details>
          <summary>${esc(item.q)}</summary>
          <p>${esc(item.a)}</p>
        </details>`).join('');
    }

    const statMap = [
      { id: 'fxStatBusinesses', value: 3, suffix: '' },
      { id: 'fxStatRegions', value: 4, suffix: '' },
      { id: 'fxStatUptime', value: 100, suffix: '%' },
      { id: 'fxStatSetup', value: 10, suffix: '' }
    ];
    const setupSuffix = cs.stats?.setupSuffix || '';
    statMap.forEach(({ id, value, suffix }) => {
      const el = document.getElementById(id);
      if (el) animateStat(el, value, id === 'fxStatSetup' ? setupSuffix : suffix);
    });

    const regionsVal = document.getElementById('fxStatRegionsLabel');
    if (regionsVal && cs.stats?.regionsVal) regionsVal.textContent = cs.stats.regionsVal;
  };
})();
