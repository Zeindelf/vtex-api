/* eslint-disable no-restricted-globals */

/**
 * @module utils
 */
const root = (typeof self === 'object' && self.self === self && self)
  || (typeof global === 'object' && global.global === global && global)
  || this;

export default root;
