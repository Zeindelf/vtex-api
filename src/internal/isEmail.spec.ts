import isEmail from './isEmail';

describe('valida an email', () => {
  it('should validate an email', () => {
    expect.assertions(1);
    expect(isEmail('foo@bar.com')).toBe(true);
  });

  it('should not validate an email', () => {
    expect.assertions(1);
    expect(isEmail('foo@bar')).toBe(false);
  });
});
