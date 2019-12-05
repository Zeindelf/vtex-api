import partialUpdate from './partialUpdate';

/**
 * Insert/update a document
 *
 * @param {string} id     The ID of the item that will be inserted/updated
 * @param {object} data   The data that will be inserted
 * @param {string} entity The entity of the document to insert
 *
 * @return {promise}
 */
const insertUpdate = (id: string | number, data: {}, entity: string): Promise<any> => (
  partialUpdate(id, data, entity)
);

export default insertUpdate;
