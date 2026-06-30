/**
 * VEGA Products Page — Iranian B2B buyer focus
 */
(function () {
  if (!window.VEGA_CATALOG) return;

  const catalog = () => (
    window.BIZDAVAR_I18N?.getSupplyCatalog
      ? window.BIZDAVAR_I18N.getSupplyCatalog('VEGA_CATALOG')
      : window.VEGA_CATALOG
  );
  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(`supplyBrand.${key}`, fb) : fb);
  const isFa = () => (window.BIZDAVAR_I18N?.locale || 'fa') === 'fa';

  const path = (p) => window.resolvePath(p);
  const R = window.BIZDAVAR_CONFIG?.routes || {};
  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const arrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : ' ←');

  function statValue(b, stat) {
    if (stat.valueKey && b[stat.valueKey]) return b[stat.valueKey];
    return stat.value || '';
  }

  function inquiryUrl(productName) {
    const V = catalog();
    const base = path(R.contact || 'pages/contact.html');
    const tpl = (V.inquiryTemplate || t('inquiryTemplate', 'استعلام {product}')).replace('{product}', productName);
    return `${base}?service=industrial&product=${encodeURIComponent(productName)}&message=${encodeURIComponent(tpl)}`;
  }

  function whatsappUrl(message) {
    if (window.getWhatsappUrl) return window.getWhatsappUrl(message);
    return inquiryUrl('');
  }

  function renderHero() {
    const el = document.getElementById('vegaHeroContent');
    if (!el) return;
    const b = catalog().brand;
    const stats = b.heroStats || [
      { valueKey: 'founded', label: 'تجربه برند' },
      { valueKey: 'origin', label: 'تولید آلمان' },
      { value: '12+', label: 'تجربه بیزدوار' }
    ];

    el.innerHTML = `
      <div class="vega-hero__content">
        <img class="vega-hero__logo" src="${path(b.logo)}" alt="VEGA — Home of Values" width="200" height="48" loading="eager">
        <span class="vega-hero__claim">${b.heroClaim || 'HOME OF VALUES'}</span>
        <span class="vega-hero__eyebrow">${b.heroEyebrow}</span>
        <h1 class="vega-hero__title">${b.heroHeadline}</h1>
        <p class="vega-hero__subtitle">${b.heroHeadlineSub}</p>
        <span class="vega-hero__badge">${b.tagline || b.taglineFa} — ${b.name}</span>
        <p class="vega-hero__desc">${b.description || b.descriptionFa}</p>
        <div class="vega-hero__stats">
          ${stats.map(s => `<div class="vega-hero__stat"><strong>${statValue(b, s)}</strong><span>${s.label}</span></div>`).join('')}
        </div>
        <div class="hero__actions mt-24">
          <a href="${inquiryUrl('VEGA')}" class="btn btn--yellow">${t('inquiryCta', 'استعلام قیمت و تامین')}</a>
          <a href="#vega-trust" class="btn btn--primary">${t('whyBuyCta', 'چرا از بیزدوار بخرید؟')}</a>
        </div>
      </div>
      <div class="vega-hero__visual">
        <img src="${path(b.heroImage)}" alt="VEGA process instrumentation" width="520" height="400" loading="eager">
      </div>`;
  }

  function renderTrustBar() {
    const V = catalog();
    const el = document.getElementById('vegaTrustBar');
    if (!el || !V.trustSignals) return;
    el.innerHTML = `
      <div class="container vega-trust-bar__inner">
        ${V.trustSignals.map(item => `
          <div class="vega-trust-item">
            <span class="vega-trust-item__icon">${ic(item.icon, { size: 22 })}</span>
            <div>
              <strong>${item.label}</strong>
              <span>${item.desc}</span>
            </div>
          </div>
        `).join('')}
      </div>`;
  }

  function navHref(id) {
    const map = {
      trust: 'vega-trust',
      buy: 'vega-buy',
      iran: 'vega-iran',
      faq: 'vega-faq',
      level: 'vega-cat-level',
      point: 'vega-cat-level',
      pressure: 'vega-cat-pressure',
      software: 'vega-cat-software',
      accessories: 'vega-cat-accessories'
    };
    return `#${map[id] || 'vega-cat-level'}`;
  }

  function renderCatNav() {
    const V = catalog();
    const el = document.getElementById('vegaCatNav');
    if (!el) return;
    const links = [
      { id: 'trust', label: t('navTrust', 'چرا بیزدوار'), icon: 'target' },
      { id: 'buy', label: t('navBuy', 'مسیر خرید'), icon: 'list' },
      ...V.categories.map(c => ({ id: c.id, label: c.title, icon: c.icon })),
      { id: 'iran', label: t('navIran', 'صنایع ایران'), icon: 'factory' },
      { id: 'faq', label: t('navFaq', 'سوالات'), icon: 'info' }
    ];
    el.innerHTML = links.map((c, i) =>
      `<a href="${navHref(c.id)}" class="vega-cat-nav__item${i === 0 ? ' active' : ''}">${ic(c.icon, { size: 18 })} ${c.label}</a>`
    ).join('');
  }

  function renderWhyBuy() {
    const V = catalog();
    const el = document.getElementById('vegaWhyGrid');
    if (!el || !V.whyBuyFromUs) return;
    el.innerHTML = V.whyBuyFromUs.map(w => `
      <div class="vega-why-card">
        <span class="vega-why-card__icon">${ic(w.icon, { size: 28 })}</span>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
      </div>
    `).join('');
  }

  function renderPurchaseSteps() {
    const V = catalog();
    const el = document.getElementById('vegaPurchaseSteps');
    if (!el || !V.purchaseSteps) return;
    el.innerHTML = V.purchaseSteps.map(s => `
      <div class="vega-step">
        <span class="vega-step__num">${s.num}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  function renderProducts() {
    const V = catalog();
    const el = document.getElementById('vegaProductsGrid');
    if (!el) return;

    el.innerHTML = V.featuredProducts.map(p => `
      <article class="vega-product-card" id="vega-product-${p.id}">
        <div class="vega-product-card__media">
          <img src="${path(p.image)}" alt="${p.imageAlt || `${p.name} — VEGA`}" width="200" height="200" loading="lazy">
        </div>
        <div class="vega-product-card__body">
          <span class="vega-product-card__badge">${p.badge}</span>
          <div class="vega-product-card__series">${p.series}</div>
          <h2 class="vega-product-card__name">${p.name}</h2>
          <p class="vega-product-card__summary">${p.summary || p.summaryFa}</p>
          ${(p.useCase || p.useCaseFa) ? `<p class="vega-product-card__usecase"><strong>${t('useCaseLabel', 'کاربرد:')}</strong> ${p.useCase || p.useCaseFa}</p>` : ''}
          <ul class="vega-product-card__features">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="vega-product-card__tags">
            ${p.applications.map(a => `<span class="vega-product-card__tag">${a}</span>`).join('')}
          </div>
          <div class="vega-product-card__actions">
            <a href="${inquiryUrl(p.name)}" class="btn btn--yellow vega-btn-inquiry">${t('requestInquiry', 'درخواست استعلام')}</a>
            <a href="${p.officialRef}" class="vega-product-card__link" target="_blank" rel="noopener noreferrer">${t('officialCatalog', 'کاتالوگ رسمی')}${arrow()}</a>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderIranIndustries() {
    const V = catalog();
    const el = document.getElementById('vegaIranGrid');
    if (!el || !V.iranIndustries) return;
    el.innerHTML = V.iranIndustries.map(ind => `
      <div class="vega-iran-card">
        <div class="vega-iran-card__media">
          <img src="${path(ind.image)}" alt="${ind.name}" width="320" height="180" loading="lazy">
        </div>
        <div class="vega-iran-card__body">
          <span class="vega-iran-card__icon">${ic(ind.icon, { size: 20 })}</span>
          <h3>${ind.name}</h3>
          <p>${ind.desc}</p>
        </div>
      </div>
    `).join('');
  }

  function renderValueProps() {
    const V = catalog();
    const el = document.getElementById('vegaValueGrid');
    if (!el) return;
    el.innerHTML = V.valueProps.map(v => `
      <div class="vega-value-card">
        <div class="vega-value-card__media">
          <img src="${path(v.image)}" alt="${v.titleEn}" width="320" height="180" loading="lazy">
        </div>
        <div class="vega-value-card__body">
          <small class="vega-value-card__en" dir="ltr">${isFa() ? v.titleEn : ''}</small>
          <h3>${v.title}</h3>
          <p>${v.desc}</p>
        </div>
      </div>
    `).join('');
  }

  function renderIndustries() {
    const V = catalog();
    const el = document.getElementById('vegaIndustriesGrid');
    if (!el) return;
    el.innerHTML = V.industries.map(ind => `
      <div class="vega-industry-item">
        <div class="vega-industry-item__media">
          <img src="${path(ind.image)}" alt="${ind.nameEn}" width="160" height="90" loading="lazy">
        </div>
        <span class="vega-industry-item__icon">${ic(ind.icon, { size: 20 })}</span>
        <strong>${ind.name}</strong>
        <small dir="ltr">${isFa() ? ind.nameEn : ''}</small>
      </div>
    `).join('');
  }

  function renderPrinciples() {
    const V = catalog();
    const el = document.getElementById('vegaPrinciplesGrid');
    if (!el) return;
    el.innerHTML = V.measuringPrinciples.map(p => `
      <div class="vega-principle-item">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </div>
    `).join('');
  }

  function renderDigital() {
    const V = catalog();
    const el = document.getElementById('vegaDigitalBlock');
    if (!el) return;
    const d = V.digitalServices;
    el.innerHTML = `
      <div class="vega-digital-block__visual">
        <img src="${path(d.image)}" alt="VEGA sensor configuration" width="400" height="225" loading="lazy">
      </div>
      <div class="vega-digital-block__content">
        <h3>${d.title}</h3>
        <p>${d.desc || d.descFa}</p>
        <a href="${inquiryUrl('VEGA')}" class="btn btn--yellow mt-16">${t('orderCodeCta', 'درخواست استعلام کد سفارش')}</a>
      </div>
      <ul class="vega-digital-block__list">
        ${d.features.map(f => `<li>${f}</li>`).join('')}
      </ul>`;
  }

  function renderSupply() {
    const V = catalog();
    const el = document.getElementById('vegaSupplyList');
    if (!el) return;
    el.innerHTML = V.bizdavarServices.map(s => `
      <div class="vega-supply-card">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  function renderFaq() {
    const V = catalog();
    const el = document.getElementById('vegaFaq');
    if (!el || !V.faq) return;
    el.innerHTML = V.faq.map((item, i) => `
      <details class="vega-faq__item"${i === 0 ? ' open' : ''}>
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `).join('');
  }

  function setupCtas() {
    const V = catalog();
    const msg = (V.inquiryTemplate || '').replace('{product}', 'VEGA');
    const wa = document.getElementById('vegaCtaWhatsapp');
    if (wa) {
      wa.href = whatsappUrl(msg);
      wa.addEventListener('click', e => {
        if (!window.BIZDAVAR_CONFIG?.contact?.whatsapp) {
          e.preventDefault();
          window.location.href = inquiryUrl('VEGA');
        }
      });
    }

    const sticky = document.getElementById('vegaStickyCta');
    if (sticky) {
      sticky.hidden = false;
      const hero = document.querySelector('.vega-hero');
      if (hero && 'IntersectionObserver' in window) {
        const obs = new IntersectionObserver(([entry]) => {
          sticky.classList.toggle('is-visible', !entry.isIntersecting);
        }, { threshold: 0 });
        obs.observe(hero);
      } else {
        sticky.classList.add('is-visible');
      }
    }
  }

  window.initVegaPage = function () {
    renderHero();
    renderTrustBar();
    renderCatNav();
    renderWhyBuy();
    renderPurchaseSteps();
    renderProducts();
    renderIranIndustries();
    renderValueProps();
    renderPrinciples();
    renderIndustries();
    renderDigital();
    renderSupply();
    renderFaq();
    setupCtas();
  };

  window.injectJsonLdProductList = function () {
    const C = window.BIZDAVAR_CONFIG;
    const V = catalog();
    if (!C || !V.featuredProducts) return;

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'تامین سنسورهای VEGA — بیزدوار گروپ',
      description: V.brand.description || V.brand.descriptionFa,
      numberOfItems: V.featuredProducts.length,
      itemListElement: V.featuredProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          description: p.summary || p.summaryFa,
          image: `${C.baseUrl}/${p.image}`,
          brand: { '@type': 'Brand', name: 'VEGA' },
          category: p.series,
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/PreOrder',
            seller: { '@type': 'Organization', name: C.siteName }
          }
        }
      }))
    };

    let script = document.getElementById('jsonld-vega-products');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-vega-products';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  };
})();
