import catalogRequest from './services/catalogRequest';

interface IBrandResponse extends IResponse {
  json: IBrand[]
}

/**
 * @module catalog-system
 */
const getBrandById = ({
  id, query, headers, accountName, auth,
}: IGetBrandByIdArgs): Promise<IBrandResponse> => (
  catalogRequest({
    path: `/brand/${id}`,
    query,
    headers,
    accountName,
    auth,
  })
);

export default getBrandById;
