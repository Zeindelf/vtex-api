import fixProductSearchPrice from '../../src/helpers/fixProductSearchPrice';

describe('fixProductSearchPrice()', () => {
  it('should convert integer price to correct format', () => {
    expect.assertions(1);
    expect(fixProductSearchPrice(195)).toStrictEqual(19500);
  });

  it('should convert decimals price to correct format', () => {
    expect.assertions(1);
    expect(fixProductSearchPrice(150.50)).toStrictEqual(15050);
  });
});
