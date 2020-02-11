import catalogRequest from './services/catalogRequest';
import normalizeSlashes from './utils/normalizeSlashes';
import trimSlashes from './utils/trimSlashes';
import trim from './utils/trim';

interface ISearchFacetsResponse extends IResponse {
  json: ISearchFacets[] | []
}

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
}: ISearchFacetsArgs): Promise<ISearchFacetsResponse> => {
  const normalizedPath = trimSlashes(normalizeSlashes(trim(pathname)));

  return catalogRequest({
    path: `/facets/search/${normalizedPath}`,
    query: `map=${map}`,
    headers,
    accountName,
    auth,
  });
};

export default searchFacets;
