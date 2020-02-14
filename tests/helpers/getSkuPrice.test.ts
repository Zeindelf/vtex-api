import getSkuPrice from '../../src/helpers/getSkuPrice';
import product from '../../mocks/product';

describe('getSkuPrice()', () => {
  const { items: [unavailable, available] } = product;

  const skuPriceUnavailable = {
    available: false,
    availableQuantity: 0,
    seller: 'shoponline',
    sellerId: '1',
    hasListPrice: false,
    bestPrice: 0,
    listPrice: 0,
    installments: undefined,
    installmentsInterestRate: undefined,
    installmentsValue: undefined,
  };

  const skuPriceAvailable = {
    available: true,
    availableQuantity: 33,
    seller: 'shoponline',
    sellerId: '1',
    hasListPrice: true,
    bestPrice: 8900,
    listPrice: 16990,
    installments: 2,
    installmentsInterestRate: 0,
    installmentsValue: 4450,
  };

  it('should return prince info for unavailable product', () => {
    expect.assertions(1);
    expect(getSkuPrice(unavailable)).toStrictEqual(skuPriceUnavailable);
  });

  it('should return prince info for available product', () => {
    expect.assertions(1);
    expect(getSkuPrice(available)).toStrictEqual(skuPriceAvailable);
  });
});
