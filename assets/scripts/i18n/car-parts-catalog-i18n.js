/**
 * Car-parts catalog chrome — en / tr / ru / ar
 */
(function () {
  const en = {
    brand: {
      heroEyebrow: 'Import car parts shop',
      heroHeadline: 'Pads, filters, emblems and rims',
      heroHeadlineSub: 'Separate from the motorcycle shop. Price by inquiry only.',
      since: 'Inquiry only · no invented prices',
      description: 'Brake pads, air and cabin filters, oil filters, emblems and rims. No price on the card. Send brand, model, year and VIN if you have it.',
      heroStats: [{ label: 'No card price' }, { label: 'Model and VIN' }, { label: 'Part categories' }]
    }
  };
  const tr = {
    brand: {
      heroEyebrow: 'İthal oto parçası mağazası',
      heroHeadline: 'Balata, filtre, arma ve jant',
      heroHeadlineSub: 'Motosiklet mağazasından ayrı. Fiyat yalnızca teklifle.',
      since: 'Yalnızca teklif · uydurma fiyat yok',
      description: 'Balata, hava ve polen filtresi, yağ filtresi, arma ve jant. Kartta fiyat yok. Marka, model, yıl ve mümkünse VIN gönderin.',
      heroStats: [{ label: 'Kartta fiyat yok' }, { label: 'Model ve VIN' }, { label: 'Parça kategorisi' }]
    }
  };
  if (!window.BIZDAVAR_LOCALES) return;
  if (window.BIZDAVAR_LOCALES.en) window.BIZDAVAR_LOCALES.en.carPartsCatalog = en;
  if (window.BIZDAVAR_LOCALES.tr) window.BIZDAVAR_LOCALES.tr.carPartsCatalog = tr;
  if (window.BIZDAVAR_LOCALES.ru) {
    window.BIZDAVAR_LOCALES.ru.carPartsCatalog = {
      brand: {
        heroEyebrow: 'Магазин автозапчастей',
        heroHeadline: 'Колодки, фильтры, эмблемы и диски',
        heroHeadlineSub: 'Отдельно от мотоэкипировки. Цена только по запросу.',
        since: 'Только запрос',
        description: 'Колодки, фильтры, эмблемы и диски. Цены на карточке нет.',
        heroStats: [{ label: 'Цены нет' }, { label: 'Модель и VIN' }, { label: 'Категории' }]
      }
    };
  }
  if (window.BIZDAVAR_LOCALES.ar) {
    window.BIZDAVAR_LOCALES.ar.carPartsCatalog = {
      brand: {
        heroEyebrow: 'متجر قطع السيارات',
        heroHeadline: 'فحمات وفلاتر وشعارات وجنوط',
        heroHeadlineSub: 'منفصل عن متجر الدراجة. السعر بالاستعلام فقط.',
        since: 'استعلام فقط',
        description: 'فحمات وفلاتر وشعارات وجنوط. لا سعر على البطاقة.',
        heroStats: [{ label: 'لا سعر' }, { label: 'الموديل وVIN' }, { label: 'فئات' }]
      }
    };
  }
})();
