import createAuthentication from '../../src/internal/createAuthentication';

describe('createAuthentication()', () => {
  it('should create an array with authentication keys', () => {
    expect.assertions(1);

    const appKey = '123';
    const appToken = '1234';
    const output = [
      'x-vtex-api-appKey: 123',
      'x-vtex-api-appToken: 1234',
    ];

    expect(createAuthentication({ appKey, appToken })).toStrictEqual(output);
  });
});
