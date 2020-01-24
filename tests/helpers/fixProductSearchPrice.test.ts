import { fixProductSearchPrice } from '../../src/helpers';

describe('fixProductSearchPrice()', () => {
  it('should convert integer/decimals price to correct format', () => {
    expect.assertions(2);

    expect(fixProductSearchPrice(195)).toStrictEqual(19500);
    expect(fixProductSearchPrice(150.50)).toStrictEqual(15050);
  });
});
