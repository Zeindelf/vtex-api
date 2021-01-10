import masterdataRequest from './masterdataRequest';

/**
 * Partial update of a document
 *
 * @param {string} id     The ID of the document to update
 * @param {object} data   The data that will be updated
 * @param {string} entity The entity of the document to insert
 *
 * @module masterdata
 *
 * @example
 *  const response = await partialUpdate({
 *    id: 'aa65fd51-0dab-11ea-82ee-9e3712d56bb3',
 *    data: {
 *      firstName: 'Edited',
 *      lastName: 'Edited',
 *      ...
 *    },
 *    entity: 'CL',
 *  });
 *
 * @return {promise}
 */
const partialUpdate = ({
  id, data, entity, auth, accountName, an,
}: IPartialUpdateArgs): Promise<IResponse> => (
  masterdataRequest({
    method: 'PATCH',
    id,
    data,
    entity,
    type: 'documents',
    auth,
    accountName,
    an,
  })
);

export default partialUpdate;
