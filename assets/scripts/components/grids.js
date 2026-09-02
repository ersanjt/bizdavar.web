/**
 * Bizdavar — Content grids and landing sections
 * @requires BD_CTX (context.js)
 */
(function () {
  const ctx = window.BD_CTX;
  if (!ctx) return;
  const {
    C, R, A, path, siteLink, t, ic, linkArrow, wa, currentPage,
    absUrl, breadcrumbHref, localizeCrumbs, buildContactPoints, orgAddress
  } = ctx;

  function hideBrokenImg() {
    return ' onerror="this.style.display=\'none\'"';
  }

  function displayPair(primary, secondary) {
    const a = String(primary || '').trim();
    const b = String(secondary || '').trim();
    if (!a) return b;
    if (!b || a === b) return a;
    return `${a} (${b})`;
  }

  function exhibitionMediaHtml(e) {
    if (!e || (!e.video && !e.image)) return '';
    const poster = e.videoPoster ? path(e.videoPoster) : (e.image ? path(e.image) : '');
    const videoBlock = e.video ? `
      <div class="exhibition-card__video">
        <video controls preload="metadata" playsinline${poster ? ` poster="${poster}"` : ''} title="${e.videoLabel || e.title || ''}">
          <source src="${path(e.video)}" type="video/mp4">
        </video>
        ${e.videoLabel ? `<p class="exhibition-card__video-label">${e.videoLabel}</p>` : ''}
      </div>` : '';
    const imageBlock = e.image && !e.video ? `
      <figure class="exhibition-card__figure">
        <img src="${path(e.image)}" alt="${e.title || 'Bizdavar exhibition'}" loading="lazy" width="720" height="405"${hideBrokenImg()}>
      </figure>` : '';
    return `<div class="exhibition-card__media">${videoBlock}${imageBlock}</div>`;
  }

  function formatBlogDate(iso) {
    if (!iso) return '';
    try {
      const locale = window.BIZDAVAR_I18N?.locale || document.documentElement.lang || 'fa';
      const tags = { fa: 'fa-IR', tr: 'tr-TR', en: 'en-GB', ru: 'ru-RU', ar: 'ar-AE' };
      return new Intl.DateTimeFormat(tags[locale] || locale, {
        year: 'numeric', month: 'short', day: 'numeric'
      }).format(new Date(iso + 'T00:00:00'));
    } catch (e) {
      return iso;
    }
  }

  function blogPostHref(p) {
    return path(p.slug);
  }

  function blogCardHtml(p, opts) {
    const rich = !!(opts && opts.rich);
    const href = blogPostHref(p);
    const img = p.image
      ? `<a href="${href}" class="blog-item__media" tabindex="-1">
          <img src="${path(p.image)}" alt="${p.title}" loading="lazy" decoding="async" width="640" height="360">
        </a>`
      : '';
    const dateHtml = p.date
      ? `<time class="blog-item__date" datetime="${p.date}">${formatBlogDate(p.date)}</time>`
      : '';
    const serviceLink = p.relatedService
      ? `<a href="${path(p.relatedService)}" class="blog-item__service-link">${t('blogPage.catalog.relatedService', 'خدمت مرتبط')}${linkArrow()}</a>`
      : '';
    return `
      <article class="blog-item${rich ? ' blog-item--card' : ''}" data-cat="${p.catId || ''}">
        ${rich ? img : ''}
        <div class="blog-item__body">
          <div class="blog-item__meta">
            <span class="blog-item__cat">${p.category}</span>
            ${dateHtml}
          </div>
          <h3><a href="${href}">${p.title}</a></h3>
          <p>${p.excerpt}</p>
          <div class="blog-item__links">
            <a href="${href}" class="service-card__link">${t('common.readMore', 'ادامه مطلب')}: ${p.title}${linkArrow()}</a>
            ${serviceLink}
          </div>
        </div>
      </article>`;
  }

  window.getBlogPostsList = function () {
    return window.BIZDAVAR_I18N?.getBlogPosts
      ? window.BIZDAVAR_I18N.getBlogPosts()
      : (C.blogPosts || []);
  };

  window.renderBlogGrid = function (containerId, limit) {
    const el = document.getElementById(containerId);
    if (!el || !C.blogPosts) return;
    const sourcePosts = window.getBlogPostsList();
    const posts = limit ? sourcePosts.slice(0, limit) : sourcePosts;
    const rich = !limit;
    el.innerHTML = posts.map(p => blogCardHtml(p, { rich })).join('');
  };

  window.initBlogPage = function () {
    const filterEl = document.getElementById('blogFilters');
    const gridEl = document.getElementById('blogGrid');
    const pillarsEl = document.getElementById('blogPillars');
    const countEl = document.getElementById('blogCount');
    const featuredEl = document.getElementById('blogFeatured');
    const linkHubEl = document.getElementById('blogLinkHub');
    if (!gridEl) return;

    const posts = window.getBlogPostsList().slice().sort((a, b) =>
      (b.date || '').localeCompare(a.date || '')
    );
    const cats = [
      { id: 'digital', key: 'blogPage.topics.digital' },
      { id: 'web', key: 'blogPage.topics.web' },
      { id: 'industrial', key: 'blogPage.topics.industrial' },
      { id: 'products', key: 'blogPage.topics.products' },
      { id: 'company', key: 'blogPage.topics.company' }
    ];
    const params = new URLSearchParams(window.location.search);
    const catFromQuery = params.get('topic');
    let active = cats.some(c => c.id === catFromQuery) ? catFromQuery : 'all';

    function catLabel(id) {
      const row = cats.find(c => c.id === id);
      return row ? t(row.key + '.label', id) : id;
    }

    function catDesc(id) {
      const row = cats.find(c => c.id === id);
      return row ? t(row.key + '.desc', '') : '';
    }

    function visiblePosts() {
      return active === 'all' ? posts : posts.filter(p => p.catId === active);
    }

    function renderCount() {
      if (!countEl) return;
      const tpl = t('blogPage.catalog.countText', '{count}');
      countEl.textContent = tpl.replace('{count}', String(visiblePosts().length));
    }

    function renderGrid() {
      const list = visiblePosts();
      gridEl.innerHTML = list.length
        ? list.map(p => blogCardHtml(p, { rich: true })).join('')
        : `<p class="blog-empty">${t('blogPage.catalog.empty', 'مقاله‌ای در این دسته نیست.')}</p>`;
      renderCount();
    }

    function setActive(cat, scroll) {
      active = cat || 'all';
      if (filterEl) {
        filterEl.querySelectorAll('[data-cat]').forEach(b => {
          b.classList.toggle('is-active', b.getAttribute('data-cat') === active);
        });
      }
      if (pillarsEl) {
        pillarsEl.querySelectorAll('[data-cat]').forEach(b => {
          b.classList.toggle('is-active', b.getAttribute('data-cat') === active);
        });
      }
      renderGrid();
      if (scroll) {
        const target = document.getElementById('catalog');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    if (pillarsEl) {
      pillarsEl.innerHTML = cats.map(c => {
        const count = posts.filter(p => p.catId === c.id).length;
        return `<a href="#catalog" class="blog-pillar" data-cat="${c.id}">
          <span class="blog-pillar__count">${count}</span>
          <span class="blog-pillar__label">${catLabel(c.id)}</span>
          <span class="blog-pillar__desc">${catDesc(c.id)}</span>
        </a>`;
      }).join('');
      if (!pillarsEl.dataset.bound) {
        pillarsEl.dataset.bound = '1';
        pillarsEl.addEventListener('click', (e) => {
          const link = e.target.closest('[data-cat]');
          if (!link) return;
          e.preventDefault();
          setActive(link.getAttribute('data-cat'), true);
        });
      }
    }

    if (filterEl) {
      const allLabel = t('blogPage.catalog.filterAll', 'همه');
      filterEl.innerHTML = [
        `<button type="button" class="product-filter__btn is-active" data-cat="all">${allLabel}</button>`,
        ...cats.map(c =>
          `<button type="button" class="product-filter__btn" data-cat="${c.id}">${catLabel(c.id)}</button>`
        )
      ].join('');
      if (!filterEl.dataset.bound) {
        filterEl.dataset.bound = '1';
        filterEl.addEventListener('click', (e) => {
          const btn = e.target.closest('[data-cat]');
          if (!btn) return;
          setActive(btn.getAttribute('data-cat'), false);
        });
      }
    }

    const faqEl = document.getElementById('blogFaqGrid');
    const faqItems = window.BIZDAVAR_I18N?.raw('blogPage.faq.items');
    if (faqEl && Array.isArray(faqItems) && faqItems.length) {
      const dir = window.BIZDAVAR_I18N?.dict?.dir || document.documentElement.dir || 'rtl';
      faqEl.innerHTML = faqItems.map(item => `
        <details class="faq-item" dir="${dir}">
          <summary dir="${dir}">${item.q}</summary>
          <p dir="${dir}">${item.a}</p>
        </details>`).join('');
      if (typeof window.injectFaqSchema === 'function') window.injectFaqSchema(faqItems);
    }

    if (featuredEl && posts.length) {
      const featured = posts.slice(0, 2);
      featuredEl.innerHTML = featured.map(p => blogCardHtml(p, { rich: true })).join('');
    }

    const hubItems = window.BIZDAVAR_I18N?.raw('blogPage.linkHub.items');
    if (linkHubEl && Array.isArray(hubItems) && hubItems.length) {
      linkHubEl.innerHTML = hubItems.map(item => `
        <a href="${path(item.url)}" class="blog-link-hub__item">
          <strong>${item.title}</strong>
          <span>${item.desc || ''}</span>
        </a>`).join('');
    }

    setActive(active, false);
  };





  window.renderPortfolioGrid = function (containerId) {

    const el = document.getElementById(containerId);

    if (!el || !C.portfolio) return;

    const portfolio = (window.BIZDAVAR_I18N?.getPortfolioItems
      ? window.BIZDAVAR_I18N.getPortfolioItems()
      : C.portfolio).filter(p => !p.archived);

    el.innerHTML = portfolio.map(p => {

      const url = window.getProjectUrl(p);

      const external = !p.internal;

      const logoHtml = p.logo
        ? `<div class="portfolio-card__logo${p.appStoreUrl ? ' portfolio-card__logo--app' : ''}"><img src="${path(p.logo)}" alt="${p.name}" loading="lazy" width="160" height="52"></div>`
        : `<div class="portfolio-card__logo portfolio-card__logo--text"><span>${p.name}</span></div>`;

      return `

        <article class="portfolio-card">

          ${logoHtml}

          <div class="portfolio-card__top">

            <h3>${p.name}</h3>

            <span class="portfolio-card__cat">${p.category}</span>

          </div>

          <p class="portfolio-card__domain" dir="ltr">${p.domain}</p>
          ${p.note ? `<p class="portfolio-card__note">${p.note}</p>` : ''}

          ${p.appStoreUrl ? `
          <span class="portfolio-card__links">
            <a href="${url}" class="portfolio-card__link"
               ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
              ${external ? t('common.viewSite', 'مشاهده وبسایت') : t('common.viewPage', 'مشاهده صفحه')}${linkArrow()}
            </a>
            <a href="${p.appStoreUrl}" class="portfolio-card__link portfolio-card__link--app"
               target="_blank" rel="noopener noreferrer">
              ${t('common.viewAppStore', 'App Store')}${linkArrow()}
            </a>
          </span>` : `
          <a href="${url}" class="portfolio-card__link"

             ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>

            ${external ? t('common.viewSite', 'مشاهده وبسایت') : t('common.viewPage', 'مشاهده صفحه')}${linkArrow()}

          </a>`}

        </article>`;

    }).join('');

  };



  window.renderClientsGrid = function (containerId, limit) {

    const el = document.getElementById(containerId);

    const partners = C.featuredPartners;

    if (!el || !partners) return;

    const showcase = partners.filter(p => p.role !== 'supplier');
    const items = limit ? showcase.slice(0, limit) : showcase;

    el.innerHTML = items.map(p => {

      const external = p.url.startsWith('http');
      const href = external ? p.url : siteLink(p.url);

      const inner = p.logo
        ? `<img src="${path(p.logo)}" alt="${p.name}" loading="lazy" class="client-item__logo" width="130" height="52" onerror="this.outerHTML='<span class=\\'client-item__name\\'>'+this.alt+'</span>'">`
        : `<span class="client-item__name">${p.name}</span>`;

      return `

        <a href="${href}" class="client-item client-item--link client-item--logo"

           ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}

           ${p.logo ? `title="${p.name}"` : ''}>

          ${inner}

        </a>`;

    }).join('');

  };

  window.renderGeoStrip = function (containerId, opts) {
    const el = document.getElementById(containerId);
    const g = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getGeo() : C.geo;
    if (!el || !g) return;
    let text = g.summaryFa || g.summary;
    if (opts && opts.textKey) {
      const localized = t(opts.textKey, null);
      if (localized) text = localized;
      else if (opts.text) text = opts.text;
    } else if (opts && opts.text) {
      text = opts.text;
    }
    const hubs = g.hubs || [];
    el.innerHTML = `
      <section class="geo-strip" aria-label="${t('common.geoAria', 'حوزه جغرافیایی خدمات')}">
        <div class="container geo-strip__inner">
          <div class="geo-strip__lead">
            <span class="geo-strip__eyebrow">${ic('globe', { size: 18 })} ${t('common.globalPresence', 'حضور جهانی')}</span>
            <p>${text}</p>
          </div>
          <ul class="geo-strip__hubs">
            ${hubs.map(h => `
              <li class="geo-strip__hub">
                <strong>${h.city}</strong>
                <span class="geo-strip__country">${h.country}</span>
                <span class="geo-strip__role">${h.role}</span>
              </li>`).join('')}
          </ul>
        </div>
      </section>`;
  };

  window.renderTrustBar = function (containerId) {

    const el = document.getElementById(containerId);

    const metrics = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getTrustMetrics() : C.trustMetrics;
    if (!el || !metrics || !metrics.length) return;

    el.innerHTML = `

      <section class="trust-bar" aria-label="${t('common.trustAria', 'شاخص‌های کلیدی بیزدوار')}">

        <div class="container">

          <ul class="trust-bar__grid">

            ${metrics.map(m => `

              <li class="trust-bar__item">

                <strong class="trust-bar__value" dir="ltr">${m.value}</strong>

                <span class="trust-bar__label">${m.label}</span>

              </li>

            `).join('')}

          </ul>

        </div>

      </section>`;

  };

  window.renderLeadPaths = function (containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const paths = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.raw('home.leadPaths') : null;
    if (!Array.isArray(paths) || !paths.length) return;

    el.innerHTML = paths.map(p => `
      <article class="lead-path">
        <div class="lead-path__icon" data-bd-icon="${p.icon || 'phone'}" data-bd-size="36" aria-hidden="true"></div>
        <h3 class="lead-path__title">${p.title}</h3>
        <p class="lead-path__desc">${p.desc}</p>
        <a href="${p.url}" class="btn btn--primary lead-path__cta">${p.cta}</a>
      </article>
    `).join('');

    if (typeof window.initDataIcons === 'function') window.initDataIcons(el);
  };

  window.renderCredibilitySection = function (containerId) {
    const I = window.BIZDAVAR_INTEL;
    const el = document.getElementById(containerId);
    if (!el || !I) return;
    const f = I.leadership.founder;
    const I18N = window.BIZDAVAR_I18N;
    const localizedHighlights = I18N && Array.isArray(I18N.raw('credibility.highlights'))
      ? I18N.raw('credibility.highlights')
      : I.socialProof.highlights;
    const foundedDisplay = t('credibility.foundedDisplay', I.identity.foundedDisplay);
    el.innerHTML = `
      <section class="section intel-section" aria-labelledby="cred-heading">
        <div class="container">
          <div class="section__header section__header--pro">
            <span class="section__eyebrow">${t('credibility.eyebrow')}</span>
            <h2 class="section__title" id="cred-heading">${t('credibility.title')}</h2>
            <p class="section__desc">${t('credibility.desc')}</p>
          </div>
          <div class="intel-stats">
            <div class="intel-stat"><strong dir="ltr">${f.projectsCount}</strong><span>${t('credibility.projects')}</span></div>
            <div class="intel-stat"><strong dir="ltr">${f.countriesCount}</strong><span>${t('credibility.countries')}</span></div>
            <div class="intel-stat"><strong dir="ltr">${f.experienceYears}</strong><span>${t('credibility.years')}</span></div>
            <div class="intel-stat"><strong dir="ltr">${foundedDisplay}</strong><span>${t('credibility.founded')}</span></div>
          </div>
          <div class="intel-proof-grid">
            ${localizedHighlights.map(h => `
              <article class="intel-proof-card">
                <span class="intel-proof-card__cat">${h.category}</span>
                <p>${h.text}</p>
                <footer><cite>${h.source}</cite> · ${h.year}</footer>
              </article>
            `).join('')}
          </div>
          <p class="intel-note text-center mt-24">${t('credibility.sources')}: <a href="${f.linkedin}" target="_blank" rel="noopener noreferrer me">${t('credibility.founderLinkedin')}</a> · <a href="${siteLink(R.portfolio)}">${t('credibility.portfolio')}</a> · <a href="${siteLink(R.about)}">${t('credibility.fullAbout')}</a></p>
        </div>
      </section>`;
  };

  window.renderCompanyIntelAbout = function () {
    const I = window.getIntelLocalized ? window.getIntelLocalized() : window.BIZDAVAR_INTEL;
    if (!I) return;
    const L = I._labels || {};
    const f = I.leadership.founder;
    const lang = window.BIZDAVAR_I18N?.locale || 'fa';
    const iranLegal = lang === 'fa'
      ? I.identity.iranLegalNameFa
      : (I.identity.iranLegalNameEn || I.identity.iranLegalNameFa);
    const iranBrand = lang === 'fa'
      ? I.identity.iranBrandFa
      : (I.identity.iranBrandEn || I.identity.iranBrandFa || I.identity.iranBrandFa);

    const identityEl = document.getElementById('intelIdentity');
    if (identityEl) {
      const dirs = (I.identity.directories || []).map(d => `
        <a href="${d.url}" class="service-card__link" target="_blank" rel="noopener noreferrer me">${d.label}${linkArrow()}</a>
        <span class="intel-legal-note">${d.note}</span>
      `).join('');
      identityEl.innerHTML = `
        <div class="intel-identity-grid">
          <dl class="intel-dl">
            <div><dt>${L.intlBrand || 'برند بین‌المللی'}</dt><dd>${displayPair(I.identity.legalNameFa, I.identity.legalName)}</dd></div>
            <div><dt>${L.armeniaReg || 'ثبت ارمنستان'}</dt><dd><strong>${I.identity.armeniaLegalName}</strong> (${I.identity.armeniaLegalType})${I.identity.armeniaBrandFa && I.identity.armeniaBrandFa !== I.identity.armeniaLegalName ? `<br><span class="intel-legal-brand">${I.identity.armeniaBrandFa}</span>` : ''}</dd></div>
            <div><dt>${L.iranLegal || 'شخصیت حقوقی ایران'}</dt><dd><strong>${iranLegal}</strong><br><span class="intel-legal-brand">${L.brandPrefix || 'برند'}: ${iranBrand}</span></dd></div>
            <div><dt>${L.founded || 'تأسیس'}</dt><dd>${I.identity.foundedDisplay}</dd></div>
            <div><dt>${L.domains || 'دامنه‌ها'}</dt><dd dir="ltr">${I.identity.domains.join(' · ')}</dd></div>
            <div><dt>${L.serviceLangs || 'زبان‌های خدمت'}</dt><dd>${(I.identity.languages || []).join(' · ')}</dd></div>
            ${dirs ? `<div><dt>${L.b2bProfile || 'پروفایل B2B'}</dt><dd class="intel-legal-links">${dirs}</dd></div>` : ''}
          </dl>
          <ul class="intel-hq-list">
            ${I.identity.headquarters.map(h => `
              <li class="${h.badge === 'HQ' ? 'intel-hq-list__item--hq' : h.badge === 'IR' ? 'intel-hq-list__item--ir' : h.badge === 'AM' ? 'intel-hq-list__item--am' : ''}">
                <strong>${h.city}, ${h.country}${h.badge ? ` <span class="intel-hq-list__badge">${h.badge}</span>` : ''}</strong>
                <span>${h.role}</span>
              </li>
            `).join('')}
          </ul>
        </div>`;
    }

    const leaderEl = document.getElementById('intelLeader');
    if (leaderEl) {
      leaderEl.innerHTML = `
        <article class="intel-leader-card">
          <div class="intel-leader-card__head">
            <h3>${f.nameFa || f.name}</h3>
            <p>${f.titleFa || f.title} · ${f.experienceYears} ${L.years || 'سال'} · ${f.projectsCount} ${L.projects || 'پروژه'}</p>
            <a href="${f.linkedin}" class="service-card__link" target="_blank" rel="noopener noreferrer me">${L.linkedinProfile || 'پروفایل LinkedIn'}${linkArrow()}</a>
          </div>
          <p>${f.bioFa || f.bio || ''}</p>
          <div class="intel-tags">
            ${f.expertise.map(e => `<span class="intel-tag">${e}</span>`).join('')}
          </div>
          <h4>${L.education || 'تحصیلات'}</h4>
          <ul class="intel-list">${f.education.map(e => `<li>${e}</li>`).join('')}</ul>
        </article>`;
    }

    const areasEl = document.getElementById('intelAreas');
    if (areasEl) {
      areasEl.innerHTML = I.activityAreas.map(a => `
        <div class="intel-area-card">
          <h3>${a.title}</h3>
          <ul>${a.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      `).join('');
    }

    const ecoEl = document.getElementById('intelEcosystem');
    if (ecoEl) {
      ecoEl.innerHTML = I.ecosystem.map(b => `
        <div class="intel-eco-card">
          <strong>${b.name}</strong>
          <span class="intel-eco-card__type">${b.type}</span>
          <p>${b.note}</p>
        </div>
      `).join('');
    }

    const presenceEl = document.getElementById('intelPresence');
    if (presenceEl && I.presence) {
      const P = I.presence;
      const regions = P.regions || [];
      const hub = P.istanbulHub;
      const tabriz = P.tabrizHub;
      const yerevan = P.yerevanHub;
      const waUrl = (num) => (window.BD_CTX?.buildWaUrl ? window.BD_CTX.buildWaUrl(num) : `https://wa.me/${num}?text=${encodeURIComponent(C.contact.whatsappMessage || '')}`);
      const renderOfficeHub = (hubData, opts) => {
        if (!hubData) return '';
        const badge = opts.badge || L.office || 'دفتر';
        const waLabel = opts.waLabel || L.whatsapp || 'واتساپ';
        const openAttr = opts.open ? ' open' : '';
        return `
        <details class="presence-istanbul-hub${opts.modifier ? ' ' + opts.modifier : ''}"${openAttr}>
          <summary class="presence-istanbul-hub__head">
            <div class="presence-istanbul-hub__summary">
              <span class="presence-istanbul-hub__eyebrow">${hubData.subtitle || ''}</span>
              <h3 class="presence-istanbul-hub__title">${hubData.title}</h3>
              <p class="presence-istanbul-hub__location">${hubData.city}${hubData.province ? ', ' + hubData.province : ''}, ${hubData.country}${hubData.timezone ? ' · ' + hubData.timezone : ''}</p>
              ${hubData.brand ? `<p class="presence-istanbul-hub__brand">${hubData.brand}</p>` : ''}
            </div>
            <span class="presence-country__badge presence-istanbul-hub__badge">${badge}</span>
          </summary>
          <div class="presence-istanbul-hub__body">
          <p class="presence-istanbul-hub__intro">${hubData.intro}</p>
          <ul class="presence-istanbul-hub__services">
            ${(hubData.services || []).map(s => `<li>${s}</li>`).join('')}
          </ul>
          <div class="presence-istanbul-hub__meta">
            ${hubData.address ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">${L.address || 'آدرس'}</span><span>${hubData.address}</span></div>` : ''}
            ${hubData.workingHours ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">${L.workingHours || 'ساعات کاری'}</span><span>${hubData.workingHours}</span></div>` : ''}
            ${hubData.languages ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">${L.languages || 'زبان‌ها'}</span><span>${hubData.languages.join(' · ')}</span></div>` : ''}
            ${hubData.phone ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">${L.contact || 'تماس'}</span><a href="tel:${hubData.phoneTel || hubData.phone}" dir="ltr">${hubData.phone}</a></div>` : ''}
            ${hubData.email ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">${L.email || 'ایمیل'}</span><a href="mailto:${hubData.email}" dir="ltr">${hubData.email}</a></div>` : ''}
          </div>
          <div class="presence-istanbul-hub__actions">
            ${hubData.whatsapp ? `<a href="${waUrl(hubData.whatsapp)}" class="btn btn--yellow" target="_blank" rel="noopener noreferrer">${waLabel}</a>` : ''}
            ${hubData.profileUrl ? `<a href="${hubData.profileUrl}" class="btn btn--outline" target="_blank" rel="noopener noreferrer">${hubData.profileLabel || (L.b2bProfile || 'پروفایل B2B')}</a>` : ''}
            <a href="${siteLink(R.contact)}" class="btn btn--primary">${L.contactForm || 'فرم تماس'}</a>
          </div>
          ${hubData.note ? `<p class="presence-istanbul-hub__note">${hubData.note}</p>` : ''}
          ${hubData.exhibitionsNote ? `<p class="presence-istanbul-hub__note presence-istanbul-hub__note--event">${hubData.exhibitionsNote}</p>` : ''}
          </div>
        </details>`;
      };
      const hubHtml = renderOfficeHub(hub, { badge: L.mainOffice || 'دفتر', waLabel: L.whatsappIstanbul || 'واتساپ ترکیه' });
      const yerevanHtml = renderOfficeHub(yerevan, { badge: L.armenia || 'ارمنستان', modifier: 'presence-istanbul-hub--armenia' });
      const tabrizHtml = renderOfficeHub(tabriz, { badge: L.iran || 'ایران', waLabel: L.whatsappIran || 'واتساپ ایران', modifier: 'presence-istanbul-hub--iran' });

      presenceEl.innerHTML = `
        <div class="presence-showcase">
          <div class="presence-showcase__hero">
            <div class="presence-showcase__map">
              <img src="${path(P.mapImage || 'assets/images/content/presence-map.svg')}" alt="${L.mapAlt || 'نقشه حضور جهانی بیزدوار'}" width="480" height="300" loading="lazy">
            </div>
            <div class="presence-showcase__intro">
              <p class="presence-showcase__desc">${P.summary || P.summaryFa || ''}</p>
              <div class="presence-stats">
                ${(P.stats || []).map(s => `
                  <div class="presence-stat">
                    <strong>${s.value}</strong>
                    <span>${s.label}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          ${hubHtml}
          ${yerevanHtml}
          ${tabrizHtml}
          <div class="presence-regions">
            ${regions.map(region => `
              <div class="presence-region">
                <h3 class="presence-region__title">${region.title}</h3>
                <div class="presence-country-grid">
                  ${region.countries.map(c => `
                    <article class="presence-country${c.hub ? ' presence-country--hub' : ''}">
                      <div class="presence-country__head">
                        <strong>${c.name}</strong>
                        ${c.hub ? `<span class="presence-country__badge">${L.hubBadge || 'هاب'}</span>` : ''}
                      </div>
                      ${c.city ? `<span class="presence-country__city">${c.city}</span>` : ''}
                      <p class="presence-country__focus">${c.focus}</p>
                      ${c.detail ? `<p class="presence-country__detail">${c.detail}</p>` : ''}
                    </article>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
      const officeMq = window.matchMedia('(min-width: 900px)');
      const offices = presenceEl.querySelectorAll('.presence-istanbul-hub');
      const preferredOffice = [...offices].find((el) => el.classList.contains('presence-istanbul-hub--iran')) || offices[0];
      const syncOffices = () => {
        offices.forEach((el, i) => {
          el.open = officeMq.matches ? el === preferredOffice : i === 0;
        });
      };
      syncOffices();
      if (officeMq.addEventListener) officeMq.addEventListener('change', syncOffices);
      else officeMq.addListener(syncOffices);
    }

    const credEl = document.getElementById('intelCredentials');
    if (credEl) {
      credEl.innerHTML = I.credentials.map(c => `
        <div class="intel-cred-card">
          <strong>${c.name}</strong>
          <span>${c.issuer} — ${c.year}</span>
        </div>
      `).join('');
    }

    const exEl = document.getElementById('intelExhibitions');
    if (exEl && I.exhibitions && I.exhibitions.length) {
      exEl.innerHTML = `
        <div class="exhibitions-grid">
          ${I.exhibitions.map(e => `
            <article class="exhibition-card">
              <div class="exhibition-card__head">
                <span class="exhibition-card__year">${e.dateDisplay || e.year}</span>
                <span class="exhibition-card__source">${e.source}</span>
              </div>
              <h3 class="exhibition-card__title">${e.title}</h3>
              <p class="exhibition-card__entity"><strong>${e.entity}</strong>${e.brand ? ` · ${e.brand}` : ''}</p>
              <p class="exhibition-card__desc">${e.desc}</p>
              ${exhibitionMediaHtml(e)}
              <dl class="exhibition-card__meta">
                ${e.section ? `<div><dt>${t('exhibitions.section', 'بخش')}</dt><dd>${e.section}</dd></div>` : ''}
                ${e.zone ? `<div><dt>${t('exhibitions.zone', 'زون')}</dt><dd>${e.zone}</dd></div>` : ''}
                ${e.booth ? `<div><dt>${t('exhibitions.booth', 'غرفه')}</dt><dd>${e.booth}</dd></div>` : ''}
                ${e.city ? `<div><dt>${t('exhibitions.location', 'مکان')}</dt><dd>${e.city}${e.country ? (/^(fa|ar)/.test(lang) ? '، ' : ', ') + e.country : ''}</dd></div>` : ''}
              </dl>
              ${(e.tags || []).length ? `<div class="exhibition-card__tags">${e.tags.map(tag => `<span class="exhibition-card__tag">${tag}</span>`).join('')}</div>` : ''}
              ${e.parkUnit ? `
                <div class="exhibition-card__park">
                  <h4 class="exhibition-card__park-title">${t('exhibitions.parkUnit', 'واحد فناور پارک علمی')}</h4>
                  <p class="exhibition-card__park-name"><strong>${e.parkUnit.name}</strong>${e.parkUnit.host ? ` · <a href="${e.parkUnit.hostUrl || '#'}" target="_blank" rel="noopener noreferrer" class="service-card__link">${e.parkUnit.host}</a>` : ''}</p>
                  ${e.parkUnit.product ? `<p class="exhibition-card__park-product">${t('exhibitions.product', 'محصول')}: ${e.parkUnit.product}</p>` : ''}
                  ${e.parkUnit.note ? `<p class="exhibition-card__park-note">${e.parkUnit.note}${e.parkUnit.period ? ` · ${e.parkUnit.period}` : ''}</p>` : ''}
                  ${e.parkUnit.productSlug ? `<a href="${path(e.parkUnit.productSlug)}" class="service-card__link">${t('exhibitions.viewProduct', 'مشاهده محصول')}${linkArrow()}</a>` : ''}
                </div>
              ` : ''}
              ${(e.relatedPress || []).length ? `
                <div class="exhibition-card__press">
                  <h4 class="exhibition-card__press-title">${t('exhibitions.relatedPress', 'منابع مرتبط')}</h4>
                  <ul class="exhibition-card__press-list">
                    ${e.relatedPress.map(p => `<li><a href="${p.url}" target="_blank" rel="noopener noreferrer" class="service-card__link">${p.label}${linkArrow()}</a></li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              <footer class="exhibition-card__footer">
                ${e.sourceUrl ? `<a href="${e.sourceUrl}" target="_blank" rel="noopener noreferrer" class="service-card__link">${e.sourceLabel || e.source}${linkArrow()}</a>` : ''}
                ${e.sourceHistoryUrl ? ` · <a href="${e.sourceHistoryUrl}" target="_blank" rel="noopener noreferrer" class="service-card__link">${t('exhibitions.history', 'تاریخچه نمایشگاه')}${linkArrow()}</a>` : ''}
              </footer>
            </article>
          `).join('')}
        </div>`;
    }

    const achEl = document.getElementById('intelAchievements');
    if (achEl && I.achievements && I.achievements.length) {
      achEl.innerHTML = `
        <div class="achievements-grid">
          ${I.achievements.map(a => `
            <article class="achievement-card">
              <a href="${path(a.slug)}" class="achievement-card__media">
                <img src="${path(a.image)}" alt="${a.title}" loading="lazy" width="480" height="280"${hideBrokenImg()}>
              </a>
              <div class="achievement-card__body">
                <span class="achievement-card__year">${a.year}</span>
                <h3><a href="${path(a.slug)}">${a.title}</a></h3>
                <p>${a.desc}</p>
                <div class="achievement-card__tags">
                  ${(a.tags || []).map(tag => `<span class="achievement-card__tag">${tag}</span>`).join('')}
                </div>
                <footer class="achievement-card__footer">
                  ${(a.pressLinks && a.pressLinks.length)
                    ? a.pressLinks.map(p => `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="service-card__link">${p.label}${linkArrow()}</a>`).join(' · ') + ' · '
                    : (a.pressUrl ? `<a href="${a.pressUrl}" target="_blank" rel="noopener noreferrer" class="service-card__link">${a.pressLabel || 'Press'}${linkArrow()}</a> · ` : '')}
                  ${a.videoUrl ? `<a href="${a.videoUrl}" target="_blank" rel="noopener noreferrer" class="service-card__link">${a.videoLabel || 'YouTube'}${linkArrow()}</a> · ` : ''}
                  <a href="${a.sourceUrl}" target="_blank" rel="noopener noreferrer" class="service-card__link">${a.source}${linkArrow()}</a>
                </footer>
              </div>
            </article>
          `).join('')}
        </div>`;
    }

    const srcEl = document.getElementById('intelVerifiedSources');
    if (srcEl && I.verifiedSources && I.verifiedSources.length) {
      srcEl.innerHTML = `
        <div class="verified-sources-grid">
          ${I.verifiedSources.map(g => `
            <div class="verified-sources-group">
              <h3 class="verified-sources-group__title">${g.group}</h3>
              <ul class="verified-sources-list">
                ${g.items.map(item => `
                  <li class="verified-sources-item">
                    <a href="${item.url}" target="_blank" rel="noopener noreferrer me" class="verified-sources-item__link">${item.label}${linkArrow()}</a>
                    ${item.date ? `<span class="verified-sources-item__date">${item.date}</span>` : ''}
                    ${item.note ? `<p class="verified-sources-item__note">${item.note}</p>` : ''}
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>`;
    }

    const proofEl = document.getElementById('intelSocialProof');
    if (proofEl) {
      proofEl.innerHTML = `
        <div class="intel-proof-grid">
          ${I.socialProof.highlights.map(h => `
            <article class="intel-proof-card">
              <span class="intel-proof-card__cat">${h.category}</span>
              <p>${h.text}</p>
              <footer><cite>${h.source}</cite></footer>
            </article>
          `).join('')}
        </div>
        <ul class="intel-trust-list">
          ${I.socialProof.trustSignals.map(s => `<li>${s}</li>`).join('')}
        </ul>`;
    }

    const faqEl = document.getElementById('intelFaq');
    if (faqEl) {
      const dir = window.BIZDAVAR_I18N?.dict?.dir || document.documentElement.dir || 'rtl';
      faqEl.innerHTML = I.faqIntel.map(item => `
        <details class="faq-item" dir="${dir}">
          <summary dir="${dir}">${item.q}</summary>
          <p dir="${dir}">${item.a}</p>
        </details>
      `).join('');
    }
  };

  function industrialBrandCard(p) {
    const href = p.internal ? siteLink(p.url) : p.url;
    const external = !p.internal && p.url && String(p.url).startsWith('http');
    const tags = (p.tags || []).map(tag => `<span class="industrial-card__tag">${tag}</span>`).join('');
    const brand = String(p.name || '').toLowerCase().replace(/\s+/g, '-');
    const accentClass = (a) => (a ? ` industrial-card--${a}` : '');
    return `
      <a href="${href}" class="industrial-card industrial-card--link${p.photo ? ' industrial-card--photo' : ''}${accentClass(p.accent)}"
         data-brand="${brand}"
         ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        ${p.photo ? `<div class="industrial-card__media"><img src="${path(p.photo)}" alt="${p.name}" loading="lazy" decoding="async" width="640" height="400"${hideBrokenImg()}></div>` : ''}
        <div class="industrial-card__head">
          <div class="industrial-card__logo">
            ${p.logo
              ? `<img src="${path(p.logo)}" alt="${p.name}" loading="lazy" width="140" height="48">`
              : `<span class="industrial-card__logo-text">${p.name}</span>`}
          </div>
          ${p.badge ? `<span class="industrial-card__badge">${p.badge}</span>` : ''}
        </div>
        <div class="industrial-card__body">
          <h3 class="industrial-card__title">${p.title}</h3>
          <p class="industrial-card__desc">${p.desc}</p>
          ${tags ? `<div class="industrial-card__tags">${tags}</div>` : ''}
          <span class="industrial-card__cta">${p.cta || t('common.learnMore', 'بیشتر بدانید')}${linkArrow()}</span>
        </div>
      </a>`;
  }

  window.renderIndustrialSection = function (containerId) {

    const el = document.getElementById(containerId);

    const products = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getIndustrialProducts() : C.industrialProducts;

    if (!el || !products || !products.length) return;

    const cards = products.map(industrialBrandCard).join('');

    el.innerHTML = `

      <section class="section section--gray landing-industrial" id="products" aria-labelledby="industrial-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">${t('industrial.eyebrow')}</span>

            <h2 class="section__title" id="industrial-heading">${t('industrial.title')}</h2>

            <p class="section__desc">${t('industrial.desc')}</p>

          </div>

          <figure class="industrial-visual">
            <img src="/assets/images/content/home-path-supply-800.webp"
                 srcset="/assets/images/content/home-path-supply-800.webp 800w, /assets/images/content/home-path-supply.webp 1400w"
                 sizes="(min-width: 1025px) 1100px, 92vw"
                 width="1400" height="900" loading="lazy" decoding="async"
                 alt="${t('industrial.visualAlt', 'Industrial sensors and export crates ready for B2B supply')}">
            <figcaption>
              <strong>${t('industrial.visualLead')}</strong>
              <p>${t('industrial.visualNote')}</p>
              <ol class="industrial-steps">
                <li>
                  <span class="industrial-steps__icon" data-bd-icon="document" data-bd-size="20" aria-hidden="true"></span>
                  <span>${t('industrial.step1', 'انتخاب مدل')}</span>
                </li>
                <li>
                  <span class="industrial-steps__icon" data-bd-icon="coin" data-bd-size="20" aria-hidden="true"></span>
                  <span>${t('industrial.step2', 'پیش‌فاکتور فارسی')}</span>
                </li>
                <li>
                  <span class="industrial-steps__icon" data-bd-icon="ship" data-bd-size="20" aria-hidden="true"></span>
                  <span>${t('industrial.step3', 'تحویل تا ایران')}</span>
                </li>
              </ol>
            </figcaption>
          </figure>

          <div class="industrial-grid industrial-grid--brands">${cards}</div>

          <div class="industrial-cta-bar">

            <div class="industrial-cta-bar__content">

              <span class="industrial-cta-bar__icon" data-bd-icon="wrench" data-bd-size="28" aria-hidden="true"></span>

              <div>

                <strong>${t('industrial.ctaTitle')}</strong>

                <p>${t('industrial.ctaDesc')}</p>

              </div>

            </div>

            <div class="industrial-cta-bar__actions">

              <a href="${siteLink(R.contact)}" class="btn btn--yellow">${t('industrial.ctaBtn')}</a>

              <a href="${siteLink(R.products)}#supply" class="btn btn--outline">${t('industrial.ctaLink')}</a>

            </div>

          </div>

        </div>

      </section>`;

    if (typeof window.initDataIcons === 'function') window.initDataIcons(el);
  };



  window.renderProcessSection = function (containerId) {

    const el = document.getElementById(containerId);

    const steps = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getProcessSteps() : C.processSteps;
    if (!el || !steps || !steps.length) return;

    el.innerHTML = `

      <section class="section section--gray process-section" aria-labelledby="process-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">${t('process.eyebrow')}</span>

            <h2 class="section__title" id="process-heading">${t('process.title')}</h2>

            <p class="section__desc">${t('process.desc')}</p>

          </div>

          <ol class="process-grid">

            ${steps.map(step => `

              <li class="process-step">

                <span class="process-step__num" aria-hidden="true">${step.num}</span>

                <h3 class="process-step__title">${step.title}</h3>

                <p class="process-step__desc">${step.desc}</p>

              </li>

            `).join('')}

          </ol>

        </div>

      </section>`;

  };

  function ownedProductHref(p) {
    if (p.page) return path(p.page);
    return `${path('pages/contact.html')}?product=${encodeURIComponent(p.id)}`;
  }

  function ownedProductImageSrc(p) {
    const rel = (p.image || p.logo || 'assets/images/products/product-default.svg').replace(/^\//, '');
    const abs = window.resolveAssetPath
      ? window.resolveAssetPath(rel)
      : path(rel);
    const bust = (window.BIZDAVAR_OWNED_PRODUCTS && window.BIZDAVAR_OWNED_PRODUCTS.imgVersion) || '3';
    return `${abs}${abs.includes('?') ? '&' : '?'}v=${bust}`;
  }

  function ownedProductImageFallback(p) {
    if (p.logo && p.logo !== p.image) {
      return ownedProductImageSrc({ ...p, image: p.logo });
    }
    return ownedProductImageSrc({ image: 'assets/images/products/product-default.svg' });
  }

  function ownedProductCardHtml(p, opts) {
    const href = ownedProductHref(p);
    const statusKey = p.status === 'live' ? 'productsPage.statusLive' : 'productsPage.statusCatalog';
    const statusLabel = t(statusKey, p.status === 'live' ? 'Product page' : 'Quote');
    const tags = (p.tags || []).map(tag => {
      const ltr = /[$+]|\d+\s*\/\s*[a-z]/i.test(tag);
      return `<span class="owned-product-card__tag"${ltr ? ' dir="ltr"' : ''}>${tag}</span>`;
    }).join('');
    const img = ownedProductImageSrc(p);
    const fallback = ownedProductImageFallback(p);
    const isPhoto = /\.(jpe?g|webp|png)$/i.test(p.image || '');
    const imgOnError = `onerror="if(this.dataset.fbk!=='1'){this.dataset.fbk='1';this.src='${fallback}';}else{this.closest('.owned-product-card__media').classList.add('owned-product-card__media--empty');}"`;
    if (opts && opts.home) {
      const line = p.homeDesc || p.title || '';
      return `
      <article class="owned-product-card owned-product-card--home" data-category="${p.category}" data-product="${p.id}" id="product-${p.id}">
        <a href="${href}" class="owned-product-card__overlay">
          <div class="owned-product-card__media">
            <img src="${img}" alt="${p.name || p.id}" loading="lazy" decoding="async" width="800" height="500" ${imgOnError}>
          </div>
          <div class="owned-product-card__head">
            <span class="owned-product-card__cat">${p.categoryLabel || ''}</span>
          </div>
          <div class="owned-product-card__body">
            <h3>${p.name}</h3>
            ${line ? `<p class="owned-product-card__home-desc">${line}</p>` : ''}
            <span class="owned-product-card__cta">${p.status === 'live' ? t('productsPage.statusLive', statusLabel) : t('ownedProducts.contact', 'استعلام')}${linkArrow()}</span>
          </div>
        </a>
      </article>`;
    }
    return `
      <article class="owned-product-card" data-category="${p.category}" id="product-${p.id}">
        <a href="${href}" class="owned-product-card__media${isPhoto ? '' : ' owned-product-card__media--art'}">
          <img src="${img}" alt="${p.name || p.id}" loading="lazy" decoding="async" width="480" height="300" ${imgOnError}>
        </a>
        <div class="owned-product-card__body">
          <span class="owned-product-card__cat">${p.categoryLabel || ''}</span>
          <h3><a href="${href}">${p.name}</a></h3>
          <p class="owned-product-card__subtitle">${p.title || ''}</p>
          <p class="owned-product-card__desc">${p.desc || ''}</p>
          ${tags ? `<div class="owned-product-card__tags">${tags}</div>` : ''}
          <footer class="owned-product-card__footer">
            <a href="${href}" class="service-card__link">${p.status === 'live' ? t('productsPage.statusLive', statusLabel) : t('ownedProducts.contact', 'استعلام')}${linkArrow()}</a>
          </footer>
        </div>
      </article>`;
  }

  window.renderOwnedProductsGrid = function (containerId, options) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const opts = options || {};
    const I18n = window.BIZDAVAR_I18N;
    let items = I18n ? I18n.getOwnedProducts() : (window.BIZDAVAR_OWNED_PRODUCTS?.items || []);
    items = items.filter(p => p && p.id !== 'bizseat' && !p.hidden);
    if (opts.featured) items = items.filter(p => p.featured);
    if (opts.status) items = items.filter(p => p.status === opts.status);
    if (opts.category && opts.category !== 'all') items = items.filter(p => p.category === opts.category);
    if (opts.homeOrder) {
      const order = window.BIZDAVAR_OWNED_PRODUCTS?.homeOrder || [];
      items = order.map(id => items.find(p => p.id === id)).filter(Boolean);
    }
    if (opts.limit) items = items.slice(0, opts.limit);
    el.innerHTML = items.length
      ? items.map(p => ownedProductCardHtml(p, opts)).join('')
      : `<p class="owned-products-empty">${t('productsPage.empty', 'محصولی برای نمایش نیست.')}</p>`;
    if (typeof window.refreshBizIcons === 'function') window.refreshBizIcons(el);
  };

  window.renderOwnedProductsSection = function (containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = `
      <section class="section landing-owned-products" id="owned-products" aria-labelledby="owned-products-heading">
        <div class="container">
          <div class="section__header section__header--pro">
            <span class="section__eyebrow">${t('home.ownedEyebrow', t('ownedProducts.eyebrow'))}</span>
            <h2 class="section__title" id="owned-products-heading">${t('home.ownedTitle', t('ownedProducts.title'))}</h2>
            <p class="section__desc">${t('home.ownedDesc', t('ownedProducts.desc'))}</p>
          </div>
          <div class="owned-products-grid" id="ownedProductsHomeGrid"></div>
          <p class="text-center mt-24 landing-owned-products__links">
            <a href="${path('pages/products.html')}" class="btn btn--outline">${t('home.ownedCta', t('ownedProducts.viewAll'))}</a>
            <a href="${path('pages/about.html')}#achievements" class="service-card__link">${t('home.ownedAchievements', 'دستاوردها و تولید')}</a>
          </p>
        </div>
      </section>`;
    renderOwnedProductsGrid('ownedProductsHomeGrid', { featured: true, homeOrder: true, limit: 2, home: true });
  };

  window.initOwnedProductsPage = function () {
    const filterEl = document.getElementById('productFilters');
    const gridEl = document.getElementById('ownedProductsGrid');
    if (!gridEl) return;

    const I18n = window.BIZDAVAR_I18N;
    const categories = I18n ? I18n.getOwnedProductCategories() : (window.BIZDAVAR_OWNED_PRODUCTS?.categories || []);
    const params = new URLSearchParams(window.location.search);
    const catFromQuery = params.get('cat');
    let active = categories.some(c => c.id === catFromQuery) ? catFromQuery : 'all';

    const allItems = (I18n ? I18n.getOwnedProducts() : (window.BIZDAVAR_OWNED_PRODUCTS?.items || [])).filter(p => p && p.id !== 'bizseat' && !p.hidden);
    const visibleCats = categories.filter(c => allItems.some(p => p.category === c.id));
    const pillarsEl = document.getElementById('productPillars');
    if (pillarsEl) {
      pillarsEl.innerHTML = visibleCats.map(c => {
        const count = allItems.filter(p => p.category === c.id).length;
        return `<a href="#catalog" class="products-pillar" data-cat="${c.id}">
          <span class="products-pillar__count">${count}</span>
          <span class="products-pillar__label">${c.label}</span>
          ${c.desc ? `<span class="products-pillar__desc">${c.desc}</span>` : ''}
        </a>`;
      }).join('');
    }

    function setActive(cat, scroll) {
      active = cat || 'all';
      if (filterEl) {
        filterEl.querySelectorAll('.product-filter__btn').forEach(b => {
          b.classList.toggle('is-active', b.getAttribute('data-cat') === active);
        });
      }
      renderOwnedProductsGrid('ownedProductsGrid', { category: active });
      if (scroll) {
        const target = document.getElementById('catalog');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function renderGrid() {
      renderOwnedProductsGrid('ownedProductsGrid', { category: active });
    }

    if (filterEl) {
      const allLabel = t('productsPage.filterAll', 'همه');
      filterEl.innerHTML = [
        `<button type="button" class="product-filter__btn is-active" data-cat="all">${allLabel}</button>`,
        ...visibleCats.map(c =>
          `<button type="button" class="product-filter__btn" data-cat="${c.id}">${c.label}</button>`
        )
      ].join('');

      if (!filterEl.dataset.bound) {
        filterEl.dataset.bound = '1';
        filterEl.addEventListener('click', (e) => {
          const btn = e.target.closest('[data-cat]');
          if (!btn) return;
          setActive(btn.getAttribute('data-cat'), false);
        });
      }
    }

    if (pillarsEl && !pillarsEl.dataset.bound) {
      pillarsEl.dataset.bound = '1';
      pillarsEl.addEventListener('click', (e) => {
        const link = e.target.closest('[data-cat]');
        if (!link) return;
        e.preventDefault();
        setActive(link.getAttribute('data-cat'), true);
      });
    }

    const liveGrid = document.getElementById('ownedProductsLive');
    if (liveGrid) {
      renderOwnedProductsGrid('ownedProductsLive', { status: 'live', category: 'software' });
    }

    const supplyGrid = document.getElementById('productsSupplyGrid');
    if (supplyGrid) {
      const brands = window.BIZDAVAR_I18N
        ? window.BIZDAVAR_I18N.getIndustrialProducts()
        : (C.industrialProducts || []);
      supplyGrid.classList.add('industrial-grid--brands');
      supplyGrid.innerHTML = brands.map(industrialBrandCard).join('');
    }

    setActive(active, false);
  };

})();
