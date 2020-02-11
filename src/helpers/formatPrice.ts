type FormatArgs = {
  thousands?: string,
  decimals?: string,
  length?: number,
  currency?: string,
};

/**
 * @description
 * Formats Vtex price
 *
 * @param {number} value            The number to format
 * @param {string} [thousands='.']  The thousands delimiter
 * @param {string} [decimals=',']   The decimal delimiter
 * @param {number} [length=2]       The length of decimal
 * @param {string} [currency='R$ '] Set currency
 *
 * @returns {string} The formatted price
 */
const formatPrice = (value: number, {
  thousands = '.', decimals = ',', length = 2, currency = 'R$ ',
}: FormatArgs = {}): string => {
  const regex = `\\d(?=(\\d{${3}})+${length > 0 ? '\\D' : '$'})`;
  const val = (value / 100).toFixed(Math.max(0, ~~length)); // eslint-disable-line no-bitwise

  return currency + val.replace('.', decimals).replace(new RegExp(regex, 'g'), `$&${thousands}`);
};

export default formatPrice;
