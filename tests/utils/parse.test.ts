import parse from '../../src/utils/parse';

describe('parse()', () => {
  it('should parse simple querystring', () => {
    expect.assertions(1);
    const input = 'str=foo&arr=1&arr=2&arr=3&somenull=&undef=';
    const output = {
      str: 'foo',
      arr: ['1', '2', '3'],
      somenull: '',
      undef: '',
    };

    expect(parse(input)).toStrictEqual(output);
  });

  it('should parse an repeated key into array', () => {
    expect.assertions(1);
    const input = 'foo=bar&foo=quux';
    const output = { foo: ['bar', 'quux'] };

    expect(parse(input)).toStrictEqual(output);
  });
});
