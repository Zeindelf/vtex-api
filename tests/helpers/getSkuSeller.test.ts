import { getSkuSeller } from '../../src/helpers';
import product from '../../mocks/product';

describe('getSkuSeller()', () => {
  it('should get seller info from an SKU', () => {
    expect.assertions(2);

    const { items: [, sku] } = product;
    const { sellers: [seller] } = sku;

    expect(getSkuSeller(sku)).toStrictEqual(seller);
    expect(getSkuSeller(sku, 1)).toStrictEqual(seller);
  });
});
