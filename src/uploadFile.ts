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
const uploadFile = ({
  id, entity, file, field,
}: IUploadFile): Promise<IResponse> => {
  const formData = new FormData();
  formData.append('Filename', file.name);
  formData.append('Filedata', file);

  return callAttachment({
    id, entity, formData, field,
  });
};

export default uploadFile;
