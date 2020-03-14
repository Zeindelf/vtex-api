import catalogRequest from './services/catalogRequest';
import trimSlahes from './utils/trimSlashes';

interface IPageTypeResponse extends IResponse {
  json: IPageType
}

/**
 * @module catalog-system
 */
const pageType = ({
  path, query, headers, accountName, auth,
}: IPageTypeArgs): Promise<IPageTypeResponse> => catalogRequest({
  path: `/portal/pagetype/${trimSlahes(path)}`,
  query,
  headers,
  accountName,
  auth,
});

export default pageType;
