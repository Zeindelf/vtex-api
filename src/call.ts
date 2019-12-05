//@ts-ignore
import stringify from 'querystring/encode';

import request from './internal/request';

const call = (
  method: string,
  id: string | number | null,
  data: {},
  entity: string,
  type: string,
  headers: {} | null
): Promise<any> => {
  const mountedUrl = `/api/dataentities/${entity || 'CL'}/${type || 'search'}/${id || ''}`;
  const url = method === 'GET' ? `${mountedUrl}?${stringify(data)}` : mountedUrl;
  const defaultHeaders = new Headers();

  Object.entries({
    Accept: 'application/vnd.vtex.ds.v10+json',
    'Content-Type': 'application/json; charset=utf-8',
    ...headers,
  }).map((header) => {
    const [key, val] = header;
    return defaultHeaders.append(key, val);
  });

  const config = {
    headers: defaultHeaders,
    body: method !== 'GET' ? JSON.stringify(data) : null,
    method,
  };

  return request(url, config);
};

export default call;
