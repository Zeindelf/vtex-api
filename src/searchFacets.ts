import catalogRequest from './services/catalogRequest';
import normalizeSlashes from './utils/normalizeSlashes';
import trimSlashes from './utils/trimSlashes';
import trim from './utils/trim';

/**
 * @description
 * Search facets by url
 * e.g.: department/category/brand?map=c,c,b
 *
 * @module catalog-system
 *
 * @param {string} pathname The same path from the website navegation
 * @param {string} map Mapping of the content type
 */
const searchFacets = ({
  pathname, map, headers, accountName, auth,
}: ISearchFacetsParams): Promise<{
  status: number, json: ISearchFacets[] | [], headers: Headers
}> => {
  const normalizedPath = trimSlashes(normalizeSlashes(trim(pathname)));

  return catalogRequest({
    path: `/facets/search/${encodeURIComponent(normalizedPath)}`,
    query: map,
    headers,
    accountName,
    auth,
  });
};

export default searchFacets;
