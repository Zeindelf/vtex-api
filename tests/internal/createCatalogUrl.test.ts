import createCatalogUrl from '../../src/internal/createCatalogUrl';

describe('createCatalogUrl()', () => {
  const searchUrl = {
    path: '/products/search/',
    query: 'ft=television',
  };

  it('should be create relative catalog url', () => {
    expect.assertions(1);
    expect(createCatalogUrl(searchUrl))
      .toStrictEqual('/api/catalog_system/pub/products/search?ft=television');
  });

  it('should be create full catalog url', () => {
    expect.assertions(1);
    expect(createCatalogUrl({ ...searchUrl, accountName: 'storename' }))
      .toStrictEqual('https://storename.vtexcommercestable.com.br/api/catalog_system/pub/products/search?ft=television');
  });

  it('should be create relative catalog url without query', () => {
    expect.assertions(1);
    expect(createCatalogUrl({ path: 'products/search' }))
      .toStrictEqual('/api/catalog_system/pub/products/search');
  });
});
