import request from '../request';

const callAttachment = (
  id: string | number,
  data: FormData,
  entity: string,
  field: string,
): Promise<IResponse> => {
  const url = `/api/dataentities/${entity}/documents/${id}/${field}/attachments`;
  const headers = new Headers({ Accept: 'application/vnd.vtex.ds.v10+json' });

  const config = {
    headers,
    body: data,
    method: 'POST',
  };

  return request(url, config);
};

export default callAttachment;
