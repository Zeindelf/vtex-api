import head from '../../src/utils/head';

describe('head()', () => {
  it('should return first item from array', () => {
    expect.assertions(1);
    expect(head([1, 2, 3])).toBe(1);
  });

  it('shoud return boolean from an empty array', () => {
    expect.assertions(1);
    expect(head([])).toBe(false);
  });
});
