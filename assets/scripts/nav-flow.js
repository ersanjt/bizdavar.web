/**
 * Bizdavar — Smooth internal navigation
 * Prefetch, page transitions, hash scroll with header offset
 */
(function () {
  'use strict';

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EXIT_MS = 280;
  const prefetched = new Set();
  const NAV_VT = 'onpageswap' in window;

  function parseUrl(href) {
    try {
      return new URL(href, location.href);
    } catch {
      return null;
    }
  }

  function normPath(pathname) {
    let p = pathname || '/';
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    return p;
  }

  function isInternalLink(a) {
    if (!a || !a.href) return false;
    if (a.hasAttribute('download')) return false;
    if (a.target === '_blank') return false;
    const raw = a.getAttribute('href');
    if (!raw || raw.startsWith('#')) return false;
    const url = parseUrl(raw);
    if (!url) return false;
    if (url.protocol === 'mailto:' || url.protocol === 'tel:' || url.protocol === 'javascript:') return false;
    return url.origin === location.origin;
  }

  function isModifiedClick(e) {
    return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
  }

  function prefetch(url) {
    if (!url) return;
    const key = normPath(url.pathname) + url.search;
    if (prefetched.has(key)) return;
    prefetched.add(key);
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url.pathname + url.search;
    link.fetchPriority = 'low';
    document.head.appendChild(link);
  }

  function headerOffset() {
    const header = document.querySelector('.header');
    return (header ? header.offsetHeight : 72) + 12;
  }

  function scrollToEl(el, behavior) {
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset();
    window.scrollTo({
      top: Math.max(0, top),
      behavior: behavior || (REDUCED ? 'auto' : 'smooth')
    });
  }

  function closeDrawer() {
    if (typeof window.closeMobileDrawer === 'function') window.closeMobileDrawer();
  }

  function ensureOverlay() {
    let el = document.getElementById('navFlowOverlay');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'navFlowOverlay';
    el.className = 'nav-flow-overlay';
    el.setAttribute('aria-hidden', 'true');
    document.body.appendChild(el);
    return el;
  }

  function manualNavigate(href) {
    document.documentElement.classList.add('is-navigating-out');
    ensureOverlay().classList.add('is-active');
    window.setTimeout(() => window.location.assign(href), EXIT_MS);
  }

  function markInternalLinks(root) {
    (root || document).querySelectorAll('a[href]').forEach(a => {
      if (isInternalLink(a)) a.classList.add('bd-link');
    });
  }

  function prefetchPriorityLinks() {
    const sel = [
      '.nav a[href]',
      '.mobile-drawer__nav a[href]',
      '.mobile-bottom-nav a[href]',
      '.footer__links a[href]',
      '.site-main a[href]'
    ].join(', ');
    [...document.querySelectorAll(sel)]
      .filter(isInternalLink)
      .slice(0, 16)
      .forEach(a => prefetch(parseUrl(a.getAttribute('href'))));
  }

  function handleLinkClick(e) {
    const a = e.target.closest('a[href]');
    if (!a || !isInternalLink(a) || isModifiedClick(e)) return;

    const url = parseUrl(a.getAttribute('href'));
    if (!url) return;

    const samePath = normPath(url.pathname) === normPath(location.pathname);

    if (samePath && url.hash) {
      const target = document.getElementById(url.hash.slice(1));
      if (target) {
        e.preventDefault();
        closeDrawer();
        history.pushState(null, '', url.hash);
        scrollToEl(target);
      }
      return;
    }

    if (samePath && !url.hash && !url.search) return;

    closeDrawer();

    if (REDUCED || NAV_VT) return;

    e.preventDefault();
    manualNavigate(a.href);
  }

  function onPageEnter(fromNavigation) {
    document.documentElement.classList.remove('is-navigating-out');
    document.documentElement.classList.add('is-page-entered');
    const overlay = document.getElementById('navFlowOverlay');
    if (overlay) overlay.classList.remove('is-active');

    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) window.setTimeout(() => scrollToEl(el, 'auto'), 50);
    }

    if (!fromNavigation) return;
    const main = document.getElementById('main-content');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    }
  }

  function boot() {
    markInternalLinks();
    prefetchPriorityLinks();
    requestAnimationFrame(() => onPageEnter(false));
  }

  document.addEventListener('click', handleLinkClick, false);

  document.addEventListener('mouseover', e => {
    const a = e.target.closest('a[href]');
    if (a && isInternalLink(a)) prefetch(parseUrl(a.getAttribute('href')));
  }, { passive: true });

  document.addEventListener('focusin', e => {
    const a = e.target.closest('a[href]');
    if (a && isInternalLink(a)) prefetch(parseUrl(a.getAttribute('href')));
  });

  document.addEventListener('bizdavar:locale', () => {
    markInternalLinks();
    prefetchPriorityLinks();
  });

  window.addEventListener('pagereveal', () => onPageEnter(true));

  window.addEventListener('pageshow', e => {
    if (e.persisted) onPageEnter(true);
  });

  const mo = new MutationObserver(muts => {
    muts.forEach(m => m.addedNodes.forEach(node => {
      if (node.nodeType === 1) markInternalLinks(node);
    }));
  });
  mo.observe(document.body, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  window.BD_navFlow = { prefetch, scrollToEl, markInternalLinks };
})();
