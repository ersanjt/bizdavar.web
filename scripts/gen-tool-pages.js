#!/usr/bin/env node
/**
 * Generate the Persian (root) free tool pages and the tools hub from their i18n files.
 * Locale copies (tr/en/ru/ar) are then written by bake-static-seo.js.
 *
 *   node scripts/gen-tool-pages.js
 *   node scripts/gen-seo-head.js
 *   node scripts/bake-static-seo.js --only=/pages/tools,/pages/speed-test,...
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { TOOLS, HUB, HUB_GROUPS, I18N_FILES } = require('./free-tools-config');
const { bootTag } = require('./lib/page-boot-tag');

const ROOT = path.join(__dirname, '..');
const LANGS = ['fa', 'tr', 'en', 'ru', 'ar'];
const LOADER_VER = '20261020d';
const CSS_VER = '20261020b';

global.window = global;
require(path.join(ROOT, 'assets/scripts/components/biz-icons.js'));

const ctx = vm.createContext({ window: { BIZDAVAR_LOCALES: Object.fromEntries(LANGS.map((l) => [l, {}])) } });
I18N_FILES.forEach((rel) => vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), ctx));
const LOCALES = ctx.window.BIZDAVAR_LOCALES;
const FA = LOCALES.fa;

function lookup(dict, key) {
  return key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), dict);
}

function get(key) {
  const val = lookup(FA, key);
  if (typeof val !== 'string') throw new Error(`Missing fa string: ${key}`);
  return val;
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (s) => esc(s).replace(/"/g, '&quot;');

/** Element whose text is the fa default of an i18n key (bake-static-seo swaps it per locale). */
function T(tag, key, attrs) {
  return `<${tag}${attrs ? ` ${attrs}` : ''} data-i18n="${key}">${esc(get(key))}</${tag}>`;
}

const placeholder = (key) => `data-i18n-placeholder="${key}" placeholder="${attr(get(key))}"`;
const aria = (key) => `data-i18n-aria="${key}" aria-label="${attr(get(key))}"`;

/** Every locale must have the same list lengths, or baked copies would keep Persian items. */
function assertSameShape(ns) {
  const lists = ['explain.items', 'tips.items', 'faq.items', 'related', 'groups'];
  for (const list of lists) {
    const faLen = (lookup(FA, `${ns}.${list}`) || []).length;
    for (const lang of LANGS) {
      const len = (lookup(LOCALES[lang], `${ns}.${list}`) || []).length;
      if (len !== faLen) throw new Error(`${ns}.${list}: ${lang} has ${len} items, fa has ${faLen}`);
    }
  }
}

function inputGroup(ns, id, labelKey, phKey, extra) {
  return `<div class="form-group">
              ${T('label', `${ns}.ui.${labelKey}`, `for="${id}"`)}
              <input id="${id}" type="text" dir="ltr" autocomplete="off" spellcheck="false"${extra ? ` ${extra}` : ''}${phKey ? ` ${placeholder(`${ns}.ui.${phKey}`)}` : ''}>
            </div>`;
}

/* ───────────── Tool cards ───────────── */

function whatsappTool(ns) {
  const u = (k) => `${ns}.ui.${k}`;
  return `<div class="st-card ft-card" id="freeTool" data-tool="whatsapp">
        <form class="ft-form" id="waForm" novalidate>
          <div class="form-group">
            ${T('label', u('phone'), 'for="waPhone"')}
            <div class="ft-phone">
              <select id="waCountry" ${aria(u('country'))}></select>
              <input id="waPhone" type="tel" inputmode="tel" autocomplete="tel-national" dir="ltr" ${placeholder(u('phonePh'))}>
            </div>
            ${T('p', u('phoneHint'), 'class="ft-hint"')}
            ${T('p', u('invalid'), 'class="ft-error" id="waError" hidden')}
          </div>
          <div class="form-group">
            ${T('label', u('message'), 'for="waMsg"')}
            <textarea id="waMsg" rows="3" maxlength="1000" ${placeholder(u('messagePh'))}></textarea>
            <div class="ft-chips">
              ${T('span', u('templates'), 'class="ft-chips__label"')}
              ${['tplPrice', 'tplOrder', 'tplSupport'].map((k) => T('button', u(k), `type="button" class="ft-chip" data-wa-template="${k}Text"`)).join('\n              ')}
            </div>
          </div>
        </form>

        <div class="ft-output" aria-live="polite">
          ${T('h2', u('resultTitle'), 'class="ft-output__title"')}
          ${T('p', u('resultEmpty'), 'class="ft-output__empty" id="waEmpty"')}
          <div id="waResult" hidden>
            <code class="ft-output__value" id="waLink"></code>
            <div class="st-actions">
              ${T('button', u('copy'), 'type="button" class="btn btn--yellow" id="waCopy"')}
              ${T('a', u('open'), 'class="btn btn--outline" id="waOpen" href="https://wa.me/" target="_blank" rel="noopener"')}
              ${T('button', u('copyHtml'), 'type="button" class="btn btn--outline" id="waCopyHtml"')}
            </div>
            <div class="ft-qr" id="waQrBox">
              <img class="ft-qr__img" id="waQr" width="160" height="160" data-i18n-alt="${u('qrTitle')}" alt="${attr(get(u('qrTitle')))}">
              <div class="ft-qr__text">
                ${T('h3', u('qrTitle'))}
                ${T('p', u('qrNote'))}
                ${T('a', u('qrDownload'), 'class="btn btn--outline" id="waQrDownload" href="#" download="whatsapp-qr.png"')}
              </div>
            </div>
          </div>
        </div>

        ${T('p', u('note'), 'class="st-note"')}
      </div>`;
}

