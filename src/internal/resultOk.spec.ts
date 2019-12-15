import resultOk from './resultOk';

describe('check if result ok', () => {
  it('should validate an api response', () => {
    expect.assertions(1);
    expect(resultOk([{ id: '1' }])).toBe(true);
  });

  it('should not validate an api response', () => {
    expect.assertions(1);
    expect(resultOk([])).toBe(false);
  });
});
