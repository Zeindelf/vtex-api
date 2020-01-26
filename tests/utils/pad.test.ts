import pad from '../../src/utils/pad';

describe('pad()', () => {
  it('should add zero pad number for one digit', () => {
    expect.assertions(1);
    expect(pad(1)).toStrictEqual('01');
  });

  it('should not add zero pad number for a two digits', () => {
    expect.assertions(1);
    expect(pad(10)).toStrictEqual('10');
  });

  it('should add zero pad number to a three digits', () => {
    expect.assertions(1);
    expect(pad(10, 3)).toStrictEqual('010');
  });
});
