bizdavarPageInit(function () {
      injectPageSeo('motorcycle', {
        canonical: 'https://bizdavar.com/pages/motorcycle',
        ogImage: 'assets/images/auto-moto/hero/auto-moto-hero.webp'
      });
      renderBreadcrumbs([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'products#supply', name: "Поставки" },
        { page: 'autoMoto', url: 'auto-moto', name: "Auto-Moto" },
        { page: 'motorcycle', url: 'motorcycle' }
      ]);
      injectBreadcrumbSchema([
        { page: 'home', url: 'index' },
        { page: 'supply', url: 'pages/products#supply', name: "Поставки" },
        { page: 'autoMoto', url: 'pages/auto-moto', name: "Auto-Moto" },
        { page: 'motorcycle', url: 'pages/motorcycle' }
      ]);
      initAutoMotoPage();
      injectAutoMotoSchema();
      renderGeoStrip('geoStrip', {
        textKey: 'autoMotoPage.geoText',
        text: "Поставка мотоэкипировки — цена на карточке в долларах США, с международной доставкой."
      });
      renderRelatedLinks([
        { title: "Auto-Moto", url: "auto-moto", desc: "Два магазина: экипировка и тормоза", titleKey: 'autoMotoPage.related.0.title', descKey: 'autoMotoPage.related.0.desc' },
        { title: "Магазин тормозов", url: "car-parts", desc: "Колодки и диски по марке и модели", titleKey: 'autoMotoPage.related.1.title', descKey: 'autoMotoPage.related.1.desc' },
        { title: "Liqui Moly", url: "liqui-moly", desc: "Масла и присадки", titleKey: 'autoMotoPage.related.2.title', descKey: 'autoMotoPage.related.2.desc' },
        { title: "Контакты", url: "contact", desc: "Размер одежды или артикул", titleKey: 'autoMotoPage.related.3.title', descKey: 'autoMotoPage.related.3.desc' }
      ]);
      setupWhatsappLinks();
    });
