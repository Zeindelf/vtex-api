import createMasterdataUrl from '../../src/internal/createMasterdataUrl';

const baseParams = {
  method: 'GET',
  entity: 'AA',
  type: 'search',
};

describe('createMasterdataUrl()', () => {
  it('should return full search url', () => {
    expect.assertions(1);

    const params = { ...baseParams, accountName: 'storename' };
    expect(createMasterdataUrl(params)).toStrictEqual(
      'https://storename.vtexcommercestable.com.br/api/dataentities/AA/search/',
    );
  });

  it('should return base search url', () => {
    expect.assertions(1);

    const params = { ...baseParams };
    expect(createMasterdataUrl(params)).toStrictEqual(
      '/api/dataentities/AA/search/',
    );
  });

  it('should return an search url with querystring param', () => {
    expect.assertions(1);

    const params = { ...baseParams, data: { email: 'email@sitename.com' } };
    expect(createMasterdataUrl(params)).toStrictEqual(
      '/api/dataentities/AA/search/?email=email%40sitename.com',
    );
  });

  it('should create an POST method with an', () => {
    expect.assertions(1);

    const params = { ...baseParams, method: 'POST', an: 'storename' };
    expect(createMasterdataUrl(params)).toStrictEqual(
      '/api/dataentities/AA/search/?an=storename',
    );
  });

  it('should return an search url with id', () => {
    expect.assertions(1);

    const params = { ...baseParams, id: '123' };
    expect(createMasterdataUrl(params)).toBe(
      '/api/dataentities/AA/search/123',
    );
  });
});
