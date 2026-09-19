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

  function compactHeroSrc(src) {
    return String(src || '').replace(/\.(webp|jpe?g|png)(\?.*)?$/i, '-800.webp');
  }

  function productHref(item) {
    const base = catalog().productBase;
    if (!base || !item || !item.id) return '';
    const rel = String(base).replace(/\/$/, '') + '/' + item.id;
    return pagePath(rel);
  }

  function cardMedia(item, img) {
    const href = productHref(item);
    if (href) return `<a class="${prefix}-series-card__media" href="${href}">${img}</a>`;
    if (item && item.id) return `<button type="button" class="${prefix}-series-card__media" data-product-open="${item.id}">${img}</button>`;
    return `<span class="${prefix}-series-card__media">${img}</span>`;
  }

  function heroImgTag(src, alt) {
    const full = path(src);
    const safeAlt = String(alt || '').replace(/"/g, '&quot;');
    if (/\.svg(\?|#|$)/i.test(full)) {
      return `<img src="${full}" alt="${safeAlt}" width="960" height="640" loading="eager" decoding="async" fetchpriority="high">`;
    }
    const compact = compactHeroSrc(full);
    return `<img src="${compact}" srcset="${compact} 800w, ${compact} 1280w" sizes="(min-width: 901px) 480px, 92vw" alt="${safeAlt}" width="480" height="320" loading="eager" decoding="async" fetchpriority="high" onerror="this.onerror=null;this.removeAttribute('srcset');this.src='${full}'">`;
  }

  function offerPrice(item) {
    if (!item) return null;
    if (item.quoteOnly) return null;
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
    if (!p) {
      if (!(item.quoteOnly || catalog().quoteEmptyPrices)) return '';
      const quote = t('quotePrice', 'استعلام قیمت');
      if (kind === 'div') {
        return `<div class="${prefix}-price ${prefix}-price--quote"><span class="${prefix}-price__label">${quote}</span></div>`;
      }
      return `<span class="${prefix}-series-card__price ${prefix}-series-card__price--quote">${quote}</span>`;
    }
    const label = item.priceFrom
      ? t('priceFrom', 'شروع از')
      : (item.iranDelivery && p.currency === 'USD'
        ? t('priceIranLabel', 'تحویل ایران')
        : (p.currency === 'EUR' ? t('priceSellLabel', 'قیمت فروش') : t('approxPrice', 'تقریبی')));
    if (kind === 'div') {
      return `<div class="${prefix}-price"><span class="${prefix}-price__label">${label}</span><strong dir="ltr">${formatOfferAmount(p)}</strong></div>`;
    }
    return `<span class="${prefix}-series-card__price" dir="ltr">${formatOfferAmount(p)}</span>`;
  }

  function isRemoteMedia(u) {
    return !u || /^https?:/i.test(u) || /liquimolyturkey\.com|shop\.egemot\.com\.tr|motomax\.com\.tr/i.test(u);
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

  function isFaScript(value) {
    return /[\u0600-\u06FF]/.test(String(value || ''));
  }

  function localizedDesc(item) {
    const lang = locale();
    if (lang === 'tr') return item.descTr || '';
    if (lang === 'en') return item.descEn || '';
    if (lang === 'ru') return item.descRu || '';
    if (lang === 'ar') return item.descAr || item.descFa || item.desc || '';
    return item.descFa || item.desc || '';
  }

  function localizedBadge(item) {
    const lang = locale();
    const raw = lang === 'tr' ? (item.categoryTr || item.leafTr || '')
      : lang === 'en' ? (item.categoryEn || item.leafEn || item.categoryTr || '')
      : (item.categoryFa || item.leafFa || item.specs || '');
    if (!raw) return '';
    if ((lang === 'tr' || lang === 'en' || lang === 'ru') && isFaScript(raw)) return '';
    return raw;
  }

  function specLabel(key, fallback) {
    const keys = {
      brand: 'specBrand',
      category: 'specCategory',
      type: 'specType',
      sku: 'specSku',
      stock: 'specStock',
      delivery: 'specDelivery',
      currency: 'specPriceUnit',
      price: 'specPrice'
    };
    const fromFa = {
      'برند': 'brand',
      'دسته': 'category',
      'نوع': 'type',
      'کد کالا': 'sku',
      'موجودی': 'stock',
      'تحویل': 'delivery',
      'واحد قیمت': 'currency',
      'قیمت': 'price'
    };
    const resolved = keys[key] ? key : fromFa[fallback] || key;
    const i18nKey = keys[resolved];
    const defaults = {
      brand: 'برند',
      category: 'دسته',
      type: 'نوع',
      sku: 'کد کالا',
      stock: 'موجودی',
      delivery: 'تحویل',
      currency: 'واحد قیمت',
      price: 'قیمت'
    };
    return i18nKey ? t(i18nKey, defaults[resolved] || fallback || '') : (fallback || key || '');
  }

  function specValue(row) {
    const key = row.key;
    if (key === 'stock' || row.label === 'موجودی') {
      const code = row.value;
      if (code === 'in_stock' || code === 'موجود') return t('stockIn', 'موجود');
      if (code === 'out_of_stock' || code === 'ناموجود') return t('stockOut', 'ناموجود');
      if (code === 'not_listed' || code === 'نیاز به استعلام') return t('stockAsk', 'نیاز به استعلام');
      return '';
    }
    if (key === 'delivery' || row.label === 'تحویل') return t('deliveryIranValue', 'ایران');
    if (key === 'currency' || row.label === 'واحد قیمت') return t('currencyUsd', 'دلار');
    if (key === 'price' || row.label === 'قیمت') return t('priceQuoteValue', 'استعلامی');
    return row.valueFa || row.value || '';
  }

  function visibleSpecs(item) {
    const lang = locale();
    return (item.specList || []).map(function (row) {
      const label = specLabel(row.key, row.label);
      const value = specValue(row);
      if (!label || !value) return null;
      if ((lang === 'tr' || lang === 'en' || lang === 'ru') && isFaScript(value)) return null;
      return { label: label, value: value };
    }).filter(Boolean);
  }

  function specPreviewHtml(item) {
    const rows = visibleSpecs(item).slice(0, 4);
    if (!rows.length) return '';
    return `<dl class="${prefix}-series-card__specs">${rows.map(function (row) {
      return `<div><dt>${row.label}</dt><dd>${row.value}</dd></div>`;
    }).join('')}</dl>`;
  }

  function uniqueGallery(item) {
    const raw = (item.gallery && item.gallery.length ? item.gallery : [{ image: item.image, imageAlt: item.imageAlt }]);
    const seen = {};
    return raw.map(function (g) {
      return typeof g === 'string' ? { image: g, imageAlt: item.imageAlt } : g;
    }).filter(function (g) {
      const key = g && g.image;
      if (!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  const shownCount = {};

  function seriesHay(s) {
    return [s.name, s.titleFa, s.titleTr, s.titleEn, s.sku, s.brand, s.note, s.specs, s.desc, s.descFa, s.inquiryName, s.leafFa]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
  }

  function catalogQuery() {
    const input = document.getElementById(elId('CatalogSearch'));
    return ((input && input.value) || '').trim().toLowerCase();
  }

  function catalogBrand() {
    const sel = document.getElementById(elId('CatalogBrand'));
    return ((sel && sel.value) || '').trim();
  }

  function catalogTypeFilter() {
    const f = window.BIZDAVAR_SUPPLY_FILTER && window.BIZDAVAR_SUPPLY_FILTER[catalogKey];
    if (!f || !f.cat) return null;
    return f;
  }

  function ensureCatalogFilters() {
    const toolbar = document.querySelector(`.${prefix}-catalog-toolbar`);
    if (!toolbar) return;
    const brands = catalog().brands || [];
    if (!brands.length || document.getElementById(elId('CatalogBrand'))) return;
    const label = document.createElement('label');
    label.className = `${prefix}-catalog-brand`;
    label.setAttribute('for', elId('CatalogBrand'));
    const select = document.createElement('select');
    select.id = elId('CatalogBrand');
    select.innerHTML = `<option value="">${t('catalogBrandAll', 'همه برندها')}</option>` +
      brands.map((b) => `<option value="${b}">${b}</option>`).join('');
    label.appendChild(select);
    toolbar.appendChild(label);
    select.addEventListener('change', () => {
      Object.keys(shownCount).forEach((id) => { shownCount[id] = pageSize(); });
      renderCategories();
    });
  }

  function pageSize() {
    const n = Number(catalog().catalogPageSize);
    return n > 0 ? n : 12;
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

        ${heroImgTag(b.heroImage, b.heroImageAlt || brandName)}

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

      const href = productHref(h);
      const mediaTag = href ? 'a' : 'div';
      const mediaAttr = href ? ` href="${href}"` : '';
      return `

        <article class="${prefix}-highlight-card"${h.id ? ` id="${prefix}-hl-${h.id}"` : ''}>

          <${mediaTag} class="${prefix}-highlight-card__media${h.id === 'safevader' ? ` ${prefix}-highlight-card__media--product` : ''}"${mediaAttr}>

            ${imgTag(h.image, h.imageAlt || title, { width: 280, height: 158, fallback: catalog().brand?.logo })}

          </${mediaTag}>

          <div class="${prefix}-highlight-card__body">

            <span class="${prefix}-highlight-card__badge">${h.badge || ''}</span>

            ${sideLabel && sideLabel !== title ? `<small class="${prefix}-highlight-card__tr" dir="ltr">${sideLabel}</small>` : ''}

            <h3>${title}</h3>

            ${priceHtml(h, 'div')}

            <p class="${prefix}-highlight-card__desc">${localizedDesc(h)}</p>

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

    const categoryLinks = catalog().categories.map(c => ({ id: c.id, label: localizedTitle(c), icon: c.icon }));
    const links = catalog().navMode === 'categories'
      ? categoryLinks
      : [

      { id: 'trust', label: t('navTrust', 'چرا بیزدوار'), icon: 'target' },

      { id: 'buy', label: t('navBuy', 'مسیر خرید'), icon: 'list' },

      ...(catalog().quoteChecklist ? [{ id: 'quote', label: t('navQuote', 'راهنمای استعلام'), icon: 'document' }] : []),

      { id: 'highlights', label: t('navHighlights', 'محصولات شاخص'), icon: 'sensor' },

      ...categoryLinks,

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

  function localizedColor(c) {
    const lang = locale();
    if (lang === 'tr') return c.nameTr || c.nameEn || c.name || '';
    if (lang === 'en') return c.nameEn || c.name || '';
    if (lang === 'ru') return c.nameRu || c.nameEn || c.name || '';
    if (lang === 'ar') return c.nameAr || c.nameEn || c.name || '';
    return c.name || c.nameFa || '';
  }

  function renderSeriesCard(cat, s) {
    const qName = s.inquiryName || s.name;
    const colorHay = (s.colors || []).map(c => [c.name, c.nameEn, c.nameTr].filter(Boolean).join(' ')).join(' ');
    const search = [s.name, s.titleFa, s.note, s.desc, s.specs, s.inquiryName, s.sku, s.brand, colorHay, (s.sizes || []).join(' '), ...(s.features || [])].filter(Boolean).join(' ').replace(/"/g, '');
    const specPreview = specPreviewHtml(s);
    const desc = localizedDesc(s);
    const badge = localizedBadge(s);
    const featured = s.featured ? ` ${prefix}-series-card--featured` : '';
    const rich = (s.features && s.features.length) || s.officialPath || s.officialUrl || s.specs || (s.sizes && s.sizes.length) || (s.colors && s.colors.length) || (s.specList && s.specList.length) || (s.gallery && s.gallery.length);
    const img = imgTag(s.image, s.imageAlt || `${s.name} — ${brandName}`, {
      width: rich ? 480 : 200,
      height: rich ? 360 : 200,
      className: `${prefix}-series-card__img${/\.(jpe?g|png|webp)(\?|$)/i.test(s.image || '') ? ` ${prefix}-series-card__img--photo` : ''}`,
      fallback: cat.image || catalog().brand?.logo
    });
    if (!rich) {
      const dest = productHref(s) || inquiryUrl(qName);
      return `
            <a href="${dest}" class="${prefix}-series-card${featured} ${prefix}-series-card--link" data-search="${search}">
              <span class="${prefix}-series-card__media">${img}</span>
              <span class="${prefix}-series-card__body">
                <strong>${localizedTitle(s)}</strong>
                ${desc ? `<span class="${prefix}-series-card__desc">${desc}</span>` : ''}
                ${specPreview}
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
    const feats = ((locale() === 'fa' || locale() === 'ar') ? (s.features || []) : []).map(f => `<li>${f}</li>`).join('');
    const off = officialSeriesUrl(s);
    const msg = t('inquiryTemplate', catalog().inquiryTemplate || 'استعلام {product}').replace('{product}', qName);
    const pid = s.id ? ` id="${prefix}-product-${s.id}"` : '';
    const permalink = productHref(s);
    const titleHtml = permalink
      ? `<a class="${prefix}-series-card__permalink" href="${permalink}">${localizedTitle(s)}</a>`
      : localizedTitle(s);
    const swatches = (s.colors && s.colors.length > 1) ? `
                <div class="${prefix}-series-card__swatches" role="list">
                  ${s.colors.map((c, i) => {
                    const src = path(localMedia(c.image, s.image));
                    const label = localizedColor(c);
                    return `<button type="button" class="${prefix}-series-card__swatch ${prefix}-series-card__thumb${i === 0 ? ' is-active' : ''}" style="background:${c.hex || '#ccc'}" data-gallery-src="${src}" data-gallery-alt="${label}" aria-label="${label}" title="${label}" role="listitem"></button>`;
                  }).join('')}
                </div>` : '';
    const sizeLine = (s.sizes && s.sizes.length)
      ? `<p class="${prefix}-series-card__sizes">${t('sizesLabel', 'سایز')}: ${s.sizes.join(' · ')}</p>`
      : '';
    const detailLabel = ((s.sizes && s.sizes.length) || (s.colors && s.colors.length))
      ? t('productDetail', 'جزئیات، سایز و رنگ')
      : t('productFacts', 'جزئیات محصول');
    const detailBtn = permalink
      ? `<a class="btn ${prefix}-series-card__detail" href="${permalink}">${detailLabel}</a>`
      : ((s.sizes || s.colors || s.specList || s.desc)
        ? `<button type="button" class="btn ${prefix}-series-card__detail" data-product-open="${s.id}">${detailLabel}</button>`
        : '');
    return `
            <article class="${prefix}-series-card${featured} ${prefix}-series-card--product"${pid} data-search="${search}" data-product-id="${s.id || ''}" data-leaf="${String(s.leafFa || '').replace(/"/g, '')}">
              ${cardMedia(s, img)}
              ${thumbs}
              <div class="${prefix}-series-card__body">
                ${badge ? `<span class="${prefix}-series-card__badge">${badge}</span>` : ''}
                <h3 class="${prefix}-series-card__name">${titleHtml}</h3>
                ${desc ? `<p class="${prefix}-series-card__desc">${desc}</p>` : ''}
                ${specPreview}
                ${swatches}
                ${sizeLine}
                ${feats ? `<ul class="${prefix}-series-card__features">${feats}</ul>` : ''}
                <div class="${prefix}-series-card__foot">
                  ${priceHtml(s, 'div')}
                  ${detailBtn}
                  <div class="${prefix}-series-card__actions">
                    <a href="${inquiryUrl(qName)}" class="btn btn--yellow ${prefix}-series-card__cta">${t('inquirySeries', 'استعلام')}</a>
                    <a href="${whatsappUrl(msg)}" class="btn btn--green ${prefix}-series-card__cta" target="_blank" rel="noopener noreferrer">${t('whatsappShort', 'واتساپ')}</a>
                  </div>
                </div>
                ${off ? `<a href="${off}" class="${prefix}-series-card__official" target="_blank" rel="noopener noreferrer">${t('officialCatalog', 'کاتالوگ رسمی')}${arrow()}</a>` : ''}
              </div>
            </article>`;
  }

  function renderCategories() {

    const el = document.getElementById(elId('Categories'));

    if (!el) return;

    const q = catalogQuery();
    const brand = catalogBrand();
    const type = catalogTypeFilter();
    const lazy = !!catalog().lazyCatalog;
    const size = pageSize();
    ensureCatalogFilters();
    let meta = document.getElementById(elId('CatalogMeta'));
    if (!meta) {
      const toolbar = document.querySelector(`.${prefix}-catalog-toolbar`);
      if (toolbar) {
        meta = document.createElement('p');
        meta.id = elId('CatalogMeta');
        meta.className = `${prefix}-catalog-meta`;
        toolbar.appendChild(meta);
      }
    }
    if (meta) {
      meta.classList.toggle('is-loading', !!catalog().catalogLoading);
      if (catalog().catalogLoading) {
        meta.textContent = t('catalogLoading', 'در حال بارگذاری کاتالوگ موتورسیکلت…');
      } else {
        const total = (catalog().categories || []).reduce((n, c) => n + ((c.series || []).length), 0);
        meta.textContent = t('catalogCount', '{count} محصول در کاتالوگ').replace('{count}', String(total));
      }
    }

    el.innerHTML = catalog().categories.map(cat => {
      const all = cat.series || [];
      const filtered = all.filter((s) => {
        if (type && type.cat && type.cat !== cat.id) return false;
        if (type && type.leaves && type.leaves.length && type.leaves.indexOf(s.leafFa) === -1) return false;
        if (brand && String(s.brand || '') !== brand) return false;
        if (!q) return true;
        return seriesHay(s).includes(q) || String(cat.title || '').toLowerCase().includes(q);
      });
      if (shownCount[cat.id] == null) shownCount[cat.id] = size;
      const limit = lazy ? shownCount[cat.id] : filtered.length;
      const visible = filtered.slice(0, Math.min(limit, filtered.length));
      const remaining = Math.max(0, filtered.length - visible.length);
      if ((q || brand || type) && !visible.length) return '';
      const hasProducts = visible.some(s => (s.features && s.features.length) || s.officialPath || s.officialUrl || s.specs || (s.gallery && s.gallery.length));
      const groupHead = !q && !type && cat.groupTitle
        ? `<div class="${prefix}-catalog-group" id="${prefix}-group-${cat.family || cat.id}">
            <h2 class="${prefix}-catalog-group__title">${cat.groupTitle}</h2>
            ${cat.groupDesc ? `<p class="${prefix}-catalog-group__desc">${cat.groupDesc}</p>` : ''}
          </div>`
        : '';
      return `${groupHead}

      <div class="${prefix}-category-block" id="${prefix}-cat-${cat.id}">

        <div class="${prefix}-category-block__head">

          <div class="${prefix}-category-block__visual">

            ${imgTag(cat.image, cat.imageAlt || cat.title || cat.titleTr || cat.titleEn, { width: 200, height: 120 })}

          </div>

          <div class="${prefix}-category-block__info">

            <span class="${prefix}-category-block__icon">${ic(cat.icon, { size: 36 })}</span>

            <div>

              <h2>${localizedTitle(cat)}</h2>

              <small>${isFa() ? (cat.titleEn || '') : ''}</small>

              <p>${String(cat.desc || '').replace(/\s*[—-]\s*قیمت به دلار(?:\s*\([^)]*\))?/g, '').replace(/\s*\(نرخ[^)]*\)/g, '').replace(/\s*\(1\s*USD\s*=\s*47[^)]*\)/gi, '').trim()}</p>

              <a href="${inquiryUrl(cat.title)}" class="btn btn--yellow ${prefix}-btn-inquiry">${t('inquiryCategory', 'استعلام این دسته')}</a>

            </div>

          </div>

        </div>

        <div class="${prefix}-series-grid${hasProducts ? ` ${prefix}-series-grid--products` : ''}">

          ${visible.map(s => renderSeriesCard(cat, s)).join('')}

        </div>
        ${remaining ? `<div class="${prefix}-series-more"><button type="button" class="btn btn--yellow ${prefix}-series-more__btn" data-series-more="${cat.id}">${t('showMore', 'نمایش بیشتر')} (${remaining})</button></div>` : ''}

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
    if (input.dataset.bound === '1') return;
    input.dataset.bound = '1';
    const run = () => {
      if (catalog().lazyCatalog) {
        Object.keys(shownCount).forEach((id) => { shownCount[id] = pageSize(); });
        renderCategories();
        const q = catalogQuery();
        const brand = catalogBrand();
        const visible = root.querySelectorAll(`.${prefix}-series-card`).length;
        if (empty) empty.hidden = !((q || brand) && visible === 0);
        return;
      }
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
    if (!root.dataset.moreBound) {
      root.dataset.moreBound = '1';
      root.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-series-more]');
        if (!btn) return;
        const id = btn.getAttribute('data-series-more');
        shownCount[id] = (shownCount[id] || pageSize()) + pageSize();
        renderCategories();
      });
    }
  }

  function findSeries(id) {
    for (const cat of catalog().categories || []) {
      const s = (cat.series || []).find(x => x.id === id);
      if (s) return { cat, s };
    }
    return null;
  }

  function catalogHasDetail() {
    return !!(catalog().productDetail || (catalog().categories || []).some(c =>
      (c.series || []).some(s => (s.sizes && s.sizes.length) || (s.colors && s.colors.length) || (s.specList && s.specList.length))
    ));
  }

  function ensureProductDrawer() {
    const drawerId = elId('ProductDrawer');
    let drawer = document.getElementById(drawerId);
    if (drawer) return drawer;
    drawer = document.createElement('div');
    drawer.id = drawerId;
    drawer.className = `${prefix}-drawer`;
    drawer.hidden = true;
    drawer.innerHTML = `
      <div class="${prefix}-drawer__backdrop" data-drawer-close></div>
      <div class="${prefix}-drawer__panel" role="dialog" aria-modal="true" aria-labelledby="${elId('DrawerTitle')}">
        <button type="button" class="${prefix}-drawer__close" data-drawer-close aria-label="${t('closeDetail', 'بستن')}">×</button>
        <div class="${prefix}-drawer__media">
          <img id="${elId('DrawerImg')}" alt="" width="480" height="480">
          <div id="${elId('DrawerThumbs')}" class="${prefix}-drawer__thumbs"></div>
        </div>
        <div class="${prefix}-drawer__info">
          <p class="${prefix}-drawer__sku" id="${elId('DrawerSku')}"></p>
          <h2 id="${elId('DrawerTitle')}"></h2>
          <p class="${prefix}-drawer__desc" id="${elId('DrawerDesc')}"></p>
          <div id="${elId('DrawerPrice')}"></div>
          <div id="${elId('DrawerColors')}"></div>
          <div id="${elId('DrawerSizes')}"></div>
          <dl id="${elId('DrawerSpecs')}" class="${prefix}-drawer__specs"></dl>
          <ul id="${elId('DrawerFeatures')}" class="${prefix}-drawer__features"></ul>
          <p id="${elId('DrawerBox')}" class="${prefix}-drawer__box"></p>
          <div class="${prefix}-drawer__actions" id="${elId('DrawerActions')}"></div>
        </div>
      </div>`;
    document.body.appendChild(drawer);
    return drawer;
  }

  function setupProductDetail() {
    if (!catalogHasDetail()) return;
    const drawer = ensureProductDrawer();
    const state = { id: '', color: '', size: '', image: '' };

    const imgEl = () => document.getElementById(elId('DrawerImg'));
    const setMainImage = (src, alt) => {
      const img = imgEl();
      if (!img || !src) return;
      img.src = path(localMedia(src));
      if (alt) img.alt = alt;
      state.image = src;
    };

    const inquiryName = (s) => {
      const parts = [s.inquiryName || s.name];
      if (state.color) parts.push(t('colorsLabel', 'رنگ') + ' ' + state.color);
      if (state.size) parts.push(t('sizesLabel', 'سایز') + ' ' + state.size);
      return parts.join(' — ');
    };

    const refreshActions = (s) => {
      const name = inquiryName(s);
      const msg = t('inquiryTemplate', catalog().inquiryTemplate || 'استعلام {product}').replace('{product}', name);
      const el = document.getElementById(elId('DrawerActions'));
      if (!el) return;
      const page = productHref(s);
      const pageLink = page
        ? `<a href="${page}" class="btn">${t('productPage', 'صفحه محصول')}</a>`
        : '';
      el.innerHTML = `
        ${pageLink}
        <a href="${inquiryUrl(name)}" class="btn btn--yellow">${t('inquirySeries', 'استعلام')}</a>
        <a href="${whatsappUrl(msg)}" class="btn btn--green" target="_blank" rel="noopener noreferrer">${t('whatsappShort', 'واتساپ')}</a>`;
    };

    const open = (id) => {
      const found = findSeries(id);
      if (!found) return;
      const { s } = found;
      state.id = id;
      state.color = s.colors && s.colors[0] ? localizedColor(s.colors[0]) : '';
      state.size = (s.sizes && (s.sizes.includes('M') ? 'M' : s.sizes[0])) || '';
      document.getElementById(elId('DrawerTitle')).textContent = localizedTitle(s);
      document.getElementById(elId('DrawerSku')).textContent = s.sku || s.note || '';
      const descEl = document.getElementById(elId('DrawerDesc'));
      if (descEl) descEl.textContent = localizedDesc(s);
      document.getElementById(elId('DrawerPrice')).innerHTML = priceHtml(s, 'div');
      setMainImage((s.colors && s.colors[0] && s.colors[0].image) || s.image, s.imageAlt || s.name);

      const thumbs = document.getElementById(elId('DrawerThumbs'));
      const gallery = uniqueGallery(s);
      thumbs.innerHTML = gallery.length > 1 ? gallery.map((g, i) => {
        const src = path(localMedia(g.image, s.image));
        const alt = g.imageAlt || s.name;
        return `<button type="button" class="${prefix}-drawer__thumb${i === 0 ? ' is-active' : ''}" data-src="${g.image}" data-alt="${alt}"><img src="${src}" alt="" width="72" height="72"></button>`;
      }).join('') : '';

      const colorsEl = document.getElementById(elId('DrawerColors'));
      if (s.colors && s.colors.length) {
        colorsEl.innerHTML = `<p class="${prefix}-drawer__label">${t('colorsLabel', 'رنگ')}</p><div class="${prefix}-drawer__swatches">${s.colors.map((c, i) =>
          `<button type="button" class="${prefix}-drawer__swatch${i === 0 ? ' is-active' : ''}" style="background:${c.hex || '#ccc'}" data-color="${localizedColor(c)}" data-image="${c.image || s.image}" title="${localizedColor(c)}" aria-label="${localizedColor(c)}"></button>`
        ).join('')}</div>`;
      } else {
        colorsEl.innerHTML = '';
      }

      const sizesEl = document.getElementById(elId('DrawerSizes'));
      if (s.sizes && s.sizes.length) {
        sizesEl.innerHTML = `<p class="${prefix}-drawer__label">${t('sizesLabel', 'سایز')}</p><div class="${prefix}-drawer__sizes">${s.sizes.map(sz =>
          `<button type="button" class="${prefix}-drawer__size${sz === state.size ? ' is-active' : ''}" data-size="${sz}">${sz}</button>`
        ).join('')}</div>`;
      } else {
        sizesEl.innerHTML = '';
      }

      const specsEl = document.getElementById(elId('DrawerSpecs'));
      const specRows = visibleSpecs(s);
      if (specRows.length) {
        specsEl.innerHTML = `<dt class="${prefix}-drawer__label">${t('specsLabel', 'مشخصات فنی')}</dt>` +
          specRows.map(row => `<div class="${prefix}-drawer__spec"><dt>${row.label}</dt><dd>${row.value}</dd></div>`).join('');
      } else {
        specsEl.innerHTML = '';
      }

      const featsEl = document.getElementById(elId('DrawerFeatures'));
      featsEl.innerHTML = ((locale() === 'fa' || locale() === 'ar') ? (s.features || []) : []).map(f => `<li>${f}</li>`).join('');

      const boxEl = document.getElementById(elId('DrawerBox'));
      boxEl.textContent = (s.boxContents && s.boxContents.length)
        ? t('boxLabel', 'محتویات جعبه') + ': ' + s.boxContents.join(' · ')
        : '';

      refreshActions(s);
      drawer.hidden = false;
      document.body.classList.add(`${prefix}-drawer-open`);
      const closeBtn = drawer.querySelector(`.${prefix}-drawer__close`);
      if (closeBtn) closeBtn.focus();
    };

    const close = () => {
      drawer.hidden = true;
      document.body.classList.remove(`${prefix}-drawer-open`);
    };

    document.addEventListener('click', (e) => {
      const openBtn = e.target.closest('[data-product-open]');
      if (openBtn) {
        e.preventDefault();
        open(openBtn.getAttribute('data-product-open'));
        return;
      }
      if (e.target.closest('[data-drawer-close]')) {
        close();
        return;
      }
      const thumb = e.target.closest(`.${prefix}-drawer__thumb`);
      if (thumb && drawer.contains(thumb)) {
        setMainImage(thumb.getAttribute('data-src'), thumb.getAttribute('data-alt'));
        drawer.querySelectorAll(`.${prefix}-drawer__thumb`).forEach(b => b.classList.toggle('is-active', b === thumb));
        return;
      }
      const swatch = e.target.closest(`.${prefix}-drawer__swatch`);
      if (swatch && drawer.contains(swatch)) {
        state.color = swatch.getAttribute('data-color') || '';
        setMainImage(swatch.getAttribute('data-image'), state.color);
        drawer.querySelectorAll(`.${prefix}-drawer__swatch`).forEach(b => b.classList.toggle('is-active', b === swatch));
        const found = findSeries(state.id);
        if (found) refreshActions(found.s);
        return;
      }
      const sizeBtn = e.target.closest(`.${prefix}-drawer__size`);
      if (sizeBtn && drawer.contains(sizeBtn)) {
        state.size = sizeBtn.getAttribute('data-size') || '';
        drawer.querySelectorAll(`.${prefix}-drawer__size`).forEach(b => b.classList.toggle('is-active', b === sizeBtn));
        const found = findSeries(state.id);
        if (found) refreshActions(found.s);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !drawer.hidden) close();
    });
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

    setupProductDetail();

    if (!window.__bizdavarSupplyFilterBound) {
      window.__bizdavarSupplyFilterBound = true;
      document.addEventListener('bizdavar:supply-filter', function () {
        Object.keys(shownCount).forEach(function (id) { shownCount[id] = pageSize(); });
        renderCategories();
      });
    }

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

    const cats = catalog().categories || [];
    let totalItems = 0;
    const items = [];
    for (let ci = 0; ci < cats.length; ci++) {
      const cat = cats[ci];
      const series = cat.series || [];
      totalItems += series.length;
      for (let si = 0; si < series.length && items.length < 50; si++) {
        const s = series[si];
        const product = {
          '@type': 'Product',
          name: `${s.inquiryName || s.name} — ${brandName}`,
          description: s.desc || s.note,
          sku: s.sku || undefined,
          brand: { '@type': 'Brand', name: brandName },
          category: cat.title || cat.titleEn || cat.titleTr,
          image: absImg(s.image || cat.image),
          url: officialSeriesUrl(s) || undefined
        };
        const offer = offerPrice(s);
        if (offer) {
          product.offers = {
            '@type': 'Offer',
            price: String(offer.amount),
            priceCurrency: offer.currency,
            availability: s.availability === 'out_of_stock'
              ? 'https://schema.org/OutOfStock'
              : 'https://schema.org/InStock',
            seller: { '@type': 'Organization', name: C.siteName }
          };
        }
        items.push(product);
      }
    }

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

      numberOfItems: totalItems,

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

