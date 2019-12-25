/* eslint-disable no-restricted-globals */

/**
 * @module utils
 */
const stringifyPrimitive = (v: any) => {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

const stringify = (obj: IObj, sep = '&', eq = '=', name = '') => {
  if (typeof obj === 'object') {
    return Object.keys(obj).map((k) => {
      const ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (Array.isArray(obj[k])) {
        return obj[k].map((v: any) => ks + encodeURIComponent(stringifyPrimitive(v))).join(sep);
      }

      return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    }).filter(Boolean).join(sep);
  }

  if (!name) return '';

  return encodeURIComponent(stringifyPrimitive(name))
    + eq
    + encodeURIComponent(stringifyPrimitive(obj));
};

export default stringify;
