// @ts-nocheck
import getFirstAvailableSku from '../../src/helpers/getFirstAvailableSku';
import product from '../../mocks/product';

describe('getFirstAvailableSku()', () => {
  const { items } = product;
  const [unavailable, available] = items;
  const noSellers = [{}];
  const emptySellers = [{ sellers: [] }];
  const emptyCommertialInfo = [{ sellers: [{ commertialInfo: {} }] }];

  it('should return first sku available', () => {
    expect.assertions(1);
    expect(getFirstAvailableSku(items)).toStrictEqual(available);
  });

  it('should return false with unavailable sku', () => {
    expect.assertions(1);
    expect(getFirstAvailableSku([unavailable])).toBeUndefined();
  });

  it('should return false to a empty param', () => {
    expect.assertions(1);
    expect(getFirstAvailableSku()).toBeUndefined();
  });

  it('should return false with no seller found', () => {
    expect.assertions(1);
    expect(getFirstAvailableSku(noSellers)).toBeUndefined();
  });

  it('should return false with empty sellers', () => {
    expect.assertions(1);
    expect(getFirstAvailableSku(emptySellers)).toBeUndefined();
  });

  it('should return false with empty commertial info', () => {
    expect.assertions(1);
    expect(getFirstAvailableSku(emptyCommertialInfo)).toBeUndefined();
  });
});