function siteSpeedTool(ns) {
  const u = (k) => `${ns}.ui.${k}`;
  return `<div class="st-card ft-card" id="freeTool" data-tool="sitespeed">
        <form class="ft-form" id="psForm" novalidate>
          <div class="form-group">
            ${T('label', u('url'), 'for="psUrl"')}
            <input id="psUrl" type="text" inputmode="url" autocomplete="url" spellcheck="false" dir="ltr" ${placeholder(u('urlPh'))}>
          </div>
          <div class="ft-seg" id="psDevice" role="group" ${aria(u('device'))}>
            ${T('button', u('mobile'), 'type="button" class="ft-seg__btn" data-strategy="mobile" aria-pressed="true"')}
            ${T('button', u('desktop'), 'type="button" class="ft-seg__btn" data-strategy="desktop" aria-pressed="false"')}
          </div>
          <div class="st-card__main">
            ${T('button', u('analyze'), 'type="submit" class="btn btn--yellow st-start" id="psSubmit"')}
            ${T('p', u('statusIdle'), 'class="st-status" id="psStatus" role="status" aria-live="polite"')}
          </div>
          <div class="ft-progress" id="psProgress" hidden><span></span></div>
          <p class="ft-error" id="psError" role="alert" hidden></p>
        </form>

        <div id="psResult" hidden>
          <div class="ft-score">
            <div class="ft-score__ring" id="psRing"><b id="psScore">–</b></div>
            <div class="ft-score__text">
              ${T('h2', u('scoreTitle'))}
              <p id="psVerdict"></p>
            </div>
            <img class="ft-shot" id="psShot" alt="" hidden>
          </div>
          ${T('h2', u('labTitle'), 'class="ft-section-title"')}
          <div class="st-metrics ft-metrics" id="psLab"></div>
          ${T('h2', u('fieldTitle'), 'class="ft-section-title"')}
          <div class="st-metrics ft-metrics" id="psField"></div>
          ${T('p', u('fieldNone'), 'class="ft-hint" id="psFieldNone" hidden')}
          ${T('h2', u('oppTitle'), 'class="ft-section-title"')}
          <ul class="ft-list" id="psOpps"></ul>
          <div class="st-actions">
            ${T('a', u('fullReport'), 'class="btn btn--outline" id="psFull" href="https://pagespeed.web.dev/" target="_blank" rel="noopener"')}
          </div>
        </div>

        ${T('p', u('note'), 'class="st-note"')}
      </div>`;
}

