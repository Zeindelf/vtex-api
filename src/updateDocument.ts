import partialUpdate from './services/partialUpdate';

/**
 * Insert/update a document
 *
 * @param {string} id     The ID of the item that will be inserted/updated
 * @param {object} data   The data that will be inserted
 * @param {string} entity The entity of the document to insert
 *
 * @module masterdata
 *
 * @example
 *  const response = await updateDocument({
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
const updateDocument = ({
  id, data, entity, auth, accountName,
}: IPartialUpdateArgs): Promise<IResponse> => (
  partialUpdate({
    id, data, entity, auth, accountName,
  })
);

export default updateDocument;
