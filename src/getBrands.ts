import catalogRequest from './services/catalogRequest';

interface IBrandResponse extends IResponse {
  json: IBrand[]
}

/**
 * @module catalog-system
 */
const getBrands = ({
  query, headers, accountName, auth,
}: IGetBrandsArgs = {}): Promise<IBrandResponse> => (
  catalogRequest({
    path: '/brand/list',
    query,
    headers,
    accountName,
    auth,
  })
);

export default getBrands;
