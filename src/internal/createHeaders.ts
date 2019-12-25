import trim from '../utils/trim';

/**
 * @module general
 */
const createHeaders = (headers?: string[]) => {
  if (!headers) return {};

  const result: IObj = {};

  for (let i = 0, len = headers.length; i < len; i += 1) {
    const row = headers[i];
    const index = row.indexOf(':');
    const key = trim(row.slice(0, index));
    const value = trim(row.slice(index + 1));

    if (typeof result[key] === 'undefined') {
      result[key] = value;
    } else if (Array.isArray(result[key])) {
      result[key].push(value);
    } else {
      result[key] = [result[key], value];
    }
  }

  return result;
};

export default createHeaders;