function myIpTool(ns) {
  const u = (k) => `${ns}.ui.${k}`;
  const row = (labelHtml, id, ltr) => `<div class="st-info__row">
            ${labelHtml}
            <dd id="${id}"${ltr ? ' dir="ltr"' : ''}>–</dd>
          </div>`;
  const dt = (k) => T('dt', u(k));
  return `<div class="st-card ft-card" id="freeTool" data-tool="myip">
        <div class="ft-ip">
          ${T('p', u('yourIp'), 'class="ft-ip__label"')}
          ${T('output', u('loading'), 'class="ft-ip__value" id="ipMain"')}
          <div class="st-actions">
            ${T('button', u('copy'), 'type="button" class="btn btn--yellow" id="ipCopy"')}
            ${T('button', u('refresh'), 'type="button" class="btn btn--outline" id="ipRefresh"')}
          </div>
        </div>
        ${T('p', u('error'), 'class="ft-error" id="ipError" role="alert" hidden')}
        ${T('p', u('vpnHint'), 'class="ft-alert" id="ipVpn" hidden')}

        ${T('h2', u('connTitle'), 'class="ft-section-title"')}
        <dl class="st-info">
          ${row('<dt>IPv4</dt>', 'ipV4', true)}
          ${row('<dt>IPv6</dt>', 'ipV6', true)}
          ${row(dt('country'), 'ipCountry')}
          ${row(dt('region'), 'ipRegion')}
          ${row(dt('city'), 'ipCity')}
          ${row(dt('isp'), 'ipIsp')}
          ${row(dt('asn'), 'ipAsn', true)}
          ${row(dt('ipTimezone'), 'ipTz', true)}
        </dl>

        ${T('h2', u('deviceTitle'), 'class="ft-section-title"')}
        <dl class="st-info">
          ${row(dt('browser'), 'ipBrowser')}
          ${row(dt('os'), 'ipOs')}
          ${row(dt('language'), 'ipLang')}
          ${row(dt('screen'), 'ipScreen', true)}
          ${row(dt('deviceTimezone'), 'ipDeviceTz', true)}
        </dl>

        ${T('p', u('note'), 'class="st-note"')}
      </div>`;
}

function utmTool(ns) {
  const u = (k) => `${ns}.ui.${k}`;
  const presets = [['instagram', 'presetInstagram'], ['google', 'presetGoogle'], ['email', 'presetEmail'], ['whatsapp', 'presetWhatsapp'], ['telegram', 'presetTelegram'], ['linkedin', 'presetLinkedin']];
  const field = (name, hint) => `<div class="form-group">
              ${T('label', u(name), `for="utm_${name}"`)}
              <input id="utm_${name}" type="text" dir="ltr" autocomplete="off" spellcheck="false" ${placeholder(u(`${name}Ph`))}>
              ${hint ? T('p', u(`${name}Hint`), 'class="ft-hint"') : ''}
            </div>`;
  return `<div class="st-card ft-card" id="freeTool" data-tool="utm">
        <form class="ft-form" id="utmForm" novalidate>
          <div class="form-group">
            ${T('label', u('url'), 'for="utmUrl"')}
            <input id="utmUrl" type="text" inputmode="url" autocomplete="url" spellcheck="false" dir="ltr" ${placeholder(u('urlPh'))}>
            ${T('p', u('invalidUrl'), 'class="ft-error" id="utmUrlError" hidden')}
            <div class="ft-chips">
              ${T('span', u('presets'), 'class="ft-chips__label"')}
              ${presets.map(([id, key]) => T('button', u(key), `type="button" class="ft-chip" data-utm-preset="${id}"`)).join('\n              ')}
            </div>
          </div>
          <div class="ft-grid">
            ${field('source', true)}
            ${field('medium', true)}
          </div>
          ${field('campaign', false)}
          <div class="ft-grid">
            ${field('term', false)}
            ${field('content', false)}
          </div>
          <label class="ft-check"><input type="checkbox" id="utmNormalize" checked> ${T('span', u('normalize'))}</label>
        </form>

        <div class="ft-output" aria-live="polite">
          ${T('h2', u('resultTitle'), 'class="ft-output__title"')}
          ${T('p', u('resultEmpty'), 'class="ft-output__empty" id="utmEmpty"')}
          <div id="utmResult" hidden>
            <code class="ft-output__value" id="utmLink"></code>
            <div class="st-actions">
              ${T('button', u('copy'), 'type="button" class="btn btn--yellow" id="utmCopy"')}
              ${T('a', u('open'), 'class="btn btn--outline" id="utmOpen" href="#" target="_blank" rel="noopener"')}
              ${T('button', u('reset'), 'type="button" class="btn btn--outline" id="utmReset"')}
            </div>
          </div>
        </div>

        ${T('p', u('note'), 'class="st-note"')}
      </div>`;
}

