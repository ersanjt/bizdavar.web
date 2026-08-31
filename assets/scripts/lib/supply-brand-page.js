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
  const pagePath = (r) => (window.resolvePagePath || path)(r);

  const R = window.BIZDAVAR_CONFIG?.routes || {};

  const ic = (name, opts) => (window.BD_ICON ? window.BD_ICON(name, opts) : '');

  const arrow = () => (window.BD_LINK_ARROW ? window.BD_LINK_ARROW() : ' ←');

  const elId = (name) => `${prefix}${name.charAt(0).toUpperCase()}${name.slice(1)}`;

  const t = (key, fb) => (window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t(`supplyBrand.${key}`, fb) : fb);
  const locale = () => (window.BIZDAVAR_I18N?.locale || 'fa');
  const isFa = () => locale() === 'fa';

  function offerPrice(item) {
    if (!item) return null;
    if (item.priceEur != null && item.priceEur !== '' && !Number.isNaN(Number(item.priceEur))) {
      return { amount: Number(item.priceEur), currency: 'EUR', symbol: '€' };
    }
    if (item.priceUsd != null && item.priceUsd !== '' && !Number.isNaN(Number(item.priceUsd))) {
      return { amount: Number(item.priceUsd), currency: 'USD', symbol: '$' };
    }
    return null;
  }

  function formatOfferAmount(p) {
    const n = p.amount % 1 ? p.amount.toFixed(2) : String(Math.round(p.amount));
    return p.symbol + Number(n).toLocaleString('en-US');
  }

  function priceHtml(item, kind) {
    const p = offerPrice(item);
    if (!p) return '';
    const label = item.priceFrom
      ? t('priceFrom', 'شروع از')
      : (p.currency === 'EUR' ? t('priceSellLabel', 'قیمت فروش') : t('approxPrice', 'تقریبی'));
    if (kind === 'div') {
      return `<div class="${prefix}-price"><span class="${prefix}-price__label">${label}</span><strong dir="ltr">${formatOfferAmount(p)}</strong></div>`;
    }
    return `<span class="${prefix}-series-card__price" dir="ltr">${formatOfferAmount(p)}</span>`;
  }

  function isRemoteMedia(u) {
    return !u || /^https?:/i.test(u) || /liquimolyturkey\.com|shop\.egemot\.com\.tr/i.test(u);
  }

  function localMedia(src, fallback) {
    const logo = catalog().brand?.logo || 'assets/images/brand/bizdavar-logo-square.png';
    if (!isRemoteMedia(src)) return src;
    if (!isRemoteMedia(fallback)) return fallback;
    return logo;
  }

  function mediaSrc(src, fallback) {
    const primary = path(localMedia(src, fallback));
    const fb = path(localMedia(fallback, catalog().brand?.logo || 'assets/images/brand/bizdavar-logo-square.png'));
    return { primary, fallback: fb };
  }

  function imgTag(src, alt, attrs) {
    const a = attrs || {};
    const { primary, fallback } = mediaSrc(src, a.fallback);
    const w = a.width || 280;
    const h = a.height || 160;
    const cls = a.className ? ` class="${a.className}"` : '';
    return `<img src="${primary}" alt="${alt || 'Bizdavar'}" width="${w}" height="${h}" loading="lazy" decoding="async"${cls} onerror="if(this.dataset.fbk!=='1'){this.dataset.fbk='1';this.src='${fallback}';}else{this.classList.add('is-broken');}">`;
  }

  function localizedTitle(item) {
    const lang = locale();
    if (lang === 'tr') return item.titleTr || item.titleEn || item.title || item.name || '';
    if (lang === 'en') return item.titleEn || item.title || item.name || '';
    if (lang === 'ru') return item.titleRu || item.titleEn || item.title || item.name || '';
    if (lang === 'ar') return item.titleAr || item.titleEn || item.title || item.name || '';
    return item.titleFa || item.title || item.name || '';
  }


  function inquiryUrl(productName) {

    const base = pagePath(R.contact || 'pages/contact.html');

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

      quote: `${prefix}-quote`,

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

    const msg = t('inquiryTemplate', catalog().inquiryTemplate || 'استعلام {product}').replace('{product}', brandName);

    const hasQuote = !!catalog().quoteChecklist && !!document.getElementById(`${prefix}-quote`);



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

          <a href="${whatsappUrl(msg)}" class="btn btn--green" target="_blank" rel="noopener noreferrer">${ic('whatsapp', { size: 18, variant: 'white' })} ${t('whatsappInquiry', 'استعلام در واتساپ')}</a>

          <a href="${inquiryUrl(brandName)}" class="btn btn--yellow">${t('inquiryCta', 'استعلام قیمت و تامین')}</a>

          ${hasQuote

            ? `<a href="#${prefix}-quote" class="btn btn--primary">${t('quoteGuideCta', 'راهنمای استعلام')}</a>`

            : `<a href="#${prefix}-trust" class="btn btn--primary">${t('whyBuyCta', 'چرا از بیزدوار بخرید؟')}</a>`}

        </div>

      </div>

      <div class="${prefix}-hero__visual">

        <img src="${path(b.heroImage)}" alt="${b.heroImageAlt || brandName}" width="480" height="320" loading="eager" decoding="async" fetchpriority="high">

      </div>`;

  }



  function renderQuickSeries() {

    const el = document.getElementById(elId('QuickSeries'));

    const items = catalog().quickSeries;

    if (!el || !items?.length) return;

    el.innerHTML = `

      <div class="container">

        <div class="${prefix}-quick-series" role="list">

          ${items.map(s => {

            const href = s.href || (s.anchor === 'cat' ? `#${prefix}-cat-${s.id}` : `#${prefix}-hl-${s.id}`);

            return `

            <a href="${href}" class="${prefix}-quick-series__item" role="listitem">

              <strong>${s.name}</strong>

              <span class="${prefix}-quick-series__tag">${s.tag}</span>

              <span class="${prefix}-quick-series__hint">${s.hint}</span>

            </a>`;

          }).join('')}

        </div>

      </div>`;

  }



  function renderQuoteChecklist() {

    const el = document.getElementById(elId('QuoteChecklist'));

    const q = catalog().quoteChecklist;

    if (!el || !q) return;

    const msg = t('inquiryTemplate', catalog().inquiryTemplate || 'استعلام {product}').replace('{product}', brandName);

    el.innerHTML = `

      <div class="${prefix}-quote-box">

        <div class="${prefix}-quote-box__content">

          <h3>${q.title}</h3>

          <p>${q.desc}</p>

          <ul class="${prefix}-quote-box__list">

            ${(q.items || []).map(item => `<li>${item}</li>`).join('')}

          </ul>

          ${q.tip && !/۴۷|47|لیر\s*÷|TRY\s*÷|نرخ\s*۱|1\s*USD\s*=\s*47/i.test(String(q.tip)) ? `<p class="${prefix}-quote-box__tip">${q.tip}</p>` : ''}

        </div>

        <div class="${prefix}-quote-box__actions">

          <a href="${whatsappUrl(msg)}" class="btn btn--green" target="_blank" rel="noopener noreferrer">${ic('whatsapp', { size: 18, variant: 'white' })} ${t('whatsappInquiry', 'ارسال در واتساپ')}</a>

          <a href="${inquiryUrl(brandName)}" class="btn btn--yellow">${t('inquiryCta', 'فرم استعلام')}</a>

        </div>

      </div>`;

  }



  function renderTrustBar() {

    const el = document.getElementById(elId('TrustBar'));

    if (!el || !catalog().trustSignals) return;

    el.innerHTML = `

      <div class="container ${prefix}-trust-bar__inner">

        ${catalog().trustSignals.map(item => `

          <div class="${prefix}-trust-item">

            <span class="${prefix}-trust-item__icon">${ic(item.icon, { size: 24 })}</span>

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

      const name = h.inquiryName || localizedTitle(h);
      const title = localizedTitle(h);
      const titleEn = h.titleEn || '';
      const sideLabel = locale() === 'fa' && titleEn && titleEn !== title ? titleEn : '';

      return `

        <article class="${prefix}-highlight-card"${h.id ? ` id="${prefix}-hl-${h.id}"` : ''}>

          <div class="${prefix}-highlight-card__media${h.id === 'safevader' ? ` ${prefix}-highlight-card__media--product` : ''}">

            ${imgTag(h.image, h.imageAlt || title, { width: 280, height: 158, fallback: catalog().brand?.logo })}

          </div>

          <div class="${prefix}-highlight-card__body">

            <span class="${prefix}-highlight-card__badge">${h.badge || ''}</span>

            ${sideLabel && sideLabel !== title ? `<small class="${prefix}-highlight-card__tr" dir="ltr">${sideLabel}</small>` : ''}

            <h3>${title}</h3>

            ${priceHtml(h, 'div')}

            <p class="${prefix}-highlight-card__desc">${h.desc || ''}</p>

            <div class="${prefix}-highlight-card__foot">

              ${(h.useCase || h.useCaseFa) ? `<p class="${prefix}-highlight-card__usecase"><strong>${t('useCaseLabel', 'کاربرد:')}</strong> ${h.useCase || h.useCaseFa}</p>` : ''}

              <div class="${prefix}-highlight-card__actions">

                <a href="${whatsappUrl((catalog().inquiryTemplate || '').replace('{product}', name))}" class="btn btn--green ${prefix}-btn-wa" target="_blank" rel="noopener noreferrer">${ic('whatsapp', { size: 16, variant: 'white' })} ${t('whatsappShort', 'واتساپ')}</a>

                <a href="${inquiryUrl(name)}" class="btn btn--yellow ${prefix}-btn-inquiry">${t('requestInquiry', 'درخواست استعلام')}</a>

              </div>

            </div>

          </div>

        </article>`;

    }).join('');

  }



  function renderCatNav() {

    const el = document.getElementById(elId('CatNav'));

    if (!el) return;

    el.setAttribute('aria-label', t('navAria', `${brandName} product categories`));

    const links = [

      { id: 'trust', label: t('navTrust', 'چرا بیزدوار'), icon: 'target' },

      { id: 'buy', label: t('navBuy', 'مسیر خرید'), icon: 'list' },

      ...(catalog().quoteChecklist ? [{ id: 'quote', label: t('navQuote', 'راهنمای استعلام'), icon: 'document' }] : []),

      { id: 'highlights', label: t('navHighlights', 'محصولات شاخص'), icon: 'sensor' },

      ...catalog().categories.map(c => ({ id: c.id, label: c.title, icon: c.icon })),

      { id: 'iran', label: t('navIran', 'صنایع ایران'), icon: 'factory' },

      { id: 'faq', label: t('navFaq', 'سوالات'), icon: 'info' }

    ];

    el.innerHTML = links.map((c, i) =>

      `<a href="${navHref(c.id)}" class="${prefix}-cat-nav__item${i === 0 ? ' active' : ''}">${ic(c.icon, { size: 18 })} ${c.label}</a>`

    ).join('');

  }



  function officialSeriesUrl(s) {
    if (s.officialUrl) return s.officialUrl;
    if (!s.officialPath) return '';
    const lang = locale() === 'tr' ? 'tr' : 'en';
    return `https://www.prosense.com.tr/${s.officialPath}?lang=${lang}`;
  }

  function renderSeriesCard(cat, s) {
    const qName = s.inquiryName || s.name;
    const search = [s.name, s.note, s.specs, s.inquiryName, s.sku, ...(s.features || [])].filter(Boolean).join(' ').replace(/"/g, '');
    const featured = s.featured ? ` ${prefix}-series-card--featured` : '';
    const rich = (s.features && s.features.length) || s.officialPath || s.officialUrl || s.specs;
    const img = imgTag(s.image, s.imageAlt || `${s.name} — ${brandName}`, {
      width: rich ? 480 : 200,
      height: rich ? 360 : 200,
      className: `${prefix}-series-card__img`,
      fallback: cat.image || catalog().brand?.logo
    });
    if (!rich) {
      return `
            <a href="${inquiryUrl(qName)}" class="${prefix}-series-card${featured} ${prefix}-series-card--link" data-search="${search}">
              <span class="${prefix}-series-card__media">${img}</span>
              <span class="${prefix}-series-card__body">
                <strong>${s.name}</strong>
                <span>${s.note || ''}</span>
                ${priceHtml(s)}
                <span class="${prefix}-series-card__link">${t('inquirySeries', 'استعلام')}${arrow()}</span>
              </span>
            </a>`;
    }
    const gallery = (s.gallery || []).map(g => typeof g === 'string' ? { image: g, imageAlt: s.imageAlt } : g);
    const thumbs = gallery.length > 1 ? `
              <div class="${prefix}-series-card__thumbs" role="list">
                ${gallery.map((g, i) => {
                  const src = path(localMedia(g.image, s.image));
                  const alt = g.imageAlt || s.imageAlt || s.name;
                  return `<button type="button" class="${prefix}-series-card__thumb${i === 0 ? ' is-active' : ''}" data-gallery-src="${src}" data-gallery-alt="${alt}" aria-label="${alt}" role="listitem"><img src="${src}" alt="" width="72" height="72" loading="lazy" decoding="async"></button>`;
                }).join('')}
              </div>` : '';
    const feats = (s.features || []).map(f => `<li>${f}</li>`).join('');
    const off = officialSeriesUrl(s);
    const msg = t('inquiryTemplate', catalog().inquiryTemplate || 'استعلام {product}').replace('{product}', qName);
    const pid = s.id ? ` id="${prefix}-product-${s.id}"` : '';
    return `
            <article class="${prefix}-series-card${featured} ${prefix}-series-card--product"${pid} data-search="${search}">
              <span class="${prefix}-series-card__media">${img}</span>
              ${thumbs}
              <div class="${prefix}-series-card__body">
                ${s.specs ? `<span class="${prefix}-series-card__badge">${s.specs}</span>` : ''}
                <h3 class="${prefix}-series-card__name">${s.name}</h3>
                <p class="${prefix}-series-card__note">${s.note || ''}</p>
                ${priceHtml(s, 'div')}
                ${feats ? `<ul class="${prefix}-series-card__features">${feats}</ul>` : ''}
                <div class="${prefix}-series-card__actions">
                  <a href="${inquiryUrl(qName)}" class="btn btn--yellow ${prefix}-series-card__cta">${t('inquirySeries', 'استعلام')}</a>
                  <a href="${whatsappUrl(msg)}" class="btn btn--green ${prefix}-series-card__cta" target="_blank" rel="noopener noreferrer">${t('whatsappShort', 'واتساپ')}</a>
                </div>
                ${off ? `<a href="${off}" class="${prefix}-series-card__official" target="_blank" rel="noopener noreferrer">${t('officialCatalog', 'کاتالوگ رسمی')}${arrow()}</a>` : ''}
              </div>
            </article>`;
  }

  function renderCategories() {

    const el = document.getElementById(elId('Categories'));

    if (!el) return;

    el.innerHTML = catalog().categories.map(cat => {
      const hasProducts = (cat.series || []).some(s => (s.features && s.features.length) || s.officialPath || s.officialUrl || s.specs);
      return `

      <div class="${prefix}-category-block" id="${prefix}-cat-${cat.id}">

        <div class="${prefix}-category-block__head">

          <div class="${prefix}-category-block__visual">

            ${imgTag(cat.image, cat.imageAlt || cat.title || cat.titleTr || cat.titleEn, { width: 200, height: 120 })}

          </div>

          <div class="${prefix}-category-block__info">

            <span class="${prefix}-category-block__icon">${ic(cat.icon, { size: 36 })}</span>

            <div>

              <h2>${cat.title}</h2>

              <small>${isFa() ? (cat.titleEn || '') : ''}</small>

              <p>${String(cat.desc || '').replace(/\s*[—-]\s*قیمت به دلار(?:\s*\([^)]*\))?/g, '').replace(/\s*\(نرخ[^)]*\)/g, '').replace(/\s*\(1\s*USD\s*=\s*47[^)]*\)/gi, '').trim()}</p>

              <a href="${inquiryUrl(cat.title)}" class="btn btn--yellow ${prefix}-btn-inquiry">${t('inquiryCategory', 'استعلام این دسته')}</a>

            </div>

          </div>

        </div>

        <div class="${prefix}-series-grid${hasProducts ? ` ${prefix}-series-grid--products` : ''}">

          ${(cat.series || []).map(s => renderSeriesCard(cat, s)).join('')}

        </div>

      </div>

    `;
    }).join('');

  }



  function renderIranIndustries() {

    const el = document.getElementById(elId('IranGrid'));

    if (!el || !catalog().iranIndustries) return;

    el.innerHTML = catalog().iranIndustries.map((ind, idx) => `

      <a href="${inquiryUrl(ind.name)}" class="${prefix}-iran-card ${prefix}-iran-card--link ${prefix}-iran-card--tone-${(idx % 4) + 1}" style="--iran-i:${idx}">

        <div class="${prefix}-iran-card__media">

          <img src="${path(ind.image)}" alt="${ind.imageAlt || ind.name}" width="640" height="360" loading="lazy" decoding="async">

        </div>

        <div class="${prefix}-iran-card__body">

          <span class="${prefix}-iran-card__icon">${ic(ind.icon, { size: 20 })}</span>

          <h3>${ind.name}</h3>

          <p>${ind.desc}</p>

          ${ind.models ? `<span class="${prefix}-iran-card__models">${ind.models}</span>` : ''}

          <span class="${prefix}-iran-card__cta">${t('requestInquiry', 'درخواست استعلام')}${arrow()}</span>

        </div>

      </a>

    `).join('');

  }



  function renderIndustries() {

    const el = document.getElementById(elId('Industries'));

    if (!el || !catalog().industries) return;

    el.innerHTML = catalog().industries.map(i => `

      <a href="${inquiryUrl(i.name)}" class="${prefix}-industry-card ${prefix}-industry-card--link">

        <div class="${prefix}-industry-card__media">

          <img src="${path(i.image)}" alt="${i.imageAlt || i.nameTr || i.name}" width="200" height="120" loading="lazy" decoding="async">

        </div>

        <span class="${prefix}-industry-card__icon">${ic(i.icon, { size: 22 })}</span>

        <strong>${i.name}</strong>

        <small>${isFa() ? (i.nameEn || '') : ''}</small>

        <p>${i.desc}</p>

      </a>

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

    const waHref = whatsappUrl(msg);

    const formHref = inquiryUrl(brandName);



    document.querySelectorAll(`#${elId('CtaWhatsapp')}, #${elId('StickyWa')}`).forEach(wa => {

      if (!wa) return;

      wa.href = waHref;

      wa.target = '_blank';

      wa.rel = 'noopener noreferrer';

      wa.addEventListener('click', e => {

        if (!window.BIZDAVAR_CONFIG?.contact?.whatsapp) {

          e.preventDefault();

          window.location.href = formHref;

        }

      });

    });



    document.querySelectorAll(`#${elId('CtaForm')}, #${elId('StickyCta')} a.btn--yellow`).forEach(form => {

      if (form) form.href = formHref;

    });



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



  function setupProductGalleries() {
    const root = document.getElementById(elId('Categories'));
    if (!root) return;
    root.addEventListener('click', (e) => {
      const btn = e.target.closest(`.${prefix}-series-card__thumb`);
      if (!btn) return;
      const src = btn.getAttribute('data-gallery-src');
      const alt = btn.getAttribute('data-gallery-alt');
      const card = btn.closest(`.${prefix}-series-card`);
      const img = card && card.querySelector(`.${prefix}-series-card__img`);
      if (!src || !img) return;
      img.src = src;
      if (alt) img.alt = alt;
      card.querySelectorAll(`.${prefix}-series-card__thumb`).forEach(b => b.classList.toggle('is-active', b === btn));
    });
  }

  function setupCatalogSearch() {
    const input = document.getElementById(elId('CatalogSearch'));
    const root = document.getElementById(elId('Categories'));
    const empty = document.getElementById(elId('CatalogEmpty'));
    if (!input || !root) return;
    input.setAttribute('placeholder', t('catalogSearch', 'جستجو در کاتالوگ…'));
    const run = () => {
      const q = (input.value || '').trim().toLowerCase();
      let visible = 0;
      root.querySelectorAll(`.${prefix}-series-card`).forEach(card => {
        const hay = (card.getAttribute('data-search') || card.textContent || '').toLowerCase();
        const show = !q || hay.includes(q);
        card.hidden = !show;
        if (show) visible += 1;
      });
      root.querySelectorAll(`.${prefix}-category-block`).forEach(block => {
        const any = [...block.querySelectorAll(`.${prefix}-series-card`)].some(c => !c.hidden);
        block.hidden = q ? !any : false;
      });
      if (empty) empty.hidden = !(q && visible === 0);
    };
    input.addEventListener('input', run);
  }

  window[cfg.initFn] = function () {

    renderHero();

    renderTrustBar();

    renderQuickSeries();

    renderCatNav();

    renderWhyBuy();

    renderPurchaseSteps();

    renderQuoteChecklist();

    renderHighlights();

    renderCategories();

    setupProductGalleries();

    setupCatalogSearch();

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

    const baseUrl = (C.siteUrl || 'https://bizdavar.com').replace(/\/$/, '');

    const absImg = (src) => {
      const safe = localMedia(src);
      if (!safe || /^https?:\/\//i.test(safe)) return undefined;
      return `${baseUrl}/${String(safe).replace(/^\//, '')}`;
    };

    const items = catalog().categories.flatMap(cat =>

      cat.series.map(s => {
        const product = {

        '@type': 'Product',

        name: `${s.inquiryName || s.name} — ${brandName}`,

        description: s.note,

        sku: s.sku || undefined,

        brand: { '@type': 'Brand', name: brandName },

        category: cat.title || cat.titleEn || cat.titleTr,

        image: (() => {
          const extras = (s.gallery || []).map(g => absImg(typeof g === 'string' ? g : g.image));
          const imgs = [absImg(s.image || cat.image), ...extras].filter(Boolean);
          const uniq = [...new Set(imgs)];
          return uniq.length > 1 ? uniq : uniq[0];
        })(),

        url: officialSeriesUrl(s) || undefined

        };
        const offer = offerPrice(s);
        if (offer) {
          product.offers = {
            '@type': 'Offer',
            price: String(offer.amount),
            priceCurrency: offer.currency,
            availability: 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: C.siteName }
          };
        }
        return product;
      })

    );

    const locale = window.BIZDAVAR_I18N?.locale || 'fa';
    const listName = schemaListName && typeof schemaListName === 'object'
      ? (schemaListName[locale] || schemaListName.fa || schemaListName.en || brandName)
      : (schemaListName || brandName);

    const ld = {

      '@context': 'https://schema.org',

      '@type': 'ItemList',

      name: listName,

      description: catalog().brand.description || catalog().brand.descriptionFa,

      inLanguage: locale === 'tr' ? 'tr-TR' : locale === 'en' ? 'en-US' : locale === 'ru' ? 'ru-RU' : locale === 'ar' ? 'ar-AE' : 'fa-IR',

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

