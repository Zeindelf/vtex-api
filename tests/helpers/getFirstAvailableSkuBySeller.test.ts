// @ts-nocheck
import getFirstAvailableSkuBySeller from '../../src/helpers/getFirstAvailableSkuBySeller';
import product from '../../mocks/product';

describe('getFirstAvailableSkuBySeller()', () => {
  const { items } = product;
  const sellerId = 'sellerTest';
  const [unavailable, available] = items;

  it('should return first sku available for seller "sellerId"', () => {
    expect.assertions(1);
    expect(getFirstAvailableSkuBySeller(items, sellerId)).toStrictEqual(available);
  });

  it('should return false for seller "sellerId"', () => {
    expect.assertions(1);
    expect(getFirstAvailableSkuBySeller([unavailable], sellerId)).toBe(false);
  });
});
