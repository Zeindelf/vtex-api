import decode from '../../src/utils/decode';

describe('decode()', () => {
  it('should decode simple querystring', () => {
    expect.assertions(1);
    const input = 'str=foo&arr=1&arr=2&arr=3&somenull=&undef=';
    const output = {
      str: 'foo',
      arr: ['1', '2', '3'],
      somenull: '',
      undef: '',
    };

    expect(decode(input)).toStrictEqual(output);
  });

  it('should decode an repeated key into array', () => {
    expect.assertions(1);
    const input = 'foo=bar&foo=quux';
    const output = { foo: ['bar', 'quux'] };

    expect(decode(input)).toStrictEqual(output);
  });

  it('should return an empty obj with non/empty string param', () => {
    expect.assertions(1);
    expect(decode('')).toStrictEqual({});
  });

  it('should validate maxKeys', () => {
    expect.assertions(1);
    expect(decode('foo=bar&foz=baz&qux=wiz', '&', '=', { maxKeys: 2 })).toStrictEqual({ foo: 'bar', foz: 'baz' });
  });
});
