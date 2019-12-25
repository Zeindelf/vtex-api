import parseFields from '../../src/internal/parseFields';

describe('parseFields()', () => {
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
