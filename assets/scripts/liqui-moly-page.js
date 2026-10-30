createSupplyBrandPage({
  prefix: 'liqui',
  catalogKey: 'LIQUI_MOLY_CATALOG',
  brandName: 'Liqui Moly',
  schemaId: 'jsonld-liqui-moly',
  schemaListName: {
    fa: 'تامین Liqui Moly — روغن موتور و افزودنی — بیزدوار گروپ',
    tr: 'Liqui Moly tedariki — motor yağı ve katkı — Bizdavar',
    en: 'Liqui Moly supply — engine oil and additives — Bizdavar',
    ru: 'Поставка Liqui Moly — масла и присадки — Bizdavar',
    ar: 'توريد Liqui Moly — زيوت وإضافات — Bizdavar'
  },
  initFn: 'initLiquiMolyPage',
  schemaFn: 'injectLiquiMolySchema'
});
