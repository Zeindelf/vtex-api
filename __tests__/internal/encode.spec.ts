import encode from '../../src/utils/encode';

describe('encode()', () => {
  it('should parse an object { key: value } to URL query string', () => {
    expect.assertions(1);
    expect(encode({ foo: 'bar', baz: 'qux', corge: '' })).toStrictEqual('foo=bar&baz=qux&corge=');
  });

  it('should parse an object { key: value } with array values to URL query string', () => {
    expect.assertions(1);
    expect(encode({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })).toStrictEqual('foo=bar&baz=qux&baz=quux&corge=');
  });
});
