/**
 * Delayed GTM loader — keeps dataLayer early, loads gtm.js after window load.
 * External file so CSP can drop this class of inline scripts.
 */
(function (w, d) {
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  function load() {
    if (w.__bizdavarGtm) return;
    w.__bizdavarGtm = 1;
    var s = d.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NXWQQWF8';
    d.head.appendChild(s);
  }
  if (d.readyState === 'complete') {
    setTimeout(load, 1);
  } else {
    w.addEventListener('load', function () { setTimeout(load, 1); });
  }
})(window, document);
