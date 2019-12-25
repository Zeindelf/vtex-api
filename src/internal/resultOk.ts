import head from '../utils/head';

/**
 * Check if a result is valid
 *
 * @param {object} result The result that will be parsed
 *
 * @module masterdata
 *
 * @return {boolean}
 */
const resultOk = (result: object[]): boolean => (
  !!(result !== undefined && result.length && head(result).id !== undefined)
);

export default resultOk;
