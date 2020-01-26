/**
 * Zero padding number
 *
 * @param  {integer} number   Number to format
 * @param  {integer} [size=2] Digits limit
 *
 * @return {string}           Formatted num with zero padding
 */
const pad = (number: number, size = 2): string => {
  let stringNum = String(number);

  while (stringNum.length < size) {
    stringNum = `0${stringNum}`;
  }

  return stringNum;
};

export default pad;
