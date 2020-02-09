import trimSlashes from '../../src/utils/trimSlashes';

describe('trimSlashes()', () => {
  it('should remove single trailing slashes', () => {
    expect.assertions(1);
    expect(trimSlashes('/foo/bar/')).toBe('foo/bar');
  });

  it('should remove multiple trailing slashes', () => {
    expect.assertions(1);
    expect(trimSlashes('///foo/bar///')).toBe('foo/bar');
  });

  it('should return original string if trailing slash not found', () => {
    expect.assertions(1);
    expect(trimSlashes('foo/bar')).toBe('foo/bar');
  });
});
