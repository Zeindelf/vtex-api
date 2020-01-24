import { formatPrice } from '../../src/helpers';

describe('formatPrice()', () => {
  it('should format default currency', () => {
    expect.assertions(1);

    expect(formatPrice(39500)).toStrictEqual('R$ 395,00');
  });

  it('should format to US currency', () => {
    expect.assertions(1);

    const usFormat = {
      thousands: ',',
      decimals: '.',
      currency: '$ ',
    };

    expect(formatPrice(39500, usFormat)).toStrictEqual('$ 395.00');
  });

  it('should format thousand currency without cents', () => {
    expect.assertions(1);

    expect(formatPrice(100000, { length: 0 })).toStrictEqual('R$ 1.000');
  });
});
