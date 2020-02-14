import productPriceRange from '../../src/helpers/productPriceRange';
import skusSeller from '../../mocks/skus-seller';

describe('productPriceRange()', () => {
  it('should return listPrice range for default seller', () => {
    expect.assertions(1);

    // @ts-ignore
    const { listPrice } = productPriceRange(skusSeller);
    expect(listPrice).toStrictEqual({ highPrice: 69000, lowPrice: 19500 });
  });

  it('should return bestPrice range for default seller', () => {
    expect.assertions(1);

    // @ts-ignore
    const { bestPrice } = productPriceRange(skusSeller);
    expect(bestPrice).toStrictEqual({ highPrice: 55200, lowPrice: 15700 });
  });

  it('should return listPrice range for custom seller', () => {
    expect.assertions(1);

    // @ts-ignore
    const { listPrice } = productPriceRange(skusSeller, '2');
    expect(listPrice).toStrictEqual({ highPrice: 69500, lowPrice: 20000 });
  });

  it('should return bestPrice range for custom seller', () => {
    expect.assertions(1);

    // @ts-ignore
    const { bestPrice } = productPriceRange(skusSeller, '2');
    expect(bestPrice).toStrictEqual({ highPrice: 56200, lowPrice: 16700 });
  });
});
