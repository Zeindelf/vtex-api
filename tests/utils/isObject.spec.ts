import isObject from '../../src/utils/isObject';

describe('isObject()', () => {
  it('should validate an object', () => {
    expect.assertions(1);
    expect(isObject({ foo: 'Foo' })).toBe(true);
  });

  it('should not validate an object', () => {
    expect.assertions(1);
    expect(isObject('Foo')).toBe(false);
  });
});
