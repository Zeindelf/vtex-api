/**
 * Get the percentage of a discount
 *
 * @param {number} oldPrice   Original price. Can be formatted price or a integer value.
 * @param {number} newPrice   Price with discount. Can be formatted price or a integer value.
 * @param {number} [length=0] Number of decimals
 *
 * @returns {bollean|number}
 *
 * @example
 *  getPercentage(17990, 14900, 2); // 17.18 (17.18% OFF)
 */
const getPercentage = (oldPrice: number, newPrice: number, length = 0) => {
  if (oldPrice < newPrice || oldPrice < 1 || newPrice < 1) {
    return false;
  }

  const percent = (newPrice / oldPrice) * 100 - 100;
  const percentage = Math.abs(+percent.toFixed(length));

  return percentage;
};

export default getPercentage;
