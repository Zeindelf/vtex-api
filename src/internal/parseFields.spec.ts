import parseFields from './parseFields';

describe('parse params fields', () => {
  it('should validate filters with params', () => {
    expect.assertions(1);
    expect(parseFields(['foo'])).toBe('foo,id');
  });

  it('should validate filters without params', () => {
    expect.assertions(1);
    expect(parseFields(null)).toBe('id');
  });

  it('should not validate filters with params', () => {
    expect.assertions(1);
    expect(parseFields(['foo'])).not.toBe('foo');
  });
});
