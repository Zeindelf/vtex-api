import assign from '../../src/utils/assign';

describe('assign()', () => {
  it('should merge 2 objects', () => {
    expect.assertions(1);
    expect(assign({ a: 'A' }, { b: 'B' })).toStrictEqual({ a: 'A', b: 'B' });
  });

  it('should merge 3 or more objects', () => {
    expect.assertions(1);
    expect(assign({ a: 'A' }, { b: 'B' }, { c: 'C' }, { d: 'D' })).toStrictEqual({
      a: 'A', b: 'B', c: 'C', d: 'D',
    });
  });
});
