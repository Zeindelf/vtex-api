import request from '../request';
import createCatalogUrl from '../internal/createCatalogUrl';
import createHeaders from '../internal/createHeaders';
import createAuthentication from '../internal/createAuthentication';

/**
 * @module catalog-system
 */
const catalogRequest = ({
  path, query, headers, accountName, auth,
}: ICatalogRequestArgs): Promise<IResponse> => {
  const authentication = createAuthentication(auth);
  const url = createCatalogUrl({
    path, query, accountName,
  });
  const defaults: string[] = [];

  const config = {
    headers: new Headers(createHeaders(
      defaults.concat(headers || []).concat(authentication || []).filter(Boolean),
    )),
  };

  return request(url, config);
};

export default catalogRequest;
