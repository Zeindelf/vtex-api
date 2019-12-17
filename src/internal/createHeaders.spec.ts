import createHeaders from './createHeaders';

describe('createHeaders()', () => {
  it('array[string] to headers { key: value }', () => {
    expect.assertions(1);

    const input = [
      'Content-Type: application/json; charset=utf-8',
      'Cookie: 9b88ad8ab86f44e49f69462592c33289',
    ];

    const output = {
      'Content-Type': 'application/json; charset=utf-8',
      Cookie: '9b88ad8ab86f44e49f69462592c33289',
    };

    expect(createHeaders(input)).toStrictEqual(output);
  });

  it('duplicate array[string] to headers { key: value[] }', () => {
    expect.assertions(1);

    const input = [
      'Content-Type: application/json; charset=utf-8',
      'Cookie: 9b88ad8ab86f44e49f69462592c33289',
      'X-Custom-Header: 11g27iz-0',
      'X-Custom-Header: zmrhcc-1',
    ];

    const output = {
      'Content-Type': 'application/json; charset=utf-8',
      Cookie: '9b88ad8ab86f44e49f69462592c33289',
      'X-Custom-Header': ['11g27iz-0', 'zmrhcc-1'],
    };

    expect(createHeaders(input)).toStrictEqual(output);
  });
});
