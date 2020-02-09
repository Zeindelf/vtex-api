/**
 * @description
 * Executes a promise in the given timeout. If the promise
 * does not finish in the given timeout, it will
 * raise a TimeoutError
 *
 * @param {number} ms The timeout in milliseconds
 * @param {Promise<any>} promise The promise which should get executed
 *
 * @returns {Promise}
 */
const requestTimeout = (
  promise: Promise<any>,
  ms: number,
): Promise<any> => {
  // Create a promise that rejects in <ms> milliseconds
  const timeout = new Promise((_, reject) => { // eslint-disable-line promise/param-names
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(`Timed out in ${ms} ms.`));
    }, ms);
  });

  // Returns a race between our timeout and the passed in promise
  return Promise.race([promise, timeout]);
};

export default requestTimeout;
