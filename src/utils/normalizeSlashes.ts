const normalizeSlashes = (str: string): string => (
  str.replace(/(?<!https?:)\/{2,}/g, '/')
);

export default normalizeSlashes;
