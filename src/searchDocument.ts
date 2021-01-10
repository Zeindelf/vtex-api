import parseFields from './internal/parseFields';

import masterdataRequest from './services/masterdataRequest';

/**
 * Performs a single search
 *
 * @param {object} search         The search parameters
 * @param {string} entity         The entity where the search will be performed
 * @param {array} fields          The Fields that will be retrieved
 * @param {object} [filters=null] The filters args. Accept: _where, _keyword and _sort
 * @param {number} [offset=0]     The search offset
 * @param {number} [limit=49]     The search limit
 *
 * @module masterdata
 *
 * @example
 *  const response = await searchDocument({
 *    search: {
 *      email: 'foo@email.com',
 *      ...
 *    },
 *    entity: 'CL',
 *    fields: ['_all'],
 *    filters: {
 *      _sort: 'email ASC',
 *      _where: 'firstName is null',
 *      _keyword: '*',
 *    },
 *  });
 *
 * @return {promise}
 */
const searchDocument = ({
  search, entity, fields, filters, offset = 0, limit = 10, auth, accountName, an,
}: ISearchDocumentArgs): Promise<IResponse> => {
  // Needs refactor to _from/_to args when available
  const headers = [`REST-Range: resources=${offset}-${limit + offset}`];

  const args = {
    ...search,
    ...filters,
    _fields: parseFields(fields),
  };

  return masterdataRequest({
    entity,
    type: 'search',
    method: 'GET',
    data: args,
    headers,
    auth,
    accountName,
    an,
  });
};

export default searchDocument;
