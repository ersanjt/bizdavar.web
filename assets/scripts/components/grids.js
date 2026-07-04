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

  window.renderBlogGrid = function (containerId, limit) {

    const el = document.getElementById(containerId);

    if (!el || !C.blogPosts) return;

    const sourcePosts = window.BIZDAVAR_I18N?.getBlogPosts
      ? window.BIZDAVAR_I18N.getBlogPosts()
      : C.blogPosts;
    const posts = limit ? sourcePosts.slice(0, limit) : sourcePosts;

    el.innerHTML = posts.map(p => `

      <article class="blog-item">

        <span class="blog-item__cat">${p.category}</span>

        <h3><a href="${path(p.slug)}">${p.title}</a></h3>

        <p>${p.excerpt}</p>

        <a href="${path(p.slug)}" class="service-card__link">${t('common.readMore', 'ادامه مطلب')}${linkArrow()}</a>

      </article>

    `).join('');

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
        ? `<div class="portfolio-card__logo"><img src="${path(p.logo)}" alt="${p.name}" loading="lazy" width="160" height="52"></div>`
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

          <a href="${url}" class="portfolio-card__link"

             ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>

            ${external ? t('common.viewSite', 'مشاهده وبسایت') : t('common.viewPage', 'مشاهده صفحه')}${linkArrow()}

          </a>

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
        ? `<img src="${path(p.logo)}" alt="${p.name}" loading="lazy" class="client-item__logo">`
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

                <strong class="trust-bar__value">${m.value}</strong>

                <span class="trust-bar__label">${m.label}</span>

              </li>

            `).join('')}

          </ul>

        </div>

      </section>`;

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
            <div class="intel-stat"><strong>${f.projectsCount}</strong><span>${t('credibility.projects')}</span></div>
            <div class="intel-stat"><strong>${f.countriesCount}</strong><span>${t('credibility.countries')}</span></div>
            <div class="intel-stat"><strong>${f.experienceYears}</strong><span>${t('credibility.years')}</span></div>
            <div class="intel-stat"><strong>${foundedDisplay}</strong><span>${t('credibility.founded')}</span></div>
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
          <p class="intel-note text-center mt-24">${t('credibility.sources')}: <a href="${f.linkedin}" target="_blank" rel="noopener noreferrer me">${t('credibility.founderLinkedin')}</a> · <a href="${path(R.portfolio)}">${t('credibility.portfolio')}</a> · <a href="${path(R.about)}">${t('credibility.fullAbout')}</a></p>
        </div>
      </section>`;
  };

  window.renderCompanyIntelAbout = function () {
    const I = window.BIZDAVAR_INTEL;
    if (!I) return;
    const f = I.leadership.founder;

    const identityEl = document.getElementById('intelIdentity');
    if (identityEl) {
      const dirs = (I.identity.directories || []).map(d => `
        <a href="${d.url}" class="service-card__link" target="_blank" rel="noopener noreferrer me">${d.label}${linkArrow()}</a>
        <span class="intel-legal-note">${d.note}</span>
      `).join('');
      identityEl.innerHTML = `
        <div class="intel-identity-grid">
          <dl class="intel-dl">
            <div><dt>برند بین‌المللی</dt><dd>${I.identity.legalNameFa} (${I.identity.legalName})</dd></div>
            <div><dt>ثبت ارمنستان</dt><dd><strong>${I.identity.armeniaLegalName}</strong> (${I.identity.armeniaLegalType})<br><span class="intel-legal-brand">${I.identity.armeniaBrandFa}</span></dd></div>
            <div><dt>شخصیت حقوقی ایران</dt><dd><strong>${I.identity.iranLegalNameFa}</strong><br><span class="intel-legal-brand">برند: ${I.identity.iranBrandFa}</span></dd></div>
            <div><dt>تأسیس</dt><dd>${I.identity.foundedDisplay}</dd></div>
            <div><dt>دامنه‌ها</dt><dd dir="ltr">${I.identity.domains.join(' · ')}</dd></div>
            <div><dt>زبان‌های خدمت</dt><dd>${I.identity.languages.join('، ')}</dd></div>
            ${dirs ? `<div><dt>پروفایل B2B</dt><dd class="intel-legal-links">${dirs}</dd></div>` : ''}
          </dl>
          <ul class="intel-hq-list">
            ${I.identity.headquarters.map(h => `
              <li class="${h.badge === 'HQ' ? 'intel-hq-list__item--hq' : h.badge === 'IR' ? 'intel-hq-list__item--ir' : h.badge === 'AM' ? 'intel-hq-list__item--am' : ''}">
                <strong>${h.city}، ${h.country}${h.badge ? ` <span class="intel-hq-list__badge">${h.badge}</span>` : ''}</strong>
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
            <h3>${f.nameFa}</h3>
            <p>${f.titleFa} · ${f.experienceYears} سال · ${f.projectsCount} پروژه</p>
            <a href="${f.linkedin}" class="service-card__link" target="_blank" rel="noopener noreferrer me">پروفایل LinkedIn${linkArrow()}</a>
          </div>
          <p>${f.bioFa}</p>
          <div class="intel-tags">
            ${f.expertise.map(e => `<span class="intel-tag">${e}</span>`).join('')}
          </div>
          <h4>تحصیلات</h4>
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
      const waMsg = encodeURIComponent(C.contact.whatsappMessage || '');
      const renderOfficeHub = (hubData, opts) => {
        if (!hubData) return '';
        const badge = opts.badge || 'دفتر';
        const waLabel = opts.waLabel || 'واتساپ';
        return `
        <article class="presence-istanbul-hub${opts.modifier ? ' ' + opts.modifier : ''}">
          <div class="presence-istanbul-hub__head">
            <div>
              <span class="presence-istanbul-hub__eyebrow">${hubData.subtitle || ''}</span>
              <h3 class="presence-istanbul-hub__title">${hubData.title}</h3>
              <p class="presence-istanbul-hub__location">${hubData.city}${hubData.province ? '، ' + hubData.province : ''}، ${hubData.country}${hubData.timezone ? ' · ' + hubData.timezone : ''}</p>
              ${hubData.brand ? `<p class="presence-istanbul-hub__brand">${hubData.brand}</p>` : ''}
            </div>
            <span class="presence-country__badge presence-istanbul-hub__badge">${badge}</span>
          </div>
          <p class="presence-istanbul-hub__intro">${hubData.intro}</p>
          <ul class="presence-istanbul-hub__services">
            ${(hubData.services || []).map(s => `<li>${s}</li>`).join('')}
          </ul>
          <div class="presence-istanbul-hub__meta">
            ${hubData.address ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">آدرس</span><span>${hubData.address}</span></div>` : ''}
            ${hubData.workingHours ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">ساعات کاری</span><span>${hubData.workingHours}</span></div>` : ''}
            ${hubData.languages ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">زبان‌ها</span><span>${hubData.languages.join(' · ')}</span></div>` : ''}
            ${hubData.phone ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">تماس</span><a href="tel:${hubData.phoneTel || hubData.phone}" dir="ltr">${hubData.phone}</a></div>` : ''}
            ${hubData.email ? `<div class="presence-istanbul-hub__meta-item"><span class="presence-istanbul-hub__label">ایمیل</span><a href="mailto:${hubData.email}" dir="ltr">${hubData.email}</a></div>` : ''}
          </div>
          <div class="presence-istanbul-hub__actions">
            ${hubData.whatsapp ? `<a href="https://wa.me/${hubData.whatsapp}?text=${waMsg}" class="btn btn--yellow" target="_blank" rel="noopener noreferrer">${waLabel}</a>` : ''}
            ${hubData.profileUrl ? `<a href="${hubData.profileUrl}" class="btn btn--outline" target="_blank" rel="noopener noreferrer">${hubData.profileLabel || 'پروفایل B2B'}</a>` : ''}
            <a href="${path(R.contact)}" class="btn btn--primary">فرم تماس</a>
          </div>
          ${hubData.note ? `<p class="presence-istanbul-hub__note">${hubData.note}</p>` : ''}
          ${hubData.exhibitionsNote ? `<p class="presence-istanbul-hub__note presence-istanbul-hub__note--event">${hubData.exhibitionsNote}</p>` : ''}
        </article>`;
      };
      const hubHtml = renderOfficeHub(hub, { badge: 'دفتر اصلی', waLabel: 'واتساپ استانبول' });
      const yerevanHtml = renderOfficeHub(yerevan, { badge: 'ارمنستان', waLabel: 'واتساپ ارمنستان', modifier: 'presence-istanbul-hub--armenia' });
      const tabrizHtml = renderOfficeHub(tabriz, { badge: 'ایران', waLabel: 'واتساپ ایران', modifier: 'presence-istanbul-hub--iran' });

      presenceEl.innerHTML = `
        <div class="presence-showcase">
          <div class="presence-showcase__hero">
            <div class="presence-showcase__map">
              <img src="${path(P.mapImage || 'assets/images/content/presence-map.svg')}" alt="نقشه حضور جهانی بیزدوار — دفتر اصلی استانبول" width="480" height="300" loading="lazy">
            </div>
            <div class="presence-showcase__intro">
              <p class="presence-showcase__desc">${P.summaryFa}</p>
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
                        ${c.hub ? '<span class="presence-country__badge">هاب</span>' : ''}
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
              <dl class="exhibition-card__meta">
                ${e.section ? `<div><dt>${t('exhibitions.section', 'بخش')}</dt><dd>${e.section}</dd></div>` : ''}
                ${e.zone ? `<div><dt>${t('exhibitions.zone', 'زون')}</dt><dd>${e.zone}</dd></div>` : ''}
                ${e.booth ? `<div><dt>${t('exhibitions.booth', 'غرفه')}</dt><dd>${e.booth}</dd></div>` : ''}
                ${e.city ? `<div><dt>${t('exhibitions.location', 'مکان')}</dt><dd>${e.city}${e.country ? '، ' + e.country : ''}</dd></div>` : ''}
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
                <img src="${path(a.image)}" alt="${a.title}" loading="lazy" width="480" height="280">
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
      faqEl.innerHTML = I.faqIntel.map(item => `
        <details class="faq-item">
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>
      `).join('');
    }
  };

  window.renderIndustrialSection = function (containerId) {

    const el = document.getElementById(containerId);

    const products = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.getIndustrialProducts() : C.industrialProducts;

    if (!el || !products || !products.length) return;

    const accentClass = (a) => (a ? ` industrial-card--${a}` : '');

    const cards = products.map(p => {

      const href = p.internal ? path(p.url) : p.url;

      const external = !p.internal && p.url.startsWith('http');

      const tags = (p.tags || []).map(t => `<span class="industrial-card__tag">${t}</span>`).join('');

      return `

        <a href="${href}" class="industrial-card industrial-card--link${accentClass(p.accent)}"

           ${external ? 'target="_blank" rel="noopener noreferrer"' : ''}>

          <div class="industrial-card__head">

            <div class="industrial-card__logo">
              ${p.logo
                ? `<img src="${path(p.logo)}" alt="${p.name}" loading="lazy" width="140" height="48">`
                : `<span class="industrial-card__logo-text">${p.name}</span>`}
            </div>

            ${p.badge ? `<span class="industrial-card__badge">${p.badge}</span>` : ''}

          </div>

          <h3 class="industrial-card__title">${p.title}</h3>

          <p class="industrial-card__desc">${p.desc}</p>

          ${tags ? `<div class="industrial-card__tags">${tags}</div>` : ''}

          <span class="industrial-card__cta">${p.cta || t('common.learnMore', 'بیشتر بدانید')}${linkArrow()}</span>

        </a>`;

    }).join('');

    el.innerHTML = `

      <section class="section section--gray landing-industrial" id="products" aria-labelledby="industrial-heading">

        <div class="container">

          <div class="section__header section__header--pro">

            <span class="section__eyebrow">${t('industrial.eyebrow')}</span>

            <h2 class="section__title" id="industrial-heading">${t('industrial.title')}</h2>

            <p class="section__desc">${t('industrial.desc')}</p>

          </div>

          <div class="industrial-grid">${cards}</div>

          <div class="industrial-cta-bar">

            <div class="industrial-cta-bar__content">

              <span class="industrial-cta-bar__icon" data-bd-icon="wrench" data-bd-size="28" aria-hidden="true"></span>

              <div>

                <strong>${t('industrial.ctaTitle')}</strong>

                <p>${t('industrial.ctaDesc')}</p>

              </div>

            </div>

            <div class="industrial-cta-bar__actions">

              <a href="${path(R.contact)}" class="btn btn--yellow">${t('industrial.ctaBtn')}</a>

              <a href="${path(R.services)}#industrial" class="btn btn--outline">${t('industrial.ctaLink')}</a>

            </div>

          </div>

        </div>

      </section>`;

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

  function ownedProductCardHtml(p) {
    const href = ownedProductHref(p);
    const external = false;
    const statusKey = p.status === 'live' ? 'productsPage.statusLive' : 'productsPage.statusCatalog';
    const statusLabel = t(statusKey, p.status === 'live' ? 'Product page' : 'Quote');
    const tags = (p.tags || []).map(tag => `<span class="owned-product-card__tag">${tag}</span>`).join('');
    const img = p.image ? path(p.image) : path('assets/images/products/product-default.svg');
    return `
      <article class="owned-product-card" data-category="${p.category}" id="product-${p.id}">
        <a href="${href}" class="owned-product-card__media">
          <img src="${img}" alt="${p.name || p.id}" loading="lazy" width="480" height="300">
        </a>
        <div class="owned-product-card__body">
          <span class="owned-product-card__cat">${p.categoryLabel || ''}</span>
          <h3><a href="${href}">${p.name}</a></h3>
          <p class="owned-product-card__subtitle">${p.title || ''}</p>
          <p class="owned-product-card__desc">${p.desc || ''}</p>
          ${tags ? `<div class="owned-product-card__tags">${tags}</div>` : ''}
          <footer class="owned-product-card__footer">
            <span class="owned-product-card__status">${statusLabel}</span>
            <a href="${href}" class="service-card__link">${p.status === 'live' ? t('common.learnMore', 'بیشتر') : t('ownedProducts.contact', 'استعلام')}${linkArrow()}</a>
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
    if (opts.featured) items = items.filter(p => p.featured);
    if (opts.category && opts.category !== 'all') items = items.filter(p => p.category === opts.category);
    if (opts.limit) items = items.slice(0, opts.limit);
    el.innerHTML = items.map(p => ownedProductCardHtml(p)).join('');
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
          <p class="text-center mt-24">
            <a href="${path('pages/products.html')}" class="btn btn--outline">${t('home.ownedCta', t('ownedProducts.viewAll'))}</a>
          </p>
        </div>
      </section>`;
    renderOwnedProductsGrid('ownedProductsHomeGrid', { featured: true, limit: 4 });
  };

  window.initOwnedProductsPage = function () {
    const filterEl = document.getElementById('productFilters');
    const gridEl = document.getElementById('ownedProductsGrid');
    if (!gridEl) return;

    const I18n = window.BIZDAVAR_I18N;
    const categories = I18n ? I18n.getOwnedProductCategories() : [];
    let active = 'all';

    function renderGrid() {
      renderOwnedProductsGrid('ownedProductsGrid', { category: active });
    }

    if (filterEl) {
      const allLabel = t('productsPage.filterAll', 'All');
      filterEl.innerHTML = [
        `<button type="button" class="product-filter__btn is-active" data-cat="all">${allLabel}</button>`,
        ...categories.map(c =>
          `<button type="button" class="product-filter__btn" data-cat="${c.id}">${c.label}</button>`
        )
      ].join('');

      filterEl.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-cat]');
        if (!btn) return;
        active = btn.getAttribute('data-cat');
        filterEl.querySelectorAll('.product-filter__btn').forEach(b => b.classList.toggle('is-active', b === btn));
        renderGrid();
      });
    }

    renderGrid();
  };

})();
