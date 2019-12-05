//@ts-ignore
import stringify from 'querystring/encode';

import request from './internal/request';

type Headers = {
  [key: string]: any;
};

const call = (
  method: string,
  id: string | number | null,
  data: {},
  entity: string,
  type: string,
  headersOpts: Headers | null
): Promise<any> => {
  const mountedUrl = `/api/dataentities/${entity || 'CL'}/${type || 'search'}/${id || ''}`;
  const url = method === 'GET' ? `${mountedUrl}?${stringify(data)}` : mountedUrl;
  const headers = new Headers();
  const mergedHeaders = Object.assign({},{
    Accept: 'application/vnd.vtex.ds.v10+json',
    'Content-Type': 'application/json; charset=utf-8',
  }, headersOpts);

  for (const key in mergedHeaders) {
    headers.append(key, mergedHeaders[key]);
  }

  const config = {
    headers,
    method,
    body: method !== 'GET' ? JSON.stringify(data) : null,
  };

  return request(url, config);
};

export default call;
