/**
 * Broken-image recovery without inline event handlers.
 * script-src cannot use 'unsafe-inline' (securityheaders.com caps the grade at A).
 * Keep this in sync with the installer at the top of site-loader.js.
 */
(function (window, document) {
  if (window.__bizdavarImgFallback) return;
  window.__bizdavarImgFallback = true;

  function labelInstead(el) {
    var span = document.createElement('span');
    span.className = 'client-item__name';
    span.textContent = el.getAttribute('alt') || '';
    if (el.parentNode) el.parentNode.replaceChild(span, el);
  }

  function finish(el) {
    var emptySel = el.getAttribute('data-fallback-empty');
    if (emptySel) {
      var box = el.closest(emptySel);
      if (box) box.classList.add('owned-product-card__media--empty');
    }
    if (el.hasAttribute('data-fallback-broken')) el.classList.add('is-broken');
    if (el.hasAttribute('data-fallback-label')) labelInstead(el);
  }

  function sameUrl(el, fb) {
    try {
      return new URL(fb, document.baseURI).href === el.src;
    } catch (err) {
      return false;
    }
  }

  function onImgError(event) {
    var el = event.target;
    if (!el || el.tagName !== 'IMG') return;
    if (el.getAttribute('data-fallback-handled') === '1') return;

    var fb = el.getAttribute('data-fallback');
    if (fb) {
      if (el.getAttribute('data-fallback-used') === '1' || sameUrl(el, fb)) {
        el.setAttribute('data-fallback-handled', '1');
        finish(el);
        return;
      }
      el.setAttribute('data-fallback-used', '1');
      if (el.hasAttribute('data-fallback-clear-srcset')) el.removeAttribute('srcset');
      el.src = fb;
      return;
    }

    el.setAttribute('data-fallback-handled', '1');
    if (el.hasAttribute('data-hide-broken')) {
      el.style.display = 'none';
      return;
    }
    if (el.hasAttribute('data-remove-broken')) {
      el.remove();
      return;
    }
    if (el.hasAttribute('data-fallback-label')) labelInstead(el);
  }

  document.addEventListener('error', onImgError, true);

  function repair() {
    var nodes = document.querySelectorAll('img[data-fallback], img[data-hide-broken], img[data-remove-broken], img[data-fallback-label]');
    for (var i = 0; i < nodes.length; i++) {
      var img = nodes[i];
      if (img.complete && img.naturalWidth === 0) onImgError({ target: img });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', repair);
  repair();
})(window, document);
