import credentials from './credentials';

describe('credentials()', () => {
  it('should create an array with credentials', () => {
    expect.assertions(1);

    const appKey = 'vtexappkey-storename-FFFXJB';
    const appToken = 'XPOTVAIMRWURYGOGWBGFJWEACLUTINDTPHLHONANMTICSJPWBKUKZOMBLNQJFPDDSACQUHSIATSQNBISVXRYTTUAVKVAXQIXPFJSHZCUSMJGWWOKFXOHXFKZFCUKLRLK';
    const output = [
      'x-vtex-api-appKey: vtexappkey-storename-FFFXJB',
      'x-vtex-api-appToken: XPOTVAIMRWURYGOGWBGFJWEACLUTINDTPHLHONANMTICSJPWBKUKZOMBLNQJFPDDSACQUHSIATSQNBISVXRYTTUAVKVAXQIXPFJSHZCUSMJGWWOKFXOHXFKZFCUKLRLK',
    ];

    expect(credentials(appKey, appToken)).toStrictEqual(output);
  });
});
