import isObject from './internal/isObject';
import parseFileds from './internal/parseFields';

import call from './call';

type Filters = {
  _where?: string;
  _keyword?: string;
  _sort?: string;
};

type Params = {
  [key: string]: any;
};

const { hasOwnProperty } = Object.prototype;

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
const search = (
  params: Params,
  fields: [],
  entity: string,
  limit = 49,
  offset = 0,
  filters: Filters,
): Promise<any> => {
  const headers = { 'REST-Range': `resources=${offset}-${limit + offset}` };

  params._fields = parseFileds(fields);

  if (isObject(filters)) {
    if (hasOwnProperty.call(filters, '_where')) {
      params._where = filters._where;
    }

    if (hasOwnProperty.call(filters, '_keyword')) {
      params._keyword = filters._keyword;
    }

    if (hasOwnProperty.call(filters, '_sort')) {
      params._sort = filters._sort;
    }
  }

  return call('GET', null, params, entity, 'search', headers);
};

export default search;
