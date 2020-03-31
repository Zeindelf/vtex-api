/**
 * @module utils
 */
const trimAmpersands = (str: string): string => str
  .split('&')
  .filter(Boolean)
  .join('&');

export default trimAmpersands;
