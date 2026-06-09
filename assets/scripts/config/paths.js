/**
 * Bizdavar — Path resolver
 * مسیرهای نسبی بر اساس عمق صفحه (data-depth روی body)
 */
(function () {
  const depth = parseInt(document.body.dataset.depth || '0', 10);
  const root = depth > 0 ? '../'.repeat(depth) : '';

  window.resolvePath = function (relativeFromRoot) {
    if (!relativeFromRoot) return root || './';
    if (/^(https?:|mailto:|tel:|#)/.test(relativeFromRoot)) return relativeFromRoot;
    return root + relativeFromRoot.replace(/^\//, '');
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
