import attachmentRequest from './services/attachmentRequest';

/**
 * Insert file to a document
 *
 * @param {string} id     The ID of the document to insert
 * @param {string} entity The entity of the document to insert
 * @param {string} field  Document file field name
 * @param {object} file   Parsed file
 *
 * @module masterdata
 *
 * @example
 *  const { json } = await insertDocument({
 *    entity: 'CF',
 *    data: {
 *      email: 'johh@doe.com',
 *      ...
 *    },
 *  });
 *
 *  const response = await uploadFile({
 *    id: json.DocumentId,
 *    entity: 'CF',
 *    file: myFile,
 *    field: 'file',
 *  });
 *
 * @return {promise}
 */
const uploadFile = ({
  id, entity, file, field, auth, accountName,
}: IUploadFileArgs): Promise<IResponse> => {
  const formData = new FormData();
  formData.append('Filename', file.name);
  formData.append('Filedata', file);

  return attachmentRequest({
    id, entity, formData, field, auth, accountName,
  });
};

export default uploadFile;
