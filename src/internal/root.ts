/* eslint-disable no-restricted-globals */

const root = (typeof self === 'object' && self.self === self && self)
  || (typeof global === 'object' && global.global === global && global)
  || this;

export default root;
