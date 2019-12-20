/* eslint-disable no-param-reassign, no-underscore-dangle */
import parseFileds from './internal/parseFields';

import call from './services/call';

/**
 * Performs a single search
 *
 * @param {object} params         The search parameters
 * @param {array} fields          The Fields that will be retrieved
 * @param {string} [entity='CL']  The entity where the search will be performed
 * @param {number} [limit=49]     The search limit
 * @param {number} [offset=0]     The search offset
 * @param {object} [filters=null] The filters params. Accept: _where, _keyword and _sort
 *
 * @return {promise}
 */
const searchDocument = (
  params: IObj,
  fields: any[],
  entity: string,
  limit = 49,
  offset = 0,
  filters: IFilters | null,
): Promise<IResponse> => {
  const headers = [`REST-Range: resources=${offset}-${limit + offset}`];

  const mergedParams = Object.assign(params, filters, {
    _fields: parseFileds(fields),
  });

  return call('GET', null, mergedParams, entity, 'search', headers);
};

export default searchDocument;
