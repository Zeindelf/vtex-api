import formatPrice from '../../src/helpers/formatPrice';

describe('formatPrice()', () => {
  const USCurrency = {
    thousands: ',',
    decimals: '.',
    currency: '$ ',
  };

  it('should format default currency', () => {
    expect.assertions(1);
    expect(formatPrice(39500)).toStrictEqual('R$ 395,00');
  });

  it('should format to US currency', () => {
    expect.assertions(1);
    expect(formatPrice(39500, USCurrency)).toStrictEqual('$ 395.00');
  });

  it('should format with decimals', () => {
    expect.assertions(1);
    expect(formatPrice(1543210)).toStrictEqual('R$ 15.432,10');
  });

  it('should format thousand currency without cents and thousands seprator', () => {
    expect.assertions(1);
    expect(formatPrice(654321, { thousands: '', length: 0 })).toStrictEqual('R$ 6543');
  });
});
