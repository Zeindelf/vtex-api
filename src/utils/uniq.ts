/**
 * @module utils
 */
const uniq = (arr: any[]): any[] => (
  arr.filter((value: any, index: number, self: any) => self.indexOf(value) === index)
);

export default uniq;
