/* eslint-disable no-restricted-syntax */
import stringify from '../internal/stringify';
import parseHeaders from '../internal/createHeaders';
import request from '../request';

const call = (
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
    headers: new Headers(parseHeaders([
      'Accept: application/vnd.vtex.ds.v10+json',
      'Content-Type: application/json; charset=utf-8',
      ...headers,
    ])),
  };

  return request(url, config);
};

export default call;
