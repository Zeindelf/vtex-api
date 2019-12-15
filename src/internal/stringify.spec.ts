import stringify from './stringify';

describe('stringify()', () => {
  it('should parse an object { key: value } to URL query string', () => {
    expect.assertions(1);
    expect(stringify({ foo: 'bar', baz: 'qux', corge: '' })).toStrictEqual('foo=bar&baz=qux&corge=');
  });

  it('should parse an object { key: value } with array values to URL query string', () => {
    expect.assertions(1);
    expect(stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })).toStrictEqual('foo=bar&baz=qux&baz=quux&corge=');
  });
});
