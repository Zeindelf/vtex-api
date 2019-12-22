/* eslint-disable no-restricted-syntax */
import stringify from '../internal/stringify';
import createHeaders from '../internal/createHeaders';
import request from '../request';

const masterdataRequest = (
  method: string,
  id: string | number | null,
  data: {},
  entity: string,
  type: string,
  headers: string[] = [],
): Promise<IResponse> => {
  const mountedUrl = `/api/dataentities/${entity || 'CL'}/${type || 'search'}/${id || ''}`;
  const url = method === 'GET' ? `${mountedUrl}?${stringify(data)}` : mountedUrl;

  const config = {
    method,
    body: method !== 'GET' ? JSON.stringify(data) : null,
    headers: new Headers(createHeaders([
      'Accept: application/vnd.vtex.ds.v10+json',
      'Content-Type: application/json; charset=utf-8',
      ...headers,
    ])),
  };

  return request(url, config);
};

export default masterdataRequest;
