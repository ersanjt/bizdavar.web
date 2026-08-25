createSupplyBrandPage({
  prefix: 'prosense',
  catalogKey: 'PROSENSE_CATALOG',
  brandName: 'Prosense',
  schemaId: 'jsonld-prosense',
  schemaListName: {
    fa: 'تامین دتکتور Prosense — بیزدوار گروپ',
    en: 'Prosense gas detectors — supplied by Bizdavar',
    tr: 'Prosense gaz dedektörleri — Bizdavar tedariki',
    ru: 'Детекторы Prosense — поставка Bizdavar',
    ar: 'كواشف Prosense — توريد Bizdavar'
  },
  initFn: 'initProsensePage',
  schemaFn: 'injectProsenseSchema'
});
