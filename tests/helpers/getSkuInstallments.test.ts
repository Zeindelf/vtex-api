import { getSkuInstallments } from '../../src/helpers';
import product from '../../mocks/product';

describe('getSkuInstallments()', () => {
  it('should return minimum installment option', () => {
    expect.assertions(1);

    const { items: [, sku] } = product;
    const { sellers: [seller] } = sku;
    const { commertialOffer: { Installments } } = seller;

    expect(getSkuInstallments(sku)).toStrictEqual(Installments[12]);
  });
});
