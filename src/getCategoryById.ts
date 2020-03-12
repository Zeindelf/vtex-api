import request from './request';

interface ICategoryByIdResponse extends IResponse {
  json: ICategoryById
}

const getCategoryById = (id: string | number): Promise<ICategoryByIdResponse> => (
  request(`/api/catalog_system/pub/category/${id}`)
);

export default getCategoryById;
