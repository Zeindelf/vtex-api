import productPriceRange from '../../src/helpers/productPriceRange';
import skusSeller from '../../mocks/skus-seller';

describe('productPriceRange()', () => {
  it('should return listPrice range for default seller', () => {
    expect.assertions(1);

    // @ts-ignore
    const { listPrice } = productPriceRange(skusSeller);
    expect(listPrice).toStrictEqual({ highPrice: 690, lowPrice: 195 });
  });

  it('should return sellingPrice range for default seller', () => {
    expect.assertions(1);

    // @ts-ignore
    const { sellingPrice } = productPriceRange(skusSeller);
    expect(sellingPrice).toStrictEqual({ highPrice: 552, lowPrice: 157 });
  });

  it('should return listPrice range for custom seller', () => {
    expect.assertions(1);

    // @ts-ignore
    const { listPrice } = productPriceRange(skusSeller, '2');
    expect(listPrice).toStrictEqual({ highPrice: 695, lowPrice: 200 });
  });

  it('should return sellingPrice range for custom seller', () => {
    expect.assertions(1);

    // @ts-ignore
    const { sellingPrice } = productPriceRange(skusSeller, '2');
    expect(sellingPrice).toStrictEqual({ highPrice: 562, lowPrice: 167 });
  });
});
