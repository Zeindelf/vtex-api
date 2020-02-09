import catalogRequest from './services/catalogRequest';
import trimSlahes from './utils/trimSlashes';

/**
 * @module catalog-system
 */
const pageType = ({
  path, query, headers, accountName, auth,
}: IPageTypeParams): Promise<{
  status: number, json: IPageTypeResponse, headers: Headers
}> => catalogRequest({
  path: `/portal/pagetype/${trimSlahes(path)}`,
  query,
  headers,
  accountName,
  auth,
});

export default pageType;
