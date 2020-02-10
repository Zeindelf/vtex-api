import sanitizeSearchTerm from '../../src/helpers/sanitizeSearchTerm';

describe('sanitizeSearchTerm()', () => {
  it('should remove \'&\' char', () => {
    expect.assertions(1);
    expect(sanitizeSearchTerm('&television&')).toStrictEqual('television');
  });

  it('should remove \'?\' char', () => {
    expect.assertions(1);
    expect(sanitizeSearchTerm('tele?vision?')).toStrictEqual('television');
  });

  it('should remove \'[ ]\' chars', () => {
    expect.assertions(1);
    expect(sanitizeSearchTerm('[television]')).toStrictEqual('television');
  });

  it('should remove \'=\' char', () => {
    expect.assertions(1);
    expect(sanitizeSearchTerm('tele=vision')).toStrictEqual('television');
  });

  it('should remove \'%\' char', () => {
    expect.assertions(1);
    expect(sanitizeSearchTerm('%tele%vision')).toStrictEqual('television');
  });

  it('should remove whitespace', () => {
    expect.assertions(1);
    expect(sanitizeSearchTerm(' television   ')).toStrictEqual('television');
  });

  it('should remove all mixed chars', () => {
    expect.assertions(1);
    expect(sanitizeSearchTerm(' ?=[television]  %  &')).toStrictEqual('television');
  });
});
