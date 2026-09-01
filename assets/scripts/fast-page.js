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

  function netinodeUrls() {
    const n = (C.partners && C.partners.netinode) || {};
    return {
      site: n.url || 'https://netinode.net/',
      shop: n.shopUrl || 'https://shop.netinode.net/'
    };
  }

  function netinodeShopUrl() {
    return (C.partners && C.partners.netinode && C.partners.netinode.shopUrl) || 'https://shop.netinode.net/';
  }

  function netinohostUrl() {
    return (C.partners && C.partners.netinohost && C.partners.netinohost.url) || 'https://netinohost.com/';
  }

  function planMessage(planId) {
    return (C.fast && C.fast.planMessages && C.fast.planMessages[planId]) || `سلام، می‌خوام پلن ${planId} Fast Web Studio سفارش بدم`;
  }

  function contactUrl(planId) {
    const base = path(R.contact || 'pages/contact.html');
    const msg = planMessage(planId);
    return `${base}?service=fast-studio&plan=${encodeURIComponent(planId)}&message=${encodeURIComponent(msg)}`;
  }

  function customDevUrl() {
    const base = path(R.contact || 'pages/contact.html');
    return `${base}?service=custom-dev`;
  }

  function whatsappHref(planId) {
    if (window.getWhatsappUrl) return window.getWhatsappUrl(planMessage(planId));
    return contactUrl(planId);
  }

  function showcaseUrl(item) {
    if (item.internal && item.slug) return path(item.slug);
    return `https://${item.domain}`;
  }

  function showcaseLogo(item) {
    if (item.logo) return item.logo;
    const list = C.portfolio || [];
    const match = list.find((p) => p.name === item.name);
    return match && match.logo ? match.logo : '';
  }

  function initials(name) {
    return String(name || '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();
  }

  function savePercent(oldPrice, price) {
    const o = Number(oldPrice);
    const p = Number(price);
    if (!o || !p || o <= p) return 0;
    return Math.round(((o - p) / o) * 100);
  }

  function planPreview(kind) {
    const k = kind === 'store' || kind === 'pro' ? kind : 'landing';
    if (k === 'store') {
      return `<div class="fast-plan-mini fast-plan-mini--store" aria-hidden="true">
        <div class="fast-plan-mini__row"></div>
        <div class="fast-plan-mini__grid">
          <span class="fast-plan-mini__cell"></span>
          <span class="fast-plan-mini__cell is-accent"></span>
          <span class="fast-plan-mini__cell"></span>
        </div>
      </div>`;
    }
    if (k === 'pro') {
      return `<div class="fast-plan-mini fast-plan-mini--pro" aria-hidden="true">
        <div class="fast-plan-mini__row"></div>
        <div class="fast-plan-mini__grid">
          <span class="fast-plan-mini__cell is-accent"></span>
          <span class="fast-plan-mini__cell"></span>
        </div>
      </div>`;
    }
    return `<div class="fast-plan-mini fast-plan-mini--landing" aria-hidden="true">
      <div class="fast-plan-mini__row"></div>
      <div class="fast-plan-mini__grid">
        <span class="fast-plan-mini__cell is-accent"></span>
      </div>
    </div>`;
  }

  function renderHero() {
    const el = document.getElementById('fastHeroContent');
    if (!el) return;
    const b = F.brand;
    const heroSrc = path(b.heroImage || 'assets/images/content/fast-hero.svg');
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
          <a href="${path('pages/custom-web-app.html')}" class="btn btn--outline">${ui('btnCustomApp', 'وب و اپ اختصاصی')}</a>
        </div>
      </div>
      <div class="fast-hero__visual">
        <img src="${heroSrc}" width="960" height="640" alt="${b.heroAlt || b.headline}" decoding="async" fetchpriority="high">
      </div>`;
  }

  function renderTrustBar() {
    const el = document.getElementById('fastTrustBar');
    if (!el) return;
    el.innerHTML = `
      <div class="container fast-trust-bar__inner">
        ${F.trustSignals.map((item) => `
          <div class="fast-trust-item">
            <span class="fast-trust-item__icon">${ic(item.icon, { size: 22 })}</span>
            <div>
              <strong>${item.label}</strong>
              <span>${item.desc}</span>
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
    const { site, shop } = netinodeUrls();
    el.innerHTML = `
      <div class="container fast-hosting-bar__inner">
        <div class="fast-hosting-bar__text">
          <strong>${note.title}</strong>
          <p>${note.text}</p>
        </div>
        <div class="fast-hosting-bar__actions">
          <a href="${shop}" class="btn btn--yellow fast-hosting-bar__cta" target="_blank" rel="noopener noreferrer">${note.ctaShop || note.cta || 'Shop'}</a>
          <a href="${site}" class="btn btn--outline fast-hosting-bar__cta" target="_blank" rel="noopener noreferrer">${note.ctaSite || 'netinode.net'}</a>
        </div>
      </div>`;
  }

  function scopeHref(item) {
    if (!item) return '#';
    if (item.internal && item.href && !item.href.startsWith('#')) return path(item.href);
    return item.href || '#';
  }

  function renderNav() {
    const el = document.getElementById('fastNav');
    if (!el) return;
    el.setAttribute('aria-label', ui('navAria', 'بخش‌های Fast Web Studio'));
    const links = [
      { id: 'fast-speed', label: ui('navSpeed', 'سرعت'), icon: 'bolt' },
      { id: 'fast-scope', label: ui('navScope', 'خدمات'), icon: 'globe' },
      { id: 'fast-plans', label: ui('navPlans', 'پلن‌ها'), icon: 'coin' },
      { id: 'fast-timeline', label: ui('navTimeline', 'مسیر ۵ روزه'), icon: 'bolt' },
      { id: 'fast-why', label: ui('navWhy', 'چرا Fast'), icon: 'target' },
      { id: 'fast-showcase', label: ui('navShowcase', 'نمونه‌کارها'), icon: 'briefcase' },
      { id: 'fast-guides', label: ui('navGuides', 'راهنما'), icon: 'article' },
      { id: 'fast-faq', label: ui('navFaq', 'سوالات'), icon: 'info' }
    ];
    el.innerHTML = links.map((l, i) =>
      `<a href="#${l.id}" class="fast-nav__item${i === 0 ? ' active' : ''}">${ic(l.icon, { size: 16 })} ${l.label}</a>`
    ).join('');
  }

  function renderSpeed() {
    const el = document.getElementById('fastSpeedGrid');
    if (!el || !Array.isArray(F.speedHighlights)) return;
    el.innerHTML = F.speedHighlights.map(item => `
      <article class="fast-speed-card">
        <span class="fast-speed-card__icon" aria-hidden="true">${ic(item.icon, { size: 28 })}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>`).join('');
  }

  function renderScope() {
    const el = document.getElementById('fastScopeGrid');
    if (!el || !Array.isArray(F.scope)) return;
    el.innerHTML = F.scope.map(item => `
      <a href="${scopeHref(item)}" class="fast-scope-card">
        <span class="fast-scope-card__icon" aria-hidden="true">${ic(item.icon, { size: 28 })}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <span class="fast-scope-card__cta">${item.cta || ui('viewCase', 'مشاهده')}${arrow()}</span>
      </a>`).join('');
  }

  function renderDeliverables() {
    const el = document.getElementById('fastDeliverablesGrid');
    if (!el || !Array.isArray(F.deliverables)) return;
    el.innerHTML = F.deliverables.map(item => `
      <article class="fast-deliverable">
        <span class="fast-deliverable__icon" aria-hidden="true">${ic(item.icon, { size: 26 })}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>`).join('');
  }

  function renderGuides() {
    const el = document.getElementById('fastGuidesGrid');
    if (!el || !Array.isArray(F.guides)) return;
    el.innerHTML = F.guides.map(g => `
      <a href="${path(g.href)}" class="fast-guide-card">
        <div class="fast-guide-card__media">
          <img src="${path(g.image)}" alt="" width="400" height="210" loading="lazy">
        </div>
        <div class="fast-guide-card__body">
          <strong>${g.title}</strong>
          <span>${g.desc}</span>
          <em>${ui('readGuide', 'ادامه مطلب')}${arrow()}</em>
        </div>
      </a>`).join('');
  }

  function planBtnClass(accent) {
    const map = { green: 'btn--green', orange: 'btn--orange', blue: 'btn--yellow' };
    return map[accent] || 'btn--primary';
  }

  function renderPlans() {
    const el = document.getElementById('fastPlansGrid');
    if (!el) return;
    el.innerHTML = F.plans.map((p) => {
      const off = savePercent(p.oldPrice, p.price);
      return `
      <article class="fast-plan-card${p.featured ? ' fast-plan-card--featured' : ''}">
        ${p.ribbon ? `<span class="fast-plan-card__ribbon">${p.ribbon}</span>` : ''}
        <div class="fast-plan-card__preview">${planPreview(p.visual)}</div>
        <header class="fast-plan-card__head">
          <h3>${p.name}</h3>
          <p>${p.subtitle}</p>
        </header>
        <div class="fast-plan-card__price">
          <span class="fast-plan-card__old">$${p.oldPrice}</span>
          <span class="fast-plan-card__current">$${p.price}</span>
          ${off ? `<span class="fast-plan-card__save">${ui('saveOff', '٪{n} تخفیف راه‌اندازی').replace('{n}', off)}</span>` : ''}
          <span class="fast-plan-card__period">${ui('oneTime', 'پرداخت یک‌باره')}</span>
        </div>
        <ul class="fast-plan-card__features">
          ${p.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>
        <footer class="fast-plan-card__foot">
          <a href="${whatsappHref(p.id)}" class="btn ${planBtnClass(p.accent)} fast-plan-order" data-plan="${p.id}">${ui('orderWa', 'سفارش در واتساپ')}</a>
          <a href="${contactUrl(p.id)}" class="fast-plan-contact">${ui('orContact', 'یا فرم تماس')}${arrow()}</a>
        </footer>
      </article>`;
    }).join('');
  }

  function cellValue(val) {
    if (val === true) return window.BD_ICON
      ? `<span class="fast-compare-yes" aria-hidden="true">${window.BD_ICON('check', { size: 16 })}</span>`
      : '<span class="fast-compare-yes" aria-hidden="true"></span>';
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
          ${F.compareRows.map((row) => `
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
    el.className = 'fast-path';
    el.setAttribute('aria-label', ui('navTimeline', 'مسیر ۵ روزه'));
    el.innerHTML = F.timeline.map((s) => `
      <li class="fast-path__step">
        <span class="fast-path__num">${s.num}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </li>
    `).join('');
  }

  function renderWhy() {
    const el = document.getElementById('fastWhyGrid');
    if (!el) return;
    el.innerHTML = F.whyChoose.map((w) => `
      <div class="fast-why-card">
        <span class="fast-why-card__icon">${ic(w.icon, { size: 22 })}</span>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
      </div>
    `).join('');
  }

  function renderShowcase() {
    const el = document.getElementById('fastShowcaseGrid');
    if (!el) return;
    el.innerHTML = F.showcases.map((s) => {
      const url = showcaseUrl(s);
      const ext = !s.internal;
      const thumb = s.thumb ? path(s.thumb) : '';
      return `
        <a href="${url}" class="fast-showcase-card"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>
          ${thumb ? `<span class="fast-showcase-card__thumb"><img src="${thumb}" alt="" width="160" height="80" loading="lazy"></span>` : ''}
          <span class="fast-showcase-card__cat">${s.category}</span>
          <strong>${s.name}</strong>
          <span class="fast-showcase-card__link">${ui('viewCase', 'مشاهده')}${arrow()}</span>
        </a>`;
    }).join('');
  }

  function renderFaq() {
    const el = document.getElementById('fastFaqList');
    if (!el) return;
    el.innerHTML = F.faq.map((item) => `
      <details class="fast-faq__item">
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `).join('');
  }

  function setupWaLinks() {
    document.querySelectorAll('.fast-plan-order, .fast-wa-cta').forEach((btn) => {
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

  function setupNavSpy() {
    const nav = document.getElementById('fastNav');
    if (!nav || !('IntersectionObserver' in window)) return;
    const items = [...nav.querySelectorAll('.fast-nav__item')];
    const ids = items.map((a) => a.getAttribute('href')?.slice(1)).filter(Boolean);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const setActive = (id) => {
      items.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    };

    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActive(visible.target.id);
    }, { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.4] });

    sections.forEach((s) => obs.observe(s));
  }

  function injectFaqSchema() {
    if (!window.injectJsonLd && !document.head) return;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: F.faq.map((item) => ({
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

  function renderDevCta() {
    const el = document.getElementById('fastDevCta');
    if (!el) return;
    const title = t('fastPage.devCta.title', 'نیاز به برنامه‌نویسی تخصصی دارید؟');
    const desc = t('fastPage.devCta.desc', 'فراتر از پلن‌های Fast — پروژه سفارشی، CRM، فروشگاه پیشرفته و مشاوره فنی.');
    const btn = t('fastPage.devCta.btn', ui('btnDevConsult', 'برنامه‌نویسی تخصصی و مشاوره — تماس بگیرید'));
    el.innerHTML = `
      <div class="fast-dev-cta">
        <div class="fast-dev-cta__text">
          <h2>${title}</h2>
          <p>${desc}</p>
        </div>
        <a href="${customDevUrl()}" class="btn btn--yellow">${btn}</a>
      </div>`;
  }

  window.initFastPage = function () {
    F = (window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.getFastCatalog) ? window.BIZDAVAR_I18N.getFastCatalog() : window.FAST_CATALOG;
    renderHero();
    renderTrustBar();
    renderHostingBar();
    renderNav();
    renderSpeed();
    renderScope();
    renderPlans();
    renderDevCta();
    renderCompare();
    renderTimeline();
    renderWhy();
    renderDeliverables();
    renderShowcase();
    renderGuides();
    renderFaq();
    setupWaLinks();
    setupSticky();
    setupNavSpy();
    injectFaqSchema();
    if (window.initDataIcons) initDataIcons();
  };

  window.renderFastRelatedLinks = function () {
    const links = window.BIZDAVAR_I18N?.raw('fastPage.relatedLinks') || [
      { title: 'مقاله Fast Studio', url: 'articles/fast-studio', desc: 'راهنمای سفارش' },
      { title: 'وب و اپ اختصاصی', url: 'custom-web-app', desc: 'پروژه سفارشی' },
      { title: 'خدمات طراحی وب', url: 'services#web-design', desc: 'جزئیات خدمات' },
      { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' }
    ];
    if (typeof window.renderRelatedLinks === 'function') {
      window.renderRelatedLinks(links);
    }
  };

  window.injectFastProductSchema = function () {
    if (typeof window.injectServiceProductSchema !== 'function') return;
    const fb = {
      description: 'طراحی سایت حرفه‌ای در ۵ روز — پلن‌های شفاف، واتساپ فارسی و پشتیبانی پس از راه‌اندازی.',
      offers: [
        { name: 'پلن پایه', price: '99' },
        { name: 'پلن فروشگاهی', price: '199' },
        { name: 'پلن حرفه‌ای', price: '299' }
      ]
    };
    const schema = window.BIZDAVAR_I18N?.raw('fastPage.schema');
    const data = schema && typeof schema === 'object' ? schema : fb;
    window.injectServiceProductSchema({
      name: 'Fast Web Studio',
      description: data.description || fb.description,
      url: 'pages/fast',
      areaServed: ['IR', 'TR', 'AM', 'AE', 'DE'],
      offers: (data.offers || fb.offers).map((o) => ({ ...o, currency: 'USD' }))
    });
  };
})();
