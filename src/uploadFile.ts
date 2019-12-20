import callAttachment from './services/callAttachment';

/**
 * Insert file to a document
 *
 * @param {string} id     The ID of the document to onsert
 * @param {string} entity The entity of the document to insert
 * @param {string} field  Document file field
 * @param {object} file   Parsed file
 *
 * @return {promise}
 */
const uploadFile = (
  id: string | number,
  entity: string,
  field: string,
  file: File,
): Promise<IResponse> => {
  const form = new FormData();
  form.append('Filename', file.name);
  form.append('Filedata', file);

  return callAttachment(id, form, entity, field);
};

export default uploadFile;
