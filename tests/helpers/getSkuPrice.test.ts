import getSkuPrice from '../../src/helpers/getSkuPrice';
import product from '../../mocks/product';

describe('getSkuPrice()', () => {
  const { items: [unavailable, available] } = product;

  const skuPriceUnavailable = {
    available: false,
    availableQuantity: 0,
    bestPrice: 0,
    installments: undefined,
    installmentsInterestRate: undefined,
    installmentsValue: undefined,
    listPrice: false,
    seller: 'shoponline',
    sellerId: '1',
  };

  const skuPriceAvailable = {
    available: true,
    availableQuantity: 33,
    bestPrice: 8900,
    installments: 2,
    installmentsInterestRate: 0,
    installmentsValue: 4450,
    listPrice: 16990,
    seller: 'shoponline',
    sellerId: '1',
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
