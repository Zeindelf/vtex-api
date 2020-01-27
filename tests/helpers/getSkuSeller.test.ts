import getSkuSeller from '../../src/helpers/getSkuSeller';
import product from '../../mocks/product';

describe('getSkuSeller()', () => {
  const { items: [, sku] } = product;
  const { sellers: [seller] } = sku;

  it('should get default seller info from an SKU', () => {
    expect.assertions(1);
    expect(getSkuSeller(sku)).toStrictEqual(seller);
  });

  it('should get seller by ID info from an SKU', () => {
    expect.assertions(1);
    expect(getSkuSeller(sku, '1')).toStrictEqual(seller);
  });
});
