import trim from './trim';

describe('trim()', () => {
  it('trim multiple spaces', () => {
    expect.assertions(1);
    expect(trim(' Foo bar baz   ')).toBe('Foo bar baz');
  });
});
