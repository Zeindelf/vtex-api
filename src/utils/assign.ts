/* eslint-disable no-param-reassign */
/**
 * Analogue of Object.assign()
 *
 * @param  {Object} target  The target object to copy properties to.
 * @param  {Object} source  The source(s) to copy properties from.
 *
 * @module utils
 *
 * @return {Object}         The updated target object.
 */
const assign = (target: IObj, ...args: IObj[]) => {
  for (let i = 0, totalArgs = args.length; i < totalArgs; i += 1) {
    const source = args[i];
    const keys = Object.keys(source);

    for (let j = 0, totalKeys = keys.length; j < totalKeys; j += 1) {
      const key = keys[j];
      target[key] = source[key];
    }
  }

  return target;
};

export default assign;
