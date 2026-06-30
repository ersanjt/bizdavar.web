/**

 * Shared renderer for industrial supply brand pages (Gamak, Digi System, Teraoka, …)

 */

window.createSupplyBrandPage = function (cfg) {

  const { prefix, catalogKey, brandName, schemaId, schemaListName } = cfg;

  const catalog = () => {
    if (window.BIZDAVAR_I18N?.getSupplyCatalog) {
      return window.BIZDAVAR_I18N.getSupplyCatalog(catalogKey);
    }
    const base = window[catalogKey];
    return window.BIZDAVAR_I18N?.normalizeSupplyCatalog
      ? window.BIZDAVAR_I18N.normalizeSupplyCatalog(base)
      : base;
  };

  if (!window[catalogKey]) return;



  const path = (r) => window.resolvePath(r);

  const R = window.BIZDAVAR_CONFIG?.routes || {};

  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');

  const arrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : ' ←');

  const elId = (name) => `${prefix}${name.charAt(0).toUpperCase()}${name.slice(1)}`;

  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(`supplyBrand.${key}`, fb) : fb);
  const locale = () => (window.BIZDAVAR_I18N?.locale || 'fa');
  const isFa = () => locale() === 'fa';



  function inquiryUrl(productName) {

    const base = path(R.contact || 'pages/contact.html');

    const tpl = t('inquiryTemplate', catalog().inquiryTemplate || 'استعلام {product}').replace('{product}', productName);

    return `${base}?service=industrial&product=${encodeURIComponent(productName)}&message=${encodeURIComponent(tpl)}`;

  }



  function whatsappUrl(message) {

    if (window.getWhatsappUrl) return window.getWhatsappUrl(message);

    return inquiryUrl('');

  }



  function navHref(id) {

    const map = {

      trust: `${prefix}-trust`,

      buy: `${prefix}-buy`,

      highlights: `${prefix}-highlights`,

      catalog: `${prefix}-catalog`,

      iran: `${prefix}-iran`,

      supply: `${prefix}-supply`,

      faq: `${prefix}-faq`

    };

    if (map[id]) return `#${map[id]}`;

    return `#${prefix}-cat-${id}`;

  }



  function renderHero() {

    const el = document.getElementById(elId('HeroContent'));

    if (!el) return;

    const b = catalog().brand;

    const stats = b.heroStats || [];



    el.innerHTML = `

      <div class="${prefix}-hero__content">

        <img class="${prefix}-hero__logo" src="${path(b.logo)}" alt="${b.logoAlt || brandName}" width="200" height="56" loading="eager">

        <span class="${prefix}-hero__eyebrow">${b.heroEyebrow}</span>

        <h1 class="${prefix}-hero__title"><span>${b.heroHeadline}</span></h1>

        <p class="${prefix}-hero__subtitle">${b.heroHeadlineSub}</p>

        <span class="${prefix}-hero__badge">${b.tagline || b.taglineFa} — ${b.since}</span>

        <p class="${prefix}-hero__desc">${b.description || b.descriptionFa}</p>

        ${stats.length ? `

        <div class="${prefix}-hero__stats">

          ${stats.map(s => `<div class="${prefix}-hero__stat"><strong>${s.value}</strong><span>${s.label}</span></div>`).join('')}

        </div>` : ''}

        <div class="hero__actions mt-24">

          <a href="${inquiryUrl(brandName)}" class="btn btn--yellow">${t('inquiryCta', 'استعلام قیمت و تامین')}</a>

          <a href="#${prefix}-trust" class="btn btn--primary">${t('whyBuyCta', 'چرا از بیزدوار بخرید؟')}</a>

        </div>

      </div>

      <div class="${prefix}-hero__visual">

        <img src="${path(b.heroImage)}" alt="${b.heroImageAlt || brandName}" width="480" height="320" loading="eager">

      </div>`;

  }



  function renderTrustBar() {

    const el = document.getElementById(elId('TrustBar'));

    if (!el || !catalog().trustSignals) return;

    el.innerHTML = `

      <div class="container ${prefix}-trust-bar__inner">

        ${catalog().trustSignals.map(item => `

          <div class="${prefix}-trust-item">

            <span class="${prefix}-trust-item__icon">${ic(item.icon, { size: 22 })}</span>

            <div><strong>${item.label}</strong><span>${item.desc}</span></div>

          </div>

        `).join('')}

      </div>`;

  }



  function renderWhyBuy() {

    const el = document.getElementById(elId('WhyGrid'));

    if (!el || !catalog().whyBuyFromUs) return;

    el.innerHTML = catalog().whyBuyFromUs.map(w => `

      <div class="${prefix}-why-card">

        <span class="${prefix}-why-card__icon">${ic(w.icon, { size: 28 })}</span>

        <h3>${w.title}</h3>

        <p>${w.desc}</p>

      </div>

    `).join('');

  }



  function renderPurchaseSteps() {

    const el = document.getElementById(elId('PurchaseSteps'));

    if (!el || !catalog().purchaseSteps) return;

    el.innerHTML = catalog().purchaseSteps.map(s => `

      <div class="${prefix}-step">

        <span class="${prefix}-step__num">${s.num}</span>

        <h3>${s.title}</h3>

        <p>${s.desc}</p>

      </div>

    `).join('');

  }



  function renderHighlights() {

    const el = document.getElementById(elId('Highlights'));

    if (!el || !catalog().highlights) return;

    el.innerHTML = catalog().highlights.map(h => {

      const name = h.inquiryName || h.title;

      return `

        <article class="${prefix}-highlight-card">

          <div class="${prefix}-highlight-card__media">

            <img src="${path(h.image)}" alt="${h.imageAlt || h.titleTr || h.title}" width="280" height="160" loading="lazy">

          </div>

          <div class="${prefix}-highlight-card__body">

            <span class="${prefix}-highlight-card__badge">${h.badge}</span>

            <small class="${prefix}-highlight-card__tr" dir="ltr">${isFa() ? (h.titleTr || '') : ''}</small>

            <h3>${h.title}</h3>

            <p>${h.desc}</p>

            ${h.useCase ? `<p class="${prefix}-highlight-card__usecase"><strong>${t('useCaseLabel', 'کاربرد:')}</strong> ${h.useCase}</p>` : ''}

            <a href="${inquiryUrl(name)}" class="btn btn--yellow ${prefix}-btn-inquiry">${t('requestInquiry', 'درخواست استعلام')}</a>

          </div>

        </article>`;

    }).join('');

  }



  function renderCatNav() {

    const el = document.getElementById(elId('CatNav'));

    if (!el) return;

    const links = [

      { id: 'trust', label: t('navTrust', 'چرا بیزدوار'), icon: 'target' },

      { id: 'buy', label: t('navBuy', 'مسیر خرید'), icon: 'list' },

      { id: 'highlights', label: t('navHighlights', 'محصولات شاخص'), icon: 'sensor' },

      ...catalog().categories.map(c => ({ id: c.id, label: c.title, icon: c.icon })),

      { id: 'iran', label: t('navIran', 'صنایع ایران'), icon: 'factory' },

      { id: 'faq', label: t('navFaq', 'سوالات'), icon: 'info' }

    ];

    el.innerHTML = links.map((c, i) =>

      `<a href="${navHref(c.id)}" class="${prefix}-cat-nav__item${i === 0 ? ' active' : ''}">${ic(c.icon, { size: 18 })} ${c.label}</a>`

    ).join('');

  }



  function renderCategories() {

    const el = document.getElementById(elId('Categories'));

    if (!el) return;

    el.innerHTML = catalog().categories.map(cat => `

      <div class="${prefix}-category-block" id="${prefix}-cat-${cat.id}">

        <div class="${prefix}-category-block__head">

          <div class="${prefix}-category-block__visual">

            <img src="${path(cat.image)}" alt="${cat.imageAlt || cat.titleTr}" width="200" height="120" loading="lazy">

          </div>

          <div class="${prefix}-category-block__info">

            <span class="${prefix}-category-block__icon">${ic(cat.icon, { size: 36 })}</span>

            <div>

              <h2>${cat.title}</h2>

              <small>${isFa() ? cat.titleTr : ''}</small>

              <p>${cat.desc}</p>

              <a href="${inquiryUrl(cat.title)}" class="btn btn--yellow ${prefix}-btn-inquiry">${t('inquiryCategory', 'استعلام این دسته')}</a>

            </div>

          </div>

        </div>

        <div class="${prefix}-series-grid">

          ${cat.series.map(s => `

            <div class="${prefix}-series-card${s.featured ? ` ${prefix}-series-card--featured` : ''}">

              <strong>${s.name}</strong>

              <span>${s.note}</span>

              ${s.featured ? `<a href="${inquiryUrl(s.name)}" class="${prefix}-series-card__link">${t('inquirySeries', 'استعلام')}${arrow()}</a>` : ''}

            </div>

          `).join('')}

        </div>

      </div>

    `).join('');

  }



  function renderIranIndustries() {

    const el = document.getElementById(elId('IranGrid'));

    if (!el || !catalog().iranIndustries) return;

    el.innerHTML = catalog().iranIndustries.map(ind => `

      <div class="${prefix}-iran-card">

        <div class="${prefix}-iran-card__media">

          <img src="${path(ind.image)}" alt="${ind.imageAlt || ind.name}" width="320" height="180" loading="lazy">

        </div>

        <div class="${prefix}-iran-card__body">

          <span class="${prefix}-iran-card__icon">${ic(ind.icon, { size: 20 })}</span>

          <h3>${ind.name}</h3>

          <p>${ind.desc}</p>

        </div>

      </div>

    `).join('');

  }



  function renderIndustries() {

    const el = document.getElementById(elId('Industries'));

    if (!el || !catalog().industries) return;

    el.innerHTML = catalog().industries.map(i => `

      <div class="${prefix}-industry-card">

        <div class="${prefix}-industry-card__media">

          <img src="${path(i.image)}" alt="${i.imageAlt || i.nameTr || i.name}" width="200" height="120" loading="lazy">

        </div>

        <span class="${prefix}-industry-card__icon">${ic(i.icon, { size: 22 })}</span>

        <strong>${i.name}</strong>

        <small>${isFa() ? i.nameTr : ''}</small>

        <p>${i.desc}</p>

      </div>

    `).join('');

  }



  function renderAcademy() {

    const el = document.getElementById(elId('Academy'));

    if (!el || !catalog().academy) return;

    const a = catalog().academy;

    el.innerHTML = `

      <div class="${prefix}-academy-block__visual">

        <img src="${path(a.image)}" alt="${a.imageAlt || brandName}" width="360" height="240" loading="lazy">

        ${a.imageSecondary ? `<img src="${path(a.imageSecondary)}" alt="${a.imageSecondaryAlt || brandName}" width="360" height="240" loading="lazy" class="${prefix}-academy-block__visual-secondary">` : ''}

      </div>

      <div class="${prefix}-academy-block__content">

        <h3>${a.title}</h3>

        <p>${a.desc || a.descFa}</p>

        <ul class="${prefix}-academy-topics">${a.topics.map(topic => `<li>${topic}</li>`).join('')}</ul>

        <a href="${inquiryUrl(brandName)}" class="btn btn--yellow mt-16">${t('techConsultCta', 'درخواست مشاوره فنی')}</a>

      </div>`;

  }



  function renderSupply() {

    const el = document.getElementById(elId('SupplyList'));

    if (!el || !catalog().services) return;

    el.innerHTML = catalog().services.map(s => `

      <div class="${prefix}-supply-card"><h4>${s.title}</h4><p>${s.desc}</p></div>

    `).join('');

  }



  function renderFaq() {

    const el = document.getElementById(elId('Faq'));

    if (!el || !catalog().faq) return;

    el.innerHTML = catalog().faq.map((item, i) => `

      <details class="${prefix}-faq__item"${i === 0 ? ' open' : ''}>

        <summary>${item.q}</summary>

        <p>${item.a}</p>

      </details>

    `).join('');

  }



  function setupCtas() {

    const msg = t('inquiryTemplate', catalog().inquiryTemplate || 'استعلام {product}').replace('{product}', brandName);

    const wa = document.getElementById(elId('CtaWhatsapp'));

    if (wa) {

      wa.href = whatsappUrl(msg);

      wa.addEventListener('click', e => {

        if (!window.BIZDAVAR_CONFIG?.contact?.whatsapp) {

          e.preventDefault();

          window.location.href = inquiryUrl(brandName);

        }

      });

    }

    const sticky = document.getElementById(elId('StickyCta'));

    if (sticky) {

      sticky.hidden = false;

      const hero = document.querySelector(`.${prefix}-hero`);

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



  window[cfg.initFn] = function () {

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



  window[cfg.schemaFn] = function () {

    const C = window.BIZDAVAR_CONFIG;

    if (!C || !catalog().categories) return;

    const items = catalog().categories.flatMap(cat =>

      cat.series.map(s => ({

        '@type': 'Product',

        name: `${s.name} — ${brandName}`,

        description: s.note,

        brand: { '@type': 'Brand', name: brandName },

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

      name: schemaListName,

      description: catalog().brand.description || catalog().brand.descriptionFa,

      numberOfItems: items.length,

      itemListElement: items.slice(0, 50).map((item, i) => ({

        '@type': 'ListItem',

        position: i + 1,

        item

      }))

    };

    let script = document.getElementById(schemaId);

    if (!script) {

      script = document.createElement('script');

      script.id = schemaId;

      script.type = 'application/ld+json';

      document.head.appendChild(script);

    }

    script.textContent = JSON.stringify(ld);

  };

};

