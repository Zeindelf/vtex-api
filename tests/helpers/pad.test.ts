import { pad } from '../../src/helpers';

describe('pad()', () => {
  it('should add zero pad number', () => {
    expect.assertions(3);

    expect(pad(1)).toStrictEqual('01');
    expect(pad(10)).toStrictEqual('10');
    expect(pad(10, 3)).toStrictEqual('010');
  });
});
