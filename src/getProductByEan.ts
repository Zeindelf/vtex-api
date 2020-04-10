import searchProduct from './searchProduct';
import head from './utils/head';

interface IGetProductByEan extends IGetProductsByArgs {
  id: string | number
}

/**
 * @module product
 */
const getProductByEan = async ({
  id, ...rest
}: IGetProductByEan): Promise<IGetProductResponse> => {
  const { json, ...restRes } = await searchProduct({
    fq: `alternateIds_Ean:${id}`,
    ...rest,
  });

  return { json: head(json), ...restRes };
};

export default getProductByEan;
