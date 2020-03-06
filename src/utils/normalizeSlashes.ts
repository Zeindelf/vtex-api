const normalizeSlashes = (str: string): string => (
  str.replace(/(https?:\/\/)|(\/)+/g, '$1$2')
);

export default normalizeSlashes;
