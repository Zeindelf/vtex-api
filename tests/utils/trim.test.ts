import trim from '../../src/utils/trim';

describe('trim()', () => {
  it('should remove whitespace from both sides', () => {
    expect.assertions(1);
    expect(trim(' Foo bar baz   ')).toBe('Foo bar baz');
  });

  it('should return empty string for a non string value', () => {
    expect.assertions(1);
    expect(trim(123)).toBe('');
  });
});
