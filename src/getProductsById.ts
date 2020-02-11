import searchProduct from './searchProduct';

interface IGetProductsById extends IGetProductParams {
  ids: any[]
}

const getProductsById = async ({
  ids, headers, accountName, auth,
}: IGetProductsById): Promise<{
  status: number, json: IProduct[] | [], headers: Headers
}> => (
  searchProduct({
    fq: ids.map((id) => `productId:${id}`),
    headers,
    accountName,
    auth,
  })
);

export default getProductsById;