function tankTool(ns) {
  const u = (k) => `${ns}.ui.${k}`;
  const shapes = [['vcyl', 'shapeVcyl'], ['hcyl', 'shapeHcyl'], ['rect', 'shapeRect'], ['sphere', 'shapeSphere']];
  const units = [['mm', 'unitMm'], ['cm', 'unitCm'], ['m', 'unitM'], ['in', 'unitIn'], ['ft', 'unitFt']];
  const dim = (id, key, hidden) => `<div class="form-group"${hidden ? ' hidden' : ''}>
              ${T('label', u(key), `for="${id}"`)}
              <input id="${id}" type="text" inputmode="decimal" dir="ltr" autocomplete="off">
            </div>`;
  const result = (name) => `<div class="st-metric" id="tank_${name}">
                ${T('span', u(name), 'class="st-metric__label"')}
                <span class="st-metric__value"><b>–</b> ${T('small', u('liters'))}</span>
                <span class="ft-sub"></span>
              </div>`;
  return `<div class="st-card ft-card" id="freeTool" data-tool="tank">
        <div class="ft-seg" id="tankShape" role="group" ${aria(u('shape'))}>
          ${shapes.map(([id, key], i) => T('button', u(key), `type="button" class="ft-seg__btn" data-shape="${id}" aria-pressed="${i === 0}"`)).join('\n          ')}
        </div>
        <form class="ft-form" id="tankForm" novalidate>
          <div class="ft-grid">
            <div class="form-group">
              ${T('label', u('unit'), 'for="tankUnit"')}
              <select id="tankUnit">
                ${units.map(([id, key]) => T('option', u(key), `value="${id}"${id === 'cm' ? ' selected' : ''}`)).join('\n                ')}
              </select>
            </div>
            ${dim('tankD', 'diameter')}
            ${dim('tankL', 'length', true)}
            ${dim('tankW', 'width', true)}
            ${dim('tankH', 'height')}
          </div>
          <div class="form-group">
            ${T('label', u('fill'), 'for="tankFill"')}
            <input id="tankFill" type="text" inputmode="decimal" dir="ltr" autocomplete="off">
            ${T('p', u('fillHint'), 'class="ft-hint"')}
            ${T('p', u('errFill'), 'class="ft-error" id="tankError" role="alert" hidden')}
          </div>
        </form>

        <div class="ft-output" aria-live="polite">
          ${T('h2', u('resultTitle'), 'class="ft-output__title"')}
          ${T('p', u('resultEmpty'), 'class="ft-output__empty" id="tankEmpty"')}
          <div id="tankResult" hidden>
            <div class="ft-tank-results">
              ${['total', 'filled', 'empty'].map(result).join('\n              ')}
            </div>
            <div class="ft-fill" id="tankFillWrap" hidden>
              <div class="ft-fill__bar"><span id="tankFillBar"></span></div>
              <div class="ft-fill__label">${T('span', u('fillPct'))}<b id="tankFillPct" dir="ltr"></b></div>
            </div>
            <div class="st-actions">
              ${T('button', u('copy'), 'type="button" class="btn btn--outline" id="tankCopy"')}
            </div>
          </div>
        </div>

        ${T('p', u('note'), 'class="st-note"')}
      </div>`;
}

function unitsTool(ns) {
  const u = (k) => `${ns}.ui.${k}`;
  const cats = [['pressure', 'catPressure'], ['flow', 'catFlow'], ['temperature', 'catTemperature'], ['length', 'catLength'], ['volume', 'catVolume']];
  return `<div class="st-card ft-card" id="freeTool" data-tool="units">
        <div class="ft-seg" id="ucCategory" role="group" ${aria(u('category'))}>
          ${cats.map(([id, key], i) => T('button', u(key), `type="button" class="ft-seg__btn" data-cat="${id}" aria-pressed="${i === 0}"`)).join('\n          ')}
        </div>
        <form class="ft-form ft-convert" id="ucForm" novalidate>
          ${inputGroup(ns, 'ucValue', 'value', '', 'inputmode="decimal" value="1"')}
          <div class="form-group">
            ${T('label', u('from'), 'for="ucFrom"')}
            <select id="ucFrom"></select>
          </div>
        </form>
        ${T('p', u('invalid'), 'class="ft-error" id="ucError" role="alert" hidden')}

        ${T('h2', u('resultTitle'), 'class="ft-section-title"')}
        ${T('p', u('clickCopy'), 'class="ft-hint"')}
        <ul class="ft-results" id="ucResults" aria-live="polite"></ul>

        ${T('p', u('note'), 'class="st-note"')}
      </div>`;
}

const TOOL_MARKUP = {
  whatsapp: whatsappTool,
  sitespeed: siteSpeedTool,
  myip: myIpTool,
  utm: utmTool,
  tank: tankTool,
  units: unitsTool
};

