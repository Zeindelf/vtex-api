import createHeaders from '../../src/internal/createHeaders';

describe('createHeaders()', () => {
  it('should return an empty object if no param given', () => {
    expect.assertions(1);
    expect(createHeaders()).toStrictEqual({});
  });

  it('array[string] to headers { key: value }', () => {
    expect.assertions(1);

    const input: string[] = [
      'Content-Type: application/json; charset=utf-8',
      'Cookie: 123',
    ];

    const output: {} = {
      'Content-Type': 'application/json; charset=utf-8',
      Cookie: '123',
    };

    expect(createHeaders(input)).toStrictEqual(output);
  });

  it('duplicate array[string] to headers { key: value[] }', () => {
    expect.assertions(1);

    const input: string[] = [
      'Content-Type: application/json; charset=utf-8',
      'Cookie: 123',
      'X-Custom-Header: abc',
      'X-Custom-Header: def',
    ];

    const output: {} = {
      'Content-Type': 'application/json; charset=utf-8',
      Cookie: '123',
      'X-Custom-Header': ['abc', 'def'],
    };

    expect(createHeaders(input)).toStrictEqual(output);
  });
});
