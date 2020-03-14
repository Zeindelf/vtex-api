import catalogRequest from './services/catalogRequest';

interface ICategoryTreeResponse extends IResponse {
  json: ICategoryTree[]
}

/**
 * @module catalog-system
 */
const getCategories = ({
  treeLevel, query, headers, accountName, auth,
}: IGetCategoriesArgs): Promise<ICategoryTreeResponse> => (
  catalogRequest({
    path: `/category/tree/${treeLevel}`,
    query,
    headers,
    accountName,
    auth,
  })
);

export default getCategories;
