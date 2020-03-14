import isSkuAvailable from '../../src/helpers/isSkuAvailable';
import product from '../../mocks/product';

describe('isSkuAvailable()', () => {
  const { items } = product;
  const [unavailable, available] = items;

  it('should return true for an available sku', () => {
    expect.assertions(1);
    expect(isSkuAvailable(available)).toBe(true);
  });

  it('should return false for an unavailable sku', () => {
    expect.assertions(1);
    expect(isSkuAvailable(unavailable)).toBe(false);
  });
});
