import searchProduct from './searchProduct';
import head from './utils/head';

interface IGetProductById extends IGetProductParams {
  id: string | number
}

const getProductById = async ({
  id, headers, accountName, auth,
}: IGetProductById): Promise<{
  status: number, json: IProduct | false, headers: Headers
}> => {
  const { json, ...rest } = await searchProduct({
    fq: `productId:${id}`,
    headers,
    accountName,
    auth,
  });

  return { json: head(json), ...rest };
};

export default getProductById;
