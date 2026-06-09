/**
 * VEGA Products Page — Dynamic render
 */
(function () {
  const V = window.VEGA_CATALOG;
  if (!V) return;

  const path = (p) => window.resolvePath(p);

  function renderHero() {
    const el = document.getElementById('vegaHeroContent');
    if (!el) return;
    const b = V.brand;
    el.innerHTML = `
      <div class="vega-hero__content">
        <span class="vega-hero__badge">تامین‌کننده رسمی — ${b.name}</span>
        <h1 class="vega-hero__title">ابزار دقیق <span>${b.name}</span><br>سطح و فشار صنعتی</h1>
        <p class="vega-hero__desc">${b.descriptionFa}</p>
        <div class="vega-hero__stats">
          <div class="vega-hero__stat"><strong>${b.founded}</strong><span>نوآوری مستمر</span></div>
          <div class="vega-hero__stat"><strong>${b.presence}</strong><span>شبکه جهانی</span></div>
          <div class="vega-hero__stat"><strong>${b.origin}</strong><span>تولید آلمان</span></div>
        </div>
        <div class="hero__actions mt-24">
          <a href="${path(window.BIZDAVAR_CONFIG.routes.contact)}" class="btn btn--yellow">استعلام قیمت و تامین</a>
          <a href="${b.officialUrl}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">وبسایت رسمی VEGA</a>
        </div>
      </div>
      <div class="vega-hero__visual">
        <img src="${path('assets/images/content/global-network-connection-world-map-point-and-line-composition-concept-of-global-business-illustration-vector-300x300.jpg')}" alt="شبکه جهانی تامین VEGA — بیزدوار گروپ" width="400" height="400" loading="eager">
      </div>`;
  }

  function renderCatNav() {
    const el = document.getElementById('vegaCatNav');
    if (!el) return;
    el.innerHTML = V.categories.map((c, i) =>
      `<a href="#vega-cat-${c.id}" class="vega-cat-nav__item${i === 0 ? ' active' : ''}">${c.icon} ${c.title}</a>`
    ).join('');
  }

  function renderProducts() {
    const el = document.getElementById('vegaProductsGrid');
    if (!el) return;
    el.innerHTML = V.featuredProducts.map(p => `
      <article class="vega-product-card" id="vega-product-${p.id}">
        <div class="vega-product-card__media">
          <img src="${path(p.image)}" alt="${p.name} — سنسور VEGA" width="140" height="180" loading="lazy">
        </div>
        <div class="vega-product-card__body">
          <span class="vega-product-card__badge">${p.badge}</span>
          <div class="vega-product-card__series">${p.series}</div>
          <h2 class="vega-product-card__name">${p.name}</h2>
          <p class="vega-product-card__summary">${p.summaryFa}</p>
          <ul class="vega-product-card__features">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <div class="vega-product-card__tags">
            ${p.applications.map(a => `<span class="vega-product-card__tag">${a}</span>`).join('')}
          </div>
          <a href="${p.officialRef}" class="vega-product-card__link" target="_blank" rel="noopener noreferrer">مشاهده در کاتالوگ رسمی VEGA ←</a>
        </div>
      </article>
    `).join('');
  }

  function renderValueProps() {
    const el = document.getElementById('vegaValueGrid');
    if (!el) return;
    el.innerHTML = V.valueProps.map(v => `
      <div class="vega-value-card">
        <h3>${v.title}</h3>
        <p>${v.desc}</p>
      </div>
    `).join('');
  }

  function renderIndustries() {
    const el = document.getElementById('vegaIndustriesGrid');
    if (!el) return;
    el.innerHTML = V.industries.map(ind => `
      <div class="vega-industry-item">
        <span>${ind.icon}</span>
        <strong>${ind.name}</strong>
        <small dir="ltr">${ind.nameEn}</small>
      </div>
    `).join('');
  }

  function renderPrinciples() {
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
    const el = document.getElementById('vegaDigitalBlock');
    if (!el) return;
    const d = V.digitalServices;
    el.innerHTML = `
      <div>
        <h3>${d.title}</h3>
        <p>${d.descFa}</p>
        <a href="${d.url}" class="btn btn--yellow mt-16" target="_blank" rel="noopener noreferrer">ثبت‌نام رایگان myVEGA</a>
      </div>
      <ul>
        ${d.features.map(f => `<li>${f}</li>`).join('')}
      </ul>`;
  }

  function renderSupply() {
    const el = document.getElementById('vegaSupplyList');
    if (!el) return;
    el.innerHTML = V.bizdavarServices.map(s => `<li>${s}</li>`).join('');
  }

  window.initVegaPage = function () {
    renderHero();
    renderCatNav();
    renderProducts();
    renderValueProps();
    renderIndustries();
    renderPrinciples();
    renderDigital();
    renderSupply();
  };

  window.injectJsonLdProductList = function () {
    const C = window.BIZDAVAR_CONFIG;
    if (!C || !V.featuredProducts) return;
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'محصولات VEGA — بیزدوار گروپ',
      description: V.brand.descriptionFa,
      numberOfItems: V.featuredProducts.length,
      itemListElement: V.featuredProducts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Product',
          name: p.name,
          description: p.summaryFa,
          brand: { '@type': 'Brand', name: 'VEGA' },
          category: p.series,
          url: p.officialRef
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
