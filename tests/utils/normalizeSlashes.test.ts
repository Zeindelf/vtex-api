import normalizeSlashes from '../../src/utils/normalizeSlashes';

describe('normalizeSlashes()', () => {
  it('should remove repeated slashes', () => {
    expect.assertions(1);
    expect(normalizeSlashes('//foo///bar//')).toBe('/foo/bar/');
  });

  it('should remove repeated slashes for a url', () => {
    expect.assertions(1);
    expect(normalizeSlashes('http://sitename.com//foo///bar//')).toBe('http://sitename.com/foo/bar/');
  });

  it('should remove repeated slashes for a secure url', () => {
    expect.assertions(1);
    expect(normalizeSlashes('https://sitename.com//foo///bar//')).toBe('https://sitename.com/foo/bar/');
  });
});
