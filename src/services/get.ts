import parseFileds from '../internal/parseFields';

import masterdataRequest from './masterdataRequest';

/**
 * Get a master data document
 *
 * @param {string} id - The ID of the document to get
 * @param {array} [fields=["id"]] - A list of fields to retrieve,
 *   default values will always be retrieved
 * @param {string} entity - The entity of the document to get
 *
 * @return {promise}
 */
const get = (id: string | number, fields: [], entity: string): Promise<IResponse> => {
  const params = parseFileds(fields);

  return masterdataRequest('get', id, params, entity, 'documents');
};

export default get;
