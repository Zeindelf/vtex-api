import request from './request';

interface IBrandResponse extends IResponse {
  json: IBrand[]
}

const getBrands = (): Promise<IBrandResponse> => (
  request('/api/catalog_system/pub/brand/list')
);

export default getBrands;
