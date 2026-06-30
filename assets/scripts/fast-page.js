/**
 * Fast Web Studio landing page
 */
(function () {
  let F = window.FAST_CATALOG;
  const C = window.BIZDAVAR_CONFIG;
  if (!F || !C) return;

  const path = (p) => window.resolvePath(p);
  const R = C.routes || {};
  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const arrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : ' ←');
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(key, fb) : (fb ?? key));
  const ui = (key, fb) => t(`fastPage.ui.${key}`, fb);

  function netinodeUrl() {
    return (C.partners && C.partners.netinode && C.partners.netinode.url) || 'https://netinode.net/';
  }

  function planMessage(planId) {
    return (C.fast && C.fast.planMessages && C.fast.planMessages[planId]) || `سلام، می‌خوام پلن ${planId} Fast Web Studio سفارش بدم`;
  }

  function contactUrl(planId) {
    const base = path(R.contact || 'pages/contact.html');
    const msg = planMessage(planId);
    return `${base}?service=fast-studio&plan=${encodeURIComponent(planId)}&message=${encodeURIComponent(msg)}`;
  }

  function whatsappHref(planId) {
    if (window.getWhatsappUrl) return window.getWhatsappUrl(planMessage(planId));
    return contactUrl(planId);
  }

  function showcaseUrl(item) {
    if (item.internal && item.slug) return path(item.slug);
    return `https://${item.domain}`;
  }

  function renderHero() {
    const el = document.getElementById('fastHeroContent');
    if (!el) return;
    const b = F.brand;
    el.innerHTML = `
      <div class="fast-hero__content">
        <a href="${path('pages/fast.html')}" class="fast-hero__brand">
          <span class="fast-hero__logo-icon" aria-hidden="true">&lt;/&gt;</span>
          <span>${b.name}</span>
        </a>
        <span class="fast-hero__eyebrow">${b.eyebrow}</span>
        <h1 class="fast-hero__title">${b.headline}</h1>
        <p class="fast-hero__subtitle">${b.subtitle}</p>
        <p class="fast-hero__desc">${b.description}</p>
        <div class="fast-hero__stats">
          <div class="fast-hero__stat"><strong>${ui('statDays', '۵ روز')}</strong><span>${ui('statDaysLabel', 'تحویل استاندارد')}</span></div>
          <div class="fast-hero__stat"><strong>${ui('statPrice', '$99')}</strong><span>${ui('statPriceLabel', 'شروع قیمت')}</span></div>
          <div class="fast-hero__stat"><strong>${ui('statProjects', '۱۰۰+')}</strong><span>${ui('statProjectsLabel', 'پروژه بیزدوار')}</span></div>
        </div>
        <div class="fast-hero__actions">
          <a href="#fast-plans" class="btn btn--blue">${ui('viewPlans', 'مشاهده پلن‌ها')}</a>
          <a href="${whatsappHref('pro')}" class="btn btn--yellow fast-wa-cta" data-plan="pro">${ui('consultWa', 'مشاوره در واتساپ')}</a>
        </div>
      </div>
      <div class="fast-hero__visual" aria-hidden="true">
        <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg">
          <rect width="480" height="320" rx="16" fill="#EFF6FF"/>
          <rect x="48" y="40" width="280" height="200" rx="10" fill="#fff" stroke="#3B82F6" stroke-width="2"/>
          <rect x="68" y="64" width="140" height="10" rx="5" fill="#3B82F6" opacity="0.7"/>
          <rect x="68" y="88" width="220" height="6" rx="3" fill="#93C5FD"/>
          <rect x="68" y="102" width="190" height="6" rx="3" fill="#BFDBFE"/>
          <rect x="68" y="116" width="200" height="6" rx="3" fill="#BFDBFE"/>
          <rect x="68" y="150" width="90" height="32" rx="6" fill="#3B82F6"/>
          <rect x="340" y="72" width="92" height="168" rx="14" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
          <circle cx="386" cy="108" r="18" fill="#3B82F6" opacity="0.25"/>
          <text x="240" y="280" text-anchor="middle" fill="#1e40af" font-size="13" font-family="monospace">fast.bizdavar.com</text>
        </svg>
      </div>`;
  }

  function renderTrustBar() {
    const el = document.getElementById('fastTrustBar');
    if (!el) return;
    el.innerHTML = `
      <div class="container fast-trust-bar__inner">
        ${F.trustSignals.map(t => `
          <div class="fast-trust-item">
            <span class="fast-trust-item__icon">${ic(t.icon, { size: 22 })}</span>
            <div>
              <strong>${t.label}</strong>
              <span>${t.desc}</span>
            </div>
          </div>
        `).join('')}
      </div>`;
  }

  function renderHostingBar() {
    const el = document.getElementById('fastHostingBar');
    if (!el) return;
    const note = window.BIZDAVAR_I18N?.raw('fastPage.hostingNote');
    if (!note) return;
    const url = netinodeUrl();
    el.innerHTML = `
      <div class="container fast-hosting-bar__inner">
        <div class="fast-hosting-bar__text">
          <strong>${note.title}</strong>
          <p>${note.text}</p>
        </div>
        <a href="${url}" class="btn btn--yellow fast-hosting-bar__cta" target="_blank" rel="noopener noreferrer">${note.cta}</a>
      </div>`;
  }

  function renderNav() {
    const el = document.getElementById('fastNav');
    if (!el) return;
    el.setAttribute('aria-label', ui('navAria', 'بخش‌های Fast Web Studio'));
    const links = [
      { id: 'fast-plans', label: ui('navPlans', 'پلن‌ها'), icon: 'coin' },
      { id: 'fast-compare', label: ui('navCompare', 'مقایسه'), icon: 'list' },
      { id: 'fast-timeline', label: ui('navTimeline', 'مسیر ۵ روزه'), icon: 'bolt' },
      { id: 'fast-showcase', label: ui('navShowcase', 'نمونه‌کارها'), icon: 'briefcase' },
      { id: 'fast-faq', label: ui('navFaq', 'سوالات'), icon: 'info' }
    ];
    el.innerHTML = links.map((l, i) =>
      `<a href="#${l.id}" class="fast-nav__item${i === 0 ? ' active' : ''}">${ic(l.icon, { size: 16 })} ${l.label}</a>`
    ).join('');
  }

  function planBtnClass(accent) {
    const map = { green: 'btn--green', orange: 'btn--orange', blue: 'btn--blue' };
    return map[accent] || 'btn--primary';
  }

  function renderPlans() {
    const el = document.getElementById('fastPlansGrid');
    if (!el) return;
    el.innerHTML = F.plans.map(p => `
      <article class="fast-plan-card${p.featured ? ' fast-plan-card--featured' : ''}">
        ${p.ribbon ? `<span class="fast-plan-card__ribbon">${p.ribbon}</span>` : ''}
        <header class="fast-plan-card__head">
          <h3>${p.name}</h3>
          <p>${p.subtitle}</p>
        </header>
        <div class="fast-plan-card__price">
          <span class="fast-plan-card__old">$${p.oldPrice}</span>
          <span class="fast-plan-card__current">$${p.price}</span>
          <span class="fast-plan-card__period">${ui('oneTime', 'پرداخت یک‌باره')}</span>
        </div>
        <ul class="fast-plan-card__features">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <footer class="fast-plan-card__foot">
          <a href="${whatsappHref(p.id)}" class="btn ${planBtnClass(p.accent)} fast-plan-order" data-plan="${p.id}">${ui('orderWa', 'سفارش در واتساپ')}</a>
          <a href="${contactUrl(p.id)}" class="fast-plan-contact">${ui('orContact', 'یا فرم تماس')}${arrow()}</a>
        </footer>
      </article>
    `).join('');
  }

  function cellValue(val) {
    if (val === true) return '<span class="fast-compare-yes">✓</span>';
    if (val === '—' || val === false) return '<span class="fast-compare-no">—</span>';
    return val;
  }

  function renderCompare() {
    const el = document.getElementById('fastCompareTable');
    if (!el) return;
    el.innerHTML = `
      <table class="fast-compare">
        <thead>
          <tr>
            <th scope="col">${ui('compareFeature', 'امکانات')}</th>
            <th scope="col">${ui('compareBasic', 'پایه')}</th>
            <th scope="col">${ui('compareStore', 'فروشگاهی')}</th>
            <th scope="col">${ui('comparePro', 'حرفه‌ای')}</th>
          </tr>
        </thead>
        <tbody>
          ${F.compareRows.map(row => `
            <tr>
              <th scope="row">${row.feature}</th>
              <td>${cellValue(row.basic)}</td>
              <td>${cellValue(row.store)}</td>
              <td>${cellValue(row.pro)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>`;
  }

  function renderTimeline() {
    const el = document.getElementById('fastTimeline');
    if (!el) return;
    el.innerHTML = F.timeline.map(s => `
      <div class="fast-step">
        <span class="fast-step__num">${s.num}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  function renderWhy() {
    const el = document.getElementById('fastWhyGrid');
    if (!el) return;
    el.innerHTML = F.whyChoose.map(w => `
      <div class="fast-why-card">
        <span class="fast-why-card__icon">${ic(w.icon, { size: 28 })}</span>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
      </div>
    `).join('');
  }

  function renderShowcase() {
    const el = document.getElementById('fastShowcaseGrid');
    if (!el) return;
    el.innerHTML = F.showcases.map(s => {
      const url = showcaseUrl(s);
      const ext = !s.internal;
      return `
        <a href="${url}" class="fast-showcase-card"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>
          <span class="fast-showcase-card__cat">${s.category}</span>
          <strong>${s.name}</strong>
          <span class="fast-showcase-card__link">${ui('viewCase', 'مشاهده')}${arrow()}</span>
        </a>`;
    }).join('');
  }

  function renderFaq() {
    const el = document.getElementById('fastFaqList');
    if (!el) return;
    el.innerHTML = F.faq.map(item => `
      <details class="fast-faq__item">
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `).join('');
  }

  function setupWaLinks() {
    document.querySelectorAll('.fast-plan-order, .fast-wa-cta').forEach(btn => {
      const plan = btn.dataset.plan || 'basic';
      btn.href = whatsappHref(plan);
      if (C.contact.whatsapp) {
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
      }
    });
  }

  function setupSticky() {
    const sticky = document.getElementById('fastStickyCta');
    if (!sticky) return;
    sticky.hidden = false;
    const orderBtn = sticky.querySelector('.fast-sticky-order');
    if (orderBtn) orderBtn.href = whatsappHref('pro');

    const hero = document.querySelector('.fast-hero');
    if (hero && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver(([entry]) => {
        sticky.classList.toggle('is-visible', !entry.isIntersecting);
      }, { threshold: 0 });
      obs.observe(hero);
    } else {
      sticky.classList.add('is-visible');
    }
  }

  function injectFaqSchema() {
    if (!window.injectJsonLd && !document.head) return;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: F.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a.replace(/<[^>]+>/g, '') }
      }))
    };
    let script = document.getElementById('jsonld-fast-faq');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-fast-faq';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  }

  window.initFastPage = function () {
    F = (window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.getFastCatalog) ? window.BIZDAVAR_I18N.getFastCatalog() : window.FAST_CATALOG;
    renderHero();
    renderTrustBar();
    renderHostingBar();
    renderNav();
    renderPlans();
    renderCompare();
    renderTimeline();
    renderWhy();
    renderShowcase();
    renderFaq();
    setupWaLinks();
    setupSticky();
    injectFaqSchema();
    if (window.initDataIcons) initDataIcons();
  };
})();
