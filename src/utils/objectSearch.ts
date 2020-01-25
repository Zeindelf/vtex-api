/**
 * Search through an object recursively and return the first match of the key:value passed
 *
 * @param {object} object The haystack
 * @param {object} needle Key value pair that will be searched
 *
 * @return {object|boolean}
 */
const objectSearch = (object: IObj, needle: IObj): IObj | boolean => {
  let p;
  let key;
  let val;
  let tRet;

  for (p in needle) { // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(needle, p)) {
      key = p;
      val = needle[p];
    }
  }

  for (p in object) { // eslint-disable-line no-restricted-syntax
    if ({}.hasOwnProperty.call(object, p)) {
      if (p === key && object[p] === val) return object;

      if (object[p] instanceof Object) {
        tRet = objectSearch(object[p], needle);

        if (tRet) return tRet;
      }
    }
  }

  return false;
};

export default objectSearch;
