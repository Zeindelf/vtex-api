import hostname from '../../src/internal/hostname';

describe('hostname()', () => {
  it('should create host base url', () => {
    expect.assertions(1);
    expect(hostname('sitename')).toStrictEqual('https://sitename.vtexcommercestable.com.br');
  });

  it('should return an empty string for undefined param', () => {
    expect.assertions(1);
    expect(hostname()).toStrictEqual('');
  });
});
