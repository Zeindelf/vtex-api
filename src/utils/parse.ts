/* eslint-disable no-param-reassign */
const hasOwnProperty = (obj: IObj, prop: string) => (
  Object.prototype.hasOwnProperty.call(obj, prop)
);

/**
 * @module utils
 */
const decode = (qs: string | string[], sep = '&', eq = '=') => {
  const obj: IObj = {};

  if (typeof qs !== 'string' || qs.length === 0) return obj;

  const maxKeys = 1000;
  const regexp = /\+/g;
  qs = qs.split(sep);

  let len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (let i = 0; i < len; ++i) { // eslint-disable-line no-plusplus
    const x = qs[i].replace(regexp, '%20');
    const idx = x.indexOf(eq);
    let kstr;
    let vstr;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    const k = decodeURIComponent(kstr);
    const v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) obj[k] = v;
    else if (Array.isArray(obj[k])) obj[k].push(v);
    else obj[k] = [obj[k], v];
  }

  return obj;
};

export default decode;
