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
const partialUpdate = (id: string | number, data: {}, entity: string): Promise<IResponse> => (
  call('PATCH', id, data, entity, 'documents')
);

export default partialUpdate;
