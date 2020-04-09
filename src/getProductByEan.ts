import searchProduct from './searchProduct';
import head from './utils/head';

interface IGetProductByEan extends IGetProductArgs {
  id: string | number
}

/**
 * @module product
 */
const getProductByEan = async ({
  id, headers, accountName, auth,
}: IGetProductByEan): Promise<IGetProductResponse> => {
  const { json, ...rest } = await searchProduct({
    fq: `alternateIds_Ean:${id}`,
    headers,
    accountName,
    auth,
  });

  return { json: head(json), ...rest };
};

export default getProductByEan;
