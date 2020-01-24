import { getPercentage } from '../../src/helpers';

describe('getPercentage()', () => {
  it('should convert integer/decimals price to correct format', () => {
    expect.assertions(3);

    expect(getPercentage(14900, 17990)).toStrictEqual(false);
    expect(getPercentage(17990, 14900)).toStrictEqual(17);
    expect(getPercentage(17990, 14900, 2)).toStrictEqual(17.18);
  });
});
