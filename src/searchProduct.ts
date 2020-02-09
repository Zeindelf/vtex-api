import catalogRequest from './services/catalogRequest';
import trim from './utils/trim';

/**
 * @module catalog-system
 */
const searchProduct = ({
  searchTerm, orderBy, from, to, priceRange, headers, accountName, auth,
}: ISearchProductParams): Promise<{
  status: number, json: IProduct, headers: Headers
}> => {
  const query = (`
    ft=${encodeURIComponent(trim(searchTerm))}
    ${orderBy && `&O=${orderBy}`}
    ${(from && from > -1) && `&_from=${from}`}
    ${(to && to > -1) && `&_to=${to}`}
    ${priceRange && `&fq=P:[${priceRange}]`}
  `);

  return catalogRequest({
    path: '/products/search',
    query,
    headers,
    accountName,
    auth,
  });
};

export default searchProduct;
