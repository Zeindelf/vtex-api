type Format = {
  thousands?: string,
  decimals?: string,
  length?: number,
  currency?: string,
};

/**
 * Formats Vtex price
 *
 * @param {integer} value           The number to format
 * @param {string}  [thousands='.']  The thousands delimiter
 * @param {string}  [decimals=',']   The decimal delimiter
 * @param {integer} [length=2]       The length of decimal
 * @param {string}  [currency='R$ '] Set currency
 *
 * @return {string} The formatted price
 */
const formatPrice = (value: number, {
  thousands = '.', decimals = ',', length = 2, currency = 'R$ ',
}: Format = {}): string => {
  const regex = `\\d(?=(\\d{${3}})+${length > 0 ? '\\D' : '$'})`;
  const val = (value / 100).toFixed(Math.max(0, ~~length)); // eslint-disable-line no-bitwise

  return currency + val.replace('.', decimals).replace(new RegExp(regex, 'g'), `$&${thousands}`);
};

export default formatPrice;
