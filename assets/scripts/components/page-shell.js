/**
 * Bizdavar — single source for site chrome DOM skeleton (header/footer mounts).
 * Content is rendered by chrome.js → renderSiteChrome().
 */
(function () {
  const CHROME_BEFORE_MAIN = `
    <a href="#main-content" class="skip-link" data-i18n="common.skipLink">رفتن به محتوای اصلی</a>
    <div class="top-bar" id="topBar"></div>
    <header class="header" id="siteHeader"></header>
    <nav class="breadcrumbs-wrap" id="breadcrumbs" data-i18n-aria="common.breadcrumbAria" aria-label="مسیر صفحه"></nav>
    <div class="overlay" id="overlay"></div>`;

  const CHROME_AFTER_MAIN = `
    <footer class="footer" id="siteFooter"></footer>
    <button class="back-to-top" id="backToTop" data-i18n-aria="common.backToTop" aria-label="بازگشت به بالا"></button>`;

  function insertHtmlBeforeMain(html) {
    const main = document.getElementById('main-content');
    if (!main || !html) return;
    const tpl = document.createElement('template');
    tpl.innerHTML = html.trim();
    while (tpl.content.firstChild) {
      main.parentNode.insertBefore(tpl.content.firstChild, main);
    }
  }

  function insertHtmlAfterMain(html) {
    const main = document.getElementById('main-content');
    if (!main || !html) return;
    const tpl = document.createElement('template');
    tpl.innerHTML = html.trim();
    let ref = main.nextSibling;
    while (tpl.content.firstChild) {
      main.parentNode.insertBefore(tpl.content.firstChild, ref);
    }
  }

  function ensurePageShell() {
    const main = document.getElementById('main-content');
    if (!main) return;

    if (!main.classList.contains('site-main')) {
      main.classList.add('site-main');
    }

    if (!document.getElementById('siteHeader')) {
      insertHtmlBeforeMain(CHROME_BEFORE_MAIN);
    }

    if (!document.getElementById('siteFooter')) {
      insertHtmlAfterMain(CHROME_AFTER_MAIN);
    }
  }

  window.ensureBizdavarPageShell = ensurePageShell;

  /* Script tag is before #main-content — first call is often too early */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensurePageShell);
  } else {
    ensurePageShell();
  }
})();
