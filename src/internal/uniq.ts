const uniq = (arr: any[]): any[] => (
  arr.filter((value: any, index: number, self: any): boolean => self.indexOf(value) === index)
);

export default uniq;
