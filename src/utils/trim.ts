/**
 * @module utils
 */
const trim = (str: any): string => (typeof str === 'string' ? str.replace(/^\s+|\s+$/g, '') : '');

export default trim;
