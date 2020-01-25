// @ts-nocheck
import { getFirstAvailableSku } from '../../src/helpers';
import product from '../../mocks/product';

describe('getFirstAvailableSku()', () => {
  it('should return first sku available', () => {
    expect.assertions(6);

    const { items } = product;
    const [unavailable, available] = items;
    const noSellers = [{}];
    const emptySellers = [{ sellers: [] }];
    const emptyCommertialInfo = [{ sellers: [{ commertialInfo: {} }] }];

    expect(getFirstAvailableSku(items)).toStrictEqual(available);
    expect(getFirstAvailableSku()).toStrictEqual(false);
    expect(getFirstAvailableSku(noSellers)).toStrictEqual(false);
    expect(getFirstAvailableSku(emptySellers)).toStrictEqual(false);
    expect(getFirstAvailableSku(emptyCommertialInfo)).toStrictEqual(false);
    expect(getFirstAvailableSku([unavailable])).toStrictEqual(false);
  });
});
