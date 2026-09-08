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

  function pageHref(href) {
    if (!href) return '#';
    if (/^https?:/i.test(href) || href.startsWith('mailto:') || href.startsWith('#')) return href;
    const cleaned = String(href).replace(/^\//, '').replace(/\.html$/i, '');
    return window.resolvePagePath ? window.resolvePagePath(cleaned) : href;
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

  function extAttrs(href, external) {
    const isExt = external || /^https?:/i.test(href || '');
    return isExt ? ' target="_blank" rel="noopener noreferrer"' : '';
  }

  function setStatFallbacks(cs) {
    [
      { id: 'fxStatBusinesses', value: '12+' },
      { id: 'fxStatRegions', value: '5' },
      { id: 'fxStatUptime', value: '7' },
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

  var DEMO_SCREENS = {
    dashboard: { src: '/assets/images/products/fxguard/desktop-dashboard.png?v=20260904f', w: 1024, h: 507 },
    users: { src: '/assets/images/products/fxguard/desktop-users.png?v=20260904f', w: 1024, h: 484 },
    profile: { src: '/assets/images/products/fxguard/desktop-profile.png?v=20260904f', w: 1024, h: 484 },
    mobileDash: { src: '/assets/images/products/fxguard/mobile-view.png?v=20260904f', w: 425, h: 926 },
    mobileChat: { src: '/assets/images/products/fxguard/mobile-conversations.png?v=20260904f', w: 429, h: 924 }
  };

  function renderDemo(cs) {
    const el = document.getElementById('fxguardDemo');
    const d = cs.demo;
    if (!el || !d) return;
    const demoMsg = d.waDemo || d.waMessage || d.ctaDemo || d.cta || 'FXGuard guided demo';
    const trialMsg = d.waTrial || d.ctaTrial || 'FXGuard 7-day trial';
    const waDemo = window.getWhatsappUrl ? window.getWhatsappUrl(demoMsg) : 'https://wa.me/905010676486';
    const waTrial = window.getWhatsappUrl ? window.getWhatsappUrl(trialMsg) : 'https://wa.me/905010676486';
    const steps = d.items || d.shots || [];
    const shots = d.screens || {};
    el.innerHTML = `
      <div class="fxguard-demo__panel">
        ${steps.length ? `<ol class="fxguard-demo__steps">
          ${steps.map(s => `<li><strong>${esc(s.title)}</strong> — ${esc(s.desc)}</li>`).join('')}
        </ol>` : ''}
        <p class="fxguard-demo__note">${esc(d.note || d.desc || '')}</p>
        <div class="fxguard-demo__actions">
          <a href="${esc(waDemo)}" class="btn btn--green" target="_blank" rel="noopener noreferrer">${esc(d.ctaDemo || d.cta || 'رزرو دمو')}</a>
          ${d.ctaTrial ? `<a href="${esc(waTrial)}" class="btn btn--outline fxguard-demo__trial" target="_blank" rel="noopener noreferrer">${esc(d.ctaTrial)}</a>` : ''}
        </div>
      </div>
      <div class="fxguard-demo__gallery-wrap">
        <h3 class="fxguard-demo__gallery-title">${esc(d.galleryTitle || '')}</h3>
        <div class="fxguard-demo__gallery">
          <div class="fxguard-demo__primary">
            <div class="fxguard-browser">
              <div class="fxguard-browser__bar">
                <div class="fxguard-browser__dots" aria-hidden="true"><span></span><span></span><span></span></div>
                <div class="fxguard-browser__url">app.fxguard.io/dashboard</div>
              </div>
              <div class="fxguard-browser__content">
                <img src="${DEMO_SCREENS.dashboard.src}" alt="${esc(shots.dashboard?.alt || d.galleryTitle || 'FXGuard')}" width="${DEMO_SCREENS.dashboard.w}" height="${DEMO_SCREENS.dashboard.h}" loading="lazy" decoding="async">
              </div>
            </div>
            ${shots.dashboard?.caption ? `<span class="fxguard-demo__badge">${esc(shots.dashboard.caption)}</span>` : ''}
          </div>
          <div class="fxguard-demo__secondary">
            <figure class="fxguard-shot">
              <img src="${DEMO_SCREENS.users.src}" alt="${esc(shots.users?.alt || '')}" width="${DEMO_SCREENS.users.w}" height="${DEMO_SCREENS.users.h}" loading="lazy" decoding="async">
              <figcaption>${esc(shots.users?.caption || '')}</figcaption>
            </figure>
            <figure class="fxguard-shot">
              <img src="${DEMO_SCREENS.profile.src}" alt="${esc(shots.profile?.alt || '')}" width="${DEMO_SCREENS.profile.w}" height="${DEMO_SCREENS.profile.h}" loading="lazy" decoding="async">
              <figcaption>${esc(shots.profile?.caption || '')}</figcaption>
            </figure>
          </div>
          <div class="fxguard-demo__mobiles">
            <div class="fxguard-phone">
              <div class="fxguard-phone__frame">
                <div class="fxguard-phone__notch" aria-hidden="true"></div>
                <div class="fxguard-phone__screen">
                  <img src="${DEMO_SCREENS.mobileDash.src}" alt="${esc(shots.mobileDash?.alt || '')}" width="${DEMO_SCREENS.mobileDash.w}" height="${DEMO_SCREENS.mobileDash.h}" loading="lazy" decoding="async">
                </div>
              </div>
              <p class="fxguard-phone__caption">${esc(shots.mobileDash?.caption || '')}</p>
            </div>
            <div class="fxguard-phone">
              <div class="fxguard-phone__frame">
                <div class="fxguard-phone__notch" aria-hidden="true"></div>
                <div class="fxguard-phone__screen">
                  <img src="${DEMO_SCREENS.mobileChat.src}" alt="${esc(shots.mobileChat?.alt || '')}" width="${DEMO_SCREENS.mobileChat.w}" height="${DEMO_SCREENS.mobileChat.h}" loading="lazy" decoding="async">
                </div>
              </div>
              <p class="fxguard-phone__caption">${esc(shots.mobileChat?.caption || '')}</p>
            </div>
          </div>
        </div>
      </div>`;
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
        { id: 'fxStatUptime', value: 7, suffix: '' },
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
