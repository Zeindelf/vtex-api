import searchProduct from './searchProduct';
import head from './utils/head';

interface IGetProductById extends IGetProductArgs {
  id: string | number
}

interface IGetProductResponse extends IResponse {
  json: IProduct | false
}

const getProductById = async ({
  id, headers, accountName, auth,
}: IGetProductById): Promise<IGetProductResponse> => {
  const { json, ...rest } = await searchProduct({
    fq: `productId:${id}`,
    headers,
    accountName,
    auth,
  });

  return { json: head(json), ...rest };
};

export default getProductById;
