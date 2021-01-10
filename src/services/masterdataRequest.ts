import createMasterdataUrl from '../internal/createMasterdataUrl';
import createHeaders from '../internal/createHeaders';
import createAuthentication from '../internal/createAuthentication';
import request from '../request';

/**
 * @module masterdata
 */
const masterdataRequest = ({
  entity, type, id, method, data, headers, accountName, auth, an,
}: IMasterdataRequestArgs): Promise<any> => {
  const isGet = method === 'GET';
  const authentication = createAuthentication(auth);
  const url = createMasterdataUrl({
    entity, type, id, method, data, accountName, an,
  });
  const defaults = [
    'Accept: application/vnd.vtex.ds.v10+json',
    'Content-Type: application/json; charset=utf-8',
  ];

  const config = {
    method,
    body: !isGet ? JSON.stringify(data) : null,
    headers: new Headers(createHeaders(
      defaults.concat(headers || []).concat(authentication || []).filter(Boolean),
    )),
  };

  return request(url, config);
};

export default masterdataRequest;
