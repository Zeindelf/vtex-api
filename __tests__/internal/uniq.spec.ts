import uniq from '../../src/utils/uniq';

describe('uniq()', () => {
  it('should be a uniq number values array', () => {
    expect.assertions(1);
    expect(uniq([1, 2, 2, 3, 4, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  it('should be a uniq string values array', () => {
    expect.assertions(1);
    expect(uniq(['a', 'b', 'b', 'c', 'd', 'd'])).toStrictEqual(['a', 'b', 'c', 'd']);
  });

  it('should not be uniq values array', () => {
    expect.assertions(1);
    expect(uniq([1, 2, 2, 3, 3])).not.toStrictEqual([1, 2, 2, 3]);
  });
});
