import trim from '../utils/trim';

/**
 * @module general
 */
const hostname = (accountName?: string): string => (
  accountName ? trim(`https://${accountName}.vtexcommercestable.com.br`) : ''
);

export default hostname;
