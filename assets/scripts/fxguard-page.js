/**
 * FXGuard WhatsApp CRM product page — sections from caseStudy.fxguard
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

  function contactHref(query) {
    const base = window.resolvePagePath
      ? window.resolvePagePath('pages/contact.html')
      : '/pages/contact';
    return query ? `${base}?${query}` : base;
  }

  function pageHref(slug) {
    return window.resolvePagePath
      ? window.resolvePagePath(`pages/${slug}.html`)
      : `/pages/${slug}`;
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

  function setStatFallbacks(cs) {
    [
      { id: 'fxStatBusinesses', value: '12+' },
      { id: 'fxStatRegions', value: '5' },
      { id: 'fxStatUptime', value: '99.9%' },
      { id: 'fxStatSetup', value: '5' }
    ].forEach(({ id, value }) => {
      const el = document.getElementById(id);
      if (el && (!el.textContent || /^0/.test(el.textContent.trim()))) el.textContent = value;
    });
    const regionsVal = document.getElementById('fxStatRegionsLabel');
    if (regionsVal && cs?.stats?.regionsVal) regionsVal.textContent = cs.stats.regionsVal;
  }

  function renderSuite(cs) {
    const el = document.getElementById('fxguardSuite');
    if (!el || !Array.isArray(cs.suite?.products)) return;
    el.innerHTML = cs.suite.products.map(p => {
      const href = p.internal ? pageHref(p.internal) : (p.href || 'https://fxguard.io/');
      const external = /^https?:/.test(href);
      return `
        <article class="fxguard-suite-card${p.featured ? ' fxguard-suite-card--live' : ' fxguard-suite-card--soon'}">
          <span class="fxguard-suite-card__badge">${esc(p.badge || '')}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.desc)}</p>
          <div class="fxguard-suite-card__actions">
            <a href="${esc(href)}" class="btn ${p.featured ? 'btn--green' : 'btn--outline'}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(p.cta)}</a>
            ${p.ctaSecondary && p.secondaryHref ? `<a href="${esc(p.secondaryHref.startsWith('http') || p.secondaryHref.startsWith('/') ? p.secondaryHref : pageHref(p.secondaryHref))}" class="btn btn--outline"${/^https?:/.test(p.secondaryHref) ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(p.ctaSecondary)}</a>` : ''}
          </div>
        </article>`;
    }).join('');
  }

  function renderSolve(cs) {
    const el = document.getElementById('fxguardSolve');
    const s = cs.solution;
    if (!el || !s) return;
    el.innerHTML = `
      <div class="fxguard-solve__inner">
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.desc)}</p>
        <a href="${esc(s.href || 'https://app.fxguard.io/')}" class="btn btn--green" target="_blank" rel="noopener noreferrer">${esc(s.cta || 'Demo')}</a>
      </div>`;
  }

  function renderWhy(cs) {
    renderCards('fxguardWhy', cs.why?.items, (item, i) => `
      <article class="fxguard-why-card">
        <span class="fxguard-why-card__num">${esc(item.num || String(i + 1).padStart(2, '0'))}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
      </article>`);
  }

  function renderDemo(cs) {
    const el = document.getElementById('fxguardDemo');
    const d = cs.demo;
    if (!el || !d) return;
    el.innerHTML = `
      <div class="fxguard-demo__panel">
        <span class="fxguard-demo__live">${esc(d.liveBadge || 'LIVE DEMO')}</span>
        <div class="fxguard-demo__creds">
          <div>
            <span class="fxguard-demo__label">${esc(d.userLabel || 'Username')}</span>
            <code dir="ltr">${esc(d.user || 'demo')}</code>
          </div>
          <div>
            <span class="fxguard-demo__label">${esc(d.passLabel || 'Password')}</span>
            <code dir="ltr">${esc(d.pass || '123456')}</code>
          </div>
        </div>
        <p class="fxguard-demo__note">${esc(d.note || '')}</p>
        <a href="https://app.fxguard.io/" class="btn btn--green" target="_blank" rel="noopener noreferrer">${esc(d.cta || 'Open Live Demo')}</a>
      </div>
      <ul class="fxguard-demo__shots">
        ${(d.shots || []).map(s => `<li><strong>${esc(s.title)}</strong><span>${esc(s.desc)}</span></li>`).join('')}
      </ul>`;
  }

  function renderUpdates(cs) {
    const el = document.getElementById('fxguardUpdates');
    if (!el || !Array.isArray(cs.updates?.items)) return;
    el.innerHTML = cs.updates.items.map(item => `
      <article class="fxguard-update">
        <div class="fxguard-update__meta">
          <time>${esc(item.date)}</time>
          <span>${esc(item.tag)}</span>
        </div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.desc)}</p>
        ${Array.isArray(item.bullets) ? `<ul>${item.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
      </article>`).join('');
  }

  function injectFaqSchema(items) {
    if (!items?.length || typeof window.injectJsonLd !== 'function') return;
    window.injectJsonLd('jsonld-fxguard-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    });
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

      renderSuite(cs);
      renderCards('fxguardProblems', cs.problem?.items, item => `
        <article class="fxguard-card">
          <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);
      renderSolve(cs);
      renderWhy(cs);
      renderDemo(cs);

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

      renderCards('fxguardSupport', cs.support?.items, item => `
        <article class="fxguard-card">
          <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      renderUpdates(cs);

      const faqEl = document.getElementById('fxguardFaq');
      if (faqEl && Array.isArray(cs.faq?.items)) {
        faqEl.innerHTML = cs.faq.items.map(item => `
          <details>
            <summary>${esc(item.q)}</summary>
            <p>${esc(item.a)}</p>
          </details>`).join('');
        injectFaqSchema(cs.faq.items);
      }

      [
        { id: 'fxStatBusinesses', value: 12, suffix: '+' },
        { id: 'fxStatRegions', value: 5, suffix: '' },
        { id: 'fxStatUptime', value: 99.9, suffix: '%' },
        { id: 'fxStatSetup', value: 5, suffix: '' }
      ].forEach(({ id, value, suffix }) => {
        const el = document.getElementById(id);
        if (el) animateStat(el, value, suffix);
      });
      const regionsVal = document.getElementById('fxStatRegionsLabel');
      if (regionsVal && cs.stats?.regionsVal) regionsVal.textContent = cs.stats.regionsVal;
    } catch (err) {
      console.error('[Bizdavar] initFxguardPage failed', err);
      setStatFallbacks(raw('caseStudy.fxguard'));
    }
  };

  window.initFxguardAccountingPage = function () {
    try {
      const cs = raw('caseStudy.fxguardAccounting');
      if (!cs || typeof cs !== 'object') return;

      renderCards('fxAccFeatures', cs.features?.items, item => `
        <article class="fxguard-card">
          <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon || 'check')}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      renderCards('fxAccAudience', cs.audience?.items, item => `
        <article class="fxguard-card">
          <div class="fxguard-card__icon" aria-hidden="true">${iconHtml(item.icon || 'users')}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      renderCards('fxAccSteps', cs.steps?.items, item => `
        <article class="fxguard-step">
          <div class="fxguard-step__num">${esc(item.num)}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.desc)}</p>
        </article>`);

      const faqEl = document.getElementById('fxAccFaq');
      if (faqEl && Array.isArray(cs.faq?.items)) {
        faqEl.innerHTML = cs.faq.items.map(item => `
          <details>
            <summary>${esc(item.q)}</summary>
            <p>${esc(item.a)}</p>
          </details>`).join('');
      }
    } catch (err) {
      console.error('[Bizdavar] initFxguardAccountingPage failed', err);
    }
  };
})();