const PRECONNECT = {
  sitespeed: ['https://www.googleapis.com'],
  myip: ['https://ipwho.is', 'https://api.ipify.org']
};

/* ───────────── Hub ───────────── */

function hubBody(ns) {
  const bySlug = Object.fromEntries(TOOLS.map((t) => [t.slug, t]));
  return HUB_GROUPS.map((slugs, gi) => `<div class="tools-group">
        ${T('h2', `${ns}.groups.${gi}.title`, 'class="tools-group__title"')}
        <div class="tools-grid">
${slugs.map((slug, ci) => {
    const tool = bySlug[slug];
    const icon = global.BD_ICON(tool.icon, { size: 26, variant: tool.icon === 'whatsapp' ? 'white' : '' });
    return `          <a class="tools-card" href="/pages/${slug}">
            <span class="tools-card__icon">${icon}</span>
            ${T('h3', `${ns}.groups.${gi}.cards.${ci}.title`)}
            ${T('p', `${ns}.groups.${gi}.cards.${ci}.desc`)}
            ${T('span', `${ns}.open`, 'class="tools-card__more"')}
          </a>`;
  }).join('\n')}
        </div>
      </div>`).join('\n      ');
}

/* ───────────── Shared page sections ───────────── */

function explainSection(ns, gray) {
  const items = lookup(FA, `${ns}.explain.items`) || [];
  return `<section class="section${gray ? ' section--gray' : ''}" id="tool-explained">
    <div class="container">
      <div class="section__header section__header--pro">
        ${T('span', `${ns}.explain.eyebrow`, 'class="section__eyebrow"')}
        ${T('h2', `${ns}.explain.title`, 'class="section__title"')}
      </div>
      <div class="st-explain-grid st-explain-grid--3">
${items.map((_, i) => `        <article class="st-explain">
          ${T('h3', `${ns}.explain.items.${i}.title`)}
          ${T('p', `${ns}.explain.items.${i}.body`)}
        </article>`).join('\n')}
      </div>
    </div>
  </section>`;
}

function tipsSection(ns, gray) {
  const items = lookup(FA, `${ns}.tips.items`);
  if (!items) return '';
  return `<section class="section${gray ? ' section--gray' : ''}" id="tool-tips">
    <div class="container">
      <div class="st-tips">
        ${T('h2', `${ns}.tips.title`, 'class="st-tips__title"')}
        <ol class="st-tips__list">
${items.map((_, i) => `          ${T('li', `${ns}.tips.items.${i}`)}`).join('\n')}
        </ol>
      </div>
    </div>
  </section>`;
}

function faqSection(ns, gray) {
  const items = lookup(FA, `${ns}.faq.items`) || [];
  return `<section class="section${gray ? ' section--gray' : ''}" id="tool-faq">
    <div class="container">
      <div class="section__header section__header--pro">
        ${T('span', `${ns}.faq.eyebrow`, 'class="section__eyebrow"')}
        ${T('h2', `${ns}.faq.title`, 'class="section__title"')}
      </div>
      <div class="st-faq">
${items.map((_, i) => `        <details class="st-faq__item">
          ${T('summary', `${ns}.faq.items.${i}.q`)}
          ${T('p', `${ns}.faq.items.${i}.a`)}
        </details>`).join('\n')}
      </div>
    </div>
  </section>`;
}

function ctaSection(ns, links) {
  return `<section class="section">
    <div class="container">
      <div class="st-cta">
        ${T('h2', `${ns}.cta.title`)}
        ${T('p', `${ns}.cta.desc`)}
        <div class="st-cta__actions">
          ${T('a', `${ns}.cta.btn`, `href="${links[0]}" class="btn btn--yellow"`)}
          ${T('a', `${ns}.cta.btn2`, `href="${links[1]}" class="btn btn--outline"`)}
        </div>
      </div>
    </div>
  </section>`;
}

