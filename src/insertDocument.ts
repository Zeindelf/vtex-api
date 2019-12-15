import call from './services/call';

/**
 * Insert a document
 *
 * @param {object} data - The data that will be inserted
 * @param {string} entity - The entity of the document to insert
 *
 * @return {promise}
 */
const insertDocument = (data: {}, entity: string): Promise<any> => (
  call('POST', null, data, entity, 'documents')
);

export default insertDocument;
