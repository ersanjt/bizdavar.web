bizdavarPageInit(function () {
  injectPageSeo('bluePrint', {
    canonical: 'https://bizdavar.com/pages/blue-print',
    ogImage: 'assets/images/brand/bizdavar-logo-square.png'
  });
  renderBreadcrumbs([
    { page: 'home', url: 'index', name: 'خانه' },
    { page: 'products', url: 'products#supply', name: 'محصولات' },
    { page: 'bluePrint', url: 'blue-print', name: 'Blue Print' }
  ]);
  injectBreadcrumbSchema([
    { page: 'home', url: 'index', name: 'خانه' },
    { page: 'products', url: 'pages/products#supply', name: 'محصولات' },
    { page: 'bluePrint', url: 'pages/blue-print', name: 'Blue Print' }
  ]);
  initBluePrintPage();
  injectBluePrintSchema();
  renderGeoStrip('geoStrip', {
    textKey: 'bluePrintPage.geoText',
    text: 'تامین قطعات Blue Print برای همه کشورها — فیلتر، ترمز، کلاچ و قطعات خودروهای آسیایی.'
  });
  renderRelatedLinks([
    { title: 'Liqui Moly', url: 'liqui-moly', desc: 'روغن و افزودنی', titleKey: 'bluePrintPage.related.0.title', descKey: 'bluePrintPage.related.0.desc' },
    { title: 'فروشگاه ترمز', url: 'car-parts', desc: 'لنت و دیسک', titleKey: 'bluePrintPage.related.1.title', descKey: 'bluePrintPage.related.1.desc' },
    { title: 'اتوموتو', url: 'auto-moto', desc: 'تجهیزات موتور', titleKey: 'bluePrintPage.related.2.title', descKey: 'bluePrintPage.related.2.desc' },
    { title: 'تماس و استعلام', url: 'contact', desc: 'پیش‌فاکتور قطعه', titleKey: 'bluePrintPage.related.3.title', descKey: 'bluePrintPage.related.3.desc' }
  ]);
  setupWhatsappLinks();
});
