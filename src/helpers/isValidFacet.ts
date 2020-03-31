const isValidFacet = (facet: string): boolean => {
  const regex = new RegExp(/[+/]/);
  return !regex.test(facet);
};

export default isValidFacet;
