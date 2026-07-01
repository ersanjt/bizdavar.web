#!/usr/bin/env node
/**
 * Sync Persian fallback text in HTML from BIZDAVAR_LOCALES.fa.
 * Fixes ???? corruption in static HTML for SEO and no-JS crawlers.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

function loadFaDict() {
  const ctx = vm.createContext({ window: {}, console });
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/scripts/i18n/locales.js'), 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/scripts/i18n/locales-pages.js'), 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/scripts/i18n/locale-seo.js'), 'utf8'), ctx);
  return ctx.window.BIZDAVAR_LOCALES.fa;
}

function getNested(obj, keyPath) {
  return keyPath.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

function walkHtml(dir, list = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walkHtml(full, list);
    else if (name.endsWith('.html')) list.push(full);
  }
  return list;
}

function needsFix(text) {
  return /[?�]/.test(text);
}

function jsonLinks(links) {
  return JSON.stringify(links.map(({ title, url, desc, titleKey, descKey }) => {
    const o = { title, url, desc };
    if (titleKey) o.titleKey = titleKey;
    if (descKey) o.descKey = descKey;
    return o;
  }));
}

const brandNavAria = {
  vega: 'دسته‌بندی محصولات VEGA',
  prosense: 'دسته‌بندی محصولات Prosense',
  teltonika: 'دسته‌بندی محصولات Teltonika'
};

const brandRelated = {
  vega: [
    { title: 'محصولات Prosense', url: 'prosense', desc: 'دتکتور گاز و شعله' },
    { title: 'خدمات صنعتی', url: 'services#industrial', desc: 'مشاوره و تامین' },
    { title: 'تماس و استعلام', url: 'contact', desc: 'مشاوره رایگان' }
  ],
  prosense: [
    { title: 'محصولات VEGA', url: 'vega', desc: 'سنسور سطح و فشار' },
    { title: 'Teltonika GPS', url: 'teltonika', desc: 'Fleet Telematics' },
    { title: 'خدمات صنعتی', url: 'services#industrial', desc: 'مشاوره B2B' },
    { title: 'تماس', url: 'contact', desc: 'استعلام قیمت' }
  ],
  teltonika: [
    { title: 'محصولات VEGA', url: 'vega', desc: 'سنسور سطح و فشار' },
    { title: 'محصولات Prosense', url: 'prosense', desc: 'دتکتور گاز و شعله' },
    { title: 'خدمات صنعتی', url: 'services#industrial', desc: 'مشاوره و تامین' },
    { title: 'تماس', url: 'contact', desc: 'استعلام قیمت' }
  ]
};

const pageRelated = {
  about: [
    { title: 'خدمات ما', url: 'services', desc: 'بازاریابی دیجیتال، وب، SMM و صنعت' },
    { title: 'نمونه‌کارها', url: 'portfolio', desc: 'ZedPay، BZ Diamond و...' },
    { title: 'تماس با ما', url: 'contact', desc: 'مشاوره رایگان' }
  ],
  fast: [
    { title: 'مقاله Fast Studio', url: 'articles/fast-studio', desc: 'راهنمای سفارش' },
    { title: 'خدمات طراحی وب', url: 'services#web-design', desc: 'جزئیات خدمات' },
    { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های بیزدوار' }
  ],
  biztejarat: [
    { title: 'خدمات SMM', url: 'services#smm', desc: 'مدیریت شبکه‌های اجتماعی' },
    { title: 'نمونه‌کار BZ Diamond', url: 'bz-diamond', desc: 'طراحی وب' },
    { title: 'تماس', url: 'contact', desc: 'شروع پروژه' }
  ],
  'bz-diamond': [
    { title: 'Fast Web Studio', url: 'fast', desc: 'طراحی سایت از $99' },
    { title: 'نمونه‌کارها', url: 'portfolio', desc: 'پروژه‌های دیگر' },
    { title: 'تماس', url: 'contact', desc: 'سفارش طراحی سایت' }
  ]
};

const biztejaratProducts = [
  ['VEGA', 'سنسور سطح و فشار'],
  ['Prosense', 'دتکتور گاز و شعله'],
  ['Gamak', 'الکتروموتور صنعتی'],
  ['تجهیزات صنعتی', 'مشاوره و تامین B2B']
];

function syncI18nAttrs(html, dict) {
  let changed = false;

  html = html.replace(
    /<(\w+)([^>]*)\sdata-i18n-html="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, pre, key, post, inner) => {
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val || inner === val) return m;
      changed = true;
      return `<${tag}${pre} data-i18n-html="${key}"${post}>${val}</${tag}>`;
    }
  );

  html = html.replace(
    /<(\w+)([^>]*)\sdata-i18n="([^"]+)"([^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, pre, key, post, inner) => {
      if (pre.includes('data-i18n-html') || post.includes('data-i18n-html')) return m;
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val) return m;
      if (!needsFix(inner) && inner.trim() === val.trim()) return m;
      changed = true;
      return `<${tag}${pre} data-i18n="${key}"${post}>${val}</${tag}>`;
    }
  );

  html = html.replace(
    /data-i18n-alt="([^"]+)"([^>]*)\salt="([^"]*)"/g,
    (m, key, mid, alt) => {
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val || alt === val) return m;
      changed = true;
      return `data-i18n-alt="${key}"${mid}alt="${val.replace(/"/g, '&quot;')}"`;
    }
  );

  html = html.replace(
    /alt="([^"]*)"([^>]*)\sdata-i18n-alt="([^"]+)"/g,
    (m, alt, mid, key) => {
      const val = getNested(dict, key);
      if (typeof val !== 'string' || !val || alt === val) return m;
      changed = true;
      return `alt="${val.replace(/"/g, '&quot;')}"${mid} data-i18n-alt="${key}"`;
    }
  );

  return { html, changed };
}

function syncContactPage(html, cp) {
  if (!cp) return { html, changed: false };
  let changed = false;

  html = html.replace(
    /<span class="section__tag">[^<]*<\/span>\s*<h1>[^<]*<\/h1>\s*<p>[^<]*<\/p>/,
    () => {
      changed = true;
      return `<span class="section__tag">${cp.title}</span>\n      <h1>${cp.heroTitle || cp.title}</h1>\n      <p>${cp.heroDesc || cp.subtitle}</p>`;
    }
  );

  const simple = [
    ['class="form-title"', cp.formTitle],
    ['class="form-desc"', cp.formDesc],
    ['class="btn btn--form"', cp.submit],
    ['id="whatsappBtnTr"', cp.waTr],
    ['id="whatsappBtnIr"', cp.waIr],
    ['id="privacy-note"', cp.formNote],
    ['id="formSuccess"', cp.formSuccessMailto]
  ];
  for (const [needle, text] of simple) {
    if (!text) continue;
    html = html.replace(new RegExp(`(<[^>]*${needle}[^>]*>)[^<]*`), (m, open) => {
      if (m.endsWith(text + '>') || m.includes('>' + text + '<')) return m;
      changed = true;
      return open + text;
    });
  }

  if (cp.mapTitle && cp.mapDesc) {
    html = html.replace(
      /<div class="contact-map__text">\s*<h2>[^<]*<\/h2>\s*<p>[^<]*<\/p>/,
      () => {
        changed = true;
        return `<div class="contact-map__text">\n        <h2>${cp.mapTitle}</h2>\n        <p>${cp.mapDesc}</p>`;
      }
    );
    html = html.replace(/(<img[^>]*contact-banner\.svg[^>]*)alt="[^"]*"/, (m, open) => {
      changed = true;
      return `${open}alt="${cp.mapTitle} — بیزدوار گروپ"`;
    });
  }

  return { html, changed };
}

function syncServicesBlocks(html, blocks, panels) {
  if (!Array.isArray(blocks)) return { html, changed: false };
  let changed = false;
  const ids = ['digital-marketing', 'web-design', 'smm', 'industrial'];

  ids.forEach((id, i) => {
    const b = blocks[i];
    if (!b) return;
    const sectionRe = new RegExp(`(<section[^>]*id="${id}"[\\s\\S]*?<div class="service-block__tags">)[\\s\\S]*?(</div>)`);
    const tagsHtml = b.tags.map(t => `<span class="service-block__tag">${t}</span>`).join('\n            ');
    html = html.replace(sectionRe, (m, open, close) => {
      if (m.includes(tagsHtml)) return m;
      changed = true;
      return open + '\n            ' + tagsHtml + '\n          ' + close;
    });

    const listRe = new RegExp(`(<section[^>]*id="${id}"[\\s\\S]*?<ul class="check-list">)[\\s\\S]*?(</ul>)`);
    const checksHtml = b.checks.map(c => `<li>${c}</li>`).join('\n            ');
    html = html.replace(listRe, (m, open, close) => {
      if (m.includes(checksHtml.slice(0, 20))) return m;
      changed = true;
      return open + '\n            ' + checksHtml + '\n          ' + close;
    });
  });

  if (panels?.dmImgAlt) {
    html = html.replace(
      /(<img[^>]*data-i18n-alt="servicesPage\.panels\.dmImgAlt"[^>]*|alt="[^"]*"[^>]*data-i18n-alt="servicesPage\.panels\.dmImgAlt"[^>]*)/,
      (m) => {
        if (m.includes(`alt="${panels.dmImgAlt}"`)) return m;
        changed = true;
        return m.replace(/alt="[^"]*"/, `alt="${panels.dmImgAlt}"`);
      }
    );
  }

  return { html, changed };
}

function syncAboutExtras(html, about) {
  if (!about) return { html, changed: false };
  let changed = false;

  if (Array.isArray(about.features)) {
    let fi = 0;
    html = html.replace(/(<div class="about__feature">)[^<]*/g, (m, open) => {
      const val = about.features[fi++];
      if (!val) return m;
      changed = true;
      return open + val;
    });
  }

  if (Array.isArray(about.values?.items)) {
    let ci = 0;
    html = html.replace(/(<div class="feature-item"[\s\S]*?<h3>)[^<]*/g, (m, open) => {
      const item = about.values.items[ci++];
      if (!item?.title) return m;
      changed = true;
      return open + item.title;
    });
    ci = 0;
    html = html.replace(/(<div class="feature-item"[\s\S]*?<p>)[^<]*/g, (m, open) => {
      const item = about.values.items[ci++];
      if (!item?.desc) return m;
      changed = true;
      return open + item.desc;
    });
  }

  html = html.replace(
    /(<img[^>]*about-hero\.svg[^>]*)alt="[^"]*"/,
    (m, open) => {
      const alt = 'بیزدوار گروپ — آژانس دیجیتال و تامین صنعتی';
      changed = true;
      return `${open}alt="${alt}"`;
    }
  );

  return { html, changed };
}

