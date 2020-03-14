import catalogRequest from './services/catalogRequest';

interface ICategoryByIdResponse extends IResponse {
  json: ICategoryById
}

/**
 * @module catalog-system
 */
const getCategoryById = ({
  id, query, headers, accountName, auth,
}: IGetCategoryByIdArgs): Promise<ICategoryByIdResponse> => (
  catalogRequest({
    path: `/category/${id}`,
    query,
    headers,
    accountName,
    auth,
  })
);

export default getCategoryById;
