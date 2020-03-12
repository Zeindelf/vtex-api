import request from './request';

interface IBrandResponse extends IResponse {
  json: IBrand[]
}

const getBrandById = (id: number | string): Promise<IBrandResponse> => (
  request(`/api/catalog_system/pub/brand/${id}`)
);

export default getBrandById;
