/**
 * Prosense Products Page — Iranian B2B buyer focus
 */
(function () {
  const P = window.PROSENSE_CATALOG;
  if (!P) return;

  const path = (r) => window.resolvePath(r);
  const R = window.BIZDAVAR_CONFIG?.routes || {};
  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');
  const arrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : ' ←');

  function inquiryUrl(productName) {
    const base = path(R.contact || 'pages/contact.html');
    const tpl = (P.inquiryTemplate || 'استعلام {product}').replace('{product}', productName);
    return `${base}?service=industrial&product=${encodeURIComponent(productName)}&message=${encodeURIComponent(tpl)}`;
  }

  function whatsappUrl(message) {
    if (window.getWhatsappUrl) return window.getWhatsappUrl(message);
    return inquiryUrl('');
  }

  function navHref(id) {
    const map = {
      trust: 'prosense-trust',
      buy: 'prosense-buy',
      highlights: 'prosense-highlights',
      catalog: 'prosense-catalog',
      iran: 'prosense-iran',
      supply: 'prosense-supply',
      faq: 'prosense-faq',
      fixed: 'prosense-cat-fixed',
      portable: 'prosense-cat-portable',
      flame: 'prosense-cat-flame',
      panels: 'prosense-cat-panels',
      parking: 'prosense-cat-parking',
      software: 'prosense-cat-software',
      calibration: 'prosense-cat-calibration',
      other: 'prosense-cat-other'
    };
    return `#${map[id] || 'prosense-catalog'}`;
  }

  function renderHero() {
    const el = document.getElementById('prosenseHeroContent');
    if (!el) return;
    const b = P.brand;

    el.innerHTML = `
      <div class="prosense-hero__content">
        <img class="prosense-hero__logo" src="${path(b.logo)}" alt="Prosense Gaz ve Alev Dedektörleri" width="200" height="56" loading="eager">
        <span class="prosense-hero__eyebrow">${b.heroEyebrow}</span>
        <h1 class="prosense-hero__title"><span>${b.heroHeadline}</span></h1>
        <p class="prosense-hero__subtitle">${b.heroHeadlineSub}</p>
        <span class="prosense-hero__badge">${b.taglineFa} — ${b.since}</span>
        <p class="prosense-hero__desc">${b.descriptionFa}</p>

        <div class="prosense-hero__stats">
          <div class="prosense-hero__stat"><strong>۱۰۰۰+</strong><span>گاز قابل تشخیص</span></div>
          <div class="prosense-hero__stat"><strong>SIL2/3</strong><span>گواهی ایمنی</span></div>
          <div class="prosense-hero__stat"><strong>۱۲+ سال</strong><span>تجربه بیزدوار</span></div>
        </div>

        <div class="hero__actions mt-24">
          <a href="${inquiryUrl('Prosense')}" class="btn btn--yellow">استعلام قیمت و تامین</a>
          <a href="#prosense-trust" class="btn btn--primary">چرا از بیزدوار بخرید؟</a>
        </div>
      </div>
      <div class="prosense-hero__visual">
        <img src="${path(b.heroImage)}" alt="دتکتور گاز Prosense — PQ Serisi SIL" width="480" height="320" loading="eager">
      </div>`;
  }

  function renderTrustBar() {
    const el = document.getElementById('prosenseTrustBar');
    if (!el || !P.trustSignals) return;
    el.innerHTML = `
      <div class="container prosense-trust-bar__inner">
        ${P.trustSignals.map(t => `
          <div class="prosense-trust-item">
            <span class="prosense-trust-item__icon">${ic(t.icon, { size: 22 })}</span>
            <div>
              <strong>${t.label}</strong>
              <span>${t.desc}</span>
            </div>
          </div>
        `).join('')}
      </div>`;
  }

  function renderWhyBuy() {
    const el = document.getElementById('prosenseWhyGrid');
    if (!el || !P.whyBuyFromUs) return;
    el.innerHTML = P.whyBuyFromUs.map(w => `
      <div class="prosense-why-card">
        <span class="prosense-why-card__icon">${ic(w.icon, { size: 28 })}</span>
        <h3>${w.title}</h3>
        <p>${w.desc}</p>
      </div>
    `).join('');
  }

  function renderPurchaseSteps() {
    const el = document.getElementById('prosensePurchaseSteps');
    if (!el || !P.purchaseSteps) return;
    el.innerHTML = P.purchaseSteps.map(s => `
      <div class="prosense-step">
        <span class="prosense-step__num">${s.num}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  function renderHighlights() {
    const el = document.getElementById('prosenseHighlights');
    if (!el) return;

    el.innerHTML = P.highlights.map(h => {
      const name = h.inquiryName || h.title;
      return `
        <article class="prosense-highlight-card">
          <div class="prosense-highlight-card__media">
            <img src="${path(h.image)}" alt="${h.titleTr || h.title}" width="280" height="160" loading="lazy">
          </div>
          <div class="prosense-highlight-card__body">
            <span class="prosense-highlight-card__badge">${h.badge}</span>
            <small class="prosense-highlight-card__tr" dir="ltr">${h.titleTr || ''}</small>
            <h3>${h.title}</h3>
            <p>${h.desc}</p>
            ${h.useCaseFa ? `<p class="prosense-highlight-card__usecase"><strong>کاربرد:</strong> ${h.useCaseFa}</p>` : ''}
            <a href="${inquiryUrl(name)}" class="btn btn--yellow prosense-btn-inquiry">درخواست استعلام</a>
          </div>
        </article>`;
    }).join('');
  }

  function renderCatNav() {
    const el = document.getElementById('prosenseCatNav');
    if (!el) return;
    const links = [
      { id: 'trust', label: 'چرا بیزدوار', icon: 'target' },
      { id: 'buy', label: 'مسیر خرید', icon: 'list' },
      { id: 'highlights', label: 'محصولات شاخص', icon: 'sensor' },
      ...P.categories.map(c => ({ id: c.id, label: c.title, icon: c.icon })),
      { id: 'iran', label: 'صنایع ایران', icon: 'factory' },
      { id: 'faq', label: 'سوالات', icon: 'info' }
    ];
    el.innerHTML = links.map((c, i) =>
      `<a href="${navHref(c.id)}" class="prosense-cat-nav__item${i === 0 ? ' active' : ''}">${ic(c.icon, { size: 18 })} ${c.label}</a>`
    ).join('');
  }

  function renderCategories() {
    const el = document.getElementById('prosenseCategories');
    if (!el) return;

    el.innerHTML = P.categories.map(cat => `
      <div class="prosense-category-block" id="prosense-cat-${cat.id}">
        <div class="prosense-category-block__head">
          <div class="prosense-category-block__visual">
            <img src="${path(cat.image)}" alt="${cat.titleTr}" width="200" height="120" loading="lazy">
          </div>
          <div class="prosense-category-block__info">
            <span class="prosense-category-block__icon">${ic(cat.icon, { size: 36 })}</span>
            <div>
              <h2>${cat.title}</h2>
              <small>${cat.titleTr}</small>
              <p>${cat.desc}</p>
              <a href="${inquiryUrl(cat.title)}" class="btn btn--yellow prosense-btn-inquiry">استعلام این دسته</a>
            </div>
          </div>
        </div>
        <div class="prosense-series-grid">
          ${cat.series.map(s => `
            <div class="prosense-series-card${s.featured ? ' prosense-series-card--featured' : ''}">
              <strong>${s.name}</strong>
              <span>${s.note}</span>
              ${s.featured ? `<a href="${inquiryUrl(s.name)}" class="prosense-series-card__link">استعلام${arrow()}</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  function renderIranIndustries() {
    const el = document.getElementById('prosenseIranGrid');
    if (!el || !P.iranIndustries) return;
    el.innerHTML = P.iranIndustries.map(ind => `
      <div class="prosense-iran-card">
        <div class="prosense-iran-card__media">
          <img src="${path(ind.image)}" alt="${ind.name}" width="320" height="180" loading="lazy">
        </div>
        <div class="prosense-iran-card__body">
          <span class="prosense-iran-card__icon">${ic(ind.icon, { size: 20 })}</span>
          <h3>${ind.name}</h3>
          <p>${ind.desc}</p>
        </div>
      </div>
    `).join('');
  }

  function renderIndustries() {
    const el = document.getElementById('prosenseIndustries');
    if (!el) return;
    el.innerHTML = P.industries.map(i => `
      <div class="prosense-industry-card">
        <div class="prosense-industry-card__media">
          <img src="${path(i.image)}" alt="${i.nameTr}" width="200" height="120" loading="lazy">
        </div>
        <span class="prosense-industry-card__icon">${ic(i.icon, { size: 22 })}</span>
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
      <div class="prosense-academy-block__visual">
        <img src="${path(a.image)}" alt="Prosense üretim" width="360" height="240" loading="lazy">
        <img src="${path(a.imageSecondary)}" alt="Prosense fabrika" width="360" height="240" loading="lazy" class="prosense-academy-block__visual-secondary">
      </div>
      <div class="prosense-academy-block__content">
        <h3>${a.title}</h3>
        <p>${a.descFa}</p>
        <ul class="prosense-academy-topics">
          ${a.topics.map(t => `<li>${t}</li>`).join('')}
        </ul>
        <a href="${inquiryUrl('Prosense')}" class="btn btn--yellow mt-16">درخواست مشاوره فنی</a>
      </div>`;
  }

  function renderSupply() {
    const el = document.getElementById('prosenseSupplyList');
    if (!el) return;
    el.innerHTML = P.services.map(s => `
      <div class="prosense-supply-card">
        <h4>${s.title}</h4>
        <p>${s.desc}</p>
      </div>
    `).join('');
  }

  function renderFaq() {
    const el = document.getElementById('prosenseFaq');
    if (!el || !P.faq) return;
    el.innerHTML = P.faq.map((item, i) => `
      <details class="prosense-faq__item"${i === 0 ? ' open' : ''}>
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `).join('');
  }

  function setupCtas() {
    const msg = (P.inquiryTemplate || '').replace('{product}', 'Prosense');
    const wa = document.getElementById('prosenseCtaWhatsapp');
    if (wa) {
      wa.href = whatsappUrl(msg);
      wa.addEventListener('click', e => {
        if (!window.BIZDAVAR_CONFIG?.contact?.whatsapp) {
          e.preventDefault();
          window.location.href = inquiryUrl('Prosense');
        }
      });
    }

    const sticky = document.getElementById('prosenseStickyCta');
    if (sticky) {
      sticky.hidden = false;
      const hero = document.querySelector('.prosense-hero');
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

  window.initProsensePage = function () {
    renderHero();
    renderTrustBar();
    renderCatNav();
    renderWhyBuy();
    renderPurchaseSteps();
    renderHighlights();
    renderCategories();
    renderIranIndustries();
    renderIndustries();
    renderAcademy();
    renderSupply();
    renderFaq();
    setupCtas();
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
        category: cat.titleTr,
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/PreOrder',
          seller: { '@type': 'Organization', name: C.siteName }
        }
      }))
    );

    const ld = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'تامین دتکتورهای Prosense — بیزدوار گروپ',
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
