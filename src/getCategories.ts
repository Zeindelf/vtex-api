import request from './request';

interface ICategoryTreeResponse extends IResponse {
  json: ICategoryTree[]
}

const getCategories = (treeLevel: number): Promise<ICategoryTreeResponse> => (
  request(`/api/catalog_system/pub/category/tree/${treeLevel}`)
);

export default getCategories;
