import call from './call';

/**
 * Insert a document
 *
 * @param {object} data - The data that will be inserted
 * @param {string} entity - The entity of the document to insert
 *
 * @return {promise}
 */
const insert = (data: {}, entity: string): Promise<any> => (
  call('POST', null, data, entity, 'documents', null)
);

export default insert;
