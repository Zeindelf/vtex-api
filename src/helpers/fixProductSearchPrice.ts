/**
 * @description
 * Formats price from Vtex API `/api/catalog_system/pub/products/search/`
 * to a correct `formatPrice` method
 *
 * @param  {number} val Value to convert
 * @returns {number}
 */
const fixProductSearchPrice = (val: number): number => (
  val && +val.toFixed(2).split('.').join('')
);

export default fixProductSearchPrice;