function page(entry, isHub) {
  const { slug, ns, seoKey } = entry;
  assertSameShape(ns);
  const seo = FA.pages[seoKey];
  const preconnect = (PRECONNECT[entry.tool] || []).map((href) => `\n  <link rel="preconnect" href="${href}" crossorigin>`).join('');
  const toolHtml = isHub ? hubBody(ns) : TOOL_MARKUP[entry.tool](ns);
  const before = isHub ? '' : ` data-before-main="${[...(entry.vendor || []), 'free-tools.js'].join(',')}"`;
  const crumbs = isHub
    ? `[
        { page: 'home', url: 'index' },
        { page: 'tools', url: 'pages/tools' }
      ]`
    : `[
        { page: 'home', url: 'index' },
        { page: 'tools', name: toolsLabel, url: 'pages/tools' },
        { page: '${seoKey}', url: 'pages/${slug}' }
      ]`;
  const sections = [explainSection(ns, true)];
  const tips = tipsSection(ns, false);
  if (tips) sections.push(tips);
  sections.push(faqSection(ns, sections.length % 2 === 0));

  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <link rel="stylesheet" href="/assets/styles/site.css?v=20261003a">
  <link rel="preload" href="/assets/fonts/vazirmatn/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/assets/fonts/estedad/Estedad-Black.woff2" as="font" type="font/woff2" crossorigin>
  <!-- Google Tag Manager -->
  <script src="/assets/scripts/gtm-boot.js?v=20260910c" defer></script>
  <!-- End Google Tag Manager -->
  <script src="/assets/scripts/i18n/locale-url.js?v=${LOADER_VER}" defer></script>
  <script src="/assets/scripts/i18n/seo-head.js?v=${LOADER_VER}" defer></script>
  <script src="/assets/scripts/i18n/locale-preload.js?v=20261028j" defer></script>
  <meta name="view-transition" content="same-origin">
  <title>${esc(seo.seoTitle)}</title>
  <link rel="icon" href="/assets/images/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/images/brand/favicon.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/images/brand/favicon-16.png" type="image/png" sizes="16x16">
  <link rel="apple-touch-icon" href="/assets/images/brand/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/styles/speed-test.css?v=20261020a">
  <link rel="stylesheet" href="/assets/styles/tools.css?v=${CSS_VER}">${preconnect}
  <meta name="description" content="${attr(seo.seoDescription)}">
  <meta name="keywords" content="${attr(seo.seoKeywords)}">
</head>
<body data-page="${slug}" data-depth="1">
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NXWQQWF8"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <script src="/assets/scripts/components/page-shell.js?v=20260910c" defer></script>
<main id="main-content" class="site-main">

  <section class="page-hero page-hero--compact st-hero">
    <div class="container">
      ${T('span', `${ns}.hero.eyebrow`, 'class="st-hero__eyebrow"')}
      ${T('h1', `${ns}.hero.title`)}
      ${T('p', `${ns}.hero.lead`)}
    </div>
  </section>

  <section class="section st-tool-section">
    <div class="container">
      ${toolHtml}
    </div>
  </section>

  ${sections.join('\n\n  ')}

  ${ctaSection(ns, entry.cta)}

  <div id="geoStrip"></div>
  <div id="relatedLinks"></div>
  </main>

  <script src="/assets/scripts/site-loader.js?v=20261028c" data-after-seo="i18n/${entry.i18n}-i18n.js"${before}></script>

  ${bootTag(`bizdavarPageInit(function () {
      const toolsLabel = window.BIZDAVAR_I18N ? window.BIZDAVAR_I18N.t('nav.tools', '') : '';
      const crumbs = ${crumbs};
      injectPageSeo('${seoKey}', {
        canonical: 'https://bizdavar.com/pages/${slug}',
        robots: 'index, follow, max-image-preview:large'
      });
      renderBreadcrumbs(crumbs);
      injectBreadcrumbSchema(crumbs);
      setupWhatsappLinks();
      renderGeoStrip('geoStrip', { textKey: '${ns}.geoText' });
      const related = window.BIZDAVAR_I18N && window.BIZDAVAR_I18N.raw('${ns}.related');
      if (Array.isArray(related)) renderRelatedLinks(related);
      if (typeof window.initFreeTool === 'function') window.initFreeTool();
    });`)}
</body>
</html>
`;
}

const written = [];
for (const tool of TOOLS.filter((t) => !t.handwritten)) {
  const rel = `pages/${tool.slug}.html`;
  fs.writeFileSync(path.join(ROOT, rel), page(tool, false), 'utf8');
  written.push(rel);
}
fs.writeFileSync(path.join(ROOT, `pages/${HUB.slug}.html`), page(HUB, true), 'utf8');
written.push(`pages/${HUB.slug}.html`);

console.log(`Wrote ${written.length} pages:\n  ${written.join('\n  ')}`);
const routes = ['/pages/speed-test', ...written.map((rel) => `/${rel.replace(/\.html$/, '')}`)];
console.log(`Next: node scripts/gen-seo-head.js && node scripts/bake-static-seo.js --only=${routes.join(',')}`);