function syncServiceList(html, ulId, items) {
  if (!Array.isArray(items) || !items.length) return { html, changed: false };
  let changed = false;
  const listHtml = items.map(i => `<li>${i}</li>`).join('\n          ');
  const re = new RegExp(`(<ul[^>]*id="${ulId}"[^>]*>)[\\s\\S]*?(</ul>)`);
  html = html.replace(re, (m, open, close) => {
    if (m.includes(items[0].slice(0, 15))) return m;
    changed = true;
    return open + '\n          ' + listHtml + '\n        ' + close;
  });
  return { html, changed };
}

function syncPrivacyLists(html, sections) {
  if (!Array.isArray(sections?.[1]?.items)) return { html, changed: false };
  return syncServiceList(html, 'privacyUseList', sections[1].items);
}

function syncGeoStrip(html, text) {
  if (!text) return { html, changed: false };
  let changed = false;
  html = html.replace(
    /renderGeoStrip\([^,]+,\s*\{[\s\S]*?text:\s*'[^']*'/,
    (m) => {
      if (m.includes(text.slice(0, 20))) return m;
      changed = true;
      return m.replace(/text:\s*'[^']*'/, `text: '${text.replace(/'/g, "\\'")}'`);
    }
  );
  return { html, changed };
}

function syncRelatedLinks(html, links) {
  if (!Array.isArray(links) || !links.length) return { html, changed: false };
  let changed = false;
  const payload = jsonLinks(links);
  html = html.replace(/renderRelatedLinks\(\[[\s\S]*?\]\)/, (m) => {
    if (m.includes(payload.slice(1, 40))) return m;
    changed = true;
    return `renderRelatedLinks(${payload})`;
  });
  return { html, changed };
}

function syncBrandRelatedFromLocale(html, pageKey, pageData) {
  const related = pageData?.related;
  if (!Array.isArray(related)) return syncRelatedLinks(html, brandRelated[pageKey.replace(/Page$/, '').replace('digiSystem', 'digi-system')]);
  const urls = ['teraoka', 'digi-system', 'services#industrial', 'contact', 'vega', 'prosense', 'gamak'];
  let ui = 0;
  const links = related.map((r, i) => ({
    titleKey: `${pageKey}.related.${i}.title`,
    title: r.title,
    url: urls[i] || 'contact',
    descKey: `${pageKey}.related.${i}.desc`,
    desc: r.desc
  }));
  return syncRelatedLinks(html, links);
}

function syncBackToTop(html, label) {
  let changed = false;
  html = html.replace(
    /(<button class="back-to-top"[^>]*aria-label=")[^"]*(")/,
    (m, pre, post) => {
      if (m.includes(label)) return m;
      changed = true;
      return pre + label + post;
    }
  );
  return { html, changed };
}

function syncBrandNav(html, page) {
  const aria = brandNavAria[page];
  if (!aria) return { html, changed: false };
  let changed = false;
  html = html.replace(
    new RegExp(`(<nav class="${page}-cat-nav"[^>]*aria-label=")[^"]*"`),
    (m, open) => {
      changed = true;
      return open + aria + '"';
    }
  );
  return { html, changed };
}

function syncFile(file, dict, seoPages) {
  let html = fs.readFileSync(file, 'utf8');
  let changed = false;
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  const pageMatch = html.match(/data-page="([^"]+)"/);
  const page = pageMatch?.[1];

  let r = syncI18nAttrs(html, dict);
  html = r.html;
  changed = changed || r.changed;

  r = syncBackToTop(html, dict.common?.backToTop || 'بازگشت به بالا');
  html = r.html;
  changed = changed || r.changed;

  if (page === 'contact') {
    r = syncContactPage(html, dict.contactPage);
    html = r.html;
    changed = changed || r.changed;
  }

  if (page === 'services') {
    r = syncServicesBlocks(html, dict.servicesPage?.blocks, dict.servicesPage?.panels);
    html = r.html;
    changed = changed || r.changed;
    r = syncGeoStrip(html, dict.servicesPage?.geoText);
    html = r.html;
    changed = changed || r.changed;
    r = syncRelatedLinks(html, dict.servicesPage?.relatedLinks?.map(l => ({
      ...l,
      url: l.url.replace(/\.html(?=[#?]|$)/, '')
    })));
    html = r.html;
    changed = changed || r.changed;
  }

  if (page === 'about') {
    r = syncAboutExtras(html, dict.aboutPage);
    html = r.html;
    changed = changed || r.changed;
    r = syncRelatedLinks(html, pageRelated.about);
    html = r.html;
    changed = changed || r.changed;
  }

  if (page === 'privacy') {
    r = syncPrivacyLists(html, dict.privacyPage?.sections);
    html = r.html;
    changed = changed || r.changed;
  }

  if (page === 'biztejarat') {
    const cs = dict.caseStudy?.biztejarat;
    r = syncServiceList(html, 'biztejaratServices', cs?.about?.services);
    html = r.html;
    changed = changed || r.changed;
    let pi = 0;
    html = html.replace(/(<a href="(?:vega|prosense|gamak|contact)"[\s\S]*?<p>)[^<]*/g, (m, open) => {
      const pair = biztejaratProducts[pi++];
      if (!pair) return m;
      changed = true;
      return open + pair[1];
    });
    html = html.replace(/(<a href="contact"[\s\S]*?<h3>)[^<]*/g, (m, open) => {
      changed = true;
      return open + biztejaratProducts[3][0];
    });
    r = syncGeoStrip(html, cs?.geoText);
    html = r.html;
    changed = changed || r.changed;
    r = syncRelatedLinks(html, pageRelated.biztejarat);
    html = r.html;
    changed = changed || r.changed;
    if (cs?.hero?.title) {
      html = html.replace(/\{ name: '[^']*', url: 'biztejarat' \}/, () => {
        changed = true;
        return `{ name: 'بیزتجارت', url: 'biztejarat' }`;
      });
      html = html.replace(/injectCaseStudySchema\(\{[\s\S]*?\}\)/, () => {
        changed = true;
        return `injectCaseStudySchema({
            id: 'biztejarat',
            name: '${cs.hero.title.replace(/'/g, "\\'")}',
            description: '${(cs.hero.desc || '').replace(/'/g, "\\'")}',
            service: '${(cs.about?.servicesTitle || 'مدیریت SMM').replace(/'/g, "\\'")}',
            slug: 'pages/biztejarat'
          })`;
      });
    }
  }

  if (page === 'bz-diamond') {
    const cs = dict.caseStudy?.bzDiamond;
    r = syncServiceList(html, 'bzDiamondServices', cs?.about?.services);
    html = r.html;
    changed = changed || r.changed;
    r = syncGeoStrip(html, cs?.geoText);
    html = r.html;
    changed = changed || r.changed;
    r = syncRelatedLinks(html, pageRelated['bz-diamond']);
    html = r.html;
    changed = changed || r.changed;
    if (cs?.hero?.title) {
      html = html.replace(/injectCaseStudySchema\(\{[\s\S]*?\}\)/, () => {
        changed = true;
        return `injectCaseStudySchema({
            id: 'bz-diamond',
            name: '${cs.hero.title.replace(/'/g, "\\'")}',
            description: '${(cs.hero.desc || '').replace(/'/g, "\\'")}',
            service: '${(cs.about?.servicesTitle || 'طراحی وب').replace(/'/g, "\\'")}',
            slug: 'pages/bz-diamond'
          })`;
      });
    }
  }

  if (page === 'fast') {
    r = syncGeoStrip(html, dict.fastPage?.geoText);
    html = r.html;
    changed = changed || r.changed;
    r = syncRelatedLinks(html, pageRelated.fast);
    html = r.html;
    changed = changed || r.changed;
    const navAria = dict.fastPage?.ui?.navAria || 'بخش‌های Fast Web Studio';
    html = html.replace(/(<nav class="fast-nav"[^>]*aria-label=")[^"]*"/, (m, open) => {
      changed = true;
      return open + navAria + '"';
    });
    html = html.replace(/injectServiceProductSchema\(\{[\s\S]*?\}\)/, (m) => {
      const next = `injectServiceProductSchema({
            name: 'Fast Web Studio',
            description: 'طراحی سایت حرفه‌ای در ۵ روز — پلن‌های شفاف، واتساپ فارسی و پشتیبانی پس از راه‌اندازی.',
            url: 'pages/fast',
            areaServed: ['IR', 'TR', 'AM', 'AE', 'DE'],
            offers: [
              { name: 'پلن پایه', price: '99', currency: 'USD' },
              { name: 'پلن فروشگاهی', price: '199', currency: 'USD' },
              { name: 'پلن حرفه‌ای', price: '299', currency: 'USD' }
            ]
          })`;
      if (m.includes('طراحی سایت حرفه‌ای')) return m;
      changed = true;
      return next;
    });
  }

  for (const brand of ['vega', 'prosense', 'teltonika']) {
    if (page === brand) {
      r = syncBrandNav(html, brand);
      html = r.html;
      changed = changed || r.changed;
      const pk = `${brand}Page`;
      r = syncGeoStrip(html, dict[pk]?.geoText);
      html = r.html;
      changed = changed || r.changed;
      r = syncRelatedLinks(html, brandRelated[brand]);
      html = r.html;
      changed = changed || r.changed;
    }
  }

  if (page === 'digi-system') {
      const pk = 'digiSystemPage';
      r = syncGeoStrip(html, dict[pk]?.geoText);
      html = r.html;
      changed = changed || r.changed;
      r = syncBrandRelatedFromLocale(html, pk, dict[pk]);
      html = r.html;
      changed = changed || r.changed;
    }

  for (const brand of ['gamak', 'teraoka']) {
    if (page === brand) {
      const pk = brand === 'digiSystem' ? 'digiSystemPage' : `${brand}Page`;
      r = syncGeoStrip(html, dict[pk]?.geoText);
      html = r.html;
      changed = changed || r.changed;
      r = syncBrandRelatedFromLocale(html, pk, dict[pk]);
      html = r.html;
      changed = changed || r.changed;
    }
  }

  if (page === 'blog') {
    r = syncGeoStrip(html, dict.blogPage?.geoText);
    html = r.html;
    changed = changed || r.changed;
  }

  // SEO title
  const articleMatch = html.match(/data-article="([^"]+)"/);
  const articleSeoMap = {
    'digital-marketing': 'articleDigitalMarketing',
    'what-is-digital-marketing': 'articleWhatIsDm',
    'social-media-management': 'articleSmm',
    'fast-studio': 'articleFastStudio',
    'industrial-sensors': 'articleIndustrialSensors',
    'about-bizdavar-group': 'articleAboutBizdavar'
  };
  let seoKey = null;
  if (page === 'article' && articleMatch) {
    seoKey = articleSeoMap[articleMatch[1]];
  } else if (page) {
    const map = {
      home: 'home', about: 'about', services: 'services', portfolio: 'portfolio',
      blog: 'blog', contact: 'contact', privacy: 'privacy', fast: 'fast',
      vega: 'vega', prosense: 'prosense', teltonika: 'teltonika', gamak: 'gamak',
      digiSystem: 'digiSystem', teraoka: 'teraoka', 'bz-diamond': 'bzDiamond',
      biztejarat: 'biztejarat'
    };
    seoKey = map[page];
  }
  if (seoKey && seoPages[seoKey]?.seoTitle) {
    const title = seoPages[seoKey].seoTitle;
    const newTitle = `<title>${title}</title>`;
    if (!html.includes(newTitle)) {
      html = html.replace(/<title>[^<]*<\/title>/, newTitle);
      changed = true;
    }
    if (seoPages[seoKey]?.seoDescription) {
      const desc = seoPages[seoKey].seoDescription;
      if (html.includes('name="description"')) {
        html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${desc.replace(/"/g, '&quot;')}">`);
      } else {
        html = html.replace('</head>', `  <meta name="description" content="${desc.replace(/"/g, '&quot;')}">\n</head>`);
      }
      changed = true;
    }
  }

  html = html.replace(/aria-label="\?+\s*\?*"/g, () => {
    changed = true;
    return 'aria-label="مسیر صفحه"';
  });

  if (changed) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Synced', rel);
  }
}

const fa = loadFaDict();
const seoPages = fa.pages || {};

walkHtml(path.join(ROOT, 'pages')).forEach(f => syncFile(f, fa, seoPages));
syncFile(path.join(ROOT, 'index.html'), fa, seoPages);
console.log('Done sync-i18n-fallbacks');
