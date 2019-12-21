import request from '../request';

const callAttachment = ({
  id, entity, formData, field,
}: IMasterdataAttachmentParams): Promise<IResponse> => {
  const url = `/api/dataentities/${entity}/documents/${id}/${field}/attachments`;
  const headers = new Headers({ Accept: 'application/vnd.vtex.ds.v10+json' });

  const config = {
    headers,
    body: formData,
    method: 'POST',
  };

  return request(url, config);
};

export default callAttachment;
