createSupplyBrandPage({
  prefix: 'auto',
  catalogKey: 'CAR_PARTS_CATALOG',
  brandName: 'Bizdavar Car Parts',
  schemaId: 'jsonld-car-parts',
  schemaListName: 'قطعات خودرو خارجی — بیزدوار',
  initFn: 'initCarPartsPage',
  schemaFn: 'injectCarPartsSchema'
});
