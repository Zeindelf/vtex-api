const isSearchTerm = (searchTerm: string) => {
  const regex = new RegExp(/[?&[\]=%]/);

  return !regex.test(searchTerm);
};

export default isSearchTerm;
