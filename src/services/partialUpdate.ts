import call from './call';

/**
 * Partial update of a document
 *
 * @param {string} id     The ID of the document to update
 * @param {object} data   The data that will be updated
 * @param {string} entity The entity of the document to insert
 *
 * @return {promise}
 */
const partialUpdate = (id: string | number, data: {}, entity: string): Promise<any> => (
  call('PATCH', id, data, entity, 'documents', null)
);

export default partialUpdate;
