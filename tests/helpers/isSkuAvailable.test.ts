import isSkuAvailable from '../../src/helpers/isSkuAvailable';
import product from '../../mocks/product';

describe('isSkuAvailable()', () => {
  const { items } = product;
  const sellerId = 'sellerTest';
  const [unavailable, available] = items;

  it('should return true for an available sku', () => {
    expect.assertions(1);
    expect(isSkuAvailable(available)).toBe(true);
  });

  it('should return false for an unavailable sku', () => {
    expect.assertions(1);
    expect(isSkuAvailable(unavailable)).toBe(false);
  });

  it('should return true for an available sku with specific seller', () => {
    expect.assertions(1);
    expect(isSkuAvailable(available, sellerId)).toBe(true);
  });

  it('should return false for an unavailable sku with specific seller', () => {
    expect.assertions(1);
    expect(isSkuAvailable(unavailable, sellerId)).toBe(false);
  });
});
