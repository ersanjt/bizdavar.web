/**
 * FXGuard product page — dynamic sections + stat counters
 */
(function () {
  function raw(key) {
    if (window.BIZDAVAR_I18N) {
      const fromI18n = window.BIZDAVAR_I18N.raw(key);
      if (fromI18n != null) return fromI18n;
    }
    const lang = window.BIZDAVAR_I18N?.locale
      || document.documentElement.lang?.slice(0, 2)
      || 'fa';
    const dict = window.BIZDAVAR_LOCALES?.[lang] || window.BIZDAVAR_LOCALES?.fa;
    if (!dict || !key) return undefined;
    return key.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), dict);
  }

  function pageHref(href) {
    if (!href) return '#';
    if (/^https?:/i.test(href) || href.startsWith('mailto:') || href.startsWith('#')) return href;
    const cleaned = String(href).replace(/^\//, '').replace(/\.html$/i, '');
    return window.resolvePagePath ? window.resolvePagePath(cleaned) : href;
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
    if (!el || !Array.isArray(items) || !items.length) return;
    el.innerHTML = items.map(template).join('');
  }

  function animateStat(el, target, suffix) {
    if (!el) return;
    const duration = 1200;
    const start = performance.now();
    const from = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      const display = Number.isInteger(target) ? target : target.toFixed(1);
      el.textContent = `${display}${suffix || ''}`;
      return;
    }
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
    try {
      return window.BD_ICON ? window.BD_ICON(name, { size }) : '';
    } catch (e) {
      return '';
    }
  }

  function extAttrs(href, external) {
    const isExt = external || /^https?:/i.test(href || '');
    return isExt ? ' target="_blank" rel="noopener noreferrer"' : '';
  }

  function setStatFallbacks(cs) {
    const map = [
      { id: 'fxStatBusinesses', value: '12+' },
      { id: 'fxStatRegions', value: '5' },
      { id: 'fxStatUptime', value: '7' },
      { id: 'fxStatSetup', value: '5' }
    ];
    map.forEach(({ id, value }) => {
      const el = document.getElementById(id);
      if (el && (!el.textContent || /^0/.test(el.textContent.trim()))) {
        el.textContent = value;
      }
    });
    const regionsVal = document.getElementById('fxStatRegionsLabel');
    if (regionsVal && cs?.stats?.regionsVal) regionsVal.textContent = cs.stats.regionsVal;
  }

  window.initFxguardPage = function () {
    try {
      const cs = raw('caseStudy.fxguard');
      if (!cs || typeof cs !== 'object') {
        setStatFallbacks(null);
        return;
      }

      const regionsEl = document.getElementById('fxguardRegions');
      if (regionsEl && Array.isArray(cs.hero?.regionItems)) {
        regionsEl.innerHTML = window.bdRegionListHtml
          ? window.bdRegionListHtml(cs.hero.regionItems)
          : esc(cs.hero.regions || '');
        regionsEl.removeAttribute('data-i18n');
      }

      renderCards('fxguardSuite', cs.suite?.items, item => {
        const href = pageHref(item.href);
        return `
        <article class="fxguard-suite-card">
          ${item.badge ? `<span class="fxguard-card__tag">${esc(item.badge)}</span>` : ''}
          <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
          ${item.audience ? `<p class="fxguard-card__region">${esc(item.audience)}</p>` : ''}
          <a href="${esc(href)}" class="fxguard-suite-card__link"${extAttrs(href, item.external)}>${esc(item.cta || '')}</a>
        </article>`;
      });

      renderCards('fxguardWhy', cs.why?.items, item => `
        <article class="fxguard-card">
          <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      renderCards('fxguardOutcomes', cs.outcomes?.items, item => `
        <article class="fxguard-step">
          <div class="fxguard-step__num">${esc(item.num)}</div>
          <div class="fxguard-step__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      renderCards('fxguardProblems', cs.problem?.items, item => `
        <article class="fxguard-card">
          <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      renderCards('fxguardChannel', cs.channel?.items, item => `
        <article class="fxguard-card">
          <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      renderCards('fxguardStories', cs.stories?.items, item => `
        <article class="fxguard-card">
          <p class="fxguard-card__region">${esc(item.place)}</p>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      renderCards('fxguardDemoSteps', cs.demo?.items, item => `
        <article class="fxguard-step">
          <div class="fxguard-step__num">${esc(item.num)}</div>
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

      renderCards('fxguardModules', cs.modules?.groups, group => `
        <article class="fxguard-module-group">
          <h3>${esc(group.title)}</h3>
          <ul>${(group.items || []).map(f => `<li>${esc(f)}</li>`).join('')}</ul>
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
          const href = pageHref(plan.href);
          return `
          <article class="fxguard-plan${plan.featured ? ' fxguard-plan--featured' : ''}">
            ${plan.badge ? `<span class="fxguard-plan__badge">${esc(plan.badge)}</span>` : ''}
            <h3>${esc(plan.name)}</h3>
            <p class="fxguard-plan__price">${esc(plan.price)}<span class="fxguard-plan__period">${esc(plan.period || '')}</span></p>
            <p>${esc(plan.desc)}</p>
            <ul>${(plan.features || []).map(f => `<li>${esc(f)}</li>`).join('')}</ul>
            <a href="${esc(href)}" class="btn ${plan.featured ? 'btn--green' : 'btn--outline'}"${extAttrs(href)}>${esc(plan.cta)}</a>
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

      renderCards('fxguardRelated', cs.related?.items, item => {
        const href = pageHref(item.href);
        return `
        <a href="${esc(href)}" class="feature-item feature-item--link"${extAttrs(href, item.external)}>
          <span class="feature-item__icon">${iconHtml(item.icon, 26)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </a>`;
      });

      const statMap = [
        { id: 'fxStatBusinesses', value: 12, suffix: '+' },
        { id: 'fxStatRegions', value: 5, suffix: '' },
        { id: 'fxStatUptime', value: 7, suffix: '' },
        { id: 'fxStatSetup', value: 5, suffix: '' }
      ];
      const setupSuffix = cs.stats?.setupSuffix || '';
      statMap.forEach(({ id, value, suffix }) => {
        const el = document.getElementById(id);
        if (el) animateStat(el, value, id === 'fxStatSetup' ? (setupSuffix || suffix) : suffix);
      });

      const regionsVal = document.getElementById('fxStatRegionsLabel');
      if (regionsVal && cs.stats?.regionsVal) regionsVal.textContent = cs.stats.regionsVal;

      const problemGrid = document.getElementById('fxguardProblems');
      if (problemGrid && (cs.problem?.items || []).length > 3) {
        problemGrid.classList.remove('fxguard-card-grid--3');
        problemGrid.classList.add('fxguard-card-grid--4');
      }

      const featureGrid = document.getElementById('fxguardFeatures');
      if (featureGrid && (cs.features?.items || []).length > 6) {
        featureGrid.classList.remove('fxguard-card-grid--3');
        featureGrid.classList.add('fxguard-card-grid--4');
      }
    } catch (err) {
      console.error('[Bizdavar] initFxguardPage failed', err);
      setStatFallbacks(raw('caseStudy.fxguard'));
    }
  };
})();
