import trim from '../utils/trim';

const sanitizeSearchTerm = (searchTerm: string): string => {
  const regex = /[?&[\]=%]/gi;

  return trim(searchTerm.replace(regex, ''));
};

export default sanitizeSearchTerm;
