import catalogRequest from './services/catalogRequest';
import trim from './utils/trim';

/**
 * @module catalog-system
 */
const searchProduct = ({
  searchTerm, orderBy, from, to, priceRange, headers, accountName, auth,
}: ISearchProductParams): Promise<{ status: number, json: IProduct[] | [], headers: Headers }> => {
  let query = (`ft=${encodeURIComponent(trim(searchTerm))}`);

  if (orderBy) query += `&O=${orderBy}`;
  if (from !== undefined && from > -1) query += `&_from=${from}`;
  if (to !== undefined && to > -1) query += `&_to=${to}`;
  if (priceRange) query += `&fq=P:[${priceRange}]`;

  return catalogRequest({
    path: '/products/search',
    query,
    headers,
    accountName,
    auth,
  });
};

export default searchProduct;
