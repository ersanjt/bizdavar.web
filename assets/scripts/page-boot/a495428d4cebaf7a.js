bizdavarPageInit(function () {
      injectPageSeo('motorcycle', {
        canonical: 'https://bizdavar.com/pages/motorcycle',
        ogImage: 'assets/images/auto-moto/hero/auto-moto-hero.webp'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'products#supply', name: "تامین و توزیع" },
        { page: 'autoMoto', url: 'auto-moto', name: "خودرو و موتور" },
        { page: 'motorcycle', url: 'motorcycle' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'pages/products#supply', name: "تامین و توزیع" },
        { page: 'autoMoto', url: 'pages/auto-moto', name: "خودرو و موتور" },
        { page: 'motorcycle', url: 'pages/motorcycle' }
      ]);
      initAutoMotoPage();
      injectAutoMotoSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'autoMotoPage.geoText',
        text: "تامین تجهیزات موتورسیکلت — قیمت روی کارت به دلار و برای تحویل در ایران."
      });
      renderRelatedLinks([
        { title: "اتوموتو", url: "auto-moto", desc: "دو فروشگاه جدا: موتور و ترمز", titleKey: 'autoMotoPage.related.0.title', descKey: 'autoMotoPage.related.0.desc' },
        { title: "فروشگاه ترمز", url: "car-parts", desc: "لنت و دیسک با برند و مدل", titleKey: 'autoMotoPage.related.1.title', descKey: 'autoMotoPage.related.1.desc' },
        { title: "Liqui Moly", url: "liqui-moly", desc: "روغن و افزودنی خودرو", titleKey: 'autoMotoPage.related.2.title', descKey: 'autoMotoPage.related.2.desc' },
        { title: "تماس و استعلام", url: "contact", desc: "سایز لباس یا کد کالا", titleKey: 'autoMotoPage.related.3.title', descKey: 'autoMotoPage.related.3.desc' }
      ]);
      setupWhatsappLinks();
    });
