import isObject from './isObject';

describe('validate if is object', () => {
  it('should validate an object', () => {
    expect.assertions(1);
    expect(isObject({ foo: 'Foo' })).toBe(true);
  });

  it('should not validate an object', () => {
    expect.assertions(1);
    expect(isObject('Foo')).toBe(false);
  });
});
