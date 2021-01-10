import parseFileds from './internal/parseFields';

import masterdataRequest from './services/masterdataRequest';

/**
 * Get document by Id
 *
 * @param {string} id     Document ID
 * @param {array} fields  The Fields that will be retrieved
 * @param {string} entity The entity where the search will be performed
 *
 * @module masterdata
 *
 * @example
 *  const response = await getDocument({
 *    id: 'aa65fd51-0dab-11ea-82ee-9e3712d56bb3',
 *    fields: ['_all'],
 *    entity: 'CL',
 *  });
 *
 * @return {promise}
 */
const getDocument = ({
  id, fields, entity, auth, accountName, an,
}: IGetDocumentArgs): Promise<IResponse> => (
  masterdataRequest({
    method: 'GET',
    id,
    data: {
      _fields: parseFileds(fields),
    },
    entity,
    type: 'documents',
    auth,
    accountName,
    an,
  })
);

export default getDocument;
