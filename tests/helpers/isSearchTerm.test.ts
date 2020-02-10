import isSearchTerm from '../../src/helpers/isSearchTerm';

describe('isSearchTerm()', () => {
  it('should return true for a valid search term', () => {
    expect.assertions(1);
    expect(isSearchTerm('television')).toBe(true);
  });

  it('should return false for a invalid search term', () => {
    expect.assertions(5);

    expect(isSearchTerm('tv b&w')).toBe(false);
    expect(isSearchTerm('tv b=w')).toBe(false);
    expect(isSearchTerm('tv?stereo')).toBe(false);
    expect(isSearchTerm('[tv]')).toBe(false);
    expect(isSearchTerm('%tv')).toBe(false);
  });
});
