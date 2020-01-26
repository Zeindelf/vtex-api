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

  it('should parse an object { key: value } with boolean type value to URL query string', () => {
    expect.assertions(1);
    expect(encode({ foo: 'bar', logged: true, session: false })).toStrictEqual('foo=bar&logged=true&session=false');
  });

  it('should parse an object { key: value } with number type value to URL query string', () => {
    expect.assertions(1);
    expect(encode({ foo: 'bar', page: 1 })).toStrictEqual('foo=bar&page=1');
  });

  it('should parse an object { key: value } with default type value to URL query string', () => {
    expect.assertions(1);
    expect(encode({ foo: 'bar', page: {} })).toStrictEqual('foo=bar&page=');
  });
});
