import searchProduct from './searchProduct';

interface IGetProductsById extends IGetProductArgs {
  ids: any[]
}

interface IGetProductsResponse extends IResponse {
  json: IProduct[] | []
}

const getProductsById = async ({
  ids, headers, accountName, auth,
}: IGetProductsById): Promise<IGetProductsResponse> => (
  searchProduct({
    fq: ids.map((id) => `productId:${id}`),
    headers,
    accountName,
    auth,
  })
);

export default getProductsById;
