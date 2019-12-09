/* eslint-disable no-restricted-syntax */

import stringify from '../internal/stringify';
import request from '../internal/request';

type Headers = {
  [key: string]: any;
};

const call = (
  method: string,
  id: string | number | null,
  data: {},
  entity: string,
  type: string,
  headersOpts: Headers | null,
): Promise<any> => {
  const mountedUrl = `/api/dataentities/${entity || 'CL'}/${type || 'search'}/${id || ''}`;
  const url = method === 'GET' ? `${mountedUrl}?${stringify(data)}` : mountedUrl;
  const headers = new Headers();

  headers.append('Accept', 'application/vnd.vtex.ds.v10+json');
  headers.append('Content-Type', 'application/json; charset=utf-8');

  for (const key in headersOpts) {
    if ({}.hasOwnProperty.call(headersOpts, key)) {
      // @ts-ignore
      headers.append(key, headersOpts[key]);
    }
  }

  const config = {
    headers,
    method,
    body: method !== 'GET' ? JSON.stringify(data) : null,
  };

  return request(url, config);
};

export default call;
