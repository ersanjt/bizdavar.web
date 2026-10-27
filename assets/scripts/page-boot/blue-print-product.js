bizdavarPageInit(function () {
  var descEl = document.querySelector('meta[name="description"]');
  var canonEl = document.querySelector('link[rel="canonical"]');
  var name = document.body.getAttribute('data-bp-name') || document.title;
  injectPageSeo('bluePrintProduct', {
    title: document.title,
    description: descEl ? descEl.getAttribute('content') : '',
    keywords: (document.querySelector('meta[name="keywords"]') || {}).content || '',
    canonical: canonEl ? canonEl.getAttribute('href') : '',
    ogImage: 'assets/images/brand/bizdavar-logo-square.png'
  });
  renderBreadcrumbs([
    { page: 'home', url: 'index', name: 'خانه' },
    { page: 'products', url: 'products#supply', name: 'محصولات' },
    { page: 'bluePrint', url: 'pages/blue-print.html', name: 'Blue Print' },
    { name: name }
  ]);
  injectBreadcrumbSchema([
    { page: 'home', url: 'index', name: 'خانه' },
    { page: 'products', url: 'pages/products#supply', name: 'محصولات' },
    { page: 'bluePrint', url: 'pages/blue-print', name: 'Blue Print' },
    { name: name }
  ]);
  setupWhatsappLinks();
});
