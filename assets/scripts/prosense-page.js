/**
 * Prosense Products Page — Render
 */
(function () {
  const P = window.PROSENSE_CATALOG;
  if (!P) return;

  const path = (r) => window.resolvePath(r);
  const R = window.BIZDAVAR_CONFIG?.routes || {};
  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');

  function renderHero() {
    const el = document.getElementById('prosenseHeroContent');
    if (!el) return;
    const b = P.brand;
    el.innerHTML = `
      <div class="prosense-hero__content">
        <span class="prosense-hero__badge">${b.tagline} — ${b.since}</span>
        <h1 class="prosense-hero__title">محصولات <span>${b.name}</span><br>دتکتور گاز و شعله</h1>
        <p class="prosense-hero__desc">${b.descriptionFa}</p>
        <div class="prosense-hero__meta">
          <span>${ic('pin', { size: 16 })} ${b.origin}</span>
          <span>${ic('mail', { size: 16 })} ${b.email}</span>
          <span dir="ltr">${ic('phone', { size: 16 })} ${b.phone}</span>
        </div>
        <div class="hero__actions">
          <a href="${path(R.contact)}" class="btn btn--yellow">استعلام و تامین</a>
          <a href="${b.officialUrl}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">وبسایت رسمی Prosense</a>
        </div>
      </div>
      <div class="prosense-hero__visual">
        <img src="${path('assets/images/content/about-hero.svg')}" alt="سیستم‌های gaz algılama Prosense — بیزدوار" width="480" height="320" loading="eager" style="border-radius:16px;object-fit:cover;width:100%;max-height:300px">
      </div>`;
  }

  function renderHighlights() {
    const el = document.getElementById('prosenseHighlights');
    if (!el) return;
    el.innerHTML = P.highlights.map(h => `
      <div class="prosense-highlight-card">
        <span class="prosense-highlight-card__badge">${h.badge}</span>
        <h3>${h.title}</h3>
        <p>${h.desc}</p>
      </div>
    `).join('');
  }

  function renderCatNav() {
    const el = document.getElementById('prosenseCatNav');
    if (!el) return;
    el.innerHTML = P.categories.map(c =>
      `<a href="#prosense-cat-${c.id}" class="prosense-cat-nav__item">${ic(c.icon, { size: 18 })} ${c.title}</a>`
    ).join('');
  }

  function renderCategories() {
    const el = document.getElementById('prosenseCategories');
    if (!el) return;
    el.innerHTML = P.categories.map(cat => `
      <div class="prosense-category-block" id="prosense-cat-${cat.id}">
        <div class="prosense-category-block__head">
          <span class="prosense-category-block__icon">${ic(cat.icon, { size: 36 })}</span>
          <div>
            <h2>${cat.title}</h2>
            <small>${cat.titleTr}</small>
            <p>${cat.desc}</p>
          </div>
        </div>
        <div class="prosense-series-grid">
          ${cat.series.map(s => `
            <div class="prosense-series-card${s.featured ? ' prosense-series-card--featured' : ''}">
              <strong>${s.name}</strong>
              <span>${s.note}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function renderIndustries() {
    const el = document.getElementById('prosenseIndustries');
    if (!el) return;
    el.innerHTML = P.industries.map(i => `
      <div class="prosense-industry-card">
        <span>${ic(i.icon, { size: 22 })}</span>
        <strong>${i.name}</strong>
        <small>${i.nameTr}</small>
        <p>${i.desc}</p>
      </div>
    `).join('');
  }

  function renderAcademy() {
    const el = document.getElementById('prosenseAcademy');
    if (!el) return;
    const a = P.academy;
    el.innerHTML = `
      <h3>${a.title}</h3>
      <p>${a.descFa}</p>
      <ul class="prosense-academy-topics">
        ${a.topics.map(t => `<li>${t}</li>`).join('')}
      </ul>`;
  }

  function renderSupply() {
    const el = document.getElementById('prosenseSupplyList');
    if (!el) return;
    el.innerHTML = P.services.map(s => `<li>${s}</li>`).join('');
  }

  window.initProsensePage = function () {
    renderHero();
    renderHighlights();
    renderCatNav();
    renderCategories();
    renderIndustries();
    renderAcademy();
    renderSupply();
  };

  window.injectProsenseSchema = function () {
    const C = window.BIZDAVAR_CONFIG;
    if (!C) return;
    const items = P.categories.flatMap(cat =>
      cat.series.map(s => ({
        '@type': 'Product',
        name: `${s.name} — Prosense`,
        description: s.note,
        brand: { '@type': 'Brand', name: 'Prosense' },
        category: cat.titleTr
      }))
    );
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'محصولات Prosense — بیزدوار گروپ',
      description: P.brand.descriptionFa,
      numberOfItems: items.length,
      itemListElement: items.slice(0, 50).map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item
      }))
    };
    let script = document.getElementById('jsonld-prosense');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-prosense';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);
  };
})();
