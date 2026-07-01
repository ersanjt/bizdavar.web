/**
 * Bizdavar — Path resolver
 * مسیرهای نسبی بر اساس عمق صفحه (data-depth روی body)
 */
(function () {
  const depth = parseInt(document.body.dataset.depth || '0', 10);
  const root = depth > 0 ? '../'.repeat(depth) : '';

  function isAssetPath(p) {
    return /(^|\/)assets\//.test(p)
      || /\.(css|js|png|jpe?g|webp|svg|gif|woff2?|ico|json|txt|xml|pdf)(\?|#|$)/i.test(p);
  }

  /** Strip .html from internal page links (not assets) */
  function prettifyInternalPath(relativeOut) {
    if (!relativeOut || isAssetPath(relativeOut)) return relativeOut;
    let o = relativeOut;
    if (/(^|\/)index\.html([#?]|$)/.test(o)) {
      o = o.replace(/index\.html/, '');
      if (o === '' || o === './') return './';
      if (o.endsWith('/') && o.length > 1) return o.slice(0, -1) || './';
      return o || './';
    }
    return o.replace(/\.html(?=[#?]|$)/, '') || './';
  }

  window.BD_prettifyPath = prettifyInternalPath;

  window.resolvePath = function (relativeFromRoot) {
    if (!relativeFromRoot) return root || './';
    if (/^(https?:|mailto:|tel:|#)/.test(relativeFromRoot)) return relativeFromRoot;
    const joined = root + relativeFromRoot.replace(/^\//, '');
    return prettifyInternalPath(joined);
  };

  window.BIZDAVAR_PATHS = {
    depth,
    root,
    styles: root + 'assets/styles/',
    scripts: root + 'assets/scripts/',
    images: root + 'assets/images/',
    brand: root + 'assets/images/brand/',
    content: root + 'assets/images/content/',
    icons: root + 'assets/images/icons/',
    partners: root + 'assets/images/partners/'
  };
})();
