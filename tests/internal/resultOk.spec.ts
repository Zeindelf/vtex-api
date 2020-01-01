import resultOk from '../../src/internal/resultOk';

describe('resultOk()', () => {
  it('should validate an api response', () => {
    expect.assertions(1);
    expect(resultOk([{ id: '1' }])).toBe(true);
  });

  it('should not validate an api response', () => {
    expect.assertions(1);
    expect(resultOk([])).toBe(false);
  });
});
