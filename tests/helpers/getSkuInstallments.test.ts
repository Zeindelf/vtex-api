import getSkuInstallments from '../../src/helpers/getSkuInstallments';
import product from '../../mocks/product';

describe('getSkuInstallments()', () => {
  const { items: [, sku] } = product;
  const { sellers: [seller] } = sku;
  const { commertialOffer: { Installments } } = seller;

  it('should return minimum installment option', () => {
    expect.assertions(1);
    expect(getSkuInstallments(sku)).toStrictEqual(Installments[12]);
  });
});
