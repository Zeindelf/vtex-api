import getPercentage from '../../src/helpers/getPercentage';

describe('getPercentage()', () => {
  it('should return false if list price less than best price', () => {
    expect.assertions(1);
    expect(getPercentage(14900, 17990)).toStrictEqual(false);
  });

  it('should return integer percent value', () => {
    expect.assertions(1);
    expect(getPercentage(17990, 14900)).toStrictEqual(17);
  });

  it('should return decimal length given percent value', () => {
    expect.assertions(1);
    expect(getPercentage(17990, 14900, 2)).toStrictEqual(17.18);
  });
});
