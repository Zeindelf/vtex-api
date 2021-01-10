import masterdataRequest from './services/masterdataRequest';

/**
 * Insert a document
 *
 * @param {object} data - The data that will be inserted
 * @param {string} entity - The entity of the document to insert
 *
 * @module masterdata
 *
 * @example
 *  const response = await insertDocument({
 *    data: {
 *      firstName: 'Foo',
 *      lastName: 'Bar',
 *      email: 'foo@bar.com',
 *      ...
 *    },
 *    entity: 'CL',
 *  });
 *
 * @return {promise}
 */
const insertDocument = ({
  data, entity, auth, accountName, an,
}: IInsertDeocumentArgs): Promise<IResponse> => (
  masterdataRequest({
    method: 'POST',
    data,
    entity,
    type: 'documents',
    auth,
    accountName,
    an,
  })
);

export default insertDocument;
