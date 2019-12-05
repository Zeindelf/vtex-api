import head from './head';

/**
 * Check if a result is valid
 *
 * @param {object} result The result that will be parsed
 *
 * @return {boolean}
 */
const resultOk = (result: object[]): boolean => (
  Boolean(result !== undefined && result.length && head(result).id !== undefined)
);

export default resultOk;
